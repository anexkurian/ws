(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-go-module.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages["go-mod"] = Prism.languages["go-module"] = {
    comment: {
        pattern: /\/\/.*/,
        greedy: !0
    },
    version: {
        pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
        lookbehind: !0,
        alias: "number"
    },
    "go-version": {
        pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
        lookbehind: !0,
        alias: "number"
    },
    keyword: {
        pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
        lookbehind: !0
    },
    operator: /=>/,
    punctuation: /[()[\],]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-go-module_min_2f456021.js.map