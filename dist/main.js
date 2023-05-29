/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactPage() {\r\n  const pageContent = document.createElement(\"div\");\r\n  pageContent.id = \"contact-page\";\r\n\r\n  const title = document.createElement(\"h2\");\r\n  title.textContent = \"Contact Us\";\r\n\r\n  const subcontent = document.createElement(\"div\");\r\n\r\n  const subtitle = document.createElement(\"h4\");\r\n  subtitle.textContent = \"Contact Information\";\r\n\r\n  const detail = document.createElement(\"p\");\r\n  detail.textContent =\r\n    \"We strive to provide the best customer experience.\";\r\n\r\n  const drinkLab = document.createElement(\"h4\");\r\n  drinkLab.textContent = \"Drink Lab\";\r\n\r\n  const phoneInfo = createInfo(\"Phone:\", \"+91 *********\");\r\n  const emailInfo = createInfo(\"Email:\", \"email@gmail.com\");\r\n  const addressInfo = createInfo(\r\n    \"Store:\",\r\n    \"Noida, India\"\r\n  );\r\n\r\n  const openHour = document.createElement(\"p\");\r\n  openHour.innerHTML = `\r\n      <span>Shop Opening Hours:</span>\r\n      <ul>\r\n        <li>Monday - Friday: 10:00am - 9pm</li>\r\n      </ul>\r\n    `;\r\n\r\n  subcontent.appendChild(subtitle);\r\n  subcontent.appendChild(detail);\r\n  subcontent.appendChild(drinkLab);\r\n  subcontent.appendChild(phoneInfo);\r\n  subcontent.appendChild(emailInfo);\r\n  subcontent.appendChild(addressInfo);\r\n  subcontent.appendChild(openHour);\r\n\r\n  pageContent.appendChild(title);\r\n  pageContent.appendChild(subcontent);\r\n\r\n  return pageContent;\r\n}\r\n\r\nfunction createInfo(key, value) {\r\n  const infoContainer = document.createElement(\"div\");\r\n\r\n  const infoKey = document.createElement(\"span\");\r\n  infoKey.textContent = key;\r\n\r\n  const infoValue = document.createElement(\"span\");\r\n  infoValue.textContent = value;\r\n\r\n  infoContainer.appendChild(infoKey);\r\n  infoContainer.appendChild(infoValue);\r\n\r\n  return infoContainer;\r\n}\r\n\r\nfunction setActiveButton(id) {\r\n  const activeButton = document.querySelector(\".active\");\r\n  if (activeButton) activeButton.classList.remove(\"active\");\r\n\r\n  const contactButton = document.getElementById(id);\r\n  contactButton.classList.add(\"active\");\r\n}\r\n\r\nfunction loadContactPage() {\r\n  const content = document.getElementById(\"content\");\r\n  content.textContent = \"\";\r\n\r\n  setActiveButton(\"contact\");\r\n  content.appendChild(createContactPage());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHomepage = () => {\r\n  const homePage = document.createElement(\"div\");\r\n  homePage.id = \"home-page-des\";\r\n  const heading = document.createElement(\"h2\");\r\n  const subhead = document.createElement(\"h4\");\r\n  const para = document.createElement(\"p\");\r\n\r\n  heading.textContent = \"Lorem ipsum dolor sit\";\r\n  subhead.textContent = \"Explore the mavelous world of coffee\";\r\n  para.textContent =\r\n    \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolor alias, velit id dolorem doloribus aliquid autem aspernatur, iure earum, dignissimos sed eum omnis ducimus magnam officia non. A, voluptate.\";\r\n\r\n  homePage.appendChild(heading);\r\n  homePage.appendChild(subhead);\r\n  homePage.appendChild(para);\r\n\r\n  return homePage;\r\n};\r\n\r\nconst setBtnActive = (id) => {\r\n  const btnActive = document.querySelector(\".active\");\r\n  if (btnActive) btnActive.classList.remove(\"active\");\r\n\r\n  const homeBtn = document.getElementById(id);\r\n  homeBtn.classList.add(\"active\");\r\n};\r\n\r\nconst loadHomepage = () => {\r\n  const content = document.getElementById(\"content\");\r\n  content.textContent = \"\";\r\n\r\n  setBtnActive(\"home\");\r\n  content.appendChild(createHomepage());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomepage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-page */ \"./src/init-page.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\r\n\r\n\r\n\r\n\r\nconst addNavEvent = () => {\r\n  const homeBtn = document.getElementById(\"home\");\r\n  const productBtn = document.getElementById(\"product\");\r\n  const contactBtn = document.getElementById(\"contact\");\r\n\r\n  homeBtn.addEventListener(\"click\", _homepage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n  productBtn.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n  contactBtn.addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n};\r\nconst init = () => {\r\n  (0,_init_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  addNavEvent();\r\n};\r\ninit();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/init-page.js":
/*!**************************!*\
  !*** ./src/init-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createBtn = (id, text) => {\r\n  const btn = document.createElement(\"button\");\r\n  btn.setAttribute(\"id\", id);\r\n  const span = document.createElement(\"span\");\r\n  span.textContent = text;\r\n  btn.appendChild(span);\r\n  btn.classList.add(\"tab\");\r\n  return btn;\r\n};\r\n\r\nconst createNav = () => {\r\n  const nav = document.createElement(\"nav\");\r\n  nav.setAttribute(\"id\", \"navbar\");\r\n\r\n  const tabs = document.createElement(\"div\");\r\n  tabs.classList.add(\"tab-group\");\r\n\r\n  const homeBtn = createBtn(\"home\", \"Home\");\r\n  const productBtn = createBtn(\"product\", \"Product\");\r\n  const contactBtn = createBtn(\"contact\", \"Contact\");\r\n\r\n  tabs.appendChild(homeBtn);\r\n  tabs.appendChild(productBtn);\r\n  tabs.appendChild(contactBtn);\r\n\r\n  nav.appendChild(tabs);\r\n\r\n  return nav;\r\n};\r\n\r\nconst createContent = () => {\r\n  const content = document.createElement(\"div\");\r\n  content.id = \"content\";\r\n  return content;\r\n};\r\n\r\nconst initializeWebsite = () => {\r\n  const body = document.querySelector(\"body\");\r\n\r\n  body.appendChild(createNav());\r\n  body.appendChild(createContent());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/init-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu = (img, name, price) => {\r\n  const item = document.createElement(\"div\");\r\n  item.classList.add = \"items\";\r\n\r\n  const itemImg = document.createElement(\"img\");\r\n  itemImg.classList.add(\"item-img\");\r\n  itemImg.src = img;\r\n  itemImg.alt = name;\r\n\r\n  const itemName = document.createElement(\"h4\");\r\n  itemName.textContent = name;\r\n\r\n  const itemPrice = document.createElement(\"h3\");\r\n  itemPrice.textContent = price;\r\n\r\n  item.appendChild(itemImg);\r\n  item.appendChild(itemName);\r\n  item.appendChild(itemPrice);\r\n  return item;\r\n}\r\nconst setBtnActive = (id) => {\r\n  const btnActive = document.querySelector(\".active\");\r\n  if (btnActive) btnActive.classList.remove(\"active\");\r\n\r\n  const menuBtn = document.getElementById(id);\r\n  menuBtn.classList.add(\"active\");\r\n}\r\n\r\nconst loadMenu = () => {\r\n  const content = document.getElementById(\"content\");\r\n  content.textContent = \"\";\r\n\r\n  setBtnActive(\"product\");\r\n  const conatiner = document.createElement(\"div\");\r\n  conatiner.id = \"products\";\r\n\r\n  const items = [\r\n    createMenu(\r\n    \"https://source.unsplash.com/featured/?food/1\",\r\n      \"Water\",\r\n      \"$6.48\",\r\n    ),\r\n    createMenu(\r\n    \"https://source.unsplash.com/featured/?food/2\",\r\n      \"Choclate Milk\",\r\n      \"$6.48\",\r\n    ),\r\n    createMenu(\r\n        \"https://source.unsplash.com/featured/?food/3\",\r\n      \"Fanta\",\r\n      \"$7.98\",\r\n    ),\r\n    createMenu(\r\n    \"https://source.unsplash.com/featured/?food/4\",\r\n      \"Pepsi\",\r\n      \"$8.98\",\r\n    ),\r\n    createMenu(\r\n    \"https://source.unsplash.com/featured/?food/5\",\r\n      \"Coke\",\r\n      \"$9.98\",\r\n    ),\r\n    createMenu(\r\n    \"https://source.unsplash.com/featured/?food/6\",\r\n      \"Tea\",\r\n      \"$17.99\",\r\n    ),\r\n    createMenu(\r\n    \"https://source.unsplash.com/featured/?food/7\",\r\n      \"Coffee\",\r\n      \"$8.98\",\r\n    ),\r\n    createMenu(\r\n    \"https://source.unsplash.com/featured/?food/8\",\r\n      \"Lemonade\",\r\n      \"$6.99\",\r\n    ),\r\n  ];\r\n\r\n  items.forEach((item) => {\r\n    conatiner.appendChild(item);\r\n  });\r\n  content.appendChild(conatiner);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;