const contentContainer = document.querySelector("#content");

// Page consists of a header followed by multiple menu items
let menuContent = document.createElement("div");
let menuHeading = document.createElement("h1");
menuHeading.textContent = "Menu";

class MenuItem {
    constructor(name, imgSrc, description) {
	this.name = name;
	this.imgSrc = imgSrc;
	this.description = description;
    }

    generateContainer(doc) {
	let menuItemContainer = doc.createElement("div");
	let menuItemName = doc.createElement("h2");
	let menuItemImg = doc.createElement("img");
	let menuItemDescription = doc.createElement("p");

	menuItemContainer.className = "menu-item-container";
	menuItemName.className = "menu-item-name";
	menuItemImg.className = "menu-item-img";
	menuItemDescription.className = "menu-item-description";

	menuItemName.textContent = this.name;
	menuItemImg.src = this.imgSrc;
	menuItemDescription.textContent = this.description;

	menuItemContainer.appendChild(menuItemImg);
	menuItemContainer.appendChild(menuItemName);
	menuItemContainer.appendChild(menuItemDescription);

	return menuItemContainer;
    }
}


const enchiladasName = "Enchiladas";
const enchiladasImgSrc = "PLACEHOLDER";
const enchiladasDescription =
      "Savory corn tortillas filled with your choice of seasoned meat, " +
      "cheese, or beans, then rolled and smothered in a rich, flavorful " +
      "enchilada sauce. Baked to perfection and served with a side of " +
      "rice and beans for a truly satisfying meal."

const fajitasName = "Fajitas";
const fajitasImgSrc = "PLACEHOLDER";
const fajitasDescription = "PLACEHOLDER"; 

const tacosName = "Tacos";
const tacosImgSrc = "PLACEHOLDER";
const tacosDescription = "PLACEHOLDER";

const nachosName = "Nachos";
const nachosImgSrc = "PLACEHOLDER";
const nachosDescription = "PLACEHOLDER";

let enchiladasMenuItem = new MenuItem(enchiladasName, enchiladasImgSrc, enchiladasDescription);
let fajitasMenuItem = new MenuItem(fajitasName, fajitasImgSrc,fajitasDescription);
let tacosMenuItem = new MenuItem (tacosName, tacosImgSrc,tacosDescription);
let nachosMenuItem = new MenuItem (nachosName, nachosImgSrc, nachosDescription);

menuContent.appendChild(enchiladasMenuItem.generateContainer(document));
menuContent.appendChild(fajitasMenuItem.generateContainer(document));
menuContent.appendChild(tacosMenuItem.generateContainer(document));
menuContent.appendChild(nachosMenuItem.generateContainer(document));

export { menuContent }
