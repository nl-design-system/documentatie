'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [71613],
 {
  24785: (e, a, d) => {
   d.d(a, { Z: () => c, a: () => t });
   var l = d(75271);
   const T = {},
    S = l.createContext(T);
   function t(e) {
    const a = l.useContext(S);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(a) : { ...a, ...e };
     },
     [a, e],
    );
   }
   function c(e) {
    let a;
    return (a = e.disableParentContext ? ('function' == typeof e.components ? e.components(T) : e.components || T) : t(e.components)), l.createElement(S.Provider, { value: a }, e.children);
   }
  },
  80719: (e) => {
   e.exports = JSON.parse(
   );
  },
 },
]);