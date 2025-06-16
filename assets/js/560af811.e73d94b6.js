'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10488],
 {
  99926: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => d, toc: () => c });
   var t = i(52676),
    n = i(40139),
    a = i(82415);
   const r = { title: 'Sign up \xb7 Design Systems Week 2024', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/sign-up' },
    l = 'Sign up for Design Systems Week 2024',
    d = { id: 'community/events/design-systems-week/sign-up', title: 'Sign up \xb7 Design Systems Week 2024', description: 'Design System Week 2024 will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', source: '@site/docs/community/events/design-systems-week/sign-up.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/sign-up', permalink: '/events/design-systems-week/sign-up', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sign-up.mdx', tags: [], version: 'current', frontMatter: { title: 'Sign up \xb7 Design Systems Week 2024', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/sign-up' } },
    o = {},
    c = [];
   function m(e) {
    const s = { h1: 'h1', p: 'p', ...(0, n.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.h1, { id: 'sign-up-for-design-systems-week-2024', children: 'Sign up for Design Systems Week 2024' }), '\n', (0, t.jsx)(s.p, { children: 'Design System Week 2024 will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, t.jsx)(s.p, { children: 'Leave your info to receive updates from us leading up to Design Systems Week.' }), '\n', (0, t.jsx)(a.A, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, n.a)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => d });
   var t = i(87573),
    n = i(41115),
    a = i(75271),
    r = i(25282),
    l = i(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: m = '', interestsId: u = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], disallowedInterestValues: g = [], workAreasId: y = '', privacyPolicyId: v = '', language: x, submitText: j = '' } = e;
    const {
      register: f,
      handleSubmit: k,
      formState: { errors: w },
     } = (0, r.cI)(),
     b = (0, a.useRef)(null),
     S = '2' === x?.value,
     { search: D } = (0, t.TH)(),
     W = new URLSearchParams(D),
     _ = W.get('prefillEmail'),
     I = W.get('prefillName'),
     $ =
      !!(u && h.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
      })(h, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: b,
     onSubmit: k(() => {
      b.current.submit();
     }),
     children: [(0, l.jsxs)(n.Wi, { type: 'email', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: `id-${o}`, children: S ? 'Email address ' : 'E-mailadres' }) }), w[o] && (0, l.jsx)(n.w7, { children: w[o].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[o] }) })] }), (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: c, children: S ? 'Name' : 'Naam' }) }), w[c] && (0, l.jsx)(n.w7, { children: w[c].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: c, name: c, type: 'text', defaultValue: I, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${c}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[c] }) })] }), m && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: m, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[m] && (0, l.jsx)(n.w7, { children: w[m].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, l.jsxs)(n.pg, { children: [(0, l.jsxs)(n.Qv, { children: [p, ' (niet verplicht)'] }), (0, l.jsx)(n.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, s) => (0, l.jsx)(n.Wi, { type: 'checkbox', children: (0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.XZ, { name: `${u}[]`, value: $[s], id: `${u}-${$[s]}` }), (0, l.jsx)(n.lX, { htmlFor: `${u}-${$[s]}`, children: e })] }) }, e))] }), y && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: y, name: y }) })] }), v && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.ue, { id: `${v}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.Wi, { type: 'checkbox', children: [(0, l.jsx)(n.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...f(`${v}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${v}[]`] }), (0, l.jsx)(n.lX, { htmlFor: `${v}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[v] && (0, l.jsx)(n.w7, { children: w[v].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(n.hE, { children: (0, l.jsx)(n.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
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
