import {
  PredictiveSearchForm,
  PredictiveSearchResults
} from "/build/_shared/chunk-WA5PPWC6.js";
import {
  ImageCarousel_default,
  MdChevronLeft,
  MdChevronRight,
  ProductCarousel_default
} from "/build/_shared/chunk-S7YPSU3P.js";
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
var import_react8 = __toESM(require_react());

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
    menu.items.map((item) => {
      if (!item.url)
        return null;
      const url = item.url.includes("myshopify.com") || item.url.includes(publicStoreDomain) ? new URL(item.url).pathname : item.url;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative inline-block text-left group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "px-4 py-2 text-gray-800 focus:outline-none", children: item.title }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute hidden mt-2 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg group-hover:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-1", children: item.items.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: `/collections/${it.title}`, className: "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:opacity-100", children: it.title }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 64,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this);
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
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/account", style: activeLinkStyle2, children: isLoggedIn ? "Account" : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { fillRule: "evenodd", d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", clipRule: "evenodd" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 83,
      columnNumber: 3
    }, this) }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 82,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SearchToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartToggle, { cart }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
function HeaderMenuMobileToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "header-menu-mobile-toggle", href: "#mobile-menu-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "\u2630" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 97,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function SearchToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#search-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 104,
    columnNumber: 3
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 103,
    columnNumber: 34
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
function CartBadge({ count }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#cart-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 111,
    columnNumber: 3
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 110,
    columnNumber: 32
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
function CartToggle({ cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 117,
    columnNumber: 25
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    if (!cart2)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 120,
        columnNumber: 29
      }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: cart2.totalQuantity || 0 }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 121,
      columnNumber: 18
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
function activeLinkStyle2({ isActive, isPending }) {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "grey" : "black"
  };
}
{
}
{
}
{
}

// app/components/AnnouncemnetBar.jsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var AnnouncementBar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-pink-700 text-center font-black", children: "Announcement" }, void 0, false, {
    fileName: "app/components/AnnouncemnetBar.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};
var AnnouncemnetBar_default = AnnouncementBar;

// app/components/OfferCarousel.jsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var OfferCarousel = () => {
  const products = [
    { id: 1, name: "Product 1", image: "https://d1cffxj31hqf0x.cloudfront.net/prod/images/SUGARPOP/Homepage/b0eedf73-cf16-4645-a50a-cb040e8914a3.jpg" },
    { id: 2, name: "Product 2", image: "https://d1cffxj31hqf0x.cloudfront.net/prod/images/SUGARPOP/Homepage/b0eedf73-cf16-4645-a50a-cb040e8914a3.jpg" },
    { id: 3, name: "Product 3", image: "https://d1cffxj31hqf0x.cloudfront.net/prod/images/SUGARPOP/Homepage/b0eedf73-cf16-4645-a50a-cb040e8914a3.jpg" },
    { id: 4, name: "Product 3", image: "https://d1cffxj31hqf0x.cloudfront.net/prod/images/SUGARPOP/Homepage/b0eedf73-cf16-4645-a50a-cb040e8914a3.jpg" },
    { id: 5, name: "Product 3", image: "https://d1cffxj31hqf0x.cloudfront.net/prod/images/SUGARPOP/Homepage/b0eedf73-cf16-4645-a50a-cb040e8914a3.jpg" },
    { id: 6, name: "Product 3", image: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/purepng.com-white-t-shirtt-shirtfabrict-shapegramnetsmenswhite-14215264292423zp8k_2677b2d8-59f3-4e10-9cb8-b26178515ac5.png?v=1693692132" },
    { id: 7, name: "Product 3", image: "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/purepng.com-white-t-shirtt-shirtfabrict-shapegramnetsmenswhite-14215264292423zp8k_2677b2d8-59f3-4e10-9cb8-b26178515ac5.png?v=1693692132" }
    // Add more products as needed
  ];
  const [startIndex, setStartIndex] = (0, import_react6.useState)(0);
  const productsToShow = products.slice(startIndex, startIndex + 3);
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 3
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex", children: productsToShow.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full sm:w-1/2 md:w-1/3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: `${product.image}`,
        alt: product.name,
        className: "w-full h-auto"
      },
      void 0,
      false,
      {
        fileName: "app/components/OfferCarousel.jsx",
        lineNumber: 40,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 39,
      columnNumber: 15
    }, this) }, product.id, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/OfferCarousel.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75",
        onClick: () => setStartIndex(
          (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 3
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MdChevronLeft, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 40 }, void 0, false, {
          fileName: "app/components/OfferCarousel.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/OfferCarousel.jsx",
        lineNumber: 50,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75",
        onClick: () => setStartIndex((prevIndex) => (prevIndex + 3) % products.length),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MdChevronRight, { className: "opacity-50 cursor-pointer hover:opacity-100", size: 40 }, void 0, false, {
          fileName: "app/components/OfferCarousel.jsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/OfferCarousel.jsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/OfferCarousel.jsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/OfferCarousel.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};
var OfferCarousel_default = OfferCarousel;

// app/components/Layout.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Layout({ cart, children = null, footer, header, isLoggedIn }) {
  const images = [
    "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468",
    "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468",
    "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468"
    // Add more image URLs
  ];
  const data = [
    "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AnnouncemnetBar_default, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CartAside, { cart }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SearchAside, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MobileMenuAside, { menu: header.menu }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, { header, cart, isLoggedIn }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ImageCarousel_default, { images: data }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(OfferCarousel_default, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ProductCarousel_default, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Await, { resolve: footer, children: (footer2) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, { menu: footer2.menu }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 51,
      columnNumber: 24
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function CartAside({ cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Aside, { id: "cart-aside", heading: "CART", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 61,
    columnNumber: 27
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CartMain, { cart: cart2, layout: "aside" }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 64,
      columnNumber: 20
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 62,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function SearchAside() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Aside, { id: "search-aside", heading: "SEARCH", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "predictive-search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PredictiveSearchForm, { children: ({ fetchResults, inputRef }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          lineNumber: 80,
          columnNumber: 15
        },
        this
      ),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 89,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 79,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PredictiveSearchResults, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
function MobileMenuAside({ menu }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Aside, { id: "mobile-menu-aside", heading: "MENU", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(HeaderMenu, { menu, viewport: "mobile" }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 102,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4ZK2JWRP.css";

// app/root.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Layout, { ...data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Scripts, {}, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Layout, { ...root.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "route-error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Oops" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: errorStatus }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("pre", { children: errorMessage }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Scripts, {}, void 0, false, {
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
//# sourceMappingURL=/build/root-REECKANF.js.map
