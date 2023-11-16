const NAV = document.querySelector("#nav");
const SHOW = document.querySelector("#open-menu");


SHOW.addEventListener("click", () => {
    NAV.classList.toggle("visible")
})