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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = '201.555.0157';\n\n    const email = document.createElement('p');\n    email.textContent = 'nuovovesuvio@fakeEmail.com';\n\n    const contactImg = document.createElement('img');\n    contactImg.classList.add('contact-img')\n    contactImg.src = '../imgs/contactImg.jpeg'; // find image\n    contactImg.alt = 'Chef Artie Bucco entertaining his guests';\n\n    const hoursOne = document.createElement('p');\n    hoursOne.textContent = 'Thurs - Sat : 4pm - 10pm';\n    const hoursTwo = document.createElement('p');\n    hoursTwo.textContent = 'Sun: 11am - 5pm';\n\n    contact.appendChild(phoneNumber);\n    contact.appendChild(email);\n    contact.appendChild(contactImg);\n    contact.appendChild(hoursOne);\n    contact.appendChild(hoursTwo);\n\n    return contact;\n};\n\nfunction loadContact() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createContact());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const paraOne = document.createElement('p');\n    paraOne.textContent = 'With deep roots in tradition and family';\n    paraOne.classList.add('home-text');\n\n    const paraTwo = document.createElement('p');\n    paraTwo.textContent = 'and passion for authentic Italian cuisine';\n    paraTwo.classList.add('home-text');\n\n    const artiBucco = document.createElement('img');\n    artiBucco.classList.add('home-img');\n    artiBucco.src = '../imgs/artie-bucco.jpeg';\n    artiBucco.alt = 'artisan de cuisie: Artie Bucco';\n\n    const paraThree = document.createElement('p');\n    paraThree.textContent = 'Established by Artie Bucco';\n    paraThree.classList.add('home-text');\n\n\n    home.appendChild(paraOne);\n    home.appendChild(paraTwo);\n    home.appendChild(artiBucco);\n    home.appendChild(paraThree);\n\n    return home;\n};\n\nfunction loadHome() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHome());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    return menu;\n};\n\nfunction loadMenu() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createMenu());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    const restaurantName = document.createElement('h1');\n    restaurantName.classList.add('restaurant-name');\n    restaurantName.textContent = 'Nuovo Vesuvio';\n\n    header.appendChild(restaurantName);\n    header.appendChild(createNav());\n\n    return header;\n};\n\nfunction createNav() {\n    const nav = document.createElement('nav');\n\n    const homeButton = document.createElement('button');\n    homeButton.classList.add('nav-button');\n    homeButton.textContent = 'Home';\n    homeButton.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const menuButton = document.createElement('button');\n    menuButton.classList.add('nav-button');\n    menuButton.textContent = 'Menu';\n\n    const contactButton = document.createElement('button');\n    contactButton.classList.add('nav-button');\n    contactButton.textContent = 'Contact';\n    contactButton.addEventListener('click', (e) => {\n        if(e.target.classList.contains('active')) return;\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(contactButton);\n\n    return nav;\n};\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".nav-button\");\n  \n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove(\"active\");\n      }\n    });\n  \n    button.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n\n    return main;\n};\n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n\n    return footer;\n};\n\nfunction initializeWebsite() {\n    const content = document.getElementById('content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".nav-button\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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