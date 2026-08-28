(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [49189],
 {
  4107(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var s = t(86070),
    i = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, s.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
  },
  10645(e, n, t) {
   'use strict';
   t.d(n, { p: () => r });
   var s = t(13526),
    i = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...a }) => (0, i.jsxs)('hgroup', { className: (0, s.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  11444(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ['Als je het ', (0, s.jsx)(n.code, { children: 'code' }), '-element gebruikt en met CSS een eigen kleur definieert voor ', (0, s.jsx)(n.code, { children: 'background-color' }), ', dan moet deze achtergrondkleur een contrastverhouding hebben van minimaal 3:1 met de achtergrondkleur van de pagina.'] }), '\n', (0, s.jsx)(n.p, { children: 'Dit geldt niet als je de achtergrondkleur niet zelf definieert, maar overlaat aan de browser. Daarvoor bestaat namelijk een uitzondering in het WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content.' }), '\n', (0, s.jsxs)(n.p, { children: ['Dit geldt ook niet als het lettertype of de weergave van de code duidelijke te onderscheiden is als code, door bijvoorbeeld het kiezen van een ', (0, s.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/List_of_monospaced_typefaces', children: 'monospace lettertype' }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  17236(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var s = t(86070),
    i = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
  },
  21034(e, n, t) {
   'use strict';
   t.d(n, { VK: () => j, $9: () => b, mu: () => x, Fc: () => A, K_: () => k });
   var s = t(29181),
    i = t(13526),
    r = t(40889),
    a = t(21530),
    o = t(45186);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var c = t(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, c.jsx)(l, {
     children: () => {
      const s = t(83294).V6;
      return (0, c.jsx)(s, {
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
    m = t(58876),
    h = t(32385);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var w = t(70348),
    f = t(85162);
   const j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      r = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(w.n, { children: r.map((t) => (0, c.jsx)(w.K, { className: (0, i.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, h.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: s }) => (0, c.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(s) }, s)) }), (0, c.jsx)(s.fz, { children: (0, c.jsxs)(s.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(a.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            s = n.progress.max - n.progress.value;
           return t === s ? e.title.localeCompare(n.title) : t - s;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            o = (0, h.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            a.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, c.jsxs)(a.Wu, {
              children: [
               (0, c.jsx)(s.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(s.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(s.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || o.length > 0) && (0, c.jsx)(s.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(s.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, c.jsx)(c.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, c.jsx)(s.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(s.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(s.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(s.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(s.Xy, { children: [i ? (0, c.jsxs)(s.Er, { children: ['Vul de ', (0, c.jsx)(s.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(s.Er, { children: [(0, c.jsxs)(s.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(s.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(s.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(s.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    A = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(u.p, { level: n, suffix: i && (0, c.jsx)(g.D, { state: i }), children: e.title }), (0, c.jsx)(s.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(i) && (0, c.jsx)(f.s, { relayStep: i, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    k = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(s.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [e.slug ? (0, c.jsx)(s.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21530(e, n, t) {
   'use strict';
   t.d(n, { AC: () => c, Fu: () => a, Wu: () => o, Zp: () => l });
   var s = t(46447),
    i = t(13526),
    r = t(86070);
   const a = ({ background: e, children: n, className: t, ...s }) => (0, r.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...s, children: n }),
    o = (e) => (0, r.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: o, children: l }) => {
     const c = (e) => ('article' === a ? (0, r.jsx)('article', { ...e }) : 'section' === a ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, i.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, r.jsx)(s.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'large', children: n, className: t }) => (0, r.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27823(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, s.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  30400(e, n, t) {
   'use strict';
   t.d(n, { b: () => w, e: () => p });
   var s = t(30758),
    i = t(94309),
    r = t(44715),
    a = t(29181),
    o = t(56561),
    l = t(50805),
    c = t(70348),
    d = t(37168),
    g = t(86070);
   const u = (e) => (0, g.jsx)(d.D, { ...e });
   var m = t(6360),
    h = t(13526);
   const p = ({ title: e, sc: n, children: t, tags: o }) => {
     const l = (0, s.useId)(),
      d = [...o];
     if (n) {
      d.push(n);
      const e = r.pI.get(n);
      e?.conformance && d.push(`Niveau ${e.conformance}`);
     }
     return (0, g.jsx)('div', {
      role: 'listitem',
      'data-tags': o.join(','),
      className: (0, h.A)(
       'ma-new-checklist__item',
       o.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, g.jsx)(c.K, {
       label: (0, g.jsx)('span', { className: 'ma-new-checklist__title', id: l, children: e }),
       children: (0, g.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, g.jsx)('div', { className: 'ma-flow', children: t }),
         (0, g.jsx)(a._Q, {
          className: 'ma-new-checklist__badge-list',
          children: d.map((e, n) => {
           let t = (0, g.jsx)(m.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const s = r.pI.get(e);
            t = (0, g.jsx)(i.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${s.sc} ${s.nl.title}`, style: { lineHeight: 1 }, children: (0, g.jsx)(m.KE, { children: `WCAG ${e}` }) }, n);
           }
           return t;
          }),
         }),
        ],
       }),
      }),
     });
    },
    w = ({ children: e, headingLevel: n }) => {
     const t = s.useRef(null),
      [i, r] = (0, s.useState)([]),
      [d, m] = (0, s.useState)([]),
      [h, p] = (0, s.useState)([]),
      [w, f] = (0, s.useState)(0),
      [j, x] = (0, s.useState)(0),
      b = (e) => h.includes(e),
      A = (0, s.useId)();
     return (
      s.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        s = Array.from(e.querySelectorAll('[data-tags]'));
       (s.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        r(s),
        m([...n]),
        f(s.length),
        p([...n]));
      }, []),
      s.useEffect(() => {
       const e = h,
        n = [],
        t = [];
       (i.forEach((s) => {
        (s.dataset.tags?.split(',') || []).some((n) => e.includes(n)) ? n.push(s) : t.push(s);
       }),
        n.forEach((e) => (e.hidden = !1)),
        t.forEach((e) => (e.hidden = !0)),
        x(n.length));
      }, [h]),
      (0, g.jsxs)('div', {
       children: [
        (0, g.jsxs)('div', {
         className: 'ma-filter-block',
         children: [
          (0, g.jsxs)(a.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': A,
           children: [
            (0, g.jsx)(u, { level: n, id: A, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(d).map((e) =>
             (0, g.jsxs)(
              a.zB,
              {
               type: 'checkbox',
               children: [
                (0, g.jsx)(a.Sc, {
                 checked: b(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !b(e)) ? [...h, e] : h.filter((n) => n !== e);
                   p(t);
                  })(e),
                }),
                (0, g.jsx)(a.lR, { htmlFor: e, children: e }),
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
             (0, g.jsxs)(o.f, { role: 'status', children: [j, ' van de ', w, ' items zijn nu zichtbaar.'] }),
             j < w
              ? (0, g.jsx)(l.$n, {
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
  32385(e, n, t) {
   'use strict';
   t.d(n, { bo: () => i, KF: () => u, mJ: () => p, VZ: () => v, cR: () => k, Pv: () => w, qZ: () => a, kD: () => b, QQ: () => C, B2: () => m, Pc: () => l, f4: () => o, GT: () => A, fX: () => r, eQ: () => x, B_: () => j, o_: () => f });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(d(n));
    },
    m = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(d(e.projects.flatMap((e) => h(e)))),
    w = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: s, id: i, value: r }) => {
        const a = /^(.+) URL/.exec(s)[1],
         o = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: s, id: i, value: r, description: o };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    f = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function A(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const k = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    v = () => {
     const e = s.sP?.node;
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
   t.d(n, { Ay: () => o, RM: () => r });
   var s = t(86070),
    i = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
  },
  39569(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var s = t(46447),
    i = t(13526),
    r = t(32385),
    a = t(86070);
   const o = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, a.jsx)(s.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var s = t(29181),
    i = t(74172),
    r = t(15089),
    a = t(28377),
    o = t(33648),
    l = t(83386),
    c = t(86070);
   const d = { figma: (0, c.jsx)(i.A, {}), github: (0, c.jsx)(r.A, {}), npm: (0, c.jsx)(a.A, {}), storybook: (0, c.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, c.jsx)(s.In, { children: d[e] || (0, c.jsx)(l.A, {}) });
  },
  44293(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, s.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, s.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, s.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  44715(e, n, t) {
   'use strict';
   t.d(n, { NO: () => r, pI: () => a });
   const s = [
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
    i = (new Map(s.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    r = [...s.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !i.find((n) => n.sc === e)),
    a = new Map(r.map((e) => [e.sc, e]));
  },
  45186(e, n, t) {
   'use strict';
   t.d(n, { c: () => i });
   var s = t(30758);
   function i() {
    const [e, n] = (0, s.useState)();
    return ((0, s.useEffect)(() => n(!0), []), e);
   }
  },
  46422(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51582(e, n, t) {
   'use strict';
   t.d(n, { o: () => d });
   var s = t(18439),
    i = t(46447),
    r = t(86070);
   const a = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: s, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + s + i;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: a = {} }) => (0, r.jsx)(s.x, { components: { ...c(n, t), ...l(i), ...a }, children: e });
  },
  51604(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, s.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, s.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, s.jsx)(n.code, { children: 'em' }), ' of ', (0, s.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, s.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, s.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, s.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  58643(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => _, component: () => I, contentTitle: () => H, default: () => O, description: () => P, frontMatter: () => W, issueNumber: () => B, metadata: () => s, title: () => z, toc: () => M }));
   const s = JSON.parse('{"id":"componenten/code/index","title":"Code","description":"Computercode die onderdeel is van lopende tekst.","source":"@site/docs/componenten/code/index.mdx","sourceDirName":"componenten/code","slug":"/code","permalink":"/code","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/code/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Code","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Code","pagination_label":"Code","description":"Computercode die onderdeel is van lopende tekst.","issue_number":326,"slug":"/code","keywords":["actie","action","code","codeblock","code block","code markering","code fences","code snippet","code voorbeeld","coded language","codetaal","css","example","html","java","inline code","mono","monotype","monospace","plaintext","pre","samp","source code","src","voorbeeld"]},"sidebar":"componenten","previous":{"title":"Checkbox Group","permalink":"/checkbox-group"},"next":{"title":"Code Block","permalink":"/code-block"}}');
   var i = t(86070),
    r = t(18439),
    a = t(24155),
    o = (t(47123), t(17236)),
    l = t(70561),
    c = t(33691);
   function d(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Gebruik voor tekst gemarkeerd als code semantische HTML. In het geval van de component Code is dat het HTML-element ', (0, i.jsx)(n.code, { children: 'code' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dus niet zo:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\nEen zin over het element <span class="code">button</span> met een achtergrondkleur in CSS.\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar zo:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: 'Een zin over het element `<code>button</code>` met een achtergrondkleur in CSS.\n' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Het element ', (0, i.jsx)(n.code, { children: '<code>' }), ' wordt op het moment van schrijven (2025) nog niet ondersteund door alle hulpsoftware. Dat betekent niet dat bezoekers die bijvoorbeeld een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken de inhoud van het element niet horen, alleen dat er op dit moment niet wordt aangegeven dat het om een ', (0, i.jsx)(n.code, { children: 'code' }), ' element gaat.'] })] });
   }
   var g = t(11444),
    u = t(82209),
    m = t(44293),
    h = t(51604),
    p = t(4107),
    w = t(72954),
    f = t(46422),
    j = t(89445),
    x = t(27823);
   const b = [
     { title: 'De Code is niet alleen herkenbaar aan een andere achtergrondkleur.', sc: '1.4.1', status: '', component: p.Ay, tags: ['designer', 'contentmaker', 'developer'] },
     { title: 'De tekst in de Code component heeft voldoende contrast met de achtergrondkleur.', sc: '1.4.3', status: '', component: m.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Wanneer de achtergrondkleur van de Code component anders is dan de default browserkleur, dan heeft deze een kleurcontrast van minimaal 3:1 met de achtergrondkleur van de pagina.', sc: '1.4.11', status: '', component: g.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De Code component is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: w.Ay, tags: ['developer'] },
     { title: 'De Code component komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: x.Ay, tags: ['developer'] },
    ],
    A = [
     {
      title: 'Het juiste HTML-element voor de Code component is toegepast.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je inzoomt naar 200% blijft alle tekst leesbaar.', sc: '1.4.4', status: '', component: h.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: u.Ay, tags: ['developer'] },
     { title: 'De Code component is standaard niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: f.Ay, tags: ['developer'] },
     { title: 'De Code component komt standaard niet voor in de focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: j.Ay, tags: ['developer'] },
    ];
   var k = t(21530),
    v = t(46447),
    y = t(56421),
    C = t(40889),
    T = t(59778),
    R = t(21034),
    G = t(30400),
    S = t(70903),
    N = t(51582);
   function D(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'gebruik-code', children: 'Gebruik Code' }) }), '\n', (0, i.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, i.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-css', children: '@nl-design-system-candidate/code-css' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.code, { children: 'nl-code' }), ' class name op een ', (0, i.jsx)(n.code, { children: 'code' }), ' element:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<code dir="ltr" translate="no" class="nl-code"> import { Code } from \'@nl-design-system-candidate/code-react\'; </code>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-css\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, i.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-css/dist/code.css" />\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/code-css/code.css";\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, i.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-react', children: '@nl-design-system-candidate/code-react' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/code-react\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-jsx', children: 'import { Code } from "@nl-design-system-candidate/code-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <Code>import {Code} from \'@nl-design-system-candidate/code-react\';</Code>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function F(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(D, { ...e }) }) : D(e);
   }
   var L = t(6610);
   const W = { title: 'Code', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Code', pagination_label: 'Code', description: 'Computercode die onderdeel is van lopende tekst.', issue_number: 326, slug: '/code', keywords: ['actie', 'action', 'code', 'codeblock', 'code block', 'code markering', 'code fences', 'code snippet', 'code voorbeeld', 'coded language', 'codetaal', 'css', 'example', 'html', 'java', 'inline code', 'mono', 'monotype', 'monospace', 'plaintext', 'pre', 'samp', 'source code', 'src', 'voorbeeld'] },
    H = void 0,
    _ = {},
    z = 'Code',
    P = 'Computercode die onderdeel is van lopende tekst.',
    B = 326,
    I = a.find((e) => e.number === B),
    M = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...c.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function E(e) {
    const n = { a: 'a', admonition: 'admonition', h2: 'h2', h3: 'h3', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, i.jsx)(R.Fc, { component: I, headingLevel: 1, description: P }), '\n', (0, i.jsx)(T.e, { component: I }), '\n', (0, i.jsx)(n.admonition, { title: 'Tip', type: 'tip', children: (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.a, { href: '/code-block/', children: 'Code Block' }), ' component als de code meerdere regels beslaat.'] }) }), '\n', (0, i.jsx)(k.Zp, { className: 'ma-implementation-card', children: (0, i.jsxs)(k.Wu, { children: [(0, i.jsx)(y.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, i.jsxs)(v.dk, { children: [(0, i.jsxs)(v.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=2-4', children: [(0, i.jsx)(C.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, i.jsxs)(v.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=2-4', children: [(0, i.jsx)(C.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, i.jsx)(y.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, i.jsxs)(v.dk, { children: [(0, i.jsxs)(v.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-code--documentatie', children: [(0, i.jsx)(C.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, i.jsxs)(v.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/code--documentatie', children: [(0, i.jsx)(C.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, i.jsx)(y.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, i.jsxs)(v.dk, { children: [(0, i.jsxs)(v.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-css', children: [(0, i.jsx)(C.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-css'] }), (0, i.jsxs)(v.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-react', children: [(0, i.jsx)(C.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-react'] }), (0, i.jsxs)(v.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/code-tokens', children: [(0, i.jsx)(C.r, { brand: 'npm' }), ' @nl-design-system-candidate/code-tokens'] })] })] }) }), '\n', (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, i.jsx)(c.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(G.b, { headingLevel: '4', children: b.map(({ component: e, ...n }) => (0, i.jsx)(G.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, i.jsx)(o.Ay, {}), '\n', (0, i.jsx)(G.b, { headingLevel: '4', children: A.map(({ component: e, ...n }) => (0, i.jsx)(G.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(N.o, { omitH1: !0, headingLevel: 2, children: (0, i.jsx)(F, {}) }), '\n', (0, i.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, i.jsx)(S.B, { tokens: L }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(R.VK, { component: I, headingLevel: 3 }), '\n', (0, i.jsx)(R.$9, { component: I, headingLevel: 2 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(R.mu, { component: I, headingLevel: 3 }), '\n', (0, i.jsx)(R.K_, { component: I })] });
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(E, { ...e }) }) : E(e);
   }
  },
  59778(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var s = t(51582),
    i = t(30758),
    r = t(32385),
    a = t(86070);
   const o = ({ component: e }) => {
    if (globalThis.isAstro) return null;
    const { title: n } = e,
     o = (0, r.fX)(n),
     l = i.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, a.jsx)(i.Suspense, { fallback: null, children: (0, a.jsx)(s.o, { omitH1: !0, headingLevel: 1, children: (0, a.jsx)(l, {}) }) });
   };
  },
  70348(e, n, t) {
   'use strict';
   t.d(n, { K: () => c, n: () => l });
   var s = t(13526),
    i = t(30758),
    r = t(96345),
    a = t(37168),
    o = t(86070);
   const l = (0, i.forwardRef)(({ as: e, className: n, children: t, ...i }, r) => {
     const a = e || 'div',
      l = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, o.jsx)(a, { ref: r, className: l, ...i, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: i, headingLevel: l, headingApperance: c, ...d }) => {
     const g = (0, s.A)('utrecht-accordion__section', e),
      u = (0, s.A)('utrecht-accordion__panel', n);
     return (0, o.jsxs)('details', { className: g, ...d, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(r.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [i && (0, o.jsx)(a.D, { level: l, appearance: c, children: i }), t] })] }) }), (0, o.jsx)('div', { className: u, children: d.children })] });
    };
  },
  70561(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var s = t(86070),
    i = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
  },
  70903(e, n, t) {
   'use strict';
   t.d(n, { B: () => N });
   var s = t(96547),
    i = t(38295),
    r = t(32385),
    a = t(46447),
    o = t(68148),
    l = t(9016),
    c = t(91635),
    d = t(30734),
    g = t(4603),
    u = t(29181),
    m = t(86070);
   function h({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, m.jsxs)(a.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await d.Ay.format(n, { parser: t, plugins: [o.A, l.Ay, c.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, m.jsx)(u.In, { children: (0, m.jsx)(g.A, {}) })],
       })
     : null;
   }
   var p = t(43864),
    w = t(35193),
    f = t(82999),
    j = t(13088),
    x = t(91525),
    b = t(24214),
    A = t(92081),
    k = t(1375),
    v = t(73563),
    y = t(23436),
    C = t(79532),
    T = t(30758);
   const R = { boxShadow: p.A, color: w.A, cursor: f.A, dimension: j.A, fontFamily: x.A, fontFamilies: x.A, fontSize: b.A, fontSizes: b.A, fontWeight: A.A, fontWeights: A.A, lineHeight: k.A, lineHeights: k.A, number: v.A, other: y.A, textDecoration: C.A },
    G = ({ type: e }) => {
     const n = Object.hasOwn(R, e) ? e : 'other';
     return (0, m.jsx)(u.In, { children: (0, T.createElement)(R[n]) });
    };
   var S = t(76223);
   function N({ tokens: e }) {
    const n = (0, r.kD)(e),
     t = (0, S.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     o = (0, r.GT)(n),
     l = o.map((e) => (0, r.B_)(e) + ': ;').join('\n'),
     c = JSON.stringify(t);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsxs)(a.XI, {
       children: [
        (0, m.jsx)(a.A0, { children: (0, m.jsxs)(a.Hj, { children: [(0, m.jsx)(a.M_, { children: 'name' }), (0, m.jsx)(a.M_, { children: 'type' })] }) }),
        (0, m.jsx)(a.BF, {
         children: o.map((n) => {
          const t = (0, r.o_)(n),
           o = (0, r.eQ)(e, n).$type;
          return (0, m.jsxs)(a.Hj, { children: [(0, m.jsx)(a.nA, { children: (0, m.jsx)(s.C, { children: (0, m.jsx)(a.kf, { children: t }) }) }), (0, m.jsx)(a.nA, { children: (0, m.jsxs)(i.K, { children: [(0, m.jsx)(G, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, m.jsxs)(a.e2, { children: [(0, m.jsx)(h, { content: c, language: 'json', children: 'Kopieer als JSON' }), (0, m.jsx)(h, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  72954(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, s.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  82209(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, s.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, s.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, s.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, s.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, s.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, s.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, s.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, s.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, s.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, s.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, s.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  82839(e, n, t) {
   var s = { './button-docs/docs/aliases.md': [62620, 62620], './code-block-docs/docs/aliases.md': [23021, 23021], './code-docs/docs/aliases.md': [39021, 39021], './color-sample-docs/docs/aliases.md': [24518, 24518], './data-badge-docs/docs/aliases.md': [99976, 99976], './heading-1-docs/docs/aliases.md': [16918, 16918], './heading-2-docs/docs/aliases.md': [5138, 5138], './heading-3-docs/docs/aliases.md': [70342, 70342], './heading-4-docs/docs/aliases.md': [67426, 67426], './heading-docs/docs/aliases.md': [5895, 5895], './link-docs/docs/aliases.md': [56551, 56551], './mark-docs/docs/aliases.md': [18569, 18569], './number-badge-docs/docs/aliases.md': [57569, 57569], './paragraph-docs/docs/aliases.md': [26183, 26183], './skip-link-docs/docs/aliases.md': [39927, 39927] };
   function i(e) {
    if (!t.o(s, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = s[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   ((i.keys = () => Object.keys(s)), (i.id = 82839), (e.exports = i));
  },
  85162(e, n, t) {
   'use strict';
   t.d(n, { s: () => l });
   var s = t(29181),
    i = t(13526),
    r = t(32385),
    a = t(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, r.fX)(n),
      c = o[e] ?? e;
     return (0, a.jsxs)(s.WK, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('ma-component-illustration', `ma-component-illustration--${l}`), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, r.fX)(c)}.svg#component-illustration` })] }), (0, a.jsx)(s.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  89445(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var s = t(86070),
    i = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  94309(e, n, t) {
   'use strict';
   t.d(n, { F: () => a, N: () => o });
   var s = t(13526),
    i = t(32385),
    r = t(86070);
   const a = ({ children: e, ...n }) => {
     const { to: t, href: s, ...a } = n;
     let o = t || s;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((a.target = '_blank'), (a.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: o, ...a, children: e }));
    },
    o = ({ className: e, ...n }) => (0, r.jsx)(a, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
