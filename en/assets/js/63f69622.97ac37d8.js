'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [59432],
 {
  87977: (e, t, i) => {
   i.r(t), i.d(t, { assets: () => m, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => o, toc: () => d });
   var n = i(52676),
    s = i(24785),
    r = i(82415);
   const a = { title: 'Communitybijeenkomst 18 oktober 2024', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' },
    l = 'Communitybijeenkomst',
    o = { id: 'community/events/community-bijeenkomst-2', title: 'Communitybijeenkomst 18 oktober 2024', description: 'Kom je ook naar de NL Design System communitybijeenkomst op 18 oktober 2024?', source: '@site/docs/community/events/community-bijeenkomst-2.mdx', sourceDirName: 'community/events', slug: '/events/communitybijeenkomst-18-10-2024', permalink: '/en/events/communitybijeenkomst-18-10-2024', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx', tags: [], version: 'current', frontMatter: { title: 'Communitybijeenkomst 18 oktober 2024', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' } },
    m = {},
    d = [];
   function c(e) {
    const t = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.h1, { id: 'communitybijeenkomst', children: 'Communitybijeenkomst' }), '\n', (0, n.jsx)(t.p, { children: 'Kom je ook naar de NL Design System communitybijeenkomst op 18 oktober 2024?' }), '\n', (0, n.jsx)(r.Z, { listId: 'w6sbgdln0j', emailFieldId: 'oYQvVF1C4s', firstNameFieldId: 'AFUcmITRwf', thanksPage: 'https://nldesignsystem.nl/community/communitybijeenkomst-18-10-2024/bedankt', laPostaId: 'iyihtuzpiq', submitText: 'Ik ben erbij!' })] });
   }
   function u(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, t, i) => {
   i.d(t, { Z: () => o });
   var n = i(3225),
    s = i(56150),
    r = i(75271),
    a = i(55912),
    l = i(52676);
   const o = (e) => {
    let { listId: t = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: m = '', firstNameFieldId: d = '', orgId: c = '', interestsId: u = '', interests: h = [], workAreasId: p = '', privacyPolicyId: j = '', language: x = {}, submitText: v = '' } = e;
    const {
      register: y,
      handleSubmit: g,
      formState: { errors: b },
     } = (0, a.cI)(),
     k = (0, r.useRef)(null),
     f = x && '2' === x.value,
     { search: w } = (0, n.TH)(),
     I = new URLSearchParams(w),
     C = I.get('prefillEmail'),
     _ = I.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: k,
     onSubmit: g(() => {
      k.current.submit();
     }),
     children: [(0, l.jsxs)(s.Wi, { type: 'email', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: `id-${m}`, children: f ? 'Email address ' : 'E-mailadres' }) }), b[m] && (0, l.jsx)(s.w7, { children: b[m].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', value: C, 'aria-required': 'true', ...y(`${m}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: f ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!b[m] }) })] }), (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: d, children: f ? 'Name' : 'Naam' }) }), b[d] && (0, l.jsx)(s.w7, { children: b[d].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: d, name: d, type: 'text', value: _, autoComplete: 'given-name', 'aria-required': 'true', ...y(`${d}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!b[d] }) })] }), c && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: c, children: 'Organisatie' }) }), b[c] && (0, l.jsx)(s.w7, { children: b[c].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(s.pg, { children: [(0, l.jsx)(s.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, t) => (0, l.jsx)(s.Wi, { type: 'checkbox', children: (0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.XZ, { name: `${u}[]`, value: t >= 6 ? t + 2 : t + 1, id: `${u}-${t + 1}` }), (0, l.jsx)(s.lX, { htmlFor: `${u}-${t + 1}`, children: e })] }) }, e))] }), p && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: p, name: p }) })] }), j && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.ue, { id: `${j}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...y(`${j}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!b[`${j}[]`] }), (0, l.jsxs)(s.lX, { htmlFor: `${j}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), b[j] && (0, l.jsx)(s.w7, { children: b[j].message })] }), x && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(s.hE, { children: (0, l.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: v || (f ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: t }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, t, i) => {
   i.d(t, { Z: () => l, a: () => a });
   var n = i(75271);
   const s = {},
    r = n.createContext(s);
   function a(e) {
    const t = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), n.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
