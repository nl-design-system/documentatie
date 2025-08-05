'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [22746],
 {
  47604: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => o, toc: () => m });
   var t = n(52676),
    a = n(40139),
    s = n(82415);
   const r = { title: 'Sluit je aan bij onze community \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] },
    l = 'Sluit je aan bij onze community',
    o = { id: 'community/sluit-je-aan', title: 'Sluit je aan bij onze community \xb7 Community', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', source: '@site/docs/community/sluit-je-aan.mdx', sourceDirName: 'community', slug: '/community/sluit-je-aan', permalink: '/community/sluit-je-aan', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan.mdx', tags: [], version: 'current', frontMatter: { title: 'Sluit je aan bij onze community \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sluit je aan', pagination_label: 'Sluit je aan', description: 'Voor specialisten die aan digitale diensten werken. Gratis en vrijblijvend.', keywords: ['nl design system'] }, sidebar: 'community', previous: { title: 'Community', permalink: '/community' }, next: { title: 'Wie doet mee?', permalink: '/community/wie-doet-mee' } },
    d = {},
    m = [
     { value: 'Voor wie?', id: 'voor-wie', level: 2 },
     { value: 'Aanmelden', id: 'aanmelden', level: 2 },
    ];
   function c(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(i.h1, { id: 'sluit-je-aan-bij-onze-community', children: 'Sluit je aan bij onze community' }), '\n', (0, t.jsxs)(i.p, { children: ['De NL Design System community brengt specialisten bij elkaar, zoals designers, developers, researchers en toegankelijkheidsspecialisten. Samen met het ', (0, t.jsx)(i.a, { href: '/project/kernteam', children: 'kernteam' }), ' verzamelt de community de beste richtlijnen, componenten en voorbeelden om robuuste websites en webapplicaties voor de digitale overheid te bouwen.'] }), '\n', (0, t.jsx)(i.p, { children: 'Op deze pagina kun je je aanmelden voor onze community, gratis en vrijblijvend.' }), '\n', (0, t.jsx)(i.h2, { id: 'voor-wie', children: 'Voor wie?' }), '\n', (0, t.jsx)(i.p, { children: 'Deze community is voor specialisten die werken aan digitale (overheids)diensten en willen samenwerken met anderen.' }), '\n', (0, t.jsx)(i.p, { children: 'Ben je net begonnen of heb je al jaren ervaring? Wil je veel bijdragen of weinig? Misschien eerst vooral meekijken? Iedereen is welkom.' }), '\n', (0, t.jsx)(i.p, { children: 'Voordelen van aanmelden:' }), '\n', (0, t.jsxs)(i.ul, { children: ['\n', (0, t.jsx)(i.li, { children: 'Je kunt makkelijker worden uitgenodigd voor speciale bijeenkomsten, zoals de communitybijeenkomst.' }), '\n', (0, t.jsx)(i.li, { children: 'Het kernteam krijgt een beter beeld van wie er meedoet en met welke interesses.' }), '\n'] }), '\n', (0, t.jsx)(i.h2, { id: 'aanmelden', children: 'Aanmelden' }), '\n', (0, t.jsx)(i.p, { children: 'We gebruiken je e-mailadres om je af en toe te mailen of uit te nodigen voor bijeenkomsten. De andere gegevens geven ons een beeld van de NL Design System community.' }), '\n', '\n', (0, t.jsx)(s.A, { listId: 'tba1xjir6z', emailFieldId: 'T5JEj4xbpn', firstNameFieldId: 'kBqgRi7iqw', orgId: 'OmROkCnDOY', interestsId: 'g1xwvlgA29', privacyPolicyId: 'D770JCMyVw', interests: ['Design', 'Development', 'Management', 'Richtlijnen', 'Componenten', 'Toegankelijkheid', 'Gebruikersonderzoek', 'CMS'], disallowedInterestValues: [7], workAreasId: 'oAPGPtHrUt', thanksPage: 'https://nldesignsystem.nl/community/sluit-je-aan/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, a.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, i, n) => {
   n.d(i, { A: () => o });
   var t = n(87573),
    a = n(41115),
    s = n(75271),
    r = n(25282),
    l = n(52676);
   const o = (e) => {
    let { listId: i = '', laPostaId: n = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: m = '', orgId: c = '', interestsId: u = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], disallowedInterestValues: p = [], workAreasId: v = '', privacyPolicyId: x = '', language: g, submitText: y = '', talkTitleId: k = '', talkDescriptionId: b = '' } = e;
    const {
      register: f,
      handleSubmit: w,
      formState: { errors: I },
     } = (0, r.cI)(),
     S = (0, s.useRef)(null),
     D = '2' === g?.value,
     { search: _ } = (0, t.TH)(),
     z = new URLSearchParams(_),
     C = z.get('prefillEmail'),
     W = z.get('prefillName'),
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
     onSubmit: w(() => {
      S.current.submit();
     }),
     children: [(0, l.jsxs)(a.Wi, { type: 'email', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: `id-${d}`, children: D ? 'Email address ' : 'E-mailadres' }) }), I[d] && (0, l.jsx)(a.w7, { children: I[d].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: C, 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: D ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[d] }) })] }), (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: m, children: D ? 'Name' : 'Naam' }) }), I[m] && (0, l.jsx)(a.w7, { children: I[m].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: m, name: m, type: 'text', defaultValue: W, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${m}`, { required: { value: !0, message: D ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[m] }) })] }), k && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: k, children: D ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(a.ue, { children: D ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: k, name: k, ...f(k, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: b, children: D ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(a.ue, { children: D ? 'Short description. What is it about?' : 'Korte beschrijving. Waar gaat het over?' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: b, name: b, rows: 12, maxLength: 250, ...f(b, { required: { value: !0, message: D ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.nv, { children: (0, l.jsx)(a.lX, { htmlFor: c, children: D ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[c] && (0, l.jsx)(a.w7, { children: I[c].message }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.fE, { id: c, name: c, type: 'text' }) })] }), u && (0, l.jsxs)(a.pg, { children: [(0, l.jsxs)(a.Qv, { children: [h, ' (niet verplicht)'] }), (0, l.jsx)(a.ue, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsx)(a.Wi, { type: 'checkbox', children: (0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.XZ, { name: `${u}[]`, value: $[i], id: `${u}-${$[i]}` }), (0, l.jsx)(a.lX, { htmlFor: `${u}-${$[i]}`, children: e })] }) }, e))] }), v && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsxs)(a.nv, { children: [(0, l.jsx)(a.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(a.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(a.nv, { children: (0, l.jsx)(a.gx, { id: v, name: v }) })] }), x && (0, l.jsxs)(a.Wi, { type: 'text', children: [(0, l.jsx)(a.ue, { id: `${x}-description`, children: D ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(a.Wi, { type: 'checkbox', children: [(0, l.jsx)(a.XZ, { value: '1', id: `${x}-1`, 'aria-describedby': `${x}-description`, 'aria-required': 'true', ...f(`${x}[]`, { required: { value: !0, message: D ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${x}[]`] }), (0, l.jsx)(a.lX, { htmlFor: `${x}-1`, children: D ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[x] && (0, l.jsx)(a.w7, { children: I[x].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(a.hE, { children: (0, l.jsx)(a.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (D ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: i }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, i, n) => {
   n.d(i, { Z: () => l, a: () => r });
   var t = n(75271);
   const a = {},
    s = t.createContext(a);
   function r(e) {
    const i = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function l(e) {
    let i;
    return (i = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(s.Provider, { value: i }, e.children);
   }
  },
 },
]);
