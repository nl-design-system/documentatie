'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22746],
 {
  23119: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => o, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => d, toc: () => m });
   var t = n(52676),
    a = n(40139),
    s = n(82415);
   const r = { title: 'Sluit je aan bij onze community \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    l = 'Sluit je aan bij onze community',
    d = { id: 'community/sluit-je-aan', title: 'Sluit je aan bij onze community \xb7 Community', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', source: '@site/docs/community/sluit-je-aan.mdx', sourceDirName: 'community', slug: '/community/sluit-je-aan', permalink: '/community/sluit-je-aan', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx', tags: [], version: 'current', frontMatter: { title: 'Sluit je aan bij onze community \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] }, sidebar: 'community', previous: { title: 'Community', permalink: '/community' }, next: { title: 'Wie doet mee?', permalink: '/community/wie-doet-mee' } },
    o = {},
    m = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(i.h1, { id: 'sluit-je-aan-bij-onze-community', children: 'Sluit je aan bij onze community' }), '\n', (0, t.jsxs)(i.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, t.jsx)(i.a, { href: '/project/kernteam/', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, t.jsx)(i.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, t.jsx)(i.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, t.jsx)(i.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, t.jsx)(i.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, t.jsx)(i.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, t.jsxs)(i.ul, { children: ['\n', (0, t.jsx)(i.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communitybijeenkomst.' }), '\n', (0, t.jsx)(i.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, t.jsx)(i.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, t.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, t.jsx)(s.A, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', privacyPolicyId: 'D770JCMyVw', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], disallowedInterestValues: [7], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, a.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, i, n) => {
   n.d(i, { A: () => d });
   var t = n(19696),
    a = n(74824),
    s = n(75271),
    r = n(25282),
    l = n(52676);
   const d = (e) => {
    let { listId: i = '', laPostaId: n = '', thanksPage: d = '', emailFieldId: o = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], disallowedInterestValues: p = [], workAreasId: v = '', privacyPolicyId: g = '', language: x, submitText: y = '', talkTitleId: k = '', talkDescriptionId: b = '' } = e;
    const {
      register: w,
      handleSubmit: f,
      formState: { errors: I },
     } = (0, r.cI)(),
     S = (0, s.useRef)(null),
     D = '2' === x?.value,
     { search: _ } = (0, t.TH)(),
     W = new URLSearchParams(_),
     z = W.get('prefillEmail'),
     C = W.get('prefillName'),
     $ =
      !!(u && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let a = 0; a < e.length; a++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(j, p);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: S,
     onSubmit: f(() => {
      S.current.submit();
     }),
     children: [(0, l.jsxs)(a.Wi, { type: 'email', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: `id-${o}`, children: D ? 'Email address ' : 'E-mailadres' }) }), I[o] && (0, l.jsx)(a.w7, { children: I[o].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: z, 'aria-required': 'true', ...w(`${o}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[o] }) })] }), (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: m, children: D ? 'Name' : 'Naam' }) }), I[m] && (0, l.jsx)(a.w7, { children: I[m].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: m, name: m, type: 'text', defaultValue: C, autoComplete: 'given-name', 'aria-required': 'true', ...w(`${m}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[m] }) })] }), k && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: k, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(a.ue, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: k, name: k, ...w(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: b, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(a.ue, { children: D ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: b, name: b, rows: 12, ...w(b, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: c, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[c] && (0, l.jsx)(a.w7, { children: I[c].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(a.pg, { children: [(0, l.jsx)(a.nv, { children: (0, l.jsxs)(a.Qv, { children: [h, ' (niet verplicht)'] }) }), (0, l.jsx)(a.ue, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsxs)(a.Wi, { type: 'checkbox', children: [(0, l.jsx)(a.XZ, { name: `${u}[]`, value: $[i], id: `${u}-${$[i]}` }), (0, l.jsx)(a.lX, { htmlFor: `${u}-${$[i]}`, children: e })] }, e))] }), v && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: v, name: v }) })] }), g && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.ue, { id: `${g}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.Wi, { type: 'checkbox', children: [(0, l.jsx)(a.XZ, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...w(`${g}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${g}[]`] }), (0, l.jsx)(a.lX, { htmlFor: `${g}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[g] && (0, l.jsx)(a.w7, { children: I[g].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(a.hE, { children: (0, l.jsx)(a.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: d }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: i }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
