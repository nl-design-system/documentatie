'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70885],
 {
  20275: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => l, contentTitle: () => a, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => d });
   var n = i(52676),
    t = i(40139);
   i(82415);
   const r = { title: 'Thanks for proposing a session \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', displayed_sidebar: 'community' },
    a = 'Thank you for proposing a session for Design Systems Week 2025.',
    o = { id: 'community/events/design-systems-week/en/call-for-speakers-thanks', title: 'Thanks for proposing a session \xb7 Design Systems Week', description: "We're busy putting together the week's program and will let you know if your presentation is a good fit!", source: '@site/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx', sourceDirName: 'community/events/design-systems-week/en', slug: '/events/design-systems-week/en/call-for-speakers/thanks', permalink: '/events/design-systems-week/en/call-for-speakers/thanks', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx', tags: [], version: 'current', frontMatter: { title: 'Thanks for proposing a session \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', displayed_sidebar: 'community' }, sidebar: 'community' },
    l = {},
    d = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.h1, { id: 'thank-you-for-proposing-a-session-for-design-systems-week-2025', children: 'Thank you for proposing a session for Design Systems Week 2025.' }), '\n', (0, n.jsx)(s.p, { children: "We're busy putting together the week's program and will let you know if your presentation is a good fit!" })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => l });
   var n = i(87573),
    t = i(35076),
    r = i(75271),
    a = i(25282),
    o = i(52676);
   const l = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: l = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: u = '', interestsId: p = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: y = '', language: x, submitText: j = '', talkTitleId: k = '', talkDescriptionId: f = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: W },
     } = (0, a.cI)(),
     _ = (0, r.useRef)(null),
     T = '2' === x?.value,
     { search: D } = (0, n.TH)(),
     S = new URLSearchParams(D),
     I = S.get('prefillEmail'),
     $ = S.get('prefillName'),
     q =
      !!(p && m.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        i.push(n), n++;
       }
       return i;
      })(m, g);
    return (0, o.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: w(() => {
      _.current.submit();
     }),
     children: [(0, o.jsxs)(t.Wi, { type: 'email', children: [(0, o.jsx)(t.nv, { children: (0, o.jsx)(t.lX, { htmlFor: `id-${d}`, children: T ? 'Email address ' : 'E-mailadres' }) }), W[d] && (0, o.jsx)(t.w7, { children: W[d].message }), (0, o.jsx)(t.nv, { children: (0, o.jsx)(t.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: I, 'aria-required': 'true', ...b(`${d}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: T ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!W[d] }) })] }), (0, o.jsxs)(t.Wi, { type: 'text', children: [(0, o.jsx)(t.nv, { children: (0, o.jsx)(t.lX, { htmlFor: c, children: T ? 'Name' : 'Naam' }) }), W[c] && (0, o.jsx)(t.w7, { children: W[c].message }), (0, o.jsx)(t.nv, { children: (0, o.jsx)(t.fE, { id: c, name: c, type: 'text', defaultValue: $, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${c}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!W[c] }) })] }), k && (0, o.jsxs)(t.Wi, { type: 'text', children: [(0, o.jsxs)(t.nv, { children: [(0, o.jsx)(t.lX, { htmlFor: k, children: T ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.ue, { children: T ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(t.nv, { children: (0, o.jsx)(t.fE, { id: k, name: k, ...b(k, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, o.jsxs)(t.Wi, { type: 'text', children: [(0, o.jsxs)(t.nv, { children: [(0, o.jsx)(t.lX, { htmlFor: f, children: T ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.ue, { children: T ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(t.nv, { children: (0, o.jsx)(t.gx, { id: f, name: f, rows: 12, ...b(f, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, o.jsxs)(t.Wi, { type: 'text', children: [(0, o.jsx)(t.nv, { children: (0, o.jsx)(t.lX, { htmlFor: u, children: T ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), W[u] && (0, o.jsx)(t.w7, { children: W[u].message }), (0, o.jsx)(t.nv, { children: (0, o.jsx)(t.fE, { id: u, name: u, type: 'text' }) })] }), p && (0, o.jsxs)(t.pg, { children: [(0, o.jsxs)(t.Qv, { children: [h, ' (niet verplicht)'] }), (0, o.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, s) => (0, o.jsx)(t.Wi, { type: 'checkbox', children: (0, o.jsxs)(t.nv, { children: [(0, o.jsx)(t.XZ, { name: `${p}[]`, value: q[s], id: `${p}-${q[s]}` }), (0, o.jsx)(t.lX, { htmlFor: `${p}-${q[s]}`, children: e })] }) }, e))] }), v && (0, o.jsxs)(t.Wi, { type: 'text', children: [(0, o.jsxs)(t.nv, { children: [(0, o.jsx)(t.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(t.nv, { children: (0, o.jsx)(t.gx, { id: v, name: v }) })] }), y && (0, o.jsxs)(t.Wi, { type: 'text', children: [(0, o.jsx)(t.ue, { id: `${y}-description`, children: T ? (0, o.jsxs)('p', { children: ['The ', (0, o.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, o.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, o.jsxs)(t.Wi, { type: 'checkbox', children: [(0, o.jsx)(t.XZ, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...b(`${y}[]`, { required: { value: !0, message: T ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!W[`${y}[]`] }), (0, o.jsx)(t.lX, { htmlFor: `${y}-1`, children: T ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), W[y] && (0, o.jsx)(t.w7, { children: W[y].message })] }), x?.id && (0, o.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, o.jsx)(t.hE, { children: (0, o.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (T ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, s, i) => {
   i.d(s, { Z: () => o, a: () => a });
   var n = i(75271);
   const t = {},
    r = n.createContext(t);
   function a(e) {
    const s = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function o(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), n.createElement(r.Provider, { value: s }, e.children);
   }
  },
 },
]);
