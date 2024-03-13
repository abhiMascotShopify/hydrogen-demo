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
var DesktopCorousel = ({ products, title }) => {
  let productsToShow = [];
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  const [endIndex, setEndIndex] = (0, import_react.useState)(eIndex);
  var len = products.length;
  if (products != null || products != void 0) {
    productsToShow = products.slice(startIndex, endIndex);
    console.log("productsToShow::", productsToShow);
  }
  const nextProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  const prevProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  const goToCollection = (url_path) => {
    window.location.href = url_path;
  };
  return (
    // <div className="w-full max-w-screen-2xl mx-auto px-1">
    //   <div className="relative">
    //     <h1 className="text-center lg:text=[28px] text-[20px] mt-[15px]">
    //     {title}
    //     </h1>
    //     <div className="flex gap-4 overflow-y-auto">
    // {products.map((product) => (     
    //   <img
    //     onClick={()=> goToCollection(`/collections/${product.handle}`)}
    //     src={`${product.image.url}`} // Make sure to put your images in the 'public/images/' directory
    //     alt={product.title}
    //     className="lg:w-full lg:h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 h-[40%] w:[100%] sm:w-[375px] sm:w-[250px]   cursor"
    //   />
    // ))}
    //     </div>
    //   </div>
    // </div>
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center lg:text=[28px] text-[20px] mt-[15px]", children: title }, void 0, false, {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 54,
        columnNumber: 1
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: productsToShow.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mst-card rounded-lg shadow-lg p-1 sm:p-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            onClick: () => goToCollection(`/collections/${product.handle}`),
            src: `${product.image.url}`,
            alt: product.title,
            className: "lg:w-full lg:h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 h-[40%] w:[100%] sm:w-[375px] sm:w-[250px]   cursor"
          },
          void 0,
          false,
          {
            fileName: "app/components/CustomizedCollection.jsx",
            lineNumber: 65,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/CustomizedCollection.jsx",
          lineNumber: 63,
          columnNumber: 13
        }, this) }, product.id, false, {
          fileName: "app/components/CustomizedCollection.jsx",
          lineNumber: 62,
          columnNumber: 9
        }, this)) }, void 0, false, {
          fileName: "app/components/CustomizedCollection.jsx",
          lineNumber: 60,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "absolute lg:left-[-90px] top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white mst-arrow",
            onClick: () => prevProducts(),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              MdChevronLeft,
              {
                className: "opacity-50 cursor-pointer hover:opacity-100 ",
                size: 40
              },
              void 0,
              false,
              {
                fileName: "app/components/CustomizedCollection.jsx",
                lineNumber: 81,
                columnNumber: 5
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/CustomizedCollection.jsx",
            lineNumber: 77,
            columnNumber: 3
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            className: "absolute lg:right-[-90px] right-0 top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white mst-arrow",
            onClick: () => nextProducts(),
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
                lineNumber: 90,
                columnNumber: 5
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/CustomizedCollection.jsx",
            lineNumber: 86,
            columnNumber: 3
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 57,
        columnNumber: 1
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 53,
      columnNumber: 1
    }, this)
  );
};
var CustomizedCollection = ({ collections, title }) => {
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopCorousel, { products: collections, title }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 178,
    columnNumber: 8
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
};
var CustomizedCollection_default = CustomizedCollection;

export {
  CustomizedCollection_default
};
//# sourceMappingURL=/build/_shared/chunk-XTHZ4SJS.js.map
