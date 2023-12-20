import {
  require_react
} from "/build/_shared/chunk-CXM5GY6O.js";
import "/build/_shared/chunk-JGYP5LFQ.js";
import {
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/DefaultSidebar.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DefaultSidebar({ heading }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/5 bg-gray-300 overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Item 1" }, void 0, false, {
        fileName: "app/components/DefaultSidebar.jsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Item 2" }, void 0, false, {
        fileName: "app/components/DefaultSidebar.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DefaultSidebar.jsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/DefaultSidebar.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/DefaultSidebar.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4/5 p-4 overflow-y-auto" }, void 0, false, {
      fileName: "app/components/DefaultSidebar.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DefaultSidebar.jsx",
    lineNumber: 60,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/DefaultSidebar.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/($locale).account.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function shouldRevalidate() {
  return true;
}
function Acccount() {
  const { customer, isPrivateRoute, isAccountHome } = useLoaderData();
  if (!isPrivateRoute && !isAccountHome) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, { context: { customer } }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 82,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AccountLayout, { customer, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, { context: { customer } }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function AccountLayout({ customer, children }) {
  const heading = customer ? customer.firstName ? customer.firstName : customer.lastName : "Account Details";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AcccountMenu, { heading }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.jsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
function AcccountMenu({ heading }) {
  function isActiveStyle({ isActive, isPending }) {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "grey" : "black"
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DefaultSidebar, { heading }, void 0, false, {
    fileName: "app/routes/($locale).account.jsx",
    lineNumber: 119,
    columnNumber: 3
  }, this);
}
var CUSTOMER_FRAGMENT = `#graphql
  fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    defaultAddress {
      ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
  }
  fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
  }
`;
var CUSTOMER_QUERY = `#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${CUSTOMER_FRAGMENT}
`;
export {
  Acccount as default,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/($locale).account-ADSCGEEC.js.map
