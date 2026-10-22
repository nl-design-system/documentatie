'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19386],
 {
  31641(e, t, i) {
   i.d(t, { W: () => m });
   var a = i(29181),
    n = i(46847),
    r = i(56561),
    s = i(30758),
    l = i(27890),
    d = i(90515),
    o = i(13526),
    c = i(86070);
   const m = ({ listId: e = '', laPostaId: t = '', thanksPage: i = '', emailFieldId: m = '', firstNameFieldId: h = '', orgId: u = '', interestsId: p = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: v = [], interestsRequired: x = !1, disallowedInterestValues: b = [], workAreasId: y = '', privacyPolicyId: g = '', language: k, submitText: f = '', talkTitleId: $ = '', talkDescriptionId: w = '', roleId: I = '', roleLegend: _ = 'Wat is jouw rol?', roles: R = [], roleRequired: N = !1 }) => {
    const {
      register: z,
      handleSubmit: B,
      formState: { errors: M },
     } = (0, l.mN)({ mode: 'onBlur' }),
     S = (0, s.useRef)(null),
     q = '2' === k?.value,
     F = (0, d.c)() ? window.location.search : '',
     D = new URLSearchParams(F),
     T = D.get('prefillEmail'),
     W = D.get('prefillName'),
     A =
      !!(p && v.length > 0) &&
      ((e, t) => {
       const i = [];
       let a = 1;
       for (let n = 0; n < e.length; n++) {
        for (; t.includes(a); ) a++;
        (i.push(a), a++);
       }
       return i;
      })(v, b);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: B(() => {
      S.current.submit();
     }),
     children: [(0, c.jsxs)(a.zB, { type: 'email', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(a.lR, { htmlFor: `id-${m}`, children: q ? 'Email address ' : 'E-mailadres' }) }), M[m] && (0, c.jsx)(a.YB, { role: 'alert', id: `${m}-error`, children: M[m].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(a.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', 'aria-describedby': M[m] && `${m}-error`, ...z(`${m}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: q ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!M[m] }) })] }), (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(a.lR, { htmlFor: h, children: q ? 'Name' : 'Naam' }) }), M[h] && (0, c.jsx)(a.YB, { role: 'alert', id: `${h}-error`, children: M[h].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(a.Rj, { id: h, name: h, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': M[h] && `${h}-error`, ...z(`${h}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!M[h] }) })] }), $ && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(a.lR, { htmlFor: $, children: q ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(a.JM, { id: `${$}-description`, children: q ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(a.Rj, { id: $, name: $, 'aria-describedby': `${$}-description`, ...z($, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(a.lR, { htmlFor: w, children: q ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(a.JM, { id: `${w}-description`, children: q ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(a.TM, { id: w, name: w, rows: 12, 'aria-describedby': `${w}-description`, ...z(w, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(a.lR, { htmlFor: u, children: q ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), M[u] && (0, c.jsx)(a.YB, { children: M[u].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(a.Rj, { id: u, name: u, type: 'text', autoComplete: 'organization' }) })] }), p && (0, c.jsxs)(a.LB, { 'aria-describedby': `${p}-description`, children: [(0, c.jsxs)(a.u4, { children: [j, !x && ' (niet verplicht)'] }), (0, c.jsx)(a.JM, { id: `${p}-description`, children: 'Meerdere antwoorden mogelijk.' }), v.map((e, t) => (0, c.jsxs)(a.zB, { type: 'checkbox', children: [(0, c.jsx)(a.Sc, { name: `${p}[]`, value: A[t], id: `${p}-${A[t]}` }), (0, c.jsx)(a.lR, { type: 'checkbox', htmlFor: `${p}-${A[t]}`, children: e })] }, e))] }), I && (0, c.jsxs)(a.LB, { 'aria-describedby': `${I}-description`, children: [(0, c.jsxs)(a.u4, { children: [_, !N && ' (niet verplicht)'] }), (0, c.jsx)(a.JM, { id: `${I}-description`, children: 'Meerdere antwoorden mogelijk.' }), R.map((e, t) => (0, c.jsxs)(a.zB, { type: 'checkbox', children: [(0, c.jsx)(a.Sc, { name: `${I}[]`, id: `${I}-${t}` }), (0, c.jsx)(a.lR, { type: 'checkbox', htmlFor: `${I}-${t}`, children: e })] }, e))] }), y && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(a.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(a.JM, { id: `${y}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(a.TM, { id: y, name: y, 'aria-describedby': `${y}-description` }) })] }), g && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsx)(a.JM, { id: `${g}-description`, children: q ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(a.zB, { type: 'checkbox', children: [(0, c.jsx)(a.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': (0, o.A)({ [`${g}-description`]: !0, [`${g}-error`]: M[g] }), 'aria-required': 'true', ...z(`${g}[]`, { required: { value: !0, message: q ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!M[`${g}`] }), (0, c.jsx)(a.lR, { type: 'checkbox', htmlFor: `${g}-1`, children: q ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), M[`${g}`] && (0, c.jsx)(a.YB, { role: 'alert', id: `${g}-error`, children: M[`${g}`].message })] }), k?.id && (0, c.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, c.jsx)(a.e2, { children: (0, c.jsx)(n.$, { type: 'submit', purpose: 'primary', children: f || (q ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, t, i) {
   i.d(t, { $: () => a.$n });
   var a = i(50805);
  },
  81808(e, t, i) {
   (i.r(t), i.d(t, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => a, toc: () => c }));
   const a = JSON.parse('{"id":"community/events/heartbeat/aanmelden","title":"Aanmelden voor de Heartbeat","description":"Meld je aan voor de 2 wekelijkse updates van het kernteam en community","source":"@site/docs/community/events/heartbeat/aanmelden.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat/aanmelden","permalink":"/events/heartbeat/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor de Heartbeat","title_sm":"Aanmelden","description":"Meld je aan voor de 2 wekelijkse updates van het kernteam en community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"2 wekelijkse updates van het kernteam en community","slug":"/events/heartbeat/aanmelden"},"sidebar":"community","previous":{"title":"Video\'s van de afgelopen Heartbeats","permalink":"/events/heartbeat/videos"},"next":{"title":"Wat moet ik weten als ik zelf iets wil vertellen tijdens de Heartbeat?","permalink":"/events/heartbeat/zelf-iets-vertellen"}}');
   var n = i(86070),
    r = i(18439),
    s = i(31641);
   const l = { title: 'Aanmelden voor de Heartbeat', title_sm: 'Aanmelden', description: 'Meld je aan voor de 2 wekelijkse updates van het kernteam en community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' },
    d = 'Meld je aan voor de Heartbeat',
    o = {},
    c = [];
   function m(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.header, { children: (0, n.jsx)(t.h1, { id: 'meld-je-aan-voor-de-heartbeat', children: 'Meld je aan voor de Heartbeat' }) }), '\n', (0, n.jsx)(t.p, { children: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.' }), '\n', (0, n.jsx)(t.p, { children: 'We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting.' }), '\n', (0, n.jsx)(s.W, { listId: '601sv3rzai', emailFieldId: 'GivkPnqc1o', firstNameFieldId: 'p8ZNN4fpMI', thanksPage: 'https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(m, { ...e }) }) : m(e);
   }
  },
  90515(e, t, i) {
   i.d(t, { c: () => n });
   var a = i(30758);
   function n() {
    const [e, t] = (0, a.useState)();
    return ((0, a.useEffect)(() => t(!0), []), e);
   }
  },
 },
]);
