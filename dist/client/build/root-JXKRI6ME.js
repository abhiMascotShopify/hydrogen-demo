import {
  PredictiveSearchForm,
  PredictiveSearchResults
} from "/build/_shared/chunk-WA5PPWC6.js";
import {
  CartMain
} from "/build/_shared/chunk-YZZQLWYH.js";
import "/build/_shared/chunk-GYBJTXU5.js";
import "/build/_shared/chunk-3PC7BQ56.js";
import {
  Await,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useMatches,
  useRouteError
} from "/build/_shared/chunk-MR3EULDF.js";
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
var import_react6 = __toESM(require_react());

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
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Header({ header, isLoggedIn, cart }) {
  const { shop, menu } = header;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/", style: activeLinkStyle2, end: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: shop.name }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderCtas, { isLoggedIn, cart }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.jsx",
      lineNumber: 10,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderMenu, { menu, viewport: "desktop" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 17,
      columnNumber: 3
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 9,
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
        lineNumber: 38,
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
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenu, { item }, void 0, false, {
            fileName: "app/components/Header.jsx",
            lineNumber: 66,
            columnNumber: 11
          }, this)
        },
        item.id,
        false,
        {
          fileName: "app/components/Header.jsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      );
    })
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function HeaderCtas({ isLoggedIn, cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "header-ctas", role: "navigation", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderMenuMobileToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/account", style: activeLinkStyle2, children: isLoggedIn ? "Account" : "Sign in" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SearchToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartToggle, { cart }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
function HeaderMenuMobileToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "header-menu-mobile-toggle", href: "#mobile-menu-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "\u2630" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
function SearchToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#search-aside", children: "Search" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
function CartBadge({ count }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#cart-aside", children: [
    "Cart ",
    count
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
function CartToggle({ cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 105,
    columnNumber: 25
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    if (!cart2)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 108,
        columnNumber: 29
      }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: cart2.totalQuantity || 0 }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 109,
      columnNumber: 18
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 105,
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
var DropdownMenu = (item) => {
  const [isOpen, setIsOpen] = (0, import_react3.useState)(false);
  console.log(item);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative inline-block text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        onClick: toggleMenu,
        className: "px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none",
        children: isOpen ? "Close Menu" : "Open Menu"
      },
      void 0,
      false,
      {
        fileName: "app/components/Header.jsx",
        lineNumber: 179,
        columnNumber: 7
      },
      this
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: "origin-top-right absolute right-0 mt-2 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg",
        onMouseLeave: closeMenu,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              href: "#",
              className: "block px-4 py-2 text-gray-800 hover:bg-gray-100",
              onClick: closeMenu,
              children: "Item 1"
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.jsx",
              lineNumber: 191,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              href: "#",
              className: "block px-4 py-2 text-gray-800 hover:bg-gray-100",
              onClick: closeMenu,
              children: "Item 2"
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.jsx",
              lineNumber: 198,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              href: "#",
              className: "block px-4 py-2 text-gray-800 hover:bg-gray-100",
              onClick: closeMenu,
              children: "Item 3"
            },
            void 0,
            false,
            {
              fileName: "app/components/Header.jsx",
              lineNumber: 205,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Header.jsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Header.jsx",
        lineNumber: 186,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
};
{
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Await, { resolve: footer, children: (footer2) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, { menu: footer2.menu }, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Aside, { id: "cart-aside", heading: "CART", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
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
var tailwind_default = "/build/_assets/tailwind-KCYAPUKA.css";

// app/root.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function links() {
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
  const image = ["https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard2_7746b5e7-35c9-4fc8-bcd9-9d98e80a5abb.jpg", "https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard4_7e4b511f-1796-49a7-89de-7ba7d18d3544.jpg", "https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard2_7746b5e7-35c9-4fc8-bcd9-9d98e80a5abb.jpg?v=1681735611"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { ...data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 101,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 87,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { ...root.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "route-error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Oops" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: errorStatus }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("pre", { children: errorMessage }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 140,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 139,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 135,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
var MENU_FRAGMENT = `#graphql
  fragment Menu on Menu {
    id
    items {
      id
      title
      url
      items{
        title
        url
      }
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
  links
};
//# sourceMappingURL=/build/root-JXKRI6ME.js.map
