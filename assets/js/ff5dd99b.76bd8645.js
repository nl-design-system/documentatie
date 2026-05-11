(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [10452],
 {
  1292(e, n, a) {
   'use strict';
   a.d(n, { r: () => g });
   var t = a(29181),
    r = a(74172),
    s = a(15089),
    i = a(28377),
    o = a(33648),
    l = a(83386),
    d = a(86070);
   const c = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(i.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  12013(e, n, a) {
   'use strict';
   a.d(n, { o: () => c });
   var t = a(18439),
    r = a(46447),
    s = a(86070);
   const i = (e, n) => {
     const a = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === a.protocol) {
      const { pathname: a, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return a + t + r;
     }
     return a.toString();
    },
    o = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    l = (e) => ({ img: ({ src: n, ...a }) => (0, s.jsx)('img', { ...a, src: i(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: a = 1, baseUrl: r = '', components: i = {} }) => (0, s.jsx)(t.x, { components: { ...d(n, a), ...l(r), ...i }, children: e });
  },
  17045(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => o, RM: () => s });
   var t = a(86070),
    r = a(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  17889(e, n, a) {
   'use strict';
   a.d(n, { B: () => F });
   var t = a(96547),
    r = a(79889),
    s = a(33062),
    i = a(46447),
    o = a(68148),
    l = a(9016),
    d = a(91635),
    c = a(30734),
    g = a(4603),
    m = a(29181),
    u = a(86070);
   function h({ children: e, content: n, language: a }) {
    return 'clipboard' in navigator
     ? (0, u.jsxs)(i.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: a, plugins: [o.A, l.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, u.jsx)(m.In, { children: (0, u.jsx)(g.A, {}) })],
       })
     : null;
   }
   var p = a(35193),
    k = a(13088),
    j = a(91525),
    x = a(24214),
    b = a(92081),
    f = a(1375),
    v = a(23436),
    y = a(79532),
    D = a(30758);
   const w = { color: p.A, dimension: k.A, fontFamilies: j.A, fontSizes: x.A, fontWeights: b.A, lineHeights: f.A, other: v.A, textDecoration: y.A },
    A = ({ type: e }) => (0, u.jsx)(m.In, { children: (0, D.createElement)(w[e]) });
   var S = a(76223);
   function F({ tokens: e }) {
    const n = (0, s.kD)(e),
     a = (0, S.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     o = (0, s.GT)(n),
     l = o.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(a);
    return (0, u.jsxs)(u.Fragment, {
     children: [
      (0, u.jsxs)(i.XI, {
       children: [
        (0, u.jsx)(i.A0, { children: (0, u.jsxs)(i.Hj, { children: [(0, u.jsx)(i.M_, { children: 'name' }), (0, u.jsx)(i.M_, { children: 'type' })] }) }),
        (0, u.jsx)(i.BF, {
         children: o.map((n) => {
          const a = (0, s.o_)(n),
           o = (0, s.eQ)(e, n).$type;
          return (0, u.jsxs)(i.Hj, { children: [(0, u.jsx)(i.nA, { children: (0, u.jsx)(t.C, { children: (0, u.jsx)(i.kf, { children: a }) }) }), (0, u.jsx)(i.nA, { children: (0, u.jsxs)(r.K, { children: [(0, u.jsx)(A, { type: o }), ' ', o] }) })] }, a);
         }),
        }),
       ],
      }),
      (0, u.jsxs)(i.e2, { children: [(0, u.jsx)(h, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, u.jsx)(h, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => o, RM: () => s });
   var t = a(86070),
    r = a(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  20315(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => L, component: () => M, contentTitle: () => C, default: () => G, description: () => _, frontMatter: () => N, issueNumber: () => R, metadata: () => t, title: () => H, toc: () => z }));
   const t = JSON.parse('{"id":"componenten/mark/index","title":"Mark","description":"Markeert tekst, zodat je ernaar kan verwijzen vanuit een andere context of omdat de tekst relevant is voor de huidige activiteit.","source":"@site/docs/componenten/mark/index.mdx","sourceDirName":"componenten/mark","slug":"/mark","permalink":"/mark","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/mark/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Mark","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Mark","pagination_label":"Mark","description":"Markeert tekst, zodat je ernaar kan verwijzen vanuit een andere context of omdat de tekst relevant is voor de huidige activiteit.","slug":"/mark","keywords":["accent","ctrl-f","gele lijn","gemarkeerde tekst","highlight","highlighter","inline resultaat","mark","marked text","markeer","marker","markeren","markering","markertekst","match","opgelicht","resultaat","search term","spotlight","stabilo","term","voorbeeld"]},"sidebar":"componenten","previous":{"title":"Logo","permalink":"/logo"},"next":{"title":"Modal Dialog","permalink":"/modal-dialog"}}');
   var r = a(86070),
    s = a(18439),
    i = a(20151),
    o = a(17045),
    l = a(19776),
    d = a(40808);
   a(30758);
   function c(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De gemarkeerde tekst is ook herkenbaar voor hulpapparatuur zoals ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en brailleleesregels. Daarvoor kun je het beste semantische HTML gebruiken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['In het geval van de component Mark is dat het HTML-element ', (0, r.jsx)(n.code, { children: 'mark' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Dus niet zo:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\nEen zin met <span class="mark">een stuk gemarkeerde tekst</span> met een achtergrondkleur in CSS\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Maar zo:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: 'Een zin met <mark>een stuk gemarkeerde tekst</mark> met een achtergrondkleur in CSS\n' }) })] });
   }
   function g(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als je het ', (0, r.jsx)(n.code, { children: 'mark' }), '-element gebruikt en met CSS een eigen kleur definieert voor ', (0, r.jsx)(n.code, { children: 'background-color' }), ', dan moet deze achtergrondkleur een contrastverhouding hebben van minimaal 3:1 met de achtergrondkleur van de pagina.'] }), '\n', (0, r.jsx)(n.p, { children: 'Dit geldt niet als je de achtergrondkleur niet zelf definieert, maar overlaat aan de browser. Daarvoor bestaat namelijk een uitzondering in het WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   var m = a(83329),
    u = a(83672),
    h = a(34257),
    p = a(24838);
   const k = [
     { title: 'De gemarkeerde tekst is niet alleen herkenbaar aan de achtergrondkleur.', sc: '1.4.1', status: '', component: a(44720).Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De gemarkeerde tekst heeft voldoende contrast met de achtergrondkleur.', sc: '1.4.3', status: '', component: u.Ay, tags: ['designer', 'contentmaker'] },
     {
      title: 'Wanneer de achtergrondkleur van de Mark component anders is dan de default browserkleur, dan heeft deze een kleurcontrast van minimaal 3:1 met de achtergrondkleur van de pagina.',
      sc: '1.4.11',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'Tekst in een andere taal heeft het juiste lang-attribuut.', sc: '3.1.2', status: '', component: p.Ay, tags: ['developer', 'contentmaker'] },
    ],
    j = [
     {
      title: 'Gebruik het juiste HTML-element voor de Mark component.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je inzoomt naar 200% blijft alle tekst leesbaar.', sc: '1.4.4', status: '', component: h.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: m.Ay, tags: ['developer'] },
    ];
   var x = a(90495),
    b = a(46447),
    f = a(56421),
    v = a(1292),
    y = a(72401),
    D = a(37131),
    w = a(17889),
    A = a(12013);
   function S(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'gebruik-mark', children: 'Gebruik Mark' }) }), '\n', (0, r.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, r.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/mark-css', children: '@nl-design-system-candidate/mark-css' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.code, { children: 'nl-mark' }), ' class name op een ', (0, r.jsx)(n.code, { children: 'mark' }), ' element:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<mark class="nl-mark">Gemarkeerde tekst</mark>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/mark-css\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/mark-css@1/dist/mark.css" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, r.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/mark-css/dist/mark.css" />\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/mark-css/mark.css";\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, r.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/mark-react', children: '@nl-design-system-candidate/mark-react' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/mark-react\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-jsx', children: 'import { Mark } from "@nl-design-system-candidate/mark-react";\n\nexport const MyComponent = () => {\n  return (\n    <p>\n      <Mark href="https://example.com">example.com</Mark>\n    </p>\n  );\n};\n' }) })] });
   }
   function F(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(S, { ...e }) }) : S(e);
   }
   const T = JSON.parse('{"nl":{"mark":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"}}}}'),
    N = { title: 'Mark', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Mark', pagination_label: 'Mark', description: 'Markeert tekst, zodat je ernaar kan verwijzen vanuit een andere context of omdat de tekst relevant is voor de huidige activiteit.', slug: '/mark', keywords: ['accent', 'ctrl-f', 'gele lijn', 'gemarkeerde tekst', 'highlight', 'highlighter', 'inline resultaat', 'mark', 'marked text', 'markeer', 'marker', 'markeren', 'markering', 'markertekst', 'match', 'opgelicht', 'resultaat', 'search term', 'spotlight', 'stabilo', 'term', 'voorbeeld'] },
    C = void 0,
    L = {},
    H = 'Mark',
    _ = 'Markeert tekst, zodat je ernaar kan verwijzen vanuit een andere context of omdat de tekst relevant is voor de huidige activiteit.',
    R = 333,
    M = i.find((e) => e.number === R),
    z = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function B(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, s.R)(), ...e.components },
     { Checklist: a, ChecklistItem: t } = n;
    return (a || P('Checklist', !0), t || P('ChecklistItem', !0), (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, r.jsx)(D.Fc, { component: M, headingLevel: 1, description: _ }), '\n', (0, r.jsx)(y.e, { component: M }), '\n', (0, r.jsx)(x.Zp, { className: 'ma-implementation-card', children: (0, r.jsxs)(x.Wu, { children: [(0, r.jsx)(f.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, r.jsxs)(b.dk, { children: [(0, r.jsxs)(b.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, r.jsx)(v.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, r.jsxs)(b.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, r.jsx)(v.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, r.jsx)(f.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, r.jsxs)(b.dk, { children: [(0, r.jsxs)(b.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-mark--documentatie', children: [(0, r.jsx)(v.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, r.jsxs)(b.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/mark--documentatie', children: [(0, r.jsx)(v.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, r.jsx)(f.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, r.jsxs)(b.dk, { children: [(0, r.jsxs)(b.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/mark-css', children: [(0, r.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/mark-css'] }), (0, r.jsxs)(b.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/mark-react', children: [(0, r.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/mark-react'] }), (0, r.jsxs)(b.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/mark-tokens', children: [(0, r.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/mark-tokens'] })] })] }) }), '\n', (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, r.jsx)(l.Ay, {}), '\n', (0, r.jsx)(a, { headingLevel: '4', children: k.map(({ component: e, ...n }) => (0, r.jsx)(t, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, r.jsx)(o.Ay, {}), '\n', (0, r.jsx)(a, { headingLevel: '4', children: j.map(({ component: e, ...n }) => (0, r.jsx)(t, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(A.o, { omitH1: !0, headingLevel: 2, children: (0, r.jsx)(F, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, r.jsx)(w.B, { tokens: T }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(D.VK, { component: M, headingLevel: 3 }), '\n', (0, r.jsx)(D.$9, { component: M, headingLevel: 2 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(D.mu, { component: M, headingLevel: 3 }), '\n', (0, r.jsx)(D.K_, { component: M })] }));
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(B, { ...e }) }) : B(e);
   }
   function P(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  24838(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => i });
   var t = a(86070),
    r = a(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, t.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33062(e, n, a) {
   'use strict';
   a.d(n, { bo: () => r, KF: () => m, mJ: () => p, VZ: () => D, cR: () => y, Pv: () => k, qZ: () => i, kD: () => f, B2: () => u, Pc: () => l, f4: () => o, GT: () => v, fX: () => s, eQ: () => b, B_: () => x, o_: () => j });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(c(n));
    },
    u = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(c(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: r, value: s }) => {
        const i = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === i ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: t, id: r, value: s, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? f(e[a], [...n, a]) : []));
   }
   function v(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   const y = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => i });
   var t = a(86070),
    r = a(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, t.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, t.jsx)(n.code, { children: 'em' }), ' of ', (0, t.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, t.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  37131(e, n, a) {
   'use strict';
   a.d(n, { VK: () => k, $9: () => x, mu: () => j, Fc: () => b, K_: () => f });
   var t = a(29181),
    r = a(13526),
    s = a(1292),
    i = a(90495),
    o = a(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = a(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const t = a(83294).V6;
      return (0, d.jsx)(t, {
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
   var g = a(67970),
    m = a(72642),
    u = a(58876),
    h = a(33062);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    k = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => h.f4.includes(e.id)),
      s = a && h.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: s.map((a) => ({ className: (0, r.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, h.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && a.length
      ? (0, d.jsx)(i.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: a
          .sort((e, n) => {
           const a = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return a === t ? e.title.localeCompare(n.title) : a - t;
          })
          .map((e) => {
           const a = e.tasks.find(({ name: e }) => 'Naam' === e),
            r = a?.value,
            o = (0, h.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            i.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(i.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || o.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: a }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, d.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [r ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: a }) => {
     const r = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: r && (0, d.jsx)(g.D, { state: r }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    },
    f = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  40808(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => o, RM: () => s });
   var t = a(86070),
    r = a(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  44720(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => o, RM: () => s });
   var t = a(86070),
    r = a(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  54565(e, n, a) {
   'use strict';
   a.d(n, { c: () => r });
   var t = a(30758);
   function r() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, a) {
   'use strict';
   a.d(n, { D: () => o });
   var t = a(46447),
    r = a(13526),
    s = a(33062),
    i = a(86070);
   const o = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, i.jsx)(t.KE, { className: (0, r.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, a) {
   'use strict';
   a.d(n, { e: () => o });
   var t = a(12013),
    r = a(30758),
    s = a(33062),
    i = a(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, s.fX)(n),
     l = r.lazy(() => a(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(t.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(l, {}) }) });
   };
  },
  72642(e, n, a) {
   'use strict';
   a.d(n, { p: () => s });
   var t = a(13526),
    r = a(86070);
   const s = ({ children: e, className: n, level: a = 1, suffix: s, ...i }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...i, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  82839(e, n, a) {
   var t = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function r(e) {
    if (!a.o(t, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = t[e],
     r = n[0];
    return a.e(n[1]).then(() => a(r));
   }
   ((r.keys = () => Object.keys(t)), (r.id = 82839), (e.exports = r));
  },
  83329(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => i });
   var t = a(86070),
    r = a(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, t.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, t.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, t.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, t.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, t.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83672(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => i });
   var t = a(86070),
    r = a(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, t.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  90495(e, n, a) {
   'use strict';
   a.d(n, { AC: () => d, Fu: () => i, Wu: () => o, Zp: () => l });
   var t = a(46447),
    r = a(13526),
    s = a(86070);
   const i = ({ background: e, children: n, className: a, ...t }) => (0, s.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    o = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: a, component: i = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === i ? (0, s.jsx)('article', { ...e }) : 'section' === i ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, r.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: l });
     return e ? (0, s.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, s.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
 },
]);
