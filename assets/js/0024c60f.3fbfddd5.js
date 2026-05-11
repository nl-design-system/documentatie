(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [73512],
 {
  1292(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var a = t(29181),
    r = t(74172),
    i = t(15089),
    o = t(28377),
    s = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(s.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  12013(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var a = t(18439),
    r = t(46447),
    i = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + r;
     }
     return t.toString();
    },
    s = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, i.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return s[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: o = {} }) => (0, i.jsx)(a.x, { components: { ...d(n, t), ...l(r), ...o }, children: e });
  },
  17045(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s, RM: () => i });
   var a = t(86070),
    r = t(18439);
   const i = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  17889(e, n, t) {
   'use strict';
   t.d(n, { B: () => T });
   var a = t(96547),
    r = t(79889),
    i = t(33062),
    o = t(46447),
    s = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    g = t(4603),
    m = t(29181),
    u = t(86070);
   function p({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, u.jsxs)(o.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [s.A, l.Ay, d.Ay] });
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
    w = t(30758);
   const S = { color: h.A, dimension: j.A, fontFamilies: x.A, fontSizes: k.A, fontWeights: b.A, lineHeights: f.A, other: v.A, textDecoration: y.A },
    D = ({ type: e }) => (0, u.jsx)(m.In, { children: (0, w.createElement)(S[e]) });
   var C = t(76223);
   function T({ tokens: e }) {
    const n = (0, i.kD)(e),
     t = (0, C.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     s = (0, i.GT)(n),
     l = s.map((e) => (0, i.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, u.jsxs)(u.Fragment, {
     children: [
      (0, u.jsxs)(o.XI, {
       children: [
        (0, u.jsx)(o.A0, { children: (0, u.jsxs)(o.Hj, { children: [(0, u.jsx)(o.M_, { children: 'name' }), (0, u.jsx)(o.M_, { children: 'type' })] }) }),
        (0, u.jsx)(o.BF, {
         children: s.map((n) => {
          const t = (0, i.o_)(n),
           s = (0, i.eQ)(e, n).$type;
          return (0, u.jsxs)(o.Hj, { children: [(0, u.jsx)(o.nA, { children: (0, u.jsx)(a.C, { children: (0, u.jsx)(o.kf, { children: t }) }) }), (0, u.jsx)(o.nA, { children: (0, u.jsxs)(r.K, { children: [(0, u.jsx)(D, { type: s }), ' ', s] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, u.jsxs)(o.e2, { children: [(0, u.jsx)(p, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, u.jsx)(p, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  19776(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s, RM: () => i });
   var a = t(86070),
    r = t(18439);
   const i = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  30940(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var a = t(86070),
    r = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  33062(e, n, t) {
   'use strict';
   t.d(n, { bo: () => r, KF: () => m, mJ: () => h, VZ: () => w, cR: () => y, Pv: () => j, qZ: () => o, kD: () => f, B2: () => u, Pc: () => l, f4: () => s, GT: () => v, fX: () => i, eQ: () => b, B_: () => k, o_: () => x });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
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
       .map(({ name: a, id: r, value: i }) => {
        const o = /^(.+) URL/.exec(a)[1],
         s = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: a, id: r, value: i, description: s };
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
    w = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, t) {
   'use strict';
   t.d(n, { VK: () => j, $9: () => k, mu: () => x, Fc: () => b, K_: () => f });
   var a = t(29181),
    r = t(13526),
    i = t(1292),
    o = t(90495),
    s = t(54565);
   function l(e) {
    return (0, s.c)() ? e.children() : null;
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
   var g = t(67970),
    m = t(72642),
    u = t(58876),
    p = t(33062);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      i = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: i.map((t) => ({ className: (0, r.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(o.AC, {
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
            r = t?.value,
            s = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || s.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
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
               s.length > 0 && (0, d.jsx)(d.Fragment, { children: s.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
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
      r = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [r ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const r = e && p.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: r && (0, d.jsx)(g.D, { state: r }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    },
    f = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(a.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  40808(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s, RM: () => i });
   var a = t(86070),
    r = t(18439);
   const i = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  41887(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var a = t(86070),
    r = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, a.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  44720(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s, RM: () => i });
   var a = t(86070),
    r = t(18439);
   const i = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, a.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  54565(e, n, t) {
   'use strict';
   t.d(n, { c: () => r });
   var a = t(30758);
   function r() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  63882(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var a = t(86070),
    r = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, a.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  67970(e, n, t) {
   'use strict';
   t.d(n, { D: () => s });
   var a = t(46447),
    r = t(13526),
    i = t(33062),
    o = t(86070);
   const s = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, o.jsx)(a.KE, { className: (0, r.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  72401(e, n, t) {
   'use strict';
   t.d(n, { e: () => s });
   var a = t(12013),
    r = t(30758),
    i = t(33062),
    o = t(86070);
   const s = ({ component: e }) => {
    const { title: n } = e,
     s = (0, i.fX)(n),
     l = r.lazy(() => t(82839)(`./${s}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(r.Suspense, { fallback: null, children: (0, o.jsx)(a.o, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(l, {}) }) });
   };
  },
  72642(e, n, t) {
   'use strict';
   t.d(n, { p: () => i });
   var a = t(13526),
    r = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...o }) => (0, r.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  74359(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o });
   var a = t(86070),
    r = t(18439);
   function i(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  78762(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s, RM: () => i });
   var a = t(86070),
    r = t(18439);
   const i = [];
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Het contrast van de tekstkleur ten opzichte van de achtergrondkleur moet hoog genoeg zijn, zodat de tekst in het algemeen goed leesbaar wordt gevonden.' }), '\n', (0, a.jsx)(n.p, { children: 'De criteria voor kleurcontrast zijn:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23767676', children: '4,5:1 contrast' }), ' voor normale tekst.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23949494', children: '3:1 contrast' }), ' voor grotere letters (vanaf 24 pixels).'] }), '\n', (0, a.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Tekst die over een afbeelding staat, moet ook voldoende contrast hebben met de kleuren in de afbeelding er omheen.' }), '\n', (0, a.jsx)(n.p, { children: 'Deze eis geldt niet voor tekst op een logo of van een merknaam, of tekst op een afbeelding die alleen ter decoratie dient en geen deel uitmaakt van de inhoud.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
   }
  },
  82839(e, n, t) {
   var a = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function r(e) {
    if (!t.o(a, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = a[e],
     r = n[0];
    return t.e(n[1]).then(() => t(r));
   }
   ((r.keys = () => Object.keys(a)), (r.id = 82839), (e.exports = r));
  },
  90495(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => s, Zp: () => l });
   var a = t(46447),
    r = t(13526),
    i = t(86070);
   const o = ({ background: e, children: n, className: t, ...a }) => (0, i.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...a, children: n }),
    s = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: o = 'div', background: s, children: l }) => {
     const d = (e) => ('article' === o ? (0, i.jsx)('article', { ...e }) : 'section' === o ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, r.A)('ma-cardgroup__card', s && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, i.jsx)(a.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  98979(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => P, component: () => O, contentTitle: () => M, default: () => U, description: () => I, frontMatter: () => B, issueNumber: () => V, metadata: () => a, title: () => G, toc: () => $ }));
   const a = JSON.parse('{"id":"componenten/color-sample/index","title":"Color Sample","description":"Toont een voorbeeld van een kleur.","source":"@site/docs/componenten/color-sample/index.mdx","sourceDirName":"componenten/color-sample","slug":"/color-sample","permalink":"/color-sample","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/color-sample/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Color Sample","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Color Sample","pagination_label":"Color Sample","description":"Toont een voorbeeld van een kleur.","slug":"/color-sample","keywords":["color","color code","color example","color fill","color hash","color preview","color sample","color theme","color visual","colour","colour code","colour example","colour fill","colour hash","colour preview","colour sample","colour theme","colour visual","image","kleur","kleurinfo","kleurstaal","kleurvoorbeeld","monster","palette","pantone","solid","sub","swatch","voorbeeld","voorbeeldkleur","voorvertoning"]},"sidebar":"componenten","previous":{"title":"Code Block","permalink":"/code-block"},"next":{"title":"Contact Timeline","permalink":"/contact-timeline"}}');
   var r = t(86070),
    i = t(18439),
    o = t(20151);
   t(30758);
   var s = t(17045),
    l = t(19776),
    d = t(40808),
    c = t(90495),
    g = t(46447),
    m = t(56421),
    u = t(1292),
    p = t(72401);
   function h(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Vertel in tekst welke kleur wordt weergegeven. Denk hierbij bijvoorbeeld de naam van de kleur, de hex-code of de hsl-waarde, de transparantie, het doel van de kleur, de CSS-class.' }), '\n', (0, r.jsxs)(n.p, { children: ['Dan is het voor gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en mensen die slechtziend of kleurenblind zijn ook duidelijk welke kleur bedoeld wordt.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/niet-kleur-alleen/', children: 'Vertrouw niet op kleur alleen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/waarneming/', children: 'Let op verschillen in waarneming van kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Een gebruiker van een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' kan herkennen welk kleurvlak bij welke eigenschappen hoort.\nDit is niet alleen via de visuele informatie beschikbaar, maar ook vanuit de semantiek van de HTML-code.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit kan bijvoorbeeld door het weergeven van het kleurvlak en de data in een tabel ', (0, r.jsx)(n.code, { children: '<table>' }), ', een description list ', (0, r.jsx)(n.code, { children: '<dl>' }), ' of in een ongenummerde lijst ', (0, r.jsx)(n.code, { children: '<ul>' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Opsommingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Tabellen' }) }), '\n'] })] });
   }
   function x(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De Color Sample kan worden voorzien van een beschrijvende alternatieve tekst, doordat ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' of ', (0, r.jsx)(n.code, { children: 'aria-labelledby' }), ' in de component gebruikt kan worden.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function k(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De Color Sample is herkenbaar als afbeelding voor gebruikers van hulpsoftware, zoals ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Het ', (0, r.jsx)(n.code, { children: 'svg' }), '-element in de Color Sample heeft de rol ', (0, r.jsx)(n.code, { children: 'img' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function b(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Een gebruiker van een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' kan herkennen welke kleurvlakken bij welke eigenschappen horen als de gebruiker van boven naar beneden de webpagina doorleest.\nDe connectie tussen kleurvlak en eigenschappen is niet alleen via de visuele informatie beschikbaar, maar ook in de volgorde van de HTML-code in de ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', children: 'DOM' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde/', children: 'Zorg voor een logische volgorde van de informatie' }) }), '\n'] })] });
   }
   var f = t(44720);
   function v(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Geef het kleurvlak (of een kader rond het kleurvlak) een kleurcontrast met de achtergrond van minimaal 3:1. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat het vlak visueel goed te onderscheiden is als kleurvlak.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function y(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Gebruik de Color Sample component altijd in combinatie met tekst.' }), '\n', (0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function w(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Gebruik de Color Sample component altijd in combinatie met tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   var S = t(78762),
    D = t(41887),
    C = t(74359),
    T = t(30940),
    A = t(63882);
   const N = [
    {
     title: 'De eigenschappen van de kleur in de Color Sample zijn in tekst beschreven.',
     sc: '1.1.1',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, i.R)(), ...e.components };
      return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
     },
     tags: ['contentmaker', 'designer'],
    },
    {
     title: 'Het kleurvlak en de bijbehorende eigenschappen horen semantisch bij elkaar.',
     sc: '1.3.1',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, i.R)(), ...e.components };
      return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
     },
     tags: ['contentmaker', 'designer'],
    },
    {
     title: 'Een screenreadergebruiker kan uit de leesvolgorde herkennen welk kleurvlak bij welke eigenschappen hoort.',
     sc: '1.3.2',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, i.R)(), ...e.components };
      return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b(e);
     },
     tags: ['contentmaker', 'designer', 'developer'],
    },
    { title: 'Kleur is niet de enige manier waarop de informatie over de Color Sample beschikbaar is.', sc: '1.4.1', status: '', component: f.Ay, tags: ['contentmaker', 'designer'] },
    { title: 'Het kleurcontrast van de tekst van de eigenschappen van de Color Sample is voldoende.', sc: '1.4.3', status: '', component: S.Ay, tags: ['contentmaker', 'designer'] },
    {
     title: 'Als je de beschrijvende tekst bij een Color Sample vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
     sc: '1.4.4',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, i.R)(), ...e.components };
      return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
     },
     tags: ['developer'],
    },
    {
     title: 'Het kleurvlak is duidelijk te onderscheiden ten opzichte van de achtergrond.',
     sc: '1.4.11',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, i.R)(), ...e.components };
      return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
     },
     tags: ['contentmaker', 'designer'],
    },
    {
     title: 'Als je de tekstafstand van de beschrijvende tekst bij een Color Sample vergroot blijft de tekst in zijn geheel zichtbaar.',
     sc: '1.4.12',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, i.R)(), ...e.components };
      return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
     },
     tags: ['developer'],
    },
    { title: 'De Color Sample is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: D.Ay, tags: ['developer'] },
    { title: 'De Color Sample komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: A.Ay, tags: ['developer'] },
   ];
   (C.Ay, T.Ay);
   var F = t(37131),
    L = t(17889),
    H = t(12013);
   function R(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'gebruik-color-sample', children: 'Gebruik Color Sample' }) }), '\n', (0, r.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, r.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css', children: '@nl-design-system-candidate/color-sample-css' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.code, { children: 'nl-color-sample' }), ' class name op een ', (0, r.jsx)(n.code, { children: 'svg' }), ' element:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<svg role="img" xmlns="http://www.w3.org/2000/svg" class="nl-color-sample" style="color: deeppink;">\n  <path d="M0 0H32V32H0Z" fill="currentcolor" />\n</svg>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan dat je ze goed aan elkaar linkt. Bijvoorbeeld door er een ', (0, r.jsx)(n.code, { children: 'figure' }), ' omheen te zetten:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<h1>Huisstijlkleuren</h1>\n<figure>\n  <svg role="img" xmlns="http://www.w3.org/2000/svg" class="nl-color-sample" style="color: deeppink;">\n    <path d="M0 0H32V32H0Z" fill="currentcolor" />\n  </svg>\n  <figcaption id="kleur-1">Roze</figcaption>\n</figure>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-css\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/color-sample-css@1/dist/color-sample.css"\n/>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, r.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/color-sample-css/dist/color-sample.css" />\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/color-sample-css/color-sample.css";\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, r.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-react', children: '@nl-design-system-candidate/color-sample-react' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-react\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-jsx', children: 'import { ColorSample } from "@nl-design-system-candidate/color-sample-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <ColorSample value="deeppink" />\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan een ', (0, r.jsx)(n.code, { children: 'id' }), ' op de beschrijving die je met ', (0, r.jsx)(n.code, { children: 'aria-labelledby' }), ' koppelt aan de ', (0, r.jsx)(n.code, { children: 'ColorSample' }), ':'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-jsx', children: 'export const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <figure>\n          <ColorSample value="deeppink" />\n          <figcaption>Roze</figcaption>\n        </figure>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(R, { ...e }) }) : R(e);
   }
   const z = JSON.parse('{"nl":{"color-sample":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"block-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"border-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length-percentage>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"border-width":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"inline-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"}}}}'),
    B = { title: 'Color Sample', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Color Sample', pagination_label: 'Color Sample', description: 'Toont een voorbeeld van een kleur.', slug: '/color-sample', keywords: ['color', 'color code', 'color example', 'color fill', 'color hash', 'color preview', 'color sample', 'color theme', 'color visual', 'colour', 'colour code', 'colour example', 'colour fill', 'colour hash', 'colour preview', 'colour sample', 'colour theme', 'colour visual', 'image', 'kleur', 'kleurinfo', 'kleurstaal', 'kleurvoorbeeld', 'monster', 'palette', 'pantone', 'solid', 'sub', 'swatch', 'voorbeeld', 'voorbeeldkleur', 'voorvertoning'] },
    M = void 0,
    P = {},
    G = 'Color Sample',
    I = 'Toont een voorbeeld van een kleur.',
    V = 325,
    O = o.find((e) => e.number === V),
    $ = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...s.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function E(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, i.R)(), ...e.components },
     { Checklist: t, ChecklistItem: a } = n;
    return (t || Z('Checklist', !0), a || Z('ChecklistItem', !0), (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(F.Fc, { component: O, headingLevel: 1, description: I }), '\n', (0, r.jsx)(p.e, { component: O }), '\n', (0, r.jsx)(c.Zp, { className: 'ma-implementation-card', children: (0, r.jsxs)(c.Wu, { children: [(0, r.jsx)(m.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, r.jsxs)(g.dk, { children: [(0, r.jsxs)(g.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, r.jsx)(u.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, r.jsxs)(g.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, r.jsx)(u.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, r.jsx)(m.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, r.jsxs)(g.dk, { children: [(0, r.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-color-sample--documentatie', children: [(0, r.jsx)(u.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, r.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/color-sample--documentatie', children: [(0, r.jsx)(u.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, r.jsx)(m.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, r.jsxs)(g.dk, { children: [(0, r.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css', children: [(0, r.jsx)(u.r, { brand: 'npm' }), ' @nl-design-system-candidate/color-sample-css'] }), (0, r.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-react', children: [(0, r.jsx)(u.r, { brand: 'npm' }), ' @nl-design-system-candidate/color-sample-react'] }), (0, r.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-tokens', children: [(0, r.jsx)(u.r, { brand: 'npm' }), ' @nl-design-system-candidate/color-sample-tokens'] })] })] }) }), '\n', (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, r.jsx)(l.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: N.map(({ component: e, ...n }) => (0, r.jsx)(a, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, r.jsx)(s.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: N.map(({ component: e, ...n }) => (0, r.jsx)(a, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(H.o, { omitH1: !0, headingLevel: 2, children: (0, r.jsx)(_, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, r.jsx)(L.B, { tokens: z }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(F.VK, { component: O, headingLevel: 3 }), '\n', (0, r.jsx)(F.$9, { component: O, headingLevel: 2 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(F.mu, { component: O, headingLevel: 3 }), '\n', (0, r.jsx)(F.K_, { component: O })] }));
   }
   function U(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(E, { ...e }) }) : E(e);
   }
   function Z(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
 },
]);
