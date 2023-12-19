import {
  At,
  Money
} from "/build/_shared/chunk-Q3FVJCJO.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account.orders._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Orders" }];
};
function Orders() {
  const { customer } = useLoaderData();
  const { orders, numberOfOrders } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "orders", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Orders ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
        "(",
        numberOfOrders,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 51,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    orders.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { orders }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 54,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 54,
      columnNumber: 64
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function OrdersTable({ orders }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "acccount-orders", children: orders?.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: orders, children: ({ nodes, isLoading, PreviousLink, NextLink }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 68,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      nodes.map((order) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItem, { order }, order.id, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 71,
          columnNumber: 26
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 74,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 73,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 66,
      columnNumber: 15
    }, this);
  } }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 63,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function EmptyOrders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You haven't placed any orders yet." }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections", children: "Start Shopping \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
function OrderItem({ order }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${order.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
        "#",
        order.orderNumber
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: new Date(order.processedAt).toDateString() }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.financialStatus }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.fulfillmentStatus }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.currentTotalPrice }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${btoa(order.id)}`, children: "View Order \u2192" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
var ORDER_ITEM_FRAGMENT = `#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`;
var CUSTOMER_FRAGMENT = `#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`;
var CUSTOMER_ORDERS_QUERY = `#graphql
  ${CUSTOMER_FRAGMENT}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;
export {
  Orders as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.orders._index-RGX3SO44.js.map
