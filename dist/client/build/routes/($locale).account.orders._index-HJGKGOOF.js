import {
  PencilIcon_default
} from "/build/_shared/chunk-J46EH3W7.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-CXM5GY6O.js";
import "/build/_shared/chunk-JGYP5LFQ.js";
import {
  At
} from "/build/_shared/chunk-Q3FVJCJO.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@heroicons/react/24/outline/esm/ArrowDownTrayIcon.js
var React = __toESM(require_react(), 1);
function ArrowDownTrayIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
var ForwardRef = React.forwardRef(ArrowDownTrayIcon);
var ArrowDownTrayIcon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var React2 = __toESM(require_react(), 1);
function MagnifyingGlassIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  }));
}
var ForwardRef2 = React2.forwardRef(MagnifyingGlassIcon);
var MagnifyingGlassIcon_default = ForwardRef2;

// app/routes/($locale).account.orders._index.jsx
var import_react2 = __toESM(require_react2());
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
        lineNumber: 69,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    orders.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { orders }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 72,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 72,
      columnNumber: 64
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
function OrdersTable({ orders }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex acccount-orders", children: orders?.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(At, { connection: orders, children: ({ nodes, isLoading, PreviousLink, NextLink }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 86,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      nodes.map((order) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItem, { order }, order.id, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 89,
          columnNumber: 26
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 92,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 84,
      columnNumber: 15
    }, this);
  } }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 99,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
function EmptyOrders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You haven't placed any orders yet." }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections", children: "Start Shopping \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
function OrderItem({ order }) {
  console.log(order.lineItems.nodes);
  const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];
  const TABLE_ROWS = [
    {
      img: "/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "$2,500",
      date: "Wed 3:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "/img/logos/logo-amazon.svg",
      name: "Amazon",
      amount: "$5,000",
      date: "Wed 1:00pm",
      status: "paid",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "/img/logos/logo-pinterest.svg",
      name: "Pinterest",
      amount: "$3,400",
      date: "Mon 7:40pm",
      status: "pending",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "/img/logos/logo-google.svg",
      name: "Google",
      amount: "$1,000",
      date: "Wed 5:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "/img/logos/logo-netflix.svg",
      name: "netflix",
      amount: "$14,000",
      date: "Wed 3:30am",
      status: "cancelled",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026"
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Card, { className: "h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CardHeader, { floated: false, shadow: false, className: "rounded-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Typography, { variant: "h5", color: "blue-gray", children: "Recent Transactions" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 178,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Typography, { color: "gray", className: "mt-1 font-normal", children: "These are details about the last transactions" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 181,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 177,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full shrink-0 gap-2 md:w-max", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react2.Input,
          {
            label: "Search",
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MagnifyingGlassIcon_default, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 189,
              columnNumber: 25
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 187,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Button, { className: "flex items-center gap-3", size: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownTrayIcon_default, { strokeWidth: 2, className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 193,
            columnNumber: 17
          }, this),
          " Download"
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 185,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 176,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 175,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CardBody, { className: "overflow-scroll px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full min-w-max table-auto text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: TABLE_HEAD.map((head) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "th",
        {
          className: "border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            import_react2.Typography,
            {
              variant: "small",
              color: "blue-gray",
              className: "font-normal leading-none opacity-70",
              children: head
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 207,
              columnNumber: 21
            },
            this
          )
        },
        head,
        false,
        {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 203,
          columnNumber: 19
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 201,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 200,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: TABLE_ROWS.map(
        ({
          img,
          name,
          amount,
          date,
          status,
          account,
          accountNumber,
          expiry
        }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.Avatar,
                {
                  src: img,
                  alt: name,
                  size: "md",
                  className: "border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders._index.jsx",
                  lineNumber: 242,
                  columnNumber: 27
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.Typography,
                {
                  variant: "small",
                  color: "blue-gray",
                  className: "font-bold",
                  children: name
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders._index.jsx",
                  lineNumber: 248,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 241,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 240,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_react2.Typography,
              {
                variant: "small",
                color: "blue-gray",
                className: "font-normal",
                children: amount
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders._index.jsx",
                lineNumber: 258,
                columnNumber: 25
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 257,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_react2.Typography,
              {
                variant: "small",
                color: "blue-gray",
                className: "font-normal",
                children: date
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders._index.jsx",
                lineNumber: 267,
                columnNumber: 25
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 266,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_react2.Chip,
              {
                size: "sm",
                variant: "ghost",
                value: status,
                color: status === "paid" ? "green" : status === "pending" ? "amber" : "red"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders._index.jsx",
                lineNumber: 277,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 276,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 275,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-9 w-12 rounded-md border border-blue-gray-50 p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_react2.Avatar,
                {
                  src: account === "visa" ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png",
                  size: "sm",
                  alt: account,
                  variant: "square",
                  className: "h-full w-full object-contain p-1"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account.orders._index.jsx",
                  lineNumber: 294,
                  columnNumber: 29
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/($locale).account.orders._index.jsx",
                lineNumber: 293,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react2.Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "font-normal capitalize",
                    children: [
                      account.split("-").join(" "),
                      " ",
                      accountNumber
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/($locale).account.orders._index.jsx",
                    lineNumber: 307,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react2.Typography,
                  {
                    variant: "small",
                    color: "blue-gray",
                    className: "font-normal opacity-70",
                    children: expiry
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).account.orders._index.jsx",
                    lineNumber: 314,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/($locale).account.orders._index.jsx",
                lineNumber: 306,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 292,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 291,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Tooltip, { content: "Edit User", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 327,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 326,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 325,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 324,
              columnNumber: 23
            }, this)
          ] }, name, true, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 239,
            columnNumber: 21
          }, this);
        }
      ) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 218,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 199,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 198,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CardFooter, { className: "flex items-center justify-between border-t border-blue-gray-50 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Button, { variant: "outlined", size: "sm", children: "Previous" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 339,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "outlined", size: "sm", children: "1" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 343,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "text", size: "sm", children: "2" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 346,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "text", size: "sm", children: "3" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 349,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "text", size: "sm", children: "..." }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 352,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "text", size: "sm", children: "8" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 355,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "text", size: "sm", children: "9" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 358,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.IconButton, { variant: "text", size: "sm", children: "10" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 361,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 342,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Button, { variant: "outlined", size: "sm", children: "Next" }, void 0, false, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 365,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 338,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 174,
    columnNumber: 7
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
//# sourceMappingURL=/build/routes/($locale).account.orders._index-HJGKGOOF.js.map
