'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42843],
 {
  4964(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Zorg ervoor dat invoervelden die op meerdere pagina's voorkomen en die dezelfde functie hebben, er op die pagina's hetzelfde uitzien en dezelfde visuele en toegankelijke naam hebben." }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: "Een algemene zoekfunctie heeft op iedere pagina het label 'Zoeken' en niet op de ene plek 'Zoeken' en op de andere plek 'Waar ben je naar op zoek?' of 'Zoek op website'." }), '\n', (0, i.jsx)(n.li, { children: "Een inschrijfformulier van evenementen waarin persoonlijke gegevens worden gevraagd, hebben allebei het veld 'Voor- en achternaam' en niet op de ene plek 'Voor- en achternaam' en op de andere plek 'Volledige naam' of 'Hoe heet je?'." }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Dit geldt ook voor het gebruik van icons.' }), '\n', (0, i.jsx)(n.p, { children: 'Als componenten op verschillende plekken andere functies hebben hoeven die uiteraard niet hetzelfde visuele label te hebben. Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: "Een algemene zoekfunctie genaamd 'Zoeken' in de header van iedere pagina." }), '\n', (0, i.jsx)(n.li, { children: "Een specifieke zoekfunctie genaamd 'Zoek in de database'." }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/duidelijke-tekst/', children: 'Gebruik duidelijke labels' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  8584(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  12761(e, n, t) {
   t.d(n, { VK: () => k, $9: () => w, mu: () => b, Fc: () => D, K_: () => z });
   var i = t(29181),
    r = t(13526),
    a = t(39948),
    o = t(26655),
    l = t(46565);
   function s(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(s, {
     children: () => {
      const i = t(83294).V6;
      return (0, d.jsx)(i, {
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
   var u = t(31522),
    g = t(15042),
    m = t(58876),
    p = t(76097);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = t(96345),
    x = t(37168);
   const v = ({ className: e, ...n }) => {
     const t = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, d.jsx)('div', { className: t, children: n.children });
    },
    f = ({ className: e, heading: n, headingLevel: t, headingApperance: i, ...a }) => {
     const o = (0, r.A)('utrecht-accordion__section', e);
     return (0, d.jsxs)('details', { className: o, ...a, children: [(0, d.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, d.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, d.jsx)('span', { className: 'nl-button__icon-start', children: (0, d.jsx)(j.A, {}) }), (0, d.jsx)('span', { className: 'nl-button__label', children: (0, d.jsx)(x.D, { level: t, appearance: i, children: n }) })] }) }), (0, d.jsx)('div', { className: 'utrecht-accordion__panel', children: a.children })] });
    },
    k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      a = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(v, { children: a.map((t) => (0, d.jsx)(f, { className: (0, r.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(o.AC, {
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
            r = t?.value,
            l = (0, p.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => s.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || l.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: u
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(a.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    w = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [r ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    D = ({ component: e, headingLevel: n, description: t }) => {
     const r = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g.p, { level: n, suffix: r && (0, d.jsx)(u.D, { state: r }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t })] });
    },
    z = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  15042(e, n, t) {
   t.d(n, { p: () => a });
   var i = t(13526),
    r = t(86070);
   const a = ({ children: e, className: n, level: t = 1, suffix: a, ...o }) => (0, r.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  17045(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  19776(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  24838(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  25872(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Je kunt het element focussen met de tabtoets en activeren met de spacebar en de entertoets.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  26655(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => l, Zp: () => s });
   var i = t(46447),
    r = t(13526),
    a = t(86070);
   const o = ({ background: e, children: n, className: t, ...i }) => (0, a.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    l = (e) => (0, a.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: n, className: t, component: o = 'div', background: l, children: s }) => {
     const d = (e) => ('article' === o ? (0, a.jsx)('article', { ...e }) : 'section' === o ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(d, { className: (0, r.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: s });
     return e ? (0, a.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, a.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  31522(e, n, t) {
   t.d(n, { D: () => l });
   var i = t(46447),
    r = t(13526),
    a = t(76097),
    o = t(86070);
   const l = ({ state: e }) => {
    const n = (0, a.fX)(e);
    return (0, o.jsx)(i.KE, { className: (0, r.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  31820(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  34257(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  36599(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  39948(e, n, t) {
   t.d(n, { r: () => u });
   var i = t(29181),
    r = t(74172),
    a = t(15089),
    o = t(28377),
    l = t(33648),
    s = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(a.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(s.A, {}) });
  },
  40808(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  44720(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46565(e, n, t) {
   t.d(n, { c: () => r });
   var i = t(30758);
   function r() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  55552(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, i.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  59527(e, n, t) {
   (t.r(n), t.d(n, { assets: () => V, component: () => $, contentTitle: () => M, default: () => X, description: () => Z, frontMatter: () => P, issueNumber: () => O, metadata: () => i, title: () => E, toc: () => U }));
   const i = JSON.parse('{"id":"componenten/text-input/index","title":"Text Input","description":"Biedt de mogelijkheid om \xe9\xe9n regel aan tekens in te vullen.","source":"@site/docs/componenten/text-input/index.mdx","sourceDirName":"componenten/text-input","slug":"/text-input","permalink":"/text-input","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/text-input/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Text Input","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Text Input","pagination_label":"Text Input","description":"Biedt de mogelijkheid om \xe9\xe9n regel aan tekens in te vullen.","slug":"/text-input","keywords":["editable textfield","form","form control","formulier","formulierelement","formfield","form field","form input","formulier-stap","input","input field","inputfield","invoerveld","invulveld","tekstveld","tekstinvoer","text box","textbox","text entry","text field","text input","textinput","veld"]},"sidebar":"componenten","previous":{"title":"Task Navigation","permalink":"/task-navigation"},"next":{"title":"Text Area","permalink":"/text-area"}}');
   var r = t(86070),
    a = t(18439),
    o = t(82461),
    l = t(17045),
    s = t(19776),
    d = t(40808);
   function c(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als de Text Input een tekstueel label heeft, gebruik dan een ', (0, r.jsx)(n.code, { children: 'label' }), '-element en koppel het met de attributen ', (0, r.jsx)(n.code, { children: 'for' }), ' en ', (0, r.jsx)(n.code, { children: 'id' }), ' aan de Text Input.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="voorbeeld">Ik ben een Text Input</label> <input type="text" id="voorbeeld" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Op die manier is het label expliciet gekoppeld met de Text Input, ook als het invoerveld niet binnen een ', (0, r.jsx)(n.code, { children: 'label' }), '-element genest is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Koppel instructies en foutmeldingen ook aan de Text Input met het ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), ' attribuut:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<p id="error">Invoerfout: Het veld Naam is niet ingevuld. Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name error" autocomplete="name" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Geef zowel in tekst als in code aan of een veld verplicht ingevuld moet worden. In code doe je dit doe je met het ', (0, r.jsx)(n.code, { children: 'required' }), ' attribuut of met het ', (0, r.jsx)(n.code, { children: 'aria-required' }), ' attribuut.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'Toegankelijke naam label' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Toegankelijke foutmeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', children: 'Toegankelijke verplichte velden' }) }), '\n'] })] });
   }
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat instructies en foutmeldingen die nodig zijn om te begrijpen wat er van de bezoeker verwacht wordt op een logische plek staan en gekoppeld zijn aan het formulierveld.' }), '\n', (0, r.jsx)(n.p, { children: 'De meest gebruiksvriendelijke plek voor instructies en foutmeldingen is tussen het label en het invoerveld. Als instructies \xf3nder het veld staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een screenreader schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna instructies t\xfassen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel instructies en foutmeldingen daarom ook aan het formulierveld met ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), '. Op die manier wordt de beschrijving voorgelezen wanneer de toetsenbordfocus op het formulierveld staat.'] }), '\n', (0, r.jsx)(n.p, { children: 'Voorbeeld:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<p id="error">Invoerfout: Het veld Naam is niet ingevuld. Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name error" autocomplete="name" />\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke instructies en beschrijvingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Toegankelijke foutmeldingen' }) }), '\n'] })] });
   }
   function g(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Help bezoekers met het invullen van persoonlijke gegevens door gebruik te maken van het ', (0, r.jsx)(n.code, { children: 'autocomplete' }), '-attribuut.'] }), '\n', (0, r.jsx)(n.p, { children: 'Voorbeeld:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" type="text" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['In de HTML specificatie vind je een ', (0, r.jsx)(n.a, { href: 'https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute.', children: 'lijst van mogelijke autocomplete-waarden' })] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik altijd een ', (0, r.jsx)(n.code, { children: 'autocomplete' }), '-attribuut wanneer je persoonlijke informatie van bezoekers uitvraagt waar een geschikte autocomplete-waarde voor bestaat, ook als de waarde van het ', (0, r.jsx)(n.code, { children: 'type' }), '-attribuut (zoals ', (0, r.jsx)(n.code, { children: 'email' }), ' ) al voldoende duidelijk lijkt. Dit helpt browsers de juiste gegevens aan de bezoeker voor te stellen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   var p = t(55552);
   function h(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de kleuren van componenten die visueel betekenis hebben en hun directe omgeving. Zorg ervoor dat dit minimaal 3:1, maar het liefst hoger.' }), '\n', (0, r.jsx)(n.p, { children: 'Kleuren die van toepassing zijn bij de Text Input zijn bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['De rand van de Text Input, zodat de bezoeker weet waar het veld is. Vergeet hierbij ook niet de kleur van de rand wanneer de Text Input ', (0, r.jsx)(n.code, { children: 'invalid' }), ' is.'] }), '\n', (0, r.jsx)(n.li, { children: 'De focusrand om de Text Input.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   var j = t(83329),
    x = t(83672),
    v = t(34257),
    f = t(25872);
   function k(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Plaats de toetsenbordfocus niet standaard op het eerste veld in een formulier. Hierdoor slaan bezoekers die gebruik maken van een screenreader mogelijk belangrijke informatie over.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Tabindex in formulieren' }) }), '\n'] })] });
   }
   var b = t(99805),
    w = t(92233);
   function D(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat de tekstuele naam van het element voor formulierinvoer voorkomt in de toegankelijke naam.' }), '\n', (0, r.jsxs)(n.p, { children: ['De meestgebruikte manier is door een ', (0, r.jsx)(n.code, { children: 'label' }), '-element te koppelen aan het element voor formulierinvoer, met de attributen ', (0, r.jsx)(n.code, { children: 'for' }), ' en ', (0, r.jsx)(n.code, { children: 'id' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een element voor formulierinvoer. Een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de toegankelijke naam van een element. Daardoor kan de toegankelijke naam anders zijn dan de zichtbare naam. Bezoekers die gebruik maken van spraakgestuurde navigatie kunnen hierdoor moeite hebben om het element voor formulierinvoer te activeren.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   var z = t(24838),
    y = t(4964);
   function A(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat het doel (of de naam) en instructies bij een invoerveld beschikbaar zijn en blijven.' }), '\n', (0, r.jsxs)(n.p, { children: ['Maak daarom nooit all\xe9\xe9n gebruik van een placeholdertekst voor de naam of instructies van een invoerveld. Plaats de instructies ook niet in een tooltip, maar boven of onder het veld en koppel het aan het element voor formulierinvoer met ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Als een icon een alternatief is voor een tekstueel label bij een element voor formulierinvoer, moet het duidelijk zijn wat de gebruiker moet doen of moet invullen.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een icon van een slot in een inlogformulier vraagt om een wachtwoord.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icon van een vergrootglas in een zoekfunctie vraagt om een zoekterm.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icon van een telefoonhoorn in een contactformulier vraagt om een telefoonnummer.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'Toegankelijke labels in formulieren' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke beschrijvingen en instructies in formulieren' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'richtlijnen/formulieren/placeholders/', children: 'Placeholders in formulieren' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function T(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Vraag de bezoeker niet om meerdere keren dezelfde gegevens in te vullen. Maak in plaats daarvan gebruik van de eerder ingevulde informatie. Als je er zeker van wil zijn dat de informatie correct is, toon dan de eerder ingevulde informatie en laat de bezoeker controleren of de gegevens kloppen.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/voorkom-dubbel-werk/', children: 'Vraag niet meerdere keren dezelfde informatie uit' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function N(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat de Text Input een toegankelijke naam en een kloppende rol heeft.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg dat de Text Input een kloppende rol heeft, door het HTML-element ', (0, r.jsx)(n.code, { children: 'input' }), ' te gebruiken met het relevante ', (0, r.jsx)(n.code, { children: 'type' }), ' attribuut. Dit zijn de opties:'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['De types ', (0, r.jsx)(n.code, { children: 'text' }), ', ', (0, r.jsx)(n.code, { children: 'email' }), ', ', (0, r.jsx)(n.code, { children: 'tel' }), ' en ', (0, r.jsx)(n.code, { children: 'url' }), ' geven de rol ', (0, r.jsx)(n.code, { children: 'textbox' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Het type ', (0, r.jsx)(n.code, { children: 'search' }), ' geeft de rol ', (0, r.jsx)(n.code, { children: 'searchbox' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Daarnaast moeten de staat en eigenschappen waar bezoekers zelf invloed op hebben (zoals in- of uitgeklapt, of ', (0, r.jsx)(n.code, { children: 'checked' }), ') en de ingevulde waarde (', (0, r.jsx)(n.code, { children: 'value' }), ') beschikbaar zijn voor hulpsoftware.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Wanneer kies je welk element in een formulier?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   var F = t(68413),
    R = t(44720),
    L = t(36599),
    S = t(70957),
    I = t(31820),
    H = t(80221),
    C = t(8584);
   const _ = [
     {
      title: 'Het label van de Text Input is gekoppeld aan de Text Input en het is duidelijk of de Text Input verplicht ingevuld moet worden.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     {
      title: 'Instructies bij de Text Input staan op een logische plek',
      sc: '1.3.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer', 'designer', 'contentmaker'],
     },
     { title: 'Een Text Input die om persoonlijke gegevens vraagt heeft het juiste autocomplete-attribuut.', sc: '1.3.5', status: '', component: m, tags: ['developer'] },
     { title: 'Kleur is niet de enige manier om informatie over een Text Input weer te geven.', sc: '1.4.1', status: '', component: R.Ay, tags: ['designer'] },
     { title: 'Placeholderteksten hebben een contrastratio van minimaal 4,5:1 met de achtergrond. ', sc: '1.4.3', status: '', component: x.Ay, tags: ['designer'] },
     { title: 'De bezoeker kan de Text Input tot 400% vergroten zonder verlies van functionaliteit of informatie.', sc: '1.4.10', status: '', component: p.Ay, tags: ['developer'] },
     {
      title: 'Niet-tekstuele informatie heeft een contrastratio van minimaal 3:1 met de achtergrond.',
      sc: '1.4.11',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
      },
      tags: ['designer'],
     },
     { title: 'De Text Input veroorzaakt geen toetsenbordval.', sc: '2.1.2', status: '', component: L.Ay, tags: ['developer'] },
     {
      title: 'De Text Input staat op een logische plek in de focusvolgorde.',
      sc: '2.4.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
      },
      tags: ['developer'],
     },
     { title: 'De Text Input heeft een beschrijvend label en toegankelijke naam.', sc: '2.4.6', status: '', component: b.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als de Text Input de toetsenbordfocus krijgt, is het niet volledig bedekt door andere inhoud.', sc: '2.4.11', status: '', component: C.Ay, tags: ['developer'] },
     {
      title: 'De zichtbare naam van de Text Input is gelijk aan de toegankelijke naam.',
      sc: '2.5.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(D, { ...e }) }) : D(e);
      },
      tags: ['developer'],
     },
     { title: 'De Text Input heeft een minimale grootte van 24 bij 24 pixels.', sc: '2.5.8', status: '', component: S.Ay, tags: ['developer', 'designer'] },
     { title: 'Als de placeholdertekst en invoertekst in een andere taal is dan de taal van de pagina, dan heeft het `input`-element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: z.Ay, tags: ['developer'] },
     { title: 'Als de Text Input focus krijgt, gebeurt er niets onverwachts.', sc: '3.2.1', status: '', component: I.Ay, tags: ['developer'] },
     { title: 'Bij het invullen van de Text Input gebeurt er niets onverwachts.', sc: '3.2.2', status: '', component: H.Ay, tags: ['developer', 'designer'] },
     { title: 'Text Inputs met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.', sc: '3.2.4', status: '', component: y.Ay, tags: ['developer', 'designer'] },
     {
      title: 'De naam en instructies over het invullen van de Text Input staan niet alleen in de placeholder',
      sc: '3.3.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(A, { ...e }) }) : A(e);
      },
      tags: ['developer', 'designer'],
     },
     {
      title: 'Gebruikers hoeven dezelfde gegevens niet opnieuw in te voeren als deze al eerder in hetzelfde proces zijn ingevuld of beschikbaar zijn in het systeem.',
      sc: '3.3.7',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(T, { ...e }) }) : T(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     {
      title: 'De Text Input heeft een toegankelijke naam en rol, en de eigenschappen en waarde zijn beschikbaar voor hulpsoftware. ',
      sc: '4.1.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(N, { ...e }) }) : N(e);
      },
      tags: ['designer', 'contentmaker'],
     },
    ],
    B = [
     { title: 'Het is mogelijk om autocomplete in te stellen bij de Text Input.', sc: '1.3.5', status: '', component: m, tags: ['developer'] },
     { title: 'Placeholderteksten blijven leesbaar wanneer de tekstafstand vergroot wordt.', sc: '1.4.12', status: '', component: j.Ay, tags: ['developer'] },
     { title: 'Als je de tekst van placeholders vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: v.Ay, tags: ['developer'] },
     { title: 'Je kunt de Text Input bereiken en bedienen met het toetsenbord.', sc: '2.1.1', status: '', component: f.Ay, tags: ['developer'] },
     { title: 'Als de Text Input de toetsenbordfocus krijgt is de focus zichtbaar.', sc: '2.4.7', status: '', component: w.Ay, tags: ['developer'] },
     { title: 'Het is mogelijk de Text Input een toegankelijke naam en de juiste rol te geven en het `value`-attribuut is aanwezig en instelbaar.', sc: '4.1.2', status: '', component: F.Ay, tags: ['developer'] },
    ];
   var G = t(12761);
   const P = { title: 'Text Input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Text Input', pagination_label: 'Text Input', description: 'Biedt de mogelijkheid om \xe9\xe9n regel aan tekens in te vullen.', slug: '/text-input', keywords: ['editable textfield', 'form', 'form control', 'formulier', 'formulierelement', 'formfield', 'form field', 'form input', 'formulier-stap', 'input', 'input field', 'inputfield', 'invoerveld', 'invulveld', 'tekstveld', 'tekstinvoer', 'text box', 'textbox', 'text entry', 'text field', 'text input', 'textinput', 'veld'] },
    M = void 0,
    V = {},
    E = 'Text Input',
    Z = 'Biedt de mogelijkheid om \xe9\xe9n regel aan tekens in te vullen.',
    O = 200,
    $ = o.find((e) => e.number === O),
    U = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...s.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...l.RM, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function W(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, a.R)(), ...e.components },
     { Checklist: t, ChecklistItem: i } = n;
    return (t || K('Checklist', !0), i || K('ChecklistItem', !0), (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(G.Fc, { component: $, headingLevel: 1, description: Z }), '\n', (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, r.jsx)(s.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: _.map(({ component: e, ...n }) => (0, r.jsx)(i, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, r.jsx)(l.Ay, {}), '\n', (0, r.jsx)(t, { headingLevel: '4', children: B.map(({ component: e, ...n }) => (0, r.jsx)(i, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(G.VK, { component: $, headingLevel: 3 }), '\n', (0, r.jsx)(G.$9, { component: $, headingLevel: 2 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(G.mu, { component: $, headingLevel: 3 }), '\n', (0, r.jsx)(G.K_, { component: $ })] }));
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(W, { ...e }) }) : W(e);
   }
   function K(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  68413(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'De component en de afzonderlijke interactieve elementen in de component hebben de juiste rol en de juiste attributen voor het aangeven van de staat en de waarde.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  70957(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Aanwijsbare elementen op een pagina zijn groot genoeg om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Het aan te wijzen gebied is ten minste 24 bij 24 pixels groot.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  76097(e, n, t) {
   t.d(n, { bo: () => r, KF: () => g, mJ: () => h, VZ: () => D, cR: () => w, Pv: () => j, qZ: () => o, kD: () => k, B2: () => m, Pc: () => s, f4: () => l, GT: () => b, fX: () => a, eQ: () => f, B_: () => v, o_: () => x });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return u(c(n));
    },
    m = (e, n) => h(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => u(c(e.projects.flatMap((e) => p(e)))),
    j = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: r, value: a }) => {
        const o = /^(.+) URL/.exec(i)[1],
         l = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: r, value: a, description: l };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    x = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    f = (e, n) => n.reduce((e, n) => e?.[n], e);
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
   const w = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  80221(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var i = t(86070),
    r = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Verras een gebruiker niet, maar maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als een gebruiker een formuliercomponent of -optie selecteert of een invoerveld invult met het toetsenbord of met de muis, veroorzaakt dit niet automatisch een contextwijziging.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': een verandering van ', (0, i.jsx)(n.strong, { children: 'context' }), ' is niet hetzelfde als verandering van ', (0, i.jsx)(n.strong, { children: 'content' }), '.\nDirect aanpassen van de zoekresultaten, waarbij de gebruiker op dezelfde pagina blijft, valt niet onder dit succescriterium.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  83329(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  83672(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  92233(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, i.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  99805(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Het label van een invoerveld maakt kort en bondig duidelijk welke invoer van de bezoeker gevraagd wordt. Een tekstueel label kan een tekst zijn, of een icoon waar de alternatieve tekst het doel van het invoerveld beschrijft.' }), '\n', (0, i.jsx)(n.p, { children: "Bijvoorbeeld: de alternatieve tekst van een vergrootglas icoon is 'Zoeken' en niet 'Vergrootglas'." }), '\n', (0, i.jsxs)(n.p, { children: ['Let op: Gebruik je een asterisk (', (0, i.jsx)(n.code, { children: '*' }), ") om aan te geven dat een veld verplicht is? Zorg dan dat je v\xf3\xf3r de eerste asterisk uitlegt wat de betekenis is. Plaats bijvoorbeeld bovenaan het formulier de tekst: 'Velden met een ", (0, i.jsx)(n.code, { children: '*' }), " zijn verplicht'."] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/duidelijke-tekst/', children: 'Gebruik duidelijke labelteksten' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
