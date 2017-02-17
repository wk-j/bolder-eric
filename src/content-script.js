function bolder(entries) {
    for(let entry of entries) {
        if(entry.style) {
            entry.style.fontWeight = 400;
            entry.style.color = "#222";
        }
    }
}

function replaceHeader() {
    var content = document.querySelectorAll("div.entry-content");
    var summary = document.querySelectorAll("div.entry-summary");
    var comment = document.querySelectorAll(".commentlist");

    var all = [...content, ...summary, ...comment];
    bolder(all);

    console.log("replace ...");
}

document.addEventListener('DOMNodeInserted', replaceHeader);
document.addEventListener('DOMContentLoaded', replaceHeader);

chrome.runtime.onMessage.addListener(function (message, sender, callback) { 

});