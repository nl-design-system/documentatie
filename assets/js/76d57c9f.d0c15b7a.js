'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [146],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => h });
   var l = t(16609),
    i = t(68873),
    a = t(13526),
    o = t(58713),
    r = t(87347),
    s = t(39644),
    d = t(92406),
    c = t(63313),
    g = t(30758),
    f = t(31186),
    b = t(86070);
   const m = ({ children: e }) => (0, b.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(i.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, b.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(i.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const p = ({ children: e }) => (0, b.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   p.displayName = 'SurfaceContainer';
   const h = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: h = !0, children: u, container: j = 'document', language: y, designTokens: k }) => {
    const x = 'function' == typeof u ? u() : u,
     _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
     N = 'string' == typeof e ? e : f.qV(_ || x),
     [w, A] = (0, g.useState)(N),
     [z, C] = (0, g.useState)(t);
    (0, g.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(N, { parser: y, plugins: [o.A, r.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [N]);
    const S = (0, g.useId)();
    let I = g.Fragment;
    return (
     'paragraph' === j ? (I = m) : 'document' === j ? (I = v) : 'surface' === j && (I = p),
     (0, b.jsxs)('div', {
      className: (0, a.A)('nlds-canvas'),
      children: [
       x && (0, b.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, b.jsx)(I, { children: (0, b.jsx)(i.v$, { children: x }) }) }) }),
       h &&
        (0, b.jsx)('div', {
         className: (0, a.A)('nlds-canvas__toolbar'),
         children: (0, b.jsx)(i.$n, {
          className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!z);
          },
          'aria-expanded': z,
          'aria-controls': S,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       h &&
        (0, b.jsxs)('div', {
         className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !z,
         children: [
          (0, b.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: w, trim: !0 }),
          n &&
           (0, b.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, b.jsx)(i.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, t) => {
   t.d(n, { M: () => d });
   var l = t(68873),
    i = t(16194),
    a = t(30758),
    o = t(50124);
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
   var s = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: g, type: f } = (0, a.useContext)(o.x),
     b = (0, a.useId)();
    return d && (c = c.trim()), (0, s.jsx)(i.f4, { theme: r, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: i, getTokenProps: a }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', f ? `\u201c${f}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, s.jsx)(l.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': b, style: n, children: t.map((n, t) => (0, s.jsxs)('span', { ...i({ line: n }), children: [e && (0, s.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => c, x: () => d });
   var l = t(54736),
    i = t(26990),
    a = t(68873),
    o = t(13526),
    r = t(30758),
    s = t(86070);
   const d = (0, r.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: r, figure: c }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      f = c ? 'figure' : 'div',
      b = c ? 'figcaption' : 'div';
     return (0, s.jsxs)(f, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(a.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, s.jsx)(a.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(a.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, s.jsx)(a.fz, { children: e })] }), t] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: e, type: g[n] }, children: r }) })] });
    };
  },
  71850: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => c, default: () => m, frontMatter: () => d, metadata: () => l, toc: () => f });
   const l = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","title":"Informatieve afbeeldingen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen","description":"Informatieve afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen.md","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen.md","tags":[],"version":"current","frontMatter":{"title":"Informatieve afbeeldingen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Informatieve afbeeldingen","pagination_label":"Informatieve afbeeldingen","description":"Informatieve afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","informatieve afbeelding","informatieve afbeeldingen","informatief"]},"sidebar":"richtlijnen","previous":{"title":"Grafieken","permalink":"/richtlijnen/content/afbeeldingen/grafieken"},"next":{"title":"Tekst in een afbeelding","permalink":"/richtlijnen/content/afbeeldingen/tekst-in-afbeelding"}}');
   var i = t(86070),
    a = t(85248),
    o = t(8649),
    r = t(50124),
    s = t(78734);
   const d = { title: 'Informatieve afbeeldingen \xb7 Afbeeldingen \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informatieve afbeeldingen', pagination_label: 'Informatieve afbeeldingen', description: 'Informatieve afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'informatieve afbeelding', 'informatieve afbeeldingen', 'informatief'] },
    c = 'Informatieve afbeeldingen',
    g = {},
    f = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Gebruik je een grafiek of diagram?', id: 'gebruik-je-een-grafiek-of-diagram', level: 2 }, ...s.RM];
   function b(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'informatieve-afbeeldingen', children: 'Informatieve afbeeldingen' }) }), '\n', (0, i.jsx)(n.p, { children: 'Mist iemand die de afbeelding niet ziet informatie als je de afbeelding weglaat? Dan is het waarschijnlijk een informatieve afbeelding. Informatieve afbeeldingen helpen de content op de pagina duidelijker te maken, of geven aanvullende informatie.' }), '\n', (0, i.jsx)(n.p, { children: 'Voorbeelden van informatieve afbeeldingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Grafieken en infographics' }), '\n', (0, i.jsx)(n.li, { children: "Blauwdrukken en schema's" }), '\n', (0, i.jsx)(n.li, { children: 'Afbeeldingen bij instructies' }), '\n', (0, i.jsx)(n.li, { children: 'Kunst en architectuur' }), '\n', (0, i.jsx)(n.li, { children: "Productfoto's" }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Of afbeeldingen informatief zijn, is afhankelijk van de context en het doel van de afbeelding. Een afbeelding van een boom op een pagina over duurzaamheidsinitiatieven kan decoratief zijn, maar in een artikel over schadelijke insecten in specifieke boomsoorten in de gemeente waarschijnlijk niet.' }), '\n', (0, i.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, i.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een informatieve afbeelding plaatst:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, i.jsx)(n.li, { children: 'Wat is het doel van de afbeelding?' }), '\n', (0, i.jsx)(n.li, { children: 'Gaat er informatie verloren als ik de afbeelding niet kan zien?' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Per afbeelding die je plaatst is de beschrijving die je meegeeft anders, omdat het antwoord op deze vragen anders is. Zorg er in ieder geval voor dat de informatie in de afbeelding ook voorkomt in de alternatieve tekst.' }), '\n', (0, i.jsx)(r.$, { appearance: 'do', title: 'Informatieve afbeeldingen een beschrijvende alternatieve tekst geven', children: (0, i.jsx)(o.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.img, { alt: 'De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand.', src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Fieldset.png' }), (0, i.jsx)(n.p, { children: 'Alternatieve tekst: De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand.' })] }) }) }), '\n', (0, i.jsx)(n.h2, { id: 'gebruik-je-een-grafiek-of-diagram', children: 'Gebruik je een grafiek of diagram?' }), '\n', (0, i.jsxs)(n.p, { children: ['Bekijk dan ook de ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/grafieken/', children: 'richtlijnen voor grafieken' }), '. Daar lees je hoe je ervoor zorgt dat de informatie ook zonder kleur goed te begrijpen is.'] }), '\n', (0, i.jsx)(s.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b(e);
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => r, RM: () => a });
   var l = t(86070),
    i = t(85248);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => r });
   var l = t(30758);
   const i = {},
    a = l.createContext(i);
   function o(e) {
    const n = l.useContext(a);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), l.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
