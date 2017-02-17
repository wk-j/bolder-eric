function replaceHeader() {
    var entries = document.querySelectorAll("div.entry-content");
    for(let entry of entries) {
            entry.style.fontWeight = 400;
            entry.style.color = "#222";
    }
    var comments = document.querySelector(".commentlist");
    comments.style.fontWeight = 400;
    comments.style.color = "#222";
}

document.addEventListener('DOMNodeInserted', replaceHeader);
document.addEventListener('DOMContentLoaded', replaceHeader);

chrome.runtime.onMessage.addListener(function (message, sender, callback) { 

});