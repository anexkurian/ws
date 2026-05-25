(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-false.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(a) {
    a.languages.false = {
        comment: {
            pattern: /\{[^}]*\}/
        },
        string: {
            pattern: /"[^"]*"/,
            greedy: !0
        },
        "character-code": {
            pattern: /'(?:[^\r]|\r\n?)/,
            alias: "number"
        },
        "assembler-code": {
            pattern: /\d+`/,
            alias: "important"
        },
        number: /\d+/,
        operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
        punctuation: /\[|\]/,
        variable: /[a-z]/,
        "non-standard": {
            pattern: /[()<BDO®]/,
            alias: "bold"
        }
    };
}(Prism);
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-false_min_d1d58e87.js.map