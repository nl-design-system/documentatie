(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [73512],
 {
  4107(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => l });
   var r = t(86070),
    i = t(18439);
   const l = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  10645(e, n, t) {
   'use strict';
   t.d(n, { p: () => l });
   var r = t(13526),
    i = t(86070);
   const l = ({ children: e, className: n, level: t = 1, suffix: l, ...s }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), l && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
  },
  17236(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => l });
   var r = t(86070),
    i = t(18439);
   const l = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  21034(e, n, t) {
   'use strict';
   t.d(n, { VK: () => v, $9: () => b, mu: () => w, Fc: () => x, K_: () => k });
   var r = t(29181),
    i = t(13526),
    l = t(40889),
    s = t(21530),
    a = t(45186);
   function o(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var c = t(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, c.jsx)(o, {
     children: () => {
      const r = t(83294).V6;
      return (0, c.jsx)(r, {
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
    m = t(10645),
    u = t(58876),
    h = t(32385);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var f = t(70348),
    j = t(85162);
   const v = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      l = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(f.n, { children: l.map((t) => (0, c.jsx)(f.K, { className: (0, i.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, h.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, c.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(r) }, r)) }), (0, c.jsx)(r.fz, { children: (0, c.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    w = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(s.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            a = (0, h.Pv)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => o.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            s.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, c.jsxs)(s.Wu, {
              children: [
               (0, c.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(r.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || a.length > 0) && (0, c.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(r.dk, {
                  links: g
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const n = o.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(l.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, c.jsx)(c.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, c.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(l.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(r.Xy, { children: [i ? (0, c.jsxs)(r.Er, { children: ['Vul de ', (0, c.jsx)(r.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(r.Er, { children: [(0, c.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m.p, { level: n, suffix: i && (0, c.jsx)(g.D, { state: i }), children: e.title }), (0, c.jsx)(r.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(i) && (0, c.jsx)(j.s, { relayStep: i, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    k = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(r.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [e.slug ? (0, c.jsx)(r.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21530(e, n, t) {
   'use strict';
   t.d(n, { AC: () => c, Fu: () => s, Wu: () => a, Zp: () => o });
   var r = t(46447),
    i = t(13526),
    l = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, l.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...r, children: n }),
    a = (e) => (0, l.jsx)('div', { className: 'ma-card__content', ...e }),
    o = ({ href: e, appearance: n, className: t, component: s = 'div', background: a, children: o }) => {
     const c = (e) => ('article' === s ? (0, l.jsx)('article', { ...e }) : 'section' === s ? (0, l.jsx)('section', { ...e }) : (0, l.jsx)('div', { ...e })),
      d = (0, l.jsx)(c, { className: (0, i.A)('ma-cardgroup__card', a && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: o });
     return e ? (0, l.jsx)(r.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'large', children: n, className: t }) => (0, l.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27823(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function l(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  32385(e, n, t) {
   'use strict';
   t.d(n, { bo: () => i, KF: () => m, mJ: () => p, VZ: () => A, cR: () => k, Pv: () => f, qZ: () => s, kD: () => b, QQ: () => C, B2: () => u, Pc: () => o, f4: () => a, GT: () => x, fX: () => l, eQ: () => w, B_: () => v, o_: () => j });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    l = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(d(n));
    },
    u = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(d(e.projects.flatMap((e) => h(e)))),
    f = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: l }) => {
        const s = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: i, value: l, description: a };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    j = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    w = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const k = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    y = new Set(['ics', 'json', 'pdf']),
    C = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && y.has(t);
    };
  },
  33691(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => l });
   var r = t(86070),
    i = t(18439);
   const l = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  39569(e, n, t) {
   'use strict';
   t.d(n, { D: () => a });
   var r = t(46447),
    i = t(13526),
    l = t(32385),
    s = t(86070);
   const a = ({ state: e }) => {
    const n = (0, l.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var r = t(29181),
    i = t(74172),
    l = t(15089),
    s = t(28377),
    a = t(33648),
    o = t(83386),
    c = t(86070);
   const d = { figma: (0, c.jsx)(i.A, {}), github: (0, c.jsx)(l.A, {}), npm: (0, c.jsx)(s.A, {}), storybook: (0, c.jsx)(a.A, {}) },
    g = ({ brand: e }) => (0, c.jsx)(r.In, { children: d[e] || (0, c.jsx)(o.A, {}) });
  },
  44715(e, n, t) {
   'use strict';
   t.d(n, { NO: () => l, pI: () => s });
   const r = [
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
    i = (new Map(r.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    l = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !i.find((n) => n.sc === e)),
    s = new Map(l.map((e) => [e.sc, e]));
  },
  45186(e, n, t) {
   'use strict';
   t.d(n, { c: () => i });
   var r = t(30758);
   function i() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  46422(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function l(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  50805(e, n, t) {
   'use strict';
   t.d(n, { $n: () => u });
   var r = t(15540),
    i = t(69967),
    l = t(86070),
    s = t(13526),
    a = t(30758),
    o = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    m = g(['primary', 'secondary', 'subtle']),
    u =
     (g(['positive', 'negative']),
     (0, a.forwardRef)(function (e, n) {
      var t = e.children,
       r = e.className,
       c = e.iconOnly,
       g = e.iconEnd,
       u = e.iconStart,
       h = e.purpose,
       p = e.hint,
       f = e.disabled,
       j = e.htmlDisabled,
       v = e.pressed,
       w = e.busy,
       b = e.type,
       x = void 0 === b ? 'button' : b,
       k = e.label,
       A = e.toggle,
       y = (0, i.A)(e, o),
       C = Boolean(u || g),
       T = (a.Children.toArray(t).some(a.isValidElement) && C) || c;
      return (0, l.jsxs)('button', d(d({ ref: n, type: x, className: (0, s.$)('nl-button', r, { 'nl-button--pressed': v, 'nl-button--busy': w, 'nl-button--disabled': f || j, 'nl-button--primary': 'primary' === h, 'nl-button--secondary': 'secondary' === h, 'nl-button--subtle': 'subtle' === h, 'nl-button--positive': m(h) && 'positive' === p, 'nl-button--negative': m(h) && 'negative' === p, 'nl-button--icon-only': c }), 'aria-pressed': A ? String(Boolean(v)) : void 0, 'aria-disabled': f || w ? 'true' : void 0, disabled: j }, y), {}, { children: [u && (0, l.jsx)('span', { className: 'nl-button__icon-start', children: u }), k && (0, l.jsx)('span', { className: 'nl-button__label', children: k }), T ? (0, l.jsx)('span', { className: c ? 'nl-button__label' : '', children: t }) : t, g && (0, l.jsx)('span', { className: 'nl-button__icon-end', children: g })] }));
     }));
   u.displayName = 'Button';
  },
  51582(e, n, t) {
   'use strict';
   t.d(n, { o: () => d });
   var r = t(18439),
    i = t(46447),
    l = t(86070);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    o = (e) => ({ img: ({ src: n, ...t }) => (0, l.jsx)('img', { ...t, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: s = {} }) => (0, l.jsx)(r.x, { components: { ...c(n, t), ...o(i), ...s }, children: e });
  },
  54909(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => l });
   var r = t(86070),
    i = t(18439);
   const l = [];
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het contrast van de tekstkleur ten opzichte van de achtergrondkleur moet hoog genoeg zijn, zodat de tekst in het algemeen goed leesbaar wordt gevonden.' }), '\n', (0, r.jsx)(n.p, { children: 'De criteria voor kleurcontrast zijn:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23767676', children: '4,5:1 contrast' }), ' voor normale tekst.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23949494', children: '3:1 contrast' }), ' voor grotere letters (vanaf 24 pixels).'] }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Tekst die over een afbeelding staat, moet ook voldoende contrast hebben met de kleuren in de afbeelding er omheen.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze eis geldt niet voor tekst op een logo of van een merknaam, of tekst op een afbeelding die alleen ter decoratie dient en geen deel uitmaakt van de inhoud.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  56421(e, n, t) {
   'use strict';
   t.d(n, { D: () => r.D });
   var r = t(37168);
   t(30758);
   !(function (e, n) {
    void 0 === n && (n = {});
    var t = n.insertAt;
    if ('undefined' != typeof document) {
     var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
     ((i.type = 'text/css'), 'top' === t && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e)));
    }
   })('.nl-heading{break-after:avoid;break-inside:avoid}.nl-heading--level-1{color:var(--nl-heading-level-1-color, inherit);font-family:var(--nl-heading-level-1-font-family);font-size:var(--nl-heading-level-1-font-size, revert);font-weight:var(--nl-heading-level-1-font-weight, bold);line-height:var(--nl-heading-level-1-line-height);margin-block-end:var(--nl-heading-level-1-margin-block-end, revert);margin-block-start:var(--nl-heading-level-1-margin-block-start, revert)}.nl-heading--level-2{color:var(--nl-heading-level-2-color, inherit);font-family:var(--nl-heading-level-2-font-family);font-size:var(--nl-heading-level-2-font-size, revert);font-weight:var(--nl-heading-level-2-font-weight, bold);line-height:var(--nl-heading-level-2-line-height);margin-block-end:var(--nl-heading-level-2-margin-block-end, revert);margin-block-start:var(--nl-heading-level-2-margin-block-start, revert)}.nl-heading--level-3{color:var(--nl-heading-level-3-color, inherit);font-family:var(--nl-heading-level-3-font-family);font-size:var(--nl-heading-level-3-font-size, revert);font-weight:var(--nl-heading-level-3-font-weight, bold);line-height:var(--nl-heading-level-3-line-height);margin-block-end:var(--nl-heading-level-3-margin-block-end, revert);margin-block-start:var(--nl-heading-level-3-margin-block-start, revert)}.nl-heading--level-4{color:var(--nl-heading-level-4-color, inherit);font-family:var(--nl-heading-level-4-font-family);font-size:var(--nl-heading-level-4-font-size, revert);font-weight:var(--nl-heading-level-4-font-weight, bold);line-height:var(--nl-heading-level-4-line-height);margin-block-end:var(--nl-heading-level-4-margin-block-end, revert);margin-block-start:var(--nl-heading-level-4-margin-block-start, revert)}.nl-heading--level-5{color:var(--nl-heading-level-5-color, inherit);font-family:var(--nl-heading-level-5-font-family);font-size:var(--nl-heading-level-5-font-size, revert);font-weight:var(--nl-heading-level-5-font-weight, bold);line-height:var(--nl-heading-level-5-line-height);margin-block-end:var(--nl-heading-level-5-margin-block-end, revert);margin-block-start:var(--nl-heading-level-5-margin-block-start, revert)}.nl-heading--level-6{color:var(--nl-heading-level-6-color, inherit);font-family:var(--nl-heading-level-6-font-family);font-size:var(--nl-heading-level-6-font-size, revert);font-weight:var(--nl-heading-level-6-font-weight, bold);line-height:var(--nl-heading-level-6-line-height);margin-block-end:var(--nl-heading-level-6-margin-block-end, revert);margin-block-start:var(--nl-heading-level-6-margin-block-start, revert)}\n');
  },
  56561(e, n, t) {
   'use strict';
   t.d(n, { f: () => g });
   var r = t(15540),
    i = t(69967),
    l = t(86070),
    s = t(13526),
    a = t(30758),
    o = ['children', 'className', 'purpose'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     c = e.purpose,
     g = (0, i.A)(e, o);
    return (0, l.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === c), a), ref: n }, g), {}, { children: 'lead' === c ? (0, l.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   g.displayName = 'Paragraph';
  },
  59778(e, n, t) {
   'use strict';
   t.d(n, { e: () => a });
   var r = t(51582),
    i = t(30758),
    l = t(32385),
    s = t(86070);
   const a = ({ component: e }) => {
    if (globalThis.isAstro) return null;
    const { title: n } = e,
     a = (0, l.fX)(n),
     o = i.lazy(() => t(82839)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, s.jsx)(i.Suspense, { fallback: null, children: (0, s.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, s.jsx)(o, {}) }) });
   };
  },
  66581(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => O, component: () => E, contentTitle: () => P, default: () => U, description: () => I, frontMatter: () => z, issueNumber: () => M, metadata: () => r, title: () => B, toc: () => $ }));
   const r = JSON.parse('{"id":"componenten/color-sample/index","title":"Color Sample","description":"Toont een voorbeeld van een kleur.","source":"@site/docs/componenten/color-sample/index.mdx","sourceDirName":"componenten/color-sample","slug":"/color-sample","permalink":"/color-sample","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/color-sample/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Color Sample","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Color Sample","pagination_label":"Color Sample","description":"Toont een voorbeeld van een kleur.","issue_number":325,"slug":"/color-sample","keywords":["color","color code","color example","color fill","color hash","color preview","color sample","color theme","color visual","colour","colour code","colour example","colour fill","colour hash","colour preview","colour sample","colour theme","colour visual","image","kleur","kleurinfo","kleurstaal","kleurvoorbeeld","monster","palette","pantone","solid","sub","swatch","voorbeeld","voorbeeldkleur","voorvertoning"]},"sidebar":"componenten","previous":{"title":"Code Block","permalink":"/code-block"},"next":{"title":"Contact Timeline","permalink":"/contact-timeline"}}');
   var i = t(86070),
    l = t(18439),
    s = t(82062);
   t(30758);
   var a = t(17236),
    o = t(70561),
    c = t(33691),
    d = t(21530),
    g = t(46447),
    m = t(56421),
    u = t(40889),
    h = t(59778);
   function p(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Vertel in tekst welke kleur wordt weergegeven. Denk hierbij bijvoorbeeld de naam van de kleur, de hex-code of de hsl-waarde, de transparantie, het doel van de kleur, de CSS-class.' }), '\n', (0, i.jsxs)(n.p, { children: ['Dan is het voor gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en mensen die slechtziend of kleurenblind zijn ook duidelijk welke kleur bedoeld wordt.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/niet-kleur-alleen/', children: 'Vertrouw niet op kleur alleen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/waarneming/', children: 'Let op verschillen in waarneming van kleur' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function f(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Een gebruiker van een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' kan herkennen welk kleurvlak bij welke eigenschappen hoort.\nDit is niet alleen via de visuele informatie beschikbaar, maar ook vanuit de semantiek van de HTML-code.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit kan bijvoorbeeld door het weergeven van het kleurvlak en de data in een tabel ', (0, i.jsx)(n.code, { children: '<table>' }), ', een description list ', (0, i.jsx)(n.code, { children: '<dl>' }), ' of in een ongenummerde lijst ', (0, i.jsx)(n.code, { children: '<ul>' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Opsommingen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/tabellen/', children: 'Tabellen' }) }), '\n'] })] });
   }
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De Color Sample kan worden voorzien van een beschrijvende alternatieve tekst, doordat ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' of ', (0, i.jsx)(n.code, { children: 'aria-labelledby' }), ' in de component gebruikt kan worden.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function v(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De Color Sample is herkenbaar als afbeelding voor gebruikers van hulpsoftware, zoals ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Het ', (0, i.jsx)(n.code, { children: 'svg' }), '-element in de Color Sample heeft de rol ', (0, i.jsx)(n.code, { children: 'img' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function w(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Een gebruiker van een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' kan herkennen welke kleurvlakken bij welke eigenschappen horen als de gebruiker van boven naar beneden de webpagina doorleest.\nDe connectie tussen kleurvlak en eigenschappen is niet alleen via de visuele informatie beschikbaar, maar ook in de volgorde van de HTML-code in de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', children: 'DOM' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde/', children: 'Zorg voor een logische volgorde van de informatie' }) }), '\n'] })] });
   }
   var b = t(4107);
   function x(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Geef het kleurvlak (of een kader rond het kleurvlak) een kleurcontrast met de achtergrond van minimaal 3:1. Dit is te controleren met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat het vlak visueel goed te onderscheiden is als kleurvlak.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function k(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Gebruik de Color Sample component altijd in combinatie met tekst.' }), '\n', (0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function A(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Gebruik de Color Sample component altijd in combinatie met tekst.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   var y = t(54909),
    C = t(72954),
    T = t(46422),
    R = t(89445),
    S = t(27823);
   const N = [
    {
     title: 'De eigenschappen van de kleur in de Color Sample zijn in tekst beschreven.',
     sc: '1.1.1',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, l.R)(), ...e.components };
      return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
     },
     tags: ['contentmaker', 'designer'],
    },
    {
     title: 'Het kleurvlak en de bijbehorende eigenschappen horen semantisch bij elkaar.',
     sc: '1.3.1',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, l.R)(), ...e.components };
      return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
     },
     tags: ['contentmaker', 'designer'],
    },
    {
     title: 'Een screenreadergebruiker kan uit de leesvolgorde herkennen welk kleurvlak bij welke eigenschappen hoort.',
     sc: '1.3.2',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, l.R)(), ...e.components };
      return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w(e);
     },
     tags: ['contentmaker', 'designer', 'developer'],
    },
    { title: 'Kleur is niet de enige manier waarop de informatie over de Color Sample beschikbaar is.', sc: '1.4.1', status: '', component: b.Ay, tags: ['contentmaker', 'designer'] },
    { title: 'Het kleurcontrast van de tekst van de eigenschappen van de Color Sample is voldoende.', sc: '1.4.3', status: '', component: y.Ay, tags: ['contentmaker', 'designer'] },
    {
     title: 'Als je de beschrijvende tekst bij een Color Sample vergroot tot 200% blijft deze in zijn geheel zichtbaar.',
     sc: '1.4.4',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, l.R)(), ...e.components };
      return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(A, { ...e }) }) : A(e);
     },
     tags: ['developer'],
    },
    {
     title: 'Het kleurvlak is duidelijk te onderscheiden ten opzichte van de achtergrond.',
     sc: '1.4.11',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, l.R)(), ...e.components };
      return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
     },
     tags: ['contentmaker', 'designer'],
    },
    {
     title: 'Als je de tekstafstand van de beschrijvende tekst bij een Color Sample vergroot blijft de tekst in zijn geheel zichtbaar.',
     sc: '1.4.12',
     status: '',
     component: function (e = {}) {
      const { wrapper: n } = { ...(0, l.R)(), ...e.components };
      return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
     },
     tags: ['developer'],
    },
    { title: 'De Color Sample is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: C.Ay, tags: ['developer'] },
    { title: 'De Color Sample komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: S.Ay, tags: ['developer'] },
   ];
   (T.Ay, R.Ay);
   var G = t(21034),
    D = t(89786),
    F = t(70903),
    L = t(51582);
   function W(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'gebruik-color-sample', children: 'Gebruik Color Sample' }) }), '\n', (0, i.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, i.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css', children: '@nl-design-system-candidate/color-sample-css' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.code, { children: 'nl-color-sample' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'svg' }), ' element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<svg role="img" xmlns="http://www.w3.org/2000/svg" class="nl-color-sample" style="color: deeppink;">\n  <path d="M0 0H32V32H0Z" fill="currentcolor" />\n</svg>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan dat je ze goed aan elkaar linkt. Bijvoorbeeld door er een ', (0, i.jsx)(n.code, { children: 'figure' }), ' omheen te zetten:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<h1>Huisstijlkleuren</h1>\n<figure>\n  <svg role="img" xmlns="http://www.w3.org/2000/svg" class="nl-color-sample" style="color: deeppink;">\n    <path d="M0 0H32V32H0Z" fill="currentcolor" />\n  </svg>\n  <figcaption id="kleur-1">Roze</figcaption>\n</figure>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-css\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/color-sample-css@1/dist/color-sample.css"\n/>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, i.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/color-sample-css/dist/color-sample.css" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/color-sample-css/color-sample.css";\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, i.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-react', children: '@nl-design-system-candidate/color-sample-react' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/color-sample-react\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-jsx', children: 'import { ColorSample } from "@nl-design-system-candidate/color-sample-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <ColorSample value="deeppink" />\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan een ', (0, i.jsx)(n.code, { children: 'id' }), ' op de beschrijving die je met ', (0, i.jsx)(n.code, { children: 'aria-labelledby' }), ' koppelt aan de ', (0, i.jsx)(n.code, { children: 'ColorSample' }), ':'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-jsx', children: 'export const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <figure>\n          <ColorSample value="deeppink" />\n          <figcaption>Roze</figcaption>\n        </figure>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function H(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(W, { ...e }) }) : W(e);
   }
   const _ = JSON.parse('{"nl":{"color-sample":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"block-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"border-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length-percentage>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"border-width":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"inline-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"}}}}'),
    z = { title: 'Color Sample', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Color Sample', pagination_label: 'Color Sample', description: 'Toont een voorbeeld van een kleur.', issue_number: 325, slug: '/color-sample', keywords: ['color', 'color code', 'color example', 'color fill', 'color hash', 'color preview', 'color sample', 'color theme', 'color visual', 'colour', 'colour code', 'colour example', 'colour fill', 'colour hash', 'colour preview', 'colour sample', 'colour theme', 'colour visual', 'image', 'kleur', 'kleurinfo', 'kleurstaal', 'kleurvoorbeeld', 'monster', 'palette', 'pantone', 'solid', 'sub', 'swatch', 'voorbeeld', 'voorbeeldkleur', 'voorvertoning'] },
    P = void 0,
    O = {},
    B = 'Color Sample',
    I = 'Toont een voorbeeld van een kleur.',
    M = 325,
    E = s.find((e) => e.number === M),
    $ = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...c.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...o.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function V(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, i.jsx)(G.Fc, { component: E, headingLevel: 1, description: I }), '\n', (0, i.jsx)(h.e, { component: E }), '\n', (0, i.jsx)(d.Zp, { className: 'ma-implementation-card', children: (0, i.jsxs)(d.Wu, { children: [(0, i.jsx)(m.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, i.jsxs)(g.dk, { children: [(0, i.jsxs)(g.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, i.jsx)(u.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, i.jsxs)(g.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, i.jsx)(u.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, i.jsx)(m.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, i.jsxs)(g.dk, { children: [(0, i.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-color-sample--documentatie', children: [(0, i.jsx)(u.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, i.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/color-sample--documentatie', children: [(0, i.jsx)(u.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, i.jsx)(m.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, i.jsxs)(g.dk, { children: [(0, i.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css', children: [(0, i.jsx)(u.r, { brand: 'npm' }), ' @nl-design-system-candidate/color-sample-css'] }), (0, i.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-react', children: [(0, i.jsx)(u.r, { brand: 'npm' }), ' @nl-design-system-candidate/color-sample-react'] }), (0, i.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-tokens', children: [(0, i.jsx)(u.r, { brand: 'npm' }), ' @nl-design-system-candidate/color-sample-tokens'] })] })] }) }), '\n', (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, i.jsx)(c.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, i.jsx)(o.Ay, {}), '\n', (0, i.jsx)(D.b, { headingLevel: '4', children: N.map(({ component: e, ...n }) => (0, i.jsx)(D.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, i.jsx)(a.Ay, {}), '\n', (0, i.jsx)(D.b, { headingLevel: '4', children: N.map(({ component: e, ...n }) => (0, i.jsx)(D.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(L.o, { omitH1: !0, headingLevel: 2, children: (0, i.jsx)(H, {}) }), '\n', (0, i.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, i.jsx)(F.B, { tokens: _ }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(G.VK, { component: E, headingLevel: 3 }), '\n', (0, i.jsx)(G.$9, { component: E, headingLevel: 2 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(G.mu, { component: E, headingLevel: 3 }), '\n', (0, i.jsx)(G.K_, { component: E })] });
   }
   function U(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(V, { ...e }) }) : V(e);
   }
  },
  70348(e, n, t) {
   'use strict';
   t.d(n, { K: () => c, n: () => o });
   var r = t(13526),
    i = t(30758),
    l = t(96345),
    s = t(37168),
    a = t(86070);
   const o = (0, i.forwardRef)(({ as: e, className: n, children: t, ...i }, l) => {
     const s = e || 'div',
      o = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(s, { ref: l, className: o, ...i, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: i, headingLevel: o, headingApperance: c, ...d }) => {
     const g = (0, r.A)('utrecht-accordion__section', e),
      m = (0, r.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: g, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(l.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [i && (0, a.jsx)(s.D, { level: o, appearance: c, children: i }), t] })] }) }), (0, a.jsx)('div', { className: m, children: d.children })] });
    };
  },
  70561(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a, RM: () => l });
   var r = t(86070),
    i = t(18439);
   const l = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  70903(e, n, t) {
   'use strict';
   t.d(n, { B: () => T });
   var r = t(96547),
    i = t(38295),
    l = t(32385),
    s = t(46447),
    a = t(30758),
    o = t(4603),
    c = t(29181),
    d = t(86070);
   function g({ children: e, content: n }) {
    const [t, r] = (0, a.useState)(!1);
    return (
     (0, a.useEffect)(() => {
      'clipboard' in navigator && r(!0);
     }, []),
     (0, d.jsx)(d.Fragment, {
      children:
       t &&
       (0, d.jsxs)(s.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          await navigator.clipboard.writeText(n);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, d.jsx)(c.In, { children: (0, d.jsx)(o.A, {}) })],
       }),
     })
    );
   }
   var m = t(43864),
    u = t(35193),
    h = t(82999),
    p = t(13088),
    f = t(91525),
    j = t(24214),
    v = t(92081),
    w = t(1375),
    b = t(73563),
    x = t(23436),
    k = t(79532);
   const A = { boxShadow: m.A, color: u.A, cursor: h.A, dimension: p.A, fontFamily: f.A, fontFamilies: f.A, fontSize: j.A, fontSizes: j.A, fontWeight: v.A, fontWeights: v.A, lineHeight: w.A, lineHeights: w.A, number: b.A, other: x.A, textDecoration: k.A },
    y = ({ type: e }) => {
     const n = Object.hasOwn(A, e) ? e : 'other';
     return (0, d.jsx)(c.In, { children: (0, a.createElement)(A[n]) });
    };
   var C = t(76223);
   function T({ tokens: e }) {
    const n = (0, l.kD)(e),
     t = (0, C.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     a = (0, l.GT)(n),
     o = a.map((e) => (0, l.B_)(e) + ': ;').join('\n'),
     c = JSON.stringify(t, null, 2);
    return (0, d.jsxs)('div', {
     className: 'ma-flow',
     children: [
      (0, d.jsxs)(s.XI, {
       children: [
        (0, d.jsx)(s.A0, { children: (0, d.jsxs)(s.Hj, { children: [(0, d.jsx)(s.M_, { children: 'name' }), (0, d.jsx)(s.M_, { children: 'type' })] }) }),
        (0, d.jsx)(s.BF, {
         children: a.map((n) => {
          const t = (0, l.o_)(n),
           a = (0, l.eQ)(e, n).$type;
          return (0, d.jsxs)(s.Hj, { children: [(0, d.jsx)(s.nA, { children: (0, d.jsx)(r.C, { children: (0, d.jsx)(s.kf, { children: t }) }) }), (0, d.jsx)(s.nA, { children: (0, d.jsxs)(i.K, { children: [(0, d.jsx)(y, { type: a }), ' ', a] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, d.jsxs)(s.e2, { children: [(0, d.jsx)(g, { content: c, children: 'Kopieer als JSON' }), (0, d.jsx)(g, { content: o, children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  72954(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function l(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, r.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  82839(e, n, t) {
   var r = { './button-docs/docs/aliases.md': [62620, 62620], './code-block-docs/docs/aliases.md': [23021, 23021], './code-docs/docs/aliases.md': [39021, 39021], './color-sample-docs/docs/aliases.md': [24518, 24518], './data-badge-docs/docs/aliases.md': [99976, 99976], './heading-1-docs/docs/aliases.md': [16918, 16918], './heading-2-docs/docs/aliases.md': [5138, 5138], './heading-3-docs/docs/aliases.md': [70342, 70342], './heading-4-docs/docs/aliases.md': [67426, 67426], './heading-docs/docs/aliases.md': [5895, 5895], './link-docs/docs/aliases.md': [56551, 56551], './mark-docs/docs/aliases.md': [18569, 18569], './number-badge-docs/docs/aliases.md': [57569, 57569], './paragraph-docs/docs/aliases.md': [26183, 26183], './skip-link-docs/docs/aliases.md': [39927, 39927] };
   function i(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   ((i.keys = () => Object.keys(r)), (i.id = 82839), (e.exports = i));
  },
  85162(e, n, t) {
   'use strict';
   t.d(n, { s: () => o });
   var r = t(29181),
    i = t(13526),
    l = t(32385),
    s = t(86070);
   const a = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    o = ({ name: e, relayStep: n, description: t }) => {
     const o = (0, l.fX)(n),
      c = a[e] ?? e;
     return (0, s.jsxs)(r.WK, { children: [(0, s.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('ma-component-illustration', `ma-component-illustration--${o}`), fill: 'none', children: [(0, s.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, s.jsx)('rect', { width: '960', height: '540' }), (0, s.jsx)('rect', { width: '960', height: '540' })] }), (0, s.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, s.jsx)('use', { href: `/svg/componenten_overzicht_${(0, l.fX)(c)}.svg#component-illustration` })] }), (0, s.jsx)(r.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  89445(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function l(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  89786(e, n, t) {
   'use strict';
   t.d(n, { b: () => f, e: () => p });
   var r = t(30758),
    i = t(94309),
    l = t(44715),
    s = t(29181),
    a = t(56561),
    o = t(89974),
    c = t(70348),
    d = t(37168),
    g = t(86070);
   const m = (e) => (0, g.jsx)(d.D, { ...e });
   var u = t(6360),
    h = t(13526);
   const p = ({ title: e, sc: n, children: t, tags: a }) => {
     const o = (0, r.useId)(),
      d = [...a];
     if (n) {
      d.push(n);
      const e = l.pI.get(n);
      e?.conformance && d.push(`Niveau ${e.conformance}`);
     }
     return (0, g.jsx)('div', {
      role: 'listitem',
      'data-tags': a.join(','),
      className: (0, h.A)(
       'ma-new-checklist__item',
       a.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, g.jsx)(c.K, {
       label: (0, g.jsx)('span', { className: 'ma-new-checklist__title', id: o, children: e }),
       children: (0, g.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, g.jsx)('div', { className: 'ma-flow', children: t }),
         (0, g.jsx)(s._Q, {
          className: 'ma-new-checklist__badge-list',
          children: d.map((e, n) => {
           let t = (0, g.jsx)(u.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const r = l.pI.get(e);
            t = (0, g.jsx)(i.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${r.sc} ${r.nl.title}`, style: { lineHeight: 1 }, children: (0, g.jsx)(u.KE, { children: `WCAG ${e}` }) }, n);
           }
           return t;
          }),
         }),
        ],
       }),
      }),
     });
    },
    f = ({ children: e, headingLevel: n }) => {
     const t = r.useRef(null),
      [i, l] = (0, r.useState)([]),
      [d, u] = (0, r.useState)([]),
      [h, p] = (0, r.useState)([]),
      [f, j] = (0, r.useState)(0),
      [v, w] = (0, r.useState)(0),
      b = (e) => h.includes(e),
      x = (0, r.useId)();
     return (
      r.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        r = Array.from(e.querySelectorAll('[data-tags]'));
       (r.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        l(r),
        u([...n]),
        j(r.length),
        p([...n]));
      }, []),
      r.useEffect(() => {
       const e = h,
        n = [],
        t = [];
       (i.forEach((r) => {
        (r.dataset.tags?.split(',') || []).some((n) => e.includes(n)) ? n.push(r) : t.push(r);
       }),
        n.forEach((e) => (e.hidden = !1)),
        t.forEach((e) => (e.hidden = !0)),
        w(n.length));
      }, [h]),
      (0, g.jsxs)('div', {
       children: [
        (0, g.jsxs)('div', {
         className: 'ma-filter-block',
         children: [
          (0, g.jsxs)(s.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': x,
           children: [
            (0, g.jsx)(m, { level: n, id: x, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(d).map((e) =>
             (0, g.jsxs)(
              s.zB,
              {
               type: 'checkbox',
               children: [
                (0, g.jsx)(s.Sc, {
                 checked: b(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !b(e)) ? [...h, e] : h.filter((n) => n !== e);
                   p(t);
                  })(e),
                }),
                (0, g.jsx)(s.lR, { htmlFor: e, children: e }),
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
             (0, g.jsxs)(a.f, { role: 'status', children: [v, ' van de ', f, ' items zijn nu zichtbaar.'] }),
             v < f
              ? (0, g.jsx)(o.$, {
                 purpose: 'secondary',
                 onClick: () => {
                  p(d);
                 },
                 children: 'Toon alles',
                })
              : (0, g.jsx)(g.Fragment, {}),
            ],
           }),
          }),
         ],
        }),
        (0, g.jsx)(c.n, { className: 'ma-new-checklist', role: 'list', ref: t, children: e }),
       ],
      })
     );
    };
  },
  89974(e, n, t) {
   'use strict';
   t.d(n, { $: () => r.$n });
   var r = t(50805);
  },
  94309(e, n, t) {
   'use strict';
   t.d(n, { F: () => s, N: () => a });
   var r = t(13526),
    i = t(32385),
    l = t(86070);
   const s = ({ children: e, ...n }) => {
     const { to: t, href: r, ...s } = n;
     let a = t || r;
     const o = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? (o.pathname.endsWith('/') || (0, i.QQ)(o.pathname) || (o.pathname = `${o.pathname}/`), (a = o.toString().replace('https://nldesignsystem.nl', ''))) : ((s.target = '_blank'), (s.rel = 'noopener noreferrer')), (0, l.jsx)('a', { href: a, ...s, children: e }));
    },
    a = ({ className: e, ...n }) => (0, l.jsx)(s, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
