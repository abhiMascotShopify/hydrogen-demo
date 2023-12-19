import {
  PredictiveSearchForm,
  PredictiveSearchResults
} from "/build/_shared/chunk-TR7TIHFG.js";
import {
  CartMain
} from "/build/_shared/chunk-WCHMHTBJ.js";
import "/build/_shared/chunk-SO6IFAX7.js";
import "/build/_shared/chunk-57CQBZPW.js";
import {
  Await,
  Link,
  Links,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration,
  init_dist,
  isRouteErrorResponse,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useMatches,
  useRouteError
} from "/build/_shared/chunk-ERGO373V.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-5FIZBM2K.svg";

// app/styles/reset.css
var reset_default = "/build/_assets/reset-C3NFZ242.css";

// app/styles/app.css
var app_default = "/build/_assets/app-D2V65VEB.css";

// app/components/Layout.jsx
var import_react5 = __toESM(require_react());

// app/components/Aside.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Aside({ children, heading, id = "aside" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-modal": true, className: "overlay", id, role: "dialog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "close-outside",
        onClick: () => {
          history.go(-1);
          window.location.hash = "";
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/Aside.jsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: heading }, void 0, false, {
          fileName: "app/components/Aside.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseAside, {}, void 0, false, {
          fileName: "app/components/Aside.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Aside.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children }, void 0, false, {
        fileName: "app/components/Aside.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Aside.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Aside.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "close", href: "#", onChange: () => history.go(-1), children: "\xD7" }, void 0, false, {
      fileName: "app/components/Aside.jsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  );
}

// app/components/Footer.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Footer({ menu }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FooterMenu, { menu }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function FooterMenu({ menu }) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "footer-menu", role: "navigation", children: (menu || FALLBACK_FOOTER_MENU).items.map((item) => {
    if (!item.url)
      return null;
    const url = item.url.includes("myshopify.com") || item.url.includes(publicStoreDomain) ? new URL(item.url).pathname : item.url;
    const isExternal = !url.startsWith("/");
    return isExternal ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: url, rel: "noopener noreferrer", target: "_blank", children: item.title }, item.id, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      NavLink,
      {
        end: true,
        prefetch: "intent",
        style: activeLinkStyle,
        to: url,
        children: item.title
      },
      item.id,
      false,
      {
        fileName: "app/components/Footer.jsx",
        lineNumber: 30,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var FALLBACK_FOOTER_MENU = {
  id: "gid://shopify/Menu/199655620664",
  items: [
    {
      id: "gid://shopify/MenuItem/461633060920",
      resourceId: "gid://shopify/ShopPolicy/23358046264",
      tags: [],
      title: "Privacy Policy",
      type: "SHOP_POLICY",
      url: "/policies/privacy-policy",
      items: []
    },
    {
      id: "gid://shopify/MenuItem/461633093688",
      resourceId: "gid://shopify/ShopPolicy/23358013496",
      tags: [],
      title: "Refund Policy",
      type: "SHOP_POLICY",
      url: "/policies/refund-policy",
      items: []
    },
    {
      id: "gid://shopify/MenuItem/461633126456",
      resourceId: "gid://shopify/ShopPolicy/23358111800",
      tags: [],
      title: "Shipping Policy",
      type: "SHOP_POLICY",
      url: "/policies/shipping-policy",
      items: []
    },
    {
      id: "gid://shopify/MenuItem/461633159224",
      resourceId: "gid://shopify/ShopPolicy/23358079032",
      tags: [],
      title: "Terms of Service",
      type: "SHOP_POLICY",
      url: "/policies/terms-of-service",
      items: []
    }
  ]
};
function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "grey" : "white"
  };
}

// app/components/Header.jsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Header({ header, isLoggedIn, cart }) {
  const { shop, menu } = header;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/", style: activeLinkStyle2, end: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: shop.name }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderMenu, { menu, viewport: "desktop" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderCtas, { isLoggedIn, cart }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function HeaderMenu({ menu, viewport }) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const className = `header-menu-${viewport}`;
  function closeAside(event) {
    if (viewport === "mobile") {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className, role: "navigation", children: [
    viewport === "mobile" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      NavLink,
      {
        end: true,
        onClick: closeAside,
        prefetch: "intent",
        style: activeLinkStyle2,
        to: "/"
      },
      void 0,
      false,
      {
        fileName: "app/components/Header.jsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ),
    (menu || FALLBACK_HEADER_MENU).items.map((item) => {
      if (!item.url)
        return null;
      const url = item.url.includes("myshopify.com") || item.url.includes(publicStoreDomain) ? new URL(item.url).pathname : item.url;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        NavLink,
        {
          className: "header-menu-item",
          end: true,
          onClick: closeAside,
          prefetch: "intent",
          style: activeLinkStyle2,
          to: url,
          children: item.title
        },
        item.id,
        false,
        {
          fileName: "app/components/Header.jsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      );
    })
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function HeaderCtas({ isLoggedIn, cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "header-ctas", role: "navigation", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderMenuMobileToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/account", style: activeLinkStyle2, children: isLoggedIn ? "Account" : "Sign in" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SearchToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartToggle, { cart }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
function HeaderMenuMobileToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "header-menu-mobile-toggle", href: "#mobile-menu-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "\u2630" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function SearchToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#search-aside", children: "Search" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
function CartBadge({ count }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#cart-aside", children: [
    "Cart ",
    count
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
function CartToggle({ cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 99,
    columnNumber: 25
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    if (!cart2)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 102,
        columnNumber: 29
      }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: cart2.totalQuantity || 0 }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 103,
      columnNumber: 18
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
var FALLBACK_HEADER_MENU = {
  id: "gid://shopify/Menu/199655587896",
  items: [
    {
      id: "gid://shopify/MenuItem/461609500728",
      resourceId: null,
      tags: [],
      title: "Collections",
      type: "HTTP",
      url: "/collections",
      items: []
    },
    {
      id: "gid://shopify/MenuItem/461609533496",
      resourceId: null,
      tags: [],
      title: "Blog",
      type: "HTTP",
      url: "/blogs/journal",
      items: []
    },
    {
      id: "gid://shopify/MenuItem/461609566264",
      resourceId: null,
      tags: [],
      title: "Policies",
      type: "HTTP",
      url: "/policies",
      items: []
    },
    {
      id: "gid://shopify/MenuItem/461609599032",
      resourceId: "gid://shopify/Page/92591030328",
      tags: [],
      title: "About",
      type: "PAGE",
      url: "/pages/about",
      items: []
    }
  ]
};
function activeLinkStyle2({ isActive, isPending }) {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "grey" : "black"
  };
}

// app/components/Layout.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Layout({ cart, children = null, footer, header, isLoggedIn }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartAside, { cart }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchAside, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileMenuAside, { menu: header.menu }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, { header, cart, isLoggedIn }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Await, { resolve: footer, children: (footer2) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, { menu: footer2.menu }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 22,
      columnNumber: 24
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function CartAside({ cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Aside, { id: "cart-aside", heading: "CART", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 32,
    columnNumber: 27
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartMain, { cart: cart2, layout: "aside" }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 35,
      columnNumber: 20
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function SearchAside() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Aside, { id: "search-aside", heading: "SEARCH", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "predictive-search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PredictiveSearchForm, { children: ({ fetchResults, inputRef }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "input",
        {
          name: "q",
          onChange: fetchResults,
          onFocus: fetchResults,
          placeholder: "Search",
          ref: inputRef,
          type: "search"
        },
        void 0,
        false,
        {
          fileName: "app/components/Layout.jsx",
          lineNumber: 51,
          columnNumber: 15
        },
        this
      ),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 60,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PredictiveSearchResults, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
function MobileMenuAside({ menu }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Aside, { id: "mobile-menu-aside", heading: "MENU", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeaderMenu, { menu, viewport: "mobile" }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MPZLWOM2.css";

// app/components/Example.jsx
var import_react8 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconBase.js
var import_react7 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react6 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react6.default.createContext && import_react6.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react7.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react7.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react7.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react7.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react7.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/bs/index.esm.js
function BsChevronCompactLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" } }] })(props);
}
function BsChevronCompactRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" } }] })(props);
}

// app/components/Example.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black"
  }
  // More products...
];
function Example() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        style: { backgroundImage: `url(${products[0].imageSrc})` },
        className: "w-full h-full rounded-2xl bg-center bg-cover duration-500"
      },
      void 0,
      false,
      {
        fileName: "app/components/Example.jsx",
        lineNumber: 109,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BsChevronCompactLeft, { size: 30 }, void 0, false, {
      fileName: "app/components/Example.jsx",
      lineNumber: 113,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Example.jsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BsChevronCompactRight, { size: 30 }, void 0, false, {
      fileName: "app/components/Example.jsx",
      lineNumber: 116,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Example.jsx",
      lineNumber: 115,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Add to Cart" }, void 0, false, {
      fileName: "app/components/Example.jsx",
      lineNumber: 118,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Example.jsx",
    lineNumber: 108,
    columnNumber: 7
  }, this);
}

// app/components/Button.jsx
var import_react9 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "bg-primary text-white  px-6 py-2 rounded-full", children: "Get Started" }, void 0, false, {
    fileName: "app/components/Button.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var Button_default = Button;

// app/components/Navbar/Navbar.jsx
var import_react11 = __toESM(require_react());
init_dist();

// app/components/Navbar/NavLinks.jsx
var import_react10 = __toESM(require_react());
init_dist();

// app/components/Navbar/Mylinks.jsx
var links = [
  {
    name: "Men",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      }
    ]
  },
  {
    name: "Women",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      }
    ]
  },
  {
    name: "Kid's",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" }
        ]
      }
    ]
  }
];

// app/components/Navbar/NavLinks.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var NavLinks = () => {
  const [heading, setHeading] = (0, import_react10.useState)("");
  const [subHeading, setSubHeading] = (0, import_react10.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-3 text-left md:cursor-pointer group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "h1",
        {
          className: "py-7 flex justify-between items-center md:pr-0 pr-5 group",
          onClick: () => {
            heading !== link.name ? setHeading(link.name) : setHeading("");
            setSubHeading("");
          },
          children: [
            link.name,
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-xl md:hidden inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "ion-icon",
              {
                name: `${heading === link.name ? "chevron-up" : "chevron-down"}`
              },
              void 0,
              false,
              {
                fileName: "app/components/Navbar/NavLinks.jsx",
                lineNumber: 22,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/Navbar/NavLinks.jsx",
              lineNumber: 21,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ion-icon", { name: "chevron-down" }, void 0, false, {
              fileName: "app/components/Navbar/NavLinks.jsx",
              lineNumber: 29,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/Navbar/NavLinks.jsx",
              lineNumber: 28,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/Navbar/NavLinks.jsx",
          lineNumber: 13,
          columnNumber: 13
        },
        this
      ),
      link.submenu && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute top-20 hidden group-hover:md:block hover:md:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            className: "w-4 h-4 left-3 absolute \r\n                    mt-1 bg-white rotate-45"
          },
          void 0,
          false,
          {
            fileName: "app/components/Navbar/NavLinks.jsx",
            lineNumber: 36,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Navbar/NavLinks.jsx",
          lineNumber: 35,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white p-5 grid grid-cols-3 gap-10", children: link.sublinks.map((mysublinks) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-lg font-semibold", children: mysublinks.Head }, void 0, false, {
            fileName: "app/components/Navbar/NavLinks.jsx",
            lineNumber: 44,
            columnNumber: 25
          }, this),
          mysublinks.sublink.map((slink) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "text-sm text-gray-600 my-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            Link,
            {
              to: slink.link,
              className: "hover:text-primary",
              children: slink.name
            },
            void 0,
            false,
            {
              fileName: "app/components/Navbar/NavLinks.jsx",
              lineNumber: 49,
              columnNumber: 29
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/Navbar/NavLinks.jsx",
            lineNumber: 48,
            columnNumber: 27
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/Navbar/NavLinks.jsx",
          lineNumber: 43,
          columnNumber: 23
        }, this)) }, void 0, false, {
          fileName: "app/components/Navbar/NavLinks.jsx",
          lineNumber: 41,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar/NavLinks.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar/NavLinks.jsx",
        lineNumber: 33,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar/NavLinks.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: `
            ${heading === link.name ? "md:hidden" : "hidden"}
          `,
        children: link.sublinks.map((slinks) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "h1",
            {
              onClick: () => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading(""),
              className: "py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5",
              children: [
                slinks.Head,
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-xl md:mt-1 md:ml-2 inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "ion-icon",
                  {
                    name: `${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/Navbar/NavLinks.jsx",
                    lineNumber: 85,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/Navbar/NavLinks.jsx",
                  lineNumber: 84,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/Navbar/NavLinks.jsx",
              lineNumber: 74,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "div",
            {
              className: `${subHeading === slinks.Head ? "md:hidden" : "hidden"}`,
              children: slinks.sublink.map((slink) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "py-3 pl-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: slink.link, children: slink.name }, void 0, false, {
                fileName: "app/components/Navbar/NavLinks.jsx",
                lineNumber: 101,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/Navbar/NavLinks.jsx",
                lineNumber: 100,
                columnNumber: 23
              }, this))
            },
            void 0,
            false,
            {
              fileName: "app/components/Navbar/NavLinks.jsx",
              lineNumber: 94,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Navbar/NavLinks.jsx",
          lineNumber: 73,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Navbar/NavLinks.jsx",
          lineNumber: 72,
          columnNumber: 15
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/components/Navbar/NavLinks.jsx",
        lineNumber: 65,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Navbar/NavLinks.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/Navbar/NavLinks.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var NavLinks_default = NavLinks;

// app/components/Navbar/Navbar.jsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var Navbar = () => {
  const [open, setOpen] = (0, import_react11.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center font-medium justify-around", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "z-50 p-5 md:w-auto w-full flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: Logo, alt: "logo", className: "md:cursor-pointer h-9" }, void 0, false, {
        fileName: "app/components/Navbar/Navbar.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-3xl md:hidden", onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ion-icon", { name: `${open ? "close" : "menu"}` }, void 0, false, {
        fileName: "app/components/Navbar/Navbar.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar/Navbar.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar/Navbar.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "md:flex hidden uppercase items-center gap-8 font-[Poppins]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Link, { to: "/", className: "py-7 px-3 inline-block", children: "Home" }, void 0, false, {
        fileName: "app/components/Navbar/Navbar.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar/Navbar.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NavLinks_default, {}, void 0, false, {
        fileName: "app/components/Navbar/Navbar.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar/Navbar.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "md:block hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, {}, void 0, false, {
      fileName: "app/components/Navbar/Navbar.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar/Navbar.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "ul",
      {
        className: `
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Link, { to: "/", className: "py-7 px-3 inline-block", children: "Home" }, void 0, false, {
            fileName: "app/components/Navbar/Navbar.jsx",
            lineNumber: 36,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/Navbar/Navbar.jsx",
            lineNumber: 35,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NavLinks_default, {}, void 0, false, {
            fileName: "app/components/Navbar/Navbar.jsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, {}, void 0, false, {
            fileName: "app/components/Navbar/Navbar.jsx",
            lineNumber: 42,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/Navbar/Navbar.jsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/Navbar/Navbar.jsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Navbar/Navbar.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar/Navbar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var Navbar_default = Navbar;

// app/root.jsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function links2() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: reset_default },
    { rel: "stylesheet", href: app_default },
    {
      rel: "preconnect",
      href: "https://cdn.shopify.com"
    },
    {
      rel: "preconnect",
      href: "https://shop.app"
    },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
}
function App() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Example, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 98,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Navbar_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 99,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  const [root] = useMatches();
  let errorMessage = "Unknown error";
  let errorStatus = 500;
  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Layout, { ...root.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "route-error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Oops" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: errorStatus }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("pre", { children: errorMessage }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 133,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 128,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 139,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
var MENU_FRAGMENT = `#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`;
var HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
var FOOTER_QUERY = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
export {
  ErrorBoundary,
  App as default,
  links2 as links
};
//# sourceMappingURL=/build/root-UZ2CQZAA.js.map
