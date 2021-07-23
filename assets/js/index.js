
var settingsMenu = document.querySelector('.profile-settings');

var darkBtn = document.getElementById("dark-mode");

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height")
}

darkBtn.onclick = function () {
    this.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-color')

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light")
    }

}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-color');
}

else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-color');
}

else {
    localStorage.setItem("theme", "light")
}