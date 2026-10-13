const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
const ageNotice = document.querySelector(".age-note");
const dismissAge = document.getElementById("dismiss-age");
if (dismissAge && ageNotice) dismissAge.addEventListener("click", () => ageNotice.classList.add("hidden"));
