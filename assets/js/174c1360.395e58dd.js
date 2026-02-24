'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [69606],
 {
  15638(e, n, t) {
   t.d(n, { $: () => u, x: () => d });
   var l = t(4077),
    o = t(58315),
    r = t(46447),
    s = t(13526),
    i = t(9547),
    c = t(30758),
    a = t(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: t, children: c, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      j = 'string' == typeof t ? (0, a.jsx)(i.oz, { children: t }) : t;
     return (0, a.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(r.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(r.fz, { children: e })] }), j] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: c }) })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => i });
   var l = t(30758);
   const o = {},
    r = l.createContext(o);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  56154(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, contentTitle: () => v, default: () => b, frontMatter: () => j, metadata: () => l, toc: () => y }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/error/description/README","title":"Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor uitschrijven van een foutmelding in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/2-description/README.mdx","sourceDirName":"richtlijnen/formulieren/error/2-description","slug":"/richtlijnen/formulieren/foutmeldingen/beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/2-description/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Fouten beschrijven","pagination_label":"Fouten beschrijven","description":"Richtlijnen voor uitschrijven van een foutmelding in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/beschrijven","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten controleren","permalink":"/richtlijnen/formulieren/foutmeldingen/controleren"},"next":{"title":"Duidelijke foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk"}}');
   var o = t(86070),
    r = t(18439),
    s = t(78734),
    i = t(58639),
    c = t(15638);
   function a(e) {
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(c.$, { appearance: 'do', title: 'Naast een visuele indicatie ook een foutmelding in tekst tonen.', description: 'In dit voorbeeld staat er een rood randje om het invoerveld heen, plus de foutmelding in tekst.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity-1', children: 'Geldig tot' }) }), (0, o.jsx)('p', { id: 'passport-validity-date-1', children: 'Invoerfout: Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity-1', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-1', 'aria-describedby': 'description-passport-validity-1' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Alleen een visuele indicatie geven dat er iets fout is gegaan.', description: 'In dit voorbeeld staat er alleen een rood randje om het invoerveld heen.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity-2', children: 'Geldig tot' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity-2', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-2' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'schrijf-een-foutmelding-uit-in-tekst', children: 'Schrijf een foutmelding uit in tekst' }) }), '\n', (0, o.jsx)(n.p, { children: 'Schrijf de foutmelding altijd uit in tekst. Dus niet alleen met een rood randje om het veld heen of met een icoontje van een uitroepteken, maar in duidelijke taal.' }), '\n', (0, o.jsxs)(n.p, { children: ['Je kunt zeker kleur en icoontjes gebruiken, maar niet als ', (0, o.jsx)(n.strong, { children: 'enige' }), ' foutindicatie.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.4.1/', children: 'Succescriterium 1.4.1 Gebruik van kleur' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten beschrijven', pagination_label: 'Fouten beschrijven', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    g = {},
    y = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function f(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f();
   }
  },
  58639(e, n, t) {
   t.d(n, { H: () => g });
   var l = t(69284),
    o = t(46447),
    r = t(13526),
    s = t(68148),
    i = t(9016),
    c = t(69303),
    a = t(91635),
    d = t(30734),
    u = t(30758),
    p = t(31186),
    m = t(86070);
   const h = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: g = !0, children: y, container: f = 'document', language: b, designTokens: x }) => {
    const k = 'function' == typeof y ? y() : y,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     N = 'string' == typeof e ? e : p.qV(_ || k),
     [A, w] = (0, u.useState)(N),
     [S, C] = (0, u.useState)(t);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(N, { parser: b, plugins: [s.A, i.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      w(e);
     })();
    }, [N]);
    const F = (0, u.useId)();
    let z = u.Fragment;
    return (
     'paragraph' === f ? (z = h) : 'document' === f ? (z = j) : 'surface' === f && (z = v),
     (0, m.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, m.jsx)(z, { children: (0, m.jsx)(o.v$, { children: k }) }) }) }),
       g &&
        (0, m.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(o.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!S);
          },
          'aria-expanded': S,
          'aria-controls': F,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, m.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: F,
         hidden: !S,
         children: [
          (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: A, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, t) {
   t.d(n, { M: () => a });
   var l = t(46447),
    o = t(16194),
    r = t(30758),
    s = t(15638);
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
   var c = t(86070);
   function a({ lineNumber: e, syntax: n, textContent: t, trim: a }) {
    let d = t;
    const { title: u, type: p } = (0, r.useContext)(s.x),
     m = (0, r.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(o.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => r });
   var l = t(86070),
    o = t(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
