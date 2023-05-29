import initializeWebsite from "./init-page";
import loadContact from "./contact";
import loadMenu from "./menu";
import loadHomepage from "./homepage";

const addNavEvent = () => {
  const homeBtn = document.getElementById("home");
  const productBtn = document.getElementById("product");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", loadHomepage);
  productBtn.addEventListener("click", loadMenu);
  contactBtn.addEventListener("click", loadContact);
};
const init = () => {
  initializeWebsite();
  loadHomepage();
  addNavEvent();
};
init();
