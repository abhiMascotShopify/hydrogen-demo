import {
  require_react
} from "/build/_shared/chunk-CXM5GY6O.js";
import "/build/_shared/chunk-JGYP5LFQ.js";
import {
  Form,
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
  console.log(data);
  console.log(error);
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
        lineNumber: 131,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account_.login.jsx",
      lineNumber: 129,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full justify-center items-center flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "w-full justify-center items-center", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "username", children: "Email" }, void 0, false, {
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 141,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                placeholder: "Email address",
                "aria-label": "Email address",
                required: true
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account_.login.jsx",
                lineNumber: 144,
                columnNumber: 7
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 140,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "password", children: "Password" }, void 0, false, {
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 154,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                placeholder: "Password",
                "aria-label": "Password",
                minLength: 8,
                required: true
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account_.login.jsx",
                lineNumber: 157,
                columnNumber: 7
              },
              this
            ),
            error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs italic", children: error }, void 0, false, {
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 167,
              columnNumber: 11
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 169,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 153,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 139,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit", children: "Sign In" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 174,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800", href: "/account/recover", children: "Forgot Password?" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 177,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 173,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 138,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-gray-500 text-xs", children: "\xA92023. All rights reserved." }, void 0, false, {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 182,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.login.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.login.jsx",
    lineNumber: 128,
    columnNumber: 1
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.login.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account_.login-IABHRACN.js.map
