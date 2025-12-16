'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [98866],
 {
  15953: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => u, default: () => j, frontMatter: () => a, metadata: () => i, toc: () => h });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/status/enough-time/README","title":"Geef gebruikers voldoende tijd \xb7 Status in een formulier \xb7 Richtlijnen","description":"Richtlijnen over de tijdsduur van statusberichten.","source":"@site/docs/richtlijnen/formulieren/status/3-enough-time/README.mdx","sourceDirName":"richtlijnen/formulieren/status/3-enough-time","slug":"/richtlijnen/formulieren/status/enough-time","permalink":"/richtlijnen/formulieren/status/enough-time","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/3-enough-time/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef gebruikers voldoende tijd \xb7 Status in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geef gebruikers voldoende tijd","pagination_label":"Geef gebruikers voldoende tijd","description":"Richtlijnen over de tijdsduur van statusberichten.","slug":"/richtlijnen/formulieren/status/enough-time","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Informeer ingezoomde gebruikers","permalink":"/richtlijnen/formulieren/status/zoom"},"next":{"title":"Visueel ontwerp van formulieren","permalink":"/richtlijnen/formulieren/visueel-ontwerp/"}}');
   var r = t(86070),
    s = t(85248),
    o = t(78734);
   function d(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'geef-gebruikers-voldoende-tijd-om-het-statusbericht-te-lezen', children: 'Geef gebruikers voldoende tijd om het statusbericht te lezen' }) }), '\n', (0, r.jsx)(n.p, { children: 'Geef de gebruiker genoeg tijd om de melding te lezen en eventueel zelf te verwijderen. Vermijd daarom het automatisch verbergen van statusberichten.' }), '\n', (0, r.jsxs)(n.p, { children: ['Soms is een statusmelding afhankelijk van tijd, bijvoorbeeld \u201cbezig met uploaden\u2026\u201d, \u201caan het verzenden\u2026\u201d. Dan kan het betekenisvol zijn om de melding vanzelf te laten verdwijnen om te communiceren dat de melding niet meer van toepassing is. Voor ziende gebruikers communiceert het verdwijnen van de melding dat de status niet meer van toepassing is. Zorg dat het statusbericht ook aan gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' wordt gecommuniceerd door ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/status/screenreaders/', children: 'een live region te gebruiken' }), ', met bijvoorbeeld expliciet de melding \u201chet uploaden is voltooid\u201d.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   const a = { title: 'Geef gebruikers voldoende tijd \xb7 Status in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef gebruikers voldoende tijd', pagination_label: 'Geef gebruikers voldoende tijd', description: 'Richtlijnen over de tijdsduur van statusberichten.', slug: '/richtlijnen/formulieren/status/enough-time', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    c = {},
    h = [...o.RM];
   function m(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l, {}), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m();
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => d, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => d });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
