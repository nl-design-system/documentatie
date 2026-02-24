(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44480],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => h });
   var r = t(29181),
    i = t(74172),
    s = t(15089),
    o = t(28377),
    a = t(33648),
    c = t(83386),
    l = t(86070);
   const d = { figma: (0, l.jsx)(i.A, {}), github: (0, l.jsx)(s.A, {}), npm: (0, l.jsx)(o.A, {}), storybook: (0, l.jsx)(a.A, {}) },
    h = ({ brand: e }) => (0, l.jsx)(r.In, { children: d[e] || (0, l.jsx)(c.A, {}) });
  },
  2196(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als de inhoud van de link niet uit tekst bestaat, maar uit bijvoorbeeld een icoon of logo dan moet het aanklikbare gedeelte goed te onderscheiden zijn. Het contrast tussen een icoon, of kader rond een logo, en de achtergrond moet minimaal 3:1 zijn. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  5160(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De link heeft een rol van ', (0, r.jsx)(n.code, { children: 'link' }), ' en een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), ' die duidelijk maakt waar de link voor dient.'] }), '\n', (0, r.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, r.jsx)(n.code, { children: 'a' }), '-element met het ', (0, r.jsx)(n.code, { children: 'href' }), ' attribuut als je een link nodig hebt:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="url">Contact</a>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, r.jsx)(n.code, { children: 'role="link"' }), ' toe te voegen aan een ander element dan een ', (0, r.jsx)(n.code, { children: 'a' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  8584(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => d });
   var r = t(18439),
    i = t(46447),
    s = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    c = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: o = {} }) => (0, s.jsx)(r.x, { components: { ...l(n, t), ...c(i), ...o }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => C });
   var r = t(96547),
    i = t(79889),
    s = t(33062),
    o = t(46447),
    a = t(68148),
    c = t(9016),
    l = t(91635),
    d = t(30734),
    h = t(4603),
    u = t(29181),
    g = t(86070);
   function m({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, g.jsxs)(o.$n, {
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
        children: [e, (0, g.jsx)(u.In, { children: (0, g.jsx)(h.A, {}) })],
       })
     : null;
   }
   var j = t(35193),
    p = t(13088),
    k = t(91525),
    w = t(24214),
    f = t(92081),
    v = t(1375),
    x = t(23436),
    y = t(79532),
    b = t(30758);
   const A = { color: j.A, dimension: p.A, fontFamilies: k.A, fontSizes: w.A, fontWeights: f.A, lineHeights: v.A, other: x.A, textDecoration: y.A },
    T = ({ type: e }) => (0, g.jsx)(u.In, { children: (0, b.createElement)(A[e]) });
   function C({ tokens: e }) {
    const n = (0, s.kD)(e),
     t = (0, s.GT)(n),
     a = t.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     c = JSON.stringify((0, s.Rc)(t));
    return (0, g.jsxs)(g.Fragment, {
     children: [
      (0, g.jsxs)(o.XI, {
       children: [
        (0, g.jsx)(o.A0, { children: (0, g.jsxs)(o.Hj, { children: [(0, g.jsx)(o.M_, { children: 'name' }), (0, g.jsx)(o.M_, { children: 'type' })] }) }),
        (0, g.jsx)(o.BF, {
         children: t.map((n) => {
          const t = (0, s.o_)(n),
           a = (0, s.eQ)(e, n).$type;
          return (0, g.jsxs)(o.Hj, { children: [(0, g.jsx)(o.nA, { children: (0, g.jsx)(r.C, { children: (0, g.jsx)(o.kf, { children: t }) }) }), (0, g.jsx)(o.nA, { children: (0, g.jsxs)(i.K, { children: [(0, g.jsx)(T, { type: a }), ' ', a] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, g.jsxs)(o.e2, { children: [(0, g.jsx)(m, { content: c, language: 'json', children: 'Kopieer als JSON' }), (0, g.jsx)(m, { content: a, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  18474(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => I, component: () => Z, contentTitle: () => V, default: () => J, description: () => U, frontMatter: () => H, issueNumber: () => $, metadata: () => r, title: () => B, toc: () => X }));
   const r = JSON.parse('{"id":"componenten/link/index","title":"Link","description":"Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.","source":"@site/docs/componenten/link/index.mdx","sourceDirName":"componenten/link","slug":"/link","permalink":"/link","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/link/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Link","pagination_label":"Link","description":"Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.","slug":"/link","keywords":["a","a tag","anchor","anchor element","anchor link","back link","button as link","call to action link","cta link","externe link","external link","href","hyper link","hyperlink","inline link","koppeling","label","link","link button","links","navigatie","navigation","navlink","ordinal","standalone","standalone link","text link","URL","url","verwijzing","web address"]},"sidebar":"componenten","previous":{"title":"Language Navigation","permalink":"/language-navigation"},"next":{"title":"Link List","permalink":"/link-list"}}');
   var i = t(86070),
    s = t(18439),
    o = t(36059),
    a = t(17045),
    c = t(19776),
    l = t(40808);
   t(82548);
   function d(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als het label van de link alleen uit een icoon of logo bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de link een naam heeft die duidelijk maakt waar de link voor dient.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor de afbeelding is niet nodig als er naast de afbeelding ook tekst in de link staat die uitlegt waar de link naartoe gaat. Een ', (0, i.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, i.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, i.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, i.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon of logo te tonen, hou dan rekening met het volgende.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een ', (0, i.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de toegankelijke naam van de link:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="url">\n  <img src="ideal.svg" alt="iDeal" />\n</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar duidelijker is:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="url"> Betaal met iDeal <img src="ideal.svg" alt="" /> </a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
   var u = t(2196),
    g = t(83329);
   function m(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Onderstreep links in een lopende tekst, zodat bezoekers makkelijk kunnen zien dat er een link in de tekst staat.' }), '\n', (0, i.jsx)(n.p, { children: 'Een andere manier om links te onderscheiden van de lopende tekst is door een andere tekstkleur te gebruiken. Deze kleur moet dan wel een contrastratio van minimaal 3:1 hebben ten opzichte van de lopende tekst, maar liever hoger. Hou er rekening mee dat alle tekst altijd voldoende contrast moet hebben met de achtergrondkleur van de pagina, ook bij muishover en toetsenbordfocus.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'Gebruik kleur met een doel' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
   var p = t(83672),
    k = t(34257),
    w = t(36369),
    f = t(92233),
    v = t(60577),
    x = t(27055),
    y = t(61640),
    b = t(24838),
    A = t(23885),
    T = (t(5160), t(96412)),
    C = t(36599),
    R = t(8584),
    z = t(76334),
    G = t(90495),
    L = t(46447),
    N = t(65947),
    W = t(1292),
    D = t(72401),
    S = t(59840),
    _ = t(85825),
    F = t(17889),
    M = t(12013);
   function P(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'gebruik-link', children: 'Gebruik Link' }) }), '\n', (0, i.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, i.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-css', children: '@nl-design-system-candidate/link-css' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.code, { children: 'nl-link' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'a' }), ' element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="https://example.com" class="nl-link">example.com</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-css\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/link-css@1/dist/link.css" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, i.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/link-css/dist/link.css" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/link-css/link.css";\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'link-om-een-image-of-andere-inline-box-componenten', children: 'Link om een Image of andere inline-box componenten' }), '\n', (0, i.jsxs)(n.p, { children: ['Om te zorgen dat de states van een Link component goed werken als een link om een inline-box element zoals een Image is gezet gebruik je de ', (0, i.jsx)(n.code, { children: 'nl-link' }), ' class name in combinatie met ', (0, i.jsx)(n.code, { children: 'nl-link--inline-box' }), ' class name.'] }), '\n', (0, i.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, i.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-react', children: '@nl-design-system-candidate/link-react' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-react\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-jsx', children: 'import { Link } from "@nl-design-system-candidate/link-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <p>\n          <Link href="https://example.com">example.com</Link>\n        </p>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(P, { ...e }) }) : P(e);
   }
   var O = t(86334);
   const H = { title: 'Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link', pagination_label: 'Link', description: 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.', slug: '/link', keywords: ['a', 'a tag', 'anchor', 'anchor element', 'anchor link', 'back link', 'button as link', 'call to action link', 'cta link', 'externe link', 'external link', 'href', 'hyper link', 'hyperlink', 'inline link', 'koppeling', 'label', 'link', 'link button', 'links', 'navigatie', 'navigation', 'navlink', 'ordinal', 'standalone', 'standalone link', 'text link', 'URL', 'url', 'verwijzing', 'web address'] },
    V = void 0,
    I = {},
    B = 'Link',
    U = 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.',
    $ = 118,
    Z = o.find((e) => e.number === $),
    X = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...l.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...c.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'Link om een Image of andere inline-box componenten', id: 'link-om-een-image-of-andere-inline-box-componenten', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function K(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, i.jsx)(_.Fc, { component: Z, headingLevel: 1, description: U }),
      '\n',
      (0, i.jsx)(D.e, { component: Z }),
      '\n',
      (0, i.jsx)(G.Zp, { className: 'implementation-card', children: (0, i.jsxs)(G.Wu, { children: [(0, i.jsx)(N.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, i.jsxs)(L.dk, { children: [(0, i.jsxs)(L.N_, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1056', children: [(0, i.jsx)(W.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, i.jsxs)(L.N_, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1056', children: [(0, i.jsx)(W.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, i.jsx)(N.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, i.jsxs)(L.dk, { children: [(0, i.jsxs)(L.N_, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-link--documentatie', children: [(0, i.jsx)(W.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, i.jsxs)(L.N_, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/link--documentatie', children: [(0, i.jsx)(W.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, i.jsx)(N.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, i.jsxs)(L.dk, { children: [(0, i.jsxs)(L.N_, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-css', children: [(0, i.jsx)(W.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-css'] }), (0, i.jsxs)(L.N_, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-react', children: [(0, i.jsx)(W.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-react'] }), (0, i.jsxs)(L.N_, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-tokens', children: [(0, i.jsx)(W.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-tokens'] })] })] }) }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
      '\n',
      (0, i.jsx)(l.Ay, {}),
      '\n',
      (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
      '\n',
      (0, i.jsx)(c.Ay, {}),
      '\n',
      (0, i.jsx)(S.b, {
       headingLevel: '4',
       items: [
        { title: 'Als het label van de Link uit een icoon bestaat, dan heeft deze een goed tekstalternatief.', sc: '1.1.1', status: '', component: (0, i.jsx)(h, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Links in een lopende tekst zijn duidelijk zichtbaar.', sc: '1.4.1', status: '', component: (0, i.jsx)(j, {}), tags: ['designer', 'contentmaker'] },
        { title: 'De contrastverhouding van de tekstkleur van de Link met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: (0, i.jsx)(p.Ay, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Het label van de Link bestaat uit gewone tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: (0, i.jsx)(T.Ay, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Als het zichtbare label van de Link alleen een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.', sc: '1.4.11', status: '', component: (0, i.jsx)(u.Ay, {}), tags: ['designer', 'contentmaker'] },
        { title: 'De linktekst van de Link vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).', sc: '2.4.4', status: '', component: (0, i.jsx)(z.Ay, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Als de Link de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud', sc: '2.4.11', status: '', component: (0, i.jsx)(R.Ay, {}), tags: ['developer', 'designer'] },
        { title: 'Als de tekst van de Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, i.jsx)(b.Ay, {}), tags: ['developer', 'contentmaker'] },
        { title: 'Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label', sc: '3.2.4', status: '', component: (0, i.jsx)(A.Ay, {}), tags: ['developer', 'designer', 'contentmaker'] },
       ],
      }),
      '\n',
      (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
      '\n',
      (0, i.jsx)(a.Ay, {}),
      '\n',
      (0, i.jsx)(S.b, {
       headingLevel: '4',
       items: [
        { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, i.jsx)(k.Ay, {}), tags: ['developer'] },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: (0, i.jsx)(g.Ay, {}), tags: ['developer'] },
        { title: 'Je kunt de Link focussen met de tabtoets en activeren met de entertoets.', sc: '2.1.1', status: '', component: (0, i.jsx)(w.Ay, {}), tags: ['developer'] },
        { title: 'De functionaliteit van de Link veroorzaakt geen toetsenbordval.', sc: '2.1.2', status: '', component: (0, i.jsx)(C.Ay, {}), tags: ['developer'] },
        { title: 'Wanneer de Link de toetsenbordfocus krijgt is de focus zichtbaar.', sc: '2.4.7', status: '', component: (0, i.jsx)(f.Ay, {}), tags: ['developer', 'designer'] },
        { title: 'Als de gebruiker de Link indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.', sc: '2.5.2', status: '', component: (0, i.jsx)(v.Ay, {}), tags: ['developer'] },
        { title: 'De zichtbare naam van de Link komt voor in de toegankelijke naam.', sc: '2.5.3', status: '', component: (0, i.jsx)(x.Ay, {}), tags: ['developer'] },
        { title: 'De Link heeft een aanklikbaar gedeelte van ten minste 44 bij 44 pixels.', sc: '2.5.5', status: '', component: (0, i.jsx)(y.Ay, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, i.jsx)(M.o, { omitH1: !0, headingLevel: 2, children: (0, i.jsx)(E, {}) }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }),
      '\n',
      (0, i.jsx)(F.B, { tokens: O }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, i.jsx)(_.VK, { component: Z, headingLevel: 3 }),
      '\n',
      (0, i.jsx)(_.$9, { component: Z, headingLevel: 2 }),
      '\n',
      (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, i.jsx)(_.mu, { component: Z, headingLevel: 3 }),
     ],
    });
   }
   function J(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(K, { ...e }) }) : K(e);
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  23885(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Elementen met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  27055(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, r.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, r.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Maar:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => i, KF: () => u, mJ: () => j, VZ: () => A, cR: () => b, Pv: () => p, qZ: () => o, kD: () => v, B2: () => g, Pc: () => c, f4: () => a, GT: () => x, fX: () => s, eQ: () => f, B_: () => w, o_: () => k, Rc: () => y });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return h(d(n));
    },
    g = (e, n) => j(e).includes(n),
    m = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    j = (e) => h(d(e.projects.flatMap((e) => m(e)))),
    p = (e) => {
     const n = m(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: s }) => {
        const o = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: r, id: i, value: s, description: a };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    k = (e) => e.join('.'),
    w = (e) => '--' + e.join('-'),
    f = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
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
   const b = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  36369(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Je kunt de link focussen met de tabtoets (en in omgekeerde richting met shift + tabtoets) en activeren met de entertoets. Als je gebruik maakt van het ', (0, r.jsx)(n.code, { children: 'a' }), '-element hoef je hier niets aan aan te passen.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  36599(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
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
  45282(e, n, t) {
   'use strict';
   t.d(n, { F: () => s, N: () => o });
   var r = t(13526),
    i = t(86070);
   const s = ({ children: e, ...n }) => {
     const { to: t, href: r, ...s } = n;
     let o = t || r;
     const a = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? ((a.pathname = a.pathname.endsWith('/') ? a.pathname : `${a.pathname}/`), (o = a.toString().replace('https://nldesignsystem.nl', ''))) : ((s.target = '_blank'), (s.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: o, ...s, children: e }));
    },
    o = ({ className: e, ...n }) => (0, i.jsx)(s, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  46072(e, n, t) {
   'use strict';
   t.d(n, { NO: () => s, pI: () => o });
   const r = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    i = (new Map(r.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    s = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !i.find((n) => n.sc === e)),
    o = new Map(s.map((e) => [e.sc, e]));
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
  59840(e, n, t) {
   'use strict';
   t.d(n, { b: () => u });
   var r = t(45282),
    i = t(46072),
    s = t(29181),
    o = t(79889),
    a = t(13526),
    c = t(30758),
    l = t(46447),
    d = t(86070);
   const h = ({ title: e, sc: n, component: t, tags: l }) => {
     const h = (0, c.useId)(),
      u = [...l];
     if (n) {
      u.push(n);
      const e = i.pI.get(n);
      e?.conformance && u.push(`Niveau ${e.conformance}`);
     }
     return (0, d.jsx)('li', {
      className: (0, a.A)(
       'new-checklist__item',
       l.map((e) => `new-checklist__item--${e}`),
      ),
      children: (0, d.jsxs)('details', {
       children: [
        (0, d.jsx)('summary', { children: (0, d.jsx)('span', { className: 'new-checklist__title', id: h, children: e }) }),
        (0, d.jsxs)('div', {
         className: 'new-checklist__content',
         children: [
          (0, d.jsx)('div', { children: t }),
          (0, d.jsx)(s._Q, {
           className: 'new-checklist__badge-list',
           children: u.map((e, n) => {
            let t = (0, d.jsx)(o.K, { children: e }, n);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const s = i.pI.get(e);
             t = (0, d.jsx)(r.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${s.sc} ${s.nl.title}`, style: { lineHeight: 1 }, children: (0, d.jsx)(o.K, { children: `WCAG ${e}` }) }, n);
            }
            return t;
           }),
          }),
         ],
        }),
       ],
      }),
     });
    },
    u = ({ items: e, headingLevel: n }) => {
     const t = e.reduce(
       (e, n) => (
        n.tags.forEach((n) => {
         e.add(n);
        }),
        e
       ),
       new Set(),
      ),
      [r, i] = (0, c.useState)(Array.from(t.values())),
      o = (e) => r.includes(e),
      a = (0, c.useId)(),
      u = r.length >= 1 ? e.filter(({ tags: e }) => e.some((e) => r.includes(e))) : e,
      g = e.length - u.length;
     return (0, d.jsxs)('div', {
      children: [
       (0, d.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, d.jsxs)(l.LB, {
          'aria-describedby': 'filter-results',
          'aria-labelledby': a,
          children: [
           (0, d.jsx)(l.DZ, { level: n, id: a, children: 'Filter acceptatiecriteria voor:' }),
           Array.from(t.values()).map((e) =>
            (0, d.jsxs)(
             l.zB,
             {
              type: 'checkbox',
              children: [
               (0, d.jsx)(l.Sc, {
                defaultChecked: o(e),
                checked: o(e),
                id: e,
                onChange: () =>
                 ((e, n) => {
                  const t = ('boolean' == typeof n ? n : !o(e)) ? [...r, e] : r.filter((n) => n !== e);
                  i(t);
                 })(e),
               }),
               (0, d.jsx)(l.lR, { htmlFor: e, children: e }),
              ],
             },
             e,
            ),
           ),
          ],
         }),
         (0, d.jsx)('div', {
          children: (0, d.jsxs)(d.Fragment, {
           children: [
            (0, d.jsxs)('p', { role: 'status', children: [e.length - g, ' van de ', e.length, ' items zijn nu zichtbaar.'] }),
            g >= 1
             ? (0, d.jsx)(s.$n, {
                appearance: 'secondary-action-button',
                onClick: () => {
                 i(Array.from(t.values()));
                },
                children: 'Toon alles',
               })
             : (0, d.jsx)(d.Fragment, {}),
           ],
          }),
         }),
        ],
       }),
       (0, d.jsx)('ul', { className: 'new-checklist', role: 'list', children: u.map((e, n) => (0, d.jsx)(h, { ...e }, n)) }),
      ],
     });
    };
  },
  60577(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, r.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, r.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  61640(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => a });
   var r = t(46447),
    i = t(13526),
    s = t(33062),
    o = t(86070);
   const a = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, o.jsx)(r.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => a });
   var r = t(12013),
    i = t(30758),
    s = t(33062),
    o = t(86070);
   const a = ({ component: e }) => {
    const { title: n } = e,
     a = (0, s.fX)(n),
     c = i.lazy(() => t(82839)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(i.Suspense, { fallback: null, children: (0, o.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(c, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => s });
   var r = t(13526),
    i = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...o }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  76334(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is een ', (0, r.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is het ', (0, r.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat betekent ', (0, r.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function a(e = {}) {
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
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85825(e, n, t) {
   'use strict';
   t.d(n, { VK: () => w, $9: () => v, mu: () => f, Fc: () => x });
   var r = t(29181),
    i = t(13526),
    s = t(1292),
    o = t(90495),
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
   var h = t(67970),
    u = t(72642),
    g = t(46447),
    m = t(45561);
   const j = ({ children: e }) => (0, l.jsx)('ul', { className: 'task-list', children: e }),
    p = ({ checked: e, children: n, title: t, description: r, headingLevel: s = 3 }) => (0, l.jsxs)('li', { className: (0, i.A)('task-list-item'), children: [(0, l.jsxs)('div', { className: (0, i.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, l.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, l.jsx)(m.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, l.jsxs)('div', { children: [t ? (0, l.jsx)(g.DZ, { appearance: 'utrecht-heading-3', level: s, children: t }) : null, r, n] })] });
   var k = t(33062);
   const w = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => k.f4.includes(e.id)),
      s = t && k.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: s.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, k.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(j, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, l.jsx)(p, { headingLevel: n + 1, checked: e, title: t, description: (0, k.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !k.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(o.AC, {
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
            a = (0, k.Pv)(e),
            c = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => c.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            o.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(o.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || a.length > 0) && (0, l.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: h
                   .filter((e) => !!c.get(e.name))
                   .map((e) => {
                    const n = c.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, l.jsx)(l.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, l.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
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
    x = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && k.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(u.p, { level: n, suffix: i && (0, l.jsx)(h.D, { state: i }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => l, Fu: () => o, Wu: () => a, Zp: () => c });
   var r = t(46447),
    i = t(13526),
    s = t(86070);
   const o = ({ background: e, children: n, className: t, ...r }) => (0, s.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    c = ({ href: e, appearance: n, className: t, component: o = 'div', background: a, children: c }) => {
     const l = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      d = (0, s.jsx)(l, { className: (0, i.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: c });
     return e ? (0, s.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
  92233(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, r.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  96412(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, r.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
