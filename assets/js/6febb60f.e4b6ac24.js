'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [59636],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    t = i(68873),
    s = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, i), ...a(t), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  51804: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => p, contentTitle: () => m, default: () => v, frontMatter: () => u, metadata: () => r, toc: () => k });
   const r = JSON.parse('{"id":"wcag/1.3.01","title":"WCAG-succescriterium 1.3.1 Info en relaties","description":"Alle gebruikers moeten over dezelfde informatie kunnen beschikken.","source":"@site/docs/wcag/1.3.01.mdx","sourceDirName":"wcag","slug":"/wcag/1.3.1","permalink":"/wcag/1.3.1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.01.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.3.1 Info en relaties","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.3.1 Info en relaties","pagination_label":"WCAG-succescriterium 1.3.1 Info en relaties","description":"Alle gebruikers moeten over dezelfde informatie kunnen beschikken.","slug":"1.3.1","keywords":["WCAG","A","waarneembaar","aanpasbaar","perceivable","adaptable","info and relationships"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.2.9 Louter-geluid (live)","permalink":"/wcag/1.2.9"},"next":{"title":"WCAG-succescriterium 1.3.2 Betekenisvolle volgorde","permalink":"/wcag/1.3.2"}}');
   var t = i(86070),
    s = i(85248),
    l = i(46563),
    o = i(19877),
    a = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function g(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.' }), '\n', (0, t.jsx)(n.p, { children: 'Info en relaties?' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Info betekent informatie, tekstueel of visueel. Zoals een kopje boven een paragraaf aangeeft waar de inhoud eronder over gaat.' }), '\n', (0, t.jsx)(n.li, { children: 'Relatie betekent gerelateerde of gekoppelde inhoud. Zoals een label of foutmelding in de HTML gekoppeld moet zijn aan het bijbehorende formulierveld.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg ervoor dat informatie en relaties die zichtbaar zijn, ook beschikbaar zijn voor hulpmiddelen, zoals een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '. Dan kunnen hulpmiddelen de informatie ook interpreteren en aan gebruikers overbrengen.'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   const u = { title: 'WCAG-succescriterium 1.3.1 Info en relaties', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.1 Info en relaties', pagination_label: 'WCAG-succescriterium 1.3.1 Info en relaties', description: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.', slug: '1.3.1', keywords: ['WCAG', 'A', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'info and relationships'] },
    m = void 0,
    p = {},
    k = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function f(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.3.1 Info en relaties' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(j, {}), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Als tekst er uitziet als een kopje, moet dit ook in de HTML een kopje (heading) zijn en geen vet gemaakte tekst. Het kopjesniveau wordt voorgelezen door ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'Als informatie in een tabel staat, moet de informatie begrijpbaar zijn voor screenreadersgebruikers, door het gebruik van table headings (th\u2019s). De table heading wordt voorgelezen bij de waarde van een bijbehorende table cell.' }), '\n', (0, t.jsxs)(n.li, { children: ['In een formulier moeten invoervelden en labels aan elkaar gekoppeld zijn met een ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'for/id-relatie' }), '. Dan wordt het label voorgelezen als het invoerveld de focus krijgt.'] }), '\n', (0, t.jsx)(n.li, { children: 'Staan gegevens in een lijst, gebruik dan ook in de HTML een lijst (ul) en niet alleen streepjes voor de items. Een screenreader leest dan voor dat het een lijst is, hoeveel items er zijn in de lijst en bij welk item de lezer zich op dat moment bevindt.' }), '\n', (0, t.jsx)(n.li, { children: 'Gebruik je een afbeelding om informatie te geven, zorg er dan voor dat de alternatieve tekst van de afbeelding de juiste informatie bevat, of voeg de informatie vlakbij de afbeelding in tekst toe.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Geef via de juiste HTML of alternatieve teksten betekenis aan structuur, relaties, visuele informatie en opmaak, dan begrijpen gebruikers van hulpmiddelen deze informatie ook.' }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'Geef een formulierveld toegankelijke naam met een label' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/beschrijven/', children: 'Schrijf een foutmelding uit in tekst' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }), ', ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Tabellen' }), ', ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Opsommingen' }), ', ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'Tekst benadrukken' }), ', ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/citaten/', children: 'Citaten' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/kantoorbestanden/', children: 'Kantoorbestanden' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsxs)(n.p, { children: ["De rapportage van het 'Onderzoek online meldingen' geeft het belang van goede informatie voor screenreadergebruikers aan: ", (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/utrecht-online-meldingen#blinden-en-slechtzienden-lopen-vast-in-het-proces', children: 'Blinden en slechtzienden lopen vast in het proces' }), '.'] }), '\n', (0, t.jsxs)(n.blockquote, { children: ['\n', (0, t.jsx)(n.p, { children: 'Het is voor de blinden niet duidelijk dat er een verplicht invulveld zit in de kaart om het adres in te vullen. Ze vullen het niet in en gaan door in het formulier. Dit, gecombineerd met een onduidelijke foutmelding zorgt er voor dat ze vast komen te zitten en uit het proces vallen.' }), '\n'] }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'De pagina doorlezen met een screenreader is een goede manier om dit succescriterium te testen. Wordt de informatie die je ziet ook goed voorgelezen.' }), '\n', (0, t.jsx)(n.p, { children: 'Controleer of de HTML semantisch is opgemaakt, zoals bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Kopjes' }), ' (headings): ziet tekst eruit als een kopje, is deze opgemaakt als HTML-kopje (h1, h2, h3 etc)? En andersom: worden kopjes niet gebruikt om tekst alleen groot te maken?'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Lijsten' }), ': is tekst opgemaakt als een genummerde of ongenummerde lijst, is deze in de HTML dan ook opgemaakt als een genummerde (', (0, t.jsx)(n.code, { children: '<ol>' }), ') of ongenummerde lijst (', (0, t.jsx)(n.code, { children: '<ul>' }), ')?'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Tabellen' }), ' voor het weergeven van data: is het duidelijk welke data precies wordt weergegeven? Bijvoorbeeld door het gebruik van table headings (th\u2019s) en scope.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Test voor formuliervelden:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Is het label en de description gekoppeld aan het invoerveld?' }), '\n', (0, t.jsx)(n.li, { children: 'Weet een screenreadergebruiker ook dat een veld verplicht is?' }), '\n', (0, t.jsx)(n.li, { children: 'Worden fout- en succesmeldingen voorgelezen door een screenreader?' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#info-and-relationships', children: (0, t.jsx)('span', { lang: 'en', children: '1.3.1 Info and Relationships' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#info-and-relationships', children: '1.3.1 Info en relaties' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.1 Info and Relationships' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.1 Info and Relationships' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function l(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...l }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
