import {
  useVariantUrl
} from "/build/_shared/chunk-WM2HYJEI.js";
import {
  F,
  Image,
  Money
} from "/build/_shared/chunk-ENQ62WDJ.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Cart.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CartMain({ layout, cart }) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount = cart && Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? "with-discount" : ""}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartEmpty, { hidden: linesCount, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function CartDetails({ layout, cart }) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    cartHasItems && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartCheckoutActions, { checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function CartLines({ lines, layout }) {
  if (!lines)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-lines", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: lines.nodes.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineItem, { line, layout }, line.id, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 43,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
function CartLineItem({ layout, line }) {
  const { id, merchandise } = line;
  const { product, title, image, selectedOptions } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  console.log("sahil data", { selectedOptions });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "cart-line", children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        alt: title,
        aspectRatio: "1/1",
        data: image,
        height: 100,
        loading: "lazy",
        width: 100
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.jsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[100%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          prefetch: "intent",
          to: lineItemUrl,
          onClick: () => {
            if (layout === "aside") {
              window.location.href = lineItemUrl;
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: product.title.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ") }, void 0, false, {
            fileName: "app/components/Cart.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/Cart.jsx",
            lineNumber: 81,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "", children: selectedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between font-semibold text-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " text-gray-900", children: [
          option.name,
          ":"
        ] }, void 0, true, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "span",
          {
            className: "inline-flex items-center px-2.5 py-0.5 rounded-full leading-4 text-blue-800",
            dangerouslySetInnerHTML: { __html: option.value }
          },
          void 0,
          false,
          {
            fileName: "app/components/Cart.jsx",
            lineNumber: 98,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 97,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 95,
        columnNumber: 15
      }, this) }, option.name, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineQuantity, { line }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: checkoutUrl, target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", children: "Continue to Checkout \u2192" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 119,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
function CartSummary({ cost, layout, children = null }) {
  const className = layout === "page" ? "cart-summary-page" : "cart-summary-aside";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-summary", className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-md font-semibold", children: "Totals" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "cart-subtotal flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Subtotal" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 137,
        columnNumber: 13
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}
function CartLineRemoveButton({ lineIds }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    F,
    {
      route: "/cart",
      action: F.ACTIONS.LinesRemove,
      inputs: { lineIds },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit text-[#fa4a0b]", children: "Remove" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 155,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.jsx",
      lineNumber: 150,
      columnNumber: 5
    },
    this
  );
}
function CartLineQuantity({ line }) {
  if (!line || typeof line?.quantity === "undefined")
    return null;
  const { id: lineId, quantity } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-line-quantiy items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-md", children: "Quantity: \xA0\xA0" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineUpdateButton, { lines: [{ id: lineId, quantity: prevQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "quantity",
        "aria-label": "Decrease quantity",
        disabled: quantity <= 1,
        name: "decrease-quantity",
        value: prevQuantity,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2212 " }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 177,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.jsx",
        lineNumber: 170,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "quantity", children: quantity }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 180,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineUpdateButton, { lines: [{ id: lineId, quantity: nextQuantity }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "quantity",
        "aria-label": "Increase quantity",
        name: "increase-quantity",
        value: nextQuantity,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+" }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 188,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.jsx",
        lineNumber: 182,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineRemoveButton, { lineIds: [lineId] }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 192,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}
function CartLinePrice({ line, priceType = "regular", ...passthroughProps }) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount)
    return null;
  const moneyV2 = priceType === "regular" ? line.cost.totalAmount : line.cost.compareAtAmountPerQuantity;
  if (moneyV2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, ...passthroughProps, data: moneyV2 }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 211,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 210,
    columnNumber: 5
  }, this);
}
function CartEmpty({ hidden = false, layout = "aside" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { hidden, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 219,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 220,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/collections",
        onClick: () => {
          if (layout === "aside") {
            window.location.href = "/collections";
          }
        },
        children: "Continue shopping \u2192"
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.jsx",
        lineNumber: 225,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 218,
    columnNumber: 5
  }, this);
}
function CartDiscounts({ discountCodes }) {
  const codes = discountCodes?.filter((discount) => discount.applicable)?.map(({ code }) => code) || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { hidden: !codes.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-discount", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: codes?.join(", ") }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 253,
          columnNumber: 15
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Remove" }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 255,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 252,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 251,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 249,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { discountCodes: codes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "discountCode", placeholder: "Discount code" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 264,
        columnNumber: 11
      }, this),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit text-[#fa4a0b]", children: "Apply" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 266,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 263,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 262,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 246,
    columnNumber: 5
  }, this);
}
function UpdateDiscountForm({ discountCodes, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    F,
    {
      route: "/cart",
      action: F.ACTIONS.DiscountCodesUpdate,
      inputs: {
        discountCodes: discountCodes || []
      },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.jsx",
      lineNumber: 275,
      columnNumber: 5
    },
    this
  );
}
function CartLineUpdateButton({ children, lines }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    F,
    {
      route: "/cart",
      action: F.ACTIONS.LinesUpdate,
      inputs: { lines },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.jsx",
      lineNumber: 289,
      columnNumber: 5
    },
    this
  );
}

export {
  CartMain
};
//# sourceMappingURL=/build/_shared/chunk-JPIDGOPN.js.map
