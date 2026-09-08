'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25485],
 {
  39337(e, s, i) {
   (i.r(s), i.d(s, { assets: () => c, contentTitle: () => o, default: () => h, frontMatter: () => d, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/sign-up","title":"Sign up for Design Systems Week","description":"We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.","source":"@site/docs/community/events/design-systems-week/en/sign-up.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/sign-up","permalink":"/events/design-systems-week/en/sign-up","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up.mdx","tags":[],"version":"current","frontMatter":{"title":"Sign up for Design Systems Week","title_sm":"Sign up","description":"We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sign up","pagination_label":"Sign up for Design Systems Week","slug":"/events/design-systems-week/en/sign-up","translations":{"nl":"/events/design-systems-week/aanmelden/"},"displayed_sidebar":"community","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community"}');
   var n = i(86070),
    a = i(18439),
    r = i(75812),
    l = i(51130);
   const d = { title: 'Sign up for Design Systems Week', title_sm: 'Sign up', description: 'We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', translations: { nl: '/events/design-systems-week/aanmelden/' }, displayed_sidebar: 'community', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    o = 'Sign up for Design Systems Week',
    c = {},
    m = [];
   function u(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsx)(s.h1, { id: 'sign-up-for-design-systems-week', children: 'Sign up for Design Systems Week' }) }), '\n', (0, n.jsx)(s.p, { children: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, n.jsxs)(s.p, { children: [(0, n.jsxs)(s.strong, { children: ['Design Systems Week ', l.Ok, ' will take place from ', l.en.M] }), '.'] }), '\n', (0, n.jsx)(s.p, { children: 'We are now busy with all the preparations. Leave your info to receive updates!' }), '\n', (0, n.jsx)(r.W, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/en/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, a.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(u, { ...e }) }) : u(e);
   }
  },
  45186(e, s, i) {
   i.d(s, { c: () => n });
   var t = i(30758);
   function n() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  75812(e, s, i) {
   i.d(s, { W: () => c });
   var t = i(29181),
    n = i(89974),
    a = i(56561),
    r = i(30758),
    l = i(27890),
    d = i(45186),
    o = i(86070);
   const c = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: c = '', firstNameFieldId: m = '', orgId: u = '', interestsId: h = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: g = [], interestsRequired: y = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: v = '', language: f, submitText: k = '', talkTitleId: b = '', talkDescriptionId: w = '', roleId: S = '', roleLegend: D = 'Wat is jouw rol?', roles: W = [], roleRequired: _ = !1 }) => {
    const {
      register: $,
      handleSubmit: I,
      formState: { errors: N },
     } = (0, l.mN)(),
     R = (0, r.useRef)(null),
     B = '2' === f?.value,
     M = (0, d.c)() ? window.location.search : '',
     F = new URLSearchParams(M),
     q = F.get('prefillEmail'),
     z = F.get('prefillName'),
     L =
      !!(h && g.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(g, j);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: R,
     onSubmit: I(() => {
      R.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${c}`, children: B ? 'Email address ' : 'E-mailadres' }) }), N[c] && (0, o.jsx)(t.YB, { children: N[c].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: q, 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!N[c] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: m, children: B ? 'Name' : 'Naam' }) }), N[m] && (0, o.jsx)(t.YB, { children: N[m].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: m, name: m, type: 'text', defaultValue: z, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${m}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!N[m] }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: b, name: b, ...$(b, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: w, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.TM, { id: w, name: w, rows: 12, ...$(w, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: u, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), N[u] && (0, o.jsx)(t.YB, { children: N[u].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: u, name: u, type: 'text' }) })] }), h && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(t.u4, { children: [p, !y && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), g.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${h}[]`, value: L[s], id: `${h}-${L[s]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${h}-${L[s]}`, children: e })] }, e))] }), S && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(t.u4, { children: [D, !_ && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), W.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${S}[]`, id: `${S}-${s}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${S}-${s}`, children: e })] }, e))] }), x && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.TM, { id: x, name: x }) })] }), v && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${v}-description`, children: B ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...$(`${v}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!N[`${v}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${v}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), N[v] && (0, o.jsx)(t.YB, { children: N[v].message })] }), f?.id && (0, o.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(n.$, { type: 'submit', purpose: 'primary', children: k || (B ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, s, i) {
   i.d(s, { $: () => t.$n });
   var t = i(50805);
  },
 },
]);
