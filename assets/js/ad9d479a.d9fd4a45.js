'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92430],
 {
  37447(e, i, n) {
   n.d(i, { W: () => d });
   var t = n(29181),
    s = n(30758),
    a = n(27890),
    r = n(54565),
    l = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: m = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], interestsRequired: j = !1, disallowedInterestValues: p = [], workAreasId: x = '', privacyPolicyId: v = '', language: g, submitText: y = '', talkTitleId: k = '', talkDescriptionId: b = '', roleId: f = '', roleLegend: w = 'Wat is jouw rol?', roles: z = [], roleRequired: S = !1 }) => {
    const {
      register: I,
      handleSubmit: R,
      formState: { errors: D },
     } = (0, a.mN)(),
     $ = (0, s.useRef)(null),
     _ = '2' === g?.value,
     B = (0, r.c)() ? window.location.search : '',
     q = new URLSearchParams(B),
     M = q.get('prefillEmail'),
     C = q.get('prefillName'),
     N =
      !!(m && h.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(t); ) t++;
        (n.push(t), t++);
       }
       return n;
      })(h, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: R(() => {
      $.current.submit();
     }),
     children: [(0, l.jsxs)(t.zB, { type: 'email', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: `id-${d}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), D[d] && (0, l.jsx)(t.YB, { children: D[d].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!D[d] }) })] }), (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: o, children: _ ? 'Name' : 'Naam' }) }), D[o] && (0, l.jsx)(t.YB, { children: D[o].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: o, name: o, type: 'text', defaultValue: C, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!D[o] }) })] }), k && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: k, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: k, name: k, ...I(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: b, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: b, name: b, rows: 12, ...I(b, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.fz, { children: (0, l.jsx)(t.lR, { htmlFor: c, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), D[c] && (0, l.jsx)(t.YB, { children: D[c].message }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.Rj, { id: c, name: c, type: 'text' }) })] }), m && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [u, !j && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${m}[]`, value: N[i], id: `${m}-${N[i]}` }), (0, l.jsx)(t.lR, { htmlFor: `${m}-${N[i]}`, children: e })] }, e))] }), f && (0, l.jsxs)(t.LB, { children: [(0, l.jsx)(t.fz, { children: (0, l.jsxs)(t.u4, { children: [w, !S && ' (niet verplicht)'] }) }), (0, l.jsx)(t.JM, { children: 'Meerdere antwoorden mogelijk.' }), z.map((e, i) => (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { name: `${f}[]`, id: `${f}-${i}` }), (0, l.jsx)(t.lR, { htmlFor: `${f}-${i}`, children: e })] }, e))] }), x && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsxs)(t.fz, { children: [(0, l.jsx)(t.lR, { htmlFor: x, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.fz, { children: (0, l.jsx)(t.TM, { id: x, name: x }) })] }), v && (0, l.jsxs)(t.zB, { type: 'text', children: [(0, l.jsx)(t.JM, { id: `${v}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.zB, { type: 'checkbox', children: [(0, l.jsx)(t.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...I(`${v}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!D[`${v}[]`] }), (0, l.jsx)(t.lR, { htmlFor: `${v}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), D[v] && (0, l.jsx)(t.YB, { children: D[v].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(t.e2, { children: (0, l.jsx)(t.$n, { type: 'submit', appearance: 'primary-action-button', children: y || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54109(e, i, n) {
   (n.r(i), n.d(i, { assets: () => o, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"community/sluit-je-aan","title":"Sluit je aan bij onze community \xb7 Community","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","source":"@site/docs/community/sluit-je-aan.mdx","sourceDirName":"community","slug":"/community/sluit-je-aan","permalink":"/community/sluit-je-aan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx","tags":[],"version":"current","frontMatter":{"title":"Sluit je aan bij onze community \xb7 Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sluit je aan","pagination_label":"Sluit je aan","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","keywords":["nl design system"]},"sidebar":"community","previous":{"title":"Community","permalink":"/community"},"next":{"title":"Wie doet mee?","permalink":"/community/wie-doet-mee"}}');
   var s = n(86070),
    a = n(18439),
    r = n(37447);
   const l = { title: 'Sluit je aan bij onze community \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    d = 'Sluit je aan bij onze community',
    o = {},
    c = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function m(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'sluit-je-aan-bij-onze-community', children: 'Sluit je aan bij onze community' }) }), '\n', (0, s.jsxs)(i.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, s.jsx)(i.a, { href: '/project/kernteam/', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, s.jsx)(i.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, s.jsx)(i.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, s.jsx)(i.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, s.jsx)(i.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, s.jsx)(i.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, s.jsxs)(i.ul, { children: ['\n', (0, s.jsx)(i.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communitybijeenkomst.' }), '\n', (0, s.jsx)(i.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, s.jsx)(i.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, s.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, s.jsx)(r.W, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', privacyPolicyId: 'D770JCMyVw', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], disallowedInterestValues: [7], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
  54565(e, i, n) {
   n.d(i, { c: () => s });
   var t = n(30758);
   function s() {
    const [e, i] = (0, t.useState)();
    return ((0, t.useEffect)(() => i(!0), []), e);
   }
  },
 },
]);
