'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8267],
 {
  7361: (e, n, t) => {
   t.d(n, { A: () => p });
   var i = t(63674),
    r = t(92420),
    l = t(45648),
    s = t(14537),
    o = t(13526),
    a = t(86070);
   function d({ href: e, icon: n = '', title: t, description: i, children: l }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(r.N, { href: e, className: (0, o.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, a.jsx)('p', { className: 'cardDescription', children: i }), l] });
   }
   function c({ item: e }) {
    return (0, a.jsx)(d, { title: e.label, description: e.description, children: (0, a.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, a.jsx)(s.Er, { children: 'link' === e.type ? (0, a.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, l.cC)(e.docId);
    return (0, a.jsx)(d, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function k({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, a.jsx)(h, { item: e });
     case 'category':
      return (0, a.jsx)(c, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function j({ className: e }) {
    const n = (0, i.$S)();
    return (0, a.jsx)(p, { items: n.items, className: e });
   }
   function p(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, a.jsx)(j, { ...e });
    const r = (0, i.d1)(n);
    return (0, a.jsx)('section', { className: (0, o.A)('row', t), ...e, children: r.map((e, n) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(k, { item: e }) }, n)) });
   }
  },
  49484: (e, n, t) => {
   t.d(n, { F: () => a });
   var i = t(63674),
    r = t(13526),
    l = t(7361),
    s = t(86070);
   const o = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: o(t.items, n) }] : e), []),
    a = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const a = (0, i.$S)();
     return (0, s.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, s.jsx)(l.A, { items: o(a.items, e) }) });
    };
  },
  58533: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => k, frontMatter: () => o, metadata: () => i, toc: () => c });
   const i = JSON.parse('{"id":"richtlijnen/content/README","title":"Introductie richtlijnen voor content","description":"Introductie van de richtlijnen voor content van het NL Design System.","source":"@site/docs/richtlijnen/content/README.mdx","sourceDirName":"richtlijnen/content","slug":"/richtlijnen/content","permalink":"/richtlijnen/content","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/README.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Introductie richtlijnen voor content","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie content","sidebar_position":0,"pagination_label":"Content","description":"Introductie van de richtlijnen voor content van het NL Design System.","slug":"/richtlijnen/content","keywords":["tekstopmaak"]},"sidebar":"richtlijnen","previous":{"title":"Gebruik SVG voor iconen en geen font","permalink":"/richtlijnen/stijl/iconen/gebruik-svg"},"next":{"title":"Content","permalink":"/richtlijnen/content"}}');
   var r = t(86070),
    l = t(85248),
    s = t(78734);
   t(49484);
   const o = { title: 'Introductie richtlijnen voor content', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie content', sidebar_position: 0, pagination_label: 'Content', description: 'Introductie van de richtlijnen voor content van het NL Design System.', slug: '/richtlijnen/content', keywords: ['tekstopmaak'] },
    a = 'Toegankelijke content maken',
    d = {},
    c = [{ value: 'Koppen', id: 'koppen', level: 2 }, { value: 'Afbeeldingen', id: 'afbeeldingen', level: 2 }, { value: 'Tabellen', id: 'tabellen', level: 2 }, { value: 'Opsommingen', id: 'opsommingen', level: 2 }, { value: 'Tekst benadrukken', id: 'tekst-benadrukken', level: 2 }, { value: 'Linkteksten', id: 'linkteksten', level: 2 }, { value: 'Citaten', id: 'citaten', level: 2 }, { value: 'Video', id: 'video', level: 2 }, { value: 'Taalinstellingen', id: 'taalinstellingen', level: 2 }, { value: 'Kleurgebruik', id: 'kleurgebruik', level: 2 }, { value: 'Links naar kantoorbestanden', id: 'links-naar-kantoorbestanden', level: 2 }, ...s.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'toegankelijke-content-maken', children: 'Toegankelijke content maken' }) }), '\n', (0, r.jsx)(n.p, { children: 'Iedereen moet digitale content kunnen gebruiken, begrijpen en verwerken. Dat begint bij hoe je content opbouwt en presenteert. Daarom is het belangrijk dat je vanaf het begin rekening houdt met toegankelijkheid. Of het nu gaat om tekst, afbeeldingen, tabellen, lijsten of video\u2019s: de manier waarop je content maakt en opmaakt bepaalt of iedereen ermee kan werken.' }), '\n', (0, r.jsx)(n.p, { children: 'Het NL Design System helpt je daarbij. Hier vind je richtlijnen voor het maken van toegankelijke content, gebaseerd op wetgeving, gebruikersonderzoek en praktijkervaring. Ze zijn bedoeld voor redacteuren, ontwerpers, ontwikkelaars en iedereen die content publiceert.' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik de checklist hieronder als houvast bij het maken en controleren van je content. Wacht niet tot het eind van je proces maar begin er meteen mee. Zo wordt toegankelijkheid vanzelf een gewoon onderdeel van je werk.' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op:' }), ' Deze checklist is een vertrekpunt, geen complete handleiding. Hij wordt aangevuld op basis van ervaringen uit de praktijk.'] }), '\n', (0, r.jsx)(n.h2, { id: 'koppen', children: 'Koppen' }), '\n', (0, r.jsxs)(n.p, { children: ['Koppen zorgen voor structuur. Ze helpen gebruikers om snel de opbouw van de pagina te begrijpen, en zijn essentieel voor mensen die met een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of toetsenbord navigeren.'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Controleer of:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/#opmaak-van-koppen', children: 'de juiste opmaak is gebruikt' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/#kopniveaus', children: 'de volgorde van de koppen klopt (bijv. geen sprongen van kopniveau 2 naar kopniveau 4)' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/#inhoud-van-koppen', children: 'de koppen beschrijvend en relevant zijn' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/#voor-wie-zijn-toegankelijke-koppen-belangrijk', children: 'er geen lege koppen zijn' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/#vkopniveau-1-het-begin-van-de-structuur', children: 'elke pagina begint met een kopniveau 1 (de hoofdtitel)' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Zo gebruik je koppen op een toegankelijke manier' })] }), '\n', (0, r.jsx)(n.h2, { id: 'afbeeldingen', children: 'Afbeeldingen' }), '\n', (0, r.jsx)(n.p, { children: 'Niet iedereen ziet wat er op een afbeelding staat. Een goede alternatieve tekst zorgt ervoor dat de informatie toch overkomt.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Zorg ervoor dat:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/algemene-richtlijnen/', children: 'elke betekenisvolle afbeelding een duidelijke alt-tekst heeft' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'je bewust hebt afgewogen of de alt-tekst wel of niet mag worden weggelaten' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/', children: 'Zo maak je afbeeldingen toegankelijk' })] }), '\n', (0, r.jsx)(n.h2, { id: 'tabellen', children: 'Tabellen' }), '\n', (0, r.jsx)(n.p, { children: 'Tabellen zijn alleen toegankelijk als de structuur duidelijk is. Screenreaders moeten kunnen herkennen welke kop bij welke cel hoort.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Denk aan het volgende:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/#toegankelijke-tabellen-maken', children: 'worden kolom- en/of rijkoppen gebruikt?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/#begrijpelijke-tabellen-maken', children: 'is de tabel niet te ingewikkeld?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/#doel-van-de-tabel', children: 'wordt de tabel niet gebruikt voor opmaak?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/#inhoud-van-de-tabel', children: 'staat de inhoud in logische volgorde?' }) }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Zo maak je tabellen toegankelijk' })] }), '\n', (0, r.jsx)(n.h2, { id: 'opsommingen', children: 'Opsommingen' }), '\n', (0, r.jsx)(n.p, { children: 'Lijsten maken je tekst overzichtelijker. Ze helpen gebruikers om snel informatie te scannen, als ze tenminste goed zijn opgemaakt.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Controleer of:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/#lijst-elementen', children: 'de juiste opmaak is gebruikt' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/#genummerde-en-ongenummerde-lijsten', children: 'het type lijst past bij de inhoud (geordend of ongeordend)' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Zo gebruik je opsommingen toegankelijk' })] }), '\n', (0, r.jsx)(n.h2, { id: 'tekst-benadrukken', children: 'Tekst benadrukken' }), '\n', (0, r.jsx)(n.p, { children: 'Soms wil je iets extra laten opvallen. Als je dat op een toegankelijke manier doet, werkt het voor iedereen.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Zorg ervoor dat:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/#dikgedrukt-en-schuingedrukt', children: 'je alleen vet of cursief gebruikt voor nadruk' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: ['je g\xe9\xe9n grote stukken tekst opmaakt met ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/#dikgedrukt-en-schuingedrukt', children: 'alleen vet of cursief' }), ' of ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/#all-caps-tekst', children: 'alleen hoofdletters' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/#onderstrepen', children: 'onderstreepte tekst alleen voor links wordt gebruikt' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tekst-benadrukken/', children: 'Zo benadruk je tekst' })] }), '\n', (0, r.jsx)(n.h2, { id: 'linkteksten', children: 'Linkteksten' }), '\n', (0, r.jsx)(n.p, { children: 'Linkteksten moeten op zichzelf duidelijk maken waar de link naartoe gaat. Dat helpt bij snel scannen en voorkomt verwarring bij gebruikers van bijvoorbeeld screenreaders.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Zorg ervoor dat:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'de linktekst beschrijvend is en niet vaag (zoals \u2018klik hier\u2019);' }), '\n', (0, r.jsx)(n.li, { children: 'links met dezelfde bestemming dezelfde tekst hebben;' }), '\n', (0, r.jsx)(n.li, { children: 'links naar verschillende bestemmingen verschillende teksten hebben.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten/', children: 'Zo schrijf je toegankelijke linkteksten' })] }), '\n', (0, r.jsx)(n.h2, { id: 'citaten', children: 'Citaten' }), '\n', (0, r.jsx)(n.p, { children: 'Een goed opgemaakt citaat is herkenbaar en begrijpelijk, ook voor mensen die content beluisteren of in aangepaste weergave lezen.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Controleer of:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/citaten/', children: 'je de juiste weergave hebt gekozen voor het citaat' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/citaten/', children: 'Zo voeg je toegankelijke citaten toe' })] }), '\n', (0, r.jsx)(n.h2, { id: 'video', children: 'Video' }), '\n', (0, r.jsx)(n.p, { children: 'Niet iedereen kan beeld zien of audio horen. Door je video\u2019s goed te ondersteunen, maak je ze toegankelijk voor meer mensen.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Denk aan het volgende:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/ondertiteling/', children: 'is de video ondertiteld?' }) }), '\n', (0, r.jsx)(n.li, { children: 'is belangrijke audio ook visueel of in tekst beschikbaar?' }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/transcript/', children: 'is er een transcript aanwezig?' }) }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/', children: 'Zo maak je video\u2019s toegankelijk' })] }), '\n', (0, r.jsx)(n.h2, { id: 'taalinstellingen', children: 'Taalinstellingen' }), '\n', (0, r.jsx)(n.p, { children: 'Screenreaders en vertaalhulpmiddelen gebruiken de ingestelde taal om tekst goed uit te spreken of te vertalen. Daarom moet de taal van de pagina en van losse anderstalige woorden of zinnen goed zijn ingesteld.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Controleer of:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/#taal-van-de-pagina', children: 'de juiste taal is ingesteld voor de hele pagina' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/#een-stukje-tekst-in-een-andere-taal', children: 'de juiste taal is ingesteld voor elk stukje tekst in een andere taal dan de hele pagina' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'Zo stel je de juiste taal in' })] }), '\n', (0, r.jsx)(n.h2, { id: 'kleurgebruik', children: 'Kleurgebruik' }), '\n', (0, r.jsx)(n.p, { children: 'Kleur maakt je content visueel aantrekkelijker. Maar niet iedereen ziet kleur op dezelfde manier. Gebruik kleur dus nooit als enige manier om informatie over te brengen.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Controleer of:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/#bewust-omgaan-met-kleurcontrast', children: 'kleur alleen als aanvulling wordt gebruikt, niet als enige onderscheid;' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/#tekst-op-afbeeldingen#tekstkleur-in-het-cms', children: 'tekst genoeg contrast heeft met de achtergrond;' }), ';'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/#tekst-op-afbeeldingen', children: 'je geen lichte tekst op een lichte afbeelding of vlak plaatst.' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Zo gebruik je kleur en contrast toegankelijk' })] }), '\n', (0, r.jsx)(n.h2, { id: 'links-naar-kantoorbestanden', children: 'Links naar kantoorbestanden' }), '\n', (0, r.jsx)(n.p, { children: 'Documenten zoals pdf\u2019s zijn niet altijd goed toegankelijk. Als je ernaar linkt, let dan op het volgende:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: 'Controleer of:' }) }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'het document echt nodig is, kan het ook als gewone webpagina?;' }), '\n', (0, r.jsx)(n.li, { children: 'het document goed is opgemaakt (met koppen, duidelijke structuur, alt-teksten);' }), '\n', (0, r.jsx)(n.li, { children: 'de linktekst duidelijk maakt wat voor document het is (bijv. \u2018pdf\u2019 of \u2018Word\u2019);' }), '\n', (0, r.jsx)(n.li, { children: 'er een alternatief is voor wie het document niet kan openen of gebruiken.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees meer: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/kantoorbestanden/', children: 'Zo ga je om met kantoorbestanden' })] }), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  63674: (e, n, t) => {
   t.d(n, { $S: () => i, d1: () => r });
   t(34374);
   function i(...e) {
    return t(41863).$S(...e);
   }
   function r(...e) {
    return t(41863).d1(...e);
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => l });
   var i = t(86070),
    r = t(85248);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => o });
   var i = t(30758);
   const r = {},
    l = i.createContext(r);
   function s(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, t) => {
   t.d(n, { N: () => s });
   var i = t(71170),
    r = t(13526),
    l = t(86070);
   const s = ({ className: e, ...n }) => (0, l.jsx)(i.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
