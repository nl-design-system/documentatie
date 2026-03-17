'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28631],
 {
  15638(e, n, t) {
   t.d(n, { $: () => h, x: () => c });
   var r = t(4077),
    o = t(58315),
    i = t(46447),
    a = t(13526),
    l = t(9547),
    s = t(30758),
    d = t(86070);
   const c = (0, s.createContext)({}),
    h = ({ title: e, appearance: n, description: t, children: s, figure: h }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = h ? 'figure' : 'div',
      m = h ? 'figcaption' : 'div',
      g = 'string' == typeof t ? (0, d.jsx)(l.oz, { children: t }) : t;
     return (0, d.jsxs)(u, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, d.jsx)(i.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, d.jsx)(i.fz, { children: e })] }), g] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: s }) })] });
    };
  },
  18080(e, n, t) {
   (t.r(n), t.d(n, { assets: () => f, contentTitle: () => v, default: () => x, frontMatter: () => b, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/content/README","title":"Gebruik alleen tekst in descriptions","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/2-content/README.mdx","sourceDirName":"richtlijnen/formulieren/description/2-content","slug":"/richtlijnen/formulieren/descriptions/inhoud","permalink":"/richtlijnen/formulieren/descriptions/inhoud","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-content/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik alleen tekst in descriptions","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Inhoud description","pagination_label":"Inhoud description","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","slug":"/richtlijnen/formulieren/descriptions/inhoud","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Koppel description","permalink":"/richtlijnen/formulieren/descriptions/koppelen"},"next":{"title":"Plaatsing description","permalink":"/richtlijnen/formulieren/descriptions/plaatsing"}}');
   var o = t(86070),
    i = t(18439),
    a = t(78734),
    l = t(58639),
    s = t(15638);
   function d(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(s.$, { appearance: 'dont', title: 'Een opsomming in een description.', children: (0, o.jsx)(l.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, o.jsxs)('div', { id: 'description-wachtwoord', children: [(0, o.jsx)('p', { children: 'Je wachtwoord moet de volgende elementen bevatten:' }), (0, o.jsxs)('ul', { children: [(0, o.jsx)('li', { children: 'Minimaal 9 karakters.' }), (0, o.jsx)('li', { children: 'Een hoofdletter.' }), (0, o.jsx)('li', { children: 'Een cijfer.' })] })] }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, o.jsx)(s.$, { appearance: 'do', title: 'Alleen tekst in een description.', children: (0, o.jsx)(l.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, o.jsx)('p', { id: 'description-wachtwoord', children: 'Je wachtwoord moet de volgende elementen bevatten: minimaal 9 karakters, een hoofdletter en een cijfer.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, o.jsx)(s.$, { appearance: 'do', title: 'Zet informatie in rich tekst boven het formulier en onder het bijbehorende kopje.', children: (0, o.jsx)(l.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('h3', { children: 'Open een spaarrekening' }), (0, o.jsx)('p', { children: 'Om een spaarrekening te openen hebben we de volgende gegevens nodig:' }), (0, o.jsxs)('ul', { children: [(0, o.jsx)('li', { children: 'Het nummer van je paspoort of identiteitskaart.' }), (0, o.jsx)('li', { children: 'Je Burgerservicenummer (BSN), dit kun je vinden op je paspoort of identiteitskaart.' }), (0, o.jsx)('li', { children: 'Je adresgegevens.' }), (0, o.jsx)('li', { children: 'Je e-mailadres.' })] }), (0, o.jsx)('form', { children: '[het formulier]' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var h = t(73058);
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'gebruik-alleen-tekst-in-descriptions', children: 'Gebruik alleen tekst in descriptions' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'aria-describedby' }), ", waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis."] }), '\n', (0, o.jsxs)(n.p, { children: ['Opgemaakte tekst noemen we ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/289', children: "'rich text'" }), '. ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op' }), ': NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van ', (0, o.jsx)(n.strong, { children: 'essenti\xeble informatie' }), '. Zie de discussie over ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/298', children: 'Toggletip' }), ' op GitHub.'] }), '\n', (0, o.jsx)(n.h2, { id: 'demo-video', children: 'Demo video' }), '\n', (0, o.jsx)(n.p, { children: 'In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.' }), '\n', (0, o.jsx)(h.L, { id: 'ejiB-JSJzPE', title: 'Demo video opsomming uit de description in VoiceOver' }), '\n', (0, o.jsx)(n.h2, { id: 'description-beslisboom', children: 'Description-beslisboom' }), '\n', (0, o.jsx)(n.p, { children: 'Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?\nVolg de beslisboom.' }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', children: 'Vraag 1: Gaat de informatie over alle formuliervelden?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 2.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', children: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Een enkel veld' }), ': Ga naar vraag 3a.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Een groep velden' }), ': Ga naar vraag 4a.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', children: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 3b.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', children: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', children: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description gekoppelt aan de ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: (0, o.jsx)(n.code, { children: '<fieldset>' }) }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 4b.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', children: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier van de betreffende stap staat.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat \xe0lle gebruikers de informatie kunnen lezen.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Gebruik alleen tekst in descriptions', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    f = {},
    j = [{ value: 'Demo video', id: 'demo-video', level: 2 }, { value: 'Description-beslisboom', id: 'description-beslisboom', level: 2 }, { value: 'Vraag 1: Gaat de informatie over alle formuliervelden?', id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', level: 3 }, { value: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?', id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', level: 3 }, { value: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?', id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', level: 3 }, { value: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?', id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', level: 3 }, { value: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?', id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', level: 3 }, { value: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?', id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(g, {}), '\n', (0, o.jsx)(a.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => l });
   var r = t(30758);
   const o = {},
    i = r.createContext(o);
   function a(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), r.createElement(i.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, t) {
   t.d(n, { H: () => v });
   var r = t(69284),
    o = t(46447),
    i = t(13526),
    a = t(68148),
    l = t(9016),
    s = t(69303),
    d = t(91635),
    c = t(30734),
    h = t(30758),
    p = t(31186),
    u = t(86070);
   const m = ({ children: e }) => (0, u.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, u.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, u.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const v = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: v = !0, children: f, container: j = 'document', language: y, designTokens: x }) => {
    const k = 'function' == typeof f ? f() : f,
     w = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : p.qV(w || k),
     [N, C] = (0, h.useState)(_),
     [S, z] = (0, h.useState)(t);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(_, { parser: y, plugins: [a.A, l.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [_]);
    const A = (0, h.useId)();
    let E = h.Fragment;
    return (
     'paragraph' === j ? (E = m) : 'document' === j ? (E = g) : 'surface' === j && (E = b),
     (0, u.jsxs)('div', {
      className: (0, i.A)('nlds-canvas'),
      children: [
       k && (0, u.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, u.jsx)(E, { children: (0, u.jsx)(o.v$, { children: k }) }) }) }),
       v &&
        (0, u.jsx)('div', {
         className: (0, i.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(o.$n, {
          className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           z(!S);
          },
          'aria-expanded': S,
          'aria-controls': A,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, u.jsxs)('div', {
         className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: A,
         hidden: !S,
         children: [
          (0, u.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(o.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, t) {
   t.d(n, { M: () => d });
   var r = t(46447),
    o = t(16194),
    i = t(30758),
    a = t(15638);
   const l = {
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
    const { title: h, type: p } = (0, i.useContext)(a.x),
     u = (0, i.useId)();
    return (d && (c = c.trim()), (0, s.jsx)(o.f4, { theme: l, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: i }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, s.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, s.jsxs)('span', { ...o({ line: n }), children: [e && (0, s.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  73058(e, n, t) {
   t.d(n, { L: () => s });
   var r = t(86070),
    o = t(30758);
   const i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function a(e, n, t, r, o) {
    const i = { '@context': 'https://schema.org', '@type': 'VideoObject', name: o?.name || n, thumbnailUrl: [o?.thumbnailUrl || t], embedUrl: o?.embedUrl || `${r}/embed/${e}`, contentUrl: o?.contentUrl || `https://www.youtube.com/watch?v=${e}`, ...(o?.description && { description: o.description }), ...(o?.uploadDate && { uploadDate: o.uploadDate }), ...(o?.duration && { duration: o.duration }) };
    return JSON.stringify(i);
   }
   const l = o.forwardRef(function (e, n) {
     const [t, l] = o.useState(!1),
      [s, d] = o.useState(e.alwaysLoadIframe || !1),
      c = encodeURIComponent(e.id),
      h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
      p = e.title,
      u = e.poster || 'hqdefault',
      m = e.announce || 'Watch',
      g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
      b = o.useMemo(() => {
       const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(g ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.enableJsApi && typeof window < 'u' ? { origin: window.location.origin } : {}), ...(e.playlist ? { list: c } : {}) });
       return (
        e.params &&
         new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
          n.append(t, e);
         }),
        n
       );
      }, [e.muted, g, e.enableJsApi, e.playlist, c, e.params]),
      v = o.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
      f = o.useMemo(() => (e.playlist ? `${v}/embed/videoseries?${b.toString()}` : `${v}/embed/${c}?${b.toString()}`), [e.playlist, v, c, b]),
      j = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
      y = e.webp ? 'webp' : 'jpg',
      x = e.webp ? 'vi_webp' : 'vi',
      k = j
       ? ((e, n, t, r = 'maxresdefault') => {
          const [a, l] = (0, o.useState)('');
          return (
           (0, o.useEffect)(() => {
            const o = `https://img.youtube.com/${n}/${e}/${r}.${t}`,
             a = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
             s = i[r],
             d = new Image();
            ((d.onload = () => {
             d.width < s ? l(a) : l(o);
            }),
             (d.onerror = () => l(a)),
             (d.src = o));
           }, [e, n, t, r]),
           a
          );
         })(e.id, x, y, u)
       : null,
      w = o.useMemo(() => e.thumbnail || k || `https://i.ytimg.com/${x}/${e.playlist ? h : c}/${u}.${y}`, [e.thumbnail, k, x, e.playlist, h, c, u, y]),
      _ = e.activatedClass || 'lyt-activated',
      N = e.adNetwork || !1,
      C = e.aspectHeight || 9,
      S = e.aspectWidth || 16,
      z = e.iframeClass || '',
      A = e.playerClass || 'lty-playbtn',
      E = e.wrapperClass || 'yt-lite',
      $ = o.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
      R = e.rel ? 'prefetch' : 'preload',
      P = e.containerElement || 'article',
      I = !1 !== e.noscriptFallback,
      L = () => {
       s || d(!0);
      };
     return (
      o.useEffect(() => {
       s && ($(), e.focusOnLoad && 'object' == typeof n && n?.current && n.current.focus());
      }, [s, $, e.focusOnLoad, n]),
      o.useEffect(() => {
       if (!s || !e.enableJsApi || !(e.onReady || e.onStateChange || e.onError || e.onPlay || e.onPause || e.onEnd || e.onBuffering || e.onPlaybackRateChange || e.onPlaybackQualityChange)) return;
       let t = !1,
        r = !1;
       const o = (r) => {
        if ('https://www.youtube.com' !== r.origin && 'https://www.youtube-nocookie.com' !== r.origin) return;
        let o;
        try {
         o = 'string' == typeof r.data ? JSON.parse(r.data) : r.data;
        } catch {
         return;
        }
        switch (o.event) {
         case 'onReady':
          t || ((t = !0), e.onReady && e.onReady({ videoId: e.id, title: p }));
          break;
         case 'infoDelivery':
          if (void 0 !== o.info?.playerState) {
           const t = o.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: o.info.currentTime, duration: o.info.duration }), t)) {
            case 1:
             e.onPlay?.();
             break;
            case 2:
             e.onPause?.();
             break;
            case 0:
             (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
             break;
            case 3:
             e.onBuffering?.();
           }
          }
          (void 0 !== o.info?.playbackRate && e.onPlaybackRateChange?.(o.info.playbackRate), void 0 !== o.info?.playbackQuality && e.onPlaybackQualityChange?.(o.info.playbackQuality));
          break;
         case 'onStateChange':
          if (void 0 !== o.info?.playerState) {
           const t = o.info.playerState;
           switch ((e.onStateChange && e.onStateChange({ state: t, currentTime: o.info.currentTime, duration: o.info.duration }), t)) {
            case 1:
             e.onPlay?.();
             break;
            case 2:
             e.onPause?.();
             break;
            case 0:
             (e.onEnd?.(), e.stopOnEnd && 'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'));
             break;
            case 3:
             e.onBuffering?.();
           }
          }
          break;
         case 'onError':
          if (o.info && 'errorCode' in o.info) {
           const n = o.info.errorCode;
           e.onError && e.onError(n);
          }
          break;
         case 'onPlaybackRateChange':
          void 0 !== o.info?.playbackRate && e.onPlaybackRateChange?.(o.info.playbackRate);
          break;
         case 'onPlaybackQualityChange':
          void 0 !== o.info?.playbackQuality && e.onPlaybackQualityChange?.(o.info.playbackQuality);
        }
       };
       window.addEventListener('message', o);
       const i = [],
        a = () => {
         'object' == typeof n && n?.current?.contentWindow && n.current.contentWindow.postMessage('{"event":"listening","id":"' + c + '"}', '*');
        },
        l = () => {
         r ||
          ((r = !0),
          a(),
          [100, 300, 600, 1200, 2400].forEach((e) => {
           i.push(setTimeout(a, e));
          }));
        };
       return (
        'object' == typeof n && n?.current
         ? (n.current.addEventListener('load', l), 'complete' === n.current.contentDocument?.readyState && l())
         : [200, 500, 1e3, 2e3, 3e3].forEach((e) => {
            i.push(setTimeout(a, e));
           }),
        () => {
         (window.removeEventListener('message', o), i.forEach(clearTimeout), 'object' == typeof n && n?.current && n.current.removeEventListener('load', l));
        }
       );
      }, [s, e.enableJsApi, e.onReady, e.onStateChange, e.onError, e.onPlay, e.onPause, e.onEnd, e.onBuffering, e.onPlaybackRateChange, e.onPlaybackQualityChange, e.stopOnEnd, e.id, c, p, n]),
      (0, r.jsxs)(r.Fragment, {
       children: [
        !e.lazyLoad && (0, r.jsx)('link', { rel: R, href: w, as: 'image' }),
        (0, r.jsx)(r.Fragment, { children: t && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('link', { rel: 'preconnect', href: v }), (0, r.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), N && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, r.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
        e.seo && !e.playlist && (0, r.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: a(e.id, p, w, v, e.seo) } }),
        I && !e.playlist && (0, r.jsx)('noscript', { children: (0, r.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
        (0, r.jsxs)(P, {
         onPointerOver: () => {
          t || l(!0);
         },
         onClick: L,
         className: `${E} ${s ? _ : ''}`,
         'data-title': p,
         role: s || e.lazyLoad ? void 0 : 'img',
         'aria-label': s ? void 0 : `${p} - YouTube video preview`,
         style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (C / S) * 100 + '%', ...(e.style || {}) },
         children: [e.lazyLoad && !s && (0, r.jsx)('img', { src: w, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), e.playlist && !s && (0, r.jsx)('div', { className: 'lty-playlist-icon', 'aria-hidden': 'true' }), !(e.hideButtonOnActivate && s) && (0, r.jsx)('button', { type: 'button', className: A, 'aria-label': `${m} ${p}`, 'aria-hidden': s || void 0, tabIndex: s ? -1 : 0, onClick: L, children: (0, r.jsx)('span', { className: 'lty-visually-hidden', children: m }) }), s && (0, r.jsx)('iframe', { ref: n, className: z, title: p, width: '560', height: '315', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: f, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
        }),
       ],
      })
     );
    }),
    s = ({ id: e, title: n, ...t }) => (0, r.jsx)(l, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: n, poster: 'maxresdefault', ...t });
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => i });
   var r = t(86070),
    o = t(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
