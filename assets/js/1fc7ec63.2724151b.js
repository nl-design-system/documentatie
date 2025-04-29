'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [59939],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var s = t(52676),
    o = t(40139);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  73202: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => i, default: () => h, frontMatter: () => d, metadata: () => c, toc: () => k });
   var s = t(52676),
    o = t(40139),
    l = t(43599),
    r = t(40761),
    a = t(66968);
   const d = { title: 'Tekst benadrukken \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst benadrukken', pagination_label: 'Tekst benadrukken', description: 'Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.', slug: '/richtlijnen/content/tekstopmaak/tekst-benadrukken', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'dikgedrukt', 'schuingedrukt', 'strong', 'em', 'bold', 'italic'] },
    i = 'Tekst benadrukken',
    c = { id: 'richtlijnen/content/tekstopmaak/emphasize-text', title: 'Tekst benadrukken \xb7 Content \xb7 Richtlijnen', description: 'Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.', source: '@site/docs/richtlijnen/content/tekstopmaak/emphasize-text.md', sourceDirName: 'richtlijnen/content/tekstopmaak', slug: '/richtlijnen/content/tekstopmaak/tekst-benadrukken', permalink: '/richtlijnen/content/tekstopmaak/tekst-benadrukken', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/emphasize-text.md', tags: [], version: 'current', frontMatter: { title: 'Tekst benadrukken \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst benadrukken', pagination_label: 'Tekst benadrukken', description: 'Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.', slug: '/richtlijnen/content/tekstopmaak/tekst-benadrukken', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'dikgedrukt', 'schuingedrukt', 'strong', 'em', 'bold', 'italic'] }, sidebar: 'richtlijnen', previous: { title: 'Content', permalink: '/richtlijnen/content/tekstopmaak' }, next: { title: 'Koppen', permalink: '/richtlijnen/content/tekstopmaak/koppen' } },
    u = {},
    k = [
     { value: 'Dikgedrukt en schuingedrukt', id: 'dikgedrukt-en-schuingedrukt', level: 2 },
     { value: 'ALL CAPS-tekst', id: 'all-caps-tekst', level: 2 },
     { value: 'Onderstrepen', id: 'onderstrepen', level: 2 },
     { value: 'Voorbeelden', id: 'voorbeelden', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', li: 'li', p: 'p', strong: 'strong', u: 'u', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'tekst-benadrukken', children: 'Tekst benadrukken' }), '\n', (0, s.jsx)(n.p, { children: 'Het kan heel goed zijn om tekst te benadrukken. Doe dat dan wel op een toegankelijke manier, zodat alle bezoekers er baat bij hebben.' }), '\n', (0, s.jsx)(n.h2, { id: 'dikgedrukt-en-schuingedrukt', children: 'Dikgedrukt en schuingedrukt' }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt woorden of zinsdelen benadrukken door ze vet of schuingedrukt te maken.' }), '\n', (0, s.jsxs)(n.p, { children: ['Bij goed gebruik van een CMS wordt de vette of schuingedrukte tekst in ', (0, s.jsx)(n.a, { href: '/strong', children: (0, s.jsx)(n.code, { children: 'strong' }) }), ' en ', (0, s.jsx)(n.code, { children: 'em' }), ' elementen geplaatst. Met deze elementen in de code is de nadruk ook duidelijk voor gebruikers van hulptechnologie.'] }), '\n', (0, s.jsx)(n.p, { children: "Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om met knoppen vette of schuingedrukte tekst toe te voegen. Vaak hebben de knoppen voor vette tekst of schuingedrukte tekst de letter B (bold) of I (italic)." }), '\n', (0, s.jsx)(n.p, { children: 'Door deze knoppen in een CMS te gebruiken, verander je de visuele opmaak \xe9n de onderliggende code.' }), '\n', (0, s.jsx)(n.h2, { id: 'all-caps-tekst', children: 'ALL CAPS-tekst' }), '\n', (0, s.jsx)(n.p, { children: 'Probeer het gebruik van \u2018ALL CAPS\u2019 tot een minimum te beperken. We herkennen letters aan hun vorm en dan met name de bovenkant van een letter. Eigenlijk maakt je oog steeds sprongetjes aan de bovenkant van een woord. Bij all caps is het onderscheid in lettervorm minder duidelijk, dit vertraagt het lezen.' }), '\n', (0, s.jsx)(n.p, { children: 'Als je in de HTML all caps gebruikt lezen screenreaders dit vaak voor als losse letters. Geen probleem bij bijvoorbeeld FBI of NBA maar bij VOORNAAM of NIEUWS wordt dat wel heel vreemd.' }), '\n', (0, s.jsx)(n.p, { children: 'Daarnaast geeft het ook een gevoel van \u2018schreeuwen\u2019. Over het algemeen niet het gevoel dat je wilt overbrengen op de lezer toch\u2026 TOCH?!' }), '\n', (0, s.jsx)(n.h2, { id: 'onderstrepen', children: 'Onderstrepen' }), '\n', (0, s.jsx)(n.p, { children: 'Onderstreep tekst niet. Bezoekers verwachten dat onderstreepte woorden in een zin links zijn waar ze op kunnen klikken.' }), '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'vette tekst gebruiken om een deel van de zin extra belangrijk te maken.', children: (0, s.jsx)(l.X, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(n.p, { children: ['Je kunt op eigen gelegenheid oversteken. ', (0, s.jsx)(n.strong, { children: 'Pas op!' }), ' Dit is ', (0, s.jsx)(n.strong, { children: 'erg gevaarlijk' })] }) }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'schuingedrukte tekst gebruiken om de betekenis van de zin aan te passen.', children: (0, s.jsx)(l.X, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.em, { children: 'Moet' }), ' ik dit nu doen? of Moet ', (0, s.jsx)(n.em, { children: 'ik' }), ' dit nu doen?'] }) }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'dont', title: 'Hele alinea vet maken omdat je dat mooier vindt.', children: (0, s.jsx)(l.X, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(n.p, { children: (0, s.jsx)(n.strong, { children: 'Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. De neptekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een neptekst gaat, lezen ze toch door.' }) }) }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'dont', title: 'Tekst onderstrepen', children: (0, s.jsx)(l.X, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(n.p, { children: ['Gebruik geen ', (0, s.jsx)(n.u, { children: 'underline' }), '. Bezoekers verwachten dat onderstreepte tekst een ', (0, s.jsx)(n.a, { href: '', children: 'link' }), ' is.'] }) }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n'] }), '\n', (0, s.jsx)(a.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => b });
   var s = t(41179),
    o = t(16167),
    l = t(4814),
    r = t(64642),
    a = t(93872),
    d = t(86017),
    i = t(48231),
    c = t(75119),
    u = t(75271),
    k = t(60027),
    p = t(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   m.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: b = !1, displayCode: v = !0, children: j, container: x = 'document', language: y, designTokens: f } = e;
    const _ = 'function' == typeof j ? j() : j,
     z = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     w = 'string' == typeof n ? n : k.uS(z || _),
     [C, N] = (0, u.useState)(w),
     [S, Z] = (0, u.useState)(b);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(w, { parser: y, plugins: [r.Z, a.ZP, d.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const T = (0, u.useId)();
    let L = u.Fragment;
    return (
     'paragraph' === x ? (L = h) : 'document' === x ? (L = m) : 'surface' === x && (L = g),
     (0, p.jsxs)('div', {
      className: (0, l.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, l.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(L, { children: (0, p.jsx)(o.pu, { children: _ }) }) }) }),
       v &&
        (0, p.jsx)('div', {
         className: (0, l.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(o.zx, {
          className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           Z(!S);
          },
          'aria-expanded': S,
          'aria-controls': T,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, p.jsxs)('div', {
         className: (0, l.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: T,
         hidden: !S,
         children: [
          (0, p.jsx)(s.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: C, trim: !0 }),
          t &&
           (0, p.jsx)('div', {
            className: (0, l.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(o.zx, {
             className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, t) => {
   t.d(n, { u: () => i });
   var s = t(16167),
    o = t(60648),
    l = t(75271),
    r = t(40761);
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
   var d = t(52676);
   function i(e) {
    let { lineNumber: n, syntax: t, textContent: i, trim: c } = e,
     u = i;
    const { title: k, type: p } = (0, l.useContext)(r.n),
     h = (0, l.useId)();
    return (
     c && (u = u.trim()),
     (0, d.jsx)(o.y$, {
      theme: a,
      code: u,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: l, getTokenProps: r } = e;
       return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', k ? ': ' : ' ', k] }), (0, d.jsx)(s.dn, { tabIndex: 0, role: k ? 'region' : void 0, 'aria-labelledby': h, style: t, children: o.map((e, t) => (0, d.jsxs)('span', { ...l({ line: e }), children: [n && (0, d.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, d.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => c, n: () => i });
   var s = t(69244),
    o = t(20061),
    l = t(16167),
    r = t(4814),
    a = t(75271),
    d = t(52676);
   const i = (0, a.createContext)({}),
    c = (e) => {
     let { title: n, appearance: t, description: a, children: c, figure: u } = e;
     const k = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, d.jsxs)(p, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, d.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: k.dont })] }), (0, d.jsx)(l.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, d.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: k.do })] }), (0, d.jsx)(l.nv, { children: n })] }), a] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(i.Provider, { value: { title: n, type: k[t] }, children: c }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => r });
   var s = t(75271);
   const o = {},
    l = s.createContext(o);
   function r(e) {
    const n = s.useContext(l);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), s.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
