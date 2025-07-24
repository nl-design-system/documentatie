'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93073],
 {
  44012: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => d, toc: () => m });
   var t = i(52676),
    r = i(40139),
    s = i(82415);
   const a = { title: 'Meld je aan voor de Overheidsbrede Portalen Community \xb7 Overheidsbrede Portalen Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/overheidsbrede-portalen-community/aanmelden', keywords: ['nl design system', 'community sprint', 'overheidsbrede portalen community', 'overheidsbrede portalen community afstemming'] },
    o = 'Meld je aan voor de Overheidsbrede Portalen Community',
    d = { id: 'community/community-sprints/overheidsbrede-portalen-community/aanmelden', title: 'Meld je aan voor de Overheidsbrede Portalen Community \xb7 Overheidsbrede Portalen Community \xb7 Community Sprints', description: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Overheidsbrede Portalen Community.', source: '@site/docs/community/community-sprints/overheidsbrede-portalen-community/aanmelden.mdx', sourceDirName: 'community/community-sprints/overheidsbrede-portalen-community', slug: '/community/community-sprints/overheidsbrede-portalen-community/aanmelden', permalink: '/community/community-sprints/overheidsbrede-portalen-community/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/overheidsbrede-portalen-community/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Meld je aan voor de Overheidsbrede Portalen Community \xb7 Overheidsbrede Portalen Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Aanmelden', slug: '/community/community-sprints/overheidsbrede-portalen-community/aanmelden', keywords: ['nl design system', 'community sprint', 'overheidsbrede portalen community', 'overheidsbrede portalen community afstemming'] }, sidebar: 'community', previous: { title: 'Overheidsbrede Portalen Community', permalink: '/community/community-sprints/overheidsbrede-portalen-community/' }, next: { title: 'Rijkshuisstijl Community', permalink: '/community/community-sprints/rijkshuisstijl-community/overzicht' } },
    l = {},
    m = [];
   function c(e) {
    const n = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'meld-je-aan-voor-de-overheidsbrede-portalen-community', children: 'Meld je aan voor de Overheidsbrede Portalen Community' }), '\n', (0, t.jsx)(n.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de Overheidsbrede Portalen Community.' }), '\n', '\n', (0, t.jsx)(s.A, { listId: 'vaxdszwkvp', emailFieldId: 'ycOOLcSH4g', firstNameFieldId: 'DWV00upQKv', orgId: '2VvMCuCJN8', privacyPolicyId: 'Kv7Wc8XC0z', interestsId: '85LF6t32qF', interestsLegend: 'Waar liggen jouw interesses binnen de Overheidsbrede Portalen Community?', interests: ['Kennisdeling', 'Design', 'Development', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Patronen', 'Gebruikersonderzoek'], disallowedInterestValues: [3, 7, 8], workAreasId: 'LgHwRAHHbC', thanksPage: 'https://nldesignsystem.nl/community/community-sprints/overheidsbrede-portalen-community/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { A: () => d });
   var t = i(87573),
    r = i(41115),
    s = i(75271),
    a = i(25282),
    o = i(52676);
   const d = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: l = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: v = [], workAreasId: y = '', privacyPolicyId: g = '', language: j, submitText: x = '' } = e;
    const {
      register: b,
      handleSubmit: f,
      formState: { errors: k },
     } = (0, a.cI)(),
     C = (0, s.useRef)(null),
     w = '2' === j?.value,
     { search: I } = (0, t.TH)(),
     P = new URLSearchParams(I),
     _ = P.get('prefillEmail'),
     O = P.get('prefillName'),
     D =
      !!(u && p.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; n.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
      })(p, v);
    return (0, o.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: C,
     onSubmit: f(() => {
      C.current.submit();
     }),
     children: [(0, o.jsxs)(r.Wi, { type: 'email', children: [(0, o.jsx)(r.nv, { children: (0, o.jsx)(r.lX, { htmlFor: `id-${l}`, children: w ? 'Email address ' : 'E-mailadres' }) }), k[l] && (0, o.jsx)(r.w7, { children: k[l].message }), (0, o.jsx)(r.nv, { children: (0, o.jsx)(r.fE, { id: `id-${l}`, name: l, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...b(`${l}`, { required: { value: !0, message: w ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: w ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!k[l] }) })] }), (0, o.jsxs)(r.Wi, { type: 'text', children: [(0, o.jsx)(r.nv, { children: (0, o.jsx)(r.lX, { htmlFor: m, children: w ? 'Name' : 'Naam' }) }), k[m] && (0, o.jsx)(r.w7, { children: k[m].message }), (0, o.jsx)(r.nv, { children: (0, o.jsx)(r.fE, { id: m, name: m, type: 'text', defaultValue: O, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${m}`, { required: { value: !0, message: w ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!k[m] }) })] }), c && (0, o.jsxs)(r.Wi, { type: 'text', children: [(0, o.jsx)(r.nv, { children: (0, o.jsx)(r.lX, { htmlFor: c, children: w ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), k[c] && (0, o.jsx)(r.w7, { children: k[c].message }), (0, o.jsx)(r.nv, { children: (0, o.jsx)(r.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, o.jsxs)(r.pg, { children: [(0, o.jsxs)(r.Qv, { children: [h, ' (niet verplicht)'] }), (0, o.jsx)(r.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, o.jsx)(r.Wi, { type: 'checkbox', children: (0, o.jsxs)(r.nv, { children: [(0, o.jsx)(r.XZ, { name: `${u}[]`, value: D[n], id: `${u}-${D[n]}` }), (0, o.jsx)(r.lX, { htmlFor: `${u}-${D[n]}`, children: e })] }) }, e))] }), y && (0, o.jsxs)(r.Wi, { type: 'text', children: [(0, o.jsxs)(r.nv, { children: [(0, o.jsx)(r.lX, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(r.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(r.nv, { children: (0, o.jsx)(r.gx, { id: y, name: y }) })] }), g && (0, o.jsxs)(r.Wi, { type: 'text', children: [(0, o.jsx)(r.ue, { id: `${g}-description`, children: w ? (0, o.jsxs)('p', { children: ['The ', (0, o.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, o.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, o.jsxs)(r.Wi, { type: 'checkbox', children: [(0, o.jsx)(r.XZ, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...b(`${g}[]`, { required: { value: !0, message: w ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!k[`${g}[]`] }), (0, o.jsx)(r.lX, { htmlFor: `${g}-1`, children: w ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), k[g] && (0, o.jsx)(r.w7, { children: k[g].message })] }), j?.id && (0, o.jsx)('input', { type: 'hidden', name: j.id, value: j.value }), (0, o.jsx)(r.hE, { children: (0, o.jsx)(r.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (w ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => a });
   var t = i(75271);
   const r = {},
    s = t.createContext(r);
   function a(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
