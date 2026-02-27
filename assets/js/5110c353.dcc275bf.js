(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45900],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => u });
   var r = t(29181),
    i = t(74172),
    o = t(15089),
    s = t(28377),
    a = t(33648),
    c = t(83386),
    l = t(86070);
   const d = { figma: (0, l.jsx)(i.A, {}), github: (0, l.jsx)(o.A, {}), npm: (0, l.jsx)(s.A, {}), storybook: (0, l.jsx)(a.A, {}) },
    u = ({ brand: e }) => (0, l.jsx)(r.In, { children: d[e] || (0, l.jsx)(c.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => d });
   var r = t(18439),
    i = t(46447),
    o = t(86070);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    c = (e) => ({ img: ({ src: n, ...t }) => (0, o.jsx)('img', { ...t, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: s = {} }) => (0, o.jsx)(r.x, { components: { ...l(n, t), ...c(i), ...s }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => D });
   var r = t(96547),
    i = t(79889),
    o = t(33062),
    s = t(46447),
    a = t(68148),
    c = t(9016),
    l = t(91635),
    d = t(30734),
    u = t(4603),
    h = t(29181),
    j = t(86070);
   function p({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, j.jsxs)(s.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await d.Ay.format(n, { parser: t, plugins: [a.A, c.Ay, l.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, j.jsx)(h.In, { children: (0, j.jsx)(u.A, {}) })],
       })
     : null;
   }
   var m = t(35193),
    g = t(13088),
    b = t(91525),
    k = t(24214),
    x = t(92081),
    v = t(1375),
    f = t(23436),
    y = t(79532),
    w = t(30758);
   const z = { color: m.A, dimension: g.A, fontFamilies: b.A, fontSizes: k.A, fontWeights: x.A, lineHeights: v.A, other: f.A, textDecoration: y.A },
    A = ({ type: e }) => (0, j.jsx)(h.In, { children: (0, w.createElement)(z[e]) });
   function D({ tokens: e }) {
    const n = (0, o.kD)(e),
     t = (0, o.GT)(n),
     a = t.map((e) => (0, o.B_)(e) + ': ;').join('\n'),
     c = JSON.stringify((0, o.Rc)(t));
    return (0, j.jsxs)(j.Fragment, {
     children: [
      (0, j.jsxs)(s.XI, {
       children: [
        (0, j.jsx)(s.A0, { children: (0, j.jsxs)(s.Hj, { children: [(0, j.jsx)(s.M_, { children: 'name' }), (0, j.jsx)(s.M_, { children: 'type' })] }) }),
        (0, j.jsx)(s.BF, {
         children: t.map((n) => {
          const t = (0, o.o_)(n),
           a = (0, o.eQ)(e, n).$type;
          return (0, j.jsxs)(s.Hj, { children: [(0, j.jsx)(s.nA, { children: (0, j.jsx)(r.C, { children: (0, j.jsx)(s.kf, { children: t }) }) }), (0, j.jsx)(s.nA, { children: (0, j.jsxs)(i.K, { children: [(0, j.jsx)(A, { type: a }), ' ', a] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, j.jsxs)(s.e2, { children: [(0, j.jsx)(p, { content: c, language: 'json', children: 'Kopieer als JSON' }), (0, j.jsx)(p, { content: a, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  23885(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Elementen met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  25872(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Je kunt het element focussen met de tabtoets en activeren met de spacebar en de entertoets.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  26813(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => re, component: () => ae, contentTitle: () => te, default: () => de, description: () => oe, frontMatter: () => ne, issueNumber: () => se, metadata: () => r, title: () => ie, toc: () => ce }));
   const r = JSON.parse('{"id":"componenten/button/index","title":"Button","description":"Biedt de mogelijkheid om een actie uit te voeren.","source":"@site/docs/componenten/button/index.mdx","sourceDirName":"componenten/button","slug":"/button","permalink":"/button","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/button/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Button","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Button","pagination_label":"Button","description":"Biedt de mogelijkheid om een actie uit te voeren.","slug":"/button","keywords":["actie","action","action button","activate","aria-expanded","aria-haspopup","aria-pressed","bezig","btn","busy","button","buttons","call to action","click","cta","disabled","icon button","indrukken","klikken","knoop","knop","knopje","knoppen","navigatie knop","press","pressed","send","submit","toggle","toggle button","uitgeschakeld","versturen","verzenden"]},"sidebar":"componenten","previous":{"title":"Breadcrumb Navigation","permalink":"/breadcrumb-navigation"},"next":{"title":"Calendar","permalink":"/calendar"}}');
   var i = t(86070),
    o = t(18439),
    s = t(36059),
    a = t(17045),
    c = t(19776),
    l = t(40808);
   function d(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als het label van een button uit een afbeelding bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de button een naam heeft die duidelijk maakt waar de button voor dient.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor het icoon is niet nodig als er tekst in beeld is. Een ', (0, i.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, i.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, i.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, i.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon te tonen, hou dan rekening met het volgende.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een ', (0, i.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de naam van de button:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button>\n  <img src="trashcan.svg" alt="Delete" />\n</button>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Een andere manier is een svg in de button op te nemen, samen met een visueel verborgen tekst die de naam van de button vormt :' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button>\n  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">\n    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>\n  </svg>\n  <span class="visually-hidden">Delete</span>\n</button>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
   function h(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als de button in relatie staat tot andere componenten, zoals een menu of een dialog, is deze informatie ook beschikbaar voor bezoekers die gebruik maken van hulpsoftware.' }), '\n', (0, i.jsxs)(n.p, { children: ['Dit doe je door het ', (0, i.jsx)(n.code, { children: 'aria-haspopup' }), ' attribuut te gebruiken en in te stellen als ', (0, i.jsx)(n.code, { children: '"menu"' }), ', ', (0, i.jsx)(n.code, { children: '"listbox"' }), ', ', (0, i.jsx)(n.code, { children: '"tree"' }), ', ', (0, i.jsx)(n.code, { children: '"grid"' }), ', ', (0, i.jsx)(n.code, { children: '"dialog"' }), ' of ', (0, i.jsx)(n.code, { children: '"true"' }), '. Geef daarnaast de relatie aan met ', (0, i.jsx)(n.code, { children: 'aria-controls' }), '. Als waarde stel je daar \xe9\xe9n of meerdere ', (0, i.jsx)(n.code, { children: 'id' }), "'s in van de specifieke onderdelen die worden aangestuurd door de button."] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als de button in relatie staat tot andere componenten, zoals een menu of een dialog, is het mogelijk deze informatie beschikbaar te maken voor bezoekers die gebruik maken van hulpsoftware.' }), '\n', (0, i.jsxs)(n.p, { children: ['Je kunt het ', (0, i.jsx)(n.code, { children: 'aria-haspopup' }), '-attribuut gebruiken en instellen als ', (0, i.jsx)(n.code, { children: '"menu"' }), ', ', (0, i.jsx)(n.code, { children: '"listbox"' }), ', ', (0, i.jsx)(n.code, { children: '"tree"' }), ', ', (0, i.jsx)(n.code, { children: '"grid"' }), ', ', (0, i.jsx)(n.code, { children: '"dialog"' }), ' of ', (0, i.jsx)(n.code, { children: '"true"' }), '. Je kunt daarnaast de relatie aangeven met ', (0, i.jsx)(n.code, { children: 'aria-controls' }), '. Als waarde stel je daar \xe9\xe9n of meerdere ', (0, i.jsx)(n.code, { children: 'id' }), "'s in van de specifieke onderdelen die worden aangestuurd door de button."] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   function g(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als het label van het element niet uit tekst bestaat maar uit bijvoorbeeld een icoon (zoals bij een zoekknop met een vergrootglas), dan is het contrast tussen het icoon en de achtergrond minimaal 3:1. Dit is te controleren met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   var k = t(83329),
    x = t(83672),
    v = t(34257),
    f = t(66706),
    y = t(25872);
   function w(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w(e);
   }
   function A(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat een element dat de toetsenbordfocus heeft volledig zichtbaar is en niet bedekt is door andere inhoud.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit is belangrijk voor gebruikers van alleen een toetsenbord of van spraakbesturing.' }), '\n', (0, i.jsxs)(n.p, { children: ['Hou er rekening mee dat ', (0, i.jsx)(n.code, { children: 'overflow: auto' }), ' en ', (0, i.jsx)(n.code, { children: 'overflow: hidden' }), ' er voor kunnen zorgen dat de focusindicator niet volledig zichtbaar meer is. Maak bijvoorbeeld gebruik van een negatieve ', (0, i.jsx)(n.code, { children: 'outline-offset' }), ' met de dikte van de focusindicator of ', (0, i.jsx)(n.code, { children: 'padding' }), ' met de dikte van de focusindicator om dit te voorkomen.'] })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(A, { ...e }) }) : A(e);
   }
   var N = t(75978);
   function S(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De focusvolgorde op de pagina en na het activeren van een Button moet logisch zijn. Zorg dat het voorspelbaar is waar de toetsenbordfocus heen gaat na het activeren van een knop.' }), '\n', (0, i.jsx)(n.p, { children: "Over het algemeen geldt: wanneer een button nieuwe content opent, zoals een dialoogvenster of een menu, verplaats je de toetsenbordfocus naar een logische plek in de nieuwe content. Bijvoorbeeld: Na het openen van een 'Menu' button verplaatst de toetsenbordfocus naar het eerste menu-item. Nadat de bezoeker de nieuwe content weer heeft gesloten verplaatst de toetsenbordfocus zich weer terug naar de 'Menu' button." }), '\n', (0, i.jsxs)(n.p, { children: ['Plaats interactieve elementen op een logische plek in de DOM en vermijd het gebruik van ', (0, i.jsx)(n.code, { children: 'tabindex="1"' }), ' en hoger. Hiermee pas je de natuurlijke focusvolgorde op de pagina aan, waardoor fouten in de focusvolgorde kunnen ontstaan.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(S, { ...e }) }) : S(e);
   }
   function _(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient. Een label kan bestaan uit tekst of uit een icoon. Als je een icoon gebruikt, heeft het de voorkeur om ook een beschrijvende tekst in de button op te nemen.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst/', children: 'Duidelijke buttontekst die beschrijft wat de button doet' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   function T(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(_, { ...e }) }) : _(e);
   }
   var L = t(92233),
    F = t(60577);
   function M(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.' }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, i.jsx)(n.code, { children: 'button' }), '-element te gebruiken met daarin tekst:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button>Ga naar stap 2</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een button. Een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een button. Zodoende kan een button een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de button. Als je echt een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de button.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(M, { ...e }) }) : M(e);
   }
   var B = t(61640),
    H = t(24838),
    V = t(23885);
   function O(e) {
    const n = { a: 'a', code: 'code', em: 'em', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De button heeft een rol van ', (0, i.jsx)(n.code, { children: 'button' }), ' en een toegankelijke naam die duidelijk maakt waar de button voor dient. Ook is de toestand (', (0, i.jsx)(n.em, { children: 'state' }), ') duidelijk en door de gebruiker te veranderen met hulpsoftware.'] }), '\n', (0, i.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, i.jsx)(n.code, { children: 'button' }), '-element als je een button nodig hebt:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button>Menu</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, i.jsx)(n.code, { children: 'role=button' }), ' toe te voegen aan een ander element dan een ', (0, i.jsx)(n.code, { children: 'button' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc.'] }), '\n', (0, i.jsxs)(n.p, { children: ['ARIA is wel goed te gebruiken als je de ', (0, i.jsx)(n.em, { children: 'state' }), ' moet aangeven. Hiervoor bestaat geen HTML-attribuut. Bijvoorbeeld bij een uitgeklapte menuknop:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button aria-expanded="true">Menu</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Let erop dat je hiervoor JavaScript nodig hebt en zorg ervoor dat ', (0, i.jsx)(n.code, { children: 'aria-expanded' }), ' de waarde ', (0, i.jsx)(n.code, { children: 'false' }), ' krijgt wanneer het menu weer is ingeklapt.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg er daarnaast voor dat het ', (0, i.jsx)(n.code, { children: 'type' }), '-attribuut kloppend is bij de rol van de knop, zoals ', (0, i.jsx)(n.code, { children: '"submit"' }), ' voor een verzendknop en ', (0, i.jsx)(n.code, { children: '"reset"' }), ' voor een resetknop.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Vermijd het gebruik van ', (0, i.jsx)(n.code, { children: 'aria-busy' }), ' op interactieve elementen zoals knoppen, bijvoorbeeld om aan te geven dat een formulier bezig is met verzenden. Dit attribuut geeft aan hulpsoftware aan dat veranderingen, zoals in een live-region of tijdens het laden van een pagina, niet moeten worden voorgelezen totdat de waarde weer op ', (0, i.jsx)(n.code, { children: 'false' }), ' staat. Hierdoor worden updates voorgelezen als het proces voltooid is, zodat er geen onvolledige informatie wordt gegeven. Je gebruikt het ', (0, i.jsx)(n.code, { children: 'aria-busy' }), ' attribuut wel op de container waarin de updates worden getoond, niet op de knop om de actie mee uit voeren.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik in plaats daarvan ', (0, i.jsx)(n.code, { children: 'aria-disabled' }), ' met ', (0, i.jsx)(n.code, { children: 'tabindex="0"' }), " op de knop en pas de visuele en toegankelijke naam aan, bijvoorbeeld naar 'Bezig met verzenden'. Gebruik vervolgens ", (0, i.jsx)(n.code, { children: 'role="status"' }), ' of ', (0, i.jsx)(n.code, { children: 'role="alert"' }), ' op de container om statusmeldingen over het resultaat van het verzenden van het formulier aan te geven.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Toegankelijke succesmeldingen in een formulier' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/succesmelding/', children: 'Duidelijke succesmeldingen in een formulier' }) }), '\n'] })] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(O, { ...e }) }) : O(e);
   }
   var G = t(68413),
    P = t(36599),
    Z = t(31820),
    U = t(90495),
    $ = t(46447),
    J = t(65947),
    X = t(1292),
    W = t(85825),
    I = t(12013);
   function K(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'gebruik-button', children: 'Gebruik Button' }) }), '\n', (0, i.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, i.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-css', children: '@nl-design-system-candidate/button-css' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.code, { children: 'nl-button' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'button' }), ' element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button class="nl-button">Klik mij</button>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/button-css\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/button-css@1/dist/button.css" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, i.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/button-css/dist/button.css" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/button-css/button.css";\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, i.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-react', children: '@nl-design-system-candidate/button-react' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/button-react\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-jsx', children: 'import { Button } from "@nl-design-system-candidate/button-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <div>\n          <Button>Klik mij!</Button>\n        </div>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function Q(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(K, { ...e }) }) : K(e);
   }
   var Y = t(72401),
    q = t(17889),
    ee = t(78037);
   const ne = { title: 'Button', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Button', pagination_label: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', slug: '/button', keywords: ['actie', 'action', 'action button', 'activate', 'aria-expanded', 'aria-haspopup', 'aria-pressed', 'bezig', 'btn', 'busy', 'button', 'buttons', 'call to action', 'click', 'cta', 'disabled', 'icon button', 'indrukken', 'klikken', 'knoop', 'knop', 'knopje', 'knoppen', 'navigatie knop', 'press', 'pressed', 'send', 'submit', 'toggle', 'toggle button', 'uitgeschakeld', 'versturen', 'verzenden'] },
    te = void 0,
    re = {},
    ie = 'Button',
    oe = 'Biedt de mogelijkheid om een actie uit te voeren.',
    se = 38,
    ae = s.find((e) => e.number === se),
    ce = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...l.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...c.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function le(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, o.R)(), ...e.components },
     { Checklist: t } = n;
    return (
     t ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('Checklist', !0),
     (0, i.jsxs)(i.Fragment, {
      children: [
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       (0, i.jsx)(W.Fc, { component: ae, headingLevel: 1, description: oe }),
       '\n',
       (0, i.jsx)(Y.e, { component: ae }),
       '\n',
       (0, i.jsx)(U.Zp, { className: 'implementation-card', children: (0, i.jsxs)(U.Wu, { children: [(0, i.jsx)(J.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, i.jsxs)($.dk, { children: [(0, i.jsxs)($.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1138', children: [(0, i.jsx)(X.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, i.jsxs)($.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1138', children: [(0, i.jsx)(X.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, i.jsx)(J.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, i.jsxs)($.dk, { children: [(0, i.jsxs)($.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-button--documentatie', children: [(0, i.jsx)(X.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, i.jsxs)($.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/button--documentatie', children: [(0, i.jsx)(X.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, i.jsx)(J.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, i.jsxs)($.dk, { children: [(0, i.jsxs)($.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-css', children: [(0, i.jsx)(X.r, { brand: 'npm' }), ' @nl-design-system-candidate/button-css'] }), (0, i.jsxs)($.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-react', children: [(0, i.jsx)(X.r, { brand: 'npm' }), ' @nl-design-system-candidate/button-react'] }), (0, i.jsxs)($.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-tokens', children: [(0, i.jsx)(X.r, { brand: 'npm' }), ' @nl-design-system-candidate/button-tokens'] })] })] }) }),
       '\n',
       (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
       '\n',
       (0, i.jsx)(l.Ay, {}),
       '\n',
       (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
       '\n',
       (0, i.jsx)(c.Ay, {}),
       '\n',
       (0, i.jsx)(t, {
        headingLevel: '4',
        items: [
         { title: 'Als het label van een button uit all\xe9\xe9n een icoon bestaat, dan heeft deze een goed tekstalternatief.', sc: '1.1.1', status: '', component: (0, i.jsx)(u, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Het is duidelijk of een button in- of uitgeklapt is en/of een relatie heeft met andere componenten.', sc: '1.3.1', status: '', component: (0, i.jsx)(j, {}), tags: ['developer'] },
         { title: 'De contrastverhouding van de tekstkleur in de button met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: (0, i.jsx)(x.Ay, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Het label van de button bestaat uit gewone tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: (0, i.jsx)(f.Ay, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Als het zichtbare label van de button een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.', sc: '1.4.11', status: '', component: (0, i.jsx)(b, {}), tags: ['designer', 'contentmaker'] },
         { title: 'De functionaliteit van de button veroorzaakt geen toetsenbordval.', sc: '2.1.2', status: '', component: (0, i.jsx)(P.Ay, {}), tags: ['developer'] },
         { title: 'De focusvolgorde om bij de button te komen, en de focusvolgorde na het activeren van de button is logisch en voorspelbaar.', sc: '2.4.3', status: '', component: (0, i.jsx)(R, {}), tags: ['developer'] },
         { title: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient.', sc: '2.4.6', status: '', component: (0, i.jsx)(T, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Als de button de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud.', sc: '2.4.11', status: '', component: (0, i.jsx)(z, {}), tags: ['designer', 'developer'] },
         { title: 'Als de button de toetsenbordfocus krijgt, is het element helemaal niet bedekt door andere inhoud.', sc: '2.4.12', status: '', component: (0, i.jsx)(D, {}), tags: ['designer', 'developer'] },
         { title: 'De button heeft een goed zichtbare focusindicator.', sc: '2.4.13', status: '', component: (0, i.jsx)(N.Ay, {}), tags: ['designer', 'developer'] },
         { title: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.', sc: '2.5.3', status: '', component: (0, i.jsx)(C, {}), tags: ['developer'] },
         { title: 'De button heeft een minimale grootte van 44 bij 44 pixels.', sc: '2.5.5', status: '', component: (0, i.jsx)(B.Ay, {}), tags: ['designer', 'developer'] },
         { title: 'Als een buttontekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, i.jsx)(H.Ay, {}), tags: ['developer', 'contentmaker'] },
         { title: 'De button activeert niet al bij toetsenbordfocus.', sc: '3.2.1', status: '', component: (0, i.jsx)(Z.Ay, {}), tags: ['developer'] },
         { title: 'Buttons met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.', sc: '3.2.4', status: '', component: (0, i.jsx)(V.Ay, {}), tags: ['designer', 'developer'] },
         { title: 'De button heeft een toegankelijke naam die duidelijk maakt waar de button voor dient en de staat van de button is beschikbaar.', sc: '4.1.2', status: '', component: (0, i.jsx)(E, {}), tags: ['designer', 'contentmaker'] },
        ],
       }),
       '\n',
       (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
       '\n',
       (0, i.jsx)(a.Ay, {}),
       '\n',
       (0, i.jsx)(t, {
        headingLevel: '4',
        items: [
         { title: 'Het is mogelijk om relaties met andere componenten aan te geven.', sc: '1.3.1', status: '', component: (0, i.jsx)(m, {}), tags: ['developer'] },
         { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, i.jsx)(v.Ay, {}), tags: ['developer'] },
         { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: (0, i.jsx)(k.Ay, {}), tags: ['developer'] },
         { title: 'Je kunt de button focussen met de tabtoets en activeren met de spatiebalk en de entertoets.', sc: '2.1.1', status: '', component: (0, i.jsx)(y.Ay, {}), tags: ['developer'] },
         { title: 'Wanneer een button de toetsenbordfocus krijgt is de focus zichtbaar.', sc: '2.4.7', status: '', component: (0, i.jsx)(L.Ay, {}), tags: ['developer'] },
         { title: 'Als de gebruiker een button indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.', sc: '2.5.2', status: '', component: (0, i.jsx)(F.Ay, {}), tags: ['developer'] },
         { title: 'De button heeft een rol van button en het type is instelbaar.', sc: '4.1.2', status: '', component: (0, i.jsx)(G.Ay, {}), tags: ['developer'] },
        ],
       }),
       '\n',
       (0, i.jsx)(I.o, { omitH1: !0, headingLevel: 3, children: (0, i.jsx)(Q, {}) }),
       '\n',
       (0, i.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }),
       '\n',
       (0, i.jsx)(q.B, { tokens: ee }),
       '\n',
       (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
       '\n',
       (0, i.jsx)(W.VK, { component: ae, headingLevel: 3 }),
       '\n',
       (0, i.jsx)(W.$9, { component: ae, headingLevel: 2 }),
       '\n',
       (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
       '\n',
       (0, i.jsx)(W.mu, { component: ae, headingLevel: 3 }),
      ],
     })
    );
   }
   function de(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(le, { ...e }) }) : le(e);
   }
  },
  31820(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, r.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => i, KF: () => h, mJ: () => m, VZ: () => z, cR: () => w, Pv: () => g, qZ: () => s, kD: () => v, B2: () => j, Pc: () => c, f4: () => a, GT: () => f, fX: () => o, eQ: () => x, B_: () => k, o_: () => b, Rc: () => y });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return u(d(n));
    },
    j = (e, n) => m(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    m = (e) => u(d(e.projects.flatMap((e) => p(e)))),
    g = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: o }) => {
        const s = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: i, value: o, description: a };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    b = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function y(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const w = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    z = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  36599(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  42962(e, n, t) {
   var r = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
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
   ((i.keys = () => Object.keys(r)), (i.id = 42962), (e.exports = i));
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => i });
   var r = t(30758);
   function i() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  60577(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, r.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, r.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  61640(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  66706(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het label bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij het om een logo gaat, zoals een DigiD-logo.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => a });
   var r = t(46447),
    i = t(13526),
    o = t(33062),
    s = t(86070);
   const a = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  68413(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De component en de afzonderlijke interactieve elementen in de component hebben de juiste rol en de juiste attributen voor het aangeven van de staat en de waarde.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => a });
   var r = t(12013),
    i = t(30758),
    o = t(33062),
    s = t(86070);
   const a = ({ component: e }) => {
    const { title: n } = e,
     a = (0, o.fX)(n),
     c = i.lazy(() => t(82839)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(i.Suspense, { fallback: null, children: (0, s.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(c, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => o });
   var r = t(13526),
    i = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...s }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  75978(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Er is een goed zichtbare focusindicator. Dit doe je met een minimale dikte van 2 pixels en een minimaal contrast van 3:1 ten opzichte van aangrenzende kleuren. Hou ook rekening met het contrast met de verschillende achtergrondkleuren waarop een element gebruikt kan worden. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  82839(e, n, t) {
   var r = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
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
   ((i.keys = () => Object.keys(r)), (i.id = 82839), (e.exports = i));
  },
  83329(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85825(e, n, t) {
   'use strict';
   t.d(n, { VK: () => k, $9: () => v, mu: () => x, Fc: () => f });
   var r = t(29181),
    i = t(13526),
    o = t(1292),
    s = t(90495),
    a = t(54565);
   function c(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var l = t(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, l.jsx)(c, {
     children: () => {
      const r = t(83294).V6;
      return (0, l.jsx)(r, {
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
   var u = t(67970),
    h = t(72642),
    j = t(46447),
    p = t(45561);
   const m = ({ children: e }) => (0, l.jsx)('ul', { className: 'task-list', children: e }),
    g = ({ checked: e, children: n, title: t, description: r, headingLevel: o = 3 }) => (0, l.jsxs)('li', { className: (0, i.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, i.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(p.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [t ? (0, l.jsx)(j.DZ, { appearance: 'utrecht-heading-3', level: o, children: t }) : null, r, n] })] });
   var b = t(33062);
   const k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => b.f4.includes(e.id)),
      o = t && b.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: o.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, b.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(m, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, l.jsx)(g, { headingLevel: n + 1, checked: e, title: t, description: (0, b.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !b.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            a = (0, b.Pv)(e),
            c = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => c.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(s.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || a.length > 0) && (0, l.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: u
                   .filter((e) => !!c.get(e.name))
                   .map((e) => {
                    const n = c.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, l.jsx)(l.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, l.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [i ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    f = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && b.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(h.p, { level: n, suffix: i && (0, l.jsx)(u.D, { state: i }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => l, Fu: () => s, Wu: () => a, Zp: () => c });
   var r = t(46447),
    i = t(13526),
    o = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, o.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    a = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    c = ({ href: e, appearance: n, className: t, component: s = 'div', background: a, children: c }) => {
     const l = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(l, { className: (0, i.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: c });
     return e ? (0, o.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, o.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
  92233(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, r.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
