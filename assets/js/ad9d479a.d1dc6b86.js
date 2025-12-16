'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92430],
 {
  51629: (e, i, n) => {
   n.d(i, { W: () => d });
   var t = n(25557),
    a = n(14537),
    s = n(30758),
    r = n(65198),
    l = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: m = '', interestsId: c = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], disallowedInterestValues: j = [], workAreasId: p = '', privacyPolicyId: v = '', language: g, submitText: x = '', talkTitleId: y = '', talkDescriptionId: k = '' }) => {
    const {
      register: b,
      handleSubmit: f,
      formState: { errors: w },
     } = (0, r.mN)(),
     z = (0, s.useRef)(null),
     S = '2' === g?.value,
     { search: I } = (0, t.zy)(),
     D = new URLSearchParams(I),
     R = D.get('prefillEmail'),
     _ = D.get('prefillName'),
     B =
      !!(c && h.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let a = 0; a < e.length; a++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(h, j);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: z,
     onSubmit: f(() => {
      z.current.submit();
     }),
     children: [(0, l.jsxs)(a.zB, { type: 'email', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: `id-${d}`, children: S ? 'Email address ' : 'E-mailadres' }) }), w[d] && (0, l.jsx)(a.YB, { children: w[d].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: R, 'aria-required': 'true', ...b(`${d}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: S ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[d] }) })] }), (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: o, children: S ? 'Name' : 'Naam' }) }), w[o] && (0, l.jsx)(a.YB, { children: w[o].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: o, name: o, type: 'text', defaultValue: _, autoComplete: 'given-name', 'aria-required': 'true', ...b(`${o}`, { required: { value: !0, message: S ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[o] }) })] }), y && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: y, children: S ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(a.JM, { children: S ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: y, name: y, ...b(y, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: k, children: S ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(a.JM, { children: S ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: k, name: k, rows: 12, ...b(k, { required: { value: !0, message: S ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.fz, { children: (0, l.jsx)(a.lR, { htmlFor: m, children: S ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[m] && (0, l.jsx)(a.YB, { children: w[m].message }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.Rj, { id: m, name: m, type: 'text' }) })] }), c && (0, l.jsxs)(a.LB, { children: [(0, l.jsx)(a.fz, { children: (0, l.jsxs)(a.u4, { children: [u, ' (niet verplicht)'] }) }), (0, l.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, i) => (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { name: `${c}[]`, value: B[i], id: `${c}-${B[i]}` }), (0, l.jsx)(a.lR, { htmlFor: `${c}-${B[i]}`, children: e })] }, e))] }), p && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsxs)(a.fz, { children: [(0, l.jsx)(a.lR, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.fz, { children: (0, l.jsx)(a.TM, { id: p, name: p }) })] }), v && (0, l.jsxs)(a.zB, { type: 'text', children: [(0, l.jsx)(a.JM, { id: `${v}-description`, children: S ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.zB, { type: 'checkbox', children: [(0, l.jsx)(a.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...b(`${v}[]`, { required: { value: !0, message: S ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${v}[]`] }), (0, l.jsx)(a.lR, { htmlFor: `${v}-1`, children: S ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[v] && (0, l.jsx)(a.YB, { children: w[v].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(a.e2, { children: (0, l.jsx)(a.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (S ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  54109: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => o, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => m });
   const t = JSON.parse('{"id":"community/sluit-je-aan","title":"Sluit je aan bij onze community \xb7 Community","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","source":"@site/docs/community/sluit-je-aan.mdx","sourceDirName":"community","slug":"/community/sluit-je-aan","permalink":"/community/sluit-je-aan","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx","tags":[],"version":"current","frontMatter":{"title":"Sluit je aan bij onze community \xb7 Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sluit je aan","pagination_label":"Sluit je aan","description":"Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.","keywords":["nl design system"]},"sidebar":"community","previous":{"title":"Community","permalink":"/community"},"next":{"title":"Wie doet mee?","permalink":"/community/wie-doet-mee"}}');
   var a = n(86070),
    s = n(85248),
    r = n(51629);
   const l = { title: 'Sluit je aan bij onze community \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    d = 'Sluit je aan bij onze community',
    o = {},
    m = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(i.header, { children: (0, a.jsx)(i.h1, { id: 'sluit-je-aan-bij-onze-community', children: 'Sluit je aan bij onze community' }) }), '\n', (0, a.jsxs)(i.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, a.jsx)(i.a, { href: '/project/kernteam/', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, a.jsx)(i.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, a.jsx)(i.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, a.jsx)(i.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, a.jsx)(i.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, a.jsx)(i.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, a.jsxs)(i.ul, { children: ['\n', (0, a.jsx)(i.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communitybijeenkomst.' }), '\n', (0, a.jsx)(i.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, a.jsx)(i.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, a.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, a.jsx)(r.W, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', privacyPolicyId: 'D770JCMyVw', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], disallowedInterestValues: [7], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, s.R)(), ...e.components };
    return i ? (0, a.jsx)(i, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
