var hKoki = document.getElementById("hKoki");
var uniQue = document.getElementById("uniQue");
var fremKins = document.getElementById("fremKins");
var foolHaus = document.getElementById("foolHaus");
var borderColor = document.getElementsByClassName("authName");

hKoki.addEventListener("mouseover", kokiH);
uniQue.addEventListener("mouseover", queUni);
fremKins.addEventListener("mouseover", kinsFrem);
foolHaus.addEventListener("mouseover", hausFool);

function kokiH() {
    document.body.style.backgroundImage= "url(pressure.jpg)";
    document.getElementById("authDesc").innerHTML = "Our resident scrum master. Handled a lot of coding and was the programmer that understood how to make a working navigation bar. Loves pressure and is obsessed with the fish guy.";
    document.getElementById("authDesc").style.color = "black";
    document.getElementById("authDesc").style.textShadow = "0px 0px black";
    document.getElementById("authDesc").style.textDecoration = "underline";
    document.getElementById("authDesc").style.fontSize = "110%";
    document.getElementById("authDesc").style.fontFamily = "futuraBook";
    document.getElementById("retLink").style.color = "black";
    document.getElementById("retLink").style.backgroundColor = "gold";
    document.getElementById("retLink").style.textShadow = "1px 1px black";
    document.getElementById("retLink").style.fontSize = "110%";
    document.getElementById("retLink").style.fontFamily = "futuraBook";
    document.getElementById("authBack").style.backgroundColor = "rgb(255, 255, 255)"
    document.getElementById("authBack").style.borderStyle = "solid"
    document.getElementById("authBack").style.borderWidth = "20px"
    document.getElementById("authBack").style.borderColor = "rgb(222, 202, 174)"
}

function queUni() {
    document.body.style.backgroundImage= "url(bayonetta.jpg)";
    document.getElementById("authDesc").innerHTML = "Our artistic talent who worked on the adorable splash art and badge icons you are rewarded when donating. A silly goober that really loves Bayonetta.";
    document.getElementById("authDesc").style.color = "#4a2c6c";
    document.getElementById("authDesc").style.textShadow = "0px 0px black";
    document.getElementById("authDesc").style.textDecoration = "none";
    document.getElementById("authDesc").style.fontSize = "140%";
    document.getElementById("authDesc").style.fontFamily = "bayoNetta";
    document.getElementById("retLink").style.color = "rgb(255, 78, 152)";
    document.getElementById("retLink").style.backgroundColor = "transparent";
    document.getElementById("retLink").style.textShadow = "0px 0px black";
    document.getElementById("retLink").style.fontSize = "140%";
    document.getElementById("retLink").style.fontFamily = "bayoNetta";
    document.getElementById("authBack").style.backgroundColor = "rgba(0, 0, 0, 0.0)"
    document.getElementById("authBack").style.borderStyle = "none"
}

function kinsFrem() {
    document.body.style.backgroundImage= "url(rainworld.jpg)";
    document.getElementById("authDesc").innerHTML = "Our framework handler. Made a ton of the frameworks and keeps a level head. Compiled the site together to make sure stuff is connected successfully. Loves playing Rainworld.";
    document.getElementById("authDesc").style.color = "#e6e0d4";
    document.getElementById("authDesc").style.textShadow = "0px 0px black";
    document.getElementById("authDesc").style.textDecoration = "none";
    document.getElementById("authDesc").style.fontSize = "120%";
    document.getElementById("authDesc").style.fontFamily = "rainWorld";
    document.getElementById("retLink").style.color = "rgb(255, 0, 238)";
    document.getElementById("retLink").style.backgroundColor = "transparent";
    document.getElementById("retLink").style.textShadow = "0px 0px black";
    document.getElementById("retLink").style.fontSize = "120%";
    document.getElementById("retLink").style.fontFamily = "rainWorld";
    document.getElementById("authBack").style.backgroundColor = "rgba(0, 0, 0, 0.6)"
    document.getElementById("authBack").style.borderStyle = "none"
}

function hausFool() {
    document.body.style.backgroundImage= "url(ultrakill.webp)";
    document.getElementById("authDesc").innerHTML = "Our resident serial killer. At least, mentally unwell enough to not be surprising when they get revealed as one. REALLY loves ULTRAKILL. Jumps between several jobs, but handled CSS and Javascript for fun. What a psycho.";
    document.getElementById("authDesc").style.color = "black";
    document.getElementById("authDesc").style.textShadow = "0px 0px black";
    document.getElementById("authDesc").style.textDecoration = "none";
    document.getElementById("authDesc").style.fontSize = "110%";
    document.getElementById("authDesc").style.fontFamily = "ultraKill";
    document.getElementById("retLink").style.color = "white";
    document.getElementById("retLink").style.backgroundColor = "transparent";
    document.getElementById("retLink").style.textShadow = "0px 0px black";
    document.getElementById("retLink").style.fontSize = "110%";
    document.getElementById("retLink").style.fontFamily = "ultraKill";
    document.getElementById("authBack").style.backgroundColor = "rgba(0, 0, 0, 0)"
    document.getElementById("authBack").style.borderStyle = "none"
}