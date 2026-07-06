'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16659],
 {
  46565(e, s, i) {
   i.d(s, { c: () => t });
   var n = i(30758);
   function t() {
    const [e, s] = (0, n.useState)();
    return ((0, n.useEffect)(() => s(!0), []), e);
   }
  },
  73572(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => a, metadata: () => n, toc: () => d }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers-thanks","title":"Thanks for proposing a session","description":"We\'re busy putting together the week\'s program and will let you know if your presentation is a good fit!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers/thanks","permalink":"/events/design-systems-week/en/call-for-speakers/thanks","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for proposing a session","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Thanks for proposing a session","pagination_label":"Thanks for proposing a session","slug":"/events/design-systems-week/en/call-for-speakers/thanks","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    r = i(18439);
   i(78599);
   const a = { title: 'Thanks for proposing a session', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', unlisted: !0, displayed_sidebar: 'community' },
    l = 'Thank you for proposing a session for Design Systems Week 2026.',
    o = {},
    d = [];
   function c(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsx)(s.h1, { id: 'thank-you-for-proposing-a-session-for-design-systems-week-2026', children: 'Thank you for proposing a session for Design Systems Week 2026.' }) }), '\n', (0, t.jsx)(s.p, { children: "We're busy putting together the week's program and will let you know if your presentation is a good fit!" })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  78599(e, s, i) {
   i.d(s, { W: () => d });
   var n = i(29181),
    t = i(56561),
    r = i(30758),
    a = i(27890),
    l = i(46565),
    o = i(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: h = '', interestsId: p = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: g = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: y = '', language: k, submitText: f = '', talkTitleId: v = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: T = 'Wat is jouw rol?', roles: _ = [], roleRequired: R = !1 }) => {
    const {
      register: $,
      handleSubmit: S,
      formState: { errors: B },
     } = (0, a.mN)(),
     I = (0, r.useRef)(null),
     N = '2' === k?.value,
     D = (0, l.c)() ? window.location.search : '',
     q = new URLSearchParams(D),
     W = q.get('prefillEmail'),
     z = q.get('prefillName'),
     F =
      !!(p && m.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        (i.push(n), n++);
       }
       return i;
      })(m, j);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: I,
     onSubmit: S(() => {
      I.current.submit();
     }),
     children: [(0, o.jsxs)(n.zB, { type: 'email', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(n.lR, { htmlFor: `id-${d}`, children: N ? 'Email address ' : 'E-mailadres' }) }), B[d] && (0, o.jsx)(n.YB, { children: B[d].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(n.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: W, 'aria-required': 'true', ...$(`${d}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: N ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[d] }) })] }), (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(n.lR, { htmlFor: c, children: N ? 'Name' : 'Naam' }) }), B[c] && (0, o.jsx)(n.YB, { children: B[c].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(n.Rj, { id: c, name: c, type: 'text', defaultValue: z, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[c] }) })] }), v && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(n.lR, { htmlFor: v, children: N ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(n.JM, { children: N ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(n.Rj, { id: v, name: v, ...$(v, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(n.lR, { htmlFor: b, children: N ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(n.JM, { children: N ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(n.TM, { id: b, name: b, rows: 12, ...$(b, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(n.lR, { htmlFor: h, children: N ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[h] && (0, o.jsx)(n.YB, { children: B[h].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(n.Rj, { id: h, name: h, type: 'text' }) })] }), p && (0, o.jsxs)(n.LB, { children: [(0, o.jsx)(t.f, { children: (0, o.jsxs)(n.u4, { children: [u, !g && ' (niet verplicht)'] }) }), (0, o.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, s) => (0, o.jsxs)(n.zB, { type: 'checkbox', children: [(0, o.jsx)(n.Sc, { name: `${p}[]`, value: F[s], id: `${p}-${F[s]}` }), (0, o.jsx)(n.lR, { type: 'checkbox', htmlFor: `${p}-${F[s]}`, children: e })] }, e))] }), w && (0, o.jsxs)(n.LB, { children: [(0, o.jsx)(t.f, { children: (0, o.jsxs)(n.u4, { children: [T, !R && ' (niet verplicht)'] }) }), (0, o.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), _.map((e, s) => (0, o.jsxs)(n.zB, { type: 'checkbox', children: [(0, o.jsx)(n.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, o.jsx)(n.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), x && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(n.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(n.TM, { id: x, name: x }) })] }), y && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsx)(n.JM, { id: `${y}-description`, children: N ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(n.zB, { type: 'checkbox', children: [(0, o.jsx)(n.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...$(`${y}[]`, { required: { value: !0, message: N ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${y}[]`] }), (0, o.jsx)(n.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: N ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[y] && (0, o.jsx)(n.YB, { children: B[y].message })] }), k?.id && (0, o.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, o.jsx)(n.e2, { children: (0, o.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (N ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
