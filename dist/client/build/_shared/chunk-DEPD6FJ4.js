import {
  MdChevronLeft,
  MdChevronRight,
  require_react_responsive
} from "/build/_shared/chunk-F7TROZH4.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ProductsCorousel.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductsCorousel = ({ products }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  let productsToShow = [];
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const endIndex = isLargeScreen ? 4 : 2;
  if (products != null || products != void 0) {
    productsToShow = products.edges.slice(startIndex, startIndex + endIndex);
  }
  const goToProduct = (url_path) => {
    window.location.href = url_path;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mobile-productView", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "w-full sm:w-1/3 md:w-1/3 lg:px-4 sm:px-1 md:px-3",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mst-card bg-white rounded-lg shadow-lg p-2 shadow-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor", onClick: () => goToProduct(`/products/${product.node.handle}`), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                src: `${product.node.images.edges.length > 0 ? product.node.images.edges[0].node.url : noImg}`,
                alt: product.node.title,
                className: "w-full h-auto"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductsCorousel.jsx",
                lineNumber: 52,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center", children: product.node.title }, void 0, false, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 57,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-bold h-full w-full m-auto", children: "\u20B9255" }, void 0, false, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 61,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 60,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductsCorousel.jsx",
            lineNumber: 51,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-1 py-1 flex justify-between items-center  sm:flex-row flex-row", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 32 33",
                xmlSpace: "preserve",
                width: "2.8em",
                height: "2.8em",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      d: "M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z",
                      fill: "rgb(255, 255, 255)",
                      stroke: "rgb(0, 0, 0)"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/ProductsCorousel.jsx",
                      lineNumber: 76,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      d: "M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z",
                      fill: "none",
                      stroke: "rgb(0, 0, 0)"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/ProductsCorousel.jsx",
                      lineNumber: 81,
                      columnNumber: 23
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/ProductsCorousel.jsx",
                lineNumber: 69,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full h-11 bg-black hover:bg-blue-700 text-white text-[13px] sm:text-[18px] font-bold py-1 px-1 rounded-lg", children: "ADD TO Pro" }, void 0, false, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 88,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductsCorousel.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductsCorousel.jsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)
      },
      product.node.id,
      false,
      {
        fileName: "app/components/ProductsCorousel.jsx",
        lineNumber: 47,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/ProductsCorousel.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75",
        onClick: () => setStartIndex(
          (prevIndex) => prevIndex === 0 ? products.edges.length - products.edges.length % 2 : prevIndex
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductsCorousel.jsx",
            lineNumber: 106,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductsCorousel.jsx",
        lineNumber: 96,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex(
          (prevIndex) => (prevIndex + 1) % products.edges.length
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductsCorousel.jsx",
            lineNumber: 119,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductsCorousel.jsx",
        lineNumber: 111,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ProductsCorousel.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductsCorousel.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
};
var ProductsCorousel_default = ProductsCorousel;

export {
  ProductsCorousel_default
};
//# sourceMappingURL=/build/_shared/chunk-DEPD6FJ4.js.map
