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

// app/components/ImageCarousel.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ImageCarousel = ({ images, isSmall }) => {
  const [currentImageIndex, setCurrentImageIndex] = (0, import_react.useState)(0);
  var mobImgHeight = { height: "inherit" };
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };
  if (isSmall)
    mobImgHeight = { height: "250px" };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
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
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 27,
            columnNumber: 7
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
        style: mobImgHeight,
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
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 43,
            columnNumber: 7
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 37,
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

// app/components/YouTubeVideo.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MobileVideo = ({ playVideo }) => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative rounded-lg", "cursor-pointer": true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "relative", src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/youtube_thumbnail.jpg?v=1712992484", alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
var DesktopVideo = ({ playVideo }) => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-4/5 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative rounded-2xl p-10 cursor-pointer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { onClick: () => playVideo(), className: "relative", src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/youtube_thumbnail.jpg?v=1712992484", alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
var YouTubeVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/TUeHBWEZr0A`;
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  const playVideo = () => {
    window.open(embedUrl, "_blank");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DesktopVideo, { playVideo }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 52,
      columnNumber: 25
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileVideo, { playVideo }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 53,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
};
var YouTubeVideo_default = YouTubeVideo;

export {
  ImageCarousel_default,
  YouTubeVideo_default
};
//# sourceMappingURL=/build/_shared/chunk-AOAI74VL.js.map
