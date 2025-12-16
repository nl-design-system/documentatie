'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [14366],
 {
  7361: (e, n, t) => {
   t.d(n, { A: () => u });
   var i = t(63674),
    r = t(92420),
    a = t(45648),
    s = t(14537),
    l = t(13526),
    o = t(86070);
   function d({ href: e, icon: n = '', title: t, description: i, children: a }) {
    return (0, o.jsxs)('div', { className: 'card', children: [e ? (0, o.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, o.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, o.jsx)('p', { className: 'cardDescription', children: i }), a] });
   }
   function c({ item: e }) {
    return (0, o.jsx)(d, { title: e.label, description: e.description, children: (0, o.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(s.Er, { children: 'link' === e.type ? (0, o.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, a.cC)(e.docId);
    return (0, o.jsx)(d, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function g({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, o.jsx)(h, { item: e });
     case 'category':
      return (0, o.jsx)(c, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function j({ className: e }) {
    const n = (0, i.$S)();
    return (0, o.jsx)(u, { items: n.items, className: e });
   }
   function u(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, o.jsx)(j, { ...e });
    const r = (0, i.d1)(n);
    return (0, o.jsx)('section', { className: (0, l.A)('row', t), ...e, children: r.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(g, { item: e }) }, n)) });
   }
  },
  49484: (e, n, t) => {
   t.d(n, { F: () => o });
   var i = t(63674),
    r = t(13526),
    a = t(7361),
    s = t(86070);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    o = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const o = (0, i.$S)();
     return (0, s.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, s.jsx)(a.A, { items: l(o.items, e) }) });
    };
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
  67247: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => j, frontMatter: () => o, metadata: () => i, toc: () => h });
   const i = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/README","title":"Introductie richtlijnen voor afbeeldingen","description":"Introductie van de richtlijnen voor afbeeldingen van het NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/README.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Introductie richtlijnen voor afbeeldingen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie afbeeldingen","sidebar_position":2,"pagination_label":"Content","description":"Introductie van de richtlijnen voor afbeeldingen van het NL Design System.","slug":"/richtlijnen/content/afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen"]},"sidebar":"richtlijnen","previous":{"title":"Content","permalink":"/richtlijnen/content"},"next":{"title":"Content","permalink":"/richtlijnen/content/afbeeldingen"}}');
   var r = t(86070),
    a = t(85248),
    s = t(78734),
    l = t(49484);
   const o = { title: 'Introductie richtlijnen voor afbeeldingen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie afbeeldingen', sidebar_position: 2, pagination_label: 'Content', description: 'Introductie van de richtlijnen voor afbeeldingen van het NL Design System.', slug: '/richtlijnen/content/afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen'] },
    d = 'Introductie richtlijnen NL Design System voor afbeeldingen',
    c = {},
    h = [{ value: 'Alternatieve teksten bij afbeeldingen', id: 'alternatieve-teksten-bij-afbeeldingen', level: 2 }, { value: 'Wie gebruiken tekstalternatieven?', id: 'wie-gebruiken-tekstalternatieven', level: 2 }, { value: 'Toegankelijkheidsrichtlijnen', id: 'toegankelijkheidsrichtlijnen', level: 2 }, { value: '1.1.1 Niet-tekstuele content', id: '111-niet-tekstuele-content', level: 3 }, { value: '1.4.5 Afbeeldingen van tekst', id: '145-afbeeldingen-van-tekst', level: 3 }, { value: 'Soorten afbeeldingen', id: 'soorten-afbeeldingen', level: 2 }, { value: 'Bronnen en meer informatie', id: 'bronnen-en-meer-informatie', level: 2 }, ...s.RM];
   function g(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'introductie-richtlijnen-nl-design-system-voor-afbeeldingen', children: 'Introductie richtlijnen NL Design System voor afbeeldingen' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het NL Design System geeft richtlijnen voor afbeeldingen. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze richtlijnen staan gesorteerd op onderwerp.' }), '\n', (0, r.jsx)(n.h2, { id: 'alternatieve-teksten-bij-afbeeldingen', children: 'Alternatieve teksten bij afbeeldingen' }), '\n', (0, r.jsx)(n.p, { children: 'Niet iedereen kan afbeeldingen zien. Daarom is het belangrijk om alternatieve teksten toe te voegen aan de afbeeldingen op jouw website. Zo heeft iedereen, met of zonder beperking, toegang tot dezelfde informatie.' }), '\n', (0, r.jsx)(n.h2, { id: 'wie-gebruiken-tekstalternatieven', children: 'Wie gebruiken tekstalternatieven?' }), '\n', (0, r.jsxs)(n.p, { children: ['Alternatieve teksten helpen bezoekers die geen of moeilijk afbeeldingen kunnen zien. Denk hierbij aan blinde en slechtziende bezoekers. Zij gebruiken hulpsoftware, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een brailleregel, om toch de inhoud van de content te kunnen lezen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Mensen met cognitieve beperkingen, zoals autisme of niet-aangeboren hersenletsel, ', (0, r.jsx)(n.a, { href: 'https://webaim.org/projects/screenreadersurvey10/', children: 'gebruiken soms ook een screenreader' }), ' \u2014 bijvoorbeeld wanneer lezen moeite kost, of wanneer luisteren helpt om informatie beter te begrijpen.'] }), '\n', (0, r.jsx)(n.p, { children: 'Ook bezoekers met traag internet of oude apparaten hebben baat bij alternatieve teksten. Als een afbeelding niet laadt, zien zij de alternatieve tekst en begrijpen ze alsnog wat het doel van de afbeelding is.' }), '\n', (0, r.jsx)(n.p, { children: "Daarnaast dragen goede alternatieve teksten bij aan de zoekmachineoptimalisatie van je website. Zoekmachines zoals Google en DuckDuckGo kunnen afbeeldingen (nog) niet 'zien', maar alternatieve teksten wel lezen. Door relevante beschrijvingen toe te voegen, help je zoekmachines de informatie op je pagina beter te interpreteren." }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheidsrichtlijnen', children: 'Toegankelijkheidsrichtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Om websites bruikbaar te maken voor mensen met een beperking, gebruiken we de ', (0, r.jsx)(n.a, { href: '/wcag/', children: 'WCAG-richtlijnen' }), '. WCAG staat voor Web Content Accessibility Guidelines. Dit is een set van succescriteria waaraan je kunt toetsen of je website voldoet aan de minimale toegankelijkheidseisen. De WCAG heeft 2 succescriteria die specifiek te maken hebben met afbeeldingen.'] }), '\n', (0, r.jsx)(n.h3, { id: '111-niet-tekstuele-content', children: '1.1.1 Niet-tekstuele content' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1' }), " is het allereerste succescriterium in de WCAG. Het legt uit dat 'niet-tekstuele content' een gelijkwaardig tekstalternatief moet hebben."] }), '\n', (0, r.jsx)(n.p, { children: "Niet-tekstuele content is een heel brede categorie. Denk aan foto's, grafieken, en infographics. Video en audio zijn ook niet-tekstuele content. Deze richtlijnen richten zich alleen op afbeeldingen." }), '\n', (0, r.jsx)(n.h3, { id: '145-afbeeldingen-van-tekst', children: '1.4.5 Afbeeldingen van tekst' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/wcag/1.4.5/', children: 'Succescriterium 1.45' }), ' gaat over afbeeldingen van tekst. Dit zijn afbeeldingen waar tekst in staat. Als je tekst in een afbeelding wilt gebruiken, moet je ook met een aantal dingen rekening houden.'] }), '\n', (0, r.jsx)(n.h2, { id: 'soorten-afbeeldingen', children: 'Soorten afbeeldingen' }), '\n', (0, r.jsx)(n.p, { children: 'Je weet nu dat je aan afbeeldingen een alternatieve tekst mee kunt geven. Maar wat moet er dan in een alternatieve tekst staan? En is een alternatieve tekst wel \xe1ltijd nodig? Dat hangt af van welke functie de afbeelding heeft. Per afbeeldingssoort vind je hier richtlijnen.' }), '\n', (0, r.jsx)(l.F, { excludeDocIDs: ['richtlijnen/content/afbeeldingen/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen-en-meer-informatie', children: 'Bronnen en meer informatie' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/tutorials/images/decision-tree/', children: 'W3C - Beslisboom voor afbeeldingen (Engels)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/text-alternatives', children: 'W3C - Richtlijn tekstalternatieven (Engels)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/tutorials/images/decorative/#image-used-for-ambiance-eye-candy', children: 'W3C - Richtlijnen voor decoratieve afbeeldingen (Engels)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/write-alt-text/', children: 'Nielsen Norman Group - Alt-text (Engels)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.deque.com/blog/great-alt-text-introduction/', children: 'Deque - Introductie alternatieve teksten (Engels)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://webaim.org/projects/screenreadersurvey10/', children: 'WebAIM - screenreadergebruikersonderzoek (Engels)' }) }), '\n'] }), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(85248);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => l });
   var i = t(30758);
   const r = {},
    a = i.createContext(r);
   function s(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, t) => {
   t.d(n, { N: () => s });
   var i = t(71170),
    r = t(13526),
    a = t(86070);
   const s = ({ className: e, ...n }) => (0, a.jsx)(i.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
