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
var import_react3 = __toESM(require_react());

// app/components/productCard.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductCard = ({ product }) => {
  const url = product.images.nodes[0].url;
  console.log(url);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden m-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "w-full h-48 object-cover", src: url, alt: product.title }, void 0, false, {
      fileName: "app/components/productCard.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: product.title }, void 0, false, {
        fileName: "app/components/productCard.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
        "$",
        product.priceRange.minVariantPrice.amount
      ] }, void 0, true, {
        fileName: "app/components/productCard.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none", children: "Add to Cart" }, void 0, false, {
        fileName: "app/components/productCard.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/productCard.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/productCard.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
var productCard_default = ProductCard;

// app/routes/($locale)._index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Hydrogen | Home" }];
};
function Homepage() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FeaturedCollection, { collection: data.featuredCollection }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RecommendedProducts, { products: data.recommendedProducts }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function FeaturedCollection({ collection }) {
  const image = collection.image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Link,
    {
      className: "featured-collection",
      to: `/collections/${collection.handle}`,
      children: [
        image && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "featured-collection-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { data: image, sizes: "100vw" }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 39,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: collection.title }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 42,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
}
function RecommendedProducts({ products }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 50,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Await, { resolve: products, children: ({ products: products2 }) => products2.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(productCard_default, { product }, product.id, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 54,
      columnNumber: 17
    }, this)) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 49,
    columnNumber: 3
  }, this);
}
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-NOJMLTH3.js.map
