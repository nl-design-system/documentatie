'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60036],
 {
  46565(e, n, i) {
   i.d(n, { c: () => s });
   var a = i(30758);
   function s() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  75142(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => o, default: () => u, frontMatter: () => d, metadata: () => a, toc: () => m }));
   const a = JSON.parse('{"id":"community/belangenorganisaties/aanmelden","title":"Aanmelden als belangenorganisatie","description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","source":"@site/docs/community/belangenorganisaties/aanmelden.mdx","sourceDirName":"community/belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden","permalink":"/community/belangenorganisaties/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden als belangenorganisatie","title_sm":"Belangenorganisaties","hide_title":true,"hide_table_of_contents":false,"description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","sidebar_label":"Belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden"},"sidebar":"community","previous":{"title":"Global design systems","permalink":"/community/global-design-system"},"next":{"title":"Slack","permalink":"/slack/"}}');
   var s = i(86070),
    t = i(18439),
    l = i(78599),
    r = i(46447);
   const d = { title: 'Aanmelden als belangenorganisatie', title_sm: 'Belangenorganisaties', hide_title: !0, hide_table_of_contents: !1, description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', sidebar_label: 'Belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden' },
    o = 'Meld je aan als belangenorganisatie',
    c = {},
    m = [];
   function h(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'meld-je-aan-als-belangenorganisatie', children: 'Meld je aan als belangenorganisatie' }) }), '\n', (0, s.jsx)(r.fz, { lead: !0, children: (0, s.jsx)(n.p, { children: 'NL Design System deelt bouwblokken voor toegankelijke en gebruiksvriendelijke webapplicaties en websites. Voor het\nbest mogelijke resultaat willen we graag samenwerken met ervaringsdeskundigen en belangenorganisaties. Meld je aan als\nje ons wil helpen, en op de hoogte wil blijven!' }) }), '\n', (0, s.jsx)(l.W, { emailFieldId: 'b6Hs0DqOJk', firstNameFieldId: 'LRihfdNWMa', laPostaId: 'iyihtuzpiq', listId: 'okn9gtn1j3', orgId: 'ijDuY9iVT6', privacyPolicyId: 'oP9fdvDSEz', thanksPage: 'https://nldesignsystem.nl/community/belangenorganisaties/aanmelden-bedankt' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78599(e, n, i) {
   i.d(n, { W: () => o });
   var a = i(29181),
    s = i(56561),
    t = i(30758),
    l = i(27890),
    r = i(46565),
    d = i(86070);
   const o = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: m = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: g = [], interestsRequired: p = !1, disallowedInterestValues: j = [], workAreasId: x = '', privacyPolicyId: y = '', language: v, submitText: b = '', talkTitleId: f = '', talkDescriptionId: k = '', roleId: w = '', roleLegend: I = 'Wat is jouw rol?', roles: R = [], roleRequired: B = !1 }) => {
    const {
      register: $,
      handleSubmit: N,
      formState: { errors: S },
     } = (0, l.mN)(),
     _ = (0, t.useRef)(null),
     M = '2' === v?.value,
     D = (0, r.c)() ? window.location.search : '',
     q = new URLSearchParams(D),
     z = q.get('prefillEmail'),
     F = q.get('prefillName'),
     T =
      !!(h && g.length > 0) &&
      ((e, n) => {
       const i = [];
       let a = 1;
       for (let s = 0; s < e.length; s++) {
        for (; n.includes(a); ) a++;
        (i.push(a), a++);
       }
       return i;
      })(g, j);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: N(() => {
      _.current.submit();
     }),
     children: [(0, d.jsxs)(a.zB, { type: 'email', children: [(0, d.jsx)(s.f, { children: (0, d.jsx)(a.lR, { htmlFor: `id-${o}`, children: M ? 'Email address ' : 'E-mailadres' }) }), S[o] && (0, d.jsx)(a.YB, { children: S[o].message }), (0, d.jsx)(s.f, { children: (0, d.jsx)(a.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: z, 'aria-required': 'true', ...$(`${o}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: M ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[o] }) })] }), (0, d.jsxs)(a.zB, { type: 'text', children: [(0, d.jsx)(s.f, { children: (0, d.jsx)(a.lR, { htmlFor: c, children: M ? 'Name' : 'Naam' }) }), S[c] && (0, d.jsx)(a.YB, { children: S[c].message }), (0, d.jsx)(s.f, { children: (0, d.jsx)(a.Rj, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: M ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[c] }) })] }), f && (0, d.jsxs)(a.zB, { type: 'text', children: [(0, d.jsxs)(s.f, { children: [(0, d.jsx)(a.lR, { htmlFor: f, children: M ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(a.JM, { children: M ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(s.f, { children: (0, d.jsx)(a.Rj, { id: f, name: f, ...$(f, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, d.jsxs)(a.zB, { type: 'text', children: [(0, d.jsxs)(s.f, { children: [(0, d.jsx)(a.lR, { htmlFor: k, children: M ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(a.JM, { children: M ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(s.f, { children: (0, d.jsx)(a.TM, { id: k, name: k, rows: 12, ...$(k, { required: { value: !0, message: M ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, d.jsxs)(a.zB, { type: 'text', children: [(0, d.jsx)(s.f, { children: (0, d.jsx)(a.lR, { htmlFor: m, children: M ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[m] && (0, d.jsx)(a.YB, { children: S[m].message }), (0, d.jsx)(s.f, { children: (0, d.jsx)(a.Rj, { id: m, name: m, type: 'text' }) })] }), h && (0, d.jsxs)(a.LB, { children: [(0, d.jsx)(s.f, { children: (0, d.jsxs)(a.u4, { children: [u, !p && ' (niet verplicht)'] }) }), (0, d.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), g.map((e, n) => (0, d.jsxs)(a.zB, { type: 'checkbox', children: [(0, d.jsx)(a.Sc, { name: `${h}[]`, value: T[n], id: `${h}-${T[n]}` }), (0, d.jsx)(a.lR, { type: 'checkbox', htmlFor: `${h}-${T[n]}`, children: e })] }, e))] }), w && (0, d.jsxs)(a.LB, { children: [(0, d.jsx)(s.f, { children: (0, d.jsxs)(a.u4, { children: [I, !B && ' (niet verplicht)'] }) }), (0, d.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), R.map((e, n) => (0, d.jsxs)(a.zB, { type: 'checkbox', children: [(0, d.jsx)(a.Sc, { name: `${w}[]`, id: `${w}-${n}` }), (0, d.jsx)(a.lR, { type: 'checkbox', htmlFor: `${w}-${n}`, children: e })] }, e))] }), x && (0, d.jsxs)(a.zB, { type: 'text', children: [(0, d.jsxs)(s.f, { children: [(0, d.jsx)(a.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(a.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(s.f, { children: (0, d.jsx)(a.TM, { id: x, name: x }) })] }), y && (0, d.jsxs)(a.zB, { type: 'text', children: [(0, d.jsx)(a.JM, { id: `${y}-description`, children: M ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(a.zB, { type: 'checkbox', children: [(0, d.jsx)(a.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...$(`${y}[]`, { required: { value: !0, message: M ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${y}[]`] }), (0, d.jsx)(a.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: M ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[y] && (0, d.jsx)(a.YB, { children: S[y].message })] }), v?.id && (0, d.jsx)('input', { type: 'hidden', name: v.id, value: v.value }), (0, d.jsx)(a.e2, { children: (0, d.jsx)(a.$n, { type: 'submit', appearance: 'primary-action-button', children: b || (M ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
