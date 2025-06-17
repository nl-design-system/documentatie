'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [28360],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var o = t(52676),
    l = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  52141: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => h, default: () => b, frontMatter: () => u, metadata: () => p, toc: () => g });
   var o = t(52676),
    l = t(40139),
    r = t(66968),
    s = t(43599),
    i = t(40761);
   function a(e) {
    const n = { a: 'a', form: 'form', h2: 'h2', li: 'li', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, o.jsx)(i.X, { appearance: 'do', title: 'Een samenvatting van de fouten boven het formulier.', description: 'Verplaats focus naar de samenvatting of de kop van de samenvatting.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { children: 'Invoerfouten gevonden in het formulier' }), (0, o.jsxs)(n.ul, { children: [(0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '#naam', children: 'Vul uw naam in.' }) }), (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '#email', children: 'Vul uw e-mailadres in.' }) })] }), (0, o.jsx)(n.form, { children: '[...]' })] }) }) });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }), '\n', (0, o.jsx)(n.p, { children: 'Een zeer gebruikersvriendelijke manier om fouten weer te geven is een combinatie van:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'een samenvatting boven het formulier en;' }), '\n', (0, o.jsx)(n.li, { children: 'per formulierveld de foutmelding herhalen.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Elke foutmelding in de samenvatting is ook een link naar het formulier. Hierdoor kan de toetsenbordgebruiker direct doorgaan naar het veld met de foutmelding.' }), '\n', (0, o.jsx)(n.p, { children: 'De constructie is als volgt:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Na het versturen van een formulier met fouten wordt ', (0, o.jsx)(n.strong, { children: 'boven' }), ' het formulier een lijst met fouten getoond.'] }), '\n', (0, o.jsx)(n.li, { children: 'Deze lijst heeft een kopje met bijvoorbeeld de tekst:\n"Er was een probleem met je inzending. Verbeter de fouten voor je verder gaat.".' }), '\n', (0, o.jsx)(n.li, { children: 'Daaronder staat een lijst met de foutmeldingen. Elke foutmelding is ook een link naar het bijbehorende formulierveld.' }), '\n', (0, o.jsxs)(n.li, { children: ['Het kopje boven de fouten krijgt de toetsenbordfocus. Dan staat het meteen in beeld, wordt het voorgelezen door ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en is de tabvolgorde logisch: de links naar de betreffende velden zijn de eerstvolgende items.'] }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['GOV.UK geeft hiervan enkele duidelijke voorbeelden op ', (0, o.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-summary/', children: (0, o.jsx)('span', { lang: 'en', children: 'Components Error summary' }) }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Duidelijke foutmeldingen zijn nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'WCAG-succescriterium 3.3.1 Foutidentificatie' }), ' (niveau A).'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Zet een samenvatting van de foutmeldingen boven het formulier \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Samenvatting fouten', pagination_label: 'Samenvatting fouten', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    p = { id: 'richtlijnen/formulieren/error/summary/README', title: 'Zet een samenvatting van de foutmeldingen boven het formulier \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', source: '@site/docs/richtlijnen/formulieren/error/6-summary/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/6-summary', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', permalink: '/richtlijnen/formulieren/foutmeldingen/samenvatting', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/6-summary/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zet een samenvatting van de foutmeldingen boven het formulier \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Samenvatting fouten', pagination_label: 'Samenvatting fouten', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'HTML-formuliervalidatie', permalink: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie' }, next: { title: 'Screenreaderfeedback', permalink: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback' } },
    v = {},
    g = [];
   function f(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(r.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => f });
   var o = t(41179),
    l = t(16167),
    r = t(4814),
    s = t(64642),
    i = t(93872),
    a = t(86017),
    c = t(48231),
    d = t(75119),
    m = t(75271),
    u = t(60027),
    h = t(52676);
   const p = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   p.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const f = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: f = !1, displayCode: b = !0, children: j, container: y = 'document', language: x, designTokens: k } = e;
    const _ = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, m.isValidElement)(n) ? n : void 0,
     w = 'string' == typeof n ? n : u.uS(N || _),
     [Z, C] = (0, m.useState)(w),
     [S, E] = (0, m.useState)(f);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(w, { parser: x, plugins: [s.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [w]);
    const z = (0, m.useId)();
    let D = m.Fragment;
    return (
     'paragraph' === y ? (D = p) : 'document' === y ? (D = v) : 'surface' === y && (D = g),
     (0, h.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(D, { children: (0, h.jsx)(l.pu, { children: _ }) }) }) }),
       b &&
        (0, h.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           E(!S);
          },
          'aria-expanded': S,
          'aria-controls': z,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, h.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !S,
         children: [
          (0, h.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: Z, trim: !0 }),
          t &&
           (0, h.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error('Copy code failed', e));
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
   var o = t(16167),
    l = t(60648),
    r = t(75271),
    s = t(40761);
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
   var a = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     m = c;
    const { title: u, type: h } = (0, r.useContext)(s.n),
     p = (0, r.useId)();
    return (
     d && (m = m.trim()),
     (0, a.jsx)(l.y$, {
      theme: i,
      code: m,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: r, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(o.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: t, children: l.map((e, t) => (0, a.jsxs)('span', { ...r({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var o = t(69244),
    l = t(20061),
    r = t(16167),
    s = t(4814),
    i = t(75271),
    a = t(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: i, children: d, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      p = m ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(r.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: u[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => s });
   var o = t(75271);
   const l = {},
    r = o.createContext(l);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
