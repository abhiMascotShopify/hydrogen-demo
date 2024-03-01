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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: "Special Offers" }, void 0, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex-auto sm:w-1/2 md:w-1/3 py-2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: `${product.image.url}`,
          alt: product.name,
          className: "w-full h-auto"
        },
        void 0,
        false,
        {
          fileName: "app/components/OfferCarousel.jsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "coupan_code_wrapper grid grid-rows-1 grid-flow-col gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "code", children: [
        " ",
        product.handle,
        " "
      ] }, void 0, true, {
        fileName: "app/components/OfferCarousel.jsx",
        lineNumber: 35,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/OfferCarousel.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 28,
      columnNumber: 15
    }, this) }, product.id, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OfferCarousel.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/OfferCarousel.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};
var OfferCarousel_default = OfferCarousel;

export {
  OfferCarousel_default
};
//# sourceMappingURL=/build/_shared/chunk-3XU2PDS5.js.map
