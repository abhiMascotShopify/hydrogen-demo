import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-MR3EULDF.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/($locale).account_.recover.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Recover() {
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-recover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: action?.resetRequested ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Request Sent." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Return to Login" }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 47,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Forgot Password." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter the email address associated with your account to receive a link to reset your password." }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, false, {
          fileName: "app/routes/($locale).account_.recover.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            "aria-label": "Email address",
            autoComplete: "email",
            autoFocus: true,
            id: "email",
            name: "email",
            placeholder: "Email address",
            required: true,
            type: "email"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.recover.jsx",
            lineNumber: 68,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 83,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 82,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 81,
        columnNumber: 17
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Request Reset Link" }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 89,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 92,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Login \u2192" }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 94,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 93,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 91,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 58,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
export {
  Recover as default
};
//# sourceMappingURL=/build/routes/($locale).account_.recover-RTOC2XFV.js.map
