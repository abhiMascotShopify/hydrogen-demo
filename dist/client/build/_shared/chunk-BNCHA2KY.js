import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-MR3EULDF.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/ShopifyCarousel.jsx
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/md/index.esm.js
function MdChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" } }] })(props);
}
function MdChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" } }] })(props);
}

// app/components/ShopifyCarousel.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ShopifyCarousel({ products }) {
  console.log(products.edges[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdChevronLeft, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 40 }, void 0, false, {
      fileName: "app/components/ShopifyCarousel.jsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        id: "slider",
        className: "w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide",
        children: products.edges.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              className: "md:w-[220px] sm:w-[50px] p-2 cursor-pointer hover:scale-105 ease-in-out duration-300",
              src: item.node.images.edges[0].node.url,
              alt: "/"
            },
            void 0,
            false,
            {
              fileName: "app/components/ShopifyCarousel.jsx",
              lineNumber: 81,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${item.node.handle}`, children: item.node.title }, void 0, false, {
            fileName: "app/components/ShopifyCarousel.jsx",
            lineNumber: 87,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/ShopifyCarousel.jsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "rounded bg-indigo-500", children: "Add to cart" }, void 0, false, {
            fileName: "app/components/ShopifyCarousel.jsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ShopifyCarousel.jsx",
          lineNumber: 80,
          columnNumber: 13
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/components/ShopifyCarousel.jsx",
        lineNumber: 75,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MdChevronRight,
      {
        className: "opacity-50 cursor-pointer hover:opacity-100",
        size: 40,
        onClick: () => console.log("Button Clicked")
      },
      void 0,
      false,
      {
        fileName: "app/components/ShopifyCarousel.jsx",
        lineNumber: 92,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ShopifyCarousel.jsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ShopifyCarousel.jsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
var ShopifyCarousel_default = ShopifyCarousel;

export {
  ShopifyCarousel_default
};
//# sourceMappingURL=/build/_shared/chunk-BNCHA2KY.js.map
