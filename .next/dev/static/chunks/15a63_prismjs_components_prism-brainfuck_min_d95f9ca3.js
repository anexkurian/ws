(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-brainfuck.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.brainfuck = {
    pointer: {
        pattern: /<|>/,
        alias: "keyword"
    },
    increment: {
        pattern: /\+/,
        alias: "inserted"
    },
    decrement: {
        pattern: /-/,
        alias: "deleted"
    },
    branching: {
        pattern: /\[|\]/,
        alias: "important"
    },
    operator: /[.,]/,
    comment: /\S+/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-brainfuck_min_d95f9ca3.js.map