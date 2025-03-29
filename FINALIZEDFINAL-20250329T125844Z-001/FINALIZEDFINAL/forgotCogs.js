var subReq = document.getElementById("guysAnd");
var backButton = document.getElementById("returnHome");

subReq.addEventListener("click", reqSub)
backButton.addEventListener("click", returnButton)

function reqSub() {
    var reqText = document.getElementById("reqSent");
    reqText.innerHTML = "Request has been sent! Please await an email.";
}

function returnButton() {
    window.location.replace("loginPage.html");
}