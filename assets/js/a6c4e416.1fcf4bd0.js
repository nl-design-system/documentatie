'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25485],
 {
  27269(e, s, i) {
   (i.r(s), i.d(s, { assets: () => c, contentTitle: () => o, default: () => h, frontMatter: () => d, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/sign-up","title":"Sign up for Design Systems Week","description":"We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.","source":"@site/docs/community/events/design-systems-week/en/sign-up.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/sign-up","permalink":"/events/design-systems-week/en/sign-up","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up.mdx","tags":[],"version":"current","frontMatter":{"title":"Sign up for Design Systems Week","title_sm":"Sign up","description":"We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sign up","pagination_label":"Sign up for Design Systems Week","slug":"/events/design-systems-week/en/sign-up","translations":{"nl":"/events/design-systems-week/aanmelden/"},"displayed_sidebar":"community","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community"}');
   var n = i(86070),
    r = i(18439),
    a = i(31641),
    l = i(51130);
   const d = { title: 'Sign up for Design Systems Week', title_sm: 'Sign up', description: 'We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', translations: { nl: '/events/design-systems-week/aanmelden/' }, displayed_sidebar: 'community', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    o = 'Sign up for Design Systems Week',
    c = {},
    m = [];
   function u(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsx)(s.h1, { id: 'sign-up-for-design-systems-week', children: 'Sign up for Design Systems Week' }) }), '\n', (0, n.jsx)(s.p, { children: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, n.jsxs)(s.p, { children: [(0, n.jsxs)(s.strong, { children: ['Design Systems Week ', l.Ok, ' will take place from ', l.en.M] }), '.'] }), '\n', (0, n.jsx)(s.p, { children: 'We are now busy with all the preparations. Leave your info to receive updates!' }), '\n', (0, n.jsx)(a.W, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/en/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(u, { ...e }) }) : u(e);
   }
  },
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
   const m = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: m = '', firstNameFieldId: u = '', orgId: h = '', interestsId: p = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: y = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: v = '', privacyPolicyId: f = '', language: k, submitText: b = '', talkTitleId: w = '', talkDescriptionId: S = '', roleId: $ = '', roleLegend: D = 'Wat is jouw rol?', roles: W = [], roleRequired: _ = !1 }) => {
    const {
      register: I,
      handleSubmit: N,
      formState: { errors: R },
     } = (0, l.mN)({ mode: 'onBlur' }),
     B = (0, a.useRef)(null),
     M = '2' === k?.value,
     F = (0, d.c)() ? window.location.search : '',
     q = new URLSearchParams(F),
     z = q.get('prefillEmail'),
     L = q.get('prefillName'),
     T =
      !!(p && y.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(y, x);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: N(() => {
      B.current.submit();
     }),
     children: [(0, c.jsxs)(t.zB, { type: 'email', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(t.lR, { htmlFor: `id-${m}`, children: M ? 'Email address ' : 'E-mailadres' }) }), R[m] && (0, c.jsx)(t.YB, { role: 'alert', id: `${m}-error`, children: R[m].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: z, 'aria-required': 'true', 'aria-describedby': R[m] && `${m}-error`, ...I(`${m}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: M ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!R[m] }) })] }), (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(t.lR, { htmlFor: u, children: M ? 'Name' : 'Naam' }) }), R[u] && (0, c.jsx)(t.YB, { role: 'alert', id: `${u}-error`, children: R[u].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: u, name: u, type: 'text', defaultValue: L, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': R[u] && `${u}-error`, ...I(`${u}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!R[u] }) })] }), w && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(t.lR, { htmlFor: w, children: M ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(t.JM, { id: `${w}-description`, children: M ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...I(w, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), S && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(t.lR, { htmlFor: S, children: M ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(t.JM, { id: `${S}-description`, children: M ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.TM, { id: S, name: S, rows: 12, 'aria-describedby': `${S}-description`, ...I(S, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(r.f, { children: (0, c.jsx)(t.lR, { htmlFor: h, children: M ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), R[h] && (0, c.jsx)(t.YB, { children: R[h].message }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.Rj, { id: h, name: h, type: 'text', autoComplete: 'organization' }) })] }), p && (0, c.jsxs)(t.LB, { 'aria-describedby': `${p}-description`, children: [(0, c.jsxs)(t.u4, { children: [g, !j && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${p}-description`, children: 'Meerdere antwoorden mogelijk.' }), y.map((e, s) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${p}[]`, value: T[s], id: `${p}-${T[s]}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${p}-${T[s]}`, children: e })] }, e))] }), $ && (0, c.jsxs)(t.LB, { 'aria-describedby': `${$}-description`, children: [(0, c.jsxs)(t.u4, { children: [D, !_ && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${$}-description`, children: 'Meerdere antwoorden mogelijk.' }), W.map((e, s) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${$}[]`, id: `${$}-${s}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${$}-${s}`, children: e })] }, e))] }), v && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(r.f, { children: [(0, c.jsx)(t.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(t.JM, { id: `${v}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(r.f, { children: (0, c.jsx)(t.TM, { id: v, name: v, 'aria-describedby': `${v}-description` }) })] }), f && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(t.JM, { id: `${f}-description`, children: M ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { value: '1', id: `${f}-1`, 'aria-describedby': (0, o.A)({ [`${f}-description`]: !0, [`${f}-error`]: R[f] }), 'aria-required': 'true', ...I(`${f}[]`, { required: { value: !0, message: M ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!R[`${f}`] }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${f}-1`, children: M ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), R[`${f}`] && (0, c.jsx)(t.YB, { role: 'alert', id: `${f}-error`, children: R[`${f}`].message })] }), k?.id && (0, c.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, c.jsx)(t.e2, { children: (0, c.jsx)(n.$, { type: 'submit', purpose: 'primary', children: b || (M ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
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
