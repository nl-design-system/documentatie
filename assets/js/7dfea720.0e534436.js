'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31826],
 {
  17041: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => d, contentTitle: () => r, default: () => m, frontMatter: () => a, metadata: () => l, toc: () => o });
   var t = i(52676),
    n = i(40139);
   i(82415);
   const a = { title: 'Sessie voorstellen \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', unlisted: !0, displayed_sidebar: 'community' },
    r = 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025',
    l = { id: 'community/events/design-systems-week/sessie-voorstellen-bedankt', title: 'Sessie voorstellen \xb7 Design Systems Week', description: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!', source: '@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', permalink: '/events/design-systems-week/sessie-voorstellen/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx', tags: [], version: 'current', frontMatter: { title: 'Sessie voorstellen \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', unlisted: !0, displayed_sidebar: 'community' }, sidebar: 'community' },
    d = {},
    o = [];
   function c(e) {
    const s = { h1: 'h1', p: 'p', ...(0, n.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.h1, { id: 'bedankt-voor-het-aanmelden-van-een-sessie-voor-design-systems-week-2025', children: 'Bedankt voor het aanmelden van een sessie voor Design Systems Week 2025' }), '\n', (0, t.jsx)(s.p, { children: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!' })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, n.a)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => d });
   var t = i(19696),
    n = i(74824),
    a = i(75271),
    r = i(25282),
    l = i(52676);
   const d = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: m = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: v = [], disallowedInterestValues: p = [], workAreasId: j = '', privacyPolicyId: g = '', language: x, submitText: y = '', talkTitleId: k = '', talkDescriptionId: b = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: S },
     } = (0, r.cI)(),
     W = (0, a.useRef)(null),
     _ = '2' === x?.value,
     { search: D } = (0, t.TH)(),
     I = new URLSearchParams(D),
     $ = I.get('prefillEmail'),
     q = I.get('prefillName'),
     F =
      !!(u && v.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        i.push(t), t++;
       }
       return i;
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
     children: [(0, l.jsxs)(n.Wi, { type: 'email', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: `id-${o}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), S[o] && (0, l.jsx)(n.w7, { children: S[o].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[o] }) })] }), (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: c, children: _ ? 'Name' : 'Naam' }) }), S[c] && (0, l.jsx)(n.w7, { children: S[c].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${c}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[c] }) })] }), k && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: k, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(n.ue, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: k, name: k, ...f(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: b, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(n.ue, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: b, name: b, rows: 12, ...f(b, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.nv, { children: (0, l.jsx)(n.lX, { htmlFor: m, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[m] && (0, l.jsx)(n.w7, { children: S[m].message }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.fE, { id: m, name: m, type: 'text' }) })] }), u && (0, l.jsxs)(n.pg, { children: [(0, l.jsx)(n.nv, { children: (0, l.jsxs)(n.Qv, { children: [h, ' (niet verplicht)'] }) }), (0, l.jsx)(n.ue, { children: 'Meerdere antwoorden mogelijk.' }), v.map((e, s) => (0, l.jsxs)(n.Wi, { type: 'checkbox', children: [(0, l.jsx)(n.XZ, { name: `${u}[]`, value: F[s], id: `${u}-${F[s]}` }), (0, l.jsx)(n.lX, { htmlFor: `${u}-${F[s]}`, children: e })] }, e))] }), j && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsxs)(n.nv, { children: [(0, l.jsx)(n.lX, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(n.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(n.nv, { children: (0, l.jsx)(n.gx, { id: j, name: j }) })] }), g && (0, l.jsxs)(n.Wi, { type: 'text', children: [(0, l.jsx)(n.ue, { id: `${g}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(n.Wi, { type: 'checkbox', children: [(0, l.jsx)(n.XZ, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...f(`${g}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${g}[]`] }), (0, l.jsx)(n.lX, { htmlFor: `${g}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[g] && (0, l.jsx)(n.w7, { children: S[g].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(n.hE, { children: (0, l.jsx)(n.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
