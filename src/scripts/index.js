import "../styles/global.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

function showPage(pageName) {
    switch (pageName) {
        case "home":
            home.togglePage();
            const btn = document.querySelector(".hero-text-container button");
            btn.addEventListener("click", changePageBtnEvent);
            break;
        case "menu":
            menu.togglePage();
            break;
        case "about":
            about.togglePage();
            break;
    }
}

function removeActiveClassFromBtn(navButtons) {
    Array.from(navButtons).forEach((button) => {
        if (button.classList.contains("current-page"))
            button.classList.remove("current-page");
    });
}

function addActiveClassToBtn(navButtons, pageName) {
    Array.from(navButtons).forEach((button) => {
        if (button.dataset.page === pageName)
            button.classList.add("current-page");
    });
}

function changePageBtnEvent(e) {
    e.stopPropagation();
    const pageName = e.target.dataset.page;
    showPage(pageName);
    const navButtons = document.querySelectorAll("nav button");
    removeActiveClassFromBtn(navButtons);
    addActiveClassToBtn(navButtons, pageName);
}

window.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll("nav button");

    Array.from(navButtons).forEach((button) => {
        button.addEventListener("click", changePageBtnEvent);
    });

    const logoImg = document.querySelector("header img");
    logoImg.addEventListener("click", () => {
        showPage("home");
    });

    showPage("home");
});
