'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25485],
 {
  46565(e, s, i) {
   i.d(s, { c: () => n });
   var t = i(30758);
   function n() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
  78599(e, s, i) {
   i.d(s, { W: () => o });
   var t = i(29181),
    n = i(56561),
    a = i(30758),
    r = i(27890),
    l = i(46565),
    d = i(86070);
   const o = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: h = '', interestsId: u = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: g = !1, disallowedInterestValues: y = [], workAreasId: j = '', privacyPolicyId: x = '', language: v, submitText: f = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: W = [], roleRequired: _ = !1 }) => {
    const {
      register: D,
      handleSubmit: I,
      formState: { errors: R },
     } = (0, r.mN)(),
     $ = (0, a.useRef)(null),
     N = '2' === v?.value,
     B = (0, l.c)() ? window.location.search : '',
     q = new URLSearchParams(B),
     F = q.get('prefillEmail'),
     z = q.get('prefillName'),
     M =
      !!(u && p.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(p, y);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: I(() => {
      $.current.submit();
     }),
     children: [(0, d.jsxs)(t.zB, { type: 'email', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(t.lR, { htmlFor: `id-${o}`, children: N ? 'Email address ' : 'E-mailadres' }) }), R[o] && (0, d.jsx)(t.YB, { children: R[o].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...D(`${o}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: N ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!R[o] }) })] }), (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(t.lR, { htmlFor: c, children: N ? 'Name' : 'Naam' }) }), R[c] && (0, d.jsx)(t.YB, { children: R[c].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: z, autoComplete: 'given-name', 'aria-required': 'true', ...D(`${c}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!R[c] }) })] }), k && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(t.lR, { htmlFor: k, children: N ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(t.Rj, { id: k, name: k, ...D(k, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(t.lR, { htmlFor: b, children: N ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(t.TM, { id: b, name: b, rows: 12, ...D(b, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(n.f, { children: (0, d.jsx)(t.lR, { htmlFor: h, children: N ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), R[h] && (0, d.jsx)(t.YB, { children: R[h].message }), (0, d.jsx)(n.f, { children: (0, d.jsx)(t.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(n.f, { children: (0, d.jsxs)(t.u4, { children: [m, !g && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${u}[]`, value: M[s], id: `${u}-${M[s]}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${u}-${M[s]}`, children: e })] }, e))] }), w && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(n.f, { children: (0, d.jsxs)(t.u4, { children: [S, !_ && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), W.map((e, s) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), j && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(n.f, { children: [(0, d.jsx)(t.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(n.f, { children: (0, d.jsx)(t.TM, { id: j, name: j }) })] }), x && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(t.JM, { id: `${x}-description`, children: N ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...D(`${x}[]`, { required: { value: !0, message: N ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!R[`${x}[]`] }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: N ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), R[x] && (0, d.jsx)(t.YB, { children: R[x].message })] }), v?.id && (0, d.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, d.jsx)(t.e2, { children: (0, d.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: f || (N ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  91615(e, s, i) {
   (i.r(s), i.d(s, { assets: () => o, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/sign-up","title":"Sign up for Design Systems Week","description":"We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.","source":"@site/docs/community/events/design-systems-week/en/sign-up.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/sign-up","permalink":"/events/design-systems-week/en/sign-up","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/sign-up.mdx","tags":[],"version":"current","frontMatter":{"title":"Sign up for Design Systems Week","title_sm":"Sign up","description":"We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sign up","pagination_label":"Sign up for Design Systems Week","slug":"/events/design-systems-week/en/sign-up","displayed_sidebar":"community"},"sidebar":"community"}');
   var n = i(86070),
    a = i(18439),
    r = i(78599);
   const l = { title: 'Sign up for Design Systems Week', title_sm: 'Sign up', description: 'We will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sign up', pagination_label: 'Sign up for Design Systems Week', slug: '/events/design-systems-week/en/sign-up', displayed_sidebar: 'community' },
    d = 'Sign up for Design Systems Week',
    o = {},
    c = [];
   function h(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsx)(s.h1, { id: 'sign-up-for-design-systems-week', children: 'Sign up for Design Systems Week' }) }), '\n', (0, n.jsx)(s.p, { children: 'Design System Week will feature short talks about the how and why of design systems, from managing design systems to user research and accessibility.' }), '\n', (0, n.jsxs)(s.p, { children: [(0, n.jsx)(s.strong, { children: 'Design Systems Week 2026 will take place from Oktober 26 to October 29' }), '.'] }), '\n', (0, n.jsx)(s.p, { children: 'We are now busy with all the preparations. Leave your info to receive updates!' }), '\n', (0, n.jsx)(r.W, { listId: 'pcqhthkfma', emailFieldId: '9djAFMjpOP', firstNameFieldId: 'Z4algALizb', thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/en/sign-up/thanks', laPostaId: 'iyihtuzpiq', language: { id: 'pWGlUo870J', value: '2' } })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, a.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
