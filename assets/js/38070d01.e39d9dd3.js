'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [57576],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var a = t(52676),
    i = t(40139);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  86408: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => h });
   var a = t(52676),
    i = t(40139),
    l = t(97233),
    s = t(66968);
   const r = { title: 'Taal instellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'De juiste taal instellen', pagination_label: 'De juiste taal instellen', description: 'Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.', slug: '/richtlijnen/content/tekstopmaak/taal', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'taal'] },
    d = 'De juiste taal instellen',
    o = { id: 'richtlijnen/content/tekstopmaak/language', title: 'Taal instellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', description: 'Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.', source: '@site/docs/richtlijnen/content/tekstopmaak/language.md', sourceDirName: 'richtlijnen/content/tekstopmaak', slug: '/richtlijnen/content/tekstopmaak/taal', permalink: '/richtlijnen/content/tekstopmaak/taal', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/language.md', tags: [], version: 'current', frontMatter: { title: 'Taal instellen \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'De juiste taal instellen', pagination_label: 'De juiste taal instellen', description: 'Geef aan welke taal wordt gebruikt in de pagina of als deze anders is voor een deel van de pagina.', slug: '/richtlijnen/content/tekstopmaak/taal', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'taal'] }, sidebar: 'richtlijnen', previous: { title: 'Koppen', permalink: '/richtlijnen/content/tekstopmaak/koppen' }, next: { title: 'Toegankelijke linkteksten', permalink: '/richtlijnen/content/tekstopmaak/linkteksten' } },
    c = {},
    h = [
     { value: 'Voorbeeld van taalwisseling met een screenreader', id: 'voorbeeld-van-taalwisseling-met-een-screenreader', level: 3 },
     { value: 'Taal van de pagina', id: 'taal-van-de-pagina', level: 2 },
     { value: 'Een stukje tekst in een andere taal', id: 'een-stukje-tekst-in-een-andere-taal', level: 2 },
     { value: 'Als je het niet kunt instellen', id: 'als-je-het-niet-kunt-instellen', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 },
    ];
   function j(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'de-juiste-taal-instellen', children: 'De juiste taal instellen' }), '\n', (0, a.jsx)(n.p, { children: 'Voor de toegankelijkheid van je content is het belangrijk dat de gebruikte taal goed is ingesteld. Dat geldt voor de hele pagina \xe9n stukken tekst in een andere taal.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het instellen van de juiste taal is belangrijk omdat hulptechnologie\xebn, zoals ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' of vertaalhulpmiddelen, afhankelijk zijn van die informatie.'] }), '\n', (0, a.jsx)(n.p, { children: 'Als de taal niet goed is ingesteld:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'spreekt een screenreader woorden verkeerd uit;' }), '\n', (0, a.jsx)(n.li, { children: 'worden automatische vertalingen onduidelijk of fout;' }), '\n', (0, a.jsx)(n.li, { children: 'is de inhoud minder toegankelijk voor mensen die de taal niet vloeiend beheersen.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Door de taal goed aan te geven, help je dus mensen die je content anders niet goed kunnen gebruiken of begrijpen.' }), '\n', (0, a.jsx)(n.h3, { id: 'voorbeeld-van-taalwisseling-met-een-screenreader', children: 'Voorbeeld van taalwisseling met een screenreader' }), '\n', (0, a.jsx)(n.p, { children: 'In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten waarvan de taal is ingesteld.' }), '\n', (0, a.jsx)(l.Y, { videoId: '2UAjJ_5nxqw' }), '\n', (0, a.jsx)(n.h2, { id: 'taal-van-de-pagina', children: 'Taal van de pagina' }), '\n', (0, a.jsx)(n.p, { children: 'Elke webpagina heeft een hoofdtaal. Die moet overeenkomen met de taal waarin de tekst op die pagina is geschreven.' }), '\n', (0, a.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je de paginataal zelf instellen \u2014 bijvoorbeeld via de pagina-instellingen of bij het aanmaken van een nieuwe pagina. In andere gevallen is die vooraf ingesteld of wordt automatisch bepaald.' }), '\n', (0, a.jsx)(n.h2, { id: 'een-stukje-tekst-in-een-andere-taal', children: 'Een stukje tekst in een andere taal' }), '\n', (0, a.jsx)(n.p, { children: 'Gebruik je in je tekst een woord of zin in een andere taal dan de rest van de pagina? Geef dan aan dat dit stukje tekst in een andere taal is geschreven. Bijvoorbeeld bij Engelse termen (call to action), Franse citaten of Duitstalige namen.' }), '\n', (0, a.jsx)(n.p, { children: 'Stel alleen een taalwissel in als het woord nog niet is ingeburgerd in de hoofdtaal. Voor woorden die wel onderdeel zijn geworden van de hoofdtaal (denk bijvoorbeeld aan \xfcberhaupt, enfin en management) hoef je geen taalwissel in te stellen.' }), '\n', (0, a.jsx)(n.p, { children: 'In sommige CMS\u2019en kun je dit instellen via een opmaakoptie of een taalkeuze bij een tekstblok.' }), '\n', (0, a.jsx)(n.h2, { id: 'als-je-het-niet-kunt-instellen', children: 'Als je het niet kunt instellen' }), '\n', (0, a.jsx)(n.p, { children: 'Kun je de paginataal of de taal van een tekstblok niet vinden in je CMS? Ga dan na of je CMS deze mogelijkheid biedt. Is dat niet zo, of kun je het niet zelf aanpassen? Dan kun je uitzoeken wie dat w\xe9l kan of dit aankaarten bij de partij die het CMS beheert of levert.' }), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: 'Lees je pagina rustig door en let op of er stukken tekst zijn in een andere taal dan de rest. Controleer het volgende:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Is de juiste taal ingesteld voor de hele pagina?\nBekijk de pagina-instellingen in het CMS. Klopt de gekozen taal met de hoofdtaal van de inhoud?' }), '\n', (0, a.jsx)(n.li, { children: 'Staan er woorden of zinnen in een andere taal?\nBijvoorbeeld Engelse termen, Franse uitdrukkingen of citaten in een andere taal. Vraag jezelf bij elk geval af:\nIs dit als andere taal gemarkeerd in het CMS?' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/3.1.1', children: 'Succescriterium 3.1.1 Taal van de pagina' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/3.1.2', children: 'Succescriterium 3.1.2 Taal van onderdelen' }) }), '\n'] }), '\n', (0, a.jsx)(s.ZP, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(j, { ...e }) }) : j(e);
   }
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => r });
   var a = t(4814),
    i = t(95110),
    l = t.n(i),
    s = t(52676);
   const r = (e) => {
    let { videoId: n, className: t, ...i } = e;
    return (0, s.jsx)(l(), { url: `https://youtube.com/watch?v=${n}`, className: (0, a.Z)('video-player', t), width: '100%', height: '100%', controls: !0, ...i, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
