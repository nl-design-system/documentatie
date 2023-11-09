"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [68126, 88119, 63047],
 {
  66055: (e, n, t) => {
   var a = t(59803),
    r = t(93205);
   function o(e) {
    e.register(a),
     e.register(r),
     (function (e) {
      (e.languages.etlua = { delimiter: { pattern: /^<%[-=]?|-?%>$/, alias: "punctuation" }, "language-lua": { pattern: /[\s\S]+/, inside: e.languages.lua } }),
       e.hooks.add("before-tokenize", function (n) {
        e.languages["markup-templating"].buildPlaceholders(n, "etlua", /<%[\s\S]+?%>/g);
       }),
       e.hooks.add("after-tokenize", function (n) {
        e.languages["markup-templating"].tokenizePlaceholders(n, "etlua");
       });
     })(e);
   }
   (e.exports = o), (o.displayName = "etlua"), (o.aliases = []);
  },
  59803: (e) => {
   function n(e) {
    e.languages.lua = { comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m, string: { pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/, greedy: !0 }, number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i, keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/, function: /(?!\d)\w+(?=\s*(?:[({]))/, operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 }], punctuation: /[\[\](){},;]|\.+|:+/ };
   }
   (e.exports = n), (n.displayName = "lua"), (n.aliases = []);
  },
  93205: (e) => {
   function n(e) {
    !(function (e) {
     function n(e, n) {
      return "___" + e.toUpperCase() + n + "___";
     }
     Object.defineProperties((e.languages["markup-templating"] = {}), {
      buildPlaceholders: {
       value: function (t, a, r, o) {
        if (t.language === a) {
         var i = (t.tokenStack = []);
         (t.code = t.code.replace(r, function (e) {
          if ("function" == typeof o && !o(e)) return e;
          for (var r, s = i.length; -1 !== t.code.indexOf((r = n(a, s))); ) ++s;
          return (i[s] = e), r;
         })),
          (t.grammar = e.languages.markup);
        }
       },
      },
      tokenizePlaceholders: {
       value: function (t, a) {
        if (t.language === a && t.tokenStack) {
         t.grammar = e.languages[a];
         var r = 0,
          o = Object.keys(t.tokenStack);
         !(function i(s) {
          for (var l = 0; l < s.length && !(r >= o.length); l++) {
           var u = s[l];
           if ("string" == typeof u || (u.content && "string" == typeof u.content)) {
            var g = o[r],
             p = t.tokenStack[g],
             c = "string" == typeof u ? u : u.content,
             f = n(a, g),
             d = c.indexOf(f);
            if (d > -1) {
             ++r;
             var k = c.substring(0, d),
              m = new e.Token(a, e.tokenize(p, t.grammar), "language-" + a, p),
              b = c.substring(d + f.length),
              h = [];
             k && h.push.apply(h, i([k])), h.push(m), b && h.push.apply(h, i([b])), "string" == typeof u ? s.splice.apply(s, [l, 1].concat(h)) : (u.content = h);
            }
           } else u.content && i(u.content);
          }
          return s;
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
