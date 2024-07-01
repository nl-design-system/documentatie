(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [23221],
 {
  77241: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => k, contentTitle: () => h, default: () => x, description: () => m, frontMatter: () => d, illustration: () => y, issueNumber: () => v, metadata: () => u, title: () => p, toc: () => g });
   var r = t(52676),
    i = t(24785),
    a = t(61475);
   function s(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'paragraph', children: 'Paragraph' }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.'] }), '\n', (0, r.jsx)(n.h2, { id: 'html', children: 'HTML' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor altijd het ', (0, r.jsx)(n.code, { children: '<p>' }), ' HTML-element, die heeft automatisch de goede ', (0, r.jsxs)(n.a, { href: 'https://w3c.github.io/aria/#paragraph', children: [(0, r.jsx)(n.code, { children: 'paragraph' }), ' role'] }), ' in de accessibility tree (dat is nodig voor WCAG eis 1.3.1). Voor een ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' gebruik je ', (0, r.jsx)(n.code, { children: '<p><b>\u2026</b></p>' }), '. Voor ', (0, r.jsx)(n.em, { children: 'small print' }), ' gebruik je ', (0, r.jsx)(n.code, { children: '<p><small>\u2026</small></p>' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Zelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het ', (0, r.jsx)(n.code, { children: '<p>' }), " element is er tussen alinea's duidelijke witruimte (WCAG 1.4.12). Door het ", (0, r.jsx)(n.code, { children: '<b>' }), ' element is de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' visueel herkenbaar. Door ', (0, r.jsx)(n.code, { children: '<small>' }), ' is ', (0, r.jsx)(n.em, { children: 'small print' }), ' visueel herkenbaar.'] }), '\n', (0, r.jsx)(n.h3, { id: 'lead-paragraph', children: 'Lead Paragraph' }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' is een extra opvallende variant van de ', (0, r.jsx)(n.em, { children: 'paragraph' }), '. Gebruik de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' onder de ', (0, r.jsx)(n.em, { children: 'heading' }), ' van een ', (0, r.jsx)(n.em, { children: 'article' }), ' voor een introductietekst.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Schrijf in de eerste alinea kort en bondig waar de pagina over gaat, zodat de lezer kan besluiten om verder te lezen. Gebruik hiervoor de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' variant zodat de tekst extra opvallend is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je meer dan circa 30 woorden of 200 tekens nodig hebt, gebruik dan niet de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' variant zodat de tekst een leesbare lettergrootte heeft voor langere teksten.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.em, { children: 'lead paragraph' }), ' niet wanneer je een ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' voor een ander doel extra opvallend wil maken, ontwikkel dan een eigen variant.'] }), '\n', (0, r.jsx)(n.h2, { id: 'inhoud', children: 'Inhoud' }), '\n', (0, r.jsx)(n.p, { children: "Groepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft. Teksten met alinea's die niet bovengemiddeld lang zijn makkelijker te begrijpen als je pauze neemt, en door het grouperen is informatie sneller terug te vinden." }), '\n', (0, r.jsx)(n.p, { children: "Overweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea's." }), '\n', (0, r.jsx)(n.h2, { id: 'layout', children: 'Layout' }), '\n', (0, r.jsx)(n.h3, { id: 'lettergrootte', children: 'Lettergrootte' }), '\n', (0, r.jsxs)(n.p, { children: ['Kies de lettergrootte niet te klein, bijvoorbeeld ', (0, r.jsx)(n.code, { children: '16px' }), ' of groter. Gebruik ', (0, r.jsx)(n.code, { children: 'rem' }), ' in CSS in plaats van ', (0, r.jsx)(n.code, { children: 'px' }), ', zodat de font-size van de ', (0, r.jsx)(n.em, { children: 'paragraph' }), ' ook verdubbelt wanneer gebruikers via hun besturingssysteem of ', (0, r.jsx)(n.em, { children: 'user stylesheet' }), ' de standaard lettergroote 200% groter maken. (', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#resize-text', children: 'WCAG eis 1.4.4' }), ') Gebruikers moeten de lettergrootte vier keer groter kunnen maken met browser zoom. (', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#reflow', children: 'WCAG eis 1.4.10' }), ') Maak zoom niet kapot door gebruik van de ', (0, r.jsx)(n.code, { children: 'vw' }), ' of ', (0, r.jsx)(n.code, { children: 'vh' }), ' eenheden in CSS die niet altijd goed werken met zoom.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de design token ', (0, r.jsx)(n.code, { children: 'nl.paragraph.font-size' }), ' als je niet de standaard-grootte wilt van ', (0, r.jsx)(n.code, { children: 'nl.document.font-size' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor de lead paragraph variant is het gebruikelijk de lettergrootte 10% \xe1 20% groter te kiezen (', (0, r.jsx)(n.code, { children: 'nl.paragraph.lead.font-size' }), ').'] }), '\n', (0, r.jsx)(n.h3, { id: 'regelhoogte', children: 'Regelhoogte' }), '\n', (0, r.jsxs)(n.p, { children: ['Stel de regelhoogte met ', (0, r.jsx)(n.code, { children: 'nl.paragraph.line-height' }), ' in voor voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Standaard gebruiken browsers circa ', (0, r.jsx)(n.code, { children: '1.2' }), ', maar ', (0, r.jsx)(n.code, { children: '1.5' }), ' is voor veel gebruikers beter leesbaar. Voor WCAG 1.4.8 is het ook belangrijk om ', (0, r.jsx)(n.code, { children: '1.5' }), ' of groter aan te bieden.'] }), '\n', (0, r.jsx)(n.h3, { id: 'afstand-tussen-alineas', children: "Afstand tussen alinea's" }), '\n', (0, r.jsxs)(n.p, { children: ["Kies voldoende afstand tussen alinea's, in elk geval 50% groter dan afstand tussen tekstregels. (WCAG 1.4.8). Gebruik hiervoor de design tokens ", (0, r.jsx)(n.code, { children: 'nl.paragraph.margin-block-start' }), ' en ', (0, r.jsx)(n.code, { children: 'nl.paragraph.margin-block-end' }), '.'] }), '\n', (0, r.jsx)(n.h3, { id: 'kleurgebruik', children: 'Kleurgebruik' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.code, { children: 'nl.paragraph.color' }), ': kies voldoende contrast ten opzichte van de achtergrondkleur, van bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'nl.document.background-color' }), ' of ', (0, r.jsx)(n.code, { children: 'nl.page.background-color' }), '. Kies in plaats van zwart voor zeer donkergrijs, dat is beter leesbaar op beeldschermen. Een contrastverhouding van 7:1 is ideaal. (WCAG 1.4.3 en WCAG 1.4.6)'] }), '\n', (0, r.jsx)(n.h3, { id: 'regellengte', children: 'Regellengte' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg dat de lengte van de tekst niet te lang wordt, bijvoorbeeld door deze design token in te stellen: ', (0, r.jsx)(n.code, { children: 'nl.article.max-inline-size' }), '. De ideale regellengte verschilt per schrift en taal, maar ergens tussen de 50 en 75 tekens voor Nederlands is prima. Je kunt in CSS bijvoorbeeld de ', (0, r.jsx)(n.code, { children: 'ch' }), ' eenheid gebruiken: ', (0, r.jsx)(n.code, { children: '--nl-article-max-inline-size: 60ch' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor WCAG 1.4.8 is het nodig dat de regellengte beperkt kan worden tot maximaal 80 tekens (', (0, r.jsx)(n.code, { children: '80ch' }), '), bijvoorbeeld door de viewport van de browser kleiner te maken.'] }), '\n', (0, r.jsx)(n.h3, { id: 'tekstuitlijning', children: 'Tekstuitlijning' }), '\n', (0, r.jsxs)(n.p, { children: ['Tekst dient uitsluitend links uitgelijnd zijn, voor Nederlandse teksten. Gebruik daarvoor ', (0, r.jsx)(n.code, { children: 'text-align: start' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.code, { children: 'text-align: justify' }), ' moet vermeden kunnen worden volgens WCAG 1.4.8, dus gebruik deze voor het gemak helemaal niet. Rechts uitlijnen en tekst centreren moet je ook niet gebruiken voor lopende tekst.'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-het-niet-moet', children: 'Hoe het niet moet' }), '\n', (0, r.jsx)(n.h3, { id: 'geen-opmaak', children: 'Geen opmaak' }), '\n', (0, r.jsxs)(n.p, { children: ['Geen ', (0, r.jsx)(n.code, { children: 'p' }), ' gebruiken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n  <h1>Interessante pagina</h1>\n  Deze eerste tekst ziet er misschien prima uit.\n  <p>Maar ook de eerste paragraaf hoort in een p-element te staan.</p>\n</section>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-lege-paragraaf', children: 'Lege paragraaf' }), '\n', (0, r.jsxs)(n.p, { children: ['Een lege ', (0, r.jsx)(n.code, { children: 'p' }), ' gebruiken, bijvoorbeeld om extra afstand te maken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n  <h1>Voorbeeld pagina</h1>\n  <p>Deze pagina ziet er op het oog misschien prima uit.</p>\n  <p>&nbsp;</p>\n  <p>Maar sommige screen readers zeggen dat er drie paragrafen zijn, dat is verwarrend.</p>\n</section>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-semantiek', children: 'Geen semantiek' }), '\n', (0, r.jsxs)(n.p, { children: ['Een ', (0, r.jsx)(n.code, { children: 'div' }), ' gebruiken:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<section>\n    <h1>Interessante pagina</h1>\n    <div>Deze eerste tekst ziet er misschien prima uit, maar de paragraph role ontbreek in de accessibility tree.</div>\n    <div role="paragraph">Gebruik gewoon een p-element in plaats van ARIA om de role te verkrijgen.</p>\n</section>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je tekstfragmenten na elkaar plaatst is het belangrijk dat je een element zoals paragraaf gebruikt (en niet een ', (0, r.jsx)(n.code, { children: 'inline' }), ' element zoals ', (0, r.jsx)(n.code, { children: 'span' }), ' of ', (0, r.jsx)(n.code, { children: 'label' }), '), zodat de twee tekstfragmenten los van elkaar worden voorgelezen door screen readers. Wanneer de CSS niet geladen kan worden, dan heeft ', (0, r.jsx)(n.code, { children: 'p' }), ' wel marge en ', (0, r.jsx)(n.code, { children: 'div' }), ' niet, in veel situaties zonder CSS is ', (0, r.jsx)(n.code, { children: 'p' }), ' daarom leesbaarder dan ', (0, r.jsx)(n.code, { children: 'div' }), '.'] }), '\n', (0, r.jsxs)(n.h3, { id: 'geen-inline', children: [(0, r.jsx)(n.code, { children: 'inline' }), ' in plaats van ', (0, r.jsx)(n.code, { children: 'block' }), '-elementen'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="name">Voornaam</label><span>Voornaam is verplicht</span>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Beter:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p><label for="name">Voornaam</label></p>\n<p>Voornaam is verplicht</p>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-overdreven-nadruk', children: 'Overdreven nadruk' }), '\n', (0, r.jsx)(n.p, { children: 'Benadruk niet een hele paragraaf, maar markeer het belangrijke gedeelte.' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p>\n  <strong\n    >Tenzij anders vermeld is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van toepassing.\n    Dit houdt in dat iedere vorm van hergebruik van de inhoud van deze site is toegestaan, tenzij bij of in een bepaald\n    onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een auteursrechtelijke\n    uitzondering van toepassing is.\n  </strong>\n</p>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Beter:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p>\n  <em>Tenzij anders vermeld</em> is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van\n  toepassing. Dit houdt in dat <strong>iedere vorm van hergebruik van de inhoud van deze site is toegestaan</strong>,\n  tenzij bij of in een bepaald onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een\n  auteursrechtelijke uitzondering van toepassing is.\n</p>\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'links', children: 'Links' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p', children: ['MDN: ', (0, r.jsx)(n.code, { children: '<p>' }), ': The Paragraph element'] }) }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsxs)(n.a, { href: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element', children: ['HTML specification: The ', (0, r.jsx)(n.code, { children: '<b>' }), ' element'] }), '. Bevat een voorbeeld van het ', (0, r.jsx)(n.code, { children: 'b' }), ' element voor lead paragraphs.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsxs)(n.a, { href: 'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element', children: ['HTML specification: The ', (0, r.jsx)(n.code, { children: '<small>' }), ' element'] }), '. Bevat een voorbeeld van het ', (0, r.jsx)(n.code, { children: 'small' }), ' element voor ', (0, r.jsx)(n.em, { children: 'small print' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taaladvies.net/lengte-van-alineas/', children: 'Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net' }) }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'relevante-wcag-regels', children: 'Relevante WCAG regels' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', children: 'WCAG eis 1.3.1' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', children: 'WCAG eis 1.4.3' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#resize-text', children: 'WCAG eis 1.4.4' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#visual-presentation', children: 'WCAG eis 1.4.8' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#reflow', children: 'WCAG eis 1.4.10' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#text-spacing', children: 'WCAG eis 1.4.12' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#language-of-parts', children: 'WCAG eis 3.1.2' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   var c = t(21998),
    l = t(57716);
   const d = { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'], sidebar_custom_props: { illustration: 'ParagraphSketch' } },
    h = void 0,
    u = { id: 'componenten/paragraph/index', title: 'Paragraph', description: 'Toont een alinea aan tekst.', source: '@site/docs/componenten/paragraph/index.mdx', sourceDirName: 'componenten/paragraph', slug: '/paragraph', permalink: '/paragraph', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/paragraph/index.mdx', tags: [{ label: 'Community', permalink: '/tags/community' }], version: 'current', frontMatter: { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'], sidebar_custom_props: { illustration: 'ParagraphSketch' } }, sidebar: 'componenten', previous: { title: 'Pagination', permalink: '/pagination' }, next: { title: 'Password input', permalink: '/password-input' } },
    j = {},
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Levende Backlog', id: 'levende-backlog', level: 2 },
    ],
    p = 'Paragraph',
    m = 'Toont een alinea aan tekst.',
    y = 'ParagraphSketch',
    v = 115,
    k = a.find((e) => e.number === v);
   function b(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(c.Rv, { component: k, headingLevel: 1, description: m, illustration: y }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(c.cN, { component: k, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }), '\n', (0, r.jsx)(c.W, { component: k, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(l.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(o, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'levende-backlog', children: 'Levende Backlog' }), '\n', (0, r.jsx)(c.Gn, { component: k, headingLevel: 3 })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b(e);
   }
  },
  87230: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [71115, 71115], './utrecht-backdrop.entry.js': [63455, 63455], './utrecht-breadcrumb-nav.entry.js': [19566, 19566], './utrecht-checkbox.entry.js': [1779, 1779], './utrecht-column-layout.entry.js': [94923, 94923], './utrecht-contact-card-template.entry.js': [20603, 20603], './utrecht-custom-checkbox.entry.js': [79886, 79886], './utrecht-data-list-actions.entry.js': [47086, 47086], './utrecht-data-list-item.entry.js': [11973, 11973], './utrecht-data-list-key.entry.js': [55159, 55159], './utrecht-data-list-value.entry.js': [12440, 12440], './utrecht-data-list.entry.js': [61607, 61607], './utrecht-digid-button.entry.js': [74283, 74283], './utrecht-digid-logo.entry.js': [86278, 86278], './utrecht-eherkenning-logo.entry.js': [87515, 87515], './utrecht-eidas-logo.entry.js': [10316, 10316], './utrecht-form-field-error-message.entry.js': [37929, 37929], './utrecht-form-toggle.entry.js': [43972, 43972], './utrecht-html-content.entry.js': [87249, 87249], './utrecht-icon-afspraak-maken.entry.js': [33380, 33380], './utrecht-icon-afval-container.entry.js': [96852, 96852], './utrecht-icon-afval-containerpas.entry.js': [91338, 91338], './utrecht-icon-afval-kalender.entry.js': [63431, 63431], './utrecht-icon-afval-pmd.entry.js': [60482, 60482], './utrecht-icon-afval-scheiden.entry.js': [36679, 36679], './utrecht-icon-afval.entry.js': [54777, 54777], './utrecht-icon-afvalkalender.entry.js': [27102, 27102], './utrecht-icon-alleen.entry.js': [25692, 25692], './utrecht-icon-arrow.entry.js': [99570, 99570], './utrecht-icon-auto.entry.js': [98458, 98458], './utrecht-icon-begroting.entry.js': [7249, 7249], './utrecht-icon-bestemmingsplan.entry.js': [23697, 23697], './utrecht-icon-betaaldatum.entry.js': [9847, 9847], './utrecht-icon-bewijsstukken.entry.js': [33160, 33160], './utrecht-icon-bijstand.entry.js': [16097, 16097], './utrecht-icon-blad.entry.js': [93341, 93341], './utrecht-icon-bouwproject.entry.js': [59777, 59777], './utrecht-icon-brandgevaar.entry.js': [90938, 90938], './utrecht-icon-brief-betalen.entry.js': [38431, 38431], './utrecht-icon-checkmark.entry.js': [65959, 65959], './utrecht-icon-chevron-down.entry.js': [20478, 20478], './utrecht-icon-chevron-left.entry.js': [99840, 99840], './utrecht-icon-chevron-right.entry.js': [52317, 52317], './utrecht-icon-chevron-up.entry.js': [55011, 55011], './utrecht-icon-close.entry.js': [69246, 69246], './utrecht-icon-college-b-w.entry.js': [62025, 62025], './utrecht-icon-container-bio.entry.js': [17176, 17176], './utrecht-icon-container-glas.entry.js': [42713, 42713], './utrecht-icon-container-groenafval.entry.js': [2165, 2165], './utrecht-icon-container-met-zak.entry.js': [85697, 85697], './utrecht-icon-container-papier.entry.js': [53020, 8812], './utrecht-icon-container-pmd.entry.js': [30728, 30728], './utrecht-icon-container-restafval.entry.js': [31742, 31742], './utrecht-icon-container-textiel.entry.js': [43095, 43095], './utrecht-icon-container.entry.js': [31787, 31787], './utrecht-icon-cross.entry.js': [15811, 15811], './utrecht-icon-dakloos.entry.js': [61994, 61994], './utrecht-icon-dementie.entry.js': [64635, 64635], './utrecht-icon-documenten.entry.js': [94377, 94377], './utrecht-icon-duurzaam.entry.js': [39556, 39556], './utrecht-icon-eenzaamheid.entry.js': [13221, 13221], './utrecht-icon-eikenprocessie.entry.js': [37786, 37786], './utrecht-icon-elektrisch-rijden.entry.js': [7292, 7292], './utrecht-icon-energie-vergoeding.entry.js': [54904, 54904], './utrecht-icon-energietransitie.entry.js': [61220, 61220], './utrecht-icon-error.entry.js': [8178, 8178], './utrecht-icon-evenementen.entry.js': [3236, 3236], './utrecht-icon-facebook.entry.js': [49128, 49128], './utrecht-icon-fiets.entry.js': [9520, 9520], './utrecht-icon-filter.entry.js': [21364, 21364], './utrecht-icon-geboorte.entry.js': [19686, 19686], './utrecht-icon-gebruiker-centraal.entry.js': [26804, 26804], './utrecht-icon-gebruiker-ingelogd.entry.js': [78635, 78635], './utrecht-icon-gegevenswoordenboek.entry.js': [25081, 25081], './utrecht-icon-geluid.entry.js': [55374, 55374], './utrecht-icon-gemeente-locatie.entry.js': [11513, 11513], './utrecht-icon-gemeenteraad.entry.js': [5690, 5690], './utrecht-icon-gereedschap.entry.js': [58150, 58150], './utrecht-icon-gezicht.entry.js': [39329, 39329], './utrecht-icon-gezin.entry.js': [88470, 88470], './utrecht-icon-glas-afval.entry.js': [57781, 57781], './utrecht-icon-glijbaan.entry.js': [11376, 11376], './utrecht-icon-grafiek.entry.js': [70029, 70029], './utrecht-icon-grofvuil-ophalen.entry.js': [82627, 82627], './utrecht-icon-grofvuil.entry.js': [45714, 45714], './utrecht-icon-hamburger-menu.entry.js': [63090, 63090], './utrecht-icon-herdenking.entry.js': [3274, 3274], './utrecht-icon-hondenbelasting.entry.js': [71386, 71386], './utrecht-icon-horeca.entry.js': [89543, 89543], './utrecht-icon-horecavergunning.entry.js': [28737, 28737], './utrecht-icon-huis-en-omgeving.entry.js': [23592, 23592], './utrecht-icon-huis.entry.js': [77982, 77982], './utrecht-icon-huishoudelijk-geweld.entry.js': [35252, 35252], './utrecht-icon-hulp-huishouden.entry.js': [34557, 34557], './utrecht-icon-hulp-vervoer.entry.js': [43521, 43521], './utrecht-icon-hulp-zorg.entry.js': [87282, 87282], './utrecht-icon-hulpmiddelen-gezin.entry.js': [29047, 58243], './utrecht-icon-hulpverlening.entry.js': [38411, 38411], './utrecht-icon-idee.entry.js': [94751, 94751], './utrecht-icon-informatie.entry.js': [30663, 30663], './utrecht-icon-information.entry.js': [16980, 16980], './utrecht-icon-innovatie.entry.js': [18791, 18791], './utrecht-icon-inspraak-inwoners.entry.js': [12437, 12437], './utrecht-icon-instagram.entry.js': [85931, 85931], './utrecht-icon-kalender.entry.js': [30102, 30102], './utrecht-icon-kennis.entry.js': [51808, 51808], './utrecht-icon-kerstbomen.entry.js': [70463, 70463], './utrecht-icon-klachten.entry.js': [74392, 74392], './utrecht-icon-kroon.entry.js': [64025, 64025], './utrecht-icon-laadpaal.entry.js': [18618, 18618], './utrecht-icon-language.entry.js': [69099, 69099], './utrecht-icon-lantaarnpaal-oud.entry.js': [50670, 50670], './utrecht-icon-lantaarnpaal.entry.js': [62890, 62890], './utrecht-icon-leren.entry.js': [79670, 79670], './utrecht-icon-let-op.entry.js': [85307, 85307], './utrecht-icon-linkedin.entry.js': [11475, 11475], './utrecht-icon-list-check.entry.js': [74682, 74682], './utrecht-icon-list-number.entry.js': [32603, 32603], './utrecht-icon-list.entry.js': [10343, 10343], './utrecht-icon-loupe.entry.js': [13622, 13622], './utrecht-icon-markt.entry.js': [37305, 37305], './utrecht-icon-melding-boom.entry.js': [22787, 22787], './utrecht-icon-melding-klacht.entry.js': [72938, 72938], './utrecht-icon-melding-openbareruimte.entry.js': [25332, 25332], './utrecht-icon-melding-verlichting.entry.js': [58309, 58309], './utrecht-icon-melding.entry.js': [71529, 71529], './utrecht-icon-menselijk.entry.js': [57750, 57750], './utrecht-icon-menu-dot-open.entry.js': [83591, 83591], './utrecht-icon-menu-dot.entry.js': [44075, 44075], './utrecht-icon-meterkast.entry.js': [63378, 63378], './utrecht-icon-milieu-ontheffing.entry.js': [16438, 16438], './utrecht-icon-milieu-zone.entry.js': [13004, 13004], './utrecht-icon-minus-vertical.entry.js': [25945, 25945], './utrecht-icon-minus.entry.js': [94200, 94200], './utrecht-icon-mobiliteit.entry.js': [83596, 83596], './utrecht-icon-natuur.entry.js': [71178, 71178], './utrecht-icon-nieuw-huis.entry.js': [37131, 37131], './utrecht-icon-nieuwsbrief.entry.js': [33071, 33071], './utrecht-icon-nummerbord.entry.js': [45079, 45079], './utrecht-icon-om-het-huis.entry.js': [84757, 84757], './utrecht-icon-omgeving.entry.js': [42609, 42609], './utrecht-icon-omgevingsvisie.entry.js': [73631, 73631], './utrecht-icon-omgevingswet.entry.js': [86408, 86408], './utrecht-icon-onderhoud.entry.js': [52223, 52223], './utrecht-icon-ondernemen.entry.js': [10296, 10296], './utrecht-icon-openingstijden.entry.js': [76357, 76357], './utrecht-icon-over-de-stad.entry.js': [9037, 9037], './utrecht-icon-overlijden.entry.js': [88508, 88508], './utrecht-icon-panden.entry.js': [99626, 99626], './utrecht-icon-park.entry.js': [78816, 78816], './utrecht-icon-parkeerkaart.entry.js': [37045, 37045], './utrecht-icon-parkeervergunning.entry.js': [5870, 5870], './utrecht-icon-parken.entry.js': [61656, 61656], './utrecht-icon-parkeren-bedrijven.entry.js': [37506, 37506], './utrecht-icon-parkeren-betaalautomaat.entry.js': [4304, 4304], './utrecht-icon-parkeren-betalen.entry.js': [31803, 31803], './utrecht-icon-parkeren.entry.js': [24905, 24905], './utrecht-icon-participatie-campagne.entry.js': [45398, 45398], './utrecht-icon-participatie-like.entry.js': [90153, 90153], './utrecht-icon-participatie-pitch.entry.js': [48209, 48209], './utrecht-icon-paspoort.entry.js': [57518, 57518], './utrecht-icon-presentatie.entry.js': [83784, 83784], './utrecht-icon-prijskaartje.entry.js': [82645, 82645], './utrecht-icon-read-aloud.entry.js': [1026, 1026], './utrecht-icon-rijbewijs.entry.js': [73958, 73958], './utrecht-icon-rioolheffing.entry.js': [47612, 47612], './utrecht-icon-rolstoel.entry.js': [64239, 64239], './utrecht-icon-schild-gemeente-utrecht.entry.js': [9053, 9053], './utrecht-icon-search.entry.js': [14236, 14236], './utrecht-icon-shoppen.entry.js': [42871, 42871], './utrecht-icon-sinterklaas.entry.js': [51470, 51470], './utrecht-icon-slechtziende-hoordende.entry.js': [78935, 78935], './utrecht-icon-sport-en-cultuur.entry.js': [29778, 29778], './utrecht-icon-sport-voetbal.entry.js': [84106, 84106], './utrecht-icon-sport.entry.js': [64218, 64218], './utrecht-icon-stookverbod.entry.js': [87439, 87439], './utrecht-icon-strand.entry.js': [89276, 89276], './utrecht-icon-strooien.entry.js': [79609, 79609], './utrecht-icon-subsidie-gezin.entry.js': [61903, 61903], './utrecht-icon-subsidie.entry.js': [8376, 8376], './utrecht-icon-t-shirt.entry.js': [98212, 98212], './utrecht-icon-thuiswerken.entry.js': [39139, 39139], './utrecht-icon-toeslag.entry.js': [44692, 44692], './utrecht-icon-trein.entry.js': [41671, 41671], './utrecht-icon-trouwen.entry.js': [43120, 43120], './utrecht-icon-twitter.entry.js': [39302, 39302], './utrecht-icon-user.entry.js': [45538, 45538], './utrecht-icon-uw-wijk.entry.js': [53214, 53214], './utrecht-icon-vaccinatie.entry.js': [14985, 14985], './utrecht-icon-veilige-wijk.entry.js': [33337, 33337], './utrecht-icon-vergaderen.entry.js': [36109, 36109], './utrecht-icon-vergaderendigitaal.entry.js': [342, 342], './utrecht-icon-vergoeding.entry.js': [87176, 87176], './utrecht-icon-verhuizen.entry.js': [7559, 7559], './utrecht-icon-verkeerslicht.entry.js': [85743, 85743], './utrecht-icon-verkiezingen.entry.js': [27026, 27026], './utrecht-icon-verslaving.entry.js': [85879, 85879], './utrecht-icon-vervoersvoorziening.entry.js': [65676, 65676], './utrecht-icon-virus.entry.js': [86965, 86965], './utrecht-icon-vluchtelingen.entry.js': [79199, 79199], './utrecht-icon-voorzieningen-vervoer.entry.js': [86744, 86744], './utrecht-icon-vrijwilligerswerk.entry.js': [64916, 64916], './utrecht-icon-vuilnisbak.entry.js': [6692, 6692], './utrecht-icon-vuilniszak.entry.js': [84454, 84454], './utrecht-icon-vuurwerk.entry.js': [27824, 27824], './utrecht-icon-wandelstok.entry.js': [41378, 41378], './utrecht-icon-warm.entry.js': [76987, 76987], './utrecht-icon-warning.entry.js': [43444, 43444], './utrecht-icon-werken.entry.js': [47413, 47413], './utrecht-icon-werkzaamheden.entry.js': [75967, 75967], './utrecht-icon-whatsapp.entry.js': [16300, 16300], './utrecht-icon-wonen-kosten.entry.js': [40475, 40475], './utrecht-icon-woning-zoeken.entry.js': [4032, 4032], './utrecht-icon-x.entry.js': [43252, 43252], './utrecht-icon-youtube.entry.js': [26789, 26789], './utrecht-icon-zelfstandig-wonen.entry.js': [25668, 25668], './utrecht-icon-zoom-minus.entry.js': [17628, 17628], './utrecht-icon-zoom-plus.entry.js': [75442, 75442], './utrecht-icon-zoomin.entry.js': [12282, 12282], './utrecht-icon-zoomout.entry.js': [23038, 23038], './utrecht-icon-zorg-huis.entry.js': [95567, 95567], './utrecht-icon-zweefpaal.entry.js': [32865, 32865], './utrecht-icon-zwemmen.entry.js': [31709, 31709], './utrecht-logo-button.entry.js': [5087, 5087], './utrecht-map-marker.entry.js': [81463, 81463], './utrecht-multiline-data.entry.js': [60065, 60065], './utrecht-page-footer.entry.js': [93727, 93727], './utrecht-pagination.entry.js': [74325, 74325], './utrecht-progress-list-item.entry.js': [1839, 1839], './utrecht-progress-list.entry.js': [56161, 56161], './utrecht-progress-sublist-item.entry.js': [38917, 38917], './utrecht-sidenav.entry.js': [44781, 44781], './utrecht-surface.entry.js': [68955, 68955], './utrecht-table-body.entry.js': [79554, 79554], './utrecht-table-caption.entry.js': [69811, 69811], './utrecht-table-cell.entry.js': [82972, 82972], './utrecht-table-footer.entry.js': [2171, 2171], './utrecht-table-header-cell.entry.js': [66, 66], './utrecht-table-header.entry.js': [43142, 43142], './utrecht-table-row.entry.js': [57840, 57840], './utrecht-table.entry.js': [52203, 52203], './utrecht-textarea.entry.js': [17410, 17410], './utrecht-textbox.entry.js': [11701, 11701] };
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
   (i.keys = () => Object.keys(r)), (i.id = 87230), (e.exports = i);
  },
  48459: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => l, aY: () => c, um: () => d, wu: () => o });
   var r = t(78187),
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
  21998: (e, n, t) => {
   'use strict';
   t.d(n, { Gn: () => S, cN: () => N, W: () => G, Rv: () => L });
   var r = t(40168),
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
   var j = t(48459);
   const g = { 'definition-of-done': 'definition-of-done_hA8T', 'definition-of-done--help-wanted': 'definition-of-done--help-wanted_eyW6', 'definition-of-done--community': 'definition-of-done--community_s9uY', 'definition-of-done--candidate': 'definition-of-done--candidate_kcli', 'definition-of-done--hall-of-fame': 'definition-of-done--hall-of-fame_uZjI', 'implementation-card-group': 'implementation-card-group_aUZX', 'implementation-card': 'implementation-card_nkoa' };
   var p = t(29795);
   const m = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(p.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = t(99487).YE;
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
   var y = t(5671),
    v = t(78187),
    k = t(89870);
   const b = 'task-list_hh8j',
    x = 'task-list-item_oypx',
    f = 'task-list-item__marker_Eefn',
    w = 'task-list-item__marker--checked_y8Vc',
    _ = 'task-list-item__marker-label_XAyi',
    z = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: b, children: n });
    },
    C = (e) => {
     let { checked: n, title: t, description: r } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)(x), children: [(0, d.jsxs)('div', { className: (0, i.Z)(f, { [w]: n }), children: [(0, d.jsx)('span', { className: _, children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(k.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(v.aC, { role: 'presentation', children: t }), (0, d.jsx)(v.nv, { children: r })] })] });
    };
   var A = t(14669);
   const T = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    N = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => T.includes(e.id)),
      s = a && T.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: s.map((e) => ({
        className: (0, i.Z)(g['definition-of-done'], g[`definition-of-done--${(0, A.mA)(e.title)}`]),
        headingLevel: t,
        expanded: !1,
        label: `${e.title} - ${e.progress.value} van ${e.progress.max}`,
        body: (0, d.jsxs)(d.Fragment, {
         children: [
          (0, d.jsx)(z, {
           children: e.tasks.map((e) => {
            let { checked: n, name: t, id: r } = e;
            return (0, d.jsx)(C, { checked: n, title: t, description: (0, A.Q6)(r) }, r);
           }),
          }),
          (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
         ],
        }),
       })),
      })
     );
    },
    G = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => !T.includes(e.id));
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
           const { value: n } = e.tasks.find((e) => {
             let { name: n } = e;
             return 'Naam' === n;
            }),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${n} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${n} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${n} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${n} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${n} voor visuele regressie tests` }],
            ]),
            s = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return a.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            j.Zb,
            {
             className: (0, i.Z)(g['implementation-card']),
             children: (0, d.jsxs)(j.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(m, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               s.length &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: s.map((e) => {
                    const { brand: n, desciption: t } = a.get(e.name);
                    return (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: n }), ' ', t] }, e.id);
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
    S = (e) => {
     let { component: n } = e;
     return n && (0, d.jsxs)(r.nv, { children: ['De ', n.title, ' component staat bij NL Design System in de', ' ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'levende backlog' }), ', heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!'] });
    },
    L = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const a = n && A.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.X6, { level: t, children: [n.title, ' ', a && (0, d.jsx)(y.y, { state: a })] }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  5671: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => c });
   var r = t(78187),
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
    i = t(78187),
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
   t.d(n, { $3: () => r, Q6: () => a, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e];
  },
 },
]);
