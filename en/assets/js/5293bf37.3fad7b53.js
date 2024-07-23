'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66004],
 {
  4403: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => m });
   var i = t(52676),
    s = t(24785),
    a = t(82415);
   const r = { title: 'Estafettemodeldag', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/community/events/estafettemodeldag' },
    l = 'Estafettemodeldag',
    d = { id: 'community/events/estafettemodeldag', title: 'Estafettemodeldag', description: 'Op estafettemodeldagen gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze Definition of Done.', source: '@site/docs/community/events/estafettemodeldag.mdx', sourceDirName: 'community/events', slug: '/community/events/estafettemodeldag', permalink: '/en/community/events/estafettemodeldag', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag.mdx', tags: [], version: 'current', frontMatter: { title: 'Estafettemodeldag', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Estafettemodeldag', pagination_label: 'In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', slug: '/community/events/estafettemodeldag' }, sidebar: 'community', previous: { title: 'Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.', permalink: '/en/events/design-open-dag' }, next: { title: 'Wie doet mee?', permalink: '/en/community/wie-doet-mee' } },
    o = {},
    m = [
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'estafettemodeldag', children: 'Estafettemodeldag' }), '\n', (0, i.jsxs)(n.p, { children: ['Op ', (0, i.jsx)(n.strong, { children: 'estafettemodeldagen' }), ' gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze ', (0, i.jsx)(n.a, { href: '/componenten/definition-of-done', children: 'Definition of Done' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Zo krijgen we inzicht in welke componenten welke status hebben, en werken we toe naar het verder brengen van componenten via het ', (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'estafettemodel' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'planning', children: 'Planning' }), '\n', (0, i.jsx)(n.p, { children: 'Dit is de planning van onze estafettemodeldagen in 2024:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'vrijdag 31 mei, 12:30 - 16:00 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 26 juni, 10:00 - 16:30 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 28 augustus, 12:00 - 16:30 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 25 september, 10:00 - 17:00 (Utrecht)' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 30 oktober' }), '\n', (0, i.jsx)(n.li, { children: 'woensdag 27 november' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, i.jsx)(n.p, { children: 'Estafettemodeldagen zijn publiek toegankelijk, zolang er ruimte is. We proberen uit te komen op een goede mix van community (organisaties + leveranciers) en kernteam.' }), '\n', (0, i.jsx)(n.p, { children: 'Laat je gegevens hieronder achter om een kalenderuitnodiging te ontvangen.' }), '\n', (0, i.jsx)(a.Z, { listId: '7igukerls2', emailFieldId: 'GL1eTDzrWn', firstNameFieldId: 'QYuFIjwgDC', orgId: 'n0WNZXSMs9', privacyPolicyId: 'GskTzQ4zjq', thanksPage: 'https://nldesignsystem.nl/community/estafettemodeldag/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, t) => {
   t.d(n, { Z: () => l });
   var i = t(47027),
    s = t(75271),
    a = t(43430),
    r = t(52676);
   const l = (e) => {
    let { listId: n = '', laPostaId: t = '', thanksPage: l = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interests: h = [], workAreasId: g = '', privacyPolicyId: u = '' } = e;
    const {
      register: p,
      handleSubmit: x,
      formState: { errors: j },
     } = (0, a.cI)(),
     v = (0, s.useRef)(null);
    return (0, r.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: v,
     onSubmit: x(() => {
      v.current.submit();
     }),
     children: [(0, r.jsxs)(i.Wi, { type: 'email', children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: `id-${d}`, children: 'E-mailadres' }) }), j[d] && (0, r.jsx)(i.w7, { children: j[d].message }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...p(`${d}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: 'Dit is geen correct emailadres.' } }), invalid: !!j[d] }) })] }), (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: o, children: 'Naam' }) }), j[o] && (0, r.jsx)(i.w7, { children: j[o].message }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: o, name: o, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...p(`${o}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!j[o] }) })] }), m && (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsx)(i.nv, { children: (0, r.jsx)(i.lX, { htmlFor: m, children: 'Organisatie' }) }), j[m] && (0, r.jsx)(i.w7, { children: j[m].message }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.fE, { id: m, name: m, type: 'text' }) })] }), c && (0, r.jsxs)(i.pg, { children: [(0, r.jsx)(i.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, r.jsx)(i.ue, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, n) => (0, r.jsx)(i.Wi, { type: 'checkbox', children: (0, r.jsxs)(i.nv, { children: [(0, r.jsx)(i.XZ, { name: `${c}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${c}-${n + 1}` }), (0, r.jsx)(i.lX, { htmlFor: `${c}-${n + 1}`, children: e })] }) }, e))] }), g && (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsxs)(i.nv, { children: [(0, r.jsx)(i.lX, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, r.jsx)(i.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, r.jsx)(i.nv, { children: (0, r.jsx)(i.gx, { id: g, name: g }) })] }), u && (0, r.jsxs)(i.Wi, { type: 'text', children: [(0, r.jsx)(i.ue, { id: `${u}-description`, children: (0, r.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, r.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, r.jsxs)(i.Wi, { type: 'checkbox', children: [(0, r.jsx)(i.XZ, { value: '1', id: `${u}-1`, 'aria-describedby': `${u}-description`, 'aria-required': 'true', ...p(`${u}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!j[`${u}[]`] }), (0, r.jsxs)(i.lX, { htmlFor: `${u}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), j[u] && (0, r.jsx)(i.w7, { children: j[u].message })] }), (0, r.jsx)(i.hE, { children: (0, r.jsx)(i.zx, { type: 'submit', appearance: 'primary-action-button', children: 'Aanmelden' }) }), (0, r.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, r.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, r.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, r.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, r.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => r });
   var i = t(75271);
   const s = {},
    a = i.createContext(s);
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);