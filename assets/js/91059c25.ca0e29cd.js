(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93787],
 {
  3387(e, n, a) {
   'use strict';
   a.d(n, { s: () => o });
   var t = a(29181),
    s = a(13526),
    i = a(84471),
    l = a(86070);
   const r = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    o = ({ name: e, relayStep: n, description: a }) => {
     const o = (0, i.fX)(n),
      d = r[e] ?? e;
     return (0, l.jsxs)(t.WK, { children: [(0, l.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, s.A)('ma-component-illustration', `ma-component-illustration--${o}`), fill: 'none', children: [(0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, l.jsx)('rect', { width: '960', height: '540' }), (0, l.jsx)('rect', { width: '960', height: '540' })] }), (0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, l.jsx)('use', { href: `/svg/componenten_overzicht_${(0, i.fX)(d)}.svg#component-illustration` })] }), (0, l.jsx)(t.$P, { className: 'ma-component-illustration__caption', children: a })] });
    };
  },
  3446(e, n, a) {
   'use strict';
   a.d(n, { r: () => u });
   var t = a(29181),
    s = a(74172),
    i = a(15089),
    l = a(28377),
    r = a(33648),
    o = a(83386),
    d = a(86070);
   const g = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(l.A, {}), storybook: (0, d.jsx)(r.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(t.In, { children: g[e] || (0, d.jsx)(o.A, {}) });
  },
  14881(e, n, a) {
   'use strict';
   a.d(n, { K: () => d, n: () => o });
   var t = a(13526),
    s = a(30758),
    i = a(96345),
    l = a(37168),
    r = a(86070);
   const o = (0, s.forwardRef)(({ as: e, className: n, children: a, ...s }, i) => {
     const l = e || 'div',
      o = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(l, { ref: i, className: o, ...s, children: a });
    }),
    d = ({ className: e, classNamePanel: n, label: a, heading: s, headingLevel: o, headingApperance: d, ...g }) => {
     const u = (0, t.A)('utrecht-accordion__section', e),
      m = (0, t.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: u, ...g, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(i.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [s && (0, r.jsx)(l.D, { level: o, appearance: d, children: s }), a] })] }) }), (0, r.jsx)('div', { className: m, children: g.children })] });
    };
  },
  17612(e, n, a) {
   'use strict';
   (a.r(n), a.d(n, { assets: () => m, component: () => x, contentTitle: () => u, default: () => j, description: () => h, frontMatter: () => g, issueNumber: () => p, metadata: () => t, title: () => c, toc: () => f }));
   const t = JSON.parse('{"id":"componenten/heading-6/index","title":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","source":"@site/docs/componenten/heading-6/index.mdx","sourceDirName":"componenten/heading-6","slug":"/heading-6","permalink":"/heading-6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading-6/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading 6","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading 6","pagination_label":"Heading 6","description":"Koptekst die in de koppenstructuur op het zesde niveau staat.","issue_number":262,"slug":"/heading-6","keywords":["caption","content","h6","heading","heading level","headline","kop","paginakop","sectie","section","structure","titel","title"]},"sidebar":"componenten","previous":{"title":"Heading 5","permalink":"/heading-5"},"next":{"title":"Heading Group","permalink":"/heading-group"}}');
   var s = a(86070),
    i = a(18439),
    l = a(79447),
    r = a(58230),
    o = a(56323),
    d = a(26877);
   const g = { title: 'Heading 6', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading 6', pagination_label: 'Heading 6', description: 'Koptekst die in de koppenstructuur op het zesde niveau staat.', issue_number: 262, slug: '/heading-6', keywords: ['caption', 'content', 'h6', 'heading', 'heading level', 'headline', 'kop', 'paginakop', 'sectie', 'section', 'structure', 'titel', 'title'] },
    u = void 0,
    m = {},
    c = 'Heading 6',
    h = 'Koptekst die in de koppenstructuur op het zesde niveau staat.',
    p = 262,
    x = l.find((e) => e.number === p),
    f = [
     { value: 'Anatomie', id: 'anatomie', level: 2 },
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function b(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components },
     { ComponentAnatomy: a } = n;
    return (
     a ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('ComponentAnatomy', !0),
     (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, s.jsx)(d.Fc, { component: x, headingLevel: 1, description: h }), '\n', (0, s.jsx)(o.e, { component: x }), '\n', (0, s.jsx)(n.h2, { id: 'anatomie', children: 'Anatomie' }), '\n', (0, s.jsx)(a, { component: x, illustration: r.A }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(d.VK, { component: x, headingLevel: 3 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(d.mu, { component: x, headingLevel: 3 }), '\n', (0, s.jsx)(d.K_, { component: x }), '\n', (0, s.jsx)(d.$9, { component: x, headingLevel: 2 })] })
    );
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b(e);
   }
  },
  19707(e, n, a) {
   'use strict';
   a.d(n, { Z: () => t.Z });
   var t = a(50172);
  },
  24703(e, n, a) {
   'use strict';
   a.d(n, { o: () => g });
   var t = a(18439),
    s = a(46447),
    i = a(86070);
   const l = (e, n) => {
     const a = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === a.protocol) {
      const { pathname: a, search: t, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return a + t + s;
     }
     return a.toString();
    },
    r = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    o = (e) => ({ img: ({ src: n, ...a }) => (0, i.jsx)('img', { ...a, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...r[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return r[n];
    },
    g = ({ children: e, omitH1: n = !1, headingLevel: a = 1, baseUrl: s = '', components: l = {} }) => (0, i.jsx)(t.x, { components: { ...d(n, a), ...o(s), ...l }, children: e });
  },
  26165(e, n, a) {
   'use strict';
   a.d(n, { AC: () => d, Fu: () => l, Wu: () => r, Zp: () => o });
   var t = a(46447),
    s = a(13526),
    i = a(86070);
   const l = ({ background: e, children: n, className: a, ...t }) => (0, i.jsx)('div', { className: (0, s.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    r = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    o = ({ href: e, appearance: n, className: a, component: l = 'div', background: r, children: o }) => {
     const d = (e) => ('article' === l ? (0, i.jsx)('article', { ...e }) : 'section' === l ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      g = (0, i.jsx)(d, { className: (0, s.A)('ma-cardgroup__card', r && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: o });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'large', children: n, className: a }) => (0, i.jsx)('div', { className: (0, s.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
  26877(e, n, a) {
   'use strict';
   a.d(n, { VK: () => j, $9: () => k, mu: () => v, Fc: () => T, K_: () => D });
   var t = a(29181),
    s = a(29857),
    i = a(66153),
    l = a(13526),
    r = a(3446),
    o = a(26165),
    d = a(19707),
    g = a(86070);
   const u = ({ checked: e, unchecked: n }) => {
    const a = (e / (e + n)) * 250;
    return (0, g.jsxs)('svg', { viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg', className: 'ma-component-progress', 'aria-hidden': 'true', children: [(0, g.jsx)('circle', { className: 'ma-component-progress__background', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'none', strokeWidth: '20' }), (0, g.jsx)('circle', { className: 'ma-component-progress__progress', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'currentColor', strokeWidth: '20', strokeDasharray: a })] });
   };
   var m = a(87856),
    c = a(46276),
    h = a(58876),
    p = a(84471);
   const x = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Blockquote","slug":"blockquote"},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Pull Quote","slug":"pull-quote"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var f = a(14881),
    b = a(3387);
   const j = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => p.f4.includes(e.id)),
      s = a && p.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, g.jsx)(f.n, { children: s.map((a) => (0, g.jsx)(f.K, { className: (0, l.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, p.fX)(a.title)}`), heading: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(h._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, g.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, p.qZ)(t) }, t)) }), (0, g.jsx)(t.fz, { children: (0, g.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) }, a.title)) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && a.length
      ? (0, g.jsx)(o.AC, {
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
            m = (0, p.Pv)(e),
            c = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${l} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${l} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => c.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return globalThis.isAstro
            ? (0, g.jsx)(
               d.Z,
               {
                heading: e.title.replace(/^Community/i, ''),
                headingLevel: n,
                description: (0, g.jsxs)('div', {
                 className: 'ma-flow',
                 children: [
                  (0, g.jsxs)(i.f, { children: [(0, g.jsx)(u, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, g.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (0, g.jsxs)('div', {
                   children: [
                    (h.length > 0 || m.length > 0) && (0, g.jsx)(s.DZ, { level: Math.min(n + 1, 6), children: 'Snel aan de slag' }),
                    h.length > 0 &&
                     (0, g.jsx)(t.dk, {
                      links: h
                       .filter((e) => !!c.get(e.name))
                       .map((e) => {
                        const n = c.get(e.name);
                        return { children: n.desciption, icon: (0, g.jsx)(r.r, { brand: n.brand }), href: e.value };
                       }),
                     }),
                   ],
                  }),
                  m.length > 0 && m.map(({ frameworkName: e, tasks: a }) => (0, g.jsxs)('section', { children: [(0, g.jsxs)(s.DZ, { level: Math.min(n + 2, 6), children: [l, ' in ', e] }), (0, g.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, g.jsx)(r.r, { brand: e.brand }), href: e.value })) })] }, e)),
                 ],
                }),
               },
               e.title,
              )
            : (0, g.jsx)(
               o.Zp,
               {
                className: 'ma-implementation-card',
                children: (0, g.jsxs)(o.Wu, {
                 children: [
                  (0, g.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
                  (0, g.jsxs)(t.fz, { children: [(0, g.jsx)(u, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, g.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (h.length > 0 || m.length > 0) && (0, g.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
                  h.length > 0 &&
                   (0, g.jsx)(g.Fragment, {
                    children: (0, g.jsx)(t.dk, {
                     links: h
                      .filter((e) => !!c.get(e.name))
                      .map((e) => {
                       const n = c.get(e.name);
                       return { children: n.desciption, icon: (0, g.jsx)(r.r, { brand: n.brand }), href: e.value };
                      }),
                    }),
                   }),
                  m.length > 0 && (0, g.jsx)(g.Fragment, { children: m.map(({ frameworkName: e, tasks: a }) => (0, g.jsxs)(g.Fragment, { children: [(0, g.jsxs)(t.DZ, { level: n + 2, children: [l, ' in ', e] }), (0, g.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, g.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
                 ],
                }),
               },
               e.title,
              );
          }),
        })
      : (0, g.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, g.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, g.jsxs)(t.Xy, { children: [s ? (0, g.jsxs)(t.Er, { children: ['Vul de ', (0, g.jsx)(t.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, g.jsxs)(t.Er, { children: [(0, g.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, g.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, g.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, g.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    T = ({ component: e, headingLevel: n, description: a }) => {
     const s = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(c.p, { level: n, suffix: s && (0, g.jsx)(m.D, { state: s }), children: e.title }), (0, g.jsx)(t.fz, { lead: !0, children: a }), ['Help Wanted', 'Community'].includes(s) && (0, g.jsx)(b.s, { relayStep: s, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    D = ({ component: e }) => {
     const n = (e && x[e.title]) || [];
     return n.length > 0 && (0, g.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, g.jsxs)(g.Fragment, { children: [e.slug ? (0, g.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  29857(e, n, a) {
   'use strict';
   a.d(n, { DZ: () => i, _B: () => l });
   var t = a(37168),
    s = a(86070);
   const i = (e) => (0, s.jsx)(t.D, { ...e }),
    l = (e) => (0, s.jsx)(t.D, { ...e, level: 3 });
  },
  46276(e, n, a) {
   'use strict';
   a.d(n, { p: () => i });
   var t = a(13526),
    s = a(86070);
   const i = ({ children: e, className: n, level: a = 1, suffix: i, ...l }) => (0, s.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  56323(e, n, a) {
   'use strict';
   a.d(n, { e: () => r });
   var t = a(24703),
    s = a(30758),
    i = a(84471),
    l = a(86070);
   const r = ({ component: e }) => {
    if (globalThis.isAstro) return null;
    const { title: n } = e,
     r = (0, i.fX)(n),
     o = s.lazy(() => a(82839)(`./${r}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, l.jsx)(s.Suspense, { fallback: null, children: (0, l.jsx)(t.o, { omitH1: !0, headingLevel: 1, children: (0, l.jsx)(o, {}) }) });
   };
  },
  66153(e, n, a) {
   'use strict';
   a.d(n, { f: () => t.f });
   var t = a(56561);
  },
  82839(e, n, a) {
   var t = { './button-docs/docs/aliases.md': [64163, 64163], './code-block-docs/docs/aliases.md': [47318, 47318], './code-docs/docs/aliases.md': [50566, 50566], './color-sample-docs/docs/aliases.md': [72965, 72965], './data-badge-docs/docs/aliases.md': [79971, 79971], './heading-1-docs/docs/aliases.md': [24053, 24053], './heading-2-docs/docs/aliases.md': [80713, 80713], './heading-3-docs/docs/aliases.md': [69461, 69461], './heading-4-docs/docs/aliases.md': [8289, 8289], './heading-docs/docs/aliases.md': [43020, 43020], './link-docs/docs/aliases.md': [71164, 71164], './mark-docs/docs/aliases.md': [92698, 92698], './number-badge-docs/docs/aliases.md': [36630, 36630], './paragraph-docs/docs/aliases.md': [42388, 42388], './skip-link-docs/docs/aliases.md': [7236, 7236] };
   function s(e) {
    if (!a.o(t, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = t[e],
     s = n[0];
    return a.e(n[1]).then(() => a(s));
   }
   ((s.keys = () => Object.keys(t)), (s.id = 82839), (e.exports = s));
  },
  84471(e, n, a) {
   'use strict';
   a.d(n, { bo: () => s, KF: () => m, mJ: () => p, VZ: () => D, cR: () => T, Pv: () => x, qZ: () => l, kD: () => v, QQ: () => H, B2: () => c, Pc: () => o, f4: () => r, GT: () => k, fX: () => i, eQ: () => j, B_: () => b, o_: () => f });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    l = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
    x = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: s, value: i }) => {
        const l = /^(.+) URL/.exec(t)[1],
         r = 'Storybook' === l ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${l}`;
        return { brand: l.toLowerCase(), name: t, id: s, value: i, description: r };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? v(e[a], [...n, a]) : []));
   }
   function k(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
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
    },
    N = new Set(['ics', 'json', 'pdf']),
    H = (e) => {
     const n = e.split('/').pop() ?? '',
      a = n.split('.').pop()?.toLowerCase();
     return void 0 !== a && N.has(a);
    };
  },
  87856(e, n, a) {
   'use strict';
   a.d(n, { D: () => r });
   var t = a(46447),
    s = a(13526),
    i = a(84471),
    l = a(86070);
   const r = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, l.jsx)(t.KE, { className: (0, s.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
 },
]);
