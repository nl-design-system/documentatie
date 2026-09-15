'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82151],
 {
  31641(e, s, t) {
   t.d(s, { W: () => c });
   var i = t(29181),
    n = t(46847),
    r = t(56561),
    a = t(30758),
    l = t(27890),
    d = t(90515),
    o = t(86070);
   const c = ({ listId: e = '', laPostaId: s = '', thanksPage: t = '', emailFieldId: c = '', firstNameFieldId: m = '', orgId: h = '', interestsId: u = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: v = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: g = '', privacyPolicyId: y = '', language: k, submitText: f = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: S = '', roleLegend: $ = 'Wat is jouw rol?', roles: _ = [], roleRequired: R = !1 }) => {
    const {
      register: B,
      handleSubmit: I,
      formState: { errors: N },
     } = (0, l.mN)(),
     z = (0, a.useRef)(null),
     D = '2' === k?.value,
     M = (0, d.c)() ? window.location.search : '',
     q = new URLSearchParams(M),
     F = q.get('prefillEmail'),
     T = q.get('prefillName'),
     W =
      !!(u && v.length > 0) &&
      ((e, s) => {
       const t = [];
       let i = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(i); ) i++;
        (t.push(i), i++);
       }
       return t;
      })(v, x);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: z,
     onSubmit: I(() => {
      z.current.submit();
     }),
     children: [(0, o.jsxs)(i.zB, { type: 'email', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(i.lR, { htmlFor: `id-${c}`, children: D ? 'Email address ' : 'E-mailadres' }) }), N[c] && (0, o.jsx)(i.YB, { children: N[c].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(i.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...B(`${c}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[c] }) })] }), (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(i.lR, { htmlFor: m, children: D ? 'Name' : 'Naam' }) }), N[m] && (0, o.jsx)(i.YB, { children: N[m].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(i.Rj, { id: m, name: m, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ...B(`${m}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[m] }) })] }), b && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(i.lR, { htmlFor: b, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(i.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(i.Rj, { id: b, name: b, ...B(b, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(i.lR, { htmlFor: w, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(i.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(i.TM, { id: w, name: w, rows: 12, ...B(w, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(r.f, { children: (0, o.jsx)(i.lR, { htmlFor: h, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[h] && (0, o.jsx)(i.YB, { children: N[h].message }), (0, o.jsx)(r.f, { children: (0, o.jsx)(i.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(r.f, { children: (0, o.jsxs)(i.u4, { children: [p, !j && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), v.map((e, s) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${u}[]`, value: W[s], id: `${u}-${W[s]}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${u}-${W[s]}`, children: e })] }, e))] }), S && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(r.f, { children: (0, o.jsxs)(i.u4, { children: [$, !R && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), _.map((e, s) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${S}[]`, id: `${S}-${s}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${S}-${s}`, children: e })] }, e))] }), g && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(r.f, { children: [(0, o.jsx)(i.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(r.f, { children: (0, o.jsx)(i.TM, { id: g, name: g }) })] }), y && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.JM, { id: `${y}-description`, children: D ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...B(`${y}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${y}[]`] }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[y] && (0, o.jsx)(i.YB, { children: N[y].message })] }), k?.id && (0, o.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, o.jsx)(i.e2, { children: (0, o.jsx)(n.$, { type: 'submit', purpose: 'primary', children: f || (D ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: t }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, s, t) {
   t.d(s, { $: () => i.$n });
   var i = t(50805);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  65304(e, s, t) {
   (t.r(s), t.d(s, { assets: () => o, contentTitle: () => d, default: () => h, frontMatter: () => l, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"community/events/design-systems-week/sessie-voorstellen-bedankt","title":"Sessie voorstellen","description":"We zijn druk bezig om het programma van de week samen te stellen en laten je weten of jouw presentatie past!","source":"@site/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","permalink":"/events/design-systems-week/sessie-voorstellen/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Sessie voorstellen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sessie voorstellen","pagination_label":"Sessie voorstellen","slug":"/events/design-systems-week/sessie-voorstellen/bedankt","translations":{"en":"/events/design-systems-week/en/call-for-speakers/thanks/"},"unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var n = t(86070),
    r = t(18439),
    a = (t(31641), t(51130));
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
  90515(e, s, t) {
   t.d(s, { c: () => n });
   var i = t(30758);
   function n() {
    const [e, s] = (0, i.useState)();
    return ((0, i.useEffect)(() => s(!0), []), e);
   }
  },
 },
]);
