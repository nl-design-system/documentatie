'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60036],
 {
  45186(e, i, n) {
   n.d(i, { c: () => s });
   var a = n(30758);
   function s() {
    const [e, i] = (0, a.useState)();
    return ((0, a.useEffect)(() => i(!0), []), e);
   }
  },
  56785(e, i, n) {
   (n.r(i), n.d(i, { assets: () => c, contentTitle: () => o, default: () => u, frontMatter: () => d, metadata: () => a, toc: () => m }));
   const a = JSON.parse('{"id":"community/belangenorganisaties/aanmelden","title":"Aanmelden als belangenorganisatie","description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","source":"@site/docs/community/belangenorganisaties/aanmelden.mdx","sourceDirName":"community/belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden","permalink":"/community/belangenorganisaties/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden als belangenorganisatie","title_sm":"Belangenorganisaties","hide_title":true,"hide_table_of_contents":false,"description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","sidebar_label":"Belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden"},"sidebar":"community","previous":{"title":"Global design systems","permalink":"/community/global-design-system"},"next":{"title":"Slack","permalink":"/slack/"}}');
   var s = n(86070),
    t = n(18439),
    l = n(75812),
    r = n(59292);
   const d = { title: 'Aanmelden als belangenorganisatie', title_sm: 'Belangenorganisaties', hide_title: !0, hide_table_of_contents: !1, description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', sidebar_label: 'Belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden' },
    o = 'Meld je aan als belangenorganisatie',
    c = {},
    m = [];
   function h(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-als-belangenorganisatie', children: 'Meld je aan als belangenorganisatie' }) }), '\n', (0, s.jsx)(r.f, { purpose: 'lead', children: (0, s.jsx)(i.p, { children: 'NL Design System deelt bouwblokken voor toegankelijke en gebruiksvriendelijke webapplicaties en websites. Voor het\nbest mogelijke resultaat willen we graag samenwerken met ervaringsdeskundigen en belangenorganisaties. Meld je aan als\nje ons wil helpen, en op de hoogte wil blijven!' }) }), '\n', (0, s.jsx)(l.W, { emailFieldId: 'b6Hs0DqOJk', firstNameFieldId: 'LRihfdNWMa', laPostaId: 'iyihtuzpiq', listId: 'okn9gtn1j3', orgId: 'ijDuY9iVT6', privacyPolicyId: 'oP9fdvDSEz', thanksPage: 'https://nldesignsystem.nl/community/belangenorganisaties/aanmelden-bedankt' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, t.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  59292(e, i, n) {
   n.d(i, { f: () => a.f });
   var a = n(56561);
  },
  75812(e, i, n) {
   n.d(i, { W: () => c });
   var a = n(29181),
    s = n(89974),
    t = n(56561),
    l = n(30758),
    r = n(27890),
    d = n(45186),
    o = n(86070);
   const c = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: c = '', firstNameFieldId: m = '', orgId: h = '', interestsId: u = '', interestsLegend: g = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: j = !1, disallowedInterestValues: x = [], workAreasId: v = '', privacyPolicyId: y = '', language: b, submitText: f = '', talkTitleId: k = '', talkDescriptionId: w = '', roleId: I = '', roleLegend: $ = 'Wat is jouw rol?', roles: R = [], roleRequired: B = !1 }) => {
    const {
      register: N,
      handleSubmit: S,
      formState: { errors: _ },
     } = (0, r.mN)(),
     M = (0, l.useRef)(null),
     D = '2' === b?.value,
     q = (0, d.c)() ? window.location.search : '',
     z = new URLSearchParams(q),
     F = z.get('prefillEmail'),
     T = z.get('prefillName'),
     J =
      !!(u && p.length > 0) &&
      ((e, i) => {
       const n = [];
       let a = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(a); ) a++;
        (n.push(a), a++);
       }
       return n;
      })(p, x);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: M,
     onSubmit: S(() => {
      M.current.submit();
     }),
     children: [(0, o.jsxs)(a.zB, { type: 'email', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(a.lR, { htmlFor: `id-${c}`, children: D ? 'Email address ' : 'E-mailadres' }) }), _[c] && (0, o.jsx)(a.YB, { children: _[c].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: F, 'aria-required': 'true', ...N(`${c}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[c] }) })] }), (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(a.lR, { htmlFor: m, children: D ? 'Name' : 'Naam' }) }), _[m] && (0, o.jsx)(a.YB, { children: _[m].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: m, name: m, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ...N(`${m}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[m] }) })] }), k && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(a.lR, { htmlFor: k, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(a.JM, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: k, name: k, ...N(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(a.lR, { htmlFor: w, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(a.JM, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.TM, { id: w, name: w, rows: 12, ...N(w, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(a.lR, { htmlFor: h, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[h] && (0, o.jsx)(a.YB, { children: _[h].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: h, name: h, type: 'text' }) })] }), u && (0, o.jsxs)(a.LB, { children: [(0, o.jsx)(t.f, { children: (0, o.jsxs)(a.u4, { children: [g, !j && ' (niet verplicht)'] }) }), (0, o.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, o.jsxs)(a.zB, { type: 'checkbox', children: [(0, o.jsx)(a.Sc, { name: `${u}[]`, value: J[i], id: `${u}-${J[i]}` }), (0, o.jsx)(a.lR, { type: 'checkbox', htmlFor: `${u}-${J[i]}`, children: e })] }, e))] }), I && (0, o.jsxs)(a.LB, { children: [(0, o.jsx)(t.f, { children: (0, o.jsxs)(a.u4, { children: [$, !B && ' (niet verplicht)'] }) }), (0, o.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), R.map((e, i) => (0, o.jsxs)(a.zB, { type: 'checkbox', children: [(0, o.jsx)(a.Sc, { name: `${I}[]`, id: `${I}-${i}` }), (0, o.jsx)(a.lR, { type: 'checkbox', htmlFor: `${I}-${i}`, children: e })] }, e))] }), v && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(a.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(a.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.TM, { id: v, name: v }) })] }), y && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsx)(a.JM, { id: `${y}-description`, children: D ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(a.zB, { type: 'checkbox', children: [(0, o.jsx)(a.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...N(`${y}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${y}[]`] }), (0, o.jsx)(a.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[y] && (0, o.jsx)(a.YB, { children: _[y].message })] }), b?.id && (0, o.jsx)('input', { type: 'hidden', name: b.id, value: b.value }), (0, o.jsx)(a.e2, { children: (0, o.jsx)(s.$, { type: 'submit', purpose: 'primary', children: f || (D ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  89974(e, i, n) {
   n.d(i, { $: () => a.$n });
   var a = n(50805);
  },
 },
]);
