'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45313],
 {
  9386(e, n, t) {
   t.d(n, { H: () => y });
   var l = t(95822),
    s = t(46447),
    r = t(13526),
    o = t(68148),
    a = t(9016),
    i = t(69303),
    c = t(91635),
    d = t(30734),
    p = t(30758),
    h = t(31186),
    u = t(65904),
    g = t.n(u),
    m = t(51627),
    v = t(86070);
   const j = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
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
        s = g().highlight(l, g().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, v.jsx)(m.n, { children: (0, v.jsx)(m.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: u = !0, children: g, container: m = 'document', language: y, designTokens: k }) => {
       const f = 'function' == typeof g ? g() : g,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || f),
        [z, N] = (0, p.useState)(w),
        [A, S] = (0, p.useState)(t);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [o.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const C = (0, p.useId)();
       let M = p.Fragment;
       return (
        'paragraph' === m ? (M = j) : 'document' === m ? (M = b) : 'surface' === m && (M = x),
        (0, v.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          f && (0, v.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, v.jsx)(M, { children: (0, v.jsx)(s.v$, { children: f }) }) }) }),
          u &&
           (0, v.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!A);
             },
             'aria-expanded': A,
             'aria-controls': C,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, v.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !A,
            children: [
             (0, v.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: z, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
  14300(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => m, metadata: () => l, toc: () => b }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/multistep/step-count/index","title":"Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt","description":"Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.","source":"@site/docs/richtlijnen/formulieren/multistep/1-step-count/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/1-step-count","slug":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","permalink":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/1-step-count/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt","title_sm":"Voortgang stappen tonen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Voortgang stappen tonen","pagination_label":"Voortgang stappen tonen","description":"Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.","slug":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"},"next":{"title":"Plaatsing voortgang stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang"}}');
   var s = t(86070),
    r = t(18439),
    o = t(78734),
    a = t(9386),
    i = t(88022);
   function c(e) {
    const n = { h2: 'h2', title: 'title', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Beschrijf in de titel in welke stap van welk formulier de gebruiker is. ', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, s.jsx)(a.H, { language: 'html', code: (0, s.jsx)(n.title, { children: 'Stap 2 van 3, uw gegevens - Gemeente voorbeeld' }), defaultCollapsed: !1 }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Voor elke (volgende) stap / dezelfde titel.', description: 'Met de titel bedoelen we hier het title-element. Bekijk de code voor een voorbeeld in HTML.', children: (0, s.jsx)(a.H, { language: 'html', code: (0, s.jsx)(n.title, { children: 'Contact opnemen - Gemeente voorbeeld' }), defaultCollapsed: !1 }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Stap in het kopje van het formulier.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('h2', { children: 'Stap 2 van 3, uw gegevens' }) }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('h2', { children: 'Uw gegevens' }), (0, s.jsx)('p', { children: 'Stap 2 van 3' })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Stap onder het kopje van het formulier.', description: 'Gebruik hgroup om het kopje en de stappen semantisch aan elkaar te koppelen.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('hgroup', { children: [(0, s.jsx)('h2', { children: 'Uw gegevens' }), (0, s.jsx)('p', { children: 'Stap 2 van 3' })] }) }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje.', description: 'En deze visueel op een andere regel plaatsen.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('h2', { children: [(0, s.jsx)('span', { class: 'exmaple-progress-indicator', children: 'Stap 2 van 3' }), 'Titel van de stap'] }) }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'In de HTML-code de stap boven het kopje van het formulier plaatsen.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: 'Stap 2 van 3' }), (0, s.jsx)('h2', { children: 'Uw gegevens' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'geef-aan-hoeveel-stappen-er-zijn-en-in-welke-stap-de-gebruiker-zich-bevindt', children: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als een formulier meerdere stappen heeft, is het in veel gevallen wenselijk dat een gebruiker weet in welke stap zij zich bevindt en hoeveel stappen er nog volgen. Dit kan duidelijkheid geven en onzekerheid bij de gebruiker verminderen, met name wanneer uit onderzoek blijkt dat hier behoefte aan is.' }), '\n', (0, s.jsxs)(n.p, { children: ['Een goed patroon in tekst hiervoor is bijvoorbeeld de tekst: ', (0, s.jsx)(n.strong, { children: 'Stap 2 van 6' }), ' of ', (0, s.jsx)(n.strong, { children: 'Vraag 2 van 6' }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'Voeg deze informatie toe op twee plekken:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['In de ', (0, s.jsx)(n.code, { children: '<title>' }), ' in de ', (0, s.jsx)(n.code, { children: '<head>' }), ' van de pagina.'] }), '\n', (0, s.jsx)(n.li, { children: 'Boven het formulier, bijvoorbeeld in het kopje van het formulier of vlak onder het kopje van het formulier.' }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Aanpassen van de ', (0, s.jsx)(n.code, { children: '<title>' }), ' in de ', (0, s.jsx)(n.code, { children: '<head>' }), ' geldt voor WCAG ook voor dynamisch gegenereerde formulieren en dus ook voor de verschillende stappen. Wanneer de gebruiker technisch gezien op dezelfde pagina blijft, en je met script de volgende formulierstap in beeld brengt, dan moet de paginatitel aangepast worden zodat die klopt bij de stap. Je kunt met script de titel aanpassen:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-js', children: 'document.title = "Stap 3 van 6: Adresgegevens";\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'De stappen kort uitschrijven als tekst heeft de voorkeur boven een visuele weergave zoals in een progressbar. Tekst schaalt beter mee bij vergroting of op mobiele weergave. Bovendien is het sneller te lezen en wordt het beter gevonden.' }), '\n', (0, s.jsxs)(n.p, { children: ['Lees hierover ', (0, s.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators', children: (0, s.jsx)('span', { lang: 'en', children: 'Using progress indicators' }) }), ' en ', (0, s.jsx)(n.a, { href: 'https://designnotes.blog.gov.uk/2014/07/07/do-less-problems-as-shared-spaces/', children: (0, s.jsx)('span', { lang: 'en', children: 'Do less' }) }), ' op GOV.UK.'] }), '\n', (0, s.jsx)(n.p, { children: "Op dit moment hebben we nog onvoldoende inzichten 'of', danwel 'hoe' dit patroon het best werkt bij formulieren waarbij het aantal stappen afhankelijk is van eerder gegeven antwoorden of gemaakte keuzes. Dit noemen we ook wel 'conditionele stappen'. We leren hier graag meer over op basis van gebruikersonderzoek en praktijkervaringen." }), '\n', (0, s.jsxs)(n.p, { children: ['Heb je inzichten of voorbeelden? Deel ze via de ', (0, s.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/369', children: "GitHub Discussion 'Voortgang indicatie - Meerstappenformulier'" }), ' of op [gebruikersonderzoeken.nl].'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Succescriterium 2.4.2 Paginatitel' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   const m = { title: 'Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt', title_sm: 'Voortgang stappen tonen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voortgang stappen tonen', pagination_label: 'Voortgang stappen tonen', description: 'Richtlijnen over aangeven hoeveel stappen er zijn en waar de gebruiker zich bevindt.', slug: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(g, {}), '\n', (0, s.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var l = t(30758);
   const s = {},
    r = l.createContext(s);
   function o(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => i, n: () => a });
   var l = t(13526),
    s = t(96345),
    r = t(37168),
    o = t(86070);
   const a = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: t, children: n.children });
    },
    i = ({ className: e, label: n, heading: t, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(s.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [t && (0, o.jsx)(r.D, { level: a, appearance: i, children: t }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => r });
   var l = t(86070),
    s = t(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => p, x: () => d });
   var l = t(4077),
    s = t(58315),
    r = t(46447),
    o = t(13526),
    a = t(45980),
    i = t(30758),
    c = t(86070);
   const d = (0, i.createContext)({}),
    p = ({ title: e, appearance: n, description: t, children: i, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      g = p ? 'figcaption' : 'div',
      m = 'string' == typeof t ? (0, c.jsx)(a.oz, { children: t }) : t;
     return (0, c.jsxs)(u, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(r.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    s = t(16194),
    r = t(30758),
    o = t(88022);
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
   var i = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: p, type: h } = (0, r.useContext)(o.x),
     u = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
