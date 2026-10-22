'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92430],
 {
  11955(e, i, n) {
   (n.r(i), n.d(i, { assets: () => o, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/sluit-je-aan","title":"Sluit je aan bij onze community","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","source":"@site/docs/community/sluit-je-aan.mdx","sourceDirName":"community","slug":"/community/sluit-je-aan","permalink":"/community/sluit-je-aan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx","tags":[],"version":"current","frontMatter":{"title":"Sluit je aan bij onze community","title_sm":"Sluit je aan","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sluit je aan","pagination_label":"Sluit je aan","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","keywords":["nl design system"]},"sidebar":"community","previous":{"title":"Community","permalink":"/community"},"next":{"title":"Community in cijfers","permalink":"/community/wie-doet-mee"}}');
   var r = n(86070),
    a = n(18439),
    s = n(31641);
   const l = { title: 'Sluit je aan bij onze community', title_sm: 'Sluit je aan', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    d = 'Sluit je aan bij onze community',
    o = {},
    c = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function m(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(i.header, { children: (0, r.jsx)(i.h1, { id: 'sluit-je-aan-bij-onze-community', children: 'Sluit je aan bij onze community' }) }), '\n', (0, r.jsxs)(i.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, r.jsx)(i.a, { href: '/project/kernteam/', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, r.jsx)(i.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, r.jsx)(i.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, r.jsx)(i.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, r.jsx)(i.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, r.jsx)(i.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, r.jsxs)(i.ul, { children: ['\n', (0, r.jsx)(i.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communitybijeenkomst.' }), '\n', (0, r.jsx)(i.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, r.jsx)(i.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, r.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, r.jsx)(s.W, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', privacyPolicyId: 'D770JCMyVw', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], disallowedInterestValues: [7], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, r.jsx)(i, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  31641(e, i, n) {
   n.d(i, { W: () => m });
   var t = n(29181),
    r = n(46847),
    a = n(56561),
    s = n(30758),
    l = n(27890),
    d = n(90515),
    o = n(13526),
    c = n(86070);
   const m = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: m = '', firstNameFieldId: u = '', orgId: h = '', interestsId: j = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: x = [], interestsRequired: v = !1, disallowedInterestValues: g = [], workAreasId: y = '', privacyPolicyId: b = '', language: k, submitText: f = '', talkTitleId: w = '', talkDescriptionId: $ = '', roleId: S = '', roleLegend: z = 'Wat is jouw rol?', roles: I = [], roleRequired: R = !1 }) => {
    const {
      register: D,
      handleSubmit: _,
      formState: { errors: B },
     } = (0, l.mN)({ mode: 'onBlur' }),
     N = (0, s.useRef)(null),
     q = '2' === k?.value,
     M = (0, d.c)() ? window.location.search : '',
     T = new URLSearchParams(M),
     C = T.get('prefillEmail'),
     F = T.get('prefillName'),
     J =
      !!(j && x.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(x, g);
    return (0, c.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: N,
     onSubmit: _(() => {
      N.current.submit();
     }),
     children: [(0, c.jsxs)(t.zB, { type: 'email', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(t.lR, { htmlFor: `id-${m}`, children: q ? 'Email address ' : 'E-mailadres' }) }), B[m] && (0, c.jsx)(t.YB, { role: 'alert', id: `${m}-error`, children: B[m].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(t.Rj, { id: `id-${m}`, name: m, type: 'email', autoComplete: 'email', defaultValue: C, 'aria-required': 'true', 'aria-describedby': B[m] && `${m}-error`, ...D(`${m}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: q ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!B[m] }) })] }), (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(t.lR, { htmlFor: u, children: q ? 'Name' : 'Naam' }) }), B[u] && (0, c.jsx)(t.YB, { role: 'alert', id: `${u}-error`, children: B[u].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(t.Rj, { id: u, name: u, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', 'aria-describedby': B[u] && `${u}-error`, ...D(`${u}`, { required: { value: !0, message: q ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!B[u] }) })] }), w && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(t.lR, { htmlFor: w, children: q ? 'Title of your talk' : 'Titel van je presentatie' }), (0, c.jsx)(t.JM, { id: `${w}-description`, children: q ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(t.Rj, { id: w, name: w, 'aria-describedby': `${w}-description`, ...D(w, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), $ && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(t.lR, { htmlFor: $, children: q ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, c.jsx)(t.JM, { id: `${$}-description`, children: q ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(t.TM, { id: $, name: $, rows: 12, 'aria-describedby': `${$}-description`, ...D($, { required: { value: !0, message: q ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(a.f, { children: (0, c.jsx)(t.lR, { htmlFor: h, children: q ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), B[h] && (0, c.jsx)(t.YB, { children: B[h].message }), (0, c.jsx)(a.f, { children: (0, c.jsx)(t.Rj, { id: h, name: h, type: 'text', autoComplete: 'organization' }) })] }), j && (0, c.jsxs)(t.LB, { 'aria-describedby': `${j}-description`, children: [(0, c.jsxs)(t.u4, { children: [p, !v && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${j}-description`, children: 'Meerdere antwoorden mogelijk.' }), x.map((e, i) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${j}[]`, value: J[i], id: `${j}-${J[i]}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${j}-${J[i]}`, children: e })] }, e))] }), S && (0, c.jsxs)(t.LB, { 'aria-describedby': `${S}-description`, children: [(0, c.jsxs)(t.u4, { children: [z, !R && ' (niet verplicht)'] }), (0, c.jsx)(t.JM, { id: `${S}-description`, children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { name: `${S}[]`, id: `${S}-${i}` }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${S}-${i}`, children: e })] }, e))] }), y && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsxs)(a.f, { children: [(0, c.jsx)(t.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, c.jsx)(t.JM, { id: `${y}-description`, children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, c.jsx)(a.f, { children: (0, c.jsx)(t.TM, { id: y, name: y, 'aria-describedby': `${y}-description` }) })] }), b && (0, c.jsxs)(t.zB, { type: 'text', children: [(0, c.jsx)(t.JM, { id: `${b}-description`, children: q ? (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, c.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, c.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, c.jsxs)(t.zB, { type: 'checkbox', children: [(0, c.jsx)(t.Sc, { value: '1', id: `${b}-1`, 'aria-describedby': (0, o.A)({ [`${b}-description`]: !0, [`${b}-error`]: B[b] }), 'aria-required': 'true', ...D(`${b}[]`, { required: { value: !0, message: q ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!B[`${b}`] }), (0, c.jsx)(t.lR, { type: 'checkbox', htmlFor: `${b}-1`, children: q ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), B[`${b}`] && (0, c.jsx)(t.YB, { role: 'alert', id: `${b}-error`, children: B[`${b}`].message })] }), k?.id && (0, c.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, c.jsx)(t.e2, { children: (0, c.jsx)(r.$, { type: 'submit', purpose: 'primary', children: f || (q ? 'Sign up' : 'Aanmelden') }) }), (0, c.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, c.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, c.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, c.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, c.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
  90515(e, i, n) {
   n.d(i, { c: () => r });
   var t = n(30758);
   function r() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
