'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15667],
 {
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => s });
   var a = t(30758);
   const i = {},
    r = a.createContext(i);
   function l(e) {
    const n = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), a.createElement(r.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, t) {
   t.d(n, { o: () => c });
   var a = t(18439),
    i = t(46447),
    r = t(86070);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + i;
     }
     return t.toString();
    },
    s = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    o = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return s[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: l = {} }) => (0, r.jsx)(a.x, { components: { ...d(n, t), ...o(i), ...l }, children: e });
  },
  25431(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => r });
   var a = t(86070),
    i = t(18439);
   const r = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, a.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  29882(e, n, t) {
   t.d(n, { Ay: () => l });
   var a = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, a.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  31785(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => j, default: () => f, frontMatter: () => p, metadata: () => a, toc: () => v }));
   const a = JSON.parse('{"id":"wcag/3.1.01","title":"WCAG-succescriterium 3.1.1 Taal van de pagina","description":"Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het html-element het attribuut \u2018lang\u2019 mee te geven.","source":"@site/docs/wcag/3.1.01.mdx","sourceDirName":"wcag","slug":"/wcag/3.1.1","permalink":"/wcag/3.1.1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.1.01.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.1.1 Taal van de pagina","title_sm":"WCAG 3.1.1: Taal van de pagina","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.1.1 Taal van de pagina","pagination_label":"WCAG-succescriterium 3.1.1 Taal van de pagina","description":"Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het html-element het attribuut \u2018lang\u2019 mee te geven.","slug":"3.1.1","conformance_level":"Niveau A","keywords":["WCAG","A","begrijpelijk","leesbaar","understandable","readable","language of page"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)","permalink":"/wcag/2.5.8"},"next":{"title":"WCAG-succescriterium 3.1.2 Taal van onderdelen","permalink":"/wcag/3.1.2"}}');
   var i = t(86070),
    r = t(18439),
    l = t(24703),
    s = t(61473),
    o = t(93681),
    d = t(25431),
    c = t(88275),
    h = t(29882);
   function g(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het ', (0, i.jsx)(n.code, { children: 'html' }), '-element het attribuut ', (0, i.jsx)(n.code, { children: 'lang' }), ' mee te geven met als waarde de taal.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Bijvoorbeeld ', (0, i.jsx)(n.code, { children: '<html lang="nl">' }), ' voor een pagina met Nederlandse tekst.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Met het ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut vertel je aan een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' in welke taal de tekst van de pagina staat. Dan wordt deze tekst goed voorgelezen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Of de software deze aangegeven taal ook echt goed voorleest, is ervan afhankelijk of deze taal beschikbaar is op de computer van de gebruiker.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 3.1.1 Taal van de pagina', title_sm: 'WCAG 3.1.1: Taal van de pagina', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.1 Taal van de pagina', pagination_label: 'WCAG-succescriterium 3.1.1 Taal van de pagina', description: 'Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het html-element het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.1', conformance_level: 'Niveau A', keywords: ['WCAG', 'A', 'begrijpelijk', 'leesbaar', 'understandable', 'readable', 'language of page'] },
    j = void 0,
    m = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Fout: Ontbrekend lang-attribuut', id: 'fout-ontbrekend-lang-attribuut', level: 3 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(s.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.1.1 Taal van de pagina' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(u, {}), '\n', (0, i.jsxs)(n.p, { children: ['Deze waarde is als volgt samengesteld: Twee (kleine) letters voor de taalgroep uit de ', (0, i.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes', children: 'ISO 639-1 standaard' }), ' en, optioneel, een koppelteken, met daarna twee of drie letters voor de variatie of regio van de taal in hoofdletters.'] }), '\n', (0, i.jsx)(n.p, { children: 'De code voor taalgroep is verplicht, de regio-code is optioneel.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een uitgebreid overzicht staat op ', (0, i.jsx)(n.a, { href: 'https://gist.github.com/JamieMason/3748498', children: 'HTML lang attribute / ISO language code reference / Culture names' }), ' van Jamie Mason.'] }), '\n', (0, i.jsx)(n.p, { children: 'Voor Nederlands:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<html lang="nl">' }), ' voor algemeen Nederlands.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<html lang="nl-NL">' }), ' voor Nederlands.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<html lang="nl-BE">' }), ' voor Vlaams.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het Fries is geen variatie van het Nederlands maar een eigen taal en heeft daarom een eigen ISO 639-1 code: ', (0, i.jsx)(n.code, { children: '<html lang="fy">' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Voor Engels bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<html lang="en">' }), ' voor algemeen Engels.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<html lang="en-GB">' }), ' voor Brits.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<html lang="en-US">' }), ' voor Amerikaans.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'De gebruiker kan verschillende talen (stemmen) downloaden en ervoor kiezen bijvoorbeeld alleen Brits-Engels te gebruiken. Een Amerikaans gelabelde website wordt dan toch in het Brits voorgelezen.' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': dit succescriterium betreft de taal van de hele pagina. Wil je alleen een deel in een andere taal publiceren, gebruik dan het ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut op elementen in de andere taal binnen de pagina. Hoe dit te doen staat bij het WCAG-succescriterium ', (0, i.jsx)(n.a, { href: '/wcag/3.1.2/', children: '3.1.2 Taal van onderdelen' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Content: ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.matuzo.at/blog/lang-attribute', children: (0, i.jsx)('span', { lang: 'en', children: 'The lang attribute: browsers telling lies, telling sweet little lies' }) }), ' van Manuel Matuzovi\u0107 over de problemen met het automatisch vertalen met Google Translate.'] }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://r12a.github.io/app-subtags/', children: (0, i.jsx)('span', { lang: 'en', children: 'Language subtag lookup' }) }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang', children: (0, i.jsxs)('span', { lang: 'en', children: [(0, i.jsx)(n.code, { children: 'lang' }), '-attribuut op MDN'] }) }) }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.w3.org/International/articles/language-tags/index.en', children: (0, i.jsx)('span', { lang: 'en', children: 'Language tags in HTML and XML' }) }), ' van de W3C.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.p, { children: ['Inspecteer de gegenereerde HTML-code van de webpagina, bijvoorbeeld met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.\nHeeft het ', (0, i.jsx)(n.code, { children: 'html' }), '-element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut en is dit een geldige waarde?'] }), '\n', (0, i.jsx)(n.p, { children: 'Staat er op een website een taalkeuze? Controleer bij de verschillende talen of ook de waarde van het lang-attribuut is aangepast.' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': alleen de tekst (de content) wordt in een andere taal voorgelezen. Dus alle ander informatie die een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' voorleest blijft in de taal van de computer. Dit is informatie over bijvoorbeeld formulierelementen, het niveau van een kopje, of een element een button of een link is, etc. Dit is gewenst gedrag.'] }), '\n', (0, i.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, i.jsx)(n.h3, { id: 'fout-ontbrekend-lang-attribuut', children: 'Fout: Ontbrekend lang-attribuut' }), '\n', (0, i.jsxs)(n.p, { children: ["Jaarlijks meet WebAIM de toegankelijkheid van 1 miljoen voorpagina's van websites. Volgens het onderzoek ", (0, i.jsx)(n.a, { href: 'https://webaim.org/projects/million/', children: 'WebAIM Million uit 2024' }), ' mist bij 17% van de gemeten websites het ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut. Het hoort hierbij tot de top 5 van meest gemaakte fouten.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het controleren van de taal is dus geen overbodige luxe. Een goed CMS zet zelf het ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut in de code. Maar check dan ook of dat de juiste waarde is voor de tekst van de website.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#language-of-page', children: (0, i.jsx)('span', { lang: 'en', children: '3.1.1 Language of Page' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#language-of-page', children: '3.1.1 Taal van de pagina' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 3.1.1 Language of Page' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 3.1.1: Language of Page' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(o.K, { children: (0, i.jsx)(l.o, { omitH1: !0, headingLevel: 3, content: c.Ay }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(l.o, { omitH1: !0, headingLevel: 3, content: h.Ay })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  46276(e, n, t) {
   t.d(n, { p: () => r });
   var a = t(13526),
    i = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...l }) => (0, i.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...l, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  61473(e, n, t) {
   t.d(n, { E: () => l });
   var a = t(46447),
    i = t(46276),
    r = t(86070);
   const l = ({ children: e, conformanceLevel: n, ...t }) => (globalThis.isAstro ? null : (0, r.jsx)(i.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, r.jsx)(a.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e }));
  },
  88275(e, n, t) {
   t.d(n, { Ay: () => l });
   var a = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, a.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, a.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88547(e, n, t) {
   t.d(n, { L: () => l });
   var a = t(86070);
   function i(e) {
    var n,
     t,
     a = '';
    if ('string' == typeof e || 'number' == typeof e) a += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var r = e.length;
      for (n = 0; n < r; n++) e[n] && (t = i(e[n])) && (a && (a += ' '), (a += t));
     } else for (t in e) e[t] && (a && (a += ' '), (a += t));
    return a;
   }
   function r() {
    for (var e, n, t = 0, a = '', r = arguments.length; t < r; t++) (e = arguments[t]) && (n = i(e)) && (a && (a += ' '), (a += n));
    return a;
   }
   const l = (0, t(30758).forwardRef)(({ aside: e, children: n, className: t, purpose: i, ...l }, s) => {
    const o = { ...l, ref: s, className: r('utrecht-note', { [`utrecht-note--${i}`]: i }, t) };
    return e ? (0, a.jsx)('aside', { ...o, children: n }) : (0, a.jsx)('section', { role: 'note', ...o, children: n });
   });
   l.displayName = 'Note';
  },
  93681(e, n, t) {
   t.d(n, { K: () => r });
   var a = t(88547),
    i = t(29181);
   const r = globalThis.isAstro ? a.L : i.K7;
  },
 },
]);
