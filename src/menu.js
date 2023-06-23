import { setBtnActive } from "./init-page";

const createMenu = (img, name, price) => {
  const item = document.createElement("div");
  item.classList.add = "items";

  const itemImg = document.createElement("img");
  itemImg.classList.add("item-img");
  itemImg.src = img;
  itemImg.alt = name;

  const itemName = document.createElement("h4");
  itemName.textContent = name;

  const itemPrice = document.createElement("h3");
  itemPrice.textContent = price;

  item.appendChild(itemImg);
  item.appendChild(itemName);
  item.appendChild(itemPrice);
  return item;
};

const loadMenu = () => {
  const content = document.getElementById("content");
  content.textContent = "";

  setBtnActive("product");
  const conatiner = document.createElement("div");
  conatiner.id = "products";

  const items = [
    createMenu(
      "https://source.unsplash.com/featured/?food/1",
      "Product 1",
      "$6.48"
    ),
    createMenu(
      "https://source.unsplash.com/featured/?food/2",
      "Product 2",
      "$6.48"
    ),
    createMenu(
      "https://source.unsplash.com/featured/?food/3",
      "Product 3",
      "$7.98"
    ),
    createMenu(
      "https://source.unsplash.com/featured/?food/4",
      "Product 4",
      "$8.98"
    ),
    createMenu(
      "https://source.unsplash.com/featured/?food/5",
      "Product 5",
      "$9.98"
    ),
    createMenu(
      "https://source.unsplash.com/featured/?food/6",
      "Product 6",
      "$17.99"
    ),
    createMenu(
      "https://source.unsplash.com/featured/?food/7",
      "Product 7",
      "$8.98"
    ),
    createMenu(
      "https://source.unsplash.com/featured/?food/8",
      "Product 8",
      "$6.99"
    ),
  ];

  items.forEach((item) => {
    conatiner.appendChild(item);
  });
  content.appendChild(conatiner);
};

export default loadMenu;
