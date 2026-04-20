(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [53087],
 {
  1292(e, n, a) {
   'use strict';
   a.d(n, { r: () => g });
   var t = a(29181),
    i = a(74172),
    s = a(15089),
    r = a(28377),
    l = a(33648),
    o = a(83386),
    d = a(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(o.A, {}) });
  },
  12013(e, n, a) {
   'use strict';
   a.d(n, { o: () => c });
   var t = a(18439),
    i = a(46447),
    s = a(86070);
   const r = (e, n) => {
     const a = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === a.protocol) {
      const { pathname: a, search: t, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return a + t + i;
     }
     return a.toString();
    },
    l = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    o = (e) => ({ img: ({ src: n, ...a }) => (0, s.jsx)('img', { ...a, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: a = 1, baseUrl: i = '', components: r = {} }) => (0, s.jsx)(t.x, { components: { ...d(n, a), ...o(i), ...r }, children: e });
  },
  17045(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => l, RM: () => s });
   var t = a(86070),
    i = a(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  17889(e, n, a) {
   'use strict';
   a.d(n, { B: () => H });
   var t = a(96547),
    i = a(79889),
    s = a(33062),
    r = a(46447),
    l = a(68148),
    o = a(9016),
    d = a(91635),
    c = a(30734),
    g = a(4603),
    u = a(29181),
    h = a(86070);
   function m({ children: e, content: n, language: a }) {
    return 'clipboard' in navigator
     ? (0, h.jsxs)(r.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: a, plugins: [l.A, o.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, h.jsx)(u.In, { children: (0, h.jsx)(g.A, {}) })],
       })
     : null;
   }
   var p = a(35193),
    j = a(13088),
    x = a(91525),
    k = a(24214),
    v = a(92081),
    b = a(1375),
    f = a(23436),
    y = a(79532),
    w = a(30758);
   const D = { color: p.A, dimension: j.A, fontFamilies: x.A, fontSizes: k.A, fontWeights: v.A, lineHeights: b.A, other: f.A, textDecoration: y.A },
    S = ({ type: e }) => (0, h.jsx)(u.In, { children: (0, w.createElement)(D[e]) });
   function H({ tokens: e }) {
    const n = (0, s.kD)(e),
     a = (0, s.GT)(n),
     l = a.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     o = JSON.stringify((0, s.Rc)(a));
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsxs)(r.XI, {
       children: [
        (0, h.jsx)(r.A0, { children: (0, h.jsxs)(r.Hj, { children: [(0, h.jsx)(r.M_, { children: 'name' }), (0, h.jsx)(r.M_, { children: 'type' })] }) }),
        (0, h.jsx)(r.BF, {
         children: a.map((n) => {
          const a = (0, s.o_)(n),
           l = (0, s.eQ)(e, n).$type;
          return (0, h.jsxs)(r.Hj, { children: [(0, h.jsx)(r.nA, { children: (0, h.jsx)(t.C, { children: (0, h.jsx)(r.kf, { children: a }) }) }), (0, h.jsx)(r.nA, { children: (0, h.jsxs)(i.K, { children: [(0, h.jsx)(S, { type: l }), ' ', l] }) })] }, a);
         }),
        }),
       ],
      }),
      (0, h.jsxs)(r.e2, { children: [(0, h.jsx)(m, { content: o, language: 'json', children: 'Kopieer als JSON' }), (0, h.jsx)(m, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => l, RM: () => s });
   var t = a(86070),
    i = a(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24838(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => r });
   var t = a(86070),
    i = a(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, t.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33062(e, n, a) {
   'use strict';
   a.d(n, { bo: () => i, KF: () => u, mJ: () => p, VZ: () => D, cR: () => w, Pv: () => j, qZ: () => r, kD: () => b, B2: () => h, Pc: () => o, f4: () => l, GT: () => f, fX: () => s, eQ: () => v, B_: () => k, o_: () => x, Rc: () => y });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return g(c(n));
    },
    h = (e, n) => p(e).includes(n),
    m = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(c(e.projects.flatMap((e) => m(e)))),
    j = (e) => {
     const n = m(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: i, value: s }) => {
        const r = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === r ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: i, value: s, description: l };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    x = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? b(e[a], [...n, a]) : []));
   }
   function f(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, x(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   function y(e) {
    const n = {};
    for (const a of e) {
     let e = n;
     for (const n of a) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const w = () => {
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
   a.d(n, { Ay: () => r });
   var t = a(86070),
    i = a(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, t.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, t.jsx)(n.code, { children: 'em' }), ' of ', (0, t.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, t.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  37131(e, n, a) {
   'use strict';
   a.d(n, { VK: () => j, $9: () => k, mu: () => x, Fc: () => v, K_: () => b });
   var t = a(29181),
    i = a(13526),
    s = a(1292),
    r = a(90495),
    l = a(54565);
   function o(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = a(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(o, {
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
    u = a(72642),
    h = a(58876),
    m = a(33062);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    j = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => m.f4.includes(e.id)),
      s = a && m.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: s.map((a) => ({ className: (0, i.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, m.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, m.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !m.f4.includes(e.id));
     return e && a.length
      ? (0, d.jsx)(r.AC, {
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
            i = a?.value,
            l = (0, m.Pv)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => o.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || l.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: g
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const n = o.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: a }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [i ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: a }) => {
     const i = e && m.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: i && (0, d.jsx)(g.D, { state: i }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    },
    b = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  40808(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => l, RM: () => s });
   var t = a(86070),
    i = a(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  54565(e, n, a) {
   'use strict';
   a.d(n, { c: () => i });
   var t = a(30758);
   function i() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, a) {
   'use strict';
   a.d(n, { D: () => l });
   var t = a(46447),
    i = a(13526),
    s = a(33062),
    r = a(86070);
   const l = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, r.jsx)(t.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, a) {
   'use strict';
   a.d(n, { e: () => l });
   var t = a(12013),
    i = a(30758),
    s = a(33062),
    r = a(86070);
   const l = ({ component: e }) => {
    const { title: n } = e,
     l = (0, s.fX)(n),
     o = i.lazy(() => a(82839)(`./${l}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, r.jsx)(i.Suspense, { fallback: null, children: (0, r.jsx)(t.o, { omitH1: !0, headingLevel: 1, children: (0, r.jsx)(o, {}) }) });
   };
  },
  72642(e, n, a) {
   'use strict';
   a.d(n, { p: () => s });
   var t = a(13526),
    i = a(86070);
   const s = ({ children: e, className: n, level: a = 1, suffix: s, ...r }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...r, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  80545(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => C, component: () => G, contentTitle: () => L, default: () => P, description: () => _, frontMatter: () => T, issueNumber: () => z, metadata: () => t, title: () => R, toc: () => B }));
   const t = JSON.parse('{"id":"componenten/heading/index","title":"Heading","description":"Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.","source":"@site/docs/componenten/heading/index.mdx","sourceDirName":"componenten/heading","slug":"/heading","permalink":"/heading","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading","pagination_label":"Heading","description":"Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.","slug":"/heading","keywords":["bold-text","caption","content","h1","h2","h3","h4","h5","h6","header","heading","heading level","headline","hoofdkop","hoofdstuk","hoofdtekst","hyperlink","kop","kopje","kop tekst","koptekst","linktekst","pagina titel","paragraaf titel","sectie","section","structure","titel","title","tussenkop","tussenkopje","url"]},"sidebar":"componenten","previous":{"title":"Form Summary","permalink":"/form-summary"},"next":{"title":"Heading 1","permalink":"/heading-1"}}');
   var i = a(86070),
    s = a(18439),
    r = a(64792),
    l = (a(64164), a(17045)),
    o = a(19776),
    d = a(40808),
    c = a(90495),
    g = a(46447),
    u = a(56421),
    h = a(1292),
    m = a(72401),
    p = a(37131);
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['In HTML zijn de juiste elementen voor koppen ', (0, i.jsx)(n.code, { children: 'h1' }), ' tot en met ', (0, i.jsx)(n.code, { children: 'h6' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Voor screenreadergebruikers is een goede koppenstructuur een belangrijk navigatiemiddel. Gebruik daarom een heading-element van het juiste niveau met een tekst die de content van de sectie eronder beschrijft. Op die manier ontstaat een duidelijke inhoudsopgave wanneer een gebruiker met hulpsoftware een koppenlijst opvraagt.' }), '\n', (0, i.jsxs)(n.p, { children: ['Wil je tekst alleen maar vormgeven, bijvoorbeeld groter maken? Gebruik dan CSS in combinatie met bijvoorbeeld een ', (0, i.jsx)(n.code, { children: 'span' }), '- of een ', (0, i.jsx)(n.code, { children: 'p' }), '-element, geen heading-element.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Sla geen kopniveaus over, dus bijvoorbeeld een ', (0, i.jsx)(n.code, { children: 'h3' }), ' na een ', (0, i.jsx)(n.code, { children: 'h1' }), '. Gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen dan het idee krijgen dat ze informatie missen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Let erop dat je per pagina 1 ', (0, i.jsx)(n.code, { children: 'h1' }), ' gebruikt en dat deze aan het begin van de ', (0, i.jsx)(n.code, { children: 'main' }), '-content staat. Door niet meer dan 1 ', (0, i.jsx)(n.code, { children: 'h1' }), ' te gebruiken, kan een screenreadergebruiker makkelijk naar het begin van de unieke content springen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Richtlijnen voor koppen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/relaties/#relaties-binnen-typografie', children: 'Gebruik ruimte om relaties te cre\xebren tussen elementen, Relaties binnen typografie' }) }), '\n'] })] });
   }
   function x(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['In HTML zijn de juiste elementen voor koppen ', (0, i.jsx)(n.code, { children: 'h1' }), ' tot en met ', (0, i.jsx)(n.code, { children: 'h6' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Richtlijnen voor koppen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/relaties/#relaties-binnen-typografie', children: 'Gebruik ruimte om relaties te cre\xebren tussen elementen, Relaties binnen typografie' }) }), '\n'] })] });
   }
   var k = a(83329),
    v = a(83672),
    b = a(34257);
   function f(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De tekst van de kop beschrijft kort en bondig waar de tekst eronder over gaat, als een soort samenvatting.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }) }), '\n'] })] });
   }
   var y = a(24838);
   const w = [
     {
      title: 'Het niveau van de kop klopt binnen de koppenstructuur van de pagina.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
      },
      tags: ['contentmaker'],
     },
     { title: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: v.Ay, tags: ['designer', 'contentmaker'] },
     {
      title: 'De koptekst maakt duidelijk waar de sectie over gaat.',
      sc: '2.4.6',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'Als de kop in een andere taal is dan de rest van de pagina, dan heeft het lang-attribuut de juiste taalcode.', sc: '3.1.2', status: '', component: y.Ay, tags: ['contentmaker', 'developer'] },
    ],
    D = [
     {
      title: 'Als tekst er uitziet als een kop, moet dit ook in de HTML een kop zijn.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: b.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: k.Ay, tags: ['developer'] },
    ];
   var S = a(17889),
    H = a(12013);
   function A(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'gebruik-code', children: 'Gebruik Code' }) }), '\n', (0, i.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, i.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-css', children: '@nl-design-system-candidate/heading-css' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/heading-css\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/heading-css@1/dist/heading.css" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, i.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/heading-css/dist/heading.css" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/heading-css/heading.css";\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'heading-level-1', children: 'Heading level 1' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik voor een hoofdkop van een pagina de ', (0, i.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, i.jsx)(n.code, { children: 'nl-heading--level-1' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'h1' }), ', element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h1 class="nl-heading nl-heading--level-1">Hoofdkop van de pagina</h1>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'heading-level-2', children: 'Heading level 2' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik voor een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat de ', (0, i.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, i.jsx)(n.code, { children: 'nl-heading--level-2' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'h2' }), ', element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h2 class="nl-heading nl-heading--level-2">\n  Een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat\n</h2>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'heading-level-3', children: 'Heading level 3' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het derde niveau staat de ', (0, i.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, i.jsx)(n.code, { children: 'nl-heading--level-3' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'h3' }), ', element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h3 class="nl-heading nl-heading--level-3">Een koptekst die in de koppenstructuur op het derde niveau staat</h3>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'heading-level-4', children: 'Heading level 4' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het vierde niveau staat de ', (0, i.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, i.jsx)(n.code, { children: 'nl-heading--level-4' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'h4' }), ', element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h4 class="nl-heading nl-heading--level-4">Een koptekst die in de koppenstructuur op het vierde niveau staat</h4>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'heading-level-5', children: 'Heading level 5' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het vijfde niveau staat de ', (0, i.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, i.jsx)(n.code, { children: 'nl-heading--level-5' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'h5' }), ', element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h5 class="nl-heading nl-heading--level-5">Een koptekst die in de koppenstructuur op het vijfde niveau staat</h5>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'heading-level-6', children: 'Heading level 6' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het zesde niveau staat de ', (0, i.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, i.jsx)(n.code, { children: 'nl-heading--level-5' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'h6' }), ', element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h6 class="nl-heading nl-heading--level-6">Een koptekst die in de koppenstructuur op het zesde niveau staat</h6>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'kop-gebruiken-met-het-uiterlijk-van-een-ander-level', children: 'Kop gebruiken met het uiterlijk van een ander level' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik voor een koptekst die semantisch op het ene level staat, maar visueel de uitstraling heeft van een ander level de ', (0, i.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, i.jsx)(n.code, { children: 'nl-heading--level-{het visuele level}' }), ' op het semantische heading component naar keuze:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h2 class="nl-heading nl-heading--level-4">\n  Een koptekst die in de koppenstructuur op het tweede level staat en eruit ziet als het vierde level.\n</h2>\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, i.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-react', children: '@nl-design-system-candidate/heading-react' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/heading-react\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-jsx', children: 'import { Heading } from "@nl-design-system-candidate/heading-react";\n\nexport const MyComponent = () => {\n  return (\n    <div>\n      <Heading level={2} appearance="level-4"></Heading>\n    </div>\n  );\n};\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Of inclusief CSS:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-jsx', children: 'import { Heading } from "@nl-design-system-candidate/heading-react/css";\n\nexport const MyComponent = () => {\n  return (\n    <div>\n      <Heading level={2} appearance="level-4"></Heading>\n    </div>\n  );\n};\n' }) })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(A, { ...e }) }) : A(e);
   }
   var F = a(83766);
   const T = { title: 'Heading', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading', pagination_label: 'Heading', description: 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.', slug: '/heading', keywords: ['bold-text', 'caption', 'content', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'heading', 'heading level', 'headline', 'hoofdkop', 'hoofdstuk', 'hoofdtekst', 'hyperlink', 'kop', 'kopje', 'kop tekst', 'koptekst', 'linktekst', 'pagina titel', 'paragraaf titel', 'sectie', 'section', 'structure', 'titel', 'title', 'tussenkop', 'tussenkopje', 'url'] },
    L = void 0,
    C = {},
    R = 'Heading',
    _ = 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.',
    z = 114,
    G = r.find((e) => e.number === z),
    B = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...o.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...l.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'Heading level 1', id: 'heading-level-1', level: 3 }, { value: 'Heading level 2', id: 'heading-level-2', level: 3 }, { value: 'Heading level 3', id: 'heading-level-3', level: 3 }, { value: 'Heading level 4', id: 'heading-level-4', level: 3 }, { value: 'Heading level 5', id: 'heading-level-5', level: 3 }, { value: 'Heading level 6', id: 'heading-level-6', level: 3 }, { value: 'Kop gebruiken met het uiterlijk van een ander level', id: 'kop-gebruiken-met-het-uiterlijk-van-een-ander-level', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function M(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, s.R)(), ...e.components },
     { Checklist: a, ChecklistItem: t } = n;
    return (a || I('Checklist', !0), t || I('ChecklistItem', !0), (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(p.Fc, { component: G, headingLevel: 1, description: _ }), '\n', (0, i.jsx)(m.e, { component: G }), '\n', (0, i.jsx)(c.Zp, { className: 'ma-implementation-card', children: (0, i.jsxs)(c.Wu, { children: [(0, i.jsx)(u.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, i.jsxs)(g.dk, { children: [(0, i.jsxs)(g.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1039', children: [(0, i.jsx)(h.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, i.jsxs)(g.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1039', children: [(0, i.jsx)(h.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, i.jsx)(u.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, i.jsxs)(g.dk, { children: [(0, i.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-heading--documentatie', children: [(0, i.jsx)(h.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, i.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/heading--documentatie', children: [(0, i.jsx)(h.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, i.jsx)(u.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, i.jsxs)(g.dk, { children: [(0, i.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-css', children: [(0, i.jsx)(h.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-css'] }), (0, i.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-react', children: [(0, i.jsx)(h.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-react'] }), (0, i.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-tokens', children: [(0, i.jsx)(h.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-tokens'] })] })] }) }), '\n', (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, i.jsx)(o.Ay, {}), '\n', (0, i.jsx)(a, { headingLevel: '4', children: w.map(({ component: e, ...n }) => (0, i.jsx)(t, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(a, { headingLevel: '4', children: D.map(({ component: e, ...n }) => (0, i.jsx)(t, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(H.o, { omitH1: !0, headingLevel: 2, children: (0, i.jsx)(N, {}) }), '\n', (0, i.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, i.jsx)(S.B, { tokens: F }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(p.VK, { component: G, headingLevel: 3 }), '\n', (0, i.jsx)(p.$9, { component: G, headingLevel: 2 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(p.mu, { component: G, headingLevel: 3 }), '\n', (0, i.jsx)(p.K_, { component: G })] }));
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(M, { ...e }) }) : M(e);
   }
   function I(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  82839(e, n, a) {
   var t = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function i(e) {
    if (!a.o(t, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = t[e],
     i = n[0];
    return a.e(n[1]).then(() => a(i));
   }
   ((i.keys = () => Object.keys(t)), (i.id = 82839), (e.exports = i));
  },
  83329(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => r });
   var t = a(86070),
    i = a(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, t.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, t.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, t.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, t.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, t.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, t.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, t.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, t.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, t.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, t.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83672(e, n, a) {
   'use strict';
   a.d(n, { Ay: () => r });
   var t = a(86070),
    i = a(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, t.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, t.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  90495(e, n, a) {
   'use strict';
   a.d(n, { AC: () => d, Fu: () => r, Wu: () => l, Zp: () => o });
   var t = a(46447),
    i = a(13526),
    s = a(86070);
   const r = ({ background: e, children: n, className: a, ...t }) => (0, s.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    l = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    o = ({ href: e, appearance: n, className: a, component: r = 'div', background: l, children: o }) => {
     const d = (e) => ('article' === r ? (0, s.jsx)('article', { ...e }) : 'section' === r ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: o });
     return e ? (0, s.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, s.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
 },
]);
