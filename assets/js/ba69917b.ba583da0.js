'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43146],
 {
  31641(e, s, n) {
   n.d(s, { W: () => m });
   var i = n(29181),
    t = n(46847),
    a = n(56561),
    r = n(30758),
    l = n(27890),
    d = n(90515),
    o = n(86070);
   const m = ({ listId: e = '', laPostaId: s = '', thanksPage: n = '', emailFieldId: m = '', firstNameFieldId: c = '', orgId: h = '', interestsId: u = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: y = [], workAreasId: v = '', privacyPolicyId: x = '', language: k, submitText: f = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: S = '', roleLegend: D = 'Wat is jouw rol?', roles: W = [], roleRequired: _ = !1 }) => {
    const {
      register: $,
      handleSubmit: I,
      formState: { errors: M },
     } = (0, l.mN)(),
     N = (0, r.useRef)(null),
     R = '2' === k?.value,
     z = (0, d.c)() ? window.location.search : '',
     B = new URLSearchParams(z),
     T = B.get('prefillEmail'),
     F = B.get('prefillName'),
     q =
      !!(u && p.length > 0) &&
      ((e, s) => {
       const n = [];
       let i = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(i); ) i++;
        (n.push(i), i++);
       }
       return n;
      })(p, y);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: I(() => {
      N.current.submit();
     }),
     children: [(0, o.jsxs)(i.zB, { type: 'email', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(i.lR, { htmlFor: `id-${m}`, children: R ? 'Email address ' : 'E-mailadres' }) }), M[m] && (0, o.jsx)(i.YB, { children: M[m].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(i.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', ...$(`${m}`, { required: { value: !0, message: R ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: R ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!M[m] }) })] }), (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(i.lR, { htmlFor: c, children: R ? 'Name' : 'Naam' }) }), M[c] && (0, o.jsx)(i.YB, { children: M[c].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(i.Rj, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: R ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!M[c] }) })] }), b && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(i.lR, { htmlFor: b, children: R ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(i.JM, { children: R ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(i.Rj, { id: b, name: b, ...$(b, { required: { value: !0, message: R ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(i.lR, { htmlFor: w, children: R ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(i.JM, { children: R ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(i.TM, { id: w, name: w, rows: 12, ...$(w, { required: { value: !0, message: R ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(i.lR, { htmlFor: h, children: R ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), M[h] && (0, o.jsx)(i.YB, { children: M[h].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(i.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(i.u4, { children: [g, !j && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${u}[]`, value: q[s], id: `${u}-${q[s]}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${u}-${q[s]}`, children: e })] }, e))] }), S && (0, o.jsxs)(i.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(i.u4, { children: [D, !_ && ' (niet verplicht)'] }) }), (0, o.jsx)(i.JM, { children: 'Meerdere antwoorden mogelijk.' }), W.map((e, s) => (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { name: `${S}[]`, id: `${S}-${s}` }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${S}-${s}`, children: e })] }, e))] }), v && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(i.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(i.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(i.TM, { id: v, name: v }) })] }), x && (0, o.jsxs)(i.zB, { type: 'text', children: [(0, o.jsx)(i.JM, { id: `${x}-description`, children: R ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(i.zB, { type: 'checkbox', children: [(0, o.jsx)(i.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...$(`${x}[]`, { required: { value: !0, message: R ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!M[`${x}[]`] }), (0, o.jsx)(i.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: R ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), M[x] && (0, o.jsx)(i.YB, { children: M[x].message })] }), k?.id && (0, o.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, o.jsx)(i.e2, { children: (0, o.jsx)(t.$, { type: 'submit', purpose: 'primary', children: f || (R ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, s, n) {
   n.d(s, { $: () => i.$n });
   var i = n(50805);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  84701(e, s, n) {
   (n.r(s), n.d(s, { assets: () => m, contentTitle: () => o, default: () => u, frontMatter: () => d, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"community/events/design-systems-week/aanmelden","title":"Aanmelden voor Design Systems Week","description":"Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.","source":"@site/docs/community/events/design-systems-week/aanmelden.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/aanmelden","permalink":"/events/design-systems-week/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden voor Design Systems Week","title_sm":"Aanmelden","description":"Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Meld je aan voor Design Systems Week","slug":"/events/design-systems-week/aanmelden","translations":{"en":"/events/design-systems-week/en/sign-up/"},"displayed_sidebar":"community","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community"}');
   var t = n(86070),
    a = n(18439),
    r = n(31641),
    l = n(51130);
   const d = { title: 'Aanmelden voor Design Systems Week', title_sm: 'Aanmelden', description: 'Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het hoe en waarom van design systems.', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden', translations: { en: '/events/design-systems-week/en/sign-up/' }, displayed_sidebar: 'community', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    o = 'Meld je aan voor Design Systems Week',
    m = {},
    c = [];
   function h(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsx)(s.h1, { id: 'meld-je-aan-voor-design-systems-week', children: 'Meld je aan voor Design Systems Week' }) }), '\n', (0, t.jsxs)(s.p, { children: ['Tijdens Design Systems Week zijn er dagelijks meerdere korte sessies van diverse organisaties over het ', (0, t.jsx)(s.strong, { children: 'hoe en waarom van design systems' }), '.'] }), '\n', (0, t.jsxs)(s.p, { children: ['Design Systems Week ', l.Ok, ' is van ', l.nl.M, '. We zijn nu druk bezig met de planning en voorbereiding.'] }), '\n', (0, t.jsx)(s.p, { children: 'Laat je gegevens achter om op de hoogte te blijven!' }), '\n', (0, t.jsx)(r.W, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/aanmelden/bedankt', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '1' } })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, a.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  90515(e, s, n) {
   n.d(s, { c: () => t });
   var i = n(30758);
   function t() {
    const [e, s] = (0, i.useState)();
    return ((0, i.useEffect)(() => s(!0), []), e);
   }
  },
 },
]);
