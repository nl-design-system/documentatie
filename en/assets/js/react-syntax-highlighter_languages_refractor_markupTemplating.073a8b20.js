"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [63047],
 {
  93205: (e) => {
   function n(e) {
    !(function (e) {
     function n(e, n) {
      return "___" + e.toUpperCase() + n + "___";
     }
     Object.defineProperties((e.languages["markup-templating"] = {}), {
      buildPlaceholders: {
       value: function (t, a, r, s) {
        if (t.language === a) {
         var o = (t.tokenStack = []);
         (t.code = t.code.replace(r, function (e) {
          if ("function" == typeof s && !s(e)) return e;
          for (var r, i = o.length; -1 !== t.code.indexOf((r = n(a, i))); ) ++i;
          return (o[i] = e), r;
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
          s = Object.keys(t.tokenStack);
         !(function o(i) {
          for (var u = 0; u < i.length && !(r >= s.length); u++) {
           var c = i[u];
           if ("string" == typeof c || (c.content && "string" == typeof c.content)) {
            var l = s[r],
             g = t.tokenStack[l],
             p = "string" == typeof c ? c : c.content,
             f = n(a, l),
             k = p.indexOf(f);
            if (k > -1) {
             ++r;
             var m = p.substring(0, k),
              _ = new e.Token(a, e.tokenize(g, t.grammar), "language-" + a, g),
              d = p.substring(k + f.length),
              h = [];
             m && h.push.apply(h, o([m])), h.push(_), d && h.push.apply(h, o([d])), "string" == typeof c ? i.splice.apply(i, [u, 1].concat(h)) : (c.content = h);
            }
           } else c.content && o(c.content);
          }
          return i;
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
