'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70886],
 {
  66968: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var t = r(52676),
    i = r(40139);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  56146: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => g, contentTitle: () => u, default: () => k, frontMatter: () => d, metadata: () => h, toc: () => m });
   var t = r(52676),
    i = r(40139),
    o = r(66968);
   function s(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s();
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Vergeet niet dat men mogelijk voorkeursinstellingen heeft toegepast.' }), '\n', (0, t.jsx)(n.p, { children: 'Voorbeelden van voorkeursinstellingen:' }), '\n', (0, t.jsx)(n.h2, { id: 'aangepast-kleurenthema', children: 'Aangepast kleurenthema' }), '\n', (0, t.jsx)(n.p, { children: 'Sommige mensen bekijken webpagina\u2019s liever in een donker (dark-mode) of juist licht kleurenthema (light-mode). Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem.' }), '\n', (0, t.jsxs)(n.p, { children: ['Door de media query ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme', children: (0, t.jsx)(n.code, { children: 'prefers-color-scheme' }) }), ' is dit te detecteren en kun je deze mensen een donker kleuren thema aanbieden.'] }), '\n', (0, t.jsx)(n.h2, { id: 'aangepast-contrast', children: 'Aangepast contrast' }), '\n', (0, t.jsx)(n.p, { children: 'Sommige mensen bekijken webpagina\u2019s liever met meer of juist minder contrast. Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem.' }), '\n', (0, t.jsxs)(n.p, { children: ['Door de media query ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast', children: (0, t.jsx)(n.code, { children: 'prefers-contrast' }) }), ' is dit te detecteren en kun je deze mensen passend kleurenthema aanbieden. Maar ze zouden ook gebruik kunnen maken van ', (0, t.jsx)(n.a, { href: 'https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696', children: 'Windows high contrast mode' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_kleuren_voorkeursinstellingen.png', alt: 'Afgebeeld zijn drie schermen met dezelfde inhoud. Het eerste voorbeeld toont een lichte modus. Het tweede voorbeeld toont een donkere modus. Het derde voorbeeld tot een hoog contrast voorbeeld.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-wcag-succescriteria', children: 'Gerelateerde WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.1/', children: '1.3.3 Zintuiglijke eigenschappen' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.1/', children: '1.4.1 Gebruik van kleur' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.3/', children: '1.4.3 Contrast (minimum)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.11/', children: '1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   const d = { title: 'Let op voorkeursinstellingen voor kleur \xb7 Kleuren \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voorkeursinstellingen voor kleur', pagination_label: 'Let op voorkeursinstellingen voor kleur', description: 'Vergeet niet dat gebruikers mogelijk voorkeursinstellingen voor kleuren hebben toegepast.', slug: '/richtlijnen/stijl/kleuren/voorkeuren', keywords: ['voorkeursinstellingen', 'kleur'] },
    u = 'Let op voorkeursinstellingen voor kleur',
    h = { id: 'richtlijnen/stijl/colour/settings/README', title: 'Let op voorkeursinstellingen voor kleur \xb7 Kleuren \xb7 Richtlijnen', description: 'Vergeet niet dat gebruikers mogelijk voorkeursinstellingen voor kleuren hebben toegepast.', source: '@site/docs/richtlijnen/stijl/colour/6-settings/README.mdx', sourceDirName: 'richtlijnen/stijl/colour/6-settings', slug: '/richtlijnen/stijl/kleuren/voorkeuren', permalink: '/richtlijnen/stijl/kleuren/voorkeuren', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/colour/6-settings/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Let op voorkeursinstellingen voor kleur \xb7 Kleuren \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voorkeursinstellingen voor kleur', pagination_label: 'Let op voorkeursinstellingen voor kleur', description: 'Vergeet niet dat gebruikers mogelijk voorkeursinstellingen voor kleuren hebben toegepast.', slug: '/richtlijnen/stijl/kleuren/voorkeuren', keywords: ['voorkeursinstellingen', 'kleur'] }, sidebar: 'richtlijnen', previous: { title: 'Let op verschillen in waarneming van kleur', permalink: '/richtlijnen/stijl/kleuren/waarneming' }, next: { title: 'Introductie richtlijnen voor ruimte', permalink: '/richtlijnen/stijl/ruimte/' } },
    g = {},
    m = [];
   function j(e) {
    const n = { h1: 'h1', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'let-op-voorkeursinstellingen-voor-kleur', children: 'Let op voorkeursinstellingen voor kleur' }), '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(l, {}), '\n', (0, t.jsx)(o.ZP, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
  },
  40139: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => s });
   var t = r(75271);
   const i = {},
    o = t.createContext(i);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
