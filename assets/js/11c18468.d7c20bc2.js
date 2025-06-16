'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22790],
 {
  98211: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => o, contentTitle: () => l, default: () => c, frontMatter: () => a, metadata: () => m, toc: () => d });
   var t = n(52676),
    s = n(40139),
    r = n(82415);
   const a = { title: 'Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] },
    l = 'Meld je aan voor de Rijkshuisstijl Community',
    m = { id: 'community/community-sprints/rijkshuisstijl-community/aanmelden', title: 'Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints', description: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.', source: '@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx', sourceDirName: 'community/community-sprints/rijkshuisstijl-community', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', permalink: '/community/community-sprints/rijkshuisstijl-community/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Meld je aan voor de Rijkshuisstijl Community \xb7 Rijkshuisstijl Community \xb7 Community Sprints', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden', keywords: ['nl design system', 'community sprint', 'rijkshuisstijl community', 'rijkshuisstijl community sprint', 'rijkshuisstijl community open hour'] }, sidebar: 'community', previous: { title: 'Rijkshuisstijl Community', permalink: '/community/community-sprints/rijkshuisstijl-community/' }, next: { title: 'Bijeenkomsten', permalink: '/community/events/overzicht' } },
    o = {},
    d = [];
   function u(e) {
    const i = { h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.h1, { id: 'meld-je-aan-voor-de-rijkshuisstijl-community', children: 'Meld je aan voor de Rijkshuisstijl Community' }), '\n', (0, t.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Rijkshuisstijl Community.' }), '\n', '\n', (0, t.jsx)(r.A, { listId: '9juqorlygr', emailFieldId: '6GzLKrnrdz', firstNameFieldId: 'Raz0sxxI9o', orgId: 'iFqikI2eB8', privacyPolicyId: 'HkEf7W8t0X', interestsId: 'vDVCyKrl67', interestsLegend: 'Waar liggen jouw interesses binnen de Rijkshuisstijl Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'AVqwHVpU3H', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: i } = { ...(0, s.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, i, n) => {
   n.d(i, { A: () => m });
   var t = n(87573),
    s = n(41115),
    r = n(75271),
    a = n(25282),
    l = n(52676);
   const m = (e) => {
    let { listId: i = '', laPostaId: n = '', thanksPage: m = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: u = '', interestsId: c = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], disallowedInterestValues: p = [], workAreasId: y = '', privacyPolicyId: v = '', language: g, submitText: x = '' } = e;
    const {
      register: k,
      handleSubmit: f,
      formState: { errors: b },
     } = (0, a.cI)(),
     w = (0, r.useRef)(null),
     C = '2' === g?.value,
     { search: I } = (0, t.TH)(),
     _ = new URLSearchParams(I),
     R = _.get('prefillEmail'),
     D = _.get('prefillName'),
     S =
      !!(c && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(j, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: w,
     onSubmit: f(() => {
      w.current.submit();
     }),
     children: [(0, l.jsxs)(s.Wi, { type: 'email', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: `id-${o}`, children: C ? 'Email address ' : 'E-mailadres' }) }), b[o] && (0, l.jsx)(s.w7, { children: b[o].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: R, 'aria-required': 'true', ...k(`${o}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: C ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!b[o] }) })] }), (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: d, children: C ? 'Name' : 'Naam' }) }), b[d] && (0, l.jsx)(s.w7, { children: b[d].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: d, name: d, type: 'text', defaultValue: D, autoComplete: 'given-name', 'aria-required': 'true', ...k(`${d}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!b[d] }) })] }), u && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: u, children: C ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), b[u] && (0, l.jsx)(s.w7, { children: b[u].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: u, name: u, type: 'text' }) })] }), c && (0, l.jsxs)(s.pg, { children: [(0, l.jsxs)(s.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsx)(s.Wi, { type: 'checkbox', children: (0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.XZ, { name: `${c}[]`, value: S[i], id: `${c}-${S[i]}` }), (0, l.jsx)(s.lX, { htmlFor: `${c}-${S[i]}`, children: e })] }) }, e))] }), y && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: y, name: y }) })] }), v && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.ue, { id: `${v}-description`, children: C ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...k(`${v}[]`, { required: { value: !0, message: C ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!b[`${v}[]`] }), (0, l.jsx)(s.lX, { htmlFor: `${v}-1`, children: C ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), b[v] && (0, l.jsx)(s.w7, { children: b[v].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(s.hE, { children: (0, l.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (C ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: m }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: i }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, i, n) => {
   n.d(i, { Z: () => l, a: () => a });
   var t = n(75271);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const i = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function l(e) {
    let i;
    return (i = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: i }, e.children);
   }
  },
 },
]);
