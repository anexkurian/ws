(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-smalltalk.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.smalltalk = {
    comment: {
        pattern: /"(?:""|[^"])*"/,
        greedy: !0
    },
    char: {
        pattern: /\$./,
        greedy: !0
    },
    string: {
        pattern: /'(?:''|[^'])*'/,
        greedy: !0
    },
    symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
    "block-arguments": {
        pattern: /(\[\s*):[^\[|]*\|/,
        lookbehind: !0,
        inside: {
            variable: /:[\da-z]+/i,
            punctuation: /\|/
        }
    },
    "temporary-variables": {
        pattern: /\|[^|]+\|/,
        inside: {
            variable: /[\da-z]+/i,
            punctuation: /\|/
        }
    },
    keyword: /\b(?:new|nil|self|super)\b/,
    boolean: /\b(?:false|true)\b/,
    number: [
        /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
        /\b\d+(?:\.\d+)?(?:e-?\d+)?/
    ],
    operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
    punctuation: /[.;:?\[\](){}]/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-smalltalk_min_8d7608a7.js.map