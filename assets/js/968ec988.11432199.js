'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [19207],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => i });
   var o = t(52676),
    l = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  76209: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => b, default: () => g, frontMatter: () => m, metadata: () => h, toc: () => v });
   var o = t(52676),
    l = t(40139),
    r = t(66968),
    i = t(43599),
    s = t(40761);
   function a(e) {
    const n = { button: 'button', div: 'div', form: 'form', h2: 'h2', input: 'input', label: 'label', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(s.X, { appearance: 'do', title: 'Formulier zonder tabindex.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(n.form, { children: [(0, o.jsx)(n.div, { children: (0, o.jsx)(n.label, { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.input, { id: 'naam1', autoComplete: 'name' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.label, { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.input, { id: 'email1', autoComplete: 'email' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.button, { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'dont', title: 'Formulier met gebruik van een positieve tabindex.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(n.form, { children: [(0, o.jsx)(n.div, { children: (0, o.jsx)(n.label, { htmlFor: 'naam2', children: 'Uw naam' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.input, { id: 'naam2', autoComplete: 'name', tabIndex: '1' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.label, { htmlFor: 'email2', children: 'Uw e-mailadres' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.input, { id: 'email2', autoComplete: 'email' }) }), (0, o.jsx)(n.div, { children: (0, o.jsx)(n.button, { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'gebruik-geen-positieve-tabindex', children: 'Gebruik geen positieve tabindex' }), '\n', (0, o.jsxs)(n.p, { children: ['Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex', children: 'tabindex' }), ' te geven met een waarde groter dan nul, bijvoorbeeld ', (0, o.jsx)(n.code, { children: 'tabindex="1"' }), ' of met gebruik van ', (0, o.jsx)(n.code, { children: 'autofocus' }), '. De gebruiker is meteen klaar om het formulier in te gaan vullen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Maar dit levert voor toetsenbord- en screenreadergebruikers problemen op. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.' }), '\n', (0, o.jsx)(n.p, { children: 'Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.' }), '\n', (0, o.jsx)(n.p, { children: 'Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.' }), '\n', (0, o.jsxs)(n.p, { children: ['Adam Silver geeft hier uitgebreid uitleg over in ', (0, o.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/', children: 'The problem with automatically focusing the first input and what to do instead' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Let wel: ', (0, o.jsx)(n.code, { children: 'tabindex="0"' }), ' en ', (0, o.jsx)(n.code, { children: 'tabindex="-1"' }), ' zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in ', (0, o.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: '0 and -1 Values' }), ' van WebAIM.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: ', (0, o.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }), ' van Andrew Nevins.'] }), '\n', (0, o.jsx)(n.p, { children: 'Geen positieve tabindex of autofocus gebruiken is nodig om te voldoen aan de volgende WCAG-succescriteria:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/2.4.3', children: '2.4.3 Focusvolgorde' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/3.2.3', children: '3.2.3 Consistente navigatie' }), ' (niveau AA).'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   const m = { title: 'Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    h = { id: 'richtlijnen/formulieren/keyboard-behaviour/tabindex/README', title: 'Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen', description: 'Richtlijnen voor positieve tabindex in een formulier.', source: '@site/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/README.mdx', sourceDirName: 'richtlijnen/formulieren/keyboard-behaviour/2-tabindex', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', permalink: '/richtlijnen/formulieren/toetsenbord/tabindex', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Zorg dat een formulier werkt met een toetsenbord', permalink: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie' }, next: { title: 'Uit te vragen informatie in een formulier', permalink: '/richtlijnen/formulieren/vragen/' } },
    p = {},
    v = [];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(r.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => x });
   var o = t(41179),
    l = t(16167),
    r = t(4814),
    i = t(64642),
    s = t(93872),
    a = t(86017),
    d = t(48231),
    c = t(75119),
    u = t(75271),
    m = t(60027),
    b = t(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const p = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   p.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, b.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: x = !1, displayCode: g = !0, children: j, container: y = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof j ? j() : j,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : m.uS(w || _),
     [C, Z] = (0, u.useState)(N),
     [S, z] = (0, u.useState)(x);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(N, { parser: f, plugins: [i.Z, s.ZP, a.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const F = (0, u.useId)();
    let P = u.Fragment;
    return (
     'paragraph' === y ? (P = h) : 'document' === y ? (P = p) : 'surface' === y && (P = v),
     (0, b.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, b.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, b.jsx)(P, { children: (0, b.jsx)(l.pu, { children: _ }) }) }) }),
       g &&
        (0, b.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, b.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           z(!S);
          },
          'aria-expanded': S,
          'aria-controls': F,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, b.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: F,
         hidden: !S,
         children: [
          (0, b.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: C, trim: !0 }),
          t &&
           (0, b.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, b.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, t) => {
   t.d(n, { u: () => d });
   var o = t(16167),
    l = t(60648),
    r = t(75271),
    i = t(40761);
   const s = {
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
   var a = t(52676);
   function d(e) {
    let { lineNumber: n, syntax: t, textContent: d, trim: c } = e,
     u = d;
    const { title: m, type: b } = (0, r.useContext)(i.n),
     h = (0, r.useId)();
    return (
     c && (u = u.trim()),
     (0, a.jsx)(l.y$, {
      theme: s,
      code: u,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: r, getTokenProps: i } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(o.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: t, children: l.map((e, t) => (0, a.jsxs)('span', { ...r({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => c, n: () => d });
   var o = t(69244),
    l = t(20061),
    r = t(16167),
    i = t(4814),
    s = t(75271),
    a = t(52676);
   const d = (0, s.createContext)({}),
    c = (e) => {
     let { title: n, appearance: t, description: s, children: c, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      b = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(b, { className: (0, i.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(r.nv, { children: n })] }), s] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: n, type: m[t] }, children: c }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => i });
   var o = t(75271);
   const l = {},
    r = o.createContext(l);
   function i(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : i(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
