'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [63451],
 {
  49386: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => m });
   var i = n(52676),
    t = n(40139),
    a = n(82415);
   const r = { title: 'Aanmelden \xb7 Design Systems Week 2024', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden' },
    l = 'Meld je aan voor Design Systems Week 2024',
    d = { id: 'community/events/design-systems-week/aanmelden', title: 'Aanmelden \xb7 Design Systems Week 2024', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', source: '@site/docs/community/events/design-systems-week/aanmelden.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/aanmelden', permalink: '/events/design-systems-week/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Design Systems Week 2024', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden' } },
    o = {},
    m = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.h1, { id: 'meld-je-aan-voor-design-systems-week-2024', children: 'Meld je aan voor Design Systems Week 2024' }), '\n', (0, i.jsxs)(s.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, i.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, i.jsx)(s.p, { children: 'Laat je gegevens achter om op de hoogte te blijven van Design Systems Week.' }), '\n', (0, i.jsx)(a.A, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, n) => {
   n.d(s, { A: () => d });
   var i = n(87573),
    t = n(41115),
    a = n(75271),
    r = n(25282),
    l = n(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: j = '', language: x, submitText: y = '' } = e;
    const {
      register: k,
      handleSubmit: f,
      formState: { errors: w },
     } = (0, r.cI)(),
     b = (0, a.useRef)(null),
     S = '2' === x?.value,
     { search: D } = (0, i.TH)(),
     W = new URLSearchParams(D),
     _ = W.get('prefillEmail'),
     I = W.get('prefillName'),
     $ =
      !!(h && p.length > 0) &&
      ((e, s) => {
       const n = [];
       let i = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(i); ) i++;
        n.push(i), i++;
       }
       return n;
      })(p, g);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: b,
     onSubmit: f(() => {
      b.current.submit();
     }),
     children: [(0, l.jsxs)(t.Wi, { type: 'email', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: `id-${o}`, children: S ? 'Email address ' : 'E-mailadres' }) }), w[o] && (0, l.jsx)(t.w7, { children: w[o].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...k(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[o] }) })] }), (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: m, children: S ? 'Name' : 'Naam' }) }), w[m] && (0, l.jsx)(t.w7, { children: w[m].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: m, name: m, type: 'text', defaultValue: I, autoComplete: 'given-name', 'aria-required': 'true', ...k(`${m}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[m] }) })] }), c && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: c, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[c] && (0, l.jsx)(t.w7, { children: w[c].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(t.pg, { children: [(0, l.jsxs)(t.Qv, { children: [u, ' (niet verplicht)'] }), (0, l.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, l.jsx)(t.Wi, { type: 'checkbox', children: (0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.XZ, { name: `${h}[]`, value: $[s], id: `${h}-${$[s]}` }), (0, l.jsx)(t.lX, { htmlFor: `${h}-${$[s]}`, children: e })] }) }, e))] }), v && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: v, name: v }) })] }), j && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.ue, { id: `${j}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...k(`${j}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${j}[]`] }), (0, l.jsx)(t.lX, { htmlFor: `${j}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[j] && (0, l.jsx)(t.w7, { children: w[j].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(t.hE, { children: (0, l.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, s, n) => {
   n.d(s, { Z: () => l, a: () => r });
   var i = n(75271);
   const t = {},
    a = i.createContext(t);
   function r(e) {
    const s = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function l(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), i.createElement(a.Provider, { value: s }, e.children);
   }
  },
 },
]);
