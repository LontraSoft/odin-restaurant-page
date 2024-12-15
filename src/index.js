import "./index.css"
import {initialLoad, homeContent} from "./initial-load.js";
import {menuContent} from "./menu.js";
import {aboutContent} from "./about.js";

const contentContainer = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

const EMPTY_HTML = "";

function clearContent() {
    contentContainer.innerHTML = EMPTY_HTML;
}

function switchContentHome() {
    console.log("Switching to home content");
    clearContent();
    contentContainer.appendChild(homeContent);
}

function switchContentMenu() {
    console.log("Switching to menu content");
    clearContent();
    contentContainer.appendChild(menuContent);
}

function switchContentAbout() {
    console.log("Switching to about content");
    clearContent();
    contentContainer.appendChild(aboutContent);
}

homeButton.addEventListener("click", switchContentHome);
menuButton.addEventListener("click", switchContentMenu);
aboutButton.addEventListener("click", switchContentAbout);

initialLoad();

