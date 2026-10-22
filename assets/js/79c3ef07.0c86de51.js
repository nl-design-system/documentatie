'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16659],
 {
  31641(e, s, i) {
   i.d(s, { W: () => p });
   var r = i(29181),
    t = i(46847),
    n = i(56561),
    a = i(30758),
    l = i(27890),
    o = i(90515),
    d = i(13526),
    c = i(86070);
   const p = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: p = '', firstNameFieldId: h = '', orgId: u = '', interestsId: m = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: y = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: k = '', privacyPolicyId: v = '', language: f, submitText: b = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: T = '', roleLegend: _ = 'Wat is jouw rol?', roles: R = [], roleRequired: S = !1 }) => {
    const {
      register: B,
      handleSubmit: I,
      formState: { errors: N },
     } = (0, l.mN)({ mode: 'onBlur' }),
     D = (0, a.useRef)(null),
     M = '2' === f?.value,
     q = (0, o.c)() ? window.location.search : '',
     z = new URLSearchParams(q),
     F = z.get('prefillEmail'),
     W = z.get('prefillName'),
     J =
      !!(m && y.length > 0) &&
      ((e, s) => {
       const i = [];
       let r = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(r); ) r++;
        (i.push(r), r++);
       }
       return i;
      })(y, x);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: I(() => {
      D.current.submit();
     }),
     children: [(0, c.jsxs)(r.zB, { type: 'email', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(r.lR, { htmlFor: `id-${p}`, children: M ? 'Email address ' : 'E-mailadres' }) }), N[p] && (0, c.jsx)(r.YB, { role: 'alert', id: `${p}-error`, children: N[p].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: `id-${p}`, name: p, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', 'aria-describedby': N[p] && `${p}-error`, ...B(`${p}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: M ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[p] }) })] }), (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(r.lR, { htmlFor: h, children: M ? 'Name' : 'Naam' }) }), N[h] && (0, c.jsx)(r.YB, { role: 'alert', id: `${h}-error`, children: N[h].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: h, name: h, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': N[h] && `${h}-error`, ...B(`${h}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[h] }) })] }), w && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(r.lR, { htmlFor: w, children: M ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(r.JM, { id: `${w}-description`, children: M ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...B(w, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(r.lR, { htmlFor: $, children: M ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(r.JM, { id: `${$}-description`, children: M ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...B($, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(r.lR, { htmlFor: u, children: M ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[u] && (0, c.jsx)(r.YB, { children: N[u].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.Rj, { id: u, name: u, type: 'text', autoComplete: 'organization' }) })] }), m && (0, c.jsxs)(r.LB, { 'aria-describedby': `${m}-description`, children: [(0, c.jsxs)(r.u4, { children: [g, !j && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${m}-description`, children: 'Meerdere antwoorden mogelijk.' }), y.map((e, s) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${m}[]`, value: J[s], id: `${m}-${J[s]}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${m}-${J[s]}`, children: e })] }, e))] }), T && (0, c.jsxs)(r.LB, { 'aria-describedby': `${T}-description`, children: [(0, c.jsxs)(r.u4, { children: [_, !S && ' (niet verplicht)'] }), (0, c.jsx)(r.JM, { id: `${T}-description`, children: 'Meerdere antwoorden mogelijk.' }), R.map((e, s) => (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { name: `${T}[]`, id: `${T}-${s}` }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${T}-${s}`, children: e })] }, e))] }), k && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(r.lR, { htmlFor: k, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(r.JM, { id: `${k}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(r.TM, { id: k, name: k, 'aria-describedby': `${k}-description` }) })] }), v && (0, c.jsxs)(r.zB, { type: 'text', children: [(0, c.jsx)(r.JM, { id: `${v}-description`, children: M ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(r.zB, { type: 'checkbox', children: [(0, c.jsx)(r.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': (0, d.A)({ [`${v}-description`]: !0, [`${v}-error`]: N[v] }), 'aria-required': 'true', ...B(`${v}[]`, { required: { value: !0, message: M ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${v}`] }), (0, c.jsx)(r.lR, { type: 'checkbox', htmlFor: `${v}-1`, children: M ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[`${v}`] && (0, c.jsx)(r.YB, { role: 'alert', id: `${v}-error`, children: N[`${v}`].message })] }), f?.id && (0, c.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, c.jsx)(r.e2, { children: (0, c.jsx)(t.$, { type: 'submit', purpose: 'primary', children: b || (M ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, s, i) {
   i.d(s, { $: () => r.$n });
   var r = i(50805);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":"/miro","nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  90515(e, s, i) {
   i.d(s, { c: () => t });
   var r = i(30758);
   function t() {
    const [e, s] = (0, r.useState)();
    return ((0, r.useEffect)(() => s(!0), []), e);
   }
  },
  96280(e, s, i) {
   (i.r(s), i.d(s, { assets: () => d, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers-thanks","title":"Thanks for proposing a session","description":"We\'re busy putting together the week\'s program and will let you know if your presentation is a good fit!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers/thanks","permalink":"/events/design-systems-week/en/call-for-speakers/thanks","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for proposing a session","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Thanks for proposing a session","pagination_label":"Thanks for proposing a session","slug":"/events/design-systems-week/en/call-for-speakers/thanks","translations":{"nl":"/events/design-systems-week/sessie-voorstellen/bedankt/"},"unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    n = i(18439),
    a = (i(31641), i(51130));
   const l = { title: 'Thanks for proposing a session', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', translations: { nl: '/events/design-systems-week/sessie-voorstellen/bedankt/' }, unlisted: !0, displayed_sidebar: 'community' },
    o = 'Thank you for proposing a session for Design Systems Week settings.year',
    d = {},
    c = [];
   function p(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, n.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsxs)(s.h1, { id: 'thank-you-for-proposing-a-session-for-design-systems-week-settingsyear', children: ['Thank you for proposing a session for Design Systems Week ', a.Ok] }) }), '\n', (0, t.jsx)(s.p, { children: "We're busy putting together the week's program and will let you know if your presentation is a good fit!" })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, n.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
