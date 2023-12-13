"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [57176, 63047],
 {
  65265: (e, n, t) => {
   var a = t(47305);
   function s(e) {
    e.register(a),
     (function (e) {
      (e.languages.ejs = { delimiter: { pattern: /^<%[-_=]?|[-_]?%>$/, alias: "punctuation" }, comment: /^#[\s\S]*/, "language-javascript": { pattern: /[\s\S]+/, inside: e.languages.javascript } }),
       e.hooks.add("before-tokenize", function (n) {
        e.languages["markup-templating"].buildPlaceholders(n, "ejs", /<%(?!%)[\s\S]+?%>/g);
       }),
       e.hooks.add("after-tokenize", function (n) {
        e.languages["markup-templating"].tokenizePlaceholders(n, "ejs");
       }),
       (e.languages.eta = e.languages.ejs);
     })(e);
   }
   (e.exports = s), (s.displayName = "ejs"), (s.aliases = ["eta"]);
  },
  47305: (e) => {
   function n(e) {
    !(function (e) {
     function n(e, n) {
      return "___" + e.toUpperCase() + n + "___";
     }
     Object.defineProperties((e.languages["markup-templating"] = {}), {
      buildPlaceholders: {
       value: function (t, a, s, i) {
        if (t.language === a) {
         var o = (t.tokenStack = []);
         (t.code = t.code.replace(s, function (e) {
          if ("function" == typeof i && !i(e)) return e;
          for (var s, r = o.length; -1 !== t.code.indexOf((s = n(a, r))); ) ++r;
          return (o[r] = e), s;
         })),
          (t.grammar = e.languages.markup);
        }
       },
      },
      tokenizePlaceholders: {
       value: function (t, a) {
        if (t.language === a && t.tokenStack) {
         t.grammar = e.languages[a];
         var s = 0,
          i = Object.keys(t.tokenStack);
         !(function o(r) {
          for (var l = 0; l < r.length && !(s >= i.length); l++) {
           var u = r[l];
           if ("string" == typeof u || (u.content && "string" == typeof u.content)) {
            var g = i[s],
             c = t.tokenStack[g],
             p = "string" == typeof u ? u : u.content,
             f = n(a, g),
             k = p.indexOf(f);
            if (k > -1) {
             ++s;
             var d = p.substring(0, k),
              m = new e.Token(a, e.tokenize(c, t.grammar), "language-" + a, c),
              h = p.substring(k + f.length),
              _ = [];
             d && _.push.apply(_, o([d])), _.push(m), h && _.push.apply(_, o([h])), "string" == typeof u ? r.splice.apply(r, [l, 1].concat(_)) : (u.content = _);
            }
           } else u.content && o(u.content);
          }
          return r;
         })(t.tokens);
        }
       },
      },
     });
    })(e);
   }
   (e.exports = n), (n.displayName = "markupTemplating"), (n.aliases = []);
  },
 },
]);
