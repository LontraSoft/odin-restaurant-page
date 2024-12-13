import "./index.css"
import {initialLoad, homeContent} from "./initial-load.js";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

function switchContentHome() {
    console.log("Switching to home content");
}

function switchContentMenu() {
    console.log("Switching to menu content");
}

function switchContentAbout() {
    console.log("Switching to about content");
}

homeButton.addEventListener("click", switchContentHome);
menuButton.addEventListener("click", switchContentMenu);
aboutButton.addEventListener("click", switchContentAbout);

initialLoad();

