const nav = document.querySelector("nav");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");

menuOpen.addEventListener("click", () => {
  nav.classList.add("open");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("open");
});
