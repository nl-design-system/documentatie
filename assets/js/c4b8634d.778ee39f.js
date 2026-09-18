/*! For license information please see c4b8634d.778ee39f.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8785],
 {
  960(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, i.jsxs)(n.p, { children: ['Wat is een ', (0, i.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wat is het ', (0, i.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wat betekent ', (0, i.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  3387(e, n, t) {
   t.d(n, { s: () => s });
   var i = t(29181),
    a = t(13526),
    r = t(84471),
    o = t(86070);
   const l = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    s = ({ name: e, relayStep: n, description: t }) => {
     const s = (0, r.fX)(n),
      d = l[e] ?? e;
     return (0, o.jsxs)(i.WK, { children: [(0, o.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, a.A)('ma-component-illustration', `ma-component-illustration--${s}`), fill: 'none', children: [(0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, o.jsx)('rect', { width: '960', height: '540' }), (0, o.jsx)('rect', { width: '960', height: '540' })] }), (0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, o.jsx)('use', { href: `/svg/componenten_overzicht_${(0, r.fX)(d)}.svg#component-illustration` })] }), (0, o.jsx)(i.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  3446(e, n, t) {
   t.d(n, { r: () => g });
   var i = t(29181),
    a = t(74172),
    r = t(15089),
    o = t(28377),
    l = t(33648),
    s = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(s.A, {}) });
  },
  8555(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, i.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => s });
   var i = t(13526),
    a = t(30758),
    r = t(96345),
    o = t(37168),
    l = t(86070);
   const s = (0, a.forwardRef)(({ as: e, className: n, children: t, ...a }, r) => {
     const o = e || 'div',
      s = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, l.jsx)(o, { ref: r, className: s, ...a, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: a, headingLevel: s, headingApperance: d, ...c }) => {
     const g = (0, i.A)('utrecht-accordion__section', e),
      u = (0, i.A)('utrecht-accordion__panel', n);
     return (0, l.jsxs)('details', { className: g, ...c, children: [(0, l.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, l.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, l.jsx)('span', { className: 'nl-button__icon-start', children: (0, l.jsx)(r.A, {}) }), (0, l.jsxs)('span', { className: 'nl-button__label', children: [a && (0, l.jsx)(o.D, { level: s, appearance: d, children: a }), t] })] }) }), (0, l.jsx)('div', { className: u, children: c.children })] });
    };
  },
  15089(e, n, t) {
   t.d(n, { A: () => o });
   var i = t(48907),
    a = t(30758),
    r = ['size', 'color'];
   function o(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     s = (0, i.$i)(e, r);
    return a.createElement('svg', (0, i._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-github', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, s), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' }));
   }
  },
  19707(e, n, t) {
   t.d(n, { Z: () => i.Z });
   var i = t(50172);
  },
  25634(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  26165(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => l, Zp: () => s });
   var i = t(46447),
    a = t(13526),
    r = t(86070);
   const o = ({ background: e, children: n, className: t, ...i }) => (0, r.jsx)('div', { className: (0, a.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    l = (e) => (0, r.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: n, className: t, component: o = 'div', background: l, children: s }) => {
     const d = (e) => ('article' === o ? (0, r.jsx)('article', { ...e }) : 'section' === o ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, a.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: s });
     return e ? (0, r.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, r.jsx)('div', { className: (0, a.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  26877(e, n, t) {
   t.d(n, { VK: () => v, $9: () => b, mu: () => f, Fc: () => w, K_: () => L });
   var i = t(29181),
    a = t(29857),
    r = t(66153),
    o = t(13526),
    l = t(3446),
    s = t(26165),
    d = t(19707),
    c = t(86070);
   const g = ({ checked: e, unchecked: n }) => {
    const t = (e / (e + n)) * 250;
    return (0, c.jsxs)('svg', { viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg', className: 'ma-component-progress', 'aria-hidden': 'true', children: [(0, c.jsx)('circle', { className: 'ma-component-progress__background', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'none', strokeWidth: '20' }), (0, c.jsx)('circle', { className: 'ma-component-progress__progress', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'currentColor', strokeWidth: '20', strokeDasharray: t })] });
   };
   var u = t(87856),
    m = t(46276),
    h = t(58876),
    p = t(84471);
   const j = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Blockquote","slug":"blockquote"},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Pull Quote","slug":"pull-quote"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var k = t(14881),
    x = t(3387);
   const v = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      a = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(k.n, { children: a.map((t) => (0, c.jsx)(k.K, { className: (0, o.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(h._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, c.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(i) }, i)) }), (0, c.jsx)(i.fz, { children: (0, c.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(s.AC, {
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
            o = t?.value,
            u = (0, p.Pv)(e),
            m = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => m.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return globalThis.isAstro
            ? (0, c.jsx)(
               d.Z,
               {
                heading: e.title.replace(/^Community/i, ''),
                headingLevel: n,
                description: (0, c.jsxs)('div', {
                 className: 'ma-flow',
                 children: [
                  (0, c.jsxs)(r.f, { children: [(0, c.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (0, c.jsxs)('div', {
                   children: [
                    (h.length > 0 || u.length > 0) && (0, c.jsx)(a.DZ, { level: Math.min(n + 1, 6), children: 'Snel aan de slag' }),
                    h.length > 0 &&
                     (0, c.jsx)(i.dk, {
                      links: h
                       .filter((e) => !!m.get(e.name))
                       .map((e) => {
                        const n = m.get(e.name);
                        return { children: n.desciption, icon: (0, c.jsx)(l.r, { brand: n.brand }), href: e.value };
                       }),
                     }),
                   ],
                  }),
                  u.length > 0 && u.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)('section', { children: [(0, c.jsxs)(a.DZ, { level: Math.min(n + 2, 6), children: [o, ' in ', e] }), (0, c.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(l.r, { brand: e.brand }), href: e.value })) })] }, e)),
                 ],
                }),
               },
               e.title,
              )
            : (0, c.jsx)(
               s.Zp,
               {
                className: 'ma-implementation-card',
                children: (0, c.jsxs)(s.Wu, {
                 children: [
                  (0, c.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
                  (0, c.jsxs)(i.fz, { children: [(0, c.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (h.length > 0 || u.length > 0) && (0, c.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
                  h.length > 0 &&
                   (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsx)(i.dk, {
                     links: h
                      .filter((e) => !!m.get(e.name))
                      .map((e) => {
                       const n = m.get(e.name);
                       return { children: n.desciption, icon: (0, c.jsx)(l.r, { brand: n.brand }), href: e.value };
                      }),
                    }),
                   }),
                  u.length > 0 && (0, c.jsx)(c.Fragment, { children: u.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.DZ, { level: n + 2, children: [o, ' in ', e] }), (0, c.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(l.r, { brand: e.brand }), href: e.value })) })] })) }),
                 ],
                }),
               },
               e.title,
              );
          }),
        })
      : (0, c.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(i.Xy, { children: [a ? (0, c.jsxs)(i.Er, { children: ['Vul de ', (0, c.jsx)(i.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(i.Er, { children: [(0, c.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    w = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m.p, { level: n, suffix: a && (0, c.jsx)(u.D, { state: a }), children: e.title }), (0, c.jsx)(i.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(a) && (0, c.jsx)(x.s, { relayStep: a, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    L = ({ component: e }) => {
     const n = (e && j[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [e.slug ? (0, c.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  28377(e, n, t) {
   t.d(n, { A: () => o });
   var i = t(48907),
    a = t(30758),
    r = ['size', 'color'];
   function o(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     s = (0, i.$i)(e, r);
    return a.createElement('svg', (0, i._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-npm', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, s), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M1 8h22v7h-12v2h-4v-2h-6z' }), a.createElement('path', { d: 'M7 8v7' }), a.createElement('path', { d: 'M14 8v7' }), a.createElement('path', { d: 'M17 11v4' }), a.createElement('path', { d: 'M4 11v4' }), a.createElement('path', { d: 'M11 11v1' }), a.createElement('path', { d: 'M20 11v4' }));
   }
  },
  29857(e, n, t) {
   t.d(n, { DZ: () => r, _B: () => o });
   var i = t(37168),
    a = t(86070);
   const r = (e) => (0, a.jsx)(i.D, { ...e }),
    o = (e) => (0, a.jsx)(i.D, { ...e, level: 3 });
  },
  31686(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  33648(e, n, t) {
   t.d(n, { A: () => o });
   var i = t(48907),
    a = t(30758),
    r = ['size', 'color'];
   function o(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     s = (0, i.$i)(e, r);
    return a.createElement('svg', (0, i._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-storybook', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, s), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M5 4l.5 16.5l13.5 .5v-18z' }), a.createElement('path', { d: 'M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 2.999 .762 3.3 1.985' }), a.createElement('path', { d: 'M16 3.5v1' }));
   }
  },
  37166(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  37888(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  46102(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als de inhoud van de link niet uit tekst bestaat, maar uit bijvoorbeeld een icoon of logo dan moet het aanklikbare gedeelte goed te onderscheiden zijn. Het contrast tussen een icoon, of kader rond een logo, en de achtergrond moet minimaal 3:1 zijn. Dit is te controleren met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  46276(e, n, t) {
   t.d(n, { p: () => r });
   var i = t(13526),
    a = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...o }) => (0, a.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  48907(e, n, t) {
   function i() {
    return (
     (i = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
         }
         return e;
        }),
     i.apply(this, arguments)
    );
   }
   function a(e, n) {
    if (null == e) return {};
    var t,
     i,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       a = {},
       r = Object.keys(e);
      for (i = 0; i < r.length; i++) ((t = r[i]), n.indexOf(t) >= 0 || (a[t] = e[t]));
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (i = 0; i < r.length; i++) ((t = r[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])));
    }
    return a;
   }
   t.d(n, { $i: () => a, _P: () => i });
  },
  49925(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  50172(e, n, t) {
   t.d(n, { Z: () => u });
   var i = t(86070),
    a = t(63009);
   function r(e) {
    var n,
     t,
     i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var a = e.length;
      for (n = 0; n < a; n++) e[n] && (t = r(e[n])) && (i && (i += ' '), (i += t));
     } else for (t in e) e[t] && (i && (i += ' '), (i += t));
    return i;
   }
   function o() {
    for (var e, n, t = 0, i = '', a = arguments.length; t < a; t++) (e = arguments[t]) && (n = r(e)) && (i && (i += ' '), (i += n));
    return i;
   }
   const l = ({ ref: e, children: n, className: t, inline: r, ...l }) => (0, i.jsx)(a.N, { ...l, className: o('rhc-link', { 'rhc-link--inline': r }, t), disabled: !1, ref: e, children: n });
   l.displayName = 'Link';
   var s = t(30758);
   function d(e) {
    var n,
     t,
     i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var a = e.length;
      for (n = 0; n < a; n++) e[n] && (t = d(e[n])) && (i && (i += ' '), (i += t));
     } else for (t in e) e[t] && (i && (i += ' '), (i += t));
    return i;
   }
   function c() {
    for (var e, n, t = 0, i = '', a = arguments.length; t < a; t++) (e = arguments[t]) && (n = d(e)) && (i && (i += ' '), (i += n));
    return i;
   }
   const g = ({ level: e = 2, children: n, ...t }) => {
     const i = `h${e}`;
     return s.createElement(i, t, n);
    },
    u = (0, s.forwardRef)(({ heading: e, headingLevel: n = 2, subheading: t, description: a, metadata: r, image: o, href: s, target: d, linkLabel: u, title: m, className: h, children: p, ...j }, k) => (0, i.jsxs)('div', { className: c('rhc-card', 'rhc-card--default', h), ref: k, ...j, children: [o && (0, i.jsx)('div', { className: 'rhc-card__image', children: o }), (0, i.jsxs)('div', { className: 'rhc-card__content', children: [(0, i.jsx)(g, { className: 'rhc-card__heading', level: n, children: s ? (0, i.jsx)(l, { className: 'rhc-card__link', href: s, target: d, title: m, children: e }) : e }), t && (0, i.jsx)('p', { className: 'rhc-card__subheading', children: t }), a && (0, i.jsx)('p', { className: 'rhc-card__description', children: a }), r && (0, i.jsx)('p', { className: 'rhc-card__metadata', children: r }), p] }), u && (0, i.jsx)('div', { className: 'rhc-card__footer', children: (0, i.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, i.jsx)(l, { href: s, target: d, title: m, children: u }) }) })] }));
   u.displayName = 'Card';
  },
  51363(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, i.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, i.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, i.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  53971(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  54672(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  63009(e, n, t) {
   t.d(n, { N: () => g });
   var i = t(15540),
    a = t(69967),
    r = t(86070),
    o = t(13526),
    l = t(30758),
    s = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, i.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = (0, l.forwardRef)(function (e, n) {
    var t = e.children,
     l = e.className,
     d = e.current,
     g = e.disabled,
     u = e.href,
     m = e.inlineBox,
     h = (0, a.A)(e, s);
    return (0, r.jsx)('a', c(c({ 'aria-current': d || void 0, 'aria-disabled': g, className: (0, o.$)('nl-link', (0, i.A)((0, i.A)((0, i.A)({}, 'nl-link--current', d), 'nl-link--disabled', g), 'nl-link--inline-box', m), l), href: g ? void 0 : u, role: g ? 'link' : void 0, ref: n, tabIndex: g ? 0 : void 0 }, h), {}, { children: t }));
   });
   g.displayName = 'Link';
  },
  66153(e, n, t) {
   t.d(n, { f: () => i.f });
   var i = t(56561);
  },
  67346(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  74172(e, n, t) {
   t.d(n, { A: () => o });
   var i = t(48907),
    a = t(30758),
    r = ['size', 'color'];
   function o(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     s = (0, i.$i)(e, r);
    return a.createElement('svg', (0, i._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-figma', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, s), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('circle', { cx: '15', cy: '12', r: '3' }), a.createElement('rect', { x: '6', y: '3', width: '12', height: '6', rx: '3' }), a.createElement('path', { d: 'M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' }));
   }
  },
  83386(e, n, t) {
   t.d(n, { A: () => o });
   var i = t(48907),
    a = t(30758),
    r = ['size', 'color'];
   function o(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     o = e.color,
     l = void 0 === o ? 'currentColor' : o,
     s = (0, i.$i)(e, r);
    return a.createElement('svg', (0, i._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-external-link', width: t, height: t, viewBox: '0 0 24 24', stroke: l, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, s), a.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), a.createElement('path', { d: 'M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' }), a.createElement('line', { x1: '10', y1: '14', x2: '20', y2: '4' }), a.createElement('polyline', { points: '15 4 20 4 20 9' }));
   }
  },
  84471(e, n, t) {
   t.d(n, { bo: () => a, KF: () => u, mJ: () => p, VZ: () => L, cR: () => w, Pv: () => j, qZ: () => o, kD: () => f, QQ: () => D, B2: () => m, Pc: () => s, f4: () => l, GT: () => b, fX: () => r, eQ: () => v, B_: () => x, o_: () => k });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(c(n));
    },
    m = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(c(e.projects.flatMap((e) => h(e)))),
    j = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: a, value: r }) => {
        const o = /^(.+) URL/.exec(i)[1],
         l = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: a, value: r, description: l };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    k = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    L = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    y = new Set(['ics', 'json', 'pdf']),
    D = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && y.has(t);
    };
  },
  87856(e, n, t) {
   t.d(n, { D: () => l });
   var i = t(46447),
    a = t(13526),
    r = t(84471),
    o = t(86070);
   const l = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, o.jsx)(i.KE, { className: (0, a.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  91315(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { code: 'code', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Je kunt de link focussen met de tabtoets (en in omgekeerde richting met shift + tabtoets) en activeren met de entertoets. Als je gebruik maakt van het ', (0, i.jsx)(n.code, { children: 'a' }), '-element hoef je hier niets aan aan te passen.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  92765(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, i.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  94080(e, n, t) {
   (t.r(n), t.d(n, { assets: () => C, component: () => P, contentTitle: () => S, default: () => G, description: () => T, frontMatter: () => H, issueNumber: () => B, metadata: () => i, title: () => R, toc: () => M }));
   const i = JSON.parse('{"id":"componenten/login-link/index","title":"Login Link","description":"Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.","source":"@site/docs/componenten/login-link/index.mdx","sourceDirName":"componenten/login-link","slug":"/login-link","permalink":"/login-link","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/login-link/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Login Link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Login Link","pagination_label":"Login Link","description":"Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.","issue_number":268,"slug":"/login-link","keywords":["aanmeldlink","anoniem","auth link","authenticatie","authentication","authorise","bewindvoering","bsn","button","buttons","button login","cta","digid","eherkenning","eidas","eu login","european login","external link","go to","gebruikersnaam","identiteit","identity","inlogbutton","inloggen","inloggen bij","inloggen link","inloggen met service","inlogmiddel","inlogmiddelen","inlogservice","knop","knoppen","kvk","label-link","login","login knop","login met","login navigatie","login navigation","login provider","machtigen","mijn organisatie link","naar login","particulier","password","sign in","username","wachtwoord","zakelijk"]},"sidebar":"componenten","previous":{"title":"Link List","permalink":"/link-list"},"next":{"title":"Logo","permalink":"/logo"}}');
   var a = t(86070),
    r = t(18439),
    o = t(79447),
    l = t(67346),
    s = t(26877);
   function d(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Als het label van de link alleen uit een icoon of logo bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de link een naam heeft die duidelijk maakt waar de link voor dient.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor de afbeelding is niet nodig als er naast de afbeelding ook tekst in de link staat die uitlegt waar de link naartoe gaat. Een ', (0, a.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, a.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, a.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, a.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon of logo te tonen, hou dan rekening met het volgende.' }), '\n', (0, a.jsxs)(n.p, { children: ['Een ', (0, a.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de toegankelijke naam van de link:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<a href="url">\n  <img src="ideal.svg" alt="iDeal" />\n</a>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Maar duidelijker is:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<a href="url"> Betaal met iDeal <img src="ideal.svg" alt="" /> </a>\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Logius geeft voor het inloggen met DigiD, eHerkenning en European login "Opmaakrichtlijnen voor inlogmiddelknoppen" in de ', (0, a.jsx)(n.a, { href: 'https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang', children: 'Stijlhandleiding aansluiten Toegang' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   var c = t(46102),
    g = t(54672),
    u = t(37166),
    m = t(53971),
    h = t(91315),
    p = t(8555),
    j = t(51363),
    k = t(92765),
    x = t(98526),
    v = t(37888);
   function f(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Login Links die dezelfde functie hebben binnen een website, zien er hetzelfde uit en werken ook hetzelfde.' }), '\n', (0, a.jsxs)(n.p, { children: ['Logius geeft voor het inloggen met DigiD, eHerkenning en European login "Opmaakrichtlijnen voor inlogmiddelknoppen" in de ', (0, a.jsx)(n.a, { href: 'https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang', children: 'Stijlhandleiding aansluiten Toegang' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function b(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['De link heeft een rol van ', (0, a.jsx)(n.code, { children: 'link' }), ' en een ', (0, a.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), ' die duidelijk maakt waar de link voor dient.'] }), '\n', (0, a.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, a.jsx)(n.code, { children: 'a' }), '-element met het ', (0, a.jsx)(n.code, { children: 'href' }), ' attribuut als je een link nodig hebt:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<a href="url">Contact</a>\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, a.jsx)(n.code, { children: 'role="link"' }), ' toe te voegen aan een ander element dan een ', (0, a.jsx)(n.code, { children: 'a' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.'] })] });
   }
   var w = t(25634),
    L = t(49925),
    y = t(31686),
    D = t(960);
   const A = [
     { title: 'Het label van de Login Link bestaat uit gewone tekst, niet uit een afbeelding van tekst', sc: '1.4.5', status: '', component: w.Ay },
     { title: 'De linktekst van de Login Link vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).', sc: '2.4.4', status: '', component: D.Ay },
     { title: 'Als de gebruiker de Login Link indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken', sc: '2.5.2', status: '', component: j.Ay },
     { title: 'De zichtbare naam van de Login Link komt voor in de toegankelijke naam', sc: '2.5.3', status: '', component: k.Ay },
     { title: 'Als de tekst van de Login Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode', sc: '3.1.2', status: '', component: v.Ay },
    ],
    N = [
     { title: 'De contrastverhouding van de tekstkleur in Login Link met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: u.Ay },
     { title: 'Als het zichtbare label van de Login Link alleen een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1', sc: '1.4.11', status: '', component: c.Ay },
     { title: 'De Login Link heeft een aanklikbaar gedeelte van ten minste 44 bij 44 pixels', sc: '2.5.5', status: '', component: x.Ay },
     {
      title: 'Login Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label',
      sc: '3.2.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
      },
     },
    ],
    z = [
     { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar', sc: '1.4.4', status: '', component: m.Ay },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar', sc: '1.4.12', status: '', component: g.Ay },
    ],
    _ = [
     { title: 'Je kunt de Login Link focussen met de tabtoets en activeren met de entertoets', sc: '2.1.1', status: '', component: h.Ay },
     { title: 'De functionaliteit van de Login Link veroorzaakt geen toetsenbordval', sc: '2.1.2', status: '', component: L.Ay },
     { title: 'Wanneer de Login Link de toetsenbordfocus krijgt is de focus zichtbaar', sc: '2.4.7', status: '', component: p.Ay },
     { title: 'Als de Login Link de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud', sc: '2.4.11', status: '', component: y.Ay },
    ],
    F = [
     {
      title: 'Als het label van de Login Link uit een icoon bestaat, dan heeft deze een goed tekstalternatief',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
      },
     },
     {
      title: 'De Login Link heeft een rol van link en een toegankelijke naam die duidelijk maakt waar de Login Link voor dient',
      sc: '4.1.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(b, { ...e }) }) : b(e);
      },
     },
    ],
    H = { title: 'Login Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Login Link', pagination_label: 'Login Link', description: 'Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.', issue_number: 268, slug: '/login-link', keywords: ['aanmeldlink', 'anoniem', 'auth link', 'authenticatie', 'authentication', 'authorise', 'bewindvoering', 'bsn', 'button', 'buttons', 'button login', 'cta', 'digid', 'eherkenning', 'eidas', 'eu login', 'european login', 'external link', 'go to', 'gebruikersnaam', 'identiteit', 'identity', 'inlogbutton', 'inloggen', 'inloggen bij', 'inloggen link', 'inloggen met service', 'inlogmiddel', 'inlogmiddelen', 'inlogservice', 'knop', 'knoppen', 'kvk', 'label-link', 'login', 'login knop', 'login met', 'login navigatie', 'login navigation', 'login provider', 'machtigen', 'mijn organisatie link', 'naar login', 'particulier', 'password', 'sign in', 'username', 'wachtwoord', 'zakelijk'] },
    S = void 0,
    C = {},
    R = 'Login Link',
    T = 'Biedt de mogelijkheid om naar de beschikbare inlogmiddelen te navigeren.',
    B = 268,
    P = o.find((e) => e.number === B),
    M = [{ value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }, { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 }, ...l.RM];
   function E(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components },
     { CriteriaList: t, CriteriaListItem: i } = n;
    return (t || O('CriteriaList', !0), i || O('CriteriaListItem', !0), (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(s.Fc, { component: P, headingLevel: 1, description: T }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(s.VK, { component: P, headingLevel: 3 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(s.mu, { component: P, headingLevel: 3 }), '\n', (0, a.jsx)(s.K_, { component: P }), '\n', (0, a.jsx)(n.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }), '\n', (0, a.jsx)(l.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid algemeen', children: A.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid visueel ontwerp', children: N.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid zoom en herschalen', children: z.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid toetsenbord', children: _.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid screenreader', children: F.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(s.$9, { component: P, headingLevel: 2 })] }));
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(E, { ...e }) }) : E(e);
   }
   function O(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  96345(e, n, t) {
   t.d(n, { A: () => i });
   const i = (0, t(18652).A)('outline', 'chevron-down', 'ChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]);
  },
  98526(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
