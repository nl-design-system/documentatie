'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8545],
 {
  36434: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => o, contentTitle: () => l, default: () => m, frontMatter: () => r, metadata: () => d, toc: () => u });
   var t = i(52676),
    n = i(40139),
    a = i(82415);
   const r = { title: 'Sign up \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', displayed_sidebar: 'community' },
    l = 'Sign up for Design Systems Week',
    d = { id: 'community/events/design-systems-week/en/sign-up', title: 'Sign up \xb7 Design Systems Week', description: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', source: '@site/docs/community/events/design-systems-week/en/sign-up.mdx', sourceDirName: 'community/events/design-systems-week/en', slug: '/events/design-systems-week/en/sign-up', permalink: '/events/design-systems-week/en/sign-up', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up.mdx', tags: [], version: 'current', frontMatter: { title: 'Sign up \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', displayed_sidebar: 'community' }, sidebar: 'community' },
    o = {},
    u = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', strong: 'strong', ...(0, n.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.h1, { id: 'sign-up-for-design-systems-week', children: 'Sign up for Design Systems Week' }), '\n', (0, t.jsx)(s.p, { children: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, t.jsxs)(s.p, { children: [(0, t.jsx)(s.strong, { children: 'Design Systems Week 2025 will take place from Oktober 27th to 30th' }), '.'] }), '\n', (0, t.jsx)(s.p, { children: 'We are now busy with all the preparations. Leave your info to receive updates!' }), '\n', (0, t.jsx)(a.A, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/en/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, n.a)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => d });
   var t = i(19696),
    n = i(74824),
    a = i(75271),
    r = i(25282),
    l = i(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: u = '', orgId: c = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: g = [], workAreasId: y = '', privacyPolicyId: v = '', language: j, submitText: x = '', talkTitleId: k = '', talkDescriptionId: f = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: S },
     } = (0, r.cI)(),
     W = (0, a.useRef)(null),
     D = '2' === j?.value,
     { search: _ } = (0, t.TH)(),
     I = new URLSearchParams(_),
     $ = I.get('prefillEmail'),
     F = I.get('prefillName'),
     q =
      !!(m && p.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
      })(p, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: W,
     onSubmit: w(() => {
      W.current.submit();
     }),
     children: [(0, l.jsxs)(n.Wi, { type: 'email', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: `id-${o}`, children: D ? 'Email address ' : 'E-mailadres' }) }), S[o] && (0, l.jsx)(n.w7, { children: S[o].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...b(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[o] }) })] }), (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: u, children: D ? 'Name' : 'Naam' }) }), S[u] && (0, l.jsx)(n.w7, { children: S[u].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: u, name: u, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${u}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[u] }) })] }), k && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: k, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.ue, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: k, name: k, ...b(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: f, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.ue, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: f, name: f, rows: 12, ...b(f, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: c, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[c] && (0, l.jsx)(n.w7, { children: S[c].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: c, name: c, type: 'text' }) })] }), m && (0, l.jsxs)(n.pg, { children: [(0, l.jsx)(n.nv, { children: (0, l.jsxs)(n.Qv, { children: [h, ' (niet verplicht)'] }) }), (0, l.jsx)(n.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, l.jsxs)(n.Wi, { type: 'checkbox', children: [(0, l.jsx)(n.XZ, { name: `${m}[]`, value: q[s], id: `${m}-${q[s]}` }), (0, l.jsx)(n.lX, { htmlFor: `${m}-${q[s]}`, children: e })] }, e))] }), y && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: y, name: y }) })] }), v && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.ue, { id: `${v}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.Wi, { type: 'checkbox', children: [(0, l.jsx)(n.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...b(`${v}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${v}[]`] }), (0, l.jsx)(n.lX, { htmlFor: `${v}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[v] && (0, l.jsx)(n.w7, { children: S[v].message })] }), j?.id && (0, l.jsx)('input', { type: 'hidden', name: j.id, value: j.value }), (0, l.jsx)(n.hE, { children: (0, l.jsx)(n.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
