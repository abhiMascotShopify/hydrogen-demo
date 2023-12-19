import {
  At,
  Image
} from "/build/_shared/chunk-Q3FVJCJO.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).collections._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Collections() {
  const { collections } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Collections" }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: collections, children: ({ nodes, isLoading, PreviousLink, NextLink }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 27,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionsGrid, { collections: nodes }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 31,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).collections._index.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections._index.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function CollectionsGrid({ collections }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections-grid", children: collections.map((collection, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    CollectionItem,
    {
      collection,
      index
    },
    collection.id,
    false,
    {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 44,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/routes/($locale).collections._index.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
function CollectionItem({ collection, index }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      className: "collection-item",
      to: `/collections/${collection.handle}`,
      prefetch: "intent",
      children: [
        collection.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Image,
          {
            alt: collection.image.altText || collection.title,
            aspectRatio: "1/1",
            data: collection.image,
            loading: index < 3 ? "eager" : void 0
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).collections._index.jsx",
            lineNumber: 63,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: collection.title }, void 0, false, {
          fileName: "app/routes/($locale).collections._index.jsx",
          lineNumber: 70,
          columnNumber: 7
        }, this)
      ]
    },
    collection.id,
    true,
    {
      fileName: "app/routes/($locale).collections._index.jsx",
      lineNumber: 56,
      columnNumber: 5
    },
    this
  );
}
export {
  Collections as default
};
//# sourceMappingURL=/build/routes/($locale).collections._index-BBMBGOTC.js.map
