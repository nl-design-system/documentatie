'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19386],
 {
  6133(e, t, a) {
   (a.r(t), a.d(t, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"community/events/heartbeat/aanmelden","title":"Aanmelden voor de Heartbeat","description":"Meld je aan voor de 2 wekelijkse updates van het kernteam en community","source":"@site/docs/community/events/heartbeat/aanmelden.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat/aanmelden","permalink":"/events/heartbeat/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor de Heartbeat","title_sm":"Aanmelden","description":"Meld je aan voor de 2 wekelijkse updates van het kernteam en community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"2 wekelijkse updates van het kernteam en community","slug":"/events/heartbeat/aanmelden"},"sidebar":"community","previous":{"title":"Video\'s van de afgelopen Heartbeats","permalink":"/events/heartbeat/videos"},"next":{"title":"Wat moet ik weten als ik zelf iets wil vertellen tijdens de Heartbeat?","permalink":"/events/heartbeat/zelf-iets-vertellen"}}');
   var n = a(86070),
    s = a(18439),
    r = a(78599);
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
  46565(e, t, a) {
   a.d(t, { c: () => n });
   var i = a(30758);
   function n() {
    const [e, t] = (0, i.useState)();
    return ((0, i.useEffect)(() => t(!0), []), e);
   }
  },
  78599(e, t, a) {
   a.d(t, { W: () => o });
   var i = a(29181),
    n = a(56561),
    s = a(30758),
    r = a(27890),
    l = a(46565),
    d = a(86070);
   const o = ({ listId: e = '', laPostaId: t = '', thanksPage: a = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: m = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: v = [], workAreasId: x = '', privacyPolicyId: g = '', language: y, submitText: k = '', talkTitleId: b = '', talkDescriptionId: f = '', roleId: w = '', roleLegend: I = 'Wat is jouw rol?', roles: _ = [], roleRequired: R = !1 }) => {
    const {
      register: $,
      handleSubmit: N,
      formState: { errors: M },
     } = (0, r.mN)(),
     z = (0, s.useRef)(null),
     B = '2' === y?.value,
     S = (0, l.c)() ? window.location.search : '',
     q = new URLSearchParams(S),
     F = q.get('prefillEmail'),
     D = q.get('prefillName'),
     T =
      !!(h && p.length > 0) &&
      ((e, t) => {
       const a = [];
       let i = 1;
       for (let n = 0; n < e.length; n++) {
        for (; t.includes(i); ) i++;
        (a.push(i), i++);
       }
       return a;
      })(p, v);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: z,
     onSubmit: N(() => {
      z.current.submit();
     }),
     children: [(0, d.jsxs)(i.zB, { type: 'email', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(i.lR, { htmlFor: `id-${o}`, children: B ? 'Email address ' : 'E-mailadres' }) }), M[o] && (0, d.jsx)(i.YB, { children: M[o].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...$(`${o}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!M[o] }) })] }), (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(i.lR, { htmlFor: c, children: B ? 'Name' : 'Naam' }) }), M[c] && (0, d.jsx)(i.YB, { children: M[c].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: c, name: c, type: 'text', defaultValue: D, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!M[c] }) })] }), b && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(i.lR, { htmlFor: b, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(i.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: b, name: b, ...$(b, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(i.lR, { htmlFor: f, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(i.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.TM, { id: f, name: f, rows: 12, ...$(f, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(i.lR, { htmlFor: m, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), M[m] && (0, d.jsx)(i.YB, { children: M[m].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.Rj, { id: m, name: m, type: 'text' }) })] }), h && (0, d.jsxs)(i.LB, { children: [(0, d.jsx)(n.f, { children: (0, d.jsxs)(i.u4, { children: [u, !j && ' (niet verplicht)'] }) }), (0, d.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, t) => (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { name: `${h}[]`, value: T[t], id: `${h}-${T[t]}` }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${h}-${T[t]}`, children: e })] }, e))] }), w && (0, d.jsxs)(i.LB, { children: [(0, d.jsx)(n.f, { children: (0, d.jsxs)(i.u4, { children: [I, !R && ' (niet verplicht)'] }) }), (0, d.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), _.map((e, t) => (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { name: `${w}[]`, id: `${w}-${t}` }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${w}-${t}`, children: e })] }, e))] }), x && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(i.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(i.TM, { id: x, name: x }) })] }), g && (0, d.jsxs)(i.zB, { type: 'text', children: [(0, d.jsx)(i.JM, { id: `${g}-description`, children: B ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(i.zB, { type: 'checkbox', children: [(0, d.jsx)(i.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...$(`${g}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!M[`${g}[]`] }), (0, d.jsx)(i.lR, { type: 'checkbox', htmlFor: `${g}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), M[g] && (0, d.jsx)(i.YB, { children: M[g].message })] }), y?.id && (0, d.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, d.jsx)(i.e2, { children: (0, d.jsx)(i.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (B ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: a }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
