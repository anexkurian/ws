(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-properties.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.properties = {
    'comment': /^[ \t]*[#!].*$/m,
    'value': {
        pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
        lookbehind: true,
        alias: 'attr-value'
    },
    'key': {
        pattern: /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
        alias: 'attr-name'
    },
    'punctuation': /[=:]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-properties_b8816601.js.map