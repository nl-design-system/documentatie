'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79490],
 {
  31641(e, n, i) {
   i.d(n, { W: () => c });
   var t = i(29181),
    s = i(46847),
    a = i(56561),
    r = i(30758),
    l = i(27890),
    d = i(90515),
    o = i(86070);
   const c = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: c = '', firstNameFieldId: u = '', orgId: m = '', interestsId: h = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: g = !1, disallowedInterestValues: v = [], workAreasId: x = '', privacyPolicyId: y = '', language: f, submitText: k = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: D = '', roleLegend: I = 'Wat is jouw rol?', roles: $ = [], roleRequired: R = !1 }) => {
    const {
      register: z,
      handleSubmit: _,
      formState: { errors: B },
     } = (0, l.mN)(),
     N = (0, r.useRef)(null),
     S = '2' === f?.value,
     H = (0, d.c)() ? window.location.search : '',
     O = new URLSearchParams(H),
     q = O.get('prefillEmail'),
     F = O.get('prefillName'),
     M =
      !!(h && j.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(j, v);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: _(() => {
      N.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${c}`, children: S ? 'Email address ' : 'E-mailadres' }) }), B[c] && (0, o.jsx)(t.YB, { children: B[c].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...z(`${c}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[c] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: u, children: S ? 'Name' : 'Naam' }) }), B[u] && (0, o.jsx)(t.YB, { children: B[u].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: u, name: u, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...z(`${u}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[u] }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: b, name: b, ...z(b, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: w, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.TM, { id: w, name: w, rows: 12, ...z(w, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: m, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[m] && (0, o.jsx)(t.YB, { children: B[m].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: m, name: m, type: 'text' }) })] }), h && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(t.u4, { children: [p, !g && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, n) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${h}[]`, value: M[n], id: `${h}-${M[n]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${h}-${M[n]}`, children: e })] }, e))] }), D && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(t.u4, { children: [I, !R && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), $.map((e, n) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${D}[]`, id: `${D}-${n}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${D}-${n}`, children: e })] }, e))] }), x && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.TM, { id: x, name: x }) })] }), y && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${y}-description`, children: S ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...z(`${y}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${y}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[y] && (0, o.jsx)(t.YB, { children: B[y].message })] }), f?.id && (0, o.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(s.$, { type: 'submit', purpose: 'primary', children: k || (S ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, n, i) {
   i.d(n, { $: () => t.$n });
   var t = i(50805);
  },
  90515(e, n, i) {
   i.d(n, { c: () => s });
   var t = i(30758);
   function s() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  96624(e, n, i) {
   (i.r(n), i.d(n, { assets: () => o, contentTitle: () => d, default: () => m, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-open-hour/aanmelden","title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","source":"@site/docs/community/events/design-open-hour/aanmelden.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden","permalink":"/events/design-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","permalink":"/events/design-open-hour"},"next":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour"}}');
   var s = i(86070),
    a = i(18439),
    r = i(31641);
   const l = { title: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    d = 'Meld je aan voor de Design Open Hour',
    o = {},
    c = [];
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }) }), '\n', (0, s.jsx)(n.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, s.jsx)(r.W, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
  },
 },
]);
