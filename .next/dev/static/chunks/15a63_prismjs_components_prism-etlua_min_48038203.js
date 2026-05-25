(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-etlua.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(a) {
    a.languages.etlua = {
        delimiter: {
            pattern: /^<%[-=]?|-?%>$/,
            alias: "punctuation"
        },
        "language-lua": {
            pattern: /[\s\S]+/,
            inside: a.languages.lua
        }
    }, a.hooks.add("before-tokenize", function(e) {
        a.languages["markup-templating"].buildPlaceholders(e, "etlua", /<%[\s\S]+?%>/g);
    }), a.hooks.add("after-tokenize", function(e) {
        a.languages["markup-templating"].tokenizePlaceholders(e, "etlua");
    });
}(Prism);
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-etlua_min_48038203.js.map