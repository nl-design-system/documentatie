"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [38827, 63047],
 {
  93205: (e) => {
   function n(e) {
    !(function (e) {
     function n(e, n) {
      return "___" + e.toUpperCase() + n + "___";
     }
     Object.defineProperties((e.languages["markup-templating"] = {}), {
      buildPlaceholders: {
       value: function (t, a, i, o) {
        if (t.language === a) {
         var s = (t.tokenStack = []);
         (t.code = t.code.replace(i, function (e) {
          if ("function" == typeof o && !o(e)) return e;
          for (var i, r = s.length; -1 !== t.code.indexOf((i = n(a, r))); ) ++r;
          return (s[r] = e), i;
         })),
          (t.grammar = e.languages.markup);
        }
       },
      },
      tokenizePlaceholders: {
       value: function (t, a) {
        if (t.language === a && t.tokenStack) {
         t.grammar = e.languages[a];
         var i = 0,
          o = Object.keys(t.tokenStack);
         !(function s(r) {
          for (var l = 0; l < r.length && !(i >= o.length); l++) {
           var u = r[l];
           if ("string" == typeof u || (u.content && "string" == typeof u.content)) {
            var g = o[i],
             p = t.tokenStack[g],
             c = "string" == typeof u ? u : u.content,
             d = n(a, g),
             f = c.indexOf(d);
            if (f > -1) {
             ++i;
             var k = c.substring(0, f),
              m = new e.Token(a, e.tokenize(p, t.grammar), "language-" + a, p),
              b = c.substring(f + d.length),
              h = [];
             k && h.push.apply(h, s([k])), h.push(m), b && h.push.apply(h, s([b])), "string" == typeof u ? r.splice.apply(r, [l, 1].concat(h)) : (u.content = h);
            }
           } else u.content && s(u.content);
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
  19892: (e, n, t) => {
   var a = t(93205);
   function i(e) {
    e.register(a),
     (e.languages.twig = { comment: /^\{#[\s\S]*?#\}$/, "tag-name": { pattern: /(^\{%-?\s*)\w+/, lookbehind: !0, alias: "keyword" }, delimiter: { pattern: /^\{[{%]-?|-?[%}]\}$/, alias: "punctuation" }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, inside: { punctuation: /^['"]|['"]$/ } }, keyword: /\b(?:even|if|odd)\b/, boolean: /\b(?:false|null|true)\b/, number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/, operator: [{ pattern: /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/, lookbehind: !0 }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/], punctuation: /[()\[\]{}:.,]/ }),
     e.hooks.add("before-tokenize", function (n) {
      if ("twig" === n.language) {
       e.languages["markup-templating"].buildPlaceholders(n, "twig", /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g);
      }
     }),
     e.hooks.add("after-tokenize", function (n) {
      e.languages["markup-templating"].tokenizePlaceholders(n, "twig");
     });
   }
   (e.exports = i), (i.displayName = "twig"), (i.aliases = []);
  },
 },
]);
