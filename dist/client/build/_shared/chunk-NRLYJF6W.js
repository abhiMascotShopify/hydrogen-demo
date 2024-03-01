import {
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/providers/JudgemeLoader.js
var import_react = __toESM(require_react());
var useJudgeme = ({ shopDomain, publicToken, cdnHost, delay = 500 }) => {
  (0, import_react.useEffect)(() => {
    if (!shopDomain || !publicToken || !cdnHost) {
      console.log("CONFIG ERROR: Missing config values for store domain, store public token, cdn host");
      return;
    }
    const shopCredentials = `
      if (typeof jdgm === 'undefined') {
        let jdgm = {};
        jdgm.SHOP_DOMAIN = '${shopDomain}';
        jdgm.PLATFORM = 'shopify';
        jdgm.PUBLIC_TOKEN = '${publicToken}';
        window.jdgm = jdgm;
      };
    `;
    fetch(cdnHost + "/widget_preloader.js").then((res) => res.text()).then((text) => {
      const preloaderFunction = `function jdgm_preloader(){${text}}`;
      const shopCredentialsScript = document.createElement("script");
      const preloaderScript = document.createElement("script");
      const installedScript = document.createElement("script");
      shopCredentialsScript.innerText = shopCredentials;
      preloaderScript.innerText = preloaderFunction;
      installedScript.src = cdnHost + "/assets/installed.js";
      document.head.append(shopCredentialsScript, preloaderScript, installedScript);
      console.log("Judge.me script loaded");
    });
  }, []);
  (0, import_react.useEffect)(() => {
    if (window.jdgm_rerender) {
      window.clearTimeout(window.jdgm_rerender);
    }
    window.jdgm_rerender = window.setTimeout(() => {
      window.clearTimeout(window.jdgm_rerender);
      if (window.jdgm_preloader && !window.jdgmCacheServer) {
        window.jdgm_preloader();
      } else if (window.jdgmCacheServer) {
        window.jdgmCacheServer.reloadAll();
      } else {
        console.log("missing Judge.me script");
      }
    }, delay);
  });
};
var JudgemeLoader_default = useJudgeme;

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeCarousel.js
var import_react2 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeMedals.js
var import_react3 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeReviewWidget.js
var import_react4 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeAllReviewsCount.js
var import_react5 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeAllReviewsRating.js
var import_react6 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemePreviewBadge.js
var import_react7 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeVerifiedBadge.js
var import_react8 = __toESM(require_react());

// node_modules/@judgeme/shopify-hydrogen/dist/esnext/components/widgets/JudgemeReviewsTab.js
var import_react9 = __toESM(require_react());

export {
  JudgemeLoader_default
};
//# sourceMappingURL=/build/_shared/chunk-NRLYJF6W.js.map
