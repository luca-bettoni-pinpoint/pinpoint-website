// Function to dynamically load a CSS file
function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

// Function to dynamically load a JS file
function loadJS(url) {
    const script = document.createElement("script");
    script.src = url;
    script.async = false; // to maintain execution order
    document.head.appendChild(script);
}

loadCSS("https://cdn.jsdelivr.net/gh/luca-bettoni-pinpoint/pinpoint-website@main/cross-style.css");
loadJS("https://cdn.jsdelivr.net/gh/luca-bettoni-pinpoint/pinpoint-website@main/language-manager.js");


