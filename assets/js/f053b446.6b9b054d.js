(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [49189],
 {
  1457(e, n, t) {
   'use strict';
   t.d(n, { e: () => r });
   var a = t(12941),
    o = t(30758),
    i = t(76097),
    s = t(86070);
   const r = ({ component: e }) => {
    const { title: n } = e,
     r = (0, i.fX)(n),
     l = o.lazy(() => t(82839)(`./${r}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(o.Suspense, { fallback: null, children: (0, s.jsx)(a.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(l, {}) }) });
   };
  },
  12941(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var a = t(18439),
    o = t(46447),
    i = t(86070);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: o } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + o;
     }
     return t.toString();
    },
    r = { 1: {}, 2: { h1: o.fV, h2: o._B, h3: o.f_, h4: o.mM, h5: o.TT }, 3: { h1: o._B, h2: o.f_, h3: o.mM, h4: o.TT, h5: o.TT }, 4: { h1: o.f_, h2: o.mM, h3: o.TT, h4: o.TT, h5: o.TT }, 5: { h1: o.mM, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT }, 6: { h1: o.TT, h2: o.TT, h3: o.TT, h4: o.TT, h5: o.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...r[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return r[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: o = '', components: s = {} }) => (0, i.jsx)(a.x, { components: { ...d(n, t), ...l(o), ...s }, children: e });
  },
  15042(e, n, t) {
   'use strict';
   t.d(n, { p: () => i });
   var a = t(13526),
    o = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...s }) => (0, o.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  16764(e, n, t) {
   'use strict';
   t.d(n, { B: () => A });
   var a = t(96547),
    o = t(79889),
    i = t(76097),
    s = t(46447),
    r = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    g = t(4603),
    m = t(29181),
    u = t(86070);
   function p({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, u.jsxs)(s.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [r.A, l.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, u.jsx)(m.In, { children: (0, u.jsx)(g.A, {}) })],
       })
     : null;
   }
   var h = t(35193),
    j = t(13088),
    x = t(91525),
    k = t(24214),
    b = t(92081),
    f = t(1375),
    v = t(23436),
    y = t(79532),
    D = t(30758);
   const w = { color: h.A, dimension: j.A, fontFamilies: x.A, fontSizes: k.A, fontWeights: b.A, lineHeights: f.A, other: v.A, textDecoration: y.A },
    C = ({ type: e }) => (0, u.jsx)(m.In, { children: (0, D.createElement)(w[e]) });
   var S = t(76223);
   function A({ tokens: e }) {
    const n = (0, i.kD)(e),
     t = (0, S.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     r = (0, i.GT)(n),
     l = r.map((e) => (0, i.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, u.jsxs)(u.Fragment, {
     children: [
      (0, u.jsxs)(s.XI, {
       children: [
        (0, u.jsx)(s.A0, { children: (0, u.jsxs)(s.Hj, { children: [(0, u.jsx)(s.M_, { children: 'name' }), (0, u.jsx)(s.M_, { children: 'type' })] }) }),
        (0, u.jsx)(s.BF, {
         children: r.map((n) => {
          const t = (0, i.o_)(n),
           r = (0, i.eQ)(e, n).$type;
          return (0, u.jsxs)(s.Hj, { children: [(0, u.jsx)(s.nA, { children: (0, u.jsx)(a.C, { children: (0, u.jsx)(s.kf, { children: t }) }) }), (0, u.jsx)(s.nA, { children: (0, u.jsxs)(o.K, { children: [(0, u.jsx)(C, { type: r }), ' ', r] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, u.jsxs)(s.e2, { children: [(0, u.jsx)(p, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, u.jsx)(p, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r, RM: () => i });
   var a = t(86070),
    o = t(18439);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r, RM: () => i });
   var a = t(86070),
    o = t(18439);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24215(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => z, component: () => P, contentTitle: () => R, default: () => O, description: () => G, frontMatter: () => _, issueNumber: () => M, metadata: () => a, title: () => B, toc: () => I }));
   const a = JSON.parse('{"id":"componenten/code/index","title":"Code","description":"Computercode die onderdeel is van lopende tekst.","source":"@site/docs/componenten/code/index.mdx","sourceDirName":"componenten/code","slug":"/code","permalink":"/code","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/code/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Code","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Code","pagination_label":"Code","description":"Computercode die onderdeel is van lopende tekst.","slug":"/code","keywords":["actie","action","code","codeblock","code block","code markering","code fences","code snippet","code voorbeeld","coded language","codetaal","css","example","html","java","inline code","mono","monotype","monospace","plaintext","pre","samp","source code","src","voorbeeld"]},"sidebar":"componenten","previous":{"title":"Checkbox Group","permalink":"/checkbox-group"},"next":{"title":"Code Block","permalink":"/code-block"}}');
   var o = t(86070),
    i = t(18439),
    s = t(20151);
   t(30758);
   var r = t(17045),
    l = t(19776),
    d = t(40808);
   function c(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Gebruik voor tekst gemarkeerd als code semantische HTML. In het geval van de component Code is dat het HTML-element ', (0, o.jsx)(n.code, { children: 'code' }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'Dus niet zo:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\nEen zin over het element <span class="code">button</span> met een achtergrondkleur in CSS.\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Maar zo:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: 'Een zin over het element `<code>button</code>` met een achtergrondkleur in CSS.\n' }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op' }), ': Het element ', (0, o.jsx)(n.code, { children: '<code>' }), ' wordt op het moment van schrijven (2025) nog niet ondersteund door alle hulpsoftware. Dat betekent niet dat bezoekers die bijvoorbeeld een ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken de inhoud van het element niet horen, alleen dat er op dit moment niet wordt aangegeven dat het om een ', (0, o.jsx)(n.code, { children: 'code' }), ' element gaat.'] })] });
   }
   var g = t(35437),
    m = t(83329),
    u = t(83672),
    p = t(34257),
    h = t(44720),
    j = t(41887),
    x = t(74359),
    k = t(30940),
    b = t(63882);
   const f = [
     { title: 'De Code is niet alleen herkenbaar aan een andere achtergrondkleur.', sc: '1.4.1', status: '', component: h.Ay, tags: ['designer', 'contentmaker', 'developer'] },
     { title: 'De tekst in de Code component heeft voldoende contrast met de achtergrondkleur.', sc: '1.4.3', status: '', component: u.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Wanneer de achtergrondkleur van de Code component anders is dan de default browserkleur, dan heeft deze een kleurcontrast van minimaal 3:1 met de achtergrondkleur van de pagina.', sc: '1.4.11', status: '', component: g.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De Code component is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: j.Ay, tags: ['developer'] },
     { title: 'De Code component komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: b.Ay, tags: ['developer'] },
    ],
    v = [
     {
      title: 'Het juiste HTML-element voor de Code component is toegepast.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, i.R)(), ...e.components };
       return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je inzoomt naar 200% blijft alle tekst leesbaar.', sc: '1.4.4', status: '', component: p.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: m.Ay, tags: ['developer'] },
     { title: 'De Code component is standaard niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'De Code component komt standaard niet voor in de focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: k.Ay, tags: ['developer'] },
    ];
   var y = t(26655),
    D = t(46447),
    w = t(56421),
    C = t(39948),
    S = t(1457),
    A = t(56167),
    F = t(16764),
    T = t(12941);
   function N(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'gebruik-code', children: 'Gebruik Code' }) }), '\n', (0, o.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, o.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-css', children: '@nl-design-system-candidate/code-css' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik de ', (0, o.jsx)(n.code, { children: 'nl-code' }), ' class name op een ', (0, o.jsx)(n.code, { children: 'code' }), ' element:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<code dir="ltr" translate="no" class="nl-code"> import { Code } from \'@nl-design-system-candidate/code-react\'; </code>\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-css\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, o.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/code-css/code.css";\n' }) }), '\n', (0, o.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, o.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-react', children: '@nl-design-system-candidate/code-react' }) }), '\n', (0, o.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-react\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-jsx', children: 'import { Code } from "@nl-design-system-candidate/code-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Code>import {Code} from \'@nl-design-system-candidate/code-react\';</Code>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function L(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(N, { ...e }) }) : N(e);
   }
   const H = JSON.parse('{"nl":{"code":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"}}}}'),
    _ = { title: 'Code', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Code', pagination_label: 'Code', description: 'Computercode die onderdeel is van lopende tekst.', slug: '/code', keywords: ['actie', 'action', 'code', 'codeblock', 'code block', 'code markering', 'code fences', 'code snippet', 'code voorbeeld', 'coded language', 'codetaal', 'css', 'example', 'html', 'java', 'inline code', 'mono', 'monotype', 'monospace', 'plaintext', 'pre', 'samp', 'source code', 'src', 'voorbeeld'] },
    R = void 0,
    z = {},
    B = 'Code',
    G = 'Computercode die onderdeel is van lopende tekst.',
    M = 326,
    P = s.find((e) => e.number === M),
    I = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...r.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function V(e) {
    const n = { a: 'a', admonition: 'admonition', h2: 'h2', h3: 'h3', p: 'p', ...(0, i.R)(), ...e.components },
     { Checklist: t, ChecklistItem: a } = n;
    return (t || $('Checklist', !0), a || $('ChecklistItem', !0), (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, o.jsx)(A.Fc, { component: P, headingLevel: 1, description: G }), '\n', (0, o.jsx)(S.e, { component: P }), '\n', (0, o.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, o.jsxs)(n.p, { children: ['Gebruik de ', (0, o.jsx)(n.a, { href: '/code-block/', children: 'Code Block' }), ' component als de code meerdere regels beslaat.'] }) }), '\n', (0, o.jsx)(y.Zp, { className: 'ma-implementation-card', children: (0, o.jsxs)(y.Wu, { children: [(0, o.jsx)(w.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, o.jsxs)(D.dk, { children: [(0, o.jsxs)(D.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, o.jsx)(C.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, o.jsxs)(D.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, o.jsx)(C.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, o.jsx)(w.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, o.jsxs)(D.dk, { children: [(0, o.jsxs)(D.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-code--documentatie', children: [(0, o.jsx)(C.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, o.jsxs)(D.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/code--documentatie', children: [(0, o.jsx)(C.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, o.jsx)(w.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, o.jsxs)(D.dk, { children: [(0, o.jsxs)(D.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-css', children: [(0, o.jsx)(C.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-css'] }), (0, o.jsxs)(D.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-react', children: [(0, o.jsx)(C.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-react'] }), (0, o.jsxs)(D.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-tokens', children: [(0, o.jsx)(C.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-tokens'] })] })] }) }), '\n', (0, o.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, o.jsx)(d.Ay, {}), '\n', (0, o.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, o.jsx)(l.Ay, {}), '\n', (0, o.jsx)(t, { headingLevel: '4', children: f.map(({ component: e, ...n }) => (0, o.jsx)(a, { ...n, children: (0, o.jsx)(e, {}) })) }), '\n', (0, o.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, o.jsx)(r.Ay, {}), '\n', (0, o.jsx)(t, { headingLevel: '4', children: v.map(({ component: e, ...n }) => (0, o.jsx)(a, { ...n, children: (0, o.jsx)(e, {}) })) }), '\n', (0, o.jsx)(T.o, { omitH1: !0, headingLevel: 2, children: (0, o.jsx)(L, {}) }), '\n', (0, o.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, o.jsx)(F.B, { tokens: H }), '\n', (0, o.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, o.jsx)(A.VK, { component: P, headingLevel: 3 }), '\n', (0, o.jsx)(A.$9, { component: P, headingLevel: 2 }), '\n', (0, o.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, o.jsx)(A.mu, { component: P, headingLevel: 3 }), '\n', (0, o.jsx)(A.K_, { component: P })] }));
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(V, { ...e }) }) : V(e);
   }
   function $(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  26655(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => s, Wu: () => r, Zp: () => l });
   var a = t(46447),
    o = t(13526),
    i = t(86070);
   const s = ({ background: e, children: n, className: t, ...a }) => (0, i.jsx)('div', { className: (0, o.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...a, children: n }),
    r = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: s = 'div', background: r, children: l }) => {
     const d = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, o.A)('ma-cardgroup__card', r && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, i.jsx)(a.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, o.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  30940(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  31522(e, n, t) {
   'use strict';
   t.d(n, { D: () => r });
   var a = t(46447),
    o = t(13526),
    i = t(76097),
    s = t(86070);
   const r = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, s.jsx)(a.KE, { className: (0, o.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  34257(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, a.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, a.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, a.jsx)(n.code, { children: 'em' }), ' of ', (0, a.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, a.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, a.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, a.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, a.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  35437(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Als je het ', (0, a.jsx)(n.code, { children: 'code' }), '-element gebruikt en met CSS een eigen kleur definieert voor ', (0, a.jsx)(n.code, { children: 'background-color' }), ', dan moet deze achtergrondkleur een contrastverhouding hebben van minimaal 3:1 met de achtergrondkleur van de pagina.'] }), '\n', (0, a.jsx)(n.p, { children: 'Dit geldt niet als je de achtergrondkleur niet zelf definieert, maar overlaat aan de browser. Daarvoor bestaat namelijk een uitzondering in het WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content.' }), '\n', (0, a.jsxs)(n.p, { children: ['Dit geldt ook niet als het lettertype of de weergave van de code duidelijke te onderscheiden is als code, door bijvoorbeeld het kiezen van een ', (0, a.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/List_of_monospaced_typefaces', children: 'monospace lettertype' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  39948(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var a = t(29181),
    o = t(74172),
    i = t(15089),
    s = t(28377),
    r = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(o.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(r.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r, RM: () => i });
   var a = t(86070),
    o = t(18439);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41887(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, a.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  44720(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r, RM: () => i });
   var a = t(86070),
    o = t(18439);
   const i = [];
   function s(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, a.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46565(e, n, t) {
   'use strict';
   t.d(n, { c: () => o });
   var a = t(30758);
   function o() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  56167(e, n, t) {
   'use strict';
   t.d(n, { VK: () => j, $9: () => k, mu: () => x, Fc: () => b, K_: () => f });
   var a = t(29181),
    o = t(13526),
    i = t(39948),
    s = t(26655),
    r = t(46565);
   function l(e) {
    return (0, r.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const a = t(83294).V6;
      return (0, d.jsx)(a, {
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
   var g = t(31522),
    m = t(15042),
    u = t(58876),
    p = t(76097);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      i = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: i.map((t) => ({ className: (0, o.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            a = n.progress.max - n.progress.value;
           return t === a ? e.title.localeCompare(n.title) : t - a;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            o = t?.value,
            r = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || r.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               r.length > 0 && (0, d.jsx)(d.Fragment, { children: r.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [o, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(a.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      o = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [o ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: o, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const o = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: o && (0, d.jsx)(g.D, { state: o }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    },
    f = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(a.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  63882(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, a.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  74359(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  76097(e, n, t) {
   'use strict';
   t.d(n, { bo: () => o, KF: () => m, mJ: () => h, VZ: () => D, cR: () => y, Pv: () => j, qZ: () => s, kD: () => f, B2: () => u, Pc: () => l, f4: () => r, GT: () => v, fX: () => i, eQ: () => b, B_: () => k, o_: () => x });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return g(c(n));
    },
    u = (e, n) => h(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => g(c(e.projects.flatMap((e) => p(e)))),
    j = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: o, value: i }) => {
        const s = /^(.+) URL/.exec(a)[1],
         r = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: a, id: o, value: i, description: r };
       });
      return { frameworkName: n, tasks: a };
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
   const y = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  82839(e, n, t) {
   var a = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function o(e) {
    if (!t.o(a, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = a[e],
     o = n[0];
    return t.e(n[1]).then(() => t(o));
   }
   ((o.keys = () => Object.keys(a)), (o.id = 82839), (e.exports = o));
  },
  83329(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, a.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, a.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, a.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, a.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, a.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, a.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, a.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, a.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, a.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, a.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, a.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, a.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var a = t(86070),
    o = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, a.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, a.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, a.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
 },
]);
