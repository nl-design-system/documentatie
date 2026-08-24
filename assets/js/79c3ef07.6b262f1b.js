'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16659],
 {
  45186(e, s, i) {
   i.d(s, { c: () => n });
   var t = i(30758);
   function n() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  69485(e, s, i) {
   (i.r(s), i.d(s, { assets: () => d, contentTitle: () => o, default: () => p, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers-thanks","title":"Thanks for proposing a session","description":"We\'re busy putting together the week\'s program and will let you know if your presentation is a good fit!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers/thanks","permalink":"/events/design-systems-week/en/call-for-speakers/thanks","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for proposing a session","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Thanks for proposing a session","pagination_label":"Thanks for proposing a session","slug":"/events/design-systems-week/en/call-for-speakers/thanks","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var n = i(86070),
    r = i(18439),
    a = (i(75812), i(51130));
   const l = { title: 'Thanks for proposing a session', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', unlisted: !0, displayed_sidebar: 'community' },
    o = 'Thank you for proposing a session for Design Systems Week settings.year',
    d = {},
    c = [];
   function h(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsxs)(s.h1, { id: 'thank-you-for-proposing-a-session-for-design-systems-week-settingsyear', children: ['Thank you for proposing a session for Design Systems Week ', a.Ok] }) }), '\n', (0, n.jsx)(s.p, { children: "We're busy putting together the week's program and will let you know if your presentation is a good fit!" })] });
   }
   function p(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(h, { ...e }) }) : h(e);
   }
  },
  75812(e, s, i) {
   i.d(s, { W: () => d });
   var t = i(29181),
    n = i(56561),
    r = i(30758),
    a = i(27890),
    l = i(45186),
    o = i(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: h = '', interestsId: p = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: m = [], interestsRequired: g = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: y = '', language: k, submitText: f = '', talkTitleId: v = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: T = 'Wat is jouw rol?', roles: $ = [], roleRequired: _ = !1 }) => {
    const {
      register: R,
      handleSubmit: S,
      formState: { errors: N },
     } = (0, a.mN)(),
     B = (0, r.useRef)(null),
     I = '2' === k?.value,
     D = (0, l.c)() ? window.location.search : '',
     M = new URLSearchParams(D),
     q = M.get('prefillEmail'),
     F = M.get('prefillName'),
     W =
      !!(p && m.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(m, j);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: S(() => {
      B.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(n.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${d}`, children: I ? 'Email address ' : 'E-mailadres' }) }), N[d] && (0, o.jsx)(t.YB, { children: N[d].message }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: I ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[d] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(n.f, { children: (0, o.jsx)(t.lR, { htmlFor: c, children: I ? 'Name' : 'Naam' }) }), N[c] && (0, o.jsx)(t.YB, { children: N[c].message }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[c] }) })] }), v && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(n.f, { children: [(0, o.jsx)(t.lR, { htmlFor: v, children: I ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: I ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: v, name: v, ...R(v, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(n.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: I ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: I ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.TM, { id: b, name: b, rows: 12, ...R(b, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(n.f, { children: (0, o.jsx)(t.lR, { htmlFor: h, children: I ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[h] && (0, o.jsx)(t.YB, { children: N[h].message }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: h, name: h, type: 'text' }) })] }), p && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(n.f, { children: (0, o.jsxs)(t.u4, { children: [u, !g && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), m.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${p}[]`, value: W[s], id: `${p}-${W[s]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${p}-${W[s]}`, children: e })] }, e))] }), w && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(n.f, { children: (0, o.jsxs)(t.u4, { children: [T, !_ && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), $.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), x && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(n.f, { children: [(0, o.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.TM, { id: x, name: x }) })] }), y && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${y}-description`, children: I ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...R(`${y}[]`, { required: { value: !0, message: I ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${y}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: I ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[y] && (0, o.jsx)(t.YB, { children: N[y].message })] }), k?.id && (0, o.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (I ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
