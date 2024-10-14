'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [11843],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var i = t(52676),
    r = t(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72659: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => u, default: () => j, frontMatter: () => l, metadata: () => a, toc: () => m });
   var i = t(52676),
    r = t(24785);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'geef-gebruikers-voldoende-tijd-om-het-statusbericht-te-lezen', children: 'Geef gebruikers voldoende tijd om het statusbericht te lezen' }), '\n', (0, i.jsx)(n.p, { children: 'Geef de gebruiker genoeg tijd om de melding te lezen en eventueel zelf te verwijderen. Vermijd daarom het automatisch verbergen van statusberichten.' }), '\n', (0, i.jsxs)(n.p, { children: ['Soms is een statusmelding afhankelijk van tijd, bijvoorbeeld \u201cbezig met uploaden\u2026\u201d, \u201caan het verzenden\u2026\u201d. Dan kan het betekenisvol zijn om de melding vanzelf te laten verdwijnen om te communiceren dat de melding niet meer van toepassing is. Voor ziende gebruikers communiceert het verdwijnen van de melding dat de status niet meer van toepassing is. Zorg het statusbericht ook aan screenreadergebruikers wordt gecommuniceerd door ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/status/screenreaders', children: 'een live region te gebruiken' }), ', met bijvoorbeeld expliciet de melding \u201chet uploaden is voltooid\u201d.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
   var d = t(55400);
   const l = { title: 'Geef gebruikers voldoende tijd | Status in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef gebruikers voldoende tijd', pagination_label: 'Geef gebruikers voldoende tijd', description: 'Richtlijnen over de tijdsduur van statusberichten.', slug: '/richtlijnen/formulieren/status/enough-time', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    a = { id: 'richtlijnen/formulieren/status/enough-time/README', title: 'Geef gebruikers voldoende tijd | Status in een formulier | Richtlijnen', description: 'Richtlijnen over de tijdsduur van statusberichten.', source: '@site/docs/richtlijnen/formulieren/status/3-enough-time/README.mdx', sourceDirName: 'richtlijnen/formulieren/status/3-enough-time', slug: '/richtlijnen/formulieren/status/enough-time', permalink: '/richtlijnen/formulieren/status/enough-time', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/3-enough-time/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef gebruikers voldoende tijd | Status in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef gebruikers voldoende tijd', pagination_label: 'Geef gebruikers voldoende tijd', description: 'Richtlijnen over de tijdsduur van statusberichten.', slug: '/richtlijnen/formulieren/status/enough-time', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Informeer ingezoomde gebruikers', permalink: '/richtlijnen/formulieren/status/zoom' }, next: { title: 'Visueel ontwerp van formulieren', permalink: '/richtlijnen/formulieren/visueel-ontwerp/' } },
    c = {},
    m = [];
   function h(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o, {}), '\n', (0, i.jsx)(d.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h();
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => o });
   var i = t(75271);
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
