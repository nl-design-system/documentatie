'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66883],
 {
  51121: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => u, default: () => k, frontMatter: () => j, metadata: () => p, toc: () => m });
   var i = t(52676),
    r = t(40139),
    s = t(57716),
    l = t(46364),
    a = t(37943),
    o = t(21339),
    d = t(92828),
    c = t(38391);
   function h(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Alle niet-tekstuele content die aan de gebruiker wordt gepresenteerd, heeft een tekstalternatief dat een gelijkwaardig doel dient.' }), '\n', (0, i.jsx)(n.p, { children: "Uitzonderingen zijn bedieningselementen en invoer met een toegankelijke naam, op tijd gebaseerde media, een test of oefening, content bedoeld om een specifieke zintuiglijke ervaring te cre\xebren, CAPTCHA's en niet-tekstuele content bedoeld voor decoratie." })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'WCAG-succescriterium 1.1.1 Niet-tekstuele content', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.1.1 Niet-tekstuele content', pagination_label: 'WCAG-succescriterium 1.1.1 Niet-tekstuele content', description: 'Zorg bij niet-tekstuele content voor een tekstalternatief.', slug: '1.1.1', keywords: ['WCAG', 'A', 'waarneembaar', 'tekstalternatieven', 'perceivable', 'text alternatives', 'non-text content'] },
    u = void 0,
    p = { id: 'wcag/1.1.01', title: 'WCAG-succescriterium 1.1.1 Niet-tekstuele content', description: 'Zorg bij niet-tekstuele content voor een tekstalternatief.', source: '@site/docs/wcag/1.1.01.mdx', sourceDirName: 'wcag', slug: '/wcag/1.1.1', permalink: '/wcag/1.1.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.1.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.1.1 Niet-tekstuele content', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.1.1 Niet-tekstuele content', pagination_label: 'WCAG-succescriterium 1.1.1 Niet-tekstuele content', description: 'Zorg bij niet-tekstuele content voor een tekstalternatief.', slug: '1.1.1', keywords: ['WCAG', 'A', 'waarneembaar', 'tekstalternatieven', 'perceivable', 'text alternatives', 'non-text content'] }, sidebar: 'richtlijnen', previous: { title: "Introductie WCAG-pagina's", permalink: '/wcag' }, next: { title: 'WCAG-succescriterium 1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)', permalink: '/wcag/1.2.1' } },
    v = {},
    m = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Alternatieve teksten op afbeeldingen', id: 'alternatieve-teksten-op-afbeeldingen', level: 3 },
     { value: 'Benoem waar een video of audio over gaat', id: 'benoem-waar-een-video-of-audio-over-gaat', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.1.1 Niet-tekstuele content' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(g, {}), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Stijl: ', (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Iconen' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Content: ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/', children: 'Afbeeldingen' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Content: ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/kantoorbestanden/', children: 'Kantoorbestanden' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Content: ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/video/beschrijving/', children: 'Video beschrijving' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['De ', (0, i.jsx)(n.a, { href: 'https://www.200ok.nl/tips/afbeeldingen/', children: 'alt-beslisboom' }), ' van 200 OK: wanneer en hoe kun je een alternatieve tekst toevoegen aan een afbeelding.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(o.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.h3, { id: 'alternatieve-teksten-op-afbeeldingen', children: 'Alternatieve teksten op afbeeldingen' }), '\n', (0, i.jsxs)(n.p, { children: ['Inspecteer in de gegenereerde HTML-code van de webpagina de ', (0, i.jsx)(n.code, { children: '<img>' }), '-elementen, bijvoorbeeld met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Check voor afbeeldingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['het ', (0, i.jsx)(n.code, { children: 'alt' }), '-attribuut moet altijd aanwezig zijn, het kan zonder waarde (leeg) zijn:', '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<img src="img-url" alt="" />\n' }) }), '\n', 'of met een alt-tekst', '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<img src="img-url" alt="wit konijn" />\n' }) }), '\n'] }), '\n', (0, i.jsx)(n.li, { children: 'als een afbeelding betekenisvol is, moet de alt-tekst het doel ervan beschrijven.' }), '\n', (0, i.jsxs)(n.li, { children: ['als een afbeelding decoratief is, kan het alt-attribuut leeg zijn: ', (0, i.jsx)(n.code, { children: 'alt=""' }), '. Een alt-tekst toevoegen voor een afbeelding die decoratief is leidt niet tot afkeuring, een afbeelding kan naast tekst ook emotie overdragen. Lees hierover, de post van ', (0, i.jsx)(n.a, { href: 'https://tink.uk/text-descriptions-emotion-rich-images/', children: 'Text descriptions and emotion rich images' }), ' van L\xe9onie Watson en het bericht van ', (0, i.jsx)(n.a, { href: 'https://yatil.social/@yatil/111974572979919177', children: 'Eric Eggert op Mastodon' }), '.'] }), '\n', (0, i.jsx)(n.li, { children: 'het alt-attribuut kan leeg zijn als de betekenis van de afbeelding vlak bij de afbeelding in tekst staat.' }), '\n', (0, i.jsx)(n.li, { children: 'bevat een afbeelding tekst, die informatie toevoegt aan de content, dan moet deze tekst opgenomen zijn in de alt-tekst.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Controleer voor afbeeldingen in links en buttons:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['de alt-tekst van een afbeelding in een link moet het ', (0, i.jsx)(n.strong, { children: 'doel van de link' }), ' beschrijven.'] }), '\n', (0, i.jsxs)(n.li, { children: ['de alt-tekst van een afbeelding in een button moet ', (0, i.jsx)(n.strong, { children: 'de actie' }), ' beschrijven.'] }), '\n', (0, i.jsxs)(n.li, { children: ['als zowel de inhoud van de afbeelding als het doel of de actie even belangrijk zijn, moet de alternatieve tekst ', (0, i.jsx)(n.strong, { children: 'beide' }), ' beschrijven. Bijvoorbeeld bij een link op een logo.'] }), '\n', (0, i.jsxs)(n.li, { children: ['als een afbeelding decoratief is, kan het alt-attribuut leeg zijn: ', (0, i.jsx)(n.code, { children: 'alt=""' }), ', maar de toegankelijke naam van een link of button moet volledig betekenisvol zijn. Bijvoorbeeld:'] }), '\n'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="url">\n  Meer informatie over de intocht van Sinterklaas\n  <img src="pijltje-rechts.svg" alt="" />\n</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Niet doen:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="url">\n  <img src="iDEAL.svg" alt="" />\n</a>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'benoem-waar-een-video-of-audio-over-gaat', children: 'Benoem waar een video of audio over gaat' }), '\n', (0, i.jsxs)(n.p, { children: ['Geef tekstalternatief voor een video of audio zodat de bezoeker weet waar deze over gaat. Dan kan de bezoeker al dan niet besluiten de video of audio af te spelen. Dit door bijvoorbeeld een ', (0, i.jsx)(n.code, { children: 'title' }), '-attribuut te geven aan de iframe-embed. Of door het onderwerp te beschrijven in de begeleidende tekst of een kopje erboven.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#non-text-content', children: (0, i.jsx)('span', { lang: 'en', children: '1.1.1 Non-text Content' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#non-text-content', children: '1.1.1 Niet-tekstuele content' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-content', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 1.1.1 Non-text Content' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 1.1.1: Non-text Content' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(a.CY, { children: (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(d.ZP, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  21339: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  92828: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  38391: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, t) => {
   t.d(n, { V: () => s });
   var i = t(4814),
    r = t(52676);
   const s = (e) => {
    let { children: n, className: t, level: s = 1, suffix: l, ...a } = e;
    return (0, r.jsxs)('hgroup', { className: (0, i.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, t), ...a, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => c });
   var i = t(40139),
    r = t(37943),
    s = t(52676);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + r;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: t, ...i } = n;
      return (0, s.jsx)('img', { ...i, src: l(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: r = 1, baseUrl: l = '', components: a = {} } = e;
     return (0, s.jsx)(i.Z, { components: { ...d(t, r), ...o(l), ...a }, children: n });
    };
  },
  46364: (e, n, t) => {
   t.d(n, { j: () => l });
   var i = t(37943),
    r = t(41757),
    s = t(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: t, ...l } = e;
    return (0, s.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: t && (0, s.jsx)(i.Ou, { className: 'nlds-inline-heading-group__badge', children: t }), ...l, children: n });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => l });
   var i = t(75271);
   const r = {},
    s = i.createContext(r);
   function l(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
