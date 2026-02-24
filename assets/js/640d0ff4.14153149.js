'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60237],
 {
  15638(e, l, n) {
   n.d(l, { $: () => u, x: () => d });
   var r = n(4077),
    s = n(58315),
    o = n(46447),
    t = n(13526),
    i = n(9547),
    a = n(30758),
    c = n(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: l, description: n, children: a, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      g = 'string' == typeof n ? (0, c.jsx)(i.oz, { children: n }) : n;
     return (0, c.jsxs)(p, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[l] }, children: a }) })] });
    };
  },
  18439(e, l, n) {
   n.d(l, { R: () => t, x: () => i });
   var r = n(30758);
   const s = {},
    o = r.createContext(s);
   function t(e) {
    const l = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function i(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), r.createElement(o.Provider, { value: l }, e.children));
   }
  },
  40958(e, l, n) {
   (n.r(l), n.d(l, { assets: () => b, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/label/README","title":"Een placeholder is geen vervanger van een label \xb7 Placeholders in een formulier \xb7 Richtlijnen","description":"Richtlijnen over placeholder niet gebruiken als vervanger van een label.","source":"@site/docs/richtlijnen/formulieren/placeholder/1-label/README.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/1-label","slug":"/richtlijnen/formulieren/placeholders/niet-als-label","permalink":"/richtlijnen/formulieren/placeholders/niet-als-label","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/1-label/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Een placeholder is geen vervanger van een label \xb7 Placeholders in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder is geen label","pagination_label":"Placeholder is geen label","description":"Richtlijnen over placeholder niet gebruiken als vervanger van een label.","slug":"/richtlijnen/formulieren/placeholders/niet-als-label","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"},"next":{"title":"Placeholder bij zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie"}}');
   var s = n(86070),
    o = n(18439),
    t = n(78734),
    i = n(58639),
    a = n(15638);
   function c(e) {
    const l = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Het label altijd tonen en een description gebruiken als aanvullende informatie.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur1', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { id: 'description-kleur1', children: 'Vul de naam van een kleur in.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { 'aria-describedby': 'description-kleur1', id: 'lievelingskleur1', name: 'lievelingskleur', type: 'text' }) })] }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Het label altijd tonen en een placeholder als korte hint gebruiken.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur2', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur2', type: 'text', name: 'lievelingskleur', placeholder: 'Vul een kleurnaam in' }) })] }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'Het label onzichtbaar maken.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { className: 'sr-only', htmlFor: 'lievelingskleur3', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur3', name: 'lievelingskleur', placeholder: 'Wat is je lievelingskleur?', type: 'text' }) })] }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'Placeholdertekst heel lang maken zodat een deel uit het formulierveld valt en daardoor onleesbaar wordt. Gebruik in dat geval een description.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur4', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur4', name: 'lievelingskleur', placeholder: 'Geef is je lievelingskleur? Bijvoorbeeld rood, wit, geel of blauw.', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const l = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.header, { children: (0, s.jsx)(l.h1, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: 'Een placeholder is geen vervanger van een label' }) }), '\n', (0, s.jsx)(l.p, { children: 'De gebruiker moet altijd een zichtbare indicatie hebben over wat in te vullen. Ook tijdens het typen, wanneer de placeholder verdwijnt of als de informatie al automatisch is ingevuld.' }), '\n', (0, s.jsx)(l.p, { children: 'Gebruik dus niet enkel de placeholder om aan te geven wat een gebruiker moet invullen.' }), '\n', (0, s.jsx)(l.p, { children: 'Een ander probleem met placeholders is dat bij inzoomen lange tekst te groot kan worden voor het formulierveld en daardoor afhakt en onleesbaar wordt.' })] });
   }
   function h(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.4.10/', children: 'Succescriterium 1.4.10 Reflow' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Een placeholder is geen vervanger van een label \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder is geen label', pagination_label: 'Placeholder is geen label', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  58639(e, l, n) {
   n.d(l, { H: () => b });
   var r = n(69284),
    s = n(46447),
    o = n(13526),
    t = n(68148),
    i = n(9016),
    a = n(69303),
    c = n(91635),
    d = n(30734),
    u = n(30758),
    h = n(31186),
    p = n(86070);
   const m = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: b = !0, children: j, container: x = 'document', language: y, designTokens: f }) => {
    const k = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || k),
     [N, A] = (0, u.useState)(w),
     [z, C] = (0, u.useState)(n);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: y, plugins: [t.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === x ? (S = m) : 'document' === x ? (S = g) : 'surface' === x && (S = v),
     (0, p.jsxs)('div', {
      className: (0, o.A)('nlds-canvas'),
      children: [
       k && (0, p.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(S, { children: (0, p.jsx)(s.v$, { children: k }) }) }) }),
       b &&
        (0, p.jsx)('div', {
         className: (0, o.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(s.$n, {
          className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!z);
          },
          'aria-expanded': z,
          'aria-controls': R,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, p.jsxs)('div', {
         className: (0, o.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !z,
         children: [
          (0, p.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
          l &&
           (0, p.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, l, n) {
   n.d(l, { M: () => c });
   var r = n(46447),
    s = n(16194),
    o = n(30758),
    t = n(15638);
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
   var a = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: u, type: h } = (0, o.useContext)(t.x),
     p = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(s.f4, { theme: i, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: s, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: l, children: n.map((l, n) => (0, a.jsxs)('span', { ...s({ line: l }), children: [e && (0, a.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, a.jsx)('span', { ...o({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => i, RM: () => o });
   var r = n(86070),
    s = n(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
 },
]);
