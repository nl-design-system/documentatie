'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68551],
 {
  31641(e, s, i) {
   i.d(s, { W: () => h });
   var t = i(29181),
    r = i(46847),
    n = i(56561),
    a = i(30758),
    l = i(27890),
    o = i(90515),
    d = i(13526),
    c = i(86070);
   const h = ({ listId: e = '', laPostaId: s = '', thanksPage: i = '', emailFieldId: h = '', firstNameFieldId: m = '', orgId: p = '', interestsId: u = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: y = [], interestsRequired: k = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: v = '', language: f, submitText: b = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: S = '', roleLegend: D = 'Wat is jouw rol?', roles: I = [], roleRequired: R = !1 }) => {
    const {
      register: _,
      handleSubmit: N,
      formState: { errors: W },
     } = (0, l.mN)({ mode: 'onBlur' }),
     P = (0, a.useRef)(null),
     T = '2' === f?.value,
     B = (0, o.c)() ? window.location.search : '',
     F = new URLSearchParams(B),
     M = F.get('prefillEmail'),
     z = F.get('prefillName'),
     q =
      !!(u && y.length > 0) &&
      ((e, s) => {
       const i = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; s.includes(t); ) t++;
        (i.push(t), t++);
       }
       return i;
      })(y, j);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: P,
     onSubmit: N(() => {
      P.current.submit();
     }),
     children: [(0, c.jsxs)(t.zB, { type: 'email', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(t.lR, { htmlFor: `id-${h}`, children: T ? 'Email address ' : 'E-mailadres' }) }), W[h] && (0, c.jsx)(t.YB, { role: 'alert', id: `${h}-error`, children: W[h].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(t.Rj, { id: `id-${h}`, name: h, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', 'aria-describedby': W[h] && `${h}-error`, ..._(`${h}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: T ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!W[h] }) })] }), (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(t.lR, { htmlFor: m, children: T ? 'Name' : 'Naam' }) }), W[m] && (0, c.jsx)(t.YB, { role: 'alert', id: `${m}-error`, children: W[m].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(t.Rj, { id: m, name: m, type: 'text', defaultValue: z, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': W[m] && `${m}-error`, ..._(`${m}`, { required: { value: !0, message: T ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!W[m] }) })] }), w && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(t.lR, { htmlFor: w, children: T ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(t.JM, { id: `${w}-description`, children: T ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(t.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ..._(w, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(t.lR, { htmlFor: $, children: T ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(t.JM, { id: `${$}-description`, children: T ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(t.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ..._($, { required: { value: !0, message: T ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), p && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(n.f, { children: (0, c.jsx)(t.lR, { htmlFor: p, children: T ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), W[p] && (0, c.jsx)(t.YB, { children: W[p].message }), (0, c.jsx)(n.f, { children: (0, c.jsx)(t.Rj, { id: p, name: p, type: 'text', autoComplete: 'organization' }) })] }), u && (0, c.jsxs)(t.LB, { 'aria-describedby': `${u}-description`, children: [(0, c.jsxs)(t.u4, { children: [g, !k && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${u}-description`, children: 'Meerdere antwoorden mogelijk.' }), y.map((e, s) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${u}[]`, value: q[s], id: `${u}-${q[s]}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${u}-${q[s]}`, children: e })] }, e))] }), S && (0, c.jsxs)(t.LB, { 'aria-describedby': `${S}-description`, children: [(0, c.jsxs)(t.u4, { children: [D, !R && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${S}-description`, children: 'Meerdere antwoorden mogelijk.' }), I.map((e, s) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${S}[]`, id: `${S}-${s}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${S}-${s}`, children: e })] }, e))] }), x && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(n.f, { children: [(0, c.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(t.JM, { id: `${x}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(n.f, { children: (0, c.jsx)(t.TM, { id: x, name: x, 'aria-describedby': `${x}-description` }) })] }), v && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(t.JM, { id: `${v}-description`, children: T ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': (0, d.A)({ [`${v}-description`]: !0, [`${v}-error`]: W[v] }), 'aria-required': 'true', ..._(`${v}[]`, { required: { value: !0, message: T ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!W[`${v}`] }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${v}-1`, children: T ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), W[`${v}`] && (0, c.jsx)(t.YB, { role: 'alert', id: `${v}-error`, children: W[`${v}`].message })] }), f?.id && (0, c.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, c.jsx)(t.e2, { children: (0, c.jsx)(r.$, { type: 'submit', purpose: 'primary', children: b || (T ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: s }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
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
   i.d(s, { c: () => r });
   var t = i(30758);
   function r() {
    const [e, s] = (0, t.useState)();
    return ((0, t.useEffect)(() => s(!0), []), e);
   }
  },
  98647(e, s, i) {
   (i.r(s), i.d(s, { assets: () => c, contentTitle: () => d, default: () => p, frontMatter: () => o, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/call-for-speakers","title":"Propose talk for Design Systems Week","description":"Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!","source":"@site/docs/community/events/design-systems-week/en/call-for-speakers.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en/call-for-speakers","permalink":"/events/design-systems-week/en/call-for-speakers","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/call-for-speakers.mdx","tags":[],"version":"current","frontMatter":{"title":"Propose talk for Design Systems Week","title_sm":"Propose talk","description":"Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!","lang":"en","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Propose talk","pagination_label":"Propose talk","slug":"/events/design-systems-week/en/call-for-speakers","translations":{"nl":"/events/design-systems-week/sessie-voorstellen/"},"displayed_sidebar":"community"},"sidebar":"community"}');
   var r = i(86070),
    n = i(18439),
    a = i(31641),
    l = i(51130);
   const o = { title: 'Propose talk for Design Systems Week', title_sm: 'Propose talk', description: 'Are you working on a design system, user research or accessibility and would you like to give a session on that topic? Please let us know!', lang: 'en', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Propose talk', pagination_label: 'Propose talk', slug: '/events/design-systems-week/en/call-for-speakers', translations: { nl: '/events/design-systems-week/sessie-voorstellen/' }, displayed_sidebar: 'community' },
    d = 'Design Systems Week settings.year - Call for speakers',
    c = {},
    h = [{ value: 'Submit your proposal via this form', id: 'submit-your-proposal-via-this-form', level: 2 }];
   function m(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, n.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.header, { children: (0, r.jsxs)(s.h1, { id: 'design-systems-week-settingsyear---call-for-speakers', children: ['Design Systems Week ', l.Ok, ' - Call for speakers'] }) }), '\n', (0, r.jsxs)(s.p, { children: ['From ', l.en.M, ' ', l.Ok, ", we're once again organizing a week full of sessions on design systems. A week in which we'll share experiences, demonstrate practical applications, and learn together about design, code, guidelines, and collaboration."] }), '\n', (0, r.jsx)(s.p, { children: 'Are you a designer, developer, or content creator working with a government design system? Or do you have a great idea to share about the importance of an accessible design system? Then the Design Systems Week is a great opportunity to share knowledge with colleagues.' }), '\n', (0, r.jsx)(s.h2, { id: 'submit-your-proposal-via-this-form', children: 'Submit your proposal via this form' }), '\n', (0, r.jsx)(a.W, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '2' }, thanksPage: 'https://nldesignsystem.nl/events/design-systems-week/en/call-for-speakers/thanks' }), '\n', (0, r.jsx)(s.hr, {}), '\n', (0, r.jsxs)(s.p, { children: ['This is the $', l.en.Z, " year that NL Design System is organizing Design Systems Week. Can't wait? Then check out the videos from previous years!"] }), '\n', (0, r.jsxs)(s.ul, { children: ['\n', (0, r.jsx)(s.li, { children: (0, r.jsx)(s.a, { href: '/events/design-systems-week-2025/en/program/', children: 'Design Systems Week 2025' }) }), '\n', (0, r.jsx)(s.li, { children: (0, r.jsx)(s.a, { href: '/events/design-systems-week-2024/en/program/', children: 'Design Systems Week 2024' }) }), '\n', (0, r.jsx)(s.li, { children: (0, r.jsx)(s.a, { href: '/events/design-systems-week-2023/en/program/', children: 'Design Systems Week 2023' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: s } = { ...(0, n.R)(), ...e.components };
    return s ? (0, r.jsx)(s, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
