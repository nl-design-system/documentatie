'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82479],
 {
  9386(e, n, t) {
   t.d(n, { H: () => y });
   var l = t(95822),
    o = t(46447),
    r = t(13526),
    s = t(68148),
    i = t(9016),
    a = t(69303),
    c = t(91635),
    d = t(30734),
    u = t(30758),
    h = t(31186),
    m = t(65904),
    p = t.n(m),
    b = t(51627),
    x = t(86070);
   const g = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, x.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        l = (0, h.qV)(t)
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
        o = p().highlight(l, p().languages[n], n);
       return (0, x.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, x.jsx)(b.n, { children: (0, x.jsx)(b.K, { label: 'Code', children: (0, x.jsx)('pre', { className: 'language-html nl-code-block', children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: o } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: p, container: b = 'document', language: y, designTokens: f }) => {
       const k = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || k),
        [N, A] = (0, u.useState)(w),
        [z, C] = (0, u.useState)(t);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [s.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === b ? (F = g) : 'document' === b ? (F = v) : 'surface' === b && (F = j),
        (0, x.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, x.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, x.jsx)(F, { children: (0, x.jsx)(o.v$, { children: k }) }) }) }),
          m &&
           (0, x.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, x.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, x.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(o.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41588(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, contentTitle: () => x, default: () => y, frontMatter: () => b, metadata: () => l, toc: () => v }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/tabindex/index","title":"Gebruik geen positieve tabindex","description":"Richtlijnen voor positieve tabindex in een formulier.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/index.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour/2-tabindex","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik geen positieve tabindex","title_sm":"Geen positieve tabindex","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen positieve tabindex","pagination_label":"Geen positieve tabindex","description":"Richtlijnen voor positieve tabindex in een formulier.","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Zorg dat een formulier werkt met een toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie"},"next":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"}}');
   var o = t(86070),
    r = t(18439),
    s = t(78734),
    i = t(9386),
    a = t(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Formulier zonder tabindex.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)('form', { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'naam1', autoComplete: 'name' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'email1', autoComplete: 'email' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('button', { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Formulier met gebruik van een positieve tabindex.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)('form', { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'naam2', children: 'Uw naam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'naam2', autoComplete: 'name', tabIndex: '1' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email2', children: 'Uw e-mailadres' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'email2', autoComplete: 'email' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('button', { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'gebruik-geen-positieve-tabindex', children: 'Gebruik geen positieve tabindex' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex', children: 'tabindex' }), ' te geven met een waarde groter dan nul, bijvoorbeeld ', (0, o.jsx)(n.code, { children: 'tabindex="1"' }), ' of met gebruik van ', (0, o.jsx)(n.code, { children: 'autofocus' }), '. De gebruiker is meteen klaar om het formulier in te gaan vullen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Maar dit levert problemen op voor gebruikers van ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en toetsenborden. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.'] }), '\n', (0, o.jsx)(n.p, { children: 'Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.' }), '\n', (0, o.jsx)(n.p, { children: 'Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.' }), '\n', (0, o.jsxs)(n.p, { children: ['Adam Silver geeft hier uitgebreid uitleg over in ', (0, o.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/', children: 'The problem with automatically focusing the first input and what to do instead' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Let wel: ', (0, o.jsx)(n.code, { children: 'tabindex="0"' }), ' en ', (0, o.jsx)(n.code, { children: 'tabindex="-1"' }), ' zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in ', (0, o.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: '0 and -1 Values' }), ' van WebAIM.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: ', (0, o.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }), ' van Andrew Nevins.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focusvolgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Gebruik geen positieve tabindex', title_sm: 'Geen positieve tabindex', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    g = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function j(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(j, { ...e }) }) : j();
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => a, n: () => i });
   var l = t(13526),
    o = t(96345),
    r = t(37168),
    s = t(86070);
   const i = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: t, children: n.children });
    },
    a = ({ className: e, label: n, heading: t, headingLevel: i, headingApperance: a, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...c, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(o.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [t && (0, s.jsx)(r.D, { level: i, appearance: a, children: t }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
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
  88022(e, n, t) {
   t.d(n, { $: () => u, x: () => d });
   var l = t(4077),
    o = t(58315),
    r = t(46447),
    s = t(13526),
    i = t(45980),
    a = t(30758),
    c = t(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: t, children: a, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div',
      b = 'string' == typeof t ? (0, c.jsx)(i.oz, { children: t }) : t;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(r.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    o = t(16194),
    r = t(30758),
    s = t(88022);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: u, type: h } = (0, r.useContext)(s.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(o.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...o({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
