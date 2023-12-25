import {
  Image,
  Money,
  rr
} from "/build/_shared/chunk-SMAMLHOS.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useFetchers,
  useParams
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Search.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var NO_PREDICTIVE_SEARCH_RESULTS = [
  { type: "queries", items: [] },
  { type: "products", items: [] },
  { type: "collections", items: [] },
  { type: "pages", items: [] },
  { type: "articles", items: [] }
];
function SearchForm({ searchTerm }) {
  const inputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    function handleKeyDown(event) {
      if (event.key === "k" && event.metaKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === "Escape") {
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        defaultValue: searchTerm,
        name: "q",
        placeholder: "Search\u2026",
        ref: inputRef,
        type: "search"
      },
      void 0,
      false,
      {
        fileName: "app/components/Search.jsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    ),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Search from custom" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function SearchResults({ results }) {
  if (!results) {
    return null;
  }
  const keys = Object.keys(results);
  console.log(results);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: results && keys.map((type) => {
    const resourceResults = results[type];
    if (resourceResults.nodes[0]?.__typename === "Page") {
      const pageResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResultPageGrid, { pages: pageResults }, "pages", false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 67,
        columnNumber: 15
      }, this) : null;
    }
    if (resourceResults.nodes[0]?.__typename === "Product") {
      const productResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SearchResultsProductsGrid,
        {
          products: productResults
        },
        "products",
        false,
        {
          fileName: "app/components/Search.jsx",
          lineNumber: 74,
          columnNumber: 15
        },
        this
      ) : null;
    }
    if (resourceResults.nodes[0]?.__typename === "Article") {
      const articleResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        SearchResultArticleGrid,
        {
          articles: articleResults
        },
        "articles",
        false,
        {
          fileName: "app/components/Search.jsx",
          lineNumber: 84,
          columnNumber: 15
        },
        this
      ) : null;
    }
    return null;
  }) }, void 0, false, {
    fileName: "app/components/Search.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function SearchResultsProductsGrid({ products }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Products" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rr, { connection: products, children: ({ nodes, isLoading, NextLink, PreviousLink }) => {
      const itemsMarkup = nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/products/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: product.title }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 106,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 105,
        columnNumber: 15
      }, this) }, product.id, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 104,
        columnNumber: 13
      }, this));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 114,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 113,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          itemsMarkup,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/Search.jsx",
            lineNumber: 119,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Search.jsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 123,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 122,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 121,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Search.jsx",
        lineNumber: 111,
        columnNumber: 13
      }, this);
    } }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
function SearchResultPageGrid({ pages }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Pages" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: pages?.nodes?.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/pages/${page.handle}`, children: page.title }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 142,
      columnNumber: 13
    }, this) }, page.id, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 141,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}
function SearchResultArticleGrid({ articles }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Articles" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: articles?.nodes?.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/blog/${article.handle}`, children: article.title }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 160,
      columnNumber: 13
    }, this) }, article.id, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 159,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 155,
    columnNumber: 5
  }, this);
}
function NoSearchResults() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No results, try a different search." }, void 0, false, {
    fileName: "app/components/Search.jsx",
    lineNumber: 172,
    columnNumber: 10
  }, this);
}
function PredictiveSearchForm({
  action,
  children,
  className = "predictive-search-form",
  method = "POST",
  ...props
}) {
  const params = useParams();
  const fetcher = useFetcher();
  const inputRef = (0, import_react2.useRef)(null);
  function fetchResults(event) {
    const searchAction = action ?? "/api/predictive-search";
    const localizedAction = params.locale ? `/${params.locale}${searchAction}` : searchAction;
    const newSearchTerm = event.target.value || "";
    fetcher.submit(
      { q: newSearchTerm, limit: "6" },
      { method, action: localizedAction }
    );
  }
  (0, import_react2.useEffect)(() => {
    inputRef?.current?.setAttribute("type", "search");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    fetcher.Form,
    {
      ...props,
      className,
      onSubmit: (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!inputRef?.current || inputRef.current.value === "") {
          return;
        }
        inputRef.current.blur();
      },
      children: children({ fetchResults, inputRef, fetcher })
    },
    void 0,
    false,
    {
      fileName: "app/components/Search.jsx",
      lineNumber: 208,
      columnNumber: 5
    },
    this
  );
}
function PredictiveSearchResults() {
  const { results, totalResults, searchInputRef, searchTerm } = usePredictiveSearch();
  function goToSearchResult(event) {
    if (!searchInputRef.current)
      return;
    searchInputRef.current.blur();
    searchInputRef.current.value = "";
    window.location.href = event.currentTarget.href;
  }
  if (!totalResults) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoPredictiveSearchResults, { searchTerm }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 238,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "predictive-search-results mx-3 rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: results.map(({ type, items }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      PredictiveSearchResult,
      {
        goToSearchResult,
        items,
        searchTerm,
        type
      },
      type,
      false,
      {
        fileName: "app/components/Search.jsx",
        lineNumber: 244,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 242,
      columnNumber: 7
    }, this),
    searchTerm.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: goToSearchResult, to: `/search?q=${searchTerm.current}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "View all results for ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("q", { children: searchTerm.current }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 257,
        columnNumber: 34
      }, this),
      "\xA0 \u2192"
    ] }, void 0, true, {
      fileName: "app/components/Search.jsx",
      lineNumber: 256,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 255,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 241,
    columnNumber: 5
  }, this);
}
function NoPredictiveSearchResults({ searchTerm }) {
  if (!searchTerm.current) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "No results found for ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("q", { children: searchTerm.current }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 272,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 271,
    columnNumber: 5
  }, this);
}
function PredictiveSearchResult({ goToSearchResult, items, searchTerm, type }) {
  const isSuggestions = type === "queries";
  const categoryUrl = `/search?q=${searchTerm.current}&type=${pluralToSingularSearchType(type)}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "predictive-search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: categoryUrl, onClick: goToSearchResult, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: isSuggestions ? "Suggestions" : type }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 286,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 285,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      SearchResultItem,
      {
        goToSearchResult,
        item
      },
      item.id,
      false,
      {
        fileName: "app/components/Search.jsx",
        lineNumber: 290,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 288,
      columnNumber: 7
    }, this)
  ] }, type, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 284,
    columnNumber: 5
  }, this);
}
function SearchResultItem({ goToSearchResult, item }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "predictive-search-result-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: goToSearchResult, to: item.url, children: [
    item.image?.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        alt: item.image.altText ?? "",
        src: item.image.url,
        width: 50,
        height: 50
      },
      void 0,
      false,
      {
        fileName: "app/components/Search.jsx",
        lineNumber: 306,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      item.styledTitle ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: item.styledTitle
          }
        },
        void 0,
        false,
        {
          fileName: "app/components/Search.jsx",
          lineNumber: 315,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.title }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 321,
        columnNumber: 13
      }, this),
      item?.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: item.price }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 325,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 324,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Search.jsx",
      lineNumber: 313,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 304,
    columnNumber: 7
  }, this) }, item.id, false, {
    fileName: "app/components/Search.jsx",
    lineNumber: 303,
    columnNumber: 5
  }, this);
}
function usePredictiveSearch() {
  const fetchers = useFetchers();
  const searchTerm = (0, import_react2.useRef)("");
  const searchInputRef = (0, import_react2.useRef)(null);
  const searchFetcher = fetchers.find((fetcher) => fetcher.data?.searchResults);
  if (searchFetcher?.state === "loading") {
    searchTerm.current = searchFetcher.formData?.get("q") || "";
  }
  const search = searchFetcher?.data?.searchResults || {
    results: NO_PREDICTIVE_SEARCH_RESULTS,
    totalResults: 0
  };
  (0, import_react2.useEffect)(() => {
    if (searchInputRef.current)
      return;
    searchInputRef.current = document.querySelector('input[type="search"]');
  }, []);
  return { ...search, searchInputRef, searchTerm };
}
function pluralToSingularSearchType(type) {
  const plural = {
    articles: "ARTICLE",
    collections: "COLLECTION",
    pages: "PAGE",
    products: "PRODUCT",
    queries: "QUERY"
  };
  if (typeof type === "string") {
    return plural[type];
  }
  return type.map((t) => plural[t]).join(",");
}

export {
  SearchForm,
  SearchResults,
  NoSearchResults,
  PredictiveSearchForm,
  PredictiveSearchResults
};
//# sourceMappingURL=/build/_shared/chunk-OGSWC4LR.js.map
