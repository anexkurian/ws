(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-erb.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e) {
    e.languages.erb = {
        delimiter: {
            pattern: /^(\s*)<%=?|%>(?=\s*$)/,
            lookbehind: !0,
            alias: "punctuation"
        },
        ruby: {
            pattern: /\s*\S[\s\S]*/,
            alias: "language-ruby",
            inside: e.languages.ruby
        }
    }, e.hooks.add("before-tokenize", function(n) {
        e.languages["markup-templating"].buildPlaceholders(n, "erb", /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g);
    }), e.hooks.add("after-tokenize", function(n) {
        e.languages["markup-templating"].tokenizePlaceholders(n, "erb");
    });
}(Prism);
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-erb_min_64884538.js.map