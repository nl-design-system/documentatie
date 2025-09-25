'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27297],
 {
  40904: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => j, default: () => v, frontMatter: () => u, metadata: () => p, toc: () => k });
   var r = i(52676),
    t = i(40139),
    s = i(57716),
    l = i(46364),
    o = i(16167),
    a = i(60256),
    d = i(99042),
    c = i(91114);
   function h(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.' }), '\n', (0, r.jsx)(n.p, { children: 'Info en relaties?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Info betekent informatie, tekstueel of visueel. Zoals een kopje boven een paragraaf aangeeft waar de inhoud eronder over gaat.' }), '\n', (0, r.jsx)(n.li, { children: 'Relatie betekent gerelateerde of gekoppelde inhoud. Zoals een label of foutmelding in de HTML gekoppeld moet zijn aan het bijbehorende formulierveld.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat informatie en relaties die zichtbaar zijn, ook beschikbaar zijn voor hulpmiddelen, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '. Dan kunnen hulpmiddelen de informatie ook interpreteren en aan gebruikers overbrengen.'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 1.3.1 Info en relaties', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.1 Info en relaties', pagination_label: 'WCAG-succescriterium 1.3.1 Info en relaties', description: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.', slug: '1.3.1', keywords: ['WCAG', 'A', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'info and relationships'] },
    j = void 0,
    p = { id: 'wcag/1.3.01', title: 'WCAG-succescriterium 1.3.1 Info en relaties', description: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.', source: '@site/docs/wcag/1.3.01.mdx', sourceDirName: 'wcag', slug: '/wcag/1.3.1', permalink: '/wcag/1.3.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.3.1 Info en relaties', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.1 Info en relaties', pagination_label: 'WCAG-succescriterium 1.3.1 Info en relaties', description: 'Alle gebruikers moeten over dezelfde informatie kunnen beschikken.', slug: '1.3.1', keywords: ['WCAG', 'A', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'info and relationships'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.2.9 Louter-geluid (live)', permalink: '/wcag/1.2.9' }, next: { title: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde', permalink: '/wcag/1.3.2' } },
    m = {},
    k = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function f(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.3.1 Info en relaties' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(g, {}), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Als tekst er uitziet als een kopje, moet dit ook in de HTML een kopje (heading) zijn en geen vet gemaakte tekst. Het kopjesniveau wordt voorgelezen door ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: 'Als informatie in een tabel staat, moet de informatie begrijpbaar zijn voor screenreadersgebruikers, door het gebruik van table headings (th\u2019s). De table heading wordt voorgelezen bij de waarde van een bijbehorende table cell.' }), '\n', (0, r.jsxs)(n.li, { children: ['In een formulier moeten invoervelden en labels aan elkaar gekoppeld zijn met een ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'for/id-relatie' }), '. Dan wordt het label voorgelezen als het invoerveld de focus krijgt.'] }), '\n', (0, r.jsx)(n.li, { children: 'Staan gegevens in een lijst, gebruik dan ook in de HTML een lijst (ul) en niet alleen streepjes voor de items. Een screenreader leest dan voor dat het een lijst is, hoeveel items er zijn in de lijst en bij welk item de lezer zich op dat moment bevindt.' }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik je een afbeelding om informatie te geven, zorg er dan voor dat de alternatieve tekst van de afbeelding de juiste informatie bevat, of voeg de informatie vlakbij de afbeelding in tekst toe.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Geef via de juiste HTML of alternatieve teksten betekenis aan structuur, relaties, visuele informatie en opmaak, dan begrijpen gebruikers van hulpmiddelen deze informatie ook.' }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'Geef een formulierveld toegankelijke naam met een label' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/beschrijven/', children: 'Schrijf een foutmelding uit in tekst' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }), ', ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Tabellen' }), ', ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Opsommingen' }), ', ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'Tekst benadrukken' }), ', ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/citaten/', children: 'Citaten' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/kantoorbestanden/', children: 'Kantoorbestanden' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ["De rapportage van het 'Onderzoek online meldingen' geeft het belang van goede informatie voor screenreadergebruikers aan: ", (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/utrecht-online-meldingen#blinden-en-slechtzienden-lopen-vast-in-het-proces', children: 'Blinden en slechtzienden lopen vast in het proces' }), '.'] }), '\n', (0, r.jsxs)(n.blockquote, { children: ['\n', (0, r.jsx)(n.p, { children: 'Het is voor de blinden niet duidelijk dat er een verplicht invulveld zit in de kaart om het adres in te vullen. Ze vullen het niet in en gaan door in het formulier. Dit, gecombineerd met een onduidelijke foutmelding zorgt er voor dat ze vast komen te zitten en uit het proces vallen.' }), '\n'] }), '\n', (0, r.jsx)(a.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'De pagina doorlezen met een screenreader is een goede manier om dit succescriterium te testen. Wordt de informatie die je ziet ook goed voorgelezen.' }), '\n', (0, r.jsx)(n.p, { children: 'Controleer of de HTML semantisch is opgemaakt, zoals bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Kopjes' }), ' (headings): ziet tekst eruit als een kopje, is deze opgemaakt als HTML-kopje (h1, h2, h3 etc)? En andersom: worden kopjes niet gebruikt om tekst alleen groot te maken?'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Lijsten' }), ': is tekst opgemaakt als een genummerde of ongenummerde lijst, is deze in de HTML dan ook opgemaakt als een genummerde (', (0, r.jsx)(n.code, { children: '<ol>' }), ') of ongenummerde lijst (', (0, r.jsx)(n.code, { children: '<ul>' }), ')?'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Tabellen' }), ' voor het weergeven van data: is het duidelijk welke data precies wordt weergegeven? Bijvoorbeeld door het gebruik van table headings (th\u2019s) en scope.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Test voor formuliervelden:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Is het label en de description gekoppeld aan het invoerveld?' }), '\n', (0, r.jsx)(n.li, { children: 'Weet een screenreadergebruiker ook dat een veld verplicht is?' }), '\n', (0, r.jsx)(n.li, { children: 'Worden fout- en succesmeldingen voorgelezen door een screenreader?' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#info-and-relationships', children: (0, r.jsx)('span', { lang: 'en', children: '1.3.1 Info and Relationships' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#info-and-relationships', children: '1.3.1 Info en relaties' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.1 Info and Relationships' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.1 Info and Relationships' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var r = i(4814),
    t = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: l, ...o } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...o, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(40139),
    t = i(16167),
    s = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: l = '', components: o = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...d(i, t), ...a(l), ...o }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var r = i(16167),
    t = i(41757),
    s = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, s.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => l });
   var r = i(75271);
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
 },
]);
