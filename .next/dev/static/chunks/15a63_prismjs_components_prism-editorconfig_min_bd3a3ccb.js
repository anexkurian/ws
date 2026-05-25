(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-editorconfig.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.editorconfig = {
    comment: /[;#].*/,
    section: {
        pattern: /(^[ \t]*)\[.+\]/m,
        lookbehind: !0,
        alias: "selector",
        inside: {
            regex: /\\\\[\[\]{},!?.*]/,
            operator: /[!?]|\.\.|\*{1,2}/,
            punctuation: /[\[\]{},]/
        }
    },
    key: {
        pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
        lookbehind: !0,
        alias: "attr-name"
    },
    value: {
        pattern: /=.*/,
        alias: "attr-value",
        inside: {
            punctuation: /^=/
        }
    }
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-editorconfig_min_bd3a3ccb.js.map