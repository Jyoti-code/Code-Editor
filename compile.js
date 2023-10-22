//Copy button for html
const copyButton = document.getElementById("copy-button");
const textToCopy = document.getElementById("html-editor");
copyButton.addEventListener("click", function() {
    textToCopy.select();
    document.execCommand("copy");
    textToCopy.setSelectionRange(0, 0);
    // alert("Text has been copied to the clipboard.");
});

//Copy button for css
const copyButtonCss = document.getElementById("copy-button-css");
const cssToCopy = document.getElementById("css-editor");
copyButtonCss.addEventListener("click", function() {
    cssToCopy.select();
    document.execCommand("copy");
    cssToCopy.setSelectionRange(0, 0);
    // alert("Text has been copied to the clipboard.");
});

//Copy button for js
const copyButtonJs = document.getElementById("copy-button-js");
const jsToCopy = document.getElementById("js-editor");
copyButtonJs.addEventListener("click", function() {
    jsToCopy.select();
    document.execCommand("copy");
    jsToCopy.setSelectionRange(0, 0);
    // alert("Text has been copied to the clipboard.");
});

var _html = document.getElementById('html-editor');
var _css = document.getElementById('css-editor');
var _js = document.getElementById('js-editor');
var preview_panel = document.getElementById('preview-panel').contentWindow.document;
var _compile = document.getElementById('execute_code');
var saveButton = document.getElementById("save-button");
var saveButtonCss = document.getElementById("save-button-css");
var saveButtonJs = document.getElementById("save-button-js");

var lockButtonHtml = document.getElementById("lock-button-html");
var lockButtonCss = document.getElementById("lock-button-css");
var lockButtonJs = document.getElementById("lock-button-js");

let isLockedHtml = false;
let isLockedCss = false;
let isLockedJs = false;

function toggleLockHtml() {
    isLockedHtml = !isLockedHtml;
    _html.disabled = isLockedHtml;
    lockButtonHtml.textContent = isLockedHtml ? "Unlock" : "Lock";
}

lockButtonHtml.addEventListener("click", toggleLockHtml);

// Function to toggle lock/unlock state for CSS editor
function toggleLockCss() {
    isLockedCss = !isLockedCss;
    _css.disabled = isLockedCss;
    lockButtonCss.textContent = isLockedCss ? "Unlock" : "Lock";
}

lockButtonCss.addEventListener("click", toggleLockCss);

// Function to toggle lock/unlock state for JavaScript editor
function toggleLockJs() {
    isLockedJs = !isLockedJs;
    _js.disabled = isLockedJs;
    lockButtonJs.textContent = isLockedJs ? "Unlock" : "Lock";
}

lockButtonJs.addEventListener("click", toggleLockJs);

// Load saved code when the page loads
let savedCodeHtml = localStorage.getItem("savedCodeHtml");
let savedCodeCss = localStorage.getItem("savedCodeCss");
let savedCodeJs = localStorage.getItem("savedCodeJs");

if (savedCodeHtml) {
    _html.value = savedCodeHtml;
}
if (savedCodeCss) {
    _css.value = savedCodeCss;
}
if (savedCodeJs) {
    _js.value = savedCodeJs;
}

_compile.addEventListener("click", function () {
    if (savedCodeHtml) {
        preview_panel.open();
        preview_panel.writeln(`<style>${savedCodeCss}</style>`);
        preview_panel.writeln(`${savedCodeHtml}`);
        preview_panel.writeln(`<script>${savedCodeJs}</script>`);
        preview_panel.close();
    }
});

saveButton.addEventListener("click", function () {
    // Get the code from the HTML editor
    savedCodeHtml = _html.value;

    // Save the code to localStorage
    localStorage.setItem("savedCodeHtml", savedCodeHtml);
});

saveButtonCss.addEventListener("click", function () {
    // Get the code from the CSS editor
    savedCodeCss = _css.value;

    // Save the code to localStorage
    localStorage.setItem("savedCodeCss", savedCodeCss);
});

saveButtonJs.addEventListener("click", function () {
    // Get the code from the JavaScript editor
    savedCodeJs = _js.value;

    // Save the code to localStorage
    localStorage.setItem("savedCodeJs", savedCodeJs);
});





