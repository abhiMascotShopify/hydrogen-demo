import {
  require_react
} from "/build/_shared/chunk-CXM5GY6O.js";
import "/build/_shared/chunk-JGYP5LFQ.js";
import {
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-ND6AE27L.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account_.login.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Login" }];
};
function Login() {
  const data = useActionData();
  const error = data?.error || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col-reverse sm:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:w-1/2 hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "https://media.sugarpop.com/upload/LoginSideImg.png",
        alt: "Login Background",
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 128,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account_.login.jsx",
      lineNumber: 126,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            className: "mx-auto h-12 w-auto",
            src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
            alt: "Workflow"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 138,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "Sign in to your account" }, void 0, false, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
          "Or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "font-medium text-indigo-600 hover:text-indigo-500", children: "start your 14-day free trial" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 144,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "mt-8 space-y-6", action: "#", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "remember", defaultValue: "true" }, void 0, false, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md shadow-sm -space-y-px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, false, {
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 155,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "email-address",
                name: "email",
                type: "email",
                autoComplete: "email",
                required: true,
                className: "appearance-none rounded-none relative block\n                  w-full px-3 py-2 border border-gray-300\n                  placeholder-gray-500 text-gray-900 rounded-t-md\n                  focus:outline-none focus:ring-indigo-500\n                  focus:border-indigo-500 focus:z-10 sm:text-sm",
                placeholder: "Email address"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account_.login.jsx",
                lineNumber: 158,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "sr-only", children: "Password" }, void 0, false, {
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 173,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                required: true,
                className: "appearance-none rounded-none relative block\n                  w-full px-3 py-2 border border-gray-300\n                  placeholder-gray-500 text-gray-900 rounded-b-md\n                  focus:outline-none focus:ring-indigo-500\n                  focus:border-indigo-500 focus:z-10 sm:text-sm",
                placeholder: "Password"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account_.login.jsx",
                lineNumber: 176,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 172,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "remember-me",
                name: "remember-me",
                type: "checkbox",
                className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500\n                  border-gray-300 rounded"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account_.login.jsx",
                lineNumber: 194,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900", children: "Remember me" }, void 0, false, {
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 201,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "font-medium text-indigo-600 hover:text-indigo-500", children: "Forgot your password?" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 207,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 206,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "group relative w-full flex justify-center\n                py-2 px-4 border border-transparent text-sm font-medium\n                rounded-md text-white bg-indigo-600 hover:bg-indigo-700\n                focus:outline-none focus:ring-2 focus:ring-offset-2\n                focus:ring-indigo-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                LockClosedIcon,
                {
                  className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).account_.login.jsx",
                  lineNumber: 223,
                  columnNumber: 19
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/($locale).account_.login.jsx",
                lineNumber: 222,
                columnNumber: 17
              }, this),
              "Sign in"
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 214,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 213,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.login.jsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account_.login.jsx",
      lineNumber: 135,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.login.jsx",
    lineNumber: 125,
    columnNumber: 1
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.login.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account_.login-237CCLRQ.js.map
