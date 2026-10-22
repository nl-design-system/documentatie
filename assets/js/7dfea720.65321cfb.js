'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82151],
 {
  31641(e, s, i) {
   i.d(s, { W: () => m });
   var t = i(29181),
    n = i(46847),
    r = i(56561),
    a = i(30758),
    l = i(27890),
    d = i(90515),
    o = i(13526),
    c = i(86070);
   const m = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: m = '', firstNameFieldId: h = '', orgId: u = '', interestsId: p = '', interestsLegend: v = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: x = !1, disallowedInterestValues: y = [], workAreasId: g = '', privacyPolicyId: k = '', language: b, submitText: f = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: S = '', roleLegend: _ = 'Wat is jouw rol?', roles: R = [], roleRequired: B = !1 }) => {
    const {
      register: I,
      handleSubmit: N,
      formState: { errors: z },
     } = (0, l.mN)({ mode: 'onBlur' }),
     D = (0, a.useRef)(null),
     M = '2' === b?.value,
     q = (0, d.c)() ? window.location.search : '',
     F = new URLSearchParams(q),
     T = F.get('prefillEmail'),
     W = F.get('prefillName'),
     J =
      !!(p && j.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(j, y);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: N(() => {
      D.current.submit();
     }),
     children: [(0, c.jsxs)(t.zB, { type: 'email', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(t.lR, { htmlFor: `id-${m}`, children: M ? 'Email address ' : 'E-mailadres' }) }), z[m] && (0, c.jsx)(t.YB, { role: 'alert', id: `${m}-error`, children: z[m].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', 'aria-describedby': z[m] && `${m}-error`, ...I(`${m}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: M ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!z[m] }) })] }), (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(t.lR, { htmlFor: h, children: M ? 'Name' : 'Naam' }) }), z[h] && (0, c.jsx)(t.YB, { role: 'alert', id: `${h}-error`, children: z[h].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: h, name: h, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': z[h] && `${h}-error`, ...I(`${h}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!z[h] }) })] }), w && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(t.lR, { htmlFor: w, children: M ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(t.JM, { id: `${w}-description`, children: M ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...I(w, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(t.lR, { htmlFor: $, children: M ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(t.JM, { id: `${$}-description`, children: M ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...I($, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(t.lR, { htmlFor: u, children: M ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), z[u] && (0, c.jsx)(t.YB, { children: z[u].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: u, name: u, type: 'text', autoComplete: 'organization' }) })] }), p && (0, c.jsxs)(t.LB, { 'aria-describedby': `${p}-description`, children: [(0, c.jsxs)(t.u4, { children: [v, !x && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${p}-description`, children: 'Meerdere antwoorden mogelijk.' }), j.map((e, s) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${p}[]`, value: J[s], id: `${p}-${J[s]}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${p}-${J[s]}`, children: e })] }, e))] }), S && (0, c.jsxs)(t.LB, { 'aria-describedby': `${S}-description`, children: [(0, c.jsxs)(t.u4, { children: [_, !B && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${S}-description`, children: 'Meerdere antwoorden mogelijk.' }), R.map((e, s) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${S}[]`, id: `${S}-${s}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${S}-${s}`, children: e })] }, e))] }), g && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(t.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(t.JM, { id: `${g}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.TM, { id: g, name: g, 'aria-describedby': `${g}-description` }) })] }), k && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(t.JM, { id: `${k}-description`, children: M ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { value: '1', id: `${k}-1`, 'aria-describedby': (0, o.A)({ [`${k}-description`]: !0, [`${k}-error`]: z[k] }), 'aria-required': 'true', ...I(`${k}[]`, { required: { value: !0, message: M ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!z[`${k}`] }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${k}-1`, children: M ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), z[`${k}`] && (0, c.jsx)(t.YB, { role: 'alert', id: `${k}-error`, children: z[`${k}`].message })] }), b?.id && (0, c.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, c.jsx)(t.e2, { children: (0, c.jsx)(n.$, { type: 'submit', purpose: 'primary', children: f || (M ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, s, i) {
   i.d(s, { $: () => t.$n });
   var t = i(50805);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":"/miro","nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  65304(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen-bedankt","title":"Sessie voorstellen","description":"We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","permalink":"/events/design-systems-week/sessie-voorstellen/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Sessie voorstellen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sessie voorstellen","pagination_label":"Sessie voorstellen","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","translations":{"en":"/events/design-systems-week/en/call-for-speakers/thanks/"},"unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var n = i(86070),
    r = i(18439),
    a = (i(31641), i(51130));
   const l = { title: 'Sessie voorstellen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', translations: { en: '/events/design-systems-week/en/call-for-speakers/thanks/' }, unlisted: !0, displayed_sidebar: 'community' },
    d = 'Bedankt voor het aanmelden van een sessie voor Design Systems Week settings.year',
    o = {},
    c = [];
   function m(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsxs)(s.h1, { id: 'bedankt-voor-het-aanmelden-van-een-sessie-voor-design-systems-week-settingsyear', children: ['Bedankt voor het aanmelden van een sessie voor Design Systems Week ', a.Ok] }) }), '\n', (0, n.jsx)(s.p, { children: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!' })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(m, { ...e }) }) : m(e);
   }
  },
  90515(e, s, i) {
   i.d(s, { c: () => n });
   var t = i(30758);
   function n() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
 },
]);
