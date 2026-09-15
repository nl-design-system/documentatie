'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19386],
 {
  45186(e, t, a) {
   a.d(t, { c: () => n });
   var i = a(30758);
   function n() {
    const [e, t] = (0, i.useState)();
    return ((0, i.useEffect)(() => t(!0), []), e);
   }
  },
  66403(e, t, a) {
   (a.r(t), a.d(t, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"community/events/heartbeat/aanmelden","title":"Aanmelden voor de Heartbeat","description":"Meld je aan voor de 2 wekelijkse updates van het kernteam en community","source":"@site/docs/community/events/heartbeat/aanmelden.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat/aanmelden","permalink":"/events/heartbeat/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor de Heartbeat","title_sm":"Aanmelden","description":"Meld je aan voor de 2 wekelijkse updates van het kernteam en community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"2 wekelijkse updates van het kernteam en community","slug":"/events/heartbeat/aanmelden"},"sidebar":"community","previous":{"title":"Video\'s van de afgelopen Heartbeats","permalink":"/events/heartbeat/videos"},"next":{"title":"Wat moet ik weten als ik zelf iets wil vertellen tijdens de Heartbeat?","permalink":"/events/heartbeat/zelf-iets-vertellen"}}');
   var n = a(86070),
    s = a(18439),
    r = a(75812);
   const l = { title: 'Aanmelden voor de Heartbeat', title_sm: 'Aanmelden', description: 'Meld je aan voor de 2 wekelijkse updates van het kernteam en community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: '2 wekelijkse updates van het kernteam en community', slug: '/events/heartbeat/aanmelden' },
    d = 'Meld je aan voor de Heartbeat',
    o = {},
    c = [];
   function m(e) {
    const t = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.header, { children: (0, n.jsx)(t.h1, { id: 'meld-je-aan-voor-de-heartbeat', children: 'Meld je aan voor de Heartbeat' }) }), '\n', (0, n.jsx)(t.p, { children: 'Heartbeats zijn publiek toegankelijk. Laat je emailadres achter om op de hoogte te worden gehouden van toekomstige bijeenkomsten.' }), '\n', (0, n.jsx)(t.p, { children: 'We nodigen je op dit emailadres dan ook uit voor de daadwerkelijke meeting.' }), '\n', (0, n.jsx)(r.W, { listId: '601sv3rzai', emailFieldId: 'GivkPnqc1o', firstNameFieldId: 'p8ZNN4fpMI', thanksPage: 'https://nldesignsystem.nl/events/heartbeat/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(m, { ...e }) }) : m(e);
   }
  },
  75812(e, t, a) {
   a.d(t, { W: () => c });
   var i = a(29181),
    n = a(89974),
    s = a(56561),
    r = a(30758),
    l = a(27890),
    d = a(45186),
    o = a(86070);
   const c = ({ listId: e = '', laPostaId: t = '', thanksPage: a = '', emailFieldId: c = '', firstNameFieldId: m = '', orgId: h = '', interestsId: u = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: v = !1, disallowedInterestValues: x = [], workAreasId: g = '', privacyPolicyId: y = '', language: k, submitText: b = '', talkTitleId: f = '', talkDescriptionId: w = '', roleId: $ = '', roleLegend: I = 'Wat is jouw rol?', roles: _ = [], roleRequired: R = !1 }) => {
    const {
      register: N,
      handleSubmit: M,
      formState: { errors: z },
     } = (0, l.mN)(),
     B = (0, r.useRef)(null),
     S = '2' === k?.value,
     q = (0, d.c)() ? window.location.search : '',
     F = new URLSearchParams(q),
     D = F.get('prefillEmail'),
     T = F.get('prefillName'),
     W =
      !!(u && j.length > 0) &&
      ((e, t) => {
       const a = [];
       let i = 1;
       for (let n = 0; n < e.length; n++) {
        for (; t.includes(i); ) i++;
        (a.push(i), i++);
       }
       return a;
      })(j, x);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: M(() => {
      B.current.submit();
     }),
     children: [(0, o.jsxs)(i.zB, { type: 'email', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: `id-${c}`, children: S ? 'Email address ' : 'E-mailadres' }) }), z[c] && (0, o.jsx)(i.YB, { children: z[c].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: D, 'aria-required': 'true', ...N(`${c}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[c] }) })] }), (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: m, children: S ? 'Name' : 'Naam' }) }), z[m] && (0, o.jsx)(i.YB, { children: z[m].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: m, name: m, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ...N(`${m}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[m] }) })] }), f && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: f, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(i.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: f, name: f, ...N(f, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: w, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(i.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.TM, { id: w, name: w, rows: 12, ...N(w, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(i.lR, { htmlFor: h, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[h] && (0, o.jsx)(i.YB, { children: z[h].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(i.u4, { children: [p, !v && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, t) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${u}[]`, value: W[t], id: `${u}-${W[t]}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${u}-${W[t]}`, children: e })] }, e))] }), $ && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(i.u4, { children: [I, !R && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), _.map((e, t) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${$}[]`, id: `${$}-${t}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${$}-${t}`, children: e })] }, e))] }), g && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(i.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(i.TM, { id: g, name: g }) })] }), y && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.JM, { id: `${y}-description`, children: S ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...N(`${y}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${y}[]`] }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[y] && (0, o.jsx)(i.YB, { children: z[y].message })] }), k?.id && (0, o.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, o.jsx)(i.e2, { children: (0, o.jsx)(n.$, { type: 'submit', purpose: 'primary', children: b || (S ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: a }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, t, a) {
   a.d(t, { $: () => i.$n });
   var i = a(50805);
  },
 },
]);
