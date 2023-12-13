"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [56975, 75983],
 {
  7482: (e, t, a) => {
   var n = a(88237);
   function r(e) {
    e.register(n), (e.languages.tap = { fail: /not ok[^#{\n\r]*/, pass: /ok[^#{\n\r]*/, pragma: /pragma [+-][a-z]+/, bailout: /bail out!.*/i, version: /TAP version \d+/i, plan: /\b\d+\.\.\d+(?: +#.*)?/, subtest: { pattern: /# Subtest(?:: .*)?/, greedy: !0 }, punctuation: /[{}]/, directive: /#.*/, yamlish: { pattern: /(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m, lookbehind: !0, inside: e.languages.yaml, alias: "language-yaml" } });
   }
   (e.exports = r), (r.displayName = "tap"), (r.aliases = []);
  },
  88237: (e) => {
   function t(e) {
    !(function (e) {
     var t = /[*&][^\s[\]{},]+/,
      a = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      n = "(?:" + a.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + a.source + ")?)",
      r = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
       return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }),
      s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
     function o(e, t) {
      t = (t || "").replace(/m/g, "") + "m";
      var a = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
       .replace(/<<prop>>/g, function () {
        return n;
       })
       .replace(/<<value>>/g, function () {
        return e;
       });
      return RegExp(a, t);
     }
     (e.languages.yaml = {
      scalar: {
       pattern: RegExp(
        /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
         return n;
        })
       ),
       lookbehind: !0,
       alias: "string",
      },
      comment: /#.*/,
      key: {
       pattern: RegExp(
        /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
         .replace(/<<prop>>/g, function () {
          return n;
         })
         .replace(/<<key>>/g, function () {
          return "(?:" + r + "|" + s + ")";
         })
       ),
       lookbehind: !0,
       greedy: !0,
       alias: "atrule",
      },
      directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
      datetime: { pattern: o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" },
      boolean: { pattern: o(/false|true/.source, "i"), lookbehind: !0, alias: "important" },
      null: { pattern: o(/null|~/.source, "i"), lookbehind: !0, alias: "important" },
      string: { pattern: o(s), lookbehind: !0, greedy: !0 },
      number: { pattern: o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 },
      tag: a,
      important: t,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
     }),
      (e.languages.yml = e.languages.yaml);
    })(e);
   }
   (e.exports = t), (t.displayName = "yaml"), (t.aliases = ["yml"]);
  },
 },
]);
