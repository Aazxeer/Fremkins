var changePage = document.getElementById("donoBut");

changePage.addEventListener("click", donoDone);

function donoDone() {
    window.location.href = "thankYou.html";
}

var checkValue = 0;
var addTwenty = document.getElementById("cashOne");
var addFifty = document.getElementById("cashTwo");
var addHundo = document.getElementById("cashThr");
var addCustom = document.getElementById("donoMount");

addTwenty.addEventListener("click", twentyAdded);
addFifty.addEventListener("click", fiftyAdded);
addHundo.addEventListener("click", hundoAdded);
addCustom.addEventListener("input", customAdded);

function twentyAdded() {
    checkValue = 0;
    checkValue += 20;
    localStorage.setItem("testOne", checkValue);
}

function fiftyAdded() {
    checkValue = 0;
    checkValue += 50;
    localStorage.setItem("testOne", checkValue);
}

function hundoAdded() {
    checkValue = 0;
    checkValue += 100;
    localStorage.setItem("testOne", checkValue);
}

function customAdded() {
    checkValue = 0;
    checkValue += document.getElementById("donoMount").value;
    localStorage.setItem("testOne", checkValue);
}