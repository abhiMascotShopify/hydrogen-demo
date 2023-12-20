import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KDVUVIZM.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-CEJ3M5BR.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).policies._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Policies() {
  const { policies } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "policies", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Policies" }, void 0, false, {
      fileName: "app/routes/($locale).policies._index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: policies.map((policy) => {
      if (!policy)
        return null;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/policies/${policy.handle}`, children: policy.title }, void 0, false, {
        fileName: "app/routes/($locale).policies._index.jsx",
        lineNumber: 26,
        columnNumber: 15
      }, this) }, policy.id, false, {
        fileName: "app/routes/($locale).policies._index.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/($locale).policies._index.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).policies._index.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Policies as default
};
//# sourceMappingURL=/build/routes/($locale).policies._index-YG2VO4LW.js.map
