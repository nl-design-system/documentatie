'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4893],
 {
  35106: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => h, default: () => j, frontMatter: () => c, metadata: () => u, toc: () => p });
   var r = i(52676),
    t = i(24785),
    s = i(71595),
    a = i(45054),
    l = i(78836);
   function o(e) {
    const n = { p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: "De 'markup' van pagina's, denk aan bijvoorbeeld HTML-code, moet voldoen aan bepaalde technische voorwaarden. Zo wordt de samenwerking tussen webpagina's, browsers en hulptechnologie\xebn minder foutgevoelig." });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
   const c = { title: 'WCAG-succescriterium 4.1.1 Parsen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.1 Parsen', pagination_label: 'WCAG-succescriterium 4.1.1 Parsen', description: 'Zorg dat er geen fouten in de HTML-code zijn.', slug: '4.1.1', keywords: ['WCAG'] },
    h = void 0,
    u = { id: 'wcag/4.1.01', title: 'WCAG-succescriterium 4.1.1 Parsen', description: 'Zorg dat er geen fouten in de HTML-code zijn.', source: '@site/docs/wcag/4.1.01.mdx', sourceDirName: 'wcag', slug: '/wcag/4.1.1', permalink: '/wcag/4.1.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/4.1.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 4.1.1 Parsen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.1 Parsen', pagination_label: 'WCAG-succescriterium 4.1.1 Parsen', description: 'Zorg dat er geen fouten in de HTML-code zijn.', slug: '4.1.1', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.3.8 Toegankelijke authenticatie (minimum)', permalink: '/wcag/3.3.8' }, next: { title: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde', permalink: '/wcag/4.1.2' } },
    g = {},
    p = [
     { value: 'W3C referenties WCAG-versie 2.1', id: 'w3c-referenties-wcag-versie-21', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: '1. Elementen zijn volgens hun specificaties afgesloten', id: '1-elementen-zijn-volgens-hun-specificaties-afgesloten', level: 3 },
     { value: '2. Elementen zijn genest volgens hun specificaties', id: '2-elementen-zijn-genest-volgens-hun-specificaties', level: 3 },
     { value: '3. Elementen bevatten geen dubbele attributen', id: '3-elementen-bevatten-geen-dubbele-attributen', level: 3 },
     { value: '4. Alle ID&#39;s zijn uniek, behalve waar de specificatie deze eigenschappen toelaat', id: '4-alle-ids-zijn-uniek-behalve-waar-de-specificatie-deze-eigenschappen-toelaat', level: 3 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: dubbele ID&#39;s doordat een formulier meerdere keren wordt gebruikt.', id: 'fout-dubbele-ids-doordat-een-formulier-meerdere-keren-wordt-gebruikt', level: 3 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', (0, r.jsx)(s.j, { level: 1, conformanceLevel: 'Vervallen', children: 'WCAG-succescriterium 4.1.1 Parsen' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': De werkgroep die WCAG maakt heeft 4.1.1 de afgelopen jaren besproken en vastgesteld dat dit criterium tegenwoordig niet meer relevant is, omdat browsers en hulptechnologie\xebn intussen zijn verbeterd (zie de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/standards-guidelines/wcag/faq/#parsing411', children: 'WCAG FAQ' }), '). Het criterium is misschien in jouw situatie niet meer van toepassing. In WCAG-versie 2.2 is het helemaal verwijderd. In versie 2.1 is een ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#h-note-26', children: 'opmerking' }), ' toegevoegd dat content in HTML of XML automatisch aan het criterium voldoet. Zie ook: ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht#welkeeisen', children: 'Wat is verplicht?' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties-wcag-versie-21', children: 'W3C referenties WCAG-versie 2.1' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#parsing', children: (0, r.jsx)('span', { lang: 'en', children: '4.1.1 Parsing' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG21-nl/#parsen', children: '4.1.1 Parsen' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#parsing', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 4.1.1 Parsing' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/parsing.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.1 Parsing' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(n.p, { children: 'Er zijn 4 voorwaarden gedefinieerd.' }), '\n', (0, r.jsx)(n.h3, { id: '1-elementen-zijn-volgens-hun-specificaties-afgesloten', children: '1. Elementen zijn volgens hun specificaties afgesloten' }), '\n', (0, r.jsxs)(n.p, { children: ['Denk hier bijvoorbeeld aan headings, divs, spans en andere elementen die een sluittag vereisen.\nEen ', (0, r.jsx)(n.code, { children: '<div>' }), ' moet afsluiten met een ', (0, r.jsx)(n.code, { children: '</div>' }), '.'] }), '\n', (0, r.jsx)(n.h3, { id: '2-elementen-zijn-genest-volgens-hun-specificaties', children: '2. Elementen zijn genest volgens hun specificaties' }), '\n', (0, r.jsx)(n.p, { children: 'Verkeerd nesten van elementen kan voorkomen bij interactieve elementen: een button die een tweede button bevat.\nOf bij het verkeerd combineren van elementen: een label die een link bevat.\nDaarnaast moeten bijvoorbeeld lists en definition lists goed opgebouwd zijn.' }), '\n', (0, r.jsxs)(n.p, { children: ['Silvestar Bistrovi\u0107 beschrijft een aantal ', (0, r.jsx)(n.a, { href: 'https://www.htmhell.dev/adventcalendar/2022/20/', children: (0, r.jsx)('span', { lang: 'en', children: 'Common nesting issues in HTML' }) }), '.'] }), '\n', (0, r.jsx)(n.h3, { id: '3-elementen-bevatten-geen-dubbele-attributen', children: '3. Elementen bevatten geen dubbele attributen' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik een attribuut maximaal \xe9\xe9n keer.\nVermijd bijvoorbeeld meerdere ', (0, r.jsx)(n.code, { children: 'class' }), '-attributen:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<h1 class="heading" class="x-large">Contact</h1>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'In het geval van het class-attribuut scheid je meerdere waarden met een spatie:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<h1 class="heading x-large">Contact</h1>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: '4-alle-ids-zijn-uniek-behalve-waar-de-specificatie-deze-eigenschappen-toelaat', children: "4. Alle ID's zijn uniek, behalve waar de specificatie deze eigenschappen toelaat" }), '\n', (0, r.jsx)(n.p, { children: 'Dit is voor formulieren belangrijk. Labels en formuliervelden zijn via een ID aan elkaar gekoppeld. Komt een ID meerdere keren voor op een pagina, dan kan het verkeerde label bij een formulierveld worden voorgelezen.' }), '\n', (0, r.jsx)(n.p, { children: 'In code:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="kleur">Wat is je lievelingskleur?</label> <input type="text" id="kleur" name="lievelingskleur" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Bij de richtlijnen over labels staat hoe deze ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/de-forid-relatie', children: 'for/id relatie' }), ' werkt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Een ander probleem is het toevoegen van twee keer hetzelfde formulier met hetzelfde formulier-ID, de foutafhandeling staat dan misschien bij het verkeerde formulier.' }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(a.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Controleer de webpagina op de ', (0, r.jsx)(n.a, { href: 'https://validator.w3.org/', children: 'Markup Validation Service' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'axe Devtools' }), ' markeert enkele (maar niet alle) parse-fouten in de HTML.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Voor developers:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Gebruik een ', (0, r.jsx)(n.a, { href: 'https://github.com/caramelomartins/awesome-linters?tab=readme-ov-file#html', children: 'HTML-linter' }), ', of een linter naar keuze die ook voor correcte HTML test.'] }), '\n', (0, r.jsxs)(n.li, { children: ["Bij twijfel: check de '", (0, r.jsx)('span', { lang: 'en', children: 'Permitted content' }), "' bij de '", (0, r.jsx)('span', { lang: 'en', children: 'Technical Summary' }), "' van een HTML-element op de MDN-website. Bijvoorbeeld ", (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#technical_summary', children: 'de technische samenvatting voor een link' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, r.jsx)(n.h3, { id: 'fout-dubbele-ids-doordat-een-formulier-meerdere-keren-wordt-gebruikt', children: "Fout: dubbele ID's doordat een formulier meerdere keren wordt gebruikt." }), '\n', (0, r.jsxs)(n.p, { children: ["Met sommige formulierenplugins kun je hetzelfde formulier meerdere keren toevoegen op een pagina. Let in dit geval op dat de plugin wel unieke ID's toevoegt aan de velden en het formulier. Dat kan er, naast problemen bij de ", (0, r.jsx)(n.code, { children: 'for/id' }), ' relaties, ook voor zorgen dat validatiescripts op de verkeerde plek worden uitgevoerd.'] }), '\n', (0, r.jsx)(n.p, { children: 'Een formulier dat vaak twee keer wordt toegevoegd, is een aanmeldformulier voor de nieuwsbrief. Wil je toch hetzelfde formulier meerdere keren op een pagina, maak dan verschillende formulieren aan.' }), '\n', (0, r.jsx)(l.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  45054: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var r = i(52676),
    t = i(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  78836: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var r = i(52676),
    t = i(24785);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72657: (e, n, i) => {
   i.d(n, { V: () => a });
   var r = i(4814);
   i(75271);
   const t = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var s = i(52676);
   const a = (e) => {
    let { children: n, className: i, level: a = 1, suffix: l, ...o } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)(t['nlds-inline-heading-group'], `utrecht-heading-${a}`, i), ...o, children: [(0, s.jsx)('h1', { className: (0, r.Z)(t['nlds-inline-heading-group__heading']), children: n }), l && (0, s.jsxs)('p', { className: (0, r.Z)(t['nlds-inline-heading-group__suffix']), children: [l ? ' ' : '', l] })] });
   };
  },
  71595: (e, n, i) => {
   i.d(n, { j: () => o });
   var r = i(46506),
    t = (i(75271), i(72657));
   const s = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    a = 'nlds-inline-heading-group__badge_TgvT';
   var l = i(52676);
   const o = (e) => {
    let { children: n, conformanceLevel: i, ...o } = e;
    return (0, l.jsx)(t.V, { className: s, suffix: i && (0, l.jsx)(r.Ou, { className: a, children: i }), ...o, children: n });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
   var r = i(75271);
   const t = {},
    s = r.createContext(t);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
