'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79490],
 {
  31641(e, n, i) {
   i.d(n, { W: () => u });
   var r = i(29181),
    t = i(46847),
    a = i(56561),
    s = i(30758),
    l = i(27890),
    d = i(90515),
    o = i(13526),
    c = i(86070);
   const u = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: u = '', firstNameFieldId: p = '', orgId: m = '', interestsId: h = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: v = !1, disallowedInterestValues: x = [], workAreasId: y = '', privacyPolicyId: b = '', language: k, submitText: f = '', talkTitleId: $ = '', talkDescriptionId: w = '', roleId: D = '', roleLegend: I = 'Wat is jouw rol?', roles: R = [], roleRequired: z = !1 }) => {
    const {
      register: B,
      handleSubmit: _,
      formState: { errors: N },
     } = (0, l.mN)({ mode: 'onBlur' }),
     S = (0, s.useRef)(null),
     H = '2' === k?.value,
     O = (0, d.c)() ? window.location.search : '',
     q = new URLSearchParams(O),
     F = q.get('prefillEmail'),
     M = q.get('prefillName'),
     T =
      !!(h && j.length > 0) &&
      ((e, n) => {
       const i = [];
       let r = 1;
       for (let t = 0; t < e.length; t++) {
        for (; n.includes(r); ) r++;
        (i.push(r), r++);
       }
       return i;
      })(j, x);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: _(() => {
      S.current.submit();
     }),
     children: [(0, c.jsxs)(r.zB, { type: 'email', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(r.lR, { htmlFor: `id-${u}`, children: H ? 'Email address ' : 'E-mailadres' }) }), N[u] && (0, c.jsx)(r.YB, { role: 'alert', id: `${u}-error`, children: N[u].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: `id-${u}`, name: u, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', 'aria-describedby': N[u] && `${u}-error`, ...B(`${u}`, { required: { value: !0, message: H ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: H ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[u] }) })] }), (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(r.lR, { htmlFor: p, children: H ? 'Name' : 'Naam' }) }), N[p] && (0, c.jsx)(r.YB, { role: 'alert', id: `${p}-error`, children: N[p].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: p, name: p, type: 'text', defaultValue: M, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': N[p] && `${p}-error`, ...B(`${p}`, { required: { value: !0, message: H ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[p] }) })] }), $ && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(r.lR, { htmlFor: $, children: H ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(r.JM, { id: `${$}-description`, children: H ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: $, name: $, 'aria-describedby': `${$}-description`, ...B($, { required: { value: !0, message: H ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(r.lR, { htmlFor: w, children: H ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(r.JM, { id: `${w}-description`, children: H ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.TM, { id: w, name: w, rows: 12, 'aria-describedby': `${w}-description`, ...B(w, { required: { value: !0, message: H ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(r.lR, { htmlFor: m, children: H ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[m] && (0, c.jsx)(r.YB, { children: N[m].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.Rj, { id: m, name: m, type: 'text', autoComplete: 'organization' }) })] }), h && (0, c.jsxs)(r.LB, { 'aria-describedby': `${h}-description`, children: [(0, c.jsxs)(r.u4, { children: [g, !v && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${h}-description`, children: 'Meerdere antwoorden mogelijk.' }), j.map((e, n) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${h}[]`, value: T[n], id: `${h}-${T[n]}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${h}-${T[n]}`, children: e })] }, e))] }), D && (0, c.jsxs)(r.LB, { 'aria-describedby': `${D}-description`, children: [(0, c.jsxs)(r.u4, { children: [I, !z && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${D}-description`, children: 'Meerdere antwoorden mogelijk.' }), R.map((e, n) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${D}[]`, id: `${D}-${n}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${D}-${n}`, children: e })] }, e))] }), y && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(r.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(r.JM, { id: `${y}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(r.TM, { id: y, name: y, 'aria-describedby': `${y}-description` }) })] }), b && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(r.JM, { id: `${b}-description`, children: H ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { value: '1', id: `${b}-1`, 'aria-describedby': (0, o.A)({ [`${b}-description`]: !0, [`${b}-error`]: N[b] }), 'aria-required': 'true', ...B(`${b}[]`, { required: { value: !0, message: H ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${b}`] }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${b}-1`, children: H ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[`${b}`] && (0, c.jsx)(r.YB, { role: 'alert', id: `${b}-error`, children: N[`${b}`].message })] }), k?.id && (0, c.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, c.jsx)(r.e2, { children: (0, c.jsx)(t.$, { type: 'submit', purpose: 'primary', children: f || (H ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, n, i) {
   i.d(n, { $: () => r.$n });
   var r = i(50805);
  },
  90515(e, n, i) {
   i.d(n, { c: () => t });
   var r = i(30758);
   function t() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  96624(e, n, i) {
   (i.r(n), i.d(n, { assets: () => o, contentTitle: () => d, default: () => p, frontMatter: () => l, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"community/events/design-open-hour/aanmelden","title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","source":"@site/docs/community/events/design-open-hour/aanmelden.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden","permalink":"/events/design-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","permalink":"/events/design-open-hour"},"next":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour"}}');
   var t = i(86070),
    a = i(18439),
    s = i(31641);
   const l = { title: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    d = 'Meld je aan voor de Design Open Hour',
    o = {},
    c = [];
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }) }), '\n', (0, t.jsx)(n.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(s.W, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
