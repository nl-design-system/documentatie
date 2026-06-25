'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [66449],
 {
  8584(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  12761(e, n, t) {
   t.d(n, { VK: () => f, $9: () => w, mu: () => v, Fc: () => D, K_: () => A });
   var a = t(29181),
    i = t(13526),
    o = t(39948),
    r = t(26655),
    s = t(46565);
   function l(e) {
    return (0, s.c)() ? e.children() : null;
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
   var u = t(31522),
    g = t(15042),
    m = t(58876),
    p = t(76097);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = t(96345),
    x = t(37168);
   const b = ({ className: e, ...n }) => {
     const t = (0, i.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, d.jsx)('div', { className: t, children: n.children });
    },
    k = ({ className: e, heading: n, headingLevel: t, headingApperance: a, ...o }) => {
     const r = (0, i.A)('utrecht-accordion__section', e);
     return (0, d.jsxs)('details', { className: r, ...o, children: [(0, d.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, d.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, d.jsx)('span', { className: 'nl-button__icon-start', children: (0, d.jsx)(j.A, {}) }), (0, d.jsx)('span', { className: 'nl-button__label', children: (0, d.jsx)(x.D, { level: t, appearance: a, children: n }) })] }) }), (0, d.jsx)('div', { className: 'utrecht-accordion__panel', children: o.children })] });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      o = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(b, { children: o.map((t) => (0, d.jsx)(k, { className: (0, i.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
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
            a = n.progress.max - n.progress.value;
           return t === a ? e.title.localeCompare(n.title) : t - a;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            s = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || s.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: u
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, d.jsx)(d.Fragment, { children: s.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(a.fz, { children: 'Er zijn nog geen implementaties' });
    },
    w = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [i ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    D = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g.p, { level: n, suffix: i && (0, d.jsx)(u.D, { state: i }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    },
    A = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(a.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  15042(e, n, t) {
   t.d(n, { p: () => o });
   var a = t(13526),
    i = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...r }) => (0, i.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  21757(e, n, t) {
   (t.r(n), t.d(n, { assets: () => P, component: () => $, contentTitle: () => M, default: () => X, description: () => E, frontMatter: () => I, issueNumber: () => O, metadata: () => a, title: () => V, toc: () => U }));
   const a = JSON.parse('{"id":"componenten/accordion/index","title":"Accordion","description":"Secties met de mogelijkheid om gerelateerde content te tonen en weer te verbergen.","source":"@site/docs/componenten/accordion/index.mdx","sourceDirName":"componenten/accordion","slug":"/accordion","permalink":"/accordion","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/accordion/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Accordion","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Accordion","pagination_label":"Accordion","description":"Secties met de mogelijkheid om gerelateerde content te tonen en weer te verbergen.","slug":"/accordion","keywords":["accordeon","accordion","aria-expanded","collapse","collapsible","details","disclosure","expand","expandable","expandable section","expanded","ingeklapt","inklappen","secties","sections","toggle","uitgeklapt","uitklappen","uitklapper","lamellen","blinders"]},"sidebar":"componenten","previous":{"title":"Overzicht","permalink":"/componenten/"},"next":{"title":"Action Group","permalink":"/action-group"}}');
   var i = t(86070),
    o = t(18439),
    r = t(82461),
    s = t(62528),
    l = t(12761);
   function d(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De staat van de accordion \u2013 ingeklapt of uitgeklapt \u2013 is beschikbaar voor hulpsoftware. Bijvoorbeeld met het ', (0, i.jsx)(n.code, { children: 'aria-expanded' }), ' attribuut op het ', (0, i.jsx)(n.code, { children: 'button' }), ' element dat uitklapt, of door een ', (0, i.jsx)(n.code, { children: 'details' }), ' en ', (0, i.jsx)(n.code, { children: 'summary' }), ' combinatie.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Wanneer de tekst in de ', (0, i.jsx)(n.code, { children: 'button' }), ' of de ', (0, i.jsx)(n.code, { children: 'summary' }), ' van de ', (0, i.jsx)(n.code, { children: 'details' }), ' en ', (0, i.jsx)(n.code, { children: 'summary' }), ' combinatie een kop is voor de content \xedn de accordion, is de tekst opgemaakt met een ', (0, i.jsx)(n.code, { children: 'h' }), ' element. Welk niveau de kop heeft, is afhankelijk van de structuur van de pagina.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/koppen/', children: 'Koppen' }) }), '\n'] })] });
   }
   function c(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Kleur is niet het enige visuele middel is om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden. Niet iedereen kan kleuren zien of verandering in kleur of kleurcontrast opmerken.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld: Als niet met een icoon, maar door een kleurverandering in de tekst wordt aangegeven of een accordion geopend of gesloten is, is dit niet voor iedereen duidelijk.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'Gebruik kleur met een doel' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function u(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Het contrast van de tekstkleur ten opzichte van de achtergrondkleur moet hoog genoeg zijn, zodat de tekst in het algemeen goed leesbaar wordt gevonden.\nDe criteria voor kleurcontrast zijn:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23767676', children: '4,5:1 contrast' }), ' voor normale tekst.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/contrast/?background-color=white&color=%23949494', children: '3:1 contrast' }), ' voor grotere letters (vanaf 24 pixels).'] }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function g(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet tekst twee keer (200%) kunnen vergroten. Het gaat hierbij alleen om het vergroten van tekst en niet om bijvoorbeeld afbeeldingen of de layout.\nAlle functies moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn. Er mag geen inhoud buiten beeld vallen, verborgen zijn of maar gedeeltelijk zichtbaar zijn.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function m(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De tekst in de gebruikersinterface om de accordion te openen (bijvoorbeeld de button of een details summary combinatie) bestaat uit tekst, niet uit tekst in een afbeelding.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijn:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function p(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de achtergrondkleur en de kleur van componenten die visueel betekenis hebben.\nBijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Een icoon dat betekenis heeft, zoals het icoon dat aangeeft dat een accordion in- of uitgeklapt kan worden.' }), '\n', (0, i.jsx)(n.li, { children: 'De omranding van accordion, om aan te geven waar de gebruiker kan klikken met de muis of touch.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Het gemeten kleurcontrast tussen het element en de achtergrond moet minstens 3:1 zijn.' })] });
   }
   function h(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Het plaatsen van toetsenbordfocus of hover op de accordion, zorgt er niet voor dat de accordion opent.' });
   }
   function j(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De accordion is bereikbaar met de Tab-toets, en opent en sluit met de entertoets en met de spatietoets.' }), '\n', (0, i.jsxs)(n.p, { children: ['Met een ', (0, i.jsx)(n.code, { children: 'button' }), ' element en met een ', (0, i.jsx)(n.code, { children: 'details' }), ' en ', (0, i.jsx)(n.code, { children: 'summary' }), ' combinatie gaat dit automatisch goed. Voor een ', (0, i.jsx)(n.code, { children: 'div' }), ' element waar ', (0, i.jsx)(n.code, { children: 'role = "button"' }), ' en ', (0, i.jsx)(n.code, { children: 'aria-expanded' }), ' aan worden toegevoegd, moet de toetsenbordinteractie nog worden toegevoegd.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n'] })] });
   }
   function x(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Wanneer de accordion ingeklapt is, krijgen interactieve elementen in de ingeklapte content geen toetsenbordfocus.' });
   }
   function b(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De tekst in de gebruikersinterface om de accordion te openen beschrijft duidelijk de inhoud van de content in de accordion.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst/', children: 'Duidelijke buttontekst die beschrijft wat de button doet' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b(e);
   }
   function f(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat, als de gebruiker de accordion aanraakt met een enkele aanwijzer, zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit voorkomt het per ongeluk aanraken en openen van content, wanneer het niet de bedoeling was.' }), '\n', (0, i.jsxs)(n.p, { children: ['Met zowel een ', (0, i.jsx)(n.code, { children: 'button' }), ' element als met een ', (0, i.jsx)(n.code, { children: 'details' }), ' en ', (0, i.jsx)(n.code, { children: 'summary' }), ' combinatie gaat dit automatisch goed. Met een div-element waarop ', (0, i.jsx)(n.code, { children: 'role= "button"' }), ' is geplaatst, moet zowel de toetsenbordinteractie als de interactie voor muis en touch nog worden toegevoegd. Gebruik voor dit laatste bij voorkeur het ', (0, i.jsx)(n.code, { children: 'click' }), '-event, omdat dit apparaatonafhankelijk is.'] })] });
   }
   function v(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De tekst in de gebruikersinterface om de accordion te activeren komt voor in:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'De toegankelijke naam van de button, of;' }), '\n', (0, i.jsxs)(n.li, { children: ['In de ', (0, i.jsx)(n.code, { children: 'summary' }), ' van de ', (0, i.jsx)(n.code, { children: 'details' }), ' en ', (0, i.jsx)(n.code, { children: 'summary' }), ' combinatie.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/zichtbare-naam/', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n'] })] });
   }
   function w(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Maak het aanwijsgebied van de accordion groot genoeg, zodat het makkelijker is om deze te selecteren. Houd hiervoor een grootte aan van tenminste 44 bij 44 pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik bijvoorbeeld een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '. Dit maakt de grootte van het element schaalbaar relatief aan de grootte van de letters op de pagina.'] }), '\n', (0, i.jsx)(n.p, { children: 'Om er voor te zorgen dat het aanwijsgebied van de accordion in \xe1lle gevallen minimaal 44 bij 44 pixels is, kunnen de CSS-eigenschappen min-inline-size en min-block-size behulpzaam zijn.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit zorgt ervoor dat de website makkelijker te navigeren en te bedienen is. Dit geldt speciaal voor mensen die werken op kleine aanraakschermen en muisgebruikers met trillende handen door bijvoorbeeld Parkinson.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function D(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als de gebruiker de accordion opent of sluit, blijft de focus op het element waarmee de accordion geopend of gesloten wordt.' });
   }
   function A(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Het onderdeel van de gebruikersinterface waarmee een bezoeker de accordion opent, heeft de rol ', (0, i.jsx)(n.code, { children: 'button' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Opties:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Wanneer een details en summary combinatie gebruikt wordt, heeft het summary element voor hulpsoftware automatisch de juiste rol.' }), '\n', (0, i.jsxs)(n.li, { children: ['Een HTML ', (0, i.jsx)(n.code, { children: 'button' }), ' heeft ook automatisch de juiste rol. Het is mogelijk om met ARIA een ', (0, i.jsx)(n.code, { children: 'role=button' }), ' toe te voegen aan een ander element dan een ', (0, i.jsx)(n.code, { children: 'button' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'De staat van de accordion (open of dicht) moet ook beschikbaar zijn voor hulpsoftware.' }), '\n', (0, i.jsx)(n.p, { children: 'Opties:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Wanneer een details en summary combinatie gebruikt wordt, gaat dit automatisch goed.' }), '\n', (0, i.jsx)(n.li, { children: 'Bij een knop moet de staat worden aangegeven met het aria-expanded attribuut.' }), '\n'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button aria-expanded="true">Menu</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Let erop dat je hiervoor JavaScript nodig hebt en zorg ervoor dat ', (0, i.jsx)(n.code, { children: 'aria-expanded' }), ' de waarde ', (0, i.jsx)(n.code, { children: 'false' }), ' krijgt wanneer het menu weer is ingeklapt.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam/', children: 'De toegankelijke naam van een button' }) }), '\n'] })] });
   }
   var z = t(30536),
    F = t(32066),
    y = t(36599),
    N = t(45411),
    L = t(8584),
    R = t(69488),
    S = t(31820),
    H = t(87711);
   const T = [
     {
      title: 'De informatie in de accordeon bestaat uit tekst, niet uit tekst in een afbeelding',
      sc: '1.4.5',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
      },
     },
     { title: 'Het is duidelijk welke content in de accordion aanwezig is', sc: '2.4.6', status: '', component: k },
     {
      title: 'De bezoeker kan het openen van de accordion of een interactief element in de accordion annuleren',
      sc: '2.5.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
      },
     },
     {
      title: 'De visuele naam van de accordion komt voor in de toegankelijke naam van de accordion',
      sc: '2.5.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
      },
     },
     {
      title: 'Het aanwijsgebied van de accordion is groot genoeg',
      sc: '2.5.5',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w(e);
      },
     },
     { title: 'Als de accordion tekst bevat in een taal anders dan de aangegeven taal van de pagina, is er een taalwissel aanwezig', sc: '3.1.2', status: '', component: R.Ay },
     { title: 'Het gedrag van de accordion is voorspelbaar', sc: '3.2.1', status: '', component: S.Ay },
     {
      title: 'Het openen of sluiten van de accordion verplaatst de focus niet',
      sc: '3.2.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(D, { ...e }) }) : D(e);
      },
     },
    ],
    C = [
     {
      title: 'Informatie in of over de accordion is niet alleen te begrijpen door middel van kleur',
      sc: '1.4.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
      },
     },
     {
      title: 'De contrastratio tussen de tekst en de achtergrondkleur in de accordion is hoog genoeg',
      sc: '1.4.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
      },
     },
     {
      title: 'Niet-tekstuele content in de accordion heeft een contrastratio van minimaal 3:1 met de achtergrond',
      sc: '1.4.11',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
      },
     },
     { title: 'Interactieve elementen in de accordion hebben een zichtbare focusstyling', sc: '2.4.7', status: '', component: N.Ay },
     { title: 'Accordions met dezelfde functie of informatie zien er op iedere pagina waar de accordion voorkomt hetzelfde uit', sc: '3.2.4', status: '', component: H.Ay },
    ],
    _ = [
     {
      title: 'Tekst in de accordion kan 200% vergroot worden zonder verlies van functionaliteit of informatie',
      sc: '1.4.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
      },
     },
     { title: 'De bezoeker kan de accordeon tot 400% vergroten zonder verlies van functionaliteit of informatie', sc: '1.4.10', status: '', component: z.Ay },
     { title: 'De tekstopmaak in de accordion kan aangepast worden zonder verlies van functionaliteit of informatie', sc: '1.4.12', status: '', component: F.Ay },
     {
      title: 'De accordion opent niet bij hover of focus.',
      sc: '1.4.13',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
      },
     },
    ],
    B = [
     {
      title: 'De accordion is bedienbaar met het toetsenbord',
      sc: '2.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
      },
     },
     { title: 'De accordion zorgt niet voor een toetsenbordval', sc: '2.1.2', status: '', component: y.Ay },
     {
      title: 'De focusvolgorde rondom en in de accordion is logisch',
      sc: '2.4.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
      },
     },
     { title: 'Interactieve elementen in de accordion hebben een zichtbare focusstyling', sc: '2.4.6', status: '', component: k },
     { title: 'De accordion wordt niet bedekt door andere content', sc: '2.4.11', status: '', component: L.Ay },
    ],
    G = [
     {
      title: 'De staat van de accordion is beschikbaar voor hulpsoftware',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
      },
     },
     { title: 'Het is duidelijk welke content in de accordion aanwezig is', sc: '2.4.6', status: '', component: k },
     { title: 'Als de accordion tekst bevat in een taal anders dan de aangegeven taal van de pagina, is er een taalwissel aanwezig', sc: '3.1.2', status: '', component: R.Ay },
     {
      title: 'De accordion heeft een toegankelijke naam, rol en status',
      sc: '4.1.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(A, { ...e }) }) : A(e);
      },
     },
    ],
    I = { title: 'Accordion', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Accordion', pagination_label: 'Accordion', description: 'Secties met de mogelijkheid om gerelateerde content te tonen en weer te verbergen.', slug: '/accordion', keywords: ['accordeon', 'accordion', 'aria-expanded', 'collapse', 'collapsible', 'details', 'disclosure', 'expand', 'expandable', 'expandable section', 'expanded', 'ingeklapt', 'inklappen', 'secties', 'sections', 'toggle', 'uitgeklapt', 'uitklappen', 'uitklapper', 'lamellen', 'blinders'] },
    M = void 0,
    P = {},
    V = 'Accordion',
    E = 'Secties met de mogelijkheid om gerelateerde content te tonen en weer te verbergen.',
    O = 102,
    $ = r.find((e) => e.number === O),
    U = [{ value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }, { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 }, ...s.RM];
   function W(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components },
     { CriteriaList: t, CriteriaListItem: a } = n;
    return (t || Z('CriteriaList', !0), a || Z('CriteriaListItem', !0), (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(l.Fc, { component: $, headingLevel: 1, description: E }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(l.VK, { component: $, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(l.mu, { component: $, headingLevel: 3 }), '\n', (0, i.jsx)(l.K_, { component: $ }), '\n', (0, i.jsx)(n.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }), '\n', (0, i.jsx)(s.Ay, {}), '\n', (0, i.jsx)(t, { headingLevel: 3, testCategory: 'Toegankelijkheid algemeen', children: T.map(({ component: e, ...n }) => (0, i.jsx)(a, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 3, testCategory: 'Toegankelijkheid visueel ontwerp', children: C.map(({ component: e, ...n }) => (0, i.jsx)(a, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 3, testCategory: 'Toegankelijkheid zoom en herschalen', children: _.map(({ component: e, ...n }) => (0, i.jsx)(a, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 3, testCategory: 'Toegankelijkheid toetsenbord', children: B.map(({ component: e, ...n }) => (0, i.jsx)(a, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 3, testCategory: 'Toegankelijkheid screenreader', children: G.map(({ component: e, ...n }) => (0, i.jsx)(a, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(l.$9, { component: $, headingLevel: 2 })] }));
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(W, { ...e }) }) : W(e);
   }
   function Z(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  26655(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => r, Wu: () => s, Zp: () => l });
   var a = t(46447),
    i = t(13526),
    o = t(86070);
   const r = ({ background: e, children: n, className: t, ...a }) => (0, o.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...a, children: n }),
    s = (e) => (0, o.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: r = 'div', background: s, children: l }) => {
     const d = (e) => ('article' === r ? (0, o.jsx)('article', { ...e }) : 'section' === r ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', s && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, o.jsx)(a.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, o.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  30536(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, a.jsx)(n.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, a.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, a.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, a.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  31522(e, n, t) {
   t.d(n, { D: () => s });
   var a = t(46447),
    i = t(13526),
    o = t(76097),
    r = t(86070);
   const s = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, r.jsx)(a.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  31820(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, a.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, a.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  32066(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Tekst is door bezoekers aan te passen.' }), '\n', (0, a.jsx)(n.p, { children: 'Bezoekers kunnen eigen instelling en voorkeuren hebben voor hoe teksten eruit zien. Deze instellingen moeten ondersteund worden. Er mag geen inhoud of functionaliteit wegvallen. De volgende instellingen moeten ondersteund worden:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Een regelhoogte van ten minste 1,5 keer de lettergrootte;' }), '\n', (0, a.jsx)(n.li, { children: "Een afstand tussen alinea's van ten minste 2 keer de lettergrootte;" }), '\n', (0, a.jsx)(n.li, { children: 'Een letterafstand van ten minste 0,12 keer de lettergrootte;' }), '\n', (0, a.jsx)(n.li, { children: 'Een afstand tussen woorden van ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Bijvoorbeeld voor mensen met een visuele beperking en mensen met dyslexie.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  36599(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  39948(e, n, t) {
   t.d(n, { r: () => u });
   var a = t(29181),
    i = t(74172),
    o = t(15089),
    r = t(28377),
    s = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(s.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  45411(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Dit kan bijvoorbeeld door het gebruik van een focusring (outline).' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  46565(e, n, t) {
   t.d(n, { c: () => i });
   var a = t(30758);
   function i() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  62528(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, a.jsx)(n.p, { children: 'Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  69488(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut ', (0, a.jsx)(n.code, { children: 'lang' }), ' mee te geven.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, a.jsxs)(n.p, { children: ['Met het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  76097(e, n, t) {
   t.d(n, { bo: () => i, KF: () => g, mJ: () => h, VZ: () => D, cR: () => w, Pv: () => j, qZ: () => r, kD: () => f, B2: () => m, Pc: () => l, f4: () => s, GT: () => v, fX: () => o, eQ: () => k, B_: () => b, o_: () => x });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: i, value: o }) => {
        const r = /^(.+) URL/.exec(a)[1],
         s = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: a, id: i, value: o, description: s };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    x = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, x(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  87711(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var a = t(86070),
    i = t(18439);
   const o = [];
   function r(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsx)(n.p, { children: 'Onderdelen die hetzelfde doen moeten ook hetzelfde te herkennen zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
