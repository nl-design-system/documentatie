"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [36495],
 {
  23211: (t) => {
   function e(t) {
    t.languages.ini = { comment: { pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m, lookbehind: !0 }, section: { pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m, lookbehind: !0, inside: { "section-name": { pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/, lookbehind: !0, alias: "selector" }, punctuation: /\[|\]/ } }, key: { pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m, lookbehind: !0, alias: "attr-name" }, value: { pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/, lookbehind: !0, alias: "attr-value", inside: { "inner-value": { pattern: /^("|').+(?=\1$)/, lookbehind: !0 } } }, punctuation: /=/ };
   }
   (t.exports = e), (e.displayName = "ini"), (e.aliases = []);
  },
 },
]);
