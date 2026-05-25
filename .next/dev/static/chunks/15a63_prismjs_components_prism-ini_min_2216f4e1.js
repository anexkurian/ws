(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-ini.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.ini = {
    comment: {
        pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
        lookbehind: !0
    },
    section: {
        pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
        lookbehind: !0,
        inside: {
            "section-name": {
                pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
                lookbehind: !0,
                alias: "selector"
            },
            punctuation: /\[|\]/
        }
    },
    key: {
        pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
        lookbehind: !0,
        alias: "attr-name"
    },
    value: {
        pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
        lookbehind: !0,
        alias: "attr-value",
        inside: {
            "inner-value": {
                pattern: /^("|').+(?=\1$)/,
                lookbehind: !0
            }
        }
    },
    punctuation: /=/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-ini_min_2216f4e1.js.map