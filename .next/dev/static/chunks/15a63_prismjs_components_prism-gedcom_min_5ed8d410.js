(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-gedcom.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.gedcom = {
    "line-value": {
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
        lookbehind: !0,
        inside: {
            pointer: {
                pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                alias: "variable"
            }
        }
    },
    record: {
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
        lookbehind: !0,
        alias: "tag"
    },
    level: {
        pattern: /(^[\t ]*)\d+/m,
        lookbehind: !0,
        alias: "number"
    },
    pointer: {
        pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
        alias: "variable"
    }
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-gedcom_min_5ed8d410.js.map