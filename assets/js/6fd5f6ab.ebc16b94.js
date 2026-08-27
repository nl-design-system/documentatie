(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [53087],
 {
  10645(e, n, t) {
   'use strict';
   t.d(n, { p: () => s });
   var i = t(13526),
    a = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...r }) => (0, a.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  17236(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  21034(e, n, t) {
   'use strict';
   t.d(n, { VK: () => k, $9: () => f, mu: () => v, Fc: () => b, K_: () => w });
   var i = t(29181),
    a = t(13526),
    s = t(40889),
    r = t(21530),
    o = t(45186);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
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
   var g = t(39569),
    u = t(10645),
    h = t(58876),
    p = t(32385);
   const m = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = t(70348),
    x = t(85162);
   const k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      s = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(j.n, { children: s.map((t) => (0, d.jsx)(j.K, { className: (0, a.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(r.AC, {
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
            a = t?.value,
            o = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || o.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [a ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: a && (0, d.jsx)(g.D, { state: a }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(a) && (0, d.jsx)(x.s, { relayStep: a, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    w = ({ component: e }) => {
     const n = (e && m[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21530(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => r, Wu: () => o, Zp: () => l });
   var i = t(46447),
    a = t(13526),
    s = t(86070);
   const r = ({ background: e, children: n, className: t, ...i }) => (0, s.jsx)('div', { className: (0, a.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    o = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: r = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === r ? (0, s.jsx)('article', { ...e }) : 'section' === r ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, a.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, s.jsx)('div', { className: (0, a.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27823(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  32385(e, n, t) {
   'use strict';
   t.d(n, { bo: () => a, KF: () => u, mJ: () => m, VZ: () => D, cR: () => w, Pv: () => j, qZ: () => r, kD: () => f, QQ: () => y, B2: () => h, Pc: () => l, f4: () => o, GT: () => b, fX: () => s, eQ: () => v, B_: () => k, o_: () => x });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return g(c(n));
    },
    h = (e, n) => m(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    m = (e) => g(c(e.projects.flatMap((e) => p(e)))),
    j = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: a, value: s }) => {
        const r = /^(.+) URL/.exec(i)[1],
         o = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: i, id: a, value: s, description: o };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    x = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
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
    },
    H = new Set(['ics', 'json', 'pdf']),
    y = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && H.has(t);
    };
  },
  33691(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  39569(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var i = t(46447),
    a = t(13526),
    s = t(32385),
    r = t(86070);
   const o = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, r.jsx)(i.KE, { className: (0, a.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var i = t(29181),
    a = t(74172),
    s = t(15089),
    r = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  44293(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  45186(e, n, t) {
   'use strict';
   t.d(n, { c: () => a });
   var i = t(30758);
   function a() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  46422(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51582(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var i = t(18439),
    a = t(46447),
    s = t(86070);
   const r = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: a } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + a;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: a.fV, h2: a._B, h3: a.f_, h4: a.mM, h5: a.TT }, 3: { h1: a._B, h2: a.f_, h3: a.mM, h4: a.TT, h5: a.TT }, 4: { h1: a.f_, h2: a.mM, h3: a.TT, h4: a.TT, h5: a.TT }, 5: { h1: a.mM, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT }, 6: { h1: a.TT, h2: a.TT, h3: a.TT, h4: a.TT, h5: a.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: a = '', components: r = {} }) => (0, s.jsx)(i.x, { components: { ...d(n, t), ...l(a), ...r }, children: e });
  },
  51604(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  59778(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var i = t(51582),
    a = t(30758),
    s = t(32385),
    r = t(86070);
   const o = ({ component: e }) => {
    if (globalThis.isAstro) return null;
    const { title: n } = e,
     o = (0, s.fX)(n),
     l = a.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, r.jsx)(a.Suspense, { fallback: null, children: (0, r.jsx)(i.o, { omitH1: !0, headingLevel: 1, children: (0, r.jsx)(l, {}) }) });
   };
  },
  70348(e, n, t) {
   'use strict';
   t.d(n, { K: () => l, n: () => o });
   var i = t(13526),
    a = t(96345),
    s = t(37168),
    r = t(86070);
   const o = ({ className: e, ...n }) => {
     const t = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: t, children: n.children });
    },
    l = ({ className: e, classNamePanel: n, label: t, heading: o, headingLevel: l, headingApperance: d, ...c }) => {
     const g = (0, i.A)('utrecht-accordion__section', e),
      u = (0, i.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: g, ...c, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(a.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [o && (0, r.jsx)(s.D, { level: l, appearance: d, children: o }), t] })] }) }), (0, r.jsx)('div', { className: u, children: c.children })] });
    };
  },
  70561(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    a = t(18439);
   const s = [];
   function r(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  70903(e, n, t) {
   'use strict';
   t.d(n, { B: () => F });
   var i = t(96547),
    a = t(79889),
    s = t(32385),
    r = t(46447),
    o = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    g = t(4603),
    u = t(29181),
    h = t(86070);
   function p({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, h.jsxs)(r.$n, {
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
        children: [e, (0, h.jsx)(u.In, { children: (0, h.jsx)(g.A, {}) })],
       })
     : null;
   }
   var m = t(43864),
    j = t(35193),
    x = t(82999),
    k = t(13088),
    v = t(91525),
    f = t(24214),
    b = t(92081),
    w = t(1375),
    D = t(73563),
    H = t(23436),
    y = t(79532),
    S = t(30758);
   const N = { boxShadow: m.A, color: j.A, cursor: x.A, dimension: k.A, fontFamily: v.A, fontFamilies: v.A, fontSize: f.A, fontSizes: f.A, fontWeight: b.A, fontWeights: b.A, lineHeight: w.A, lineHeights: w.A, number: D.A, other: H.A, textDecoration: y.A },
    A = ({ type: e }) => {
     const n = Object.hasOwn(N, e) ? e : 'other';
     return (0, h.jsx)(u.In, { children: (0, S.createElement)(N[n]) });
    };
   var R = t(76223);
   function F({ tokens: e }) {
    const n = (0, s.kD)(e),
     t = (0, R.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     o = (0, s.GT)(n),
     l = o.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsxs)(r.XI, {
       children: [
        (0, h.jsx)(r.A0, { children: (0, h.jsxs)(r.Hj, { children: [(0, h.jsx)(r.M_, { children: 'name' }), (0, h.jsx)(r.M_, { children: 'type' })] }) }),
        (0, h.jsx)(r.BF, {
         children: o.map((n) => {
          const t = (0, s.o_)(n),
           o = (0, s.eQ)(e, n).$type;
          return (0, h.jsxs)(r.Hj, { children: [(0, h.jsx)(r.nA, { children: (0, h.jsx)(i.C, { children: (0, h.jsx)(r.kf, { children: t }) }) }), (0, h.jsx)(r.nA, { children: (0, h.jsxs)(a.K, { children: [(0, h.jsx)(A, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, h.jsxs)(r.e2, { children: [(0, h.jsx)(p, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, h.jsx)(p, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  72954(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, i.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  76703(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82026(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => Ce, component: () => Oe, contentTitle: () => Le, default: () => Me, description: () => _e, frontMatter: () => Te, issueNumber: () => Ge, metadata: () => i, title: () => ze, toc: () => Be }));
   const i = JSON.parse('{"id":"componenten/heading/index","title":"Heading","description":"Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.","source":"@site/docs/componenten/heading/index.mdx","sourceDirName":"componenten/heading","slug":"/heading","permalink":"/heading","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/heading/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heading","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Heading","pagination_label":"Heading","description":"Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.","issue_number":114,"slug":"/heading","keywords":["bold-text","caption","content","h1","h2","h3","h4","h5","h6","header","heading","heading level","headline","hoofdkop","hoofdstuk","hoofdtekst","hyperlink","kop","kopje","kop tekst","koptekst","linktekst","pagina titel","paragraaf titel","sectie","section","structure","titel","title","tussenkop","tussenkopje","url"]},"sidebar":"componenten","previous":{"title":"Grid","permalink":"/grid"},"next":{"title":"Heading 1","permalink":"/heading-1"}}');
   var a = t(86070),
    s = t(18439),
    r = t(24155),
    o = (t(60529), t(17236)),
    l = t(70561),
    d = t(33691),
    c = t(21530),
    g = t(46447),
    u = t(56421),
    h = t(40889),
    p = t(59778);
   const m = JSON.parse('{"D":"De koptekst heeft een te laag contrast"}');
   function j(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'De tekst is niet goed leesbaar omdat de kleur van de tekst te weinig contrasteert met de kleur van de achtergrond. Mensen die kleurenblind of slechtziend zijn kunnen de tekst hierdoor niet goed lezen.' });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(j, { ...e }) }) : j(e);
   }
   function k(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Pas de kleur van de tekst of achtergrond aan, voor een contrastratio van tenminste:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: '3:1 voor tekst van 24 pixels of groter.' }), '\n', (0, a.jsx)(n.li, { children: '3:1 voor dikgedrukte tekst van 19 pixels of groter.' }), '\n', (0, a.jsx)(n.li, { children: '4,5:1 voor de overige tekst.' }), '\n'] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(k, { ...e }) }) : k(e);
   }
   const f = JSON.parse('{"D":"De koptekst beschrijft de inhoud niet"}');
   function b(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'De tekst in de Heading beschrijft de inhoud van de pagina niet (voldoende). Goede koppen zijn belangrijk om snel in te kunnen schatten of de informatie die de bezoeker zoekt op de pagina staat.' });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(b, { ...e }) }) : b(e);
   }
   function D(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Zorg ervoor dat de kop de inhoud eronder beschrijft.' });
   }
   function H(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(D, { ...e }) }) : D(e);
   }
   function y(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Plaats een beschrijvende koptekst voor de pagina in Heading 1. De Heading 1 is de belangrijkste koptekst op de pagina en helpt bezoekers inschatten welke content er op de pagina staat.' });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(y, { ...e }) }) : y(e);
   }
   const N = JSON.parse('{"D":"Heading heeft geen inhoud"}');
   function A(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Er is een Heading component zonder inhoud.' });
   }
   function R(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(A, { ...e }) }) : A(e);
   }
   function F(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Verwijder de lege Heading.' });
   }
   function T(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(F, { ...e }) }) : F(e);
   }
   function L(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Heeft de pagina nog geen Heading 1? Plaats een beschrijvende koptekst voor de pagina in de Heading 1.' });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(L, { ...e }) }) : L(e);
   }
   const z = JSON.parse('{"D":"Koptekst heeft een andere taal dan de taal die is aangegeven"}');
   function _(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'De koptekst heeft een andere taal dan de tekst er omheen, maar dat is niet aangegeven. Een screenreader leest de tekst daarom niet voor in de taal van de tekst.' });
   }
   function G(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(_, { ...e }) }) : _(e);
   }
   function O(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Geef aan welke taal dit stuk tekst heeft, of vertaal de tekst naar de hoofdtaal van de pagina.' });
   }
   function B(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(O, { ...e }) }) : O(e);
   }
   const P = JSON.parse('{"D":"Heading gebruikt om niet-koptekst groter te maken"}');
   function M(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'De tekst is geen kop voor de content eronder, maar is wel met een Heading opgemaakt. Dit is verwarrend voor bezoekers die gebruik maken van een screenreader, want de tekst wordt wel voorgelezen als koptekst.' });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(M, { ...e }) }) : M(e);
   }
   function V(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Verwijder de Heading en maak de tekst op een andere manier op.' });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(V, { ...e }) }) : V(e);
   }
   function $(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Wil je een tekst uitlichten omdat het een citaat is? Gebruik dan een citaatblok.' });
   }
   function U(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)($, { ...e }) }) : $(e);
   }
   const J = JSON.parse('{"D":"Meer dan \xe9\xe9n Heading 1 op de pagina"}');
   function K(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Er is meer dan \xe9\xe9n Heading 1 op de pagina. De tekst in een Heading 1 beschrijft de content op de pagina. Gebruik daarom altijd maar \xe9\xe9n Heading 1 per pagina.' });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(K, { ...e }) }) : K(e);
   }
   function Z(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Gebruik een Heading 1 als eerste koptekst op de pagina. Pas het niveau van de andere kopteksten op de pagina aan.' });
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(Z, { ...e }) }) : Z(e);
   }
   const q = JSON.parse('{"D":"Geen Heading 1 op de pagina"}');
   function Q(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Er is geen Heading 1 op de pagina. De koptekst in de Heading 1 beschrijft de inhoud van de pagina en is daarom een belangrijk navigatiemiddel voor bezoekers die gebruik maken van hulpsoftware.' });
   }
   function Y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(Q, { ...e }) }) : Q(e);
   }
   function ee(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Voeg een Heading 1 toe als eerste koptekst op de pagina.' });
   }
   function ne(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(ee, { ...e }) }) : ee(e);
   }
   const te = JSON.parse('{"D":"Er worden een of meerdere kopniveaus overgeslagen"}');
   function ie(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Er worden kopniveaus overgeslagen. De kopniveaus op een pagina geven structuur aan de content op de pagina en zijn daarom een belangrijk navigatiemiddel voor bezoekers die gebruik maken van hulpsoftware.' });
   }
   function ae(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(ie, { ...e }) }) : ie(e);
   }
   function se(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Sla geen kopniveaus over.' });
   }
   function re(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(se, { ...e }) }) : se(e);
   }
   const oe = JSON.parse('{"D":"Heading 1 komt niet overeen met paginatitel"}');
   function le(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['De koptekst in Heading 1 komt niet overeen met de paginatitel in het ', (0, a.jsx)(n.code, { children: 'title' }), '-element in de ', (0, a.jsx)(n.code, { children: 'head' }), ' van de pagina. De paginatitel is de tekst die in het browser-tabblad staat en is een belangrijk navigatiemiddel voor bezoekers die gebruik maken van hulpsoftware. Het is daarom verwarrend als de paginatitel en de eerste koptekst op de pagina niet hetzelfde zijn.'] });
   }
   function de(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(le, { ...e }) }) : le(e);
   }
   function ce(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Zorg ervoor dat de paginatitel en de koptekst in de Heading 1 hetzelfde zijn.' });
   }
   function ge(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(ce, { ...e }) }) : ce(e);
   }
   var ue = t(21034);
   function he(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['In HTML zijn de juiste elementen voor koppen ', (0, a.jsx)(n.code, { children: 'h1' }), ' tot en met ', (0, a.jsx)(n.code, { children: 'h6' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Voor screenreadergebruikers is een goede koppenstructuur een belangrijk navigatiemiddel. Gebruik daarom een heading-element van het juiste niveau met een tekst die de content van de sectie eronder beschrijft. Op die manier ontstaat een duidelijke inhoudsopgave wanneer een gebruiker met hulpsoftware een koppenlijst opvraagt.' }), '\n', (0, a.jsxs)(n.p, { children: ['Wil je tekst alleen maar vormgeven, bijvoorbeeld groter maken? Gebruik dan CSS in combinatie met bijvoorbeeld een ', (0, a.jsx)(n.code, { children: 'span' }), '- of een ', (0, a.jsx)(n.code, { children: 'p' }), '-element, geen heading-element.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Sla geen kopniveaus over, dus bijvoorbeeld een ', (0, a.jsx)(n.code, { children: 'h3' }), ' na een ', (0, a.jsx)(n.code, { children: 'h1' }), '. Gebruikers van ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen dan het idee krijgen dat ze informatie missen.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Let erop dat je per pagina 1 ', (0, a.jsx)(n.code, { children: 'h1' }), ' gebruikt en dat deze aan het begin van de ', (0, a.jsx)(n.code, { children: 'main' }), '-content staat. Door niet meer dan 1 ', (0, a.jsx)(n.code, { children: 'h1' }), ' te gebruiken, kan een screenreadergebruiker makkelijk naar het begin van de unieke content springen.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Richtlijnen voor koppen' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/relaties/#relaties-binnen-typografie', children: 'Gebruik ruimte om relaties te cre\xebren tussen elementen, Relaties binnen typografie' }) }), '\n'] })] });
   }
   function pe(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['In HTML zijn de juiste elementen voor koppen ', (0, a.jsx)(n.code, { children: 'h1' }), ' tot en met ', (0, a.jsx)(n.code, { children: 'h6' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Richtlijnen voor koppen' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/relaties/#relaties-binnen-typografie', children: 'Gebruik ruimte om relaties te cre\xebren tussen elementen, Relaties binnen typografie' }) }), '\n'] })] });
   }
   var me = t(82209),
    je = t(44293),
    xe = t(51604);
   function ke(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'De tekst van de kop beschrijft kort en bondig waar de tekst eronder over gaat, als een soort samenvatting.' }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }) }), '\n'] })] });
   }
   var ve = t(76703),
    fe = t(72954),
    be = t(46422),
    we = t(89445),
    De = t(27823);
   const He = [
     {
      title: 'Het niveau van de kop klopt binnen de koppenstructuur van de pagina.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(he, { ...e }) }) : he(e);
      },
      tags: ['contentmaker'],
     },
     { title: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: je.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De Heading is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: fe.Ay, tags: ['developer'] },
     { title: 'De Heading komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: De.Ay, tags: ['developer'] },
     {
      title: 'De koptekst maakt duidelijk waar de sectie over gaat.',
      sc: '2.4.6',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(ke, { ...e }) }) : ke(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'Als de kop in een andere taal is dan de rest van de pagina, dan heeft het lang-attribuut de juiste taalcode.', sc: '3.1.2', status: '', component: ve.Ay, tags: ['contentmaker', 'developer'] },
    ],
    ye = [
     {
      title: 'Als tekst er uitziet als een kop, moet dit ook in de HTML een kop zijn.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(pe, { ...e }) }) : pe(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: xe.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: me.Ay, tags: ['developer'] },
     { title: 'De Heading is standaard niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: be.Ay, tags: ['developer'] },
     { title: 'De Heading komt standaard niet voor in de focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: we.Ay, tags: ['developer'] },
    ];
   var Se = t(70903),
    Ne = t(51582);
   function Ae(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'gebruik-code', children: 'Gebruik Code' }) }), '\n', (0, a.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, a.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-css', children: '@nl-design-system-candidate/heading-css' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/heading-css\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/heading-css@1/dist/heading.css" />\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, a.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/heading-css/dist/heading.css" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/heading-css/heading.css";\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'heading-level-1', children: 'Heading level 1' }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik voor een hoofdkop van een pagina de ', (0, a.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, a.jsx)(n.code, { children: 'nl-heading--level-1' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'h1' }), ', element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<h1 class="nl-heading nl-heading--level-1">Hoofdkop van de pagina</h1>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'heading-level-2', children: 'Heading level 2' }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik voor een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat de ', (0, a.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, a.jsx)(n.code, { children: 'nl-heading--level-2' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'h2' }), ', element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<h2 class="nl-heading nl-heading--level-2">\n  Een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat\n</h2>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'heading-level-3', children: 'Heading level 3' }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het derde niveau staat de ', (0, a.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, a.jsx)(n.code, { children: 'nl-heading--level-3' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'h3' }), ', element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<h3 class="nl-heading nl-heading--level-3">Een koptekst die in de koppenstructuur op het derde niveau staat</h3>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'heading-level-4', children: 'Heading level 4' }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het vierde niveau staat de ', (0, a.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, a.jsx)(n.code, { children: 'nl-heading--level-4' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'h4' }), ', element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<h4 class="nl-heading nl-heading--level-4">Een koptekst die in de koppenstructuur op het vierde niveau staat</h4>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'heading-level-5', children: 'Heading level 5' }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het vijfde niveau staat de ', (0, a.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, a.jsx)(n.code, { children: 'nl-heading--level-5' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'h5' }), ', element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<h5 class="nl-heading nl-heading--level-5">Een koptekst die in de koppenstructuur op het vijfde niveau staat</h5>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'heading-level-6', children: 'Heading level 6' }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik voor een koptekst die in de koppenstructuur op het zesde niveau staat de ', (0, a.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, a.jsx)(n.code, { children: 'nl-heading--level-5' }), ' class name op een ', (0, a.jsx)(n.code, { children: 'h6' }), ', element:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<h6 class="nl-heading nl-heading--level-6">Een koptekst die in de koppenstructuur op het zesde niveau staat</h6>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'kop-gebruiken-met-het-uiterlijk-van-een-ander-level', children: 'Kop gebruiken met het uiterlijk van een ander level' }), '\n', (0, a.jsxs)(n.p, { children: ['Gebruik voor een koptekst die semantisch op het ene level staat, maar visueel de uitstraling heeft van een ander level de ', (0, a.jsx)(n.code, { children: 'nl-heading' }), ' en ', (0, a.jsx)(n.code, { children: 'nl-heading--level-{het visuele level}' }), ' op het semantische heading component naar keuze:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<h2 class="nl-heading nl-heading--level-4">\n  Een koptekst die in de koppenstructuur op het tweede level staat en eruit ziet als het vierde level.\n</h2>\n' }) }), '\n', (0, a.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, a.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, a.jsx)(n.p, { children: (0, a.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-react', children: '@nl-design-system-candidate/heading-react' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/heading-react\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-jsx', children: 'import { Heading } from "@nl-design-system-candidate/heading-react";\n\nexport const MyComponent = () => {\n  return (\n    <div>\n      <Heading level={2} appearance="level-4"></Heading>\n    </div>\n  );\n};\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Of inclusief CSS:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-jsx', children: 'import { Heading } from "@nl-design-system-candidate/heading-react/css";\n\nexport const MyComponent = () => {\n  return (\n    <div>\n      <Heading level={2} appearance="level-4"></Heading>\n    </div>\n  );\n};\n' }) })] });
   }
   function Re(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(Ae, { ...e }) }) : Ae(e);
   }
   var Fe = t(83766);
   const Te = { title: 'Heading', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Heading', pagination_label: 'Heading', description: 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.', issue_number: 114, slug: '/heading', keywords: ['bold-text', 'caption', 'content', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'heading', 'heading level', 'headline', 'hoofdkop', 'hoofdstuk', 'hoofdtekst', 'hyperlink', 'kop', 'kopje', 'kop tekst', 'koptekst', 'linktekst', 'pagina titel', 'paragraaf titel', 'sectie', 'section', 'structure', 'titel', 'title', 'tussenkop', 'tussenkopje', 'url'] },
    Le = void 0,
    Ce = {},
    ze = 'Heading',
    _e = 'Koptekst die in de koppenstructuur ingesteld kan worden op het juiste niveau.',
    Ge = 114,
    Oe = r.find((e) => e.number === Ge),
    Be = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'Veel gemaakte fouten bij het inzetten van Heading', id: 'veel-gemaakte-fouten-bij-het-inzetten-van-heading', level: 2 }, { value: 'Oplossing', id: 'oplossing', level: 4 }, { value: 'Oplossing', id: 'oplossing-1', level: 4 }, { value: 'Oplossing', id: 'oplossing-2', level: 4 }, { value: 'Oplossing', id: 'oplossing-3', level: 4 }, { value: 'Oplossing', id: 'oplossing-4', level: 4 }, { value: 'Oplossing', id: 'oplossing-5', level: 4 }, { value: 'Oplossing', id: 'oplossing-6', level: 4 }, { value: 'Oplossing', id: 'oplossing-7', level: 4 }, { value: 'Oplossing', id: 'oplossing-8', level: 4 }, { value: 'CSS', id: 'css', level: 2 }, { value: 'Heading level 1', id: 'heading-level-1', level: 3 }, { value: 'Heading level 2', id: 'heading-level-2', level: 3 }, { value: 'Heading level 3', id: 'heading-level-3', level: 3 }, { value: 'Heading level 4', id: 'heading-level-4', level: 3 }, { value: 'Heading level 5', id: 'heading-level-5', level: 3 }, { value: 'Heading level 6', id: 'heading-level-6', level: 3 }, { value: 'Kop gebruiken met het uiterlijk van een ander level', id: 'kop-gebruiken-met-het-uiterlijk-van-een-ander-level', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function Pe(e) {
    const n = { h2: 'h2', h3: 'h3', h4: 'h4', p: 'p', ...(0, s.R)(), ...e.components },
     { Checklist: t, ChecklistItem: i } = n;
    return (t || Ie('Checklist', !0), i || Ie('ChecklistItem', !0), (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(ue.Fc, { component: Oe, headingLevel: 1, description: _e }), '\n', (0, a.jsx)(p.e, { component: Oe }), '\n', (0, a.jsx)(c.Zp, { className: 'ma-implementation-card', children: (0, a.jsxs)(c.Wu, { children: [(0, a.jsx)(u.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, a.jsxs)(g.dk, { children: [(0, a.jsxs)(g.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1039', children: [(0, a.jsx)(h.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, a.jsxs)(g.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1039', children: [(0, a.jsx)(h.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, a.jsx)(u.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, a.jsxs)(g.dk, { children: [(0, a.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-heading--documentatie', children: [(0, a.jsx)(h.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, a.jsxs)(g.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/heading--documentatie', children: [(0, a.jsx)(h.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, a.jsx)(u.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, a.jsxs)(g.dk, { children: [(0, a.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-css', children: [(0, a.jsx)(h.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-css'] }), (0, a.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-react', children: [(0, a.jsx)(h.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-react'] }), (0, a.jsxs)(g.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/heading-tokens', children: [(0, a.jsx)(h.r, { brand: 'npm' }), ' @nl-design-system-candidate/heading-tokens'] })] })] }) }), '\n', (0, a.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, a.jsx)(d.Ay, {}), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, a.jsx)(l.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: He.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, a.jsx)(o.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: ye.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(n.h2, { id: 'veel-gemaakte-fouten-bij-het-inzetten-van-heading', children: 'Veel gemaakte fouten bij het inzetten van Heading' }), '\n', (0, a.jsx)(n.p, { children: 'Deze sectie geeft een overzicht van de meest voorkomende fouten en biedt praktische oplossingen.' }), '\n', (0, a.jsx)(u.D, { level: 3, children: m.D }), '\n', (0, a.jsx)(x, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing', children: 'Oplossing' }), '\n', (0, a.jsx)(v, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: f.D }), '\n', (0, a.jsx)(w, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-1', children: 'Oplossing' }), '\n', (0, a.jsx)(H, {}), '\n', (0, a.jsx)(S, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: N.D }), '\n', (0, a.jsx)(R, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-2', children: 'Oplossing' }), '\n', (0, a.jsx)(T, {}), '\n', (0, a.jsx)(C, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: z.D }), '\n', (0, a.jsx)(G, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-3', children: 'Oplossing' }), '\n', (0, a.jsx)(B, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: P.D }), '\n', (0, a.jsx)(I, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-4', children: 'Oplossing' }), '\n', (0, a.jsx)(E, {}), '\n', (0, a.jsx)(U, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: J.D }), '\n', (0, a.jsx)(X, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-5', children: 'Oplossing' }), '\n', (0, a.jsx)(W, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: q.D }), '\n', (0, a.jsx)(Y, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-6', children: 'Oplossing' }), '\n', (0, a.jsx)(ne, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: te.D }), '\n', (0, a.jsx)(ae, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-7', children: 'Oplossing' }), '\n', (0, a.jsx)(re, {}), '\n', (0, a.jsx)(u.D, { level: 3, children: oe.D }), '\n', (0, a.jsx)(de, {}), '\n', (0, a.jsx)(n.h4, { id: 'oplossing-8', children: 'Oplossing' }), '\n', (0, a.jsx)(ge, {}), '\n', (0, a.jsx)(Ne.o, { omitH1: !0, headingLevel: 2, children: (0, a.jsx)(Re, {}) }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, a.jsx)(Se.B, { tokens: Fe }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(ue.VK, { component: Oe, headingLevel: 3 }), '\n', (0, a.jsx)(ue.$9, { component: Oe, headingLevel: 2 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(ue.mu, { component: Oe, headingLevel: 3 }), '\n', (0, a.jsx)(ue.K_, { component: Oe })] }));
   }
   function Me(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(Pe, { ...e }) }) : Pe(e);
   }
   function Ie(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  82209(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82839(e, n, t) {
   var i = { './button-docs/docs/aliases.md': [62620, 62620], './code-block-docs/docs/aliases.md': [23021, 23021], './code-docs/docs/aliases.md': [39021, 39021], './color-sample-docs/docs/aliases.md': [24518, 24518], './data-badge-docs/docs/aliases.md': [99976, 99976], './heading-1-docs/docs/aliases.md': [16918, 16918], './heading-2-docs/docs/aliases.md': [5138, 5138], './heading-3-docs/docs/aliases.md': [70342, 70342], './heading-4-docs/docs/aliases.md': [67426, 67426], './heading-docs/docs/aliases.md': [5895, 5895], './link-docs/docs/aliases.md': [56551, 56551], './mark-docs/docs/aliases.md': [18569, 18569], './number-badge-docs/docs/aliases.md': [57569, 57569], './paragraph-docs/docs/aliases.md': [26183, 26183], './skip-link-docs/docs/aliases.md': [39927, 39927] };
   function a(e) {
    if (!t.o(i, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = i[e],
     a = n[0];
    return t.e(n[1]).then(() => t(a));
   }
   ((a.keys = () => Object.keys(i)), (a.id = 82839), (e.exports = a));
  },
  85162(e, n, t) {
   'use strict';
   t.d(n, { s: () => l });
   var i = t(29181),
    a = t(13526),
    s = t(32385),
    r = t(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, s.fX)(n),
      d = o[e] ?? e;
     return (0, r.jsxs)(i.WK, { children: [(0, r.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, a.A)('ma-component-illustration', `ma-component-illustration--${l}`), fill: 'none', children: [(0, r.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, r.jsx)('rect', { width: '960', height: '540' }), (0, r.jsx)('rect', { width: '960', height: '540' })] }), (0, r.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, r.jsx)('use', { href: `/svg/componenten_overzicht_${(0, s.fX)(d)}.svg#component-illustration` })] }), (0, r.jsx)(i.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  89445(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    a = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
