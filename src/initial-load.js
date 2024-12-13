const HERO_HEADER_TEXT = "Le Restaurant";
const HERO_TEXT = "Your destination for deliciousness";

function initialLoad() {
    let contentContainer = document.querySelector("#content");
    let heroDiv = document.createElement("div");
    let heroImg = document.createElement("img");
    let heroHeader = document.createElement("h1");
    let heroText = document.createElement("p");

    heroDiv.className = "hero";
    heroImg.src = "hero";
    heroHeader.lang = "fr";
    heroHeader.textContent = HERO_HEADER_TEXT;
    heroText.textContent = HERO_TEXT;

    heroDiv.appendChild(heroImg);
    heroDiv.appendChild(heroHeader);
    heroDiv.appendChild(heroText);

    contentContainer.appendChild(heroDiv);
}

export { initialLoad };
