(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [23221],
 {
  67588: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  89823: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  27512: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  85578: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(t.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(t.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(t.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(t.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(t.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(t.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(t.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(t.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(t.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(t.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(t.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  39659: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(t.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  72628: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(t.p, { children: ['Zorg ervoor dat het component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(t.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(t.code, { children: 'em' }), ' of ', (0, r.jsx)(t.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(t.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(t.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(t.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(t.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(t.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  83110: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(t.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(t.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  51408: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => z, component: () => _, contentTitle: () => G, default: () => L, description: () => S, frontMatter: () => T, issueNumber: () => P, metadata: () => W, title: () => N, toc: () => R });
   var r = n(52676),
    s = n(40139),
    i = n(99890),
    o = n(67588),
    a = n(89823),
    c = n(27512),
    l = n(90799);
   function d(e) {
    const t = { code: 'code', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(t.p, { children: ['Zorg dat een alinea in een paragraaf-element staat. Gebruik geen ', (0, r.jsx)(t.code, { children: '<div>' }), ' of ', (0, r.jsx)(t.code, { children: '<span>' }), ' voor op zichzelf staande teksten.\nZelfs als geen CSS geladen kan worden, blijft de tekst dan duidelijk weergegeven.'] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   var u = n(56133),
    g = n(85578),
    m = n(39659),
    p = n(72628),
    j = n(83110),
    w = n(97520),
    y = n(76233),
    f = n(6503),
    k = n(8657),
    v = n(49556),
    b = n(57716);
   function x(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', pre: 'pre', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.h1, { id: 'gebruik-paragraph', children: 'Gebruik Paragraph' }), '\n', (0, r.jsx)(t.h2, { id: 'css', children: 'CSS' }), '\n', (0, r.jsx)(t.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, r.jsxs)(t.p, { children: [(0, r.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css', children: [(0, r.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fparagraph-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/paragraph-css'] }), '\nversie 2.'] }), '\n', (0, r.jsxs)(t.p, { children: ['Gebruik de ', (0, r.jsx)(t.code, { children: 'nl-paragraph' }), ' class name op een ', (0, r.jsx)(t.code, { children: 'p' }), ' element:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<p class="nl-paragraph">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</p>\n' }) }), '\n', (0, r.jsxs)(t.p, { children: ['Voor de Lead Paragraph gebruik je de extra class name ', (0, r.jsx)(t.code, { children: 'nl-paragraph--lead' }), ':'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<p class="nl-paragraph nl-paragraph--lead">\n  Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx. Je gelooft nooit wat er toen gebeurde!\n</p>\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-css\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/paragraph-css@2/dist/paragraph.css"\n/>\n' }) }), '\n', (0, r.jsxs)(t.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, r.jsx)(t.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/paragraph-css/dist/paragraph.css" />\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/paragraph-css/paragraph.css";\n' }) }), '\n', (0, r.jsx)(t.h2, { id: 'react', children: 'React' }), '\n', (0, r.jsx)(t.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, r.jsxs)(t.p, { children: [(0, r.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-react', children: [(0, r.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fparagraph-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/paragraph-react'] }), '\nversie 2.'] }), '\n', (0, r.jsx)(t.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-react\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-jsx', children: 'import { Paragraph } from "@nl-design-system-candidate/paragraph-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Paragraph>Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'De Lead Paragraph werkt zo:' }), '\n', (0, r.jsx)(t.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-jsx', children: '<Paragraph purpose="lead">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n' }) }), '\n', (0, r.jsx)(t.h2, { id: 'figma', children: 'Figma' }), '\n', (0, r.jsxs)(t.p, { children: ['De Figma component staat in ', (0, r.jsx)(t.a, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=150-734', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Paragraph' }), '.'] })] });
   }
   function A(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
   var C = n(46873);
   const T = { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', keywords: ['alinea', 'body', 'body copy', 'body text', 'bodytekst', 'broodtekst', 'content block', 'content blok', 'copy', 'gewone tekst', 'hoofdalinea', 'inleidende alinea', 'inleiding', 'introductory', 'lead', 'lead paragraph', 'lead text', 'paragraaf', 'paragraph', 'regular text', 'rich text', 'rte', 'sentence', 'tekst', 'tekst-item', 'tekstblok', 'text', 'text block', 'text block', 'text element', 'zin'] },
    G = void 0,
    W = { id: 'componenten/paragraph/index', title: 'Paragraph', description: 'Toont een alinea aan tekst.', source: '@site/docs/componenten/paragraph/index.mdx', sourceDirName: 'componenten/paragraph', slug: '/paragraph', permalink: '/paragraph', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/paragraph/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', keywords: ['alinea', 'body', 'body copy', 'body text', 'bodytekst', 'broodtekst', 'content block', 'content blok', 'copy', 'gewone tekst', 'hoofdalinea', 'inleidende alinea', 'inleiding', 'introductory', 'lead', 'lead paragraph', 'lead text', 'paragraaf', 'paragraph', 'regular text', 'rich text', 'rte', 'sentence', 'tekst', 'tekst-item', 'tekstblok', 'text', 'text block', 'text block', 'text element', 'zin'] }, sidebar: 'componenten', previous: { title: 'Page Number Navigation', permalink: '/page-number-navigation' }, next: { title: 'Password Input', permalink: '/password-input' } },
    z = {},
    R = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Candidate component gebruiken', id: 'candidate-component-gebruiken', level: 2 },
     { value: 'Design tokens', id: 'design-tokens', level: 3 },
     { value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 },
     { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 },
     { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    N = 'Paragraph',
    S = 'De paragraph gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.',
    P = 115,
    _ = i.find((e) => e.number === P);
   function D(e) {
    const t = { h2: 'h2', h3: 'h3', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, r.jsx)(k.Rv, { component: _, headingLevel: 1, description: S }),
      '\n',
      (0, r.jsx)(w.I, { component: _ }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, r.jsx)(y.B, { component: _, illustration: l.Z }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'candidate-component-gebruiken', children: 'Candidate component gebruiken' }),
      '\n',
      (0, r.jsx)(t.h3, { id: 'design-tokens', children: 'Design tokens' }),
      '\n',
      (0, r.jsx)(v.W, { tokens: C }),
      '\n',
      (0, r.jsx)(b.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(A, {}) }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
      '\n',
      (0, r.jsx)(c.ZP, {}),
      '\n',
      (0, r.jsx)(t.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
      '\n',
      (0, r.jsx)(a.ZP, {}),
      '\n',
      (0, r.jsx)(f.W, {
       headingLevel: '4',
       items: [
        { title: 'De contrastverhouding van de tekstkleur van de paragraaf met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: (0, r.jsx)(m.ZP, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Als een paragraaftekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, r.jsx)(j.ZP, {}), tags: ['developer', 'contentmaker'] },
        { title: 'Als je de hele webpagina inzoomt tot 400% blijft de paragraaftekst leesbaar.', sc: '1.4.10', status: '', component: (0, r.jsx)(u.ZP, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, r.jsx)(t.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
      '\n',
      (0, r.jsx)(o.ZP, {}),
      '\n',
      (0, r.jsx)(f.W, {
       headingLevel: '4',
       items: [
        { title: 'Gebruik het p-element voor paragraaftekst.', sc: '1.3.1', status: '', component: (0, r.jsx)(h, {}), tags: ['developer'] },
        { title: 'Als je de paragraaftekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, r.jsx)(p.ZP, {}), tags: ['developer'] },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: (0, r.jsx)(g.ZP, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, r.jsx)(k.W, { component: _, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, r.jsx)(k.cN, { component: _, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, r.jsx)(k.vM, { component: _, headingLevel: 3 }),
     ],
    });
   }
   function L(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(D, { ...e }) }) : D(e);
   }
  },
  56133: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(40139);
   function i(e) {
    const t = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(t.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, r.jsx)(t.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, r.jsx)(t.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsx)(t.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  3050: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [2272, 2272], './utrecht-backdrop.entry.js': [94654, 94654], './utrecht-body.entry.js': [68530, 68530], './utrecht-breadcrumb-nav.entry.js': [89899, 89899], './utrecht-checkbox.entry.js': [97052, 97052], './utrecht-column-layout.entry.js': [69329, 69329], './utrecht-contact-card-template.entry.js': [86531, 86531], './utrecht-custom-checkbox.entry.js': [23109, 23109], './utrecht-data-list-actions.entry.js': [52048, 52048], './utrecht-data-list-item.entry.js': [70650, 70650], './utrecht-data-list-key.entry.js': [71724, 71724], './utrecht-data-list-value.entry.js': [68437, 68437], './utrecht-data-list.entry.js': [45677, 45677], './utrecht-digid-button.entry.js': [20292, 20292], './utrecht-digid-logo.entry.js': [76749, 76749], './utrecht-eherkenning-logo.entry.js': [17145, 17145], './utrecht-eidas-logo.entry.js': [70669, 70669], './utrecht-form-field-error-message.entry.js': [99509, 99509], './utrecht-form-toggle.entry.js': [36373, 36373], './utrecht-html-content.entry.js': [77661, 77661], './utrecht-icon-afspraak-maken.entry.js': [48443, 48443], './utrecht-icon-afval-container.entry.js': [26623, 26623], './utrecht-icon-afval-containerpas.entry.js': [50605, 50605], './utrecht-icon-afval-kalender.entry.js': [5106, 5106], './utrecht-icon-afval-pmd.entry.js': [42465, 42465], './utrecht-icon-afval-scheiden.entry.js': [23909, 23909], './utrecht-icon-afval.entry.js': [82821, 82821], './utrecht-icon-afvalkalender.entry.js': [78643, 78643], './utrecht-icon-alleen.entry.js': [81926, 81926], './utrecht-icon-arrow.entry.js': [52485, 52485], './utrecht-icon-auto.entry.js': [3373, 3373], './utrecht-icon-begroting.entry.js': [25235, 25235], './utrecht-icon-bestemmingsplan.entry.js': [65465, 65465], './utrecht-icon-betaaldatum.entry.js': [61251, 61251], './utrecht-icon-bewijsstukken.entry.js': [60870, 60870], './utrecht-icon-bijstand.entry.js': [83844, 83844], './utrecht-icon-blad.entry.js': [90749, 90749], './utrecht-icon-bluesky.entry.js': [44583, 44583], './utrecht-icon-bouwproject.entry.js': [35888, 35888], './utrecht-icon-brandgevaar.entry.js': [86871, 86871], './utrecht-icon-brief-betalen.entry.js': [34630, 34630], './utrecht-icon-checkmark.entry.js': [21848, 21848], './utrecht-icon-chevron-down.entry.js': [47124, 47124], './utrecht-icon-chevron-left.entry.js': [81932, 81932], './utrecht-icon-chevron-right.entry.js': [83559, 83559], './utrecht-icon-chevron-up.entry.js': [92506, 92506], './utrecht-icon-close.entry.js': [22639, 22639], './utrecht-icon-college-b-w.entry.js': [20142, 20142], './utrecht-icon-container-bio.entry.js': [92341, 92341], './utrecht-icon-container-glas.entry.js': [2424, 2424], './utrecht-icon-container-groenafval.entry.js': [9136, 9136], './utrecht-icon-container-met-zak.entry.js': [49460, 49460], './utrecht-icon-container-papier.entry.js': [84618, 84618], './utrecht-icon-container-pmd.entry.js': [30872, 30872], './utrecht-icon-container-restafval.entry.js': [40186, 40186], './utrecht-icon-container-textiel.entry.js': [13802, 13802], './utrecht-icon-container.entry.js': [80834, 80834], './utrecht-icon-cross.entry.js': [93882, 93882], './utrecht-icon-dakloos.entry.js': [98410, 98410], './utrecht-icon-dementie.entry.js': [61830, 61830], './utrecht-icon-documenten.entry.js': [18854, 18854], './utrecht-icon-duurzaam.entry.js': [94055, 94055], './utrecht-icon-eenzaamheid.entry.js': [88838, 88838], './utrecht-icon-eikenprocessie.entry.js': [99219, 99219], './utrecht-icon-elektrisch-rijden.entry.js': [25537, 25537], './utrecht-icon-energie-vergoeding.entry.js': [17377, 17377], './utrecht-icon-energietransitie.entry.js': [63764, 63764], './utrecht-icon-error.entry.js': [76150, 76150], './utrecht-icon-evenementen.entry.js': [91418, 91418], './utrecht-icon-facebook.entry.js': [30045, 30045], './utrecht-icon-fiets.entry.js': [85049, 85049], './utrecht-icon-filter.entry.js': [6612, 6612], './utrecht-icon-geboorte.entry.js': [27896, 27896], './utrecht-icon-gebruiker-centraal.entry.js': [11566, 11566], './utrecht-icon-gebruiker-ingelogd.entry.js': [52081, 52081], './utrecht-icon-gegevenswoordenboek.entry.js': [63695, 63695], './utrecht-icon-geluid.entry.js': [40882, 40882], './utrecht-icon-gemeente-locatie.entry.js': [73982, 73982], './utrecht-icon-gemeenteraad.entry.js': [31957, 48218], './utrecht-icon-gereedschap.entry.js': [36548, 36548], './utrecht-icon-gezicht.entry.js': [44467, 44467], './utrecht-icon-gezin.entry.js': [56911, 56911], './utrecht-icon-glas-afval.entry.js': [75863, 75863], './utrecht-icon-glijbaan.entry.js': [14653, 14653], './utrecht-icon-grafiek.entry.js': [35264, 35264], './utrecht-icon-grofvuil-ophalen.entry.js': [8604, 8604], './utrecht-icon-grofvuil.entry.js': [87591, 87591], './utrecht-icon-hamburger-menu.entry.js': [46670, 46670], './utrecht-icon-herdenking.entry.js': [59609, 48459], './utrecht-icon-hondenbelasting.entry.js': [79784, 79784], './utrecht-icon-horeca.entry.js': [34032, 34032], './utrecht-icon-horecavergunning.entry.js': [6444, 6444], './utrecht-icon-huis-en-omgeving.entry.js': [6453, 6453], './utrecht-icon-huis.entry.js': [85182, 85182], './utrecht-icon-huishoudelijk-geweld.entry.js': [69018, 69018], './utrecht-icon-hulp-huishouden.entry.js': [58515, 58515], './utrecht-icon-hulp-vervoer.entry.js': [74927, 74927], './utrecht-icon-hulp-zorg.entry.js': [89411, 88339], './utrecht-icon-hulpmiddelen-gezin.entry.js': [63608, 63608], './utrecht-icon-hulpverlening.entry.js': [63324, 63324], './utrecht-icon-idee.entry.js': [16347, 16347], './utrecht-icon-informatie.entry.js': [71322, 71322], './utrecht-icon-information.entry.js': [24117, 24117], './utrecht-icon-innovatie.entry.js': [17591, 17591], './utrecht-icon-inspraak-inwoners.entry.js': [53770, 53770], './utrecht-icon-instagram.entry.js': [48273, 48273], './utrecht-icon-kalender.entry.js': [90544, 90544], './utrecht-icon-kennis.entry.js': [26542, 26542], './utrecht-icon-kerstbomen.entry.js': [5458, 5458], './utrecht-icon-klachten.entry.js': [4815, 4815], './utrecht-icon-kroon.entry.js': [42124, 42124], './utrecht-icon-laadpaal.entry.js': [56186, 56186], './utrecht-icon-language.entry.js': [1655, 1655], './utrecht-icon-lantaarnpaal-oud.entry.js': [75348, 75348], './utrecht-icon-lantaarnpaal.entry.js': [59624, 59624], './utrecht-icon-leren.entry.js': [70031, 70031], './utrecht-icon-let-op.entry.js': [2474, 2474], './utrecht-icon-linkedin.entry.js': [41881, 41881], './utrecht-icon-list-check.entry.js': [27134, 27134], './utrecht-icon-list-number.entry.js': [81051, 81051], './utrecht-icon-list.entry.js': [63659, 63659], './utrecht-icon-loupe.entry.js': [85847, 85847], './utrecht-icon-markt.entry.js': [30477, 30477], './utrecht-icon-mastodon.entry.js': [64769, 64769], './utrecht-icon-melding-boom.entry.js': [91165, 91165], './utrecht-icon-melding-klacht.entry.js': [37284, 37284], './utrecht-icon-melding-openbareruimte.entry.js': [7819, 7819], './utrecht-icon-melding-verlichting.entry.js': [56046, 56046], './utrecht-icon-melding.entry.js': [20985, 20985], './utrecht-icon-menselijk.entry.js': [77475, 77475], './utrecht-icon-menu-dot-open.entry.js': [70136, 70136], './utrecht-icon-menu-dot.entry.js': [46538, 46538], './utrecht-icon-meterkast.entry.js': [923, 923], './utrecht-icon-milieu-ontheffing.entry.js': [91188, 5526], './utrecht-icon-milieu-zone.entry.js': [97780, 97780], './utrecht-icon-minus-vertical.entry.js': [47867, 47867], './utrecht-icon-minus.entry.js': [18033, 18033], './utrecht-icon-mobiliteit.entry.js': [68092, 68092], './utrecht-icon-natuur.entry.js': [36902, 36902], './utrecht-icon-nieuw-huis.entry.js': [89769, 89769], './utrecht-icon-nieuwsbrief.entry.js': [40060, 40060], './utrecht-icon-nummerbord.entry.js': [26495, 26495], './utrecht-icon-om-het-huis.entry.js': [10842, 10842], './utrecht-icon-omgeving.entry.js': [41162, 41162], './utrecht-icon-omgevingsvisie.entry.js': [21697, 21697], './utrecht-icon-omgevingswet.entry.js': [6868, 6868], './utrecht-icon-onderhoud.entry.js': [79530, 79530], './utrecht-icon-ondernemen.entry.js': [72034, 72034], './utrecht-icon-openingstijden.entry.js': [11601, 11601], './utrecht-icon-over-de-stad.entry.js': [3591, 3591], './utrecht-icon-overlijden.entry.js': [86968, 86968], './utrecht-icon-panden.entry.js': [8634, 8634], './utrecht-icon-park.entry.js': [4014, 4014], './utrecht-icon-parkeerkaart.entry.js': [88540, 88540], './utrecht-icon-parkeervergunning.entry.js': [63042, 63042], './utrecht-icon-parken.entry.js': [35312, 35312], './utrecht-icon-parkeren-bedrijven.entry.js': [87118, 87118], './utrecht-icon-parkeren-betaalautomaat.entry.js': [17285, 17285], './utrecht-icon-parkeren-betalen.entry.js': [48604, 23355], './utrecht-icon-parkeren.entry.js': [4555, 4555], './utrecht-icon-participatie-campagne.entry.js': [25039, 25039], './utrecht-icon-participatie-like.entry.js': [58755, 58755], './utrecht-icon-participatie-pitch.entry.js': [73122, 73122], './utrecht-icon-paspoort.entry.js': [80974, 80974], './utrecht-icon-presentatie.entry.js': [94618, 94618], './utrecht-icon-prijskaartje.entry.js': [66499, 66499], './utrecht-icon-read-aloud.entry.js': [19374, 19374], './utrecht-icon-rijbewijs.entry.js': [54730, 54730], './utrecht-icon-rioolheffing.entry.js': [770, 770], './utrecht-icon-rolstoel.entry.js': [63877, 63877], './utrecht-icon-schild-gemeente-utrecht.entry.js': [27300, 27300], './utrecht-icon-search.entry.js': [85186, 85186], './utrecht-icon-shoppen.entry.js': [99153, 99153], './utrecht-icon-sinterklaas.entry.js': [86463, 86463], './utrecht-icon-slechtziende-hoordende.entry.js': [5859, 5859], './utrecht-icon-sport-en-cultuur.entry.js': [11129, 11129], './utrecht-icon-sport-voetbal.entry.js': [40158, 40158], './utrecht-icon-sport.entry.js': [17490, 17490], './utrecht-icon-stookverbod.entry.js': [57970, 57970], './utrecht-icon-strand.entry.js': [27463, 27463], './utrecht-icon-strooien.entry.js': [18088, 18088], './utrecht-icon-subsidie-gezin.entry.js': [92078, 92078], './utrecht-icon-subsidie.entry.js': [5013, 5013], './utrecht-icon-t-shirt.entry.js': [3594, 3594], './utrecht-icon-threads.entry.js': [50966, 50966], './utrecht-icon-thuiswerken.entry.js': [56330, 56330], './utrecht-icon-toeslag.entry.js': [10013, 10013], './utrecht-icon-trein.entry.js': [93076, 93076], './utrecht-icon-trouwen.entry.js': [25130, 25130], './utrecht-icon-twitter.entry.js': [89472, 89472], './utrecht-icon-user.entry.js': [11275, 11275], './utrecht-icon-uw-wijk.entry.js': [77170, 77170], './utrecht-icon-vaccinatie.entry.js': [5362, 5362], './utrecht-icon-veilige-wijk.entry.js': [43144, 43144], './utrecht-icon-vergaderen.entry.js': [56439, 56439], './utrecht-icon-vergaderendigitaal.entry.js': [62307, 62307], './utrecht-icon-vergoeding.entry.js': [65389, 65389], './utrecht-icon-verhuizen.entry.js': [51358, 51358], './utrecht-icon-verkeerslicht.entry.js': [80816, 80816], './utrecht-icon-verkiezingen.entry.js': [87369, 87369], './utrecht-icon-verslaving.entry.js': [41954, 41954], './utrecht-icon-vervoersvoorziening.entry.js': [15956, 15956], './utrecht-icon-virus.entry.js': [25217, 25217], './utrecht-icon-vluchtelingen.entry.js': [12540, 24566], './utrecht-icon-voorzieningen-vervoer.entry.js': [77293, 77293], './utrecht-icon-vrijwilligerswerk.entry.js': [94230, 94230], './utrecht-icon-vuilnisbak.entry.js': [47050, 47050], './utrecht-icon-vuilniszak.entry.js': [87209, 87209], './utrecht-icon-vuurwerk.entry.js': [69081, 69081], './utrecht-icon-wandelstok.entry.js': [26380, 26380], './utrecht-icon-warm.entry.js': [25712, 25712], './utrecht-icon-warning.entry.js': [42252, 42252], './utrecht-icon-werken.entry.js': [20376, 20376], './utrecht-icon-werkzaamheden.entry.js': [68963, 68963], './utrecht-icon-whatsapp.entry.js': [64740, 64740], './utrecht-icon-wonen-kosten.entry.js': [70171, 70171], './utrecht-icon-woning-zoeken.entry.js': [4966, 4966], './utrecht-icon-x.entry.js': [71242, 71242], './utrecht-icon-youtube.entry.js': [3427, 3427], './utrecht-icon-zelfstandig-wonen.entry.js': [12034, 12034], './utrecht-icon-zoom-minus.entry.js': [92075, 92075], './utrecht-icon-zoom-plus.entry.js': [98679, 98679], './utrecht-icon-zoomin.entry.js': [8173, 8173], './utrecht-icon-zoomout.entry.js': [56702, 56702], './utrecht-icon-zorg-huis.entry.js': [14089, 14089], './utrecht-icon-zweefpaal.entry.js': [95181, 95181], './utrecht-icon-zwemmen.entry.js': [12029, 12029], './utrecht-logo-button.entry.js': [55748, 55748], './utrecht-map-marker.entry.js': [64202, 64202], './utrecht-multiline-data.entry.js': [33749, 33749], './utrecht-nav-bar.entry.js': [66111, 66111], './utrecht-number-badge.entry.js': [4138, 4138], './utrecht-page-body.entry.js': [6819, 6819], './utrecht-page-footer.entry.js': [2293, 2293], './utrecht-page-layout.entry.js': [21948, 21948], './utrecht-pagination.entry.js': [15046, 15046], './utrecht-preserve-data.entry.js': [43588, 43588], './utrecht-progress-list-item.entry.js': [18348, 18348], './utrecht-progress-list.entry.js': [25499, 25499], './utrecht-progress-sublist-item.entry.js': [72329, 72329], './utrecht-root.entry.js': [16417, 16417], './utrecht-sidenav.entry.js': [89108, 89108], './utrecht-surface.entry.js': [41601, 41601], './utrecht-table-body.entry.js': [40044, 40044], './utrecht-table-caption.entry.js': [98392, 98392], './utrecht-table-cell.entry.js': [68207, 68207], './utrecht-table-container.entry.js': [15512, 15512], './utrecht-table-footer.entry.js': [204, 204], './utrecht-table-header-cell.entry.js': [37759, 37759], './utrecht-table-header.entry.js': [54705, 54705], './utrecht-table-row.entry.js': [69816, 69816], './utrecht-table.entry.js': [27041, 27041], './utrecht-textarea.entry.js': [19078, 19078], './utrecht-textbox.entry.js': [98071, 98071], './utrecht-top-task-link.entry.js': [53366, 53366], './utrecht-top-task-nav.entry.js': [75836, 75836] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 3050), (e.exports = s);
  },
  35038: (e, t, n) => {
   'use strict';
   n.d(t, { Zb: () => c, aY: () => a, um: () => l, wu: () => o });
   var r = n(37943),
    s = n(4814),
    i = n(52676);
   const o = (e) => {
     let { background: t, children: n, className: r, ...o } = e;
     return (0, i.jsx)('div', { className: (0, s.Z)('card__illustration', t && `card__illustration--${t}`, r), ...o, children: n });
    },
    a = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: t, appearance: n, className: o, component: a = 'div', background: c, children: l } = e;
     const d = (e) => ('article' === a ? (0, i.jsx)('article', { ...e }) : 'section' === a ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      h = (0, i.jsx)(d, { className: (0, s.Z)('cardgroup__card', c && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, o), children: l });
     return t ? (0, i.jsx)(r.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: h }) : h;
    },
    l = (e) => {
     let { appearance: t = 'medium', children: n, className: r } = e;
     return (0, i.jsx)('div', { className: (0, s.Z)('cardgroup', `cardgroup--${t}`, r), children: n });
    };
  },
  6503: (e, t, n) => {
   'use strict';
   n.d(t, { W: () => u });
   var r = n(57229),
    s = n(51678),
    i = n(74824),
    o = n(70997),
    a = n(4814),
    c = n(75271),
    l = n(37943),
    d = n(52676);
   const h = (e) => {
     let { title: t, sc: n, component: l, tags: h } = e;
     const u = (0, c.useId)(),
      g = [...h];
     if (n) {
      g.push(n);
      const e = s.fg.get(n);
      e?.conformance && g.push(`Niveau ${e.conformance}`);
     }
     return (0, d.jsx)('li', {
      className: (0, a.Z)(
       'new-checklist__item',
       h.map((e) => `new-checklist__item--${e}`),
      ),
      children: (0, d.jsxs)('details', {
       children: [
        (0, d.jsx)('summary', { children: (0, d.jsx)('span', { className: 'new-checklist__title', id: u, children: t }) }),
        (0, d.jsxs)('div', {
         className: 'new-checklist__content',
         children: [
          (0, d.jsx)('div', { children: l }),
          (0, d.jsx)(i.k, {
           className: 'new-checklist__badge-list',
           children: g.map((e, t) => {
            let n = (0, d.jsx)(o.O, { children: e }, t);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const i = s.fg.get(e);
             n = (0, d.jsx)(r.r, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${i.sc} ${i.nl.title}`, style: { lineHeight: 1 }, children: (0, d.jsx)(o.O, { children: `WCAG ${e}` }) }, t);
            }
            return n;
           }),
          }),
         ],
        }),
       ],
      }),
     });
    },
    u = (e) => {
     let { items: t, headingLevel: n } = e;
     const r = t.reduce(
       (e, t) => (
        t.tags.forEach((t) => {
         e.add(t);
        }),
        e
       ),
       new Set(),
      ),
      [s, o] = (0, c.useState)(Array.from(r.values())),
      a = (e) => s.includes(e),
      u = (0, c.useId)(),
      g =
       s.length >= 1
        ? t.filter((e) => {
           let { tags: t } = e;
           return t.some((e) => s.includes(e));
          })
        : t,
      m = t.length - g.length;
     return (0, d.jsxs)('div', {
      children: [
       (0, d.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, d.jsxs)(l.pg, {
          'aria-describedby': 'filter-results',
          'aria-labelledby': u,
          children: [
           (0, d.jsx)(l.X6, { level: n, id: u, children: 'Filter acceptatiecriteria voor:' }),
           Array.from(r.values()).map((e) =>
            (0, d.jsxs)(
             l.Wi,
             {
              type: 'checkbox',
              children: [
               (0, d.jsx)(l.XZ, {
                defaultChecked: a(e),
                checked: a(e),
                id: e,
                onChange: () =>
                 ((e, t) => {
                  const n = ('boolean' == typeof t ? t : !a(e)) ? [...s, e] : s.filter((t) => t !== e);
                  o(n);
                 })(e),
               }),
               (0, d.jsx)(l.lX, { htmlFor: e, children: e }),
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
            (0, d.jsxs)('p', { role: 'status', children: [t.length - m, ' van de ', t.length, ' items zijn nu zichtbaar.'] }),
            m >= 1
             ? (0, d.jsx)(i.zx, {
                appearance: 'secondary-action-button',
                onClick: () => {
                 o(Array.from(r.values()));
                },
                children: 'Toon alles',
               })
             : (0, d.jsx)(d.Fragment, {}),
           ],
          }),
         }),
        ],
       }),
       (0, d.jsx)('ul', { className: 'new-checklist', role: 'list', children: g.map((e, t) => (0, d.jsx)(h, { ...e }, t)) }),
      ],
     });
    };
  },
  97520: (e, t, n) => {
   'use strict';
   n.d(t, { I: () => a });
   var r = n(57716),
    s = n(75271),
    i = n(14669),
    o = n(52676);
   const a = (e) => {
    let { component: t } = e;
    const { title: a } = t,
     c = (0, i.mA)(a),
     l = s.lazy(() => n(42767)(`./${c}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(s.Suspense, { fallback: null, children: (0, o.jsx)(r.U, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(l, {}) }) });
   };
  },
  76233: (e, t, n) => {
   'use strict';
   n.d(t, { B: () => d });
   var r = n(57716),
    s = n(4814),
    i = n(75271),
    o = n(14669),
    a = n(52676);
   const c = (e) => {
     let { children: t } = e;
     return (0, a.jsx)('ol', { className: 'nlds-anatomy-list', children: t });
    },
    l = (e) => {
     let { children: t } = e;
     return (0, a.jsx)('li', { className: 'nlds-anatomy-list__item', children: t });
    },
    d = (e) => {
     let { component: t, illustration: d } = e;
     const { title: h } = t,
      u = (0, o.mA)(h),
      g = i.lazy(() => n(22930)(`./${u}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, a.jsx)(i.Suspense, {
      fallback: null,
      children: (0, a.jsxs)('figure', {
       className: (0, s.Z)('component-anatomy'),
       children: [
        d && (0, a.jsx)(d, { height: null, className: (0, s.Z)('component-anatomy__illustration') }),
        d &&
         g &&
         (0, a.jsx)('figcaption', {
          children: (0, a.jsx)(r.U, {
           omitH1: !0,
           headingLevel: 1,
           components: {
            ol: (e) => {
             let { children: t } = e;
             return (0, a.jsx)(c, { children: t });
            },
            li: (e) => {
             let { children: t } = e;
             return (0, a.jsx)(l, { children: t });
            },
           },
           children: (0, a.jsx)(g, {}),
          }),
         }),
       ],
      }),
     });
    };
  },
  8657: (e, t, n) => {
   'use strict';
   n.d(t, { cN: () => x, vM: () => C, W: () => A, Rv: () => T });
   var r = n(74824),
    s = n(4814),
    i = n(39854),
    o = n(7522),
    a = n(62559),
    c = n(79734),
    l = n(32636),
    d = n(52676);
   const h = { figma: (0, d.jsx)(i.Z, {}), github: (0, d.jsx)(o.Z, {}), npm: (0, d.jsx)(a.Z, {}), storybook: (0, d.jsx)(c.Z, {}) },
    u = (e) => {
     let { brand: t } = e;
     return (0, d.jsx)(r.JO, { children: h[t] || (0, d.jsx)(l.Z, {}) });
    };
   var g = n(35038),
    m = n(28743);
   const p = (e) => {
    let { checked: t, unchecked: r } = e;
    return (0, d.jsx)(m.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = n(80912).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: t, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var j = n(23355),
    w = n(41757),
    y = n(37943),
    f = n(59954);
   const k = (e) => {
     let { children: t } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: t });
    },
    v = (e) => {
     let { checked: t, children: n, title: r, description: i, headingLevel: o = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, s.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, s.Z)('task-list-item__marker', t && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: t ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), t && (0, d.jsx)(f.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(y.X6, { appearance: 'utrecht-heading-3', level: o, children: r }), i, n] })] });
    };
   var b = n(14669);
   const x = (e) => {
     let { component: t, headingLevel: n } = e;
     const i = t && t.projects.filter((e) => b.e9.includes(e.id)),
      o = i && b.e9.map((e) => i.find((t) => t.id === e)).filter(Boolean);
     return (
      t &&
      (0, d.jsx)(r.a2, {
       sections: o.map((e) => ({
        className: (0, s.Z)('definition-of-done', e && `definition-of-done--${(0, b.mA)(e.title)}`),
        headingLevel: n,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(k, {
            children: e.tasks.map((e) => {
             let { checked: t, name: r, id: s } = e;
             return (0, d.jsx)(v, { headingLevel: n + 1, checked: t, title: r, description: (0, b.Q6)(s) }, s);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${t.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    A = (e) => {
     let { component: t, headingLevel: n } = e;
     const s = t && t.projects.filter((e) => !b.e9.includes(e.id));
     return t && s.length
      ? (0, d.jsx)(g.um, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: s
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const t = e.tasks.find((e) => {
             let { name: t } = e;
             return 'Naam' === t;
            }),
            s = t?.value,
            i = (0, b.ps)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            a = e.tasks.filter((e) => {
             let { name: t, value: n } = e;
             return o.has(t) && URL.canParse(n) && 'https:' === new URL(n).protocol;
            });
           return (0, d.jsx)(
            g.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(g.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (a.length > 0 || i.length > 0) && (0, d.jsx)(r.X6, { level: n + 1, children: 'Snel aan de slag' }),
               a.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.Mc, {
                  links: a
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const t = o.get(e.name);
                    return { children: t.desciption, icon: (0, d.jsx)(u, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               i.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: i.map((e) => {
                  let { frameworkName: t, tasks: i } = e;
                  return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.X6, { level: n + 2, children: [s, ' in ', t] }), (0, d.jsx)(r.Mc, { links: i.map((e) => ({ children: e.description, icon: (0, d.jsx)(u, { brand: e.brand }), href: e.value })) })] });
                 }),
                }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.nv, { children: 'Er zijn nog geen implementaties' });
    },
    C = (e) => {
     let { component: t } = e;
     const n = t?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', t.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [s ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', t.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortgang van ', t.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: t.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = (e) => {
     let { component: t, headingLevel: n, description: s } = e;
     const i = t && b.$3[t.relayStep];
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(w.V, { level: n, suffix: i && (0, d.jsx)(j.y, { state: i }), children: t.title }), (0, d.jsx)(r.nv, { lead: !0, children: s })] });
    };
  },
  49556: (e, t, n) => {
   'use strict';
   n.d(t, { W: () => T });
   var r = n(55410),
    s = n(70997),
    i = n(14669),
    o = n(37943),
    a = n(64642),
    c = n(93872),
    l = n(48231),
    d = n(75119),
    h = n(38548),
    u = n(74824),
    g = n(52676);
   function m(e) {
    let { children: t, content: n, language: r } = e;
    return 'clipboard' in navigator
     ? (0, g.jsxs)(o.zx, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await d.ZP.format(n, { parser: r, plugins: [a.Z, c.ZP, l.ZP] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [t, (0, g.jsx)(u.JO, { children: (0, g.jsx)(h.Z, {}) })],
       })
     : null;
   }
   var p = n(6076),
    j = n(32463),
    w = n(85904),
    y = n(86384),
    f = n(65012),
    k = n(31795),
    v = n(37923),
    b = n(49003),
    x = n(75271);
   const A = { color: p.Z, dimension: j.Z, fontFamilies: w.Z, fontSizes: y.Z, fontWeights: f.Z, lineHeights: k.Z, other: v.Z, textDecoration: b.Z },
    C = (e) => {
     let { type: t } = e;
     return (0, g.jsx)(u.JO, { children: (0, x.createElement)(A[t]) });
    };
   function T(e) {
    let { tokens: t } = e;
    const n = (0, i.s0)(t),
     a = (0, i.fO)(n),
     c = a.map((e) => (0, i.$e)(e) + ': ;').join('\n'),
     l = JSON.stringify((0, i.qU)(a));
    return (0, g.jsxs)(g.Fragment, {
     children: [
      (0, g.jsxs)(o.iA, {
       children: [
        (0, g.jsx)(o.xD, { children: (0, g.jsxs)(o.SC, { children: [(0, g.jsx)(o.xs, { children: 'name' }), (0, g.jsx)(o.xs, { children: 'type' })] }) }),
        (0, g.jsx)(o.RM, {
         children: a.map((e) => {
          const n = (0, i.zP)(e),
           a = (0, i.Yr)(t, e).$type;
          return (0, g.jsxs)(o.SC, { children: [(0, g.jsx)(o.pj, { children: (0, g.jsx)(r.E, { children: (0, g.jsx)(o.YG, { children: n }) }) }), (0, g.jsx)(o.pj, { children: (0, g.jsxs)(s.O, { children: [(0, g.jsx)(C, { type: a }), ' ', a] }) })] }, n);
         }),
        }),
       ],
      }),
      (0, g.jsxs)(o.hE, { children: [(0, g.jsx)(m, { content: l, language: 'json', children: 'Kopieer als JSON' }), (0, g.jsx)(m, { content: c, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  23355: (e, t, n) => {
   'use strict';
   n.d(t, { y: () => a });
   var r = n(37943),
    s = n(4814),
    i = n(14669),
    o = n(52676);
   const a = (e) => {
    let { state: t } = e;
    const n = (0, i.mA)(t);
    return (0, o.jsx)(r.Ou, { className: (0, s.Z)('estafette-badge', n && `estafette-badge--${n}`), children: t });
   };
  },
  41757: (e, t, n) => {
   'use strict';
   n.d(t, { V: () => i });
   var r = n(4814),
    s = n(52676);
   const i = (e) => {
    let { children: t, className: n, level: i = 1, suffix: o, ...a } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...a, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: t }), o && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57229: (e, t, n) => {
   'use strict';
   n.d(t, { r: () => o });
   var r = n(44679),
    s = n(4814),
    i = n(52676);
   const o = (e) => {
    let { className: t, ...n } = e;
    return (0, i.jsx)(r.Z, { className: (0, s.W)('utrecht-link', 'utrecht-link--html-a', t), ...n });
   };
  },
  57716: (e, t, n) => {
   'use strict';
   n.d(t, { U: () => d });
   var r = n(40139),
    s = n(37943),
    i = n(52676);
   const o = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: s } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + s;
     }
     return n.toString();
    },
    a = { 1: {}, 2: { h1: s.XJ, h2: s.aC, h3: s.k8, h4: s.by, h5: s.Cd }, 3: { h1: s.aC, h2: s.k8, h3: s.by, h4: s.Cd, h5: s.Cd }, 4: { h1: s.k8, h2: s.by, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 5: { h1: s.by, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 6: { h1: s.Cd, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd } },
    c = (e) => ({
     img: (t) => {
      let { src: n, ...r } = t;
      return (0, i.jsx)('img', { ...r, src: o(e, n), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, t) => {
     if (e) {
      const e = { ...a[t - 1] };
      return (e.h1 = () => null), e;
     }
     return a[t];
    },
    d = (e) => {
     let { children: t, omitH1: n = !1, headingLevel: s = 1, baseUrl: o = '', components: a = {} } = e;
     return (0, i.jsx)(r.Z, { components: { ...l(n, s), ...c(o), ...a }, children: t });
    };
  },
  51678: (e, t, n) => {
   'use strict';
   n.d(t, { fg: () => o });
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
    s = (new Map(r.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    i = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: t } = e;
      return !s.find((e) => e.sc === t);
     }),
    o = new Map(i.map((e) => [e.sc, e]));
  },
  14669: (e, t, n) => {
   'use strict';
   n.d(t, { $3: () => r, $e: () => j, BA: () => a, Ee: () => d, Q6: () => i, U: () => g, Yr: () => w, d: () => h, e9: () => o, fO: () => f, mA: () => s, ps: () => m, qU: () => k, s0: () => y, zP: () => p });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function c(e) {
    return Array.from(new Set(e));
   }
   const l = (e) => {
     const t = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular'];
     return [...e].sort((e, n) => t.indexOf(e) - t.indexOf(n));
    },
    d = (e) => {
     const t = e
      .flatMap((e) => {
       let { projects: t } = e;
       return t;
      })
      .flatMap((e) => u(e));
     return l(c(t));
    },
    h = (e, t) => g(e).includes(t),
    u = (e) => {
     const t = / URL \(([^)]+)\)/;
     return l(
      c(
       e.tasks
        .filter((e) => {
         let { name: n, value: r } = e;
         return '' !== r && t.test(n);
        })
        .map((e) => {
         let { name: n } = e;
         return t.exec(n)?.[1];
        }),
      ),
     );
    },
    g = (e) => l(c(e.projects.flatMap((e) => u(e)))),
    m = (e) => {
     const t = u(e),
      n = ((e) => {
       const t = e.tasks.find((e) => {
        let { name: t } = e;
        return 'Naam' === t;
       });
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter((e) => {
        let { name: n, value: r } = e;
        return '' !== r && n.includes(t);
       })
       .map((r) => {
        let { name: s, id: i, value: o } = r;
        const a = /^(.+) URL/.exec(s)[1],
         c = 'Storybook' === a ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${a}`;
        return { brand: a.toLowerCase(), name: s, id: i, value: o, description: c };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    p = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    w = (e, t) => t.reduce((e, t) => e?.[t], e);
   function y(e, t) {
    return void 0 === t && (t = []), Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? y(e[n], [...t, n]) : []));
   }
   function f(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, p(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function k(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) e[t] || (e[t] = {}), (e = e[t]);
    }
    return t;
   }
  },
  42767: (e, t, n) => {
   var r = { './code-block-docs/docs/aliases.md': [7546, 7546], './code-docs/docs/aliases.md': [43727, 43727], './color-sample-docs/docs/aliases.md': [15333, 15333], './data-badge-docs/docs/aliases.md': [30527, 30527], './heading-1-docs/docs/aliases.md': [48218, 35715], './heading-2-docs/docs/aliases.md': [68764, 68764], './heading-3-docs/docs/aliases.md': [62141, 62141], './heading-4-docs/docs/aliases.md': [2521, 2521], './heading-docs/docs/aliases.md': [44602, 44602], './link-docs/docs/aliases.md': [40725, 40725], './mark-docs/docs/aliases.md': [74069, 74069], './number-badge-docs/docs/aliases.md': [11039, 11039], './paragraph-docs/docs/aliases.md': [64503, 64503], './skip-link-docs/docs/aliases.md': [86161, 86161] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 42767), (e.exports = s);
  },
  22930: (e, t, n) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [85041, 85041], './code-docs/docs/anatomy/anatomy.md': [82977, 82977], './color-sample-docs/docs/anatomy/anatomy.md': [86555, 86555], './data-badge-docs/docs/anatomy/anatomy.md': [72447, 72447], './heading-1-docs/docs/anatomy/anatomy.md': [89810, 89810], './heading-2-docs/docs/anatomy/anatomy.md': [28262, 28262], './heading-3-docs/docs/anatomy/anatomy.md': [855, 855], './heading-4-docs/docs/anatomy/anatomy.md': [73912, 73912], './heading-5-docs/docs/anatomy/anatomy.md': [17734, 17734], './heading-6-docs/docs/anatomy/anatomy.md': [94497, 94497], './heading-docs/docs/anatomy/anatomy.md': [61505, 61505], './link-docs/docs/anatomy/anatomy.md': [57510, 57510], './mark-docs/docs/anatomy/anatomy.md': [27236, 27236], './number-badge-docs/docs/anatomy/anatomy.md': [47609, 47609], './paragraph-docs/docs/anatomy/anatomy.md': [7828, 7828], './skip-link-docs/docs/anatomy/anatomy.md': [90778, 90778] };
   function s(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     s = t[0];
    return n.e(t[1]).then(() => n(s));
   }
   (s.keys = () => Object.keys(r)), (s.id = 22930), (e.exports = s);
  },
 },
]);
