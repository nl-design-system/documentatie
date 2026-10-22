'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54932],
 {
  23996(e, i, n) {
   (n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => r, toc: () => p }));
   const r = JSON.parse('{"id":"community/events/developer-open-hour/aanmelden","title":"Aanmelden voor de Developer Open Hour","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","source":"@site/docs/community/events/developer-open-hour/aanmelden.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour/aanmelden","permalink":"/events/developer-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor de Developer Open Hour","title_sm":"Aanmelden","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/events/developer-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","permalink":"/events/developer-open-hour"},"next":{"title":"Product Owner Open Hour","permalink":"/events/product-owner-open-hour"}}');
   var t = n(86070),
    a = n(18439),
    s = n(31641);
   const l = { title: 'Aanmelden voor de Developer Open Hour', title_sm: 'Aanmelden', description: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/events/developer-open-hour/aanmelden' },
    o = 'Meld je aan voor de Developer Open Hour',
    d = {},
    p = [];
   function c(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.header, { children: (0, t.jsx)(i.h1, { id: 'meld-je-aan-voor-de-developer-open-hour', children: 'Meld je aan voor de Developer Open Hour' }) }), '\n', (0, t.jsx)(i.p, { children: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.' }), '\n', (0, t.jsx)(i.p, { children: 'Deze Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(s.W, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  31641(e, i, n) {
   n.d(i, { W: () => c });
   var r = n(29181),
    t = n(46847),
    a = n(56561),
    s = n(30758),
    l = n(27890),
    o = n(90515),
    d = n(13526),
    p = n(86070);
   const c = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: c = '', firstNameFieldId: u = '', orgId: h = '', interestsId: m = '', interestsLegend: v = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: x = !1, disallowedInterestValues: g = [], workAreasId: y = '', privacyPolicyId: b = '', language: f, submitText: k = '', talkTitleId: $ = '', talkDescriptionId: w = '', roleId: D = '', roleLegend: I = 'Wat is jouw rol?', roles: _ = [], roleRequired: z = !1 }) => {
    const {
      register: R,
      handleSubmit: B,
      formState: { errors: N },
     } = (0, l.mN)({ mode: 'onBlur' }),
     S = (0, s.useRef)(null),
     O = '2' === f?.value,
     H = (0, o.c)() ? window.location.search : '',
     q = new URLSearchParams(H),
     F = q.get('prefillEmail'),
     M = q.get('prefillName'),
     A =
      !!(m && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let r = 1;
       for (let t = 0; t < e.length; t++) {
        for (; i.includes(r); ) r++;
        (n.push(r), r++);
       }
       return n;
      })(j, g);
    return (0, p.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: B(() => {
      S.current.submit();
     }),
     children: [(0, p.jsxs)(r.zB, { type: 'email', children: [(0, p.jsx)(a.f, { children: (0, p.jsx)(r.lR, { htmlFor: `id-${c}`, children: O ? 'Email address ' : 'E-mailadres' }) }), N[c] && (0, p.jsx)(r.YB, { role: 'alert', id: `${c}-error`, children: N[c].message }), (0, p.jsx)(a.f, { children: (0, p.jsx)(r.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', 'aria-describedby': N[c] && `${c}-error`, ...R(`${c}`, { required: { value: !0, message: O ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: O ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[c] }) })] }), (0, p.jsxs)(r.zB, { type: 'text', children: [(0, p.jsx)(a.f, { children: (0, p.jsx)(r.lR, { htmlFor: u, children: O ? 'Name' : 'Naam' }) }), N[u] && (0, p.jsx)(r.YB, { role: 'alert', id: `${u}-error`, children: N[u].message }), (0, p.jsx)(a.f, { children: (0, p.jsx)(r.Rj, { id: u, name: u, type: 'text', defaultValue: M, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': N[u] && `${u}-error`, ...R(`${u}`, { required: { value: !0, message: O ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[u] }) })] }), $ && (0, p.jsxs)(r.zB, { type: 'text', children: [(0, p.jsxs)(a.f, { children: [(0, p.jsx)(r.lR, { htmlFor: $, children: O ? 'Title of your talk' : 'Titel van je presentatie' }), (0, p.jsx)(r.JM, { id: `${$}-description`, children: O ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, p.jsx)(a.f, { children: (0, p.jsx)(r.Rj, { id: $, name: $, 'aria-describedby': `${$}-description`, ...R($, { required: { value: !0, message: O ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, p.jsxs)(r.zB, { type: 'text', children: [(0, p.jsxs)(a.f, { children: [(0, p.jsx)(r.lR, { htmlFor: w, children: O ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, p.jsx)(r.JM, { id: `${w}-description`, children: O ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, p.jsx)(a.f, { children: (0, p.jsx)(r.TM, { id: w, name: w, rows: 12, 'aria-describedby': `${w}-description`, ...R(w, { required: { value: !0, message: O ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, p.jsxs)(r.zB, { type: 'text', children: [(0, p.jsx)(a.f, { children: (0, p.jsx)(r.lR, { htmlFor: h, children: O ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[h] && (0, p.jsx)(r.YB, { children: N[h].message }), (0, p.jsx)(a.f, { children: (0, p.jsx)(r.Rj, { id: h, name: h, type: 'text', autoComplete: 'organization' }) })] }), m && (0, p.jsxs)(r.LB, { 'aria-describedby': `${m}-description`, children: [(0, p.jsxs)(r.u4, { children: [v, !x && ' (niet verplicht)'] }), (0, p.jsx)(r.JM, { id: `${m}-description`, children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, p.jsxs)(r.zB, { type: 'checkbox', children: [(0, p.jsx)(r.Sc, { name: `${m}[]`, value: A[i], id: `${m}-${A[i]}` }), (0, p.jsx)(r.lR, { type: 'checkbox', htmlFor: `${m}-${A[i]}`, children: e })] }, e))] }), D && (0, p.jsxs)(r.LB, { 'aria-describedby': `${D}-description`, children: [(0, p.jsxs)(r.u4, { children: [I, !z && ' (niet verplicht)'] }), (0, p.jsx)(r.JM, { id: `${D}-description`, children: 'Meerdere antwoorden mogelijk.' }), _.map((e, i) => (0, p.jsxs)(r.zB, { type: 'checkbox', children: [(0, p.jsx)(r.Sc, { name: `${D}[]`, id: `${D}-${i}` }), (0, p.jsx)(r.lR, { type: 'checkbox', htmlFor: `${D}-${i}`, children: e })] }, e))] }), y && (0, p.jsxs)(r.zB, { type: 'text', children: [(0, p.jsxs)(a.f, { children: [(0, p.jsx)(r.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, p.jsx)(r.JM, { id: `${y}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, p.jsx)(a.f, { children: (0, p.jsx)(r.TM, { id: y, name: y, 'aria-describedby': `${y}-description` }) })] }), b && (0, p.jsxs)(r.zB, { type: 'text', children: [(0, p.jsx)(r.JM, { id: `${b}-description`, children: O ? (0, p.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, p.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, p.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, p.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, p.jsxs)(r.zB, { type: 'checkbox', children: [(0, p.jsx)(r.Sc, { value: '1', id: `${b}-1`, 'aria-describedby': (0, d.A)({ [`${b}-description`]: !0, [`${b}-error`]: N[b] }), 'aria-required': 'true', ...R(`${b}[]`, { required: { value: !0, message: O ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${b}`] }), (0, p.jsx)(r.lR, { type: 'checkbox', htmlFor: `${b}-1`, children: O ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[`${b}`] && (0, p.jsx)(r.YB, { role: 'alert', id: `${b}-error`, children: N[`${b}`].message })] }), f?.id && (0, p.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, p.jsx)(r.e2, { children: (0, p.jsx)(t.$, { type: 'submit', purpose: 'primary', children: k || (O ? 'Sign up' : 'Aanmelden') }) }), (0, p.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, p.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, p.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, p.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, p.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, i, n) {
   n.d(i, { $: () => r.$n });
   var r = n(50805);
  },
  90515(e, i, n) {
   n.d(i, { c: () => t });
   var r = n(30758);
   function t() {
    const [e, i] = (0, r.useState)();
    return ((0, r.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
