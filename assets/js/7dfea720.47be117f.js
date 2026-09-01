'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82151],
 {
  45186(e, s, t) {
   t.d(s, { c: () => i });
   var n = t(30758);
   function i() {
    const [e, s] = (0, n.useState)();
    return ((0, n.useEffect)(() => s(!0), []), e);
   }
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  75321(e, s, t) {
   (t.r(s), t.d(s, { assets: () => d, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen-bedankt","title":"Sessie voorstellen","description":"We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","permalink":"/events/design-systems-week/sessie-voorstellen/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Sessie voorstellen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sessie voorstellen","pagination_label":"Sessie voorstellen","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","translations":{"en":"/events/design-systems-week/en/call-for-speakers/thanks/"},"unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var i = t(86070),
    a = t(18439),
    r = (t(75812), t(51130));
   const l = { title: 'Sessie voorstellen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sessie voorstellen', pagination_label: 'Sessie voorstellen', slug: '/events/design-systems-week/sessie-voorstellen/bedankt', translations: { en: '/events/design-systems-week/en/call-for-speakers/thanks/' }, unlisted: !0, displayed_sidebar: 'community' },
    o = 'Bedankt voor het aanmelden van een sessie voor Design Systems Week settings.year',
    d = {},
    c = [];
   function m(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.header, { children: (0, i.jsxs)(s.h1, { id: 'bedankt-voor-het-aanmelden-van-een-sessie-voor-design-systems-week-settingsyear', children: ['Bedankt voor het aanmelden van een sessie voor Design Systems Week ', r.Ok] }) }), '\n', (0, i.jsx)(s.p, { children: 'We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!' })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, a.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  75812(e, s, t) {
   t.d(s, { W: () => d });
   var n = t(29181),
    i = t(56561),
    a = t(30758),
    r = t(27890),
    l = t(45186),
    o = t(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: t = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: m = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: v = [], workAreasId: x = '', privacyPolicyId: g = '', language: y, submitText: k = '', talkTitleId: b = '', talkDescriptionId: f = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: $ = [], roleRequired: _ = !1 }) => {
    const {
      register: R,
      handleSubmit: B,
      formState: { errors: N },
     } = (0, r.mN)(),
     I = (0, a.useRef)(null),
     z = '2' === y?.value,
     D = (0, l.c)() ? window.location.search : '',
     M = new URLSearchParams(D),
     q = M.get('prefillEmail'),
     F = M.get('prefillName'),
     T =
      !!(h && p.length > 0) &&
      ((e, s) => {
       const t = [];
       let n = 1;
       for (let i = 0; i < e.length; i++) {
        for (; s.includes(n); ) n++;
        (t.push(n), n++);
       }
       return t;
      })(p, v);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: I,
     onSubmit: B(() => {
      I.current.submit();
     }),
     children: [(0, o.jsxs)(n.zB, { type: 'email', children: [(0, o.jsx)(i.f, { children: (0, o.jsx)(n.lR, { htmlFor: `id-${d}`, children: z ? 'Email address ' : 'E-mailadres' }) }), N[d] && (0, o.jsx)(n.YB, { children: N[d].message }), (0, o.jsx)(i.f, { children: (0, o.jsx)(n.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: z ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[d] }) })] }), (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsx)(i.f, { children: (0, o.jsx)(n.lR, { htmlFor: c, children: z ? 'Name' : 'Naam' }) }), N[c] && (0, o.jsx)(n.YB, { children: N[c].message }), (0, o.jsx)(i.f, { children: (0, o.jsx)(n.Rj, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: z ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[c] }) })] }), b && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsxs)(i.f, { children: [(0, o.jsx)(n.lR, { htmlFor: b, children: z ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(n.JM, { children: z ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(i.f, { children: (0, o.jsx)(n.Rj, { id: b, name: b, ...R(b, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsxs)(i.f, { children: [(0, o.jsx)(n.lR, { htmlFor: f, children: z ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(n.JM, { children: z ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(i.f, { children: (0, o.jsx)(n.TM, { id: f, name: f, rows: 12, ...R(f, { required: { value: !0, message: z ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsx)(i.f, { children: (0, o.jsx)(n.lR, { htmlFor: m, children: z ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[m] && (0, o.jsx)(n.YB, { children: N[m].message }), (0, o.jsx)(i.f, { children: (0, o.jsx)(n.Rj, { id: m, name: m, type: 'text' }) })] }), h && (0, o.jsxs)(n.LB, { children: [(0, o.jsx)(i.f, { children: (0, o.jsxs)(n.u4, { children: [u, !j && ' (niet verplicht)'] }) }), (0, o.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, o.jsxs)(n.zB, { type: 'checkbox', children: [(0, o.jsx)(n.Sc, { name: `${h}[]`, value: T[s], id: `${h}-${T[s]}` }), (0, o.jsx)(n.lR, { type: 'checkbox', htmlFor: `${h}-${T[s]}`, children: e })] }, e))] }), w && (0, o.jsxs)(n.LB, { children: [(0, o.jsx)(i.f, { children: (0, o.jsxs)(n.u4, { children: [S, !_ && ' (niet verplicht)'] }) }), (0, o.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), $.map((e, s) => (0, o.jsxs)(n.zB, { type: 'checkbox', children: [(0, o.jsx)(n.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, o.jsx)(n.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), x && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsxs)(i.f, { children: [(0, o.jsx)(n.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(i.f, { children: (0, o.jsx)(n.TM, { id: x, name: x }) })] }), g && (0, o.jsxs)(n.zB, { type: 'text', children: [(0, o.jsx)(n.JM, { id: `${g}-description`, children: z ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(n.zB, { type: 'checkbox', children: [(0, o.jsx)(n.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...R(`${g}[]`, { required: { value: !0, message: z ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${g}[]`] }), (0, o.jsx)(n.lR, { type: 'checkbox', htmlFor: `${g}-1`, children: z ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[g] && (0, o.jsx)(n.YB, { children: N[g].message })] }), y?.id && (0, o.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, o.jsx)(n.e2, { children: (0, o.jsx)(n.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (z ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
