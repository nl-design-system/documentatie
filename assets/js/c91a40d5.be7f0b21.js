'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54932],
 {
  46565(e, n, i) {
   i.d(n, { c: () => r });
   var t = i(30758);
   function r() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  78599(e, n, i) {
   i.d(n, { W: () => o });
   var t = i(29181),
    r = i(30758),
    s = i(27890),
    a = i(46565),
    l = i(86070);
   const o = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: c = '', interestsId: p = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: m = !1, disallowedInterestValues: v = [], workAreasId: j = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: D = !1 }) => {
    const {
      register: I,
      handleSubmit: _,
      formState: { errors: R },
     } = (0, s.mN)(),
     $ = (0, r.useRef)(null),
     S = '2' === g?.value,
     B = (0, a.c)() ? window.location.search : '',
     M = new URLSearchParams(B),
     O = M.get('prefillEmail'),
     q = M.get('prefillName'),
     F =
      !!(p && u.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; n.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(u, v);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: _(() => {
      $.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${o}`, children: S ? 'Email address ' : 'E-mailadres' }) }), R[o] && (0, l.jsx)(t.YB, { children: R[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: O, 'aria-required': 'true', ...I(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!R[o] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: d, children: S ? 'Name' : 'Naam' }) }), R[d] && (0, l.jsx)(t.YB, { children: R[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: d, name: d, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!R[d] }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: f, name: f, ...I(f, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: k, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: k, name: k, rows: 12, ...I(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: c, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), R[c] && (0, l.jsx)(t.YB, { children: R[c].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: c, name: c, type: 'text' }) })] }), p && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [h, !m && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, n) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${p}[]`, value: F[n], id: `${p}-${F[n]}` }), (0, l.jsx)(t.lR, { htmlFor: `${p}-${F[n]}`, children: e })] }, e))] }), b && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !D && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, n) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${b}[]`, id: `${b}-${n}` }), (0, l.jsx)(t.lR, { htmlFor: `${b}-${n}`, children: e })] }, e))] }), j && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: j, name: j }) })] }), x && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${x}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...I(`${x}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!R[`${x}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${x}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), R[x] && (0, l.jsx)(t.YB, { children: R[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: y || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  91316(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/developer-open-hour/aanmelden","title":"Aanmelden voor de Developer Open Hour","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","source":"@site/docs/community/events/developer-open-hour/aanmelden.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour/aanmelden","permalink":"/events/developer-open-hour/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor de Developer Open Hour","title_sm":"Aanmelden","description":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Aanmelden","slug":"/events/developer-open-hour/aanmelden"},"sidebar":"community","previous":{"title":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","permalink":"/events/developer-open-hour"},"next":{"title":"Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt.","permalink":"/events/mijn-services-check-in"}}');
   var r = i(86070),
    s = i(18439),
    a = i(78599);
   const l = { title: 'Aanmelden voor de Developer Open Hour', title_sm: 'Aanmelden', description: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit. Door je aan te melden houden we je op de hoogte', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/events/developer-open-hour/aanmelden' },
    o = 'Meld je aan voor de Developer Open Hour',
    d = {},
    c = [];
   function p(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'meld-je-aan-voor-de-developer-open-hour', children: 'Meld je aan voor de Developer Open Hour' }) }), '\n', (0, r.jsx)(n.p, { children: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, r.jsx)(a.W, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
