(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-ebnf.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.ebnf = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: {
        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
        greedy: !0
    },
    special: {
        pattern: /\?[^?\r\n]*\?/,
        greedy: !0,
        alias: "class-name"
    },
    definition: {
        pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
        lookbehind: !0,
        alias: [
            "rule",
            "keyword"
        ]
    },
    rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
    punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
    operator: /[-=|*/!]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-ebnf_min_14446fc8.js.map