'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41463],
 {
  8649: (e, n, l) => {
   l.d(n, { H: () => g });
   var o = l(16609),
    a = l(68873),
    t = l(13526),
    r = l(58713),
    s = l(87347),
    i = l(39644),
    c = l(92406),
    d = l(63313),
    m = l(30758),
    u = l(31186),
    h = l(86070);
   const b = ({ children: e }) => (0, h.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(a.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const p = ({ children: e }) => (0, h.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(a.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   p.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, h.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: g = !0, children: j, container: y = 'document', language: k, designTokens: x }) => {
    const f = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
     z = 'string' == typeof e ? e : u.qV(_ || f),
     [N, A] = (0, m.useState)(z),
     [w, C] = (0, m.useState)(l);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(z, { parser: k, plugins: [r.A, s.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [z]);
    const R = (0, m.useId)();
    let S = m.Fragment;
    return (
     'paragraph' === y ? (S = b) : 'document' === y ? (S = p) : 'surface' === y && (S = v),
     (0, h.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       f && (0, h.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, h.jsx)(S, { children: (0, h.jsx)(a.v$, { children: f }) }) }) }),
       g &&
        (0, h.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(a.$n, {
          className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!w);
          },
          'aria-expanded': w,
          'aria-controls': R,
          children: w ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, h.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !w,
         children: [
          (0, h.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: N, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(a.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, l) => {
   l.d(n, { M: () => c });
   var o = l(68873),
    a = l(16194),
    t = l(30758),
    r = l(50124);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: m, type: u } = (0, t.useContext)(r.x),
     h = (0, t.useId)();
    return c && (d = d.trim()), (0, i.jsx)(a.f4, { theme: s, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: a, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...a({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) });
   }
  },
  50124: (e, n, l) => {
   l.d(n, { $: () => d, x: () => c });
   var o = l(54736),
    a = l(26990),
    t = l(68873),
    r = l(13526),
    s = l(30758),
    i = l(86070);
   const c = (0, s.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: s, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(t.fz, { children: e })] }), l] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: s }) })] });
    };
  },
  78734: (e, n, l) => {
   l.d(n, { Ay: () => s, RM: () => t });
   var o = l(86070),
    a = l(85248);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  85248: (e, n, l) => {
   l.d(n, { R: () => r, x: () => s });
   var o = l(30758);
   const a = {},
    t = o.createContext(a);
   function r(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), o.createElement(t.Provider, { value: n }, e.children);
   }
  },
  98883: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => p, contentTitle: () => b, default: () => j, frontMatter: () => h, metadata: () => o, toc: () => v });
   const o = JSON.parse('{"id":"richtlijnen/formulieren/label/visible-acccessible-name/README","title":"De zichtbare naam moet overeenkomen met de toegankelijke naam \xb7 Labels in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/README.mdx","sourceDirName":"richtlijnen/formulieren/label/2-visible-acccessible-name","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/README.mdx","tags":[],"version":"current","frontMatter":{"title":"De zichtbare naam moet overeenkomen met de toegankelijke naam \xb7 Labels in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Zichtbare naam label","pagination_label":"Zichtbare naam label","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke naam label","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam"},"next":{"title":"Plaatsing label","permalink":"/richtlijnen/formulieren/labels/plaatsing"}}');
   var a = l(86070),
    t = l(85248),
    r = l(78734),
    s = l(8649),
    i = l(50124);
   function c(e) {
    const n = { div: 'div', h2: 'h2', input: 'input', label: 'label', ...(0, t.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, a.jsx)(i.$, { appearance: 'do', title: 'Het zichtbare label is de toegankelijke naam.', children: (0, a.jsx)(s.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.label, { htmlFor: 'hond', children: 'Hoe heet je hond' }), (0, a.jsx)(n.input, { type: 'text', id: 'hond', name: 'hond' })] }) }) }), '\n', (0, a.jsx)(i.$, { appearance: 'dont', title: 'Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, a.jsx)(s.H, { language: 'html', children: () => (0, a.jsx)(n.input, { type: 'text', name: 'lievelingskleur', 'aria-label': 'Vul een kleur in', placeholder: 'Wat is je lievelingskleur' }) }) }), '\n', (0, a.jsx)(i.$, { appearance: 'dont', title: 'Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, a.jsx)(s.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.div, { children: 'Zoek' }), (0, a.jsx)(n.input, { type: 'search', name: 'trefwoord', 'aria-label': 'Trefwoord' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n', (0, a.jsx)(n.p, { children: 'Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.' }), '\n', (0, a.jsxs)(n.p, { children: ['Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ', (0, a.jsx)(n.code, { children: 'aria-label' }), '. Met ', (0, a.jsx)(n.code, { children: 'aria-label' }), ' kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Zorgen dat de zichtbare naam en toegankelijke naam overeenkomen, is nodig om te voldoen ', (0, a.jsx)(n.a, { href: '/wcag/2.5.3/', children: 'WCAG-succescriterium 2.5.3: Label in naam' }), ' (niveau A).'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
   const h = { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    p = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...r.RM];
   function g(e) {
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(u, {}), '\n', (0, a.jsx)(d, {}), '\n', (0, a.jsx)(r.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(g, { ...e }) }) : g();
   }
  },
 },
]);
