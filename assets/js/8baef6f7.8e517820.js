'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41102],
 {
  1292(e, n, i) {
   i.d(n, { r: () => h });
   var t = i(29181),
    o = i(74172),
    r = i(15089),
    a = i(28377),
    s = i(33648),
    l = i(83386),
    c = i(86070);
   const d = { figma: (0, c.jsx)(o.A, {}), github: (0, c.jsx)(r.A, {}), npm: (0, c.jsx)(a.A, {}), storybook: (0, c.jsx)(s.A, {}) },
    h = ({ brand: e }) => (0, c.jsx)(t.In, { children: d[e] || (0, c.jsx)(l.A, {}) });
  },
  12013(e, n, i) {
   i.d(n, { o: () => d });
   var t = i(18439),
    o = i(46447),
    r = i(86070);
   const a = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: o } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + o;
     }
     return i.toString();
    },
    s = { 1: {}, 2: { h1: o.fV, h2: o._B, h3: o.f_, h4: o.mM, h5: o.TT }, 3: { h1: o._B, h2: o.f_, h3: o.mM, h4: o.TT, h5: o.TT }, 4: { h1: o.f_, h2: o.mM, h3: o.TT, h4: o.TT, h5: o.TT }, 5: { h1: o.mM, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT }, 6: { h1: o.TT, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT } },
    l = (e) => ({ img: ({ src: n, ...i }) => (0, r.jsx)('img', { ...i, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return s[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: o = '', components: a = {} }) => (0, r.jsx)(t.x, { components: { ...c(n, i), ...l(o), ...a }, children: e });
  },
  17045(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => r });
   var t = i(86070),
    o = i(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  19776(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => r });
   var t = i(86070),
    o = i(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24838(e, n, i) {
   i.d(n, { Ay: () => a });
   var t = i(86070),
    o = i(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, t.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  33037(e, n, i) {
   (i.r(n), i.d(n, { assets: () => S, component: () => F, contentTitle: () => R, default: () => M, description: () => C, frontMatter: () => N, issueNumber: () => I, metadata: () => t, title: () => L, toc: () => G }));
   const t = JSON.parse('{"id":"componenten/icon/index","title":"Icon","description":"Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.","source":"@site/docs/componenten/icon/index.mdx","sourceDirName":"componenten/icon","slug":"/icon","permalink":"/icon","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/icon/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Icon","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Icon","pagination_label":"Icon","description":"Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.","slug":"/icon","keywords":["afbeelding","button icon","caret","emoji","glyph","graphic","icon","icoon","illustratie","illustration","logo","picto","pictogram","plaatje","svg","svg icon","symbol","symbool"]},"sidebar":"componenten","previous":{"title":"Heading Group","permalink":"/heading-group"},"next":{"title":"Image","permalink":"/image"}}');
   var o = i(86070),
    r = i(18439),
    a = i(17045),
    s = i(19776),
    l = i(40808),
    c = i(87069),
    d = i(80506);
   function h(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Een informatief icon is een visueel symbool dat ontworpen is om snel en intu\xeftief specifieke informatie over te brengen, zonder dat daar tekst voor nodig is.' }), '\n', (0, o.jsxs)(n.p, { children: ['Als een informatief icon g\xe9\xe9n onderdeel is van een interactief component, zoals een ', (0, o.jsx)(n.code, { children: 'button' }), ' of ', (0, o.jsx)(n.code, { children: 'link' }), ', heeft het icon een alternatieve tekst nodig.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Dit kan bijvoorbeeld door een ', (0, o.jsx)(n.code, { children: 'aria-label' }), ' toe te voegen aan een ', (0, o.jsx)(n.code, { children: 'svg' }), ' icon met ', (0, o.jsx)(n.code, { children: 'role="img"' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Een icon is decoratief als er een beschrijvende tekst boven, naast of onder staat. Een icon is ook decoratief als het onderdeel is van een interactief component met een eigen toegankelijke naam, zoals een ', (0, o.jsx)(n.code, { children: 'button' }), ' of een ', (0, o.jsx)(n.code, { children: 'link' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het is daarom niet nodig dat gebruikers die hulpsoftware gebruiken, zoals een ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', weten dat er een icon aanwezig is. Verberg decoratieve icons, bijvoorbeeld met ', (0, o.jsx)(n.code, { children: 'aria-hidden="true"' }), ' op de component.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Let op: VoiceOver in combinatie met Safari (in de ', (0, o.jsx)(n.a, { href: '/baseline/2025-07/', children: 'NL Design System Baseline van juli 2025' }), ") negeert Unicode-emoji's met ", (0, o.jsx)(n.code, { children: 'aria-hidden="true"' }), ' w\xe9l in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een ', (0, o.jsx)(n.a, { href: 'https://bugs.webkit.org/show_bug.cgi?id=161740', children: 'bug in WebKit' }), '. Gebruik daarom liever SVG icons.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Informatieve icons kunnen worden voorzien van een beschrijvende alternatieve tekst, doordat ', (0, o.jsx)(n.code, { children: 'aria-label' }), ' of ', (0, o.jsx)(n.code, { children: 'aria-labelledby' }), ' in de component gebruikt kan worden.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function p(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Decoratieve icons kunnen verborgen worden voor hulpsoftware, doordat het ', (0, o.jsx)(n.code, { children: 'aria-hidden' }), ' attribuut gebruikt kan worden in de component.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Let op: VoiceOver in combinatie met Safari (in de ', (0, o.jsx)(n.a, { href: '/baseline/2025-07/', children: 'NL Design System Baseline van juli 2025' }), ") negeert Unicode-emoji's met ", (0, o.jsx)(n.code, { children: 'aria-hidden="true"' }), ' w\xe9l in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een ', (0, o.jsx)(n.a, { href: 'https://bugs.webkit.org/show_bug.cgi?id=161740', children: 'bug in WebKit' }), '. Gebruik daarom liever SVG icons.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function g(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Informatieve icons moeten herkenbaar zijn als afbeelding voor gebruikers die hulpsoftware, zoals een ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', gebruiken.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Bijvoorbeeld: een ', (0, o.jsx)(n.code, { children: 'svg' }), ' icon heeft ', (0, o.jsx)(n.code, { children: 'role="img"' }), ' als attribuut.'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function m(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Een icon kan uit een afbeelding van een letter bestaan (bijvoorbeeld B voor dikgedrukte tekst). Gebruik geen icons van letters om woorden of teksten te maken.' }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   var v = i(55552);
   function k(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de kleur van componenten die visueel betekenis hebben en hun directe omgeving.' }), '\n', (0, o.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Een icoon dat betekenis heeft, zoals de 3 streepjes voor een menu of een pijltje naar rechts voor de volgende pagina.' }), '\n', (0, o.jsx)(n.li, { children: 'Een icoon dat de status aangeeft van een bericht zoals een oranje driehoek voor een waarschuwing en een groen vinkje voor succes.' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het gemeten kleurcontrast tussen het element en de achtergrond moet minstens 3:1 zijn. Dit is te controleren met de ', (0, o.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] })] });
   }
   function b(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Icons zijn regelmatig onderdeel van een link, m\xe9t of zonder begeleidende linktekst.' }), '\n', (0, o.jsxs)(n.p, { children: ['Zorg er voor dat het duidelijk is waar de link naar verwijst, in plaats van dat het uiterlijk van het icon beschreven wordt. Dit is belangrijk voor gebruikers die gebruik maken van hulpsoftware, zoals een ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: "Bijvoorbeeld: Een link met een icon dat aangeeft dat een link naar een externe website verwijst heeft als beschrijving in de accessibility tree 'Gemeente Den Haag (externe website)' en niet 'Gemeente Den Haag klein vierkantje met een pijl die naar rechtsboven wijst'." }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten/', children: 'Toegankelijke linkteksten' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function f(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Als een icon een alternatief is voor een tekstuele kop of label, moet het voor de doelgroep duidelijk zijn wat het icon vertegenwoordigt.' }), '\n', (0, o.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Een zoekfunctie gebruikt een vergrootglas icon.' }), '\n', (0, o.jsx)(n.li, { children: 'De link naar de homepage in een broodkruimelpad is een huis icon.' }), '\n', (0, o.jsx)(n.li, { children: 'Een knop om een dialoogvenster te sluiten gebruikt een kruis (x) icon.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   var x = i(24838);
   function w(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: "Componenten of functionaliteiten die op meerdere pagina's voorkomen en die gebruik maken van icons, maken overal gebruik van dezelfde icons. Wees ook zoveel mogelijk consistent in het gebruik van icons. Als je in een component op de ene pagina gebruik maakt van een icon, doe dat dan in datzelfde component op een andere pagina ook." }), '\n', (0, o.jsx)(n.p, { children: 'Dit is belangrijk om snel te navigeren en snel belangrijke functionaliteiten terug te kunnen vinden, zeker voor gebruikers met bijvoorbeeld een cognitieve beperking.' }), '\n', (0, o.jsx)(n.p, { children: 'Denk aan:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Zoekfuncties die consistent gebruik maken van een vergrootglas icon.' }), '\n', (0, o.jsx)(n.li, { children: 'Waarschuwingen die consistent gebruik maken van een uitroepteken icon.' }), '\n', (0, o.jsx)(n.li, { children: 'Informatie-opties, zoals bij mogelijk moeilijke termen, die consistent gebruik maken van een vraagteken icon.' }), '\n', (0, o.jsx)(n.li, { children: 'De optie om vooruit of achteruit te gaan in een proces, die consistent gebruik maakt van pijl-icons.' }), '\n', (0, o.jsx)(n.li, { children: 'De optie om een dialoogvenster te sluiten, maakt overal gebruik van een kruisje.' }), '\n', (0, o.jsx)(n.li, { children: 'Bij een goed ingevuld formulierveld staat overal een vinkje.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function z(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Als een icon een alternatief is voor een tekstueel label bij een invoerveld, moet het duidelijk zijn wat de gebruiker moet doen of moet invullen.' }), '\n', (0, o.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Een icon van een slot in een inlogformulier vraagt om een wachtwoord.' }), '\n', (0, o.jsx)(n.li, { children: 'Een icon van een vergrootglas in een zoekfunctie vraagt om een zoekterm.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   const A = [
     {
      title: 'Informatieve icons hebben een beschrijvende alternatieve tekst.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
      },
      tags: ['developer', 'contentmaker'],
     },
     {
      title: 'Decoratieve icons zijn verborgen voor hulpsoftware.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer', 'contentmaker'],
     },
     { title: 'Als een icon een status aangeeft, is die informatie niet alleen afhankelijk van kleur.', sc: '1.4.1', status: '', component: i(44720).Ay, tags: ['designer'] },
     {
      title: 'Gebruik geen icons om teksten te vormen.',
      sc: '1.4.5',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'Bij zoom overlapt een icon niet met andere content.', sc: '1.4.10', status: '', component: v.Ay, tags: ['designer', 'developer'] },
     {
      title: 'Een informatief icon heeft een contrastratio van minimaal 3:1 met de achtergrond.',
      sc: '1.4.11',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(k, { ...e }) }) : k(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     {
      title: 'Als een icon onderdeel is van een link, beschrijft de alternatieve tekst het doel van het icon.',
      sc: '2.4.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b(e);
      },
      tags: ['developer', 'contentmaker'],
     },
     {
      title: 'Als een icon wordt gebruikt als visueel label, is het duidelijk wat de betekenis is.',
      sc: '2.4.6',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'Als de alternatieve tekst van een icon in een andere taal is dan de hoofdtaal van de pagina, is dat duidelijk aangegeven.', sc: '3.1.2', status: '', component: x.Ay, tags: ['developer'] },
     {
      title: "Een component met dezelfde functionaliteit die op meerdere pagina's voorkomt, heeft op alle pagina's hetzelfde icon.",
      sc: '3.2.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(w, { ...e }) }) : w(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'Als een icon wordt gebruikt als visueel label van een invoermogelijkheid, is het duidelijk welke invoer gevraagd wordt. ',
      sc: '3.3.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(z, { ...e }) }) : z(e);
      },
      tags: ['designer', 'contentmaker'],
     },
    ],
    y = [
     {
      title: 'Informatieve icons kunnen een alternatieve tekst hebben.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(j, { ...e }) }) : j(e);
      },
      tags: ['developer'],
     },
     {
      title: 'Decoratieve icons kunnen verborgen worden voor hulpsoftware.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
      },
      tags: ['developer'],
     },
     {
      title: 'Informatieve icons hebben de rol van afbeelding in de accessibility tree.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
      },
      tags: ['developer'],
     },
    ];
   var D = i(12013);
   function T(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'iconen', children: 'Iconen' }) }), '\n', (0, o.jsx)(n.p, { children: 'Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.' }), '\n', (0, o.jsx)(n.p, { children: 'Grofweg zijn er twee categorie\xebn iconen; functionele en illustratieve iconen.' }), '\n', (0, o.jsx)(n.p, { children: 'Denk bij functionele iconen bijvoorbeeld aan:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Chevrons' }), '\n', (0, o.jsx)(n.li, { children: 'Opslaan en download indicatoren' }), '\n', (0, o.jsx)(n.li, { children: 'Een \xd7 om een dialoogvenster te sluiten' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Functionele iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in \xe9\xe9n oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.' }), '\n', (0, o.jsx)(n.h2, { id: 'icoon-en-tekst', children: 'Combinatie van icoon en tekst' }), '\n', (0, o.jsx)(n.p, { children: 'Combineer waar mogelijk een icoon met tekst.' }), '\n', (0, o.jsx)(n.p, { children: 'Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.' }), '\n', (0, o.jsx)(n.h2, { id: 'hoeveelheid-iconen', children: 'Niet te veel iconen op een pagina' }), '\n', (0, o.jsx)(n.p, { children: 'Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.' }), '\n', (0, o.jsx)(n.p, { children: 'Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z\u2019n doel als navigatiehulp voor de bezoeker.' }), '\n', (0, o.jsx)(n.p, { children: 'Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.' }), '\n', (0, o.jsx)(n.p, { children: 'De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.' }), '\n', (0, o.jsx)(n.h2, { id: 'kleur', children: 'Icoon kleuren' }), '\n', (0, o.jsx)(n.p, { children: 'Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.' }), '\n', (0, o.jsx)(n.p, { children: 'De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essenti\xeble. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.' }), '\n', (0, o.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, o.jsxs)(n.p, { children: ['Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan screenreaders.'] }), '\n', (0, o.jsx)(n.h3, { id: 'tekstlabels', children: 'Tekstlabels' }), '\n', (0, o.jsx)(n.p, { children: 'Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan dat een tekstverduidelijking wel aan screenreaders aangeboden wordt.' }), '\n', (0, o.jsx)(n.h3, { id: 'contrast', children: 'Contrast' }), '\n', (0, o.jsxs)(n.p, { children: ['Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207', children: 'WCAG techniek G207' }), ' en het ', (0, o.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), '. Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.'] }), '\n', (0, o.jsx)(n.p, { children: 'Puur decoratieve iconen hoeven niet aan deze eis te voldoen.' }), '\n', (0, o.jsxs)(n.p, { children: ['Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een ', (0, o.jsx)(n.code, { children: 'alt' }), ' tekst te voorzien, een leeg ', (0, o.jsx)(n.code, { children: 'alt=""' }), ' attribuut is dan voldoende.'] }), '\n', (0, o.jsx)(n.h3, { id: 'interactieve-iconen', children: 'Interactieve iconen' }), '\n', (0, o.jsxs)(n.p, { children: ['Wanneer een interactief icoon gebruik wordt voor muisgestuurde acties, dan dient het icoon voorzien te zijn van een ', (0, o.jsx)(n.code, { children: 'hover' }), ' staat. Voor toetsenbordbediening dient tevens een ', (0, o.jsx)(n.code, { children: 'focus' }), ' staat aanwezig te zijn zodat gebruikers kunnen zien waar de focus zich op dat moment bevindt.'] }), '\n', (0, o.jsx)(n.p, { children: 'Zorg bij deze interactieve iconen ervoor dat interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.' }), '\n', (0, o.jsx)(n.p, { children: 'Het aanbieden van gevulde iconen voor geselecteerde staten waar standaard lijn-iconen gebruikt worden kan een oplossing zijn. Ook het gebruiken van een wijziging in een icoon bij een bepaalde staat kan uitkomst bieden. Een voorbeeld hiervan is een prullenbak icoon dat een volle prullenbak toont, en een geleegde wanneer deze geleegd is.' }), '\n', (0, o.jsx)(n.h3, { id: 'klik-tapoppervlakte', children: 'Klik en tapoppervlakte' }), '\n', (0, o.jsx)(n.p, { children: 'Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan het vergoten van de interactieve marge rondom het icoon bijdragen aan het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen t\xe9 kleine iconen onduidelijk zijn.' }), '\n', (0, o.jsxs)(n.p, { children: ['Hanteer voor een vrijstaand icoon ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html', children: 'een minimale oppervlakte van 44\xd744 dp' }), '. Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorische stoornis, zoals gebruikers met Arthritis of Parkinson.'] }), '\n', (0, o.jsx)(n.h3, { id: 'marge', children: 'Afstanden (marge)' }), '\n', (0, o.jsx)(n.p, { children: 'Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.' }), '\n', (0, o.jsx)(n.h2, { id: 'inclusiviteit', children: 'Inclusiviteit' }), '\n', (0, o.jsx)(n.p, { children: 'Zorg, bijvoorbeeld bij profiel iconen, dat deze gender-neutraal en cultuur-onafhankelijk zijn.' }), '\n', (0, o.jsx)(n.h3, { id: 'context', children: 'Context' }), '\n', (0, o.jsx)(n.p, { children: 'In sommige contexten kunnen iconen verkeerd op gevat worden. Denk bijvoorbeeld aan het gebruiken van een prullenbak om een persoon uit een lijst te verwijderen. Ook een \u2018like\u2019 icoon van een duimpje kan in sommige contexten verkeerd opgevat worden. Biedt in dat geval meerdere iconen aan waarmee waardering gegeven kan worden, maar die niet altijd positief hoeft te zijn.' }), '\n', (0, o.jsx)(n.h2, { id: 'referenties', children: 'Referenties' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/', children: 'Inclusief communiceren met iconen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a', children: 'Make your design system accessible \u2014 Part 2: Icons' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen', children: 'Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen', children: 'Utrecht design system' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://www.designsystems.com/iconography-guide/', children: 'A complete guide to iconography' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/articles/icon-usability/', children: 'Icon Usability' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/', children: 'Icons As Part Of A Great User Experience' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed', children: 'When does iconography start to become useless?' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://www.beeldkompas.nl/kennisbank/wat-is-een-icoon', children: 'Beelkompas: Wat is een icoon' }) }), '\n'] })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(T, { ...e }) }) : T(e);
   }
   const N = { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.', slug: '/icon', keywords: ['afbeelding', 'button icon', 'caret', 'emoji', 'glyph', 'graphic', 'icon', 'icoon', 'illustratie', 'illustration', 'logo', 'picto', 'pictogram', 'plaatje', 'svg', 'svg icon', 'symbol', 'symbool'] },
    R = void 0,
    S = {},
    L = 'Icon',
    C = 'Grafisch symbool dat visueel informatie geeft over een actie, onderwerp of status.',
    I = 275,
    F = c.find((e) => e.number === I),
    G = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...l.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...s.RM, { value: 'Icons uit icon fonts', id: 'icons-uit-icon-fonts', level: 4 }, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'Richtlijnen', id: 'richtlijnen', level: 2 }, { value: 'Combinatie van icoon en tekst', id: 'icoon-en-tekst', level: 2 }, { value: 'Niet te veel iconen op een pagina', id: 'hoeveelheid-iconen', level: 2 }, { value: 'Icoon kleuren', id: 'kleur', level: 2 }, { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 }, { value: 'Tekstlabels', id: 'tekstlabels', level: 3 }, { value: 'Contrast', id: 'contrast', level: 3 }, { value: 'Interactieve iconen', id: 'interactieve-iconen', level: 3 }, { value: 'Klik en tapoppervlakte', id: 'klik-tapoppervlakte', level: 3 }, { value: 'Afstanden (marge)', id: 'marge', level: 3 }, { value: 'Inclusiviteit', id: 'inclusiviteit', level: 2 }, { value: 'Context', id: 'context', level: 3 }, { value: 'Referenties', id: 'referenties', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function E(e) {
    const n = { h2: 'h2', h3: 'h3', h4: 'h4', p: 'p', ...(0, r.R)(), ...e.components },
     { Checklist: i, ChecklistItem: t } = n;
    return (i || V('Checklist', !0), t || V('ChecklistItem', !0), (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, o.jsx)(d.Fc, { component: F, headingLevel: 1, description: C }), '\n', (0, o.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, o.jsx)(l.Ay, {}), '\n', (0, o.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, o.jsx)(s.Ay, {}), '\n', (0, o.jsx)(i, { headingLevel: '4', children: A.map(({ component: e, ...n }) => (0, o.jsx)(t, { ...n, children: (0, o.jsx)(e, {}) })) }), '\n', (0, o.jsx)(n.h4, { id: 'icons-uit-icon-fonts', children: 'Icons uit icon fonts' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik je een icon font in plaats van SVG afbeeldingen? Houdt er dan rekening mee dat niet iedereen de iconen kan zien.\nSommige gebruikers kiezen ervoor om altijd een eigen font te gebruiken, of schakelen web fonts uit om data te besparen.\nWij raden daarom aan om SVG te gebruiken in plaats van een icon font. Als je wel een icon font gebruikt, probeer dan Unicode-karakters te gebruiken.\nDeze icons werken ook als de gebruiker een systeem font gebruikt.' }), '\n', (0, o.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, o.jsx)(a.Ay, {}), '\n', (0, o.jsx)(i, { headingLevel: '4', children: y.map(({ component: e, ...n }) => (0, o.jsx)(t, { ...n, children: (0, o.jsx)(e, {}) })) }), '\n', (0, o.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, o.jsx)(D.o, { omitH1: !0, headingLevel: 3, children: (0, o.jsx)(_, {}) }), '\n', (0, o.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, o.jsx)(d.VK, { component: F, headingLevel: 3 }), '\n', (0, o.jsx)(d.$9, { component: F, headingLevel: 2 }), '\n', (0, o.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, o.jsx)(d.mu, { component: F, headingLevel: 3 })] }));
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(E, { ...e }) }) : E(e);
   }
   function V(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  33062(e, n, i) {
   i.d(n, { bo: () => o, KF: () => u, mJ: () => g, VZ: () => A, cR: () => z, Pv: () => m, qZ: () => a, kD: () => f, B2: () => j, Pc: () => l, f4: () => s, GT: () => x, fX: () => r, eQ: () => b, B_: () => k, o_: () => v, Rc: () => w });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return h(d(n));
    },
    j = (e, n) => g(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(d(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => h(d(e.projects.flatMap((e) => p(e)))),
    m = (e) => {
     const n = p(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: t, id: o, value: r }) => {
        const a = /^(.+) URL/.exec(t)[1],
         s = 'Storybook' === a ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: t, id: o, value: r, description: s };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    v = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? f(e[i], [...n, i]) : []));
   }
   function x(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || i(e).localeCompare(i(n)));
   }
   function w(e) {
    const n = {};
    for (const i of e) {
     let e = n;
     for (const n of i) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const z = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  40808(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => r });
   var t = i(86070),
    o = i(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  44720(e, n, i) {
   i.d(n, { Ay: () => s, RM: () => r });
   var t = i(86070),
    o = i(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  54565(e, n, i) {
   i.d(n, { c: () => o });
   var t = i(30758);
   function o() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  55552(e, n, i) {
   i.d(n, { Ay: () => a });
   var t = i(86070),
    o = i(18439);
   function r(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, t.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, t.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, t.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  67970(e, n, i) {
   i.d(n, { D: () => s });
   var t = i(46447),
    o = i(13526),
    r = i(33062),
    a = i(86070);
   const s = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, a.jsx)(t.KE, { className: (0, o.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, i) {
   i.d(n, { p: () => r });
   var t = i(13526),
    o = i(86070);
   const r = ({ children: e, className: n, level: i = 1, suffix: r, ...a }) => (0, o.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...a, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  80506(e, n, i) {
   i.d(n, { VK: () => g, $9: () => v, mu: () => m, Fc: () => k });
   var t = i(29181),
    o = i(13526),
    r = i(1292),
    a = i(90495),
    s = i(54565);
   function l(e) {
    return (0, s.c)() ? e.children() : null;
   }
   var c = i(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, c.jsx)(l, {
     children: () => {
      const t = i(83294).V6;
      return (0, c.jsx)(t, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: n, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var h = i(67970),
    u = i(72642),
    j = i(58876),
    p = i(33062);
   const g = ({ component: e, headingLevel: n }) => {
     const i = e && e.projects.filter((e) => p.f4.includes(e.id)),
      r = i && p.f4.map((e) => i.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(t.If, { sections: r.map((i) => ({ className: (0, o.A)('definition-of-done', i && `definition-of-done--${(0, p.fX)(i.title)}`), headingLevel: n, expanded: !1, label: i ? `${i.title} - ${i.progress.value} van ${i.progress.max}` : '', body: i && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(j._, { children: i.tasks.map(({ checked: e, name: i, id: t }) => (0, c.jsx)(j.Z, { headingLevel: n + 1, checked: e, heading: i, description: (0, p.qZ)(t) }, t)) }), (0, c.jsx)(t.fz, { children: (0, c.jsxs)(t.N_, { href: `${i.url}?filterQuery=${e.title}`, children: [i.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    m = ({ component: e, headingLevel: n }) => {
     const i = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && i.length
      ? (0, c.jsx)(a.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: i
          .sort((e, n) => {
           const i = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return i === t ? e.title.localeCompare(n.title) : i - t;
          })
          .map((e) => {
           const i = e.tasks.find(({ name: e }) => 'Naam' === e),
            o = i?.value,
            s = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, c.jsxs)(a.Wu, {
              children: [
               (0, c.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(t.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || s.length > 0) && (0, c.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(t.dk, {
                  links: h
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, c.jsx)(c.Fragment, { children: s.map(({ frameworkName: e, tasks: i }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.DZ, { level: n + 2, children: [o, ' in ', e] }), (0, c.jsx)(t.dk, { links: i.map((e) => ({ children: e.description, icon: (0, c.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const i = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      o = i?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(t.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(t.Xy, { children: [o ? (0, c.jsxs)(t.Er, { children: ['Vul de ', (0, c.jsx)(t.N_, { href: o, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(t.Er, { children: [(0, c.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    k = ({ component: e, headingLevel: n, description: i }) => {
     const o = e && p.bo[e.relayStep];
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(u.p, { level: n, suffix: o && (0, c.jsx)(h.D, { state: o }), children: e.title }), (0, c.jsx)(t.fz, { lead: !0, children: i })] });
    };
  },
  90495(e, n, i) {
   i.d(n, { AC: () => c, Fu: () => a, Wu: () => s, Zp: () => l });
   var t = i(46447),
    o = i(13526),
    r = i(86070);
   const a = ({ background: e, children: n, className: i, ...t }) => (0, r.jsx)('div', { className: (0, o.A)('card__illustration', e && `card__illustration--${e}`, i), ...t, children: n }),
    s = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: i, component: a = 'div', background: s, children: l }) => {
     const c = (e) => ('article' === a ? (0, r.jsx)('article', { ...e }) : 'section' === a ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, o.A)('cardgroup__card', s && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, i), children: l });
     return e ? (0, r.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: n, className: i }) => (0, r.jsx)('div', { className: (0, o.A)('cardgroup', `cardgroup--${e}`, i), children: n });
  },
 },
]);
