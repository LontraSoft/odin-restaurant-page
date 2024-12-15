const HEADING_TEXT = "About"
const RESTAURANT_DESCRIPTION =
      "Welcome to Le Restaurant, where bold flavors and warm " +
      "hospitality come together to create an unforgettable Tex-Mex " +
      "dining experience. Inspired by the rich culinary traditions of " +
      "the Texas-Mexico border, our menu features a fusion of fresh " +
      "ingredients, zesty spices, and traditional recipes passed down " +
      "through generations. Whether you're craving sizzling fajitas, " +
      "mouthwatering tacos, or a hearty enchilada, each dish is made " +
      "with love and served with a side of friendly service. At Le " +
      "Restaurant, we pride ourselves on offering a vibrant atmosphere " +
      "that brings people together over great food, making every meal " +
      "feel like a celebration. Join us for a taste of the " +
      "Southwest—where every bite is a fiesta!"

let aboutContent = document.createElement("div");
let aboutHeading = document.createElement("h1");
let aboutParagraph = document.createElement("p");

aboutContent.className = "about-content";

aboutHeading.textContent = HEADING_TEXT;
aboutParagraph.textContent = RESTAURANT_DESCRIPTION;

aboutContent.appendChild(aboutHeading);
aboutContent.appendChild(aboutParagraph);

export { aboutContent };
