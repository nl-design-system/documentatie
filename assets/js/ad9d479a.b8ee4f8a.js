'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92430],
 {
  11955(e, i, n) {
   (n.r(i), n.d(i, { assets: () => o, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/sluit-je-aan","title":"Sluit je aan bij onze community","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","source":"@site/docs/community/sluit-je-aan.mdx","sourceDirName":"community","slug":"/community/sluit-je-aan","permalink":"/community/sluit-je-aan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx","tags":[],"version":"current","frontMatter":{"title":"Sluit je aan bij onze community","title_sm":"Sluit je aan","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sluit je aan","pagination_label":"Sluit je aan","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","keywords":["nl design system"]},"sidebar":"community","previous":{"title":"Community","permalink":"/community"},"next":{"title":"Community in cijfers","permalink":"/community/wie-doet-mee"}}');
   var a = n(86070),
    s = n(18439),
    r = n(31641);
   const l = { title: 'Sluit je aan bij onze community', title_sm: 'Sluit je aan', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    d = 'Sluit je aan bij onze community',
    o = {},
    c = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function m(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(i.header, { children: (0, a.jsx)(i.h1, { id: 'sluit-je-aan-bij-onze-community', children: 'Sluit je aan bij onze community' }) }), '\n', (0, a.jsxs)(i.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, a.jsx)(i.a, { href: '/project/kernteam/', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, a.jsx)(i.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, a.jsx)(i.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, a.jsx)(i.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, a.jsx)(i.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, a.jsx)(i.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, a.jsxs)(i.ul, { children: ['\n', (0, a.jsx)(i.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communitybijeenkomst.' }), '\n', (0, a.jsx)(i.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, a.jsx)(i.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, a.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, a.jsx)(r.W, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', privacyPolicyId: 'D770JCMyVw', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], disallowedInterestValues: [7], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, s.R)(), ...e.components };
    return i ? (0, a.jsx)(i, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  31641(e, i, n) {
   n.d(i, { W: () => c });
   var t = n(29181),
    a = n(46847),
    s = n(56561),
    r = n(30758),
    l = n(27890),
    d = n(90515),
    o = n(86070);
   const c = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: c = '', firstNameFieldId: m = '', orgId: u = '', interestsId: h = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], interestsRequired: x = !1, disallowedInterestValues: v = [], workAreasId: g = '', privacyPolicyId: y = '', language: k, submitText: b = '', talkTitleId: f = '', talkDescriptionId: w = '', roleId: S = '', roleLegend: z = 'Wat is jouw rol?', roles: I = [], roleRequired: R = !1 }) => {
    const {
      register: $,
      handleSubmit: D,
      formState: { errors: _ },
     } = (0, l.mN)(),
     N = (0, r.useRef)(null),
     B = '2' === k?.value,
     q = (0, d.c)() ? window.location.search : '',
     M = new URLSearchParams(q),
     T = M.get('prefillEmail'),
     F = M.get('prefillName'),
     C =
      !!(h && p.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let a = 0; a < e.length; a++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(p, v);
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
     children: [(0, o.jsxs)(t.zB, { type: 'email', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: `id-${c}`, children: B ? 'Email address ' : 'E-mailadres' }) }), _[c] && (0, o.jsx)(t.YB, { children: _[c].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: `id-${c}`, name: c, type: 'email', autoComplete: 'email', defaultValue: T, 'aria-required': 'true', ...$(`${c}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: B ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[c] }) })] }), (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: m, children: B ? 'Name' : 'Naam' }) }), _[m] && (0, o.jsx)(t.YB, { children: _[m].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: m, name: m, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...$(`${m}`, { required: { value: !0, message: B ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[m] }) })] }), f && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: f, children: B ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(t.JM, { children: B ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: f, name: f, ...$(f, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: w, children: B ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(t.JM, { children: B ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.TM, { id: w, name: w, rows: 12, ...$(w, { required: { value: !0, message: B ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(s.f, { children: (0, o.jsx)(t.lR, { htmlFor: u, children: B ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[u] && (0, o.jsx)(t.YB, { children: _[u].message }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.Rj, { id: u, name: u, type: 'text' }) })] }), h && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(t.u4, { children: [j, !x && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${h}[]`, value: C[i], id: `${h}-${C[i]}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${h}-${C[i]}`, children: e })] }, e))] }), S && (0, o.jsxs)(t.LB, { children: [(0, o.jsx)(s.f, { children: (0, o.jsxs)(t.u4, { children: [z, !R && ' (niet verplicht)'] }) }), (0, o.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), I.map((e, i) => (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { name: `${S}[]`, id: `${S}-${i}` }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${S}-${i}`, children: e })] }, e))] }), g && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsxs)(s.f, { children: [(0, o.jsx)(t.lR, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(s.f, { children: (0, o.jsx)(t.TM, { id: g, name: g }) })] }), y && (0, o.jsxs)(t.zB, { type: 'text', children: [(0, o.jsx)(t.JM, { id: `${y}-description`, children: B ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(t.zB, { type: 'checkbox', children: [(0, o.jsx)(t.Sc, { value: '1', id: `${y}-1`, 'aria-describedby': `${y}-description`, 'aria-required': 'true', ...$(`${y}[]`, { required: { value: !0, message: B ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${y}[]`] }), (0, o.jsx)(t.lR, { type: 'checkbox', htmlFor: `${y}-1`, children: B ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[y] && (0, o.jsx)(t.YB, { children: _[y].message })] }), k?.id && (0, o.jsx)('input', { type: 'hidden', name: k.id, value: k.value }), (0, o.jsx)(t.e2, { children: (0, o.jsx)(a.$, { type: 'submit', purpose: 'primary', children: b || (B ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
  46847(e, i, n) {
   n.d(i, { $: () => t.$n });
   var t = n(50805);
  },
  90515(e, i, n) {
   n.d(i, { c: () => a });
   var t = n(30758);
   function a() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
