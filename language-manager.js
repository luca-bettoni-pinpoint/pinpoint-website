import i18next from 'https://deno.land/x/i18next/index.js';
window.i18next = i18next; // Salva i18next nell'oggetto globale window

async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function initializeI18next() {
    let _enJsonUrl = "https://raw.githubusercontent.com/luca-bettoni-pinpoint/pinpoint-website-translations/main/pinpoint-web-en.json";
    let _itJsonUrl = "https://raw.githubusercontent.com/luca-bettoni-pinpoint/pinpoint-website-translations/main/pinpoint-web-it.json";
    let _enData = await loadJSON(_enJsonUrl);
    let _itData = await loadJSON(_itJsonUrl);

    window.i18next.init({
        lng: 'en', // Imposta la lingua predefinita su 'en' per inglese
        debug: true,
        resources: {
            en: {
                translation: _enData
            },
            it: {
                translation: _itData
            }
        }
    }).then(function (t) {
        updateContent();
        document.getElementById('btnEn').addEventListener('click', () => {
            i18next.changeLanguage('en', updateContent);
        });

        document.getElementById('btnIt').addEventListener('click', () => {
            i18next.changeLanguage('it', updateContent);
        });
    });
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
    });
}

// Inizializza i18next
initializeI18next();