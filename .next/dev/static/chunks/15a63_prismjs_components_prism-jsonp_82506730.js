(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-jsonp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.jsonp = Prism.languages.extend('json', {
    'punctuation': /[{}[\]();,.]/
});
Prism.languages.insertBefore('jsonp', 'punctuation', {
    'function': /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
});
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-jsonp_82506730.js.map