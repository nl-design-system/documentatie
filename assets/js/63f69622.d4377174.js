'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [59432],
 {
  40984: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => a, metadata: () => o, toc: () => m });
   var t = i(52676),
    s = i(40139),
    r = i(82415);
   const a = { title: 'Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' },
    l = 'Communitybijeenkomst',
    o = { id: 'community/events/community-bijeenkomst-2', title: 'Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten', description: 'Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?', source: '@site/docs/community/events/community-bijeenkomst-2.mdx', sourceDirName: 'community/events', slug: '/events/communitybijeenkomst-18-10-2024', permalink: '/events/communitybijeenkomst-18-10-2024', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/community-bijeenkomst-2.mdx', tags: [], version: 'current', frontMatter: { title: 'Communitybijeenkomst 18 oktober 2024 \xb7 Bijeenkomsten', hide_title: !0, hide_table_of_contents: !1, unlisted: !0, slug: '/events/communitybijeenkomst-18-10-2024' } },
    d = {},
    m = [];
   function c(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'communitybijeenkomst', children: 'Communitybijeenkomst' }), '\n', (0, t.jsx)(n.p, { children: 'Volgende week vrijdag 18 oktober is de 2e communitybijeenkomst van NL Design System, ben jij er ook?\nNL Design System bestaat uit een groep enthousiaste Designers, Developers, Accessibility specialisten, Product Owners en Design System liefhebbers die voornamelijk online samenwerken.' }), '\n', (0, t.jsx)(n.p, { children: 'Deze Communitybijeenkomst is d\xe9 kans om elkaar te ontmoeten, kennis uit te wisselen en samenwerking te vieren onder het genot van een drankje en een hapje.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['\ud83d\udcc6 ', (0, t.jsx)(n.strong, { children: 'Wanneer' }), ': 18 oktober van 16:00 uur tot 18:30 uur.'] }), '\n', (0, t.jsxs)(n.li, { children: ['\ud83c\udf0d ', (0, t.jsx)(n.strong, { children: 'Waar' }), ': ', (0, t.jsx)(n.a, { href: 'https://danel-utrecht.nl', children: 'Bar Danel' }), ', direct naast Utrecht Centraal.'] }), '\n', (0, t.jsxs)(n.li, { children: ['\ud83e\udef5 ', (0, t.jsx)(n.strong, { children: 'Voor wie?' }), ': Iedereen die met ons samenwerkt \xe9n alle nieuwe mensen die graag mee willen doen met de NL Design System Community.'] }), '\n'] }), '\n', (0, t.jsx)(r.A, { listId: 'w6sbgdln0j', emailFieldId: 'oYQvVF1C4s', firstNameFieldId: 'AFUcmITRwf', thanksPage: 'https://nldesignsystem.nl/community/communitybijeenkomst-18-10-2024/bedankt', laPostaId: 'iyihtuzpiq', submitText: 'Ik ben erbij!' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { A: () => o });
   var t = i(87573),
    s = i(41115),
    r = i(75271),
    a = i(25282),
    l = i(52676);
   const o = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], disallowedInterestValues: p = [], workAreasId: v = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: k = '', talkDescriptionId: b = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: I },
     } = (0, a.cI)(),
     D = (0, r.useRef)(null),
     C = '2' === g?.value,
     { search: S } = (0, t.TH)(),
     W = new URLSearchParams(S),
     _ = W.get('prefillEmail'),
     F = W.get('prefillName'),
     N =
      !!(u && j.length > 0) &&
      ((e, n) => {
       const i = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
      })(j, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: w(() => {
      D.current.submit();
     }),
     children: [(0, l.jsxs)(s.Wi, { type: 'email', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: `id-${d}`, children: C ? 'Email address ' : 'E-mailadres' }) }), I[d] && (0, l.jsx)(s.w7, { children: I[d].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: _, 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: C ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[d] }) })] }), (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: m, children: C ? 'Name' : 'Naam' }) }), I[m] && (0, l.jsx)(s.w7, { children: I[m].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: m, name: m, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${m}`, { required: { value: !0, message: C ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[m] }) })] }), k && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: k, children: C ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(s.ue, { children: C ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: k, name: k, ...f(k, { required: { value: !0, message: C ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: b, children: C ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(s.ue, { children: C ? 'Short description. What is it about?' : 'Korte beschrijving. Waar gaat het over?' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: b, name: b, rows: 12, maxLength: 250, ...f(b, { required: { value: !0, message: C ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.nv, { children: (0, l.jsx)(s.lX, { htmlFor: c, children: C ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[c] && (0, l.jsx)(s.w7, { children: I[c].message }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(s.pg, { children: [(0, l.jsxs)(s.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(s.ue, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, n) => (0, l.jsx)(s.Wi, { type: 'checkbox', children: (0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.XZ, { name: `${u}[]`, value: N[n], id: `${u}-${N[n]}` }), (0, l.jsx)(s.lX, { htmlFor: `${u}-${N[n]}`, children: e })] }) }, e))] }), v && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsxs)(s.nv, { children: [(0, l.jsx)(s.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(s.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(s.nv, { children: (0, l.jsx)(s.gx, { id: v, name: v }) })] }), x && (0, l.jsxs)(s.Wi, { type: 'text', children: [(0, l.jsx)(s.ue, { id: `${x}-description`, children: C ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(s.Wi, { type: 'checkbox', children: [(0, l.jsx)(s.XZ, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...f(`${x}[]`, { required: { value: !0, message: C ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${x}[]`] }), (0, l.jsx)(s.lX, { htmlFor: `${x}-1`, children: C ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[x] && (0, l.jsx)(s.w7, { children: I[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(s.hE, { children: (0, l.jsx)(s.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (C ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
   var t = i(75271);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
