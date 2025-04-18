let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.querySelector('.switch input')

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}
const disableDarkmode = () => {
    const bodyClasses = document.body.classList;
    bodyClasses.length <= 1 ? document.body.removeAttribute("class") : bodyClasses.remove("darkmode");
    localStorage.removeItem('darkmode')
}

if (themeSwitch.checked != (darkmode != null)) themeSwitch.checked = darkmode != null;

if (darkmode === "active") enableDarkmode();
window.addEventListener("load", () => document.body.classList.add("enable-transitions"));

themeSwitch.addEventListener("input", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
})