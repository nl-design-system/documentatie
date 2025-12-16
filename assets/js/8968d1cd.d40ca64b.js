'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60036],
 {
  51629: (e, i, n) => {
   n.d(i, { W: () => d });
   var a = n(25557),
    s = n(14537),
    t = n(30758),
    l = n(65198),
    r = n(86070);
   const d = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: d = '', firstNameFieldId: o = '', orgId: c = '', interestsId: m = '', interestsLegend: h = 'Waar wil je NL Design System voor gebruiken?', interests: u = [], disallowedInterestValues: g = [], workAreasId: p = '', privacyPolicyId: j = '', language: x, submitText: v = '', talkTitleId: y = '', talkDescriptionId: b = '' }) => {
    const {
      register: f,
      handleSubmit: k,
      formState: { errors: w },
     } = (0, l.mN)(),
     z = (0, t.useRef)(null),
     I = '2' === x?.value,
     { search: R } = (0, a.zy)(),
     S = new URLSearchParams(R),
     D = S.get('prefillEmail'),
     _ = S.get('prefillName'),
     B =
      !!(m && u.length > 0) &&
      ((e, i) => {
       const n = [];
       let a = 1;
       for (let s = 0; s < e.length; s++) {
        for (; i.includes(a); ) a++;
        n.push(a), a++;
       }
       return n;
      })(u, g);
    return (0, r.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: z,
     onSubmit: k(() => {
      z.current.submit();
     }),
     children: [(0, r.jsxs)(s.zB, { type: 'email', children: [(0, r.jsx)(s.fz, { children: (0, r.jsx)(s.lR, { htmlFor: `id-${d}`, children: I ? 'Email address ' : 'E-mailadres' }) }), w[d] && (0, r.jsx)(s.YB, { children: w[d].message }), (0, r.jsx)(s.fz, { children: (0, r.jsx)(s.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: D, 'aria-required': 'true', ...f(`${d}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: I ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[d] }) })] }), (0, r.jsxs)(s.zB, { type: 'text', children: [(0, r.jsx)(s.fz, { children: (0, r.jsx)(s.lR, { htmlFor: o, children: I ? 'Name' : 'Naam' }) }), w[o] && (0, r.jsx)(s.YB, { children: w[o].message }), (0, r.jsx)(s.fz, { children: (0, r.jsx)(s.Rj, { id: o, name: o, type: 'text', defaultValue: _, autoComplete: 'given-name', 'aria-required': 'true', ...f(`${o}`, { required: { value: !0, message: I ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[o] }) })] }), y && (0, r.jsxs)(s.zB, { type: 'text', children: [(0, r.jsxs)(s.fz, { children: [(0, r.jsx)(s.lR, { htmlFor: y, children: I ? 'Title of your talk' : 'Titel van je presentatie' }), (0, r.jsx)(s.JM, { children: I ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, r.jsx)(s.fz, { children: (0, r.jsx)(s.Rj, { id: y, name: y, ...f(y, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), b && (0, r.jsxs)(s.zB, { type: 'text', children: [(0, r.jsxs)(s.fz, { children: [(0, r.jsx)(s.lR, { htmlFor: b, children: I ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, r.jsx)(s.JM, { children: I ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, r.jsx)(s.fz, { children: (0, r.jsx)(s.TM, { id: b, name: b, rows: 12, ...f(b, { required: { value: !0, message: I ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, r.jsxs)(s.zB, { type: 'text', children: [(0, r.jsx)(s.fz, { children: (0, r.jsx)(s.lR, { htmlFor: c, children: I ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[c] && (0, r.jsx)(s.YB, { children: w[c].message }), (0, r.jsx)(s.fz, { children: (0, r.jsx)(s.Rj, { id: c, name: c, type: 'text' }) })] }), m && (0, r.jsxs)(s.LB, { children: [(0, r.jsx)(s.fz, { children: (0, r.jsxs)(s.u4, { children: [h, ' (niet verplicht)'] }) }), (0, r.jsx)(s.JM, { children: 'Meerdere antwoorden mogelijk.' }), u.map((e, i) => (0, r.jsxs)(s.zB, { type: 'checkbox', children: [(0, r.jsx)(s.Sc, { name: `${m}[]`, value: B[i], id: `${m}-${B[i]}` }), (0, r.jsx)(s.lR, { htmlFor: `${m}-${B[i]}`, children: e })] }, e))] }), p && (0, r.jsxs)(s.zB, { type: 'text', children: [(0, r.jsxs)(s.fz, { children: [(0, r.jsx)(s.lR, { htmlFor: p, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, r.jsx)(s.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, r.jsx)(s.fz, { children: (0, r.jsx)(s.TM, { id: p, name: p }) })] }), j && (0, r.jsxs)(s.zB, { type: 'text', children: [(0, r.jsx)(s.JM, { id: `${j}-description`, children: I ? (0, r.jsxs)('p', { children: ['The ', (0, r.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, r.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, r.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, r.jsxs)(s.zB, { type: 'checkbox', children: [(0, r.jsx)(s.Sc, { value: '1', id: `${j}-1`, 'aria-describedby': `${j}-description`, 'aria-required': 'true', ...f(`${j}[]`, { required: { value: !0, message: I ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${j}[]`] }), (0, r.jsx)(s.lR, { htmlFor: `${j}-1`, children: I ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[j] && (0, r.jsx)(s.YB, { children: w[j].message })] }), x?.id && (0, r.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, r.jsx)(s.e2, { children: (0, r.jsx)(s.$n, { type: 'submit', appearance: 'primary-action-button', children: v || (I ? 'Sign up' : 'Aanmelden') }) }), (0, r.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, r.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, r.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, r.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, r.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  75142: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => c, contentTitle: () => o, default: () => u, frontMatter: () => d, metadata: () => a, toc: () => m });
   const a = JSON.parse('{"id":"community/belangenorganisaties/aanmelden","title":"Aanmelden als belangenorganisatie","description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","source":"@site/docs/community/belangenorganisaties/aanmelden.mdx","sourceDirName":"community/belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden","permalink":"/community/belangenorganisaties/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden als belangenorganisatie","hide_title":true,"hide_table_of_contents":false,"description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","sidebar_label":"Belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden"},"sidebar":"community","previous":{"title":"Design Systems Week 2022","permalink":"/events/design-systems-week-2022"},"next":{"title":"Slack","permalink":"/slack/"}}');
   var s = n(86070),
    t = n(85248),
    l = n(51629),
    r = n(68873);
   const d = { title: 'Aanmelden als belangenorganisatie', hide_title: !0, hide_table_of_contents: !1, description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', sidebar_label: 'Belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden' },
    o = 'Meld je aan als belangenorganisatie',
    c = {},
    m = [];
   function h(e) {
    const i = { h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.header, { children: (0, s.jsx)(i.h1, { id: 'meld-je-aan-als-belangenorganisatie', children: 'Meld je aan als belangenorganisatie' }) }), '\n', (0, s.jsx)(r.fz, { lead: !0, children: (0, s.jsx)(i.p, { children: 'NL Design System deelt bouwblokken voor toegankelijke en gebruiksvriendelijke webapplicaties en websites. Voor het\nbest mogelijke resultaat willen we graag samenwerken met ervaringsdeskundigen en belangenorganisaties. Meld je aan als\nje ons wil helpen, en op de hoogte wil blijven!' }) }), '\n', (0, s.jsx)(l.W, { emailFieldId: 'b6Hs0DqOJk', firstNameFieldId: 'LRihfdNWMa', laPostaId: 'iyihtuzpiq', listId: 'okn9gtn1j3', orgId: 'ijDuY9iVT6', privacyPolicyId: 'oP9fdvDSEz', thanksPage: 'https://nldesignsystem.nl/community/belangenorganisaties/aanmelden-bedankt' })] });
   }
   function u(e = {}) {
    const { wrapper: i } = { ...(0, t.R)(), ...e.components };
    return i ? (0, s.jsx)(i, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
