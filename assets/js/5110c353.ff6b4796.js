(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45900],
 {
  4087(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  10645(e, n, t) {
   'use strict';
   t.d(n, { p: () => r });
   var i = t(13526),
    s = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...a }) => (0, s.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  16203(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Het label bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij het om een logo gaat, zoals een DigiD-logo.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  17236(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  21034(e, n, t) {
   'use strict';
   t.d(n, { VK: () => f, $9: () => k, mu: () => x, Fc: () => v, K_: () => w });
   var i = t(29181),
    s = t(13526),
    r = t(40889),
    a = t(21530),
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
   var u = t(39569),
    g = t(10645),
    m = t(58876),
    h = t(32385);
   const p = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = t(70348),
    b = t(85162);
   const f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      r = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(j.n, { children: r.map((t) => (0, d.jsx)(j.K, { className: (0, s.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, h.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(a.AC, {
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
            u = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            a.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(a.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || o.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: u
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [s ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && h.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g.p, { level: n, suffix: s && (0, d.jsx)(u.D, { state: s }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(s) && (0, d.jsx)(b.s, { relayStep: s, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    w = ({ component: e }) => {
     const n = (e && p[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21389(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Zorg ervoor dat het element een minimale grootte heeft van 44 bij 44 pixels. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '. Anders kan het element niet goed meegroeien wanneer de gebruiker inzoomt.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Links in zinnen en paragrafen van tekst zijn uitgezonderd. De grootte van het aanwijsgebied is hier afhankelijk van de grootte van de linktekst zelf.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  21530(e, n, t) {
   'use strict';
   t.d(n, { AC: () => d, Fu: () => a, Wu: () => o, Zp: () => l });
   var i = t(46447),
    s = t(13526),
    r = t(86070);
   const a = ({ background: e, children: n, className: t, ...i }) => (0, r.jsx)('div', { className: (0, s.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    o = (e) => (0, r.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === a ? (0, r.jsx)('article', { ...e }) : 'section' === a ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, s.A)('ma-cardgroup__card', o && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, r.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, r.jsx)('div', { className: (0, s.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  22636(e, n, t) {
   'use strict';
   (t.r(n), t.d(n, { assets: () => J, component: () => ee, contentTitle: () => X, default: () => ie, description: () => Q, frontMatter: () => K, issueNumber: () => Y, metadata: () => i, title: () => q, toc: () => ne }));
   const i = JSON.parse('{"id":"componenten/button/index","title":"Button","description":"Biedt de mogelijkheid om een actie uit te voeren.","source":"@site/docs/componenten/button/index.mdx","sourceDirName":"componenten/button","slug":"/button","permalink":"/button","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/button/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Button","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Button","pagination_label":"Button","description":"Biedt de mogelijkheid om een actie uit te voeren.","issue_number":38,"slug":"/button","keywords":["actie","action","action button","activate","aria-expanded","aria-haspopup","aria-pressed","bezig","btn","busy","button","buttons","call to action","click","cta","disabled","icon button","indrukken","klikken","knoop","knop","knopje","knoppen","navigatie knop","press","pressed","send","submit","toggle","toggle button","uitgeschakeld","versturen","verzenden"]},"sidebar":"componenten","previous":{"title":"Breadcrumb Navigation","permalink":"/breadcrumb-navigation"},"next":{"title":"Calendar","permalink":"/calendar"}}');
   var s = t(86070),
    r = t(18439),
    a = t(82062),
    o = t(17236),
    l = t(70561),
    d = t(33691),
    c = t(21530),
    u = t(46447),
    g = t(56421),
    m = t(40889),
    h = t(21034),
    p = t(30400);
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Als het label van een button uit een afbeelding bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de button een naam heeft die duidelijk maakt waar de button voor dient.' }), '\n', (0, s.jsxs)(n.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor het icoon is niet nodig als er tekst in beeld is. Een ', (0, s.jsx)(n.code, { children: 'img' }), ' kan dan een leeg ', (0, s.jsx)(n.code, { children: 'alt' }), '-attribuut krijgen (', (0, s.jsx)(n.code, { children: 'alt=""' }), ').'] }), '\n', (0, s.jsx)(n.p, { children: 'Is het toch gewenst om alleen een icoon te tonen, hou dan rekening met het volgende.' }), '\n', (0, s.jsxs)(n.p, { children: ['Een ', (0, s.jsx)(n.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de naam van de button:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<button>\n  <img src="trashcan.svg" alt="Delete" />\n</button>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Een andere manier is een svg in de button op te nemen, samen met een visueel verborgen tekst die de naam van de button vormt :' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<button>\n  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">\n    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>\n  </svg>\n  <span class="visually-hidden">Delete</span>\n</button>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   function b(e) {
    const n = { code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Als de button in relatie staat tot andere componenten, zoals een menu of een dialog, is deze informatie ook beschikbaar voor bezoekers die gebruik maken van hulpsoftware.' }), '\n', (0, s.jsxs)(n.p, { children: ['Dit doe je door het ', (0, s.jsx)(n.code, { children: 'aria-haspopup' }), ' attribuut te gebruiken en in te stellen als ', (0, s.jsx)(n.code, { children: '"menu"' }), ', ', (0, s.jsx)(n.code, { children: '"listbox"' }), ', ', (0, s.jsx)(n.code, { children: '"tree"' }), ', ', (0, s.jsx)(n.code, { children: '"grid"' }), ', ', (0, s.jsx)(n.code, { children: '"dialog"' }), ' of ', (0, s.jsx)(n.code, { children: '"true"' }), '. Geef daarnaast de relatie aan met ', (0, s.jsx)(n.code, { children: 'aria-controls' }), '. Als waarde stel je daar \xe9\xe9n of meerdere ', (0, s.jsx)(n.code, { children: 'id' }), "'s in van de specifieke onderdelen die worden aangestuurd door de button."] })] });
   }
   function f(e) {
    const n = { code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Als de button in relatie staat tot andere componenten, zoals een menu of een dialog, is het mogelijk deze informatie beschikbaar te maken voor bezoekers die gebruik maken van hulpsoftware.' }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt het ', (0, s.jsx)(n.code, { children: 'aria-haspopup' }), '-attribuut gebruiken en instellen als ', (0, s.jsx)(n.code, { children: '"menu"' }), ', ', (0, s.jsx)(n.code, { children: '"listbox"' }), ', ', (0, s.jsx)(n.code, { children: '"tree"' }), ', ', (0, s.jsx)(n.code, { children: '"grid"' }), ', ', (0, s.jsx)(n.code, { children: '"dialog"' }), ' of ', (0, s.jsx)(n.code, { children: '"true"' }), '. Je kunt daarnaast de relatie aangeven met ', (0, s.jsx)(n.code, { children: 'aria-controls' }), '. Als waarde stel je daar \xe9\xe9n of meerdere ', (0, s.jsx)(n.code, { children: 'id' }), "'s in van de specifieke onderdelen die worden aangestuurd door de button."] })] });
   }
   function x(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ['Als het label van het element niet uit tekst bestaat maar uit bijvoorbeeld een icoon (zoals bij een zoekknop met een vergrootglas), dan is het contrast tussen het icoon en de achtergrond minimaal 3:1. Dit is te controleren met de ', (0, s.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   var k = t(82209),
    v = t(44293),
    w = t(51604),
    A = t(16203),
    y = t(22797);
   function T(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function C(e) {
    const n = { code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Zorg ervoor dat een element dat de toetsenbordfocus heeft volledig zichtbaar is en niet bedekt is door andere inhoud.' }), '\n', (0, s.jsx)(n.p, { children: 'Dit is belangrijk voor gebruikers van alleen een toetsenbord of van spraakbesturing.' }), '\n', (0, s.jsxs)(n.p, { children: ['Hou er rekening mee dat ', (0, s.jsx)(n.code, { children: 'overflow: auto' }), ' en ', (0, s.jsx)(n.code, { children: 'overflow: hidden' }), ' er voor kunnen zorgen dat de focusindicator niet volledig zichtbaar meer is. Maak bijvoorbeeld gebruik van een negatieve ', (0, s.jsx)(n.code, { children: 'outline-offset' }), ' met de dikte van de focusindicator of ', (0, s.jsx)(n.code, { children: 'padding' }), ' met de dikte van de focusindicator om dit te voorkomen.'] })] });
   }
   var R = t(35941);
   function D(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'De focusvolgorde op de pagina en na het activeren van een Button moet logisch zijn. Zorg dat het voorspelbaar is waar de toetsenbordfocus heen gaat na het activeren van een knop.' }), '\n', (0, s.jsx)(n.p, { children: "Over het algemeen geldt: wanneer een button nieuwe content opent, zoals een dialoogvenster of een menu, verplaats je de toetsenbordfocus naar een logische plek in de nieuwe content. Bijvoorbeeld: Na het openen van een 'Menu' button verplaatst de toetsenbordfocus naar het eerste menu-item. Nadat de bezoeker de nieuwe content weer heeft gesloten verplaatst de toetsenbordfocus zich weer terug naar de 'Menu' button." }), '\n', (0, s.jsxs)(n.p, { children: ['Plaats interactieve elementen op een logische plek in de DOM en vermijd het gebruik van ', (0, s.jsx)(n.code, { children: 'tabindex="1"' }), ' en hoger. Hiermee pas je de natuurlijke focusvolgorde op de pagina aan, waardoor fouten in de focusvolgorde kunnen ontstaan.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function G(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient. Een label kan bestaan uit tekst of uit een icoon. Als je een icoon gebruikt, heeft het de voorkeur om ook een beschrijvende tekst in de button op te nemen.' }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst/', children: 'Duidelijke buttontekst die beschrijft wat de button doet' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   var z = t(81500),
    N = t(26012);
   function S(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.' }), '\n', (0, s.jsxs)(n.p, { children: ['Dit is het eenvoudigst te realiseren door een ', (0, s.jsx)(n.code, { children: 'button' }), '-element te gebruiken met daarin tekst:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<button>Ga naar stap 2</button>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Pas op met het gebruik van ', (0, s.jsx)(n.code, { children: 'aria-label' }), ' om een naam te geven aan een button. Een ', (0, s.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de tekstinhoud van een button. Zodoende kan een button een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de button. Als je echt een ', (0, s.jsx)(n.code, { children: 'aria-label' }), ' nodig hebt, zorg dan dat de waarde van het ', (0, s.jsx)(n.code, { children: 'aria-label' }), ' begint met de exacte tekst die zichtbaar is in de button.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   var F = t(21389),
    L = t(76703),
    H = t(32712);
   function W(e) {
    const n = { a: 'a', code: 'code', em: 'em', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ['De button heeft een rol van ', (0, s.jsx)(n.code, { children: 'button' }), ' en een toegankelijke naam die duidelijk maakt waar de button voor dient. Ook is de toestand (', (0, s.jsx)(n.em, { children: 'state' }), ') duidelijk en door de gebruiker te veranderen met hulpsoftware.'] }), '\n', (0, s.jsxs)(n.p, { children: ['HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een ', (0, s.jsx)(n.code, { children: 'button' }), '-element als je een button nodig hebt:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<button>Menu</button>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Het is mogelijk om met ARIA een ', (0, s.jsx)(n.code, { children: 'role=button' }), ' toe te voegen aan een ander element dan een ', (0, s.jsx)(n.code, { children: 'button' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc.'] }), '\n', (0, s.jsxs)(n.p, { children: ['ARIA is wel goed te gebruiken als je de ', (0, s.jsx)(n.em, { children: 'state' }), ' moet aangeven. Hiervoor bestaat geen HTML-attribuut. Bijvoorbeeld bij een uitgeklapte menuknop:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<button aria-expanded="true">Menu</button>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Let erop dat je hiervoor JavaScript nodig hebt en zorg ervoor dat ', (0, s.jsx)(n.code, { children: 'aria-expanded' }), ' de waarde ', (0, s.jsx)(n.code, { children: 'false' }), ' krijgt wanneer het menu weer is ingeklapt.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Zorg er daarnaast voor dat het ', (0, s.jsx)(n.code, { children: 'type' }), '-attribuut kloppend is bij de rol van de knop, zoals ', (0, s.jsx)(n.code, { children: '"submit"' }), ' voor een verzendknop en ', (0, s.jsx)(n.code, { children: '"reset"' }), ' voor een resetknop.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Vermijd het gebruik van ', (0, s.jsx)(n.code, { children: 'aria-busy' }), ' op interactieve elementen zoals knoppen, bijvoorbeeld om aan te geven dat een formulier bezig is met verzenden. Dit attribuut geeft aan hulpsoftware aan dat veranderingen, zoals in een live-region of tijdens het laden van een pagina, niet moeten worden voorgelezen totdat de waarde weer op ', (0, s.jsx)(n.code, { children: 'false' }), ' staat. Hierdoor worden updates voorgelezen als het proces voltooid is, zodat er geen onvolledige informatie wordt gegeven. Je gebruikt het ', (0, s.jsx)(n.code, { children: 'aria-busy' }), ' attribuut wel op de container waarin de updates worden getoond, niet op de knop om de actie mee uit voeren.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik in plaats daarvan ', (0, s.jsx)(n.code, { children: 'aria-disabled' }), ' met ', (0, s.jsx)(n.code, { children: 'tabindex="0"' }), " op de knop en pas de visuele en toegankelijke naam aan, bijvoorbeeld naar 'Bezig met verzenden'. Gebruik vervolgens ", (0, s.jsx)(n.code, { children: 'role="status"' }), ' of ', (0, s.jsx)(n.code, { children: 'role="alert"' }), ' op de container om statusmeldingen over het resultaat van het verzenden van het formulier aan te geven.'] }), '\n', (0, s.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/', children: 'Toegankelijke succesmeldingen in een formulier' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/bevestigingspagina/succesmelding/', children: 'Duidelijke succesmeldingen in een formulier' }) }), '\n'] })] });
   }
   var _ = t(92604),
    B = t(50348),
    P = t(4087);
   const M = [
     {
      title: 'Als het label van een button uit all\xe9\xe9n een icoon bestaat, dan heeft deze een goed tekstalternatief.',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(j, { ...e }) }) : j(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     {
      title: 'Het is duidelijk of een button in- of uitgeklapt is en/of een relatie heeft met andere componenten.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b(e);
      },
      tags: ['developer'],
     },
     { title: 'De contrastverhouding van de tekstkleur in de button met de achtergrondkleur is hoog genoeg.', sc: '1.4.3', status: '', component: v.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Het label van de button bestaat uit gewone tekst, niet uit een afbeelding van tekst.', sc: '1.4.5', status: '', component: A.Ay, tags: ['designer', 'contentmaker'] },
     {
      title: 'Als het zichtbare label van de button een afbeelding of icoon is, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1.',
      sc: '1.4.11',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     { title: 'De functionaliteit van de button veroorzaakt geen toetsenbordval.', sc: '2.1.2', status: '', component: B.Ay, tags: ['developer'] },
     {
      title: 'De focusvolgorde om bij de button te komen, en de focusvolgorde na het activeren van de button is logisch en voorspelbaar.',
      sc: '2.4.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(D, { ...e }) }) : D(e);
      },
      tags: ['developer'],
     },
     {
      title: 'Het label van de button maakt kort en bondig duidelijk waar de button voor dient.',
      sc: '2.4.6',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(G, { ...e }) }) : G(e);
      },
      tags: ['designer', 'contentmaker'],
     },
     {
      title: 'Als de button de toetsenbordfocus krijgt, is het element niet volledig bedekt door andere inhoud.',
      sc: '2.4.11',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(T, { ...e }) }) : T(e);
      },
      tags: ['designer', 'developer'],
     },
     {
      title: 'Als de button de toetsenbordfocus krijgt, is het element helemaal niet bedekt door andere inhoud.',
      sc: '2.4.12',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(C, { ...e }) }) : C(e);
      },
      tags: ['designer', 'developer'],
     },
     { title: 'De button heeft een goed zichtbare focusindicator.', sc: '2.4.13', status: '', component: R.Ay, tags: ['designer', 'developer'] },
     {
      title: 'De zichtbare naam van de button is gelijk aan de toegankelijke naam.',
      sc: '2.5.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(S, { ...e }) }) : S(e);
      },
      tags: ['developer'],
     },
     { title: 'De button heeft een minimale grootte van 44 bij 44 pixels.', sc: '2.5.5', status: '', component: F.Ay, tags: ['designer', 'developer'] },
     { title: 'Als een buttontekst in een andere taal is dan de taal van de pagina, dan heeft het element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: L.Ay, tags: ['developer', 'contentmaker'] },
     { title: 'De button activeert niet al bij toetsenbordfocus.', sc: '3.2.1', status: '', component: P.Ay, tags: ['developer'] },
     { title: 'Buttons met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.', sc: '3.2.4', status: '', component: H.Ay, tags: ['designer', 'developer'] },
     {
      title: 'De button heeft een toegankelijke naam die duidelijk maakt waar de button voor dient en de staat van de button is beschikbaar.',
      sc: '4.1.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(W, { ...e }) }) : W(e);
      },
      tags: ['designer', 'contentmaker'],
     },
    ],
    I = [
     {
      title: 'Het is mogelijk om relaties met andere componenten aan te geven.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(f, { ...e }) }) : f(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: w.Ay, tags: ['developer'] },
     { title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: k.Ay, tags: ['developer'] },
     { title: 'Je kunt de button focussen met de tabtoets en activeren met de spatiebalk en de entertoets.', sc: '2.1.1', status: '', component: y.Ay, tags: ['developer'] },
     { title: 'Wanneer een button de toetsenbordfocus krijgt is de focus zichtbaar.', sc: '2.4.7', status: '', component: z.Ay, tags: ['developer'] },
     { title: 'Als de gebruiker een button indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.', sc: '2.5.2', status: '', component: N.Ay, tags: ['developer'] },
     { title: 'De button heeft een rol van button en het type is instelbaar.', sc: '4.1.2', status: '', component: _.Ay, tags: ['developer'] },
    ];
   var E = t(51582);
   function O(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'gebruik-button', children: 'Gebruik Button' }) }), '\n', (0, s.jsx)(n.h2, { id: 'css', children: 'CSS' }), '\n', (0, s.jsx)(n.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-css', children: '@nl-design-system-candidate/button-css' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik de ', (0, s.jsx)(n.code, { children: 'nl-button' }), ' class name op een ', (0, s.jsx)(n.code, { children: 'button' }), ' element:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<button class="nl-button">Klik mij</button>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/button-css\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/button-css@1/dist/button.css" />\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, s.jsx)(n.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/button-css/dist/button.css" />\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/button-css/button.css";\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'react', children: 'React' }), '\n', (0, s.jsx)(n.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-react', children: '@nl-design-system-candidate/button-react' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/button-react\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-jsx', children: 'import { Button } from "@nl-design-system-candidate/button-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <div>\n          <Button>Klik mij!</Button>\n        </div>\n      </body>\n    </html>\n  );\n};\n' }) })] });
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(O, { ...e }) }) : O(e);
   }
   var $ = t(59778),
    U = t(70903),
    Z = t(78037);
   const K = { title: 'Button', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Button', pagination_label: 'Button', description: 'Biedt de mogelijkheid om een actie uit te voeren.', issue_number: 38, slug: '/button', keywords: ['actie', 'action', 'action button', 'activate', 'aria-expanded', 'aria-haspopup', 'aria-pressed', 'bezig', 'btn', 'busy', 'button', 'buttons', 'call to action', 'click', 'cta', 'disabled', 'icon button', 'indrukken', 'klikken', 'knoop', 'knop', 'knopje', 'knoppen', 'navigatie knop', 'press', 'pressed', 'send', 'submit', 'toggle', 'toggle button', 'uitgeschakeld', 'versturen', 'verzenden'] },
    X = void 0,
    J = {},
    q = 'Button',
    Q = 'Biedt de mogelijkheid om een actie uit te voeren.',
    Y = 38,
    ee = a.find((e) => e.number === Y),
    ne = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...o.RM, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function te(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', (0, s.jsx)(h.Fc, { component: ee, headingLevel: 1, description: Q }), '\n', (0, s.jsx)($.e, { component: ee }), '\n', (0, s.jsx)(c.Zp, { className: 'ma-implementation-card', children: (0, s.jsxs)(c.Wu, { children: [(0, s.jsx)(g.D, { level: 2, appearance: 'level-4', children: 'Figma' }), (0, s.jsxs)(u.dk, { children: [(0, s.jsxs)(u.Pt, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1138', children: [(0, s.jsx)(m.r, { brand: 'figma' }), 'Figma - Start bibliotheek'] }), (0, s.jsxs)(u.Pt, { href: 'https://www.figma.com/design/0J3EiRpZH3LJ0cx396XLNC/NL-Design-System---Bibliotheek---Voorbeeld?node-id=153-1138', children: [(0, s.jsx)(m.r, { brand: 'figma' }), 'Figma - Voorbeeld bibliotheek'] })] }), (0, s.jsx)(g.D, { level: 2, appearance: 'level-4', children: 'Storybook' }), (0, s.jsxs)(u.dk, { children: [(0, s.jsxs)(u.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/css-button--documentatie', children: [(0, s.jsx)(m.r, { brand: 'storybook' }), 'Storybook - CSS'] }), (0, s.jsxs)(u.Pt, { href: 'https://nl-design-system.github.io/candidate/?path=/docs/button--documentatie', children: [(0, s.jsx)(m.r, { brand: 'storybook' }), 'Storybook - React'] })] }), (0, s.jsx)(g.D, { level: 2, appearance: 'level-4', children: 'npm' }), (0, s.jsxs)(u.dk, { children: [(0, s.jsxs)(u.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-css', children: [(0, s.jsx)(m.r, { brand: 'npm' }), ' @nl-design-system-candidate/button-css'] }), (0, s.jsxs)(u.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-react', children: [(0, s.jsx)(m.r, { brand: 'npm' }), ' @nl-design-system-candidate/button-react'] }), (0, s.jsxs)(u.Pt, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/button-tokens', children: [(0, s.jsx)(m.r, { brand: 'npm' }), ' @nl-design-system-candidate/button-tokens'] })] })] }) }), '\n', (0, s.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, s.jsx)(l.Ay, {}), '\n', (0, s.jsx)(p.b, { headingLevel: '4', children: M.map(({ component: e, ...n }) => (0, s.jsx)(p.e, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, s.jsx)(o.Ay, {}), '\n', (0, s.jsx)(p.b, { headingLevel: '4', children: I.map(({ component: e, ...n }) => (0, s.jsx)(p.e, { ...n, children: (0, s.jsx)(e, {}) })) }), '\n', (0, s.jsx)(E.o, { omitH1: !0, headingLevel: 3, children: (0, s.jsx)(V, {}) }), '\n', (0, s.jsx)(n.h2, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, s.jsx)(U.B, { tokens: Z }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(h.VK, { component: ee, headingLevel: 3 }), '\n', (0, s.jsx)(h.$9, { component: ee, headingLevel: 2 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(h.mu, { component: ee, headingLevel: 3 }), '\n', (0, s.jsx)(h.K_, { component: ee })] });
   }
   function ie(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(te, { ...e }) }) : te(e);
   }
  },
  22797(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Je kunt het element focussen met de tabtoets en activeren met de spacebar en de entertoets.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  26012(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als de gebruiker een interactief element indrukt met een aanwijzer zoals een muis of vinger, is er de mogelijkheid om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik hiervoor het ', (0, i.jsx)(n.code, { children: 'click' }), '-event. Dit is een apparaatonafhankelijke methode. Zo activeert de actie niet als de bezoeker de aanwijzer indrukt, maar pas als de bezoeker de aanwijzer weer loslaat. De bezoeker kan de aanwijzer nog verplaatsen naar buiten het element om de actie weer ongedaan te maken.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Voor knoppen waarbij het essentieel is dat ze activeren bij het indrukken (', (0, i.jsx)(n.code, { children: 'keydown' }), ') geldt een uitzondering. Dit geldt bijvoorbeeld voor knoppen in een ', (0, i.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Virtual_keyboard', children: 'schermtoetsenbord' }), ' en pianotoetsen.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  30400(e, n, t) {
   'use strict';
   t.d(n, { b: () => j, e: () => p });
   var i = t(30758),
    s = t(94309),
    r = t(44715),
    a = t(29181),
    o = t(56561),
    l = t(50805),
    d = t(70348),
    c = t(37168),
    u = t(86070);
   const g = (e) => (0, u.jsx)(c.D, { ...e });
   var m = t(6360),
    h = t(13526);
   const p = ({ title: e, sc: n, children: t, tags: o }) => {
     const l = (0, i.useId)(),
      c = [...o];
     if (n) {
      c.push(n);
      const e = r.pI.get(n);
      e?.conformance && c.push(`Niveau ${e.conformance}`);
     }
     return (0, u.jsx)('div', {
      role: 'listitem',
      'data-tags': o.join(','),
      className: (0, h.A)(
       'ma-new-checklist__item',
       o.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, u.jsx)(d.K, {
       label: (0, u.jsx)('span', { className: 'ma-new-checklist__title', id: l, children: e }),
       children: (0, u.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, u.jsx)('div', { className: 'ma-flow', children: t }),
         (0, u.jsx)(a._Q, {
          className: 'ma-new-checklist__badge-list',
          children: c.map((e, n) => {
           let t = (0, u.jsx)(m.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const i = r.pI.get(e);
            t = (0, u.jsx)(s.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${i.sc} ${i.nl.title}`, style: { lineHeight: 1 }, children: (0, u.jsx)(m.KE, { children: `WCAG ${e}` }) }, n);
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
      [s, r] = (0, i.useState)([]),
      [c, m] = (0, i.useState)([]),
      [h, p] = (0, i.useState)([]),
      [j, b] = (0, i.useState)(0),
      [f, x] = (0, i.useState)(0),
      k = (e) => h.includes(e),
      v = (0, i.useId)();
     return (
      i.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        i = Array.from(e.querySelectorAll('[data-tags]'));
       (i.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        r(i),
        m([...n]),
        b(i.length),
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
      (0, u.jsxs)('div', {
       children: [
        (0, u.jsxs)('div', {
         className: 'ma-filter-block',
         children: [
          (0, u.jsxs)(a.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': v,
           children: [
            (0, u.jsx)(g, { level: n, id: v, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(c).map((e) =>
             (0, u.jsxs)(
              a.zB,
              {
               type: 'checkbox',
               children: [
                (0, u.jsx)(a.Sc, {
                 checked: k(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !k(e)) ? [...h, e] : h.filter((n) => n !== e);
                   p(t);
                  })(e),
                }),
                (0, u.jsx)(a.lR, { htmlFor: e, children: e }),
               ],
              },
              e,
             ),
            ),
           ],
          }),
          (0, u.jsx)('div', {
           children: (0, u.jsxs)(u.Fragment, {
            children: [
             (0, u.jsxs)(o.f, { role: 'status', children: [f, ' van de ', j, ' items zijn nu zichtbaar.'] }),
             f < j
              ? (0, u.jsx)(l.$n, {
                 purpose: 'secondary',
                 onClick: () => {
                  p(c);
                 },
                 children: 'Toon alles',
                })
              : (0, u.jsx)(u.Fragment, {}),
            ],
           }),
          }),
         ],
        }),
        (0, u.jsx)(d.n, { className: 'ma-new-checklist', role: 'list', ref: t, children: e }),
       ],
      })
     );
    };
  },
  32385(e, n, t) {
   'use strict';
   t.d(n, { bo: () => s, KF: () => g, mJ: () => p, VZ: () => A, cR: () => w, Pv: () => j, qZ: () => a, kD: () => k, QQ: () => T, B2: () => m, Pc: () => l, f4: () => o, GT: () => v, fX: () => r, eQ: () => x, B_: () => f, o_: () => b });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return u(c(n));
    },
    m = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => u(c(e.projects.flatMap((e) => h(e)))),
    j = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: s, value: r }) => {
        const a = /^(.+) URL/.exec(i)[1],
         o = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: i, id: s, value: r, description: o };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    b = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function k(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? k(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
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
    T = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && y.has(t);
    };
  },
  32712(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Elementen met gelijke functies hebben hetzelfde uiterlijk en hetzelfde label.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  33691(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  35941(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Er is een goed zichtbare focusindicator. Dit doe je met een minimale dikte van 2 pixels en een minimaal contrast van 3:1 ten opzichte van aangrenzende kleuren. Hou ook rekening met het contrast met de verschillende achtergrondkleuren waarop een element gebruikt kan worden. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  39569(e, n, t) {
   'use strict';
   t.d(n, { D: () => o });
   var i = t(46447),
    s = t(13526),
    r = t(32385),
    a = t(86070);
   const o = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, a.jsx)(i.KE, { className: (0, s.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   'use strict';
   t.d(n, { r: () => u });
   var i = t(29181),
    s = t(74172),
    r = t(15089),
    a = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(a.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  44293(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  44715(e, n, t) {
   'use strict';
   t.d(n, { NO: () => r, pI: () => a });
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
    r = [...i.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !s.find((n) => n.sc === e)),
    a = new Map(r.map((e) => [e.sc, e]));
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
  50348(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  51582(e, n, t) {
   'use strict';
   t.d(n, { o: () => c });
   var i = t(18439),
    s = t(46447),
    r = t(86070);
   const a = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + s;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: a = {} }) => (0, r.jsx)(i.x, { components: { ...d(n, t), ...l(s), ...a }, children: e });
  },
  51604(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  59778(e, n, t) {
   'use strict';
   t.d(n, { e: () => o });
   var i = t(51582),
    s = t(30758),
    r = t(32385),
    a = t(86070);
   const o = ({ component: e }) => {
    if (globalThis.isAstro) return null;
    const { title: n } = e,
     o = (0, r.fX)(n),
     l = s.lazy(() => t(82839)(`./${o}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, a.jsx)(s.Suspense, { fallback: null, children: (0, a.jsx)(i.o, { omitH1: !0, headingLevel: 1, children: (0, a.jsx)(l, {}) }) });
   };
  },
  70348(e, n, t) {
   'use strict';
   t.d(n, { K: () => d, n: () => l });
   var i = t(13526),
    s = t(30758),
    r = t(96345),
    a = t(37168),
    o = t(86070);
   const l = (0, s.forwardRef)(({ as: e, className: n, children: t, ...s }, r) => {
     const a = e || 'div',
      l = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, o.jsx)(a, { ref: r, className: l, ...s, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: s, headingLevel: l, headingApperance: d, ...c }) => {
     const u = (0, i.A)('utrecht-accordion__section', e),
      g = (0, i.A)('utrecht-accordion__panel', n);
     return (0, o.jsxs)('details', { className: u, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(r.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [s && (0, o.jsx)(a.D, { level: l, appearance: d, children: s }), t] })] }) }), (0, o.jsx)('div', { className: g, children: c.children })] });
    };
  },
  70561(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => o, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function a(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  70903(e, n, t) {
   'use strict';
   t.d(n, { B: () => z });
   var i = t(96547),
    s = t(38295),
    r = t(32385),
    a = t(46447),
    o = t(68148),
    l = t(9016),
    d = t(91635),
    c = t(30734),
    u = t(4603),
    g = t(29181),
    m = t(86070);
   function h({ children: e, content: n, language: t }) {
    return 'clipboard' in navigator
     ? (0, m.jsxs)(a.$n, {
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
        children: [e, (0, m.jsx)(g.In, { children: (0, m.jsx)(u.A, {}) })],
       })
     : null;
   }
   var p = t(43864),
    j = t(35193),
    b = t(82999),
    f = t(13088),
    x = t(91525),
    k = t(24214),
    v = t(92081),
    w = t(1375),
    A = t(73563),
    y = t(23436),
    T = t(79532),
    C = t(30758);
   const R = { boxShadow: p.A, color: j.A, cursor: b.A, dimension: f.A, fontFamily: x.A, fontFamilies: x.A, fontSize: k.A, fontSizes: k.A, fontWeight: v.A, fontWeights: v.A, lineHeight: w.A, lineHeights: w.A, number: A.A, other: y.A, textDecoration: T.A },
    D = ({ type: e }) => {
     const n = Object.hasOwn(R, e) ? e : 'other';
     return (0, m.jsx)(g.In, { children: (0, C.createElement)(R[n]) });
    };
   var G = t(76223);
   function z({ tokens: e }) {
    const n = (0, r.kD)(e),
     t = (0, G.sj)(e, (e) => (((e) => null !== e && 'object' == typeof e && Object.hasOwn(e, '$type') && 'string' == typeof e.$type)(e) ? { $type: e.$type, $value: '' } : void 0)),
     o = (0, r.GT)(n),
     l = o.map((e) => (0, r.B_)(e) + ': ;').join('\n'),
     d = JSON.stringify(t);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsxs)(a.XI, {
       children: [
        (0, m.jsx)(a.A0, { children: (0, m.jsxs)(a.Hj, { children: [(0, m.jsx)(a.M_, { children: 'name' }), (0, m.jsx)(a.M_, { children: 'type' })] }) }),
        (0, m.jsx)(a.BF, {
         children: o.map((n) => {
          const t = (0, r.o_)(n),
           o = (0, r.eQ)(e, n).$type;
          return (0, m.jsxs)(a.Hj, { children: [(0, m.jsx)(a.nA, { children: (0, m.jsx)(i.C, { children: (0, m.jsx)(a.kf, { children: t }) }) }), (0, m.jsx)(a.nA, { children: (0, m.jsxs)(s.K, { children: [(0, m.jsx)(D, { type: o }), ' ', o] }) })] }, t);
         }),
        }),
       ],
      }),
      (0, m.jsxs)(a.e2, { children: [(0, m.jsx)(h, { content: d, language: 'json', children: 'Kopieer als JSON' }), (0, m.jsx)(h, { content: l, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  76703(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  81500(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, i.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  82209(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
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
    r = t(32385),
    a = t(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, r.fX)(n),
      d = o[e] ?? e;
     return (0, a.jsxs)(i.WK, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, s.A)('ma-component-illustration', `ma-component-illustration--${l}`), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, r.fX)(d)}.svg#component-illustration` })] }), (0, a.jsx)(i.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  92604(e, n, t) {
   'use strict';
   t.d(n, { Ay: () => a });
   var i = t(86070),
    s = t(18439);
   function r(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'De component en de afzonderlijke interactieve elementen in de component hebben de juiste rol en de juiste attributen voor het aangeven van de staat en de waarde.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  94309(e, n, t) {
   'use strict';
   t.d(n, { F: () => a, N: () => o });
   var i = t(13526),
    s = t(32385),
    r = t(86070);
   const a = ({ children: e, ...n }) => {
     const { to: t, href: i, ...a } = n;
     let o = t || i;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, s.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((a.target = '_blank'), (a.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: o, ...a, children: e }));
    },
    o = ({ className: e, ...n }) => (0, r.jsx)(a, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
