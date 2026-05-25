(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/WS/widelystudioswebsite/node_modules/prismjs/components/prism-hoon.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.hoon = {
    'comment': {
        pattern: /::.*/,
        greedy: true
    },
    'string': {
        pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,
        greedy: true
    },
    'constant': /%(?:\.[ny]|[\w-]+)/,
    'class-name': /@(?:[a-z0-9-]*[a-z0-9])?|\*/i,
    'function': /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
    'keyword': /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
};
}),
]);

//# sourceMappingURL=15a63_prismjs_components_prism-hoon_0c999555.js.map