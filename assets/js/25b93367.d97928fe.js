(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44480],
 {
  8870(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Je kunt de link focussen met de tabtoets (en in omgekeerde richting met shift + tabtoets) en activeren met de entertoets. Als je gebruik maakt van het ', (0, i.jsx)(n.code, { children: 'a' }), '-element hoef je hier niets aan aan te passen.'] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  10645(e, n, t) {
   'use strict';
   t.d(n, { p: () => a });
   var i = t(13526),
    s = t(86070);
   const a = ({ children: e, className: n, level: t = 1, suffix: a, ...r }) => (0, s.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  17236(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var i = t(86070),
    s = t(18439);
   const a = [];
   function r(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  21034(e, n, t) {
   'use strict';
   t.d(n, { VK: () => f, $9: () => w, mu: () => x, Fc: () => b, K_: () => v });
   var i = t(29181),
    s = t(13526),
    a = t(40889),
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
    m = t(58876),
    h = t(32385);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = t(70348),
    k = t(85162);
   const f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      a = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(j.n, { children: a.map((t) => (0, d.jsx)(j.K, { className: (0, s.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, h.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
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
            s = t?.value,
            o = (0, h.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
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
                    return { children: n.desciption, icon: (0, d.jsx)(a.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
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
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [s ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: s && (0, d.jsx)(g.D, { state: s }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(s) && (0, d.jsx)(k.s, { relayStep: s, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    v = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21389(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  21530(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => r, Wu: () => o, Zp: () => l });
   var i = t(46447),
    s = t(13526),
    a = t(86070);
   const r = ({ background: e, children: n, className: t, ...i }) => (0, a.jsx)('div', { className: (0, s.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    o = (e) => (0, a.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: r = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === r ? (0, a.jsx)('article', { ...e }) : 'section' === r ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(d, { className: (0, s.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, a.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, a.jsx)('div', { className: (0, s.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  26012(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, i.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, i.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, i.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  30400(e, n, t) {
   'use strict';
   t.d(n, { b: () => j, e: () => p });
   var i = t(30758),
    s = t(94309),
    a = t(44715),
    r = t(29181),
    o = t(56561),
    l = t(50805),
    d = t(70348),
    c = t(37168),
    g = t(86070);
   const u = (e) => (0, g.jsx)(c.D, { ...e });
   var m = t(6360),
    h = t(13526);
   const p = ({ title: e, sc: n, children: t, tags: o }) => {
     const l = (0, i.useId)(),
      c = [...o];
     if (n) {
      c.push(n);
      const e = a.pI.get(n);
      e?.conformance && c.push(`Niveau ${e.conformance}`);
     }
     return (0, g.jsx)('div', {
      role: 'listitem',
      'data-tags': o.join(','),
      className: (0, h.A)(
       'ma-new-checklist__item',
       o.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, g.jsx)(d.K, {
       label: (0, g.jsx)('span', { className: 'ma-new-checklist__title', id: l, children: e }),
       children: (0, g.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, g.jsx)('div', { className: 'ma-flow', children: t }),
         (0, g.jsx)(r._Q, {
          className: 'ma-new-checklist__badge-list',
          children: c.map((e, n) => {
           let t = (0, g.jsx)(m.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const i = a.pI.get(e);
            t = (0, g.jsx)(s.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${i.sc} ${i.nl.title}`, style: { lineHeight: 1 }, children: (0, g.jsx)(m.KE, { children: `WCAG ${e}` }) }, n);
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
     const t = i.useRef(null),
      [s, a] = (0, i.useState)([]),
      [c, m] = (0, i.useState)([]),
      [h, p] = (0, i.useState)([]),
      [j, k] = (0, i.useState)(0),
      [f, x] = (0, i.useState)(0),
      w = (e) => h.includes(e),
      b = (0, i.useId)();
     return (
      i.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        i = Array.from(e.querySelectorAll('[data-tags]'));
       (i.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        a(i),
        m([...n]),
        k(i.length),
        p([...n]));
      }, []),
      i.useEffect(() => {
       const e = h,
        n = [],
        t = [];
       (s.forEach((i) => {
        (i.dataset.tags?.split(',') || []).some((n) => e.includes(n)) ? n.push(i) : t.push(i);
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
          (0, g.jsxs)(r.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': b,
           children: [
            (0, g.jsx)(u, { level: n, id: b, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(c).map((e) =>
             (0, g.jsxs)(
              r.zB,
              {
               type: 'checkbox',
               children: [
                (0, g.jsx)(r.Sc, {
                 checked: w(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !w(e)) ? [...h, e] : h.filter((n) => n !== e);
                   p(t);
                  })(e),
                }),
                (0, g.jsx)(r.lR, { htmlFor: e, children: e }),
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
                  p(c);
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
   t.d(n, { bo: () => s, KF: () => u, mJ: () => p, VZ: () => A, cR: () => v, Pv: () => j, qZ: () => r, kD: () => w, QQ: () => C, B2: () => m, Pc: () => l, f4: () => o, GT: () => b, fX: () => a, eQ: () => x, B_: () => f, o_: () => k });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
       .map(({ name: i, id: s, value: a }) => {
        const r = /^(.+) URL/.exec(i)[1],
         o = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: i, id: s, value: a, description: o };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    k = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function w(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? w(e[t], [...n, t]) : []));
   }
   function b(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const v = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = i.sP?.node;
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
  32712(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Elementen met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  32960(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De zichtbare naam van de link is gelijk aan, of begint met de ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, i.jsx)(n.code, { children: 'a' }), '-element te gebruiken met daarin tekst.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een link. Een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de link.'] }), '\n', (0, i.jsx)(n.p, { children: 'Dus niet:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Maar:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<a href="login-url">Log in met DigiD</a>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  33691(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var i = t(86070),
    s = t(18439);
   const a = [];
   function r(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  38903(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => O, component: () => Z, contentTitle: () => E, default: () => J, description: () => $, frontMatter: () => M, issueNumber: () => U, metadata: () => i, title: () => V, toc: () => K }));
   const i = JSON.parse('{"id":"componenten/link/index","title":"Link","description":"Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.","source":"@site/docs/componenten/link/index.mdx","sourceDirName":"componenten/link","slug":"/link","permalink":"/link","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/link/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Link","pagination_label":"Link","description":"Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.","issue_number":118,"slug":"/link","keywords":["a","a tag","anchor","anchor element","anchor link","back link","button as link","call to action link","cta link","externe link","external link","href","hyper link","hyperlink","inline link","koppeling","label","link","link button","links","navigatie","navigation","navlink","ordinal","standalone","standalone link","text link","URL","url","verwijzing","web address"]},"sidebar":"componenten","previous":{"title":"Language Navigation","permalink":"/language-navigation"},"next":{"title":"Link List","permalink":"/link-list"}}');
   var s = t(86070),
    a = t(18439),
    r = t(82062),
    o = t(17236),
    l = t(70561),
    d = t(33691);
   t(97105);
   function c(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Als het label van de link alleen uit een icoon of logo bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de link een naam heeft die duidelijk maakt waar de link voor dient.' }), '\n', (0, s.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor de afbeelding is niet nodig als er naast de afbeelding ook tekst in de link staat die uitlegt waar de link naartoe gaat. Een ', (0, s.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, s.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, s.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, s.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon of logo te tonen, hou dan rekening met het volgende.' }), '\n', (0, s.jsxs)(n.p, { children: ['Een ', (0, s.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de toegankelijke naam van de link:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<a href="url">\n  <img src="ideal.svg" alt="iDeal" />\n</a>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Maar duidelijker is:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<a href="url"> Betaal met iDeal <img src="ideal.svg" alt="" /> </a>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   var g = t(90581),
    u = t(82209);
   function m(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Onderstreep links in een lopende tekst, zodat bezoekers makkelijk kunnen zien dat er een link in de tekst staat.' }), '\n', (0, s.jsx)(n.p, { children: 'Een andere manier om links te onderscheiden van de lopende tekst is door een andere tekstkleur te gebruiken. Deze kleur moet dan wel een contrastratio van minimaal 3:1 hebben ten opzichte van de lopende tekst, maar liever hoger. Hou er rekening mee dat alle tekst altijd voldoende contrast moet hebben met de achtergrondkleur van de pagina, ook bij muishover en toetsenbordfocus.' }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'Gebruik kleur met een doel' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   var h = t(44293),
    p = t(51604),
    j = t(8870),
    k = t(81500),
    f = t(26012),
    x = t(32960),
    w = t(21389),
    b = t(76703),
    v = t(32712),
    A = t(46047),
    y = t(50348),
    C = t(81529),
    T = t(73449);
   const R = [
     {
      title: 'Als het label van de Link uit een icoon bestaat, dan heeft deze een goed tekstalternatief.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     {
      title: 'Links in een lopende tekst zijn duidelijk zichtbaar.',
      sc: '1.4.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'De contrastverhouding van de tekstkleur van de Link met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: h.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Het label van de Link bestaat uit gewone tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: A.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als het zichtbare label van de Link alleen een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.', sc: '1.4.11', status: '', component: g.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De linktekst van de Link vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).', sc: '2.4.4', status: '', component: T.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als de Link de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud', sc: '2.4.11', status: '', component: C.Ay, tags: ['developer', 'designer'] },
     { title: 'Als de tekst van de Link in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: b.Ay, tags: ['developer', 'contentmaker'] },
     { title: 'Links met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label', sc: '3.2.4', status: '', component: v.Ay, tags: ['developer', 'designer', 'contentmaker'] },
    ],
    L = [
     { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: p.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: u.Ay, tags: ['developer'] },
     { title: 'Je kunt de Link focussen met de tabtoets en activeren met de entertoets.', sc: '2.1.1', status: '', component: j.Ay, tags: ['developer'] },
     { title: 'De functionaliteit van de Link veroorzaakt geen toetsenbordval.', sc: '2.1.2', status: '', component: y.Ay, tags: ['developer'] },
     { title: 'Wanneer de Link de toetsenbordfocus krijgt is de focus zichtbaar.', sc: '2.4.7', status: '', component: k.Ay, tags: ['developer', 'designer'] },
     { title: 'Als de gebruiker de Link indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.', sc: '2.5.2', status: '', component: f.Ay, tags: ['developer'] },
     { title: 'De zichtbare naam van de Link komt voor in de toegankelijke naam.', sc: '2.5.3', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'De Link heeft een aanklikbaar gedeelte van ten minste 44 bij 44 pixels.', sc: '2.5.5', status: '', component: w.Ay, tags: ['developer'] },
    ];
   var G = t(21530),
    D = t(46447),
    N = t(56421),
    S = t(40889),
    z = t(59778),
    F = t(21034),
    W = t(30400),
    H = t(70903),
    _ = t(51582);
   function P(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'gebruik-link', children: 'Gebruik Link' }) }), '\n', (0, s.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, s.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-css', children: '@nl-design-system-candidate/link-css' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik de ', (0, s.jsx)(n.code, { children: 'nl-link' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'a' }), ' element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<a href="https://example.com" class="nl-link">example.com</a>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-css\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/link-css@1/dist/link.css" />\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, s.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/link-css/dist/link.css" />\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/link-css/link.css";\n' }) }), '\n', (0, s.jsx)(n.h3, { id: 'link-om-een-image-of-andere-inline-box-componenten', children: 'Link om een Image of andere inline-box componenten' }), '\n', (0, s.jsxs)(n.p, { children: ['Om te zorgen dat de states van een Link component goed werken als een link om een inline-box element zoals een Image is gezet gebruik je de ', (0, s.jsx)(n.code, { children: 'nl-link' }), ' class name in combinatie met ', (0, s.jsx)(n.code, { children: 'nl-link--inline-box' }), ' class name.'] }), '\n', (0, s.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, s.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-react', children: '@nl-design-system-candidate/link-react' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/link-react\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-jsx', children: 'import { Link } from "@nl-design-system-candidate/link-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <p>\n          <Link href="https://example.com">example.com</Link>\n        </p>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function B(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(P, { ...e }) }) : P(e);
   }
   var I = t(86334);
   const M = { title: 'Link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link', pagination_label: 'Link', description: 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.', issue_number: 118, slug: '/link', keywords: ['a', 'a tag', 'anchor', 'anchor element', 'anchor link', 'back link', 'button as link', 'call to action link', 'cta link', 'externe link', 'external link', 'href', 'hyper link', 'hyperlink', 'inline link', 'koppeling', 'label', 'link', 'link button', 'links', 'navigatie', 'navigation', 'navlink', 'ordinal', 'standalone', 'standalone link', 'text link', 'URL', 'url', 'verwijzing', 'web address'] },
    E = void 0,
    O = {},
    V = 'Link',
    $ = 'Een verwijzing om een externe bron of bestand te openen of te navigeren binnen dezelfde pagina of website.',
    U = 118,
    Z = r.find((e) => e.number === U),
    K = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'Link om een Image of andere inline-box componenten', id: 'link-om-een-image-of-andere-inline-box-componenten', level: 3 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function X(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, s.jsx)(F.Fc, { component: Z, headingLevel: 1, description: $ }), '\n', (0, s.jsx)(z.e, { component: Z }), '\n', (0, s.jsx)(G.Zp, { className: 'ma-implementation-card', children: (0, s.jsxs)(G.Wu, { children: [(0, s.jsx)(N.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, s.jsxs)(D.dk, { children: [(0, s.jsxs)(D.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1056', children: [(0, s.jsx)(S.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, s.jsxs)(D.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1056', children: [(0, s.jsx)(S.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, s.jsx)(N.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, s.jsxs)(D.dk, { children: [(0, s.jsxs)(D.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-link--documentatie', children: [(0, s.jsx)(S.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, s.jsxs)(D.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/link--documentatie', children: [(0, s.jsx)(S.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, s.jsx)(N.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, s.jsxs)(D.dk, { children: [(0, s.jsxs)(D.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-css', children: [(0, s.jsx)(S.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-css'] }), (0, s.jsxs)(D.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-react', children: [(0, s.jsx)(S.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-react'] }), (0, s.jsxs)(D.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/link-tokens', children: [(0, s.jsx)(S.r, { brand: 'npm' }), ' @nl-design-system-candidate/link-tokens'] })] })] }) }), '\n', (0, s.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, s.jsx)(l.Ay, {}), '\n', (0, s.jsx)(W.b, { headingLevel: '4', children: R.map(({ component: e, ...n }) => (0, s.jsx)(W.e, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, s.jsx)(o.Ay, {}), '\n', (0, s.jsx)(W.b, { headingLevel: '4', children: L.map(({ component: e, ...n }) => (0, s.jsx)(W.e, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(_.o, { omitH1: !0, headingLevel: 2, children: (0, s.jsx)(B, {}) }), '\n', (0, s.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, s.jsx)(H.B, { tokens: I }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(F.VK, { component: Z, headingLevel: 3 }), '\n', (0, s.jsx)(F.$9, { component: Z, headingLevel: 2 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(F.mu, { component: Z, headingLevel: 3 }), '\n', (0, s.jsx)(F.K_, { component: Z })] });
   }
   function J(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(X, { ...e }) }) : X(e);
   }
  },
  39569(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var i = t(46447),
    s = t(13526),
    a = t(32385),
    r = t(86070);
   const o = ({ state: e }) => {
    const n = (0, a.fX)(e);
    return (0, r.jsx)(i.KE, { className: (0, s.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   'use strict';
   t.d(n, { r: () => g });
   var i = t(29181),
    s = t(74172),
    a = t(15089),
    r = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(a.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  44293(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  44715(e, n, t) {
   'use strict';
   t.d(n, { NO: () => a, pI: () => r });
   const i = [
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
    s = (new Map(i.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    a = [...i.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !s.find((n) => n.sc === e)),
    r = new Map(a.map((e) => [e.sc, e]));
  },
  45186(e, n, t) {
   'use strict';
   t.d(n, { c: () => s });
   var i = t(30758);
   function s() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  46047(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var i = t(86070),
    s = t(18439);
   const a = [];
   function r(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  50348(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var i = t(86070),
    s = t(18439);
   const a = [];
   function r(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51582(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var i = t(18439),
    s = t(46447),
    a = t(86070);
   const r = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + s;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, a.jsx)('img', { ...t, src: r(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: r = {} }) => (0, a.jsx)(i.x, { components: { ...d(n, t), ...l(s), ...r }, children: e });
  },
  51604(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  59778(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var i = t(51582),
    s = t(30758),
    a = t(32385),
    r = t(86070);
   const o = ({ component: e }) => {
    if (globalThis.isAstro) return null;
    const { title: n } = e,
     o = (0, a.fX)(n),
     l = s.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, r.jsx)(s.Suspense, { fallback: null, children: (0, r.jsx)(i.o, { omitH1: !0, headingLevel: 1, children: (0, r.jsx)(l, {}) }) });
   };
  },
  70348(e, n, t) {
   'use strict';
   t.d(n, { K: () => d, n: () => l });
   var i = t(13526),
    s = t(30758),
    a = t(96345),
    r = t(37168),
    o = t(86070);
   const l = (0, s.forwardRef)(({ as: e, className: n, children: t, ...s }, a) => {
     const r = e || 'div',
      l = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, o.jsx)(r, { ref: a, className: l, ...s, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: s, headingLevel: l, headingApperance: d, ...c }) => {
     const g = (0, i.A)('utrecht-accordion__section', e),
      u = (0, i.A)('utrecht-accordion__panel', n);
     return (0, o.jsxs)('details', { className: g, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(a.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [s && (0, o.jsx)(r.D, { level: l, appearance: d, children: s }), t] })] }) }), (0, o.jsx)('div', { className: u, children: c.children })] });
    };
  },
  70561(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var i = t(86070),
    s = t(18439);
   const a = [];
   function r(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  70903(e, n, t) {
   'use strict';
   t.d(n, { B: () => D });
   var i = t(96547),
    s = t(38295),
    a = t(32385),
    r = t(46447),
    o = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    g = t(4603),
    u = t(29181),
    m = t(86070);
   function h({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, m.jsxs)(r.$n, {
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
        children: [e, (0, m.jsx)(u.In, { children: (0, m.jsx)(g.A, {}) })],
       })
     : null;
   }
   var p = t(43864),
    j = t(35193),
    k = t(82999),
    f = t(13088),
    x = t(91525),
    w = t(24214),
    b = t(92081),
    v = t(1375),
    A = t(73563),
    y = t(23436),
    C = t(79532),
    T = t(30758);
   const R = { boxShadow: p.A, color: j.A, cursor: k.A, dimension: f.A, fontFamily: x.A, fontFamilies: x.A, fontSize: w.A, fontSizes: w.A, fontWeight: b.A, fontWeights: b.A, lineHeight: v.A, lineHeights: v.A, number: A.A, other: y.A, textDecoration: C.A },
    L = ({ type: e }) => {
     const n = Object.hasOwn(R, e) ? e : 'other';
     return (0, m.jsx)(u.In, { children: (0, T.createElement)(R[n]) });
    };
   var G = t(76223);
   function D({ tokens: e }) {
    const n = (0, a.kD)(e),
     t = (0, G.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     o = (0, a.GT)(n),
     l = o.map((e) => (0, a.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsxs)(r.XI, {
       children: [
        (0, m.jsx)(r.A0, { children: (0, m.jsxs)(r.Hj, { children: [(0, m.jsx)(r.M_, { children: 'name' }), (0, m.jsx)(r.M_, { children: 'type' })] }) }),
        (0, m.jsx)(r.BF, {
         children: o.map((n) => {
          const t = (0, a.o_)(n),
           o = (0, a.eQ)(e, n).$type;
          return (0, m.jsxs)(r.Hj, { children: [(0, m.jsx)(r.nA, { children: (0, m.jsx)(i.C, { children: (0, m.jsx)(r.kf, { children: t }) }) }), (0, m.jsx)(r.nA, { children: (0, m.jsxs)(s.K, { children: [(0, m.jsx)(L, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, m.jsxs)(r.e2, { children: [(0, m.jsx)(h, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, m.jsx)(h, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  73449(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var i = t(86070),
    s = t(18439);
   const a = [];
   function r(e) {
    const n = { p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, i.jsxs)(n.p, { children: ['Wat is een ', (0, i.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wat is het ', (0, i.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wat betekent ', (0, i.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  76703(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  81500(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, i.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  81529(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => a });
   var i = t(86070),
    s = t(18439);
   const a = [];
   function r(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  82209(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  82839(e, n, t) {
   var i = { './button-docs/docs/aliases.md': [62620, 62620], './code-block-docs/docs/aliases.md': [23021, 23021], './code-docs/docs/aliases.md': [39021, 39021], './color-sample-docs/docs/aliases.md': [24518, 24518], './data-badge-docs/docs/aliases.md': [99976, 99976], './heading-1-docs/docs/aliases.md': [16918, 16918], './heading-2-docs/docs/aliases.md': [5138, 5138], './heading-3-docs/docs/aliases.md': [70342, 70342], './heading-4-docs/docs/aliases.md': [67426, 67426], './heading-docs/docs/aliases.md': [5895, 5895], './link-docs/docs/aliases.md': [56551, 56551], './mark-docs/docs/aliases.md': [18569, 18569], './number-badge-docs/docs/aliases.md': [57569, 57569], './paragraph-docs/docs/aliases.md': [26183, 26183], './skip-link-docs/docs/aliases.md': [39927, 39927] };
   function s(e) {
    if (!t.o(i, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = i[e],
     s = n[0];
    return t.e(n[1]).then(() => t(s));
   }
   ((s.keys = () => Object.keys(i)), (s.id = 82839), (e.exports = s));
  },
  85162(e, n, t) {
   'use strict';
   t.d(n, { s: () => l });
   var i = t(29181),
    s = t(13526),
    a = t(32385),
    r = t(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, a.fX)(n),
      d = o[e] ?? e;
     return (0, r.jsxs)(i.WK, { children: [(0, r.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, s.A)('ma-component-illustration', `ma-component-illustration--${l}`), fill: 'none', children: [(0, r.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, r.jsx)('rect', { width: '960', height: '540' }), (0, r.jsx)('rect', { width: '960', height: '540' })] }), (0, r.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, r.jsx)('use', { href: `/svg/componenten_overzicht_${(0, a.fX)(d)}.svg#component-illustration` })] }), (0, r.jsx)(i.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  90581(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => r });
   var i = t(86070),
    s = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als de inhoud van de link niet uit tekst bestaat, maar uit bijvoorbeeld een icoon of logo dan moet het aanklikbare gedeelte goed te onderscheiden zijn. Het contrast tussen een icoon, of kader rond een logo, en de achtergrond moet minimaal 3:1 zijn. Dit is te controleren met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  94309(e, n, t) {
   'use strict';
   t.d(n, { F: () => r, N: () => o });
   var i = t(13526),
    s = t(32385),
    a = t(86070);
   const r = ({ children: e, ...n }) => {
     const { to: t, href: i, ...r } = n;
     let o = t || i;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, s.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, a.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...n }) => (0, a.jsx)(r, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
