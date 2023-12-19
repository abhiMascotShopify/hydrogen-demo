import {
  ImageCarousel_default,
  ProductCarousel_default,
  YouTubeVideo_default
} from "/build/_shared/chunk-3VT5SA3K.js";
import "/build/_shared/chunk-RGNCV552.js";
import {
  MdChevronLeft,
  MdChevronRight,
  require_react_responsive
} from "/build/_shared/chunk-PWHQKGDM.js";
import "/build/_shared/chunk-ENQ62WDJ.js";
import {
  Await,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale)._index.jsx
var import_react5 = __toESM(require_react());

// app/components/CustomizedProducts.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const productsToShow = products.slice(startIndex, startIndex + 5);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex overflow-y-auto", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: `${product.images.nodes[0].url}`,
        alt: product.name,
        className: "w-full h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 19,
        columnNumber: 17
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};
var DesktopCorousel = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const productsToShow = products.slice(startIndex, startIndex + 3);
  const isMobile = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: `${product.images.nodes[0].url}`,
        alt: product.name,
        className: "w-full h-auto rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 60,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, product.id, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full ml-1 hover:bg-opacity-75",
        onClick: () => setStartIndex(
          (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdChevronLeft, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 20 }, void 0, false, {
          fileName: "app/components/CustomizedProducts.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex((prevIndex) => (prevIndex + 3) % products.length),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdChevronRight, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 20 }, void 0, false, {
          fileName: "app/components/CustomizedProducts.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 80,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
var CustomizedProducts = ({ products, title }) => {
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileProductCorousel, { products, title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 101,
      columnNumber: 17
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopCorousel, { products, title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 102,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
};
var CustomizedProducts_default = CustomizedProducts;

// app/routes/($locale)._index.jsx
var import_react_responsive4 = __toESM(require_react_responsive());

// app/components/CustomizedCollection.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel2 = ({ products }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center", children: "Choose Your Own Fashion" }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex overflow-y-auto", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.image.url}`,
        alt: product.title,
        className: "w-full h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 19,
        columnNumber: 17
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};
var DesktopCorousel2 = ({ products }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  const productsToShow = products.slice(startIndex, startIndex + 3);
  const isMobile = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center", children: "Choose Your Own Fashion" }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/collections/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.image.url}`,
        alt: product.title,
        className: "w-full h-auto rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 60,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 59,
      columnNumber: 66
    }, this) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, product.id, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full ml-1 hover:bg-opacity-75",
        onClick: () => setStartIndex(
          (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MdChevronLeft, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 20 }, void 0, false, {
          fileName: "app/components/CustomizedCollection.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 71,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex((prevIndex) => (prevIndex + 3) % products.length),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MdChevronRight, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 20 }, void 0, false, {
          fileName: "app/components/CustomizedCollection.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedCollection.jsx",
        lineNumber: 81,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
var CustomizedCollection = ({ collections }) => {
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileProductCorousel2, { products: collections }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 102,
      columnNumber: 17
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DesktopCorousel2, { products: collections }, void 0, false, {
      fileName: "app/components/CustomizedCollection.jsx",
      lineNumber: 103,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedCollection.jsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
};
var CustomizedCollection_default = CustomizedCollection;

// app/components/BlogCorousel.jsx
var import_react3 = __toESM(require_react());
var import_react_responsive3 = __toESM(require_react_responsive());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel3 = ({ products }) => {
  const [startIndex, setStartIndex] = (0, import_react3.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-center", children: "Choose Your Own Fashion" }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex overflow-y-auto", children: products.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "w-full h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3"
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 19,
        columnNumber: 17
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};
var DesktopCorousel3 = ({ products }) => {
  const [startIndex, setStartIndex] = (0, import_react3.useState)(0);
  const productsToShow = products.nodes.slice(startIndex, startIndex + 3);
  const isMobile = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-center", children: "Blogs" }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "w-full h-auto rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 60,
        columnNumber: 54
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, product.id, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex(
          (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MdChevronLeft, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 20 }, void 0, false, {
          fileName: "app/components/BlogCorousel.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 71,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex((prevIndex) => (prevIndex + 3) % products.length),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MdChevronRight, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 20 }, void 0, false, {
          fileName: "app/components/BlogCorousel.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 81,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
var BlogCorousel = ({ collections }) => {
  const isLargeScreen = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileProductCorousel3, { products: collections }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 102,
      columnNumber: 17
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DesktopCorousel3, { products: collections }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 103,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
};
var BlogCorousel_default = BlogCorousel;

// app/routes/($locale)._index.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Hydrogen | Home" }];
};
function Homepage() {
  const data = useLoaderData();
  const imageSrc = [
    "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
  ];
  const isLargeScreen = (0, import_react_responsive4.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive4.useMediaQuery)({ maxWidth: 640 });
  var GiftCollections = [];
  var ReviewCollection = [];
  data.collectionProducts.nodes.forEach((col) => {
    if (col.metafields[0] != null && col.metafields[0].value == "true") {
      ReviewCollection.push(col);
    }
    if (col.metafields[1] != null && col.metafields[1].value == "true") {
      GiftCollections.push(col);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ImageCarousel_default, { images: imageSrc }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecommendedProducts, { products: data.collectionProducts.nodes[0].products, title: data.collectionProducts.nodes[0].title }, data.collectionProducts.nodes[0].id, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomizedProducts_default, { products: data.products.nodes }, data.products.nodes[0].id, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Banner1.jpg", className: "rounded-2xl" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 93,
      columnNumber: 25
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Liquid-concealer_1c3a4678-78f2-4c94-921b-cf77022205f7.jpg?v=1695059222", className: "rounded-2xl" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 98,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 97,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecommendedProducts, { products: data.collectionProducts.nodes[1].products, title: data.collectionProducts.nodes[1].title }, data.collectionProducts.nodes[1].id, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomizedCollection_default, { collections: GiftCollections, title: "Gifting" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(YouTubeVideo_default, {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Banner1.jpg", className: "rounded-2xl" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 105,
      columnNumber: 25
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "my-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Liquid-concealer_1c3a4678-78f2-4c94-921b-cf77022205f7.jpg?v=1695059222", className: "rounded-2xl" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 110,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 109,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecommendedProducts, { products: data.collectionProducts.nodes[2].products, title: data.collectionProducts.nodes[2].title }, data.collectionProducts.nodes[2].id, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomizedCollection_default, { collections: ReviewCollection, title: "From Customer's Inbox" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BlogCorousel_default, { collections: data.blogs }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  const data = [
    "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-center", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 161,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 163,
        columnNumber: 27
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProductCarousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 166,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 164,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 163,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 169,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 162,
      columnNumber: 3
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 160,
    columnNumber: 5
  }, this);
}
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-AM7PFHTG.js.map
