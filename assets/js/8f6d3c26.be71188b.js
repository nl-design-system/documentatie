(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50537],
 {
  1292(e, n, a) {
   'use strict';
   a.d(n, { r: () => u });
   var t = a(29181),
    l = a(74172),
    i = a(15089),
    s = a(28377),
    o = a(33648),
    r = a(83386),
    d = a(86070);
   const g = { figma: (0, d.jsx)(l.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(t.In, { children: g[e] || (0, d.jsx)(r.A, {}) });
  },
  12013(e, n, a) {
   'use strict';
   a.d(n, { o: () => g });
   var t = a(18439),
    l = a(46447),
    i = a(86070);
   const s = (e, n) => {
     const a = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === a.protocol) {
      const { pathname: a, search: t, hash: l } = new URL(n, new URL(e, 'http://example.com/'));
      return a + t + l;
     }
     return a.toString();
    },
    o = { 1: {}, 2: { h1: l.fV, h2: l._B, h3: l.f_, h4: l.mM, h5: l.TT }, 3: { h1: l._B, h2: l.f_, h3: l.mM, h4: l.TT, h5: l.TT }, 4: { h1: l.f_, h2: l.mM, h3: l.TT, h4: l.TT, h5: l.TT }, 5: { h1: l.mM, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT }, 6: { h1: l.TT, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT } },
    r = (e) => ({ img: ({ src: n, ...a }) => (0, i.jsx)('img', { ...a, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    g = ({ children: e, omitH1: n = !1, headingLevel: a = 1, baseUrl: l = '', components: s = {} }) => (0, i.jsx)(t.x, { components: { ...d(n, a), ...r(l), ...s }, children: e });
  },
  33062(e, n, a) {
   'use strict';
   a.d(n, { bo: () => l, KF: () => m, mJ: () => p, VZ: () => D, cR: () => T, Pv: () => v, qZ: () => s, kD: () => x, B2: () => c, Pc: () => r, f4: () => o, GT: () => k, fX: () => i, eQ: () => b, B_: () => q, o_: () => f, Rc: () => j });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    l = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    r = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function g(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return u(g(n));
    },
    c = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(g(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => u(g(e.projects.flatMap((e) => h(e)))),
    v = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: l, value: i }) => {
        const s = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === s ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: t, id: l, value: i, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    q = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? x(e[a], [...n, a]) : []));
   }
   function k(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   function j(e) {
    const n = {};
    for (const a of e) {
     let e = n;
     for (const n of a) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const T = () => {
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
  37131(e, n, a) {
   'use strict';
   a.d(n, { VK: () => v, $9: () => q, mu: () => f, Fc: () => b, K_: () => x });
   var t = a(29181),
    l = a(13526),
    i = a(1292),
    s = a(90495),
    o = a(54565);
   function r(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = a(86070);
   const g = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(r, {
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
   var u = a(67970),
    m = a(72642),
    c = a(58876),
    h = a(33062);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    v = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => h.f4.includes(e.id)),
      i = a && h.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: i.map((a) => ({ className: (0, l.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, h.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(c.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && a.length
      ? (0, d.jsx)(s.AC, {
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
            l = a?.value,
            o = (0, h.Pv)(e),
            r = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${l} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${l} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => r.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || o.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: u
                   .filter((e) => !!r.get(e.name))
                   .map((e) => {
                    const n = r.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: a }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [l, ' in ', e] }), (0, d.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    q = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      l = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [l ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: l, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: a }) => {
     const l = e && h.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: l && (0, d.jsx)(u.D, { state: l }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    },
    x = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, a) {
   'use strict';
   a.d(n, { c: () => l });
   var t = a(30758);
   function l() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, a) {
   'use strict';
   a.d(n, { D: () => o });
   var t = a(46447),
    l = a(13526),
    i = a(33062),
    s = a(86070);
   const o = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, l.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  71909(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => k, component: () => F, contentTitle: () => x, default: () => N, description: () => T, frontMatter: () => b, issueNumber: () => D, metadata: () => t, title: () => j, toc: () => H }));
   const t = JSON.parse('{"id":"componenten/heading-3/index","title":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","source":"@site/docs/componenten/heading-3/index.mdx","sourceDirName":"componenten/heading-3","slug":"/heading-3","permalink":"/heading-3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-3/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 3","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 3","pagination_label":"Heading 3","description":"Koptekst die in de koppenstructuur op het derde niveau staat.","slug":"/heading-3","keywords":["caption","content","h3","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 2","permalink":"/heading-2"},"next":{"title":"Heading 4","permalink":"/heading-4"}}');
   var l,
    i,
    s,
    o,
    r,
    d,
    g,
    u = a(86070),
    m = a(18439),
    c = a(64792),
    h = a(30758);
   function p() {
    return (
     (p = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n];
          for (var t in a) ({}).hasOwnProperty.call(a, t) && (e[t] = a[t]);
         }
         return e;
        }),
     p.apply(null, arguments)
    );
   }
   const v = ({ title: e, titleId: n, ...a }) => h.createElement('svg', p({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst die iets groter is dan gebruikelijk, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': n }, a), e ? h.createElement('title', { id: n }, e) : null, l || (l = h.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = h.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 240v60' })), o || (o = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = h.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = h.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), g || (g = h.createElement('path', { fill: '#0A2750', d: 'M322.672 254.464v3.096l.048 3.048h.792q2.064 0 3.24-1.68 1.2-1.704 1.2-4.824 0-3.168-1.2-4.824-1.176-1.656-3.216-1.656h-.816l-.048 3v3.84m-5.88-6.936v-1.296h7.128q2.568 0 4.392.96a6.6 6.6 0 0 1 2.808 2.688q.984 1.752.984 4.2 0 2.496-1.056 4.272t-3 2.712q-1.92.936-4.56.936h-6.696v-1.296l1.8-.192q.048-1.464.048-2.976v-6.84q0-1.512-.048-2.976zM333.642 262v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.914 14.112q-1.608 0-2.52-.768-.912-.792-.912-2.568v-1.152q.024-.552.024-1.248v-4.584h-1.56v-1.416l1.776-.24 1.2-3.36h2.448l-.048 3.384h2.52v1.632h-2.52v6.72q0 .84.336 1.248.36.384.888.384.624 0 1.296-.528l.6.576a3.5 3.5 0 0 1-1.344 1.416q-.84.504-2.184.504m9.222-.36v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V262zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528m8.578 14.112q-2.28 0-4.176-1.104l.072-2.928h1.92l.408 2.376q.432.168.864.264.432.072.936.072 1.032 0 1.584-.336.552-.36.552-1.08 0-.552-.408-.96t-1.608-.744l-1.296-.384q-1.392-.408-2.16-1.32-.744-.912-.744-2.256 0-1.656 1.296-2.784 1.296-1.152 3.72-1.152a6.8 6.8 0 0 1 1.944.264q.912.24 1.848.72l-.168 2.616h-1.92l-.48-2.064q-.504-.192-1.32-.192t-1.32.336q-.48.336-.48 1.008 0 .48.384.864.384.36 1.632.744l1.176.336q1.704.504 2.448 1.44t.744 2.28q0 1.896-1.464 2.952-1.44 1.032-3.984 1.032m17.782-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm27.218-10.536v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.176-.24v-1.056h6.816v1.056l-1.512.312 2.256 6.144 2.088-6.168zm10.824 10.896q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m13.734 1.248q-1.872 0-3.24-.768a5.44 5.44 0 0 1-2.112-2.184q-.744-1.416-.744-3.264t.792-3.216a5.8 5.8 0 0 1 2.208-2.136q1.392-.768 3.096-.768t3.072.744a5.56 5.56 0 0 1 2.208 2.136q.816 1.368.816 3.24t-.744 3.264a5.44 5.44 0 0 1-2.112 2.184q-1.368.768-3.24.768m0-1.248q1.008 0 1.512-1.176t.504-3.72q0-2.568-.504-3.744t-1.512-1.176q-1.032 0-1.536 1.176t-.504 3.744q0 2.544.504 3.72t1.536 1.176m7.426.888v-1.128l1.32-.264q.024-.888.024-1.896v-3.168q0-.672-.024-1.104 0-.432-.024-.792 0-.384-.024-.864l-1.464-.216v-.936l4.728-1.608.432.264.216 2.832q.504-1.536 1.416-2.304.912-.792 1.8-.792.792 0 1.368.456.576.432.72 1.32-.024.936-.504 1.464-.48.504-1.2.504-1.008 0-1.848-1.128l-.144-.192a6 6 0 0 0-.984 1.272 6 6 0 0 0-.624 1.608v3.336q0 .96.024 1.8l1.896.408V262zm10.619.024v-1.128l1.272-.264q.024-.864.024-1.872v-11.904l-1.488-.192v-1.008l4.968-1.08.384.24-.096 3.36v3.384q1.512-1.536 3.48-1.536 1.32 0 2.376.696 1.056.672 1.68 2.04.648 1.344.648 3.336 0 1.944-.72 3.36-.72 1.392-1.896 2.16a4.55 4.55 0 0 1-2.52.744q-1.968 0-3.168-1.416l-.408 1.392zm6.792-9.912q-.456 0-.864.192a4 4 0 0 0-.792.504v6.864q.744.672 1.632.672 1.056 0 1.728-1.032.696-1.032.696-3.144 0-2.136-.672-3.096-.648-.96-1.728-.96m13.948-.84q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.468-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.069-.36v-1.128l1.32-.288q.024-.912.024-1.824a68 68 0 0 0 .024-1.8v-10.056l-1.488-.24v-1.008l5.04-1.08.384.24-.096 3.36v10.608l.048 1.824 1.32.264V262zm11.886-5.736q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V262zm18.303-10.8v-1.056h4.536v1.056l-1.392.264-3.96 10.32h-1.824l-4.32-10.344-1.177-.24v-1.056h6.817v1.056l-1.512.312 2.256 6.144 2.088-6.168zm14.015 10.872q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m9.126 3.336v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm25.874-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m12.467-11.088q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.888-3.384.912-1.392 2.328-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m6.516-.36v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V262h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V262zm-293.039 30v-1.128l1.296-.288q.024-.864.024-1.872v-11.808l-1.488-.24v-1.008l4.968-1.08.384.24-.096 3.36v3.864q.96-1.128 1.848-1.56a4.34 4.34 0 0 1 1.968-.456q1.584 0 2.544 1.032t.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.312v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.176-.288-1.632-.264-.456-1.008-.456-.48 0-1.032.288a4.9 4.9 0 0 0-1.104.816v5.28q0 1.008.024 1.896l1.128.24V292zm20.765-10.728q-.672 0-1.248.84-.552.816-.624 3.024h2.04q.864 0 1.152-.336.312-.36.312-1.176 0-1.2-.48-1.776t-1.152-.576m.048 11.088q-1.752 0-3.096-.72a5.36 5.36 0 0 1-2.112-2.112q-.768-1.392-.768-3.312 0-2.016.887-3.384.913-1.392 2.329-2.088a6.4 6.4 0 0 1 2.952-.72q1.584 0 2.688.672a4.35 4.35 0 0 1 1.704 1.824q.576 1.128.576 2.592 0 .696-.144 1.272h-6.936q.12 1.896 1.032 2.808.936.888 2.184.888.984 0 1.68-.36a5 5 0 0 0 1.224-.936l.84.768q-.744 1.416-2.016 2.112t-3.024.696m15.733-.024q-2.088 0-2.64-1.728-.768.816-1.488 1.296-.696.456-1.944.456-1.392 0-2.28-.792-.864-.792-.864-2.28 0-.864.384-1.56t1.392-1.296 2.856-1.128q.36-.12.84-.24t.984-.24v-.792q0-1.608-.408-2.184-.384-.576-1.536-.576h-.312q-.144 0-.336.024l-.12 1.056q-.024 1.176-.552 1.704-.504.528-1.2.528-1.32 0-1.608-1.2.096-1.488 1.512-2.424t4.008-.936q2.304 0 3.288 1.056 1.008 1.056 1.008 3.48v5.376q0 .696.528.696a.7.7 0 0 0 .36-.096q.168-.12.36-.432l.648.432q-.432.96-1.128 1.392-.672.408-1.752.408m-5.664-3.672q0 .888.408 1.32a1.41 1.41 0 0 0 1.584.312q.288-.12.912-.552v-3.888a10 10 0 0 0-.624.216q-.288.096-.504.192-.816.336-1.296.96-.48.6-.48 1.44m13.206-2.4q0 1.968.696 3 .696 1.008 1.8 1.008.816 0 1.488-.552v-7.152a2.26 2.26 0 0 0-1.416-.504q-1.104 0-1.848 1.032-.72 1.032-.72 3.168m4.296 6-.192-1.368q-1.392 1.464-3.384 1.464a4.5 4.5 0 0 1-2.448-.696q-1.08-.696-1.704-2.04-.624-1.368-.624-3.312 0-1.968.744-3.36.768-1.416 1.968-2.16 1.224-.768 2.568-.768.936 0 1.632.336.696.312 1.272.936v-4.392l-1.68-.24v-1.008l5.064-1.08.384.24-.096 3.36v12.456l1.176.24V292zm5.922-.264v-1.128l1.296-.288q.024-.864.024-1.872v-2.904q0-.984-.024-1.632 0-.672-.048-1.392l-1.488-.216v-.936l5.04-1.608.408.264-.072 3.48v4.968q0 1.008.024 1.896l1.2.24V292zm3.192-13.752q-.84 0-1.44-.528-.6-.552-.6-1.368 0-.84.6-1.368.6-.552 1.44-.552t1.44.552q.6.528.6 1.368 0 .816-.6 1.368-.6.528-1.44.528M378.524 292v-1.128l1.296-.288q.024-.864.024-1.872v-3.144q0-.984-.024-1.512 0-.552-.048-1.272l-1.464-.216v-.936l4.728-1.608.432.264.144 1.728q.936-1.104 1.848-1.536a4.5 4.5 0 0 1 1.992-.456q1.56 0 2.496 1.032.96 1.032.96 3.096v4.608q0 .984.024 1.872l1.2.24V292h-6.336v-1.128l1.248-.264q.024-.888.024-1.872v-4.296q0-1.152-.312-1.608-.312-.48-1.008-.48-.936 0-2.064.864v5.52q0 1.008.024 1.896l1.128.24V292zm19.997-5.376q.84 0 1.248-.744.432-.744.432-2.016t-.432-1.968q-.408-.72-1.2-.72-.816 0-1.224.72t-.408 1.992.384 2.016q.384.72 1.2.72m-3.192 7.368q0 1.056.792 1.536.792.504 2.424.504 1.8 0 2.712-.528t.912-1.32q0-.528-.384-.96-.384-.408-1.368-.408h-2.52q-1.32 0-2.184-.216-.192.336-.288.648a2.6 2.6 0 0 0-.096.744m3.216-6.24q-1.248 0-2.184-.288a2.2 2.2 0 0 0-.288 1.104q0 .408.312.672.312.24 1.08.24h2.808q1.824 0 2.904.456 1.08.432 1.536 1.224.48.768.48 1.824 0 1.2-.792 2.208-.792 1.032-2.376 1.632-1.56.624-3.864.624-1.992 0-3.12-.408-1.128-.384-1.584-1.032t-.456-1.368q0-1.536 1.992-2.472-.744-.312-1.08-.816a2.06 2.06 0 0 1-.312-1.104q0-.84.48-1.584.504-.768 1.392-1.536-.984-.504-1.464-1.344a3.7 3.7 0 0 1-.48-1.872q0-1.68 1.224-2.784 1.248-1.104 3.792-1.104 1.296 0 2.256.288t1.56.816l2.688-1.152.384.24v1.848h-2.28q.432.792.432 1.848 0 1.608-1.248 2.736-1.224 1.104-3.792 1.104' })));
   var f = a(72401),
    q = a(37131);
   const b = { title: 'Heading 3', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 3', pagination_label: 'Heading 3', description: 'Koptekst die in de koppenstructuur op het derde niveau staat.', slug: '/heading-3', keywords: ['caption', 'content', 'h3', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    k = {},
    j = 'Heading 3',
    T = 'Koptekst die in de koppenstructuur op het derde niveau staat.',
    D = 259,
    F = c.find((e) => e.number === D),
    H = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function L(e) {
    const n = { h2: 'h2', ...(0, m.R)(), ...e.components },
     { ComponentAnatomy: a } = n;
    return (
     a ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, u.jsxs)(u.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, u.jsx)(q.Fc, { component: F, headingLevel: 1, description: T }), '\n', (0, u.jsx)(f.e, { component: F }), '\n', (0, u.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, u.jsx)(a, { component: F, illustration: v }), '\n', (0, u.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, u.jsx)(q.VK, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, u.jsx)(q.mu, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(q.K_, { component: F }), '\n', (0, u.jsx)(q.$9, { component: F, headingLevel: 2 })] })
    );
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, m.R)(), ...e.components };
    return n ? (0, u.jsx)(n, { ...e, children: (0, u.jsx)(L, { ...e }) }) : L(e);
   }
  },
  72401(e, n, a) {
   'use strict';
   a.d(n, { e: () => o });
   var t = a(12013),
    l = a(30758),
    i = a(33062),
    s = a(86070);
   const o = ({ component: e }) => {
    const { title: n } = e,
     o = (0, i.fX)(n),
     r = l.lazy(() => a(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(l.Suspense, { fallback: null, children: (0, s.jsx)(t.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(r, {}) }) });
   };
  },
  72642(e, n, a) {
   'use strict';
   a.d(n, { p: () => i });
   var t = a(13526),
    l = a(86070);
   const i = ({ children: e, className: n, level: a = 1, suffix: i, ...s }) => (0, l.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...s, children: [(0, l.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, l.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  82839(e, n, a) {
   var t = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function l(e) {
    if (!a.o(t, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = t[e],
     l = n[0];
    return a.e(n[1]).then(() => a(l));
   }
   ((l.keys = () => Object.keys(t)), (l.id = 82839), (e.exports = l));
  },
  90495(e, n, a) {
   'use strict';
   a.d(n, { AC: () => d, Fu: () => s, Wu: () => o, Zp: () => r });
   var t = a(46447),
    l = a(13526),
    i = a(86070);
   const s = ({ background: e, children: n, className: a, ...t }) => (0, i.jsx)('div', { className: (0, l.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    o = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    r = ({ href: e, appearance: n, className: a, component: s = 'div', background: o, children: r }) => {
     const d = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      g = (0, i.jsx)(d, { className: (0, l.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: r });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, i.jsx)('div', { className: (0, l.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
 },
]);
