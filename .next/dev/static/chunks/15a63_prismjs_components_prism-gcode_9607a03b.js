(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-gcode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.gcode = {
    'comment': /;.*|\B\(.*?\)\B/,
    'string': {
        pattern: /"(?:""|[^"])*"/,
        greedy: true
    },
    'keyword': /\b[GM]\d+(?:\.\d+)?\b/,
    'property': /\b[A-Z]/,
    'checksum': {
        pattern: /(\*)\d+/,
        lookbehind: true,
        alias: 'number'
    },
    // T0:0:0
    'punctuation': /[:*]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-gcode_9607a03b.js.map