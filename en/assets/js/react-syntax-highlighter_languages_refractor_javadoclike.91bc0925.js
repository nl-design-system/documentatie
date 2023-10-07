"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [902],
 {
  9858: (e) => {
   function a(e) {
    !(function (e) {
     var a = (e.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ });
     Object.defineProperty(a, "addSupport", {
      value: function (a, n) {
       "string" == typeof a && (a = [a]),
        a.forEach(function (a) {
         !(function (a, n) {
          var t = "doc-comment",
           s = e.languages[a];
          if (s) {
           var i = s[t];
           if (!i) {
            var r = {};
            (r[t] = { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" }), (i = (s = e.languages.insertBefore(a, "comment", r))[t]);
           }
           if ((i instanceof RegExp && (i = s[t] = { pattern: i }), Array.isArray(i))) for (var o = 0, p = i.length; o < p; o++) i[o] instanceof RegExp && (i[o] = { pattern: i[o] }), n(i[o]);
           else n(i);
          }
         })(a, function (e) {
          e.inside || (e.inside = {}), (e.inside.rest = n);
         });
        });
      },
     }),
      a.addSupport(["java", "javascript", "php"], a);
    })(e);
   }
   (e.exports = a), (a.displayName = "javadoclike"), (a.aliases = []);
  },
 },
]);
