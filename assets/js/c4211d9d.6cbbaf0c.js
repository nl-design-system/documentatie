'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8607],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => c });
   var i = t(52676),
    s = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  43814: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => p, default: () => h, frontMatter: () => d, metadata: () => u, toc: () => j });
   var i = t(52676),
    s = t(40139),
    r = t(5547);
   function c(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c();
   }
   function o(e) {
    const n = { h2: 'h2', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Binnen NL Design System is ruimte conceptueel opgezet door vijf herbruikbare spacing scales: Inline, Block, Text, Column en Row. Deze 'spacing concepten' worden met behulp van Design Tokens toegepast op alle componenten en templates." }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let wel' }), ": gebruik 'Spacing' design tokens enkel voor ruimte binnen en tussen componenten. Gebruik 'Sizing' design tokens voor de grootte van elementen."] }), '\n', (0, i.jsx)(n.h2, { id: 'inline', children: 'Inline' }), '\n', (0, i.jsx)(n.p, { children: 'Inline tussenruimte is de ruimte binnen componenten, voor of na tekst.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de \u2018Inline\u2019 spacing scale om binnen componenten ruimte te cre\xebren voor of na tekst. In CSS kun je de volgende properties gebruiken:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'margin-inline-start' }), '\n', (0, i.jsx)(n.li, { children: 'margin-inline-end' }), '\n', (0, i.jsx)(n.li, { children: 'padding-inline-start' }), '\n', (0, i.jsx)(n.li, { children: 'padding-inline-end' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-inline.png', alt: "Spacing scale met verticaal 10 blokjes. In elk blokje staat de tekst 'label'. Links en rechts van de tekst staan lichtroze vlakken. De vlakken worden per blokje breeder." }) }), '\n', (0, i.jsx)(n.h2, { id: 'block', children: 'Block' }), '\n', (0, i.jsx)(n.p, { children: 'Block tussenruimte is de ruimte binnen componenten, boven of onder tekst.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de \u2018Block\u2019 spacing scale om binnen componenten ruimte te cre\xebren boven of onder tekst. In CSS kun je de volgende properties gebruiken:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'margin-block-start' }), '\n', (0, i.jsx)(n.li, { children: 'margin-block-end' }), '\n', (0, i.jsx)(n.li, { children: 'padding-block-start' }), '\n', (0, i.jsx)(n.li, { children: 'padding-block-end' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-block.png', alt: "Spacing scale met horizontaal 10 blokjes. In elk blokje staat de tekst 'label'. Boven en onder de tekst staan roze vlakken. De vlakken worden per blokje hoger." }) }), '\n', (0, i.jsx)(n.h2, { id: 'text', children: 'Text' }), '\n', (0, i.jsx)(n.p, { children: 'Text tussenruimte is de ruimte binnen componenten, tussen tekst en iconen.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de \u2018Text\u2019 spacing scale om binnen componenten ruimte te cre\xebren tussen verschillende teksten of iconen.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-text.png', alt: "Spacing scale met verticaal 10 blokjes. In elk blokje staat een kalender icoon en de tekst 'label'. Tussen het icoon en de tekst staan groene vlakken. De vlakken worden per blokje breeder." }) }), '\n', (0, i.jsx)(n.h2, { id: 'column', children: 'Column' }), '\n', (0, i.jsx)(n.p, { children: 'Column tussenruimte is de horizontale ruimte tussen componenten.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de \u2018Column\u2019 spacing scale om horizontaal ruimte te cre\xebren tussen componenten. In CSS kun je de volgende properties gebruiken:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'margin-inline-start' }), '\n', (0, i.jsx)(n.li, { children: 'margin-inline-end' }), '\n', (0, i.jsx)(n.li, { children: 'padding-inline-start' }), '\n', (0, i.jsx)(n.li, { children: 'padding-inline-end' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-column.png', alt: "Spacing scale met verticaal 2 kolommen van 10 blokjes. In elk blokje staat de tekst 'label'. Per twee blokjes is er hotizontaal een lichtblauw vlak De vlakken worden per blokje breeder." }) }), '\n', (0, i.jsx)(n.h2, { id: 'row', children: 'Row' }), '\n', (0, i.jsx)(n.p, { children: 'Row tussenruimte is de verticale ruimte tussen componenten.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de \u2018Row\u2019 spacing scale om verticaal ruimte te cre\xebren tussen componenten. In CSS kun je de volgende properties gebruiken:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'margin-block-start' }), '\n', (0, i.jsx)(n.li, { children: 'margin-block-end' }), '\n', (0, i.jsx)(n.li, { children: 'padding-block-start' }), '\n', (0, i.jsx)(n.li, { children: 'padding-block-end' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-row.png', alt: "Spacing scale met horizontaal 2 rijen van 10 blokjes. In elk blokje staat de tekst 'label'. Per twee blokjes is er verticaal een blauw vlak. De vlakken worden per blokje hoger." }) }), '\n', (0, i.jsx)(n.p, { children: 'Met deze spacing concepten kun je alle componenten op een consistente manier van ruimte voorzien. Denk bijvoorbeeld aan een \u2018Card\u2019 of de ruimte tussen de elementen in een formulier.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_card.png', alt: 'Twee card componenten. Bij de eerste card component zijn door middel van kleurvlakken de ruimtes aangeduid.' }) }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_form.png', alt: 'Twee korte formulieren. Bij het eerste formulier zijn door middel van kleurvlakken de verticale ruimtes aangeduid.' }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
   const d = { title: 'Maak gebruik van de spacing concepten \xb7 Ruimte \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Spacing concepten', pagination_label: 'Maak gebruik van de spacing concepten', description: 'Binnen NL Design System is ruimte conceptueel opgezet door vijf herbruikbare spacing scales, dit zijn Inline, Block, Text, Column en Row.', slug: '/richtlijnen/stijl/ruimte/spacing-concepten', keywords: ['kleurcontrast', 'tekst'] },
    p = 'Maak gebruik van de spacing concepten',
    u = { id: 'richtlijnen/stijl/space/spacing-concepts/README', title: 'Maak gebruik van de spacing concepten \xb7 Ruimte \xb7 Richtlijnen', description: 'Binnen NL Design System is ruimte conceptueel opgezet door vijf herbruikbare spacing scales, dit zijn Inline, Block, Text, Column en Row.', source: '@site/docs/richtlijnen/stijl/space/3-spacing-concepts/README.mdx', sourceDirName: 'richtlijnen/stijl/space/3-spacing-concepts', slug: '/richtlijnen/stijl/ruimte/spacing-concepten', permalink: '/richtlijnen/stijl/ruimte/spacing-concepten', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/space/3-spacing-concepts/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Maak gebruik van de spacing concepten \xb7 Ruimte \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Spacing concepten', pagination_label: 'Maak gebruik van de spacing concepten', description: 'Binnen NL Design System is ruimte conceptueel opgezet door vijf herbruikbare spacing scales, dit zijn Inline, Block, Text, Column en Row.', slug: '/richtlijnen/stijl/ruimte/spacing-concepten', keywords: ['kleurcontrast', 'tekst'] }, sidebar: 'richtlijnen', previous: { title: 'Werk en denk vanuit het box model', permalink: '/richtlijnen/stijl/ruimte/box-model' }, next: { title: 'Gebruik ruimte om relaties te cre\xebren tussen elementen', permalink: '/richtlijnen/stijl/ruimte/relaties' } },
    m = {},
    j = [];
   function g(e) {
    const n = { h1: 'h1', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'maak-gebruik-van-de-spacing-concepten', children: 'Maak gebruik van de spacing concepten' }), '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(l, {}), '\n', (0, i.jsx)(r.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => c });
   var i = t(75271);
   const s = {},
    r = i.createContext(s);
   function c(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : c(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
