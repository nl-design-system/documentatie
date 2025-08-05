'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [63451],
 {
  49386: (e, n, s) => {
   s.r(n), s.d(n, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => d, toc: () => m });
   var i = s(52676),
    t = s(40139),
    a = s(82415);
   const r = { title: 'Aanmelden \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', displayed_sidebar: 'community' },
    l = 'Meld je aan voor Design Systems Week',
    d = { id: 'community/events/design-systems-week/aanmelden', title: 'Aanmelden \xb7 Design Systems Week', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', source: '@site/docs/community/events/design-systems-week/aanmelden.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/aanmelden', permalink: '/events/design-systems-week/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', displayed_sidebar: 'community' }, sidebar: 'community' },
    o = {},
    m = [];
   function c(e) {
    const n = { h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'meld-je-aan-voor-design-systems-week', children: 'Meld je aan voor Design Systems Week' }), '\n', (0, i.jsxs)(n.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, i.jsx)(n.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Design Systems Week 2025 is van 27 tot en met 30 oktober. We zijn nu druk bezig met de planning en voorbereiding.' }), '\n', (0, i.jsx)(n.p, { children: 'Laat je gegevens achter om op de hoogte te blijven!' }), '\n', (0, i.jsx)(a.A, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, s) => {
   s.d(n, { A: () => d });
   var i = s(87573),
    t = s(41115),
    a = s(75271),
    r = s(25282),
    l = s(52676);
   const d = (e) => {
    let { listId: n = '', laPostaId: s = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: v = [], workAreasId: g = '', privacyPolicyId: j = '', language: x, submitText: y = '', talkTitleId: k = '', talkDescriptionId: f = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: W },
     } = (0, r.cI)(),
     D = (0, a.useRef)(null),
     S = '2' === x?.value,
     { search: _ } = (0, i.TH)(),
     I = new URLSearchParams(_),
     $ = I.get('prefillEmail'),
     F = I.get('prefillName'),
     q =
      !!(u && p.length > 0) &&
      ((e, n) => {
       const s = [];
       let i = 1;
       for (let t = 0; t < e.length; t++) {
        for (; n.includes(i); ) i++;
        s.push(i), i++;
       }
       return s;
      })(p, v);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: w(() => {
      D.current.submit();
     }),
     children: [(0, l.jsxs)(t.Wi, { type: 'email', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: `id-${o}`, children: S ? 'Email address ' : 'E-mailadres' }) }), W[o] && (0, l.jsx)(t.w7, { children: W[o].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...b(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!W[o] }) })] }), (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: m, children: S ? 'Name' : 'Naam' }) }), W[m] && (0, l.jsx)(t.w7, { children: W[m].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: m, name: m, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${m}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!W[m] }) })] }), k && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: k, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.ue, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: k, name: k, ...b(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: f, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.ue, { children: S ? 'Short description. What is it about?' : 'Korte beschrijving. Waar gaat het over?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: f, name: f, rows: 12, maxLength: 250, ...b(f, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: c, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), W[c] && (0, l.jsx)(t.w7, { children: W[c].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(t.pg, { children: [(0, l.jsxs)(t.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, l.jsx)(t.Wi, { type: 'checkbox', children: (0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.XZ, { name: `${u}[]`, value: q[n], id: `${u}-${q[n]}` }), (0, l.jsx)(t.lX, { htmlFor: `${u}-${q[n]}`, children: e })] }) }, e))] }), g && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: g, name: g }) })] }), j && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.ue, { id: `${j}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...b(`${j}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!W[`${j}[]`] }), (0, l.jsx)(t.lX, { htmlFor: `${j}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), W[j] && (0, l.jsx)(t.w7, { children: W[j].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(t.hE, { children: (0, l.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, n, s) => {
   s.d(n, { Z: () => l, a: () => r });
   var i = s(75271);
   const t = {},
    a = i.createContext(t);
   function r(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
