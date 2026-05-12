(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67801],
 {
  1457(e, a, n) {
   'use strict';
   n.d(a, { e: () => o });
   var t = n(12941),
    l = n(30758),
    i = n(76097),
    s = n(86070);
   const o = ({ component: e }) => {
    const { title: a } = e,
     o = (0, i.fX)(a),
     r = l.lazy(() => n(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(l.Suspense, { fallback: null, children: (0, s.jsx)(t.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(r, {}) }) });
   };
  },
  12941(e, a, n) {
   'use strict';
   n.d(a, { o: () => g });
   var t = n(18439),
    l = n(46447),
    i = n(86070);
   const s = (e, a) => {
     const n = new URL(a, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: t, hash: l } = new URL(a, new URL(e, 'http://example.com/'));
      return n + t + l;
     }
     return n.toString();
    },
    o = { 1: {}, 2: { h1: l.fV, h2: l._B, h3: l.f_, h4: l.mM, h5: l.TT }, 3: { h1: l._B, h2: l.f_, h3: l.mM, h4: l.TT, h5: l.TT }, 4: { h1: l.f_, h2: l.mM, h3: l.TT, h4: l.TT, h5: l.TT }, 5: { h1: l.mM, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT }, 6: { h1: l.TT, h2: l.TT, h3: l.TT, h4: l.TT, h5: l.TT } },
    r = (e) => ({ img: ({ src: a, ...n }) => (0, i.jsx)('img', { ...n, src: s(e, a), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, a) => {
     if (e) {
      const e = { ...o[a - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[a];
    },
    g = ({ children: e, omitH1: a = !1, headingLevel: n = 1, baseUrl: l = '', components: s = {} }) => (0, i.jsx)(t.x, { components: { ...d(a, n), ...r(l), ...s }, children: e });
  },
  15042(e, a, n) {
   'use strict';
   n.d(a, { p: () => i });
   var t = n(13526),
    l = n(86070);
   const i = ({ children: e, className: a, level: n = 1, suffix: i, ...s }) => (0, l.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, a), ...s, children: [(0, l.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, l.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  26655(e, a, n) {
   'use strict';
   n.d(a, { AC: () => d, Fu: () => s, Wu: () => o, Zp: () => r });
   var t = n(46447),
    l = n(13526),
    i = n(86070);
   const s = ({ background: e, children: a, className: n, ...t }) => (0, i.jsx)('div', { className: (0, l.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, n), ...t, children: a }),
    o = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    r = ({ href: e, appearance: a, className: n, component: s = 'div', background: o, children: r }) => {
     const d = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      g = (0, i.jsx)(d, { className: (0, l.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${a}`, n), children: r });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'medium', children: a, className: n }) => (0, i.jsx)('div', { className: (0, l.A)('ma-cardgroup', `ma-cardgroup--${e}`, n), children: a });
  },
  31522(e, a, n) {
   'use strict';
   n.d(a, { D: () => o });
   var t = n(46447),
    l = n(13526),
    i = n(76097),
    s = n(86070);
   const o = ({ state: e }) => {
    const a = (0, i.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, l.A)('ma-estafette-badge', a && `ma-estafette-badge--${a}`), children: e });
   };
  },
  39948(e, a, n) {
   'use strict';
   n.d(a, { r: () => u });
   var t = n(29181),
    l = n(74172),
    i = n(15089),
    s = n(28377),
    o = n(33648),
    r = n(83386),
    d = n(86070);
   const g = { figma: (0, d.jsx)(l.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(t.In, { children: g[e] || (0, d.jsx)(r.A, {}) });
  },
  46565(e, a, n) {
   'use strict';
   n.d(a, { c: () => l });
   var t = n(30758);
   function l() {
    const [e, a] = (0, t.useState)();
    return ((0, t.useEffect)(() => a(!0), []), e);
   }
  },
  56167(e, a, n) {
   'use strict';
   n.d(a, { VK: () => v, $9: () => q, mu: () => f, Fc: () => b, K_: () => x });
   var t = n(29181),
    l = n(13526),
    i = n(39948),
    s = n(26655),
    o = n(46565);
   function r(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = n(86070);
   const g = ({ checked: e, unchecked: a }) =>
    (0, d.jsx)(r, {
     children: () => {
      const t = n(83294).V6;
      return (0, d.jsx)(t, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: a, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var u = n(31522),
    m = n(15042),
    c = n(58876),
    h = n(76097);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    v = ({ component: e, headingLevel: a }) => {
     const n = e && e.projects.filter((e) => h.f4.includes(e.id)),
      i = n && h.f4.map((e) => n.find((a) => a.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: i.map((n) => ({ className: (0, l.A)('ma-definition-of-done', n && `ma-definition-of-done--${(0, h.fX)(n.title)}`), headingLevel: a, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: n.tasks.map(({ checked: e, name: n, id: t }) => (0, d.jsx)(c.Z, { headingLevel: a + 1, checked: e, heading: n, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: a }) => {
     const n = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && n.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: n
          .sort((e, a) => {
           const n = e.progress.max - e.progress.value,
            t = a.progress.max - a.progress.value;
           return n === t ? e.title.localeCompare(a.title) : n - t;
          })
          .map((e) => {
           const n = e.tasks.find(({ name: e }) => 'Naam' === e),
            l = n?.value,
            o = (0, h.Pv)(e),
            r = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${l} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${l} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: a }) => r.has(e) && URL.canParse(a) && 'https:' === new URL(a).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: a, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || o.length > 0) && (0, d.jsx)(t.DZ, { level: a + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: u
                   .filter((e) => !!r.get(e.name))
                   .map((e) => {
                    const a = r.get(e.name);
                    return { children: a.desciption, icon: (0, d.jsx)(i.r, { brand: a.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: n }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: a + 2, children: [l, ' in ', e] }), (0, d.jsx)(t.dk, { links: n.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    q = ({ component: e, headingLevel: a }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      l = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: a, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [l ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: l, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: a, description: n }) => {
     const l = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: a, suffix: l && (0, d.jsx)(u.D, { state: l }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: n })] });
    },
    x = ({ component: e }) => {
     const a = (e && p[e.title]) || [];
     return a.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', a.map((e, n) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, n < a.length - 1 ? ', ' : '.'] }))] });
    };
  },
  67568(e, a, n) {
   'use strict';
   (n.r(a), n.d(a, { assets: () => k, component: () => F, contentTitle: () => x, default: () => N, description: () => T, frontMatter: () => b, issueNumber: () => D, metadata: () => t, title: () => j, toc: () => H }));
   const t = JSON.parse('{"id":"componenten/heading-5/index","title":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","source":"@site/docs/componenten/heading-5/index.mdx","sourceDirName":"componenten/heading-5","slug":"/heading-5","permalink":"/heading-5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-5/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 5","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 5","pagination_label":"Heading 5","description":"Koptekst die in de koppenstructuur op het vijfde niveau staat.","slug":"/heading-5","keywords":["caption","content","h5","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 4","permalink":"/heading-4"},"next":{"title":"Heading 6","permalink":"/heading-6"}}');
   var l,
    i,
    s,
    o,
    r,
    d,
    g,
    u = n(86070),
    m = n(18439),
    c = n(20151),
    h = n(30758);
   function p() {
    return (
     (p = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var a = 1; a < arguments.length; a++) {
          var n = arguments[a];
          for (var t in n) ({}).hasOwnProperty.call(n, t) && (e[t] = n[t]);
         }
         return e;
        }),
     p.apply(null, arguments)
    );
   }
   const v = ({ title: e, titleId: a, ...n }) => h.createElement('svg', p({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': 'Een tekst, in bold. De hele tekst is aangeduid met het cijfer 1. De tekst: \\u201CDit is een voorbeeld van een heading.\\u201D.', viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': a }, n), e ? h.createElement('title', { id: a }, e) : null, l || (l = h.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), i || (i = h.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), s || (s = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeWidth: 2, d: 'M307.762 258v24' })), o || (o = h.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M268 270h39' })), r || (r = h.createElement('rect', { width: 32, height: 32, x: 236, y: 254, fill: '#DE00A4', rx: 16 })), d || (d = h.createElement('path', { fill: '#fff', d: 'M254.502 264.368V276.5H252v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), g || (g = h.createElement('path', { fill: '#0A2750', d: 'M320.448 269.976v2.064l.032 2.032h.528q1.375 0 2.16-1.12.8-1.135.8-3.216 0-2.112-.8-3.216-.784-1.104-2.144-1.104h-.544l-.032 2v2.56m-3.92-4.624v-.864h4.752q1.712 0 2.928.64a4.4 4.4 0 0 1 1.872 1.792q.656 1.168.656 2.8 0 1.664-.704 2.848t-2 1.808q-1.28.624-3.04.624h-4.464v-.864l1.2-.128q.032-.976.032-1.984v-4.56q0-1.008-.032-1.984zM327.761 275v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368.561 0 .96.368.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.943 9.408q-1.072 0-1.68-.512-.608-.528-.608-1.712v-.768q.016-.368.016-.832v-3.056h-1.04v-.944l1.184-.16.8-2.24h1.632l-.032 2.256h1.68v1.088h-1.68v4.48q0 .56.224.832.24.256.592.256.416 0 .864-.352l.4.384q-.32.608-.896.944-.56.336-1.456.336m6.148-.24v-.752l.864-.192q.016-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168q-.56 0-.96-.352a1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.4-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m5.719 9.408a5.4 5.4 0 0 1-2.784-.736l.047-1.952h1.281l.272 1.584q.288.112.576.176.288.048.624.048.687 0 1.056-.224.367-.24.367-.72a.88.88 0 0 0-.271-.64q-.273-.272-1.072-.496l-.864-.256q-.928-.272-1.441-.88-.495-.608-.495-1.504 0-1.104.864-1.856.863-.768 2.48-.768.704 0 1.296.176.608.16 1.232.48l-.112 1.744h-1.28l-.32-1.376q-.337-.128-.88-.128-.544 0-.88.224-.32.224-.32.672 0 .32.256.576.255.24 1.088.496l.784.224q1.135.336 1.632.96.495.624.496 1.52 0 1.265-.976 1.968-.96.688-2.656.688m11.855-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m8.311-7.392q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m4.344-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm18.145-7.024v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm7.216 7.264q-1.248 0-2.16-.512a3.63 3.63 0 0 1-1.408-1.456q-.495-.944-.496-2.176 0-1.232.528-2.144a3.86 3.86 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.137 0 2.048.496.929.496 1.472 1.424.544.912.544 2.16t-.496 2.176a3.6 3.6 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m9.157.832q-1.248 0-2.16-.512a3.6 3.6 0 0 1-1.408-1.456q-.496-.944-.496-2.176t.528-2.144a3.84 3.84 0 0 1 1.472-1.424 4.2 4.2 0 0 1 2.064-.512q1.136 0 2.048.496a3.7 3.7 0 0 1 1.472 1.424q.544.912.544 2.16t-.496 2.176a3.63 3.63 0 0 1-1.408 1.456q-.912.512-2.16.512m0-.832q.672 0 1.008-.784t.336-2.48q0-1.712-.336-2.496t-1.008-.784q-.688 0-1.024.784-.336.785-.336 2.496 0 1.696.336 2.48t1.024.784m4.951.592v-.752l.88-.176q.015-.592.016-1.264v-2.112q0-.448-.016-.736 0-.288-.016-.528 0-.256-.016-.576l-.976-.144v-.624l3.152-1.072.288.176.144 1.888q.336-1.024.944-1.536.607-.528 1.2-.528.528 0 .912.304.384.288.48.88-.017.624-.336.976a1.06 1.06 0 0 1-.8.336q-.672 0-1.232-.752l-.096-.128a4 4 0 0 0-.656.848 4 4 0 0 0-.416 1.072v2.224q0 .64.016 1.2l1.264.272V275zm7.078.016v-.752l.848-.176q.016-.576.016-1.248v-7.936l-.992-.128v-.672l3.312-.72.256.16-.064 2.24v2.256q1.009-1.024 2.32-1.024.88 0 1.584.464.705.448 1.12 1.36.432.896.432 2.224 0 1.296-.48 2.24-.48.928-1.264 1.44a3.03 3.03 0 0 1-1.68.496q-1.311 0-2.112-.944l-.272.928zm4.528-6.608q-.303 0-.576.128a2.6 2.6 0 0 0-.528.336v4.576q.497.448 1.088.448.705 0 1.152-.688.464-.688.464-2.096 0-1.424-.448-2.064-.432-.64-1.152-.64m9.299-.56q-.447 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.167 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392q.945-.48 1.968-.48 1.056 0 1.792.448a2.9 2.9 0 0 1 1.136 1.216q.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.625.592 1.456.592.657 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.495.944-1.344 1.408-.848.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408t-2.016.464m4.046-.24v-.752l.88-.192q.016-.608.016-1.216.016-.607.016-1.2v-6.704l-.992-.16v-.672l3.36-.72.256.16-.064 2.24v7.072l.032 1.216.88.176V275zm7.924-3.824q0 1.312.464 2 .464.672 1.2.672.544 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.736 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.416-.912-.416-2.208 0-1.312.496-2.24.512-.944 1.312-1.44a3.18 3.18 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm12.202-7.2v-.704h3.024v.704l-.928.176-2.64 6.88h-1.216l-2.88-6.896-.784-.16v-.704h4.544v.704l-1.008.208 1.504 4.096 1.392-4.112zm9.344 7.248q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.536 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.191-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m6.084 2.224v-.752l.864-.192q.015-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm17.249-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.208-.24.208-.784 0-.8-.32-1.184t-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.6 3.6 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.9 3.9 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.656 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.496.944-1.344 1.408-.847.464-2.016.464m8.312-7.392q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.512-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m4.343-.24v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.207-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.282 0v-.752l.864-.192q.015-.576.016-1.248v-7.872l-.992-.16v-.672l3.312-.72.256.16-.064 2.24v2.576q.64-.752 1.232-1.04a2.9 2.9 0 0 1 1.312-.304q1.056 0 1.696.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.208v-.752l.832-.176q.015-.592.016-1.248v-2.864q0-.784-.192-1.088-.177-.304-.672-.304-.32 0-.688.192a3.2 3.2 0 0 0-.736.544v3.52q0 .672.016 1.264l.752.16V275zm13.843-7.152q-.448 0-.832.56-.368.545-.416 2.016h1.36q.576 0 .768-.224.207-.24.208-.784 0-.8-.32-1.184-.321-.384-.768-.384m.032 7.392q-1.168 0-2.064-.48a3.57 3.57 0 0 1-1.408-1.408q-.513-.928-.512-2.208 0-1.344.592-2.256a3.87 3.87 0 0 1 1.552-1.392 4.3 4.3 0 0 1 1.968-.48q1.056 0 1.792.448.752.448 1.136 1.216.384.751.384 1.728 0 .464-.096.848h-4.624q.08 1.264.688 1.872.624.592 1.456.592.655 0 1.12-.24a3.4 3.4 0 0 0 .816-.624l.56.512q-.497.944-1.344 1.408-.849.464-2.016.464m10.489-.016q-1.392 0-1.76-1.152a6 6 0 0 1-.992.864q-.465.304-1.296.304-.929 0-1.52-.528-.576-.528-.576-1.52 0-.576.256-1.04.255-.464.928-.864.671-.4 1.904-.752a8 8 0 0 1 .56-.16l.656-.16v-.528q0-1.072-.272-1.456-.256-.384-1.024-.384h-.208q-.096 0-.224.016l-.08.704q-.017.784-.368 1.136a1.07 1.07 0 0 1-.8.352q-.88 0-1.072-.8.063-.992 1.008-1.616.944-.624 2.672-.624 1.535 0 2.192.704.672.704.672 2.32v3.584q0 .464.352.464a.5.5 0 0 0 .24-.064q.111-.08.24-.288l.432.288q-.288.64-.752.928-.448.272-1.168.272m-3.776-2.448q0 .592.272.88a.94.94 0 0 0 1.056.208q.192-.08.608-.368v-2.592a7 7 0 0 0-.416.144 4 4 0 0 0-.336.128 2.04 2.04 0 0 0-.864.64q-.32.4-.32.96m8.804-1.6q0 1.312.464 2 .463.672 1.2.672.543 0 .992-.368v-4.768a1.5 1.5 0 0 0-.944-.336q-.737 0-1.232.688-.48.689-.48 2.112m2.864 4-.128-.912q-.929.976-2.256.976a3 3 0 0 1-1.632-.464q-.72-.464-1.136-1.36-.417-.912-.416-2.208 0-1.312.496-2.24.511-.944 1.312-1.44a3.17 3.17 0 0 1 1.712-.512q.624 0 1.088.224.464.208.848.624v-2.928l-1.12-.16v-.672l3.376-.72.256.16-.064 2.24v8.304l.784.16V275zm3.948-.176v-.752l.864-.192q.015-.576.016-1.248v-1.936q0-.656-.016-1.088 0-.448-.032-.928l-.992-.144v-.624l3.36-1.072.272.176-.048 2.32v3.312q0 .672.016 1.264l.8.16V275zm2.128-9.168a1.4 1.4 0 0 1-.96-.352 1.19 1.19 0 0 1-.4-.912q0-.56.4-.912.399-.368.96-.368t.96.368q.4.353.4.912 0 .544-.4.912a1.4 1.4 0 0 1-.96.352m2.902 9.168v-.752l.864-.192q.016-.576.016-1.248v-2.096q0-.656-.016-1.008 0-.368-.032-.848l-.976-.144v-.624l3.152-1.072.288.176.096 1.152q.624-.736 1.232-1.024a3 3 0 0 1 1.328-.304q1.04 0 1.664.688.64.689.64 2.064v3.072q0 .656.016 1.248l.8.16V275h-4.224v-.752l.832-.176q.016-.592.016-1.248v-2.864q0-.768-.208-1.072-.209-.32-.672-.32-.624 0-1.376.576v3.68q0 .672.016 1.264l.752.16V275zm13.331-3.584a.89.89 0 0 0 .832-.496q.288-.497.288-1.344t-.288-1.312q-.272-.48-.8-.48-.543 0-.816.48t-.272 1.328.256 1.344q.257.48.8.48m-2.128 4.912q0 .704.528 1.024.528.336 1.616.336 1.2 0 1.808-.352t.608-.88a.94.94 0 0 0-.256-.64q-.255-.272-.912-.272h-1.68q-.88 0-1.456-.144a2.2 2.2 0 0 0-.192.432 1.7 1.7 0 0 0-.064.496m2.144-4.16q-.832 0-1.456-.192a1.46 1.46 0 0 0-.192.736q0 .272.208.448.208.16.72.16h1.872q1.216 0 1.936.304.72.288 1.024.816.32.512.32 1.216 0 .8-.528 1.472-.528.688-1.584 1.088-1.04.416-2.576.416-1.327 0-2.08-.272-.751-.256-1.056-.688a1.56 1.56 0 0 1-.304-.912q0-1.024 1.328-1.648-.495-.208-.72-.544a1.4 1.4 0 0 1-.208-.736q0-.56.32-1.056.337-.512.928-1.024-.655-.336-.976-.896a2.5 2.5 0 0 1-.32-1.248q0-1.12.816-1.856.833-.736 2.528-.736.864 0 1.504.192t1.04.544l1.792-.768.256.16v1.232h-1.52q.288.528.288 1.232 0 1.072-.832 1.824-.815.736-2.528.736' })));
   var f = n(1457),
    q = n(56167);
   const b = { title: 'Heading 5', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 5', pagination_label: 'Heading 5', description: 'Koptekst die in de koppenstructuur op het vijfde niveau staat.', slug: '/heading-5', keywords: ['caption', 'content', 'h5', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    x = void 0,
    k = {},
    j = 'Heading 5',
    T = 'Koptekst die in de koppenstructuur op het vijfde niveau staat.',
    D = 261,
    F = c.find((e) => e.number === D),
    H = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function L(e) {
    const a = { h2: 'h2', ...(0, m.R)(), ...e.components },
     { ComponentAnatomy: n } = a;
    return (
     n ||
      (function (e, a) {
       throw new Error('Expected ' + (a ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, u.jsxs)(u.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, u.jsx)(q.Fc, { component: F, headingLevel: 1, description: T }), '\n', (0, u.jsx)(f.e, { component: F }), '\n', (0, u.jsx)(a.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, u.jsx)(n, { component: F, illustration: v }), '\n', (0, u.jsx)(a.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, u.jsx)(q.VK, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(a.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, u.jsx)(q.mu, { component: F, headingLevel: 3 }), '\n', (0, u.jsx)(q.K_, { component: F }), '\n', (0, u.jsx)(q.$9, { component: F, headingLevel: 2 })] })
    );
   }
   function N(e = {}) {
    const { wrapper: a } = { ...(0, m.R)(), ...e.components };
    return a ? (0, u.jsx)(a, { ...e, children: (0, u.jsx)(L, { ...e }) }) : L(e);
   }
  },
  76097(e, a, n) {
   'use strict';
   n.d(a, { bo: () => l, KF: () => m, mJ: () => p, VZ: () => T, cR: () => j, Pv: () => v, qZ: () => s, kD: () => x, B2: () => c, Pc: () => r, f4: () => o, GT: () => k, fX: () => i, eQ: () => b, B_: () => q, o_: () => f });
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
   const u = (e) => [...e].sort((e, a) => d.indexOf(e) - d.indexOf(a)),
    m = (e) => {
     const a = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return u(g(a));
    },
    c = (e, a) => p(e).includes(a),
    h = (e) => {
     const a = / URL \(([^)]+)\)/;
     return u(g(e.tasks.filter(({ name: e, value: n }) => '' !== n && a.test(e)).map(({ name: e }) => a.exec(e)?.[1])));
    },
    p = (e) => u(g(e.projects.flatMap((e) => h(e)))),
    v = (e) => {
     const a = h(e),
      n = ((e) => {
       const a = e.tasks.find(({ name: e }) => 'Naam' === e);
       return a?.value || '';
      })(e);
     return a.map((a) => {
      const t = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(a))
       .map(({ name: t, id: l, value: i }) => {
        const s = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === s ? `${n} (${a}) in Storybook van ${e.title}` : `${n} (${a}) op ${s}`;
        return { brand: s.toLowerCase(), name: t, id: l, value: i, description: o };
       });
      return { frameworkName: a, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    q = (e) => '--' + e.join('-'),
    b = (e, a) => a.reduce((e, a) => e?.[a], e);
   function x(e, a = []) {
    return Object.hasOwn(e, '$type') ? [a] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? x(e[n], [...a, n]) : []));
   }
   function k(e) {
    const a = new Map();
    function n(e) {
     return (a.has(e) || a.set(e, f(e)), a.get(e));
    }
    return e.sort((e, a) => e.length - a.length || n(e).localeCompare(n(a)));
   }
   const j = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    T = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const a = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return a ? a[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  82839(e, a, n) {
   var t = { './button-docs/docs/aliases.md': [24653, 24653], './code-block-docs/docs/aliases.md': [85464, 85464], './code-docs/docs/aliases.md': [31984, 31984], './color-sample-docs/docs/aliases.md': [10595, 10595], './data-badge-docs/docs/aliases.md': [73253, 73253], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [87734, 87734], './link-docs/docs/aliases.md': [99126, 99126], './mark-docs/docs/aliases.md': [8740, 8740], './number-badge-docs/docs/aliases.md': [55080, 55080], './paragraph-docs/docs/aliases.md': [24478, 24478], './skip-link-docs/docs/aliases.md': [89150, 89150] };
   function l(e) {
    if (!n.o(t, e))
     return Promise.resolve().then(() => {
      var a = new Error("Cannot find module '" + e + "'");
      throw ((a.code = 'MODULE_NOT_FOUND'), a);
     });
    var a = t[e],
     l = a[0];
    return n.e(a[1]).then(() => n(l));
   }
   ((l.keys = () => Object.keys(t)), (l.id = 82839), (e.exports = l));
  },
 },
]);
