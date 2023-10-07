"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6247],
 {
  93336: (e) => {
   function s(e) {
    !(function (e) {
     e.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
     var s = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
     Object.keys(s).forEach(function (n) {
      var i = s[n],
       a = [];
      /^\w+$/.test(n) || a.push(/\w+/.exec(n)[0]), "diff" === n && a.push("bold"), (e.languages.diff[n] = { pattern: RegExp("^(?:[" + i + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"), alias: a, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] } } });
     }),
      Object.defineProperty(e.languages.diff, "PREFIXES", { value: s });
    })(e);
   }
   (e.exports = s), (s.displayName = "diff"), (s.aliases = []);
  },
 },
]);
