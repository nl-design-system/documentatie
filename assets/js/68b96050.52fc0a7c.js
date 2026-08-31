(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34799],
 {
  10645(e, n, t) {
   'use strict';
   t.d(n, { p: () => s });
   var a = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...i }) => (0, r.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...i, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  17236(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var a = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  21034(e, n, t) {
   'use strict';
   t.d(n, { VK: () => f, $9: () => k, mu: () => w, Fc: () => b, K_: () => v });
   var a = t(29181),
    r = t(13526),
    s = t(40889),
    i = t(21530),
    o = t(45186);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
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
   var g = t(39569),
    u = t(10645),
    p = t(58876),
    m = t(32385);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = t(70348),
    x = t(85162);
   const f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => m.f4.includes(e.id)),
      s = t && m.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(j.n, { children: s.map((t) => (0, d.jsx)(j.K, { className: (0, r.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, m.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, m.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    w = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !m.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(i.AC, {
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
            o = (0, m.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            i.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(i.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || o.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
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
     const r = e && m.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: r && (0, d.jsx)(g.D, { state: r }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(r) && (0, d.jsx)(x.s, { relayStep: r, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    v = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(a.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21530(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => i, Wu: () => o, Zp: () => l });
   var a = t(46447),
    r = t(13526),
    s = t(86070);
   const i = ({ background: e, children: n, className: t, ...a }) => (0, s.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...a, children: n }),
    o = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: i = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === i ? (0, s.jsx)('article', { ...e }) : 'section' === i ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, r.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(a.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, s.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27823(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, a.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  30400(e, n, t) {
   'use strict';
   t.d(n, { b: () => j, e: () => h });
   var a = t(30758),
    r = t(94309),
    s = t(44715),
    i = t(29181),
    o = t(56561),
    l = t(50805),
    d = t(70348),
    c = t(37168),
    g = t(86070);
   const u = (e) => (0, g.jsx)(c.D, { ...e });
   var p = t(6360),
    m = t(13526);
   const h = ({ title: e, sc: n, children: t, tags: o }) => {
     const l = (0, a.useId)(),
      c = [...o];
     if (n) {
      c.push(n);
      const e = s.pI.get(n);
      e?.conformance && c.push(`Niveau ${e.conformance}`);
     }
     return (0, g.jsx)('div', {
      role: 'listitem',
      'data-tags': o.join(','),
      className: (0, m.A)(
       'ma-new-checklist__item',
       o.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, g.jsx)(d.K, {
       label: (0, g.jsx)('span', { className: 'ma-new-checklist__title', id: l, children: e }),
       children: (0, g.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, g.jsx)('div', { className: 'ma-flow', children: t }),
         (0, g.jsx)(i._Q, {
          className: 'ma-new-checklist__badge-list',
          children: c.map((e, n) => {
           let t = (0, g.jsx)(p.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const a = s.pI.get(e);
            t = (0, g.jsx)(r.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${a.sc} ${a.nl.title}`, style: { lineHeight: 1 }, children: (0, g.jsx)(p.KE, { children: `WCAG ${e}` }) }, n);
           }
           return t;
          }),
         }),
        ],
       }),
      }),
     });
    },
    j = ({ children: e, headingLevel: n }) => {
     const t = a.useRef(null),
      [r, s] = (0, a.useState)([]),
      [c, p] = (0, a.useState)([]),
      [m, h] = (0, a.useState)([]),
      [j, x] = (0, a.useState)(0),
      [f, w] = (0, a.useState)(0),
      k = (e) => m.includes(e),
      b = (0, a.useId)();
     return (
      a.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        a = Array.from(e.querySelectorAll('[data-tags]'));
       (a.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        s(a),
        p([...n]),
        x(a.length),
        h([...n]));
      }, []),
      a.useEffect(() => {
       const e = m,
        n = [],
        t = [];
       (r.forEach((a) => {
        (a.dataset.tags?.split(',') || []).some((n) => e.includes(n)) ? n.push(a) : t.push(a);
       }),
        n.forEach((e) => (e.hidden = !1)),
        t.forEach((e) => (e.hidden = !0)),
        w(n.length));
      }, [m]),
      (0, g.jsxs)('div', {
       children: [
        (0, g.jsxs)('div', {
         className: 'ma-filter-block',
         children: [
          (0, g.jsxs)(i.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': b,
           children: [
            (0, g.jsx)(u, { level: n, id: b, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(c).map((e) =>
             (0, g.jsxs)(
              i.zB,
              {
               type: 'checkbox',
               children: [
                (0, g.jsx)(i.Sc, {
                 checked: k(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !k(e)) ? [...m, e] : m.filter((n) => n !== e);
                   h(t);
                  })(e),
                }),
                (0, g.jsx)(i.lR, { htmlFor: e, children: e }),
               ],
              },
              e,
             ),
            ),
           ],
          }),
          (0, g.jsx)('div', {
           children: (0, g.jsxs)(g.Fragment, {
            children: [
             (0, g.jsxs)(o.f, { role: 'status', children: [f, ' van de ', j, ' items zijn nu zichtbaar.'] }),
             f < j
              ? (0, g.jsx)(l.$n, {
                 purpose: 'secondary',
                 onClick: () => {
                  h(c);
                 },
                 children: 'Toon alles',
                })
              : (0, g.jsx)(g.Fragment, {}),
            ],
           }),
          }),
         ],
        }),
        (0, g.jsx)(d.n, { className: 'ma-new-checklist', role: 'list', ref: t, children: e }),
       ],
      })
     );
    };
  },
  32385(e, n, t) {
   'use strict';
   t.d(n, { bo: () => r, KF: () => u, mJ: () => h, VZ: () => A, cR: () => v, Pv: () => j, qZ: () => i, kD: () => k, QQ: () => T, B2: () => p, Pc: () => l, f4: () => o, GT: () => b, fX: () => s, eQ: () => w, B_: () => f, o_: () => x });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return g(c(n));
    },
    p = (e, n) => h(e).includes(n),
    m = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => g(c(e.projects.flatMap((e) => m(e)))),
    j = (e) => {
     const n = m(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: r, value: s }) => {
        const i = /^(.+) URL/.exec(a)[1],
         o = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: a, id: r, value: s, description: o };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    x = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    w = (e, n) => n.reduce((e, n) => e?.[n], e);
   function k(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? k(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, x(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const v = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    y = new Set(['ics', 'json', 'pdf']),
    T = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && y.has(t);
    };
  },
  33691(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var a = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  33780(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => Te, component: () => Ge, contentTitle: () => ye, default: () => Fe, description: () => Re, frontMatter: () => Ae, issueNumber: () => De, metadata: () => a, title: () => Ce, toc: () => Ne }));
   const a = JSON.parse('{"id":"componenten/paragraph/index","title":"Paragraph","description":"Toont een alinea aan tekst.","source":"@site/docs/componenten/paragraph/index.mdx","sourceDirName":"componenten/paragraph","slug":"/paragraph","permalink":"/paragraph","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/paragraph/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Paragraph","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Paragraph","pagination_label":"Paragraph","description":"Toont een alinea aan tekst.","issue_number":115,"slug":"/paragraph","keywords":["alinea","body","body copy","body text","bodytekst","broodtekst","content block","content blok","copy","gewone tekst","hoofdalinea","inleidende alinea","inleiding","introductory","lead","lead paragraph","lead text","paragraaf","paragraph","regular text","rich text","rte","sentence","tekst","tekst-item","tekstblok","text","text block","text block","text element","zin"]},"sidebar":"componenten","previous":{"title":"Page Number Navigation","permalink":"/page-number-navigation"},"next":{"title":"Password Input","permalink":"/password-input"}}');
   var r = t(86070),
    s = t(18439),
    i = t(82062),
    o = t(17236),
    l = t(70561),
    d = t(33691);
   t(54401);
   function c(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Zorg dat een alinea in een paragraaf-element staat. Gebruik geen ', (0, r.jsx)(n.code, { children: '<div>' }), ' of ', (0, r.jsx)(n.code, { children: '<span>' }), ' voor op zichzelf staande teksten.\nZelfs als geen CSS geladen kan worden, blijft de tekst dan duidelijk weergegeven.'] });
   }
   var g = t(81165),
    u = t(82209),
    p = t(44293),
    m = t(51604),
    h = t(76703),
    j = t(72954),
    x = t(46422),
    f = t(89445),
    w = t(27823);
   const k = [
     { title: 'De contrastverhouding van de tekstkleur van de paragraaf met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: p.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als een paragraaftekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: h.Ay, tags: ['developer', 'contentmaker'] },
     { title: 'Als je de hele webpagina inzoomt tot 400% blijft de paragraaftekst leesbaar.', sc: '1.4.10', status: '', component: g.Ay, tags: ['developer'] },
     { title: 'De Paragraph is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: j.Ay, tags: ['developer'] },
     { title: 'De Paragraph komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: w.Ay, tags: ['developer'] },
    ],
    b = [
     {
      title: 'Gebruik het p-element voor paragraaftekst.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de paragraaftekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: m.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: u.Ay, tags: ['developer'] },
     { title: 'De Paragraph is standaard niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'De Paragraph komt standaard niet voor in de focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: f.Ay, tags: ['developer'] },
    ],
    v = JSON.parse('{"D":"De tekst heeft een te laag contrast"}');
   function A(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De tekst is niet goed leesbaar omdat de kleur van de tekst te weinig contrasteert met de kleur van de achtergrond. Mensen die kleurenblind of slechtziend zijn kunnen de tekst hierdoor niet goed lezen.' });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(A, { ...e }) }) : A(e);
   }
   function T(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Pas de kleur van de tekst of achtergrond aan, zodat de contrastratio tenminste 4,5:1 is.' });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(T, { ...e }) }) : T(e);
   }
   const R = JSON.parse('{"D":"Paragraph heeft geen inhoud"}');
   function D(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Er is een Paragraph-component zonder inhoud.' });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(D, { ...e }) }) : D(e);
   }
   function N(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Verwijder de lege Paragraph.' });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(N, { ...e }) }) : N(e);
   }
   const F = JSON.parse('{"D":"Tekst heeft een andere taal dan de taal die is aangegeven"}');
   function L(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De tekst heeft een andere taal dan de tekst er omheen, maar dat is niet aangegeven. Een screenreader leest de tekst daarom niet voor in de taal van de tekst.' });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(L, { ...e }) }) : L(e);
   }
   function P(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Geef aan welke taal dit stuk tekst heeft.' });
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(P, { ...e }) }) : P(e);
   }
   const H = JSON.parse('{"D":"Meerdere alinea\'s in \xe9\xe9n Paragraph"}');
   function _(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: "De Paragraph bevat meerdere alinea's die zijn gescheiden met witregels. Hierdoor is er in code geen onderscheid tussen de alinea's. Een screenreader mist daardoor natuurlijke pauze-momenten in de tekst tijdens het voorlezen. Daarnaast kan een screenreadergebruiker niet met een sneltoets naar de volgende paragraaf gaan, omdat de teksten niet zijn opgemaakt met losse Paragraphs." });
   }
   function B(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(_, { ...e }) }) : _(e);
   }
   function O(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Plaats elke alinea in een eigen Paragraph.' });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(O, { ...e }) }) : O(e);
   }
   const M = JSON.parse('{"D":"Hele tekst in Paragraph is dikgedrukt"}');
   function E(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De hele alinea is dikgedrukt. Hierdoor krijgt de tekst in code een andere betekenis, namelijk dat de tekst belangrijker is dan tekst die niet dikgedrukt is.' });
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(E, { ...e }) }) : E(e);
   }
   function $(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Gebruik de optie om tekst dikgedrukt te maken alleen voor de woorden of zinnen die extra aandacht nodig hebben.' });
   }
   function U(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)($, { ...e }) }) : $(e);
   }
   function Z(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Wil je een kop toevoegen boven een sectie? Gebruik dan een Heading van het juiste niveau.' });
   }
   function J(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Z, { ...e }) }) : Z(e);
   }
   function K(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Wil je de hele alinea een ander design geven omdat het de introductietekst is? Gebruik dan de Lead Paragraph variant.' });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(K, { ...e }) }) : K(e);
   }
   const q = JSON.parse('{"D":"Hele paragraaf is schuingedrukt"}');
   function Q(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De hele alinea is schuingedrukt. Hierdoor krijgt de tekst in code een andere betekenis, namelijk dat de tekst extra nadruk nodig heeft.' });
   }
   function Y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Q, { ...e }) }) : Q(e);
   }
   function ee(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Gebruik de optie om tekst schuingedrukt te maken alleen voor de belangrijkste woorden of zinnen die extra aandacht moeten krijgen.' });
   }
   function ne(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(ee, { ...e }) }) : ee(e);
   }
   function te(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Wil je de hele alinea anders stylen omdat het de introductie van de pagina is? Gebruik dan de Lead Paragraph variant.' });
   }
   function ae(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(te, { ...e }) }) : te(e);
   }
   function re(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Wil je de hele alinea anders vormgeven omdat de tekst een citaat is? Verwijder dan de schuingedrukte opmaak in de alinea en plaats de tekst ook boven of onder de Paragraph in een Pull Quote.' });
   }
   function se(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(re, { ...e }) }) : re(e);
   }
   const ie = JSON.parse('{"D":"Tekst in de Paragraph is onderstreept"}');
   function oe(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De tekst is onderstreept, maar geen link. Bezoekers verwachten dat onderstreepte woorden in een zin links zijn waar ze op kunnen klikken.' });
   }
   function le(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(oe, { ...e }) }) : oe(e);
   }
   function de(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Benadruk tekst op een andere manier, bijvoorbeeld door de tekst dik- of schuingedrukt te maken.' });
   }
   function ce(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(de, { ...e }) }) : de(e);
   }
   var ge = t(21530),
    ue = t(46447),
    pe = t(56421),
    me = t(40889),
    he = t(59778),
    je = t(21034),
    xe = t(30400),
    fe = t(70903),
    we = t(51582);
   function ke(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'gebruik-paragraph', children: 'Gebruik Paragraph' }) }), '\n', (0, r.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, r.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css', children: '@nl-design-system-candidate/paragraph-css' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.code, { children: 'nl-paragraph' }), ' class name op een ', (0, r.jsx)(n.code, { children: 'p' }), ' element:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p class="nl-paragraph">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</p>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Voor de Lead Paragraph gebruik je de extra class name ', (0, r.jsx)(n.code, { children: 'nl-paragraph--lead' }), ':'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<p class="nl-paragraph nl-paragraph--lead">\n  Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx. Je gelooft nooit wat er toen gebeurde!\n</p>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-css\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/paragraph-css@2/dist/paragraph.css"\n/>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, r.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/paragraph-css/dist/paragraph.css" />\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/paragraph-css/paragraph.css";\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, r.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-react', children: '@nl-design-system-candidate/paragraph-react' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/paragraph-react\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-jsx', children: 'import { Paragraph } from "@nl-design-system-candidate/paragraph-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Paragraph>Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'De Lead Paragraph werkt zo:' }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-jsx', children: '<Paragraph purpose="lead">Op brute w\u0133ze ving de schooljuf de quasi-kalme lynx.</Paragraph>\n' }) })] });
   }
   function be(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(ke, { ...e }) }) : ke(e);
   }
   var ve = t(41467);
   const Ae = { title: 'Paragraph', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Paragraph', pagination_label: 'Paragraph', description: 'Toont een alinea aan tekst.', issue_number: 115, slug: '/paragraph', keywords: ['alinea', 'body', 'body copy', 'body text', 'bodytekst', 'broodtekst', 'content block', 'content blok', 'copy', 'gewone tekst', 'hoofdalinea', 'inleidende alinea', 'inleiding', 'introductory', 'lead', 'lead paragraph', 'lead text', 'paragraaf', 'paragraph', 'regular text', 'rich text', 'rte', 'sentence', 'tekst', 'tekst-item', 'tekstblok', 'text', 'text block', 'text block', 'text element', 'zin'] },
    ye = void 0,
    Te = {},
    Ce = 'Paragraph',
    Re = 'De paragraph gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.',
    De = 115,
    Ge = i.find((e) => e.number === De),
    Ne = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'Veel gemaakte fouten bij het inzetten van Paragraph', id: 'veel-gemaakte-fouten-bij-het-inzetten-van-paragraph', level: 2 }, { value: 'Oplossing', id: 'oplossing', level: 4 }, { value: 'Oplossing', id: 'oplossing-1', level: 4 }, { value: 'Oplossing', id: 'oplossing-2', level: 4 }, { value: 'Oplossing', id: 'oplossing-3', level: 4 }, { value: 'Oplossing', id: 'oplossing-4', level: 4 }, { value: 'Oplossing', id: 'oplossing-5', level: 4 }, { value: 'Oplossing', id: 'oplossing-6', level: 4 }, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function Se(e) {
    const n = { h2: 'h2', h3: 'h3', h4: 'h4', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(je.Fc, { component: Ge, headingLevel: 1, description: Re }), '\n', (0, r.jsx)(he.e, { component: Ge }), '\n', (0, r.jsx)(ge.Zp, { className: 'ma-implementation-card', children: (0, r.jsxs)(ge.Wu, { children: [(0, r.jsx)(pe.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, r.jsxs)(ue.dk, { children: [(0, r.jsxs)(ue.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, r.jsx)(me.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, r.jsxs)(ue.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, r.jsx)(me.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, r.jsx)(pe.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, r.jsxs)(ue.dk, { children: [(0, r.jsxs)(ue.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-paragraph--documentatie', children: [(0, r.jsx)(me.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, r.jsxs)(ue.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/paragraph--documentatie', children: [(0, r.jsx)(me.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, r.jsx)(pe.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, r.jsxs)(ue.dk, { children: [(0, r.jsxs)(ue.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css', children: [(0, r.jsx)(me.r, { brand: 'npm' }), ' @nl-design-system-candidate/paragraph-css'] }), (0, r.jsxs)(ue.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-react', children: [(0, r.jsx)(me.r, { brand: 'npm' }), ' @nl-design-system-candidate/paragraph-react'] }), (0, r.jsxs)(ue.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-tokens', children: [(0, r.jsx)(me.r, { brand: 'npm' }), ' @nl-design-system-candidate/paragraph-tokens'] })] })] }) }), '\n', (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, r.jsx)(l.Ay, {}), '\n', (0, r.jsx)(xe.b, { headingLevel: '4', children: k.map(({ component: e, ...n }) => (0, r.jsx)(xe.e, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, r.jsx)(o.Ay, {}), '\n', (0, r.jsx)(xe.b, { headingLevel: '4', children: b.map(({ component: e, ...n }) => (0, r.jsx)(xe.e, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h2, { id: 'veel-gemaakte-fouten-bij-het-inzetten-van-paragraph', children: 'Veel gemaakte fouten bij het inzetten van Paragraph' }), '\n', (0, r.jsx)(n.p, { children: 'Deze sectie geeft een overzicht van de meest voorkomende fouten en biedt praktische oplossingen.' }), '\n', (0, r.jsx)(pe.D, { level: 3, children: v.D }), '\n', (0, r.jsx)(y, {}), '\n', (0, r.jsx)(n.h4, { id: 'oplossing', children: 'Oplossing' }), '\n', (0, r.jsx)(C, {}), '\n', (0, r.jsx)(pe.D, { level: 3, children: R.D }), '\n', (0, r.jsx)(G, {}), '\n', (0, r.jsx)(n.h4, { id: 'oplossing-1', children: 'Oplossing' }), '\n', (0, r.jsx)(S, {}), '\n', (0, r.jsx)(pe.D, { level: 3, children: F.D }), '\n', (0, r.jsx)(z, {}), '\n', (0, r.jsx)(n.h4, { id: 'oplossing-2', children: 'Oplossing' }), '\n', (0, r.jsx)(W, {}), '\n', (0, r.jsx)(pe.D, { level: 3, children: H.D }), '\n', (0, r.jsx)(B, {}), '\n', (0, r.jsx)(n.h4, { id: 'oplossing-3', children: 'Oplossing' }), '\n', (0, r.jsx)(I, {}), '\n', (0, r.jsx)(pe.D, { level: 3, children: M.D }), '\n', (0, r.jsx)(V, {}), '\n', (0, r.jsx)(n.h4, { id: 'oplossing-4', children: 'Oplossing' }), '\n', (0, r.jsx)(U, {}), '\n', (0, r.jsx)(J, {}), '\n', (0, r.jsx)(X, {}), '\n', (0, r.jsx)(pe.D, { level: 3, children: q.D }), '\n', (0, r.jsx)(Y, {}), '\n', (0, r.jsx)(n.h4, { id: 'oplossing-5', children: 'Oplossing' }), '\n', (0, r.jsx)(ne, {}), '\n', (0, r.jsx)(ae, {}), '\n', (0, r.jsx)(se, {}), '\n', (0, r.jsx)(pe.D, { level: 3, children: ie.D }), '\n', (0, r.jsx)(le, {}), '\n', (0, r.jsx)(n.h4, { id: 'oplossing-6', children: 'Oplossing' }), '\n', (0, r.jsx)(ce, {}), '\n', (0, r.jsx)(we.o, { omitH1: !0, headingLevel: 2, children: (0, r.jsx)(be, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, r.jsx)(fe.B, { tokens: ve }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(je.VK, { component: Ge, headingLevel: 3 }), '\n', (0, r.jsx)(je.$9, { component: Ge, headingLevel: 2 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(je.mu, { component: Ge, headingLevel: 3 }), '\n', (0, r.jsx)(je.K_, { component: Ge })] });
   }
   function Fe(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(Se, { ...e }) }) : Se(e);
   }
  },
  39569(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var a = t(46447),
    r = t(13526),
    s = t(32385),
    i = t(86070);
   const o = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, i.jsx)(a.KE, { className: (0, r.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var a = t(29181),
    r = t(74172),
    s = t(15089),
    i = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(i.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  44293(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, a.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, a.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, a.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  44715(e, n, t) {
   'use strict';
   t.d(n, { NO: () => s, pI: () => i });
   const a = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    r = (new Map(a.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    s = [...a.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !r.find((n) => n.sc === e)),
    i = new Map(s.map((e) => [e.sc, e]));
  },
  45186(e, n, t) {
   'use strict';
   t.d(n, { c: () => r });
   var a = t(30758);
   function r() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  46422(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51582(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var a = t(18439),
    r = t(46447),
    s = t(86070);
   const i = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + r;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: i(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: i = {} }) => (0, s.jsx)(a.x, { components: { ...d(n, t), ...l(r), ...i }, children: e });
  },
  51604(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, a.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, a.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, a.jsx)(n.code, { children: 'em' }), ' of ', (0, a.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, a.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, a.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, a.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  59778(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var a = t(51582),
    r = t(30758),
    s = t(32385),
    i = t(86070);
   const o = ({ component: e }) => {
    if (globalThis.isAstro) return null;
    const { title: n } = e,
     o = (0, s.fX)(n),
     l = r.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(a.o, { omitH1: !0, headingLevel: 1, children: (0, i.jsx)(l, {}) }) });
   };
  },
  70348(e, n, t) {
   'use strict';
   t.d(n, { K: () => d, n: () => l });
   var a = t(13526),
    r = t(30758),
    s = t(96345),
    i = t(37168),
    o = t(86070);
   const l = (0, r.forwardRef)(({ as: e, className: n, children: t, ...r }, s) => {
     const i = e || 'div',
      l = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, o.jsx)(i, { ref: s, className: l, ...r, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: r, headingLevel: l, headingApperance: d, ...c }) => {
     const g = (0, a.A)('utrecht-accordion__section', e),
      u = (0, a.A)('utrecht-accordion__panel', n);
     return (0, o.jsxs)('details', { className: g, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(s.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [r && (0, o.jsx)(i.D, { level: l, appearance: d, children: r }), t] })] }) }), (0, o.jsx)('div', { className: u, children: c.children })] });
    };
  },
  70561(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var a = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  70903(e, n, t) {
   'use strict';
   t.d(n, { B: () => N });
   var a = t(96547),
    r = t(38295),
    s = t(32385),
    i = t(46447),
    o = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    g = t(4603),
    u = t(29181),
    p = t(86070);
   function m({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, p.jsxs)(i.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await c.Ay.format(n, { parser: t, plugins: [o.A, l.Ay, d.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, p.jsx)(u.In, { children: (0, p.jsx)(g.A, {}) })],
       })
     : null;
   }
   var h = t(43864),
    j = t(35193),
    x = t(82999),
    f = t(13088),
    w = t(91525),
    k = t(24214),
    b = t(92081),
    v = t(1375),
    A = t(73563),
    y = t(23436),
    T = t(79532),
    C = t(30758);
   const R = { boxShadow: h.A, color: j.A, cursor: x.A, dimension: f.A, fontFamily: w.A, fontFamilies: w.A, fontSize: k.A, fontSizes: k.A, fontWeight: b.A, fontWeights: b.A, lineHeight: v.A, lineHeights: v.A, number: A.A, other: y.A, textDecoration: T.A },
    D = ({ type: e }) => {
     const n = Object.hasOwn(R, e) ? e : 'other';
     return (0, p.jsx)(u.In, { children: (0, C.createElement)(R[n]) });
    };
   var G = t(76223);
   function N({ tokens: e }) {
    const n = (0, s.kD)(e),
     t = (0, G.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     o = (0, s.GT)(n),
     l = o.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, p.jsxs)(p.Fragment, {
     children: [
      (0, p.jsxs)(i.XI, {
       children: [
        (0, p.jsx)(i.A0, { children: (0, p.jsxs)(i.Hj, { children: [(0, p.jsx)(i.M_, { children: 'name' }), (0, p.jsx)(i.M_, { children: 'type' })] }) }),
        (0, p.jsx)(i.BF, {
         children: o.map((n) => {
          const t = (0, s.o_)(n),
           o = (0, s.eQ)(e, n).$type;
          return (0, p.jsxs)(i.Hj, { children: [(0, p.jsx)(i.nA, { children: (0, p.jsx)(a.C, { children: (0, p.jsx)(i.kf, { children: t }) }) }), (0, p.jsx)(i.nA, { children: (0, p.jsxs)(r.K, { children: [(0, p.jsx)(D, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, p.jsxs)(i.e2, { children: [(0, p.jsx)(m, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, p.jsx)(m, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  72954(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, a.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  76703(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, a.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  81165(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var a = t(86070),
    r = t(18439);
   const s = [];
   function i(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, a.jsx)(n.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, a.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, a.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, a.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  82209(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, a.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, a.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, a.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, a.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, a.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, a.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, a.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, a.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, a.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, a.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, a.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82839(e, n, t) {
   var a = { './button-docs/docs/aliases.md': [62620, 62620], './code-block-docs/docs/aliases.md': [23021, 23021], './code-docs/docs/aliases.md': [39021, 39021], './color-sample-docs/docs/aliases.md': [24518, 24518], './data-badge-docs/docs/aliases.md': [99976, 99976], './heading-1-docs/docs/aliases.md': [16918, 16918], './heading-2-docs/docs/aliases.md': [5138, 5138], './heading-3-docs/docs/aliases.md': [70342, 70342], './heading-4-docs/docs/aliases.md': [67426, 67426], './heading-docs/docs/aliases.md': [5895, 5895], './link-docs/docs/aliases.md': [56551, 56551], './mark-docs/docs/aliases.md': [18569, 18569], './number-badge-docs/docs/aliases.md': [57569, 57569], './paragraph-docs/docs/aliases.md': [26183, 26183], './skip-link-docs/docs/aliases.md': [39927, 39927] };
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
  85162(e, n, t) {
   'use strict';
   t.d(n, { s: () => l });
   var a = t(29181),
    r = t(13526),
    s = t(32385),
    i = t(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, s.fX)(n),
      d = o[e] ?? e;
     return (0, i.jsxs)(a.WK, { children: [(0, i.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, r.A)('ma-component-illustration', `ma-component-illustration--${l}`), fill: 'none', children: [(0, i.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, i.jsx)('rect', { width: '960', height: '540' }), (0, i.jsx)('rect', { width: '960', height: '540' })] }), (0, i.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, i.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, i.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, i.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, i.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, i.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, i.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, i.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, i.jsx)('use', { href: `/svg/componenten_overzicht_${(0, s.fX)(d)}.svg#component-illustration` })] }), (0, i.jsx)(a.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  89445(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => i });
   var a = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  94309(e, n, t) {
   'use strict';
   t.d(n, { F: () => i, N: () => o });
   var a = t(13526),
    r = t(32385),
    s = t(86070);
   const i = ({ children: e, ...n }) => {
     const { to: t, href: a, ...i } = n;
     let o = t || a;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, r.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((i.target = '_blank'), (i.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: o, ...i, children: e }));
    },
    o = ({ className: e, ...n }) => (0, s.jsx)(i, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
