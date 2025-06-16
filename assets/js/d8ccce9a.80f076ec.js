'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [14512],
 {
  88436: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => l });
   var i = t(52676),
    s = t(40139);
   t(82415);
   const r = { title: 'Introduction into European Design Systems 2025', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/community/events/introduction-european-design-systems-2025' },
    a = 'Introduction into European Design Systems 2025',
    o = { id: 'community/events/introduction-european-design-systems', title: 'Introduction into European Design Systems 2025', description: "Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We've started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community.", source: '@site/docs/community/events/introduction-european-design-systems.mdx', sourceDirName: 'community/events', slug: '/community/events/introduction-european-design-systems-2025', permalink: '/community/events/introduction-european-design-systems-2025', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/introduction-european-design-systems.mdx', tags: [], version: 'current', frontMatter: { title: 'Introduction into European Design Systems 2025', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/community/events/introduction-european-design-systems-2025' } },
    d = {},
    l = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'introduction-into-european-design-systems-2025', children: 'Introduction into European Design Systems 2025' }), '\n', (0, i.jsx)(n.p, { children: "Denmark, Greece, Italy and Portugal introduced their design systems at User Needs First International Conference in Amsterdam. We've started a dialog to identify areas where we can support and learn from one another, fostering a stronger and more connected community." }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'The event has already taken place' }), '. You can no longer sign up.'] }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['\ud83d\udcc6 ', (0, i.jsx)(n.strong, { children: 'When' }), ': April 10th from 13:30 to 14:45 CEST.'] }), '\n', (0, i.jsxs)(n.li, { children: ['\ud83c\udf0d ', (0, i.jsx)(n.strong, { children: 'Where' }), ': In Amsterdam as part of the ', (0, i.jsx)(n.a, { href: 'https://international.gebruikercentraal.nl/conference2025/', children: 'User Needs First International Conference 2025' }), ' and online via Microsoft Teams.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { A: () => d });
   var i = t(87573),
    s = t(41115),
    r = t(75271),
    a = t(25282),
    o = t(52676);
   const d = (e) => {
    let { listId: n = '', laPostaId: t = '', thanksPage: d = '', emailFieldId: l = '', firstNameFieldId: c = '', orgId: u = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: g = [], workAreasId: x = '', privacyPolicyId: v = '', language: y, submitText: j = '' } = e;
    const {
      register: f,
      handleSubmit: k,
      formState: { errors: w },
     } = (0, a.cI)(),
     b = (0, r.useRef)(null),
     I = '2' === y?.value,
     { search: D } = (0, i.TH)(),
     S = new URLSearchParams(D),
     _ = S.get('prefillEmail'),
     $ = S.get('prefillName'),
     C =
      !!(m && p.length > 0) &&
      ((e, n) => {
       const t = [];
       let i = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(i); ) i++;
        t.push(i), i++;
       }
       return t;
      })(p, g);
    return (0, o.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: b,
     onSubmit: k(() => {
      b.current.submit();
     }),
     children: [(0, o.jsxs)(s.Wi, { type: 'email', children: [(0, o.jsx)(s.nv, { children: (0, o.jsx)(s.lX, { htmlFor: `id-${l}`, children: I ? 'Email address ' : 'E-mailadres' }) }), w[l] && (0, o.jsx)(s.w7, { children: w[l].message }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.fE, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...f(`${l}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: I ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[l] }) })] }), (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsx)(s.nv, { children: (0, o.jsx)(s.lX, { htmlFor: c, children: I ? 'Name' : 'Naam' }) }), w[c] && (0, o.jsx)(s.w7, { children: w[c].message }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.fE, { id: c, name: c, type: 'text', defaultValue: $, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${c}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[c] }) })] }), u && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsx)(s.nv, { children: (0, o.jsx)(s.lX, { htmlFor: u, children: I ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[u] && (0, o.jsx)(s.w7, { children: w[u].message }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.fE, { id: u, name: u, type: 'text' }) })] }), m && (0, o.jsxs)(s.pg, { children: [(0, o.jsxs)(s.Qv, { children: [h, ' (niet verplicht)'] }), (0, o.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, o.jsx)(s.Wi, { type: 'checkbox', children: (0, o.jsxs)(s.nv, { children: [(0, o.jsx)(s.XZ, { name: `${m}[]`, value: C[n], id: `${m}-${C[n]}` }), (0, o.jsx)(s.lX, { htmlFor: `${m}-${C[n]}`, children: e })] }) }, e))] }), x && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsxs)(s.nv, { children: [(0, o.jsx)(s.lX, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.nv, { children: (0, o.jsx)(s.gx, { id: x, name: x }) })] }), v && (0, o.jsxs)(s.Wi, { type: 'text', children: [(0, o.jsx)(s.ue, { id: `${v}-description`, children: I ? (0, o.jsxs)('p', { children: ['The ', (0, o.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, o.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, o.jsxs)(s.Wi, { type: 'checkbox', children: [(0, o.jsx)(s.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...f(`${v}[]`, { required: { value: !0, message: I ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${v}[]`] }), (0, o.jsx)(s.lX, { htmlFor: `${v}-1`, children: I ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[v] && (0, o.jsx)(s.w7, { children: w[v].message })] }), y?.id && (0, o.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, o.jsx)(s.hE, { children: (0, o.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (I ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => a });
   var i = t(75271);
   const s = {},
    r = i.createContext(s);
   function a(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
