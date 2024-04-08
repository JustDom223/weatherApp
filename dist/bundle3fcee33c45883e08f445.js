/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    /* border: 1px solid red; */
}

p{
    margin: 0;
}

/* Global */
#content {
    height: 100svh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* transition: all 0.3s ease; Smooth transition for all properties */

}

/* Header contents */
header{
    height: fit-content;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;

}

#logoContainer{
    grid-column: 1/2;
    width: fit-content;

    display: flex;
}
#searchContainer{
    grid-column: 2/3;
    width: fit-content;
}
#tempUnits{
    grid-column: 3/4;
    width: fit-content;
    display: flex;
}

#tempToggle{
    border: 1px black solid;
    width: 30px;
    border-radius: 20px;
}

#tempToggleSwitch{
    border: 1px black solid;
    width: 15px;
    height: 15px;
    border-radius: 10px;
}
/* Main contents */
main{
    /* Setting up positioning */
    height: auto;
    grid-row: 2/3;
    /* container manipulation */
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    align-items: center;

}

#mainContent{
    background-color: rgb(165, 213, 255);
    grid-column: 2/3;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;

}

/* Current day card info */

.weatherSVG{
    height: 80px;
}

#currentDayCard{
    width: 100%;
    /* Setting position in main */
    grid-column: 2/3;
    grid-row: 2/3;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

#dailyTimeline{
    display: flex;
    flex-direction: column;
}

#hourlyTimelineContainer{
    display: flex;
    /* justify-content: space-between; */
    /* flex-direction: column; */
}

.conditionSVG{
    height: 20px;
}

#dayMainInfo{
    
    display: flex;
    flex-direction: column;
}

#daySunriseSunset{
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
}

.sun{
    display: flex;
    flex-direction: column;
}

.sunSVG{
    height: 40px;
}

#dayAdditionalInfo{
    display: flex;
    flex-direction: column;
}

/* Following days */

#followingDays{
    /* Setting position in main */
    grid-column: 1/4;
    grid-row: 3/4;
    display: flex;
    justify-content: space-evenly;
}

.forcastCard{
    height: 150px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Footer contents */
footer{
    height: fit-content;
    grid-row: 3/4;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;;AAEA;IACI,SAAS;AACb;;AAEA,WAAW;AACX;IACI,cAAc;IACd,aAAa;IACb,iCAAiC;IACjC,oEAAoE;;AAExE;;AAEA,oBAAoB;AACpB;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;;AAEvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;;IAElB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA,kBAAkB;AAClB;IACI,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;;AAEjB;;AAEA,0BAA0B;;AAE1B;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;;IAEb,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,mBAAmB;;AAEnB;IACI,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA,oBAAoB;AACpB;IACI,mBAAmB;IACnB,aAAa;AACjB","sourcesContent":["*{\n    /* border: 1px solid red; */\n}\n\np{\n    margin: 0;\n}\n\n/* Global */\n#content {\n    height: 100svh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    /* transition: all 0.3s ease; Smooth transition for all properties */\n\n}\n\n/* Header contents */\nheader{\n    height: fit-content;\n    grid-row: 1/2;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n\n}\n\n#logoContainer{\n    grid-column: 1/2;\n    width: fit-content;\n\n    display: flex;\n}\n#searchContainer{\n    grid-column: 2/3;\n    width: fit-content;\n}\n#tempUnits{\n    grid-column: 3/4;\n    width: fit-content;\n    display: flex;\n}\n\n#tempToggle{\n    border: 1px black solid;\n    width: 30px;\n    border-radius: 20px;\n}\n\n#tempToggleSwitch{\n    border: 1px black solid;\n    width: 15px;\n    height: 15px;\n    border-radius: 10px;\n}\n/* Main contents */\nmain{\n    /* Setting up positioning */\n    height: auto;\n    grid-row: 2/3;\n    /* container manipulation */\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    justify-content: center;\n    align-items: center;\n\n}\n\n#mainContent{\n    background-color: rgb(165, 213, 255);\n    grid-column: 2/3;\n    border: 1px solid black;\n    border-radius: 10px;\n    padding: 10px;\n\n}\n\n/* Current day card info */\n\n.weatherSVG{\n    height: 80px;\n}\n\n#currentDayCard{\n    width: 100%;\n    /* Setting position in main */\n    grid-column: 2/3;\n    grid-row: 2/3;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n#dailyTimeline{\n    display: flex;\n    flex-direction: column;\n}\n\n#hourlyTimelineContainer{\n    display: flex;\n    /* justify-content: space-between; */\n    /* flex-direction: column; */\n}\n\n.conditionSVG{\n    height: 20px;\n}\n\n#dayMainInfo{\n    \n    display: flex;\n    flex-direction: column;\n}\n\n#daySunriseSunset{\n    display: flex;\n    /* flex-direction: column; */\n    justify-content: space-around;\n}\n\n.sun{\n    display: flex;\n    flex-direction: column;\n}\n\n.sunSVG{\n    height: 40px;\n}\n\n#dayAdditionalInfo{\n    display: flex;\n    flex-direction: column;\n}\n\n/* Following days */\n\n#followingDays{\n    /* Setting position in main */\n    grid-column: 1/4;\n    grid-row: 3/4;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.forcastCard{\n    height: 150px;\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Footer contents */\nfooter{\n    height: fit-content;\n    grid-row: 3/4;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMManipulation/activateKeyboardEventlisteners.js":
/*!***************************************************************!*\
  !*** ./src/DOMManipulation/activateKeyboardEventlisteners.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addKeyEvents)
/* harmony export */ });
function addKeyEvents(){
    document.querySelector("#locationSearchBar").addEventListener("keypress",(event) => {
        if (event.key === "Enter"){
            document.getElementById("weatherUpdate").click();
        }
    });
}

/***/ }),

/***/ "./src/DOMManipulation/createMainChildElements.js":
/*!********************************************************!*\
  !*** ./src/DOMManipulation/createMainChildElements.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainChildElements)
/* harmony export */ });
function createMainChildElements(){
    const mainContentElement = document.createElement("div");

    const currentDayCardElement = document.createElement("div");
    const followingDaysCardElement = document.createElement("div");

    const dailyTimelineElement = document.createElement("div");
    const dayMainInfoElement = document.createElement("div");
    const dayAdditionalInfoElement = document.createElement("div");

    mainContentElement.id = "mainContent";

    currentDayCardElement.id = "currentDayCard";
    followingDaysCardElement.id = "followingDays";

    dailyTimelineElement.id = "dailyTimeline";
    dayMainInfoElement.id = "dayMainInfo";
    dayAdditionalInfoElement.id = "dayAdditionalInfo";


    currentDayCardElement.appendChild(dailyTimelineElement);
    currentDayCardElement.appendChild(dayMainInfoElement);
    currentDayCardElement.appendChild(dayAdditionalInfoElement);



    mainContentElement.appendChild(currentDayCardElement);
    mainContentElement.appendChild(followingDaysCardElement);
    return mainContentElement;
}

/***/ }),

/***/ "./src/DOMManipulation/displayCurrentDayAdditionalInfo.js":
/*!****************************************************************!*\
  !*** ./src/DOMManipulation/displayCurrentDayAdditionalInfo.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayCurrentDayAdditionalInfo)
/* harmony export */ });
async function displayCurrentDayAdditionalInfo(data){
    // Get existing elements
    const dayAdditionalInfoElement = document.querySelector("#dayAdditionalInfo");
    dayAdditionalInfoElement.textContent = "";

    // Create child elements
    const uvIndexElement = document.createElement("p");
    const windDirectionElement = document.createElement("p");
    const windSpeedElement = document.createElement("p");
    const precipitationElement = document.createElement("p");
    const humidityElement = document.createElement("p");

    // Add content to children
    uvIndexElement.textContent = `UV Index: ${data.current.uv}`;
    windDirectionElement.textContent = `Wind Direction: ${data.current.wind_dir}`;
    windSpeedElement.textContent = `Wind Speed: ${data.current.wind_kph}km/h`;
    precipitationElement.textContent = `Precipitation: ${data.current.precip_mm}mm`;
    humidityElement.textContent = `Humidity: ${data.current.humidity}%`;

    // Append children
    dayAdditionalInfoElement.appendChild(uvIndexElement);
    dayAdditionalInfoElement.appendChild(windDirectionElement);
    dayAdditionalInfoElement.appendChild(windSpeedElement);
    dayAdditionalInfoElement.appendChild(precipitationElement);
    dayAdditionalInfoElement.appendChild(humidityElement);
}

/***/ }),

/***/ "./src/DOMManipulation/displayCurrentDayForecast.js":
/*!**********************************************************!*\
  !*** ./src/DOMManipulation/displayCurrentDayForecast.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayCurrrentDayForecast)
/* harmony export */ });
/* harmony import */ var _imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/svgs/imgManipulation/createSVGImg */ "./src/imgs/svgs/imgManipulation/createSVGImg.js");
/* harmony import */ var _displayWeatherSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayWeatherSVG */ "./src/DOMManipulation/displayWeatherSVG.js");
/* harmony import */ var _imgs_svgs_sunriseSunset_reshot_icon_sun_arrow_96SYUPFDKA_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-96SYUPFDKA.svg */ "./src/imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-96SYUPFDKA.svg");
/* harmony import */ var _imgs_svgs_sunriseSunset_reshot_icon_sun_arrow_EL79YXU2AJ_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-EL79YXU2AJ.svg */ "./src/imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-EL79YXU2AJ.svg");
// Import Functions


// Import SVGS





async function displayCurrrentDayForecast(data){
    const dayMainInfoElement = document.querySelector("#dayMainInfo");  
    dayMainInfoElement.textContent = "";
    const sunriseSVGElement = (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_sunriseSunset_reshot_icon_sun_arrow_96SYUPFDKA_svg__WEBPACK_IMPORTED_MODULE_2__, "sunSVG", "sunRiseSVG");
    const sunsetSVGElement = (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_sunriseSunset_reshot_icon_sun_arrow_EL79YXU2AJ_svg__WEBPACK_IMPORTED_MODULE_3__, "sunSVG", "sunSetSVG");

    const currentWeatherSVG = await (0,_displayWeatherSVG__WEBPACK_IMPORTED_MODULE_1__["default"])(data.current.condition.text);

    const currentDayTempElement = document.createElement("p");
    const currentDayFeelsLikeElement = document.createElement("p");
    const tempRangeElement = document.createElement("p");
    const locationElement = document.createElement("p");
    
    const daySunriseSunsetElement = document.createElement("div");
    const daySunriseContainerElement= document.createElement("div");
    const daySunsetContainerElement= document.createElement("div");
    const daySunriseElement = document.createElement("p");
    const daySunsetElement = document.createElement("p");
    // Adding classes and ID's to elements 
    daySunriseSunsetElement.id = "daySunriseSunset";
    daySunriseContainerElement.classList.add("sun");
    daySunsetContainerElement.classList.add("sun");
    // Adding element contents
    const tempC = true;

    if(tempC){
        currentDayTempElement.textContent = `Current temp: ${data.current.temp_c}°C`;
        currentDayFeelsLikeElement.textContent = `Feels like: ${data.current.feelslike_c}°C`;
        tempRangeElement.textContent = `Today's range: ${data.forecast.forecastday[0].day.mintemp_c} - ${data.forecast.forecastday[0].day.maxtemp_c}°C`;
    }else{
        currentDayTempElement.textContent = `Current temp: ${data.current.temp_f}°F`;
        currentDayFeelsLikeElement.textContent = `Feels like: ${data.current.feelslike_f}°F`;
        tempRangeElement.textContent = `Today's range: ${data.forecast.forecastday[0].day.mintemp_f} - ${data.forecast.forecastday[0].day.maxtemp_f}°F`;
        
    }
    
    locationElement.textContent = `${data.location.name} - ${data.location.region}`;

    daySunriseElement.textContent = `Sunrise: ${data.forecast.forecastday[0].astro.sunrise}`;
    daySunsetElement.textContent = `Sunset: ${data.forecast.forecastday[0].astro.sunset}`;

    daySunriseContainerElement.appendChild(sunriseSVGElement);
    daySunriseContainerElement.appendChild(daySunriseElement);
    
    daySunsetContainerElement.appendChild(sunsetSVGElement);
    daySunsetContainerElement.appendChild(daySunsetElement);


    daySunriseSunsetElement.appendChild(daySunriseContainerElement);
    daySunriseSunsetElement.appendChild(daySunsetContainerElement);

    dayMainInfoElement.appendChild(currentWeatherSVG);
    dayMainInfoElement.appendChild(currentDayTempElement);
    dayMainInfoElement.appendChild(currentDayFeelsLikeElement);
    dayMainInfoElement.appendChild(tempRangeElement);
    dayMainInfoElement.appendChild(locationElement);
    dayMainInfoElement.appendChild(daySunriseSunsetElement);
}



/***/ }),

/***/ "./src/DOMManipulation/displayCurrrentDayConditionTimeline.js":
/*!********************************************************************!*\
  !*** ./src/DOMManipulation/displayCurrrentDayConditionTimeline.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayCurrrentDayConditionTimeline)
/* harmony export */ });
/* harmony import */ var _displayWeatherSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeatherSVG */ "./src/DOMManipulation/displayWeatherSVG.js");



// Create a Object with all of the time and temps for the day as Key/Value pairs
async function createTimeTempObjectArray(data){
    try{
        const dayTimelineObject = {};
        const tempC = true;
        await data.forecast.forecastday[0].hour.forEach((hour, index) => {
            if(index % 2 === 0) {
                const time = hour.time.slice(-5);
                if (tempC){
                    dayTimelineObject[time] = {
                        temperature: hour.temp_c,
                        condition: hour.condition.text,
                    };}else{
                    dayTimelineObject[time] = {
                        temperature: hour.temp_f,
                        condition: hour.condition.text,

                    };     
                }
            }
        });
        return dayTimelineObject;
    }catch(err){
        console.log(err);
        return null;
    }
}

async function displayCurrrentDayConditionTimeline(data){
    try{
        const timeTempObject = await createTimeTempObjectArray(data);
        const dailyTimeLineElement = document.querySelector("#dailyTimeline");
        dailyTimeLineElement.textContent = "";
        const tempC = true;
        Object.entries(timeTempObject).forEach(async([key, value]) => {
            const hourlyContainer = document.createElement("div");
            const hourlyTimeTemp = document.createElement("p");
            const conditionSVG = await (0,_displayWeatherSVG__WEBPACK_IMPORTED_MODULE_0__["default"])(value.condition);
            hourlyTimeTemp.classList.add("timeline");

            hourlyContainer.id = "hourlyTimelineContainer";
            if(tempC){
                hourlyTimeTemp.textContent = `${key} - ${value.temperature}°C`;
                
            }else{
                hourlyTimeTemp.textContent = `${key} - ${value.temperature}°F`;
                
            }
            conditionSVG.classList.add("conditionSVG");

            hourlyContainer.appendChild(conditionSVG);
            hourlyContainer.appendChild(hourlyTimeTemp);

            dailyTimeLineElement.appendChild(hourlyContainer);
        });
    }catch(err){
        console.log(err);
    }
}


/***/ }),

/***/ "./src/DOMManipulation/displayDailyForecast.js":
/*!*****************************************************!*\
  !*** ./src/DOMManipulation/displayDailyForecast.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayDailyForecast)
/* harmony export */ });
/* harmony import */ var _displayWeatherSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeatherSVG */ "./src/DOMManipulation/displayWeatherSVG.js");



async function displayDailyForecast(data){
    const followingDaysElement = document.querySelector("#followingDays");
    followingDaysElement.textContent = "";
    data.forecast.forecastday.slice(1).forEach(async day => {
        // Create forecast card and children
        const forecastCard = document.createElement("div");
        const forecastConditionSVG = await (0,_displayWeatherSVG__WEBPACK_IMPORTED_MODULE_0__["default"])(day.day.condition.text);
        const forecastType = document.createElement("p");
        // Add classes and ID's
        forecastCard.classList.add("forecastCard");
        // Manipulte elements
        forecastType.textContent = `${day.day.condition.text}`;

        forecastCard.appendChild(forecastType);
        forecastCard.appendChild(forecastConditionSVG);
        followingDaysElement.appendChild(forecastCard);
    });

}

/***/ }),

/***/ "./src/DOMManipulation/displayWeatherSVG.js":
/*!**************************************************!*\
  !*** ./src/DOMManipulation/displayWeatherSVG.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWeatherSVG)
/* harmony export */ });
/* harmony import */ var _imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/svgs/imgManipulation/createSVGImg */ "./src/imgs/svgs/imgManipulation/createSVGImg.js");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_sun_S9ZW4T6UGQ_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-sun-S9ZW4T6UGQ.svg */ "./src/imgs/svgs/weather/reshot-icon-sun-S9ZW4T6UGQ.svg");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_electric_clouds_DKLY6EF9H5_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-electric-clouds-DKLY6EF9H5.svg */ "./src/imgs/svgs/weather/reshot-icon-electric-clouds-DKLY6EF9H5.svg");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_rain_5YXUMGH6ZB_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-rain-5YXUMGH6ZB.svg */ "./src/imgs/svgs/weather/reshot-icon-rain-5YXUMGH6ZB.svg");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_rain_clouds_QTLW32D7FR_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-rain-clouds-QTLW32D7FR.svg */ "./src/imgs/svgs/weather/reshot-icon-rain-clouds-QTLW32D7FR.svg");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_snow_cloud_TPC7FB3GAV_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-snow-cloud-TPC7FB3GAV.svg */ "./src/imgs/svgs/weather/reshot-icon-snow-cloud-TPC7FB3GAV.svg");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_sun_and_cloud_65PMRJT84G_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-sun-and-cloud-65PMRJT84G.svg */ "./src/imgs/svgs/weather/reshot-icon-sun-and-cloud-65PMRJT84G.svg");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_sun_and_cloud_UHYFETRWJ2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-sun-and-cloud-UHYFETRWJ2.svg */ "./src/imgs/svgs/weather/reshot-icon-sun-and-cloud-UHYFETRWJ2.svg");
/* harmony import */ var _imgs_svgs_weather_reshot_icon_wind_ER6Q95XJA7_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/svgs/weather/reshot-icon-wind-ER6Q95XJA7.svg */ "./src/imgs/svgs/weather/reshot-icon-wind-ER6Q95XJA7.svg");
/* harmony import */ var _imgs_svgs_weather_haze_fog_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/svgs/weather/haze-fog-svgrepo-com.svg */ "./src/imgs/svgs/weather/haze-fog-svgrepo-com.svg");













async function displayWeatherSVG(weatherData){
    try{
        const currentWeather = await weatherData.toLowerCase().trim();
        switch (currentWeather) {
        case "clear":
        case "sunny":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_reshot_icon_sun_S9ZW4T6UGQ_svg__WEBPACK_IMPORTED_MODULE_1__, "weatherSVG");
            
        case "partly cloudy":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_reshot_icon_sun_and_cloud_UHYFETRWJ2_svg__WEBPACK_IMPORTED_MODULE_7__, "weatherSVG");
            
        case "cloudy":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_reshot_icon_rain_clouds_QTLW32D7FR_svg__WEBPACK_IMPORTED_MODULE_4__, "weatherSVG");
            
        case "overcast":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_reshot_icon_sun_and_cloud_65PMRJT84G_svg__WEBPACK_IMPORTED_MODULE_6__, "weatherSVG");
            
        case "thundery outbreaks possible":
        case "patchy light snow with thunder":
        case "patchy light rain with thunder":
        case "moderate or heavy rain with thunder":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_reshot_icon_electric_clouds_DKLY6EF9H5_svg__WEBPACK_IMPORTED_MODULE_2__, "weatherSVG");
            
        case "patchy rain possible":
        case "patchy light drizzle":
        case "patchy rain nearby":
        case "patchy rain shower":
        case "light drizzle":
        case "moderate drizzle":
        case "heavy drizzle":
        case "patchy light rain":
        case "light rain":
        case "light rain shower":
        case "moderate rain":
        case "heavy rain":
        case "light freezing rain":
        case "torrential rain shower":
        case "moderate or heavy rain shower":
        case "moderate or heavy freezing rain":
        case "patchy light sleet":
        case "moderate or heavy sleet":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_reshot_icon_rain_5YXUMGH6ZB_svg__WEBPACK_IMPORTED_MODULE_3__, "weatherSVG");
            
        case "patchy snow possible":
        case "patchy sleet possible":
        case "light sleet":
        case "patchy light snow":
        case "light snow":
        case "moderate snow":
        case "heavy snow":
        case "light sleet showers":
        case "moderate or heavy sleet showers":
        case "light snow showers":
        case "moderate or heavy snow showers":
        case "light showers of ice pellets":
        case "moderate or heavy showers of ice pellets":
        case "moderate or heavy snow with thunder":
        case "patchy freezing drizzle possible":
        case "blizzard":
        case "blowing snow":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_reshot_icon_snow_cloud_TPC7FB3GAV_svg__WEBPACK_IMPORTED_MODULE_5__, "weatherSVG");
            
        case "mist":
        case "fog":
        case "freezing fog":
        case "patchy fog":
            return (0,_imgs_svgs_imgManipulation_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_imgs_svgs_weather_haze_fog_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_9__, "weatherSVG");
                            
            
            

        default:
            return console.log(`${currentWeather} - Weather condition is not categorized.`);
        }
    } catch(err) {
        console.log(err);
    }
}


/***/ }),

/***/ "./src/DOMManipulation/locationError.js":
/*!**********************************************!*\
  !*** ./src/DOMManipulation/locationError.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ locationErrorNotification)
/* harmony export */ });

function locationErrorNotification(err){
    const mainContentElement = document.createElement("div");

    mainContentElement.id = "mainContent";
    mainContentElement.textContent = 'Oops! Please use a valid location'
    return mainContentElement;

}

/***/ }),

/***/ "./src/DOMManipulation/updateSearch.js":
/*!*********************************************!*\
  !*** ./src/DOMManipulation/updateSearch.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSearch)
/* harmony export */ });
function updateSearch(){
    const locationSearchBarElement = document.querySelector("#locationSearchBar");
    const newLocation = locationSearchBarElement.value;
    locationSearchBarElement.value = "";
    return newLocation;
}

/***/ }),

/***/ "./src/imgs/svgs/imgManipulation/createSVGImg.js":
/*!*******************************************************!*\
  !*** ./src/imgs/svgs/imgManipulation/createSVGImg.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSVGImg)
/* harmony export */ });
function createSVGImg(importedSVG, assignedClass, assignedID) {
    const svgImage = new Image();
    svgImage.src = importedSVG;
    svgImage.classList.add(assignedClass);
    svgImage.id = assignedID;

    return svgImage;
}


/***/ }),

/***/ "./src/weatherAPIFunctions/getWeather.js":
/*!***********************************************!*\
  !*** ./src/weatherAPIFunctions/getWeather.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(API, location, numOfDays) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${location}&days=${numOfDays}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.error("An error occurred while fetching weather data:", err);
        throw err;
    }
}


/***/ }),

/***/ "./src/imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-96SYUPFDKA.svg":
/*!**************************************************************************!*\
  !*** ./src/imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-96SYUPFDKA.svg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-sun-arrow-96SYUPFDKA.svg";

/***/ }),

/***/ "./src/imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-EL79YXU2AJ.svg":
/*!**************************************************************************!*\
  !*** ./src/imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-EL79YXU2AJ.svg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-sun-arrow-EL79YXU2AJ.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/haze-fog-svgrepo-com.svg":
/*!********************************************************!*\
  !*** ./src/imgs/svgs/weather/haze-fog-svgrepo-com.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "haze-fog-svgrepo-com.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-electric-clouds-DKLY6EF9H5.svg":
/*!**************************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-electric-clouds-DKLY6EF9H5.svg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-electric-clouds-DKLY6EF9H5.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-rain-5YXUMGH6ZB.svg":
/*!***************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-rain-5YXUMGH6ZB.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-rain-5YXUMGH6ZB.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-rain-clouds-QTLW32D7FR.svg":
/*!**********************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-rain-clouds-QTLW32D7FR.svg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-rain-clouds-QTLW32D7FR.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-snow-cloud-TPC7FB3GAV.svg":
/*!*********************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-snow-cloud-TPC7FB3GAV.svg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-snow-cloud-TPC7FB3GAV.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-sun-S9ZW4T6UGQ.svg":
/*!**************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-sun-S9ZW4T6UGQ.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-sun-S9ZW4T6UGQ.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-sun-and-cloud-65PMRJT84G.svg":
/*!************************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-sun-and-cloud-65PMRJT84G.svg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-sun-and-cloud-65PMRJT84G.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-sun-and-cloud-UHYFETRWJ2.svg":
/*!************************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-sun-and-cloud-UHYFETRWJ2.svg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-sun-and-cloud-UHYFETRWJ2.svg";

/***/ }),

/***/ "./src/imgs/svgs/weather/reshot-icon-wind-ER6Q95XJA7.svg":
/*!***************************************************************!*\
  !*** ./src/imgs/svgs/weather/reshot-icon-wind-ER6Q95XJA7.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reshot-icon-wind-ER6Q95XJA7.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMManipulation_activateKeyboardEventlisteners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManipulation/activateKeyboardEventlisteners */ "./src/DOMManipulation/activateKeyboardEventlisteners.js");
/* harmony import */ var _DOMManipulation_createMainChildElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManipulation/createMainChildElements */ "./src/DOMManipulation/createMainChildElements.js");
/* harmony import */ var _DOMManipulation_displayCurrentDayAdditionalInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMManipulation/displayCurrentDayAdditionalInfo */ "./src/DOMManipulation/displayCurrentDayAdditionalInfo.js");
/* harmony import */ var _DOMManipulation_displayCurrentDayForecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMManipulation/displayCurrentDayForecast */ "./src/DOMManipulation/displayCurrentDayForecast.js");
/* harmony import */ var _DOMManipulation_displayCurrrentDayConditionTimeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMManipulation/displayCurrrentDayConditionTimeline */ "./src/DOMManipulation/displayCurrrentDayConditionTimeline.js");
/* harmony import */ var _DOMManipulation_displayDailyForecast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMManipulation/displayDailyForecast */ "./src/DOMManipulation/displayDailyForecast.js");
/* harmony import */ var _DOMManipulation_locationError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMManipulation/locationError */ "./src/DOMManipulation/locationError.js");
/* harmony import */ var _DOMManipulation_updateSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMManipulation/updateSearch */ "./src/DOMManipulation/updateSearch.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _weatherAPIFunctions_getWeather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weatherAPIFunctions/getWeather */ "./src/weatherAPIFunctions/getWeather.js");











const weatherAPI = "711063798872415aa7b221239241003";
// const  giphyAPI = "ED9FuiTtRxtrUzJCFdwQ5IyzTYEJoZQY";
const numberOfDaysForecasted = 3;




document.addEventListener("DOMContentLoaded", async ()=> {
    const updateButtonElement = document.querySelector("#weatherUpdate");
    const mainElement = document.querySelector("main");
    (0,_DOMManipulation_activateKeyboardEventlisteners__WEBPACK_IMPORTED_MODULE_0__["default"])();

    updateButtonElement.addEventListener("click", async () => {
        mainElement.textContent = "";
        const newSearch = (0,_DOMManipulation_updateSearch__WEBPACK_IMPORTED_MODULE_7__["default"])();
        try{

            const weatherData = await (0,_weatherAPIFunctions_getWeather__WEBPACK_IMPORTED_MODULE_9__["default"])(weatherAPI, newSearch, numberOfDaysForecasted);
            console.log(weatherData);
            mainElement.appendChild((0,_DOMManipulation_createMainChildElements__WEBPACK_IMPORTED_MODULE_1__["default"])());
            (0,_DOMManipulation_displayCurrentDayForecast__WEBPACK_IMPORTED_MODULE_3__["default"])(weatherData);
            (0,_DOMManipulation_displayDailyForecast__WEBPACK_IMPORTED_MODULE_5__["default"])(weatherData);
            (0,_DOMManipulation_displayCurrrentDayConditionTimeline__WEBPACK_IMPORTED_MODULE_4__["default"])(weatherData);
            (0,_DOMManipulation_displayCurrentDayAdditionalInfo__WEBPACK_IMPORTED_MODULE_2__["default"])(weatherData);
        }catch(err){
            mainElement.appendChild((0,_DOMManipulation_locationError__WEBPACK_IMPORTED_MODULE_6__["default"])(err))
        }
        
    });
});



})();

/******/ })()
;
//# sourceMappingURL=bundle3fcee33c45883e08f445.js.map