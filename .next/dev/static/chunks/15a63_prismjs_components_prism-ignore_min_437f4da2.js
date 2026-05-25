(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-ignore.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(n) {
    n.languages.ignore = {
        comment: /^#.*/m,
        entry: {
            pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
            alias: "string",
            inside: {
                operator: /^!|\*\*?|\?/,
                regex: {
                    pattern: /(^|[^\\])\[[^\[\]]*\]/,
                    lookbehind: !0
                },
                punctuation: /\//
            }
        }
    }, n.languages.gitignore = n.languages.ignore, n.languages.hgignore = n.languages.ignore, n.languages.npmignore = n.languages.ignore;
}(Prism);
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-ignore_min_437f4da2.js.map