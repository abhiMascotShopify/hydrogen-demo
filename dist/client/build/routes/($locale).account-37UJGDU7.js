import {
  Form,
  NavLink,
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function shouldRevalidate() {
  return true;
}
function Acccount() {
  const { customer, isPrivateRoute, isAccountHome } = useLoaderData();
  if (!isPrivateRoute && !isAccountHome) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: { customer } }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountLayout, { customer, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: { customer } }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.jsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function AccountLayout({ customer, children }) {
  const heading = customer ? customer.firstName ? `Welcome, ${customer.firstName}` : `Welcome to your account.` : "Account Details";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: heading }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcccountMenu, {}, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.jsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
function AcccountMenu() {
  function isActiveStyle({ isActive, isPending }) {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "grey" : "black"
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { role: "navigation", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/orders", style: isActiveStyle, children: "Orders \xA0" }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    "\xA0|\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/profile", style: isActiveStyle, children: "\xA0 Profile \xA0" }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    "\xA0|\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/addresses", style: isActiveStyle, children: "\xA0 Addresses \xA0" }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    "\xA0|\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logout, {}, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 131,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.jsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}
function Logout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "account-logout", method: "POST", action: "/account/logout", children: [
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Sign out" }, void 0, false, {
      fileName: "app/routes/($locale).account.jsx",
      lineNumber: 139,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.jsx",
    lineNumber: 138,
    columnNumber: 5
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
//# sourceMappingURL=/build/routes/($locale).account-37UJGDU7.js.map
