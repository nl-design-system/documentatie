'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92430],
 {
  46565(e, i, n) {
   n.d(i, { c: () => a });
   var t = n(30758);
   function a() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
  54109(e, i, n) {
   (n.r(i), n.d(i, { assets: () => o, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/sluit-je-aan","title":"Sluit je aan bij onze community","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","source":"@site/docs/community/sluit-je-aan.mdx","sourceDirName":"community","slug":"/community/sluit-je-aan","permalink":"/community/sluit-je-aan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx","tags":[],"version":"current","frontMatter":{"title":"Sluit je aan bij onze community","title_sm":"Sluit je aan","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sluit je aan","pagination_label":"Sluit je aan","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","keywords":["nl design system"]},"sidebar":"community","previous":{"title":"Community","permalink":"/community"},"next":{"title":"Wie doet mee?","permalink":"/community/wie-doet-mee"}}');
   var a = n(86070),
    s = n(18439),
    r = n(78599);
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
  78599(e, i, n) {
   n.d(i, { W: () => o });
   var t = n(29181),
    a = n(56561),
    s = n(30758),
    r = n(27890),
    l = n(46565),
    d = n(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: o = '', firstNameFieldId: c = '', orgId: m = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], interestsRequired: p = !1, disallowedInterestValues: x = [], workAreasId: v = '', privacyPolicyId: g = '', language: y, submitText: k = '', talkTitleId: b = '', talkDescriptionId: f = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: z = [], roleRequired: I = !1 }) => {
    const {
      register: R,
      handleSubmit: D,
      formState: { errors: _ },
     } = (0, r.mN)(),
     $ = (0, s.useRef)(null),
     N = '2' === y?.value,
     B = (0, l.c)() ? window.location.search : '',
     q = new URLSearchParams(B),
     M = q.get('prefillEmail'),
     T = q.get('prefillName'),
     F =
      !!(u && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let a = 0; a < e.length; a++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(j, x);
    return (0, d.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: D(() => {
      $.current.submit();
     }),
     children: [(0, d.jsxs)(t.zB, { type: 'email', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: `id-${o}`, children: N ? 'Email address ' : 'E-mailadres' }) }), _[o] && (0, d.jsx)(t.YB, { children: _[o].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...R(`${o}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: N ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!_[o] }) })] }), (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: c, children: N ? 'Name' : 'Naam' }) }), _[c] && (0, d.jsx)(t.YB, { children: _[c].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: c, name: c, type: 'text', defaultValue: T, autoComplete: 'given-name', 'aria-required': 'true', ...R(`${c}`, { required: { value: !0, message: N ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!_[c] }) })] }), b && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: b, children: N ? 'Title of your talk' : 'Titel van je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: b, name: b, ...R(b, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: f, children: N ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, d.jsx)(t.JM, { children: N ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: f, name: f, rows: 12, ...R(f, { required: { value: !0, message: N ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(a.f, { children: (0, d.jsx)(t.lR, { htmlFor: m, children: N ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), _[m] && (0, d.jsx)(t.YB, { children: _[m].message }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.Rj, { id: m, name: m, type: 'text' }) })] }), u && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [h, !p && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${u}[]`, value: F[i], id: `${u}-${F[i]}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${u}-${F[i]}`, children: e })] }, e))] }), w && (0, d.jsxs)(t.LB, { children: [(0, d.jsx)(a.f, { children: (0, d.jsxs)(t.u4, { children: [S, !I && ' (niet verplicht)'] }) }), (0, d.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, i) => (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { name: `${w}[]`, id: `${w}-${i}` }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${w}-${i}`, children: e })] }, e))] }), v && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsxs)(a.f, { children: [(0, d.jsx)(t.lR, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, d.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, d.jsx)(a.f, { children: (0, d.jsx)(t.TM, { id: v, name: v }) })] }), g && (0, d.jsxs)(t.zB, { type: 'text', children: [(0, d.jsx)(t.JM, { id: `${g}-description`, children: N ? (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, d.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, d.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, d.jsxs)(t.zB, { type: 'checkbox', children: [(0, d.jsx)(t.Sc, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...R(`${g}[]`, { required: { value: !0, message: N ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!_[`${g}[]`] }), (0, d.jsx)(t.lR, { type: 'checkbox', htmlFor: `${g}-1`, children: N ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), _[g] && (0, d.jsx)(t.YB, { children: _[g].message })] }), y?.id && (0, d.jsx)('input', { type: 'hidden', name: y.id, value: y.value }), (0, d.jsx)(t.e2, { children: (0, d.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: k || (N ? 'Sign up' : 'Aanmelden') }) }), (0, d.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, d.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, d.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, d.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, d.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
