'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8054],
 {
  30664: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => r, metadata: () => o, toc: () => c });
   var t = i(52676),
    n = i(40139),
    a = i(82415);
   const r = { title: 'Propose talk \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Propose talk', pagination_label: 'Propose talk', slug: '/events/design-systems-week/en/call-for-speakers', displayed_sidebar: 'community' },
    l = 'Design Systems Week 2025 - Call for speakers',
    o = { id: 'community/events/design-systems-week/en/call-for-speakers', title: 'Propose talk \xb7 Design Systems Week', description: "From October 27th to 31st, 2025, we're once again organizing a week full of sessions on design systems. A week in which we'll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration.", source: '@site/docs/community/events/design-systems-week/en/call-for-speakers.mdx', sourceDirName: 'community/events/design-systems-week/en', slug: '/events/design-systems-week/en/call-for-speakers', permalink: '/events/design-systems-week/en/call-for-speakers', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers.mdx', tags: [], version: 'current', frontMatter: { title: 'Propose talk \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Propose talk', pagination_label: 'Propose talk', slug: '/events/design-systems-week/en/call-for-speakers', displayed_sidebar: 'community' }, sidebar: 'community' },
    d = {},
    c = [{ value: 'Submit your proposal via this form', id: 'submit-your-proposal-via-this-form', level: 2 }];
   function u(e) {
    const s = { h1: 'h1', h2: 'h2', p: 'p', ...(0, n.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.h1, { id: 'design-systems-week-2025---call-for-speakers', children: 'Design Systems Week 2025 - Call for speakers' }), '\n', (0, t.jsx)(s.p, { children: "From October 27th to 31st, 2025, we're once again organizing a week full of sessions on design systems. A week in which we'll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration." }), '\n', (0, t.jsx)(s.p, { children: 'Are you a designer, developer, or content creator working with a government design system? Or do you have a great idea to share about the importance of an accessible design system? Then the Design Systems Week is a great opportunity to share knowledge with colleagues.' }), '\n', (0, t.jsx)(s.h2, { id: 'submit-your-proposal-via-this-form', children: 'Submit your proposal via this form' }), '\n', (0, t.jsx)(a.A, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '2' } })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, n.a)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => o });
   var t = i(87573),
    n = i(35076),
    a = i(75271),
    r = i(25282),
    l = i(52676);
   const o = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: u = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: y = '', language: x, submitText: j = '', talkTitleId: k = '', talkDescriptionId: f = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: I },
     } = (0, r.cI)(),
     W = (0, a.useRef)(null),
     D = '2' === x?.value,
     { search: _ } = (0, t.TH)(),
     S = new URLSearchParams(_),
     F = S.get('prefillEmail'),
     P = S.get('prefillName'),
     $ =
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
     children: [(0, l.jsxs)(n.Wi, { type: 'email', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: `id-${d}`, children: D ? 'Email address ' : 'E-mailadres' }) }), I[d] && (0, l.jsx)(n.w7, { children: I[d].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...b(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[d] }) })] }), (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: c, children: D ? 'Name' : 'Naam' }) }), I[c] && (0, l.jsx)(n.w7, { children: I[c].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: c, name: c, type: 'text', defaultValue: P, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${c}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[c] }) })] }), k && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: k, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.ue, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: k, name: k, ...b(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: f, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.ue, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: f, name: f, rows: 12, ...b(f, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: u, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[u] && (0, l.jsx)(n.w7, { children: I[u].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: u, name: u, type: 'text' }) })] }), m && (0, l.jsxs)(n.pg, { children: [(0, l.jsxs)(n.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(n.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, l.jsx)(n.Wi, { type: 'checkbox', children: (0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.XZ, { name: `${m}[]`, value: $[s], id: `${m}-${$[s]}` }), (0, l.jsx)(n.lX, { htmlFor: `${m}-${$[s]}`, children: e })] }) }, e))] }), v && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: v, name: v }) })] }), y && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.ue, { id: `${y}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.Wi, { type: 'checkbox', children: [(0, l.jsx)(n.XZ, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...b(`${y}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${y}[]`] }), (0, l.jsx)(n.lX, { htmlFor: `${y}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[y] && (0, l.jsx)(n.w7, { children: I[y].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(n.hE, { children: (0, l.jsx)(n.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, s, i) => {
   i.d(s, { Z: () => l, a: () => r });
   var t = i(75271);
   const n = {},
    a = t.createContext(n);
   function r(e) {
    const s = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function l(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(n) : e.components || n) : r(e.components)), t.createElement(a.Provider, { value: s }, e.children);
   }
  },
 },
]);
