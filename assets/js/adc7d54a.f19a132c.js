'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79490],
 {
  46565(e, n, i) {
   i.d(n, { c: () => s });
   var t = i(30758);
   function s() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  47274(e, n, i) {
   (i.r(n), i.d(n, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => u }));
   const t = JSON.parse('{"id":"community/events/design-open-hour/aanmelden","title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","source":"@site/docs/community/events/design-open-hour/aanmelden.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden","permalink":"/events/design-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","permalink":"/events/design-open-hour"},"next":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour"}}');
   var s = i(86070),
    a = i(18439),
    r = i(78599);
   const l = { title: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    d = 'Meld je aan voor de Design Open Hour',
    o = {},
    u = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }) }), '\n', (0, s.jsx)(n.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, s.jsx)(r.W, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  78599(e, n, i) {
   i.d(n, { W: () => d });
   var t = i(29181),
    s = i(30758),
    a = i(27890),
    r = i(46565),
    l = i(86070);
   const d = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: u = '', interestsId: c = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: g = '', privacyPolicyId: v = '', language: x, submitText: y = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: D = !1 }) => {
    const {
      register: I,
      handleSubmit: R,
      formState: { errors: $ },
     } = (0, a.mN)(),
     _ = (0, s.useRef)(null),
     B = '2' === x?.value,
     S = (0, r.c)() ? window.location.search : '',
     H = new URLSearchParams(S),
     O = H.get('prefillEmail'),
     q = H.get('prefillName'),
     F =
      !!(c && m.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(m, j);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: R(() => {
      _.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${d}`, children: B ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, l.jsx)(t.YB, { children: $[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: O, 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: o, children: B ? 'Name' : 'Naam' }) }), $[o] && (0, l.jsx)(t.YB, { children: $[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: o, name: o, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${o}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[o] }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: f, name: f, ...I(f, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: k, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: k, name: k, rows: 12, ...I(k, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: u, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[u] && (0, l.jsx)(t.YB, { children: $[u].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: u, name: u, type: 'text' }) })] }), c && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, n) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${c}[]`, value: F[n], id: `${c}-${F[n]}` }), (0, l.jsx)(t.lR, { htmlFor: `${c}-${F[n]}`, children: e })] }, e))] }), b && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !D && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, n) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${b}[]`, id: `${b}-${n}` }), (0, l.jsx)(t.lR, { htmlFor: `${b}-${n}`, children: e })] }, e))] }), g && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: g, name: g }) })] }), v && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${v}-description`, children: B ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy/', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...I(`${v}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${v}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${v}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[v] && (0, l.jsx)(t.YB, { children: $[v].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: y || (B ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
