'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68551],
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
  67106(e, s, i) {
   (i.r(s), i.d(s, { assets: () => c, contentTitle: () => d, default: () => u, frontMatter: () => o, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers","title":"Propose talk for Design Systems Week","description":"Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers","permalink":"/events/design-systems-week/en/call-for-speakers","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers.mdx","tags":[],"version":"current","frontMatter":{"title":"Propose talk for Design Systems Week","title_sm":"Propose talk","description":"Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Propose talk","pagination_label":"Propose talk","slug":"/events/design-systems-week/en/call-for-speakers","displayed_sidebar":"community"},"sidebar":"community"}');
   var n = i(86070),
    r = i(18439),
    a = i(75812),
    l = i(51130);
   const o = { title: 'Propose talk for Design Systems Week', title_sm: 'Propose talk', description: 'Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Propose talk', pagination_label: 'Propose talk', slug: '/events/design-systems-week/en/call-for-speakers', displayed_sidebar: 'community' },
    d = 'Design Systems Week settings.year - Call for speakers',
    c = {},
    h = [{ value: 'Submit your proposal via this form', id: 'submit-your-proposal-via-this-form', level: 2 }];
   function m(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.header, { children: (0, n.jsxs)(s.h1, { id: 'design-systems-week-settingsyear---call-for-speakers', children: ['Design Systems Week ', l.Ok, ' - Call for speakers'] }) }), '\n', (0, n.jsxs)(s.p, { children: ['From ', l.en.M, ' ', l.Ok, ", we're once again organizing a week full of sessions on design systems. A week in which we'll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration."] }), '\n', (0, n.jsx)(s.p, { children: 'Are you a designer, developer, or content creator working with a government design system? Or do you have a great idea to share about the importance of an accessible design system? Then the Design Systems Week is a great opportunity to share knowledge with colleagues.' }), '\n', (0, n.jsx)(s.h2, { id: 'submit-your-proposal-via-this-form', children: 'Submit your proposal via this form' }), '\n', (0, n.jsx)(a.W, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '2' }, thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/en/call-for-speakers/thanks' }), '\n', (0, n.jsx)(s.hr, {}), '\n', (0, n.jsxs)(s.p, { children: ['This is the $', l.en.Z, " year that NL Design System is organizing Design Systems Week. Can't wait? Then check out the videos from previous years!"] }), '\n', (0, n.jsxs)(s.ul, { children: ['\n', (0, n.jsx)(s.li, { children: (0, n.jsx)(s.a, { href: '/events/design-systems-week-2025/en/program/', children: 'Design Systems Week 2025' }) }), '\n', (0, n.jsx)(s.li, { children: (0, n.jsx)(s.a, { href: '/events/design-systems-week-2024/en/program/', children: 'Design Systems Week 2024' }) }), '\n', (0, n.jsx)(s.li, { children: (0, n.jsx)(s.a, { href: '/events/design-systems-week-2023/en/program/', children: 'Design Systems Week 2023' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(m, { ...e }) }) : m(e);
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
   const d = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: h = '', interestsId: m = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: g = !1, disallowedInterestValues: y = [], workAreasId: j = '', privacyPolicyId: k = '', language: x, submitText: v = '', talkTitleId: f = '', talkDescriptionId: b = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: D = [], roleRequired: I = !1 }) => {
    const {
      register: R,
      handleSubmit: _,
      formState: { errors: $ },
     } = (0, a.mN)(),
     N = (0, r.useRef)(null),
     W = '2' === x?.value,
     P = (0, l.c)() ? window.location.search : '',
     T = new URLSearchParams(P),
     F = T.get('prefillEmail'),
     M = T.get('prefillName'),
     B =
      !!(m && p.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let n = 0; n < e.length; n++) {
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
     onSubmit: _(() => {
      N.current.submit();
     }),
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(n.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${d}`, children: W ? 'Email address ' : 'E-mailadres' }) }), $[d] && (0, o.jsx)(t.YB, { children: $[d].message }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...R(`${d}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: W ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!$[d] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(n.f, { children: (0, o.jsx)(t.lR, { htmlFor: c, children: W ? 'Name' : 'Naam' }) }), $[c] && (0, o.jsx)(t.YB, { children: $[c].message }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: M, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!$[c] }) })] }), f && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(n.f, { children: [(0, o.jsx)(t.lR, { htmlFor: f, children: W ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: W ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: f, name: f, ...R(f, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(n.f, { children: [(0, o.jsx)(t.lR, { htmlFor: b, children: W ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: W ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.TM, { id: b, name: b, rows: 12, ...R(b, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(n.f, { children: (0, o.jsx)(t.lR, { htmlFor: h, children: W ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), $[h] && (0, o.jsx)(t.YB, { children: $[h].message }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.Rj, { id: h, name: h, type: 'text' }) })] }), m && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(n.f, { children: (0, o.jsxs)(t.u4, { children: [u, !g && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${m}[]`, value: B[s], id: `${m}-${B[s]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${m}-${B[s]}`, children: e })] }, e))] }), w && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(n.f, { children: (0, o.jsxs)(t.u4, { children: [S, !I && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), D.map((e, s) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${s}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${s}`, children: e })] }, e))] }), j && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(n.f, { children: [(0, o.jsx)(t.lR, { htmlFor: j, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(n.f, { children: (0, o.jsx)(t.TM, { id: j, name: j }) })] }), k && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${k}-description`, children: W ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${k}-1`, 'aria-describedby': `${k}-description`, 'aria-required': 'true', ...R(`${k}[]`, { required: { value: !0, message: W ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!$[`${k}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${k}-1`, children: W ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), $[k] && (0, o.jsx)(t.YB, { children: $[k].message })] }), x?.id && (0, o.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (W ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
