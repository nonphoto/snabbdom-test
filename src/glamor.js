let __defineProperty = Object.defineProperty;
let __hasOwnProperty = Object.prototype.hasOwnProperty;
let __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
let __markAsModule = (target2) => {
  return __defineProperty(target2, "__esModule", {value: true});
};
let __export = (target2, all) => {
  __markAsModule(target2);
  for (let name in all)
    __defineProperty(target2, name, {get: all[name], enumerable: true});
};
let __exportStar = (target2, module) => {
  __markAsModule(target2);
  for (let key in module)
    if (__hasOwnProperty.call(module, key) && !__hasOwnProperty.call(target2, key) && key !== "default")
      __defineProperty(target2, key, {get: () => module[key], enumerable: true});
  return target2;
};
let __toModule = (module) => {
  if (module && module.__esModule)
    return module;
  return __exportStar(__defineProperty({}, "default", {value: module, enumerable: true}), module);
};

// node_modules/object-assign/index.js
var require_object_assign = __commonJS((exports, module) => {
  "use strict";
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  module.exports = shouldUseNative() ? Object.assign : function(target2, source) {
    var from;
    var to = toObject(target2);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
});

// node_modules/fbjs/lib/camelize.js
var require_camelize = __commonJS((exports, module) => {
  "use strict";
  var _hyphenPattern = /-(.)/g;
  function camelize(string) {
    return string.replace(_hyphenPattern, function(_, character) {
      return character.toUpperCase();
    });
  }
  module.exports = camelize;
});

// node_modules/fbjs/lib/camelizeStyleName.js
var require_camelizeStyleName = __commonJS((exports, module) => {
  "use strict";
  var camelize = require_camelize();
  var msPattern = /^-ms-/;
  function camelizeStyleName3(string) {
    return camelize(string.replace(msPattern, "ms-"));
  }
  module.exports = camelizeStyleName3;
});

// node_modules/fbjs/lib/emptyFunction.js
var require_emptyFunction = __commonJS((exports, module) => {
  "use strict";
  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }
  var emptyFunction = function emptyFunction2() {
  };
  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() {
    return this;
  };
  emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
  };
  module.exports = emptyFunction;
});

// node_modules/fbjs/lib/warning.js
var require_warning = __commonJS((exports, module) => {
  "use strict";
  var emptyFunction = require_emptyFunction();
  var warning5 = emptyFunction;
  if (false) {
    var printWarning = function printWarning2(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var argIndex = 0;
      var message = "Warning: " + format.replace(/%s/g, function() {
        return args[argIndex++];
      });
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
    warning5 = function warning6(condition, format) {
      if (format === void 0) {
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      }
      if (format.indexOf("Failed Composite propType: ") === 0) {
        return;
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
        printWarning.apply(void 0, [format].concat(args));
      }
    };
  }
  module.exports = warning5;
});

// node_modules/fbjs/lib/hyphenate.js
var require_hyphenate = __commonJS((exports, module) => {
  "use strict";
  var _uppercasePattern = /([A-Z])/g;
  function hyphenate(string) {
    return string.replace(_uppercasePattern, "-$1").toLowerCase();
  }
  module.exports = hyphenate;
});

// node_modules/fbjs/lib/hyphenateStyleName.js
var require_hyphenateStyleName = __commonJS((exports, module) => {
  "use strict";
  var hyphenate = require_hyphenate();
  var msPattern = /^ms-/;
  function hyphenateStyleName3(string) {
    return hyphenate(string).replace(msPattern, "-ms-");
  }
  module.exports = hyphenateStyleName3;
});

// node_modules/fbjs/lib/memoizeStringOnly.js
var require_memoizeStringOnly = __commonJS((exports, module) => {
  "use strict";
  function memoizeStringOnly3(callback) {
    var cache = {};
    return function(string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }
  module.exports = memoizeStringOnly3;
});

// node_modules/inline-style-prefixer/static/staticData.js
var require_staticData = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var w = ["Webkit"];
  var m = ["Moz"];
  var ms = ["ms"];
  var wm = ["Webkit", "Moz"];
  var wms = ["Webkit", "ms"];
  var wmms = ["Webkit", "Moz", "ms"];
  exports.default = {
    plugins: [],
    prefixMap: {appearance: wm, userSelect: wmms, textEmphasisPosition: w, textEmphasis: w, textEmphasisStyle: w, textEmphasisColor: w, boxDecorationBreak: w, clipPath: w, maskImage: w, maskMode: w, maskRepeat: w, maskPosition: w, maskClip: w, maskOrigin: w, maskSize: w, maskComposite: w, mask: w, maskBorderSource: w, maskBorderMode: w, maskBorderSlice: w, maskBorderWidth: w, maskBorderOutset: w, maskBorderRepeat: w, maskBorder: w, maskType: w, textDecorationStyle: w, textDecorationSkip: w, textDecorationLine: w, textDecorationColor: w, filter: w, fontFeatureSettings: w, breakAfter: wmms, breakBefore: wmms, breakInside: wmms, columnCount: wm, columnFill: wm, columnGap: wm, columnRule: wm, columnRuleColor: wm, columnRuleStyle: wm, columnRuleWidth: wm, columns: wm, columnSpan: wm, columnWidth: wm, writingMode: wms, flex: w, flexBasis: w, flexDirection: w, flexGrow: w, flexFlow: w, flexShrink: w, flexWrap: w, alignContent: w, alignItems: w, alignSelf: w, justifyContent: w, order: w, transform: w, transformOrigin: w, transformOriginX: w, transformOriginY: w, backfaceVisibility: w, perspective: w, perspectiveOrigin: w, transformStyle: w, transformOriginZ: w, animation: w, animationDelay: w, animationDirection: w, animationFillMode: w, animationDuration: w, animationIterationCount: w, animationName: w, animationPlayState: w, animationTimingFunction: w, backdropFilter: w, fontKerning: w, scrollSnapType: wms, scrollSnapPointsX: wms, scrollSnapPointsY: wms, scrollSnapDestination: wms, scrollSnapCoordinate: wms, shapeImageThreshold: w, shapeImageMargin: w, shapeImageOutside: w, hyphens: wmms, flowInto: wms, flowFrom: wms, regionFragment: wms, textAlignLast: m, tabSize: m, wrapFlow: ms, wrapThrough: ms, wrapMargin: ms, gridTemplateColumns: ms, gridTemplateRows: ms, gridTemplateAreas: ms, gridTemplate: ms, gridAutoColumns: ms, gridAutoRows: ms, gridAutoFlow: ms, grid: ms, gridRowStart: ms, gridColumnStart: ms, gridRowEnd: ms, gridRow: ms, gridColumn: ms, gridColumnEnd: ms, gridColumnGap: ms, gridRowGap: ms, gridArea: ms, gridGap: ms, textSizeAdjust: wms, borderImage: w, borderImageOutset: w, borderImageRepeat: w, borderImageSlice: w, borderImageSource: w, borderImageWidth: w, transitionDelay: w, transitionDuration: w, transitionProperty: w, transitionTimingFunction: w}
  };
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/utils/capitalizeString.js
var require_capitalizeString = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = capitalizeString;
  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/utils/prefixProperty.js
var require_prefixProperty = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixProperty3;
  var _capitalizeString = require_capitalizeString();
  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function prefixProperty3(prefixProperties, property, style2) {
    if (prefixProperties.hasOwnProperty(property)) {
      var requiredPrefixes = prefixProperties[property];
      for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
        style2[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style2[property];
      }
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/utils/prefixValue.js
var require_prefixValue = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixValue3;
  function prefixValue3(plugins4, property, value, style2, metaData) {
    for (var i = 0, len = plugins4.length; i < len; ++i) {
      var processedValue = plugins4[i](property, value, style2, metaData);
      if (processedValue) {
        return processedValue;
      }
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/cursor.js
var require_cursor = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cursor3;
  var prefixes3 = ["-webkit-", "-moz-", ""];
  var values = {
    "zoom-in": true,
    "zoom-out": true,
    grab: true,
    grabbing: true
  };
  function cursor3(property, value) {
    if (property === "cursor" && values.hasOwnProperty(value)) {
      return prefixes3.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports["default"];
});

// node_modules/css-in-js-utils/lib/isPrefixedValue.js
var require_isPrefixedValue = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPrefixedValue;
  var regex = /-webkit-|-moz-|-ms-/;
  function isPrefixedValue(value) {
    return typeof value === "string" && regex.test(value);
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/crossFade.js
var require_crossFade = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = crossFade3;
  var _isPrefixedValue = require_isPrefixedValue();
  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var prefixes3 = ["-webkit-", ""];
  function crossFade3(property, value) {
    if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && value.indexOf("cross-fade(") > -1) {
      return prefixes3.map(function(prefix) {
        return value.replace(/cross-fade\(/g, prefix + "cross-fade(");
      });
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/filter.js
var require_filter = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = filter3;
  var _isPrefixedValue = require_isPrefixedValue();
  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var prefixes3 = ["-webkit-", ""];
  function filter3(property, value) {
    if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && value.indexOf("filter(") > -1) {
      return prefixes3.map(function(prefix) {
        return value.replace(/filter\(/g, prefix + "filter(");
      });
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/flex.js
var require_flex = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flex3;
  var values = {
    flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
    "inline-flex": ["-webkit-inline-box", "-moz-inline-box", "-ms-inline-flexbox", "-webkit-inline-flex", "inline-flex"]
  };
  function flex3(property, value) {
    if (property === "display" && values.hasOwnProperty(value)) {
      return values[value];
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/flexboxOld.js
var require_flexboxOld = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxOld3;
  var alternativeValues = {
    "space-around": "justify",
    "space-between": "justify",
    "flex-start": "start",
    "flex-end": "end",
    "wrap-reverse": "multiple",
    wrap: "multiple"
  };
  var alternativeProps = {
    alignItems: "WebkitBoxAlign",
    justifyContent: "WebkitBoxPack",
    flexWrap: "WebkitBoxLines"
  };
  function flexboxOld3(property, value, style2) {
    if (property === "flexDirection" && typeof value === "string") {
      if (value.indexOf("column") > -1) {
        style2.WebkitBoxOrient = "vertical";
      } else {
        style2.WebkitBoxOrient = "horizontal";
      }
      if (value.indexOf("reverse") > -1) {
        style2.WebkitBoxDirection = "reverse";
      } else {
        style2.WebkitBoxDirection = "normal";
      }
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style2[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/gradient.js
var require_gradient = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gradient3;
  var _isPrefixedValue = require_isPrefixedValue();
  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var prefixes3 = ["-webkit-", "-moz-", ""];
  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
  function gradient3(property, value) {
    if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
      return prefixes3.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/imageSet.js
var require_imageSet = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = imageSet3;
  var _isPrefixedValue = require_isPrefixedValue();
  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var prefixes3 = ["-webkit-", ""];
  function imageSet3(property, value) {
    if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && value.indexOf("image-set(") > -1) {
      return prefixes3.map(function(prefix) {
        return value.replace(/image-set\(/g, prefix + "image-set(");
      });
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/position.js
var require_position = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = position3;
  function position3(property, value) {
    if (property === "position" && value === "sticky") {
      return ["-webkit-sticky", "sticky"];
    }
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/sizing.js
var require_sizing = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sizing3;
  var prefixes3 = ["-webkit-", "-moz-", ""];
  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    "min-content": true,
    "max-content": true,
    "fill-available": true,
    "fit-content": true,
    "contain-floats": true
  };
  function sizing3(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes3.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports["default"];
});

// node_modules/hyphenate-style-name/index.js
var require_hyphenate_style_name = __commonJS((exports) => {
  __export(exports, {
    default: () => hyphenate_style_name_default
  });
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};
  function toHyphenLower(match) {
    return "-" + match.toLowerCase();
  }
  function hyphenateStyleName3(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name];
    }
    var hName = name.replace(uppercasePattern, toHyphenLower);
    return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
  }
  const hyphenate_style_name_default = hyphenateStyleName3;
});

// node_modules/css-in-js-utils/lib/hyphenateProperty.js
var require_hyphenateProperty = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateProperty;
  var _hyphenateStyleName = require_hyphenate_style_name();
  var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
  }
  module.exports = exports["default"];
});

// node_modules/inline-style-prefixer/static/plugins/transition.js
var require_transition = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = transition3;
  var _hyphenateProperty = require_hyphenateProperty();
  var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
  var _isPrefixedValue = require_isPrefixedValue();
  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
  var _capitalizeString = require_capitalizeString();
  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };
  var prefixMapping = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    ms: "-ms-"
  };
  function prefixValue3(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    }
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== "order") {
          var prefixes3 = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes3.length; j < pLen; ++j) {
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes3[j]] + dashCaseProperty));
          }
        }
      }
      multipleValues[i] = values.join(",");
    }
    return multipleValues.join(",");
  }
  function transition3(property, value, style2, propertyPrefixMap) {
    if (typeof value === "string" && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue3(value, propertyPrefixMap);
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
        return !/-moz-|-ms-/.test(val);
      }).join(",");
      if (property.indexOf("Webkit") > -1) {
        return webkitOutput;
      }
      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(",");
      if (property.indexOf("Moz") > -1) {
        return mozOutput;
      }
      style2["Webkit" + (0, _capitalizeString2.default)(property)] = webkitOutput;
      style2["Moz" + (0, _capitalizeString2.default)(property)] = mozOutput;
      return outputValue;
    }
  }
  module.exports = exports["default"];
});

// src/sheet.js
const object_assign3 = __toModule(require_object_assign());
function last(arr) {
  return arr[arr.length - 1];
}
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
const isBrowser2 = typeof window !== "undefined";
const isDev3 = false;
const isTest2 = false;
const oldIE = (() => {
  if (isBrowser2) {
    let div = document.createElement("div");
    div.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
    return div.getElementsByTagName("i").length === 1;
  }
})();
function makeStyleTag() {
  let tag = document.createElement("style");
  tag.type = "text/css";
  tag.setAttribute("data-glamor", "");
  tag.appendChild(document.createTextNode(""));
  (document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
  return tag;
}
function StyleSheet({
  speedy: speedy2 = !isDev3 && !isTest2,
  maxLength = isBrowser2 && oldIE ? 4e3 : 65e3
} = {}) {
  this.isSpeedy = speedy2;
  this.sheet = void 0;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}
object_assign3.default(StyleSheet.prototype, {
  getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject() {
    if (this.injected) {
      throw new Error("already injected stylesheet!");
    }
    if (isBrowser2) {
      this.tags[0] = makeStyleTag();
    } else {
      this.sheet = {
        cssRules: [],
        insertRule: (rule) => {
          this.sheet.cssRules.push({cssText: rule});
        }
      };
    }
    this.injected = true;
  },
  speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error(`cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`);
    }
    this.isSpeedy = !!bool;
  },
  _insert(rule) {
    try {
      let sheet2 = this.getSheet();
      sheet2.insertRule(rule, rule.indexOf("@import") !== -1 ? 0 : sheet2.cssRules.length);
    } catch (e) {
      if (isDev3) {
        console.warn("whoops, illegal rule inserted", rule);
      }
    }
  },
  insert(rule) {
    if (isBrowser2) {
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      } else {
        if (rule.indexOf("@import") !== -1) {
          const tag = last(this.tags);
          tag.insertBefore(document.createTextNode(rule), tag.firstChild);
        } else {
          last(this.tags).appendChild(document.createTextNode(rule));
        }
      }
    } else {
      this.sheet.insertRule(rule, rule.indexOf("@import") !== -1 ? 0 : this.sheet.cssRules.length);
    }
    this.ctr++;
    if (isBrowser2 && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }
    return this.ctr - 1;
  },
  delete(index) {
    return this.replace(index, "");
  },
  flush() {
    if (isBrowser2) {
      this.tags.forEach((tag) => tag.parentNode.removeChild(tag));
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
    } else {
      this.sheet.cssRules = [];
    }
    this.injected = false;
  },
  rules() {
    if (!isBrowser2) {
      return this.sheet.cssRules;
    }
    let arr = [];
    this.tags.forEach((tag) => arr.splice(arr.length, 0, ...Array.from(sheetForTag(tag).cssRules)));
    return arr;
  }
});

// src/CSSPropertyOperations/CSSProperty.js
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
let prefixes = ["Webkit", "ms", "Moz", "O"];
Object.keys(isUnitlessNumber).forEach(function(prop) {
  prefixes.forEach(function(prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});
let shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};
const CSSProperty = {
  isUnitlessNumber,
  shorthandPropertyExpansions
};
const CSSProperty_default = CSSProperty;

// src/CSSPropertyOperations/dangerousStyleValue.js
const warning = __toModule(require_warning());
let isUnitlessNumber2 = CSSProperty_default.isUnitlessNumber;
function dangerousStyleValue(name, value, component) {
  let isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  let isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber2.hasOwnProperty(name) && isUnitlessNumber2[name]) {
    return "" + value;
  }
  if (typeof value === "string") {
    if (false) {
      if (component && value !== "0") {
        let owner = component._currentElement._owner;
        let ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        let warned = false;
        if (ownerName) {
          let warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
          void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + "px";
}
const dangerousStyleValue_default = dangerousStyleValue;

// src/CSSPropertyOperations/index.js
const camelizeStyleName = __toModule(require_camelizeStyleName());
const hyphenateStyleName = __toModule(require_hyphenateStyleName());
const memoizeStringOnly = __toModule(require_memoizeStringOnly());
const warning3 = __toModule(require_warning());
const processStyleName = memoizeStringOnly.default(hyphenateStyleName.default);
if (false) {
  let badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  let badStyleValueWithSemicolonPattern = /;\s*$/;
  let warnedStyleNames = {};
  let warnedStyleValues = {};
  let warnedForNaNValue = false;
  let warnHyphenatedStyleName = function(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }
    warnedStyleNames[name] = true;
    void 0;
  };
  let warnBadVendoredStyleName = function(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }
    warnedStyleNames[name] = true;
    void 0;
  };
  let warnStyleValueWithSemicolon = function(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }
    warnedStyleValues[value] = true;
    void 0;
  };
  let warnStyleValueIsNaN = function(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }
    warnedForNaNValue = true;
    void 0;
  };
  let checkRenderMessage = function(owner) {
    if (owner) {
      let name = owner.getName();
      if (name) {
        return " Check the render method of `" + name + "`.";
      }
    }
    return "";
  };
  var warnValidStyle = function(name, value, component) {
    let owner;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf("-") > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }
    if (typeof value === "number" && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}
function createMarkupForStyles(styles, component) {
  let serialized = "";
  for (let styleName in styles) {
    const isCustomProp = styleName.indexOf("--") === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    if (styleName === "label") {
      continue;
    }
    let styleValue = styles[styleName];
    if (false) {
      warnValidStyle(styleName, styleValue, component);
    }
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += `${styleName}:${styleValue};`;
      } else {
        serialized += processStyleName(styleName) + ":";
        serialized += dangerousStyleValue_default(styleName, styleValue, component) + ";";
      }
    }
  }
  return serialized || null;
}

// src/clean.js
function isFalsy(value) {
  return value === null || value === void 0 || value === false || typeof value === "object" && Object.keys(value).length === 0;
}
function cleanObject(object) {
  if (isFalsy(object))
    return null;
  if (typeof object !== "object")
    return object;
  let acc = {}, keys = Object.keys(object), hasFalsy = false;
  for (let i = 0; i < keys.length; i++) {
    let value = object[keys[i]];
    const filteredValue = clean(value);
    if (filteredValue === null || filteredValue !== value) {
      hasFalsy = true;
    }
    if (filteredValue !== null) {
      acc[keys[i]] = filteredValue;
    }
  }
  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}
function cleanArray(rules) {
  let hasFalsy = false;
  const filtered = [];
  rules.forEach((rule) => {
    const filteredRule = clean(rule);
    if (filteredRule === null || filteredRule !== rule) {
      hasFalsy = true;
    }
    if (filteredRule !== null) {
      filtered.push(filteredRule);
    }
  });
  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}
function clean(input) {
  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}

// src/prefixer.js
const staticData = __toModule(require_staticData());
const prefixProperty = __toModule(require_prefixProperty());
const prefixValue = __toModule(require_prefixValue());
const cursor = __toModule(require_cursor());
const crossFade = __toModule(require_crossFade());
const filter = __toModule(require_filter());
const flex = __toModule(require_flex());
const flexboxOld = __toModule(require_flexboxOld());
const gradient = __toModule(require_gradient());
const imageSet = __toModule(require_imageSet());
const position = __toModule(require_position());
const sizing = __toModule(require_sizing());
const transition = __toModule(require_transition());
const plugins3 = [
  crossFade.default,
  cursor.default,
  filter.default,
  flexboxOld.default,
  gradient.default,
  imageSet.default,
  position.default,
  sizing.default,
  transition.default,
  flex.default
];
const prefixMap = staticData.default.prefixMap;
function prefixer2(style2) {
  for (const property in style2) {
    const value = style2[property];
    const processedValue = prefixValue.default(plugins3, property, value, style2, prefixMap);
    if (processedValue) {
      style2[property] = processedValue;
    }
    prefixProperty.default(prefixMap, property, style2);
  }
  return style2;
}

// src/plugins.js
const object_assign2 = __toModule(require_object_assign());
const isDev2 = ((x) => x === "development" || !x)("production");
function PluginSet(initial) {
  this.fns = initial || [];
}
object_assign2.default(PluginSet.prototype, {
  add(...fns) {
    fns.forEach((fn) => {
      if (this.fns.indexOf(fn) >= 0) {
        if (isDev2) {
          console.warn("adding the same plugin again, ignoring");
        }
      } else {
        this.fns = [fn].concat(this.fns);
      }
    });
  },
  remove(fn) {
    this.fns = this.fns.filter((x) => x !== fn);
  },
  clear() {
    this.fns = [];
  },
  transform(o) {
    return this.fns.reduce((o2, fn) => fn(o2), o);
  }
});
function fallbacks(node) {
  let hasArray = Object.keys(node.style).map((x) => Array.isArray(node.style[x])).indexOf(true) >= 0;
  if (hasArray) {
    let {style: style2} = node;
    let flattened = Object.keys(style2).reduce((o, key) => {
      o[key] = Array.isArray(style2[key]) ? style2[key].join(`; ${processStyleName(key)}: `) : style2[key];
      return o;
    }, {});
    return object_assign2.default({}, node, {style: flattened});
  }
  return node;
}
let contentValues = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit"];
function contentWrap(node) {
  if (node.style.content) {
    let cont = node.style.content;
    if (contentValues.indexOf(cont) >= 0) {
      return node;
    }
    if (/^(attr|calc|counters?|url)\(/.test(cont)) {
      return node;
    }
    if (cont.charAt(0) === cont.charAt(cont.length - 1) && (cont.charAt(0) === '"' || cont.charAt(0) === "'")) {
      return node;
    }
    return {...node, style: {...node.style, content: '"' + cont + '"'}};
  }
  return node;
}
function prefixes2(node) {
  return object_assign2.default({}, node, {style: prefixer2({...node.style})});
}

// src/hash.js
function doHash(str, seed) {
  let m = 1540483477;
  let r = 24;
  let h = seed ^ str.length;
  let length = str.length;
  let currentIndex = 0;
  while (length >= 4) {
    let k = UInt32(str, currentIndex);
    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);
    h = Umul32(h, m);
    h ^= k;
    currentIndex += 4;
    length -= 4;
  }
  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;
    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;
    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }
  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;
  return h >>> 0;
}
function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}
function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}
function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  let nlo = n & 65535;
  let nhi = n >>> 16;
  let res = nlo * m + ((nhi * m & 65535) << 16) | 0;
  return res;
}

// src/index.js
const object_assign = __toModule(require_object_assign());
const styleSheet = new StyleSheet();
styleSheet.inject();
function speedy(bool) {
  return styleSheet.speedy(bool);
}
const plugins2 = styleSheet.plugins = new PluginSet([prefixes2, contentWrap, fallbacks]);
plugins2.media = new PluginSet();
plugins2.fontFace = new PluginSet();
plugins2.keyframes = new PluginSet([prefixes2, fallbacks]);
const isDev = false;
const isTest = false;
const isBrowser = typeof window !== "undefined";
let canSimulate = isDev;
let warned1 = false;
let warned2 = false;
function simulations(bool = true) {
  canSimulate = !!bool;
}
function simulate(...pseudos) {
  pseudos = clean(pseudos);
  if (!pseudos)
    return {};
  if (!canSimulate) {
    if (!warned1) {
      console.warn("can't simulate without once calling simulations(true)");
      warned1 = true;
    }
    if (!isDev && !isTest && !warned2) {
      console.warn("don't use simulation outside dev");
      warned2 = true;
    }
    return {};
  }
  return pseudos.reduce((o, p) => (o[`data-simulate-${simple(p)}`] = "", o), {});
}
let hasLabels = isDev;
function cssLabels(bool) {
  hasLabels = !!bool;
}
function simple(str, char = "") {
  return str.toLowerCase().replace(/[^a-z0-9]/g, char);
}
function hashify(obj) {
  let str = JSON.stringify(obj);
  let toRet = doHash(str).toString(36);
  if (obj.label && obj.label.length > 0 && isDev) {
    return simple(obj.label.join("."), "-") + "-" + toRet;
  }
  return toRet;
}
function isLikeRule(rule) {
  let keys = Object.keys(rule).filter((x) => x !== "toString");
  if (keys.length !== 1) {
    return false;
  }
  return !!/data\-css\-([a-zA-Z0-9\-_]+)/.exec(keys[0]);
}
function idFor(rule) {
  let keys = Object.keys(rule).filter((x) => x !== "toString");
  if (keys.length !== 1)
    throw new Error("not a rule");
  let regex = /data\-css\-([a-zA-Z0-9\-_]+)/;
  let match = regex.exec(keys[0]);
  if (!match)
    throw new Error("not a rule");
  return match[1];
}
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;
function splitSelector(selector2) {
  if (selector2.indexOf(",") === -1) {
    return [selector2];
  }
  var indices = [], res = [], inParen = 0, o;
  while (o = selectorTokenizer.exec(selector2)) {
    switch (o[0]) {
      case "(":
        inParen++;
        break;
      case ")":
        inParen--;
        break;
      case ",":
        if (inParen)
          break;
        indices.push(o.index);
    }
  }
  for (o = indices.length; o--; ) {
    res.unshift(selector2.slice(indices[o] + 1));
    selector2 = selector2.slice(0, indices[o]);
  }
  res.unshift(selector2);
  return res;
}
function selector(id, path) {
  if (!id) {
    return path.replace(/\&/g, "");
  }
  if (!path)
    return `.css-${id},[data-css-${id}]`;
  let x = splitSelector(path).map((x2) => x2.indexOf("&") >= 0 ? [x2.replace(/\&/mg, `.css-${id}`), x2.replace(/\&/mg, `[data-css-${id}]`)].join(",") : `.css-${id}${x2},[data-css-${id}]${x2}`).join(",");
  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += `,.css-${id}[data-simulate-${simple(path)}],[data-css-${id}][data-simulate-${simple(path)}]`;
  }
  return x;
}
function toCSS({selector: selector2, style: style2}) {
  let result = plugins2.transform({selector: selector2, style: style2});
  return `${result.selector}{${createMarkupForStyles(result.style)}}`;
}
function deconstruct(style2) {
  let plain, selects, medias, supports;
  Object.keys(style2).forEach((key) => {
    if (key.indexOf("&") >= 0) {
      selects = selects || {};
      selects[key] = style2[key];
    } else if (key.indexOf("@media") === 0) {
      medias = medias || {};
      medias[key] = deconstruct(style2[key]);
    } else if (key.indexOf("@supports") === 0) {
      supports = supports || {};
      supports[key] = deconstruct(style2[key]);
    } else if (key === "label") {
      if (style2.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style2.label.join(".") : "";
      }
    } else {
      plain = plain || {};
      plain[key] = style2[key];
    }
  });
  return {plain, selects, medias, supports};
}
function deconstructedStyleToCSS(id, style2) {
  let css2 = [];
  let {plain, selects, medias, supports} = style2;
  if (plain) {
    css2.push(toCSS({style: plain, selector: selector(id)}));
  }
  if (selects) {
    Object.keys(selects).forEach((key) => css2.push(toCSS({style: selects[key], selector: selector(id, key)})));
  }
  if (medias) {
    Object.keys(medias).forEach((key) => css2.push(`${key}{${deconstructedStyleToCSS(id, medias[key]).join("")}}`));
  }
  if (supports) {
    Object.keys(supports).forEach((key) => css2.push(`${key}{${deconstructedStyleToCSS(id, supports[key]).join("")}}`));
  }
  return css2;
}
let inserted = styleSheet.inserted = {};
function insert(spec) {
  if (!inserted[spec.id]) {
    inserted[spec.id] = true;
    let deconstructed = deconstruct(spec.style);
    let rules = deconstructedStyleToCSS(spec.id, deconstructed);
    inserted[spec.id] = isBrowser ? true : rules;
    rules.forEach((cssRule) => styleSheet.insert(cssRule));
  }
}
let registered = styleSheet.registered = {};
function register(spec) {
  if (!registered[spec.id]) {
    registered[spec.id] = spec;
  }
}
function _getRegistered(rule) {
  if (isLikeRule(rule)) {
    let ret = registered[idFor(rule)];
    if (ret == null) {
      throw new Error("[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79");
    }
    return ret;
  }
  return rule;
}
let ruleCache = {};
function toRule(spec) {
  register(spec);
  insert(spec);
  if (ruleCache[spec.id]) {
    return ruleCache[spec.id];
  }
  let ret = {[`data-css-${spec.id}`]: hasLabels ? spec.label || "" : ""};
  Object.defineProperty(ret, "toString", {
    enumerable: false,
    value() {
      return "css-" + spec.id;
    }
  });
  ruleCache[spec.id] = ret;
  return ret;
}
function isSelector(key) {
  let possibles = [":", ".", "[", ">", " "], found = false, ch = key.charAt(0);
  for (let i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf("&") >= 0;
}
function joinSelectors(a, b) {
  let as = splitSelector(a).map((a2) => !(a2.indexOf("&") >= 0) ? "&" + a2 : a2);
  let bs = splitSelector(b).map((b2) => !(b2.indexOf("&") >= 0) ? "&" + b2 : b2);
  return bs.reduce((arr, b2) => arr.concat(as.map((a2) => b2.replace(/\&/g, a2))), []).join(",");
}
function joinMediaQueries(a, b) {
  return a ? `@media ${a.substring(6)} and ${b.substring(6)}` : b;
}
function isMediaQuery(key) {
  return key.indexOf("@media") === 0;
}
function isSupports(key) {
  return key.indexOf("@supports") === 0;
}
function joinSupports(a, b) {
  return a ? `@supports ${a.substring(9)} and ${b.substring(9)}` : b;
}
function flatten(inArr) {
  let arr = [];
  for (let i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i]))
      arr = arr.concat(flatten(inArr[i]));
    else
      arr = arr.concat(inArr[i]);
  }
  return arr;
}
const prefixedPseudoSelectors = {
  "::placeholder": ["::-webkit-input-placeholder", "::-moz-placeholder", "::-ms-input-placeholder"],
  ":fullscreen": [":-webkit-full-screen", ":-moz-full-screen", ":-ms-fullscreen"]
};
function build(dest, {selector: selector2 = "", mq = "", supp = "", src = {}}) {
  if (!Array.isArray(src)) {
    src = [src];
  }
  src = flatten(src);
  src.forEach((_src) => {
    if (isLikeRule(_src)) {
      let reg = _getRegistered(_src);
      if (reg.type !== "css") {
        throw new Error("cannot merge this rule");
      }
      _src = reg.style;
    }
    _src = clean(_src);
    if (_src && _src.composes) {
      build(dest, {selector: selector2, mq, supp, src: _src.composes});
    }
    Object.keys(_src || {}).forEach((key) => {
      if (isSelector(key)) {
        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach((p) => build(dest, {selector: joinSelectors(selector2, p), mq, supp, src: _src[key]}));
        }
        build(dest, {selector: joinSelectors(selector2, key), mq, supp, src: _src[key]});
      } else if (isMediaQuery(key)) {
        build(dest, {selector: selector2, mq: joinMediaQueries(mq, key), supp, src: _src[key]});
      } else if (isSupports(key)) {
        build(dest, {selector: selector2, mq, supp: joinSupports(supp, key), src: _src[key]});
      } else if (key === "composes") {
      } else {
        let _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector2) {
          _dest[selector2] = _dest[selector2] || {};
          _dest = _dest[selector2];
        }
        if (key === "label") {
          if (hasLabels) {
            dest.label = dest.label.concat(_src.label);
          }
        } else {
          _dest[key] = _src[key];
        }
      }
    });
  });
}
function _css(rules) {
  let style2 = {label: []};
  build(style2, {src: rules});
  let spec = {
    id: hashify(style2),
    style: style2,
    label: hasLabels ? style2.label.join(".") : "",
    type: "css"
  };
  return toRule(spec);
}
let nullrule = {};
Object.defineProperty(nullrule, "toString", {
  enumerable: false,
  value() {
    return "css-nil";
  }
});
let inputCaches = typeof WeakMap !== "undefined" ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()] : [nullrule];
let warnedWeakMapError = false;
function multiIndexCache(fn) {
  return function(args) {
    if (inputCaches[args.length]) {
      let coi = inputCaches[args.length];
      let ctr = 0;
      while (ctr < args.length - 1) {
        if (!coi.has(args[ctr])) {
          coi.set(args[ctr], new WeakMap());
        }
        coi = coi.get(args[ctr]);
        ctr++;
      }
      if (coi.has(args[args.length - 1])) {
        let ret = coi.get(args[ctr]);
        if (registered[ret.toString().substring(4)]) {
          return ret;
        }
      }
    }
    let value = fn(args);
    if (inputCaches[args.length]) {
      let ctr = 0, coi = inputCaches[args.length];
      while (ctr < args.length - 1) {
        coi = coi.get(args[ctr]);
        ctr++;
      }
      try {
        coi.set(args[ctr], value);
      } catch (err) {
        if (isDev && !warnedWeakMapError) {
          warnedWeakMapError = true;
          console.warn("failed setting the WeakMap cache for args:", ...args);
          console.warn("this should NOT happen, please file a bug on the github repo.");
        }
      }
    }
    return value;
  };
}
let cachedCss = typeof WeakMap !== "undefined" ? multiIndexCache(_css) : _css;
function css(...rules) {
  if (rules[0] && rules[0].length && rules[0].raw) {
    throw new Error("you forgot to include glamor/babel in your babel plugins.");
  }
  rules = clean(rules);
  if (!rules) {
    return nullrule;
  }
  return cachedCss(rules);
}
css.insert = (css2) => {
  let spec = {
    id: hashify(css2),
    css: css2,
    type: "raw"
  };
  register(spec);
  if (!inserted[spec.id]) {
    styleSheet.insert(spec.css);
    inserted[spec.id] = isBrowser ? true : [spec.css];
  }
};
const insertRule = css.insert;
css.global = (selector2, style2) => {
  style2 = clean(style2);
  if (style2) {
    return css.insert(toCSS({selector: selector2, style: style2}));
  }
};
const insertGlobal = css.global;
function insertKeyframe(spec) {
  if (!inserted[spec.id]) {
    let inner = Object.keys(spec.keyframes).map((kf) => {
      let result = plugins2.keyframes.transform({id: spec.id, name: kf, style: spec.keyframes[kf]});
      return `${result.name}{${createMarkupForStyles(result.style)}}`;
    }).join("");
    const rules = ["-webkit-", "-moz-", "-o-", ""].map((prefix) => `@${prefix}keyframes ${spec.name + "_" + spec.id}{${inner}}`);
    rules.forEach((rule) => styleSheet.insert(rule));
    inserted[spec.id] = isBrowser ? true : rules;
  }
}
css.keyframes = (name, kfs) => {
  if (!kfs) {
    kfs = name, name = "animation";
  }
  kfs = clean(kfs) || {};
  let spec = {
    id: hashify({name, kfs}),
    type: "keyframes",
    name,
    keyframes: kfs
  };
  register(spec);
  insertKeyframe(spec);
  return name + "_" + spec.id;
};
css.fontFace = (font) => {
  font = clean(font);
  let spec = {
    id: hashify(font),
    type: "font-face",
    font
  };
  register(spec);
  insertFontFace(spec);
  return font.fontFamily;
};
const fontFace = css.fontFace;
const keyframes = css.keyframes;
function insertFontFace(spec) {
  if (!inserted[spec.id]) {
    const rule = `@font-face{${createMarkupForStyles(spec.font)}}`;
    styleSheet.insert(rule);
    inserted[spec.id] = isBrowser ? true : [rule];
  }
}
function rehydrate(ids) {
  object_assign.default(inserted, ids.reduce((o, i) => (o[i] = true, o), {}));
}
function flush() {
  inserted = styleSheet.inserted = {};
  registered = styleSheet.registered = {};
  ruleCache = {};
  styleSheet.flush();
  styleSheet.inject();
}
const presets = {
  mobile: "(min-width: 400px)",
  Mobile: "@media (min-width: 400px)",
  phablet: "(min-width: 550px)",
  Phablet: "@media (min-width: 550px)",
  tablet: "(min-width: 750px)",
  Tablet: "@media (min-width: 750px)",
  desktop: "(min-width: 1000px)",
  Desktop: "@media (min-width: 1000px)",
  hd: "(min-width: 1200px)",
  Hd: "@media (min-width: 1200px)"
};
const style = css;
function select(selector2, ...styles) {
  if (!selector2) {
    return style(styles);
  }
  return css({[selector2]: styles});
}
const $ = select;
function parent(selector2, ...styles) {
  return css({[`${selector2} &`]: styles});
}
const merge = css;
const compose = css;
function media(query, ...rules) {
  return css({[`@media ${query}`]: rules});
}
function pseudo(selector2, ...styles) {
  return css({[selector2]: styles});
}
function active(x) {
  return pseudo(":active", x);
}
function any(x) {
  return pseudo(":any", x);
}
function checked(x) {
  return pseudo(":checked", x);
}
function disabled(x) {
  return pseudo(":disabled", x);
}
function empty(x) {
  return pseudo(":empty", x);
}
function enabled(x) {
  return pseudo(":enabled", x);
}
function _default(x) {
  return pseudo(":default", x);
}
function first(x) {
  return pseudo(":first", x);
}
function firstChild(x) {
  return pseudo(":first-child", x);
}
function firstOfType(x) {
  return pseudo(":first-of-type", x);
}
function fullscreen(x) {
  return pseudo(":fullscreen", x);
}
function focus(x) {
  return pseudo(":focus", x);
}
function hover(x) {
  return pseudo(":hover", x);
}
function indeterminate(x) {
  return pseudo(":indeterminate", x);
}
function inRange(x) {
  return pseudo(":in-range", x);
}
function invalid(x) {
  return pseudo(":invalid", x);
}
function lastChild(x) {
  return pseudo(":last-child", x);
}
function lastOfType(x) {
  return pseudo(":last-of-type", x);
}
function left(x) {
  return pseudo(":left", x);
}
function link(x) {
  return pseudo(":link", x);
}
function onlyChild(x) {
  return pseudo(":only-child", x);
}
function onlyOfType(x) {
  return pseudo(":only-of-type", x);
}
function optional(x) {
  return pseudo(":optional", x);
}
function outOfRange(x) {
  return pseudo(":out-of-range", x);
}
function readOnly(x) {
  return pseudo(":read-only", x);
}
function readWrite(x) {
  return pseudo(":read-write", x);
}
function required(x) {
  return pseudo(":required", x);
}
function right(x) {
  return pseudo(":right", x);
}
function root(x) {
  return pseudo(":root", x);
}
function scope(x) {
  return pseudo(":scope", x);
}
function target(x) {
  return pseudo(":target", x);
}
function valid(x) {
  return pseudo(":valid", x);
}
function visited(x) {
  return pseudo(":visited", x);
}
function dir(p, x) {
  return pseudo(`:dir(${p})`, x);
}
function lang(p, x) {
  return pseudo(`:lang(${p})`, x);
}
function not(p, x) {
  let selector2 = p.split(",").map((x2) => x2.trim()).map((x2) => `:not(${x2})`);
  if (selector2.length === 1) {
    return pseudo(`:not(${p})`, x);
  }
  return select(selector2.join(""), x);
}
function nthChild(p, x) {
  return pseudo(`:nth-child(${p})`, x);
}
function nthLastChild(p, x) {
  return pseudo(`:nth-last-child(${p})`, x);
}
function nthLastOfType(p, x) {
  return pseudo(`:nth-last-of-type(${p})`, x);
}
function nthOfType(p, x) {
  return pseudo(`:nth-of-type(${p})`, x);
}
function after(x) {
  return pseudo("::after", x);
}
function before(x) {
  return pseudo("::before", x);
}
function firstLetter(x) {
  return pseudo("::first-letter", x);
}
function firstLine(x) {
  return pseudo("::first-line", x);
}
function selection(x) {
  return pseudo("::selection", x);
}
function backdrop(x) {
  return pseudo("::backdrop", x);
}
function placeholder(x) {
  return css({"::placeholder": x});
}
function cssFor(...rules) {
  rules = clean(rules);
  return rules ? rules.map((r) => {
    let style2 = {label: []};
    build(style2, {src: r});
    return deconstructedStyleToCSS(hashify(style2), deconstruct(style2)).join("");
  }).join("") : "";
}
function attribsFor(...rules) {
  rules = clean(rules);
  let htmlAttributes = rules ? rules.map((rule) => {
    idFor(rule);
    let key = Object.keys(rule)[0], value = rule[key];
    return `${key}="${value || ""}"`;
  }).join(" ") : "";
  return htmlAttributes;
}
export {
  $,
  _default,
  active,
  after,
  any,
  attribsFor,
  backdrop,
  before,
  checked,
  compose,
  css,
  cssFor,
  cssLabels,
  dir,
  disabled,
  empty,
  enabled,
  first,
  firstChild,
  firstLetter,
  firstLine,
  firstOfType,
  flush,
  focus,
  fontFace,
  fullscreen,
  hover,
  idFor,
  inRange,
  indeterminate,
  insertGlobal,
  insertRule,
  invalid,
  isLikeRule,
  keyframes,
  lang,
  lastChild,
  lastOfType,
  left,
  link,
  media,
  merge,
  not,
  nthChild,
  nthLastChild,
  nthLastOfType,
  nthOfType,
  onlyChild,
  onlyOfType,
  optional,
  outOfRange,
  parent,
  placeholder,
  plugins2 as plugins,
  presets,
  pseudo,
  readOnly,
  readWrite,
  rehydrate,
  required,
  right,
  root,
  scope,
  select,
  selection,
  simulate,
  simulations,
  speedy,
  style,
  styleSheet,
  target,
  valid,
  visited
};
