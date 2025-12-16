'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79490],
 {
  47274: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => u });
   const t = JSON.parse('{"id":"community/events/design-open-hour/aanmelden","title":"Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten","description":"Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.","source":"@site/docs/community/events/design-open-hour/aanmelden.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden","permalink":"/events/design-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","permalink":"/events/design-open-hour"},"next":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour/overzicht"}}');
   var s = n(86070),
    a = n(85248),
    r = n(51629);
   const l = { title: 'Aanmelden \xb7 Design Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    d = 'Meld je aan voor de Design Open Hour',
    o = {},
    u = [];
   function c(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }) }), '\n', (0, s.jsx)(i.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, s.jsx)(r.W, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  51629: (e, i, n) => {
   n.d(i, { W: () => d });
   var t = n(25557),
    s = n(14537),
    a = n(30758),
    r = n(65198),
    l = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: u = '', interestsId: c = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], disallowedInterestValues: p = [], workAreasId: j = '', privacyPolicyId: g = '', language: v, submitText: x = '', talkTitleId: y = '', talkDescriptionId: k = '' }) => {
    const {
      register: f,
      handleSubmit: b,
      formState: { errors: z },
     } = (0, r.mN)(),
     w = (0, a.useRef)(null),
     D = '2' === v?.value,
     { search: I } = (0, t.zy)(),
     B = new URLSearchParams(I),
     _ = B.get('prefillEmail'),
     R = B.get('prefillName'),
     S =
      !!(c && m.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(m, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: w,
     onSubmit: b(() => {
      w.current.submit();
     }),
     children: [(0, l.jsxs)(s.zB, { type: 'email', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: `id-${d}`, children: D ? 'Email address ' : 'E-mailadres' }) }), z[d] && (0, l.jsx)(s.YB, { children: z[d].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[d] }) })] }), (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: o, children: D ? 'Name' : 'Naam' }) }), z[o] && (0, l.jsx)(s.YB, { children: z[o].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: o, name: o, type: 'text', defaultValue: R, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[o] }) })] }), y && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: y, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: y, name: y, ...f(y, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: k, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: k, name: k, rows: 12, ...f(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.fz, { children: (0, l.jsx)(s.lR, { htmlFor: u, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[u] && (0, l.jsx)(s.YB, { children: z[u].message }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.Rj, { id: u, name: u, type: 'text' }) })] }), c && (0, l.jsxs)(s.LB, { children: [(0, l.jsx)(s.fz, { children: (0, l.jsxs)(s.u4, { children: [h, ' (niet verplicht)'] }) }), (0, l.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, i) => (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { name: `${c}[]`, value: S[i], id: `${c}-${S[i]}` }), (0, l.jsx)(s.lR, { htmlFor: `${c}-${S[i]}`, children: e })] }, e))] }), j && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsxs)(s.fz, { children: [(0, l.jsx)(s.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.fz, { children: (0, l.jsx)(s.TM, { id: j, name: j }) })] }), g && (0, l.jsxs)(s.zB, { type: 'text', children: [(0, l.jsx)(s.JM, { id: `${g}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.zB, { type: 'checkbox', children: [(0, l.jsx)(s.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...f(`${g}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${g}[]`] }), (0, l.jsx)(s.lR, { htmlFor: `${g}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[g] && (0, l.jsx)(s.YB, { children: z[g].message })] }), v?.id && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(s.e2, { children: (0, l.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
