'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [45010],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var l = t(52676),
    o = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  64598: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => u, default: () => b, frontMatter: () => h, metadata: () => g, toc: () => m });
   var l = t(52676),
    o = t(40139),
    r = t(66968),
    s = t(43599),
    a = t(40761);
   function i(e) {
    const n = { h2: 'h2', hgroup: 'hgroup', p: 'p', span: 'span', title: 'title', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(a.X, { appearance: 'do', title: 'Beschrijf in de titel in welke stap van welk formulier de gebruiker is. ', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, l.jsx)(s.X, { language: 'html', code: (0, l.jsx)(n.title, { children: 'Stap 2 van 3, uw gegevens - Gemeente voorbeeld' }), defaultCollapsed: !1 }) }), '\n', (0, l.jsx)(a.X, { appearance: 'dont', title: 'Voor elke (volgende) stap / dezelfde titel.', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, l.jsx)(s.X, { language: 'html', code: (0, l.jsx)(n.title, { children: 'Contact opnemen - Gemeente voorbeeld' }), defaultCollapsed: !1 }) }), '\n', (0, l.jsx)(a.X, { appearance: 'do', title: 'Stap in het kopje van het formulier.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.h2, { children: 'Stap 2 van 3, uw gegevens' }) }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { children: 'Uw gegevens' }), (0, l.jsx)(n.p, { children: 'Stap 2 van 3' })] }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', description: 'Gebruik hgroup om het kopje en de stappen semantisch aan elkaar te koppelen.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.hgroup, { children: [(0, l.jsx)(n.h2, { children: 'Uw gegevens' }), (0, l.jsx)(n.p, { children: 'Stap 2 van 3' })] }) }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje.', description: 'En deze visueel op een andere regel plaatsen.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.h2, { children: [(0, l.jsx)(n.span, { class: 'progress-indicator', children: 'Stap 2 van 3' }), 'Titel van de stap'] }) }) }) }), '\n', (0, l.jsx)(a.X, { appearance: 'dont', title: 'In de HTML-code de stap boven het kopje van het formulier plaatsen.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.p, { children: 'Stap 2 van 3' }), (0, l.jsx)(n.h2, { children: 'Uw gegevens' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'geef-aan-hoeveel-stappen-er-zijn-en-in-welke-stap-de-gebruiker-zich-bevindt', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }), '\n', (0, l.jsx)(n.p, { children: 'Als een formulier meerdere stappen heeft, is het noodzakelijk dat een gebruiker weet in welke stap ze zich bevindt en hoeveel stappen er nog volgen. Dit geeft duidelijkheid en voorkomt onzekerheid bij de gebruiker.' }), '\n', (0, l.jsxs)(n.p, { children: ['Een goed patroon in tekst hiervoor is bijvoorbeeld de tekst: ', (0, l.jsx)(n.strong, { children: 'Stap 2 van 6' }), ' of ', (0, l.jsx)(n.strong, { children: 'Vraag 2 van 6' }), '.'] }), '\n', (0, l.jsx)(n.p, { children: 'Voeg deze informatie toe op twee plekken:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['In de ', (0, l.jsx)(n.code, { children: '<title>' }), ' in de ', (0, l.jsx)(n.code, { children: '<head>' }), ' van de pagina.'] }), '\n', (0, l.jsx)(n.li, { children: 'Boven het formulier, bijvoorbeeld in het kopje van het formulier of vlak onder het kopje van het formulier.' }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: ['Aanpassen van de ', (0, l.jsx)(n.code, { children: '<title>' }), ' in de ', (0, l.jsx)(n.code, { children: '<head>' }), ' geldt voor WCAG ook voor dynamisch gegenereerde formulieren en dus ook voor de verschillende stappen. Wanneer de gebruiker technisch gezien op dezelfde pagina blijft, en je met script de volgende formulierstap in beeld brengt, dan moet de paginatitel aangepast worden zodat die klopt bij de stap. Je kunt met script de titel aanpassen:'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-js', children: 'document.title = "Stap 3 van 6: Adresgegevens";\n' }) }), '\n', (0, l.jsx)(n.p, { children: 'De stappen kort uitschrijven als tekst heeft de voorkeur boven een visuele weergave zoals in een progressbar. Tekst schaalt beter mee bij vergroting of op mobiele weergave. Bovendien is het sneller te lezen en wordt het beter gevonden.' }), '\n', (0, l.jsxs)(n.p, { children: ['Lees hierover ', (0, l.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators', children: (0, l.jsx)('span', { lang: 'en', children: 'Using progress indicators' }) }), ' en ', (0, l.jsx)(n.a, { href: 'https://designnotes.blog.gov.uk/2014/07/07/do-less-problems-as-shared-spaces/', children: (0, l.jsx)('span', { lang: 'en', children: 'Do less' }) }), ' op GOV.UK.'] }), '\n', (0, l.jsx)(n.p, { children: 'Het duidelijk aangeven van het aantal stappen en de huidige locatie binnen de stappen is nodig om te voldoen de WCAG-succescriteria:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/1.3.2', children: '1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/2.4.2', children: '2.4.2 Paginatitel' }), ' (niveau A), deze richtlijn geldt ook voor dynamische pagina\u2019s.'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/3.2.3', children: '3.2.3 Consistente navigatie' }), ' (niveau AA)'] }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voortgang stappen tonen', pagination_label: 'Voortgang stappen tonen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    g = { id: 'richtlijnen/formulieren/multistep/step-count/README', title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', source: '@site/docs/richtlijnen/formulieren/multistep/1-step-count/README.mdx', sourceDirName: 'richtlijnen/formulieren/multistep/1-step-count', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', permalink: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/1-step-count/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voortgang stappen tonen', pagination_label: 'Voortgang stappen tonen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Meerdere stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/' }, next: { title: 'Plaatsing voortgang stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang' } },
    v = {},
    m = [];
   function j(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(c, {}), '\n', (0, l.jsx)(r.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(j, { ...e }) }) : j();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => j });
   var l = t(41179),
    o = t(16167),
    r = t(4814),
    s = t(64642),
    a = t(93872),
    i = t(86017),
    c = t(48231),
    d = t(75119),
    p = t(75271),
    h = t(60027),
    u = t(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   m.displayName = 'SurfaceContainer';
   const j = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: j = !1, displayCode: b = !0, children: x, container: y = 'document', language: k, designTokens: f } = e;
    const _ = 'function' == typeof x ? x() : x,
     w = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : h.uS(w || _),
     [N, C] = (0, p.useState)(z),
     [S, Z] = (0, p.useState)(j);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(z, { parser: k, plugins: [s.Z, a.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [z]);
    const X = (0, p.useId)();
    let M = p.Fragment;
    return (
     'paragraph' === y ? (M = g) : 'document' === y ? (M = v) : 'surface' === y && (M = m),
     (0, u.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, u.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, u.jsx)(M, { children: (0, u.jsx)(o.pu, { children: _ }) }) }) }),
       b &&
        (0, u.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(o.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           Z(!S);
          },
          'aria-expanded': S,
          'aria-controls': X,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, u.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: X,
         hidden: !S,
         children: [
          (0, u.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: N, trim: !0 }),
          t &&
           (0, u.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(o.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => c });
   var l = t(16167),
    o = t(60648),
    r = t(75271),
    s = t(40761);
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
   var i = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     p = c;
    const { title: h, type: u } = (0, r.useContext)(s.n),
     g = (0, r.useId)();
    return (
     d && (p = p.trim()),
     (0, i.jsx)(o.y$, {
      theme: a,
      code: p,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: r, getTokenProps: s } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(l.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': g, style: t, children: o.map((e, t) => (0, i.jsxs)('span', { ...r({ line: e }), children: [n && (0, i.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var l = t(69244),
    o = t(20061),
    r = t(16167),
    s = t(4814),
    a = t(75271),
    i = t(52676);
   const c = (0, a.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: a, children: d, figure: p } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      g = p ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(r.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(r.nv, { children: n })] }), a] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: n, type: h[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => s });
   var l = t(75271);
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
