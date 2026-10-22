'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28911],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var s = l(13526),
    t = l(30758),
    o = l(30662),
    r = l(32065),
    a = l(37168),
    i = l(86070);
   const c = (0, t.forwardRef)(({ as: e, className: n, children: l, ...t }, o) => {
     const r = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(r, { ref: o, className: a, ...t, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: t, headingLevel: c, headingApperance: d, ...m }) => {
     const u = (0, s.A)('utrecht-accordion__section', e),
      h = (0, s.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...m, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.I, { children: (0, i.jsx)(o.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [t && (0, i.jsx)(a.D, { level: c, appearance: d, children: t }), l] })] }) }), (0, i.jsx)('div', { className: h, children: m.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
   var s = l(30758);
   const t = {},
    o = s.createContext(t);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    t = l(16194),
    o = l(30758),
    r = l(56528);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: m, type: u } = (0, o.useContext)(r.x),
     h = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => F, GP: () => N, KC: () => $, Nd: () => k, Rt: () => S, Vj: () => w, Wk: () => P, bz: () => C, cB: () => z, e5: () => T, hY: () => M, jK: () => G, jP: () => L, ob: () => H, rI: () => A, t4: () => R, vP: () => I, vg: () => D });
   var s = l(92081),
    t = l(90578),
    o = l(96345),
    r = l(64249),
    a = l(4603),
    i = l(91525),
    c = l(23436),
    d = l(1375),
    m = l(4077),
    u = l(58315),
    h = l(73563),
    p = l(35193),
    g = l(82999),
    x = l(13088),
    v = l(43864),
    j = l(24214),
    b = l(79532),
    y = l(60529),
    f = l(86070);
   const _ = { width: '1em', height: '1em' },
    k = () => (0, f.jsx)(s.A, { ..._ }),
    N = () => (0, f.jsx)(t.A, { ..._ }),
    A = () => (0, f.jsx)(o.A, { ..._ }),
    w = () => (0, f.jsx)(r.A, { ..._ }),
    C = () => (0, f.jsx)(a.A, { ..._ }),
    S = () => (0, f.jsx)(i.A, { ..._ }),
    z = () => (0, f.jsx)(c.A, { ..._ }),
    I = () => (0, f.jsx)(d.A, { ..._ }),
    G = () => (0, f.jsx)(m.A, { ..._ }),
    L = () => (0, f.jsx)(u.A, { ..._ }),
    R = () => (0, f.jsx)(h.A, { ..._ }),
    F = () => (0, f.jsx)(p.A, { ..._ }),
    M = () => (0, f.jsx)(g.A, { ..._ }),
    $ = () => (0, f.jsx)(x.A, { ..._ }),
    P = () => (0, f.jsx)(v.A, { ..._ }),
    T = () => (0, f.jsx)(j.A, { ..._ }),
    H = () => (0, f.jsx)(b.A, { ..._ }),
    D = () => (0, f.jsx)(y.A, { ..._ });
  },
  32065(e, n, l) {
   l.d(n, { I: () => s.In });
   var s = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => s.$n });
   var s = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var s = l(30662),
    t = l(46447),
    o = l(13526),
    r = l(45795),
    a = l(30758),
    i = l(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, i.jsx)(r.oz, { components: { a: t.N_ }, children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(t.fz, { children: e })] }), p] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => o });
   var s = l(86070),
    t = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => k });
   var s = l(28369),
    t = l(46447),
    o = l(13526),
    r = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(14881),
    x = l(46847),
    v = l(86070);
   const j = ({ label: e, labelId: n, className: l, colorScheme: s, forcedColorsAdjust: t = !1, children: r, dangerouslySetInnerHTML: a, ...i }) => (0, v.jsxs)('figure', { className: (0, o.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, v.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, v.jsx)('div', { className: (0, o.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': t }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: r })] });
   var b = l(68197);
   const y = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const f = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   f.displayName = 'DocumentContainer';
   const _ = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   _.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: t, colorScheme: r, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const u = 'string' == typeof l ? l : s || '',
        h = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(s || '', p().languages[e], e),
        y = (0, v.jsx)(b.b, { Component: 'div', className: (0, o.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === r, 'ma-canvas-astro__example--color-scheme-light': 'light' === r }), style: i, dangerouslySetInnerHTML: { __html: u } });
       return (0, v.jsxs)('div', { className: (0, o.A)('ma-canvas-astro', n), children: [d ? (0, v.jsx)(j, { forcedColorsAdjust: c, label: d, labelId: d ? (0, m.useId)() : void 0, children: y }) : y, (0, v.jsx)(g.n, { children: (0, v.jsxs)(g.K, { label: 'Code', open: a, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: h } }) }), 'allow' === t && (0, v.jsx)(x.$, { 'data-copy-code': u, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: x, designTokens: j }) => {
       const b = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || b),
        [A, w] = (0, m.useState)(N),
        [C, S] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: x, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, m.useId)();
       let I = m.Fragment;
       return (
        'paragraph' === g ? (I = y) : 'document' === g ? (I = f) : 'surface' === g && (I = _),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          b && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: j, children: (0, v.jsx)(I, { children: (0, v.jsx)(t.v$, { children: b }) }) }) }),
          h &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(t.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, v.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(t.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(A).catch((e) => console.error('Copy code failed', e));
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
  96911(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => x, default: () => y, frontMatter: () => g, metadata: () => s, toc: () => j }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/questions/min-max/index","title":"Geef invoervelden geen minimum/maximum tekstlengte","description":"Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.","source":"@site/docs/richtlijnen/formulieren/questions/5-min-max/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/5-min-max","slug":"/richtlijnen/formulieren/vragen/geen-min-max-lengte","permalink":"/richtlijnen/formulieren/vragen/geen-min-max-lengte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/5-min-max/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef invoervelden geen minimum/maximum tekstlengte","title_sm":"Geen vaste tekstlengte","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen vaste tekstlengte","pagination_label":"Geen vaste tekstlengte","description":"Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.","slug":"/richtlijnen/formulieren/vragen/geen-min-max-lengte","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Stel een vraag \xe9\xe9n keer","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk"},"next":{"title":"Status in formulieren","permalink":"/richtlijnen/formulieren/status/"}}');
   var t = l(86070),
    o = l(18439),
    r = l(56672),
    a = l(87682),
    i = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Geef de mogelijkheid korte en lange teksten in te vullen.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'woonplaats1', children: 'Uw woonplaats' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'woonplaats1', type: 'text', name: 'woonplaats', autoComplete: 'address-level2' }) })] }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Limiteer het maximaal aantal in te voeren tekens.', description: 'Mensen uit Gasselterboerveenschemond of Westerhaar-Vriezenveensewijk willen ook graag hun woonplaats invoeren.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'woonplaats2', children: 'Uw woonplaats' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'woonplaats2', type: 'text', name: 'email', maxLength: '20', autoComplete: 'address-level2' }) })] }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Limiteer het minimaal aantal in te voeren tekens.', description: 'Jo, Bo en X willen ook graag hun voornaam invullen.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'voornaam1', children: 'Je voornaam' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'voornaam1', type: 'text', name: 'voornaam', minLength: '3', autoComplete: 'given-name' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-invoervelden-geen-minimummaximum-tekstlengte', children: 'Geef invoervelden geen minimum/maximum tekstlengte' }) }), '\n', (0, t.jsx)(n.p, { children: 'Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar in veel gevallen, bijvoorbeeld bij namen, kan dit bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen. Optimaliseer in dit geval voor uitersten. Er zijn namen van \xe9\xe9n karakter en van vijftig: aannames vermijden is dus het devies.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'Succescriterium 1.3.5 Identificeer het doel van de input' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Geef invoervelden geen minimum/maximum tekstlengte', title_sm: 'Geen vaste tekstlengte', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen vaste tekstlengte', pagination_label: 'Geen vaste tekstlengte', description: 'Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.', slug: '/richtlijnen/formulieren/vragen/geen-min-max-lengte', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    v = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
 },
]);
