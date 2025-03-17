'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66004],
 {
  95266: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => m });
   var i = t(52676),
    a = t(40139),
    s = t(82415);
   const r = { title: 'Estafettemodeldag Design Open Dagen \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/community/events/estafettemodeldag' },
    l = 'Estafettemodeldag',
    d = { id: 'community/events/estafettemodeldag', title: 'Estafettemodeldag Design Open Dagen \xb7 Bijeenkomsten', description: 'Op estafettemodeldagen gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze Definition of Done.', source: '@site/docs/community/events/estafettemodeldag.mdx', sourceDirName: 'community/events', slug: '/community/events/estafettemodeldag', permalink: '/community/events/estafettemodeldag', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag.mdx', tags: [], version: 'current', frontMatter: { title: 'Estafettemodeldag Design Open Dagen \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/community/events/estafettemodeldag' }, sidebar: 'community', previous: { title: 'Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.', permalink: '/events/design-open-dag' }, next: { title: 'Over Design Systems Week', permalink: '/events/design-systems-week-2024' } },
    o = {},
    m = [
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'estafettemodeldag', children: 'Estafettemodeldag' }), '\n', (0, i.jsxs)(n.p, { children: ['Op ', (0, i.jsx)(n.strong, { children: 'estafettemodeldagen' }), ' gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze ', (0, i.jsx)(n.a, { href: '/componenten/definition-of-done', children: 'Definition of Done' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Zo krijgen we inzicht in welke componenten welke status hebben, en werken we toe naar het verder brengen van componenten via het ', (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'estafettemodel' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'planning', children: 'Planning' }), '\n', (0, i.jsx)(n.p, { children: 'Dit is de planning van onze estafettemodeldagen in 2024:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'vrijdag 31 mei, 12:30 - 16:00 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 26 juni, 10:00 - 16:30 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 28 augustus, 12:00 - 16:30 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 25 september, 10:00 - 17:00 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 30 oktober, 10:00 - 17:00 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 27 november' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, i.jsx)(n.p, { children: 'Estafettemodeldagen zijn publiek toegankelijk, zolang er ruimte is. We proberen uit te komen op een goede mix van community (organisaties + leveranciers) en kernteam.' }), '\n', (0, i.jsx)(n.p, { children: 'Laat je gegevens hieronder achter om een kalenderuitnodiging te ontvangen.' }), '\n', (0, i.jsx)(s.A, { listId: '7igukerls2', emailFieldId: 'GL1eTDzrWn', firstNameFieldId: 'QYuFIjwgDC', orgId: 'n0WNZXSMs9', privacyPolicyId: 'GskTzQ4zjq', thanksPage: 'https://nldesignsystem.nl/community/estafettemodeldag/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { A: () => d });
   var i = t(87573),
    a = t(41115),
    s = t(75271),
    r = t(25282),
    l = t(52676);
   const d = (e) => {
    let { listId: n = '', laPostaId: t = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: h = '', interests: g = [], workAreasId: u = '', privacyPolicyId: p = '', language: v, submitText: j = '' } = e;
    const {
      register: x,
      handleSubmit: f,
      formState: { errors: y },
     } = (0, r.cI)(),
     k = (0, s.useRef)(null),
     b = '2' === v?.value,
     { search: w } = (0, i.TH)(),
     D = new URLSearchParams(w),
     I = D.get('prefillEmail'),
     _ = D.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: k,
     onSubmit: f(() => {
      k.current.submit();
     }),
     children: [(0, l.jsxs)(a.Wi, { type: 'email', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: `id-${o}`, children: b ? 'Email address ' : 'E-mailadres' }) }), y[o] && (0, l.jsx)(a.w7, { children: y[o].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: I, 'aria-required': 'true', ...x(`${o}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: b ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!y[o] }) })] }), (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: m, children: b ? 'Name' : 'Naam' }) }), y[m] && (0, l.jsx)(a.w7, { children: y[m].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: m, name: m, type: 'text', defaultValue: _, autoComplete: 'given-name', 'aria-required': 'true', ...x(`${m}`, { required: { value: !0, message: b ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!y[m] }) })] }), c && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: c, children: b ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), y[c] && (0, l.jsx)(a.w7, { children: y[c].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: c, name: c, type: 'text' }) })] }), h && (0, l.jsxs)(a.pg, { children: [(0, l.jsx)(a.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Meerdere antwoorden mogelijk.' }), g.map((e, n) => (0, l.jsx)(a.Wi, { type: 'checkbox', children: (0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.XZ, { name: `${h}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${h}-${n + 1}` }), (0, l.jsx)(a.lX, { htmlFor: `${h}-${n + 1}`, children: e })] }) }, e))] }), u && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: u, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: u, name: u }) })] }), p && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.ue, { id: `${p}-description`, children: b ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.Wi, { type: 'checkbox', children: [(0, l.jsx)(a.XZ, { value: '1', id: `${p}-1`, 'aria-describedby': `${p}-description`, 'aria-required': 'true', ...x(`${p}[]`, { required: { value: !0, message: b ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!y[`${p}[]`] }), (0, l.jsx)(a.lX, { htmlFor: `${p}-1`, children: b ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), y[p] && (0, l.jsx)(a.w7, { children: y[p].message })] }), v?.id && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(a.hE, { children: (0, l.jsx)(a.zx, { type: 'submit', appearance: 'primary-action-button', children: j || (b ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => r });
   var i = t(75271);
   const a = {},
    s = i.createContext(a);
   function r(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
