'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [11839],
 {
  85486: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => c, frontMatter: () => s, metadata: () => o, toc: () => p });
   var t = i(52676),
    r = i(40139),
    a = i(82415);
   const s = { title: 'Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' },
    l = 'Meld je aan voor de Developer Open Hour',
    o = { id: 'community/events/developer-open-hour/aanmelden', title: 'Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten', description: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.', source: '@site/docs/community/events/developer-open-hour/aanmelden.mdx', sourceDirName: 'community/events/developer-open-hour', slug: '/events/developer-open-hour/aanmelden', permalink: '/events/developer-open-hour/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden \xb7 Developer Open Hour \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', slug: '/events/developer-open-hour/aanmelden' }, sidebar: 'community', previous: { title: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', permalink: '/events/developer-open-hour' }, next: { title: 'Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.', permalink: '/events/design-open-dag' } },
    d = {},
    p = [];
   function u(e) {
    const n = { h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'meld-je-aan-voor-de-developer-open-hour', children: 'Meld je aan voor de Developer Open Hour' }), '\n', (0, t.jsx)(n.p, { children: 'Developer Open Hours zijn publiek toegankelijk via Slack. Laat je emailadres achter om op de hoogte te blijven.' }), '\n', (0, t.jsx)(a.A, { listId: 'p3jpgjmp4x', emailFieldId: 'Cx3tegsyt2', firstNameFieldId: 'QUBgX4085P', thanksPage: 'https://nldesignsystem.nl/events/developer-open-hour/aanmelden/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { A: () => o });
   var t = i(87573),
    r = i(35076),
    a = i(75271),
    s = i(25282),
    l = i(52676);
   const o = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: p = '', orgId: u = '', interestsId: c = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], disallowedInterestValues: v = [], workAreasId: j = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: k = '', talkDescriptionId: f = '' } = e;
    const {
      register: b,
      handleSubmit: w,
      formState: { errors: D },
     } = (0, s.cI)(),
     I = (0, a.useRef)(null),
     _ = '2' === g?.value,
     { search: W } = (0, t.TH)(),
     $ = new URLSearchParams(W),
     H = $.get('prefillEmail'),
     O = $.get('prefillName'),
     S =
      !!(c && h.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; n.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
      })(h, v);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: I,
     onSubmit: w(() => {
      I.current.submit();
     }),
     children: [(0, l.jsxs)(r.Wi, { type: 'email', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: `id-${d}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), D[d] && (0, l.jsx)(r.w7, { children: D[d].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: H, 'aria-required': 'true', ...b(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!D[d] }) })] }), (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: p, children: _ ? 'Name' : 'Naam' }) }), D[p] && (0, l.jsx)(r.w7, { children: D[p].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: p, name: p, type: 'text', defaultValue: O, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${p}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!D[p] }) })] }), k && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.lX, { htmlFor: k, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(r.ue, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: k, name: k, ...b(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.lX, { htmlFor: f, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(r.ue, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.gx, { id: f, name: f, rows: 12, ...b(f, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: u, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), D[u] && (0, l.jsx)(r.w7, { children: D[u].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: u, name: u, type: 'text' }) })] }), c && (0, l.jsxs)(r.pg, { children: [(0, l.jsxs)(r.Qv, { children: [m, ' (niet verplicht)'] }), (0, l.jsx)(r.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, n) => (0, l.jsx)(r.Wi, { type: 'checkbox', children: (0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.XZ, { name: `${c}[]`, value: S[n], id: `${c}-${S[n]}` }), (0, l.jsx)(r.lX, { htmlFor: `${c}-${S[n]}`, children: e })] }) }, e))] }), j && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.lX, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(r.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.gx, { id: j, name: j }) })] }), x && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.ue, { id: `${x}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(r.Wi, { type: 'checkbox', children: [(0, l.jsx)(r.XZ, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...b(`${x}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!D[`${x}[]`] }), (0, l.jsx)(r.lX, { htmlFor: `${x}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), D[x] && (0, l.jsx)(r.w7, { children: D[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(r.hE, { children: (0, l.jsx)(r.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => s });
   var t = i(75271);
   const r = {},
    a = t.createContext(r);
   function s(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
