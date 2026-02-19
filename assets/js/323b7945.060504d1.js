'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19386],
 {
  6133(e, t, i) {
   (i.r(t), i.d(t, { assets: () => o, contentTitle: () => d, default: () => m, frontMatter: () => l, metadata: () => a, toc: () => c }));
   const a = JSON.parse('{"id":"community/events/heartbeat/aanmelden","title":"Aanmelden \xb7 Heartbeat \xb7 Bijeenkomsten","description":"Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.","source":"@site/docs/community/events/heartbeat/aanmelden.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat/aanmelden","permalink":"/events/heartbeat/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden \xb7 Heartbeat \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"2 wekelijkse updates van het kernteam en community","slug":"/events/heartbeat/aanmelden"},"sidebar":"community","previous":{"title":"Video\'s van de afgelopen Heartbeats","permalink":"/events/heartbeat/videos"},"next":{"title":"Wat moet ik weten als ik zelf iets wil vertellen tijdens de Heartbeat?","permalink":"/events/heartbeat/zelf-iets-vertellen"}}');
   var n = i(86070),
    s = i(18439),
    r = i(37447);
   const l = { title: 'Aanmelden \xb7 Heartbeat \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' },
    d = 'Meld je aan voor de Heartbeat',
    o = {},
    c = [];
   function h(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.header, { children: (0, n.jsx)(t.h1, { id: 'meld-je-aan-voor-de-heartbeat', children: 'Meld je aan voor de Heartbeat' }) }), '\n', (0, n.jsx)(t.p, { children: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.' }), '\n', (0, n.jsx)(t.p, { children: 'We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting.' }), '\n', (0, n.jsx)(r.W, { listId: '601sv3rzai', emailFieldId: 'GivkPnqc1o', firstNameFieldId: 'p8ZNN4fpMI', thanksPage: 'https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(h, { ...e }) }) : h(e);
   }
  },
  37447(e, t, i) {
   i.d(t, { W: () => d });
   var a = i(29181),
    n = i(30758),
    s = i(27890),
    r = i(54565),
    l = i(86070);
   const d = ({ listId: e = '', laPostaId: t = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: h = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: v = '', privacyPolicyId: x = '', language: g, submitText: b = '', talkTitleId: k = '', talkDescriptionId: y = '', roleId: f = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: I = !1 }) => {
    const {
      register: R,
      handleSubmit: $,
      formState: { errors: B },
     } = (0, s.mN)(),
     _ = (0, n.useRef)(null),
     S = '2' === g?.value,
     q = (0, r.c)() ? window.location.search : '',
     M = new URLSearchParams(q),
     N = M.get('prefillEmail'),
     F = M.get('prefillName'),
     D =
      !!(h && u.length > 0) &&
      ((e, t) => {
       const i = [];
       let a = 1;
       for (let n = 0; n < e.length; n++) {
        for (; t.includes(a); ) a++;
        (i.push(a), a++);
       }
       return i;
      })(u, j);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: $(() => {
      _.current.submit();
     }),
     children: [(0, l.jsxs)(a.zB, { type: 'email', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: `id-${d}`, children: S ? 'Email address ' : 'E-mailadres' }) }), B[d] && (0, l.jsx)(a.YB, { children: B[d].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: N, 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[d] }) })] }), (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: o, children: S ? 'Name' : 'Naam' }) }), B[o] && (0, l.jsx)(a.YB, { children: B[o].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: o, name: o, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[o] }) })] }), k && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: k, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(a.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: k, name: k, ...R(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), y && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: y, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(a.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: y, name: y, rows: 12, ...R(y, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: c, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[c] && (0, l.jsx)(a.YB, { children: B[c].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(a.LB, { children: [(0, l.jsx)(a.fz, { children: (0, l.jsxs)(a.u4, { children: [m, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, t) => (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { name: `${h}[]`, value: D[t], id: `${h}-${D[t]}` }), (0, l.jsx)(a.lR, { htmlFor: `${h}-${D[t]}`, children: e })] }, e))] }), f && (0, l.jsxs)(a.LB, { children: [(0, l.jsx)(a.fz, { children: (0, l.jsxs)(a.u4, { children: [w, !I && ' (niet verplicht)'] }) }), (0, l.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, t) => (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { name: `${f}[]`, id: `${f}-${t}` }), (0, l.jsx)(a.lR, { htmlFor: `${f}-${t}`, children: e })] }, e))] }), v && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: v, name: v }) })] }), x && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.JM, { id: `${x}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...R(`${x}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${x}[]`] }), (0, l.jsx)(a.lR, { htmlFor: `${x}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[x] && (0, l.jsx)(a.YB, { children: B[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(a.e2, { children: (0, l.jsx)(a.$n, { type: 'submit', appearance: 'primary-action-button', children: b || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54565(e, t, i) {
   i.d(t, { c: () => n });
   var a = i(30758);
   function n() {
    const [e, t] = (0, a.useState)();
    return ((0, a.useEffect)(() => t(!0), []), e);
   }
  },
 },
]);
