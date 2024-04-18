import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/OfferCarousel.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OfferCarousel = (collections) => {
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const productsToShow = collections.collections;
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 3
    );
  };
  const goToCollection = (url_path) => {
    window.location.href = url_path;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: " Special Offers " }, void 0, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex-auto sm:w-1/2 md:w-1/3 py-2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          onClick: () => goToCollection(`/collections/${product.handle}`),
          src: `${product.image.url}`,
          alt: product.name,
          className: "w-full h-auto"
        },
        void 0,
        false,
        {
          fileName: "app/components/OfferCarousel.jsx",
          lineNumber: 32,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-rows-1 grid-flow-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-6" }, void 0, false, {
          fileName: "app/components/OfferCarousel.jsx",
          lineNumber: 40,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "coupan_code_wrapper cursor outline-dotted p-2 auto-cols-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: [
            product.description,
            " \xA0 "
          ] }, void 0, true, {
            fileName: "app/components/OfferCarousel.jsx",
            lineNumber: 42,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { height: "30", width: "30", className: "flex justify-center align-center", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { className: "w-8 flex justify-center align-center", fill: "none" }, void 0, false, {
              fileName: "app/components/OfferCarousel.jsx",
              lineNumber: 43,
              columnNumber: 149
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "216 184 216 40 72 40", fill: "none", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "8" }, void 0, false, {
              fileName: "app/components/OfferCarousel.jsx",
              lineNumber: 43,
              columnNumber: 217
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "40", y: "72", width: "144", height: "144", fill: "none", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "8" }, void 0, false, {
              fileName: "app/components/OfferCarousel.jsx",
              lineNumber: 43,
              columnNumber: 348
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/OfferCarousel.jsx",
            lineNumber: 43,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/OfferCarousel.jsx",
          lineNumber: 41,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/OfferCarousel.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 31,
      columnNumber: 15
    }, this) }, product.id, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OfferCarousel.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/OfferCarousel.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
var OfferCarousel_default = OfferCarousel;

export {
  OfferCarousel_default
};
//# sourceMappingURL=/build/_shared/chunk-ELALKRQN.js.map
