'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [20360],
 {
  33416: (e, s, i) => {
   i.r(s), i.d(s, { assets: () => d, contentTitle: () => l, default: () => h, frontMatter: () => a, metadata: () => o, toc: () => c });
   var n = i(52676),
    t = i(40139),
    r = i(82415);
   const a = { title: 'Sprekers gezocht \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sprekers gezocht', pagination_label: 'Sprekers gezocht', slug: '/events/design-systems-week/sessie-voorstellen', displayed_sidebar: 'community' },
    l = 'Sprekers gezocht voor de Design Systems Week 2025',
    o = { id: 'community/events/design-systems-week/sessie-voorstellen', title: 'Sprekers gezocht \xb7 Design Systems Week', description: 'Van 27 t/m 31 oktober 2025 organiseren we opnieuw een week vol sessies over design systems. Een week waarin we ervaringen uitwisselen, laten zien wat werkt in de praktijk en samen leren over ontwerp, code, richtlijnen en samenwerking.', source: '@site/docs/community/events/design-systems-week/sessie-voorstellen.mdx', sourceDirName: 'community/events/design-systems-week', slug: '/events/design-systems-week/sessie-voorstellen', permalink: '/events/design-systems-week/sessie-voorstellen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/sessie-voorstellen.mdx', tags: [], version: 'current', frontMatter: { title: 'Sprekers gezocht \xb7 Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sprekers gezocht', pagination_label: 'Sprekers gezocht', slug: '/events/design-systems-week/sessie-voorstellen', displayed_sidebar: 'community' }, sidebar: 'community' },
    d = {},
    c = [{ value: 'Meld jouw voorstel aan via dit formulier.', id: 'meld-jouw-voorstel-aan-via-dit-formulier', level: 2 }];
   function m(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(s.h1, { id: 'sprekers-gezocht-voor-de-design-systems-week-2025', children: 'Sprekers gezocht voor de Design Systems Week 2025' }), '\n', (0, n.jsx)(s.p, { children: 'Van 27 t/m 31 oktober 2025 organiseren we opnieuw een week vol sessies over design systems. Een week waarin we ervaringen uitwisselen, laten zien wat werkt in de praktijk en samen leren over ontwerp, code, richtlijnen en samenwerking.' }), '\n', (0, n.jsx)(s.p, { children: 'Werk je als ontwerper, ontwikkelaar of contentmaker met een design system? Of heb je een mooi idee om te spreken over het belang van een toegankelijk design system? Dan is de Design Systems Week een mooi moment om kennis te delen met vakgenoten.' }), '\n', (0, n.jsx)(s.h2, { id: 'meld-jouw-voorstel-aan-via-dit-formulier', children: 'Meld jouw voorstel aan via dit formulier.' }), '\n', (0, n.jsx)(r.A, { listId: 'k5thcm7i86', emailFieldId: 'ieVxMqAsNc', firstNameFieldId: 'RH0bMSWloq', talkTitleId: '5DRurXNffg', talkDescriptionId: 'tT7iO8Fz3h', privacyPolicyId: '0Tw7Elhcrt', orgId: 'kdCftAyRgW', laPostaId: 'iyihtuzpiq', language: { id: 'x95hFD1RX5', value: '1' } }), '\n', (0, n.jsx)(s.hr, {}), '\n', (0, n.jsx)(s.p, { children: "Dit is het 5e jaar dat NL Design System de Design Systems Week organiseert.\nMeer weten over eerdere edities? Kijk dan de video's van voorgaande jaren terug!" }), '\n', (0, n.jsxs)(s.ul, { children: ['\n', (0, n.jsx)(s.li, { children: (0, n.jsx)(s.a, { href: '/events/design-systems-week-2024/programma', children: 'Design Systems Week 2024' }) }), '\n', (0, n.jsx)(s.li, { children: (0, n.jsx)(s.a, { href: '/events/design-systems-week-2023/programma', children: 'Design Systems Week 2023' }) }), '\n', (0, n.jsx)(s.li, { children: (0, n.jsx)(s.a, { href: '/events/design-systems-week-2022', children: 'Design Systems Week 2022' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(m, { ...e }) }) : m(e);
   }
  },
  82415: (e, s, i) => {
   i.d(s, { A: () => o });
   var n = i(87573),
    t = i(41115),
    r = i(75271),
    a = i(25282),
    l = i(52676);
   const o = (e) => {
    let { listId: s = '', laPostaId: i = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: m = '', interestsId: h = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: v = [], workAreasId: g = '', privacyPolicyId: j = '', language: x, submitText: y = '', talkTitleId: k = '', talkDescriptionId: w = '' } = e;
    const {
      register: f,
      handleSubmit: b,
      formState: { errors: S },
     } = (0, a.cI)(),
     D = (0, r.useRef)(null),
     W = '2' === x?.value,
     { search: I } = (0, n.TH)(),
     _ = new URLSearchParams(I),
     z = _.get('prefillEmail'),
     F = _.get('prefillName'),
     $ =
      !!(h && p.length > 0) &&
      ((e, s) => {
       const i = [];
       let n = 1;
       for (let t = 0; t < e.length; t++) {
        for (; s.includes(n); ) n++;
        i.push(n), n++;
       }
       return i;
      })(p, v);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: D,
     onSubmit: b(() => {
      D.current.submit();
     }),
     children: [(0, l.jsxs)(t.Wi, { type: 'email', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: `id-${d}`, children: W ? 'Email address ' : 'E-mailadres' }) }), S[d] && (0, l.jsx)(t.w7, { children: S[d].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: z, 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: W ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!S[d] }) })] }), (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: c, children: W ? 'Name' : 'Naam' }) }), S[c] && (0, l.jsx)(t.w7, { children: S[c].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: c, name: c, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${c}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!S[c] }) })] }), k && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: k, children: W ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(t.ue, { children: W ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: k, name: k, ...f(k, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), w && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: w, children: W ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(t.ue, { children: W ? 'Short description. What is it about?' : 'Korte beschrijving. Waar gaat het over?' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: w, name: w, rows: 12, maxLength: 250, ...f(w, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), m && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.nv, { children: (0, l.jsx)(t.lX, { htmlFor: m, children: W ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), S[m] && (0, l.jsx)(t.w7, { children: S[m].message }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.fE, { id: m, name: m, type: 'text' }) })] }), h && (0, l.jsxs)(t.pg, { children: [(0, l.jsxs)(t.Qv, { children: [u, ' (niet verplicht)'] }), (0, l.jsx)(t.ue, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, s) => (0, l.jsx)(t.Wi, { type: 'checkbox', children: (0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.XZ, { name: `${h}[]`, value: $[s], id: `${h}-${$[s]}` }), (0, l.jsx)(t.lX, { htmlFor: `${h}-${$[s]}`, children: e })] }) }, e))] }), g && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsxs)(t.nv, { children: [(0, l.jsx)(t.lX, { htmlFor: g, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(t.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(t.nv, { children: (0, l.jsx)(t.gx, { id: g, name: g }) })] }), j && (0, l.jsxs)(t.Wi, { type: 'text', children: [(0, l.jsx)(t.ue, { id: `${j}-description`, children: W ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(t.Wi, { type: 'checkbox', children: [(0, l.jsx)(t.XZ, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...f(`${j}[]`, { required: { value: !0, message: W ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!S[`${j}[]`] }), (0, l.jsx)(t.lX, { htmlFor: `${j}-1`, children: W ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), S[j] && (0, l.jsx)(t.w7, { children: S[j].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(t.hE, { children: (0, l.jsx)(t.zx, { type: 'submit', appearance: 'primary-action-button', children: y || (W ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: s }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  40139: (e, s, i) => {
   i.d(s, { Z: () => l, a: () => a });
   var n = i(75271);
   const t = {},
    r = n.createContext(t);
   function a(e) {
    const s = n.useContext(r);
    return n.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function l(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), n.createElement(r.Provider, { value: s }, e.children);
   }
  },
 },
]);
