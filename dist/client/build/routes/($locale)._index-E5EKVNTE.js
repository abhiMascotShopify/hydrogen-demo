import {
  ImageCarousel_default,
  YouTubeVideo_default
} from "/build/_shared/chunk-ZLOZKK42.js";
import {
  ProductCarousel_default
} from "/build/_shared/chunk-XSDYRZGU.js";
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
var import_react4 = __toESM(require_react());

// app/components/GiftingCollection.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var GiftingCollection = ({ collections, title }) => {
  let productsToShow = [];
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const goToCollection = (url_path) => {
    window.location.href = url_path;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center lg:text=[28px] text-[20px] mt-[15px]", children: title }, void 0, false, {
      fileName: "app/components/GiftingCollection.jsx",
      lineNumber: 21,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: collections.map((coll, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-1 sm:p-2`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          onClick: () => goToCollection(`/collections/${coll.handle}`),
          src: coll.image.url,
          alt: coll.title,
          className: "lg:w-full lg:h-auto rounded-lg h-[40%] w:[100%] sm:w-[375px] sm:w-[250px]   cursor"
        },
        void 0,
        false,
        {
          fileName: "app/components/GiftingCollection.jsx",
          lineNumber: 29,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/GiftingCollection.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, `gift_${index}`, false, {
        fileName: "app/components/GiftingCollection.jsx",
        lineNumber: 27,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/GiftingCollection.jsx",
      lineNumber: 25,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/GiftingCollection.jsx",
      lineNumber: 24,
      columnNumber: 1
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GiftingCollection.jsx",
    lineNumber: 20,
    columnNumber: 1
  }, this);
};
var GiftingCollection_default = GiftingCollection;

// app/routes/($locale)._index.jsx
var import_react_responsive3 = __toESM(require_react_responsive());

// app/components/BlogCorousel.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel = ({ products, title }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center mt-0 lg:text-[28px] text-[20px]", children: title }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-2 overflow-y-auto", children: products.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "lg:w-full lg:h-auto lg:px-5 sm:px-3 sm:mx-3 w-[320px]"
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full sm:w-1/3 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "w-full h-auto"
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
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileProductCorousel, { products: collections, title }, void 0, false, {
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

// app/components/Testimonials.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Testimonials = ({ page }) => {
  const context = page.body.split("<p>split_code</p>");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "wrapper text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: " Testimonials " }, void 0, false, {
      fileName: "app/components/Testimonials.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { class: "carousel", children: context.map((content) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { class: "flex gap-4 justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "shadow-xl p-4", dangerouslySetInnerHTML: { __html: content } }, void 0, false, {
        fileName: "app/components/Testimonials.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Testimonials.jsx",
        lineNumber: 10,
        columnNumber: 24
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/Testimonials.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Testimonials.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};
var Testimonials_default = Testimonials;

// app/components/LooksComp.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var LooksComp = ({ looks }) => {
  var products = looks.length ? looks[0].products.edges : [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "looks", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "uppercase text-center", children: " L.I.T : Looks In Trend " }, void 0, false, {
      fileName: "app/components/LooksComp.jsx",
      lineNumber: 5,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-20", children: products.map((product) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: product?.node.images.edges[0].node.url }, void 0, false, {
          fileName: "app/components/LooksComp.jsx",
          lineNumber: 11,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "looks_tittle absolute bottom-2 text-center", children: [
          " ",
          product?.node.title,
          " "
        ] }, void 0, true, {
          fileName: "app/components/LooksComp.jsx",
          lineNumber: 12,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/LooksComp.jsx",
        lineNumber: 10,
        columnNumber: 29
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/LooksComp.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LooksComp.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
};
var LooksComp_default = LooksComp;

// app/routes/($locale)._index.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Hydrogen | Home" }];
};
function Homepage() {
  const noImg = "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_600x600.gif";
  const data = useLoaderData();
  const { header, page: testimonialPage } = data;
  var menus = header.menu.items;
  var collectionArray = menus.filter((item) => item.title !== "Home");
  const isLargeScreen = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  var imageSrc = [];
  if (!isSmall) {
    imageSrc = [
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_1.jpg?v=1708767049",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_3_opt_1.jpg?v=1708767048",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_4_opt_2.jpg?v=1708767048",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/website_banner_5_opt_2.jpg?v=1708767048"
    ];
  } else {
    imageSrc = [
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_1_700_x_470.jpg?v=1712753471",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_4_700_x_470.jpg?v=1712753471",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_3_700_x_470.jpg?v=1712753471",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Website_Banner_op_5_700_x_470.jpg?v=1712753471"
    ];
  }
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
  var looks = [];
  data.collectionProducts.nodes.forEach((col) => {
    if (col.metafields[0] != null && col.metafields[0].value == "true") {
      ReviewCollection.push(col);
    }
    if (col.title === "Lookbooks") {
      looks.push(col);
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
  console.log("Lookbooks::", looks);
  BuildYourOwnColl = BuildYourOwnColl[0].products.edges;
  ThirdHeroCollection = ThirdHeroCollection[0].products;
  GiftCollections = GiftCollections;
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  const goToCollection = (url_path) => {
    window.location.href = url_path;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "home", children: [
    isSmall ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "collectionContent lg:hidden block sm:mt-4 overflow-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inline-flex gap-4 w-[100%]", children: collectionArrayStatic?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        className: " col-item sm:w-auto  rounded-lg hover:shadow-md cursor-pointer",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavLink, { to: `/collections/${item.collectionname}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
              lineNumber: 145,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 144,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "collectionname  sm:text-lg text-[12px] font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]", children: item.collectionname }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 158,
            columnNumber: 15
          }, this)
        ]
      },
      index,
      true,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 139,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ImageCarousel_default, { isSmall, images: imageSrc }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 170,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      RecommendedProducts,
      {
        products: data.collectionProducts.nodes[0].products,
        title: "CULT FAVS"
      },
      data.collectionProducts.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 172,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-center lg:text=[28px] text-[20px] mt-[15px]", children: "CHOOSE YOUR CULT" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-4", children: collectionCult.map((coll, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "img",
        {
          onClick: () => goToCollection(`/collections/${coll.handle}`),
          src: `${coll.url}`,
          alt: coll.title,
          className: "lg:w-full lg:h-auto h-[40%] w:[100%] sm:w-[375px] sm:w-[250px] cursor"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 191,
          columnNumber: 17
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 190,
        columnNumber: 15
      }, this) }, `cult_${index}`, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 189,
        columnNumber: 20
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Daily_Essentials_banner.jpg?v=1709971600",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 233,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 232,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 231,
      columnNumber: 10
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        style: { height: "250px" },
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_everyday_style.jpg?v=1712816125",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 243,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 242,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 241,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      RecommendedProducts,
      {
        products: ThirdHeroCollection,
        title: "Daily Must-Haves"
      },
      ThirdHeroCollection.edges[0].node.id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 252,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GiftingCollection_default, { collections: GiftCollections, title: "Gifting" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 257,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(YouTubeVideo_default, {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 258,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lookbook_Banner.jpg?v=1709971241",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 263,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 262,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 261,
      columnNumber: 10
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/collections/eyes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        style: { height: "250px" },
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_look_book.jpg?v=1712816125",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 273,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 272,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 271,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LooksComp_default, { looks }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 282,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/pages/about-us", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/About_US.jpg?v=1712993514",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 286,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 285,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 284,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 283,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BlogCorousel_default, { collections: data.blogs, title: "CULT CHAPTERS" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 296,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Testimonials_default, { page: testimonialPage }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 298,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 323,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 325,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductCarousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 328,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 326,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 325,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 331,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 324,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 322,
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
var collectionCult = [
  {
    title: "Way 2 Stay",
    handle: "way-2-stay",
    url: "https://cdn.shopify.com/s/files/1/0809/4253/0882/collections/Way_2_Slay-01_7ce5063c-89b2-48ed-bb55-49132c99e732.jpg?v=1712581195"
  },
  {
    title: "Rizz & Roll MJK",
    handle: "/collections/rizz-roll-mjk",
    url: "https://cdn.shopify.com/s/files/1/0809/4253/0882/collections/RIzz_and_Roll-01_f88a8485-9934-4469-9b29-89ba17fcf7cc.jpg?v=1712581214"
  },
  {
    title: "Pro Studio MJK",
    handle: "/collections/pro-studio-mjk",
    url: "https://cdn.shopify.com/s/files/1/0809/4253/0882/collections/Pro-studio_1-01_b98dd6ae-5b21-4486-9e6f-55dd7b7fcf5e.jpg?v=1712581177"
  }
];
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
//# sourceMappingURL=/build/routes/($locale)._index-E5EKVNTE.js.map
