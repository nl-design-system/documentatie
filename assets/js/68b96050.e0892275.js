(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [23221],
 {
  3890: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => y, contentTitle: () => h, default: () => x, description: () => m, frontMatter: () => d, issueNumber: () => v, metadata: () => u, title: () => p, toc: () => g });
   var r = t(52676),
    i = t(24785),
    a = t(80719),
    s = t(23952),
    c = t(57716);
   function o(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'paragraph', children: 'Paragraph' }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.'] }), '\n', (0, r.jsx)(n.h2, { id: 'html', children: 'HTML' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor altijd het ', (0, r.jsx)(n.code, { children: '<p>' }), ' HTML-element, die heeft automatisch de goede ', (0, r.jsxs)(n.a, { href: 'https://w3c.github.io/aria/#paragraph', children: [(0, r.jsx)(n.code, { children: 'paragraph' }), ' role'] }), ' in de accessibility tree. Dat is nodig voor het WCAG-succescriterium ', (0, r.jsx)(n.a, { href: '/wcag/1..3.1', children: '1.3.1 Info en relaties' }), '. Voor een ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' gebruik je ', (0, r.jsx)(n.code, { children: '<p><b>\u2026</b></p>' }), '. Voor ', (0, r.jsx)(n.em, { children: 'small print' }), ' gebruik je ', (0, r.jsx)(n.code, { children: '<p><small>\u2026</small></p>' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Zelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het ', (0, r.jsx)(n.code, { children: '<p>' }), " element is er tussen alinea's duidelijke witruimte (", (0, r.jsx)(n.a, { href: '/wcag/1.4.12', children: 'WCAG-succescriterium 1.4.12' }), '). Door het ', (0, r.jsx)(n.code, { children: '<b>' }), ' element is de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' visueel herkenbaar. Door ', (0, r.jsx)(n.code, { children: '<small>' }), ' is ', (0, r.jsx)(n.em, { children: 'small print' }), ' visueel herkenbaar.'] }), '\n', (0, r.jsx)(n.h3, { id: 'lead-paragraph', children: 'Lead Paragraph' }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' is een extra opvallende variant van de ', (0, r.jsx)(n.em, { children: 'paragraph' }), '. Gebruik de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' onder de ', (0, r.jsx)(n.em, { children: 'heading' }), ' van een ', (0, r.jsx)(n.em, { children: 'article' }), ' voor een introductietekst.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Schrijf in de eerste alinea kort en bondig waar de pagina over gaat, zodat de lezer kan besluiten om verder te lezen. Gebruik hiervoor de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' variant zodat de tekst extra opvallend is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je meer dan circa 30 woorden of 200 tekens nodig hebt, gebruik dan niet de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' variant zodat de tekst een leesbare lettergrootte heeft voor langere teksten.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' niet wanneer je een ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' voor een ander doel extra opvallend wil maken, ontwikkel dan een eigen variant.'] }), '\n', (0, r.jsx)(n.h2, { id: 'inhoud', children: 'Inhoud' }), '\n', (0, r.jsx)(n.p, { children: "Groepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft. Teksten met alinea's die niet bovengemiddeld lang zijn makkelijker te begrijpen als je pauze neemt, en door het grouperen is informatie sneller terug te vinden." }), '\n', (0, r.jsx)(n.p, { children: "Overweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea's." }), '\n', (0, r.jsx)(n.h2, { id: 'layout', children: 'Layout' }), '\n', (0, r.jsx)(n.h3, { id: 'lettergrootte', children: 'Lettergrootte' }), '\n', (0, r.jsxs)(n.p, { children: ['Kies de lettergrootte niet te klein, bijvoorbeeld ', (0, r.jsx)(n.code, { children: '16px' }), ' of groter. Gebruik ', (0, r.jsx)(n.code, { children: 'rem' }), ' in CSS in plaats van ', (0, r.jsx)(n.code, { children: 'px' }), ', zodat de font-size van de ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' ook verdubbelt wanneer gebruikers via hun besturingssysteem of ', (0, r.jsx)(n.em, { children: 'user stylesheet' }), ' de standaard lettergroote 200% groter maken. (', (0, r.jsx)(n.a, { href: '/wcag/1.4.4', children: 'WCAG-succescriterium 1.4.4 Herschalen van tekst' }), ') Gebruikers moeten de lettergrootte vier keer groter kunnen maken met browser zoom, zie ', (0, r.jsx)(n.a, { href: '/wcag/1.4.10', children: 'WCAG-succescriterium 1.4.10' }), '. Maak zoom niet kapot door gebruik van de ', (0, r.jsx)(n.code, { children: 'vw' }), ' of ', (0, r.jsx)(n.code, { children: 'vh' }), ' eenheden in CSS die niet altijd goed werken met zoom.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de design token ', (0, r.jsx)(n.code, { children: 'nl.paragraph.font-size' }), ' als je niet de standaard-grootte wilt van ', (0, r.jsx)(n.code, { children: 'nl.document.font-size' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor de lead paragraph variant is het gebruikelijk de lettergrootte 10% \xe1 20% groter te kiezen (', (0, r.jsx)(n.code, { children: 'nl.paragraph.lead.font-size' }), ').'] }), '\n', (0, r.jsx)(n.h3, { id: 'regelhoogte', children: 'Regelhoogte' }), '\n', (0, r.jsxs)(n.p, { children: ['Stel de regelhoogte met ', (0, r.jsx)(n.code, { children: 'nl.paragraph.line-height' }), ' in voor voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Standaard gebruiken browsers circa ', (0, r.jsx)(n.code, { children: '1.2' }), ', maar ', (0, r.jsx)(n.code, { children: '1.5' }), ' is voor veel gebruikers beter leesbaar. Voor het ', (0, r.jsx)(n.a, { href: '/wcag/1.4.8', children: 'WCAG-succescriterium 1.4.8 Visuele weergave' }), ' is het ook belangrijk om ', (0, r.jsx)(n.code, { children: '1.5' }), ' of groter aan te bieden.'] }), '\n', (0, r.jsx)(n.h3, { id: 'afstand-tussen-alineas', children: "Afstand tussen alinea's" }), '\n', (0, r.jsxs)(n.p, { children: ["Kies voldoende afstand tussen alinea's, in elk geval 50% groter dan afstand tussen tekstregels. Gebruik hiervoor de design tokens ", (0, r.jsx)(n.code, { children: 'nl.paragraph.margin-block-start' }), ' en ', (0, r.jsx)(n.code, { children: 'nl.paragraph.margin-block-end' }), '.'] }), '\n', (0, r.jsx)(n.h3, { id: 'kleurgebruik', children: 'Kleurgebruik' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.code, { children: 'nl.paragraph.color' }), ': kies voldoende contrast ten opzichte van de achtergrondkleur, van bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'nl.document.background-color' }), ' of ', (0, r.jsx)(n.code, { children: 'nl.page.background-color' }), '. Kies in plaats van zwart voor zeer donkergrijs, dat is beter leesbaar op beeldschermen. Een contrastverhouding van 7:1 is ideaal.'] }), '\n', (0, r.jsx)(n.p, { children: 'Zie de WCAG-succescriteria:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3', children: '1.4.3: Contrast (minimum)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.6', children: '1.4.6: Contrast (versterkt)' }) }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'regellengte', children: 'Regellengte' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg dat de lengte van de tekst niet te lang wordt, bijvoorbeeld door deze design token in te stellen: ', (0, r.jsx)(n.code, { children: 'nl.article.max-inline-size' }), '. De ideale regellengte verschilt per schrift en taal, maar ergens tussen de 50 en 75 tekens voor Nederlands is prima. Je kunt in CSS bijvoorbeeld de ', (0, r.jsx)(n.code, { children: 'ch' }), ' eenheid gebruiken: ', (0, r.jsx)(n.code, { children: '--nl-article-max-inline-size: 60ch' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor het ', (0, r.jsx)(n.a, { href: '/wcag/1.4.8', children: 'WCAG-succescriterium 1.4.8 Visuele weergave' }), ' is het nodig dat de regellengte beperkt kan worden tot maximaal 80 tekens (', (0, r.jsx)(n.code, { children: '80ch' }), '), bijvoorbeeld door de viewport van de browser kleiner te maken.'] }), '\n', (0, r.jsx)(n.h3, { id: 'tekstuitlijning', children: 'Tekstuitlijning' }), '\n', (0, r.jsxs)(n.p, { children: ['Tekst dient uitsluitend links uitgelijnd zijn, voor Nederlandse teksten. Gebruik daarvoor ', (0, r.jsx)(n.code, { children: 'text-align: start' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.code, { children: 'text-align: justify' }), ' moet vermeden kunnen worden volgens het ', (0, r.jsx)(n.a, { href: '/wcag/1.4.8', children: 'WCAG-succescriterium 1.4.8 Visuele weergave' }), ', dus gebruik deze voor het gemak helemaal niet. Rechts uitlijnen en tekst centreren moet je ook niet gebruiken voor lopende tekst.'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-het-niet-moet', children: 'Hoe het niet moet' }), '\n', (0, r.jsx)(n.h3, { id: 'geen-opmaak', children: 'Geen opmaak' }), '\n', (0, r.jsxs)(n.p, { children: ['Geen ', (0, r.jsx)(n.code, { children: 'p' }), ' gebruiken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n  <h1>Interessante pagina</h1>\n  Deze eerste tekst ziet er misschien prima uit.\n  <p>Maar ook de eerste paragraaf hoort in een p-element te staan.</p>\n</section>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-lege-paragraaf', children: 'Lege paragraaf' }), '\n', (0, r.jsxs)(n.p, { children: ['Een lege ', (0, r.jsx)(n.code, { children: 'p' }), ' gebruiken, bijvoorbeeld om extra afstand te maken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n  <h1>Voorbeeld pagina</h1>\n  <p>Deze pagina ziet er op het oog misschien prima uit.</p>\n  <p>&nbsp;</p>\n  <p>Maar sommige screen readers zeggen dat er drie paragrafen zijn, dat is verwarrend.</p>\n</section>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-semantiek', children: 'Geen semantiek' }), '\n', (0, r.jsxs)(n.p, { children: ['Een ', (0, r.jsx)(n.code, { children: 'div' }), ' gebruiken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n    <h1>Interessante pagina</h1>\n    <div>Deze eerste tekst ziet er misschien prima uit, maar de paragraph role ontbreek in de accessibility tree.</div>\n    <div role="paragraph">Gebruik gewoon een p-element in plaats van ARIA om de role te verkrijgen.</p>\n</section>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je tekstfragmenten na elkaar plaatst is het belangrijk dat je een element zoals paragraaf gebruikt (en niet een ', (0, r.jsx)(n.code, { children: 'inline' }), ' element zoals ', (0, r.jsx)(n.code, { children: 'span' }), ' of ', (0, r.jsx)(n.code, { children: 'label' }), '), zodat de twee tekstfragmenten los van elkaar worden voorgelezen door screen readers. Wanneer de CSS niet geladen kan worden, dan heeft ', (0, r.jsx)(n.code, { children: 'p' }), ' wel marge en ', (0, r.jsx)(n.code, { children: 'div' }), ' niet, in veel situaties zonder CSS is ', (0, r.jsx)(n.code, { children: 'p' }), ' daarom leesbaarder dan ', (0, r.jsx)(n.code, { children: 'div' }), '.'] }), '\n', (0, r.jsxs)(n.h3, { id: 'geen-inline', children: [(0, r.jsx)(n.code, { children: 'inline' }), ' in plaats van ', (0, r.jsx)(n.code, { children: 'block' }), '-elementen'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="name">Voornaam</label><span>Voornaam is verplicht</span>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Beter:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p><label for="name">Voornaam</label></p>\n<p>Voornaam is verplicht</p>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-overdreven-nadruk', children: 'Overdreven nadruk' }), '\n', (0, r.jsx)(n.p, { children: 'Benadruk niet een hele paragraaf, maar markeer het belangrijke gedeelte.' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p>\n  <strong\n    >Tenzij anders vermeld is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van toepassing.\n    Dit houdt in dat iedere vorm van hergebruik van de inhoud van deze site is toegestaan, tenzij bij of in een bepaald\n    onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een auteursrechtelijke\n    uitzondering van toepassing is.\n  </strong>\n</p>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Beter:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p>\n  <em>Tenzij anders vermeld</em> is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van\n  toepassing. Dit houdt in dat <strong>iedere vorm van hergebruik van de inhoud van deze site is toegestaan</strong>,\n  tenzij bij of in een bepaald onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een\n  auteursrechtelijke uitzondering van toepassing is.\n</p>\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'links', children: 'Links' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p', children: ['MDN: ', (0, r.jsx)(n.code, { children: '<p>' }), ': The Paragraph element'] }) }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsxs)(n.a, { href: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element', children: ['HTML specification: The ', (0, r.jsx)(n.code, { children: '<b>' }), ' element'] }), '. Bevat een voorbeeld van het ', (0, r.jsx)(n.code, { children: 'b' }), ' element voor lead paragraphs.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsxs)(n.a, { href: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element', children: ['HTML specification: The ', (0, r.jsx)(n.code, { children: '<small>' }), ' element'] }), '. Bevat een voorbeeld van het ', (0, r.jsx)(n.code, { children: 'small' }), ' element voor ', (0, r.jsx)(n.em, { children: 'small print' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taaladvies.net/lengte-van-alineas/', children: 'Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net' }) }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'relevante-wcag-regels', children: 'Relevante WCAG-succescriteria' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1', children: 'WCAG-succescriterium 1.3.1' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3', children: 'WCAG-succescriterium 1.4.3' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.4', children: 'WCAG-succescriterium 1.4.4' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.8', children: 'WCAG-succescriterium 1.4.8' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.10', children: 'WCAG-succescriterium 1.4.10' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.12', children: 'WCAG-succescriterium 1.4.12' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.1.2', children: 'WCAG-succescriterium 3.1.2' }) }), '\n'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
   const d = { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'] },
    h = void 0,
    u = { id: 'componenten/paragraph/index', title: 'Paragraph', description: 'Toont een alinea aan tekst.', source: '@site/docs/componenten/paragraph/index.mdx', sourceDirName: 'componenten/paragraph', slug: '/paragraph', permalink: '/paragraph', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/paragraph/index.mdx', tags: [{ label: 'Community', permalink: '/tags/community' }], version: 'current', frontMatter: { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'] }, sidebar: 'componenten', previous: { title: 'Pagination', permalink: '/pagination' }, next: { title: 'Password input', permalink: '/password-input' } },
    j = {},
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Levende Backlog', id: 'levende-backlog', level: 2 },
    ],
    p = 'Paragraph',
    m = 'Toont een alinea aan tekst.',
    v = 115,
    y = a.find((e) => e.number === v);
   function k(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(s.Rv, { component: y, headingLevel: 1, description: m }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(s.cN, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }), '\n', (0, r.jsx)(s.W, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(c.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(l, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'levende-backlog', children: 'Levende Backlog' }), '\n', (0, r.jsx)(s.Gn, { component: y, headingLevel: 3 })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  98507: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [99612, 99612], './utrecht-backdrop.entry.js': [191, 191], './utrecht-breadcrumb-nav.entry.js': [95643, 95643], './utrecht-checkbox.entry.js': [41865, 41865], './utrecht-column-layout.entry.js': [11868, 11868], './utrecht-contact-card-template.entry.js': [83069, 83069], './utrecht-custom-checkbox.entry.js': [64916, 64916], './utrecht-data-list-actions.entry.js': [27897, 27897], './utrecht-data-list-item.entry.js': [63619, 63619], './utrecht-data-list-key.entry.js': [5503, 5503], './utrecht-data-list-value.entry.js': [5183, 5183], './utrecht-data-list.entry.js': [17399, 17399], './utrecht-digid-button.entry.js': [36383, 36383], './utrecht-digid-logo.entry.js': [76975, 76975], './utrecht-eherkenning-logo.entry.js': [6453, 6453], './utrecht-eidas-logo.entry.js': [48911, 48911], './utrecht-form-field-error-message.entry.js': [59077, 59077], './utrecht-form-toggle.entry.js': [77346, 77346], './utrecht-html-content.entry.js': [57805, 77160], './utrecht-icon-afspraak-maken.entry.js': [82758, 82758], './utrecht-icon-afval-container.entry.js': [99748, 99748], './utrecht-icon-afval-containerpas.entry.js': [87122, 87122], './utrecht-icon-afval-kalender.entry.js': [44408, 44408], './utrecht-icon-afval-pmd.entry.js': [30590, 30590], './utrecht-icon-afval-scheiden.entry.js': [52052, 52052], './utrecht-icon-afval.entry.js': [51073, 51073], './utrecht-icon-afvalkalender.entry.js': [61043, 61043], './utrecht-icon-alleen.entry.js': [9137, 9137], './utrecht-icon-arrow.entry.js': [9698, 9698], './utrecht-icon-auto.entry.js': [37949, 37949], './utrecht-icon-begroting.entry.js': [22552, 22552], './utrecht-icon-bestemmingsplan.entry.js': [54782, 54782], './utrecht-icon-betaaldatum.entry.js': [40398, 40398], './utrecht-icon-bewijsstukken.entry.js': [4859, 4859], './utrecht-icon-bijstand.entry.js': [1813, 1813], './utrecht-icon-blad.entry.js': [32273, 32273], './utrecht-icon-bouwproject.entry.js': [68732, 68732], './utrecht-icon-brandgevaar.entry.js': [85576, 85576], './utrecht-icon-brief-betalen.entry.js': [6416, 6416], './utrecht-icon-checkmark.entry.js': [80180, 80180], './utrecht-icon-chevron-down.entry.js': [37822, 37822], './utrecht-icon-chevron-left.entry.js': [47567, 47567], './utrecht-icon-chevron-right.entry.js': [80431, 80431], './utrecht-icon-chevron-up.entry.js': [78767, 78767], './utrecht-icon-close.entry.js': [93658, 93658], './utrecht-icon-college-b-w.entry.js': [5132, 5132], './utrecht-icon-container-bio.entry.js': [8353, 8353], './utrecht-icon-container-glas.entry.js': [95483, 95483], './utrecht-icon-container-groenafval.entry.js': [39280, 39280], './utrecht-icon-container-met-zak.entry.js': [12825, 12825], './utrecht-icon-container-papier.entry.js': [43897, 43897], './utrecht-icon-container-pmd.entry.js': [12335, 12335], './utrecht-icon-container-restafval.entry.js': [74123, 74123], './utrecht-icon-container-textiel.entry.js': [54807, 54807], './utrecht-icon-container.entry.js': [98078, 98078], './utrecht-icon-cross.entry.js': [86788, 86788], './utrecht-icon-dakloos.entry.js': [15285, 15285], './utrecht-icon-dementie.entry.js': [87989, 87989], './utrecht-icon-documenten.entry.js': [38391, 38391], './utrecht-icon-duurzaam.entry.js': [87714, 87714], './utrecht-icon-eenzaamheid.entry.js': [85512, 85512], './utrecht-icon-eikenprocessie.entry.js': [7650, 7650], './utrecht-icon-elektrisch-rijden.entry.js': [75634, 75634], './utrecht-icon-energie-vergoeding.entry.js': [77197, 77197], './utrecht-icon-energietransitie.entry.js': [39032, 39032], './utrecht-icon-error.entry.js': [66684, 66684], './utrecht-icon-evenementen.entry.js': [16, 16], './utrecht-icon-facebook.entry.js': [96252, 96252], './utrecht-icon-fiets.entry.js': [86846, 86846], './utrecht-icon-filter.entry.js': [76417, 76417], './utrecht-icon-geboorte.entry.js': [77112, 77112], './utrecht-icon-gebruiker-centraal.entry.js': [14040, 14040], './utrecht-icon-gebruiker-ingelogd.entry.js': [69088, 69088], './utrecht-icon-gegevenswoordenboek.entry.js': [98552, 98552], './utrecht-icon-geluid.entry.js': [56042, 56042], './utrecht-icon-gemeente-locatie.entry.js': [51295, 51295], './utrecht-icon-gemeenteraad.entry.js': [73738, 73738], './utrecht-icon-gereedschap.entry.js': [11758, 11758], './utrecht-icon-gezicht.entry.js': [45251, 45251], './utrecht-icon-gezin.entry.js': [31054, 31559], './utrecht-icon-glas-afval.entry.js': [36827, 36827], './utrecht-icon-glijbaan.entry.js': [64246, 64246], './utrecht-icon-grafiek.entry.js': [8038, 8038], './utrecht-icon-grofvuil-ophalen.entry.js': [53455, 53455], './utrecht-icon-grofvuil.entry.js': [97402, 97402], './utrecht-icon-hamburger-menu.entry.js': [96403, 96403], './utrecht-icon-herdenking.entry.js': [21537, 21537], './utrecht-icon-hondenbelasting.entry.js': [2587, 2587], './utrecht-icon-horeca.entry.js': [42583, 42583], './utrecht-icon-horecavergunning.entry.js': [76720, 76720], './utrecht-icon-huis-en-omgeving.entry.js': [70389, 70389], './utrecht-icon-huis.entry.js': [74718, 74718], './utrecht-icon-huishoudelijk-geweld.entry.js': [71742, 71742], './utrecht-icon-hulp-huishouden.entry.js': [15743, 15743], './utrecht-icon-hulp-vervoer.entry.js': [64536, 64536], './utrecht-icon-hulp-zorg.entry.js': [20600, 20600], './utrecht-icon-hulpmiddelen-gezin.entry.js': [78043, 78043], './utrecht-icon-hulpverlening.entry.js': [33031, 33031], './utrecht-icon-idee.entry.js': [83921, 83921], './utrecht-icon-informatie.entry.js': [70196, 70196], './utrecht-icon-information.entry.js': [85103, 85103], './utrecht-icon-innovatie.entry.js': [57154, 57154], './utrecht-icon-inspraak-inwoners.entry.js': [47395, 47395], './utrecht-icon-instagram.entry.js': [20876, 20876], './utrecht-icon-kalender.entry.js': [66077, 66077], './utrecht-icon-kennis.entry.js': [80033, 80033], './utrecht-icon-kerstbomen.entry.js': [31714, 31714], './utrecht-icon-klachten.entry.js': [17400, 17400], './utrecht-icon-kroon.entry.js': [90589, 90589], './utrecht-icon-laadpaal.entry.js': [29065, 29065], './utrecht-icon-language.entry.js': [66689, 66689], './utrecht-icon-lantaarnpaal-oud.entry.js': [32607, 32607], './utrecht-icon-lantaarnpaal.entry.js': [10601, 10601], './utrecht-icon-leren.entry.js': [66234, 66234], './utrecht-icon-let-op.entry.js': [87315, 87315], './utrecht-icon-linkedin.entry.js': [94398, 94398], './utrecht-icon-list-check.entry.js': [40870, 40870], './utrecht-icon-list-number.entry.js': [28720, 28720], './utrecht-icon-list.entry.js': [65300, 65300], './utrecht-icon-loupe.entry.js': [97618, 97618], './utrecht-icon-markt.entry.js': [47171, 47171], './utrecht-icon-melding-boom.entry.js': [38023, 38023], './utrecht-icon-melding-klacht.entry.js': [60266, 60266], './utrecht-icon-melding-openbareruimte.entry.js': [41320, 41320], './utrecht-icon-melding-verlichting.entry.js': [80027, 80027], './utrecht-icon-melding.entry.js': [19928, 19928], './utrecht-icon-menselijk.entry.js': [26939, 26939], './utrecht-icon-menu-dot-open.entry.js': [407, 407], './utrecht-icon-menu-dot.entry.js': [69162, 69162], './utrecht-icon-meterkast.entry.js': [1176, 1176], './utrecht-icon-milieu-ontheffing.entry.js': [19679, 19679], './utrecht-icon-milieu-zone.entry.js': [52671, 52671], './utrecht-icon-minus-vertical.entry.js': [653, 653], './utrecht-icon-minus.entry.js': [81403, 81403], './utrecht-icon-mobiliteit.entry.js': [97788, 97788], './utrecht-icon-natuur.entry.js': [31377, 31377], './utrecht-icon-nieuw-huis.entry.js': [78740, 78740], './utrecht-icon-nieuwsbrief.entry.js': [22097, 22097], './utrecht-icon-nummerbord.entry.js': [56251, 56251], './utrecht-icon-om-het-huis.entry.js': [77372, 77372], './utrecht-icon-omgeving.entry.js': [27917, 27917], './utrecht-icon-omgevingsvisie.entry.js': [51285, 51285], './utrecht-icon-omgevingswet.entry.js': [18287, 18287], './utrecht-icon-onderhoud.entry.js': [42629, 42629], './utrecht-icon-ondernemen.entry.js': [84131, 84131], './utrecht-icon-openingstijden.entry.js': [50640, 50640], './utrecht-icon-over-de-stad.entry.js': [3350, 3350], './utrecht-icon-overlijden.entry.js': [29052, 29052], './utrecht-icon-panden.entry.js': [73874, 73874], './utrecht-icon-park.entry.js': [62396, 62396], './utrecht-icon-parkeerkaart.entry.js': [67e3, 67e3], './utrecht-icon-parkeervergunning.entry.js': [54866, 54866], './utrecht-icon-parken.entry.js': [51831, 51831], './utrecht-icon-parkeren-bedrijven.entry.js': [30200, 30200], './utrecht-icon-parkeren-betaalautomaat.entry.js': [8568, 8568], './utrecht-icon-parkeren-betalen.entry.js': [87733, 87733], './utrecht-icon-parkeren.entry.js': [20030, 20030], './utrecht-icon-participatie-campagne.entry.js': [34913, 34913], './utrecht-icon-participatie-like.entry.js': [38139, 38139], './utrecht-icon-participatie-pitch.entry.js': [11063, 11063], './utrecht-icon-paspoort.entry.js': [23249, 23249], './utrecht-icon-presentatie.entry.js': [21904, 21904], './utrecht-icon-prijskaartje.entry.js': [35137, 35137], './utrecht-icon-read-aloud.entry.js': [65225, 65225], './utrecht-icon-rijbewijs.entry.js': [77863, 77863], './utrecht-icon-rioolheffing.entry.js': [34030, 34030], './utrecht-icon-rolstoel.entry.js': [25514, 25514], './utrecht-icon-schild-gemeente-utrecht.entry.js': [80627, 80627], './utrecht-icon-search.entry.js': [48233, 48233], './utrecht-icon-shoppen.entry.js': [93607, 93607], './utrecht-icon-sinterklaas.entry.js': [69869, 69869], './utrecht-icon-slechtziende-hoordende.entry.js': [26489, 26489], './utrecht-icon-sport-en-cultuur.entry.js': [45330, 45330], './utrecht-icon-sport-voetbal.entry.js': [43350, 43350], './utrecht-icon-sport.entry.js': [18842, 18842], './utrecht-icon-stookverbod.entry.js': [87544, 87544], './utrecht-icon-strand.entry.js': [8824, 8824], './utrecht-icon-strooien.entry.js': [21764, 21764], './utrecht-icon-subsidie-gezin.entry.js': [12795, 12795], './utrecht-icon-subsidie.entry.js': [74362, 74362], './utrecht-icon-t-shirt.entry.js': [63424, 63424], './utrecht-icon-thuiswerken.entry.js': [45784, 45784], './utrecht-icon-toeslag.entry.js': [74545, 74545], './utrecht-icon-trein.entry.js': [88369, 88369], './utrecht-icon-trouwen.entry.js': [76990, 76990], './utrecht-icon-twitter.entry.js': [35149, 35149], './utrecht-icon-user.entry.js': [19878, 19878], './utrecht-icon-uw-wijk.entry.js': [45596, 45596], './utrecht-icon-vaccinatie.entry.js': [8305, 8305], './utrecht-icon-veilige-wijk.entry.js': [49973, 49973], './utrecht-icon-vergaderen.entry.js': [74755, 74755], './utrecht-icon-vergaderendigitaal.entry.js': [19918, 19918], './utrecht-icon-vergoeding.entry.js': [61950, 61950], './utrecht-icon-verhuizen.entry.js': [64874, 64874], './utrecht-icon-verkeerslicht.entry.js': [85865, 85865], './utrecht-icon-verkiezingen.entry.js': [82844, 82844], './utrecht-icon-verslaving.entry.js': [45363, 45363], './utrecht-icon-vervoersvoorziening.entry.js': [45210, 45210], './utrecht-icon-virus.entry.js': [79680, 79680], './utrecht-icon-vluchtelingen.entry.js': [87776, 87776], './utrecht-icon-voorzieningen-vervoer.entry.js': [80081, 80081], './utrecht-icon-vrijwilligerswerk.entry.js': [63802, 63802], './utrecht-icon-vuilnisbak.entry.js': [21374, 21374], './utrecht-icon-vuilniszak.entry.js': [29190, 29190], './utrecht-icon-vuurwerk.entry.js': [74652, 74652], './utrecht-icon-wandelstok.entry.js': [30982, 30982], './utrecht-icon-warm.entry.js': [97377, 97377], './utrecht-icon-warning.entry.js': [44075, 44075], './utrecht-icon-werken.entry.js': [59390, 59390], './utrecht-icon-werkzaamheden.entry.js': [51112, 51112], './utrecht-icon-whatsapp.entry.js': [26039, 26039], './utrecht-icon-wonen-kosten.entry.js': [18118, 18118], './utrecht-icon-woning-zoeken.entry.js': [29197, 29197], './utrecht-icon-x.entry.js': [19362, 19362], './utrecht-icon-youtube.entry.js': [20187, 20187], './utrecht-icon-zelfstandig-wonen.entry.js': [61393, 61393], './utrecht-icon-zoom-minus.entry.js': [50545, 50545], './utrecht-icon-zoom-plus.entry.js': [68278, 68278], './utrecht-icon-zoomin.entry.js': [25870, 25870], './utrecht-icon-zoomout.entry.js': [48005, 48005], './utrecht-icon-zorg-huis.entry.js': [7463, 7463], './utrecht-icon-zweefpaal.entry.js': [66426, 66426], './utrecht-icon-zwemmen.entry.js': [47566, 47566], './utrecht-logo-button.entry.js': [54250, 54250], './utrecht-map-marker.entry.js': [99319, 99319], './utrecht-multiline-data.entry.js': [13746, 13746], './utrecht-page-footer.entry.js': [2950, 2950], './utrecht-pagination.entry.js': [50370, 50370], './utrecht-progress-list-item.entry.js': [34351, 34351], './utrecht-progress-list.entry.js': [25989, 25989], './utrecht-progress-sublist-item.entry.js': [48316, 48316], './utrecht-sidenav.entry.js': [78510, 78510], './utrecht-surface.entry.js': [18066, 89905], './utrecht-table-body.entry.js': [92786, 92786], './utrecht-table-caption.entry.js': [66250, 24469], './utrecht-table-cell.entry.js': [75028, 75028], './utrecht-table-footer.entry.js': [78800, 78800], './utrecht-table-header-cell.entry.js': [99930, 99930], './utrecht-table-header.entry.js': [10472, 10472], './utrecht-table-row.entry.js': [45872, 45872], './utrecht-table.entry.js': [42176, 42176], './utrecht-textarea.entry.js': [41192, 41192], './utrecht-textbox.entry.js': [88451, 88451] };
   function i(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 98507), (e.exports = i);
  },
  68963: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => l, aY: () => o, um: () => d, wu: () => c });
   var r = t(46506),
    i = t(4814);
   t(75271);
   const a = { cardgroup: 'cardgroup_0VVt', 'cardgroup--small': 'cardgroup--small_BDzz', 'cardgroup--medium': 'cardgroup--medium_xS6r', 'cardgroup--large': 'cardgroup--large_Tjo8', cardgroup__card: 'cardgroup__card_emnt', 'cardgroup__card--small': 'cardgroup__card--small_bxfC', 'cardgroup__card--large': 'cardgroup__card--large_PGe3', cardgroup__link: 'cardgroup__link_YISR', card__illustration: 'card__illustration_MVXv', 'card__illustration--background': 'card__illustration--background_cTcZ', card__content: 'card__content_LYKG' };
   var s = t(52676);
   const c = (e) => {
     let { background: n, children: t, className: r, ...c } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)(a.card__illustration, n && a['card__illustration--background'], r), ...c, children: t });
    },
    o = (e) => (0, s.jsx)('div', { className: (0, i.Z)(a.card__content), ...e }),
    l = (e) => {
     let { href: n, appearance: t, className: c, component: o = 'div', children: l } = e;
     const d = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      h = (0, s.jsx)(d, { className: (0, i.Z)(a.cardgroup__card, a[`cardgroup__card--${t}`], c), children: l });
     return n ? (0, s.jsx)(r.rU, { href: n, boxContent: !0, className: a.cardgroup__link, children: h }) : h;
    },
    d = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)(a.cardgroup, a[`cardgroup--${n}`], r), children: t });
    };
  },
  23952: (e, n, t) => {
   'use strict';
   t.d(n, { Gn: () => L, cN: () => S, W: () => T, Rv: () => D });
   var r = t(56150),
    i = t(4814),
    a = (t(75271), t(39854)),
    s = t(7522),
    c = t(62559),
    o = t(79734),
    l = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(a.Z, {}), github: (0, d.jsx)(s.Z, {}), npm: (0, d.jsx)(c.Z, {}), storybook: (0, d.jsx)(o.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(l.Z, {}) });
    };
   var j = t(68963);
   const g = { 'definition-of-done': 'definition-of-done_hA8T', 'definition-of-done--help-wanted': 'definition-of-done--help-wanted_eyW6', 'definition-of-done--community': 'definition-of-done--community_s9uY', 'definition-of-done--candidate': 'definition-of-done--candidate_kcli', 'definition-of-done--hall-of-fame': 'definition-of-done--hall-of-fame_uZjI', 'implementation-card-group': 'implementation-card-group_aUZX', 'implementation-card': 'implementation-card_nkoa' };
   var p = t(58322);
   const m = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(p.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = t(47700).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--component-progress-background-color--checked, currentColor)', key: 'Done', value: n, stroke: '2' },
        { fill: 'var(--component-progress-background-color--unchecked, #ddd)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var v = t(86964),
    y = t(72657),
    k = t(46506),
    x = t(25953);
   const b = 'task-list_hh8j',
    f = 'task-list-item_oypx',
    _ = 'task-list-item__marker_Eefn',
    w = 'task-list-item__marker--checked_y8Vc',
    z = 'task-list-item__marker-label_XAyi',
    C = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: b, children: n });
    },
    A = (e) => {
     let { checked: n, title: t, description: r } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)(f), children: [(0, d.jsxs)('div', { className: (0, i.Z)(_, { [w]: n }), children: [(0, d.jsx)('span', { className: z, children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(x.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(k.aC, { role: 'presentation', children: t }), (0, d.jsx)(k.nv, { children: r })] })] });
    };
   var N = t(14669);
   const S = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => N.e9.includes(e.id)),
      s = a && N.e9.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: s.map((e) => ({
        className: (0, i.Z)(g['definition-of-done'], e && g[`definition-of-done--${(0, N.mA)(e.title)}`]),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(C, {
            children: e.tasks.map((e) => {
             let { checked: n, name: t, id: r } = e;
             return (0, d.jsx)(A, { checked: n, title: t, description: (0, N.Q6)(r) }, r);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    T = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => !N.e9.includes(e.id));
     return n && a.length
      ? (0, d.jsx)(j.um, {
         appearance: 'large',
         className: (0, i.Z)(g['implementation-card-group']),
         children: a
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const n = e.tasks.find((e) => {
             let { name: n } = e;
             return 'Naam' === n;
            }),
            a = n?.value,
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${a} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${a} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${a} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            c = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return s.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            j.Zb,
            {
             className: (0, i.Z)(g['implementation-card']),
             children: (0, d.jsxs)(j.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(m, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               c.length > 0 &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: c.map((e) => {
                    const n = s.get(e.name);
                    return n ? (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: n.brand }), ' ', n.desciption] }, e.id) : (0, d.jsx)(d.Fragment, {});
                   }),
                  }),
                 ],
                }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.nv, { children: 'Er zijn nog geen implementaties' });
    },
    L = (e) => {
     let { component: n } = e;
     return n && (0, d.jsxs)(r.nv, { children: ['De ', n.title, ' component staat bij NL Design System in de', ' ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'levende backlog' }), ', heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!'] });
    },
    D = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const a = n && N.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(y.V, { level: t, suffix: a && (0, d.jsx)(v.y, { state: a }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  86964: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => o });
   var r = t(46506),
    i = t(4814);
   t(75271);
   const a = { 'estafette-badge': 'estafette-badge_amWR', 'estafette-badge--todo': 'estafette-badge--todo_EYw0', 'estafette-badge--help-wanted': 'estafette-badge--help-wanted_N7qd', 'estafette-badge--community': 'estafette-badge--community_FJTQ', 'estafette-badge--candidate': 'estafette-badge--candidate_Q2O5', 'estafette-badge--hall-of-fame': 'estafette-badge--hall-of-fame_SqQ1' };
   var s = t(14669),
    c = t(52676);
   const o = (e) => {
    let { state: n } = e;
    const t = (0, s.mA)(n);
    return (0, c.jsx)(r.Ou, { className: (0, i.Z)(a['estafette-badge'], t && a[`estafette-badge--${t}`]), children: n });
   };
  },
  72657: (e, n, t) => {
   'use strict';
   t.d(n, { V: () => s });
   var r = t(4814);
   t(75271);
   const i = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var a = t(52676);
   const s = (e) => {
    let { children: n, className: t, level: s = 1, suffix: c, ...o } = e;
    return (0, a.jsxs)('hgroup', { className: (0, r.Z)(i['nlds-inline-heading-group'], `utrecht-heading-${s}`, t), ...o, children: [(0, a.jsx)('h1', { className: (0, r.Z)(i['nlds-inline-heading-group__heading']), children: n }), c && (0, a.jsxs)('p', { className: (0, r.Z)(i['nlds-inline-heading-group__suffix']), children: [c ? ' ' : '', c] })] });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(24785),
    i = t(46506),
    a = (t(75271), t(52676));
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    c = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, a.jsx)('img', { ...r, src: s(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...c[n - 1] };
      return (e.h1 = () => null), e;
     }
     return c[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: s = '' } = e;
     return (0, a.jsx)(r.Z, { components: { ...l(t, i), ...o(s) }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, BA: () => c, Q6: () => a, e9: () => s, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
 },
]);
