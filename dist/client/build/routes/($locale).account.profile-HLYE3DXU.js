import {
  Form,
  require_jsx_dev_runtime,
  useActionData,
  useNavigation,
  useOutletContext
} from "/build/_shared/chunk-MR3EULDF.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/($locale).account.profile.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Profile" }];
};
function AccountProfile() {
  const account = useOutletContext();
  const { state } = useNavigation();
  const action = useActionData();
  const customer = action?.customer ?? account?.customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-profile", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "My profile" }, void 0, false, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PUT", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Personal information" }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First name" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "firstName",
            name: "firstName",
            type: "text",
            autoComplete: "given-name",
            placeholder: "First name",
            "aria-label": "First name",
            defaultValue: customer.firstName ?? "",
            minLength: 2
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 111,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last name" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "lastName",
            name: "lastName",
            type: "text",
            autoComplete: "family-name",
            placeholder: "Last name",
            "aria-label": "Last name",
            defaultValue: customer.lastName ?? "",
            minLength: 2
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 122,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", children: "Mobile" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "phone",
            name: "phone",
            type: "tel",
            autoComplete: "tel",
            placeholder: "Mobile",
            "aria-label": "Mobile",
            defaultValue: customer.phone ?? ""
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 133,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email address" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            placeholder: "Email address",
            "aria-label": "Email address",
            defaultValue: customer.email ?? ""
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 143,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-profile-marketing", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "acceptsMarketing",
              name: "acceptsMarketing",
              type: "checkbox",
              placeholder: "Accept marketing",
              "aria-label": "Accept marketing",
              defaultChecked: customer.acceptsMarketing
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.profile.jsx",
              lineNumber: 154,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "acceptsMarketing", children: "\xA0 Subscribed to marketing communications" }, void 0, false, {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 162,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Change password (optional)" }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currentPassword", children: "Current password" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "currentPassword",
            name: "currentPassword",
            type: "password",
            autoComplete: "current-password",
            placeholder: "Current password",
            "aria-label": "Current password",
            minLength: 8
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 171,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newPassword", children: "New password" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "newPassword",
            name: "newPassword",
            type: "password",
            placeholder: "New password",
            "aria-label": "New password",
            minLength: 8
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 182,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newPasswordConfirm", children: "New password (confirm)" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "newPasswordConfirm",
            name: "newPasswordConfirm",
            type: "password",
            placeholder: "New password (confirm)",
            "aria-label": "New password confirm",
            minLength: 8
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 192,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Passwords must be at least 8 characters." }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 205,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 204,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 203,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: state !== "idle", children: state !== "idle" ? "Updating" : "Update" }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 211,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.profile.jsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}
export {
  AccountProfile as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.profile-HLYE3DXU.js.map
