(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-racket.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.racket = Prism.languages.extend("scheme", {
    "lambda-parameter": {
        pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("racket", "string", {
    lang: {
        pattern: /^#lang.+/m,
        greedy: !0,
        alias: "keyword"
    }
}), Prism.languages.rkt = Prism.languages.racket;
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-racket_min_eb26e4f8.js.map