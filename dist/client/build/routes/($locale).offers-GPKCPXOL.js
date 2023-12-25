import {
  CustomizedCollection_default
} from "/build/_shared/chunk-RJ277ZS4.js";
import "/build/_shared/chunk-F7TROZH4.js";
import "/build/_shared/chunk-SMAMLHOS.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).offers.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Login" }];
};
function Offers() {
  const data = useLoaderData();
  var GiftCollections = [];
  data.collectionProducts.nodes.forEach((col) => {
    if (col.title == "Gift Under 500" || col.title == "Gift Under 1000" || col.title == "Gifts Under 2000") {
      GiftCollections.push(col);
    }
  });
  console.log("Offers::", GiftCollections);
  GiftCollections = GiftCollections;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomizedCollection_default, { collections: GiftCollections, title: "Gifting" }, void 0, false, {
    fileName: "app/routes/($locale).offers.jsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).offers.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  Offers as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).offers-GPKCPXOL.js.map
