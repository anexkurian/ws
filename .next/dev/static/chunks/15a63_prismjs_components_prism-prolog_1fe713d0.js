(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-prolog.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.prolog = {
    // Syntax depends on the implementation
    'comment': {
        pattern: /\/\*[\s\S]*?\*\/|%.*/,
        greedy: true
    },
    // Depending on the implementation, strings may allow escaped newlines and quote-escape
    'string': {
        pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,
        greedy: true
    },
    'builtin': /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
    // FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?
    'function': /\b[a-z]\w*(?:(?=\()|\/\d+)/,
    'number': /\b\d+(?:\.\d*)?/,
    // Custom operators are allowed
    'operator': /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
    'punctuation': /[(){}\[\],]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-prolog_1fe713d0.js.map