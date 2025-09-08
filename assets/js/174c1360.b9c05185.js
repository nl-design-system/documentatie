'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4206],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => i });
   var l = t(52676),
    o = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  80112: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => m, default: () => y, frontMatter: () => p, metadata: () => h, toc: () => j });
   var l = t(52676),
    o = t(40139),
    r = t(66968),
    i = t(43599),
    s = t(40761);
   function c(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(s.X, { appearance: 'do', title: 'Naast een visuele indicatie ook een foutmelding in tekst tonen.', description: 'In dit voorbeeld staat er een rood randje om het invoerveld heen, plus de foutmelding in tekst.', children: (0, l.jsx)(i.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'passport-validity-1', children: 'Geldig tot' }), (0, l.jsx)(n.p, { id: 'passport-validity-date-1', children: 'Invoerfout: Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' }), (0, l.jsx)(n.input, { id: 'passport-validity-1', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-1', 'aria-describedby': 'description-passport-validity-1' })] }) }) }), '\n', (0, l.jsx)(s.X, { appearance: 'dont', title: 'Alleen een visuele indicatie geven dat er iets fout is gegaan.', description: 'In dit voorbeeld staat er alleen een rood randje om het invoerveld heen.', children: (0, l.jsx)(i.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'passport-validity-2', children: 'Geldig tot' }), (0, l.jsx)(n.input, { id: 'passport-validity-2', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-2' })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'schrijf-een-foutmelding-uit-in-tekst', children: 'Schrijf een foutmelding uit in tekst' }), '\n', (0, l.jsx)(n.p, { children: 'Schrijf de foutmelding altijd uit in tekst. Dus niet alleen met een rood randje om het veld heen of met een icoontje van een uitroepteken, maar in duidelijke taal.' }), '\n', (0, l.jsxs)(n.p, { children: ['Je kunt zeker kleur en icoontjes gebruiken, maar niet als ', (0, l.jsx)(n.strong, { children: 'enige' }), ' foutindicatie.'] }), '\n', (0, l.jsx)(n.p, { children: 'Formulierfouten in tekst beschrijven is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/3.3.1/', children: '3.3.1 Foutidentificatie' }), ' (niveau A).'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   const p = { title: 'Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten beschrijven', pagination_label: 'Fouten beschrijven', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/error/description/README', title: 'Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', source: '@site/docs/richtlijnen/formulieren/error/2-description/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/2-description', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', permalink: '/richtlijnen/formulieren/foutmeldingen/beschrijven', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/2-description/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten beschrijven', pagination_label: 'Fouten beschrijven', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Fouten controleren', permalink: '/richtlijnen/formulieren/foutmeldingen/controleren' }, next: { title: 'Duidelijke foutmeldingen', permalink: '/richtlijnen/formulieren/foutmeldingen/duidelijk' } },
    v = {},
    j = [];
   function g(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(a, {}), '\n', (0, l.jsx)(r.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => g });
   var l = t(41179),
    o = t(16167),
    r = t(4814),
    i = t(64642),
    s = t(93872),
    c = t(86017),
    a = t(48231),
    d = t(75119),
    u = t(75271),
    p = t(60027),
    m = t(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   j.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: g = !1, displayCode: y = !0, children: b, container: f = 'document', language: x, designTokens: k } = e;
    const _ = 'function' == typeof b ? b() : b,
     N = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     F = 'string' == typeof n ? n : p.uS(N || _),
     [Z, C] = (0, u.useState)(F),
     [w, S] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(F, { parser: x, plugins: [i.Z, s.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [F]);
    const P = (0, u.useId)();
    let D = u.Fragment;
    return (
     'paragraph' === f ? (D = h) : 'document' === f ? (D = v) : 'surface' === f && (D = j),
     (0, m.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(D, { children: (0, m.jsx)(o.pu, { children: _ }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(o.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!w);
          },
          'aria-expanded': w,
          'aria-controls': P,
          children: w ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: P,
         hidden: !w,
         children: [
          (0, m.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: Z, trim: !0 }),
          t &&
           (0, m.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(o.zx, {
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
   t.d(n, { u: () => a });
   var l = t(16167),
    o = t(60648),
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
   var c = t(52676);
   function a(e) {
    let { lineNumber: n, syntax: t, textContent: a, trim: d } = e,
     u = a;
    const { title: p, type: m } = (0, r.useContext)(i.n),
     h = (0, r.useId)();
    return (
     d && (u = u.trim()),
     (0, c.jsx)(o.y$, {
      theme: s,
      code: u,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: r, getTokenProps: i } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(l.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: t, children: o.map((e, t) => (0, c.jsxs)('span', { ...r({ line: e }), children: [n && (0, c.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => a });
   var l = t(69244),
    o = t(20061),
    r = t(16167),
    i = t(4814),
    s = t(75271),
    c = t(52676);
   const a = (0, s.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: s, children: d, figure: u } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, i.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(r.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(r.nv, { children: n })] }), s] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: n, type: p[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => i });
   var l = t(75271);
   const o = {},
    r = l.createContext(o);
   function i(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), l.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
