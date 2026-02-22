'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28631],
 {
  4258(e, n, r) {
   r.d(n, { L: () => l });
   var t = r(78236),
    i = r(86070);
   const l = ({ id: e, title: n, ...r }) => (0, i.jsx)(t.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...r });
  },
  15638(e, n, r) {
   r.d(n, { $: () => c, x: () => d });
   var t = r(4077),
    i = r(58315),
    l = r(46447),
    o = r(13526),
    s = r(30758),
    a = r(86070);
   const d = (0, s.createContext)({}),
    c = ({ title: e, appearance: n, description: r, children: s, figure: c }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = c ? 'figure' : 'div',
      u = c ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(l.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(l.fz, { children: e })] }), r] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: s }) })] });
    };
  },
  18080(e, n, r) {
   (r.r(n), r.d(n, { assets: () => b, contentTitle: () => j, default: () => y, frontMatter: () => g, metadata: () => t, toc: () => f }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/description/content/README","title":"Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/2-content/README.mdx","sourceDirName":"richtlijnen/formulieren/description/2-content","slug":"/richtlijnen/formulieren/descriptions/inhoud","permalink":"/richtlijnen/formulieren/descriptions/inhoud","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-content/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Inhoud description","pagination_label":"Inhoud description","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","slug":"/richtlijnen/formulieren/descriptions/inhoud","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Koppel description","permalink":"/richtlijnen/formulieren/descriptions/koppelen"},"next":{"title":"Plaatsing description","permalink":"/richtlijnen/formulieren/descriptions/plaatsing"}}');
   var i = r(86070),
    l = r(18439),
    o = r(78734),
    s = r(58639),
    a = r(15638);
   function d(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(a.$, { appearance: 'dont', title: 'Een opsomming in een description.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('p', { children: (0, i.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, i.jsxs)('div', { id: 'description-wachtwoord', children: [(0, i.jsx)('p', { children: 'Je wachtwoord moet de volgende elementen bevatten:' }), (0, i.jsxs)('ul', { children: [(0, i.jsx)('li', { children: 'Minimaal 9 karakters.' }), (0, i.jsx)('li', { children: 'Een hoofdletter.' }), (0, i.jsx)('li', { children: 'Een cijfer.' })] })] }), (0, i.jsx)('p', { children: (0, i.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'do', title: 'Alleen tekst in een description.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('p', { children: (0, i.jsx)('label', { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }) }), (0, i.jsx)('p', { id: 'description-wachtwoord', children: 'Je wachtwoord moet de volgende elementen bevatten: minimaal 9 karakters, een hoofdletter en een cijfer.' }), (0, i.jsx)('p', { children: (0, i.jsx)('input', { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' }) })] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'do', title: 'Zet informatie in rich tekst boven het formulier en onder het bijbehorende kopje.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)('h3', { children: 'Open een spaarrekening' }), (0, i.jsx)('p', { children: 'Om een spaarrekening te openen hebben we de volgende gegevens nodig:' }), (0, i.jsxs)('ul', { children: [(0, i.jsx)('li', { children: 'Het nummer van je paspoort of identiteitskaart.' }), (0, i.jsx)('li', { children: 'Je Burgerservicenummer (BSN), dit kun je vinden op je paspoort of identiteitskaart.' }), (0, i.jsx)('li', { children: 'Je adresgegevens.' }), (0, i.jsx)('li', { children: 'Je e-mailadres.' })] }), (0, i.jsx)('form', { children: '[het formulier]' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
   var h = r(4258);
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'gebruik-alleen-tekst-in-descriptions', children: 'Gebruik alleen tekst in descriptions' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'aria-describedby' }), ", waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis."] }), '\n', (0, i.jsxs)(n.p, { children: ['Opgemaakte tekst noemen we ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/289', children: "'rich text'" }), '. ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van ', (0, i.jsx)(n.strong, { children: 'essenti\xeble informatie' }), '. Zie de discussie over ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/298', children: 'Toggletip' }), ' op GitHub.'] }), '\n', (0, i.jsx)(n.h2, { id: 'demo-video', children: 'Demo video' }), '\n', (0, i.jsx)(n.p, { children: 'In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.' }), '\n', (0, i.jsx)(h.L, { id: 'ejiB-JSJzPE', title: 'Demo video opsomming uit de description in VoiceOver' }), '\n', (0, i.jsx)(n.h2, { id: 'description-beslisboom', children: 'Description-beslisboom' }), '\n', (0, i.jsx)(n.p, { children: 'Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?\nVolg de beslisboom.' }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', children: 'Vraag 1: Gaat de informatie over alle formuliervelden?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 2.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', children: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Een enkel veld' }), ': Ga naar vraag 3a.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Een groep velden' }), ': Ga naar vraag 4a.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', children: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 3b.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', children: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', children: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description gekoppelt aan de ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: (0, i.jsx)(n.code, { children: '<fieldset>' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 4b.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', children: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier van de betreffende stap staat.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat \xe0lle gebruikers de informatie kunnen lezen.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    b = {},
    f = [{ value: 'Demo video', id: 'demo-video', level: 2 }, { value: 'Description-beslisboom', id: 'description-beslisboom', level: 2 }, { value: 'Vraag 1: Gaat de informatie over alle formuliervelden?', id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', level: 3 }, { value: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?', id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', level: 3 }, { value: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?', id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', level: 3 }, { value: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?', id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', level: 3 }, { value: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?', id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', level: 3 }, { value: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?', id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function x(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(u, {}), '\n', (0, i.jsx)(c, {}), '\n', (0, i.jsx)(v, {}), '\n', (0, i.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x();
   }
  },
  18439(e, n, r) {
   r.d(n, { R: () => o, x: () => s });
   var t = r(30758);
   const i = {},
    l = t.createContext(i);
   function o(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(l.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, r) {
   r.d(n, { H: () => j });
   var t = r(69284),
    i = r(46447),
    l = r(13526),
    o = r(68148),
    s = r(9016),
    a = r(69303),
    d = r(91635),
    c = r(30734),
    h = r(30758),
    p = r(31186),
    u = r(86070);
   const m = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(i.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(i.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: j = !0, children: b, container: f = 'document', language: x, designTokens: y }) => {
    const k = 'function' == typeof b ? b() : b,
     w = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : p.qV(w || k),
     [N, z] = (0, h.useState)(_),
     [A, $] = (0, h.useState)(r);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(_, { parser: x, plugins: [o.A, s.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [_]);
    const S = (0, h.useId)();
    let C = h.Fragment;
    return (
     'paragraph' === f ? (C = m) : 'document' === f ? (C = v) : 'surface' === f && (C = g),
     (0, u.jsxs)('div', {
      className: (0, l.A)('nlds-canvas'),
      children: [
       k && (0, u.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, u.jsx)(C, { children: (0, u.jsx)(i.v$, { children: k }) }) }) }),
       j &&
        (0, u.jsx)('div', {
         className: (0, l.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(i.$n, {
          className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           $(!A);
          },
          'aria-expanded': A,
          'aria-controls': S,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, u.jsxs)('div', {
         className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !A,
         children: [
          (0, u.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(i.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, r) {
   r.d(n, { M: () => d });
   var t = r(46447),
    i = r(16194),
    l = r(30758),
    o = r(15638);
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
   var a = r(86070);
   function d({ lineNumber: e, syntax: n, textContent: r, trim: d }) {
    let c = r;
    const { title: h, type: p } = (0, l.useContext)(o.x),
     u = (0, l.useId)();
    return (d && (c = c.trim()), (0, a.jsx)(i.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: r, getLineProps: i, getTokenProps: l }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(t.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: r.map((n, r) => (0, a.jsxs)('span', { ...i({ line: n }), children: [e && (0, a.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  78236(e, n, r) {
   r.d(n, { A: () => s });
   var t = r(86070),
    i = r(30758);
   const l = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function o(e, n, r, t, i) {
    const l = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == i ? void 0 : i.name) || n, thumbnailUrl: [(null == i ? void 0 : i.thumbnailUrl) || r], embedUrl: (null == i ? void 0 : i.embedUrl) || `${t}/embed/${e}`, contentUrl: (null == i ? void 0 : i.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == i ? void 0 : i.description) && { description: i.description }), ...((null == i ? void 0 : i.uploadDate) && { uploadDate: i.uploadDate }), ...((null == i ? void 0 : i.duration) && { duration: i.duration }) };
    return JSON.stringify(l);
   }
   const s = i.forwardRef(function (e, n) {
    const [r, s] = i.useState(!1),
     [a, d] = i.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     p = e.title,
     u = e.poster || 'hqdefault',
     m = e.announce || 'Watch',
     v = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     g = i.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(v ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, r) => {
         n.append(r, e);
        }),
       n
      );
     }, [e.muted, v, e.enableJsApi, e.playlist, c, e.params]),
     j = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     b = i.useMemo(() => (e.playlist ? `${j}/embed/videoseries?${g.toString()}` : `${j}/embed/${c}?${g.toString()}`), [e.playlist, j, c, g]),
     f = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
     x = e.webp ? 'webp' : 'jpg',
     y = e.webp ? 'vi_webp' : 'vi',
     k = f
      ? ((e, n, r, t = 'maxresdefault') => {
         const [o, s] = (0, i.useState)('');
         return (
          (0, i.useEffect)(() => {
           const i = `https://img.youtube.com/${n}/${e}/${t}.${r}`,
            o = `https://img.youtube.com/${n}/${e}/hqdefault.${r}`,
            a = l[t],
            d = new Image();
           ((d.onload = () => {
            d.width < a ? s(o) : s(i);
           }),
            (d.onerror = () => s(o)),
            (d.src = i));
          }, [e, n, r, t]),
          o
         );
        })(e.id, y, x, u)
      : null,
     w = i.useMemo(() => e.thumbnail || k || `https://i.ytimg.com/${y}/${e.playlist ? h : c}/${u}.${x}`, [e.thumbnail, k, y, e.playlist, h, c, u, x]),
     _ = e.activatedClass || 'lyt-activated',
     N = e.adNetwork || !1,
     z = e.aspectHeight || 9,
     A = e.aspectWidth || 16,
     $ = e.iframeClass || '',
     S = e.playerClass || 'lty-playbtn',
     C = e.wrapperClass || 'yt-lite',
     I = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     R = e.rel ? 'prefetch' : 'preload',
     L = e.containerElement || 'article',
     D = !1 !== e.noscriptFallback;
    return (
     i.useEffect(() => {
      a && (I(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
     }, [a, I, e.focusOnLoad, n]),
     (0, t.jsxs)(t.Fragment, {
      children: [
       !e.lazyLoad && (0, t.jsx)('link', { rel: R, href: w, as: 'image' }),
       (0, t.jsx)(t.Fragment, { children: r && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: j }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), N && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, t.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, t.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: o(e.id, p, w, j, e.seo) } }),
       D && !e.playlist && (0, t.jsx)('noscript', { children: (0, t.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${p} on YouTube`, children: ['Watch "', p, '" on YouTube'] }) }),
       (0, t.jsxs)(L, {
        onPointerOver: () => {
         r || s(!0);
        },
        onClick: () => {
         a || d(!0);
        },
        className: `${C} ${a ? _ : ''}`,
        'data-title': p,
        role: a ? void 0 : 'img',
        'aria-label': a ? void 0 : `${p} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${w})` }), '--aspect-ratio': (z / A) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !a && (0, t.jsx)('img', { src: w, alt: `${p} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, t.jsx)('button', { type: 'button', className: S, 'aria-label': `${m} ${p}`, 'aria-hidden': a || void 0, tabIndex: a ? -1 : 0, children: (0, t.jsx)('span', { className: 'lty-visually-hidden', children: m }) }), a && (0, t.jsx)('iframe', { ref: n, className: $, title: p, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => s, RM: () => l });
   var t = r(86070),
    i = r(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
