'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33710],
 {
  3867(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { code: 'code', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, i.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  6360(e, n, t) {
   t.d(n, { KE: () => u });
   var i = t(15540),
    r = t(69967),
    s = t(86070),
    o = t(30758),
    a = ['children'],
    l = ['dateTime'],
    d = ['value'];
   function c(e, n) {
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
   function g(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, i.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var u = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     i = (0, r.A)(e, a),
     o = (function () {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
      return n.filter(Boolean).join(' ');
     })('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(i)
    ) {
     var c = i.dateTime,
      u = (0, r.A)(i, l);
     return (0, s.jsx)('time', g(g({}, u), {}, { dateTime: c, className: o, ref: n, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(i)
    ) {
     var m = i.value,
      p = (0, r.A)(i, d);
     return (0, s.jsx)('data', g(g({}, p), {}, { value: m, className: o, ref: n, children: t }));
    }
    return (0, s.jsx)('span', g(g({}, i), {}, { className: o, ref: n, children: t }));
   });
   u.displayName = 'DataBadge';
  },
  10645(e, n, t) {
   t.d(n, { p: () => s });
   var i = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...o }) => (0, r.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  17236(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  21034(e, n, t) {
   t.d(n, { VK: () => w, $9: () => v, mu: () => b, Fc: () => x, K_: () => A });
   var i = t(29181),
    r = t(13526),
    s = t(40889),
    o = t(21530),
    a = t(45186);
   function l(e) {
    return (0, a.c)() ? e.children() : null;
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
    p = t(32385);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var f = t(70348),
    j = t(85162);
   const w = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      s = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(f.n, { children: s.map((t) => (0, d.jsx)(f.K, { className: (0, r.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
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
            a = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || a.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
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
               a.length > 0 && (0, d.jsx)(d.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [r ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const r = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: r && (0, d.jsx)(g.D, { state: r }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(r) && (0, d.jsx)(j.s, { relayStep: r, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    A = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21530(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => a, Zp: () => l });
   var i = t(46447),
    r = t(13526),
    s = t(86070);
   const o = ({ background: e, children: n, className: t, ...i }) => (0, s.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: o = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, r.A)('ma-cardgroup__card', a && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, s.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27823(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  30400(e, n, t) {
   t.d(n, { b: () => f, e: () => h });
   var i = t(30758),
    r = t(94309),
    s = t(44715),
    o = t(29181),
    a = t(56561),
    l = t(50805),
    d = t(70348),
    c = t(37168),
    g = t(86070);
   const u = (e) => (0, g.jsx)(c.D, { ...e });
   var m = t(6360),
    p = t(13526);
   const h = ({ title: e, sc: n, children: t, tags: a }) => {
     const l = (0, i.useId)(),
      c = [...a];
     if (n) {
      c.push(n);
      const e = s.pI.get(n);
      e?.conformance && c.push(`Niveau ${e.conformance}`);
     }
     return (0, g.jsx)('div', {
      role: 'listitem',
      'data-tags': a.join(','),
      className: (0, p.A)(
       'ma-new-checklist__item',
       a.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, g.jsx)(d.K, {
       label: (0, g.jsx)('span', { className: 'ma-new-checklist__title', id: l, children: e }),
       children: (0, g.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, g.jsx)('div', { className: 'ma-flow', children: t }),
         (0, g.jsx)(o._Q, {
          className: 'ma-new-checklist__badge-list',
          children: c.map((e, n) => {
           let t = (0, g.jsx)(m.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const i = s.pI.get(e);
            t = (0, g.jsx)(r.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${i.sc} ${i.nl.title}`, style: { lineHeight: 1 }, children: (0, g.jsx)(m.KE, { children: `WCAG ${e}` }) }, n);
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
     const t = i.useRef(null),
      [r, s] = (0, i.useState)([]),
      [c, m] = (0, i.useState)([]),
      [p, h] = (0, i.useState)([]),
      [f, j] = (0, i.useState)(0),
      [w, b] = (0, i.useState)(0),
      v = (e) => p.includes(e),
      x = (0, i.useId)();
     return (
      i.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        i = Array.from(e.querySelectorAll('[data-tags]'));
       (i.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        s(i),
        m([...n]),
        j(i.length),
        h([...n]));
      }, []),
      i.useEffect(() => {
       const e = p,
        n = [],
        t = [];
       (r.forEach((i) => {
        (i.dataset.tags?.split(',') || []).some((n) => e.includes(n)) ? n.push(i) : t.push(i);
       }),
        n.forEach((e) => (e.hidden = !1)),
        t.forEach((e) => (e.hidden = !0)),
        b(n.length));
      }, [p]),
      (0, g.jsxs)('div', {
       children: [
        (0, g.jsxs)('div', {
         className: 'ma-filter-block',
         children: [
          (0, g.jsxs)(o.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': x,
           children: [
            (0, g.jsx)(u, { level: n, id: x, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(c).map((e) =>
             (0, g.jsxs)(
              o.zB,
              {
               type: 'checkbox',
               children: [
                (0, g.jsx)(o.Sc, {
                 checked: v(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !v(e)) ? [...p, e] : p.filter((n) => n !== e);
                   h(t);
                  })(e),
                }),
                (0, g.jsx)(o.lR, { htmlFor: e, children: e }),
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
             (0, g.jsxs)(a.f, { role: 'status', children: [w, ' van de ', f, ' items zijn nu zichtbaar.'] }),
             w < f
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
   t.d(n, { bo: () => r, KF: () => u, mJ: () => h, VZ: () => k, cR: () => A, Pv: () => f, qZ: () => o, kD: () => v, QQ: () => C, B2: () => m, Pc: () => l, f4: () => a, GT: () => x, fX: () => s, eQ: () => b, B_: () => w, o_: () => j });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
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
    m = (e, n) => h(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => g(c(e.projects.flatMap((e) => p(e)))),
    f = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: r, value: s }) => {
        const o = /^(.+) URL/.exec(i)[1],
         a = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: r, value: s, description: a };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    j = (e) => e.join('.'),
    w = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const A = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    k = () => {
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
  33691(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  39569(e, n, t) {
   t.d(n, { D: () => a });
   var i = t(46447),
    r = t(13526),
    s = t(32385),
    o = t(86070);
   const a = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, o.jsx)(i.KE, { className: (0, r.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   t.d(n, { r: () => g });
   var i = t(29181),
    r = t(74172),
    s = t(15089),
    o = t(28377),
    a = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  42628(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de kleur van componenten die visueel betekenis hebben en hun directe omgeving.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Een icoon dat betekenis heeft, zoals de 3 streepjes voor een menu of een pijltje naar rechts voor de volgende pagina.' }), '\n', (0, i.jsx)(n.li, { children: 'Een icoon dat de status aangeeft van een bericht zoals een oranje driehoek voor een waarschuwing en een groen vinkje voor succes.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het gemeten kleurcontrast tussen het element en de achtergrond moet minstens 3:1 zijn. Dit is te controleren met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  44293(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  44715(e, n, t) {
   t.d(n, { NO: () => s, pI: () => o });
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
    r = (new Map(i.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    s = [...i.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !r.find((n) => n.sc === e)),
    o = new Map(s.map((e) => [e.sc, e]));
  },
  45186(e, n, t) {
   t.d(n, { c: () => r });
   var i = t(30758);
   function r() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  45442(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Het parent HTML element van de Unordered en Ordered List mag alleen list-items bevatten:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n</ul>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Dit geldt ook voor geneste Unordered en Ordered Lists:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li>List-item voorbeeld</li>\n  <li>\n    List-item voorbeeld\n    <ul>\n      <li>Genest list-item voorbeeld</li>\n      <li>Genest list-item voorbeeld</li>\n    </ul>\n  </li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n</ul>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Toegankelijke opsommingen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46422(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  50805(e, n, t) {
   t.d(n, { $n: () => m });
   var i = t(15540),
    r = t(69967),
    s = t(86070),
    o = t(13526),
    a = t(30758),
    l = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
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
   var g = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    u = g(['primary', 'secondary', 'subtle']),
    m =
     (g(['positive', 'negative']),
     (0, a.forwardRef)(function (e, n) {
      var t = e.children,
       i = e.className,
       d = e.iconOnly,
       g = e.iconEnd,
       m = e.iconStart,
       p = e.purpose,
       h = e.hint,
       f = e.disabled,
       j = e.htmlDisabled,
       w = e.pressed,
       b = e.busy,
       v = e.type,
       x = void 0 === v ? 'button' : v,
       A = e.label,
       k = e.toggle,
       y = (0, r.A)(e, l),
       C = Boolean(m || g),
       T = (a.Children.toArray(t).some(a.isValidElement) && C) || d;
      return (0, s.jsxs)('button', c(c({ ref: n, type: x, className: (0, o.$)('nl-button', i, { 'nl-button--pressed': w, 'nl-button--busy': b, 'nl-button--disabled': f || j, 'nl-button--primary': 'primary' === p, 'nl-button--secondary': 'secondary' === p, 'nl-button--subtle': 'subtle' === p, 'nl-button--positive': u(p) && 'positive' === h, 'nl-button--negative': u(p) && 'negative' === h, 'nl-button--icon-only': d }), 'aria-pressed': k ? String(Boolean(w)) : void 0, 'aria-disabled': f || b ? 'true' : void 0, disabled: j }, y), {}, { children: [m && (0, s.jsx)('span', { className: 'nl-button__icon-start', children: m }), A && (0, s.jsx)('span', { className: 'nl-button__label', children: A }), T ? (0, s.jsx)('span', { className: d ? 'nl-button__label' : '', children: t }) : t, g && (0, s.jsx)('span', { className: 'nl-button__icon-end', children: g })] }));
     }));
   m.displayName = 'Button';
  },
  51604(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => g });
   var i = t(15540),
    r = t(69967),
    s = t(86070),
    o = t(13526),
    a = t(30758),
    l = ['children', 'className', 'purpose'];
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
   var g = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     d = e.purpose,
     g = (0, r.A)(e, l);
    return (0, s.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === d), a), ref: n }, g), {}, { children: 'lead' === d ? (0, s.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   g.displayName = 'Paragraph';
  },
  65082(e, n, t) {
   (t.r(n), t.d(n, { assets: () => L, component: () => F, contentTitle: () => G, default: () => H, description: () => N, frontMatter: () => R, issueNumber: () => S, metadata: () => i, title: () => D, toc: () => W }));
   const i = JSON.parse('{"id":"componenten/unordered-list/index","title":"Unordered List","description":"Opsomming waar de volgorde van items in de lijst niet van belang is.","source":"@site/docs/componenten/unordered-list/index.mdx","sourceDirName":"componenten/unordered-list","slug":"/unordered-list","permalink":"/unordered-list","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/unordered-list/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Unordered List","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Unordered List","pagination_label":"Unordered List","description":"Opsomming waar de volgorde van items in de lijst niet van belang is.","issue_number":116,"slug":"/unordered-list","keywords":["bolletjes lijst","bullet list","bullet points","bulleted list","bullets","items","itemslijst","lijst","lijst met volgorde","lijstje","lijsten","list","list items","nested list","numbered list","ongeordend","ongeordende lijst","ongesorteerde lijst","opsomming","opsommingslijst","order","ordered list","punten","punt","sequence","ul","unordered","unordered list","vertical list"]},"sidebar":"componenten","previous":{"title":"Toggletip","permalink":"/toggletip"},"next":{"title":"Video","permalink":"/video"}}');
   var r = t(86070),
    s = t(18439),
    o = t(24155),
    a = t(17236),
    l = t(70561),
    d = t(33691),
    c = t(88805),
    g = t(45442);
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['De Unordered List is herkenbaar voor hulpsoftware als ongeordende lijst omdat de component is opgemaakt met ', (0, r.jsx)(n.code, { children: 'ul' }), ' en ', (0, r.jsx)(n.code, { children: 'li' }), ' elementen.\nIn de browser Safari (', (0, r.jsx)(n.a, { href: '/baseline/2026-03/', children: 'NL Design System baseline maart 2026' }), ') verdwijnt de semantiek van de lijst zodra in CSS ', (0, r.jsx)(n.code, { children: 'list-style: none' }), ' wordt gebruikt. Daarom is de ARIA rol ', (0, r.jsx)(n.code, { children: 'list' }), ' toegevoegd.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<ul role="list">\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n</ul>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Toegankelijke opsommingen' }) }), '\n'] })] });
   }
   var m = t(3867),
    p = t(42628),
    h = t(82209),
    f = t(44293),
    j = t(51604),
    w = t(72954),
    b = t(46422),
    v = t(89445),
    x = t(27823),
    A = t(76703);
   const k = [
     { title: 'Decoratieve iconen die als markers van de Unordered List worden gebruikt worden genegeerd door hulpsoftware.', sc: '1.1.1', status: '', component: c.Ay, tags: ['developer'] },
     { title: 'De Unordered List bevat alleen list-items.', sc: '1.3.1', status: '', component: g.Ay, tags: ['developer'] },
     { title: 'De tekst in de Unordered List heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.', sc: '1.4.3', status: '', component: f.Ay, tags: ['designer'] },
     { title: 'Als de bezoeker de Unordered List tot 400% vergroot, blijven de tekst en de markers zichtbaar en leesbaar.', sc: '1.4.10', status: '', component: m.Ay, tags: ['developer', 'designer'] },
     { title: 'De contrastverhouding van de kleur van de markers van de Unordered List met de achtergrondkleur is hoog genoeg.', sc: '1.4.11', status: '', component: p.Ay, tags: ['developer', 'designer'] },
     { title: 'De Unordered List is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: w.Ay, tags: ['developer'] },
     { title: 'De Unordered List komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'Als de tekst in de Unordered List in een andere is dan de taal van de pagina, is dat duidelijk aangegeven.', sc: '3.1.2', status: '', component: A.Ay, tags: ['developer'] },
    ],
    y = [
     {
      title: 'De Unordered List is herkenbaar als ongeordende lijst voor hulpsoftware.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, s.R)(), ...e.components };
       return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst van de Unordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: j.Ay, tags: ['developer'] },
     { title: 'Tekst in de Unordered List blijft leesbaar wanneer de tekstafstand vergroot wordt. ', sc: '1.4.12', status: '', component: h.Ay, tags: ['developer'] },
     { title: 'De Unordered List is standaard niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: b.Ay, tags: ['developer'] },
     { title: 'De Unordered List komt standaard niet voor in de focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: v.Ay, tags: ['developer'] },
    ];
   var C = t(21034),
    T = t(30400);
   const R = { title: 'Unordered List', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Unordered List', pagination_label: 'Unordered List', description: 'Opsomming waar de volgorde van items in de lijst niet van belang is.', issue_number: 116, slug: '/unordered-list', keywords: ['bolletjes lijst', 'bullet list', 'bullet points', 'bulleted list', 'bullets', 'items', 'itemslijst', 'lijst', 'lijst met volgorde', 'lijstje', 'lijsten', 'list', 'list items', 'nested list', 'numbered list', 'ongeordend', 'ongeordende lijst', 'ongesorteerde lijst', 'opsomming', 'opsommingslijst', 'order', 'ordered list', 'punten', 'punt', 'sequence', 'ul', 'unordered', 'unordered list', 'vertical list'] },
    G = void 0,
    L = {},
    D = 'Unordered List',
    N = 'Opsomming waar de volgorde van items in de lijst niet van belang is.',
    S = 116,
    F = o.find((e) => e.number === S),
    W = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function _(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, r.jsx)(C.Fc, { component: F, headingLevel: 1, description: N }), '\n', (0, r.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, r.jsx)(l.Ay, {}), '\n', (0, r.jsx)(T.b, { headingLevel: '4', children: k.map(({ component: e, ...n }) => (0, r.jsx)(T.e, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, r.jsx)(a.Ay, {}), '\n', (0, r.jsx)(T.b, { headingLevel: '4', children: y.map(({ component: e, ...n }) => (0, r.jsx)(T.e, { ...n, children: (0, r.jsx)(e, {}) })) }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(C.VK, { component: F, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(C.mu, { component: F, headingLevel: 3 }), '\n', (0, r.jsx)(C.K_, { component: F }), '\n', (0, r.jsx)(C.$9, { component: F, headingLevel: 2 })] });
   }
   function H(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(_, { ...e }) }) : _(e);
   }
  },
  70348(e, n, t) {
   t.d(n, { K: () => d, n: () => l });
   var i = t(13526),
    r = t(30758),
    s = t(96345),
    o = t(37168),
    a = t(86070);
   const l = (0, r.forwardRef)(({ as: e, className: n, children: t, ...r }, s) => {
     const o = e || 'div',
      l = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(o, { ref: s, className: l, ...r, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: r, headingLevel: l, headingApperance: d, ...c }) => {
     const g = (0, i.A)('utrecht-accordion__section', e),
      u = (0, i.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: g, ...c, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(s.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [r && (0, a.jsx)(o.D, { level: l, appearance: d, children: r }), t] })] }) }), (0, a.jsx)('div', { className: u, children: c.children })] });
    };
  },
  70561(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  72954(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, i.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  76703(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  82209(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85162(e, n, t) {
   t.d(n, { s: () => l });
   var i = t(29181),
    r = t(13526),
    s = t(32385),
    o = t(86070);
   const a = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, s.fX)(n),
      d = a[e] ?? e;
     return (0, o.jsxs)(i.WK, { children: [(0, o.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, r.A)('ma-component-illustration', `ma-component-illustration--${l}`), fill: 'none', children: [(0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, o.jsx)('rect', { width: '960', height: '540' }), (0, o.jsx)('rect', { width: '960', height: '540' })] }), (0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, o.jsx)('use', { href: `/svg/componenten_overzicht_${(0, s.fX)(d)}.svg#component-illustration` })] }), (0, o.jsx)(i.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  88805(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Een icon is decoratief als er een beschrijvende tekst boven, naast of onder staat. Een icon is ook decoratief als het onderdeel is van een interactief component met een eigen toegankelijke naam, zoals een ', (0, i.jsx)(n.code, { children: 'button' }), ' of een ', (0, i.jsx)(n.code, { children: 'link' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het is daarom niet nodig dat gebruikers die hulpsoftware gebruiken, zoals een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', weten dat er een icon aanwezig is. Verberg decoratieve icons, bijvoorbeeld met ', (0, i.jsx)(n.code, { children: 'aria-hidden="true"' }), ' op de component.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Let op: VoiceOver in combinatie met Safari (in de ', (0, i.jsx)(n.a, { href: '/baseline/2025-07/', children: 'NL Design System Baseline van juli 2025' }), ") negeert Unicode-emoji's met ", (0, i.jsx)(n.code, { children: 'aria-hidden="true"' }), ' w\xe9l in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een ', (0, i.jsx)(n.a, { href: 'https://bugs.webkit.org/show_bug.cgi?id=161740', children: 'bug in WebKit' }), '. Gebruik daarom liever SVG icons.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  89445(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    r = t(18439);
   function s(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  94309(e, n, t) {
   t.d(n, { F: () => o, N: () => a });
   var i = t(13526),
    r = t(32385),
    s = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: i, ...o } = n;
     let a = t || i;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, r.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: a, ...o, children: e }));
    },
    a = ({ className: e, ...n }) => (0, s.jsx)(o, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
