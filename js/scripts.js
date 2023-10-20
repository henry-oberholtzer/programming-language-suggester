// Business Logic


// // Question Retrieval
const uR = document.querySelector('input[name="uR"]:checked').value;
const oE = document.querySelector('input[name="oE"]:checked').value;
const sD = document.querySelector('input[name="sD"]:checked').value;
const fB = document.querySelector('input[name="uR"]:checked').value;
const mA = document.querySelector('input[name="mA"]:checked').value;
console.log(uR);
console.log(oE);

function suggestLanguage(e) {
    e.preventDefault();
    let resultText = "";
    if (uR === "r") {
        if (oE === "o") {
            resultText = "Ruby";
        } else if (sD === "s") {
            resultText = "Go";
        } resultText = "Python"
    } else if (oE === "e") {
        resultText = "Rust";
    } else if (sD === "d") {
        resultText = "JavaScript";
    } else if (fB === "f") {
        resultText = "JavaScript";
    } else if (mA === "m") {
        resultText = "C#";
    } resultText = "Swift";
    document.getElementById("resultText").innerText = resultText;
}

// UI Logic

window.addEventListener("load", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", suggestLanguage);
});