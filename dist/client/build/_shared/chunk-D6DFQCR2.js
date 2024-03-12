import {
  MdChevronLeft,
  MdChevronRight
} from "/build/_shared/chunk-AQMJZ442.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/CustomizedCollection.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const goToCollection = (url_path) => {
    window.location.href = url_path;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center lg:text=[28px] text-[20px] mt-[15px]", children: title }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 overflow-y-auto", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        onClick: () => goToCollection(`/collections/${product.handle}`),
        src: `${product.image.url}`,
        alt: product.title,
        className: "lg:w-full lg:h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 h-[40%] w-[375px] sm:w-[250px]   cursor"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 22,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
var DesktopCorousel = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const productsToShow = products.slice(startIndex, startIndex + 3);
  const isMobile = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % products.length);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor mst-card bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/collections/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: product.image?.url,
        alt: product.title,
        className: "w-full h-auto rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 61,
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 60,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 59,
      columnNumber: 17
    }, this) }, product.id, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 58,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 56,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white",
        onClick: () => setStartIndex(
          (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/CustomizedCollection.jsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 74,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white",
        onClick: () => setStartIndex((prevIndex) => (prevIndex + 3) % products.length),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/CustomizedCollection.jsx",
            lineNumber: 95,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 89,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 54,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
var CustomizedCollection = ({ collections, title }) => {
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileProductCorousel, { products: collections, title }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 114,
      columnNumber: 9
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopCorousel, { products: collections, title }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
};
var CustomizedCollection_default = CustomizedCollection;

export {
  CustomizedCollection_default
};
//# sourceMappingURL=/build/_shared/chunk-D6DFQCR2.js.map
