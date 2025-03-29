var checkUser = document.getElementById("inputUser");

checkUser.addEventListener("input", passWord);

function passWord() {
    if (document.getElementById("inputUser").value === "AnimaExMachina") {
        sessionStorage.setItem("wowReally", "true");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (document.getElementById("inputUser").value === "Mr. Nowhere") {
        localStorage.clear
    }
}

var checkNew = document.getElementById("guysAnd");
var newSpace = document.getElementById("deadSpace");

checkNew.addEventListener("click", newTrans);

function woahColor() {
    newSpace.style.backgroundColor = "#800080";
}

function changeSite() {
    window.location.replace("createAccount.html");
}

function newTrans() {
    newSpace.style.paddingTop = "110%";
    newSpace.style.marginTop = "-110%";
    setTimeout(woahColor, 1000);
    setTimeout(changeSite, 3000);
}

var forgorPass = document.getElementById("fourBig");

forgorPass.addEventListener("click", changeForgor);

function changeForgor() {
    window.location.href = "forgotPassword.html";
}