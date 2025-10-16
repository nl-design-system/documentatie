'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [63451],
 {
  63087: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => d, toc: () => m });
   var i = n(52676),
    t = n(40139),
    a = n(82415);
   const r = { title: 'Aanmelden \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', displayed_sidebar: 'community', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2025.png' },
    l = 'Meld je aan voor Design Systems Week',
    d = { id: 'community/events/design-systems-week/aanmelden', title: 'Aanmelden \xb7 Design Systems Week', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', source: '@site/docs/community/events/design-systems-week/aanmelden.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/aanmelden', permalink: '/events/design-systems-week/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', displayed_sidebar: 'community', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2025.png' }, sidebar: 'community' },
    o = {},
    m = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.h1, { id: 'meld-je-aan-voor-design-systems-week', children: 'Meld je aan voor Design Systems Week' }), '\n', (0, i.jsxs)(s.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, i.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, i.jsx)(s.p, { children: 'Design Systems Week 2025 is van 27 tot en met 30 oktober. We zijn nu druk bezig met de planning en voorbereiding.' }), '\n', (0, i.jsx)(s.p, { children: 'Laat je gegevens achter om op de hoogte te blijven!' }), '\n', (0, i.jsx)(a.A, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, n) => {
   n.d(s, { A: () => d });
   var i = n(87573),
    t = n(35076),
    a = n(75271),
    r = n(25282),
    l = n(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: g = [], workAreasId: v = '', privacyPolicyId: j = '', language: y, submitText: x = '', talkTitleId: k = '', talkDescriptionId: b = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: W },
     } = (0, r.cI)(),
     D = (0, a.useRef)(null),
     S = '2' === y?.value,
     { search: _ } = (0, i.TH)(),
     I = new URLSearchParams(_),
     $ = I.get('prefillEmail'),
     F = I.get('prefillName'),
     q =
      !!(u && p.length > 0) &&
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
     ref: D,
     onSubmit: w(() => {
      D.current.submit();
     }),
     children: [(0, l.jsxs)(t.Wi, { type: 'email', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: `id-${o}`, children: S ? 'Email address ' : 'E-mailadres' }) }), W[o] && (0, l.jsx)(t.w7, { children: W[o].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!W[o] }) })] }), (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: m, children: S ? 'Name' : 'Naam' }) }), W[m] && (0, l.jsx)(t.w7, { children: W[m].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: m, name: m, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${m}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!W[m] }) })] }), k && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: k, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.ue, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: k, name: k, ...f(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: b, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.ue, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: b, name: b, rows: 12, ...f(b, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: c, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), W[c] && (0, l.jsx)(t.w7, { children: W[c].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(t.pg, { children: [(0, l.jsxs)(t.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, l.jsx)(t.Wi, { type: 'checkbox', children: (0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.XZ, { name: `${u}[]`, value: q[s], id: `${u}-${q[s]}` }), (0, l.jsx)(t.lX, { htmlFor: `${u}-${q[s]}`, children: e })] }) }, e))] }), v && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: v, name: v }) })] }), j && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.ue, { id: `${j}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...f(`${j}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!W[`${j}[]`] }), (0, l.jsx)(t.lX, { htmlFor: `${j}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), W[j] && (0, l.jsx)(t.w7, { children: W[j].message })] }), y?.id && (0, l.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, l.jsx)(t.hE, { children: (0, l.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
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
