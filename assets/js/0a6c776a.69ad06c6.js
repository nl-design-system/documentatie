'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90418],
 {
  10998: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => a, default: () => g, frontMatter: () => r, metadata: () => o, toc: () => l });
   var t = i(52676),
    s = i(87118);
   const r = { title: 'Spacing tokens als systeem voor verticale ruimte', slug: 'spacing-tokens', authors: [{ name: 'Hidde de Vries', title: 'Public relations & Toegankelijkheidsspecialist NL Design System', url: 'https://www.linkedin.com/in/hiddedevries/' }], tags: ['NL Design System', 'design tokens'], hide_table_of_contents: !1, date: new Date('2023-11-09T00:00:00.000Z') },
    a = void 0,
    o = {
     permalink: '/blog/spacing-tokens',
     source: '@site/blog/2023/20231109-spacing-tokens.md',
     title: 'Spacing tokens als systeem voor verticale ruimte',
     description: 'Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in het Design Open Hour.',
     date: '2023-11-09T00:00:00.000Z',
     formattedDate: '9 november 2023',
     tags: [
      { label: 'NL Design System', permalink: '/blog/tags/nl-design-system' },
      { label: 'design tokens', permalink: '/blog/tags/design-tokens' },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: 'Hidde de Vries', title: 'Public relations & Toegankelijkheidsspecialist NL Design System', url: 'https://www.linkedin.com/in/hiddedevries/' }],
     frontMatter: { title: 'Spacing tokens als systeem voor verticale ruimte', slug: 'spacing-tokens', authors: [{ name: 'Hidde de Vries', title: 'Public relations & Toegankelijkheidsspecialist NL Design System', url: 'https://www.linkedin.com/in/hiddedevries/' }], tags: ['NL Design System', 'design tokens'], hide_table_of_contents: !1, date: '2023-11-09T00:00:00.000Z' },
     unlisted: !1,
     prevItem: { title: 'Testen met Wmebv-formulieren: eerste lessen', permalink: '/blog/wmebv-gebruikerstesten' },
     nextItem: { title: 'Design Systems Week 2023 komt eraan!', permalink: '/blog/design-systems-week-2023-komt-eraan' },
    },
    d = { authorsImageUrls: [void 0] },
    l = [
     { value: 'Relaties versus afstanden', id: 'relaties-versus-afstanden', level: 2 },
     { value: 'Open vragen', id: 'open-vragen', level: 2 },
     { value: 'Vervolg', id: 'vervolg', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', em: 'em', h2: 'h2', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in het Design Open Hour.' }), '\n', (0, t.jsx)(n.p, { children: 'De belangrijkste reden voor deze samenkomst: op dit moment zijn er nog geen afspraken over de verticale ruimte tussen componenten. Dat zit gebruikersvriendelijkheid in de weg, doordat er onvoldoende relatie en hi\xebrarchie tussen componenten bestaat.' }), '\n', (0, t.jsx)(n.p, { children: 'De designers + enkele leden uit het kernteam (Rozerin, Ren\xe9, Martijn, Jeroen, Jeffrey, Yolijn en Robbert) kwamen bij elkaar om samen te werken aan twee doelen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'een systeem voor verticale paddings en/of margins dat intu\xeftief en logisch is (met design tokens voor implementatie en documentatie)' }), '\n', (0, t.jsx)(n.li, { children: 'richtlijnen voor het gebruik van paddings en margins (waarin redeneringen en werking worden uitgelegd)' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'relaties-versus-afstanden', children: 'Relaties versus afstanden' }), '\n', (0, t.jsx)(n.p, { children: 'Tijdens de workshop werden verschillende relaties tussen componenten bedacht: \u201cvrienden\u201d staan dicht bij elkaar, \u201cbesties\u201d heel dicht en \u201ckennissen\u201d nemen wat meer afstand. Elk van deze relaties krijgt een bepaalde waarde, bijvoorbeeld:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-yaml', children: 'onbekenden: 32px\nkennissen: 24px\nvrienden: 16px\nbesties: 8px\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Natuurlijk hoeven de waarden niet in pixels te worden uitgedrukt. Het kunnen bijvoorbeeld ook relatieve waarden zijn, en die kunnen ook nog eens per viewport verschillen.' }), '\n', (0, t.jsx)(n.p, { children: 'Het idee is dat de waarden instelbaar zijn met design tokens. Design systems kunnen hierin dus zelf een keuze maken. Of meerdere keuzes. Misschien is de afstand tussen \u201cvrienden\u201d bijvoorbeeld net anders in een Mijn Zaken-systeem dan in een contentwebsite. Het ene scherm is \u201cinformation-dense\u201d, met bijvoorbeeld veel tabellen, terwijl bij het andere leesbaarheid van tekst belangrijk is. Waarden van de design tokens kunnen per geval anders worden ingesteld.' }), '\n', (0, t.jsx)(n.h2, { id: 'open-vragen', children: 'Open vragen' }), '\n', (0, t.jsx)(n.p, { children: 'In deze eerste sessie is al veel denkwerk verricht, liet Jeroen zien. In een spreadsheet had de groep al relaties uitgewerkt tussen een groot aantal componenten.' }), '\n', (0, t.jsx)(n.p, { children: 'Er zijn ook nog wel wat open vragen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: "Hoeveel relaties zijn voldoende om de meeste scenario's af te dekken? Is er nog een relatie nodig na 'Onbekenden'?" }), '\n', (0, t.jsx)(n.li, { children: 'Hoe kan dit worden uitgewerkt in de front-end? (Er waren al wat eerste idee\xebn, door aanwezigheid van developers Yolijn en Robbert)' }), '\n', (0, t.jsx)(n.li, { children: 'Hoe zit het met verticale ruimte binnen componenten?' }), '\n', (0, t.jsx)(n.li, { children: 'Er zijn allerlei componenten waar de waarden op elkaar lijken, zoals buttons en links; kunnen we hier een groepering in aanbrengen?' }), '\n', (0, t.jsx)(n.li, { children: 'Hoe zou je deze spacing als designer willen toepassen in een ontwerptool als Figma? Als \u201cspacer-blokje\u201d? Met behulp van variabele? Wil je dit \xfcberhaupt wel allemaal in Figma doorvoeren?' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Nog een hoop om over na te denken! Mocht je dit lezen en voor je eigen design system ook bezig zijn met spacing tokens, laat het ons weten! Bijvoorbeeld in het ', (0, t.jsx)(n.code, { children: '#nl-design-system-designers' }), '-kanaal in de ', (0, t.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: 'Code for NL Slack community' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'vervolg', children: 'Vervolg' }), '\n', (0, t.jsxs)(n.p, { children: ["We zijn bovenstaand systeem aan het uittesten in Figma, om te kijken hoe het in de praktijk werkt. Dat willen we ook gaan doen voor bijvoorbeeld formulier- en contentpagina's: ", (0, t.jsx)(n.em, { children: 'the proof of the pudding is in the eating' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ook gaan we verder met bijvoorbeeld bovenstaande vragen. Heb je vragen of idee\xebn, de designers zitten op ', (0, t.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: 'Slack' }), ' (kanaal: ', (0, t.jsx)(n.code, { children: '#nl-design-system-designers' }), '), daar kun je je ook melden voor de tweewekelijkse Design Open Hour, voor ontwerpers bij de overheid.'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  87118: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => a });
   var t = i(75271);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
