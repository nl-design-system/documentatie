'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94318],
 {
  9386(e, l, n) {
   n.d(l, { H: () => k });
   var r = n(95822),
    s = n(46447),
    o = n(13526),
    t = n(68148),
    a = n(9016),
    i = n(69303),
    c = n(91635),
    d = n(30734),
    u = n(30758),
    h = n(31186),
    m = n(65904),
    p = n.n(m),
    j = n(51627),
    g = n(86070);
   const b = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ children: e, language: l }) => {
       const n = 'function' == typeof e ? e() : e,
        r = (0, h.qV)(n)
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
        s = p().highlight(r, p().languages[l], l);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }), (0, g.jsx)(j.n, { children: (0, g.jsx)(j.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: m = !0, children: p, container: j = 'document', language: k, designTokens: f }) => {
       const y = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || y),
        [w, A] = (0, u.useState)(N),
        [z, C] = (0, u.useState)(n);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: k, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let R = u.Fragment;
       return (
        'paragraph' === j ? (R = b) : 'document' === j ? (R = x) : 'surface' === j && (R = v),
        (0, g.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          y && (0, g.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(R, { children: (0, g.jsx)(s.v$, { children: y }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(s.$n, {
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
          m &&
           (0, g.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: w, trim: !0 }),
             l &&
              (0, g.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(s.$n, {
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
  18439(e, l, n) {
   n.d(l, { R: () => t, x: () => a });
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
   function a(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), r.createElement(o.Provider, { value: l }, e.children));
   }
  },
  51627(e, l, n) {
   n.d(l, { K: () => i, n: () => a });
   var r = n(13526),
    s = n(96345),
    o = n(37168),
    t = n(86070);
   const a = ({ className: e, ...l }) => {
     const n = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: n, children: l.children });
    },
    i = ({ className: e, label: l, heading: n, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, r.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...c, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(s.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [n && (0, t.jsx)(o.D, { level: a, appearance: i, children: n }), l] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  73702(e, l, n) {
   (n.r(l), n.d(l, { assets: () => b, contentTitle: () => g, default: () => k, frontMatter: () => j, metadata: () => r, toc: () => x }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/label/accessible-name/index","title":"Geef een formulierveld een toegankelijke naam met een label","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/1-accessible-name/index.mdx","sourceDirName":"richtlijnen/formulieren/label/1-accessible-name","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/1-accessible-name/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef een formulierveld een toegankelijke naam met een label","title_sm":"Toegankelijke naam label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke naam label","pagination_label":"Toegankelijke naam label","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Labels in een formulier","permalink":"/richtlijnen/formulieren/labels/"},"next":{"title":"Zichtbare naam label","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam"}}');
   var s = n(86070),
    o = n(18439),
    t = n(78734),
    a = n(9386),
    i = n(88022);
   function c(e) {
    const l = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'kleur3', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'kleur3', name: 'lievelingskleur' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'kleur4', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsxs)('select', { id: 'kleur4', name: 'lievelingskleur', children: [(0, s.jsx)('option', { children: 'Rood' }), (0, s.jsx)('option', { children: 'Blauw' }), (0, s.jsx)('option', { children: 'Wit' })] }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)('div', { 'datatest-id': 'exclude-axe', children: [(0, s.jsx)('div', { htmlFor: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)('input', { type: 'text', id: 'kleur5', name: 'lievelingskleur' })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)('div', { 'datatest-id': 'exclude-axe', children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsxs)('select', { name: 'lievelingskleur', children: [(0, s.jsx)('option', { children: 'Rood' }), (0, s.jsx)('option', { children: 'Blauw' }), (0, s.jsx)('option', { children: 'Wit' })] }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const l = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.header, { children: (0, s.jsx)(l.h1, { id: 'geef-een-formulierveld-een-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }) }), '\n', (0, s.jsxs)(l.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, s.jsx)(l.code, { children: 'for' }), '/', (0, s.jsx)(l.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, s.jsx)(l.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsxs)(l.li, { children: ['Gebruikers van ', (0, s.jsx)(l.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.'] }), '\n', (0, s.jsx)(l.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, s.jsx)(l.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, s.jsx)(l.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, s.jsx)(l.h2, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, s.jsx)(l.p, { children: 'Opzet in de HTML:' }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, s.jsxs)(l.li, { children: ['Geef het label het attribute ', (0, s.jsx)(l.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, s.jsx)(l.pre, { children: (0, s.jsx)(l.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, s.jsxs)(l.p, { children: ['Let op: De gebruikte ', (0, s.jsx)(l.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, s.jsx)(l.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, s.jsxs)(l.p, { children: ['Doen: Gekoppeld label met ', (0, s.jsx)(l.code, { children: 'for' }), ' en ', (0, s.jsx)(l.code, { children: 'id' }), '. Het ', (0, s.jsx)(l.code, { children: '<label>' }), '-element heeft een ', (0, s.jsx)(l.code, { children: 'for' }), ' attribuut (of ', (0, s.jsx)(l.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, s.jsx)(l.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, s.jsxs)(l.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, s.jsx)(l.code, { children: '<select>' }), ':'] }), '\n', (0, s.jsx)(l.pre, { children: (0, s.jsx)(l.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) })] });
   }
   function h(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Geef een formulierveld een toegankelijke naam met een label', title_sm: 'Toegankelijke naam label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    b = {},
    x = [{ value: 'De for/id relatie', id: 'de-forid-relatie', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function v(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v();
   }
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => a, RM: () => o });
   var r = n(86070),
    s = n(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, l, n) {
   n.d(l, { $: () => u, x: () => d });
   var r = n(4077),
    s = n(58315),
    o = n(46447),
    t = n(13526),
    a = n(45980),
    i = n(30758),
    c = n(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: l, description: n, children: i, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div',
      j = 'string' == typeof n ? (0, c.jsx)(a.oz, { children: n }) : n;
     return (0, c.jsxs)(m, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), j] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[l] }, children: i }) })] });
    };
  },
  95822(e, l, n) {
   n.d(l, { M: () => c });
   var r = n(46447),
    s = n(16194),
    o = n(30758),
    t = n(88022);
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
   var i = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: u, type: h } = (0, o.useContext)(t.x),
     m = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: s, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: l, children: n.map((l, n) => (0, i.jsxs)('span', { ...s({ line: l }), children: [e && (0, i.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, i.jsx)('span', { ...o({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
 },
]);
