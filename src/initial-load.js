const HERO_HEADER_TEXT = "Le Restaurant";
const HERO_TEXT = "Your destination for deliciousness";

function initialLoad() {
    let contentContainer = document.querySelector("#content");
    let heroDiv = document.createElement("div");
    let heroImg = document.createElement("img");
    let heroTextContainer = document.createElement("div");
    let heroHeader = document.createElement("h1");
    let heroText = document.createElement("p");

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

    contentContainer.appendChild(heroDiv);
}

export { initialLoad };
