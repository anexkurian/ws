(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-gedcom.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.gedcom = {
    'line-value': {
        // Preceded by level, optional pointer, and tag
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
        lookbehind: true,
        inside: {
            'pointer': {
                pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                alias: 'variable'
            }
        }
    },
    'record': {
        // Preceded by level and optional pointer
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
        lookbehind: true,
        alias: 'tag'
    },
    'level': {
        pattern: /(^[\t ]*)\d+/m,
        lookbehind: true,
        alias: 'number'
    },
    'pointer': {
        pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
        alias: 'variable'
    }
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-gedcom_1ef8c9f1.js.map