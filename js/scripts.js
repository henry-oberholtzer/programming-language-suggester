// Business Logic


// // Question Retrieval

function suggestLanguage(e) {
    e.preventDefault();

    const uR = document.querySelector("input[name='uR']:checked").value;
    const oE = document.querySelector("input[name='oE']:checked").value;
    const sD = document.querySelector("input[name='sD']:checked").value;
    const fB = document.querySelector("input[name='uR']:checked").value;
    const mA = document.querySelector("input[name='mA']:checked").value;

    function questionBranches(uR, oE, mA, sD, fB) {
        if (uR === "r") {
            if (oE === "o") {
                return "Ruby";
            } else if (sD === "s") {
                return "Go";
            } return "Python"
        } else if (oE === "e") {
            return "Rust";
        } else if (sD === "d") {
            return "JavaScript";
        } else if (fB === "f") {
            return "JavaScript";
        } else if (mA === "m") {
            return "C#";
        } return "Swift";
    };
    document.getElementById("resultText").innerText = questionBranches(uR, oE, mA, sD, fB);
    document.getElementById("result").removeAttribute("class");

}

// UI Logic

window.addEventListener("load", function () {
    document.getElementById("result").setAttribute("class", "hidden");
    const form = document.getElementById("form");
    form.addEventListener("submit", suggestLanguage);
});