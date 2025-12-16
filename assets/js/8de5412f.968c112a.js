'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [85500],
 {
  23117: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => i, default: () => g, frontMatter: () => a, metadata: () => s, toc: () => m });
   var s = t(55417),
    o = t(86070),
    r = t(85248);
   const a = { title: 'Van eigen componenten naar open source \u201cblocks\u201d voor WordPress', slug: 'community-blocks', authors: 'Renate Bruinenberg', tags: ['WordPress', 'developers', 'NL Design System'], hide_table_of_contents: !1, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/community-blocks.png', date: new Date('2024-05-22T00:00:00.000Z') },
    i = void 0,
    l = { authorsImageUrls: [void 0] },
    m = [];
   function c(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(n.p, { children: ['Met ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/nlds-community-blocks', children: 'NL Design System community blocks' }), ' wordt het nog makkelijker om NL Design System-componenten te gebruiken in WordPress. De grote aanjager van deze plug-in is de gemeente Den Haag, die hier met hun leverancier Acato aan werkten. We spraken Tom Dekker van Acato over het proces.'] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  55417: (e) => {
   e.exports = JSON.parse('{"permalink":"/blog/community-blocks","source":"@site/blog/2024/20240522-community-blocks.md","title":"Van eigen componenten naar open source \u201cblocks\u201d voor WordPress","description":"Met NL Design System community blocks wordt het nog makkelijker om NL Design System-componenten te gebruiken in WordPress. De grote aanjager van deze plug-in is de gemeente Den Haag, die hier met hun leverancier Acato aan werkten. We spraken Tom Dekker van Acato over het proces.","date":"2024-05-22T00:00:00.000Z","tags":[{"inline":false,"label":"WordPress","permalink":"/blog/tags/word-press"},{"inline":false,"label":"Developers","permalink":"/blog/tags/developers"},{"inline":false,"label":"NL Design System","permalink":"/blog/tags/nl-design-system"}],"hasTruncateMarker":true,"authors":[{"name":"Renate Bruinenberg","title":"Communicatieadviseur NL Design System","url":"https://www.linkedin.com/in/renate-bruinenberg-886019163/","key":"Renate Bruinenberg","page":null}],"frontMatter":{"title":"Van eigen componenten naar open source \u201cblocks\u201d voor WordPress","slug":"community-blocks","authors":"Renate Bruinenberg","tags":["WordPress","developers","NL Design System"],"hide_table_of_contents":false,"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/community-blocks.png","date":"2024-05-22T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Toegankelijke foutmeldingen in formulieren","permalink":"/blog/toegankelijke-foutmeldingen-formulieren"},"nextItem":{"title":"Samen aan de slag met het esta\xadfette\xad\xadmo\xaddel","permalink":"/blog/design-open-dag"}}');
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => i });
   var s = t(30758);
   const o = {},
    r = s.createContext(o);
   function a(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
