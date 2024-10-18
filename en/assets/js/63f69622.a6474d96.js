'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [59432],
 {
  78683: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => o, toc: () => m });
   var t = i(52676),
    s = i(24785),
    r = i(82415);
   const a = { title: 'Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' },
    l = 'Communitybijeenkomst',
    o = { id: 'community/events/community-bijeenkomst-2', title: 'Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten', description: 'Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?', source: '@site/docs/community/events/community-bijeenkomst-2.mdx', sourceDirName: 'community/events', slug: '/events/communitybijeenkomst-18-10-2024', permalink: '/en/events/communitybijeenkomst-18-10-2024', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx', tags: [], version: 'current', frontMatter: { title: 'Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' } },
    d = {},
    m = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'communitybijeenkomst', children: 'Communitybijeenkomst' }), '\n', (0, t.jsx)(n.p, { children: 'Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?\nNL Design System bestaat uit een groep enthousiaste Designers, Developers, Accessibility specialisten, Product Owners en Design System liefhebbers die voornamelijk online samenwerken.' }), '\n', (0, t.jsx)(n.p, { children: 'Deze Communitybijeenkomst is d\xe9 kans om elkaar te ontmoeten, kennis uit te wisselen en samenwerking te vieren onder het genot van een drankje en een hapje.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['\ud83d\udcc6 ', (0, t.jsx)(n.strong, { children: 'Wanneer' }), ': 18 oktober van 16:00 uur tot 18:30 uur.'] }), '\n', (0, t.jsxs)(n.li, { children: ['\ud83c\udf0d ', (0, t.jsx)(n.strong, { children: 'Waar' }), ': ', (0, t.jsx)(n.a, { href: 'https://danel-utrecht.nl', children: 'Bar Danel' }), ', direct naast Utrecht Centraal.'] }), '\n', (0, t.jsxs)(n.li, { children: ['\ud83e\udef5 ', (0, t.jsx)(n.strong, { children: 'Voor wie?' }), ': Iedereen die met ons samenwerkt \xe9n alle nieuwe mensen die graag mee willen doen met de NL Design System Community.'] }), '\n'] }), '\n', (0, t.jsx)(r.Z, { listId: 'w6sbgdln0j', emailFieldId: 'oYQvVF1C4s', firstNameFieldId: 'AFUcmITRwf', thanksPage: 'https://nldesignsystem.nl/community/communitybijeenkomst-18-10-2024/bedankt', laPostaId: 'iyihtuzpiq', submitText: 'Ik ben erbij!' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => o });
   var t = i(3225),
    s = i(56150),
    r = i(75271),
    a = i(51686),
    l = i(52676);
   const o = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interests: h = [], workAreasId: j = '', privacyPolicyId: p = '', language: x = {}, submitText: v = '' } = e;
    const {
      register: g,
      handleSubmit: y,
      formState: { errors: k },
     } = (0, a.cI)(),
     b = (0, r.useRef)(null),
     f = x && '2' === x.value,
     { search: w } = (0, t.TH)(),
     C = new URLSearchParams(w),
     D = C.get('prefillEmail'),
     I = C.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: b,
     onSubmit: y(() => {
      b.current.submit();
     }),
     children: [(0, l.jsxs)(s.Wi, { type: 'email', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: `id-${d}`, children: f ? 'Email address ' : 'E-mailadres' }) }), k[d] && (0, l.jsx)(s.w7, { children: k[d].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: D, 'aria-required': 'true', ...g(`${d}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: f ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!k[d] }) })] }), (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: m, children: f ? 'Name' : 'Naam' }) }), k[m] && (0, l.jsx)(s.w7, { children: k[m].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: m, name: m, type: 'text', defaultValue: I, autoComplete: 'given-name', 'aria-required': 'true', ...g(`${m}`, { required: { value: !0, message: f ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!k[m] }) })] }), c && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: c, children: 'Organisatie' }) }), k[c] && (0, l.jsx)(s.w7, { children: k[c].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(s.pg, { children: [(0, l.jsx)(s.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, n) => (0, l.jsx)(s.Wi, { type: 'checkbox', children: (0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.XZ, { name: `${u}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${u}-${n + 1}` }), (0, l.jsx)(s.lX, { htmlFor: `${u}-${n + 1}`, children: e })] }) }, e))] }), j && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: j, name: j }) })] }), p && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.ue, { id: `${p}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { value: '1', id: `${p}-1`, 'aria-describedby': `${p}-description`, 'aria-required': 'true', ...g(`${p}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!k[`${p}[]`] }), (0, l.jsxs)(s.lX, { htmlFor: `${p}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), k[p] && (0, l.jsx)(s.w7, { children: k[p].message })] }), x && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(s.hE, { children: (0, l.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: v || (f ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
   var t = i(75271);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
