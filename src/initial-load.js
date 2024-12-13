import { generateHomeContent } from "./home.js";

let contentContainer = document.querySelector("#content");
let homeContent = generateHomeContent(document);

function initialLoad() {
    contentContainer.appendChild(homeContent);
}

export { initialLoad, homeContent };
