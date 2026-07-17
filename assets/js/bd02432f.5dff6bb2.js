'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39604],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var t = l(95822),
    a = l(46447),
    i = l(13526),
    o = l(68148),
    s = l(9016),
    r = l(69303),
    c = l(91635),
    d = l(30734),
    g = l(30758),
    m = l(31186),
    f = l(65904),
    h = l.n(f),
    p = l(51627),
    b = l(86070);
   const v = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const u = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   u.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, b.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        t = (0, m.qV)(l)
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
        a = h().highlight(t, h().languages[n], n);
       return (0, b.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: t } }), (0, b.jsx)(p.n, { children: (0, b.jsx)(p.K, { label: 'Code', children: (0, b.jsx)('pre', { className: 'language-html nl-code-block', children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: f = !0, children: h, container: p = 'document', language: y, designTokens: x }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(_ || k),
        [A, w] = (0, g.useState)(N),
        [z, C] = (0, g.useState)(l);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: y, plugins: [o.A, s.Ay, r.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, g.useId)();
       let I = g.Fragment;
       return (
        'paragraph' === p ? (I = v) : 'document' === p ? (I = u) : 'surface' === p && (I = j),
        (0, b.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          k && (0, b.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, b.jsx)(I, { children: (0, b.jsx)(a.v$, { children: k }) }) }) }),
          f &&
           (0, b.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(a.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          f &&
           (0, b.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: A, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(a.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   l.d(n, { R: () => o, x: () => s });
   var t = l(30758);
   const a = {},
    i = t.createContext(a);
   function o(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), t.createElement(i.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => r, n: () => s });
   var t = l(13526),
    a = l(96345),
    i = l(37168),
    o = l(86070);
   const s = ({ className: e, ...n }) => {
     const l = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: l, children: n.children });
    },
    r = ({ className: e, label: n, heading: l, headingLevel: s, headingApperance: r, ...c }) => {
     const d = (0, t.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(a.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [l && (0, o.jsx)(i.D, { level: s, appearance: r, children: l }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => s, RM: () => i });
   var t = l(86070),
    a = l(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  86633(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => d, default: () => h, frontMatter: () => c, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","title":"Informatieve afbeeldingen","description":"Informatieve afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen.mdx","tags":[],"version":"current","frontMatter":{"title":"Informatieve afbeeldingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Informatieve afbeeldingen","pagination_label":"Informatieve afbeeldingen","description":"Informatieve afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","informatieve afbeelding","informatieve afbeeldingen","informatief"]},"sidebar":"richtlijnen","previous":{"title":"Grafieken","permalink":"/richtlijnen/content/afbeeldingen/grafieken"},"next":{"title":"Tekst in een afbeelding","permalink":"/richtlijnen/content/afbeeldingen/tekst-in-afbeelding"}}');
   var a = l(86070),
    i = l(18439),
    o = l(9386),
    s = l(88022),
    r = l(78734);
   const c = { title: 'Informatieve afbeeldingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informatieve afbeeldingen', pagination_label: 'Informatieve afbeeldingen', description: 'Informatieve afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'informatieve afbeelding', 'informatieve afbeeldingen', 'informatief'] },
    d = 'Informatieve afbeeldingen',
    g = {},
    m = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Gebruik je een grafiek of diagram?', id: 'gebruik-je-een-grafiek-of-diagram', level: 2 }, ...r.RM];
   function f(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'informatieve-afbeeldingen', children: 'Informatieve afbeeldingen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Mist iemand die de afbeelding niet ziet informatie als je de afbeelding weglaat? Dan is het waarschijnlijk een informatieve afbeelding. Informatieve afbeeldingen helpen de content op de pagina duidelijker te maken, of geven aanvullende informatie.' }), '\n', (0, a.jsx)(n.p, { children: 'Voorbeelden van informatieve afbeeldingen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Grafieken en infographics' }), '\n', (0, a.jsx)(n.li, { children: "Blauwdrukken en schema's" }), '\n', (0, a.jsx)(n.li, { children: 'Afbeeldingen bij instructies' }), '\n', (0, a.jsx)(n.li, { children: 'Kunst en architectuur' }), '\n', (0, a.jsx)(n.li, { children: "Productfoto's" }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of afbeeldingen informatief zijn, is afhankelijk van de context en het doel van de afbeelding. Een afbeelding van een boom op een pagina over duurzaamheidsinitiatieven kan decoratief zijn, maar in een artikel over schadelijke insecten in specifieke boomsoorten in de gemeente waarschijnlijk niet.' }), '\n', (0, a.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, a.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een informatieve afbeelding plaatst:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, a.jsx)(n.li, { children: 'Wat is het doel van de afbeelding?' }), '\n', (0, a.jsx)(n.li, { children: 'Gaat er informatie verloren als ik de afbeelding niet kan zien?' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Per afbeelding die je plaatst is de beschrijving die je meegeeft anders, omdat het antwoord op deze vragen anders is. Zorg er in ieder geval voor dat de informatie in de afbeelding ook voorkomt in de alternatieve tekst.' }), '\n', (0, a.jsx)(s.$, { appearance: 'do', title: 'Informatieve afbeeldingen een beschrijvende alternatieve tekst geven', children: (0, a.jsx)(o.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('img', { alt: 'De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand.', src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Fieldset.png' }), (0, a.jsx)('p', { children: 'Alternatieve tekst: De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand.' })] }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'gebruik-je-een-grafiek-of-diagram', children: 'Gebruik je een grafiek of diagram?' }), '\n', (0, a.jsxs)(n.p, { children: ['Bekijk dan ook de ', (0, a.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/grafieken/', children: 'richtlijnen voor grafieken' }), '. Daar lees je hoe je ervoor zorgt dat de informatie ook zonder kleur goed te begrijpen is.'] }), '\n', (0, a.jsx)(r.Ay, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => g, x: () => d });
   var t = l(4077),
    a = l(58315),
    i = l(46447),
    o = l(13526),
    s = l(45980),
    r = l(30758),
    c = l(86070);
   const d = (0, r.createContext)({}),
    g = ({ title: e, appearance: n, description: l, children: r, figure: g }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      f = g ? 'figure' : 'div',
      h = g ? 'figcaption' : 'div',
      p = 'string' == typeof l ? (0, c.jsx)(s.oz, { children: l }) : l;
     return (0, c.jsxs)(f, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(i.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(i.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: r }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    a = l(16194),
    i = l(30758),
    o = l(88022);
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
   var r = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: g, type: m } = (0, i.useContext)(o.x),
     f = (0, i.useId)();
    return (c && (d = d.trim()), (0, r.jsx)(a.f4, { theme: s, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: a, getTokenProps: i }) => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: f, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, r.jsx)(t.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': f, style: n, children: l.map((n, l) => (0, r.jsxs)('span', { ...a({ line: n }), children: [e && (0, r.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
