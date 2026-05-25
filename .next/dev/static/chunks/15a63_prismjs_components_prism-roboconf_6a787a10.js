(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-roboconf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.roboconf = {
    'comment': /#.*/,
    'keyword': {
        'pattern': /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
        lookbehind: true
    },
    'component': {
        pattern: /[\w-]+(?=[ \t]*\{)/,
        alias: 'variable'
    },
    'property': /[\w.-]+(?=[ \t]*:)/,
    'value': {
        pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
        lookbehind: true,
        alias: 'attr-value'
    },
    'optional': {
        pattern: /\(optional\)/,
        alias: 'builtin'
    },
    'wildcard': {
        pattern: /(\.)\*/,
        lookbehind: true,
        alias: 'operator'
    },
    'punctuation': /[{},.;:=]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-roboconf_6a787a10.js.map