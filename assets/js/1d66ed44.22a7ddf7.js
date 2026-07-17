'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28911],
 {
  9386(e, n, l) {
   l.d(n, { H: () => b });
   var t = l(95822),
    s = l(46447),
    o = l(13526),
    r = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    p = l(65904),
    h = l.n(p),
    g = l(51627),
    v = l(86070);
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const b = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        t = (0, u.qV)(l)
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
        s = h().highlight(t, h().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: t } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: h, container: g = 'document', language: b, designTokens: f }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || k),
        [w, A] = (0, m.useState)(N),
        [C, S] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: b, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const z = (0, m.useId)();
       let G = m.Fragment;
       return (
        'paragraph' === g ? (G = x) : 'document' === g ? (G = j) : 'surface' === g && (G = y),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(G, { children: (0, v.jsx)(s.v$, { children: k }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
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
          p &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, v.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: w, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { R: () => r, x: () => a });
   var t = l(30758);
   const s = {},
    o = t.createContext(s);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => i, n: () => a });
   var t = l(13526),
    s = l(96345),
    o = l(37168),
    r = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: l, children: n.children });
    },
    i = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, t.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...c, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(s.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [l && (0, r.jsx)(o.D, { level: a, appearance: i, children: l }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  61112(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => t, toc: () => j }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/questions/min-max/index","title":"Geef invoervelden geen minimum/maximum tekstlengte","description":"Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.","source":"@site/docs/richtlijnen/formulieren/questions/5-min-max/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/5-min-max","slug":"/richtlijnen/formulieren/vragen/geen-min-max-lengte","permalink":"/richtlijnen/formulieren/vragen/geen-min-max-lengte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/5-min-max/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef invoervelden geen minimum/maximum tekstlengte","title_sm":"Geen vaste tekstlengte","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen vaste tekstlengte","pagination_label":"Geen vaste tekstlengte","description":"Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.","slug":"/richtlijnen/formulieren/vragen/geen-min-max-lengte","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Stel een vraag \xe9\xe9n keer","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk"},"next":{"title":"Status in formulieren","permalink":"/richtlijnen/formulieren/status/"}}');
   var s = l(86070),
    o = l(18439),
    r = l(78734),
    a = l(9386),
    i = l(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Geef de mogelijkheid korte en lange teksten in te vullen.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'woonplaats1', children: 'Uw woonplaats' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'woonplaats1', type: 'text', name: 'woonplaats', autoComplete: 'address-level2' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Limiteer het maximaal aantal in te voeren tekens.', description: 'Mensen uit Gasselterboerveenschemond of Westerhaar-Vriezenveensewijk willen ook graag hun woonplaats invoeren.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'woonplaats2', children: 'Uw woonplaats' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'woonplaats2', type: 'text', name: 'email', maxLength: '20', autoComplete: 'address-level2' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Limiteer het minimaal aantal in te voeren tekens.', description: 'Jo, Bo en X willen ook graag hun voornaam invullen.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'voornaam1', children: 'Je voornaam' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'voornaam1', type: 'text', name: 'voornaam', minLength: '3', autoComplete: 'given-name' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'geef-invoervelden-geen-minimummaximum-tekstlengte', children: 'Geef invoervelden geen minimum/maximum tekstlengte' }) }), '\n', (0, s.jsx)(n.p, { children: 'Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar in veel gevallen, bijvoorbeeld bij namen, kan dit bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen. Optimaliseer in dit geval voor uitersten. Er zijn namen van \xe9\xe9n karakter en van vijftig: aannames vermijden is dus het devies.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'Succescriterium 1.3.5 Identificeer het doel van de input' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Geef invoervelden geen minimum/maximum tekstlengte', title_sm: 'Geen vaste tekstlengte', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen vaste tekstlengte', pagination_label: 'Geen vaste tekstlengte', description: 'Richtlijnen om invoervelden geen minimum of maximum tekstlengte te geven.', slug: '/richtlijnen/formulieren/vragen/geen-min-max-lengte', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    x = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(y, { ...e }) }) : y();
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => o });
   var t = l(86070),
    s = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => m, x: () => d });
   var t = l(4077),
    s = l(58315),
    o = l(46447),
    r = l(13526),
    a = l(45980),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    m = ({ title: e, appearance: n, description: l, children: i, figure: m }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      h = m ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(a.oz, { children: l }) : l;
     return (0, c.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(o.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    s = l(16194),
    o = l(30758),
    r = l(88022);
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
     p = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(t.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
