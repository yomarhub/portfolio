let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.querySelector('.switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}
const disableDarkmode = () => {
    const bodyClasses = document.body.classList;
    bodyClasses.length <= 1 ? document.body.removeAttribute("class") : bodyClasses.remove("darkmode");
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("input", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
})