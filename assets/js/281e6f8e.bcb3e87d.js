'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98218],
 {
  66499: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => s, metadata: () => o, toc: () => c });
   var t = i(52676),
    r = i(24785),
    a = i(82415);
   const s = { title: 'Op de hoogte blijven', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] },
    l = 'Op de hoogte blijven',
    o = { id: 'project/blijf-op-de-hoogte', title: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', source: '@site/docs/project/blijf-op-de-hoogte.mdx', sourceDirName: 'project', slug: '/project/blijf-op-de-hoogte', permalink: '/project/blijf-op-de-hoogte', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx', tags: [], version: 'current', frontMatter: { title: 'Op de hoogte blijven', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] }, sidebar: 'project', previous: { title: 'Kernteam', permalink: '/project/kernteam' }, next: { title: 'Links', permalink: '/project/links' } },
    d = {},
    c = [{ value: 'Nieuwsbrief', id: 'nieuwsbrief', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }), '\n', (0, t.jsx)(n.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/events/heartbeat/aanmelden', children: 'Neem deel aan onze Heartbeat-sessies' }), ' of ', (0, t.jsx)(n.a, { href: '/events/heartbeat', children: 'kijk opgenomen sessies terug' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '#nieuwsbrief', children: 'Meld je aan voor onze nieuwsbrief' }), ' (hieronder).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/blog', children: 'Lees ons blog voor uitgebreidere interviews en artikelen' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://praatmee.codefor.nl', children: 'Word lid van het #nl-design-system Slack kanaal' }), ' op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'nieuwsbrief', children: 'Nieuwsbrief' }), '\n', (0, t.jsx)(n.p, { children: 'We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven.' }), '\n', (0, t.jsx)(a.Z, { listId: 'ceamfdjtu3', emailFieldId: '2x8bD6GMu5', firstNameFieldId: '40GfQGdmHU', thanksPage: 'https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { Z: () => o });
   var t = i(3225),
    r = i(56150),
    a = i(75271),
    s = i(55912),
    l = i(52676);
   const o = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: h = '', interestsId: m = '', interests: p = [], workAreasId: u = '', privacyPolicyId: j = '', language: v = {}, submitText: g = '' } = e;
    const {
      register: x,
      handleSubmit: b,
      formState: { errors: f },
     } = (0, s.cI)(),
     k = (0, a.useRef)(null),
     y = v && '2' === v.value,
     { search: w } = (0, t.TH)(),
     _ = new URLSearchParams(w),
     I = _.get('prefillEmail'),
     D = _.get('prefillName');
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: k,
     onSubmit: b(() => {
      k.current.submit();
     }),
     children: [(0, l.jsxs)(r.Wi, { type: 'email', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: `id-${d}`, children: y ? 'Email address ' : 'E-mailadres' }) }), f[d] && (0, l.jsx)(r.w7, { children: f[d].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', value: I, 'aria-required': 'true', ...x(`${d}`, { required: { value: !0, message: y ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: y ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!f[d] }) })] }), (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: c, children: y ? 'Name' : 'Naam' }) }), f[c] && (0, l.jsx)(r.w7, { children: f[c].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: c, name: c, type: 'text', value: D, autoComplete: 'given-name', 'aria-required': 'true', ...x(`${c}`, { required: { value: !0, message: y ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!f[c] }) })] }), h && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: h, children: 'Organisatie' }) }), f[h] && (0, l.jsx)(r.w7, { children: f[h].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: h, name: h, type: 'text' }) })] }), m && (0, l.jsxs)(r.pg, { children: [(0, l.jsx)(r.Qv, { children: 'Waar wil je NL Design System voor gebruiken? (niet verplicht)' }), (0, l.jsx)(r.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, n) => (0, l.jsx)(r.Wi, { type: 'checkbox', children: (0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.XZ, { name: `${m}[]`, value: n >= 6 ? n + 2 : n + 1, id: `${m}-${n + 1}` }), (0, l.jsx)(r.lX, { htmlFor: `${m}-${n + 1}`, children: e })] }) }, e))] }), u && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.lX, { htmlFor: u, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(r.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.gx, { id: u, name: u }) })] }), j && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.ue, { id: `${j}-description`, children: (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(r.Wi, { type: 'checkbox', children: [(0, l.jsx)(r.XZ, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...x(`${j}[]`, { required: { value: !0, message: 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!f[`${j}[]`] }), (0, l.jsxs)(r.lX, { htmlFor: `${j}-1`, children: [' ', 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring'] })] }), f[j] && (0, l.jsx)(r.w7, { children: f[j].message })] }), v && (0, l.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, l.jsx)(r.hE, { children: (0, l.jsx)(r.zx, { type: 'submit', appearance: 'primary-action-button', children: g || (y ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  24785: (e, n, i) => {
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
