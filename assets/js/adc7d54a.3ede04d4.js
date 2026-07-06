'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79490],
 {
  46565(e, n, i) {
   i.d(n, { c: () => a });
   var t = i(30758);
   function a() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  47274(e, n, i) {
   (i.r(n), i.d(n, { assets: () => o, contentTitle: () => d, default: () => m, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-open-hour/aanmelden","title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","source":"@site/docs/community/events/design-open-hour/aanmelden.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour/aanmelden","permalink":"/events/design-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden","description":"Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","slug":"/events/design-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","permalink":"/events/design-open-hour"},"next":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour"}}');
   var a = i(86070),
    s = i(18439),
    r = i(78599);
   const l = { title: 'Aanmelden', description: 'Door je aan te melden krijg je toegang tot een agenda-bestand voor de Design Open Hour en kunnen we je mailen met wijzigingen aan de Open Hour of relevante updates voor designers', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/events/design-open-hour/aanmelden' },
    d = 'Meld je aan voor de Design Open Hour',
    o = {},
    c = [];
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'meld-je-aan-voor-de-design-open-hour', children: 'Meld je aan voor de Design Open Hour' }) }), '\n', (0, a.jsx)(n.p, { children: 'Design Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, a.jsx)(r.W, { listId: 'iklwgql4w2', emailFieldId: 'APNH2BBGKm', firstNameFieldId: 'QQjRkYyXpE', thanksPage: 'https://nldesignsystem.nl/events/design-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
   }
  },
  78599(e, n, i) {
   i.d(n, { W: () => o });
   var t = i(29181),
    a = i(56561),
    s = i(30758),
    r = i(27890),
    l = i(46565),
    d = i(86070);
   const o = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: u = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: x = '', language: y, submitText: f = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: D = 'Wat is jouw rol?', roles: I = [], roleRequired: R = !1 }) => {
    const {
      register: $,
      handleSubmit: z,
      formState: { errors: _ },
     } = (0, r.mN)(),
     B = (0, s.useRef)(null),
     N = '2' === y?.value,
     S = (0, l.c)() ? window.location.search : '',
     H = new URLSearchParams(S),
     O = H.get('prefillEmail'),
     q = H.get('prefillName'),
     F =
      !!(m && p.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let a = 0; a < e.length; a++) {
        for (; n.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(p, g);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: z(() => {
      B.current.submit();
     }),
     children: [(0, d.jsxs)(t.zB, { type: 'email', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: `id-${o}`, children: N ? 'Email address ' : 'E-mailadres' }) }), _[o] && (0, d.jsx)(t.YB, { children: _[o].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: O, 'aria-required': 'true', ...$(`${o}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: N ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[o] }) })] }), (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: c, children: N ? 'Name' : 'Naam' }) }), _[c] && (0, d.jsx)(t.YB, { children: _[c].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[c] }) })] }), k && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: k, children: N ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: k, name: k, ...$(k, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: b, children: N ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: b, name: b, rows: 12, ...$(b, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: u, children: N ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[u] && (0, d.jsx)(t.YB, { children: _[u].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: u, name: u, type: 'text' }) })] }), m && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [h, !j && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${m}[]`, value: F[n], id: `${m}-${F[n]}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${m}-${F[n]}`, children: e })] }, e))] }), w && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [D, !R && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, n) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${n}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${n}`, children: e })] }, e))] }), v && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: v, name: v }) })] }), x && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(t.JM, { id: `${x}-description`, children: N ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...$(`${x}[]`, { required: { value: !0, message: N ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${x}[]`] }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: N ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[x] && (0, d.jsx)(t.YB, { children: _[x].message })] }), y?.id && (0, d.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, d.jsx)(t.e2, { children: (0, d.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (N ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
