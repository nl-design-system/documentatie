'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43146],
 {
  31641(e, s, i) {
   i.d(s, { W: () => c });
   var n = i(29181),
    t = i(46847),
    r = i(56561),
    a = i(30758),
    d = i(27890),
    l = i(90515),
    o = i(13526),
    m = i(86070);
   const c = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: c = '', firstNameFieldId: h = '', orgId: u = '', interestsId: p = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: y = !1, disallowedInterestValues: v = [], workAreasId: x = '', privacyPolicyId: k = '', language: b, submitText: f = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: S = '', roleLegend: D = 'Wat is jouw rol?', roles: W = [], roleRequired: _ = !1 }) => {
    const {
      register: I,
      handleSubmit: z,
      formState: { errors: M },
     } = (0, d.mN)({ mode: 'onBlur' }),
     N = (0, a.useRef)(null),
     R = '2' === b?.value,
     B = (0, l.c)() ? window.location.search : '',
     T = new URLSearchParams(B),
     F = T.get('prefillEmail'),
     q = T.get('prefillName'),
     A =
      !!(p && j.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        (i.push(n), n++);
       }
       return i;
      })(j, v);
    return (0, m.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: z(() => {
      N.current.submit();
     }),
     children: [(0, m.jsxs)(n.zB, { type: 'email', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(n.lR, { htmlFor: `id-${c}`, children: R ? 'Email address ' : 'E-mailadres' }) }), M[c] && (0, m.jsx)(n.YB, { role: 'alert', id: `${c}-error`, children: M[c].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(n.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', 'aria-describedby': M[c] && `${c}-error`, ...I(`${c}`, { required: { value: !0, message: R ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: R ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!M[c] }) })] }), (0, m.jsxs)(n.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(n.lR, { htmlFor: h, children: R ? 'Name' : 'Naam' }) }), M[h] && (0, m.jsx)(n.YB, { role: 'alert', id: `${h}-error`, children: M[h].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(n.Rj, { id: h, name: h, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': M[h] && `${h}-error`, ...I(`${h}`, { required: { value: !0, message: R ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!M[h] }) })] }), w && (0, m.jsxs)(n.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(n.lR, { htmlFor: w, children: R ? 'Title of your talk' : 'Titel van je presentatie' }), (0, m.jsx)(n.JM, { id: `${w}-description`, children: R ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(n.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...I(w, { required: { value: !0, message: R ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, m.jsxs)(n.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(n.lR, { htmlFor: $, children: R ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, m.jsx)(n.JM, { id: `${$}-description`, children: R ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(n.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...I($, { required: { value: !0, message: R ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, m.jsxs)(n.zB, { type: 'text', children: [(0, m.jsx)(r.f, { children: (0, m.jsx)(n.lR, { htmlFor: u, children: R ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), M[u] && (0, m.jsx)(n.YB, { children: M[u].message }), (0, m.jsx)(r.f, { children: (0, m.jsx)(n.Rj, { id: u, name: u, type: 'text', autoComplete: 'organization' }) })] }), p && (0, m.jsxs)(n.LB, { 'aria-describedby': `${p}-description`, children: [(0, m.jsxs)(n.u4, { children: [g, !y && ' (niet verplicht)'] }), (0, m.jsx)(n.JM, { id: `${p}-description`, children: 'Meerdere antwoorden mogelijk.' }), j.map((e, s) => (0, m.jsxs)(n.zB, { type: 'checkbox', children: [(0, m.jsx)(n.Sc, { name: `${p}[]`, value: A[s], id: `${p}-${A[s]}` }), (0, m.jsx)(n.lR, { type: 'checkbox', htmlFor: `${p}-${A[s]}`, children: e })] }, e))] }), S && (0, m.jsxs)(n.LB, { 'aria-describedby': `${S}-description`, children: [(0, m.jsxs)(n.u4, { children: [D, !_ && ' (niet verplicht)'] }), (0, m.jsx)(n.JM, { id: `${S}-description`, children: 'Meerdere antwoorden mogelijk.' }), W.map((e, s) => (0, m.jsxs)(n.zB, { type: 'checkbox', children: [(0, m.jsx)(n.Sc, { name: `${S}[]`, id: `${S}-${s}` }), (0, m.jsx)(n.lR, { type: 'checkbox', htmlFor: `${S}-${s}`, children: e })] }, e))] }), x && (0, m.jsxs)(n.zB, { type: 'text', children: [(0, m.jsxs)(r.f, { children: [(0, m.jsx)(n.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, m.jsx)(n.JM, { id: `${x}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, m.jsx)(r.f, { children: (0, m.jsx)(n.TM, { id: x, name: x, 'aria-describedby': `${x}-description` }) })] }), k && (0, m.jsxs)(n.zB, { type: 'text', children: [(0, m.jsx)(n.JM, { id: `${k}-description`, children: R ? (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, m.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, m.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, m.jsxs)(n.zB, { type: 'checkbox', children: [(0, m.jsx)(n.Sc, { value: '1', id: `${k}-1`, 'aria-describedby': (0, o.A)({ [`${k}-description`]: !0, [`${k}-error`]: M[k] }), 'aria-required': 'true', ...I(`${k}[]`, { required: { value: !0, message: R ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!M[`${k}`] }), (0, m.jsx)(n.lR, { type: 'checkbox', htmlFor: `${k}-1`, children: R ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), M[`${k}`] && (0, m.jsx)(n.YB, { role: 'alert', id: `${k}-error`, children: M[`${k}`].message })] }), b?.id && (0, m.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, m.jsx)(n.e2, { children: (0, m.jsx)(t.$, { type: 'submit', purpose: 'primary', children: f || (R ? 'Sign up' : 'Aanmelden') }) }), (0, m.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, m.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, m.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, m.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, m.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, s, i) {
   i.d(s, { $: () => n.$n });
   var n = i(50805);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":"/miro","nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  84701(e, s, i) {
   (i.r(s), i.d(s, { assets: () => m, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/aanmelden","title":"Aanmelden voor Design Systems Week","description":"Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.","source":"@site/docs/community/events/design-systems-week/aanmelden.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/aanmelden","permalink":"/events/design-systems-week/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor Design Systems Week","title_sm":"Aanmelden","description":"Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Meld je aan voor Design Systems Week","slug":"/events/design-systems-week/aanmelden","translations":{"en":"/events/design-systems-week/en/sign-up/"},"displayed_sidebar":"community","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community"}');
   var t = i(86070),
    r = i(18439),
    a = i(31641),
    d = i(51130);
   const l = { title: 'Aanmelden voor Design Systems Week', title_sm: 'Aanmelden', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', translations: { en: '/events/design-systems-week/en/sign-up/' }, displayed_sidebar: 'community', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    o = 'Meld je aan voor Design Systems Week',
    m = {},
    c = [];
   function h(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsx)(s.h1, { id: 'meld-je-aan-voor-design-systems-week', children: 'Meld je aan voor Design Systems Week' }) }), '\n', (0, t.jsxs)(s.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, t.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, t.jsxs)(s.p, { children: ['Design Systems Week ', d.Ok, ' is van ', d.nl.M, '. We zijn nu druk bezig met de planning en voorbereiding.'] }), '\n', (0, t.jsx)(s.p, { children: 'Laat je gegevens achter om op de hoogte te blijven!' }), '\n', (0, t.jsx)(a.W, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  90515(e, s, i) {
   i.d(s, { c: () => t });
   var n = i(30758);
   function t() {
    const [e, s] = (0, n.useState)();
    return ((0, n.useEffect)(() => s(!0), []), e);
   }
  },
 },
]);
