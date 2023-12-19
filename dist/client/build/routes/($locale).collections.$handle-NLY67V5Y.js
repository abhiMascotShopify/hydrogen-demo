import {
  require_react_responsive
} from "/build/_shared/chunk-7S3KMDFV.js";
import "/build/_shared/chunk-WM2HYJEI.js";
import {
  F
} from "/build/_shared/chunk-Q3FVJCJO.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).collections.$handle.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.collection.title} Collection` }];
};
function Collection() {
  const { collection } = useLoaderData();
  let productsToShow = [];
  const lines = [];
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const endIndex = isLargeScreen ? 4 : 2;
  if (collection.products != null || collection.products != void 0) {
    console.log(collection.products.nodes);
    productsToShow = collection.products.nodes;
  }
  collection.products.nodes.map((product) => {
    product.variants.nodes.map((line) => {
      console.log(line);
      if (line.metafields[0] != null && line.metafields[0].value == "true") {
        lines.push({
          merchandiseId: line.id,
          quantity: 1
        });
      }
    });
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4", children: productsToShow.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-2", style: { boxShadow: "0px 4px 8px rgba(255, 217, 90, 0.5)" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: product.images.edges[0].node.url,
        alt: product.title,
        className: "w-full h-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 113,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center", children: product.title }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 119,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 118,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-bold h-full w-full", children: "255" }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 121,
      columnNumber: 35
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 121,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-1 py-1 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 33", xmlSpace: "preserve", width: "2.8em", height: "2.8em", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z", fill: "rgb(255, 255, 255)", stroke: "rgb(0, 0, 0)" }, void 0, false, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 125,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z", fill: "none", stroke: "rgb(0, 0, 0)" }, void 0, false, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 126,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 124,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 123,
        columnNumber: 15
      }, this),
      console.log(lines),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, { route: "/cart", inputs: { lines: lines[index] }, action: F.ACTIONS.LinesAdd, className: "flex-grow", children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "lg:w-[200px] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg",
          type: "submit",
          onClick: () => {
            window.location.href = window.location.href + "#cart-aside";
          },
          children: "Add To Cart"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 133,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 132,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 130,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 122,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections.$handle.jsx",
    lineNumber: 112,
    columnNumber: 11
  }, this) }, product.id, false, {
    fileName: "app/routes/($locale).collections.$handle.jsx",
    lineNumber: 111,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/routes/($locale).collections.$handle.jsx",
    lineNumber: 109,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).collections.$handle.jsx",
    lineNumber: 108,
    columnNumber: 3
  }, this);
}
var PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    handle
    productType
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"} ]){
      key
      value
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
        metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
                              key
                              value
                            }
      }
    }
  }
`;
var COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
export {
  Collection as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).collections.$handle-NLY67V5Y.js.map
