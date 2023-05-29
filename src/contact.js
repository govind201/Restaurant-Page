const createContactPage = () => {
  const pageContent = document.createElement("div");
  pageContent.id = "contact-page";

  const title = document.createElement("h2");
  title.textContent = "Contact Us";

  const subcontent = document.createElement("div");

  const subtitle = document.createElement("h4");
  subtitle.textContent = "Contact Information";

  const detail = document.createElement("p");
  detail.textContent =
    "We strive to provide the best customer experience.";

  const drinkLab = document.createElement("h4");
  drinkLab.textContent = "Drink Lab";

  const phoneInfo = createInfo("Phone:", "+91 *********");
  const emailInfo = createInfo("Email:", "email@gmail.com");
  const addressInfo = createInfo(
    "Store:",
    "Noida, India"
  );

  const openHour = document.createElement("p");
  openHour.innerHTML = `
      <span>Shop Opening Hours:</span>
      <ul>
        <li>Monday - Friday: 10:00am - 9pm</li>
      </ul>
    `;

  subcontent.appendChild(subtitle);
  subcontent.appendChild(detail);
  subcontent.appendChild(drinkLab);
  subcontent.appendChild(phoneInfo);
  subcontent.appendChild(emailInfo);
  subcontent.appendChild(addressInfo);
  subcontent.appendChild(openHour);

  pageContent.appendChild(title);
  pageContent.appendChild(subcontent);

  return pageContent;
}

const createInfo = (key, value) => {
  const infoContainer = document.createElement("div");

  const infoKey = document.createElement("span");
  infoKey.textContent = key;

  const infoValue = document.createElement("span");
  infoValue.textContent = value;

  infoContainer.appendChild(infoKey);
  infoContainer.appendChild(infoValue);

  return infoContainer;
}

const setActiveButton = (id) => {
  const activeButton = document.querySelector(".active");
  if (activeButton) activeButton.classList.remove("active");

  const contactButton = document.getElementById(id);
  contactButton.classList.add("active");
}

const loadContactPage = () => {
  const content = document.getElementById("content");
  content.textContent = "";

  setActiveButton("contact");
  content.appendChild(createContactPage());
}

export default loadContactPage;
