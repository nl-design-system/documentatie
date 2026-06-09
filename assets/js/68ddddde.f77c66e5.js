(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94192],
 {
  1457(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var i = t(12941),
    a = t(30758),
    s = t(76097),
    r = t(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, s.fX)(n),
     l = a.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, r.jsx)(a.Suspense, { fallback: null, children: (0, r.jsx)(i.o, { omitH1: !0, headingLevel: 1, children: (0, r.jsx)(l, {}) }) });
   };
  },
  5081(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Geef gebruikers van hulpmiddelen de mogelijkheid om binnen een pagina snel te navigeren door onderdelen, zoals een menu, te kunnen overslaan.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruikers die de website van boven naar beneden doornemen moeten makkelijk grote stukken content kunnen overslaan om bijvoorbeeld direct naar de hoofdinhoud kunnen gaan. Het gaat hierbij om grote stukken content die op elke pagina herhaald wordt, zoals de hoofdnavigatie en een filter.' }), '\n', (0, i.jsx)(n.p, { children: 'Dan voorkom je dat een toetsenbordgebruiker eerst door een menu of filter moet tabben om bij een link in de hoofdinhoud te komen.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  8584(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  12941(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var i = t(18439),
    a = t(46447),
    s = t(86070);
   const r = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: a } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + a;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: a.fV, h2: a._B, h3: a.f_, h4: a.mM, h5: a.TT }, 3: { h1: a._B, h2: a.f_, h3: a.mM, h4: a.TT, h5: a.TT }, 4: { h1: a.f_, h2: a.mM, h3: a.TT, h4: a.TT, h5: a.TT }, 5: { h1: a.mM, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT }, 6: { h1: a.TT, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: a = '', components: r = {} }) => (0, s.jsx)(i.x, { components: { ...d(n, t), ...l(a), ...r }, children: e });
  },
  15042(e, n, t) {
   'use strict';
   t.d(n, { p: () => s });
   var i = t(13526),
    a = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...r }) => (0, a.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  16764(e, n, t) {
   'use strict';
   t.d(n, { B: () => A });
   var i = t(96547),
    a = t(79889),
    s = t(76097),
    r = t(46447),
    o = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    g = t(4603),
    u = t(29181),
    m = t(86070);
   function p({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, m.jsxs)(r.$n, {
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
        children: [e, (0, m.jsx)(u.In, { children: (0, m.jsx)(g.A, {}) })],
       })
     : null;
   }
   var h = t(35193),
    k = t(13088),
    j = t(91525),
    x = t(24214),
    b = t(92081),
    f = t(1375),
    v = t(23436),
    y = t(79532),
    w = t(30758);
   const S = { color: h.A, dimension: k.A, fontFamilies: j.A, fontSizes: x.A, fontWeights: b.A, lineHeights: f.A, other: v.A, textDecoration: y.A },
    D = ({ type: e }) => (0, m.jsx)(u.In, { children: (0, w.createElement)(S[e]) });
   var L = t(76223);
   function A({ tokens: e }) {
    const n = (0, s.kD)(e),
     t = (0, L.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     o = (0, s.GT)(n),
     l = o.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsxs)(r.XI, {
       children: [
        (0, m.jsx)(r.A0, { children: (0, m.jsxs)(r.Hj, { children: [(0, m.jsx)(r.M_, { children: 'name' }), (0, m.jsx)(r.M_, { children: 'type' })] }) }),
        (0, m.jsx)(r.BF, {
         children: o.map((n) => {
          const t = (0, s.o_)(n),
           o = (0, s.eQ)(e, n).$type;
          return (0, m.jsxs)(r.Hj, { children: [(0, m.jsx)(r.nA, { children: (0, m.jsx)(i.C, { children: (0, m.jsx)(r.kf, { children: t }) }) }), (0, m.jsx)(r.nA, { children: (0, m.jsxs)(a.K, { children: [(0, m.jsx)(D, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, m.jsxs)(r.e2, { children: [(0, m.jsx)(p, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, m.jsx)(p, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  26655(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => r, Wu: () => o, Zp: () => l });
   var i = t(46447),
    a = t(13526),
    s = t(86070);
   const r = ({ background: e, children: n, className: t, ...i }) => (0, s.jsx)('div', { className: (0, a.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    o = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: r = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === r ? (0, s.jsx)('article', { ...e }) : 'section' === r ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, a.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, a.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27055(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, i.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  30536(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, i.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, i.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, i.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  31522(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var i = t(46447),
    a = t(13526),
    s = t(76097),
    r = t(86070);
   const o = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, r.jsx)(i.KE, { className: (0, a.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  31820(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  36599(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  39948(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var i = t(29181),
    a = t(74172),
    s = t(15089),
    r = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  46565(e, n, t) {
   'use strict';
   t.d(n, { c: () => a });
   var i = t(30758);
   function a() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  56167(e, n, t) {
   'use strict';
   t.d(n, { VK: () => k, $9: () => x, mu: () => j, Fc: () => b, K_: () => f });
   var i = t(29181),
    a = t(13526),
    s = t(39948),
    r = t(26655),
    o = t(46565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const i = t(83294).V6;
      return (0, d.jsx)(i, {
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
    u = t(15042),
    m = t(58876),
    p = t(76097);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}'),
    k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      s = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(i.If, { sections: s.map((t) => ({ className: (0, a.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(r.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            i = n.progress.max - n.progress.value;
           return t === i ? e.title.localeCompare(n.title) : t - i;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            a = t?.value,
            o = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || o.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [a ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: a && (0, d.jsx)(g.D, { state: a }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t })] });
    },
    f = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  68413(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'De component en de afzonderlijke interactieve elementen in de component hebben de juiste rol en de juiste attributen voor het aangeven van de staat en de waarde.' });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  75390(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => Z, component: () => K, contentTitle: () => U, default: () => Y, description: () => W, frontMatter: () => E, issueNumber: () => J, metadata: () => i, title: () => X, toc: () => q }));
   const i = JSON.parse('{"id":"componenten/skip-link/index","title":"Skip Link","description":"Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.","source":"@site/docs/componenten/skip-link/index.mdx","sourceDirName":"componenten/skip-link","slug":"/skip-link","permalink":"/skip-link","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/skip-link/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Skip Link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Skip Link","pagination_label":"Skip Link","description":"Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.","slug":"/skip-link","keywords":["anchor link","accessibility link","blokken omzijlen","direct naar link","direct naar x","content","go to content","hidden link","inhoud","inhoud overslaan","jump link","jump to","jump to main content","keyboard","link","naar content","naar de inhoud","navigeer snel naar","overslaan","quick link","screen reader link","section","skip link","skip links","skiplinks","skipnav","skip to content","skip to main","skip navigation","skip to section","skip nav","snel naar inhoud","spring naar inhoud","springlink","springplank link"]},"sidebar":"componenten","previous":{"title":"Side Navigation","permalink":"/side-navigation"},"next":{"title":"Spinner","permalink":"/spinner"}}');
   var a = t(86070),
    s = t(18439),
    r = t(82461),
    o = t(17045),
    l = t(19776),
    d = t(40808);
   t(30758);
   function c(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in de component in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden:" }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, a.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, a.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, a.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   var g = t(83672);
   function u(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, bijvoorbeeld via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst in de component volledig zichtbaar.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function m(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Interactieve elementen in de component zijn bedienbaar met het toetsenbord.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function p(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Interactieve elementen in de component hebben een goed zichtbare focusindicator met een minimale dikte van 2 pixels.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n'] })] });
   }
   function h(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'De Skip Link naar de hoofdinhoud van de pagina is het eerste interactieve element op de pagina dat toetsenbordfocus krijgt. Overige Skip Links naar andere onderdelen van de pagina, zoals het hoofdmenu, volgen daarna.' }), '\n', (0, a.jsxs)(n.p, { children: ['De Skip Link verwijst naar de plek op de pagina waar de hoofdinhoud start. Dit is bijvoorbeeld de ', (0, a.jsx)(n.code, { children: 'main' }), ' van de pagina. Omdat dit normaal gesproken geen interactief element is, moet het element focusbaar gemaakt worden. Aangezien het niet de bedoeling is dat de ', (0, a.jsx)(n.code, { children: 'main' }), ' in de normale focusvolgorde van de pagina voorkomt, kun je hiervoor ', (0, a.jsx)(n.code, { children: 'tabindex="-1"' }), ' gebruiken. Geef het vervolgens een ', (0, a.jsx)(n.code, { children: 'id' }), ' attribuut mee, bijvoorbeeld ', (0, a.jsx)(n.code, { children: 'id="hoofdinhoud"' }), ' waar je in de Skip Link in het ', (0, a.jsx)(n.code, { children: 'href' }), ' attribuut naar verwijst. Vergeet niet ook een focusstijl in te stellen voor het element waar je naar verwijst, zodat toetsenbordgebruikers weten waar ze zich op de pagina bevinden.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Let op: Bevat je ', (0, a.jsx)(n.code, { children: 'main' }), ' w\xe9l herhalende content? Gebruik dan een ander element n\xe1 de herhalende content.'] }), '\n', (0, a.jsx)(n.p, { children: 'Let op: Heeft je website een cookiemelding die altijd over een deel van de pagina staat, waardoor bezoekers de cookiemelding \xe9\xe9rst weg moeten klikken om verder te gaan? Zorg er dan voor dat de cookiemelding nog v\xf3\xf3r de Skip Links focus krijgt en weggeklikt kan worden.' })] });
   }
   function k(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'De linktekst in de Skip Link vertelt duidelijk waar de link naar verwijst. Bijvoorbeeld: "Direct naar de inhoud" of "Hoofdinhoud".' }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt er ook voor kiezen om meerdere Skip Links toe te voegen. Zorg er dan voor dat iedere link een unieke beschrijvende linktekst heeft. Een beschrijvende naam voor een Skip Link waarmee bezoekers direct naar de hoofdnavigatie kunnen, is bijvoorbeeld "Direct naar het hoofdmenu".' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten/', children: 'Toegankelijke linkteksten' }) }), '\n'] })] });
   }
   function j(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Wanneer een interactief element in de component toetsenbordfocus heeft is het element en de focusindicator zichtbaar.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function x(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Het is mogelijk om een actie te voorkomen of ongedaan te maken als de gebruiker een interactief element in de component indrukt met een enkele aanwijzer zoals een muis of vinger.' });
   }
   var b = t(27055);
   function f(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Het aanwijsgebied van interactieve elementen in de component is minimaal 44 bij 44 pixels.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   var v = t(24838);
   function y(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: "Op pagina's met \xe9\xe9n of meerdere Skip Links:" }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Zorg ervoor dat de Skip Link naar de hoofdinhoud van de pagina het eerste interactieve element op de pagina is.' }), '\n', (0, a.jsx)(n.li, { children: 'Zorg ervoor dat de Skip Links naar andere onderdelen van de pagina in dezelfde volgorde staan.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Let op: Heeft je website een cookiemelding die altijd over een deel van de pagina staat, waardoor bezoekers de cookiemelding \xe9\xe9rst weg moeten klikken om verder te gaan? Zorg er dan voor dat de cookiemelding nog v\xf3\xf3r de Skip Links focus krijgt en weggeklikt kan worden.' })] });
   }
   function w(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Links die dezelfde functie hebben binnen een website, zien er hetzelfde uit en werken ook hetzelfde.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   var S = t(68413),
    D = t(30536),
    L = t(96412),
    A = t(36599),
    z = t(5081),
    F = t(8584),
    N = t(31820);
   const R = [
     { title: 'De tekstkleur van de Skip Link heeft voldoende contrast met de achtergrondkleur.', sc: '1.4.3', status: '', component: g.Ay, tags: ['designer'] },
     { title: 'Het label van de Skip Link bestaat uit tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: L.Ay, tags: ['developer', 'contentmaker'] },
     { title: 'De Skip Link slaat 1 of meerdere herhalende contentblokken over.', sc: '2.4.1', status: '', component: z.Ay, tags: ['developer'] },
     {
      title: 'De Skip Link staat vooraan in de focusvolgorde van een pagina en verwijst naar de eerste niet-herhalende content op de pagina.',
      sc: '2.4.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
      },
      tags: ['developer'],
     },
     {
      title: 'De linktekst van de Skip Link beschrijft duidelijk het linkdoel.',
      sc: '2.4.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(k, { ...e }) }) : k(e);
      },
      tags: ['developer', 'contentmaker'],
     },
     { title: 'De Skip Link wordt niet bedekt door een ander element op de pagina.', sc: '2.4.11', status: '', component: F.Ay, tags: ['developer'] },
     { title: 'Als de tekst van de Skip Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: v.Ay, tags: ['developer', 'contentmaker'] },
     {
      title: "Skip Links die op meerdere pagina's voorkomen staan op iedere pagina vooraan in de focusvolgorde van een pagina.",
      sc: '3.2.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(y, { ...e }) }) : y(e);
      },
      tags: ['developer', 'designer'],
     },
    ],
    T = [
     {
      title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
      sc: '1.4.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de hele webpagina inzoomt tot 400% veroorzaakt de Skip Link geen horizontale scrollbalk en blijft alle tekst op de pagina leesbaar.', sc: '1.4.10', status: '', component: D.Ay, tags: ['developer', 'designer'] },
     {
      title: 'De tekst in de Skip Link blijft zichtbaar als je de tekstafstand vergoot.',
      sc: '1.4.12',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'Je kunt de Skip Link focussen met de tabtoets en activeren met de entertoets.',
      sc: '2.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
      },
      tags: ['developer'],
     },
     { title: 'Als een gebruiker de Skip Link focust met het toetsenbord, dan moet deze ook weer weg kunnen gaan met het toetsenbord.', sc: '2.1.2', status: '', component: A.Ay, tags: ['developer'] },
     {
      title: 'De Skip Link heeft een zichtbare focusindicator.',
      sc: '2.4.7',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(j, { ...e }) }) : j(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'De Skip Link heeft een zichtbare focusindicator met een dikte van minimaal 2 pixels.',
      sc: '2.4.13',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'De Skip Link activeren met een enkele aanwijzer kan voorkomen of geannuleerd worden.',
      sc: '2.5.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(x, { ...e }) }) : x(e);
      },
      tags: ['developer'],
     },
     { title: 'De zichtbare naam van de Skip Link komt voor in de toegankelijke naam.', sc: '2.5.3', status: '', component: b.Ay, tags: ['developer'] },
     {
      title: 'Het aanwijsgebied van de Skip Link is groot genoeg.',
      sc: '2.5.5',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
      },
      tags: ['developer'],
     },
     { title: 'Als de Skip Link toetsenbordfocus krijgt vindt er geen contextwijziging plaats.', sc: '3.2.1', status: '', component: N.Ay, tags: ['developer'] },
     {
      title: 'Skip Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.',
      sc: '3.2.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(w, { ...e }) }) : w(e);
      },
      tags: ['developer', 'designer'],
     },
     { title: 'De Skip Link heeft een rol van link.', sc: '4.1.2', status: '', component: S.Ay, tags: ['developer'] },
    ];
   var H = t(26655),
    C = t(46447),
    _ = t(56421),
    B = t(39948),
    M = t(1457),
    P = t(56167),
    G = t(16764),
    I = t(12941);
   function $(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'gebruik-skip-link', children: 'Gebruik Skip Link' }) }), '\n', (0, a.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, a.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-css', children: '@nl-design-system-candidate/skip-link-css' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik de ', (0, a.jsx)(n.code, { children: 'nl-skip-link' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'a' }), ' element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<a href="#inhoud" class="nl-skip-link nl-skip-link--visible-on-focus">Naar de inhoud</a>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/skip-link-css\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/skip-link-css@1/dist/skip-link.css"\n/>\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, a.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/skip-link-css/dist/skip-link.css" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/skip-link-css/skip-link.css";\n' }) }), '\n', (0, a.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, a.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-react', children: '@nl-design-system-candidate/skip-link-react' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/skip-link-react\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-jsx', children: 'import { SkipLink } from "@nl-design-system-candidate/skip-link-react";\n\nexport const MyComponent = () => <SkipLink href="#inhoud">Direct naar de hoofdinhoud</SkipLink>;\n' }) })] });
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)($, { ...e }) }) : $(e);
   }
   const O = JSON.parse('{"nl":{"skip-link":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"min-block-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-block":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-inline":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"text-decoration-thickness":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"},"text-underline-offset":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"other"}}}}'),
    E = { title: 'Skip Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Skip Link', pagination_label: 'Skip Link', description: 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.', slug: '/skip-link', keywords: ['anchor link', 'accessibility link', 'blokken omzijlen', 'direct naar link', 'direct naar x', 'content', 'go to content', 'hidden link', 'inhoud', 'inhoud overslaan', 'jump link', 'jump to', 'jump to main content', 'keyboard', 'link', 'naar content', 'naar de inhoud', 'navigeer snel naar', 'overslaan', 'quick link', 'screen reader link', 'section', 'skip link', 'skip links', 'skiplinks', 'skipnav', 'skip to content', 'skip to main', 'skip navigation', 'skip to section', 'skip nav', 'snel naar inhoud', 'spring naar inhoud', 'springlink', 'springplank link'] },
    U = void 0,
    Z = {},
    X = 'Skip Link',
    W = 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.',
    J = 74,
    K = r.find((e) => e.number === J),
    q = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function Q(e) {
    const n = { h2: 'h2', h3: 'h3', p: 'p', ...(0, s.R)(), ...e.components },
     { Checklist: t, ChecklistItem: i } = n;
    return (t || ee('Checklist', !0), i || ee('ChecklistItem', !0), (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(P.Fc, { component: K, headingLevel: 1, description: W }), '\n', (0, a.jsx)(n.p, { children: "Gebruik de Skip Link zodat gebruikers met een toetsenbord of hulpsoftware makkelijk contentblokken kunnen overslaan. Bijvoorbeeld navigatie die op meerdere pagina's herhaald wordt." }), '\n', (0, a.jsx)(M.e, { component: K }), '\n', (0, a.jsx)(H.Zp, { className: 'ma-implementation-card', children: (0, a.jsxs)(H.Wu, { children: [(0, a.jsx)(_.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, a.jsxs)(C.dk, { children: [(0, a.jsxs)(C.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=3462-12790', children: [(0, a.jsx)(B.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, a.jsxs)(C.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=3462-12790', children: [(0, a.jsx)(B.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, a.jsx)(_.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, a.jsxs)(C.dk, { children: [(0, a.jsxs)(C.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-skip-link--documentatie', children: [(0, a.jsx)(B.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, a.jsxs)(C.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/skip-link--documentatie', children: [(0, a.jsx)(B.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, a.jsx)(_.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, a.jsxs)(C.dk, { children: [(0, a.jsxs)(C.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-css', children: [(0, a.jsx)(B.r, { brand: 'npm' }), ' @nl-design-system-candidate/skip-link-css'] }), (0, a.jsxs)(C.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-react', children: [(0, a.jsx)(B.r, { brand: 'npm' }), ' @nl-design-system-candidate/skip-link-react'] }), (0, a.jsxs)(C.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-tokens', children: [(0, a.jsx)(B.r, { brand: 'npm' }), ' @nl-design-system-candidate/skip-link-tokens'] })] })] }) }), '\n', (0, a.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, a.jsx)(d.Ay, {}), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, a.jsx)(l.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: R.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, a.jsx)(o.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: T.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(I.o, { omitH1: !0, headingLevel: 2, children: (0, a.jsx)(V, {}) }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, a.jsx)(G.B, { tokens: O }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(P.VK, { component: K, headingLevel: 3 }), '\n', (0, a.jsx)(P.$9, { component: K, headingLevel: 2 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(P.mu, { component: K, headingLevel: 3 }), '\n', (0, a.jsx)(P.K_, { component: K })] }));
   }
   function Y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(Q, { ...e }) }) : Q(e);
   }
   function ee(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  76097(e, n, t) {
   'use strict';
   t.d(n, { bo: () => a, KF: () => u, mJ: () => h, VZ: () => w, cR: () => y, Pv: () => k, qZ: () => r, kD: () => f, B2: () => m, Pc: () => l, f4: () => o, GT: () => v, fX: () => s, eQ: () => b, B_: () => x, o_: () => j });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => g(c(e.projects.flatMap((e) => p(e)))),
    k = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: a, value: s }) => {
        const r = /^(.+) URL/.exec(i)[1],
         o = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: i, id: a, value: s, description: o };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const y = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  82839(e, n, t) {
   var i = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function a(e) {
    if (!t.o(i, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = i[e],
     a = n[0];
    return t.e(n[1]).then(() => t(a));
   }
   ((a.keys = () => Object.keys(i)), (a.id = 82839), (e.exports = a));
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  96412(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
