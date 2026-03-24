(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34799],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => p });
   var r = t(29181),
    a = t(74172),
    s = t(15089),
    i = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(i.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    p = ({ brand: e }) => (0, d.jsx)(r.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var r = t(18439),
    a = t(46447),
    s = t(86070);
   const i = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: a } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + a;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: a.fV, h2: a._B, h3: a.f_, h4: a.mM, h5: a.TT }, 3: { h1: a._B, h2: a.f_, h3: a.mM, h4: a.TT, h5: a.TT }, 4: { h1: a.f_, h2: a.mM, h3: a.TT, h4: a.TT, h5: a.TT }, 5: { h1: a.mM, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT }, 6: { h1: a.TT, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: i(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: a = '', components: i = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, t), ...l(a), ...i }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var r = t(86070),
    a = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => z });
   var r = t(96547),
    a = t(79889),
    s = t(33062),
    i = t(46447),
    o = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    p = t(4603),
    h = t(29181),
    g = t(86070);
   function m({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, g.jsxs)(i.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [o.A, l.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, g.jsx)(h.In, { children: (0, g.jsx)(p.A, {}) })],
       })
     : null;
   }
   var u = t(35193),
    j = t(13088),
    x = t(91525),
    k = t(24214),
    b = t(92081),
    f = t(1375),
    v = t(23436),
    y = t(79532),
    w = t(30758);
   const A = { color: u.A, dimension: j.A, fontFamilies: x.A, fontSizes: k.A, fontWeights: b.A, lineHeights: f.A, other: v.A, textDecoration: y.A },
    S = ({ type: e }) => (0, g.jsx)(h.In, { children: (0, w.createElement)(A[e]) });
   function z({ tokens: e }) {
    const n = (0, s.kD)(e),
     t = (0, s.GT)(n),
     o = t.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     l = JSON.stringify((0, s.Rc)(t));
    return (0, g.jsxs)(g.Fragment, {
     children: [
      (0, g.jsxs)(i.XI, {
       children: [
        (0, g.jsx)(i.A0, { children: (0, g.jsxs)(i.Hj, { children: [(0, g.jsx)(i.M_, { children: 'name' }), (0, g.jsx)(i.M_, { children: 'type' })] }) }),
        (0, g.jsx)(i.BF, {
         children: t.map((n) => {
          const t = (0, s.o_)(n),
           o = (0, s.eQ)(e, n).$type;
          return (0, g.jsxs)(i.Hj, { children: [(0, g.jsx)(i.nA, { children: (0, g.jsx)(r.C, { children: (0, g.jsx)(i.kf, { children: t }) }) }), (0, g.jsx)(i.nA, { children: (0, g.jsxs)(a.K, { children: [(0, g.jsx)(S, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, g.jsxs)(i.e2, { children: [(0, g.jsx)(m, { content: l, language: 'json', children: 'Kopieer als JSON' }), (0, g.jsx)(m, { content: o, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var r = t(86070),
    a = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var r = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  28339(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => C, component: () => M, contentTitle: () => T, default: () => O, description: () => R, frontMatter: () => _, issueNumber: () => P, metadata: () => r, title: () => L, toc: () => F }));
   const r = JSON.parse('{"id":"componenten/paragraph/index","title":"Paragraph","description":"Toont een alinea aan tekst.","source":"@site/docs/componenten/paragraph/index.mdx","sourceDirName":"componenten/paragraph","slug":"/paragraph","permalink":"/paragraph","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/paragraph/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Paragraph","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Paragraph","pagination_label":"Paragraph","description":"Toont een alinea aan tekst.","slug":"/paragraph","keywords":["alinea","body","body copy","body text","bodytekst","broodtekst","content block","content blok","copy","gewone tekst","hoofdalinea","inleidende alinea","inleiding","introductory","lead","lead paragraph","lead text","paragraaf","paragraph","regular text","rich text","rte","sentence","tekst","tekst-item","tekstblok","text","text block","text block","text element","zin"]},"sidebar":"componenten","previous":{"title":"Page Number Navigation","permalink":"/page-number-navigation"},"next":{"title":"Password Input","permalink":"/password-input"}}');
   var a = t(86070),
    s = t(18439),
    i = t(87069),
    o = t(17045),
    l = t(19776),
    d = t(40808);
   t(50732);
   function c(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['Zorg dat een alinea in een paragraaf-element staat. Gebruik geen ', (0, a.jsx)(n.code, { children: '<div>' }), ' of ', (0, a.jsx)(n.code, { children: '<span>' }), ' voor op zichzelf staande teksten.\nZelfs als geen CSS geladen kan worden, blijft de tekst dan duidelijk weergegeven.'] });
   }
   var p = t(30536),
    h = t(83329),
    g = t(83672),
    m = t(34257),
    u = t(24838);
   const j = [
     { title: 'De contrastverhouding van de tekstkleur van de paragraaf met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: g.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als een paragraaftekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: u.Ay, tags: ['developer', 'contentmaker'] },
     { title: 'Als je de hele webpagina inzoomt tot 400% blijft de paragraaftekst leesbaar.', sc: '1.4.10', status: '', component: p.Ay, tags: ['developer'] },
    ],
    x = [
     {
      title: 'Gebruik het p-element voor paragraaftekst.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de paragraaftekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: m.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: h.Ay, tags: ['developer'] },
    ];
   var k = t(90495),
    b = t(46447),
    f = t(56421),
    v = t(1292),
    y = t(72401),
    w = t(80506),
    A = t(17889),
    S = t(12013);
   function z(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'gebruik-paragraph', children: 'Gebruik Paragraph' }) }), '\n', (0, a.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, a.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css', children: '@nl-design-system-candidate/paragraph-css' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik de ', (0, a.jsx)(n.code, { children: 'nl-paragraph' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'p' }), ' element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<p class="nl-paragraph">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</p>\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Voor de Lead Paragraph gebruik je de extra class name ', (0, a.jsx)(n.code, { children: 'nl-paragraph--lead' }), ':'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<p class="nl-paragraph nl-paragraph--lead">\n  Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx. Je gelooft nooit wat er toen gebeurde!\n</p>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-css\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/paragraph-css@2/dist/paragraph.css"\n/>\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, a.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/paragraph-css/dist/paragraph.css" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/paragraph-css/paragraph.css";\n' }) }), '\n', (0, a.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, a.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-react', children: '@nl-design-system-candidate/paragraph-react' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-react\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-jsx', children: 'import { Paragraph } from "@nl-design-system-candidate/paragraph-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Paragraph>Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'De Lead Paragraph werkt zo:' }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-jsx', children: '<Paragraph purpose="lead">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n' }) })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(z, { ...e }) }) : z(e);
   }
   var D = t(41467);
   const _ = { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', keywords: ['alinea', 'body', 'body copy', 'body text', 'bodytekst', 'broodtekst', 'content block', 'content blok', 'copy', 'gewone tekst', 'hoofdalinea', 'inleidende alinea', 'inleiding', 'introductory', 'lead', 'lead paragraph', 'lead text', 'paragraaf', 'paragraph', 'regular text', 'rich text', 'rte', 'sentence', 'tekst', 'tekst-item', 'tekstblok', 'text', 'text block', 'text block', 'text element', 'zin'] },
    T = void 0,
    C = {},
    L = 'Paragraph',
    R = 'De paragraph gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.',
    P = 115,
    M = i.find((e) => e.number === P),
    F = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function V(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, s.R)(), ...e.components },
     { Checklist: t, ChecklistItem: r } = n;
    return (t || H('Checklist', !0), r || H('ChecklistItem', !0), (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, a.jsx)(w.Fc, { component: M, headingLevel: 1, description: R }), '\n', (0, a.jsx)(y.e, { component: M }), '\n', (0, a.jsx)(k.Zp, { className: 'implementation-card', children: (0, a.jsxs)(k.Wu, { children: [(0, a.jsx)(f.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, a.jsxs)(b.dk, { children: [(0, a.jsxs)(b.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, a.jsx)(v.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, a.jsxs)(b.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, a.jsx)(v.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, a.jsx)(f.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, a.jsxs)(b.dk, { children: [(0, a.jsxs)(b.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-paragraph--documentatie', children: [(0, a.jsx)(v.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, a.jsxs)(b.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/paragraph--documentatie', children: [(0, a.jsx)(v.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, a.jsx)(f.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, a.jsxs)(b.dk, { children: [(0, a.jsxs)(b.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css', children: [(0, a.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/paragraph-css'] }), (0, a.jsxs)(b.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-react', children: [(0, a.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/paragraph-react'] }), (0, a.jsxs)(b.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-tokens', children: [(0, a.jsx)(v.r, { brand: 'npm' }), ' @nl-design-system-candidate/paragraph-tokens'] })] })] }) }), '\n', (0, a.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, a.jsx)(d.Ay, {}), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, a.jsx)(l.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: j.map(({ component: e, ...n }) => (0, a.jsx)(r, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, a.jsx)(o.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: x.map(({ component: e, ...n }) => (0, a.jsx)(r, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(S.o, { omitH1: !0, headingLevel: 2, children: (0, a.jsx)(N, {}) }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, a.jsx)(A.B, { tokens: D }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(w.VK, { component: M, headingLevel: 3 }), '\n', (0, a.jsx)(w.$9, { component: M, headingLevel: 2 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(w.mu, { component: M, headingLevel: 3 })] }));
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(V, { ...e }) }) : V(e);
   }
   function H(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  30536(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var r = t(86070),
    a = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, r.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, r.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => a, KF: () => h, mJ: () => u, VZ: () => A, cR: () => w, Pv: () => j, qZ: () => i, kD: () => f, B2: () => g, Pc: () => l, f4: () => o, GT: () => v, fX: () => s, eQ: () => b, B_: () => k, o_: () => x, Rc: () => y });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return p(c(n));
    },
    g = (e, n) => u(e).includes(n),
    m = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => p(c(e.projects.flatMap((e) => m(e)))),
    j = (e) => {
     const n = m(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: a, value: s }) => {
        const i = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: r, id: a, value: s, description: o };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    x = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, x(e)), n.get(e));
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
    A = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var r = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var r = t(86070),
    a = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => a });
   var r = t(30758);
   function a() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var r = t(46447),
    a = t(13526),
    s = t(33062),
    i = t(86070);
   const o = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, a.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var r = t(12013),
    a = t(30758),
    s = t(33062),
    i = t(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, s.fX)(n),
     l = a.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(a.Suspense, { fallback: null, children: (0, i.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(l, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => s });
   var r = t(13526),
    a = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...i }) => (0, a.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...i, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  80506(e, n, t) {
   'use strict';
   t.d(n, { VK: () => u, $9: () => x, mu: () => j, Fc: () => k });
   var r = t(29181),
    a = t(13526),
    s = t(1292),
    i = t(90495),
    o = t(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const r = t(83294).V6;
      return (0, d.jsx)(r, {
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
   var p = t(67970),
    h = t(72642),
    g = t(58876),
    m = t(33062);
   const u = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => m.f4.includes(e.id)),
      s = t && m.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(r.If, { sections: s.map((t) => ({ className: (0, a.A)('definition-of-done', t && `definition-of-done--${(0, m.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, d.jsx)(g.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, m.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !m.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(i.AC, {
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
            a = t?.value,
            o = (0, m.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(i.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (p.length > 0 || o.length > 0) && (0, d.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               p.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: p
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, d.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(r.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [a ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    k = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && m.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h.p, { level: n, suffix: a && (0, d.jsx)(p.D, { state: a }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  82839(e, n, t) {
   var r = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function a(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     a = n[0];
    return t.e(n[1]).then(() => t(a));
   }
   ((a.keys = () => Object.keys(r)), (a.id = 82839), (e.exports = a));
  },
  83329(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var r = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var r = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => i, Wu: () => o, Zp: () => l });
   var r = t(46447),
    a = t(13526),
    s = t(86070);
   const i = ({ background: e, children: n, className: t, ...r }) => (0, s.jsx)('div', { className: (0, a.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    o = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: i = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === i ? (0, s.jsx)('article', { ...e }) : 'section' === i ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, a.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, a.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
