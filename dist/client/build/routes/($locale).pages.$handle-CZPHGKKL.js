import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KDVUVIZM.js";
import {
  useLoaderData
} from "/build/_shared/chunk-CEJ3M5BR.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).pages.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.page.title}` }];
};
function Page() {
  const { page } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: page.title }, void 0, false, {
      fileName: "app/routes/($locale).pages.$handle.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).pages.$handle.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { dangerouslySetInnerHTML: { __html: page.body } }, void 0, false, {
      fileName: "app/routes/($locale).pages.$handle.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).pages.$handle.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).pages.$handle-CZPHGKKL.js.map
