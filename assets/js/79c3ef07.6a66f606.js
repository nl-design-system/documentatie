'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16659],
 {
  45186(e, s, i) {
   i.d(s, { c: () => t });
   var n = i(30758);
   function t() {
    const [e, s] = (0, n.useState)();
    return ((0, n.useEffect)(() => s(!0), []), e);
   }
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  69485(e, s, i) {
   (i.r(s), i.d(s, { assets: () => d, contentTitle: () => o, default: () => p, frontMatter: () => l, metadata: () => n, toc: () => c }));
   const n = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers-thanks","title":"Thanks for proposing a session","description":"We\'re busy putting together the week\'s program and will let you know if your presentation is a good fit!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers/thanks","permalink":"/events/design-systems-week/en/call-for-speakers/thanks","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers-thanks.mdx","tags":[],"version":"current","frontMatter":{"title":"Thanks for proposing a session","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Thanks for proposing a session","pagination_label":"Thanks for proposing a session","slug":"/events/design-systems-week/en/call-for-speakers/thanks","translations":{"nl":"/events/design-systems-week/sessie-voorstellen/bedankt/"},"unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var t = i(86070),
    r = i(18439),
    a = (i(75812), i(51130));
   const l = { title: 'Thanks for proposing a session', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thanks for proposing a session', pagination_label: 'Thanks for proposing a session', slug: '/events/design-systems-week/en/call-for-speakers/thanks', translations: { nl: '/events/design-systems-week/sessie-voorstellen/bedankt/' }, unlisted: !0, displayed_sidebar: 'community' },
    o = 'Thank you for proposing a session for Design Systems Week settings.year',
    d = {},
    c = [];
   function h(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(s.header, { children: (0, t.jsxs)(s.h1, { id: 'thank-you-for-proposing-a-session-for-design-systems-week-settingsyear', children: ['Thank you for proposing a session for Design Systems Week ', a.Ok] }) }), '\n', (0, t.jsx)(s.p, { children: "We're busy putting together the week's program and will let you know if your presentation is a good fit!" })] });
   }
   function p(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  75812(e, s, i) {
   i.d(s, { W: () => c });
   var n = i(29181),
    t = i(89974),
    r = i(56561),
    a = i(30758),
    l = i(27890),
    o = i(45186),
    d = i(86070);
   const c = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: c = '', firstNameFieldId: h = '', orgId: p = '', interestsId: u = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: g = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: y = '', privacyPolicyId: k = '', language: f, submitText: v = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: $ = '', roleLegend: T = 'Wat is jouw rol?', roles: _ = [], roleRequired: R = !1 }) => {
    const {
      register: S,
      handleSubmit: I,
      formState: { errors: N },
     } = (0, l.mN)(),
     B = (0, a.useRef)(null),
     D = '2' === f?.value,
     M = (0, o.c)() ? window.location.search : '',
     q = new URLSearchParams(M),
     F = q.get('prefillEmail'),
     W = q.get('prefillName'),
     z =
      !!(u && g.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        (i.push(n), n++);
       }
       return i;
      })(g, x);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: B,
     onSubmit: I(() => {
      B.current.submit();
     }),
     children: [(0, d.jsxs)(n.zB, { type: 'email', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(n.lR, { htmlFor: `id-${c}`, children: D ? 'Email address ' : 'E-mailadres' }) }), N[c] && (0, d.jsx)(n.YB, { children: N[c].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(n.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...S(`${c}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[c] }) })] }), (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(n.lR, { htmlFor: h, children: D ? 'Name' : 'Naam' }) }), N[h] && (0, d.jsx)(n.YB, { children: N[h].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(n.Rj, { id: h, name: h, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', ...S(`${h}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[h] }) })] }), b && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(n.lR, { htmlFor: b, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(n.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(n.Rj, { id: b, name: b, ...S(b, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(n.lR, { htmlFor: w, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(n.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(n.TM, { id: w, name: w, rows: 12, ...S(w, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), p && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsx)(r.f, { children: (0, d.jsx)(n.lR, { htmlFor: p, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[p] && (0, d.jsx)(n.YB, { children: N[p].message }), (0, d.jsx)(r.f, { children: (0, d.jsx)(n.Rj, { id: p, name: p, type: 'text' }) })] }), u && (0, d.jsxs)(n.LB, { children: [(0, d.jsx)(r.f, { children: (0, d.jsxs)(n.u4, { children: [m, !j && ' (niet verplicht)'] }) }), (0, d.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), g.map((e, s) => (0, d.jsxs)(n.zB, { type: 'checkbox', children: [(0, d.jsx)(n.Sc, { name: `${u}[]`, value: z[s], id: `${u}-${z[s]}` }), (0, d.jsx)(n.lR, { type: 'checkbox', htmlFor: `${u}-${z[s]}`, children: e })] }, e))] }), $ && (0, d.jsxs)(n.LB, { children: [(0, d.jsx)(r.f, { children: (0, d.jsxs)(n.u4, { children: [T, !R && ' (niet verplicht)'] }) }), (0, d.jsx)(n.JM, { children: 'Meerdere antwoorden mogelijk.' }), _.map((e, s) => (0, d.jsxs)(n.zB, { type: 'checkbox', children: [(0, d.jsx)(n.Sc, { name: `${$}[]`, id: `${$}-${s}` }), (0, d.jsx)(n.lR, { type: 'checkbox', htmlFor: `${$}-${s}`, children: e })] }, e))] }), y && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsxs)(r.f, { children: [(0, d.jsx)(n.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(n.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(r.f, { children: (0, d.jsx)(n.TM, { id: y, name: y }) })] }), k && (0, d.jsxs)(n.zB, { type: 'text', children: [(0, d.jsx)(n.JM, { id: `${k}-description`, children: D ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(n.zB, { type: 'checkbox', children: [(0, d.jsx)(n.Sc, { value: '1', id: `${k}-1`, 'aria-describedby': `${k}-description`, 'aria-required': 'true', ...S(`${k}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${k}[]`] }), (0, d.jsx)(n.lR, { type: 'checkbox', htmlFor: `${k}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[k] && (0, d.jsx)(n.YB, { children: N[k].message })] }), f?.id && (0, d.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, d.jsx)(n.e2, { children: (0, d.jsx)(t.$, { type: 'submit', purpose: 'primary', children: v || (D ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, s, i) {
   i.d(s, { $: () => n.$n });
   var n = i(50805);
  },
 },
]);
