import "/build/_shared/chunk-NRLYJF6W.js";
import "/build/_shared/chunk-AV5ON35J.js";
import {
  MdChevronLeft,
  MdChevronRight,
  require_react_responsive
} from "/build/_shared/chunk-F7TROZH4.js";
import "/build/_shared/chunk-NNH77UO3.js";
import {
  $r,
  Money,
  ee
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  Await,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).products.$handle.jsx
var import_react2 = __toESM(require_react());
var import_react4 = __toESM(require_react());

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

// app/routes/($locale).products.$handle.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.product.title}` }];
};
function Product() {
  const { product, variants, productsreturn, judgeme, recommendedProducts } = useLoaderData();
  const { selectedVariant } = product;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ProductMain,
      {
        selectedVariant,
        product,
        variants,
        recommendedProducts
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 126,
        columnNumber: 7
      },
      this
    ),
    productsreturn && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductsCorousel_default, { products: productsreturn }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 132,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}
function ProductImage({ image, activeImg, setActiveImage, product }) {
  const ImageSrc = [];
  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
  const [images, setImages] = (0, import_react4.useState)(ImageSrc);
  if (!image) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "" }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 150,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:grid flex flex-col-reverse lg:grid-cols-[20%_80%] gap-2 lg:gap-0 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex  lg:flex-col  justify-between lg:h-[325px] overflow-x-auto gap-[5px]", children: product.images.edges && product.images.edges.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: images[index],
        alt: "",
        className: "w-24 h-24 rounded-md cursor-pointer product-image-caro",
        onClick: () => setActiveImage(images[index])
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 158,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 155,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: activeImg,
        alt: "",
        className: "w-[90%] border border-[#e5e5e5] h-full aspect-square object-cover rounded-xl p-[10px] border-1 border-[#e5e5e5] hover:scale-125 transition duration-300 cursor-pointer"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 166,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 154,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}
function ProductMain({ selectedVariant, product, variants, recommendedProducts }) {
  const ImageSrc = [];
  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
  const [images, setImages] = (0, import_react4.useState)(ImageSrc);
  const expaction = product.metafields[0]?.value;
  const key_ingredients = product.metafields[1]?.value;
  const How_To_use = product.metafields[2]?.value;
  const who_can_use = product.metafields[3]?.value;
  const why_us = product.metafields[4]?.value;
  const ingredient = product.metafields[5]?.value;
  const [activeTab, setActiveTab] = (0, import_react4.useState)("Ingredient");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [activeImg, setActiveImage] = (0, import_react4.useState)(images[0]);
  const [amount, setAmount] = (0, import_react4.useState)(1);
  const [moreText, setMoreText] = (0, import_react4.useState)(true);
  const [moreOffer, setMoreOffer] = (0, import_react4.useState)(false);
  const [more, setMore] = (0, import_react4.useState)(false);
  const [moreContent, setMoreContent] = (0, import_react4.useState)("+View More");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex m-[2%] gap-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 205,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/next.png", alt: "next", width: 20, height: 20 }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 206,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold", children: "Product page" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 207,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "final-product mst-card shadow-lg p-4 flex flex-col justify-between lg:flex-row lg:gap-8 lg:ml-8 lg:mr-8 items-start relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-6 lg:w-2/4 flex-wrap items-center lg:sticky top-[240px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        ProductImage,
        {
          image: selectedVariant?.image,
          product,
          activeImg: selectedVariant?.image?.url,
          setActiveImage
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 218,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col lg:w-3/4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-semibold mt-0 mb-[15px]", children: product.title }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 228,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductPrice, { selectedVariant }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 236,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 227,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react2.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              ProductForm,
              {
                product,
                selectedVariant,
                variants: [],
                activeImg,
                setActiveImage
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 241,
                columnNumber: 17
              },
              this
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Await,
              {
                errorElement: "There was a problem loading product variants",
                resolve: variants,
                children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  ProductForm,
                  {
                    product,
                    selectedVariant,
                    activeImg,
                    setActiveImage,
                    variants: data.product?.variants.nodes || []
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).products.$handle.jsx",
                    lineNumber: 255,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 250,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 239,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 238,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "mt-[10px]", children: "Product Description" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 266,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "shadow-p relative py-[10px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-700", children: product.description.substr(0, 200) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 268,
            columnNumber: 13
          }, this),
          moreText && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "expect",
              dangerouslySetInnerHTML: { __html: product.description }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 274,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 272,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 267,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute cursor-pointer flex flex-col items-center top-[-36px] lg:top-[15px] right-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "img",
          {
            className: "sharelogo",
            src: "/share.png",
            width: 24,
            height: 24,
            alt: "share"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 283,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-semibold ", children: "Share" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 290,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 282,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-[1320px] p-[10px] m-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-center lg:text-2xl mt-[4%] mb-[2%]", children: [
          "What to Expect from ",
          product.title,
          " ?"
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        expaction && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            className: "expect",
            dangerouslySetInnerHTML: { __html: expaction }
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 299,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 294,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "lg:text-3xl font-semibold mb-4 text-center mt-[4%] mb-[2%]", children: "Product Information" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 306,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4 overflow-y-auto lg:justify-center my-[20px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: `cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${activeTab === "How to Use" ? "border-active" : ""}`,
              onClick: () => handleTabClick("How to Use"),
              style: { border: "1px solid #e5e5e5" },
              children: "How to Use"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 319,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: `cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${activeTab === "Concerns" ? "border-active" : ""}`,
              onClick: () => handleTabClick("Concerns"),
              style: { border: "1px solid #e5e5e5" },
              children: "Concerns"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 328,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: `cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${activeTab === "Ingredient" ? "border-active" : ""}`,
              onClick: () => handleTabClick("Ingredient"),
              style: { border: "1px solid #e5e5e5" },
              children: "Ingredient"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 337,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: `cursor-pointer py-2 lg:px-8 px-4 border-b-4 whitespace-nowrap ${activeTab === "Why us" ? "border-active" : ""}`,
              onClick: () => handleTabClick("Why us"),
              style: { border: "1px solid #e5e5e5" },
              children: "Why us"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 346,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 309,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: [
          activeTab === "Key Ingredients" && key_ingredients && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-y-auto overflow-x-auto", children: key_ingredients && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "expect",
              dangerouslySetInnerHTML: { __html: key_ingredients }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 360,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 358,
            columnNumber: 15
          }, this),
          activeTab === "How to Use" && How_To_use && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "key-ing",
              dangerouslySetInnerHTML: { __html: How_To_use }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 369,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 368,
            columnNumber: 15
          }, this),
          activeTab === "Concerns" && who_can_use && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: who_can_use } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 377,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 376,
            columnNumber: 15
          }, this),
          activeTab === "Ingredient" && ingredient && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: ingredient } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 382,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 381,
            columnNumber: 15
          }, this),
          activeTab === "Why us" && why_us && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: why_us } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 387,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 386,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 356,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 305,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 293,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "recommended_products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      RecommendedProducts,
      {
        products: recommendedProducts.nodes[0].products,
        title: "Recommended Products"
      },
      recommendedProducts.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 394,
        columnNumber: 7
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 393,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 202,
    columnNumber: 5
  }, this);
}
function ProductPrice({ selectedVariant }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-price flex gap-[10px]", children: [
    selectedVariant?.compareAtPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-price-on-sale font-semibold", children: [
      selectedVariant ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Money, { data: selectedVariant.price }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 412,
        columnNumber: 32
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("s", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Money, { data: selectedVariant.compareAtPrice }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 414,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 413,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 411,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 410,
      columnNumber: 9
    }, this) : selectedVariant?.price && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Money, { className: "font-semibold", data: selectedVariant?.price }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 420,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold bg-[#e1eecc] py-1 px-2 text-sm rounded", children: "FREE SHIPPING" }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 424,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 423,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 408,
    columnNumber: 5
  }, this);
}
function ProductForm({
  product,
  selectedVariant,
  variants,
  activeImg,
  setActiveImage
}) {
  const closeRef = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      $r,
      {
        handle: product.handle,
        options: product.options,
        variants,
        children: ({ option }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          ProductOptions,
          {
            option,
            activeImg,
            closeRef,
            selectedVariant,
            setActiveImage
          },
          option.name,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 448,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 442,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Offers, {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 458,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 459,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      AddToCartButton,
      {
        disabled: !selectedVariant || !selectedVariant.availableForSale,
        onClick: () => {
          window.location.href = window.location.href + "#cart-aside";
        },
        lines: selectedVariant ? [
          {
            merchandiseId: selectedVariant.id,
            quantity: 1
          }
        ] : [],
        children: selectedVariant?.availableForSale ? "ADD TO CART" : "Sold out"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 461,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 441,
    columnNumber: 5
  }, this);
}
function ProductOptions({ option, activeImg, setActiveImage, closeRef }) {
  var opt_length = option.values.length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-options", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "font-semibold", children: option.name }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 491,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product-options-grid items-center", children: option.values.map(({ value, isAvailable, isActive, to }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Link,
        {
          ref: closeRef,
          className: "product-options-item",
          prefetch: "intent",
          preventScrollReset: true,
          replace: true,
          to,
          style: {
            border: isActive ? "1px solid black" : "1px solid transparent",
            opacity: isAvailable ? 1 : 0.3,
            borderRadius: "5px"
          },
          onClick: () => {
            if (!closeRef?.current)
              return;
            closeRef.current.click();
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: value } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 515,
            columnNumber: 15
          }, this)
        },
        option.name + value,
        false,
        {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 495,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 492,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 520,
      columnNumber: 9
    }, this)
  ] }, option.name, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 490,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 489,
    columnNumber: 5
  }, this);
}
var Offers = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#f7f7f7] py-[10px] pl-[50px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-[16px]", children: "AVAILABLE OFFERS!!" }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 529,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "text-[#757575] list-disc", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "FREE Mivi Play Bluetooth Speakers on a spend of Rs.2199" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 531,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "Holographic Pouch + Liquid Lipstick on a spend of Rs.599" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 532,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 530,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 528,
    columnNumber: 5
  }, this);
};
function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
  const [amount, setAmount] = (0, import_react4.useState)(1);
  lines[0].quantity = amount;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ee,
      {
        route: "/cart",
        inputs: { lines },
        action: ee.ACTIONS.LinesAdd,
        children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "input",
            {
              name: "analytics",
              type: "hidden",
              value: JSON.stringify(analytics)
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 551,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row items-center gap-4 mobile-cart-product", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "flex flex-row items-center py-[6px] px-[8px] rounded-xl",
                style: { border: "1px solid #000", background: "white" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "button",
                    {
                      className: " text-xl",
                      onClick: () => {
                        if (amount != 0) {
                          setAmount((prev) => prev - 1);
                        }
                      },
                      children: "-"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/($locale).products.$handle.jsx",
                      lineNumber: 561,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "px-4", children: amount }, void 0, false, {
                    fileName: "app/routes/($locale).products.$handle.jsx",
                    lineNumber: 571,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "button",
                    {
                      className: " text-xl",
                      onClick: () => setAmount((prev) => prev + 1),
                      children: "+"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/($locale).products.$handle.jsx",
                      lineNumber: 572,
                      columnNumber: 17
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 557,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "w-[150px] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg",
                type: "submit",
                onClick,
                disabled: disabled ?? fetcher.state !== "idle",
                children
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 579,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 556,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 550,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 544,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "p",
      {
        className: "lg:mt-6",
        style: { width: "100%", borderBottom: "1px dashed #bdbdbd" }
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 591,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 543,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 628,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 630,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductsCorousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 633,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 631,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 630,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 636,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 629,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 627,
    columnNumber: 5
  }, this);
}
var PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    quantityAvailable
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;
var PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    tags
    productType
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"},{namespace: "custom", key: "key_ingredients"} ]){
      key
      value
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 10) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
var PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 50) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;
export {
  Product as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).products.$handle-TFINBXAN.js.map
