import "/build/_shared/chunk-NRLYJF6W.js";
import {
  ProductsCorousel_default
} from "/build/_shared/chunk-DEPD6FJ4.js";
import "/build/_shared/chunk-AV5ON35J.js";
import {
  l,
  p
} from "/build/_shared/chunk-TB6C62HK.js";
import "/build/_shared/chunk-NNH77UO3.js";
import "/build/_shared/chunk-F7TROZH4.js";
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
var import_react = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.product.title}` }];
};
function Product() {
  const { product, variants, productsreturn, judgeme, recommendedProducts } = useLoaderData();
  const { selectedVariant } = product;
  const [socialCount, setSocialCount] = (0, import_react3.useState)();
  async function setWishlistSocialCount(skipCache) {
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductMain,
      {
        selectedVariant,
        setWishlistSocialCount,
        product,
        variants,
        recommendedProducts
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 152,
        columnNumber: 7
      },
      this
    ),
    productsreturn && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductsCorousel_default, { products: productsreturn }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 159,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}
function ProductImage({ image, activeImg, setActiveImage, product }) {
  const ImageSrc = [];
  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
  const [images, setImages] = (0, import_react3.useState)(ImageSrc);
  if (!image) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "" }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 177,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid flex flex-col-reverse lg:grid-cols-[20%_80%] gap-2 lg:gap-0 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  lg:flex-col  justify-between lg:h-[325px] overflow-x-auto gap-[5px]", children: product.images.edges && product.images.edges.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        lineNumber: 185,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 182,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        lineNumber: 193,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 181,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 180,
    columnNumber: 5
  }, this);
}
function ProductMain({ selectedVariant, product, setWishlistSocialCount, variants, recommendedProducts }) {
  const ImageSrc = [];
  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
  const [images, setImages] = (0, import_react3.useState)(ImageSrc);
  const expaction = product.metafields[0]?.value;
  const key_ingredients = product.metafields[1]?.value;
  const How_To_use = product.metafields[2]?.value;
  const who_can_use = product.metafields[3]?.value;
  const why_us = product.metafields[4]?.value;
  const ingredient = product.metafields[5]?.value;
  const [activeTab, setActiveTab] = (0, import_react3.useState)("Ingredient");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [activeImg, setActiveImage] = (0, import_react3.useState)(images[0]);
  const [amount, setAmount] = (0, import_react3.useState)(1);
  const [moreText, setMoreText] = (0, import_react3.useState)(true);
  const [moreOffer, setMoreOffer] = (0, import_react3.useState)(false);
  const [more, setMore] = (0, import_react3.useState)(false);
  const [moreContent, setMoreContent] = (0, import_react3.useState)("+View More");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex m-[2%] gap-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/next.png", alt: "next", width: 20, height: 20 }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Product page" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 234,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 231,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "final-product mst-card shadow-lg p-4 flex flex-col justify-between lg:flex-row lg:gap-8 lg:ml-8 lg:mr-8 items-start relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:w-2/4 flex-wrap items-center lg:sticky top-[240px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
          lineNumber: 245,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 237,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:w-3/4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mt-0 mb-[15px]", children: product.title }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductPrice, { selectedVariant }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 263,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 254,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                lineNumber: 268,
                columnNumber: 17
              },
              this
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Await,
              {
                errorElement: "There was a problem loading product variants",
                resolve: variants,
                children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                    lineNumber: 282,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 277,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 266,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 265,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-[10px]", children: "Product Description" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 293,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shadow-p relative py-[10px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: product.description.substr(0, 200) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 295,
            columnNumber: 13
          }, this),
          moreText && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "expect",
              dangerouslySetInnerHTML: { __html: product.description }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 301,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 299,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 294,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute cursor-pointer flex flex-col items-center top-[-36px] lg:top-[15px] right-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
            lineNumber: 310,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold ", children: "Share" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 317,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 309,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 236,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-[1320px] p-[10px] m-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-center lg:text-2xl mt-[4%] mb-[2%]", children: [
          "What to Expect from ",
          product.title,
          " ?"
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 322,
          columnNumber: 11
        }, this),
        expaction && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "expect",
            dangerouslySetInnerHTML: { __html: expaction }
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 326,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 321,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "lg:text-3xl font-semibold mb-4 text-center mt-[4%] mb-[2%]", children: "Product Information" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 333,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 overflow-y-auto lg:justify-center my-[20px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
              lineNumber: 346,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
              lineNumber: 355,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
              lineNumber: 364,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
              lineNumber: 373,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 336,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
          activeTab === "Key Ingredients" && key_ingredients && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto overflow-x-auto", children: key_ingredients && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "expect",
              dangerouslySetInnerHTML: { __html: key_ingredients }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 387,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 385,
            columnNumber: 15
          }, this),
          activeTab === "How to Use" && How_To_use && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "key-ing",
              dangerouslySetInnerHTML: { __html: How_To_use }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 396,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 395,
            columnNumber: 15
          }, this),
          activeTab === "Concerns" && who_can_use && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: who_can_use } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 404,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 403,
            columnNumber: 15
          }, this),
          activeTab === "Ingredient" && ingredient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: ingredient } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 409,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 408,
            columnNumber: 15
          }, this),
          activeTab === "Why us" && why_us && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: why_us } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 414,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 413,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 383,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 332,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 320,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended_products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      RecommendedProducts,
      {
        products: recommendedProducts.nodes[0].products,
        title: "Recommended Products"
      },
      recommendedProducts.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 421,
        columnNumber: 7
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 420,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 229,
    columnNumber: 5
  }, this);
}
function ProductPrice({ selectedVariant }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price flex gap-[10px]", children: [
    selectedVariant?.compareAtPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price-on-sale font-semibold", children: [
      selectedVariant ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant.price }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 439,
        columnNumber: 32
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("s", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant.compareAtPrice }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 441,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 440,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 438,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 437,
      columnNumber: 9
    }, this) : selectedVariant?.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { className: "font-semibold", data: selectedVariant?.price }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 447,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold bg-[#e1eecc] py-1 px-2 text-sm rounded", children: "FREE SHIPPING" }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 451,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 450,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 435,
    columnNumber: 5
  }, this);
}
function ProductForm({
  product,
  selectedVariant,
  variants,
  activeImg,
  setActiveImage,
  setWishlistSocialCount
}) {
  const closeRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      $r,
      {
        handle: product.handle,
        options: product.options,
        variants,
        children: ({ option }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProductOptions,
          {
            option,
            activeImg,
            closeRef,
            selectedVariant,
            setActiveImage,
            setWishlistSocialCount
          },
          option.name,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 476,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 470,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Offers, {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 487,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 488,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        lineNumber: 494,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 469,
    columnNumber: 5
  }, this);
}
function ProductOptions({ option, activeImg, setWishlistSocialCount, closeRef }) {
  var opt_length = option.values.length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "font-semibold", children: option.name }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 524,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options-grid items-center", children: option.values.map(({ value, isAvailable, isActive, to }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: value } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 548,
            columnNumber: 15
          }, this)
        },
        option.name + value,
        false,
        {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 528,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 525,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 553,
      columnNumber: 9
    }, this)
  ] }, option.name, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 523,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 522,
    columnNumber: 5
  }, this);
}
var Offers = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#f7f7f7] py-[10px] pl-[50px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-[16px]", children: "AVAILABLE OFFERS!!" }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 562,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-[#757575] list-disc", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "FREE Mivi Play Bluetooth Speakers on a spend of Rs.2199" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 564,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Holographic Pouch + Liquid Lipstick on a spend of Rs.599" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 565,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 563,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 561,
    columnNumber: 5
  }, this);
};
function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
  const [amount, setAmount] = (0, import_react3.useState)(1);
  lines[0].quantity = amount;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ee,
      {
        route: "/cart",
        inputs: { lines },
        action: ee.ACTIONS.LinesAdd,
        children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
              lineNumber: 584,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row items-center gap-4 mobile-cart-product", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "flex flex-row items-center py-[6px] px-[8px] rounded-xl",
                style: { border: "1px solid #000", background: "white" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      lineNumber: 594,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-4", children: amount }, void 0, false, {
                    fileName: "app/routes/($locale).products.$handle.jsx",
                    lineNumber: 604,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      lineNumber: 605,
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
                lineNumber: 590,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                lineNumber: 612,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 589,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 583,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 577,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "p",
      {
        className: "lg:mt-6",
        style: { width: "100%", borderBottom: "1px dashed #bdbdbd" }
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 624,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 576,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 661,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 663,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductsCorousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 666,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 664,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 663,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 669,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 662,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 660,
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
  ${l}
	${p}
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
//# sourceMappingURL=/build/routes/($locale).products.$handle-5KUGSGRC.js.map
