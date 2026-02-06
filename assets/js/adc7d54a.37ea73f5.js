'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79490],
 {
  37447(e, i, n) {
   n.d(i, { W: () => d });
   var t = n(25557),
    s = n(29181),
    r = n(30758),
    a = n(27890),
    l = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: g = '', privacyPolicyId: x = '', language: v, submitText: y = '', talkTitleId: k = '', talkDescriptionId: f = '', roleId: b = '', roleLegend: z = 'Wat is jouw rol?', roles: w = [], roleRequired: D = !1 }) => {
    const {
      register: I,
      handleSubmit: B,
      formState: { errors: R },
     } = (0, a.mN)(),
     $ = (0, r.useRef)(null),
     _ = '2' === v?.value,
     { search: S } = (0, t.zy)(),
     q = new URLSearchParams(S),
     H = q.get('prefillEmail'),
     O = q.get('prefillName'),
     F =
      !!(h && m.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(m, j);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: B(() => {
      $.current.submit();
     }),
     children: [(0, l.jsxs)(s.zB, { type: 'email', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: `id-${d}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), R[d] && (0, l.jsx)(s.YB, { children: R[d].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: H, 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!R[d] }) })] }), (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: o, children: _ ? 'Name' : 'Naam' }) }), R[o] && (0, l.jsx)(s.YB, { children: R[o].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: o, name: o, type: 'text', defaultValue: O, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!R[o] }) })] }), k && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: k, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: k, name: k, ...I(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: f, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: f, name: f, rows: 12, ...I(f, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: c, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), R[c] && (0, l.jsx)(s.YB, { children: R[c].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [u, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, i) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${h}[]`, value: F[i], id: `${h}-${F[i]}` }), (0, l.jsx)(s.lR, { htmlFor: `${h}-${F[i]}`, children: e })] }, e))] }), b && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [z, !D && ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), w.map((e, i) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${b}[]`, id: `${b}-${i}` }), (0, l.jsx)(s.lR, { htmlFor: `${b}-${i}`, children: e })] }, e))] }), g && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: g, name: g }) })] }), x && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.JM, { id: `${x}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...I(`${x}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!R[`${x}[]`] }), (0, l.jsx)(s.lR, { htmlFor: `${x}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), R[x] && (0, l.jsx)(s.YB, { children: R[x].message })] }), v?.id && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(s.e2, { children: (0, l.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: y || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  47274(e, i, n) {
   (n.r(i), n.d(i, { assets: () => o, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-open-hour/aanmelden","title":"Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten","description":"Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.","source":"@site/docs/community/events/design-open-hour/aanmelden.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden","permalink":"/events/design-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","permalink":"/events/design-open-hour"},"next":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour/overzicht"}}');
   var s = n(86070),
    r = n(18439),
    a = n(37447);
   const l = { title: 'Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    d = 'Meld je aan voor de Design Open Hour',
    o = {},
    c = [];
   function h(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }) }), '\n', (0, s.jsx)(i.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, s.jsx)(a.W, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, r.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
