'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10093],
 {
  50656: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => s, toc: () => c });
   var t = i(52676),
    r = i(24785);
   const l = { title: 'Introductie richtlijnen NL Design System', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Introductie richtlijnen NL Design System', keywords: ['richtlijnen', 'design system', 'documentatie'] },
    o = 'Richtlijnen',
    s = { id: 'richtlijnen/introductie', title: 'Introductie richtlijnen NL Design System', description: 'Introductie richtlijnen NL Design System', source: '@site/docs/richtlijnen/introductie.md', sourceDirName: 'richtlijnen', slug: '/richtlijnen/introductie', permalink: '/richtlijnen/introductie', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/introductie.md', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Introductie richtlijnen NL Design System', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Introductie richtlijnen NL Design System', keywords: ['richtlijnen', 'design system', 'documentatie'] }, sidebar: 'richtlijnen', previous: { title: 'Richtlijnen', permalink: '/richtlijnen' }, next: { title: 'Stijl', permalink: '/richtlijnen/stijl/overzicht' } },
    d = {},
    c = [
     { value: 'Onderbouwing', id: 'onderbouwing', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 3 },
     { value: 'Gebruikersvriendelijkheid', id: 'gebruikersvriendelijkheid', level: 3 },
     { value: 'Aanvullingen of opmerkingen?', id: 'aanvullingen-of-opmerkingen', level: 2 },
    ];
   function a(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, t.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor het ontwikkelen van digitale diensten. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, t.jsx)(n.p, { children: 'De richtlijnen zijn onderverdeeld in:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/', children: 'Richtlijnen voor stijl' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Richtlijnen voor formulieren' }) }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'onderbouwing', children: 'Onderbouwing' }), '\n', (0, t.jsx)(n.h3, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, t.jsx)(n.p, { children: 'De richtlijnen zijn gebaseerd op de Web Content Accessibility Guidelines, versie 2.2 niveau AA (WCAG 2.2 AA).' }), '\n', (0, t.jsx)(n.p, { children: 'Bij enkele richtlijnen is niveau AAA aangehouden, om een betere gebruikerservaring te garanderen. Bijvoorbeeld voor de minimale grootte van het aanklikbare gedeelte van links en formulierelementen.' }), '\n', (0, t.jsx)(n.h3, { id: 'gebruikersvriendelijkheid', children: 'Gebruikersvriendelijkheid' }), '\n', (0, t.jsx)(n.p, { children: 'Om de gebruikersvriendelijkheid te garanderen zijn er ook richtlijnen toegevoegd naar aanleiding van gebruikersonderzoek. Bijvoorbeeld door een formulierlabel altijd zichtbaar boven het invoerveld te plaatsen.' }), '\n', (0, t.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden beheerd door het NL Design System, samen met de community, en zijn op dit moment nog in ontwikkeling.\nWe willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Discusieer mee' }), ' of ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'open een nieuw issue' }), ' op GitHub.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => o });
   var t = i(75271);
   const r = {},
    l = t.createContext(r);
   function o(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
