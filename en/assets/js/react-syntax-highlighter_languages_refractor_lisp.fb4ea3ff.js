"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93520],
 {
  99008: (e) => {
   function n(e) {
    !(function (e) {
     function n(e) {
      return RegExp(/(\()/.source + "(?:" + e + ")" + /(?=[\s\)])/.source);
     }
     function s(e) {
      return RegExp(/([\s([])/.source + "(?:" + e + ")" + /(?=[\s)])/.source);
     }
     var a = /(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,
      r = "&" + a,
      t = "(\\()",
      o = "(?=\\s)",
      i = /(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,
      l = {
       heading: { pattern: /;;;.*/, alias: ["comment", "title"] },
       comment: /;.*/,
       string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: !0, inside: { argument: /[-A-Z]+(?=[.,\s])/, symbol: RegExp("`" + a + "'") } },
       "quoted-symbol": { pattern: RegExp("#?'" + a), alias: ["variable", "symbol"] },
       "lisp-property": { pattern: RegExp(":" + a), alias: "property" },
       splice: { pattern: RegExp(",@?" + a), alias: ["symbol", "variable"] },
       keyword: [
        { pattern: RegExp(t + "(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)" + o), lookbehind: !0 },
        { pattern: RegExp(t + "(?:append|by|collect|concat|do|finally|for|in|return)" + o), lookbehind: !0 },
       ],
       declare: { pattern: n(/declare/.source), lookbehind: !0, alias: "keyword" },
       interactive: { pattern: n(/interactive/.source), lookbehind: !0, alias: "keyword" },
       boolean: { pattern: s(/nil|t/.source), lookbehind: !0 },
       number: { pattern: s(/[-+]?\d+(?:\.\d*)?/.source), lookbehind: !0 },
       defvar: { pattern: RegExp(t + "def(?:const|custom|group|var)\\s+" + a), lookbehind: !0, inside: { keyword: /^def[a-z]+/, variable: RegExp(a) } },
       defun: { pattern: RegExp(t + /(?:cl-)?(?:defmacro|defun\*?)\s+/.source + a + /\s+\(/.source + i + /\)/.source), lookbehind: !0, greedy: !0, inside: { keyword: /^(?:cl-)?def\S+/, arguments: null, function: { pattern: RegExp("(^\\s)" + a), lookbehind: !0 }, punctuation: /[()]/ } },
       lambda: { pattern: RegExp(t + "lambda\\s+\\(\\s*(?:&?" + a + "(?:\\s+&?" + a + ")*\\s*)?\\)"), lookbehind: !0, greedy: !0, inside: { keyword: /^lambda/, arguments: null, punctuation: /[()]/ } },
       car: { pattern: RegExp(t + a), lookbehind: !0 },
       punctuation: [/(?:['`,]?\(|[)\[\]])/, { pattern: /(\s)\.(?=\s)/, lookbehind: !0 }],
      },
      p = { "lisp-marker": RegExp(r), varform: { pattern: RegExp(/\(/.source + a + /\s+(?=\S)/.source + i + /\)/.source), inside: l }, argument: { pattern: RegExp(/(^|[\s(])/.source + a), lookbehind: !0, alias: "variable" }, rest: l },
      u = "\\S+(?:\\s+\\S+)*",
      d = { pattern: RegExp(t + i + "(?=\\))"), lookbehind: !0, inside: { "rest-vars": { pattern: RegExp("&(?:body|rest)\\s+" + u), inside: p }, "other-marker-vars": { pattern: RegExp("&(?:aux|optional)\\s+" + u), inside: p }, keys: { pattern: RegExp("&key\\s+" + u + "(?:\\s+&allow-other-keys)?"), inside: p }, argument: { pattern: RegExp(a), alias: "variable" }, punctuation: /[()]/ } };
     (l.lambda.inside.arguments = d), (l.defun.inside.arguments = e.util.clone(d)), (l.defun.inside.arguments.inside.sublist = d), (e.languages.lisp = l), (e.languages.elisp = l), (e.languages.emacs = l), (e.languages["emacs-lisp"] = l);
    })(e);
   }
   (e.exports = n), (n.displayName = "lisp"), (n.aliases = []);
  },
 },
]);
