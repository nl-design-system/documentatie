'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [19207],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => s });
   var t = l(52676),
    o = l(24785);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  60015: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => m, default: () => x, frontMatter: () => b, metadata: () => p, toc: () => v });
   var t = l(52676),
    o = l(24785),
    i = l(98480),
    s = l(91050);
   function r(e) {
    const n = { button: 'button', div: 'div', form: 'form', input: 'input', label: 'label', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(s.X, { appearance: 'do', title: 'Formulier zonder tabindex.', children: (0, t.jsx)(i.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)(n.form, { children: [(0, t.jsx)(n.div, { children: (0, t.jsx)(n.label, { for: 'naam1', children: 'Uw naam' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.input, { id: 'naam1', autocomplete: 'name' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.label, { for: 'email1', children: 'Uw e-mailadres' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.input, { id: 'email1', autocomplete: 'email' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.button, { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) }), '\n', (0, t.jsx)(s.X, { appearance: 'dont', title: 'Formulier met gebruik van een positieve tabindex.', children: (0, t.jsx)(i.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)(n.form, { children: [(0, t.jsx)(n.div, { children: (0, t.jsx)(n.label, { for: 'naam2', children: 'Uw naam' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.input, { id: 'naam2', autocomplete: 'name', tabindex: '1' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.label, { for: 'email2', children: 'Uw e-mailadres' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.input, { id: 'email2', autocomplete: 'email' }) }), (0, t.jsx)(n.div, { children: (0, t.jsx)(n.button, { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'gebruik-geen-positieve-tabindex', children: 'Gebruik geen positieve tabindex' }), '\n', (0, t.jsxs)(n.p, { children: ['Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex', children: 'tabindex' }), ' te geven met een waarde groter dan nul, bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'tabindex="1"' }), ' of met gebruik van ', (0, t.jsx)(n.code, { children: 'autofocus' }), '. De gebruiker is meteen klaar om het formulier in te gaan vullen.'] }), '\n', (0, t.jsx)(n.p, { children: 'Maar dit levert voor toetsenbord- en screenreadergebruikers problemen op. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.' }), '\n', (0, t.jsx)(n.p, { children: 'Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.' }), '\n', (0, t.jsx)(n.p, { children: 'Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.' }), '\n', (0, t.jsxs)(n.p, { children: ['Adam Silver geeft hier uitgebreid uitleg over in ', (0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/', children: 'The problem with automatically focusing the first input and what to do instead' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Let wel: ', (0, t.jsx)(n.code, { children: 'tabindex="0"' }), ' en ', (0, t.jsx)(n.code, { children: 'tabindex="-1"' }), ' zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in ', (0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: '0 and -1 Values' }), ' van WebAIM.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: ', (0, t.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }), ' van Andrew Nevins.'] }), '\n', (0, t.jsx)(n.p, { children: 'Geen positieve tabindex of autofocus gebruiken is nodig om te voldoen aan de volgende WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.3', children: '2.4.3 Focusvolgorde' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/3.2.3', children: '3.2.3 Consistente navigatie' }), ' (niveau AA).'] }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   var u = l(55400);
   const b = { title: 'Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    p = { id: 'richtlijnen/formulieren/keyboard-behaviour/tabindex/README', title: 'Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen', description: 'Richtlijnen voor positieve tabindex in een formulier.', source: '@site/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/README.mdx', sourceDirName: 'richtlijnen/formulieren/keyboard-behaviour/2-tabindex', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', permalink: '/richtlijnen/formulieren/toetsenbord/tabindex', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Zorg dat een formulier werkt met een toetsenbord', permalink: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie' }, next: { title: 'Uit te vragen informatie in een formulier', permalink: '/richtlijnen/formulieren/vragen/' } },
    h = {},
    v = [];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(u.ZP, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => x });
   var t = l(46506),
    o = l(4814),
    i = l(25585),
    s = l(40282),
    r = l(40678),
    a = l(85722),
    d = l(6374),
    c = l(75271),
    u = l(60027);
   const b = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    p = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: b['nlds-canvas__example-surface'], children: (0, p.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: (0, p.jsx)(t.nv, { className: b['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: b['nlds-canvas__example-surface'], children: (0, p.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: b['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: x = !1, displayCode: _ = !0, children: j, container: y = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [z, S] = (0, c.useState)(Z),
     [C, A] = (0, c.useState)(x);
    (0, c.useEffect)(() => {
     (async () => {
      (z = await d.ZP.format(Z, { parser: f, plugins: [i.Z, s.ZP, r.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), S(z);
     })();
    }, [Z]);
    const D = (0, c.useId)();
    let F = c.Fragment;
    return (
     'paragraph' === y ? (F = h) : 'document' === y ? (F = v) : 'surface' === y && (F = g),
     (0, p.jsxs)('div', {
      className: (0, o.Z)(b['nlds-canvas']),
      children: [
       w && (0, p.jsx)('div', { className: (0, o.Z)(b['nlds-canvas__example']), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(F, { children: (0, p.jsx)(t.pu, { children: w }) }) }) }),
       _ &&
        (0, p.jsx)('div', {
         className: (0, o.Z)(b['nlds-canvas__toolbar']),
         children: (0, p.jsx)(t.zx, {
          className: (0, o.Z)(b['nlds-canvas__button'], b['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           A(!C);
          },
          'aria-expanded': C,
          'aria-controls': D,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       _ &&
        (0, p.jsxs)('div', {
         className: (0, o.Z)(b['nlds-canvas__code-block'], !l && b['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !C,
         children: [
          (0, p.jsx)(m.u, { syntax: f, textContent: z, trim: !0 }),
          l &&
           (0, p.jsx)('div', {
            className: (0, o.Z)(b['nlds-canvas__toolbar'], b['nlds-canvas__toolbar--copy']),
            children: (0, p.jsx)(t.zx, {
             className: (0, o.Z)(b['nlds-canvas__button'], b['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
             },
             children: 'Kopieer',
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, n, l) => {
   l.d(n, { u: () => r });
   var t = l(46506),
    o = l(70739);
   l(75271);
   const i = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var s = l(52676);
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: a } = e,
     d = r;
    return (
     a && (d = d.trim()),
     (0, s.jsx)(o.y$, {
      theme: i,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: i, getTokenProps: r } = e;
       return (0, s.jsx)(t.dn, { style: l, children: o.map((e, l) => (0, s.jsxs)('span', { ...i({ line: e }), children: [n && (0, s.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => d });
   var t = l(77355),
    o = l(67663),
    i = l(46506),
    s = l(4814);
   l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c, figure: u } = e;
    const b = 'Doen',
     m = 'Niet doen',
     p = u ? 'figure' : 'div',
     h = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(p, { className: (0, s.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: (0, s.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(t.Z, { className: r['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: r['nlds-guideline__title'], children: m })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, s.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: r['nlds-guideline__title'], children: b })] }), (0, a.jsx)(i.nv, { children: n })] }), d] }), (0, a.jsx)('div', { className: (0, s.Z)(r['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => s });
   var t = l(75271);
   const o = {},
    i = t.createContext(o);
   function s(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
