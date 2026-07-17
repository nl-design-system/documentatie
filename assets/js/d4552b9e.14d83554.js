'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [70767],
 {
  5710(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, t.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, t.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, t.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, t.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, t.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  15042(e, n, r) {
   r.d(n, { p: () => a });
   var t = r(13526),
    i = r(86070);
   const a = ({ children: e, className: n, level: r = 1, suffix: a, ...o }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  17045(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => a });
   var t = r(86070),
    i = r(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  19776(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => a });
   var t = r(86070),
    i = r(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  24838(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, t.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  26655(e, n, r) {
   r.d(n, { AC: () => d, Fu: () => o, Wu: () => l, Zp: () => s });
   var t = r(46447),
    i = r(13526),
    a = r(86070);
   const o = ({ background: e, children: n, className: r, ...t }) => (0, a.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, r), ...t, children: n }),
    l = (e) => (0, a.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: n, className: r, component: o = 'div', background: l, children: s }) => {
     const d = (e) => ('article' === o ? (0, a.jsx)('article', { ...e }) : 'section' === o ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, r), children: s });
     return e ? (0, a.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: r }) => (0, a.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, r), children: n });
  },
  30940(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  31522(e, n, r) {
   r.d(n, { D: () => l });
   var t = r(46447),
    i = r(13526),
    a = r(76097),
    o = r(86070);
   const l = ({ state: e }) => {
    const n = (0, a.fX)(e);
    return (0, o.jsx)(t.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  34257(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, t.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, t.jsx)(n.code, { children: 'em' }), ' of ', (0, t.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, t.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  39948(e, n, r) {
   r.d(n, { r: () => g });
   var t = r(29181),
    i = r(74172),
    a = r(15089),
    o = r(28377),
    l = r(33648),
    s = r(83386),
    d = r(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(a.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(s.A, {}) });
  },
  40808(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => a });
   var t = r(86070),
    i = r(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  41887(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, t.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  44720(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => a });
   var t = r(86070),
    i = r(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46565(e, n, r) {
   r.d(n, { c: () => i });
   var t = r(30758);
   function i() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  51627(e, n, r) {
   r.d(n, { K: () => s, n: () => l });
   var t = r(13526),
    i = r(96345),
    a = r(37168),
    o = r(86070);
   const l = ({ className: e, ...n }) => {
     const r = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: r, children: n.children });
    },
    s = ({ className: e, label: n, heading: r, headingLevel: l, headingApperance: s, ...d }) => {
     const c = (0, t.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: c, ...d, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(i.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [r && (0, o.jsx)(a.D, { level: l, appearance: s, children: r }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: d.children })] });
    };
  },
  55552(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, t.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, t.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, t.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  56167(e, n, r) {
   r.d(n, { VK: () => f, $9: () => b, mu: () => x, Fc: () => v, K_: () => k });
   var t = r(29181),
    i = r(13526),
    a = r(39948),
    o = r(26655),
    l = r(46565);
   function s(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = r(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(s, {
     children: () => {
      const t = r(83294).V6;
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
   var g = r(31522),
    u = r(15042),
    m = r(58876),
    p = r(76097);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = r(51627);
   const f = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => p.f4.includes(e.id)),
      a = r && p.f4.map((e) => r.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(j.n, { children: a.map((r) => (0, d.jsx)(j.K, { className: (0, i.A)('ma-definition-of-done', r && `ma-definition-of-done--${(0, p.fX)(r.title)}`), heading: r ? `${r.title} - ${r.progress.value} van ${r.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: r.tasks.map(({ checked: e, name: r, id: t }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: r, description: (0, p.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${r.url}?filterQuery=${e.title}`, children: [r.title, ' projectbord op GitHub'] }) })] }) }, r.title)) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && r.length
      ? (0, d.jsx)(o.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: r
          .sort((e, n) => {
           const r = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return r === t ? e.title.localeCompare(n.title) : r - t;
          })
          .map((e) => {
           const r = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = r?.value,
            l = (0, p.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => s.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || l.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: g
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(a.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: r }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(t.dk, { links: r.map((e) => ({ children: e.description, icon: (0, d.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const r = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = r?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [i ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: r }) => {
     const i = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: i && (0, d.jsx)(g.D, { state: i }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: r })] });
    },
    k = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, r) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, r < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  63882(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  69609(e, n, r) {
   (r.r(n), r.d(n, { assets: () => C, component: () => M, contentTitle: () => T, default: () => G, description: () => R, frontMatter: () => L, issueNumber: () => _, metadata: () => t, title: () => H, toc: () => B }));
   const t = JSON.parse('{"id":"componenten/form-field-error-message/index","title":"Form Field Error Message","description":"Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.","source":"@site/docs/componenten/form-field-error-message/index.mdx","sourceDirName":"componenten/form-field-error-message","slug":"/form-field-error-message","permalink":"/form-field-error-message","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/form-field-error-message/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Form Field Error Message","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Form Field Error Message","pagination_label":"Form Field Error Message","description":"Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.","slug":"/form-field-error-message","keywords":["danger","error","error message","form","form error","form field","form field error message","formulier","formulierelement","fout","foutmelding","invalid","ongeldig","onjuist","problem","validatie","validation","waarschuwing"]},"sidebar":"componenten","previous":{"title":"Form Field Description","permalink":"/form-field-description"},"next":{"title":"Form Field Label","permalink":"/form-field-label"}}');
   var i = r(86070),
    a = r(18439),
    o = r(82461),
    l = r(17045),
    s = r(19776),
    d = r(40808);
   function c(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat de tekst in de Form Field Error Message duidelijk genoeg is om de foutmelding te begrijpen. Het is dan niet nodig om informatieve icons te gebruiken die een alternatieve tekst nodig hebben voor bezoekers die het scherm niet kunnen zien.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: '/icon/', children: 'Bekijk de acceptatiecriteria voor de Icon component.' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Toegankelijke foutmeldingen bij formuliervelden' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function g(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Koppel de Form Field Error Message met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), ' aan het bijbehorende element voor formulierinvoer:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<p><label for="name">Naam</label></p>\n<p id="description-name">Vul je voor- en achternaam in.</p>\n<p id="error-name">Het veld \'Naam\' is een verplicht veld.</p>\n<p><input id="name" aria-describedby="description-name error-name" autocomplete="name" type="text" /></p>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Toegankelijke foutmeldingen bij formuliervelden' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De Form Field Error Message kan met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), ' aan het bijbehorende element voor formulierinvoer worden gekoppeld.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<p><label for="name">Naam</label></p>\n<p id="description-name">Vul je voor- en achternaam in.</p>\n<p id="error-name">Het veld \'Naam\' is een verplicht veld.</p>\n<p><input id="name" aria-describedby="description-name error-name" autocomplete="name" type="text" /></p>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Toegankelijke foutmeldingen bij formuliervelden' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function m(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat foutmeldingen op een logische plek staan en gekoppeld zijn aan het element voor formulierinvoer.' }), '\n', (0, i.jsx)(n.p, { children: 'De meest gebruiksvriendelijke plek voor foutmeldingen is tussen het label en het element voor formulierinvoer. Als foutmeldingen onder de formulierinvoer staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader', children: 'screenreader' }), ' schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna foutmeldingen t\xfassen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel foutmeldingen daarom ook aan het element voor formulierinvoer met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), '. Op die manier wordt de foutmeldingen voorgelezen wanneer de toetsenbordfocus op dat element staat.'] }), '\n', (0, i.jsx)(n.p, { children: 'Voorbeeld:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<p><label for="name">Naam</label></p>\n<p id="description-name">Vul je voor- en achternaam in.</p>\n<p id="error-name">Het veld \'Naam\' is een verplicht veld.</p>\n<p><input id="name" aria-describedby="description-name error-name" autocomplete="name" type="text" /></p>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Toegankelijke foutmeldingen bij formuliervelden' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   var p = r(55552),
    h = r(5710),
    j = r(83672),
    f = r(34257),
    x = r(41887),
    b = r(63882),
    v = r(24838),
    k = r(91391),
    F = r(44720);
   function w(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Een foutmelding vertelt de bezoeker dat er iets fout is gegaan.\nZorg ervoor dat deze informatie ook meteen beschikbaar is voor bezoekers die een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader', children: 'screenreader' }), ' gebruiken.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dit kun je op verschillende manieren doen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Door de focus naar het formulierveld met een foutmelding te verplaatsen. Als de Form Field Error Message gekoppeld is aan het formulierveld met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), ' wordt de melding nu voorgelezen. Dit werkt alleen goed als er maar \xe9\xe9n foutmelding is. Foutmeldingen bij andere velden worden niet voorgelezen.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Door een samenvattende foutmelding met de rol ', (0, i.jsx)(n.code, { children: 'alert' }), ' boven het formulier te plaatsen. De rol ', (0, i.jsx)(n.code, { children: 'alert' }), ' zorgt ervoor dat een screenreader de informatie meteen voorleest. De foutmeldingen bij de velden hoeven nu niet voorgelezen te worden, want de bezoeker heeft de belangrijke informatie uit de samenvattende foutmelding al.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Door de Form Field Error Message zelf de rol ', (0, i.jsx)(n.code, { children: 'alert' }), ' te geven. Als er meerdere Form Field Error Messages zijn, worden ze allemaal op volgorde voorgelezen.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Kies de methode die het best bij het formulier past.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Toegankelijke foutmeldingen bij formuliervelden' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   var D = r(74359),
    A = r(30940);
   function N(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Het is mogelijk om de Form Field Error Message de rol ', (0, i.jsx)(n.code, { children: 'alert' }), ' te geven, zodat een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader', children: 'screenreader' }), ' de foutmelding direct voorleest.'] });
   }
   const y = [
     {
      title: 'De Form Field Error Message bevat geen informatieve icons en decoratieve icons zijn verborgen voor hulpsoftware.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     {
      title: 'De Form Field Error Message is gekoppeld aan het bijbehorende element voor formulierinvoer',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
      },
      tags: ['developer'],
     },
     {
      title: 'De Form Field Error Message staat tussen het label en het element voor formulierinvoer.',
      sc: '1.3.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
      },
      tags: ['designer', 'developer'],
     },
     { title: 'Instructies in de Form Field Error Message zijn op een inclusieve manier beschreven.', sc: '1.3.3', status: '', component: k.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als kleuren worden gebruikt om aan te geven dat er een fout gemaakt is, dan is er ook ten minste \xe9\xe9n andere manier om de foutmelding te herkennen.', sc: '1.4.1', status: '', component: F.Ay, tags: ['designer'] },
     { title: 'De tekst in de Form Field Error Message heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.', sc: '1.4.3', status: '', component: j.Ay, tags: ['designer'] },
     { title: 'Als je de tekst van de Form Field Error Message vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: f.Ay, tags: ['developer'] },
     { title: 'De bezoeker kan de Form Field Error Message tot 400% vergroten zonder verlies van functionaliteit of informatie.', sc: '1.4.10', status: '', component: p.Ay, tags: ['developer', 'designer'] },
     { title: 'De Form Field Error Message is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'De Form Field Error Message komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: b.Ay, tags: ['developer'] },
     { title: 'Als de Form Field Error Message in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: v.Ay, tags: ['developer'] },
     {
      title: 'Foutmeldingen over fouten die de bezoeker heeft gemaakt worden meteen voorgelezen aan bezoekers die een screenreader gebruiken.',
      sc: '4.1.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w(e);
      },
      tags: ['developer'],
     },
    ],
    z = [
     {
      title: 'De Form Field Error Message kan aan een element voor formulierinvoer gekoppeld worden',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer'],
     },
     { title: 'Tekst in de Form Field Error Message blijft leesbaar wanneer de tekstafstand vergroot wordt. ', sc: '1.4.12', status: '', component: h.Ay, tags: ['developer'] },
     { title: 'De Form Field Error Message is standaard niet bereikbaar en bedienbaar met het toetsenbord. ', sc: '2.1.1', status: '', component: D.Ay, tags: ['developer'] },
     { title: 'De Form Field Error Message komt standaard niet voor in de focusvolgorde van de pagina. ', sc: '2.4.3', status: '', component: A.Ay, tags: ['developer'] },
     {
      title: 'Het is mogelijk om de Form Field Error Message de rol `alert` te geven.',
      sc: '4.1.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(N, { ...e }) }) : N(e);
      },
      tags: ['developer'],
     },
    ];
   var S = r(56167);
   const L = { title: 'Form Field Error Message', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Form Field Error Message', pagination_label: 'Form Field Error Message', description: 'Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.', slug: '/form-field-error-message', keywords: ['danger', 'error', 'error message', 'form', 'form error', 'form field', 'form field error message', 'formulier', 'formulierelement', 'fout', 'foutmelding', 'invalid', 'ongeldig', 'onjuist', 'problem', 'validatie', 'validation', 'waarschuwing'] },
    T = void 0,
    C = {},
    H = 'Form Field Error Message',
    R = 'Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.',
    _ = 122,
    M = o.find((e) => e.number === _),
    B = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...s.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...l.RM, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function E(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, a.R)(), ...e.components },
     { Checklist: r, ChecklistItem: t } = n;
    return (r || I('Checklist', !0), t || I('ChecklistItem', !0), (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(S.Fc, { component: M, headingLevel: 1, description: R }), '\n', (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, i.jsx)(s.Ay, {}), '\n', (0, i.jsx)(r, { headingLevel: '4', children: y.map(({ component: e, ...n }) => (0, i.jsx)(t, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(r, { headingLevel: '4', children: z.map(({ component: e, ...n }) => (0, i.jsx)(t, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(S.VK, { component: M, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(S.mu, { component: M, headingLevel: 3 }), '\n', (0, i.jsx)(S.K_, { component: M }), '\n', (0, i.jsx)(S.$9, { component: M, headingLevel: 2 })] }));
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(E, { ...e }) }) : E(e);
   }
   function I(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  74359(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  76097(e, n, r) {
   r.d(n, { bo: () => i, KF: () => u, mJ: () => h, VZ: () => w, cR: () => F, Pv: () => j, qZ: () => o, kD: () => v, QQ: () => A, B2: () => m, Pc: () => s, f4: () => l, GT: () => k, fX: () => a, eQ: () => b, B_: () => x, o_: () => f });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return g(c(n));
    },
    m = (e, n) => h(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: r }) => '' !== r && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => g(c(e.projects.flatMap((e) => p(e)))),
    j = (e) => {
     const n = p(e),
      r = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: r }) => '' !== r && e.includes(n))
       .map(({ name: t, id: i, value: a }) => {
        const o = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === o ? `${r} (${n}) in Storybook van ${e.title}` : `${r} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: t, id: i, value: a, description: l };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((r) => ('object' == typeof e[r] && null !== e[r] ? v(e[r], [...n, r]) : []));
   }
   function k(e) {
    const n = new Map();
    function r(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || r(e).localeCompare(r(n)));
   }
   const F = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    D = new Set(['ics', 'json', 'pdf']),
    A = (e) => {
     const n = e.split('/').pop() ?? '',
      r = n.split('.').pop()?.toLowerCase();
     return void 0 !== r && D.has(r);
    };
  },
  83672(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, t.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  91391(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => a });
   var t = r(86070),
    i = r(18439);
   const a = [];
   function o(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Geef instructies op een inclusieve manier. De instructies kunnen begrijpen moet niet afhankelijk zijn van eigenschappen die sommige gebruikers niet ervaren.' }), '\n', (0, t.jsx)(n.p, { children: 'Het gaat hierbij om eigenschappen zoals vorm, kleur, afmeting, locatie op het scherm, richting, of geluid. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: '"De fouten zijn met een rode rand gemarkeerd". Niet iedereen kan zien, niet iedereen kan de kleur rood van zwart onderscheiden.' }), '\n', (0, t.jsx)(n.li, { children: '"Klik op de meest rechtse knop". Niet iedereen kan zien, sommige gebruikers zijn ingezoomd waardoor de knoppen op twee regels staan.' }), '\n', (0, t.jsx)(n.li, { children: '"Als je het geluid hoort, heb je nog 5 minuten." Niet iedereen kan dat geluid goed horen of heeft het geluid aanstaan.' }), '\n'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
