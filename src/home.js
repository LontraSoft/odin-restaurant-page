import "./home.css";
import heroImage from "./images/restaurant.jpg";

const HERO_HEADER_TEXT = "Le Restaurant";
const HERO_TEXT = "Your destination for deliciousness";

function generateHomeContent(doc) {
    let heroDiv = doc.createElement("div");
    let heroImg = doc.createElement("img");
    let heroTextContainer = doc.createElement("div");
    let heroHeader = doc.createElement("h1");
    let heroText = doc.createElement("p");

    heroDiv.className = "hero";
    heroImg.id = "hero-image";
    heroImg.src = heroImage;
    heroTextContainer.className = "hero-text-container";
    heroHeader.lang = "fr";
    heroHeader.id = "hero-header";
    heroHeader.textContent = HERO_HEADER_TEXT;
    heroText.id = "hero-text";
    heroText.textContent = HERO_TEXT;

    heroTextContainer.appendChild(heroHeader);
    heroTextContainer.appendChild(heroText);

    heroDiv.appendChild(heroImg);
    heroDiv.appendChild(heroTextContainer);

    return heroDiv;
}

export {generateHomeContent};
