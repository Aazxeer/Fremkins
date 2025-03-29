var valueCarry = localStorage.getItem("testOne");
var badgeIcon = document.getElementById("badgeImage");

console.log(valueCarry);

if (valueCarry < 20) {
    document.getElementById("badgeNotif").innerHTML = "As a reward, please enjoy the Girapphos badge!";
    badgeIcon.setAttribute("src", "lesIcon.png");
} else if (valueCarry < 50) {
    document.getElementById("badgeNotif").innerHTML = "As a reward, please enjoy the Peacock badge!";
    badgeIcon.setAttribute("src", "gayIcon.png");
} else if (valueCarry < 100) {
    document.getElementById("badgeNotif").innerHTML = "As a reward, please enjoy the Bithon badge!";
    badgeIcon.setAttribute("src", "bIcon.png");
} else if (valueCarry < 500) {
    document.getElementById("badgeNotif").innerHTML = "As a reward, please enjoy the Transmako badge!";
    badgeIcon.setAttribute("src", "transIcon.png");
} else if (valueCarry < 1000) {
    document.getElementById("badgeNotif").innerHTML = "As a reward, please enjoy the Porcupan badge!";
    badgeIcon.setAttribute("src", "panIcon.png");
} else if (valueCarry > 1000) {
    document.getElementById("badgeNotif").innerHTML = "As a reward, please enjoy the Aceolotl badge!";
    badgeIcon.setAttribute("src", "aceIcon.png");
}