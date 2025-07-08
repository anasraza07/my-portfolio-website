const themeBtns = document.querySelectorAll(".theme-dot");
const linkTag = document.querySelector("#theme-style");

const theme = localStorage.getItem("theme");
if (theme) {
    setTheme(theme);
} else {
    setTheme("light")
}

themeBtns.forEach(themeBtn => {
    let { mode } = themeBtn.dataset;
    themeBtn.addEventListener("click", function () {
        setTheme(mode);
    })
})

function setTheme(mode) {
    if (mode === "light") mode = "default";

    linkTag.setAttribute("href", `${mode}.css`);
    localStorage.setItem("theme", mode);
}