import {
  CustomizedCollection_default
} from "/build/_shared/chunk-XTHZ4SJS.js";
import {
  ImageCarousel_default,
  YouTubeVideo_default
} from "/build/_shared/chunk-BQTNZJYF.js";
import "/build/_shared/chunk-OOZLT3E7.js";
import {
  ProductCarousel_default
} from "/build/_shared/chunk-TYB6PR6B.js";
import {
  MdChevronLeft,
  MdChevronRight
} from "/build/_shared/chunk-AQMJZ442.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import "/build/_shared/chunk-VY5OJHMS.js";
import {
  Await,
  NavLink,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale)._index.jsx
var import_react13 = __toESM(require_react());

// app/components/CustomizedProducts.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel = ({ products, title }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  var len = products.length;
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const eIndex = isLargeScreen ? len <= 4 ? len : 3 : 2;
  const [endIndex, setEndIndex] = (0, import_react.useState)(eIndex);
  const productsToShow = products.slice(startIndex, endIndex);
  const nextProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  const prevProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1 m-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor mst-card bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/products/${product.node.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: `${product.node.images.edges.length > 0 ? product.node.images.edges[0].node.url : noImg}`,
          alt: product.name,
          className: "w-full h-auto rounded-lg"
        },
        void 0,
        false,
        {
          fileName: "app/components/CustomizedProducts.jsx",
          lineNumber: 34,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 32,
        columnNumber: 19
      }, this) }, product.id, false, {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "absolute lg:left-[-90px] top-1/2 transform bg-white -translate-y-1/2 bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white mst-arrow",
          onClick: () => prevProducts(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            MdChevronLeft,
            {
              className: "opacity-50 cursor-pointer hover:opacity-100",
              size: 20
            },
            void 0,
            false,
            {
              fileName: "app/components/CustomizedProducts.jsx",
              lineNumber: 49,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/CustomizedProducts.jsx",
          lineNumber: 45,
          columnNumber: 13
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
              className: "opacity-50 cursor-pointer hover:opacity-100",
              size: 20
            },
            void 0,
            false,
            {
              fileName: "app/components/CustomizedProducts.jsx",
              lineNumber: 58,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/CustomizedProducts.jsx",
          lineNumber: 54,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this);
};
var DesktopCorousel = ({ products, title }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  var len = products.length;
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const eIndex = isLargeScreen ? len <= 4 ? len : 4 : 2;
  const [endIndex, setEndIndex] = (0, import_react.useState)(eIndex);
  const productsToShow = products.slice(startIndex, endIndex);
  const nextProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  const prevProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 94,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor mst-card bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/products/${product.node.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: `${product.node?.images ? product.node.images.edges[0].node.url : noImg}`,
        alt: product.name,
        className: "w-full h-auto rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 100,
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 99,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 98,
      columnNumber: 19
    }, this) }, product.id, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 97,
      columnNumber: 17
    }, this)) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute left-[5px] top-1/2 transform  bg-white bg-opacity-50 rounded-full ml-1 p-2 mr-2 hover:bg-opacity-75 mst-arrow",
        onClick: () => prevProducts(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 20
          },
          void 0,
          false,
          {
            fileName: "app/components/CustomizedProducts.jsx",
            lineNumber: 115,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 111,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform  bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75 mst-arrow",
        onClick: () => nextProducts(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 20
          },
          void 0,
          false,
          {
            fileName: "app/components/CustomizedProducts.jsx",
            lineNumber: 124,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 120,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 93,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
};
var CustomizedProducts = ({ products, title }) => {
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      MobileProductCorousel,
      {
        products,
        title
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 142,
        columnNumber: 9
      },
      this
    ),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopCorousel, { products, title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 148,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 140,
    columnNumber: 5
  }, this);
};
var CustomizedProducts_default = CustomizedProducts;

// app/routes/($locale)._index.jsx
var import_react_responsive3 = __toESM(require_react_responsive());

// app/components/BlogCorousel.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel2 = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center mt-0 lg:text-[28px] text-[20px]", children: title }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-2 overflow-y-auto", children: products.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white  rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "mst-card lg:w-full lg:h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 w-[320px] h-[80%] sm:h-[40%]"
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 23,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 21,
      columnNumber: 14
    }, this)) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 19,
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
var DesktopCorousel2 = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  const productsToShow = products.nodes.slice(startIndex, startIndex + 3);
  const isMobile = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 58,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white  rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "mst-card w-full h-auto rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 64,
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 63,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 62,
      columnNumber: 17
    }, this) }, product.id, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 61,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 59,
      columnNumber: 11
    }, this),
    products.length > 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75 text-white",
          onClick: () => setStartIndex(
            (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            MdChevronLeft,
            {
              className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
              size: 40
            },
            void 0,
            false,
            {
              fileName: "app/components/BlogCorousel.jsx",
              lineNumber: 87,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/BlogCorousel.jsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75 text-white",
          onClick: () => setStartIndex((prevIndex) => (prevIndex + 3) % products.length),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            MdChevronRight,
            {
              className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
              size: 40
            },
            void 0,
            false,
            {
              fileName: "app/components/BlogCorousel.jsx",
              lineNumber: 98,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/BlogCorousel.jsx",
          lineNumber: 92,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
};
var BlogCorousel = ({ collections, title }) => {
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileProductCorousel2, { products: collections, title }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DesktopCorousel2, { products: collections, title }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 123,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
};
var BlogCorousel_default = BlogCorousel;

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/providers/JudgemeLoader.js
var import_react3 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeCarousel.js
var import_react4 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeMedals.js
var import_react5 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeReviewWidget.js
var import_react6 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeAllReviewsCount.js
var import_react7 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeAllReviewsRating.js
var import_react8 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemePreviewBadge.js
var import_react9 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeVerifiedBadge.js
var import_react10 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeReviewsTab.js
var import_react11 = __toESM(require_react());

// app/routes/($locale)._index.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Hydrogen | Home" }];
};
function Homepage() {
  const noImg = "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_600x600.gif";
  const data = useLoaderData();
  const { header } = data;
  var menus = header.menu.items;
  var collectionArray = menus.filter((item) => item.title !== "Home");
  const imageSrc = [
    "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_1.jpg?v=1708767049",
    "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_3_opt_1.jpg?v=1708767048",
    "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_4_opt_2.jpg?v=1708767048",
    "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_5_opt_2.jpg?v=1708767048"
  ];
  const isLargeScreen = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  var GiftCollections = [];
  var ReviewCollection = [];
  var BuildYourOwnColl = [];
  var ThirdHeroCollection = [];
  collectionArray.map((col, index) => {
    let collNodes = data.collections.nodes;
    collectionArray[index]["image"] = { "url": noImg };
    collNodes.map((item) => {
      if (item.title.trim() === col.title.trim()) {
        let isImg = item.image?.url;
        collectionArray[index]["handle"] = col.title.toLowerCase();
        collectionArray[index]["image"] = { "url": isImg ? isImg : noImg };
      }
      ;
    });
  });
  data.collectionProducts.nodes.forEach((col) => {
    if (col.metafields[0] != null && col.metafields[0].value == "true") {
      ReviewCollection.push(col);
    }
    if (col.title == "Build Your Own Kit") {
      BuildYourOwnColl.push(col);
    }
    if (col.title == "3rd Hero Collection") {
      ThirdHeroCollection.push(col);
    }
    if (col.title == "Gift Under 500" || col.title == "Gift Under 1000" || col.title == "Gifts Under 2000") {
      GiftCollections.push(col);
    }
  });
  BuildYourOwnColl = BuildYourOwnColl[0].products.edges;
  ThirdHeroCollection = ThirdHeroCollection[0].products;
  GiftCollections = GiftCollections;
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "home", children: [
    isSmall ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "collectionContent lg:hidden block sm:mt-4 overflow-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inline-flex gap-4 w-[100%]", children: collectionArrayStatic?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: " col-item sm:w-auto  rounded-lg hover:shadow-md cursor-pointer",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: `/collections/${item.collectionname}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "img",
            {
              width: 80,
              height: 80,
              alt: item.collectionname,
              src: item.collectionimageurl,
              style: {
                width: "80px",
                borderRadius: "50%",
                border: "1px solid #e5e5e5"
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale)._index.jsx",
              lineNumber: 126,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 125,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "collectionname  sm:text-lg text-[12px] font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]", children: item.collectionname }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 139,
            columnNumber: 15
          }, this)
        ]
      },
      index,
      true,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 120,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ImageCarousel_default, { isSmall, images: imageSrc }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 150,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      RecommendedProducts,
      {
        products: data.collectionProducts.nodes[0].products,
        title: data.collectionProducts.nodes[0].title
      },
      data.collectionProducts.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 157,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      CustomizedProducts_default,
      {
        products: BuildYourOwnColl,
        title: "Build Your Own Kit"
      },
      data.products.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 163,
        columnNumber: 7
      },
      this
    ),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/face", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Hero-banner.jpg?v=1703656662",
        className: "rounded-2xl mt-[15px]"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 172,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 171,
      columnNumber: 9
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/face", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        style: { height: "250px" },
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Hero-banner.jpg?v=1703656662",
        className: "rounded-2xl w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 180,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 179,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      RecommendedProducts,
      {
        products: data.collectionProducts.nodes[1].products,
        title: data.collectionProducts.nodes[1].title
      },
      data.collectionProducts.nodes[1].id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomizedCollection_default, { collections: GiftCollections, title: "Gifting" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 194,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(YouTubeVideo_default, {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 195,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lookbook_Banner.jpg?v=1709971241",
        className: "rounded-2xl"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 199,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 198,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 197,
      columnNumber: 10
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        style: { height: "250px" },
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lookbook_Banner.jpg?v=1709971241",
        className: "rounded-2xl w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 209,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 208,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 207,
      columnNumber: 9
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Daily_Essentials_banner.jpg?v=1709971600",
        className: "rounded-2xl"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 221,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 220,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 219,
      columnNumber: 10
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        style: { height: "250px" },
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Daily_Essentials_banner.jpg?v=1709971600",
        className: "rounded-2xl w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 231,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 230,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 229,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      RecommendedProducts,
      {
        products: ThirdHeroCollection,
        title: "3rd Hero Collection"
      },
      ThirdHeroCollection.edges[0].node.id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 240,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomizedCollection_default, { collections: collectionArray, title: "Choose Your Own Fashion" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 252,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 251,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BlogCorousel_default, { collections: data.blogs, title: "blogs" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 256,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 282,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react13.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 284,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductCarousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 287,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 285,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 284,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 290,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 283,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 281,
    columnNumber: 5
  }, this);
}
var MENU_FRAGMENT = `#graphql
  fragment Menu on Menu {
    id
    items {
      id
      title
      url
      items{
        title
        url
      }
    }
  }
`;
var HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
var collectionArrayStatic = [
  {
    collectionname: "Moisturizer",
    url: "/collections/moisturizer",
    collectionimageurl: "/collection/Moisturizer.webp"
  },
  {
    collectionname: "Cream",
    url: "/collections/cream",
    collectionimageurl: "/collection/Cream.webp"
  },
  {
    collectionname: "Scrub",
    url: "/collections/scrub",
    collectionimageurl: "/collection/Scrub.webp"
  },
  {
    collectionname: "Serum",
    url: "/collections/serum",
    collectionimageurl: "/collection/Serum.webp"
  },
  {
    collectionname: "Face Wash",
    url: "/collections/face",
    collectionimageurl: "/collection/Foaming-Face-Wash.jpg"
  },
  {
    collectionname: "Face Wash",
    url: "/collections/face-wash",
    collectionimageurl: "/collection/Face-Wash.jpg"
  }
];
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-L5GTP3LS.js.map
