'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19622],
 {
  9386(e, n, l) {
   l.d(n, { H: () => j });
   var r = l(95822),
    t = l(46447),
    o = l(13526),
    s = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    p = l(65904),
    h = l.n(p),
    g = l(51627),
    v = l(86070);
   const y = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const j = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        r = (0, u.qV)(l)
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
        t = h().highlight(r, h().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: h, container: g = 'document', language: j, designTokens: f }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || k),
        [w, A] = (0, m.useState)(N),
        [z, C] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [s.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let R = m.Fragment;
       return (
        'paragraph' === g ? (R = y) : 'document' === g ? (R = b) : 'surface' === g && (R = x),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(R, { children: (0, v.jsx)(t.v$, { children: k }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(t.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: w, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(t.$n, {
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
   l.d(n, { R: () => s, x: () => a });
   var r = l(30758);
   const t = {},
    o = r.createContext(t);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var r = l(13526),
    t = l(96345),
    o = l(37168),
    s = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, r.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...i, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(t.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [l && (0, s.jsx)(o.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  65075(e, n, l) {
   (l.r(n), l.d(n, { assets: () => y, contentTitle: () => v, default: () => j, frontMatter: () => g, metadata: () => r, toc: () => b }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/questions/avoid-duplicate-work/index","title":"Vraag niet meerdere keren dezelfde informatie uit","description":"Richtlijnen over het niet meerdere keren uitvragen van dezelfde informatie.","source":"@site/docs/richtlijnen/formulieren/questions/4-avoid-duplicate-work/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/4-avoid-duplicate-work","slug":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/4-avoid-duplicate-work/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vraag niet meerdere keren dezelfde informatie uit","title_sm":"Stel een vraag \xe9\xe9n keer","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Stel een vraag \xe9\xe9n keer","pagination_label":"Stel een vraag \xe9\xe9n keer","description":"Richtlijnen over het niet meerdere keren uitvragen van dezelfde informatie.","slug":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Bied contactmogelijkheden","permalink":"/richtlijnen/formulieren/vragen/manieren-voor-contact"},"next":{"title":"Geen vaste tekstlengte","permalink":"/richtlijnen/formulieren/vragen/geen-min-max-lengte"}}');
   var t = l(86070),
    o = l(18439),
    s = l(78734),
    a = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Herhaling ter bevestiging.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'email1', type: 'email', name: 'email', autoComplete: 'email' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'email2', children: 'Herhaal uw e-mailadres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'email2', type: 'email', name: 'email', autoComplete: 'email' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'vraag-niet-meerdere-keren-dezelfde-informatie-uit', children: 'Vraag niet meerdere keren dezelfde informatie uit' }) }), '\n', (0, t.jsx)(n.p, { children: 'Voorkom herhaling: om zeker te weten dat iemand het juiste e-mailadres heeft ingevuld, wordt in sommige formulieren de vraag twee keer gesteld en dan vergeleken. Dit kan gebruiksvriendelijker!' }), '\n', (0, t.jsx)(n.p, { children: 'Als het essentieel is dat de informatie correct is, zijn er deze alternatieven:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'toon dan voor het verzenden nog eens de invoer, bijvoorbeeld op een controlepagina;' }), '\n', (0, t.jsx)(n.li, { children: '(als het om een e-mailadres gaat) stuur een e-mail ter bevestiging om de juistheid van het e-mailadres te controleren.' }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.7/', children: 'succescriterium 3.3.7 Overbodige invoer' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Vraag niet meerdere keren dezelfde informatie uit', title_sm: 'Stel een vraag \xe9\xe9n keer', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Stel een vraag \xe9\xe9n keer', pagination_label: 'Stel een vraag \xe9\xe9n keer', description: 'Richtlijnen over het niet meerdere keren uitvragen van dezelfde informatie.', slug: '/richtlijnen/formulieren/vragen/voorkom-dubbel-werk', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    y = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x();
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => o });
   var r = l(86070),
    t = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => m, x: () => d });
   var r = l(4077),
    t = l(58315),
    o = l(46447),
    s = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    m = ({ title: e, appearance: n, description: l, children: c, figure: m }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      h = m ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(p, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(o.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var r = l(46447),
    t = l(16194),
    o = l(30758),
    s = l(88022);
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: m, type: u } = (0, o.useContext)(s.x),
     p = (0, o.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
