"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [41362],
 {
  10784: (e) => {
   function s(e) {
    e.languages.warpscript = { comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//, string: { pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/, greedy: !0 }, variable: /\$\S+/, macro: { pattern: /@\S+/, alias: "property" }, keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/, number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/, boolean: /\b(?:F|T|false|true)\b/, punctuation: /<%|%>|[{}[\]()]/, operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/ };
   }
   (e.exports = s), (s.displayName = "warpscript"), (s.aliases = []);
  },
 },
]);
