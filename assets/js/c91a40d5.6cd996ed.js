'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54932],
 {
  14129(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => p }));
   const t = JSON.parse('{"id":"community/events/developer-open-hour/aanmelden","title":"Aanmelden voor de Developer Open Hour","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","source":"@site/docs/community/events/developer-open-hour/aanmelden.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour/aanmelden","permalink":"/events/developer-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor de Developer Open Hour","title_sm":"Aanmelden","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/events/developer-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","permalink":"/events/developer-open-hour"},"next":{"title":"Product Owner Open Hour","permalink":"/events/product-owner-open-hour"}}');
   var r = i(86070),
    a = i(18439),
    s = i(75812);
   const l = { title: 'Aanmelden voor de Developer Open Hour', title_sm: 'Aanmelden', description: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/events/developer-open-hour/aanmelden' },
    o = 'Meld je aan voor de Developer Open Hour',
    d = {},
    p = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'meld-je-aan-voor-de-developer-open-hour', children: 'Meld je aan voor de Developer Open Hour' }) }), '\n', (0, r.jsx)(n.p, { children: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, r.jsx)(s.W, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
  45186(e, n, i) {
   i.d(n, { c: () => r });
   var t = i(30758);
   function r() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  75812(e, n, i) {
   i.d(n, { W: () => p });
   var t = i(29181),
    r = i(89974),
    a = i(56561),
    s = i(30758),
    l = i(27890),
    o = i(45186),
    d = i(86070);
   const p = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: p = '', firstNameFieldId: c = '', orgId: h = '', interestsId: u = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: v = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: g = '', privacyPolicyId: y = '', language: f, submitText: k = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: D = '', roleLegend: I = 'Wat is jouw rol?', roles: $ = [], roleRequired: _ = !1 }) => {
    const {
      register: R,
      handleSubmit: z,
      formState: { errors: B },
     } = (0, l.mN)(),
     N = (0, s.useRef)(null),
     S = '2' === f?.value,
     O = (0, o.c)() ? window.location.search : '',
     H = new URLSearchParams(O),
     q = H.get('prefillEmail'),
     F = H.get('prefillName'),
     M =
      !!(u && v.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; n.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(v, x);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: z(() => {
      N.current.submit();
     }),
     children: [(0, d.jsxs)(t.zB, { type: 'email', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: `id-${p}`, children: S ? 'Email address ' : 'E-mailadres' }) }), B[p] && (0, d.jsx)(t.YB, { children: B[p].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: `id-${p}`, name: p, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...R(`${p}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[p] }) })] }), (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: c, children: S ? 'Name' : 'Naam' }) }), B[c] && (0, d.jsx)(t.YB, { children: B[c].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[c] }) })] }), b && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: b, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(t.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: b, name: b, ...R(b, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: w, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(t.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: w, name: w, rows: 12, ...R(w, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: h, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[h] && (0, d.jsx)(t.YB, { children: B[h].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [m, !j && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), v.map((e, n) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${u}[]`, value: M[n], id: `${u}-${M[n]}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${u}-${M[n]}`, children: e })] }, e))] }), D && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [I, !_ && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), $.map((e, n) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${D}[]`, id: `${D}-${n}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${D}-${n}`, children: e })] }, e))] }), g && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: g, name: g }) })] }), y && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(t.JM, { id: `${y}-description`, children: S ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...R(`${y}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${y}[]`] }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[y] && (0, d.jsx)(t.YB, { children: B[y].message })] }), f?.id && (0, d.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, d.jsx)(t.e2, { children: (0, d.jsx)(r.$, { type: 'submit', purpose: 'primary', children: k || (S ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, n, i) {
   i.d(n, { $: () => t.$n });
   var t = i(50805);
  },
 },
]);
