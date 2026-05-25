(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-yang.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.yang = {
    comment: /\/\*[\s\S]*?\*\/|\/\/.*/,
    string: {
        pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
        greedy: !0
    },
    keyword: {
        pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
        lookbehind: !0
    },
    namespace: {
        pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
        lookbehind: !0
    },
    boolean: /\b(?:false|true)\b/,
    operator: /\+/,
    punctuation: /[{};:]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-yang_min_6beddd94.js.map