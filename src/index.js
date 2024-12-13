import "./index.css"
import {initialLoad, homeContent} from "./initial-load.js";

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
}

function switchContentMenu() {
    console.log("Switching to menu content");
    clearContent();
}

function switchContentAbout() {
    console.log("Switching to about content");
    clearContent();
}

homeButton.addEventListener("click", switchContentHome);
menuButton.addEventListener("click", switchContentMenu);
aboutButton.addEventListener("click", switchContentAbout);

initialLoad();

