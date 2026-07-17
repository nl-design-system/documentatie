'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [20259],
 {
  9386(e, n, t) {
   t.d(n, { H: () => x });
   var l = t(95822),
    s = t(46447),
    o = t(13526),
    r = t(68148),
    i = t(9016),
    a = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    p = t(31186),
    u = t(65904),
    g = t.n(u),
    m = t(51627),
    j = t(86070);
   const v = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        l = (0, p.qV)(t)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replaceAll(/\sid="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        s = g().highlight(l, g().languages[n], n);
       return (0, j.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, j.jsx)(m.n, { children: (0, j.jsx)(m.K, { label: 'Code', children: (0, j.jsx)('pre', { className: 'language-html nl-code-block', children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: u = !0, children: g, container: m = 'document', language: x, designTokens: k }) => {
       const f = 'function' == typeof g ? g() : g,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || f),
        [w, A] = (0, h.useState)(N),
        [T, z] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: x, plugins: [r.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const C = (0, h.useId)();
       let S = h.Fragment;
       return (
        'paragraph' === m ? (S = v) : 'document' === m ? (S = y) : 'surface' === m && (S = b),
        (0, j.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, j.jsx)(S, { children: (0, j.jsx)(s.v$, { children: f }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!T);
             },
             'aria-expanded': T,
             'aria-controls': C,
             children: T ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !T,
            children: [
             (0, j.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(s.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
  12941(e, n, t) {
   t.d(n, { o: () => d });
   var l = t(18439),
    s = t(46447),
    o = t(86070);
   const r = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: l, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + l + s;
     }
     return t.toString();
    },
    i = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, o.jsx)('img', { ...t, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...i[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return i[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: r = {} }) => (0, o.jsx)(l.x, { components: { ...c(n, t), ...a(s), ...r }, children: e });
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => i });
   var l = t(30758);
   const s = {},
    o = l.createContext(s);
   function r(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  39743(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => b, frontMatter: () => g, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/stijl/typography/alignment/index","title":"Uitlijning","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","source":"@site/docs/richtlijnen/stijl/typography/6-alignment/index.mdx","sourceDirName":"richtlijnen/stijl/typography/6-alignment","slug":"/richtlijnen/stijl/typografie/uitlijning","permalink":"/richtlijnen/stijl/typografie/uitlijning","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/6-alignment/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Uitlijning","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Uitlijning","pagination_label":"Uitlijning","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","slug":"/richtlijnen/stijl/typografie/uitlijning","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Voorkeursinstellingen voor typografie","permalink":"/richtlijnen/stijl/typografie/voorkeur"},"next":{"title":"Introductie richtlijnen voor kleuren","permalink":"/richtlijnen/stijl/kleuren/"}}');
   var s = t(86070),
    o = t(18439),
    r = t(12941),
    i = t(78734),
    a = t(9386),
    c = t(88022);
   function d(e) {
    const n = { h1: 'h1', header: 'header', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'voorbeelden-voor-uitlijning', children: 'Voorbeelden voor uitlijning' }) }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Gebruik uitlijning aan het begin van de regel.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)('div', { style: { textAlign: 'start' }, children: [(0, s.jsx)('p', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, s.jsx)('p', { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Vermijd het gebruik van uitgevulde tekst (justified).', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsx)('p', { style: { textAlign: 'justify', hyphens: 'none' }, children: 'Wanneer je uitgelijnde tekst gebruikt in de browser, krijg je moeilijk te lezen teksten met onduidelijke witruimtes. Het is gewoon niet mogelijk om woordafbreking net zo mooi te doen als in print met een vaste breedte mogelijk is. Jammer genoeg is het dan zo dat er een hoop grote witruimtes ontstaan. Zeker met het gebruik van lange woorden zoals het langste woord: kindercarnavalsoptochtvoorbereidingswerkzaamheden.' }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Beperk het gebruik van gecentreerde tekst.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)('div', { style: { textAlign: 'center' }, children: [(0, s.jsx)('p', { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, s.jsx)('p', { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, s.jsx)(n.p, { children: 'Tekst met standaard uitlijning is vrijwel altijd beter leesbaar dan uitgevulde regels (justified) doordat woordafbreking en tekstuitlijning in browsers niet op het niveau zitten van drukwerk.' }), '\n', (0, s.jsx)(n.p, { children: 'Beperk het gebruik van gecentreerde tekst tot een minimum. Hooguit voor een kort tekstje. Bij langere teksten moet iemands oog onlogische sprongen maken om bij het eerst woord van de volgende regel aan te komen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Uitlijning', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Uitlijning', pagination_label: 'Uitlijning', description: 'De juiste uitlijning maakt teksten beter leesbaar voor iedereen.', slug: '/richtlijnen/stijl/typografie/uitlijning', keywords: ['iconen'] },
    m = 'Uitlijning',
    j = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...i.RM];
   function y(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, s.jsx)(r.o, { omitH1: !0, children: (0, s.jsx)(u, {}) }), '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(r.o, { omitH1: !0, children: (0, s.jsx)(h, {}) }), '\n', (0, s.jsx)(i.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(y, { ...e }) }) : y(e);
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => a, n: () => i });
   var l = t(13526),
    s = t(96345),
    o = t(37168),
    r = t(86070);
   const i = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: t, children: n.children });
    },
    a = ({ className: e, label: n, heading: t, headingLevel: i, headingApperance: a, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...c, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(s.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [t && (0, r.jsx)(o.D, { level: i, appearance: a, children: t }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => o });
   var l = t(86070),
    s = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => h, x: () => d });
   var l = t(4077),
    s = t(58315),
    o = t(46447),
    r = t(13526),
    i = t(45980),
    a = t(30758),
    c = t(86070);
   const d = (0, a.createContext)({}),
    h = ({ title: e, appearance: n, description: t, children: a, figure: h }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = h ? 'figure' : 'div',
      g = h ? 'figcaption' : 'div',
      m = 'string' == typeof t ? (0, c.jsx)(i.oz, { children: t }) : t;
     return (0, c.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(o.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    s = t(16194),
    o = t(30758),
    r = t(88022);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: p } = (0, o.useContext)(r.x),
     u = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(s.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
