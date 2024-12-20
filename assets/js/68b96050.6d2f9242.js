(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [23221],
 {
  78187: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(87118);
   function i(e) {
    const t = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, r.jsxs)(t.p, { children: ['Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA, en voor ', (0, r.jsx)(t.a, { href: 'https://nldesignsystem.nl/wcag/2.5.5', children: '2.5.5 Grootte van het aanwijsgebied uitgebreid' }), ') AAA.'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  31573: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(87118);
   function i(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden." }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(t.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(t.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte;' }), '\n', (0, r.jsx)(t.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte;" }), '\n', (0, r.jsx)(t.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte;' }), '\n', (0, r.jsx)(t.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Dit is te testen met een ', (0, r.jsx)(t.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(t.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  53590: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(87118);
   function i(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(t.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  82959: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(87118);
   function i(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Als je de tekst vergroot tot 200% (via browserzoom en via de browserinstellingen voor tekstgrootte) blijft de tekst in zijn geheel zichtbaar.' }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsx)(t.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  64154: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(87118);
   function i(e) {
    const t = { code: 'code', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(t.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(t.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  93070: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => k, component: () => G, contentTitle: () => A, default: () => R, description: () => C, frontMatter: () => f, issueNumber: () => T, metadata: () => v, title: () => x, toc: () => b });
   var r = n(52676),
    s = n(87118),
    i = n(85731),
    o = n(78187),
    a = n(90799);
   function c(e) {
    const t = { code: 'code', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(t.p, { children: ['Zorg dat een alinea in een paragraaf-element staat. Gebruik geen ', (0, r.jsx)(t.code, { children: '<div>' }), ' of ', (0, r.jsx)(t.code, { children: '<span>' }), ' voor op zichzelf staande teksten.\nZelfs als geen CSS geladen kan worden, blijft de tekst dan duidelijk weergegeven.'] });
   }
   function l(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   var d = n(31573),
    h = n(53590),
    u = n(82959),
    g = n(64154),
    m = n(66015),
    p = n(97520),
    j = n(76233),
    w = n(55240),
    y = n(8657);
   const f = { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'] },
    A = void 0,
    v = { id: 'componenten/paragraph/index', title: 'Paragraph', description: 'Toont een alinea aan tekst.', source: '@site/docs/componenten/paragraph/index.mdx', sourceDirName: 'componenten/paragraph', slug: '/paragraph', permalink: '/paragraph', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/paragraph/index.mdx', tags: [{ label: 'Community', permalink: '/tags/community' }], version: 'current', frontMatter: { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', slug: '/paragraph', tags: ['Community'] }, sidebar: 'componenten', previous: { title: 'Pagination', permalink: '/pagination' }, next: { title: 'Password Input', permalink: '/password-input' } },
    k = {},
    b = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Gebruik deze component', id: 'gebruik-deze-component', level: 2 },
     { value: 'CSS', id: 'css', level: 3 },
     { value: 'React', id: 'react', level: 3 },
     { value: 'Figma', id: 'figma', level: 3 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    x = 'Paragraph',
    C = 'De paragraph gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.',
    T = 115,
    G = i.find((e) => e.number === T);
   function z(e) {
    const t = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', p: 'p', pre: 'pre', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, r.jsx)(y.Rv, { component: G, headingLevel: 1, description: C }),
      '\n',
      (0, r.jsx)(p.I, { component: G }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, r.jsx)(j.B, { component: G, illustration: a.Z }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'gebruik-deze-component', children: 'Gebruik deze component' }),
      '\n',
      (0, r.jsx)(t.h3, { id: 'css', children: 'CSS' }),
      '\n',
      (0, r.jsx)(t.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }),
      '\n',
      (0, r.jsxs)(t.p, { children: [(0, r.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css', children: [(0, r.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fparagraph-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/paragraph-css'] }), '\nversie 2.'] }),
      '\n',
      (0, r.jsxs)(t.p, { children: ['Gebruik de ', (0, r.jsx)(t.code, { children: 'nl-paragraph' }), ' class name op een ', (0, r.jsx)(t.code, { children: 'p' }), ' element:'] }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<p class="nl-paragraph">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</p>\n' }) }),
      '\n',
      (0, r.jsxs)(t.p, { children: ['Voor de Lead Paragraph gebruik je de extra class name ', (0, r.jsx)(t.code, { children: 'nl-paragraph--lead' }), ':'] }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<p class="nl-paragraph nl-paragraph--lead">\n  Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx. Je gelooft nooit wat er toen gebeurde!\n</p>\n' }) }),
      '\n',
      (0, r.jsx)(t.p, { children: 'Je kunt de CSS zo in je project installeren:' }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-css\n' }) }),
      '\n',
      (0, r.jsx)(t.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/paragraph-css@2/dist/paragraph.css"\n/>\n' }) }),
      '\n',
      (0, r.jsxs)(t.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, r.jsx)(t.code, { children: 'node_modules/' }), ' importeren:'] }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/paragraph-css@2/dist/paragraph.css" />\n' }) }),
      '\n',
      (0, r.jsx)(t.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/paragraph-css/paragraph.css";\n' }) }),
      '\n',
      (0, r.jsx)(t.h3, { id: 'react', children: 'React' }),
      '\n',
      (0, r.jsx)(t.p, { children: 'De React component is gepubliceerd in een npm package:' }),
      '\n',
      (0, r.jsxs)(t.p, { children: [(0, r.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-react', children: [(0, r.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fparagraph-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/paragraph-react'] }), '\nversie 2.'] }),
      '\n',
      (0, r.jsx)(t.p, { children: 'Je kunt de npm package zo installeren:' }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-react\n' }) }),
      '\n',
      (0, r.jsx)(t.p, { children: 'Je kunt de React component zo gebruiken:' }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-jsx', children: 'import { Paragraph } from "@nl-design-system-candidate/paragraph-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Paragraph>Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n      </body>\n    </html>\n  );\n};\n' }) }),
      '\n',
      (0, r.jsx)(t.p, { children: 'De Lead Paragraph werkt zo:' }),
      '\n',
      (0, r.jsx)(t.p, { children: 'Je kunt de React component zo gebruiken:' }),
      '\n',
      (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-jsx', children: '<Paragraph purpose="lead">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n' }) }),
      '\n',
      (0, r.jsx)(t.h3, { id: 'figma', children: 'Figma' }),
      '\n',
      (0, r.jsxs)(t.p, { children: ['De Figma component staat in ', (0, r.jsx)(t.a, { href: 'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=150-734&node-type=canvas&t=SxsN8cwA5f9cXqQx-0', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Paragraph' }), '.'] }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, r.jsx)(y.cN, { component: G, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'implementaties', children: 'Implementaties' }),
      '\n',
      (0, r.jsx)(y.W, { component: G, headingLevel: 3 }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }),
      '\n',
      (0, r.jsx)(o.ZP, {}),
      '\n',
      (0, r.jsx)(w.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid algemeen',
       items: [
        { title: 'Gebruik het p-element voor paragraaftekst', sc: '1.3.1', status: '', component: (0, r.jsx)(l, {}) },
        { title: 'Als een paragraaftekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode', sc: '3.1.2', status: '', component: (0, r.jsx)(g.ZP, {}) },
       ],
      }),
      '\n',
      (0, r.jsx)(w.t, { headingLevel: 4, testCategory: 'Toegankelijkheid visueel ontwerp', items: [{ title: 'De contrastverhouding van de tekstkleur van de paragraaf met de achtergrondkleur is hoog genoeg', sc: '1.4.3', status: '', component: (0, r.jsx)(h.ZP, {}) }] }),
      '\n',
      (0, r.jsx)(w.t, {
       headingLevel: 4,
       testCategory: 'Toegankelijkheid zoom en herschalen',
       items: [
        { title: 'Als je de paragraaftekst vergroot tot 200% blijft deze in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: (0, r.jsx)(u.ZP, {}) },
        { title: 'Als je de hele webpagina inzoomt tot 400% blijft de paragraaftekst leesbaar', sc: '1.4.10', status: '', component: (0, r.jsx)(m.ZP, {}) },
        { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: (0, r.jsx)(d.ZP, {}) },
       ],
      }),
      '\n',
      (0, r.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, r.jsx)(y.vM, { component: G, headingLevel: 3 }),
     ],
    });
   }
   function R(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(z, { ...e }) }) : z(e);
   }
  },
  66015: (e, t, n) => {
   'use strict';
   n.d(t, { ZP: () => o });
   var r = n(52676),
    s = n(87118);
   function i(e) {
    const t = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(t.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, r.jsx)(t.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 CSS).' }), '\n', (0, r.jsx)(t.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals bijvoorbeeld: tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsx)(t.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.' })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  98507: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [99612, 99612], './utrecht-backdrop.entry.js': [191, 191], './utrecht-breadcrumb-nav.entry.js': [95643, 95643], './utrecht-checkbox.entry.js': [41865, 41865], './utrecht-column-layout.entry.js': [11868, 11868], './utrecht-contact-card-template.entry.js': [83069, 83069], './utrecht-custom-checkbox.entry.js': [64916, 64916], './utrecht-data-list-actions.entry.js': [27897, 27897], './utrecht-data-list-item.entry.js': [63619, 63619], './utrecht-data-list-key.entry.js': [5503, 5503], './utrecht-data-list-value.entry.js': [5183, 5183], './utrecht-data-list.entry.js': [17399, 17399], './utrecht-digid-button.entry.js': [36383, 36383], './utrecht-digid-logo.entry.js': [76975, 76975], './utrecht-eherkenning-logo.entry.js': [6453, 6453], './utrecht-eidas-logo.entry.js': [48911, 48911], './utrecht-form-field-error-message.entry.js': [59077, 59077], './utrecht-form-toggle.entry.js': [77346, 77346], './utrecht-html-content.entry.js': [77160, 77160], './utrecht-icon-afspraak-maken.entry.js': [82758, 82758], './utrecht-icon-afval-container.entry.js': [99748, 99748], './utrecht-icon-afval-containerpas.entry.js': [87122, 87122], './utrecht-icon-afval-kalender.entry.js': [44408, 44408], './utrecht-icon-afval-pmd.entry.js': [30590, 30590], './utrecht-icon-afval-scheiden.entry.js': [52052, 52052], './utrecht-icon-afval.entry.js': [51073, 51073], './utrecht-icon-afvalkalender.entry.js': [61043, 61043], './utrecht-icon-alleen.entry.js': [9137, 9137], './utrecht-icon-arrow.entry.js': [9698, 9698], './utrecht-icon-auto.entry.js': [37949, 37949], './utrecht-icon-begroting.entry.js': [22552, 22552], './utrecht-icon-bestemmingsplan.entry.js': [54782, 54782], './utrecht-icon-betaaldatum.entry.js': [40398, 40398], './utrecht-icon-bewijsstukken.entry.js': [4859, 4859], './utrecht-icon-bijstand.entry.js': [1813, 1813], './utrecht-icon-blad.entry.js': [32273, 32273], './utrecht-icon-bouwproject.entry.js': [68732, 68732], './utrecht-icon-brandgevaar.entry.js': [85576, 85576], './utrecht-icon-brief-betalen.entry.js': [6416, 6416], './utrecht-icon-checkmark.entry.js': [80180, 80180], './utrecht-icon-chevron-down.entry.js': [37822, 37822], './utrecht-icon-chevron-left.entry.js': [47567, 47567], './utrecht-icon-chevron-right.entry.js': [80431, 80431], './utrecht-icon-chevron-up.entry.js': [78767, 78767], './utrecht-icon-close.entry.js': [93658, 93658], './utrecht-icon-college-b-w.entry.js': [5132, 5132], './utrecht-icon-container-bio.entry.js': [8353, 8353], './utrecht-icon-container-glas.entry.js': [95483, 95483], './utrecht-icon-container-groenafval.entry.js': [39280, 39280], './utrecht-icon-container-met-zak.entry.js': [12825, 12825], './utrecht-icon-container-papier.entry.js': [43897, 43897], './utrecht-icon-container-pmd.entry.js': [12335, 12335], './utrecht-icon-container-restafval.entry.js': [74123, 74123], './utrecht-icon-container-textiel.entry.js': [54807, 54807], './utrecht-icon-container.entry.js': [98078, 98078], './utrecht-icon-cross.entry.js': [86788, 86788], './utrecht-icon-dakloos.entry.js': [15285, 15285], './utrecht-icon-dementie.entry.js': [87989, 87989], './utrecht-icon-documenten.entry.js': [38391, 38391], './utrecht-icon-duurzaam.entry.js': [87714, 87714], './utrecht-icon-eenzaamheid.entry.js': [85512, 85512], './utrecht-icon-eikenprocessie.entry.js': [7650, 7650], './utrecht-icon-elektrisch-rijden.entry.js': [75634, 75634], './utrecht-icon-energie-vergoeding.entry.js': [77197, 77197], './utrecht-icon-energietransitie.entry.js': [39032, 39032], './utrecht-icon-error.entry.js': [66684, 66684], './utrecht-icon-evenementen.entry.js': [16, 16], './utrecht-icon-facebook.entry.js': [96252, 96252], './utrecht-icon-fiets.entry.js': [86846, 86846], './utrecht-icon-filter.entry.js': [76417, 76417], './utrecht-icon-geboorte.entry.js': [77112, 77112], './utrecht-icon-gebruiker-centraal.entry.js': [14040, 14040], './utrecht-icon-gebruiker-ingelogd.entry.js': [69088, 69088], './utrecht-icon-gegevenswoordenboek.entry.js': [98552, 98552], './utrecht-icon-geluid.entry.js': [56042, 56042], './utrecht-icon-gemeente-locatie.entry.js': [51295, 51295], './utrecht-icon-gemeenteraad.entry.js': [73738, 73738], './utrecht-icon-gereedschap.entry.js': [11758, 11758], './utrecht-icon-gezicht.entry.js': [45251, 45251], './utrecht-icon-gezin.entry.js': [31054, 31559], './utrecht-icon-glas-afval.entry.js': [36827, 36827], './utrecht-icon-glijbaan.entry.js': [64246, 64246], './utrecht-icon-grafiek.entry.js': [8038, 8038], './utrecht-icon-grofvuil-ophalen.entry.js': [53455, 53455], './utrecht-icon-grofvuil.entry.js': [97402, 97402], './utrecht-icon-hamburger-menu.entry.js': [96403, 96403], './utrecht-icon-herdenking.entry.js': [21537, 21537], './utrecht-icon-hondenbelasting.entry.js': [2587, 2587], './utrecht-icon-horeca.entry.js': [42583, 42583], './utrecht-icon-horecavergunning.entry.js': [76720, 76720], './utrecht-icon-huis-en-omgeving.entry.js': [70389, 70389], './utrecht-icon-huis.entry.js': [74718, 74718], './utrecht-icon-huishoudelijk-geweld.entry.js': [71742, 71742], './utrecht-icon-hulp-huishouden.entry.js': [15743, 15743], './utrecht-icon-hulp-vervoer.entry.js': [64536, 64536], './utrecht-icon-hulp-zorg.entry.js': [20600, 20600], './utrecht-icon-hulpmiddelen-gezin.entry.js': [78043, 78043], './utrecht-icon-hulpverlening.entry.js': [33031, 33031], './utrecht-icon-idee.entry.js': [83921, 83921], './utrecht-icon-informatie.entry.js': [70196, 70196], './utrecht-icon-information.entry.js': [85103, 85103], './utrecht-icon-innovatie.entry.js': [57154, 57154], './utrecht-icon-inspraak-inwoners.entry.js': [47395, 47395], './utrecht-icon-instagram.entry.js': [20876, 20876], './utrecht-icon-kalender.entry.js': [66077, 66077], './utrecht-icon-kennis.entry.js': [80033, 80033], './utrecht-icon-kerstbomen.entry.js': [31714, 31714], './utrecht-icon-klachten.entry.js': [17400, 17400], './utrecht-icon-kroon.entry.js': [90589, 90589], './utrecht-icon-laadpaal.entry.js': [29065, 29065], './utrecht-icon-language.entry.js': [66689, 66689], './utrecht-icon-lantaarnpaal-oud.entry.js': [32607, 32607], './utrecht-icon-lantaarnpaal.entry.js': [10601, 10601], './utrecht-icon-leren.entry.js': [66234, 66234], './utrecht-icon-let-op.entry.js': [87315, 87315], './utrecht-icon-linkedin.entry.js': [94398, 94398], './utrecht-icon-list-check.entry.js': [40870, 40870], './utrecht-icon-list-number.entry.js': [28720, 28720], './utrecht-icon-list.entry.js': [65300, 65300], './utrecht-icon-loupe.entry.js': [97618, 97618], './utrecht-icon-markt.entry.js': [47171, 47171], './utrecht-icon-melding-boom.entry.js': [38023, 38023], './utrecht-icon-melding-klacht.entry.js': [60266, 60266], './utrecht-icon-melding-openbareruimte.entry.js': [41320, 41320], './utrecht-icon-melding-verlichting.entry.js': [80027, 80027], './utrecht-icon-melding.entry.js': [19928, 19928], './utrecht-icon-menselijk.entry.js': [26939, 26939], './utrecht-icon-menu-dot-open.entry.js': [407, 407], './utrecht-icon-menu-dot.entry.js': [69162, 69162], './utrecht-icon-meterkast.entry.js': [1176, 1176], './utrecht-icon-milieu-ontheffing.entry.js': [19679, 19679], './utrecht-icon-milieu-zone.entry.js': [52671, 52671], './utrecht-icon-minus-vertical.entry.js': [653, 653], './utrecht-icon-minus.entry.js': [81403, 81403], './utrecht-icon-mobiliteit.entry.js': [97788, 97788], './utrecht-icon-natuur.entry.js': [31377, 31377], './utrecht-icon-nieuw-huis.entry.js': [78740, 78740], './utrecht-icon-nieuwsbrief.entry.js': [22097, 22097], './utrecht-icon-nummerbord.entry.js': [56251, 56251], './utrecht-icon-om-het-huis.entry.js': [77372, 77372], './utrecht-icon-omgeving.entry.js': [27917, 27917], './utrecht-icon-omgevingsvisie.entry.js': [51285, 51285], './utrecht-icon-omgevingswet.entry.js': [18287, 18287], './utrecht-icon-onderhoud.entry.js': [42629, 42629], './utrecht-icon-ondernemen.entry.js': [84131, 84131], './utrecht-icon-openingstijden.entry.js': [50640, 50640], './utrecht-icon-over-de-stad.entry.js': [3350, 3350], './utrecht-icon-overlijden.entry.js': [29052, 29052], './utrecht-icon-panden.entry.js': [73874, 73874], './utrecht-icon-park.entry.js': [62396, 62396], './utrecht-icon-parkeerkaart.entry.js': [67e3, 67e3], './utrecht-icon-parkeervergunning.entry.js': [53164, 54866], './utrecht-icon-parken.entry.js': [51831, 51831], './utrecht-icon-parkeren-bedrijven.entry.js': [30200, 30200], './utrecht-icon-parkeren-betaalautomaat.entry.js': [8568, 8568], './utrecht-icon-parkeren-betalen.entry.js': [87733, 87733], './utrecht-icon-parkeren.entry.js': [20030, 20030], './utrecht-icon-participatie-campagne.entry.js': [34913, 34913], './utrecht-icon-participatie-like.entry.js': [38139, 38139], './utrecht-icon-participatie-pitch.entry.js': [11063, 11063], './utrecht-icon-paspoort.entry.js': [23249, 23249], './utrecht-icon-presentatie.entry.js': [21904, 21904], './utrecht-icon-prijskaartje.entry.js': [35137, 35137], './utrecht-icon-read-aloud.entry.js': [65225, 65225], './utrecht-icon-rijbewijs.entry.js': [77863, 77863], './utrecht-icon-rioolheffing.entry.js': [34030, 34030], './utrecht-icon-rolstoel.entry.js': [25514, 25514], './utrecht-icon-schild-gemeente-utrecht.entry.js': [80627, 80627], './utrecht-icon-search.entry.js': [48233, 48233], './utrecht-icon-shoppen.entry.js': [93607, 93607], './utrecht-icon-sinterklaas.entry.js': [69869, 69869], './utrecht-icon-slechtziende-hoordende.entry.js': [26489, 26489], './utrecht-icon-sport-en-cultuur.entry.js': [45330, 45330], './utrecht-icon-sport-voetbal.entry.js': [43350, 43350], './utrecht-icon-sport.entry.js': [18842, 18842], './utrecht-icon-stookverbod.entry.js': [87544, 87544], './utrecht-icon-strand.entry.js': [8824, 8824], './utrecht-icon-strooien.entry.js': [21764, 21764], './utrecht-icon-subsidie-gezin.entry.js': [12795, 12795], './utrecht-icon-subsidie.entry.js': [74362, 74362], './utrecht-icon-t-shirt.entry.js': [63424, 63424], './utrecht-icon-thuiswerken.entry.js': [45784, 45784], './utrecht-icon-toeslag.entry.js': [74545, 74545], './utrecht-icon-trein.entry.js': [88369, 88369], './utrecht-icon-trouwen.entry.js': [76990, 76990], './utrecht-icon-twitter.entry.js': [35149, 35149], './utrecht-icon-user.entry.js': [19878, 19878], './utrecht-icon-uw-wijk.entry.js': [45596, 45596], './utrecht-icon-vaccinatie.entry.js': [8305, 8305], './utrecht-icon-veilige-wijk.entry.js': [49973, 49973], './utrecht-icon-vergaderen.entry.js': [74755, 74755], './utrecht-icon-vergaderendigitaal.entry.js': [19918, 19918], './utrecht-icon-vergoeding.entry.js': [61950, 61950], './utrecht-icon-verhuizen.entry.js': [64874, 64874], './utrecht-icon-verkeerslicht.entry.js': [85865, 85865], './utrecht-icon-verkiezingen.entry.js': [82844, 82844], './utrecht-icon-verslaving.entry.js': [45363, 45363], './utrecht-icon-vervoersvoorziening.entry.js': [45210, 45210], './utrecht-icon-virus.entry.js': [79680, 79680], './utrecht-icon-vluchtelingen.entry.js': [87776, 87776], './utrecht-icon-voorzieningen-vervoer.entry.js': [80081, 80081], './utrecht-icon-vrijwilligerswerk.entry.js': [63802, 63802], './utrecht-icon-vuilnisbak.entry.js': [21374, 21374], './utrecht-icon-vuilniszak.entry.js': [29190, 29190], './utrecht-icon-vuurwerk.entry.js': [74652, 74652], './utrecht-icon-wandelstok.entry.js': [30982, 30982], './utrecht-icon-warm.entry.js': [97377, 97377], './utrecht-icon-warning.entry.js': [44075, 44075], './utrecht-icon-werken.entry.js': [59390, 59390], './utrecht-icon-werkzaamheden.entry.js': [51112, 51112], './utrecht-icon-whatsapp.entry.js': [26039, 26039], './utrecht-icon-wonen-kosten.entry.js': [18118, 18118], './utrecht-icon-woning-zoeken.entry.js': [29197, 29197], './utrecht-icon-x.entry.js': [19362, 19362], './utrecht-icon-youtube.entry.js': [20187, 20187], './utrecht-icon-zelfstandig-wonen.entry.js': [61393, 61393], './utrecht-icon-zoom-minus.entry.js': [50545, 50545], './utrecht-icon-zoom-plus.entry.js': [68278, 68278], './utrecht-icon-zoomin.entry.js': [25870, 25870], './utrecht-icon-zoomout.entry.js': [48005, 48005], './utrecht-icon-zorg-huis.entry.js': [7463, 7463], './utrecht-icon-zweefpaal.entry.js': [66426, 66426], './utrecht-icon-zwemmen.entry.js': [47566, 47566], './utrecht-logo-button.entry.js': [54250, 54250], './utrecht-map-marker.entry.js': [99319, 99319], './utrecht-multiline-data.entry.js': [13746, 13746], './utrecht-page-footer.entry.js': [2950, 2950], './utrecht-pagination.entry.js': [50370, 50370], './utrecht-progress-list-item.entry.js': [34351, 34351], './utrecht-progress-list.entry.js': [25989, 25989], './utrecht-progress-sublist-item.entry.js': [48316, 48316], './utrecht-sidenav.entry.js': [78510, 78510], './utrecht-surface.entry.js': [89905, 89905], './utrecht-table-body.entry.js': [92786, 92786], './utrecht-table-caption.entry.js': [66250, 24469], './utrecht-table-cell.entry.js': [75028, 75028], './utrecht-table-footer.entry.js': [78800, 78800], './utrecht-table-header-cell.entry.js': [99930, 99930], './utrecht-table-header.entry.js': [10472, 10472], './utrecht-table-row.entry.js': [45872, 45872], './utrecht-table.entry.js': [42176, 42176], './utrecht-textarea.entry.js': [41192, 41192], './utrecht-textbox.entry.js': [88451, 88451] };
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
   (s.keys = () => Object.keys(r)), (s.id = 98507), (e.exports = s);
  },
  35038: (e, t, n) => {
   'use strict';
   n.d(t, { Zb: () => c, aY: () => a, um: () => l, wu: () => o });
   var r = n(31916),
    s = n(4814),
    i = n(52676);
   const o = (e) => {
     let { background: t, children: n, className: r, ...o } = e;
     return (0, i.jsx)('div', { className: (0, s.Z)('card__illustration', t && 'card__illustration--background', r), ...o, children: n });
    },
    a = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: t, appearance: n, className: o, component: a = 'div', children: c } = e;
     const l = (e) => ('article' === a ? (0, i.jsx)('article', { ...e }) : 'section' === a ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(l, { className: (0, s.Z)('cardgroup__card', `cardgroup__card--${n}`, o), children: c });
     return t ? (0, i.jsx)(r.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = (e) => {
     let { appearance: t = 'medium', children: n, className: r } = e;
     return (0, i.jsx)('div', { className: (0, s.Z)('cardgroup', `cardgroup--${t}`, r), children: n });
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
  55240: (e, t, n) => {
   'use strict';
   n.d(t, { t: () => h });
   var r = n(31916);
   const s = [
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
    i = (new Map(s.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    o = [...s.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }]
     .map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') }))
     .filter((e) => {
      let { sc: t } = e;
      return !i.find((e) => e.sc === t);
     }),
    a = new Map(o.map((e) => [e.sc, e]));
   var c = n(95674),
    l = n(52676);
   const d = (e) => {
     let { title: t, sc: n, status: s, component: i, headingLevel: o = 4 } = e;
     const c = a.get(n),
      d = c ? `${n} ${c.nl?.title}` : n;
     return (0, l.jsxs)('div', { className: 'component-criteria-section', children: [(0, l.jsx)(r.X6, { appearance: 'utrecht-heading-4', level: o, className: 'component-criteria-section__heading', children: t }), (n || s) && (0, l.jsxs)('dl', { className: 'component-criteria-section__dl', children: [n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'WCAG' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dd', children: (0, l.jsx)(r.rU, { href: `/wcag/${n}`, children: d }) })] }), s && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('dt', { className: 'component-criteria-section__dt', children: 'Status' }), (0, l.jsx)('dd', { className: 'component-criteria-section__dl', children: s })] })] }), i] });
    },
    h = (e) => {
     let { testCategory: t, items: n } = e;
     return (0, l.jsx)(c.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 2, expanded: !1, label: (0, l.jsx)('span', { children: t }), body: n.map((e, t) => (0, l.jsx)(d, { ...e }, t)) }] });
    };
  },
  8657: (e, t, n) => {
   'use strict';
   n.d(t, { cN: () => b, vM: () => C, W: () => x, Rv: () => T });
   var r = n(95674),
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
    m = n(76193);
   const p = (e) => {
    let { checked: t, unchecked: r } = e;
    return (0, d.jsx)(m.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = n(79333).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--component-progress-background-color--checked, currentColor)', key: 'Done', value: t, stroke: '2' },
        { fill: 'var(--component-progress-background-color--unchecked, #ddd)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var j = n(23355),
    w = n(41757),
    y = n(31916),
    f = n(25953);
   const A = (e) => {
     let { children: t } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: t });
    },
    v = (e) => {
     let { checked: t, children: n, title: r, description: i, headingLevel: o = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, s.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, s.Z)('task-list-item__marker', t && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: t ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), t && (0, d.jsx)(f.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(y.X6, { appearance: 'utrecht-heading-3', level: o, children: r }), i, n] })] });
    };
   var k = n(14669);
   const b = (e) => {
     let { component: t, headingLevel: n } = e;
     const i = t && t.projects.filter((e) => k.e9.includes(e.id)),
      o = i && k.e9.map((e) => i.find((t) => t.id === e)).filter(Boolean);
     return (
      t &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: o.map((e) => ({
        className: (0, s.Z)('definition-of-done', e && `definition-of-done--${(0, k.mA)(e.title)}`),
        headingLevel: n,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(A, {
            children: e.tasks.map((e) => {
             let { checked: t, name: r, id: s } = e;
             return (0, d.jsx)(v, { headingLevel: n + 1, checked: t, title: r, description: (0, k.Q6)(s) }, s);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${t.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    x = (e) => {
     let { component: t, headingLevel: n } = e;
     const s = t && t.projects.filter((e) => !k.e9.includes(e.id));
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
            i = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${s} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${s} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${s} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter((e) => {
             let { name: t, value: n } = e;
             return i.has(t) && URL.canParse(n) && 'https:' === new URL(n).protocol;
            });
           return (0, d.jsx)(
            g.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(g.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: n, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               o.length > 0 &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: n + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: o.map((e) => {
                    const t = i.get(e.name);
                    return t ? (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: t.brand }), ' ', t.desciption] }, e.id) : (0, d.jsx)(d.Fragment, {});
                   }),
                  }),
                 ],
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
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', t.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [s ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', t.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortang van ', t.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: t.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = (e) => {
     let { component: t, headingLevel: n, description: s } = e;
     const i = t && k.$3[t.relayStep];
     return t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(w.V, { level: n, suffix: i && (0, d.jsx)(j.y, { state: i }), children: t.title }), (0, d.jsx)(r.nv, { lead: !0, children: s })] });
    };
  },
  23355: (e, t, n) => {
   'use strict';
   n.d(t, { y: () => a });
   var r = n(31916),
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
  57716: (e, t, n) => {
   'use strict';
   n.d(t, { U: () => d });
   var r = n(87118),
    s = n(31916),
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
  14669: (e, t, n) => {
   'use strict';
   n.d(t, { $3: () => r, BA: () => a, Q6: () => i, e9: () => o, mA: () => s });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
  42767: (e, t, n) => {
   var r = { './code-block-docs/docs/aliases.md': [33272, 33272], './code-docs/docs/aliases.md': [45077, 45077], './color-sample-docs/docs/aliases.md': [16992, 16992], './data-badge-docs/docs/aliases.md': [594, 594], './heading-1-docs/docs/aliases.md': [53016, 53016], './heading-2-docs/docs/aliases.md': [85698, 85698], './heading-3-docs/docs/aliases.md': [87232, 87232], './heading-4-docs/docs/aliases.md': [8683, 8683], './heading-docs/docs/aliases.md': [71918, 71918], './link-docs/docs/aliases.md': [63694, 63694], './mark-docs/docs/aliases.md': [69269, 69269], './number-badge-docs/docs/aliases.md': [40519, 40519], './paragraph-docs/docs/aliases.md': [47096, 47096], './skip-link-docs/docs/aliases.md': [71218, 71218] };
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
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [7231, 7231], './code-docs/docs/anatomy/anatomy.md': [68449, 68449], './color-sample-docs/docs/anatomy/anatomy.md': [4853, 4853], './data-badge-docs/docs/anatomy/anatomy.md': [23242, 23242], './heading-1-docs/docs/anatomy/anatomy.md': [37039, 37039], './heading-2-docs/docs/anatomy/anatomy.md': [55167, 55167], './heading-3-docs/docs/anatomy/anatomy.md': [68844, 68844], './heading-4-docs/docs/anatomy/anatomy.md': [70868, 70868], './heading-5-docs/docs/anatomy/anatomy.md': [3549, 3549], './heading-6-docs/docs/anatomy/anatomy.md': [41448, 41448], './heading-docs/docs/anatomy/anatomy.md': [36472, 36472], './link-docs/docs/anatomy/anatomy.md': [96372, 96372], './mark-docs/docs/anatomy/anatomy.md': [9429, 9429], './number-badge-docs/docs/anatomy/anatomy.md': [31598, 31598], './paragraph-docs/docs/anatomy/anatomy.md': [48260, 48260], './skip-link-docs/docs/anatomy/anatomy.md': [54962, 54962] };
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
