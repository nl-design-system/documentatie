'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77598],
 {
  1292(e, n, a) {
   a.d(n, { r: () => u });
   var t = a(29181),
    i = a(74172),
    l = a(15089),
    r = a(28377),
    o = a(33648),
    s = a(83386),
    d = a(86070);
   const g = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(l.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(t.In, { children: g[e] || (0, d.jsx)(s.A, {}) });
  },
  12013(e, n, a) {
   a.d(n, { o: () => g });
   var t = a(18439),
    i = a(46447),
    l = a(86070);
   const r = (e, n) => {
     const a = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === a.protocol) {
      const { pathname: a, search: t, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return a + t + i;
     }
     return a.toString();
    },
    o = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    s = (e) => ({ img: ({ src: n, ...a }) => (0, l.jsx)('img', { ...a, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    g = ({ children: e, omitH1: n = !1, headingLevel: a = 1, baseUrl: i = '', components: r = {} }) => (0, l.jsx)(t.x, { components: { ...d(n, a), ...s(i), ...r }, children: e });
  },
  33062(e, n, a) {
   a.d(n, { bo: () => i, KF: () => m, mJ: () => p, VZ: () => w, cR: () => T, Pv: () => b, qZ: () => r, kD: () => v, B2: () => c, Pc: () => s, f4: () => o, GT: () => f, fX: () => l, eQ: () => k, B_: () => x, o_: () => j });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    l = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
    b = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: i, value: l }) => {
        const r = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === r ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: i, value: l, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? v(e[a], [...n, a]) : []));
   }
   function f(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   const T = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, a) {
   a.d(n, { VK: () => b, $9: () => x, mu: () => j, Fc: () => k, K_: () => v });
   var t = a(29181),
    i = a(13526),
    l = a(1292),
    r = a(90495),
    o = a(54565);
   function s(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = a(86070);
   const g = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(s, {
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
    b = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => h.f4.includes(e.id)),
      l = a && h.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: l.map((a) => ({ className: (0, i.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, h.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(c.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !h.f4.includes(e.id));
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
            o = (0, h.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => s.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || o.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: u
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(l.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: a }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(l.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [i ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    k = ({ component: e, headingLevel: n, description: a }) => {
     const i = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: i && (0, d.jsx)(u.D, { state: i }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    },
    v = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  52670(e, n, a) {
   (a.r(n), a.d(n, { assets: () => c, component: () => j, contentTitle: () => m, default: () => v, description: () => p, frontMatter: () => u, issueNumber: () => b, metadata: () => t, title: () => h, toc: () => x }));
   const t = JSON.parse('{"id":"componenten/table/index","title":"Table","description":"Structureert data in rijen en kolommen.","source":"@site/docs/componenten/table/index.mdx","sourceDirName":"componenten/table","slug":"/table","permalink":"/table","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/table/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Table","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Table","pagination_label":"Table","description":"Structureert data in rijen en kolommen.","slug":"/table","keywords":["basic table","column","data","data grid","data table","data view","detailslist","dynamic table","grid","kolom","layout","markup table","responsive table","rij","row","semantic table","spreadsheet","tabel","table","table-grid","table tree"]},"sidebar":"componenten","previous":{"title":"Switch","permalink":"/switch"},"next":{"title":"Tabs","permalink":"/tabs"}}');
   var i = a(86070),
    l = a(18439),
    r = a(20151),
    o = a(37131),
    s = a(12013);
   function d(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'tabel', children: 'Tabel' }) }), '\n', (0, i.jsx)(n.p, { children: "Er zijn eindeloos veel varianten van de tabel, daarom is het niet mogelijk op \xe9\xe9n pagina een volledig overzicht te hebben met tips. Op deze pagina zullen we algemene tips geven. In de toekomst willen we losse pagina's aanbieden voor speciale soorten tabellen." }), '\n', (0, i.jsx)(n.h2, { id: 'duidelijke-koppen', children: 'Duidelijke koppen' }), '\n', (0, i.jsxs)(n.p, { children: ['In tabellen staat vaak veel informatie en daarom helpen koppen gebruikers om snel informatie over te slaan die niet relevant is. De data in tabellen kan op drie niveaus koppen bevatten: kop van de tabel (', (0, i.jsx)(n.em, { children: 'caption' }), '), kop van de kolom (', (0, i.jsx)(n.em, { children: 'column header' }), ') en kop van de rij (', (0, i.jsx)(n.em, { children: 'row header' }), '). Het is belangrijk dat je precies de goede HTML gebruikt voor elke kop:'] }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<caption>' }), ' voor de kop van de tabel'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<th scope="col">' }), ' voor de kop van de kolom'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<th scope="row">' }), ' voor de kop van de rij'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'sorteer-de-tabelrijen', children: 'Sorteer de tabelrijen' }), '\n', (0, i.jsxs)(n.p, { children: ['Voor gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is het belangrijk dat je de kolom kunt vinden waarop gesorteerd is, en dat je makkelijk vanuit die kolom naar de vorige of volgende rij kunt gaan om snel de relevante rij te vinden. Wanneer je informatie zoekt op een bepaalde datum dan is het belangrijk dat je met \xe9\xe9n druk op de knop naar de volgende datum kunt gaan, daarna nog een keer, enzovoorts.'] }), '\n', (0, i.jsx)(n.p, { children: 'Als je de informatie niet kan vinden bij de datum die je verwacht, dan is het belangrijk om te weten dat op datum is gesorteerd: alleen dan kun weet je zeker dat de informatie helemaal niet in de tabel staat.' }), '\n', (0, i.jsxs)(n.p, { children: ['Plaats de gegevens waarop gesorteerd is in een eigen kolom, en geef met ', (0, i.jsx)(n.code, { children: 'aria-sort="\u2026"' }), ' aan dat deze kolom de volgorde bepaalt.'] }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption>\n    Openingstijden gemeentehuis\n  </caption>\n  <thead>\n    <tr>\n      <th scope="col" aria-sort="ascending">Dag</th>\n      <th scope="col">Geopend</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Maandag</th>\n      <td>12:00\u201418:00</td>\n    </tr>\n    <tr>\n      <th scope="row">Dinsdag</th>\n      <td>08:00\u201418:00</td>\n    </tr>\n    \u2026\n  </tbody>\n</table>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je geeft met de volgende code aan in welke volgorde de informatie staat:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: 'aria-sort="ascending"' }), ' voor "oplopende volgorde", bijvoorbeeld namen van A tot Z (namen), van bedragen en aantallen van klein naar groot, geplande activiteiten van eerdere naar latere datums'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: 'aria-sort="descending"' }), ' voor "aflopende volgorde", bijvoorbeeld namen van Z naar A, ontvangen berichten van nieuw naar oud, bedragen en aantallen van groot naar klein'] }), '\n'] }), '\n', (0, i.jsxs)(n.h2, { id: 'responsive-tabellen', children: [(0, i.jsx)(n.em, { children: 'Responsive' }), ' tabellen'] }), '\n', (0, i.jsxs)(n.p, { children: ['Volgens het ', (0, i.jsx)(n.a, { href: '/wcag/1.4.10/', children: 'WCAG-succescriterium 1.4.10 Reflow' }), " moeten pagina's leesbaar zijn bij een breedte van 1280px met 400% zoom, zonder dat horizontaal scrollen nodig is. Datatabellen worden genoemd als uitzondering, maar een voor een betere gebruiksvriendelijkheid zijn er technieken om te herkennen dat een tabel niet goed bekeken kan worden en in die situaties een alternatieve layout te gebruiken. Met CSS media queries of container queries kun je herkennen dat er niet voldoende ruimte is voor een tabel, en vervolgens heb je twee opties:"] }), '\n', (0, i.jsxs)(n.p, { children: ['Techniek 1: de bestaande ', (0, i.jsx)(n.code, { children: 'table' }), '-HTML niet te tonen als tabel door met CSS een andere ', (0, i.jsx)(n.code, { children: 'display' }), ' te gebruiken voor ', (0, i.jsx)(n.code, { children: 'table' }), ', ', (0, i.jsx)(n.code, { children: 'td' }), ' en alle andere tabel-elementen. ', (0, i.jsx)(n.em, { children: 'Tabel-elementen niet weergeven als tabel kan de toegankelijkheid van de informatie kapot maken.' }), ' Deze techniek gaat in de praktijk heel vaak mis. Gebruik deze techniek alleen als je vaak gebruikerstesten doet voor toegankelijkheid.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Techniek 2: HTML aanbieden in twee varianten. Naast de HTML ', (0, i.jsx)(n.code, { children: '<table>' }), ' element, ook de gegevens tonen met HTML elementen die niet zoveel ruimte nodig hebben in twee dimensies, zoals koppen met daaronder een datalijst. Afhankelijk van de situatie verberg je de \xe9ne of de andere variant.'] }), '\n', (0, i.jsx)(n.h2, { id: 'hoe-het-niet-moet', children: 'Hoe het niet moet' }), '\n', (0, i.jsx)(n.h3, { id: 'koppen-niet-gekoppeld', children: 'Koppen van tabel niet gekoppeld aan datacellen' }), '\n', (0, i.jsx)(n.p, { children: 'Tabellen bevatten vaak veel informatie, daarom kan het gebruikers heel veel tijd kosten om de relevante informatie te vinden als je niet de goede HTML gebruikt voor de 3 niveaus van koppen. Gebruikers die de tabel visueel kunnen waarnemen hebben het voordeel dat je kan zien dat er een kop is bovenaan de kolom, of aan het begin van de regel, en kunnen de kop herkennen omdat die bijvoorbeeld vetgedrukt is.' }), '\n', (0, i.jsxs)(n.p, { children: ['Het ', (0, i.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'WCAG-succescriterium 1.3.1 Info en relaties' }), ' zegt dat het belangrijk is om voor gebruikers die niet die relaties kunnen zien zoals de twee-dimensionale opmaak of vetgedrukte tekst, code te gebruiken waardoor bijvoorbeeld screenreaders ook weten welke koppen bij de cel horen.'] }), '\n', (0, i.jsx)(n.h4, { id: 'tabel-kop-niet-gekoppeld', children: 'Kop van de tabel niet gekoppeld' }), '\n', (0, i.jsx)(n.p, { children: 'Niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h2>Openingstijden</h2>\n<table>\n  <thead>\n    \u2026\n  </thead>\n</table>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Wel:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption class="heading-2">\n    Openingstijden\n  </caption>\n  <thead>\n    \u2026\n  </thead>\n</table>\n' }) }), '\n', (0, i.jsx)(n.h4, { id: 'tabelrij-kop-niet-gekoppeld', children: 'Kop van de tabelrij niet gekoppeld' }), '\n', (0, i.jsx)(n.p, { children: 'Niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<tr>\n  <td>\n    <strong>maandag</strong>\n  </td>\n  <td>gesloten</td>\n</tr>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Wel:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<tr>\n  <th scope="row">maandag</td>\n  <td>gesloten</td>\n</tr>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'geen-tabel-kop-in-de-tabel', children: 'Kop van de tabel in de tabel zelf' }), '\n', (0, i.jsx)(n.p, { children: 'Niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<table>\n  <thead>\n    <tr>\n      <th colspan="2">Openingstijden</th>\n    </tr>\n  </thead>\n  \u2026\n</table>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Wel:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption>\n    Openingstijden\n  </caption>\n  \u2026\n</table>\n' }) }), '\n', (0, i.jsx)(n.h3, { id: 'geen-grote-afstand-tussen-kolommen', children: 'Afstand tussen kolommen is te groot' }), '\n', (0, i.jsx)(n.p, { children: 'Je moet goed kunnen zien welke cellen bij elkaar horen. Een tabel die breed is en relatief weinig informatie bevat, is moeilijk te begrijpen als er veel lege ruimte zit tussen de cellen.' }), '\n', (0, i.jsxs)(n.p, { children: ['Voorkom teveel lege ruimte: gebruik bijvoorbeeld niet ', (0, i.jsx)(n.code, { children: 'width: 100%' }), ' voor een tabel met openingstijden. Kies per tabel welke breedte het meest duidelijk is. Als er lege ruimte ontstaat, zorg dan dat die niet tussen kolommen is, maar plaats de lege ruimte aan het eind van de laatste kolom.'] }), '\n', (0, i.jsxs)(n.h3, { id: 'geen-eigen-css-display', children: ['Tabel niet toegankelijk door eigen CSS ', (0, i.jsx)(n.code, { children: 'display' })] }), '\n', (0, i.jsxs)(n.p, { children: ['Screenreaders maken het begrijpen van HTML-tabellen makkelijk, want ze kunnen voor elke datacel de context geven. Hier voor is het belangrijk dat de automatische tools zoals screenreaders uit de code begrijpen wat de ', (0, i.jsx)(n.em, { children: 'column header' }), ' is en wat de ', (0, i.jsx)(n.em, { children: 'row header' }), ' is.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wanneer je met CSS ', (0, i.jsx)(n.code, { children: 'display' }), ' aanpast om een tabel een andere layout te geven, dan is niet meer een tabel in de ', (0, i.jsx)(n.em, { children: 'accessibility tree' }), ' en maak je de relatie tussen de ', (0, i.jsx)(n.em, { children: 'data cell' }), ' en de ', (0, i.jsx)(n.em, { children: 'header cell' }), ' kapot. Tabellen waarvan de ', (0, i.jsx)(n.code, { children: 'display' }), ' wordt aangepast werken daarom niet meer in screenreaders, tenzij de ', (0, i.jsx)(n.em, { children: 'accessibility tree' }), ' door extra code wordt hersteld.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Je kunt voorkomen dat de ', (0, i.jsx)(n.em, { children: 'accessibility tree' }), ' anders wordt opgebouwd. Je moet dan op \xe9lk element van de tabel expliciet zeggen welke ', (0, i.jsx)(n.code, { children: 'role' }), ' het heeft. Omdat deze techniek veel extra werk geeft en foutgevoelig is, raden wij aan om alternatieven te kiezen zoals niet ', (0, i.jsx)(n.code, { children: 'display' }), ' aanpassen of twee varianten maken.'] }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: '<caption id="unique-id-here">' }), ' samen met ', (0, i.jsx)(n.code, { children: '<table aria-labelledby="unique-id-here">' })] }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<table role="table">' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<tbody role="table-row-group">' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<td role="cell">' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<tfoot role="table-row-group">' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<th scope="col" role="columnheader">' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<th scope="row" role="rowheader">' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<thead role="table-row-group">' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: '<tr role="table-row">' }) }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'links', children: 'Links' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table', children: ['MDN: ', (0, i.jsx)(n.code, { children: '<table>' }), ': The Table element'] }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort', children: ['MDN: ', (0, i.jsx)(n.code, { children: 'aria-sort' })] }) }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'relevante-wcag-regels', children: 'Relevante WCAG-succescriteria' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.4.10/', children: '1.4.10 Reflow' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Table', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Table', pagination_label: 'Table', description: 'Structureert data in rijen en kolommen.', slug: '/table', keywords: ['basic table', 'column', 'data', 'data grid', 'data table', 'data view', 'detailslist', 'dynamic table', 'grid', 'kolom', 'layout', 'markup table', 'responsive table', 'rij', 'row', 'semantic table', 'spreadsheet', 'tabel', 'table', 'table-grid', 'table tree'] },
    m = void 0,
    c = {},
    h = 'Table',
    p = 'Structureert data in rijen en kolommen.',
    b = 39,
    j = r.find((e) => e.number === b),
    x = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Duidelijke koppen', id: 'duidelijke-koppen', level: 2 },
     { value: 'Sorteer de tabelrijen', id: 'sorteer-de-tabelrijen', level: 2 },
     { value: '<em>Responsive</em> tabellen', id: 'responsive-tabellen', level: 2 },
     { value: 'Hoe het niet moet', id: 'hoe-het-niet-moet', level: 2 },
     { value: 'Koppen van tabel niet gekoppeld aan datacellen', id: 'koppen-niet-gekoppeld', level: 3 },
     { value: 'Kop van de tabel niet gekoppeld', id: 'tabel-kop-niet-gekoppeld', level: 4 },
     { value: 'Kop van de tabelrij niet gekoppeld', id: 'tabelrij-kop-niet-gekoppeld', level: 4 },
     { value: 'Kop van de tabel in de tabel zelf', id: 'geen-tabel-kop-in-de-tabel', level: 3 },
     { value: 'Afstand tussen kolommen is te groot', id: 'geen-grote-afstand-tussen-kolommen', level: 3 },
     { value: 'Tabel niet toegankelijk door eigen CSS <code>display</code>', id: 'geen-eigen-css-display', level: 3 },
     { value: 'Links', id: 'links', level: 2 },
     { value: 'Relevante WCAG-succescriteria', id: 'relevante-wcag-regels', level: 3 },
    ];
   function k(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(o.Fc, { component: j, headingLevel: 1, description: p }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(o.VK, { component: j, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(o.mu, { component: j, headingLevel: 3 }), '\n', (0, i.jsx)(o.K_, { component: j }), '\n', (0, i.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, i.jsx)(s.o, { omitH1: !0, headingLevel: 3, children: (0, i.jsx)(g, {}) }), '\n', (0, i.jsx)(o.$9, { component: j, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
  },
  54565(e, n, a) {
   a.d(n, { c: () => i });
   var t = a(30758);
   function i() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, a) {
   a.d(n, { D: () => o });
   var t = a(46447),
    i = a(13526),
    l = a(33062),
    r = a(86070);
   const o = ({ state: e }) => {
    const n = (0, l.fX)(e);
    return (0, r.jsx)(t.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, a) {
   a.d(n, { p: () => l });
   var t = a(13526),
    i = a(86070);
   const l = ({ children: e, className: n, level: a = 1, suffix: l, ...r }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...r, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), l && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
  },
  90495(e, n, a) {
   a.d(n, { AC: () => d, Fu: () => r, Wu: () => o, Zp: () => s });
   var t = a(46447),
    i = a(13526),
    l = a(86070);
   const r = ({ background: e, children: n, className: a, ...t }) => (0, l.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    o = (e) => (0, l.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: n, className: a, component: r = 'div', background: o, children: s }) => {
     const d = (e) => ('article' === r ? (0, l.jsx)('article', { ...e }) : 'section' === r ? (0, l.jsx)('section', { ...e }) : (0, l.jsx)('div', { ...e })),
      g = (0, l.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: s });
     return e ? (0, l.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, l.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
 },
]);
