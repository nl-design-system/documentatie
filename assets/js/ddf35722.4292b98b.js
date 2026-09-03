'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30722],
 {
  3867(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, r.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, r.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  4107(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var r = t(86070),
    i = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat kleur niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld: geef een foutmelding niet alleen aan met een rood randje, maar ook in tekst en eventueel met een icoontje dat een foutmelding markeert.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  6360(e, n, t) {
   t.d(n, { KE: () => g });
   var r = t(15540),
    i = t(69967),
    a = t(86070),
    o = t(30758),
    l = ['children'],
    s = ['dateTime'],
    d = ['value'];
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
   function u(e) {
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
   var g = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     r = (0, i.A)(e, l),
     o = (function () {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
      return n.filter(Boolean).join(' ');
     })('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(r)
    ) {
     var c = r.dateTime,
      g = (0, i.A)(r, s);
     return (0, a.jsx)('time', u(u({}, g), {}, { dateTime: c, className: o, ref: n, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(r)
    ) {
     var m = r.value,
      p = (0, i.A)(r, d);
     return (0, a.jsx)('data', u(u({}, p), {}, { value: m, className: o, ref: n, children: t }));
    }
    return (0, a.jsx)('span', u(u({}, r), {}, { className: o, ref: n, children: t }));
   });
   g.displayName = 'DataBadge';
  },
  10645(e, n, t) {
   t.d(n, { p: () => a });
   var r = t(13526),
    i = t(86070);
   const a = ({ children: e, className: n, level: t = 1, suffix: a, ...o }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  17236(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var r = t(86070),
    i = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  21026(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het label van een invoerveld maakt kort en bondig duidelijk welke invoer van de bezoeker gevraagd wordt. Een tekstueel label kan een tekst zijn, of een icoon waar de alternatieve tekst het doel van het invoerveld beschrijft.' }), '\n', (0, r.jsx)(n.p, { children: "Bijvoorbeeld: de alternatieve tekst van een vergrootglas icoon is 'Zoeken' en niet 'Vergrootglas'." }), '\n', (0, r.jsxs)(n.p, { children: ['Let op: Gebruik je een asterisk (', (0, r.jsx)(n.code, { children: '*' }), ") om aan te geven dat een veld verplicht is? Zorg dan dat je v\xf3\xf3r de eerste asterisk uitlegt wat de betekenis is. Plaats bijvoorbeeld bovenaan het formulier de tekst: 'Velden met een ", (0, r.jsx)(n.code, { children: '*' }), " zijn verplicht'."] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/duidelijke-tekst/', children: 'Gebruik duidelijke labelteksten' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  21034(e, n, t) {
   t.d(n, { VK: () => j, $9: () => x, mu: () => w, Fc: () => v, K_: () => A });
   var r = t(29181),
    i = t(13526),
    a = t(40889),
    o = t(21530),
    l = t(45186);
   function s(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(s, {
     children: () => {
      const r = t(83294).V6;
      return (0, d.jsx)(r, {
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
    p = t(32385);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var f = t(70348),
    b = t(85162);
   const j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      a = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(f.n, { children: a.map((t) => (0, d.jsx)(f.K, { className: (0, i.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    w = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(o.AC, {
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
            l = (0, p.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => s.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || l.length > 0) && (0, d.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: u
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(a.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(r.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [i ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g.p, { level: n, suffix: i && (0, d.jsx)(u.D, { state: i }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(i) && (0, d.jsx)(b.s, { relayStep: i, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    A = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(r.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(r.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  21530(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => l, Zp: () => s });
   var r = t(46447),
    i = t(13526),
    a = t(86070);
   const o = ({ background: e, children: n, className: t, ...r }) => (0, a.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...r, children: n }),
    l = (e) => (0, a.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: n, className: t, component: o = 'div', background: l, children: s }) => {
     const d = (e) => ('article' === o ? (0, a.jsx)('article', { ...e }) : 'section' === o ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: s });
     return e ? (0, a.jsx)(r.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, a.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  27823(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  32385(e, n, t) {
   t.d(n, { bo: () => i, KF: () => g, mJ: () => h, VZ: () => k, cR: () => A, Pv: () => f, qZ: () => o, kD: () => x, QQ: () => C, B2: () => m, Pc: () => s, f4: () => l, GT: () => v, fX: () => a, eQ: () => w, B_: () => j, o_: () => b });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
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
    f = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: a }) => {
        const o = /^(.+) URL/.exec(r)[1],
         l = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: r, id: i, value: a, description: l };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    b = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    w = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const A = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    k = () => {
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
   t.d(n, { Ay: () => l, RM: () => a });
   var r = t(86070),
    i = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  34259(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Zorg ervoor dat invoervelden die op meerdere pagina's voorkomen en die dezelfde functie hebben, er op die pagina's hetzelfde uitzien en dezelfde visuele en toegankelijke naam hebben." }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Een algemene zoekfunctie heeft op iedere pagina het label 'Zoeken' en niet op de ene plek 'Zoeken' en op de andere plek 'Waar ben je naar op zoek?' of 'Zoek op website'." }), '\n', (0, r.jsx)(n.li, { children: "Een inschrijfformulier van evenementen waarin persoonlijke gegevens worden gevraagd, hebben allebei het veld 'Voor- en achternaam' en niet op de ene plek 'Voor- en achternaam' en op de andere plek 'Volledige naam' of 'Hoe heet je?'." }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Dit geldt ook voor het gebruik van icons.' }), '\n', (0, r.jsx)(n.p, { children: 'Als componenten op verschillende plekken andere functies hebben hoeven die uiteraard niet hetzelfde visuele label te hebben. Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Een algemene zoekfunctie genaamd 'Zoeken' in de header van iedere pagina." }), '\n', (0, r.jsx)(n.li, { children: "Een specifieke zoekfunctie genaamd 'Zoek in de database'." }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/respecteer-conventies/', children: 'Respecteer conventies' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/duidelijke-tekst/', children: 'Gebruik duidelijke labels' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  39569(e, n, t) {
   t.d(n, { D: () => l });
   var r = t(46447),
    i = t(13526),
    a = t(32385),
    o = t(86070);
   const l = ({ state: e }) => {
    const n = (0, a.fX)(e);
    return (0, o.jsx)(r.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, t) {
   t.d(n, { r: () => u });
   var r = t(29181),
    i = t(74172),
    a = t(15089),
    o = t(28377),
    l = t(33648),
    s = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(a.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(r.In, { children: c[e] || (0, d.jsx)(s.A, {}) });
  },
  44293(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  44715(e, n, t) {
   t.d(n, { NO: () => a, pI: () => o });
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
    a = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !i.find((n) => n.sc === e)),
    o = new Map(a.map((e) => [e.sc, e]));
  },
  45186(e, n, t) {
   t.d(n, { c: () => i });
   var r = t(30758);
   function i() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  46422(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  50805(e, n, t) {
   t.d(n, { $n: () => m });
   var r = t(15540),
    i = t(69967),
    a = t(86070),
    o = t(13526),
    l = t(30758),
    s = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function d(e, n) {
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
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var u = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    g = u(['primary', 'secondary', 'subtle']),
    m =
     (u(['positive', 'negative']),
     (0, l.forwardRef)(function (e, n) {
      var t = e.children,
       r = e.className,
       d = e.iconOnly,
       u = e.iconEnd,
       m = e.iconStart,
       p = e.purpose,
       h = e.hint,
       f = e.disabled,
       b = e.htmlDisabled,
       j = e.pressed,
       w = e.busy,
       x = e.type,
       v = void 0 === x ? 'button' : x,
       A = e.label,
       k = e.toggle,
       y = (0, i.A)(e, s),
       C = Boolean(m || u),
       T = (l.Children.toArray(t).some(l.isValidElement) && C) || d;
      return (0, a.jsxs)('button', c(c({ ref: n, type: v, className: (0, o.$)('nl-button', r, { 'nl-button--pressed': j, 'nl-button--busy': w, 'nl-button--disabled': f || b, 'nl-button--primary': 'primary' === p, 'nl-button--secondary': 'secondary' === p, 'nl-button--subtle': 'subtle' === p, 'nl-button--positive': g(p) && 'positive' === h, 'nl-button--negative': g(p) && 'negative' === h, 'nl-button--icon-only': d }), 'aria-pressed': k ? String(Boolean(j)) : void 0, 'aria-disabled': f || w ? 'true' : void 0, disabled: b }, y), {}, { children: [m && (0, a.jsx)('span', { className: 'nl-button__icon-start', children: m }), A && (0, a.jsx)('span', { className: 'nl-button__label', children: A }), T ? (0, a.jsx)('span', { className: d ? 'nl-button__label' : '', children: t }) : t, u && (0, a.jsx)('span', { className: 'nl-button__icon-end', children: u })] }));
     }));
   m.displayName = 'Button';
  },
  51604(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, r.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => u });
   var r = t(15540),
    i = t(69967),
    a = t(86070),
    o = t(13526),
    l = t(30758),
    s = ['children', 'className', 'purpose'];
   function d(e, n) {
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
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var u = (0, l.forwardRef)(function (e, n) {
    var t = e.children,
     l = e.className,
     d = e.purpose,
     u = (0, i.A)(e, s);
    return (0, a.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, r.A)({}, 'nl-paragraph--lead', 'lead' === d), l), ref: n }, u), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   u.displayName = 'Paragraph';
  },
  70348(e, n, t) {
   t.d(n, { K: () => d, n: () => s });
   var r = t(13526),
    i = t(30758),
    a = t(96345),
    o = t(37168),
    l = t(86070);
   const s = (0, i.forwardRef)(({ as: e, className: n, children: t, ...i }, a) => {
     const o = e || 'div',
      s = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, l.jsx)(o, { ref: a, className: s, ...i, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: i, headingLevel: s, headingApperance: d, ...c }) => {
     const u = (0, r.A)('utrecht-accordion__section', e),
      g = (0, r.A)('utrecht-accordion__panel', n);
     return (0, l.jsxs)('details', { className: u, ...c, children: [(0, l.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, l.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, l.jsx)('span', { className: 'nl-button__icon-start', children: (0, l.jsx)(a.A, {}) }), (0, l.jsxs)('span', { className: 'nl-button__label', children: [i && (0, l.jsx)(o.D, { level: s, appearance: d, children: i }), t] })] }) }), (0, l.jsx)('div', { className: g, children: c.children })] });
    };
  },
  70561(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => a });
   var r = t(86070),
    i = t(18439);
   const a = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  72954(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, r.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  76703(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  82209(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, r.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85162(e, n, t) {
   t.d(n, { s: () => s });
   var r = t(29181),
    i = t(13526),
    a = t(32385),
    o = t(86070);
   const l = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    s = ({ name: e, relayStep: n, description: t }) => {
     const s = (0, a.fX)(n),
      d = l[e] ?? e;
     return (0, o.jsxs)(r.WK, { children: [(0, o.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('ma-component-illustration', `ma-component-illustration--${s}`), fill: 'none', children: [(0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, o.jsx)('rect', { width: '960', height: '540' }), (0, o.jsx)('rect', { width: '960', height: '540' })] }), (0, o.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, o.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, o.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, o.jsx)('use', { href: `/svg/componenten_overzicht_${(0, a.fX)(d)}.svg#component-illustration` })] }), (0, o.jsx)(r.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  89445(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function a(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  89786(e, n, t) {
   t.d(n, { b: () => f, e: () => h });
   var r = t(30758),
    i = t(94309),
    a = t(44715),
    o = t(29181),
    l = t(56561),
    s = t(89974),
    d = t(70348),
    c = t(37168),
    u = t(86070);
   const g = (e) => (0, u.jsx)(c.D, { ...e });
   var m = t(6360),
    p = t(13526);
   const h = ({ title: e, sc: n, children: t, tags: l }) => {
     const s = (0, r.useId)(),
      c = [...l];
     if (n) {
      c.push(n);
      const e = a.pI.get(n);
      e?.conformance && c.push(`Niveau ${e.conformance}`);
     }
     return (0, u.jsx)('div', {
      role: 'listitem',
      'data-tags': l.join(','),
      className: (0, p.A)(
       'ma-new-checklist__item',
       l.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, u.jsx)(d.K, {
       label: (0, u.jsx)('span', { className: 'ma-new-checklist__title', id: s, children: e }),
       children: (0, u.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, u.jsx)('div', { className: 'ma-flow', children: t }),
         (0, u.jsx)(o._Q, {
          className: 'ma-new-checklist__badge-list',
          children: c.map((e, n) => {
           let t = (0, u.jsx)(m.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const r = a.pI.get(e);
            t = (0, u.jsx)(i.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${r.sc} ${r.nl.title}`, style: { lineHeight: 1 }, children: (0, u.jsx)(m.KE, { children: `WCAG ${e}` }) }, n);
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
      [i, a] = (0, r.useState)([]),
      [c, m] = (0, r.useState)([]),
      [p, h] = (0, r.useState)([]),
      [f, b] = (0, r.useState)(0),
      [j, w] = (0, r.useState)(0),
      x = (e) => p.includes(e),
      v = (0, r.useId)();
     return (
      r.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        r = Array.from(e.querySelectorAll('[data-tags]'));
       (r.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        a(r),
        m([...n]),
        b(r.length),
        h([...n]));
      }, []),
      r.useEffect(() => {
       const e = p,
        n = [],
        t = [];
       (i.forEach((r) => {
        (r.dataset.tags?.split(',') || []).some((n) => e.includes(n)) ? n.push(r) : t.push(r);
       }),
        n.forEach((e) => (e.hidden = !1)),
        t.forEach((e) => (e.hidden = !0)),
        w(n.length));
      }, [p]),
      (0, u.jsxs)('div', {
       children: [
        (0, u.jsxs)('div', {
         className: 'ma-filter-block',
         children: [
          (0, u.jsxs)(o.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': v,
           children: [
            (0, u.jsx)(g, { level: n, id: v, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(c).map((e) =>
             (0, u.jsxs)(
              o.zB,
              {
               type: 'checkbox',
               children: [
                (0, u.jsx)(o.Sc, {
                 checked: x(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !x(e)) ? [...p, e] : p.filter((n) => n !== e);
                   h(t);
                  })(e),
                }),
                (0, u.jsx)(o.lR, { htmlFor: e, children: e }),
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
             (0, u.jsxs)(l.f, { role: 'status', children: [j, ' van de ', f, ' items zijn nu zichtbaar.'] }),
             j < f
              ? (0, u.jsx)(s.$, {
                 purpose: 'secondary',
                 onClick: () => {
                  h(c);
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
  89974(e, n, t) {
   t.d(n, { $: () => r.$n });
   var r = t(50805);
  },
  94309(e, n, t) {
   t.d(n, { F: () => o, N: () => l });
   var r = t(13526),
    i = t(32385),
    a = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: r, ...o } = n;
     let l = t || r;
     const s = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === s.origin ? (s.pathname.endsWith('/') || (0, i.QQ)(s.pathname) || (s.pathname = `${s.pathname}/`), (l = s.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, a.jsx)('a', { href: l, ...o, children: e }));
    },
    l = ({ className: e, ...n }) => (0, a.jsx)(o, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  97835(e, n, t) {
   (t.r(n), t.d(n, { assets: () => N, component: () => W, contentTitle: () => G, default: () => P, description: () => D, frontMatter: () => R, issueNumber: () => S, metadata: () => r, title: () => L, toc: () => H }));
   const r = JSON.parse('{"id":"componenten/form-field-label/index","title":"Form Field Label","description":"Toont een tekstlabel dat informeert over de in te vullen informatie.","source":"@site/docs/componenten/form-field-label/index.mdx","sourceDirName":"componenten/form-field-label","slug":"/form-field-label","permalink":"/form-field-label","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/form-field-label/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Form Field Label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Form Field Label","pagination_label":"Form Field Label","description":"Toont een tekstlabel dat informeert over de in te vullen informatie.","issue_number":177,"slug":"/form-field-label","keywords":["caption","form","field label","form field label","form input","form label","formlabel","formulier","formulierelement","input label","label","text label","textlabel"]},"sidebar":"componenten","previous":{"title":"Form Field Error Message","permalink":"/form-field-error-message"},"next":{"title":"Form Field Label Suffix","permalink":"/form-field-label-suffix"}}');
   var i = t(86070),
    a = t(18439),
    o = t(82062),
    l = t(17236),
    s = t(70561),
    d = t(33691);
   function c(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Koppel het ', (0, i.jsx)(n.code, { children: 'label' }), '-element met de attributen ', (0, i.jsx)(n.code, { children: 'for' }), ' en ', (0, i.jsx)(n.code, { children: 'id' }), ' aan het bijbehorende input-element.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="voorbeeld">Ik ben een Text Input</label> <input type="text" id="voorbeeld" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Op die manier is het Form Field Label expliciet gekoppeld met het input-element, ook als het input-element niet binnen een ', (0, i.jsx)(n.code, { children: 'label' }), '-element genest is.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'Toegankelijke naam label' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Het Form Field Label kan met de attributen ', (0, i.jsx)(n.code, { children: 'for' }), ' en ', (0, i.jsx)(n.code, { children: 'id' }), ' aan het bijbehorende element voor formulierinvoer worden gekoppeld.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="voorbeeld">Ik ben een Text Input</label> <input type="text" id="voorbeeld" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Op die manier is het Form Field Label expliciet gekoppeld met het element voor formulierinvoer, ook als die niet binnen een ', (0, i.jsx)(n.code, { children: 'label' }), '-element genest is.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam/', children: 'Toegankelijke naam label' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   var g = t(3867),
    m = t(82209),
    p = t(44293),
    h = t(51604),
    f = t(21026),
    b = t(76703),
    j = t(34259),
    w = t(4107),
    x = t(46422),
    v = t(89445),
    A = t(72954),
    k = t(27823);
   const y = [
     {
      title: 'Het Form Field label is gekoppeld aan het bijbehorende element voor formulierinvoer.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     { title: 'De kleur van het Form Field Label geeft geen informatie die niet ook op minimaal 1 andere manier wordt gegeven.', sc: '1.4.1', status: '', component: w.Ay, tags: ['designer'] },
     { title: 'De tekst in het Form Field Label heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.', sc: '1.4.3', status: '', component: p.Ay, tags: ['designer'] },
     { title: 'De bezoeker kan het Form Field Label tot 400% vergroten zonder verlies van functionaliteit of informatie.', sc: '1.4.10', status: '', component: g.Ay, tags: ['developer', 'designer'] },
     { title: 'Het Form Field Label is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: A.Ay, tags: ['developer'] },
     { title: 'Het Form Field Label komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: k.Ay, tags: ['developer'] },
     { title: 'Het Form Field Label beschrijft wat de bezoeker moet invullen.', sc: '2.4.6', status: '', component: f.Ay, tags: ['designer', 'contentmaker'] },
     { title: 'Als het Form Field Label in een andere taal is dan de taal van de pagina, dan heeft het label-element een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: b.Ay, tags: ['developer'] },
     { title: 'Elementen voor formulierinvoer met dezelfde functie hebben hetzelfde label.', sc: '3.2.4', status: '', component: j.Ay, tags: ['designer', 'contentmaker'] },
    ],
    C = [
     {
      title: 'Het Form Field Label kan aan een element voor formulierinvoer gekoppeld worden.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, a.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst van het Form Field Label vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: h.Ay, tags: ['developer'] },
     { title: 'Tekst in het Form Field Label blijft leesbaar wanneer de tekstafstand vergroot wordt. ', sc: '1.4.12', status: '', component: m.Ay, tags: ['developer'] },
     { title: 'Het Form Field Label is standaard niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'Het Form Field Label komt standaard niet voor in de focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: v.Ay, tags: ['developer'] },
    ];
   var T = t(21034),
    F = t(89786);
   const R = { title: 'Form Field Label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Form Field Label', pagination_label: 'Form Field Label', description: 'Toont een tekstlabel dat informeert over de in te vullen informatie.', issue_number: 177, slug: '/form-field-label', keywords: ['caption', 'form', 'field label', 'form field label', 'form input', 'form label', 'formlabel', 'formulier', 'formulierelement', 'input label', 'label', 'text label', 'textlabel'] },
    G = void 0,
    N = {},
    L = 'Form Field Label',
    D = 'Toont een tekstlabel dat informeert over de in te vullen informatie.',
    S = 177,
    W = o.find((e) => e.number === S),
    H = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...s.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...l.RM, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function _(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(T.Fc, { component: W, headingLevel: 1, description: D }), '\n', (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, i.jsx)(s.Ay, {}), '\n', (0, i.jsx)(F.b, { headingLevel: '4', children: y.map(({ component: e, ...n }) => (0, i.jsx)(F.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(F.b, { headingLevel: '4', children: C.map(({ component: e, ...n }) => (0, i.jsx)(F.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(T.VK, { component: W, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(T.mu, { component: W, headingLevel: 3 }), '\n', (0, i.jsx)(T.K_, { component: W }), '\n', (0, i.jsx)(T.$9, { component: W, headingLevel: 2 })] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(_, { ...e }) }) : _(e);
   }
  },
 },
]);
