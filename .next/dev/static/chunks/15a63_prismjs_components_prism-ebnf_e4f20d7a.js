(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-ebnf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.ebnf = {
    'comment': /\(\*[\s\S]*?\*\)/,
    'string': {
        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
        greedy: true
    },
    'special': {
        pattern: /\?[^?\r\n]*\?/,
        greedy: true,
        alias: 'class-name'
    },
    'definition': {
        pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
        lookbehind: true,
        alias: [
            'rule',
            'keyword'
        ]
    },
    'rule': /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
    'punctuation': /\([:/]|[:/]\)|[.,;()[\]{}]/,
    'operator': /[-=|*/!]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-ebnf_e4f20d7a.js.map