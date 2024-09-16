'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22746],
 {
  81479: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => d, toc: () => m });
   var t = i(52676),
    a = i(24785),
    s = i(82415);
   const r = { title: 'Sluit je aan bij onze community', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    l = void 0,
    d = { id: 'community/sluit-je-aan', title: 'Sluit je aan bij onze community', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', source: '@site/docs/community/sluit-je-aan.mdx', sourceDirName: 'community', slug: '/community/sluit-je-aan', permalink: '/en/community/sluit-je-aan', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx', tags: [], version: 'current', frontMatter: { title: 'Sluit je aan bij onze community', hide_title: !1, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] }, sidebar: 'community', previous: { title: 'Community', permalink: '/en/community' }, next: { title: 'Wie doet mee?', permalink: '/en/community/wie-doet-mee' } },
    o = {},
    m = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsxs)(n.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, t.jsx)(n.a, { href: '/project/kernteam', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, t.jsx)(n.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, t.jsx)(n.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, t.jsx)(n.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, t.jsx)(n.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, t.jsx)(n.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communitybijeenkomst.' }), '\n', (0, t.jsx)(n.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, t.jsx)(n.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, t.jsx)(s.Z, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', privacyPolicyId: 'D770JCMyVw', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => d });
   var t = i(3225),
    a = i(56150),
    s = i(75271),
    r = i(51686),
    l = i(52676);
   const d = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interests: j = [], workAreasId: h = '', privacyPolicyId: p = '', language: v = {}, submitText: x = '' } = e;
    const {
      register: g,
      handleSubmit: y,
      formState: { errors: k },
     } = (0, r.cI)(),
     b = (0, s.useRef)(null),
     w = v && '2' === v.value,
     { search: f } = (0, t.TH)(),
     S = new URLSearchParams(f),
     I = S.get('prefillEmail'),
     _ = S.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: b,
     onSubmit: y(() => {
      b.current.submit();
     }),
     children: [(0, l.jsxs)(a.Wi, { type: 'email', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: `id-${o}`, children: w ? 'Email address ' : 'E-mailadres' }) }), k[o] && (0, l.jsx)(a.w7, { children: k[o].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: I, 'aria-required': 'true', ...g(`${o}`, { required: { value: !0, message: w ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: w ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!k[o] }) })] }), (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: m, children: w ? 'Name' : 'Naam' }) }), k[m] && (0, l.jsx)(a.w7, { children: k[m].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: m, name: m, type: 'text', defaultValue: _, autoComplete: 'given-name', 'aria-required': 'true', ...g(`${m}`, { required: { value: !0, message: w ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!k[m] }) })] }), c && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: c, children: 'Organisatie' }) }), k[c] && (0, l.jsx)(a.w7, { children: k[c].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(a.pg, { children: [(0, l.jsx)(a.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, n) => (0, l.jsx)(a.Wi, { type: 'checkbox', children: (0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.XZ, { name: `${u}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${u}-${n + 1}` }), (0, l.jsx)(a.lX, { htmlFor: `${u}-${n + 1}`, children: e })] }) }, e))] }), h && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: h, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: h, name: h }) })] }), p && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.ue, { id: `${p}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.Wi, { type: 'checkbox', children: [(0, l.jsx)(a.XZ, { value: '1', id: `${p}-1`, 'aria-describedby': `${p}-description`, 'aria-required': 'true', ...g(`${p}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!k[`${p}[]`] }), (0, l.jsxs)(a.lX, { htmlFor: `${p}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), k[p] && (0, l.jsx)(a.w7, { children: k[p].message })] }), v && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(a.hE, { children: (0, l.jsx)(a.zx, { type: 'submit', appearance: 'primary-action-button', children: x || (w ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => r });
   var t = i(75271);
   const a = {},
    s = t.createContext(a);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
