import {
  MdChevronLeft,
  MdChevronRight,
  require_react_responsive
} from "/build/_shared/chunk-F7TROZH4.js";
import {
  ee
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ImageCarousel.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = (0, import_react.useState)(0);
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative opacity-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white",
        onClick: () => setCurrentImageIndex(
          (currentImageIndex - 1 + images.length) % images.length
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
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 27,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        className: "lg:w-full md:w-full sm:w-full h-[300px] lg:h-80 object-cover rounded-2xl w-[100%]",
        src: images[currentImageIndex]
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white",
        onClick: () => setCurrentImageIndex((currentImageIndex + 1) % images.length),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 42,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var ImageCarousel_default = ImageCarousel;

// app/components/ProductCarousel.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ProductCarousel = ({ products }) => {
  let productsToShow = [];
  const lines = [];
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  const [endIndex, setEndIndex] = (0, import_react2.useState)(eIndex);
  var len = products.edges.length;
  if (products != null || products != void 0) {
    productsToShow = products.edges.slice(startIndex, endIndex);
  }
  const nextProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  const prevProducts = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  console.log("start INDEX ::", startIndex, "End Index ::", endIndex, "Length::", len);
  products.edges.map((product) => {
    product.node.variants.edges.map((line) => {
      lines.push([
        {
          merchandiseId: line.node.id,
          quantity: 1
        }
      ]);
    });
  });
  console.log("Lines::", productsToShow);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4", children: productsToShow.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: `${product.node.images.edges[0].node.url}`,
          alt: product.node.title,
          className: "w-full h-auto"
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 58,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/products/${product.node.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center", children: product.node.title }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 64,
        columnNumber: 19
      }, this) }, product.id, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center font-bold h-full w-full m-auto", children: [
        "\u20B9 ",
        product.node.priceRange.minVariantPrice.amount
      ] }, void 0, true, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 69,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[25%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 33",
            xmlSpace: "preserve",
            className: "sm:w-[43px] w-[43px] like-home",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "path",
                {
                  d: "M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z",
                  fill: "rgb(255, 255, 255)",
                  stroke: "rgb(0, 0, 0)"
                },
                void 0,
                false,
                {
                  fileName: "app/components/ProductCarousel.jsx",
                  lineNumber: 82,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "path",
                {
                  d: "M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z",
                  fill: "none",
                  stroke: "rgb(0, 0, 0)"
                },
                void 0,
                false,
                {
                  fileName: "app/components/ProductCarousel.jsx",
                  lineNumber: 87,
                  columnNumber: 23
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 76,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[75%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          ee,
          {
            route: "/cart",
            inputs: { lines: lines[index] },
            action: ee.ACTIONS.LinesAdd,
            className: "w-[83%] ",
            children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product",
                type: "submit",
                onClick: () => {
                  window.location.href = window.location.href + "#cart-aside";
                },
                children: "Add To cart"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductCarousel.jsx",
                lineNumber: 104,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 103,
              columnNumber: 25
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 96,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 95,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 74,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 57,
      columnNumber: 15
    }, this) }, product.node.id, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 56,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute lg:left-[-150px] top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100",
        onClick: () => prevProducts(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 30
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 127,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 123,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute lg:right-[-150px] right-0 top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100",
        onClick: () => nextProducts(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100",
            size: 30
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 136,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 132,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
var ProductCarousel_default = ProductCarousel;

// app/components/YouTubeVideo.jsx
var import_react4 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var MobileVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-center mt-0 lg:text-[28px] text-[20px]", children: "Demo Header for YouTube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "iframe",
      {
        className: "rounded-lg w-full h-50",
        src: embedUrl,
        frameborder: "0",
        allowfullscreen: true
      },
      void 0,
      false,
      {
        fileName: "app/components/YouTubeVideo.jsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var DesktopVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-4/5 mx-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      className: "relative rounded-2xl p-20",
      style: { paddingBottom: "35.25%" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-center", children: "Demo Header for YouTube Video" }, void 0, false, {
          fileName: "app/components/YouTubeVideo.jsx",
          lineNumber: 33,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "iframe",
          {
            title: "YouTube Video",
            className: "absolute top-0 left-0 w-full h-full rounded-2xl p-20",
            src: embedUrl,
            allowFullScreen: true
          },
          void 0,
          false,
          {
            fileName: "app/components/YouTubeVideo.jsx",
            lineNumber: 34,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 29,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
};
var YouTubeVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DesktopVideo, {}, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 53,
      columnNumber: 25
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileVideo, {}, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 54,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
};
var YouTubeVideo_default = YouTubeVideo;

export {
  ImageCarousel_default,
  ProductCarousel_default,
  YouTubeVideo_default
};
//# sourceMappingURL=/build/_shared/chunk-CM75CX6A.js.map
