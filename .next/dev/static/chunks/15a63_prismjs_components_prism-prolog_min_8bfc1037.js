(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-prolog.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.prolog = {
    comment: {
        pattern: /\/\*[\s\S]*?\*\/|%.*/,
        greedy: !0
    },
    string: {
        pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,
        greedy: !0
    },
    builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
    function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
    number: /\b\d+(?:\.\d*)?/,
    operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
    punctuation: /[(){}\[\],]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-prolog_min_8bfc1037.js.map