'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8545],
 {
  4167: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => o, contentTitle: () => l, default: () => m, frontMatter: () => a, metadata: () => d, toc: () => c });
   var t = i(52676),
    n = i(40139),
    r = i(82415);
   const a = { title: 'Sign up \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', displayed_sidebar: 'community' },
    l = 'Sign up for Design Systems Week',
    d = { id: 'community/events/design-systems-week/en/sign-up', title: 'Sign up \xb7 Design Systems Week', description: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', source: '@site/docs/community/events/design-systems-week/en/sign-up.mdx', sourceDirName: 'community/events/design-systems-week/en', slug: '/events/design-systems-week/en/sign-up', permalink: '/events/design-systems-week/en/sign-up', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up.mdx', tags: [], version: 'current', frontMatter: { title: 'Sign up \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', displayed_sidebar: 'community' }, sidebar: 'community' },
    o = {},
    c = [];
   function u(e) {
    const s = { h1: 'h1', p: 'p', strong: 'strong', ...(0, n.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.h1, { id: 'sign-up-for-design-systems-week', children: 'Sign up for Design Systems Week' }), '\n', (0, t.jsx)(s.p, { children: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, t.jsxs)(s.p, { children: [(0, t.jsx)(s.strong, { children: 'Design Systems Week 2025 will take place from Oktober 27th to 30th' }), '.'] }), '\n', (0, t.jsx)(s.p, { children: 'We are now busy with all the preparations. Leave your info to receive updates!' }), '\n', (0, t.jsx)(r.A, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, n.a)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => d });
   var t = i(87573),
    n = i(41115),
    r = i(75271),
    a = i(25282),
    l = i(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: u = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: g = [], workAreasId: y = '', privacyPolicyId: v = '', language: x, submitText: j = '', talkTitleId: f = '', talkDescriptionId: k = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: S },
     } = (0, a.cI)(),
     W = (0, r.useRef)(null),
     D = '2' === x?.value,
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
     children: [(0, l.jsxs)(n.Wi, { type: 'email', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: `id-${o}`, children: D ? 'Email address ' : 'E-mailadres' }) }), S[o] && (0, l.jsx)(n.w7, { children: S[o].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...b(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[o] }) })] }), (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: c, children: D ? 'Name' : 'Naam' }) }), S[c] && (0, l.jsx)(n.w7, { children: S[c].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${c}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[c] }) })] }), f && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: f, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.ue, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: f, name: f, ...b(f, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: k, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.ue, { children: D ? 'Short description. What is it about?' : 'Korte beschrijving. Waar gaat het over?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: k, name: k, rows: 12, maxLength: 250, ...b(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: u, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[u] && (0, l.jsx)(n.w7, { children: S[u].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: u, name: u, type: 'text' }) })] }), m && (0, l.jsxs)(n.pg, { children: [(0, l.jsxs)(n.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(n.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, l.jsx)(n.Wi, { type: 'checkbox', children: (0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.XZ, { name: `${m}[]`, value: q[s], id: `${m}-${q[s]}` }), (0, l.jsx)(n.lX, { htmlFor: `${m}-${q[s]}`, children: e })] }) }, e))] }), y && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: y, name: y }) })] }), v && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.ue, { id: `${v}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.Wi, { type: 'checkbox', children: [(0, l.jsx)(n.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...b(`${v}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${v}[]`] }), (0, l.jsx)(n.lX, { htmlFor: `${v}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[v] && (0, l.jsx)(n.w7, { children: S[v].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(n.hE, { children: (0, l.jsx)(n.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, s, i) => {
   i.d(s, { Z: () => l, a: () => a });
   var t = i(75271);
   const n = {},
    r = t.createContext(n);
   function a(e) {
    const s = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function l(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(n) : e.components || n) : a(e.components)), t.createElement(r.Provider, { value: s }, e.children);
   }
  },
 },
]);
