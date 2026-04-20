'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28568],
 {
  1292(e, n, t) {
   t.d(n, { r: () => g });
   var i = t(29181),
    a = t(74172),
    r = t(15089),
    o = t(28377),
    l = t(33648),
    s = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(a.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(o.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(i.In, { children: c[e] || (0, d.jsx)(s.A, {}) });
  },
  17045(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  19776(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  24838(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, i.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => a, KF: () => u, mJ: () => h, VZ: () => w, cR: () => D, Pv: () => j, qZ: () => o, kD: () => k, B2: () => m, Pc: () => s, f4: () => l, GT: () => v, fX: () => r, eQ: () => b, B_: () => x, o_: () => f, Rc: () => F });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
    j = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: a, value: r }) => {
        const o = /^(.+) URL/.exec(i)[1],
         l = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: a, value: r, description: l };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    f = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function k(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? k(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function F(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const D = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  34257(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, i.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, i.jsx)(n.code, { children: 'em' }), ' of ', (0, i.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, i.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  37131(e, n, t) {
   t.d(n, { VK: () => j, $9: () => x, mu: () => f, Fc: () => b, K_: () => k });
   var i = t(29181),
    a = t(13526),
    r = t(1292),
    o = t(90495),
    l = t(54565);
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
   var g = t(67970),
    u = t(72642),
    m = t(58876),
    p = t(33062);
   const h = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Form Field Error Message","slug":"form-field-error message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}]}'),
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      r = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(i.If, { sections: r.map((t) => ({ className: (0, a.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(i) }, i)) }), (0, d.jsx)(i.fz, { children: (0, d.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
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
            a = t?.value,
            l = (0, p.Pv)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => s.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            o.Zp,
            {
             className: 'ma-implementation-card',
             children: (0, d.jsxs)(o.Wu, {
              children: [
               (0, d.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(i.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || l.length > 0) && (0, d.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(i.dk, {
                  links: g
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, d.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(i.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(i.Xy, { children: [a ? (0, d.jsxs)(i.Er, { children: ['Vul de ', (0, d.jsx)(i.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(i.Er, { children: [(0, d.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && p.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: a && (0, d.jsx)(g.D, { state: a }), children: e.title }), (0, d.jsx)(i.fz, { lead: !0, children: t })] });
    },
    k = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(i.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [e.slug ? (0, d.jsx)(i.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  40808(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  54565(e, n, t) {
   t.d(n, { c: () => a });
   var i = t(30758);
   function a() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  55552(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { code: 'code', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, i.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, i.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  58160(e, n, t) {
   (t.r(n), t.d(n, { assets: () => D, component: () => N, contentTitle: () => F, default: () => T, description: () => y, frontMatter: () => v, issueNumber: () => A, metadata: () => i, title: () => w, toc: () => S }));
   const i = JSON.parse('{"id":"componenten/form-field-description/index","title":"Form Field Description","description":"Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.","source":"@site/docs/componenten/form-field-description/index.mdx","sourceDirName":"componenten/form-field-description","slug":"/form-field-description","permalink":"/form-field-description","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/form-field-description/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Form Field Description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Form Field Description","pagination_label":"Form Field Description","description":"Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.","slug":"/form-field-description","keywords":["beschrijving","description","form","form field","form field description","form field help text","form field hint","formulier","formulierelement","helper","help text","hint","hint label","hint tekst","hint text"]},"sidebar":"componenten","previous":{"title":"Form Field","permalink":"/form-field"},"next":{"title":"Form Field Error Message","permalink":"/form-field-error-message"}}');
   var a = t(86070),
    r = t(18439),
    o = t(64792),
    l = t(17045),
    s = t(19776),
    d = t(40808);
   function c(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Koppel de Form Field Description met ', (0, a.jsx)(n.code, { children: 'aria-describedby' }), ' aan het bijbehorende element voor formulierinvoer:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Zorg ervoor dat de tekst in de Form Field Description niet ingeklapt is, zoals het geval is in een ', (0, a.jsx)(n.code, { children: 'details' }), ' en ', (0, a.jsx)(n.code, { children: 'summary' }), ' combinatie. De verborgen tekst wordt in de browsers Firefox en Safari (', (0, a.jsx)(n.a, { href: '/baseline/2026-03/', children: 'NL Design System baseline maart 2026' }), ') niet door ', (0, a.jsx)(n.a, { href: '/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader', children: 'screenreaders' }), ' voorgelezen.'] }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke instructies en beschrijvingen' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function g(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['De Form Field Description kan met ', (0, a.jsx)(n.code, { children: 'aria-describedby' }), ' aan het bijbehorende element voor formulierinvoer worden gekoppeld.'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke descriptions bij formuliervelden' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.p, { children: 'Zorg ervoor dat instructies die nodig zijn om te begrijpen wat er van de bezoeker verwacht wordt op een logische plek staan en gekoppeld zijn aan het element voor formulierinvoer.' }), '\n', (0, a.jsx)(n.p, { children: 'De meest gebruiksvriendelijke plek voor instructies is tussen het label en het element voor formulierinvoer. Als instructies er \xf3nder staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.' }), '\n', (0, a.jsxs)(n.p, { children: ['Een screenreader schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna instructies t\xfassen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel instructies daarom ook aan het element voor formulierinvoer met ', (0, a.jsx)(n.code, { children: 'aria-describedby' }), '. Op die manier wordt de beschrijving voorgelezen wanneer de toetsenbordfocus op dat element staat.'] }), '\n', (0, a.jsx)(n.p, { children: 'Voorbeeld:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Toegankelijke instructies en beschrijvingen' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Toegankelijke formulieren' }) }), '\n'] })] });
   }
   var m = t(55552),
    p = t(83329),
    h = t(83672),
    j = t(34257),
    f = t(24838);
   const x = [
     {
      title: 'De Form Field Description is gekoppeld aan het bijbehorende element voor formulierinvoer',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
      },
      tags: ['developer'],
     },
     {
      title: 'De Form Field Description staat op een logische plek',
      sc: '1.3.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['designer', 'developer'],
     },
     { title: 'Instructies in de Form Field Description zijn op een inclusieve manier beschreven.', sc: '1.3.3', status: '', component: t(91391).Ay, tags: ['designer', 'contentmaker'] },
     { title: 'De tekst in de Form Field Description heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.', sc: '1.4.3', status: '', component: h.Ay, tags: ['designer'] },
     { title: 'Als je de tekst van de Form Field Description vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: j.Ay, tags: ['developer'] },
     { title: 'De bezoeker kan de Form Field Description tot 400% vergroten zonder verlies van functionaliteit of informatie.', sc: '1.4.10', status: '', component: m.Ay, tags: ['developer', 'designer'] },
     { title: 'Als de Form Field Description in een andere taal is dan de taal van de pagina, dan heeft het een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: f.Ay, tags: ['developer'] },
    ],
    b = [
     {
      title: 'De Form Field Description kan aan een element voor formulierinvoer gekoppeld worden.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, r.R)(), ...e.components };
       return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(g, { ...e }) }) : g(e);
      },
      tags: ['developer'],
     },
     { title: 'Tekst in de Form Field Description blijft leesbaar wanneer de tekstafstand vergroot wordt. ', sc: '1.4.12', status: '', component: p.Ay, tags: ['developer'] },
    ];
   var k = t(37131);
   const v = { title: 'Form Field Description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Form Field Description', pagination_label: 'Form Field Description', description: 'Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.', slug: '/form-field-description', keywords: ['beschrijving', 'description', 'form', 'form field', 'form field description', 'form field help text', 'form field hint', 'formulier', 'formulierelement', 'helper', 'help text', 'hint', 'hint label', 'hint tekst', 'hint text'] },
    F = void 0,
    D = {},
    w = 'Form Field Description',
    y = 'Toont ondersteunende tekst en biedt extra context over de in te vullen informatie.',
    A = 174,
    N = o.find((e) => e.number === A),
    S = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...s.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...l.RM, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function L(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, r.R)(), ...e.components },
     { Checklist: t, ChecklistItem: i } = n;
    return (t || C('Checklist', !0), i || C('ChecklistItem', !0), (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(k.Fc, { component: N, headingLevel: 1, description: y }), '\n', (0, a.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, a.jsx)(d.Ay, {}), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, a.jsx)(s.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: x.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, a.jsx)(l.Ay, {}), '\n', (0, a.jsx)(t, { headingLevel: '4', children: b.map(({ component: e, ...n }) => (0, a.jsx)(i, { ...n, children: (0, a.jsx)(e, {}) })) }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(k.VK, { component: N, headingLevel: 3 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(k.mu, { component: N, headingLevel: 3 }), '\n', (0, a.jsx)(k.K_, { component: N }), '\n', (0, a.jsx)(k.$9, { component: N, headingLevel: 2 })] }));
   }
   function T(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(L, { ...e }) }) : L(e);
   }
   function C(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => l });
   var i = t(46447),
    a = t(13526),
    r = t(33062),
    o = t(86070);
   const l = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, o.jsx)(i.KE, { className: (0, a.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => r });
   var i = t(13526),
    a = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...o }) => (0, a.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  83329(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, i.jsx)(n.code, { children: ':root' }), ') niveau.'] }), '\n', (0, i.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, i.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, i.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, i.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, i.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  83672(e, n, t) {
   t.d(n, { Ay: () => o });
   var i = t(86070),
    a = t(18439);
   function r(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, i.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => o, Wu: () => l, Zp: () => s });
   var i = t(46447),
    a = t(13526),
    r = t(86070);
   const o = ({ background: e, children: n, className: t, ...i }) => (0, r.jsx)('div', { className: (0, a.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...i, children: n }),
    l = (e) => (0, r.jsx)('div', { className: 'ma-card__content', ...e }),
    s = ({ href: e, appearance: n, className: t, component: o = 'div', background: l, children: s }) => {
     const d = (e) => ('article' === o ? (0, r.jsx)('article', { ...e }) : 'section' === o ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, a.A)('ma-cardgroup__card', l && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: s });
     return e ? (0, r.jsx)(i.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, r.jsx)('div', { className: (0, a.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  91391(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    a = t(18439);
   const r = [];
   function o(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Geef instructies op een inclusieve manier. De instructies kunnen begrijpen moet niet afhankelijk zijn van eigenschappen die sommige gebruikers niet ervaren.' }), '\n', (0, i.jsx)(n.p, { children: 'Het gaat hierbij om eigenschappen zoals vorm, kleur, afmeting, locatie op het scherm, richting, of geluid. Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: '"De fouten zijn met een rode rand gemarkeerd". Niet iedereen kan zien, niet iedereen kan de kleur rood van zwart onderscheiden.' }), '\n', (0, i.jsx)(n.li, { children: '"Klik op de meest rechtse knop". Niet iedereen kan zien, sommige gebruikers zijn ingezoomd waardoor de knoppen op twee regels staan.' }), '\n', (0, i.jsx)(n.li, { children: '"Als je het geluid hoort, heb je nog 5 minuten." Niet iedereen kan dat geluid goed horen of heeft het geluid aanstaan.' }), '\n'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
