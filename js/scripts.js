// Business Logic

// // Reloads Page
function refreshPage() {
    window.location.reload();
}
// // Question Retrieval
function revealQuestion(e) {
    e.preventDefault();
}

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
                desc = "about rudy";
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

// // Sends Descriptions
    function descHandler(result) {
        console.log(result);
        if (result === "Ruby") {
            return "You may appreciate Ruby for its natural syntax, object oriented programming as well as it's flexible typing style. In addition, Ruby is a great language for Back End programming, but can also handle front end work!";
        } else if (result === "Go") {
            return "Go is a highly readable language developed by Google. It can be object oriented, but situates itself somewhere between. It's statically typed and focuses on safe programming. It is primarily used as a robust language for back end programming.";
        } else if (result === "Python") {
            return "Python was created to be so easy to read, and can really do it all! It works with functions or object oriented programming. It is dynamically typed and is therefore super flexible, and is a workhorse for both front and and back-end applications.";
        } else if (result === "Rust") {
            return "Rust is a statically typed language, that is quite similar to the C programming language. It can handle object and function oriented programming, and is a solid back end language, especially for video games and AR applications.";
        } else if (result === "JavaScript") {
            return "JavaScript rules the internet these days. If you want to do front end development, it's simply a must! Object oriented, and although not as natural to read, it's very flexible and is widely supported!";
        } else if (result === "C#") {
            return "C# was developed by Microsoft, and is quite similar to JavaScript. However, it is statically typed, and used for back end applications. Many major game studios make use of C# these days, especially with the Unity engine.";
        } else if (result === "Swift") {
            return "Apple's back end programming language, Swift is object oriented, statically typed and not quite as natural to read as some others, but is a must if you have interested in Apple hardware or software development!";
        }   return "That's odd! You broke something I didn't anticipate.";
    }
    let result = questionBranches(uR, oE, mA, sD, fB);
    console.log(descHandler(result));
    document.getElementById("resultText").innerText = result;
    document.getElementById("resultDesc").innerText = descHandler(result);
    document.getElementById("result").removeAttribute("class");
    document.getElementById("result").scrollIntoView({ behavior: "smooth", block: "start"});

}

// UI Logic

window.addEventListener("load", function () {
    document.getElementById("result").setAttribute("class", "hidden");
    document.getElementById("1").setAttribute("class", "question hidden");
    document.getElementById("2").setAttribute("class", "question hidden");
    document.getElementById("3").setAttribute("class", "question hidden");
    document.getElementById("4").setAttribute("class", "question hidden");
    document.getElementById("5").setAttribute("class", "question hidden");
    document.getElementById("6").setAttribute("class", "button-box hidden");
    
    const form = document.getElementById("form");
    form.addEventListener("change", revealQuestion);
    form.addEventListener("submit", suggestLanguage);
});