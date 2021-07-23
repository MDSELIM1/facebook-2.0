// Setting Menu Javascript 

var settingsMenu = document.querySelector('.profile-settings');

var darkBtn = document.getElementById("dark-mode");

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}


darkBtn.onclick = function () {
    this.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-color');

    // Dark theme / Light theme 

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}


// Dark Mode / Light Mode Stay On When Browser Refresh 

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-color');
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-color');
} else {
    localStorage.setItem("theme", "light");
}