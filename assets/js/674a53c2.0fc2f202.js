'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15496],
 {
  15042(e, n, a) {
   a.d(n, { p: () => s });
   var t = a(13526),
    i = a(86070);
   const s = ({ children: e, className: n, level: a = 1, suffix: s, ...l }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...l, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  15987(e, n, a) {
   (a.r(n), a.d(n, { assets: () => u, component: () => x, componentName: () => f, contentTitle: () => d, default: () => v, description: () => c, frontMatter: () => g, issueNumber: () => p, metadata: () => t, relayStep: () => h, title: () => m, toc: () => b }));
   const t = JSON.parse('{"id":"componenten/task-navigation/index","title":"Task Navigation","description":"Overzicht van \xe9\xe9n of meerdere taken die aandacht nodig hebben, met een link om de taak uit te voeren.","source":"@site/docs/componenten/task-navigation/index.mdx","sourceDirName":"componenten/task-navigation","slug":"/task-navigation","permalink":"/task-navigation","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/task-navigation/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Task Navigation","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Task Navigation","pagination_label":"Task Navigation","description":"Overzicht van \xe9\xe9n of meerdere taken die aandacht nodig hebben, met een link om de taak uit te voeren.","slug":"/task-navigation","keywords":["task navigation","taak navigatie","task","taak","action","actie","acties","action list","actielijst","single action","deadline"]},"sidebar":"componenten","previous":{"title":"Task List","permalink":"/task-list"},"next":{"title":"Text Input","permalink":"/text-input"}}');
   var i = a(86070),
    s = a(18439),
    l = a(20151),
    r = a(56167),
    o = a(17842);
   const g = { title: 'Task Navigation', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Task Navigation', pagination_label: 'Task Navigation', description: 'Overzicht van \xe9\xe9n of meerdere taken die aandacht nodig hebben, met een link om de taak uit te voeren.', slug: '/task-navigation', keywords: ['task navigation', 'taak navigatie', 'task', 'taak', 'action', 'actie', 'acties', 'action list', 'actielijst', 'single action', 'deadline'] },
    d = void 0,
    u = {},
    m = 'Task Navigation',
    c = 'Overzicht van \xe9\xe9n of meerdere taken die aandacht nodig hebben, met een link om de taak uit te voeren.',
    p = 350,
    h = 'help wanted',
    f = 'task-navigation',
    x = l.find((e) => e.number === p),
    b = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function k(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(r.Fc, { component: x, headingLevel: 1, description: c }), '\n', (0, i.jsx)(o.s, { relayStep: h, description: `Schets van de ${f} component`, name: f }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(r.VK, { component: x, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(r.mu, { component: x, headingLevel: 3 }), '\n', (0, i.jsx)(r.K_, { component: x }), '\n', (0, i.jsx)(r.$9, { component: x, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
  },
  17842(e, n, a) {
   a.d(n, { s: () => o });
   var t = a(29181),
    i = a(13526),
    s = a(76097),
    l = a(86070);
   const r = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    o = ({ name: e, relayStep: n, description: a }) => {
     const o = (0, s.fX)(n),
      g = r[e] ?? e;
     return (0, l.jsxs)(t.WK, { children: [(0, l.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('ma-component-illustration', `ma-component-illustration--${o}`), fill: 'none', children: [(0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, l.jsx)('rect', { width: '960', height: '540' }), (0, l.jsx)('rect', { width: '960', height: '540' })] }), (0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, l.jsx)('use', { href: `/svg/componenten_overzicht_${(0, s.fX)(g)}.svg#component-illustration` })] }), (0, l.jsx)(t.$P, { className: 'ma-component-illustration__caption', children: a })] });
    };
  },
  26655(e, n, a) {
   a.d(n, { AC: () => g, Fu: () => l, Wu: () => r, Zp: () => o });
   var t = a(46447),
    i = a(13526),
    s = a(86070);
   const l = ({ background: e, children: n, className: a, ...t }) => (0, s.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    r = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    o = ({ href: e, appearance: n, className: a, component: l = 'div', background: r, children: o }) => {
     const g = (e) => ('article' === l ? (0, s.jsx)('article', { ...e }) : 'section' === l ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      d = (0, s.jsx)(g, { className: (0, i.A)('ma-cardgroup__card', r && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: o });
     return e ? (0, s.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: d }) : d;
    },
    g = ({ appearance: e = 'medium', children: n, className: a }) => (0, s.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
  31522(e, n, a) {
   a.d(n, { D: () => r });
   var t = a(46447),
    i = a(13526),
    s = a(76097),
    l = a(86070);
   const r = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, l.jsx)(t.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  39948(e, n, a) {
   a.d(n, { r: () => u });
   var t = a(29181),
    i = a(74172),
    s = a(15089),
    l = a(28377),
    r = a(33648),
    o = a(83386),
    g = a(86070);
   const d = { figma: (0, g.jsx)(i.A, {}), github: (0, g.jsx)(s.A, {}), npm: (0, g.jsx)(l.A, {}), storybook: (0, g.jsx)(r.A, {}) },
    u = ({ brand: e }) => (0, g.jsx)(t.In, { children: d[e] || (0, g.jsx)(o.A, {}) });
  },
  46565(e, n, a) {
   a.d(n, { c: () => i });
   var t = a(30758);
   function i() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  56167(e, n, a) {
   a.d(n, { VK: () => f, $9: () => b, mu: () => x, Fc: () => k, K_: () => v });
   var t = a(29181),
    i = a(13526),
    s = a(39948),
    l = a(26655),
    r = a(46565);
   function o(e) {
    return (0, r.c)() ? e.children() : null;
   }
   var g = a(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, g.jsx)(o, {
     children: () => {
      const t = a(83294).V6;
      return (0, g.jsx)(t, {
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
   var u = a(31522),
    m = a(15042),
    c = a(58876),
    p = a(76097);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    f = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => p.f4.includes(e.id)),
      s = a && p.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, g.jsx)(t.If, { sections: s.map((a) => ({ className: (0, i.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, p.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(c._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, g.jsx)(c.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, p.qZ)(t) }, t)) }), (0, g.jsx)(t.fz, { children: (0, g.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && a.length
      ? (0, g.jsx)(l.AC, {
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
            r = (0, p.Pv)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => o.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, g.jsx)(
            l.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, g.jsxs)(l.Wu, {
              children: [
               (0, g.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, g.jsxs)(t.fz, { children: [(0, g.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, g.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || r.length > 0) && (0, g.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, g.jsx)(g.Fragment, {
                 children: (0, g.jsx)(t.dk, {
                  links: u
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const n = o.get(e.name);
                    return { children: n.desciption, icon: (0, g.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               r.length > 0 && (0, g.jsx)(g.Fragment, { children: r.map(({ frameworkName: e, tasks: a }) => (0, g.jsxs)(g.Fragment, { children: [(0, g.jsxs)(t.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, g.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, g.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, g.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, g.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, g.jsxs)(t.Xy, { children: [i ? (0, g.jsxs)(t.Er, { children: ['Vul de ', (0, g.jsx)(t.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, g.jsxs)(t.Er, { children: [(0, g.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, g.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, g.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, g.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    k = ({ component: e, headingLevel: n, description: a }) => {
     const i = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(m.p, { level: n, suffix: i && (0, g.jsx)(u.D, { state: i }), children: e.title }), (0, g.jsx)(t.fz, { lead: !0, children: a })] });
    },
    v = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, g.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, g.jsxs)(g.Fragment, { children: [e.slug ? (0, g.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  76097(e, n, a) {
   a.d(n, { bo: () => i, KF: () => m, mJ: () => h, VZ: () => D, cR: () => F, Pv: () => f, qZ: () => l, kD: () => v, B2: () => c, Pc: () => o, f4: () => r, GT: () => j, fX: () => s, eQ: () => k, B_: () => b, o_: () => x });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    l = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    g = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => g.indexOf(e) - g.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return u(d(n));
    },
    c = (e, n) => h(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(d(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => u(d(e.projects.flatMap((e) => p(e)))),
    f = (e) => {
     const n = p(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: i, value: s }) => {
        const l = /^(.+) URL/.exec(t)[1],
         r = 'Storybook' === l ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${l}`;
        return { brand: l.toLowerCase(), name: t, id: i, value: s, description: r };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    x = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? v(e[a], [...n, a]) : []));
   }
   function j(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, x(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   const F = () => {
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
 },
]);
