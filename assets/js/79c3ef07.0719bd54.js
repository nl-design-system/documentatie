'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16659],
 {
  37447(e, s, i) {
   i.d(s, { W: () => o });
   var n = i(25557),
    t = i(29181),
    r = i(30758),
    a = i(27890),
    l = i(86070);
   const o = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: c = '', interestsId: h = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], interestsRequired: m = !1, disallowedInterestValues: g = [], workAreasId: j = '', privacyPolicyId: y = '', language: x, submitText: k = '', talkTitleId: f = '', talkDescriptionId: v = '', roleId: b = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: T = !1 }) => {
    const {
      register: _,
      handleSubmit: R,
      formState: { errors: S },
     } = (0, a.mN)(),
     $ = (0, r.useRef)(null),
     D = '2' === x?.value,
     { search: B } = (0, n.zy)(),
     I = new URLSearchParams(B),
     W = I.get('prefillEmail'),
     q = I.get('prefillName'),
     F =
      !!(h && u.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        (i.push(n), n++);
       }
       return i;
      })(u, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: R(() => {
      $.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${o}`, children: D ? 'Email address ' : 'E-mailadres' }) }), S[o] && (0, l.jsx)(t.YB, { children: S[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: W, 'aria-required': 'true', ..._(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[o] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: d, children: D ? 'Name' : 'Naam' }) }), S[d] && (0, l.jsx)(t.YB, { children: S[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: d, name: d, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ..._(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[d] }) })] }), f && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: f, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: f, name: f, ..._(f, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), v && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: v, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: v, name: v, rows: 12, ..._(v, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: c, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[c] && (0, l.jsx)(t.YB, { children: S[c].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [p, !m && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, s) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${h}[]`, value: F[s], id: `${h}-${F[s]}` }), (0, l.jsx)(t.lR, { htmlFor: `${h}-${F[s]}`, children: e })] }, e))] }), b && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !T && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, s) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${b}[]`, id: `${b}-${s}` }), (0, l.jsx)(t.lR, { htmlFor: `${b}-${s}`, children: e })] }, e))] }), j && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: j, name: j }) })] }), y && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${y}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ..._(`${y}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${y}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${y}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[y] && (0, l.jsx)(t.YB, { children: S[y].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  73572(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => a, metadata: () => n, toc: () => d }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers-thanks","title":"Thanks for proposing a session \xb7 Design Systems Week","description":"We\'re busy putting together the week\'s program and will let you know if your presentation is a good fit!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers/thanks","permalink":"/events/design-systems-week/en/call-for-speakers/thanks","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for proposing a session \xb7 Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Thanks for proposing a session","pagination_label":"Thanks for proposing a session","slug":"/events/design-systems-week/en/call-for-speakers/thanks","displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    r = i(18439);
   i(37447);
   const a = { title: 'Thanks for proposing a session \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', displayed_sidebar: 'community' },
    l = 'Thank you for proposing a session for Design Systems Week 2025.',
    o = {},
    d = [];
   function c(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsx)(s.h1, { id: 'thank-you-for-proposing-a-session-for-design-systems-week-2025', children: 'Thank you for proposing a session for Design Systems Week 2025.' }) }), '\n', (0, t.jsx)(s.p, { children: "We're busy putting together the week's program and will let you know if your presentation is a good fit!" })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
