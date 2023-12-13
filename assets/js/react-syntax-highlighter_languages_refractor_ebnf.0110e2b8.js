"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98614],
 {
  22079: (e) => {
   function s(e) {
    e.languages.ebnf = { comment: /\(\*[\s\S]*?\*\)/, string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0 }, special: { pattern: /\?[^?\r\n]*\?/, greedy: !0, alias: "class-name" }, definition: { pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im, lookbehind: !0, alias: ["rule", "keyword"] }, rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i, punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/, operator: /[-=|*/!]/ };
   }
   (e.exports = s), (s.displayName = "ebnf"), (s.aliases = []);
  },
 },
]);
