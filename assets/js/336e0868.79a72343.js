'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [97347],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => i });
   var l = t(52676),
    o = t(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  21367: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => g, default: () => b, frontMatter: () => u, metadata: () => m, toc: () => v });
   var l = t(52676),
    o = t(40139),
    s = t(57716),
    i = t(5547),
    r = t(43599),
    a = t(40761);
   function c(e) {
    const n = { div: 'div', h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h1, { id: 'voorbeelden-voor-uitlijning', children: 'Voorbeelden voor uitlijning' }), '\n', (0, l.jsx)(a.X, { appearance: 'do', title: 'Gebruik uitlijning aan het begin van de regel.', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsxs)(n.div, { style: { textAlign: 'start' }, children: [(0, l.jsx)(n.p, { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, l.jsx)(n.p, { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'dont', title: 'Vermijd het gebruik van uitgevulde tekst (justified).', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsx)(n.p, { style: { textAlign: 'justify', hyphens: 'none' }, children: 'Wanneer je uitgelijnde tekst gebruikt in de browser, krijg je moeilijk te lezen teksten met onduidelijke witruimtes. Het is gewoon niet mogelijk om woordafbreking net zo mooi te doen als in print met een vaste breedte mogelijk is. Jammer genoeg is het dan zo dat er een hoop grote witruimtes ontstaan. Zeker met het gebruik van lange woorden zoals het langste woord: kindercarnavalsoptochtvoorbereidingswerkzaamheden.' }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'dont', title: 'Beperk het gebruik van gecentreerde tekst.', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsxs)(n.div, { style: { textAlign: 'center' }, children: [(0, l.jsx)(n.p, { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.' }), (0, l.jsx)(n.p, { children: 'De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }), '\n', (0, l.jsx)(n.p, { children: 'Tekst met standaard uitlijning is vrijwel altijd beter leesbaar dan uitgevulde regels (justified) doordat woordafbreking en tekstuitlijning in browsers niet op het niveau zitten van drukwerk.' }), '\n', (0, l.jsx)(n.p, { children: 'Beperk het gebruik van gecentreerde tekst tot een minimum. Hooguit voor een kort tekstje. Bij langere teksten moet iemands oog onlogische sprongen maken om bij het eerst woord van de volgende regel aan te komen.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'Uitlijning \xb7 Typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Uitlijning', pagination_label: 'Uitlijning', description: 'De juiste uitlijning maakt teksten beter leesbaar voor iedereen.', slug: '/richtlijnen/stijl/typografie/uitlijning', keywords: ['iconen'] },
    g = 'Uitlijning',
    m = { id: 'richtlijnen/stijl/typography/alignment/README', title: 'Uitlijning \xb7 Typografie \xb7 Richtlijnen', description: 'De juiste uitlijning maakt teksten beter leesbaar voor iedereen.', source: '@site/docs/richtlijnen/stijl/typography/6-alignment/README.mdx', sourceDirName: 'richtlijnen/stijl/typography/6-alignment', slug: '/richtlijnen/stijl/typografie/uitlijning', permalink: '/richtlijnen/stijl/typografie/uitlijning', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/6-alignment/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Uitlijning \xb7 Typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Uitlijning', pagination_label: 'Uitlijning', description: 'De juiste uitlijning maakt teksten beter leesbaar voor iedereen.', slug: '/richtlijnen/stijl/typografie/uitlijning', keywords: ['iconen'] }, sidebar: 'richtlijnen', previous: { title: 'Voorkeursinstellingen voor typografie', permalink: '/richtlijnen/stijl/typografie/voorkeur' }, next: { title: 'Introductie richtlijnen voor kleuren', permalink: '/richtlijnen/stijl/kleuren/' } },
    j = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }];
   function y(e) {
    const n = { h1: 'h1', h2: 'h2', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h1, { id: 'uitlijning', children: 'Uitlijning' }), '\n', (0, l.jsx)(s.U, { omitH1: !0, children: (0, l.jsx)(p, {}) }), '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(s.U, { omitH1: !0, children: (0, l.jsx)(d, {}) }), '\n', (0, l.jsx)(i.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y(e);
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => v });
   var l = t(41179),
    o = t(37943),
    s = t(4814),
    i = t(64642),
    r = t(93872),
    a = t(86017),
    c = t(48231),
    d = t(75119),
    h = t(75271),
    p = t(60027),
    u = t(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   m.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   j.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: v = !1, displayCode: y = !0, children: b, container: k = 'document', language: x, designTokens: f } = e;
    const _ = 'function' == typeof b ? b() : b,
     w = 'function' == typeof n ? n() : (0, h.isValidElement)(n) ? n : void 0,
     C = 'string' == typeof n ? n : p.uS(w || _),
     [N, z] = (0, h.useState)(C),
     [Z, U] = (0, h.useState)(v);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(C, { parser: x, plugins: [i.Z, r.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [C]);
    const D = (0, h.useId)();
    let S = h.Fragment;
    return (
     'paragraph' === k ? (S = g) : 'document' === k ? (S = m) : 'surface' === k && (S = j),
     (0, u.jsxs)('div', {
      className: (0, s.Z)('nlds-canvas'),
      children: [
       _ && (0, u.jsx)('div', { className: (0, s.Z)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, u.jsx)(S, { children: (0, u.jsx)(o.pu, { children: _ }) }) }) }),
       y &&
        (0, u.jsx)('div', {
         className: (0, s.Z)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(o.zx, {
          className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           U(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': D,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, u.jsxs)('div', {
         className: (0, s.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: D,
         hidden: !Z,
         children: [
          (0, u.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          t &&
           (0, u.jsx)('div', {
            className: (0, s.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(o.zx, {
             className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
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
   t.d(n, { u: () => c });
   var l = t(37943),
    o = t(60648),
    s = t(75271),
    i = t(40761);
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
   var a = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     h = c;
    const { title: p, type: u } = (0, s.useContext)(i.n),
     g = (0, s.useId)();
    return (
     d && (h = h.trim()),
     (0, a.jsx)(o.y$, {
      theme: r,
      code: h,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: s, getTokenProps: i } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(l.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': g, style: t, children: o.map((e, t) => (0, a.jsxs)('span', { ...s({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var l = t(69244),
    o = t(20061),
    s = t(37943),
    i = t(4814),
    r = t(75271),
    a = t(52676);
   const c = (0, r.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: r, children: d, figure: h } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = h ? 'figure' : 'div',
      g = h ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, i.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(s.nv, { children: n })] }), r] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: p[t] }, children: d }) })] });
    };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => d });
   var l = t(40139),
    o = t(37943),
    s = t(52676);
   const i = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: l, hash: o } = new URL(n, new URL(e, 'http://example.com/'));
      return t + l + o;
     }
     return t.toString();
    },
    r = { 1: {}, 2: { h1: o.XJ, h2: o.aC, h3: o.k8, h4: o.by, h5: o.Cd }, 3: { h1: o.aC, h2: o.k8, h3: o.by, h4: o.Cd, h5: o.Cd }, 4: { h1: o.k8, h2: o.by, h3: o.Cd, h4: o.Cd, h5: o.Cd }, 5: { h1: o.by, h2: o.Cd, h3: o.Cd, h4: o.Cd, h5: o.Cd }, 6: { h1: o.Cd, h2: o.Cd, h3: o.Cd, h4: o.Cd, h5: o.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: t, ...l } = n;
      return (0, s.jsx)('img', { ...l, src: i(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    c = (e, n) => {
     if (e) {
      const e = { ...r[n - 1] };
      return (e.h1 = () => null), e;
     }
     return r[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: o = 1, baseUrl: i = '', components: r = {} } = e;
     return (0, s.jsx)(l.Z, { components: { ...c(t, o), ...a(i), ...r }, children: n });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => i });
   var l = t(75271);
   const o = {},
    s = l.createContext(o);
   function i(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
