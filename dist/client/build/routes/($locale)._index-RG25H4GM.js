import {
  Image
} from "/build/_shared/chunk-3PC7BQ56.js";
import {
  Await,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-MR3EULDF.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/($locale)._index.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Hydrogen | Home" }];
};
function Homepage() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturedCollection, { collection: data.featuredCollection }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecommendedProducts, { products: data.recommendedProducts }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function FeaturedCollection({ collection }) {
  const image = collection.image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      className: "featured-collection",
      to: `/collections/${collection.handle}`,
      children: [
        image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "featured-collection-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: image, sizes: "100vw" }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: collection.title }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 41,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}
function RecommendedProducts({ products }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 49,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: ({ products: products2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product.id, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 48,
    columnNumber: 3
  }, this);
}
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-RG25H4GM.js.map
