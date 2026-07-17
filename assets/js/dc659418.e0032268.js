'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [88963],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var a = l(95822),
    t = l(46447),
    o = l(13526),
    s = l(68148),
    r = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    m = l(30758),
    h = l(31186),
    u = l(65904),
    p = l.n(u),
    b = l(51627),
    g = l(86070);
   const j = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        a = (0, h.qV)(l)
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
        t = p().highlight(a, p().languages[n], n);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }), (0, g.jsx)(b.n, { children: (0, g.jsx)(b.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: p, container: b = 'document', language: y, designTokens: k }) => {
       const f = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || f),
        [A, z] = (0, m.useState)(N),
        [w, C] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: y, plugins: [s.A, r.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let R = m.Fragment;
       return (
        'paragraph' === b ? (R = j) : 'document' === b ? (R = v) : 'surface' === b && (R = x),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          f && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(R, { children: (0, g.jsx)(t.v$, { children: f }) }) }) }),
          u &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(t.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!w);
             },
             'aria-expanded': w,
             'aria-controls': S,
             children: w ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !w,
            children: [
             (0, g.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: A, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(t.$n, {
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
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => r });
   var a = l(30758);
   const t = {},
    o = a.createContext(t);
   function s(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), a.createElement(o.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => r });
   var a = l(13526),
    t = l(96345),
    o = l(37168),
    s = l(86070);
   const r = ({ className: e, ...n }) => {
     const l = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: r, headingApperance: c, ...i }) => {
     const d = (0, a.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...i, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(t.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [l && (0, s.jsx)(o.D, { level: r, appearance: c, children: l }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => r, RM: () => o });
   var a = l(86070),
    t = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  80340(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => g, default: () => y, frontMatter: () => b, metadata: () => a, toc: () => v }));
   const a = JSON.parse('{"id":"richtlijnen/formulieren/label/visible-acccessible-name/index","title":"De zichtbare naam moet overeenkomen met de toegankelijke naam","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/index.mdx","sourceDirName":"richtlijnen/formulieren/label/2-visible-acccessible-name","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/index.mdx","tags":[],"version":"current","frontMatter":{"title":"De zichtbare naam moet overeenkomen met de toegankelijke naam","title_sm":"Zichtbare naam label","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Zichtbare naam label","pagination_label":"Zichtbare naam label","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke naam label","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam"},"next":{"title":"Plaatsing label","permalink":"/richtlijnen/formulieren/labels/plaatsing"}}');
   var t = l(86070),
    o = l(18439),
    s = l(78734),
    r = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Het zichtbare label is de toegankelijke naam.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'hond', children: 'Hoe heet je hond' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'hond', name: 'hond' }) })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', name: 'lievelingskleur', 'aria-label': 'Vul een kleur in', placeholder: 'Wat is je lievelingskleur' }) }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: 'Zoek' }), (0, t.jsx)('input', { type: 'search', name: 'trefwoord', 'aria-label': 'Trefwoord' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function m(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.' }), '\n', (0, t.jsxs)(n.p, { children: ['Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ', (0, t.jsx)(n.code, { children: 'aria-label' }), '. Met ', (0, t.jsx)(n.code, { children: 'aria-label' }), ' kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.5.3/', children: 'Succescriterium 2.5.3: Label in naam' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam', title_sm: 'Zichtbare naam label', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x();
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => m, x: () => d });
   var a = l(4077),
    t = l(58315),
    o = l(46447),
    s = l(13526),
    r = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    m = ({ title: e, appearance: n, description: l, children: c, figure: m }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = m ? 'figure' : 'div',
      p = m ? 'figcaption' : 'div',
      b = 'string' == typeof l ? (0, i.jsx)(r.oz, { children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(o.fz, { children: e })] }), b] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var a = l(46447),
    t = l(16194),
    o = l(30758),
    s = l(88022);
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: m, type: h } = (0, o.useContext)(s.x),
     u = (0, o.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(a.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
