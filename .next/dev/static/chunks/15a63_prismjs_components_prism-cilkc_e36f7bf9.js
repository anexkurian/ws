(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-cilkc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.cilkc = Prism.languages.insertBefore('c', 'function', {
    'parallel-keyword': {
        pattern: /\bcilk_(?:for|reducer|s(?:cope|pawn|ync))\b/,
        alias: 'keyword'
    }
});
Prism.languages['cilk-c'] = Prism.languages['cilkc'];
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-cilkc_e36f7bf9.js.map