(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94192],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => p });
   var i = t(29181),
    r = t(74172),
    s = t(15089),
    o = t(28377),
    a = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    p = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  5081(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Geef gebruikers van hulpmiddelen de mogelijkheid om binnen een pagina snel te navigeren door onderdelen, zoals een menu, te kunnen overslaan.' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruikers die de website van boven naar beneden doornemen moeten makkelijk grote stukken content kunnen overslaan om bijvoorbeeld direct naar de hoofdinhoud kunnen gaan. Het gaat hierbij om grote stukken content die op elke pagina herhaald wordt, zoals de hoofdnavigatie en een filter.' }), '\n', (0, i.jsx)(n.p, { children: 'Dan voorkom je dat een toetsenbordgebruiker eerst door een menu of filter moet tabben om bij een link in de hoofdinhoud te komen.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  8584(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var i = t(18439),
    r = t(46447),
    s = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + r;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: o = {} }) => (0, s.jsx)(i.x, { components: { ...d(n, t), ...l(r), ...o }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => z });
   var i = t(96547),
    r = t(79889),
    s = t(33062),
    o = t(46447),
    a = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    p = t(4603),
    h = t(29181),
    m = t(86070);
   function k({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, m.jsxs)(o.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [a.A, l.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, m.jsx)(h.In, { children: (0, m.jsx)(p.A, {}) })],
       })
     : null;
   }
   var u = t(35193),
    g = t(13088),
    j = t(91525),
    x = t(24214),
    v = t(92081),
    f = t(1375),
    b = t(23436),
    w = t(79532),
    S = t(30758);
   const A = { color: u.A, dimension: g.A, fontFamilies: j.A, fontSizes: x.A, fontWeights: v.A, lineHeights: f.A, other: b.A, textDecoration: w.A },
    y = ({ type: e }) => (0, m.jsx)(h.In, { children: (0, S.createElement)(A[e]) });
   function z({ tokens: e }) {
    const n = (0, s.kD)(e),
     t = (0, s.GT)(n),
     a = t.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     l = JSON.stringify((0, s.Rc)(t));
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsxs)(o.XI, {
       children: [
        (0, m.jsx)(o.A0, { children: (0, m.jsxs)(o.Hj, { children: [(0, m.jsx)(o.M_, { children: 'name' }), (0, m.jsx)(o.M_, { children: 'type' })] }) }),
        (0, m.jsx)(o.BF, {
         children: t.map((n) => {
          const t = (0, s.o_)(n),
           a = (0, s.eQ)(e, n).$type;
          return (0, m.jsxs)(o.Hj, { children: [(0, m.jsx)(o.nA, { children: (0, m.jsx)(i.C, { children: (0, m.jsx)(o.kf, { children: t }) }) }), (0, m.jsx)(o.nA, { children: (0, m.jsxs)(r.K, { children: [(0, m.jsx)(y, { type: a }), ' ', a] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, m.jsxs)(o.e2, { children: [(0, m.jsx)(k, { content: l, language: 'json', children: 'Kopieer als JSON' }), (0, m.jsx)(k, { content: a, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  24838(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  27055(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, i.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  30536(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, i.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, i.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, i.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  31820(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => r, KF: () => h, mJ: () => u, VZ: () => A, cR: () => S, Pv: () => g, qZ: () => o, kD: () => f, B2: () => m, Pc: () => l, f4: () => a, GT: () => b, fX: () => s, eQ: () => v, B_: () => x, o_: () => j, Rc: () => w });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => k(e));
     return p(c(n));
    },
    m = (e, n) => u(e).includes(n),
    k = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => p(c(e.projects.flatMap((e) => k(e)))),
    g = (e) => {
     const n = k(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: r, value: s }) => {
        const o = /^(.+) URL/.exec(i)[1],
         a = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: r, value: s, description: a };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function w(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const S = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  36599(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  37131(e, n, t) {
   'use strict';
   t.d(n, { VK: () => g, $9: () => x, mu: () => j, Fc: () => v, K_: () => f });
   var i = t(29181),
    r = t(13526),
    s = t(1292),
    o = t(90495),
    a = t(54565);
   function l(e) {
    return (0, a.c)() ? e.children() : null;
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
   var p = t(67970),
    h = t(72642),
    m = t(58876),
    k = t(33062);
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    g = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => k.f4.includes(e.id)),
      s = t && k.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(i.If, { sections: s.map((t) => ({ className: (0, r.A)('definition-of-done', t && `definition-of-done--${(0, k.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, k.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !k.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(o.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            i = n.progress.max - n.progress.value;
           return t === i ? e.title.localeCompare(n.title) : t - i;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            r = t?.value,
            a = (0, k.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (p.length > 0 || a.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               p.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: p
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, d.jsx)(d.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
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
      r = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [r ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const r = e && k.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h.p, { level: n, suffix: r && (0, d.jsx)(p.D, { state: r }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t })] });
    },
    f = ({ component: e }) => {
     const n = (e && u[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => r });
   var i = t(30758);
   function r() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  65655(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => X, component: () => K, contentTitle: () => Z, default: () => Y, description: () => W, frontMatter: () => U, issueNumber: () => J, metadata: () => i, title: () => I, toc: () => q }));
   const i = JSON.parse('{"id":"componenten/skip-link/index","title":"Skip Link","description":"Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.","source":"@site/docs/componenten/skip-link/index.mdx","sourceDirName":"componenten/skip-link","slug":"/skip-link","permalink":"/skip-link","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/skip-link/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Skip Link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Skip Link","pagination_label":"Skip Link","description":"Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.","slug":"/skip-link","keywords":["anchor link","accessibility link","blokken omzijlen","direct naar link","direct naar x","content","go to content","hidden link","inhoud","inhoud overslaan","jump link","jump to","jump to main content","keyboard","link","naar content","naar de inhoud","navigeer snel naar","overslaan","quick link","screen reader link","section","skip link","skip links","skiplinks","skipnav","skip to content","skip to main","skip navigation","skip to section","skip nav","snel naar inhoud","spring naar inhoud","springlink","springplank link"]},"sidebar":"componenten","previous":{"title":"Side Navigation","permalink":"/side-navigation"},"next":{"title":"Spinner","permalink":"/spinner"}}');
   var r = t(86070),
    s = t(18439),
    o = t(45189),
    a = t(17045),
    l = t(19776),
    d = t(40808);
   t(65228);
   function c(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in de component in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden:" }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   var p = t(83672);
   function h(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, bijvoorbeeld via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst in de component volledig zichtbaar.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function m(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Interactieve elementen in de component zijn bedienbaar met het toetsenbord.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function k(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Interactieve elementen in de component hebben een goed zichtbare focusindicator met een minimale dikte van 2 pixels.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n'] })] });
   }
   function u(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De Skip Link naar de hoofdinhoud van de pagina is het eerste interactieve element op de pagina dat toetsenbordfocus krijgt. Overige Skip Links naar andere onderdelen van de pagina, zoals het hoofdmenu, volgen daarna.' }), '\n', (0, r.jsxs)(n.p, { children: ['De Skip Link verwijst naar de plek op de pagina waar de hoofdinhoud start. Dit is bijvoorbeeld de ', (0, r.jsx)(n.code, { children: 'main' }), ' van de pagina. Omdat dit normaal gesproken geen interactief element is, moet het element focusbaar gemaakt worden. Aangezien het niet de bedoeling is dat de ', (0, r.jsx)(n.code, { children: 'main' }), ' in de normale focusvolgorde van de pagina voorkomt, kun je hiervoor ', (0, r.jsx)(n.code, { children: 'tabindex="-1"' }), ' gebruiken. Geef het vervolgens een ', (0, r.jsx)(n.code, { children: 'id' }), ' attribuut mee, bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'id="hoofdinhoud"' }), ' waar je in de Skip Link in het ', (0, r.jsx)(n.code, { children: 'href' }), ' attribuut naar verwijst. Vergeet niet ook een focusstijl in te stellen voor het element waar je naar verwijst, zodat toetsenbordgebruikers weten waar ze zich op de pagina bevinden.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Let op: Bevat je ', (0, r.jsx)(n.code, { children: 'main' }), ' w\xe9l herhalende content? Gebruik dan een ander element n\xe1 de herhalende content.'] }), '\n', (0, r.jsx)(n.p, { children: 'Let op: Heeft je website een cookiemelding die altijd over een deel van de pagina staat, waardoor bezoekers de cookiemelding \xe9\xe9rst weg moeten klikken om verder te gaan? Zorg er dan voor dat de cookiemelding nog v\xf3\xf3r de Skip Links focus krijgt en weggeklikt kan worden.' })] });
   }
   function g(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De linktekst in de Skip Link vertelt duidelijk waar de link naar verwijst. Bijvoorbeeld: "Direct naar de inhoud" of "Hoofdinhoud".' }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt er ook voor kiezen om meerdere Skip Links toe te voegen. Zorg er dan voor dat iedere link een unieke beschrijvende linktekst heeft. Een beschrijvende naam voor een Skip Link waarmee bezoekers direct naar de hoofdnavigatie kunnen, is bijvoorbeeld "Direct naar het hoofdmenu".' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten/', children: 'Toegankelijke linkteksten' }) }), '\n'] })] });
   }
   function j(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer een interactief element in de component toetsenbordfocus heeft is het element en de focusindicator zichtbaar.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function x(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Het is mogelijk om een actie te voorkomen of ongedaan te maken als de gebruiker een interactief element in de component indrukt met een enkele aanwijzer zoals een muis of vinger.' });
   }
   var v = t(27055);
   function f(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het aanwijsgebied van interactieve elementen in de component is minimaal 44 bij 44 pixels.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   var b = t(24838);
   function w(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Op pagina's met \xe9\xe9n of meerdere Skip Links:" }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zorg ervoor dat de Skip Link naar de hoofdinhoud van de pagina het eerste interactieve element op de pagina is.' }), '\n', (0, r.jsx)(n.li, { children: 'Zorg ervoor dat de Skip Links naar andere onderdelen van de pagina in dezelfde volgorde staan.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Let op: Heeft je website een cookiemelding die altijd over een deel van de pagina staat, waardoor bezoekers de cookiemelding \xe9\xe9rst weg moeten klikken om verder te gaan? Zorg er dan voor dat de cookiemelding nog v\xf3\xf3r de Skip Links focus krijgt en weggeklikt kan worden.' })] });
   }
   function S(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Links die dezelfde functie hebben binnen een website, zien er hetzelfde uit en werken ook hetzelfde.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   var A = t(68413),
    y = t(30536),
    z = t(96412),
    D = t(36599),
    L = t(5081),
    N = t(8584),
    R = t(31820);
   const _ = [
     { title: 'De tekstkleur van de Skip Link heeft voldoende contrast met de achtergrondkleur.', sc: '1.4.3', status: '', component: p.Ay, tags: ['designer'] },
     { title: 'Het label van de Skip Link bestaat uit tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: z.Ay, tags: ['developer', 'contentmaker'] },
     { title: 'De Skip Link slaat 1 of meerdere herhalende contentblokken over.', sc: '2.4.1', status: '', component: L.Ay, tags: ['developer'] },
     {
      title: 'De Skip Link staat vooraan in de focusvolgorde van een pagina en verwijst naar de eerste niet-herhalende content op de pagina.',
      sc: '2.4.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer'],
     },
     {
      title: 'De linktekst van de Skip Link beschrijft duidelijk het linkdoel.',
      sc: '2.4.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
      },
      tags: ['developer', 'contentmaker'],
     },
     { title: 'De Skip Link wordt niet bedekt door een ander element op de pagina.', sc: '2.4.11', status: '', component: N.Ay, tags: ['developer'] },
     { title: 'Als de tekst van de Skip Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: b.Ay, tags: ['developer', 'contentmaker'] },
     {
      title: "Skip Links die op meerdere pagina's voorkomen staan op iedere pagina vooraan in de focusvolgorde van een pagina.",
      sc: '3.2.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
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
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de hele webpagina inzoomt tot 400% veroorzaakt de Skip Link geen horizontale scrollbalk en blijft alle tekst op de pagina leesbaar.', sc: '1.4.10', status: '', component: y.Ay, tags: ['developer', 'designer'] },
     {
      title: 'De tekst in de Skip Link blijft zichtbaar als je de tekstafstand vergoot.',
      sc: '1.4.12',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'Je kunt de Skip Link focussen met de tabtoets en activeren met de entertoets.',
      sc: '2.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
      },
      tags: ['developer'],
     },
     { title: 'Als een gebruiker de Skip Link focust met het toetsenbord, dan moet deze ook weer weg kunnen gaan met het toetsenbord.', sc: '2.1.2', status: '', component: D.Ay, tags: ['developer'] },
     {
      title: 'De Skip Link heeft een zichtbare focusindicator.',
      sc: '2.4.7',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'De Skip Link heeft een zichtbare focusindicator met een dikte van minimaal 2 pixels.',
      sc: '2.4.13',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'De Skip Link activeren met een enkele aanwijzer kan voorkomen of geannuleerd worden.',
      sc: '2.5.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
      },
      tags: ['developer'],
     },
     { title: 'De zichtbare naam van de Skip Link komt voor in de toegankelijke naam.', sc: '2.5.3', status: '', component: v.Ay, tags: ['developer'] },
     {
      title: 'Het aanwijsgebied van de Skip Link is groot genoeg.',
      sc: '2.5.5',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f(e);
      },
      tags: ['developer'],
     },
     { title: 'Als de Skip Link toetsenbordfocus krijgt vindt er geen contextwijziging plaats.', sc: '3.2.1', status: '', component: R.Ay, tags: ['developer'] },
     {
      title: 'Skip Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.',
      sc: '3.2.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(S, { ...e }) }) : S(e);
      },
      tags: ['developer', 'designer'],
     },
     { title: 'De Skip Link heeft een rol van link.', sc: '4.1.2', status: '', component: A.Ay, tags: ['developer'] },
    ];
   var M = t(90495),
    F = t(46447),
    C = t(56421),
    V = t(1292),
    O = t(72401),
    H = t(37131),
    B = t(17889),
    E = t(12013);
   function P(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'gebruik-skip-link', children: 'Gebruik Skip Link' }) }), '\n', (0, r.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, r.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-css', children: '@nl-design-system-candidate/skip-link-css' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.code, { children: 'nl-skip-link' }), ' class name op een ', (0, r.jsx)(n.code, { children: 'a' }), ' element:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="#inhoud" class="nl-skip-link nl-skip-link--visible-on-focus">Naar de inhoud</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/skip-link-css\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/skip-link-css@1/dist/skip-link.css"\n/>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, r.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/skip-link-css/dist/skip-link.css" />\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/skip-link-css/skip-link.css";\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, r.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-react', children: '@nl-design-system-candidate/skip-link-react' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/skip-link-react\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-jsx', children: 'import { SkipLink } from "@nl-design-system-candidate/skip-link-react";\n\nexport const MyComponent = () => <SkipLink href="#inhoud">Direct naar de hoofdinhoud</SkipLink>;\n' }) })] });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(P, { ...e }) }) : P(e);
   }
   var $ = t(90329);
   const U = { title: 'Skip Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Skip Link', pagination_label: 'Skip Link', description: 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.', slug: '/skip-link', keywords: ['anchor link', 'accessibility link', 'blokken omzijlen', 'direct naar link', 'direct naar x', 'content', 'go to content', 'hidden link', 'inhoud', 'inhoud overslaan', 'jump link', 'jump to', 'jump to main content', 'keyboard', 'link', 'naar content', 'naar de inhoud', 'navigeer snel naar', 'overslaan', 'quick link', 'screen reader link', 'section', 'skip link', 'skip links', 'skiplinks', 'skipnav', 'skip to content', 'skip to main', 'skip navigation', 'skip to section', 'skip nav', 'snel naar inhoud', 'spring naar inhoud', 'springlink', 'springplank link'] },
    Z = void 0,
    X = {},
    I = 'Skip Link',
    W = 'Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.',
    J = 74,
    K = o.find((e) => e.number === J),
    q = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function Q(e) {
    const n = { h2: 'h2', h3: 'h3', p: 'p', ...(0, s.R)(), ...e.components },
     { Checklist: t, ChecklistItem: i } = n;
    return (t || ee('Checklist', !0), i || ee('ChecklistItem', !0), (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, r.jsx)(H.Fc, { component: K, headingLevel: 1, description: W }), '\n', (0, r.jsx)(n.p, { children: "Gebruik de Skip Link zodat gebruikers met een toetsenbord of hulpsoftware makkelijk contentblokken kunnen overslaan. Bijvoorbeeld navigatie die op meerdere pagina's herhaald wordt." }), '\n', (0, r.jsx)(O.e, { component: K }), '\n', (0, r.jsx)(M.Zp, { className: 'implementation-card', children: (0, r.jsxs)(M.Wu, { children: [(0, r.jsx)(C.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, r.jsxs)(F.dk, { children: [(0, r.jsxs)(F.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=3462-12790', children: [(0, r.jsx)(V.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, r.jsxs)(F.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=3462-12790', children: [(0, r.jsx)(V.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, r.jsx)(C.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, r.jsxs)(F.dk, { children: [(0, r.jsxs)(F.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-skip-link--documentatie', children: [(0, r.jsx)(V.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, r.jsxs)(F.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/skip-link--documentatie', children: [(0, r.jsx)(V.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, r.jsx)(C.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, r.jsxs)(F.dk, { children: [(0, r.jsxs)(F.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-css', children: [(0, r.jsx)(V.r, { brand: 'npm' }), ' @nl-design-system-candidate/skip-link-css'] }), (0, r.jsxs)(F.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-react', children: [(0, r.jsx)(V.r, { brand: 'npm' }), ' @nl-design-system-candidate/skip-link-react'] }), (0, r.jsxs)(F.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/skip-link-tokens', children: [(0, r.jsx)(V.r, { brand: 'npm' }), ' @nl-design-system-candidate/skip-link-tokens'] })] })] }) }), '\n', (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, r.jsx)(l.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: _.map(({ component: e, ...n }) => (0, r.jsx)(i, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, r.jsx)(a.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: T.map(({ component: e, ...n }) => (0, r.jsx)(i, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(E.o, { omitH1: !0, headingLevel: 2, children: (0, r.jsx)(G, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, r.jsx)(B.B, { tokens: $ }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(H.VK, { component: K, headingLevel: 3 }), '\n', (0, r.jsx)(H.$9, { component: K, headingLevel: 2 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(H.mu, { component: K, headingLevel: 3 }), '\n', (0, r.jsx)(H.K_, { component: K })] }));
   }
   function Y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Q, { ...e }) }) : Q(e);
   }
   function ee(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => a });
   var i = t(46447),
    r = t(13526),
    s = t(33062),
    o = t(86070);
   const a = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, o.jsx)(i.KE, { className: (0, r.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  68413(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'De component en de afzonderlijke interactieve elementen in de component hebben de juiste rol en de juiste attributen voor het aangeven van de staat en de waarde.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => a });
   var i = t(12013),
    r = t(30758),
    s = t(33062),
    o = t(86070);
   const a = ({ component: e }) => {
    const { title: n } = e,
     a = (0, s.fX)(n),
     l = r.lazy(() => t(82839)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(r.Suspense, { fallback: null, children: (0, o.jsx)(i.o, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(l, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => s });
   var i = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...o }) => (0, r.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  82839(e, n, t) {
   var i = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function r(e) {
    if (!t.o(i, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = i[e],
     r = n[0];
    return t.e(n[1]).then(() => t(r));
   }
   ((r.keys = () => Object.keys(i)), (r.id = 82839), (e.exports = r));
  },
  83672(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => a, Zp: () => l });
   var i = t(46447),
    r = t(13526),
    s = t(86070);
   const o = ({ background: e, children: n, className: t, ...i }) => (0, s.jsx)('div', { className: (0, r.A)('card__illustration', e && `card__illustration--${e}`, t), ...i, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: o = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, r.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(i.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, r.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
  96412(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
