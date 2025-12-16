'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54728],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => y });
   var o = t(16609),
    l = t(68873),
    s = t(13526),
    i = t(58713),
    r = t(87347),
    a = t(39644),
    c = t(92406),
    d = t(63313),
    h = t(30758),
    p = t(31186),
    u = t(86070);
   const g = ({ children: e }) => (0, u.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, u.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, u.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const y = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: y = !0, children: v, container: b = 'document', language: k, designTokens: x }) => {
    const f = 'function' == typeof v ? v() : v,
     _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || f),
     [T, N] = (0, h.useState)(w),
     [z, A] = (0, h.useState)(t);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: k, plugins: [i.A, r.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const R = (0, h.useId)();
    let C = h.Fragment;
    return (
     'paragraph' === b ? (C = g) : 'document' === b ? (C = m) : 'surface' === b && (C = j),
     (0, u.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       f && (0, u.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, u.jsx)(C, { children: (0, u.jsx)(l.v$, { children: f }) }) }) }),
       y &&
        (0, u.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(l.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           A(!z);
          },
          'aria-expanded': z,
          'aria-controls': R,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, u.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !z,
         children: [
          (0, u.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: T, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(l.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(T).catch((e) => console.error('Copy code failed', e));
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
  16609: (e, n, t) => {
   t.d(n, { M: () => c });
   var o = t(68873),
    l = t(16194),
    s = t(30758),
    i = t(50124);
   const r = {
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
    const { title: h, type: p } = (0, s.useContext)(i.x),
     u = (0, s.useId)();
    return c && (d = d.trim()), (0, a.jsx)(l.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  46563: (e, n, t) => {
   t.d(n, { o: () => d });
   var o = t(85248),
    l = t(68873),
    s = t(86070);
   const i = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: o, hash: l } = new URL(n, new URL(e, 'http://example.com/'));
      return t + o + l;
     }
     return t.toString();
    },
    r = { 1: {}, 2: { h1: l.fV, h2: l._B, h3: l.f_, h4: l.mM, h5: l.TT }, 3: { h1: l._B, h2: l.f_, h3: l.mM, h4: l.TT, h5: l.TT }, 4: { h1: l.f_, h2: l.mM, h3: l.TT, h4: l.TT, h5: l.TT }, 5: { h1: l.mM, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT }, 6: { h1: l.TT, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: i(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...r[n - 1] };
      return (e.h1 = () => null), e;
     }
     return r[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: l = '', components: i = {} }) => (0, s.jsx)(o.x, { components: { ...c(n, t), ...a(l), ...i }, children: e });
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => d, x: () => c });
   var o = t(54736),
    l = t(26990),
    s = t(68873),
    i = t(13526),
    r = t(30758),
    a = t(86070);
   const c = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: r, figure: d }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(s.fz, { children: e })] }), t] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => r, RM: () => s });
   var o = t(86070),
    l = t(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => i, x: () => r });
   var o = t(30758);
   const l = {},
    s = o.createContext(l);
   function i(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : i(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
  99872: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => b, frontMatter: () => g, metadata: () => o, toc: () => y });
   const o = JSON.parse('{"id":"richtlijnen/stijl/typography/alignment/README","title":"Uitlijning \xb7 Typografie \xb7 Richtlijnen","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","source":"@site/docs/richtlijnen/stijl/typography/6-alignment/README.mdx","sourceDirName":"richtlijnen/stijl/typography/6-alignment","slug":"/richtlijnen/stijl/typografie/uitlijning","permalink":"/richtlijnen/stijl/typografie/uitlijning","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/6-alignment/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Uitlijning \xb7 Typografie \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Uitlijning","pagination_label":"Uitlijning","description":"De juiste uitlijning maakt teksten beter leesbaar voor iedereen.","slug":"/richtlijnen/stijl/typografie/uitlijning","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Voorkeursinstellingen voor typografie","permalink":"/richtlijnen/stijl/typografie/voorkeur"},"next":{"title":"Introductie richtlijnen voor kleuren","permalink":"/richtlijnen/stijl/kleuren/"}}');
   var l = t(86070),
    s = t(85248),
    i = t(46563),
    r = t(78734),
    a = t(8649),
    c = t(50124);
   function d(e) {
    const n = { div: 'div', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'voorbeelden-voor-uitlijning', children: 'Voorbeelden voor uitlijning' }) }), '\n', (0, l.jsx)(c.$, { appearance: 'do', title: 'Gebruik uitlijning aan het begin van de regel.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(n.div, { style: { textAlign: 'start' }, children: [(0, l.jsx)(n.p, { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, l.jsx)(n.p, { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) }), '\n', (0, l.jsx)(c.$, { appearance: 'dont', title: 'Vermijd het gebruik van uitgevulde tekst (justified).', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsx)(n.p, { style: { textAlign: 'justify', hyphens: 'none' }, children: 'Wanneer je uitgelijnde tekst gebruikt in de browser, krijg je moeilijk te lezen teksten met onduidelijke witruimtes. Het is gewoon niet mogelijk om woordafbreking net zo mooi te doen als in print met een vaste breedte mogelijk is. Jammer genoeg is het dan zo dat er een hoop grote witruimtes ontstaan. Zeker met het gebruik van lange woorden zoals het langste woord: kindercarnavalsoptochtvoorbereidingswerkzaamheden.' }) }) }), '\n', (0, l.jsx)(c.$, { appearance: 'dont', title: 'Beperk het gebruik van gecentreerde tekst.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(n.div, { style: { textAlign: 'center' }, children: [(0, l.jsx)(n.p, { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, l.jsx)(n.p, { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, l.jsx)(n.p, { children: 'Tekst met standaard uitlijning is vrijwel altijd beter leesbaar dan uitgevulde regels (justified) doordat woordafbreking en tekstuitlijning in browsers niet op het niveau zitten van drukwerk.' }), '\n', (0, l.jsx)(n.p, { children: 'Beperk het gebruik van gecentreerde tekst tot een minimum. Hooguit voor een kort tekstje. Bij langere teksten moet iemands oog onlogische sprongen maken om bij het eerst woord van de volgende regel aan te komen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Uitlijning \xb7 Typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Uitlijning', pagination_label: 'Uitlijning', description: 'De juiste uitlijning maakt teksten beter leesbaar voor iedereen.', slug: '/richtlijnen/stijl/typografie/uitlijning', keywords: ['iconen'] },
    m = 'Uitlijning',
    j = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...r.RM];
   function v(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }) }), '\n', (0, l.jsx)(i.o, { omitH1: !0, children: (0, l.jsx)(u, {}) }), '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(i.o, { omitH1: !0, children: (0, l.jsx)(h, {}) }), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v(e);
   }
  },
 },
]);
