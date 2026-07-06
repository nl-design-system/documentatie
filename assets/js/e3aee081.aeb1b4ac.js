'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68551],
 {
  46565(e, s, i) {
   i.d(s, { c: () => a });
   var t = i(30758);
   function a() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
  46974(e, s, i) {
   (i.r(s), i.d(s, { assets: () => d, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers","title":"Propose talk for Design Systems Week","description":"Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers","permalink":"/events/design-systems-week/en/call-for-speakers","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers.mdx","tags":[],"version":"current","frontMatter":{"title":"Propose talk for Design Systems Week","title_sm":"Propose talk","description":"Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Propose talk","pagination_label":"Propose talk","slug":"/events/design-systems-week/en/call-for-speakers","displayed_sidebar":"community"},"sidebar":"community"}');
   var a = i(86070),
    r = i(18439),
    n = i(78599);
   const l = { title: 'Propose talk for Design Systems Week', title_sm: 'Propose talk', description: 'Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Propose talk', pagination_label: 'Propose talk', slug: '/events/design-systems-week/en/call-for-speakers', displayed_sidebar: 'community' },
    o = 'Design Systems Week 2026 - Call for speakers',
    d = {},
    c = [{ value: 'Submit your proposal via this form', id: 'submit-your-proposal-via-this-form', level: 2 }];
   function h(e) {
    const s = { h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(s.header, { children: (0, a.jsx)(s.h1, { id: 'design-systems-week-2026---call-for-speakers', children: 'Design Systems Week 2026 - Call for speakers' }) }), '\n', (0, a.jsx)(s.p, { children: "From October 26 to October 29 2026, we're once again organizing a week full of sessions on design systems. A week in which we'll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration." }), '\n', (0, a.jsx)(s.p, { children: 'Are you a designer, developer, or content creator working with a government design system? Or do you have a great idea to share about the importance of an accessible design system? Then the Design Systems Week is a great opportunity to share knowledge with colleagues.' }), '\n', (0, a.jsx)(s.h2, { id: 'submit-your-proposal-via-this-form', children: 'Submit your proposal via this form' }), '\n', (0, a.jsx)(n.W, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '2' } })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, a.jsx)(s, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78599(e, s, i) {
   i.d(s, { W: () => d });
   var t = i(29181),
    a = i(56561),
    r = i(30758),
    n = i(27890),
    l = i(46565),
    o = i(86070);
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: h = '', interestsId: u = '', interestsLegend: m = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: g = !1, disallowedInterestValues: y = [], workAreasId: j = '', privacyPolicyId: x = '', language: k, submitText: v = '', talkTitleId: f = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: I = [], roleRequired: R = !1 }) => {
    const {
      register: _,
      handleSubmit: D,
      formState: { errors: $ },
     } = (0, n.mN)(),
     N = (0, r.useRef)(null),
     P = '2' === k?.value,
     W = (0, l.c)() ? window.location.search : '',
     B = new URLSearchParams(W),
     F = B.get('prefillEmail'),
     T = B.get('prefillName'),
     q =
      !!(u && p.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let a = 0; a < e.length; a++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(p, y);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: D(() => {
      N.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${d}`, children: P ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, o.jsx)(t.YB, { children: $[d].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ..._(`${d}`, { required: { value: !0, message: P ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: P ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: c, children: P ? 'Name' : 'Naam' }) }), $[c] && (0, o.jsx)(t.YB, { children: $[c].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ..._(`${c}`, { required: { value: !0, message: P ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[c] }) })] }), f && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: f, children: P ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: P ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: f, name: f, ..._(f, { required: { value: !0, message: P ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: P ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: P ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.TM, { id: b, name: b, rows: 12, ..._(b, { required: { value: !0, message: P ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(a.f, { children: (0, o.jsx)(t.lR, { htmlFor: h, children: P ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[h] && (0, o.jsx)(t.YB, { children: $[h].message }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(t.u4, { children: [m, !g && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${u}[]`, value: q[s], id: `${u}-${q[s]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${u}-${q[s]}`, children: e })] }, e))] }), w && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(a.f, { children: (0, o.jsxs)(t.u4, { children: [S, !R && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), j && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(a.f, { children: [(0, o.jsx)(t.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(a.f, { children: (0, o.jsx)(t.TM, { id: j, name: j }) })] }), x && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${x}-description`, children: P ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ..._(`${x}[]`, { required: { value: !0, message: P ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${x}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${x}-1`, children: P ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[x] && (0, o.jsx)(t.YB, { children: $[x].message })] }), k?.id && (0, o.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (P ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
