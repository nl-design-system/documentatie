'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70885],
 {
  20275: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => o, contentTitle: () => a, default: () => h, frontMatter: () => r, metadata: () => l, toc: () => d });
   var n = i(52676),
    t = i(40139);
   i(82415);
   const r = { title: 'Thanks for proposing a session \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', displayed_sidebar: 'community' },
    a = 'Thank you for proposing a session for Design Systems Week 2025.',
    l = { id: 'community/events/design-systems-week/en/call-for-speakers-thanks', title: 'Thanks for proposing a session \xb7 Design Systems Week', description: "We're busy putting together the week's program and will let you know if your presentation is a good fit!", source: '@site/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx', sourceDirName: 'community/events/design-systems-week/en', slug: '/events/design-systems-week/en/call-for-speakers/thanks', permalink: '/events/design-systems-week/en/call-for-speakers/thanks', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx', tags: [], version: 'current', frontMatter: { title: 'Thanks for proposing a session \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', displayed_sidebar: 'community' }, sidebar: 'community' },
    o = {},
    d = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.h1, { id: 'thank-you-for-proposing-a-session-for-design-systems-week-2025', children: 'Thank you for proposing a session for Design Systems Week 2025.' }), '\n', (0, n.jsx)(s.p, { children: "We're busy putting together the week's program and will let you know if your presentation is a good fit!" })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => o });
   var n = i(19696),
    t = i(74824),
    r = i(75271),
    a = i(25282),
    l = i(52676);
   const o = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: h = '', interestsId: u = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: y = '', language: j, submitText: x = '', talkTitleId: k = '', talkDescriptionId: f = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: W },
     } = (0, a.cI)(),
     _ = (0, r.useRef)(null),
     T = '2' === j?.value,
     { search: D } = (0, n.TH)(),
     S = new URLSearchParams(D),
     I = S.get('prefillEmail'),
     $ = S.get('prefillName'),
     q =
      !!(u && m.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        i.push(n), n++;
       }
       return i;
      })(m, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: w(() => {
      _.current.submit();
     }),
     children: [(0, l.jsxs)(t.Wi, { type: 'email', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: `id-${d}`, children: T ? 'Email address ' : 'E-mailadres' }) }), W[d] && (0, l.jsx)(t.w7, { children: W[d].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: I, 'aria-required': 'true', ...b(`${d}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: T ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!W[d] }) })] }), (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: c, children: T ? 'Name' : 'Naam' }) }), W[c] && (0, l.jsx)(t.w7, { children: W[c].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: c, name: c, type: 'text', defaultValue: $, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${c}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!W[c] }) })] }), k && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: k, children: T ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.ue, { children: T ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: k, name: k, ...b(k, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: f, children: T ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.ue, { children: T ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: f, name: f, rows: 12, ...b(f, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: h, children: T ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), W[h] && (0, l.jsx)(t.w7, { children: W[h].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: h, name: h, type: 'text' }) })] }), u && (0, l.jsxs)(t.pg, { children: [(0, l.jsx)(t.nv, { children: (0, l.jsxs)(t.Qv, { children: [p, ' (niet verplicht)'] }) }), (0, l.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, s) => (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { name: `${u}[]`, value: q[s], id: `${u}-${q[s]}` }), (0, l.jsx)(t.lX, { htmlFor: `${u}-${q[s]}`, children: e })] }, e))] }), v && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: v, name: v }) })] }), y && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.ue, { id: `${y}-description`, children: T ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...b(`${y}[]`, { required: { value: !0, message: T ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!W[`${y}[]`] }), (0, l.jsx)(t.lX, { htmlFor: `${y}-1`, children: T ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), W[y] && (0, l.jsx)(t.w7, { children: W[y].message })] }), j?.id && (0, l.jsx)('input', { type: 'hidden', name: j.id, value: j.value }), (0, l.jsx)(t.hE, { children: (0, l.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (T ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
