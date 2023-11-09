"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93279],
 {
  2329: (e) => {
   function t(e) {
    !(function (e) {
     function t(e, t, n) {
      return { pattern: RegExp("<#" + e + "[\\s\\S]*?#>"), alias: "block", inside: { delimiter: { pattern: RegExp("^<#" + e + "|#>$"), alias: "important" }, content: { pattern: /[\s\S]+/, inside: t, alias: n } } };
     }
     e.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
      value: function (n) {
       var a = e.languages[n],
        s = "language-" + n;
       return { block: { pattern: /<#[\s\S]+?#>/, inside: { directive: t("@", { "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/, inside: { punctuation: /^=|^["']|["']$/ } }, keyword: /\b\w+(?=\s)/, "attr-name": /\b\w+/ }), expression: t("=", a, s), "class-feature": t("\\+", a, s), standard: t("", a, s) } } };
      },
     });
    })(e);
   }
   (e.exports = t), (t.displayName = "t4Templating"), (t.aliases = []);
  },
 },
]);
