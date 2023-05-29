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
}
const setBtnActive = (id) => {
  const btnActive = document.querySelector(".active");
  if (btnActive) btnActive.classList.remove("active");

  const menuBtn = document.getElementById(id);
  menuBtn.classList.add("active");
}

const loadMenu = () => {
  const content = document.getElementById("content");
  content.textContent = "";

  setBtnActive("product");
  const conatiner = document.createElement("div");
  conatiner.id = "products";

  const items = [
    createMenu(
    "https://source.unsplash.com/featured/?food/1",
      "Water",
      "$6.48",
    ),
    createMenu(
    "https://source.unsplash.com/featured/?food/2",
      "Choclate Milk",
      "$6.48",
    ),
    createMenu(
        "https://source.unsplash.com/featured/?food/3",
      "Fanta",
      "$7.98",
    ),
    createMenu(
    "https://source.unsplash.com/featured/?food/4",
      "Pepsi",
      "$8.98",
    ),
    createMenu(
    "https://source.unsplash.com/featured/?food/5",
      "Coke",
      "$9.98",
    ),
    createMenu(
    "https://source.unsplash.com/featured/?food/6",
      "Tea",
      "$17.99",
    ),
    createMenu(
    "https://source.unsplash.com/featured/?food/7",
      "Coffee",
      "$8.98",
    ),
    createMenu(
    "https://source.unsplash.com/featured/?food/8",
      "Lemonade",
      "$6.99",
    ),
  ];

  items.forEach((item) => {
    conatiner.appendChild(item);
  });
  content.appendChild(conatiner);
}

export default loadMenu;
