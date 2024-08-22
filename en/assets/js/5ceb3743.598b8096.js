'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [41952],
 {
  33984: (e, n, l) => {
   l.d(n, { ZP: () => s });
   var i = l(52676),
    o = l(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  9697: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => m, default: () => _, frontMatter: () => p, metadata: () => g, toc: () => v });
   var i = l(52676),
    o = l(24785),
    t = l(44585),
    s = l(33376);
   function r(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.X, { appearance: 'do', title: 'Leg uit waarom een datum wordt afgekeurd.', children: (0, i.jsx)(t.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'passport-validity', children: 'Geldig tot' }), (0, i.jsx)(n.p, { id: 'description-passport-validity', children: 'Invoerfout: De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' }), (0, i.jsx)(n.input, { id: 'passport-validity', type: 'text', name: 'passport-validity', 'aria-describedby': 'description-passport-validity' })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Geef een voorbeeld van wat er verwacht wordt.', children: (0, i.jsx)(t.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'email', children: 'E-mail' }), (0, i.jsx)(n.p, { id: 'description-email', children: 'Invoerfout: Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.' }), (0, i.jsx)(n.input, { id: 'email', type: 'email', name: 'email', 'aria-describedby': 'description-email' })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'Alleen beschrijven dat het veld verplicht is, zonder toelichting dat er informatie mist of aan welke voorwaarde niet is voldaan.', children: (0, i.jsx)(t.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'passport-validity-2', children: 'Geldig tot' }), (0, i.jsx)(n.p, { id: 'description-passport-validity-2', children: 'Invoerfout: Dit veld is verplicht.' }), (0, i.jsx)(n.input, { id: 'passport-validity-2', 'aria-invalid': 'false', type: 'text', name: 'passport-validity-2', 'aria-describedby': 'description-passport-validity-2' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
   function a(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'schrijf-een-duidelijke-foutmelding', children: 'Schrijf een duidelijke foutmelding' }), '\n', (0, i.jsx)(n.p, { children: '"Dit veld is verplicht" geeft onvoldoende informatie. Een op maat geschreven foutmelding geeft de gebruiker veel meer houvast.' }), '\n', (0, i.jsx)(n.p, { children: 'Geef de gebruiker ook nooit de schuld. De meeste mensen worstelen met alle informatie en functionaliteit op het web. Help gebruikers zo goed mogelijk om het formulier te versturen.' }), '\n', (0, i.jsx)(n.p, { children: 'Maak foutmeldingen daarom zo veel mogelijk beschrijvend en op maat. Schrijf in plaats van "Ongeldige invoer" of "Dit veld is verplicht" bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Vul een geldig e-mailadres in, bijvoorbeeld ', (0, i.jsx)(n.a, { href: 'mailto:naam@voorbeeld.nl', children: 'naam@voorbeeld.nl' }), '.'] }), '\n', (0, i.jsx)(n.li, { children: 'De geldigheidsdatum van uw paspoort moet in de toekomst zijn.' }), '\n', (0, i.jsx)(n.li, { children: 'Vul het huisnummer in zodat wij je bestelling kunnen opsturen.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik een punt aan het eind van de foutmelding (of andere melding). Dan stopt de screenreader even en is het duidelijker dat de foutmelding apart een zin is.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het design system van GOV.UK geeft duidelijke (Engelstalige) informatie over de tekst van foutmeldingen ', (0, i.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise', children: (0, i.jsx)('span', { lang: 'en', children: 'Be clear and concise' }) }), '. In de video ', (0, i.jsx)(n.a, { href: 'https://www.nngroup.com/videos/usability-heuristic-recognize-errors/', children: (0, i.jsx)('span', { lang: 'en', children: 'Help Users Recognize, Diagnose, and Recover from Errors' }) }), ' geeft de Nielsen Norman Group tips voor goede hulp aan gebruikers voor het verhelpen van fouten.'] }), '\n', (0, i.jsx)(n.p, { children: 'Het schrijven van foutmeldingen en een duidelijke toelichting op wat er mis gaat, is nodig om te voldoen de volgende WCAG-succescriteria:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/3.3.1', children: '3.3.1 Foutidentificatie' }), ' (niveau A).'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/3.3.3', children: '3.3.3 Foutsuggestie' }), ' (niveau AA).'] }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   var u = l(33984);
   const p = { title: 'Schrijf een duidelijke foutmelding | Foutmeldingen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Duidelijke foutmeldingen', pagination_label: 'Duidelijke foutmeldingen', description: 'Richtlijnen voor duidelijke foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/duidelijk - labels - formulier - design - code' },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/error/clarity/README', title: 'Schrijf een duidelijke foutmelding | Foutmeldingen in een formulier | Richtlijnen', description: 'Richtlijnen voor duidelijke foutmeldingen in een formulier.', source: '@site/docs/richtlijnen/formulieren/error/3-clarity/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/3-clarity', slug: '/richtlijnen/formulieren/foutmeldingen/duidelijk - labels - formulier - design - code', permalink: '/en/richtlijnen/formulieren/foutmeldingen/duidelijk - labels - formulier - design - code', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/3-clarity/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Schrijf een duidelijke foutmelding | Foutmeldingen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Duidelijke foutmeldingen', pagination_label: 'Duidelijke foutmeldingen', description: 'Richtlijnen voor duidelijke foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/duidelijk - labels - formulier - design - code' }, sidebar: 'richtlijnen', previous: { title: 'Fouten beschrijven', permalink: '/en/richtlijnen/formulieren/foutmeldingen/beschrijven' }, next: { title: 'Plaatsing foutmelding', permalink: '/en/richtlijnen/formulieren/foutmeldingen/plaatsing' } },
    h = {},
    v = [];
   function j(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(c, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j();
   }
  },
  44585: (e, n, l) => {
   l.d(n, { X: () => _ });
   var i = l(46506),
    o = l(4814),
    t = l(25585),
    s = l(40282),
    r = l(40678),
    d = l(85722),
    a = l(6374),
    c = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    g = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(i.Tg, { className: p['nlds-canvas__example-surface'], children: (0, g.jsx)(i.BB, { className: (0, o.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, g.jsx)(i.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(i.Tg, { className: p['nlds-canvas__example-surface'], children: (0, g.jsx)(i.BB, { className: (0, o.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(i.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   j.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: b = !0, children: f, container: y = 'document', language: x, designTokens: k } = e,
     w = 'function' == typeof f ? f() : f,
     N = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [D, S] = (0, c.useState)(Z),
     [z, C] = (0, c.useState)(_);
    (0, c.useEffect)(() => {
     (async () => {
      (D = await a.ZP.format(Z, { parser: x, plugins: [t.Z, s.ZP, r.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), S(D);
     })();
    }, [Z]);
    const F = (0, c.useId)();
    let E = c.Fragment;
    return (
     'paragraph' === y ? (E = h) : 'document' === y ? (E = v) : 'surface' === y && (E = j),
     (0, g.jsxs)('div', {
      className: (0, o.Z)(p['nlds-canvas']),
      children: [
       w && (0, g.jsx)('div', { className: (0, o.Z)(p['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(E, { children: (0, g.jsx)(i.pu, { children: w }) }) }) }),
       b &&
        (0, g.jsx)('div', {
         className: (0, o.Z)(p['nlds-canvas__toolbar']),
         children: (0, g.jsx)(i.zx, {
          className: (0, o.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           C(!z);
          },
          'aria-expanded': z,
          'aria-controls': F,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, g.jsxs)('div', {
         className: (0, o.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: F,
         hidden: !z,
         children: [
          (0, g.jsx)(m.u, { syntax: x, textContent: D, trim: !0 }),
          l &&
           (0, g.jsx)('div', {
            className: (0, o.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(i.zx, {
             className: (0, o.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(D).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, l) => {
   l.d(n, { u: () => r });
   var i = l(46506),
    o = l(12429);
   l(75271);
   const t = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
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
   var s = l(52676);
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: d } = e,
     a = r;
    return (
     d && (a = a.trim()),
     (0, s.jsx)(o.y$, {
      theme: t,
      code: a,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: t, getTokenProps: r } = e;
       return (0, s.jsx)(i.dn, { style: l, children: o.map((e, l) => (0, s.jsxs)('span', { ...t({ line: e }), children: [n && (0, s.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  33376: (e, n, l) => {
   l.d(n, { X: () => a });
   var i = l(74986),
    o = l(77380),
    t = l(46506),
    s = l(4814);
   l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var d = l(52676);
   const a = (e) => {
    let { title: n, appearance: l, description: a, children: c, figure: u } = e;
    const p = 'Doen',
     m = 'Niet doen',
     g = u ? 'figure' : 'div',
     h = u ? 'figcaption' : 'div';
    return (0, d.jsxs)(g, { className: (0, s.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(h, { className: (0, s.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.nv, { className: (0, s.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(i.Z, { className: r['nlds-guideline__icon'] }), (0, d.jsx)('span', { className: r['nlds-guideline__title'], children: m })] }), (0, d.jsx)(t.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.nv, { className: (0, s.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, d.jsx)('span', { className: r['nlds-guideline__title'], children: p })] }), (0, d.jsx)(t.nv, { children: n })] }), a] }), (0, d.jsx)('div', { className: (0, s.Z)(r['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => s });
   var i = l(75271);
   const o = {},
    t = i.createContext(o);
   function s(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
