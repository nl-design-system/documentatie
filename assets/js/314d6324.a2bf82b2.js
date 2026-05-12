'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54348],
 {
  7727(e, a, n) {
   (n.r(a), n.d(a, { assets: () => u, component: () => x, componentName: () => f, contentTitle: () => g, default: () => v, description: () => c, frontMatter: () => d, issueNumber: () => p, metadata: () => t, relayStep: () => h, title: () => m, toc: () => b }));
   const t = JSON.parse('{"id":"componenten/data-summary/index","title":"Data Summary","description":"Lijst met eigenschappen en bijbehorende data over een onderwerp.","source":"@site/docs/componenten/data-summary/index.mdx","sourceDirName":"componenten/data-summary","slug":"/data-summary","permalink":"/data-summary","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/data-summary/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Data Summary","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Data Summary","pagination_label":"Data Summary","description":"Lijst met eigenschappen en bijbehorende data over een onderwerp.","slug":"/data-summary","keywords":["check","controle","data","data overzicht","data list","datalijst","data samenvatting","data summary","definitie lijst","definition list","eigenschappen","eigenschappenlijst","key","lijst","list","list group","overzicht","summary","samenvatting","summary data","terugkoppeling","value","waarde"]},"sidebar":"componenten","previous":{"title":"Data Badge","permalink":"/data-badge"},"next":{"title":"Date Input","permalink":"/date-input"}}');
   var i = n(86070),
    s = n(18439),
    r = n(20151),
    l = n(56167),
    o = n(17842);
   const d = { title: 'Data Summary', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Data Summary', pagination_label: 'Data Summary', description: 'Lijst met eigenschappen en bijbehorende data over een onderwerp.', slug: '/data-summary', keywords: ['check', 'controle', 'data', 'data overzicht', 'data list', 'datalijst', 'data samenvatting', 'data summary', 'definitie lijst', 'definition list', 'eigenschappen', 'eigenschappenlijst', 'key', 'lijst', 'list', 'list group', 'overzicht', 'summary', 'samenvatting', 'summary data', 'terugkoppeling', 'value', 'waarde'] },
    g = void 0,
    u = {},
    m = 'Data Summary',
    c = 'Lijst met eigenschappen en bijbehorende data over een onderwerp.',
    p = 357,
    h = 'help wanted',
    f = 'data-summary',
    x = r.find((e) => e.number === p),
    b = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function j(e) {
    const a = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(l.Fc, { component: x, headingLevel: 1, description: c }), '\n', (0, i.jsx)(o.s, { relayStep: h, description: `Schets van de ${f} component`, name: f }), '\n', (0, i.jsx)(a.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(l.VK, { component: x, headingLevel: 3 }), '\n', (0, i.jsx)(a.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(l.mu, { component: x, headingLevel: 3 }), '\n', (0, i.jsx)(l.K_, { component: x }), '\n', (0, i.jsx)(l.$9, { component: x, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: a } = { ...(0, s.R)(), ...e.components };
    return a ? (0, i.jsx)(a, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
  15042(e, a, n) {
   n.d(a, { p: () => s });
   var t = n(13526),
    i = n(86070);
   const s = ({ children: e, className: a, level: n = 1, suffix: s, ...r }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, a), ...r, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  17842(e, a, n) {
   n.d(a, { s: () => o });
   var t = n(29181),
    i = n(13526),
    s = n(76097),
    r = n(86070);
   const l = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    o = ({ name: e, relayStep: a, description: n }) => {
     const o = (0, s.fX)(a),
      d = l[e] ?? e;
     return (0, r.jsxs)(t.WK, { children: [(0, r.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('ma-component-illustration', `ma-component-illustration--${o}`), fill: 'none', children: [(0, r.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, r.jsx)('rect', { width: '960', height: '540' }), (0, r.jsx)('rect', { width: '960', height: '540' })] }), (0, r.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, r.jsx)('use', { href: `/svg/componenten_overzicht_${(0, s.fX)(d)}.svg#component-illustration` })] }), (0, r.jsx)(t.$P, { className: 'ma-component-illustration__caption', children: n })] });
    };
  },
  26655(e, a, n) {
   n.d(a, { AC: () => d, Fu: () => r, Wu: () => l, Zp: () => o });
   var t = n(46447),
    i = n(13526),
    s = n(86070);
   const r = ({ background: e, children: a, className: n, ...t }) => (0, s.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, n), ...t, children: a }),
    l = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    o = ({ href: e, appearance: a, className: n, component: r = 'div', background: l, children: o }) => {
     const d = (e) => ('article' === r ? (0, s.jsx)('article', { ...e }) : 'section' === r ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      g = (0, s.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${a}`, n), children: o });
     return e ? (0, s.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'medium', children: a, className: n }) => (0, s.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, n), children: a });
  },
  31522(e, a, n) {
   n.d(a, { D: () => l });
   var t = n(46447),
    i = n(13526),
    s = n(76097),
    r = n(86070);
   const l = ({ state: e }) => {
    const a = (0, s.fX)(e);
    return (0, r.jsx)(t.KE, { className: (0, i.A)('ma-estafette-badge', a && `ma-estafette-badge--${a}`), children: e });
   };
  },
  39948(e, a, n) {
   n.d(a, { r: () => u });
   var t = n(29181),
    i = n(74172),
    s = n(15089),
    r = n(28377),
    l = n(33648),
    o = n(83386),
    d = n(86070);
   const g = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(t.In, { children: g[e] || (0, d.jsx)(o.A, {}) });
  },
  46565(e, a, n) {
   n.d(a, { c: () => i });
   var t = n(30758);
   function i() {
    const [e, a] = (0, t.useState)();
    return ((0, t.useEffect)(() => a(!0), []), e);
   }
  },
  56167(e, a, n) {
   n.d(a, { VK: () => f, $9: () => b, mu: () => x, Fc: () => j, K_: () => v });
   var t = n(29181),
    i = n(13526),
    s = n(39948),
    r = n(26655),
    l = n(46565);
   function o(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = n(86070);
   const g = ({ checked: e, unchecked: a }) =>
    (0, d.jsx)(o, {
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
    p = n(76097);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    f = ({ component: e, headingLevel: a }) => {
     const n = e && e.projects.filter((e) => p.f4.includes(e.id)),
      s = n && p.f4.map((e) => n.find((a) => a.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: s.map((n) => ({ className: (0, i.A)('ma-definition-of-done', n && `ma-definition-of-done--${(0, p.fX)(n.title)}`), headingLevel: a, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(c._, { children: n.tasks.map(({ checked: e, name: n, id: t }) => (0, d.jsx)(c.Z, { headingLevel: a + 1, checked: e, heading: n, description: (0, p.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: a }) => {
     const n = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && n.length
      ? (0, d.jsx)(r.AC, {
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
            i = n?.value,
            l = (0, p.Pv)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: a }) => o.has(e) && URL.canParse(a) && 'https:' === new URL(a).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: a, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || l.length > 0) && (0, d.jsx)(t.DZ, { level: a + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: u
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const a = o.get(e.name);
                    return { children: a.desciption, icon: (0, d.jsx)(s.r, { brand: a.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: n }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: a + 2, children: [i, ' in ', e] }), (0, d.jsx)(t.dk, { links: n.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: a }) => {
     const n = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = n?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { id: 'help-component-verbeteren', level: a, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [i ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: a, description: n }) => {
     const i = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: a, suffix: i && (0, d.jsx)(u.D, { state: i }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: n })] });
    },
    v = ({ component: e }) => {
     const a = (e && h[e.title]) || [];
     return a.length > 0 && (0, d.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', a.map((e, n) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, n < a.length - 1 ? ', ' : '.'] }))] });
    };
  },
  76097(e, a, n) {
   n.d(a, { bo: () => i, KF: () => m, mJ: () => h, VZ: () => F, cR: () => D, Pv: () => f, qZ: () => r, kD: () => v, B2: () => c, Pc: () => o, f4: () => l, GT: () => k, fX: () => s, eQ: () => j, B_: () => b, o_: () => x });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function g(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, a) => d.indexOf(e) - d.indexOf(a)),
    m = (e) => {
     const a = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return u(g(a));
    },
    c = (e, a) => h(e).includes(a),
    p = (e) => {
     const a = / URL \(([^)]+)\)/;
     return u(g(e.tasks.filter(({ name: e, value: n }) => '' !== n && a.test(e)).map(({ name: e }) => a.exec(e)?.[1])));
    },
    h = (e) => u(g(e.projects.flatMap((e) => p(e)))),
    f = (e) => {
     const a = p(e),
      n = ((e) => {
       const a = e.tasks.find(({ name: e }) => 'Naam' === e);
       return a?.value || '';
      })(e);
     return a.map((a) => {
      const t = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(a))
       .map(({ name: t, id: i, value: s }) => {
        const r = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === r ? `${n} (${a}) in Storybook van ${e.title}` : `${n} (${a}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: i, value: s, description: l };
       });
      return { frameworkName: a, tasks: t };
     });
    },
    x = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    j = (e, a) => a.reduce((e, a) => e?.[a], e);
   function v(e, a = []) {
    return Object.hasOwn(e, '$type') ? [a] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? v(e[n], [...a, n]) : []));
   }
   function k(e) {
    const a = new Map();
    function n(e) {
     return (a.has(e) || a.set(e, x(e)), a.get(e));
    }
    return e.sort((e, a) => e.length - a.length || n(e).localeCompare(n(a)));
   }
   const D = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    F = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const a = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return a ? a[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
 },
]);
