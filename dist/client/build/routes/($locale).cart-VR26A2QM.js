import {
  CartMain
} from "/build/_shared/chunk-YZZQLWYH.js";
import "/build/_shared/chunk-GYBJTXU5.js";
import "/build/_shared/chunk-3PC7BQ56.js";
import {
  Await,
  require_jsx_dev_runtime,
  require_react,
  useMatches
} from "/build/_shared/chunk-MR3EULDF.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/($locale).cart.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: `Hydrogen | Cart` }];
};
function Cart() {
  const [root] = useMatches();
  const cart = root.data?.cart;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Cart" }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 90,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "An error occurred" }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 91,
      columnNumber: 30
    }, this), resolve: cart, children: (cart2) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartMain, { layout: "page", cart: cart2 }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 93,
        columnNumber: 20
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 91,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).cart.jsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
export {
  Cart as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).cart-VR26A2QM.js.map
