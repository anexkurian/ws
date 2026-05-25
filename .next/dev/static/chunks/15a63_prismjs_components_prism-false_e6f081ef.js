(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-false.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(Prism1) {
    /**
	 * Based on the manual by Wouter van Oortmerssen.
	 *
	 * @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}
	 */ Prism1.languages['false'] = {
        'comment': {
            pattern: /\{[^}]*\}/
        },
        'string': {
            pattern: /"[^"]*"/,
            greedy: true
        },
        'character-code': {
            pattern: /'(?:[^\r]|\r\n?)/,
            alias: 'number'
        },
        'assembler-code': {
            pattern: /\d+`/,
            alias: 'important'
        },
        'number': /\d+/,
        'operator': /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
        'punctuation': /\[|\]/,
        'variable': /[a-z]/,
        'non-standard': {
            pattern: /[()<BDO®]/,
            alias: 'bold'
        }
    };
})(Prism);
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-false_e6f081ef.js.map