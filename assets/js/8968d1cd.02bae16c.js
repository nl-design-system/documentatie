'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84868],
 {
  43301: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => c, contentTitle: () => o, default: () => h, frontMatter: () => r, metadata: () => d, toc: () => m });
   var a = i(52676),
    t = i(40139),
    s = i(82415),
    l = i(16167);
   const r = { title: 'Aanmelden als belangenorganisatie', hide_title: !0, hide_table_of_contents: !1, description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', sidebar_label: 'Belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden' },
    o = 'Meld je aan als belangenorganisatie',
    d = { id: 'community/belangenorganisaties/aanmelden', title: 'Aanmelden als belangenorganisatie', description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', source: '@site/docs/community/belangenorganisaties/aanmelden.mdx', sourceDirName: 'community/belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden', permalink: '/community/belangenorganisaties/aanmelden', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden.mdx', tags: [], version: 'current', frontMatter: { title: 'Aanmelden als belangenorganisatie', hide_title: !0, hide_table_of_contents: !1, description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', sidebar_label: 'Belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden' }, sidebar: 'community', previous: { title: 'Design Systems Week 2022', permalink: '/events/design-systems-week-2022' }, next: { title: 'Slack', permalink: '/slack/' } },
    c = {},
    m = [];
   function u(e) {
    const n = { h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'meld-je-aan-als-belangenorganisatie', children: 'Meld je aan als belangenorganisatie' }), '\n', (0, a.jsx)(l.nv, { lead: !0, children: (0, a.jsx)(n.p, { children: 'NL Design System deelt bouwblokken voor toegankelijke en gebruiksvriendelijke webapplicaties en websites. Voor het\nbest mogelijke resultaat willen we graag samenwerken met ervaringsdeskundigen en belangenorganisaties. Meld je aan als\nje ons wil helpen, en op de hoogte wil blijven!' }) }), '\n', (0, a.jsx)(s.A, { emailFieldId: 'b6Hs0DqOJk', firstNameFieldId: 'LRihfdNWMa', laPostaId: 'iyihtuzpiq', listId: 'okn9gtn1j3', orgId: 'ijDuY9iVT6', privacyPolicyId: 'oP9fdvDSEz', thanksPage: 'https://nldesignsystem.nl/community/belangenorganisaties/aanmelden-bedankt' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
   }
  },
  82415: (e, n, i) => {
   i.d(n, { A: () => o });
   var a = i(87573),
    t = i(41115),
    s = i(75271),
    l = i(25282),
    r = i(52676);
   const o = (e) => {
    let { listId: n = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: m = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: g = [], disallowedInterestValues: p = [], workAreasId: j = '', privacyPolicyId: v = '', language: x, submitText: y = '', talkTitleId: b = '', talkDescriptionId: k = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: I },
     } = (0, l.cI)(),
     D = (0, s.useRef)(null),
     W = '2' === x?.value,
     { search: _ } = (0, a.TH)(),
     S = new URLSearchParams(_),
     $ = S.get('prefillEmail'),
     q = S.get('prefillName'),
     F =
      !!(u && g.length > 0) &&
      ((e, n) => {
       const i = [];
       let a = 1;
       for (let t = 0; t < e.length; t++) {
        for (; n.includes(a); ) a++;
        i.push(a), a++;
       }
       return i;
      })(g, p);
    return (0, r.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: w(() => {
      D.current.submit();
     }),
     children: [(0, r.jsxs)(t.Wi, { type: 'email', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: `id-${d}`, children: W ? 'Email address ' : 'E-mailadres' }) }), I[d] && (0, r.jsx)(t.w7, { children: I[d].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: W ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[d] }) })] }), (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: c, children: W ? 'Name' : 'Naam' }) }), I[c] && (0, r.jsx)(t.w7, { children: I[c].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${c}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[c] }) })] }), b && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.lX, { htmlFor: b, children: W ? 'Title of your talk' : 'Titel van je presentatie' }), (0, r.jsx)(t.ue, { children: W ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: b, name: b, ...f(b, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.lX, { htmlFor: k, children: W ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, r.jsx)(t.ue, { children: W ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.gx, { id: k, name: k, rows: 12, ...f(k, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.nv, { children: (0, r.jsx)(t.lX, { htmlFor: m, children: W ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[m] && (0, r.jsx)(t.w7, { children: I[m].message }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, r.jsxs)(t.pg, { children: [(0, r.jsxs)(t.Qv, { children: [h, ' (niet verplicht)'] }), (0, r.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), g.map((e, n) => (0, r.jsx)(t.Wi, { type: 'checkbox', children: (0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.XZ, { name: `${u}[]`, value: F[n], id: `${u}-${F[n]}` }), (0, r.jsx)(t.lX, { htmlFor: `${u}-${F[n]}`, children: e })] }) }, e))] }), j && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsxs)(t.nv, { children: [(0, r.jsx)(t.lX, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, r.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, r.jsx)(t.nv, { children: (0, r.jsx)(t.gx, { id: j, name: j }) })] }), v && (0, r.jsxs)(t.Wi, { type: 'text', children: [(0, r.jsx)(t.ue, { id: `${v}-description`, children: W ? (0, r.jsxs)('p', { children: ['The ', (0, r.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, r.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, r.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, r.jsxs)(t.Wi, { type: 'checkbox', children: [(0, r.jsx)(t.XZ, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...f(`${v}[]`, { required: { value: !0, message: W ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${v}[]`] }), (0, r.jsx)(t.lX, { htmlFor: `${v}-1`, children: W ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[v] && (0, r.jsx)(t.w7, { children: I[v].message })] }), x?.id && (0, r.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, r.jsx)(t.hE, { children: (0, r.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (W ? 'Sign up' : 'Aanmelden') }) }), (0, r.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, r.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, r.jsx)('input', { type: 'hidden', name: 'l', value: n }), (0, r.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, r.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => r, a: () => l });
   var a = i(75271);
   const t = {},
    s = a.createContext(t);
   function l(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), a.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
