(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71537],
 {
  1292(e, t, n) {
   'use strict';
   n.d(t, { r: () => h });
   var r = n(29181),
    i = n(74172),
    s = n(15089),
    a = n(28377),
    o = n(33648),
    c = n(83386),
    d = n(86070);
   const l = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(a.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    h = ({ brand: e }) => (0, d.jsx)(r.In, { children: l[e] || (0, d.jsx)(c.A, {}) });
  },
  9173(e, t, n) {
   'use strict';
   (n.r(t), n.d(t, { assets: () => R, component: () => G, contentTitle: () => C, default: () => E, description: () => F, frontMatter: () => B, issueNumber: () => V, metadata: () => r, title: () => M, toc: () => O }));
   const r = JSON.parse('{"id":"componenten/data-badge/index","title":"Data Badge","description":"Label met extra informatie, zoals een categorie of een eigenschap.","source":"@site/docs/componenten/data-badge/index.mdx","sourceDirName":"componenten/data-badge","slug":"/data-badge","permalink":"/data-badge","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/data-badge/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Data Badge","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Data Badge","pagination_label":"Data Badge","description":"Label met extra informatie, zoals een categorie of een eigenschap.","slug":"/data-badge","keywords":["annotatie","annotation","badge","categorie","category","categorie aanduiding","categoriseren","categorize","characteristic","chip","data","data badge","data tag","eigenschap","etiket","etiquette","filteren op","filter tag","index","index term","info","info tag","informatiebadge","label","metadata","pill","property","stamp","status","status badge","sticker","tag","tagging","tagged","term","time"]},"sidebar":"componenten","previous":{"title":"Contact Timeline","permalink":"/contact-timeline"},"next":{"title":"Data Summary","permalink":"/data-summary"}}');
   var i = n(86070),
    s = n(18439),
    a = n(36059),
    o = (n(11333), n(17045)),
    c = n(19776),
    d = n(40808);
   function l(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.p, { children: 'Als de Data Badge een icoon bevat, of een icoon bevat dat extra informatie geeft naast de tekst, dan heeft dit icoon een goed tekstalternatief, zodat de informatie ook beschikbaar is voor mensen die de de afbeelding niet kunnen zien.' }), '\n', (0, i.jsxs)(t.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder een icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor het icoon is niet nodig als er tekst in beeld is die hetzelfde betekent. Een ', (0, i.jsx)(t.code, { children: 'img' }), ' kan dan een leeg ', (0, i.jsx)(t.code, { children: 'alt' }), '-attribuut krijgen (', (0, i.jsx)(t.code, { children: 'alt=""' }), ').'] }), '\n', (0, i.jsx)(t.p, { children: 'Is het toch gewenst om alleen een icoon of een extra informatief icoon te tonen, hou dan rekening met het volgende.' }), '\n', (0, i.jsxs)(t.p, { children: ['Een ', (0, i.jsx)(t.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen.'] }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-html', children: '<span><img src="klok.svg" alt="tijd" />12.45</span>\n' }) }), '\n', (0, i.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(t.ul, { children: ['\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
   function u(e) {
    const t = { a: 'a', code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.p, { children: ['Gebruik zoveel mogelijk semantische HTML, bijvoorbeeld het ', (0, i.jsxs)(t.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time', children: [(0, i.jsx)(t.code, { children: 'time' }), '-element'] }), ' als het om een datum of een tijd gaat.'] }), '\n', (0, i.jsxs)(t.p, { children: ['De toevoeging van de Data Badge mag niet verwarrend zijn voor gebruikers van ', (0, i.jsx)(t.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. De Data Badge geeft informatie die onmiddelijk duidelijk is voor ziende gebruikers. Dit voordeel hebben screenreadergebruikers niet.'] })] });
   }
   function j(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.p, { children: 'Gebruik niet alleen kleur om de betekenis van de Data Badge duidelijk te maken. Rood staat bijvoorbeeld voor gevaar, groen bijvoorbeeld voor het feit dat iets is gelukt. Veel mensen kunnen kleur niet of niet goed waarnemen. Zorg daarom dat er een tweede manier is om de betekenis te herkennen.' }), '\n', (0, i.jsx)(t.p, { children: "Het gebruik van duidelijke teksten is hierbij een goede oplossing. Bijvoorbeeld een rode Data Badge met de tekst 'fout', en een groene Data Badge met de tekst 'gelukt'." }), '\n', (0, i.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(t.ul, { children: ['\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'Gebruik kleur met een doel' }) }), '\n', (0, i.jsx)(t.li, { children: (0, i.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   var p = n(83329),
    y = n(83672),
    k = n(34257),
    b = n(66706),
    x = n(24838),
    v = n(90495),
    f = n(46447),
    w = n(65947),
    D = n(1292),
    A = n(72401),
    z = n(85825),
    N = n(17889),
    _ = n(12013);
   function S(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'gebruik-data-badge', children: 'Gebruik Data Badge' }) }), '\n', (0, i.jsx)(t.h2, { id: 'css', children: 'CSS' }), '\n', (0, i.jsx)(t.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(t.p, { children: (0, i.jsx)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-css', children: '@nl-design-system-candidate/data-badge-css' }) }), '\n', (0, i.jsxs)(t.p, { children: ['Gebruik de ', (0, i.jsx)(t.code, { children: 'nl-data-badge' }), ' class name op een ', (0, i.jsx)(t.code, { children: 'span' }), ' element:'] }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-html', children: '<span class="nl-data-badge">42</span>\n' }) }), '\n', (0, i.jsx)(t.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/data-badge-css\n' }) }), '\n', (0, i.jsx)(t.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/data-badge-css@1/dist/data-badge.css"\n/>\n' }) }), '\n', (0, i.jsxs)(t.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, i.jsx)(t.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/data-badge-css/dist/data-badge.css" />\n' }) }), '\n', (0, i.jsx)(t.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/data-badge-css/data-badge.css";\n' }) }), '\n', (0, i.jsx)(t.h2, { id: 'react', children: 'React' }), '\n', (0, i.jsx)(t.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(t.p, { children: (0, i.jsx)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-react', children: '@nl-design-system-candidate/data-badge-react' }) }), '\n', (0, i.jsx)(t.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/data-badge-react\n' }) }), '\n', (0, i.jsx)(t.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, i.jsx)(t.pre, { children: (0, i.jsx)(t.code, { className: 'language-jsx', children: 'import { DataBadge } from "@nl-design-system-candidate/data-badge-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <DataBadge>42</DataBadge>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function T(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(S, { ...e }) }) : S(e);
   }
   var L = n(38445);
   const B = { title: 'Data Badge', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Data Badge', pagination_label: 'Data Badge', description: 'Label met extra informatie, zoals een categorie of een eigenschap.', slug: '/data-badge', keywords: ['annotatie', 'annotation', 'badge', 'categorie', 'category', 'categorie aanduiding', 'categoriseren', 'categorize', 'characteristic', 'chip', 'data', 'data badge', 'data tag', 'eigenschap', 'etiket', 'etiquette', 'filteren op', 'filter tag', 'index', 'index term', 'info', 'info tag', 'informatiebadge', 'label', 'metadata', 'pill', 'property', 'stamp', 'status', 'status badge', 'sticker', 'tag', 'tagging', 'tagged', 'term', 'time'] },
    C = void 0,
    R = {},
    M = 'Data Badge',
    F = 'Label met extra informatie, zoals een categorie of een eigenschap.',
    V = 94,
    G = a.find((e) => e.number === V),
    O = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...c.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function H(e) {
    const t = { h2: 'h2', h3: 'h3', ...(0, s.R)(), ...e.components },
     { Checklist: n } = t;
    return (
     n ||
      (function (e, t) {
       throw new Error('Expected ' + (t ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('Checklist', !0),
     (0, i.jsxs)(i.Fragment, {
      children: [
       '\n',
       '\n',
       '\n',
       '\n',
       '\n',
       (0, i.jsx)(z.Fc, { component: G, headingLevel: 1, description: F }),
       '\n',
       (0, i.jsx)(A.e, { component: G }),
       '\n',
       (0, i.jsx)(v.Zp, { className: 'implementation-card', children: (0, i.jsxs)(v.Wu, { children: [(0, i.jsx)(w.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, i.jsxs)(f.dk, { children: [(0, i.jsxs)(f.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=13781-18012', children: [(0, i.jsx)(D.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, i.jsxs)(f.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=13781-18012', children: [(0, i.jsx)(D.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, i.jsx)(w.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, i.jsxs)(f.dk, { children: [(0, i.jsxs)(f.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-data-badge--documentatie', children: [(0, i.jsx)(D.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, i.jsxs)(f.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/data-badge--documentatie', children: [(0, i.jsx)(D.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, i.jsx)(w.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, i.jsxs)(f.dk, { children: [(0, i.jsxs)(f.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-css', children: [(0, i.jsx)(D.r, { brand: 'npm' }), ' @nl-design-system-candidate/data-badge-css'] }), (0, i.jsxs)(f.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-react', children: [(0, i.jsx)(D.r, { brand: 'npm' }), ' @nl-design-system-candidate/data-badge-react'] }), (0, i.jsxs)(f.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-tokens', children: [(0, i.jsx)(D.r, { brand: 'npm' }), ' @nl-design-system-candidate/data-badge-tokens'] })] })] }) }),
       '\n',
       (0, i.jsx)(t.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
       '\n',
       (0, i.jsx)(d.Ay, {}),
       '\n',
       (0, i.jsx)(t.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
       '\n',
       (0, i.jsx)(c.Ay, {}),
       '\n',
       (0, i.jsx)(n, {
        headingLevel: '4',
        items: [
         { title: 'Als er in de Data Badge een informatief icoon staat, is er een goed tekstalternatief.', sc: '1.1.1', status: '', component: (0, i.jsx)(h, {}), tags: ['developer', 'contentmaker'] },
         { title: 'Gebruik zoveel mogelijk semantische HTML voor de Data Badge.', sc: '1.3.1', status: '', component: (0, i.jsx)(j, {}), tags: ['developer'] },
         { title: 'Gebruik niet alleen kleur om de betekenis van de Data Badge duidelijk te maken.', sc: '1.4.1', status: '', component: (0, i.jsx)(m, {}), tags: ['designer'] },
         { title: 'De tekst van de Data Badge heeft voldoende contrast tegen de achtergrond.', sc: '1.4.3', status: '', component: (0, i.jsx)(y.Ay, {}), tags: ['designer'] },
         { title: 'Gebruik geen afbeeldingen van tekst voor de Data Badge.', sc: '1.4.5', status: '', component: (0, i.jsx)(b.Ay, {}), tags: ['designer', 'contentmaker'] },
         { title: 'Als een tekst in de Data Badge in een andere taal is dan de taal van de pagina, dan heeft de Data Badge een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, i.jsx)(x.Ay, {}), tags: ['contentmaker', 'developer'] },
        ],
       }),
       '\n',
       (0, i.jsx)(t.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
       '\n',
       (0, i.jsx)(o.Ay, {}),
       '\n',
       (0, i.jsx)(n, {
        headingLevel: '4',
        items: [
         { title: 'Als je de tekst van de Data Badge vergroot tot 200% blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, i.jsx)(k.Ay, {}), tags: ['developer'] },
         { title: 'Als je de tekstafstand van de Data Badge vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: (0, i.jsx)(p.Ay, {}), tags: ['developer'] },
        ],
       }),
       '\n',
       (0, i.jsx)(_.o, { omitH1: !0, headingLevel: 2, children: (0, i.jsx)(T, {}) }),
       '\n',
       (0, i.jsx)(t.h2, { id: 'design-tokens', children: 'Design tokens' }),
       '\n',
       (0, i.jsx)(N.B, { tokens: L }),
       '\n',
       (0, i.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
       '\n',
       (0, i.jsx)(z.VK, { component: G, headingLevel: 3 }),
       '\n',
       (0, i.jsx)(z.$9, { component: G, headingLevel: 2 }),
       '\n',
       (0, i.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
       '\n',
       (0, i.jsx)(z.mu, { component: G, headingLevel: 3 }),
      ],
     })
    );
   }
   function E(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(H, { ...e }) }) : H(e);
   }
  },
  12013(e, t, n) {
   'use strict';
   n.d(t, { o: () => l });
   var r = n(18439),
    i = n(46447),
    s = n(86070);
   const a = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: i } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + i;
     }
     return n.toString();
    },
    o = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    c = (e) => ({ img: ({ src: t, ...n }) => (0, s.jsx)('img', { ...n, src: a(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, t) => {
     if (e) {
      const e = { ...o[t - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[t];
    },
    l = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: i = '', components: a = {} }) => (0, s.jsx)(r.x, { components: { ...d(t, n), ...c(i), ...a }, children: e });
  },
  17045(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => o, RM: () => s });
   var r = n(86070),
    i = n(18439);
   const s = [];
   function a(e) {
    const t = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  17889(e, t, n) {
   'use strict';
   n.d(t, { B: () => z });
   var r = n(96547),
    i = n(79889),
    s = n(33062),
    a = n(46447),
    o = n(68148),
    c = n(9016),
    d = n(91635),
    l = n(30734),
    h = n(4603),
    u = n(29181),
    j = n(86070);
   function g({ children: e, content: t, language: n }) {
    return 'clipboard' in navigator
     ? (0, j.jsxs)(a.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await l.Ay.format(t, { parser: n, plugins: [o.A, c.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, j.jsx)(u.In, { children: (0, j.jsx)(h.A, {}) })],
       })
     : null;
   }
   var m = n(35193),
    p = n(13088),
    y = n(91525),
    k = n(24214),
    b = n(92081),
    x = n(1375),
    v = n(23436),
    f = n(79532),
    w = n(30758);
   const D = { color: m.A, dimension: p.A, fontFamilies: y.A, fontSizes: k.A, fontWeights: b.A, lineHeights: x.A, other: v.A, textDecoration: f.A },
    A = ({ type: e }) => (0, j.jsx)(u.In, { children: (0, w.createElement)(D[e]) });
   function z({ tokens: e }) {
    const t = (0, s.kD)(e),
     n = (0, s.GT)(t),
     o = n.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     c = JSON.stringify((0, s.Rc)(n));
    return (0, j.jsxs)(j.Fragment, {
     children: [
      (0, j.jsxs)(a.XI, {
       children: [
        (0, j.jsx)(a.A0, { children: (0, j.jsxs)(a.Hj, { children: [(0, j.jsx)(a.M_, { children: 'name' }), (0, j.jsx)(a.M_, { children: 'type' })] }) }),
        (0, j.jsx)(a.BF, {
         children: n.map((t) => {
          const n = (0, s.o_)(t),
           o = (0, s.eQ)(e, t).$type;
          return (0, j.jsxs)(a.Hj, { children: [(0, j.jsx)(a.nA, { children: (0, j.jsx)(r.C, { children: (0, j.jsx)(a.kf, { children: n }) }) }), (0, j.jsx)(a.nA, { children: (0, j.jsxs)(i.K, { children: [(0, j.jsx)(A, { type: o }), ' ', o] }) })] }, n);
         }),
        }),
       ],
      }),
      (0, j.jsxs)(a.e2, { children: [(0, j.jsx)(g, { content: c, language: 'json', children: 'Kopieer als JSON' }), (0, j.jsx)(g, { content: o, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => o, RM: () => s });
   var r = n(86070),
    i = n(18439);
   const s = [];
   function a(e) {
    const t = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24838(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => a });
   var r = n(86070),
    i = n(18439);
   function s(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(t.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(t.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33062(e, t, n) {
   'use strict';
   n.d(t, { bo: () => i, KF: () => u, mJ: () => m, VZ: () => D, cR: () => w, Pv: () => p, qZ: () => a, kD: () => x, B2: () => j, Pc: () => c, f4: () => o, GT: () => v, fX: () => s, eQ: () => b, B_: () => k, o_: () => y, Rc: () => f });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    c = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function l(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, t) => d.indexOf(e) - d.indexOf(t)),
    u = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return h(l(t));
    },
    j = (e, t) => m(e).includes(t),
    g = (e) => {
     const t = / URL \(([^)]+)\)/;
     return h(l(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    m = (e) => h(l(e.projects.flatMap((e) => g(e)))),
    p = (e) => {
     const t = g(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: i, value: s }) => {
        const a = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === a ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${a}`;
        return { brand: a.toLowerCase(), name: r, id: i, value: s, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    y = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    b = (e, t) => t.reduce((e, t) => e?.[t], e);
   function x(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? x(e[n], [...t, n]) : []));
   }
   function v(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, y(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function f(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) (e[t] || (e[t] = {}), (e = e[t]));
    }
    return t;
   }
   const w = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => a });
   var r = n(86070),
    i = n(18439);
   function s(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(t.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(t.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(t.code, { children: 'em' }), ' of ', (0, r.jsx)(t.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(t.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(t.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(t.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(t.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(t.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  40808(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => o, RM: () => s });
   var r = n(86070),
    i = n(18439);
   const s = [];
   function a(e) {
    const t = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  42962(e, t, n) {
   var r = { './utrecht-action-group_46.entry.js': [60267, 60267], './utrecht-backdrop.entry.js': [60696, 38315], './utrecht-body.entry.js': [64690, 42309], './utrecht-breadcrumb-nav.entry.js': [82907, 5288], './utrecht-button-group.entry.js': [59671, 59671], './utrecht-checkbox.entry.js': [73591, 95972], './utrecht-column-layout.entry.js': [23503, 45884], './utrecht-contact-card-template.entry.js': [44854, 22473], './utrecht-custom-checkbox.entry.js': [48643, 71024], './utrecht-data-list-actions.entry.js': [44381, 66762], './utrecht-data-list-item.entry.js': [25359, 47740], './utrecht-data-list-key.entry.js': [50229, 72610], './utrecht-data-list-value.entry.js': [3931, 26312], './utrecht-data-list.entry.js': [78491, 872], './utrecht-digid-button.entry.js': [90762, 68381], './utrecht-digid-logo.entry.js': [28417, 34446], './utrecht-eherkenning-logo.entry.js': [48744, 26363], './utrecht-eidas-logo.entry.js': [55572, 33191], './utrecht-form-field-error-message.entry.js': [22828, 447], './utrecht-form-toggle.entry.js': [61085, 83466], './utrecht-html-content.entry.js': [17035, 17035], './utrecht-icon-afspraak-maken.entry.js': [43596, 21215], './utrecht-icon-afval-container.entry.js': [49894, 27513], './utrecht-icon-afval-containerpas.entry.js': [40188, 17807], './utrecht-icon-afval-kalender.entry.js': [38607, 60988], './utrecht-icon-afval-pmd.entry.js': [28784, 6403], './utrecht-icon-afval-scheiden.entry.js': [19978, 97597], './utrecht-icon-afval.entry.js': [27172, 4791], './utrecht-icon-afvalkalender.entry.js': [72650, 50269], './utrecht-icon-alleen.entry.js': [61905, 84286], './utrecht-icon-arrow.entry.js': [45603, 67984], './utrecht-icon-auto.entry.js': [41395, 63776], './utrecht-icon-begroting.entry.js': [12151, 34532], './utrecht-icon-bestemmingsplan.entry.js': [27231, 49612], './utrecht-icon-betaaldatum.entry.js': [78784, 56403], './utrecht-icon-bewijsstukken.entry.js': [35307, 57688], './utrecht-icon-bijstand.entry.js': [70635, 93016], './utrecht-icon-blad.entry.js': [13459, 35840], './utrecht-icon-bluesky.entry.js': [52867, 75248], './utrecht-icon-bouw-projecten.entry.js': [70396, 48015], './utrecht-icon-bouwproject.entry.js': [39002, 16621], './utrecht-icon-brandgevaar.entry.js': [81357, 3738], './utrecht-icon-brief-betalen.entry.js': [77554, 55173], './utrecht-icon-buurtcentra.entry.js': [20811, 43192], './utrecht-icon-checkmark.entry.js': [29815, 52196], './utrecht-icon-chevron-down.entry.js': [2698, 80317], './utrecht-icon-chevron-left.entry.js': [92299, 14680], './utrecht-icon-chevron-right.entry.js': [80770, 58389], './utrecht-icon-chevron-up.entry.js': [3039, 25420], './utrecht-icon-close.entry.js': [74514, 52133], './utrecht-icon-coffee.entry.js': [432, 78051], './utrecht-icon-college-b-w.entry.js': [6516, 84135], './utrecht-icon-container-bio.entry.js': [43958, 21577], './utrecht-icon-container-glas.entry.js': [55073, 77454], './utrecht-icon-container-groenafval.entry.js': [23791, 46172], './utrecht-icon-container-met-zak.entry.js': [1937, 24318], './utrecht-icon-container-papier.entry.js': [22497, 44878], './utrecht-icon-container-pmd.entry.js': [85865, 8246], './utrecht-icon-container-restafval.entry.js': [45595, 45595], './utrecht-icon-container-textiel.entry.js': [73239, 95620], './utrecht-icon-container.entry.js': [90549, 12930], './utrecht-icon-cross.entry.js': [93866, 71485], './utrecht-icon-dakloos.entry.js': [29073, 51454], './utrecht-icon-dementie.entry.js': [6697, 29078], './utrecht-icon-documenten.entry.js': [57110, 34729], './utrecht-icon-duurzaam.entry.js': [16379, 38760], './utrecht-icon-eenzaamheid.entry.js': [19487, 41868], './utrecht-icon-eikenprocessie.entry.js': [70063, 92444], './utrecht-icon-elektrisch-rijden.entry.js': [10361, 55123], './utrecht-icon-energie-projecten.entry.js': [2126, 79745], './utrecht-icon-energie-vergoeding.entry.js': [55056, 32675], './utrecht-icon-energietransitie.entry.js': [10884, 88503], './utrecht-icon-error.entry.js': [74704, 52323], './utrecht-icon-evenementen.entry.js': [74402, 52021], './utrecht-icon-facebook.entry.js': [46344, 23963], './utrecht-icon-fiets.entry.js': [37707, 60088], './utrecht-icon-filter.entry.js': [43118, 20737], './utrecht-icon-flickr.entry.js': [69811, 92192], './utrecht-icon-geboorte.entry.js': [23417, 45798], './utrecht-icon-gebruiker-centraal.entry.js': [37869, 60250], './utrecht-icon-gebruiker-ingelogd.entry.js': [84866, 62485], './utrecht-icon-gegevenswoordenboek.entry.js': [24949, 47330], './utrecht-icon-geluid.entry.js': [20938, 98557], './utrecht-icon-gemeente-locatie.entry.js': [11253, 11253], './utrecht-icon-gemeenteraad.entry.js': [91214, 68833], './utrecht-icon-gereedschap.entry.js': [8917, 31298], './utrecht-icon-gezicht.entry.js': [64084, 41703], './utrecht-icon-gezin.entry.js': [44743, 67124], './utrecht-icon-glas-afval.entry.js': [82996, 60615], './utrecht-icon-glijbaan.entry.js': [77770, 55389], './utrecht-icon-grafiek.entry.js': [46275, 68656], './utrecht-icon-groen-projecten.entry.js': [65632, 43251], './utrecht-icon-grofvuil-ophalen.entry.js': [60782, 38401], './utrecht-icon-grofvuil.entry.js': [85152, 62771], './utrecht-icon-hamburger-menu.entry.js': [29765, 52146], './utrecht-icon-herdenking.entry.js': [53125, 75506], './utrecht-icon-hondenbelasting.entry.js': [55857, 78238], './utrecht-icon-horeca.entry.js': [92084, 69703], './utrecht-icon-horecavergunning.entry.js': [58139, 80520], './utrecht-icon-huis-en-omgeving.entry.js': [26582, 4201], './utrecht-icon-huis.entry.js': [52111, 74492], './utrecht-icon-huishoudelijk-geweld.entry.js': [25869, 48250], './utrecht-icon-hulp-huishouden.entry.js': [13504, 91123], './utrecht-icon-hulp-vervoer.entry.js': [3711, 26092], './utrecht-icon-hulp-zorg.entry.js': [18392, 96011], './utrecht-icon-hulpmiddelen-gezin.entry.js': [84335, 6716], './utrecht-icon-hulpverlening.entry.js': [54131, 76512], './utrecht-icon-idee.entry.js': [10379, 32760], './utrecht-icon-informatie.entry.js': [42746, 20365], './utrecht-icon-information.entry.js': [15844, 93463], './utrecht-icon-innovatie.entry.js': [92811, 15192], './utrecht-icon-inspraak-inwoners.entry.js': [93913, 16294], './utrecht-icon-instagram.entry.js': [70562, 48181], './utrecht-icon-kalender.entry.js': [51690, 29309], './utrecht-icon-kennis.entry.js': [65596, 43215], './utrecht-icon-kerstbomen.entry.js': [93434, 71053], './utrecht-icon-klachten.entry.js': [94968, 72587], './utrecht-icon-kroon.entry.js': [33277, 55658], './utrecht-icon-laadpaal.entry.js': [20532, 98151], './utrecht-icon-language.entry.js': [45210, 22829], './utrecht-icon-lantaarnpaal-oud.entry.js': [77808, 55427], './utrecht-icon-lantaarnpaal.entry.js': [36653, 59034], './utrecht-icon-leren.entry.js': [93122, 70741], './utrecht-icon-let-op.entry.js': [11791, 34172], './utrecht-icon-linkedin.entry.js': [45518, 23137], './utrecht-icon-list-check.entry.js': [49745, 72126], './utrecht-icon-list-number.entry.js': [58996, 36615], './utrecht-icon-list.entry.js': [16296, 93915], './utrecht-icon-loupe.entry.js': [96281, 18662], './utrecht-icon-mail.entry.js': [90035, 12416], './utrecht-icon-markt.entry.js': [61705, 84086], './utrecht-icon-mastodon.entry.js': [6999, 29380], './utrecht-icon-melding-boom.entry.js': [10094, 87713], './utrecht-icon-melding-klacht.entry.js': [58802, 36421], './utrecht-icon-melding-openbareruimte.entry.js': [96669, 19050], './utrecht-icon-melding-verlichting.entry.js': [85264, 62883], './utrecht-icon-melding.entry.js': [80216, 57835], './utrecht-icon-menselijk.entry.js': [75822, 53441], './utrecht-icon-menu-dot-open.entry.js': [84242, 61861], './utrecht-icon-menu-dot.entry.js': [2109, 24490], './utrecht-icon-meterkast.entry.js': [10643, 10643], './utrecht-icon-milieu-ontheffing.entry.js': [96292, 73911], './utrecht-icon-milieu-zone.entry.js': [96646, 74265], './utrecht-icon-minus-vertical.entry.js': [3537, 25918], './utrecht-icon-minus.entry.js': [41958, 19577], './utrecht-icon-mobiliteit.entry.js': [79036, 56655], './utrecht-icon-natuur.entry.js': [75506, 20268], './utrecht-icon-nieuw-huis.entry.js': [31040, 8659], './utrecht-icon-nieuwsbrief.entry.js': [50157, 72538], './utrecht-icon-nummerbord.entry.js': [84829, 90858], './utrecht-icon-om-het-huis.entry.js': [34810, 12429], './utrecht-icon-omgeving.entry.js': [37214, 14833], './utrecht-icon-omgevingsvisie.entry.js': [225, 22606], './utrecht-icon-omgevingswet.entry.js': [51693, 74074], './utrecht-icon-onderhoud.entry.js': [54354, 31973], './utrecht-icon-ondernemen.entry.js': [15915, 38296], './utrecht-icon-openingstijden.entry.js': [31463, 53844], './utrecht-icon-over-de-stad.entry.js': [7083, 29464], './utrecht-icon-overlijden.entry.js': [39924, 17543], './utrecht-icon-panden.entry.js': [83290, 60909], './utrecht-icon-park.entry.js': [6608, 84227], './utrecht-icon-parkeerkaart.entry.js': [85477, 7858], './utrecht-icon-parkeervergunning.entry.js': [76237, 98618], './utrecht-icon-parken.entry.js': [66515, 88896], './utrecht-icon-parkeren-bedrijven.entry.js': [81956, 59575], './utrecht-icon-parkeren-betaalautomaat.entry.js': [71478, 49097], './utrecht-icon-parkeren-betalen.entry.js': [48884, 26503], './utrecht-icon-parkeren.entry.js': [24032, 1651], './utrecht-icon-participatie-campagne.entry.js': [58012, 35631], './utrecht-icon-participatie-like.entry.js': [10211, 32592], './utrecht-icon-participatie-pitch.entry.js': [50144, 27763], './utrecht-icon-paspoort.entry.js': [95256, 72875], './utrecht-icon-phone.entry.js': [96358, 73977], './utrecht-icon-pinterest.entry.js': [92376, 69995], './utrecht-icon-presentatie.entry.js': [36558, 14177], './utrecht-icon-prijskaartje.entry.js': [45238, 22857], './utrecht-icon-read-aloud.entry.js': [51966, 29585], './utrecht-icon-report.entry.js': [60530, 38149], './utrecht-icon-rijbewijs.entry.js': [89877, 12258], './utrecht-icon-rioolheffing.entry.js': [8110, 85729], './utrecht-icon-rolstoel.entry.js': [14978, 92597], './utrecht-icon-schild-gemeente-utrecht.entry.js': [14036, 91655], './utrecht-icon-search.entry.js': [76904, 54523], './utrecht-icon-shoppen.entry.js': [38337, 60718], './utrecht-icon-sinterklaas.entry.js': [60259, 82640], './utrecht-icon-slechtziende-hoordende.entry.js': [34339, 56720], './utrecht-icon-sport-en-cultuur.entry.js': [97907, 20288], './utrecht-icon-sport-voetbal.entry.js': [63248, 40867], './utrecht-icon-sport.entry.js': [15300, 92919], './utrecht-icon-standaard-projecten.entry.js': [34009, 56390], './utrecht-icon-stookverbod.entry.js': [27350, 4969], './utrecht-icon-strand.entry.js': [29192, 6811], './utrecht-icon-strooien.entry.js': [21175, 43556], './utrecht-icon-subsidie-gezin.entry.js': [35880, 13499], './utrecht-icon-subsidie.entry.js': [34668, 12287], './utrecht-icon-t-shirt.entry.js': [94763, 17144], './utrecht-icon-threads.entry.js': [60555, 82936], './utrecht-icon-thuiswerken.entry.js': [49161, 93923], './utrecht-icon-toeslag.entry.js': [10341, 32722], './utrecht-icon-trein.entry.js': [21068, 98687], './utrecht-icon-trouwen.entry.js': [8686, 86305], './utrecht-icon-twitter.entry.js': [78009, 390], './utrecht-icon-user.entry.js': [49647, 72028], './utrecht-icon-uw-wijk.entry.js': [28514, 6133], './utrecht-icon-vaccinatie.entry.js': [83147, 5528], './utrecht-icon-veilige-wijk.entry.js': [38821, 61202], './utrecht-icon-vergaderen.entry.js': [57799, 80180], './utrecht-icon-vergaderendigitaal.entry.js': [30966, 8585], './utrecht-icon-vergoeding.entry.js': [49686, 27305], './utrecht-icon-verhuizen.entry.js': [20708, 98327], './utrecht-icon-verkeers-projecten.entry.js': [66540, 44159], './utrecht-icon-verkeerslicht.entry.js': [20735, 43116], './utrecht-icon-verkiezingen.entry.js': [98973, 21354], './utrecht-icon-verslaving.entry.js': [19591, 41972], './utrecht-icon-vervoersvoorziening.entry.js': [56848, 34467], './utrecht-icon-virus.entry.js': [1259, 23640], './utrecht-icon-vluchtelingen.entry.js': [81508, 59127], './utrecht-icon-voorzieningen-vervoer.entry.js': [18881, 41262], './utrecht-icon-vrijwilligerswerk.entry.js': [98400, 76019], './utrecht-icon-vuilnisbak.entry.js': [60028, 37647], './utrecht-icon-vuilniszak.entry.js': [31668, 9287], './utrecht-icon-vuurwerk.entry.js': [36149, 58530], './utrecht-icon-wandelstok.entry.js': [38298, 15917], './utrecht-icon-warm.entry.js': [44165, 66546], './utrecht-icon-warning.entry.js': [74190, 51809], './utrecht-icon-werken.entry.js': [29516, 7135], './utrecht-icon-werkzaamheden.entry.js': [48956, 26575], './utrecht-icon-whatsapp.entry.js': [54750, 32369], './utrecht-icon-wijk-denkmee.entry.js': [2947, 25328], './utrecht-icon-wijk-overlast.entry.js': [86790, 64409], './utrecht-icon-wijk-park.entry.js': [61032, 38651], './utrecht-icon-wijk-projecten.entry.js': [59684, 37303], './utrecht-icon-wijk-speelplaats.entry.js': [72554, 50173], './utrecht-icon-wijk-sport.entry.js': [20332, 97951], './utrecht-icon-wijk-zwemmen.entry.js': [60337, 82718], './utrecht-icon-wonen-kosten.entry.js': [48660, 26279], './utrecht-icon-woning-zoeken.entry.js': [54989, 77370], './utrecht-icon-x.entry.js': [34790, 12409], './utrecht-icon-youtube.entry.js': [37315, 59696], './utrecht-icon-zelfstandig-wonen.entry.js': [74501, 96882], './utrecht-icon-zoom-minus.entry.js': [29766, 7385], './utrecht-icon-zoom-plus.entry.js': [82404, 60023], './utrecht-icon-zoomin.entry.js': [49196, 26815], './utrecht-icon-zoomout.entry.js': [77011, 99392], './utrecht-icon-zorg-huis.entry.js': [25926, 3545], './utrecht-icon-zweefpaal.entry.js': [17129, 39510], './utrecht-icon-zwemmen.entry.js': [48217, 70598], './utrecht-logo-button.entry.js': [62178, 39797], './utrecht-map-marker.entry.js': [68805, 91186], './utrecht-multiline-data.entry.js': [9776, 87395], './utrecht-nav-bar.entry.js': [49817, 94579], './utrecht-number-badge.entry.js': [28405, 50786], './utrecht-page-body.entry.js': [16742, 94361], './utrecht-page-footer.entry.js': [16721, 39102], './utrecht-page-layout.entry.js': [64892, 42511], './utrecht-pagination.entry.js': [38129, 38129], './utrecht-preserve-data.entry.js': [19003, 41384], './utrecht-progress-list-item.entry.js': [6968, 84587], './utrecht-progress-list.entry.js': [48298, 25917], './utrecht-progress-sublist-item.entry.js': [91900, 69519], './utrecht-root.entry.js': [246, 77865], './utrecht-sidenav.entry.js': [24476, 2095], './utrecht-surface.entry.js': [27147, 49528], './utrecht-table-body.entry.js': [47681, 70062], './utrecht-table-caption.entry.js': [31551, 53932], './utrecht-table-cell.entry.js': [90793, 13174], './utrecht-table-container.entry.js': [90366, 67985], './utrecht-table-footer.entry.js': [14522, 92141], './utrecht-table-header-cell.entry.js': [73801, 96182], './utrecht-table-header.entry.js': [90924, 68543], './utrecht-table-row.entry.js': [86529, 8910], './utrecht-table.entry.js': [50668, 28287], './utrecht-textarea.entry.js': [50908, 28527], './utrecht-textbox.entry.js': [37820, 15439], './utrecht-top-task-link.entry.js': [90694, 68313], './utrecht-top-task-nav.entry.js': [63361, 85742] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   ((i.keys = () => Object.keys(r)), (i.id = 42962), (e.exports = i));
  },
  54565(e, t, n) {
   'use strict';
   n.d(t, { c: () => i });
   var r = n(30758);
   function i() {
    const [e, t] = (0, r.useState)();
    return ((0, r.useEffect)(() => t(!0), []), e);
   }
  },
  66706(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => a });
   var r = n(86070),
    i = n(18439);
   function s(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Het label bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij het om een logo gaat, zoals een DigiD-logo.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  67970(e, t, n) {
   'use strict';
   n.d(t, { D: () => o });
   var r = n(46447),
    i = n(13526),
    s = n(33062),
    a = n(86070);
   const o = ({ state: e }) => {
    const t = (0, s.fX)(e);
    return (0, a.jsx)(r.KE, { className: (0, i.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  72401(e, t, n) {
   'use strict';
   n.d(t, { e: () => o });
   var r = n(12013),
    i = n(30758),
    s = n(33062),
    a = n(86070);
   const o = ({ component: e }) => {
    const { title: t } = e,
     o = (0, s.fX)(t),
     c = i.lazy(() => n(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, a.jsx)(i.Suspense, { fallback: null, children: (0, a.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, a.jsx)(c, {}) }) });
   };
  },
  72642(e, t, n) {
   'use strict';
   n.d(t, { p: () => s });
   var r = n(13526),
    i = n(86070);
   const s = ({ children: e, className: t, level: n = 1, suffix: s, ...a }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...a, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  82839(e, t, n) {
   var r = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   ((i.keys = () => Object.keys(r)), (i.id = 82839), (e.exports = i));
  },
  83329(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => a });
   var r = n(86070),
    i = n(18439);
   function s(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(t.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(t.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(t.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(t.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(t.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(t.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(t.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(t.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(t.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(t.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(t.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83672(e, t, n) {
   'use strict';
   n.d(t, { Ay: () => a });
   var r = n(86070),
    i = n(18439);
   function s(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(t.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85825(e, t, n) {
   'use strict';
   n.d(t, { VK: () => k, $9: () => x, mu: () => b, Fc: () => v });
   var r = n(29181),
    i = n(13526),
    s = n(1292),
    a = n(90495),
    o = n(54565);
   function c(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = n(86070);
   const l = ({ checked: e, unchecked: t }) =>
    (0, d.jsx)(c, {
     children: () => {
      const r = n(83294).V6;
      return (0, d.jsx)(r, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: t, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var h = n(67970),
    u = n(72642),
    j = n(46447),
    g = n(45561);
   const m = ({ children: e }) => (0, d.jsx)('ul', { className: 'task-list', children: e }),
    p = ({ checked: e, children: t, title: n, description: r, headingLevel: s = 3 }) => (0, d.jsxs)('li', { className: (0, i.A)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, d.jsx)(g.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [n ? (0, d.jsx)(j.DZ, { appearance: 'utrecht-heading-3', level: s, children: n }) : null, r, t] })] });
   var y = n(33062);
   const k = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => y.f4.includes(e.id)),
      s = n && y.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, d.jsx)(r.If, { sections: s.map((n) => ({ className: (0, i.A)('definition-of-done', n && `definition-of-done--${(0, y.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, d.jsx)(p, { headingLevel: t + 1, checked: e, title: n, description: (0, y.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    b = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !y.f4.includes(e.id));
     return e && n.length
      ? (0, d.jsx)(a.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: n
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const n = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = n?.value,
            o = (0, y.Pv)(e),
            c = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: t }) => c.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, d.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(a.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(l, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || o.length > 0) && (0, d.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: h
                   .filter((e) => !!c.get(e.name))
                   .map((e) => {
                    const t = c.get(e.name);
                    return { children: t.desciption, icon: (0, d.jsx)(s.r, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: n }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: t + 2, children: [i, ' in ', e] }), (0, d.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: t }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(r.DZ, { level: t, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [i ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: t, description: n }) => {
     const i = e && y.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: t, suffix: i && (0, d.jsx)(h.D, { state: i }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  90495(e, t, n) {
   'use strict';
   n.d(t, { AC: () => d, Fu: () => a, Wu: () => o, Zp: () => c });
   var r = n(46447),
    i = n(13526),
    s = n(86070);
   const a = ({ background: e, children: t, className: n, ...r }) => (0, s.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    o = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    c = ({ href: e, appearance: t, className: n, component: a = 'div', background: o, children: c }) => {
     const d = (e) => ('article' === a ? (0, s.jsx)('article', { ...e }) : 'section' === a ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      l = (0, s.jsx)(d, { className: (0, i.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: c });
     return e ? (0, s.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: l }) : l;
    },
    d = ({ appearance: e = 'medium', children: t, className: n }) => (0, s.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
 },
]);
