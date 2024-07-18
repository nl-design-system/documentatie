(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [23221],
 {
  51102: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => v, contentTitle: () => h, default: () => x, description: () => m, frontMatter: () => d, issueNumber: () => y, metadata: () => u, title: () => p, toc: () => g });
   var r = t(52676),
    i = t(24785),
    a = t(50549);
   function s(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'paragraph', children: 'Paragraph' }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.'] }), '\n', (0, r.jsx)(n.h2, { id: 'html', children: 'HTML' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor altijd het ', (0, r.jsx)(n.code, { children: '<p>' }), ' HTML-element, die heeft automatisch de goede ', (0, r.jsxs)(n.a, { href: 'https://w3c.github.io/aria/#paragraph', children: [(0, r.jsx)(n.code, { children: 'paragraph' }), ' role'] }), ' in de accessibility tree (dat is nodig voor WCAG eis 1.3.1). Voor een ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' gebruik je ', (0, r.jsx)(n.code, { children: '<p><b>\u2026</b></p>' }), '. Voor ', (0, r.jsx)(n.em, { children: 'small print' }), ' gebruik je ', (0, r.jsx)(n.code, { children: '<p><small>\u2026</small></p>' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Zelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het ', (0, r.jsx)(n.code, { children: '<p>' }), " element is er tussen alinea's duidelijke witruimte (WCAG 1.4.12). Door het ", (0, r.jsx)(n.code, { children: '<b>' }), ' element is de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' visueel herkenbaar. Door ', (0, r.jsx)(n.code, { children: '<small>' }), ' is ', (0, r.jsx)(n.em, { children: 'small print' }), ' visueel herkenbaar.'] }), '\n', (0, r.jsx)(n.h3, { id: 'lead-paragraph', children: 'Lead Paragraph' }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' is een extra opvallende variant van de ', (0, r.jsx)(n.em, { children: 'paragraph' }), '. Gebruik de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' onder de ', (0, r.jsx)(n.em, { children: 'heading' }), ' van een ', (0, r.jsx)(n.em, { children: 'article' }), ' voor een introductietekst.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Schrijf in de eerste alinea kort en bondig waar de pagina over gaat, zodat de lezer kan besluiten om verder te lezen. Gebruik hiervoor de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' variant zodat de tekst extra opvallend is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je meer dan circa 30 woorden of 200 tekens nodig hebt, gebruik dan niet de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' variant zodat de tekst een leesbare lettergrootte heeft voor langere teksten.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' niet wanneer je een ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' voor een ander doel extra opvallend wil maken, ontwikkel dan een eigen variant.'] }), '\n', (0, r.jsx)(n.h2, { id: 'inhoud', children: 'Inhoud' }), '\n', (0, r.jsx)(n.p, { children: "Groepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft. Teksten met alinea's die niet bovengemiddeld lang zijn makkelijker te begrijpen als je pauze neemt, en door het grouperen is informatie sneller terug te vinden." }), '\n', (0, r.jsx)(n.p, { children: "Overweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea's." }), '\n', (0, r.jsx)(n.h2, { id: 'layout', children: 'Layout' }), '\n', (0, r.jsx)(n.h3, { id: 'lettergrootte', children: 'Lettergrootte' }), '\n', (0, r.jsxs)(n.p, { children: ['Kies de lettergrootte niet te klein, bijvoorbeeld ', (0, r.jsx)(n.code, { children: '16px' }), ' of groter. Gebruik ', (0, r.jsx)(n.code, { children: 'rem' }), ' in CSS in plaats van ', (0, r.jsx)(n.code, { children: 'px' }), ', zodat de font-size van de ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' ook verdubbelt wanneer gebruikers via hun besturingssysteem of ', (0, r.jsx)(n.em, { children: 'user stylesheet' }), ' de standaard lettergroote 200% groter maken. (', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#resize-text', children: 'WCAG eis 1.4.4' }), ') Gebruikers moeten de lettergrootte vier keer groter kunnen maken met browser zoom. (', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#reflow', children: 'WCAG eis 1.4.10' }), ') Maak zoom niet kapot door gebruik van de ', (0, r.jsx)(n.code, { children: 'vw' }), ' of ', (0, r.jsx)(n.code, { children: 'vh' }), ' eenheden in CSS die niet altijd goed werken met zoom.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de design token ', (0, r.jsx)(n.code, { children: 'nl.paragraph.font-size' }), ' als je niet de standaard-grootte wilt van ', (0, r.jsx)(n.code, { children: 'nl.document.font-size' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor de lead paragraph variant is het gebruikelijk de lettergrootte 10% \xe1 20% groter te kiezen (', (0, r.jsx)(n.code, { children: 'nl.paragraph.lead.font-size' }), ').'] }), '\n', (0, r.jsx)(n.h3, { id: 'regelhoogte', children: 'Regelhoogte' }), '\n', (0, r.jsxs)(n.p, { children: ['Stel de regelhoogte met ', (0, r.jsx)(n.code, { children: 'nl.paragraph.line-height' }), ' in voor voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Standaard gebruiken browsers circa ', (0, r.jsx)(n.code, { children: '1.2' }), ', maar ', (0, r.jsx)(n.code, { children: '1.5' }), ' is voor veel gebruikers beter leesbaar. Voor WCAG 1.4.8 is het ook belangrijk om ', (0, r.jsx)(n.code, { children: '1.5' }), ' of groter aan te bieden.'] }), '\n', (0, r.jsx)(n.h3, { id: 'afstand-tussen-alineas', children: "Afstand tussen alinea's" }), '\n', (0, r.jsxs)(n.p, { children: ["Kies voldoende afstand tussen alinea's, in elk geval 50% groter dan afstand tussen tekstregels. (WCAG 1.4.8). Gebruik hiervoor de design tokens ", (0, r.jsx)(n.code, { children: 'nl.paragraph.margin-block-start' }), ' en ', (0, r.jsx)(n.code, { children: 'nl.paragraph.margin-block-end' }), '.'] }), '\n', (0, r.jsx)(n.h3, { id: 'kleurgebruik', children: 'Kleurgebruik' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.code, { children: 'nl.paragraph.color' }), ': kies voldoende contrast ten opzichte van de achtergrondkleur, van bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'nl.document.background-color' }), ' of ', (0, r.jsx)(n.code, { children: 'nl.page.background-color' }), '. Kies in plaats van zwart voor zeer donkergrijs, dat is beter leesbaar op beeldschermen. Een contrastverhouding van 7:1 is ideaal. (WCAG 1.4.3 en WCAG 1.4.6)'] }), '\n', (0, r.jsx)(n.h3, { id: 'regellengte', children: 'Regellengte' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg dat de lengte van de tekst niet te lang wordt, bijvoorbeeld door deze design token in te stellen: ', (0, r.jsx)(n.code, { children: 'nl.article.max-inline-size' }), '. De ideale regellengte verschilt per schrift en taal, maar ergens tussen de 50 en 75 tekens voor Nederlands is prima. Je kunt in CSS bijvoorbeeld de ', (0, r.jsx)(n.code, { children: 'ch' }), ' eenheid gebruiken: ', (0, r.jsx)(n.code, { children: '--nl-article-max-inline-size: 60ch' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor WCAG 1.4.8 is het nodig dat de regellengte beperkt kan worden tot maximaal 80 tekens (', (0, r.jsx)(n.code, { children: '80ch' }), '), bijvoorbeeld door de viewport van de browser kleiner te maken.'] }), '\n', (0, r.jsx)(n.h3, { id: 'tekstuitlijning', children: 'Tekstuitlijning' }), '\n', (0, r.jsxs)(n.p, { children: ['Tekst dient uitsluitend links uitgelijnd zijn, voor Nederlandse teksten. Gebruik daarvoor ', (0, r.jsx)(n.code, { children: 'text-align: start' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.code, { children: 'text-align: justify' }), ' moet vermeden kunnen worden volgens WCAG 1.4.8, dus gebruik deze voor het gemak helemaal niet. Rechts uitlijnen en tekst centreren moet je ook niet gebruiken voor lopende tekst.'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-het-niet-moet', children: 'Hoe het niet moet' }), '\n', (0, r.jsx)(n.h3, { id: 'geen-opmaak', children: 'Geen opmaak' }), '\n', (0, r.jsxs)(n.p, { children: ['Geen ', (0, r.jsx)(n.code, { children: 'p' }), ' gebruiken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n  <h1>Interessante pagina</h1>\n  Deze eerste tekst ziet er misschien prima uit.\n  <p>Maar ook de eerste paragraaf hoort in een p-element te staan.</p>\n</section>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-lege-paragraaf', children: 'Lege paragraaf' }), '\n', (0, r.jsxs)(n.p, { children: ['Een lege ', (0, r.jsx)(n.code, { children: 'p' }), ' gebruiken, bijvoorbeeld om extra afstand te maken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n  <h1>Voorbeeld pagina</h1>\n  <p>Deze pagina ziet er op het oog misschien prima uit.</p>\n  <p>&nbsp;</p>\n  <p>Maar sommige screen readers zeggen dat er drie paragrafen zijn, dat is verwarrend.</p>\n</section>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-semantiek', children: 'Geen semantiek' }), '\n', (0, r.jsxs)(n.p, { children: ['Een ', (0, r.jsx)(n.code, { children: 'div' }), ' gebruiken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n    <h1>Interessante pagina</h1>\n    <div>Deze eerste tekst ziet er misschien prima uit, maar de paragraph role ontbreek in de accessibility tree.</div>\n    <div role="paragraph">Gebruik gewoon een p-element in plaats van ARIA om de role te verkrijgen.</p>\n</section>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je tekstfragmenten na elkaar plaatst is het belangrijk dat je een element zoals paragraaf gebruikt (en niet een ', (0, r.jsx)(n.code, { children: 'inline' }), ' element zoals ', (0, r.jsx)(n.code, { children: 'span' }), ' of ', (0, r.jsx)(n.code, { children: 'label' }), '), zodat de twee tekstfragmenten los van elkaar worden voorgelezen door screen readers. Wanneer de CSS niet geladen kan worden, dan heeft ', (0, r.jsx)(n.code, { children: 'p' }), ' wel marge en ', (0, r.jsx)(n.code, { children: 'div' }), ' niet, in veel situaties zonder CSS is ', (0, r.jsx)(n.code, { children: 'p' }), ' daarom leesbaarder dan ', (0, r.jsx)(n.code, { children: 'div' }), '.'] }), '\n', (0, r.jsxs)(n.h3, { id: 'geen-inline', children: [(0, r.jsx)(n.code, { children: 'inline' }), ' in plaats van ', (0, r.jsx)(n.code, { children: 'block' }), '-elementen'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="name">Voornaam</label><span>Voornaam is verplicht</span>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Beter:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p><label for="name">Voornaam</label></p>\n<p>Voornaam is verplicht</p>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-overdreven-nadruk', children: 'Overdreven nadruk' }), '\n', (0, r.jsx)(n.p, { children: 'Benadruk niet een hele paragraaf, maar markeer het belangrijke gedeelte.' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p>\n  <strong\n    >Tenzij anders vermeld is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van toepassing.\n    Dit houdt in dat iedere vorm van hergebruik van de inhoud van deze site is toegestaan, tenzij bij of in een bepaald\n    onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een auteursrechtelijke\n    uitzondering van toepassing is.\n  </strong>\n</p>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Beter:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p>\n  <em>Tenzij anders vermeld</em> is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van\n  toepassing. Dit houdt in dat <strong>iedere vorm van hergebruik van de inhoud van deze site is toegestaan</strong>,\n  tenzij bij of in een bepaald onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een\n  auteursrechtelijke uitzondering van toepassing is.\n</p>\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'links', children: 'Links' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p', children: ['MDN: ', (0, r.jsx)(n.code, { children: '<p>' }), ': The Paragraph element'] }) }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsxs)(n.a, { href: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element', children: ['HTML specification: The ', (0, r.jsx)(n.code, { children: '<b>' }), ' element'] }), '. Bevat een voorbeeld van het ', (0, r.jsx)(n.code, { children: 'b' }), ' element voor lead paragraphs.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsxs)(n.a, { href: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element', children: ['HTML specification: The ', (0, r.jsx)(n.code, { children: '<small>' }), ' element'] }), '. Bevat een voorbeeld van het ', (0, r.jsx)(n.code, { children: 'small' }), ' element voor ', (0, r.jsx)(n.em, { children: 'small print' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taaladvies.net/lengte-van-alineas/', children: 'Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net' }) }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'relevante-wcag-regels', children: 'Relevante WCAG regels' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', children: 'WCAG eis 1.3.1' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', children: 'WCAG eis 1.4.3' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#resize-text', children: 'WCAG eis 1.4.4' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#visual-presentation', children: 'WCAG eis 1.4.8' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#reflow', children: 'WCAG eis 1.4.10' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#text-spacing', children: 'WCAG eis 1.4.12' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#language-of-parts', children: 'WCAG eis 3.1.2' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   var c = t(60851),
    l = t(57716);
   const d = { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'] },
    h = void 0,
    u = { id: 'componenten/paragraph/index', title: 'Paragraph', description: 'Toont een alinea aan tekst.', source: '@site/docs/componenten/paragraph/index.mdx', sourceDirName: 'componenten/paragraph', slug: '/paragraph', permalink: '/en/paragraph', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/paragraph/index.mdx', tags: [{ label: 'Community', permalink: '/en/tags/community' }], version: 'current', frontMatter: { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'] }, sidebar: 'componenten', previous: { title: 'Pagination', permalink: '/en/pagination' }, next: { title: 'Password input', permalink: '/en/password-input' } },
    j = {},
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Levende Backlog', id: 'levende-backlog', level: 2 },
    ],
    p = 'Paragraph',
    m = 'Toont een alinea aan tekst.',
    y = 115,
    v = a.find((e) => e.number === y);
   function k(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(c.Rv, { component: v, headingLevel: 1, description: m }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(c.cN, { component: v, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }), '\n', (0, r.jsx)(c.W, { component: v, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(l.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(o, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'levende-backlog', children: 'Levende Backlog' }), '\n', (0, r.jsx)(c.Gn, { component: v, headingLevel: 3 })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  82489: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [35914, 35914], './utrecht-backdrop.entry.js': [78370, 78370], './utrecht-breadcrumb-nav.entry.js': [87636, 87636], './utrecht-checkbox.entry.js': [43264, 43264], './utrecht-column-layout.entry.js': [85895, 85895], './utrecht-contact-card-template.entry.js': [28535, 28535], './utrecht-custom-checkbox.entry.js': [72109, 72109], './utrecht-data-list-actions.entry.js': [11828, 11828], './utrecht-data-list-item.entry.js': [7075, 7075], './utrecht-data-list-key.entry.js': [66376, 66376], './utrecht-data-list-value.entry.js': [57468, 57468], './utrecht-data-list.entry.js': [75315, 75315], './utrecht-digid-button.entry.js': [95967, 95967], './utrecht-digid-logo.entry.js': [45213, 45213], './utrecht-eherkenning-logo.entry.js': [61466, 61466], './utrecht-eidas-logo.entry.js': [93136, 93136], './utrecht-form-field-error-message.entry.js': [62090, 62090], './utrecht-form-toggle.entry.js': [22473, 22473], './utrecht-html-content.entry.js': [78498, 78498], './utrecht-icon-afspraak-maken.entry.js': [82661, 82661], './utrecht-icon-afval-container.entry.js': [24369, 24369], './utrecht-icon-afval-containerpas.entry.js': [34427, 34427], './utrecht-icon-afval-kalender.entry.js': [12291, 12291], './utrecht-icon-afval-pmd.entry.js': [94590, 94590], './utrecht-icon-afval-scheiden.entry.js': [44487, 44487], './utrecht-icon-afval.entry.js': [6003, 6003], './utrecht-icon-afvalkalender.entry.js': [57413, 57413], './utrecht-icon-alleen.entry.js': [97461, 97461], './utrecht-icon-arrow.entry.js': [30580, 30580], './utrecht-icon-auto.entry.js': [14251, 14251], './utrecht-icon-begroting.entry.js': [58789, 58789], './utrecht-icon-bestemmingsplan.entry.js': [36753, 36753], './utrecht-icon-betaaldatum.entry.js': [88601, 88601], './utrecht-icon-bewijsstukken.entry.js': [2510, 2510], './utrecht-icon-bijstand.entry.js': [97616, 97616], './utrecht-icon-blad.entry.js': [44618, 44618], './utrecht-icon-bouwproject.entry.js': [3338, 3338], './utrecht-icon-brandgevaar.entry.js': [43387, 43387], './utrecht-icon-brief-betalen.entry.js': [97558, 97558], './utrecht-icon-checkmark.entry.js': [76879, 76879], './utrecht-icon-chevron-down.entry.js': [1101, 1101], './utrecht-icon-chevron-left.entry.js': [64317, 64317], './utrecht-icon-chevron-right.entry.js': [49109, 49109], './utrecht-icon-chevron-up.entry.js': [38715, 38715], './utrecht-icon-close.entry.js': [16870, 16870], './utrecht-icon-college-b-w.entry.js': [39159, 39159], './utrecht-icon-container-bio.entry.js': [93639, 93639], './utrecht-icon-container-glas.entry.js': [27266, 27266], './utrecht-icon-container-groenafval.entry.js': [24062, 24062], './utrecht-icon-container-met-zak.entry.js': [17143, 17143], './utrecht-icon-container-papier.entry.js': [13006, 13006], './utrecht-icon-container-pmd.entry.js': [19085, 19085], './utrecht-icon-container-restafval.entry.js': [14891, 14891], './utrecht-icon-container-textiel.entry.js': [62693, 62693], './utrecht-icon-container.entry.js': [40428, 40428], './utrecht-icon-cross.entry.js': [15791, 15791], './utrecht-icon-dakloos.entry.js': [30328, 30328], './utrecht-icon-dementie.entry.js': [72816, 72816], './utrecht-icon-documenten.entry.js': [67328, 67328], './utrecht-icon-duurzaam.entry.js': [22458, 22458], './utrecht-icon-eenzaamheid.entry.js': [27430, 27430], './utrecht-icon-eikenprocessie.entry.js': [77518, 77518], './utrecht-icon-elektrisch-rijden.entry.js': [28077, 28077], './utrecht-icon-energie-vergoeding.entry.js': [77586, 77586], './utrecht-icon-energietransitie.entry.js': [3899, 3899], './utrecht-icon-error.entry.js': [80718, 80718], './utrecht-icon-evenementen.entry.js': [34208, 34208], './utrecht-icon-facebook.entry.js': [95700, 95700], './utrecht-icon-fiets.entry.js': [74613, 74613], './utrecht-icon-filter.entry.js': [16550, 16550], './utrecht-icon-geboorte.entry.js': [88448, 88448], './utrecht-icon-gebruiker-centraal.entry.js': [13120, 13120], './utrecht-icon-gebruiker-ingelogd.entry.js': [26259, 26259], './utrecht-icon-gegevenswoordenboek.entry.js': [88940, 88940], './utrecht-icon-geluid.entry.js': [78887, 78887], './utrecht-icon-gemeente-locatie.entry.js': [82769, 82769], './utrecht-icon-gemeenteraad.entry.js': [94051, 94051], './utrecht-icon-gereedschap.entry.js': [74492, 74492], './utrecht-icon-gezicht.entry.js': [96320, 96320], './utrecht-icon-gezin.entry.js': [10844, 10844], './utrecht-icon-glas-afval.entry.js': [25085, 25085], './utrecht-icon-glijbaan.entry.js': [77720, 77720], './utrecht-icon-grafiek.entry.js': [591, 591], './utrecht-icon-grofvuil-ophalen.entry.js': [68642, 10744], './utrecht-icon-grofvuil.entry.js': [26328, 26328], './utrecht-icon-hamburger-menu.entry.js': [12626, 12626], './utrecht-icon-herdenking.entry.js': [17093, 17093], './utrecht-icon-hondenbelasting.entry.js': [84492, 84492], './utrecht-icon-horeca.entry.js': [34543, 34543], './utrecht-icon-horecavergunning.entry.js': [7903, 7903], './utrecht-icon-huis-en-omgeving.entry.js': [15547, 15547], './utrecht-icon-huis.entry.js': [30872, 30872], './utrecht-icon-huishoudelijk-geweld.entry.js': [22217, 22217], './utrecht-icon-hulp-huishouden.entry.js': [57489, 57489], './utrecht-icon-hulp-vervoer.entry.js': [68564, 68564], './utrecht-icon-hulp-zorg.entry.js': [28832, 28832], './utrecht-icon-hulpmiddelen-gezin.entry.js': [8151, 8151], './utrecht-icon-hulpverlening.entry.js': [45578, 45578], './utrecht-icon-idee.entry.js': [8706, 8706], './utrecht-icon-informatie.entry.js': [14258, 14258], './utrecht-icon-information.entry.js': [90944, 90944], './utrecht-icon-innovatie.entry.js': [27218, 27218], './utrecht-icon-inspraak-inwoners.entry.js': [70448, 70448], './utrecht-icon-instagram.entry.js': [93562, 93562], './utrecht-icon-kalender.entry.js': [39540, 39540], './utrecht-icon-kennis.entry.js': [15218, 15218], './utrecht-icon-kerstbomen.entry.js': [14078, 14078], './utrecht-icon-klachten.entry.js': [47557, 47557], './utrecht-icon-kroon.entry.js': [77845, 77845], './utrecht-icon-laadpaal.entry.js': [51975, 51975], './utrecht-icon-language.entry.js': [61282, 61282], './utrecht-icon-lantaarnpaal-oud.entry.js': [39792, 39792], './utrecht-icon-lantaarnpaal.entry.js': [73457, 73457], './utrecht-icon-leren.entry.js': [40354, 40354], './utrecht-icon-let-op.entry.js': [55534, 55534], './utrecht-icon-linkedin.entry.js': [98, 98], './utrecht-icon-list-check.entry.js': [59816, 59816], './utrecht-icon-list-number.entry.js': [64596, 64596], './utrecht-icon-list.entry.js': [79548, 79548], './utrecht-icon-loupe.entry.js': [78905, 78905], './utrecht-icon-markt.entry.js': [86907, 86907], './utrecht-icon-melding-boom.entry.js': [24632, 24632], './utrecht-icon-melding-klacht.entry.js': [95311, 95311], './utrecht-icon-melding-openbareruimte.entry.js': [24644, 24644], './utrecht-icon-melding-verlichting.entry.js': [62232, 62232], './utrecht-icon-melding.entry.js': [27, 27], './utrecht-icon-menselijk.entry.js': [80444, 80444], './utrecht-icon-menu-dot-open.entry.js': [76990, 76990], './utrecht-icon-menu-dot.entry.js': [80841, 80841], './utrecht-icon-meterkast.entry.js': [35678, 35678], './utrecht-icon-milieu-ontheffing.entry.js': [68086, 68086], './utrecht-icon-milieu-zone.entry.js': [77660, 77660], './utrecht-icon-minus-vertical.entry.js': [87588, 87588], './utrecht-icon-minus.entry.js': [86232, 86232], './utrecht-icon-mobiliteit.entry.js': [47370, 47370], './utrecht-icon-natuur.entry.js': [75729, 75729], './utrecht-icon-nieuw-huis.entry.js': [80170, 80170], './utrecht-icon-nieuwsbrief.entry.js': [95839, 95839], './utrecht-icon-nummerbord.entry.js': [86095, 86095], './utrecht-icon-om-het-huis.entry.js': [78344, 78344], './utrecht-icon-omgeving.entry.js': [34631, 34631], './utrecht-icon-omgevingsvisie.entry.js': [92313, 92313], './utrecht-icon-omgevingswet.entry.js': [33994, 33994], './utrecht-icon-onderhoud.entry.js': [75222, 75222], './utrecht-icon-ondernemen.entry.js': [80819, 80819], './utrecht-icon-openingstijden.entry.js': [38629, 38629], './utrecht-icon-over-de-stad.entry.js': [92918, 92918], './utrecht-icon-overlijden.entry.js': [61356, 61356], './utrecht-icon-panden.entry.js': [95396, 95396], './utrecht-icon-park.entry.js': [61448, 61448], './utrecht-icon-parkeerkaart.entry.js': [77245, 77245], './utrecht-icon-parkeervergunning.entry.js': [84749, 84749], './utrecht-icon-parken.entry.js': [46839, 46839], './utrecht-icon-parkeren-bedrijven.entry.js': [9118, 9118], './utrecht-icon-parkeren-betaalautomaat.entry.js': [64926, 64926], './utrecht-icon-parkeren-betalen.entry.js': [1345, 1345], './utrecht-icon-parkeren.entry.js': [10454, 10454], './utrecht-icon-participatie-campagne.entry.js': [74054, 74054], './utrecht-icon-participatie-like.entry.js': [67088, 67088], './utrecht-icon-participatie-pitch.entry.js': [84929, 84929], './utrecht-icon-paspoort.entry.js': [76944, 76944], './utrecht-icon-presentatie.entry.js': [77179, 77179], './utrecht-icon-prijskaartje.entry.js': [30397, 30397], './utrecht-icon-read-aloud.entry.js': [28258, 28258], './utrecht-icon-rijbewijs.entry.js': [86107, 86107], './utrecht-icon-rioolheffing.entry.js': [9924, 9924], './utrecht-icon-rolstoel.entry.js': [10946, 10946], './utrecht-icon-schild-gemeente-utrecht.entry.js': [1144, 1144], './utrecht-icon-search.entry.js': [39911, 39911], './utrecht-icon-shoppen.entry.js': [95587, 95587], './utrecht-icon-sinterklaas.entry.js': [15508, 15508], './utrecht-icon-slechtziende-hoordende.entry.js': [36438, 36438], './utrecht-icon-sport-en-cultuur.entry.js': [54643, 54643], './utrecht-icon-sport-voetbal.entry.js': [33776, 33776], './utrecht-icon-sport.entry.js': [76389, 76389], './utrecht-icon-stookverbod.entry.js': [79526, 79526], './utrecht-icon-strand.entry.js': [76238, 76238], './utrecht-icon-strooien.entry.js': [39791, 39791], './utrecht-icon-subsidie-gezin.entry.js': [73481, 73481], './utrecht-icon-subsidie.entry.js': [34372, 34372], './utrecht-icon-t-shirt.entry.js': [42059, 42059], './utrecht-icon-thuiswerken.entry.js': [73612, 73612], './utrecht-icon-toeslag.entry.js': [8001, 8001], './utrecht-icon-trein.entry.js': [95981, 95981], './utrecht-icon-trouwen.entry.js': [13340, 13340], './utrecht-icon-twitter.entry.js': [4977, 55510], './utrecht-icon-user.entry.js': [95933, 95933], './utrecht-icon-uw-wijk.entry.js': [49509, 49509], './utrecht-icon-vaccinatie.entry.js': [20795, 20795], './utrecht-icon-veilige-wijk.entry.js': [73887, 73887], './utrecht-icon-vergaderen.entry.js': [86955, 86955], './utrecht-icon-vergaderendigitaal.entry.js': [54058, 54058], './utrecht-icon-vergoeding.entry.js': [44306, 44306], './utrecht-icon-verhuizen.entry.js': [32296, 32296], './utrecht-icon-verkeerslicht.entry.js': [49040, 49040], './utrecht-icon-verkiezingen.entry.js': [74518, 74518], './utrecht-icon-verslaving.entry.js': [2808, 2808], './utrecht-icon-vervoersvoorziening.entry.js': [90459, 90459], './utrecht-icon-virus.entry.js': [74513, 74513], './utrecht-icon-vluchtelingen.entry.js': [61823, 61823], './utrecht-icon-voorzieningen-vervoer.entry.js': [14275, 14275], './utrecht-icon-vrijwilligerswerk.entry.js': [2367, 2367], './utrecht-icon-vuilnisbak.entry.js': [60023, 60023], './utrecht-icon-vuilniszak.entry.js': [87830, 87830], './utrecht-icon-vuurwerk.entry.js': [76671, 77811], './utrecht-icon-wandelstok.entry.js': [75507, 75507], './utrecht-icon-warm.entry.js': [55046, 55046], './utrecht-icon-warning.entry.js': [2949, 2949], './utrecht-icon-werken.entry.js': [38313, 76671], './utrecht-icon-werkzaamheden.entry.js': [39239, 39239], './utrecht-icon-whatsapp.entry.js': [78901, 78901], './utrecht-icon-wonen-kosten.entry.js': [12698, 12698], './utrecht-icon-woning-zoeken.entry.js': [71409, 71409], './utrecht-icon-x.entry.js': [7775, 7775], './utrecht-icon-youtube.entry.js': [31933, 31933], './utrecht-icon-zelfstandig-wonen.entry.js': [83039, 83039], './utrecht-icon-zoom-minus.entry.js': [72736, 72736], './utrecht-icon-zoom-plus.entry.js': [99585, 99585], './utrecht-icon-zoomin.entry.js': [32529, 32529], './utrecht-icon-zoomout.entry.js': [55033, 55033], './utrecht-icon-zorg-huis.entry.js': [35337, 35337], './utrecht-icon-zweefpaal.entry.js': [39611, 39611], './utrecht-icon-zwemmen.entry.js': [81680, 81680], './utrecht-logo-button.entry.js': [47265, 47265], './utrecht-map-marker.entry.js': [60820, 60820], './utrecht-multiline-data.entry.js': [96681, 96681], './utrecht-page-footer.entry.js': [47455, 47455], './utrecht-pagination.entry.js': [59605, 59605], './utrecht-progress-list-item.entry.js': [79552, 79552], './utrecht-progress-list.entry.js': [15419, 15419], './utrecht-progress-sublist-item.entry.js': [67098, 67098], './utrecht-sidenav.entry.js': [60940, 60940], './utrecht-surface.entry.js': [31524, 31524], './utrecht-table-body.entry.js': [5271, 5271], './utrecht-table-caption.entry.js': [97036, 97036], './utrecht-table-cell.entry.js': [93419, 93419], './utrecht-table-footer.entry.js': [62675, 62675], './utrecht-table-header-cell.entry.js': [83937, 83937], './utrecht-table-header.entry.js': [87764, 87764], './utrecht-table-row.entry.js': [53095, 53095], './utrecht-table.entry.js': [86708, 86708], './utrecht-textarea.entry.js': [10420, 10420], './utrecht-textbox.entry.js': [41926, 41926] };
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
   (i.keys = () => Object.keys(r)), (i.id = 82489), (e.exports = i);
  },
  95929: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => l, aY: () => c, um: () => d, wu: () => o });
   var r = t(93706),
    i = t(4814);
   t(75271);
   const a = { cardgroup: 'cardgroup_0VVt', 'cardgroup--small': 'cardgroup--small_BDzz', 'cardgroup--medium': 'cardgroup--medium_xS6r', 'cardgroup--large': 'cardgroup--large_Tjo8', cardgroup__card: 'cardgroup__card_emnt', 'cardgroup__card--small': 'cardgroup__card--small_bxfC', 'cardgroup__card--medium': 'cardgroup__card--medium_xiP2', 'cardgroup__card--large': 'cardgroup__card--large_PGe3', cardgroup__link: 'cardgroup__link_YISR', card__illustration: 'card__illustration_MVXv', 'card__illustration--background': 'card__illustration--background_cTcZ', card__content: 'card__content_LYKG' };
   var s = t(52676);
   const o = (e) => {
     let { background: n, children: t, className: r, ...o } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)(a.card__illustration, n && a['card__illustration--background'], r), ...o, children: t });
    },
    c = (e) => (0, s.jsx)('div', { className: (0, i.Z)(a.card__content), ...e }),
    l = (e) => {
     let { href: n, appearance: t, className: o, component: c = 'div', children: l } = e;
     const d = (e) => ('article' === c ? (0, s.jsx)('article', { ...e }) : 'section' === c ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      h = (0, s.jsx)(d, { className: (0, i.Z)(a.cardgroup__card, a[`cardgroup__card--${t}`], o), children: l });
     return n ? (0, s.jsx)(r.rU, { href: n, boxContent: !0, className: a.cardgroup__link, children: h }) : h;
    },
    d = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, s.jsx)('div', { className: (0, i.Z)(a.cardgroup, a[`cardgroup--${n}`], r), children: t });
    };
  },
  60851: (e, n, t) => {
   'use strict';
   t.d(n, { Gn: () => L, cN: () => G, W: () => S, Rv: () => D });
   var r = t(47027),
    i = t(4814),
    a = (t(75271), t(39854)),
    s = t(7522),
    o = t(62559),
    c = t(79734),
    l = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(a.Z, {}), github: (0, d.jsx)(s.Z, {}), npm: (0, d.jsx)(o.Z, {}), storybook: (0, d.jsx)(c.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(l.Z, {}) });
    };
   var j = t(95929);
   const g = { 'definition-of-done': 'definition-of-done_hA8T', 'definition-of-done--help-wanted': 'definition-of-done--help-wanted_eyW6', 'definition-of-done--community': 'definition-of-done--community_s9uY', 'definition-of-done--candidate': 'definition-of-done--candidate_kcli', 'definition-of-done--hall-of-fame': 'definition-of-done--hall-of-fame_uZjI', 'implementation-card-group': 'implementation-card-group_aUZX', 'implementation-card': 'implementation-card_nkoa' };
   var p = t(64909);
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
   var y = t(42677);
   const v = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' },
    k = (e) => {
     let { children: n, level: t = 1, suffix: r } = e;
     return (0, d.jsxs)('hgroup', { className: (0, i.Z)(v['nlds-inline-heading-group'], `utrecht-heading-${t}`), children: [(0, d.jsx)('h1', { className: (0, i.Z)(v['nlds-inline-heading-group__heading']), children: n }), r && (0, d.jsxs)('p', { className: (0, i.Z)(v['nlds-inline-heading-group__suffix']), children: [r ? ' ' : '', r] })] });
    };
   var x = t(93706),
    b = t(49427);
   const f = 'task-list_hh8j',
    w = 'task-list-item_oypx',
    _ = 'task-list-item__marker_Eefn',
    z = 'task-list-item__marker--checked_y8Vc',
    C = 'task-list-item__marker-label_XAyi',
    A = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: f, children: n });
    },
    N = (e) => {
     let { checked: n, title: t, description: r } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)(w), children: [(0, d.jsxs)('div', { className: (0, i.Z)(_, { [z]: n }), children: [(0, d.jsx)('span', { className: C, children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(b.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(x.aC, { role: 'presentation', children: t }), (0, d.jsx)(x.nv, { children: r })] })] });
    };
   var T = t(14669);
   const G = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => T.e9.includes(e.id)),
      s = a && T.e9.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: s.map((e) => ({
        className: (0, i.Z)(g['definition-of-done'], e && g[`definition-of-done--${(0, T.mA)(e.title)}`]),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(A, {
            children: e.tasks.map((e) => {
             let { checked: n, name: t, id: r } = e;
             return (0, d.jsx)(N, { checked: n, title: t, description: (0, T.Q6)(r) }, r);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    S = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => !T.e9.includes(e.id));
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
            o = e.tasks.filter((e) => {
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
               o.length &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: o.map((e) => {
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
     const a = n && T.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(k, { level: t, suffix: a && (0, d.jsx)(y.y, { state: a }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  42677: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => c });
   var r = t(93706),
    i = t(4814);
   t(75271);
   const a = { 'estafette-badge': 'estafette-badge_amWR', 'estafette-badge--todo': 'estafette-badge--todo_EYw0', 'estafette-badge--help-wanted': 'estafette-badge--help-wanted_N7qd', 'estafette-badge--community': 'estafette-badge--community_FJTQ', 'estafette-badge--candidate': 'estafette-badge--candidate_Q2O5', 'estafette-badge--hall-of-fame': 'estafette-badge--hall-of-fame_SqQ1' };
   var s = t(14669),
    o = t(52676);
   const c = (e) => {
    let { state: n } = e;
    const t = (0, s.mA)(n);
    return (0, o.jsx)(r.Ou, { className: (0, i.Z)(a['estafette-badge'], t && a[`estafette-badge--${t}`]), children: n });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(24785),
    i = t(93706),
    a = (t(75271), t(52676));
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    c = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, a.jsx)('img', { ...r, src: s(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: s = '' } = e;
     return (0, a.jsx)(r.Z, { components: { ...l(t, i), ...c(s) }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, Q6: () => a, e9: () => s, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' });
  },
 },
]);
