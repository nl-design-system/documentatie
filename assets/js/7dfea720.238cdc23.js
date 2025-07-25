'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31826],
 {
  38988: (e, s, t) => {
   t.r(s), t.d(s, { assets: () => o, contentTitle: () => a, default: () => m, frontMatter: () => r, metadata: () => l, toc: () => d });
   var n = t(52676),
    i = t(40139);
   t(82415);
   const r = { title: 'Sessie voorstellen \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', unlisted: !0, displayed_sidebar: 'community' },
    a = 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025',
    l = { id: 'community/events/design-systems-week/sessie-voorstellen-bedankt', title: 'Sessie voorstellen \xb7 Design Systems Week', description: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!', source: '@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', permalink: '/events/design-systems-week/sessie-voorstellen/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx', tags: [], version: 'current', frontMatter: { title: 'Sessie voorstellen \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', unlisted: !0, displayed_sidebar: 'community' }, sidebar: 'community' },
    o = {},
    d = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.h1, { id: 'bedankt-voor-het-aanmelden-van-een-sessie-voor-design-systems-week-2025', children: 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025' }), '\n', (0, n.jsx)(s.p, { children: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!' })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, i.a)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, t) => {
   t.d(s, { A: () => o });
   var n = t(87573),
    i = t(41115),
    r = t(75271),
    a = t(25282),
    l = t(52676);
   const o = (e) => {
    let { listId: s = '', laPostaId: t = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: m = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: v = [], disallowedInterestValues: p = [], workAreasId: j = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: k = '', talkDescriptionId: b = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: S },
     } = (0, a.cI)(),
     W = (0, r.useRef)(null),
     _ = '2' === g?.value,
     { search: D } = (0, n.TH)(),
     I = new URLSearchParams(D),
     $ = I.get('prefillEmail'),
     q = I.get('prefillName'),
     F =
      !!(u && v.length > 0) &&
      ((e, s) => {
       const t = [];
       let n = 1;
       for (let i = 0; i < e.length; i++) {
        for (; s.includes(n); ) n++;
        t.push(n), n++;
       }
       return t;
      })(v, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: W,
     onSubmit: w(() => {
      W.current.submit();
     }),
     children: [(0, l.jsxs)(i.Wi, { type: 'email', children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: `id-${d}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), S[d] && (0, l.jsx)(i.w7, { children: S[d].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[d] }) })] }), (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: c, children: _ ? 'Name' : 'Naam' }) }), S[c] && (0, l.jsx)(i.w7, { children: S[c].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${c}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[c] }) })] }), k && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.lX, { htmlFor: k, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(i.ue, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: k, name: k, ...f(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.lX, { htmlFor: b, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(i.ue, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.gx, { id: b, name: b, rows: 12, ...f(b, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsx)(i.nv, { children: (0, l.jsx)(i.lX, { htmlFor: m, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[m] && (0, l.jsx)(i.w7, { children: S[m].message }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, l.jsxs)(i.pg, { children: [(0, l.jsxs)(i.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(i.ue, { children: 'Meerdere antwoorden mogelijk.' }), v.map((e, s) => (0, l.jsx)(i.Wi, { type: 'checkbox', children: (0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.XZ, { name: `${u}[]`, value: F[s], id: `${u}-${F[s]}` }), (0, l.jsx)(i.lX, { htmlFor: `${u}-${F[s]}`, children: e })] }) }, e))] }), j && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsxs)(i.nv, { children: [(0, l.jsx)(i.lX, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(i.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(i.nv, { children: (0, l.jsx)(i.gx, { id: j, name: j }) })] }), x && (0, l.jsxs)(i.Wi, { type: 'text', children: [(0, l.jsx)(i.ue, { id: `${x}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(i.Wi, { type: 'checkbox', children: [(0, l.jsx)(i.XZ, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...f(`${x}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${x}[]`] }), (0, l.jsx)(i.lX, { htmlFor: `${x}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[x] && (0, l.jsx)(i.w7, { children: S[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(i.hE, { children: (0, l.jsx)(i.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: t }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, s, t) => {
   t.d(s, { Z: () => l, a: () => a });
   var n = t(75271);
   const i = {},
    r = n.createContext(i);
   function a(e) {
    const s = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function l(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), n.createElement(r.Provider, { value: s }, e.children);
   }
  },
 },
]);
