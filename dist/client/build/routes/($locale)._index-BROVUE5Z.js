import {
  CustomizedCollection_default
} from "/build/_shared/chunk-GHPMVKJO.js";
import {
  ImageCarousel_default,
  ProductCarousel_default,
  YouTubeVideo_default
} from "/build/_shared/chunk-4WQHT5WD.js";
import "/build/_shared/chunk-UFFJBRLD.js";
import {
  MdChevronLeft,
  MdChevronRight,
  require_react_responsive
} from "/build/_shared/chunk-F7TROZH4.js";
import "/build/_shared/chunk-VY5OJHMS.js";
import {
  Await,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale)._index.jsx
var import_react4 = __toESM(require_react());

// app/components/CustomizedProducts.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const productsToShow = products.slice(startIndex, startIndex + 5);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex overflow-y-auto product-40", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: `${product.node.images?.edges[0].node.url}`,
        alt: product.name,
        className: "w-full h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 mr-2"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 20,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
var DesktopCorousel = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const productsToShow = products.slice(startIndex, startIndex + 3);
  console.log("productsToShow::", productsToShow);
  const isMobile = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
    console.log("nextProducts INDEX ::", startIndex);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
    );
    console.log("prevProducts INDEX ::", startIndex);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: `${product.node.images?.edges[0].node.url}`,
        alt: product.name,
        className: "w-full h-auto rounded-lg"
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 60,
        columnNumber: 19
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 59,
      columnNumber: 17
    }, this) }, product.id, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 58,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 56,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute left-[5px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full ml-1 p-2 mr-2 hover:bg-opacity-75",
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
            lineNumber: 74,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 70,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
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
            lineNumber: 83,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/CustomizedProducts.jsx",
        lineNumber: 79,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 54,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 53,
    columnNumber: 7
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
        lineNumber: 101,
        columnNumber: 9
      },
      this
    ),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopCorousel, { products, title }, void 0, false, {
      fileName: "app/components/CustomizedProducts.jsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CustomizedProducts.jsx",
    lineNumber: 99,
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
var MobileProductCorousel2 = ({ products }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center mt-0 lg:text-[28px] text-[20px]", children: "Choose Your Own Fashion" }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-2 overflow-y-auto", children: products.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "lg:w-full lg:h-auto rounded-lg lg:px-5 sm:px-3 sm:mx-3 w-[250px] h-[40%]"
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 21,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
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
var DesktopCorousel2 = ({ products }) => {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center", children: "Blogs" }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 54,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 59,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 58,
      columnNumber: 17
    }, this) }, product.id, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 57,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex(
          (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 20
          },
          void 0,
          false,
          {
            fileName: "app/components/BlogCorousel.jsx",
            lineNumber: 81,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 71,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex((prevIndex) => (prevIndex + 3) % products.length),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 20
          },
          void 0,
          false,
          {
            fileName: "app/components/BlogCorousel.jsx",
            lineNumber: 92,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 86,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
};
var BlogCorousel = ({ collections }) => {
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileProductCorousel2, { products: collections }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DesktopCorousel2, { products: collections }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 115,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
};
var BlogCorousel_default = BlogCorousel;

// app/routes/($locale)._index.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
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
  const isLargeScreen = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  var GiftCollections = [];
  var ReviewCollection = [];
  var BuildYourOwnColl = [];
  var ThirdHeroCollection = [];
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "collectionContent lg:hidden block sm:mt-4 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inline-flex gap-4", children: collectionArray?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: " col-item sm:w-auto  rounded-lg hover:shadow-md cursor-pointer",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
              lineNumber: 105,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "collectionname  sm:text-lg text-[12px] font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]", children: item.collectionname }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this)
        ]
      },
      index,
      true,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 100,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ImageCarousel_default, { images: imageSrc }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 124,
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
        lineNumber: 132,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      CustomizedProducts_default,
      {
        products: BuildYourOwnColl
      },
      data.products.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 138,
        columnNumber: 7
      },
      this
    ),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/face", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Banner1.jpg",
        className: "rounded-2xl mt-[15px]"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 146,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 145,
      columnNumber: 9
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/face", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Liquid-concealer_1c3a4678-78f2-4c94-921b-cf77022205f7.jpg?v=1695059222",
        className: "rounded-2xl w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 154,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 153,
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
        lineNumber: 160,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomizedCollection_default, { collections: GiftCollections, title: "Gifting" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(YouTubeVideo_default, {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Banner1.jpg",
        className: "rounded-2xl"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 171,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 170,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 169,
      columnNumber: 10
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/Liquid-concealer_1c3a4678-78f2-4c94-921b-cf77022205f7.jpg?v=1695059222",
        className: "rounded-2xl w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 181,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 180,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 179,
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
        lineNumber: 189,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      CustomizedCollection_default,
      {
        collections: ReviewCollection,
        title: "From Customer's Inbox"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 196,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BlogCorousel_default, { collections: data.blogs }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 202,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 96,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 243,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 245,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductCarousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 248,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 246,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 245,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 251,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 244,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 242,
    columnNumber: 5
  }, this);
}
var collectionArray = [
  {
    collectionname: "Cream",
    collectionimageurl: "/collection/Cream.webp"
  },
  {
    collectionname: "Scrub",
    collectionimageurl: "/collection/Scrub.webp"
  },
  {
    collectionname: "Serum",
    collectionimageurl: "/collection/Serum.webp"
  },
  {
    collectionname: "Face Wash",
    collectionimageurl: "/collection/Face-Wash.jpg"
  },
  {
    collectionname: "Face Wash",
    collectionimageurl: "/collection/Foaming-Face-Wash.jpg"
  },
  {
    collectionname: "Serum",
    collectionimageurl: "/collection/Serum.webp"
  },
  {
    collectionname: "Face Wash",
    collectionimageurl: "/collection/Face-Wash.jpg"
  },
  {
    collectionname: "Face Wash",
    collectionimageurl: "/collection/Foaming-Face-Wash.jpg"
  }
];
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-BROVUE5Z.js.map
