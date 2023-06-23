const createBtn = (id, text) => {
  const btn = document.createElement("button");
  btn.setAttribute("id", id);
  const span = document.createElement("span");
  span.textContent = text;
  btn.appendChild(span);
  btn.classList.add("tab");
  return btn;
};

const createNav = () => {
  const nav = document.createElement("nav");
  nav.setAttribute("id", "navbar");

  const tabs = document.createElement("div");
  tabs.classList.add("tab-group");

  const homeBtn = createBtn("home", "Home");
  const productBtn = createBtn("product", "Product");
  const contactBtn = createBtn("contact", "Contact");

  tabs.appendChild(homeBtn);
  tabs.appendChild(productBtn);
  tabs.appendChild(contactBtn);

  nav.appendChild(tabs);

  return nav;
};

export const setBtnActive = (id) => {
  const btnActive = document.querySelector(".active");
  if (btnActive) btnActive.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
};


const createContent = () => {
  const content = document.createElement("div");
  content.id = "content";
  return content;
};

const initializeWebsite = () => {
  const body = document.querySelector("body");

  body.appendChild(createNav());
  body.appendChild(createContent());
}

export default initializeWebsite;
