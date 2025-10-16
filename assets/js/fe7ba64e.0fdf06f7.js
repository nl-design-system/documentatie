'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12421],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var l = t(52676),
    o = t(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  66298: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => p, default: () => y, frontMatter: () => u, metadata: () => v, toc: () => h });
   var l = t(52676),
    o = t(40139),
    s = t(5547),
    r = t(43599),
    a = t(40761);
   function i(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(a.X, { appearance: 'do', title: 'Geef de mogelijkheid korte en lange teksten in te vullen.', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'woonplaats1', children: 'Uw woonplaats' }), (0, l.jsx)(n.input, { id: 'woonplaats1', type: 'text', name: 'woonplaats', autoComplete: 'address-level2' })] }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'dont', title: 'Limiteer het maximaal aantal in te voeren tekens.', description: 'Mensen uit Gasselterboerveenschemond of Westerhaar-Vriezenveensewijk willen ook graag hun woonplaats invoeren.', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'woonplaats2', children: 'Uw woonplaats' }), (0, l.jsx)(n.input, { id: 'woonplaats2', type: 'text', name: 'email', maxLength: '20', autoComplete: 'address-level2' })] }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'dont', title: 'Limiteer het minimaal aantal in te voeren tekens.', description: 'Jo, Bo en X willen ook graag hun voornaam invullen.', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'voornaam1', children: 'Je voornaam' }), (0, l.jsx)(n.input, { id: 'voornaam1', type: 'text', name: 'voornaam', minLength: '3', autoComplete: 'given-name' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const n = { h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'geef-invoervelden-geen-minimummaximum-tekstlengte', children: 'Geef invoervelden geen minimum/maximum tekstlengte' }), '\n', (0, l.jsx)(n.p, { children: 'Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar in veel gevallen, bijvoorbeeld bij namen, kan dit bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen. Optimaliseer in dit geval voor uitersten. Er zijn namen van \xe9\xe9n karakter en van vijftig: aannames vermijden is dus het devies.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Geef invoervelden geen minimum/maximum tekstlengte \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen vaste tekstlengte', pagination_label: 'Geen vaste tekstlengte', description: 'Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.', slug: '/richtlijnen/formulieren/vragen/geen-min-max-lengte', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    v = { id: 'richtlijnen/formulieren/questions/min-max/README', title: 'Geef invoervelden geen minimum/maximum tekstlengte \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.', source: '@site/docs/richtlijnen/formulieren/questions/5-min-max/README.mdx', sourceDirName: 'richtlijnen/formulieren/questions/5-min-max', slug: '/richtlijnen/formulieren/vragen/geen-min-max-lengte', permalink: '/richtlijnen/formulieren/vragen/geen-min-max-lengte', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/5-min-max/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef invoervelden geen minimum/maximum tekstlengte \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen vaste tekstlengte', pagination_label: 'Geen vaste tekstlengte', description: 'Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.', slug: '/richtlijnen/formulieren/vragen/geen-min-max-lengte', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Stel een vraag \xe9\xe9n keer', permalink: '/richtlijnen/formulieren/vragen/voorkom-dubbel-werk' }, next: { title: 'Status in formulieren', permalink: '/richtlijnen/formulieren/status/' } },
    g = {},
    h = [];
   function x(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(m, {}), '\n', (0, l.jsx)(c, {}), '\n', (0, l.jsx)(s.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => x });
   var l = t(41179),
    o = t(37943),
    s = t(4814),
    r = t(64642),
    a = t(93872),
    i = t(86017),
    c = t(48231),
    d = t(75119),
    m = t(75271),
    u = t(60027),
    p = t(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   h.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: x = !1, displayCode: y = !0, children: b, container: j = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof b ? b() : b,
     w = 'function' == typeof n ? n() : (0, m.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(w || _),
     [C, Z] = (0, m.useState)(N),
     [S, F] = (0, m.useState)(x);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [r.Z, a.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const P = (0, m.useId)();
    let z = m.Fragment;
    return (
     'paragraph' === j ? (z = v) : 'document' === j ? (z = g) : 'surface' === j && (z = h),
     (0, p.jsxs)('div', {
      className: (0, s.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, s.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(z, { children: (0, p.jsx)(o.pu, { children: _ }) }) }) }),
       y &&
        (0, p.jsx)('div', {
         className: (0, s.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(o.zx, {
          className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!S);
          },
          'aria-expanded': S,
          'aria-controls': P,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, p.jsxs)('div', {
         className: (0, s.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: P,
         hidden: !S,
         children: [
          (0, p.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: C, trim: !0 }),
          t &&
           (0, p.jsx)('div', {
            className: (0, s.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(o.zx, {
             className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   t.d(n, { u: () => c });
   var l = t(37943),
    o = t(60648),
    s = t(75271),
    r = t(40761);
   const a = {
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
   var i = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     m = c;
    const { title: u, type: p } = (0, s.useContext)(r.n),
     v = (0, s.useId)();
    return (
     d && (m = m.trim()),
     (0, i.jsx)(o.y$, {
      theme: a,
      code: m,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: s, getTokenProps: r } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(l.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': v, style: t, children: o.map((e, t) => (0, i.jsxs)('span', { ...s({ line: e }), children: [n && (0, i.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] });
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
    r = t(4814),
    a = t(75271),
    i = t(52676);
   const c = (0, a.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: a, children: d, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      v = m ? 'figcaption' : 'div';
     return (0, i.jsxs)(p, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(s.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(s.nv, { children: n })] }), a] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: n, type: u[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => r });
   var l = t(75271);
   const o = {},
    s = l.createContext(o);
   function r(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
