var logo = document.querySelector('.parallax img');

window.addEventListener('scroll', () => {
    var value = window.scrollY;
    logo.style.top = `calc(50% + ${value * 0.5}px)`;
});

var ultraKill = document.getElementById("adsRight");

ultraKill.addEventListener("click", killUltra);

function killUltra() {
        window.location.href = "devilmayquake.com";
}

var phightIng = document.getElementById("adsLeft");

phightIng.addEventListener("click", );

function ingPhight() {
        window.location.href = "roblox.com";
}