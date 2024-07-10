'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98218],
 {
  64103: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => a, metadata: () => o, toc: () => c });
   var t = i(52676),
    r = i(24785),
    s = i(82415);
   const a = { title: 'Op de hoogte blijven', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] },
    l = 'Op de hoogte blijven',
    o = { id: 'project/blijf-op-de-hoogte', title: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', source: '@site/docs/project/blijf-op-de-hoogte.mdx', sourceDirName: 'project', slug: '/project/blijf-op-de-hoogte', permalink: '/en/project/blijf-op-de-hoogte', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx', tags: [], version: 'current', frontMatter: { title: 'Op de hoogte blijven', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] }, sidebar: 'project', previous: { title: 'Kernteam', permalink: '/en/project/kernteam' }, next: { title: 'Links', permalink: '/en/project/links' } },
    d = {},
    c = [{ value: 'Nieuwsbrief', id: 'nieuwsbrief', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }), '\n', (0, t.jsx)(n.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/events/heartbeat/aanmelden', children: 'Neem deel aan onze Heartbeat-sessies' }), ' of ', (0, t.jsx)(n.a, { href: '/events/heartbeat', children: 'kijk opgenomen sessies terug' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#nieuwsbrief', children: 'Meld je aan voor onze nieuwsbrief' }), ' (hieronder).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/blog', children: 'Lees ons blog voor uitgebreidere interviews en artikelen' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://praatmee.codefor.nl', children: 'Word lid van het #nl-design-system Slack kanaal' }), ' op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'nieuwsbrief', children: 'Nieuwsbrief' }), '\n', (0, t.jsx)(n.p, { children: 'We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven.' }), '\n', (0, t.jsx)(s.Z, { listId: 'ceamfdjtu3', emailFieldId: '2x8bD6GMu5', firstNameFieldId: '40GfQGdmHU', thanksPage: 'https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => l });
   var t = i(47027),
    r = i(75271),
    s = i(43430),
    a = i(52676);
   const l = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: l = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: c = '', interestsId: h = '', interests: m = [], workAreasId: p = '', privacyPolicyId: j = '' } = e;
    const {
      register: u,
      handleSubmit: v,
      formState: { errors: g },
     } = (0, s.cI)(),
     x = (0, r.useRef)(null);
    return (0, a.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: x,
     onSubmit: v(() => {
      x.current.submit();
     }),
     children: [(0, a.jsxs)(t.Wi, { type: 'email', children: [(0, a.jsx)(t.nv, { children: (0, a.jsx)(t.lX, { htmlFor: `id-${o}`, children: 'E-mailadres' }) }), g[o] && (0, a.jsx)(t.w7, { children: g[o].message }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', 'aria-required': 'true', ...u(`${o}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: 'Dit is geen correct emailadres.' } }), invalid: !!g[o] }) })] }), (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsx)(t.nv, { children: (0, a.jsx)(t.lX, { htmlFor: d, children: 'Naam' }) }), g[d] && (0, a.jsx)(t.w7, { children: g[d].message }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.fE, { id: d, name: d, type: 'text', autoComplete: 'given-name', 'aria-required': 'true', ...u(`${d}`, { required: { value: !0, message: 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!g[d] }) })] }), c && (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsx)(t.nv, { children: (0, a.jsx)(t.lX, { htmlFor: c, children: 'Organisatie' }) }), g[c] && (0, a.jsx)(t.w7, { children: g[c].message }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.fE, { id: c, name: c, type: 'text' }) })] }), h && (0, a.jsxs)(t.pg, { children: [(0, a.jsx)(t.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, a.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, n) => (0, a.jsx)(t.Wi, { type: 'checkbox', children: (0, a.jsxs)(t.nv, { children: [(0, a.jsx)(t.XZ, { name: `${h}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${h}-${n + 1}` }), (0, a.jsx)(t.lX, { htmlFor: `${h}-${n + 1}`, children: e })] }) }, e))] }), p && (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsxs)(t.nv, { children: [(0, a.jsx)(t.lX, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, a.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, a.jsx)(t.nv, { children: (0, a.jsx)(t.gx, { id: p, name: p }) })] }), j && (0, a.jsxs)(t.Wi, { type: 'text', children: [(0, a.jsx)(t.ue, { id: `${j}-description`, children: (0, a.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, a.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, a.jsxs)(t.Wi, { type: 'checkbox', children: [(0, a.jsx)(t.XZ, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...u(`${j}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!g[`${j}[]`] }), (0, a.jsxs)(t.lX, { htmlFor: `${j}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), g[j] && (0, a.jsx)(t.w7, { children: g[j].message })] }), (0, a.jsx)(t.hE, { children: (0, a.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: 'Aanmelden' }) }), (0, a.jsx)('input', { type: 'hidden', name: 'next', value: l }), (0, a.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, a.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, a.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, a.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
