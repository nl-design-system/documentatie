'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60036],
 {
  2511(e, i, n) {
   (n.r(i), n.d(i, { assets: () => c, contentTitle: () => o, default: () => u, frontMatter: () => d, metadata: () => a, toc: () => m }));
   const a = JSON.parse('{"id":"community/belangenorganisaties/aanmelden","title":"Aanmelden als belangenorganisatie","description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","source":"@site/docs/community/belangenorganisaties/aanmelden.mdx","sourceDirName":"community/belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden","permalink":"/community/belangenorganisaties/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden als belangenorganisatie","title_sm":"Belangenorganisaties","hide_title":true,"hide_table_of_contents":false,"description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","sidebar_label":"Belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden"},"sidebar":"community","previous":{"title":"Global design systems","permalink":"/community/global-design-system"},"next":{"title":"Slack","permalink":"/slack/"}}');
   var s = n(86070),
    t = n(18439),
    r = n(31641),
    l = n(66153);
   const d = { title: 'Aanmelden als belangenorganisatie', title_sm: 'Belangenorganisaties', hide_title: !0, hide_table_of_contents: !1, description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', sidebar_label: 'Belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden' },
    o = 'Meld je aan als belangenorganisatie',
    c = {},
    m = [];
   function h(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-als-belangenorganisatie', children: 'Meld je aan als belangenorganisatie' }) }), '\n', (0, s.jsx)(l.f, { purpose: 'lead', children: (0, s.jsx)(i.p, { children: 'NL Design System deelt bouwblokken voor toegankelijke en gebruiksvriendelijke webapplicaties en websites. Voor het\nbest mogelijke resultaat willen we graag samenwerken met ervaringsdeskundigen en belangenorganisaties. Meld je aan als\nje ons wil helpen, en op de hoogte wil blijven!' }) }), '\n', (0, s.jsx)(r.W, { emailFieldId: 'b6Hs0DqOJk', firstNameFieldId: 'LRihfdNWMa', laPostaId: 'iyihtuzpiq', listId: 'okn9gtn1j3', orgId: 'ijDuY9iVT6', privacyPolicyId: 'oP9fdvDSEz', thanksPage: 'https://nldesignsystem.nl/community/belangenorganisaties/aanmelden-bedankt' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, t.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  31641(e, i, n) {
   n.d(i, { W: () => m });
   var a = n(29181),
    s = n(46847),
    t = n(56561),
    r = n(30758),
    l = n(27890),
    d = n(90515),
    o = n(13526),
    c = n(86070);
   const m = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: m = '', firstNameFieldId: h = '', orgId: u = '', interestsId: p = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: x = !1, disallowedInterestValues: b = [], workAreasId: y = '', privacyPolicyId: v = '', language: f, submitText: k = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: I = '', roleLegend: B = 'Wat is jouw rol?', roles: R = [], roleRequired: N = !1 }) => {
    const {
      register: S,
      handleSubmit: _,
      formState: { errors: M },
     } = (0, l.mN)({ mode: 'onBlur' }),
     D = (0, r.useRef)(null),
     q = '2' === f?.value,
     z = (0, d.c)() ? window.location.search : '',
     F = new URLSearchParams(z),
     T = F.get('prefillEmail'),
     J = F.get('prefillName'),
     L =
      !!(p && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let a = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(a); ) a++;
        (n.push(a), a++);
       }
       return n;
      })(j, b);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: _(() => {
      D.current.submit();
     }),
     children: [(0, c.jsxs)(a.zB, { type: 'email', children: [(0, c.jsx)(t.f, { children: (0, c.jsx)(a.lR, { htmlFor: `id-${m}`, children: q ? 'Email address ' : 'E-mailadres' }) }), M[m] && (0, c.jsx)(a.YB, { role: 'alert', id: `${m}-error`, children: M[m].message }), (0, c.jsx)(t.f, { children: (0, c.jsx)(a.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', 'aria-describedby': M[m] && `${m}-error`, ...S(`${m}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: q ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!M[m] }) })] }), (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsx)(t.f, { children: (0, c.jsx)(a.lR, { htmlFor: h, children: q ? 'Name' : 'Naam' }) }), M[h] && (0, c.jsx)(a.YB, { role: 'alert', id: `${h}-error`, children: M[h].message }), (0, c.jsx)(t.f, { children: (0, c.jsx)(a.Rj, { id: h, name: h, type: 'text', defaultValue: J, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': M[h] && `${h}-error`, ...S(`${h}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!M[h] }) })] }), w && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsxs)(t.f, { children: [(0, c.jsx)(a.lR, { htmlFor: w, children: q ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(a.JM, { id: `${w}-description`, children: q ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(t.f, { children: (0, c.jsx)(a.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...S(w, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsxs)(t.f, { children: [(0, c.jsx)(a.lR, { htmlFor: $, children: q ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(a.JM, { id: `${$}-description`, children: q ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(t.f, { children: (0, c.jsx)(a.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...S($, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsx)(t.f, { children: (0, c.jsx)(a.lR, { htmlFor: u, children: q ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), M[u] && (0, c.jsx)(a.YB, { children: M[u].message }), (0, c.jsx)(t.f, { children: (0, c.jsx)(a.Rj, { id: u, name: u, type: 'text', autoComplete: 'organization' }) })] }), p && (0, c.jsxs)(a.LB, { 'aria-describedby': `${p}-description`, children: [(0, c.jsxs)(a.u4, { children: [g, !x && ' (niet verplicht)'] }), (0, c.jsx)(a.JM, { id: `${p}-description`, children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, c.jsxs)(a.zB, { type: 'checkbox', children: [(0, c.jsx)(a.Sc, { name: `${p}[]`, value: L[i], id: `${p}-${L[i]}` }), (0, c.jsx)(a.lR, { type: 'checkbox', htmlFor: `${p}-${L[i]}`, children: e })] }, e))] }), I && (0, c.jsxs)(a.LB, { 'aria-describedby': `${I}-description`, children: [(0, c.jsxs)(a.u4, { children: [B, !N && ' (niet verplicht)'] }), (0, c.jsx)(a.JM, { id: `${I}-description`, children: 'Meerdere antwoorden mogelijk.' }), R.map((e, i) => (0, c.jsxs)(a.zB, { type: 'checkbox', children: [(0, c.jsx)(a.Sc, { name: `${I}[]`, id: `${I}-${i}` }), (0, c.jsx)(a.lR, { type: 'checkbox', htmlFor: `${I}-${i}`, children: e })] }, e))] }), y && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsxs)(t.f, { children: [(0, c.jsx)(a.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(a.JM, { id: `${y}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(t.f, { children: (0, c.jsx)(a.TM, { id: y, name: y, 'aria-describedby': `${y}-description` }) })] }), v && (0, c.jsxs)(a.zB, { type: 'text', children: [(0, c.jsx)(a.JM, { id: `${v}-description`, children: q ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(a.zB, { type: 'checkbox', children: [(0, c.jsx)(a.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': (0, o.A)({ [`${v}-description`]: !0, [`${v}-error`]: M[v] }), 'aria-required': 'true', ...S(`${v}[]`, { required: { value: !0, message: q ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!M[`${v}`] }), (0, c.jsx)(a.lR, { type: 'checkbox', htmlFor: `${v}-1`, children: q ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), M[`${v}`] && (0, c.jsx)(a.YB, { role: 'alert', id: `${v}-error`, children: M[`${v}`].message })] }), f?.id && (0, c.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, c.jsx)(a.e2, { children: (0, c.jsx)(s.$, { type: 'submit', purpose: 'primary', children: k || (q ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, i, n) {
   n.d(i, { $: () => a.$n });
   var a = n(50805);
  },
  66153(e, i, n) {
   n.d(i, { f: () => a.f });
   var a = n(56561);
  },
  90515(e, i, n) {
   n.d(i, { c: () => s });
   var a = n(30758);
   function s() {
    const [e, i] = (0, a.useState)();
    return ((0, a.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
