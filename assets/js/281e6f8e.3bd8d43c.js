'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98218],
 {
  16368: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => d, contentTitle: () => l, default: () => p, frontMatter: () => s, metadata: () => o, toc: () => h });
   var t = n(52676),
    r = n(40139),
    a = n(82415);
   const s = { title: 'Op de hoogte blijven \xb7 Project', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] },
    l = 'Op de hoogte blijven',
    o = { id: 'project/blijf-op-de-hoogte', title: 'Op de hoogte blijven \xb7 Project', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', source: '@site/docs/project/blijf-op-de-hoogte.mdx', sourceDirName: 'project', slug: '/project/blijf-op-de-hoogte', permalink: '/project/blijf-op-de-hoogte', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx', tags: [], version: 'current', frontMatter: { title: 'Op de hoogte blijven \xb7 Project', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] }, sidebar: 'project', previous: { title: 'Kernteam', permalink: '/project/kernteam' }, next: { title: 'Links', permalink: '/project/links' } },
    d = {},
    h = [{ value: 'Nieuwsbrief', id: 'nieuwsbrief', level: 2 }];
   function c(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(i.h1, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }), '\n', (0, t.jsx)(i.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), '\n', (0, t.jsxs)(i.ul, { children: ['\n', (0, t.jsxs)(i.li, { children: [(0, t.jsx)(i.a, { href: '/events/heartbeat/aanmelden/', children: 'Neem deel aan onze Heartbeat-sessies' }), ' of ', (0, t.jsx)(i.a, { href: '/events/heartbeat/', children: 'kijk opgenomen sessies terug' }), '.'] }), '\n', (0, t.jsxs)(i.li, { children: [(0, t.jsx)(i.a, { href: '#nieuwsbrief', children: 'Meld je aan voor onze nieuwsbrief' }), ' (hieronder).'] }), '\n', (0, t.jsxs)(i.li, { children: [(0, t.jsx)(i.a, { href: '/blog/', children: 'Lees ons blog voor uitgebreidere interviews en artikelen' }), '.'] }), '\n', (0, t.jsxs)(i.li, { children: [(0, t.jsx)(i.a, { href: 'https://praatmee.codefor.nl', children: 'Word lid van het #nl-design-system Slack kanaal' }), ' op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n'] }), '\n', (0, t.jsx)(i.h2, { id: 'nieuwsbrief', children: 'Nieuwsbrief' }), '\n', (0, t.jsx)(i.p, { children: 'We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven.' }), '\n', (0, t.jsx)(a.A, { listId: 'ceamfdjtu3', emailFieldId: '2x8bD6GMu5', firstNameFieldId: '40GfQGdmHU', thanksPage: 'https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function p(e = {}) {
    const { wrapper: i } = { ...(0, r.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  82415: (e, i, n) => {
   n.d(i, { A: () => o });
   var t = n(19696),
    r = n(74824),
    a = n(75271),
    s = n(25282),
    l = n(52676);
   const o = (e) => {
    let { listId: i = '', laPostaId: n = '', thanksPage: o = '', emailFieldId: d = '', firstNameFieldId: h = '', orgId: c = '', interestsId: p = '', interestsLegend: u = 'Waar wil je NL Design System voor gebruiken?', interests: j = [], disallowedInterestValues: m = [], workAreasId: v = '', privacyPolicyId: g = '', language: x, submitText: b = '', talkTitleId: f = '', talkDescriptionId: k = '' } = e;
    const {
      register: y,
      handleSubmit: w,
      formState: { errors: I },
     } = (0, s.cI)(),
     _ = (0, a.useRef)(null),
     W = '2' === x?.value,
     { search: D } = (0, t.TH)(),
     N = new URLSearchParams(D),
     $ = N.get('prefillEmail'),
     F = N.get('prefillName'),
     S =
      !!(p && j.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(j, m);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: _,
     onSubmit: w(() => {
      _.current.submit();
     }),
     children: [(0, l.jsxs)(r.Wi, { type: 'email', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: `id-${d}`, children: W ? 'Email address ' : 'E-mailadres' }) }), I[d] && (0, l.jsx)(r.w7, { children: I[d].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: $, 'aria-required': 'true', ...y(`${d}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: W ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!I[d] }) })] }), (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: h, children: W ? 'Name' : 'Naam' }) }), I[h] && (0, l.jsx)(r.w7, { children: I[h].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: h, name: h, type: 'text', defaultValue: F, autoComplete: 'given-name', 'aria-required': 'true', ...y(`${h}`, { required: { value: !0, message: W ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!I[h] }) })] }), f && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.lX, { htmlFor: f, children: W ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(r.ue, { children: W ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: f, name: f, ...y(f, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.lX, { htmlFor: k, children: W ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(r.ue, { children: W ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.gx, { id: k, name: k, rows: 12, ...y(k, { required: { value: !0, message: W ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), c && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.nv, { children: (0, l.jsx)(r.lX, { htmlFor: c, children: W ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), I[c] && (0, l.jsx)(r.w7, { children: I[c].message }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.fE, { id: c, name: c, type: 'text' }) })] }), p && (0, l.jsxs)(r.pg, { children: [(0, l.jsx)(r.nv, { children: (0, l.jsxs)(r.Qv, { children: [u, ' (niet verplicht)'] }) }), (0, l.jsx)(r.ue, { children: 'Meerdere antwoorden mogelijk.' }), j.map((e, i) => (0, l.jsxs)(r.Wi, { type: 'checkbox', children: [(0, l.jsx)(r.XZ, { name: `${p}[]`, value: S[i], id: `${p}-${S[i]}` }), (0, l.jsx)(r.lX, { htmlFor: `${p}-${S[i]}`, children: e })] }, e))] }), v && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsxs)(r.nv, { children: [(0, l.jsx)(r.lX, { htmlFor: v, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(r.ue, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(r.nv, { children: (0, l.jsx)(r.gx, { id: v, name: v }) })] }), g && (0, l.jsxs)(r.Wi, { type: 'text', children: [(0, l.jsx)(r.ue, { id: `${g}-description`, children: W ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(r.Wi, { type: 'checkbox', children: [(0, l.jsx)(r.XZ, { value: '1', id: `${g}-1`, 'aria-describedby': `${g}-description`, 'aria-required': 'true', ...y(`${g}[]`, { required: { value: !0, message: W ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!I[`${g}[]`] }), (0, l.jsx)(r.lX, { htmlFor: `${g}-1`, children: W ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), I[g] && (0, l.jsx)(r.w7, { children: I[g].message })] }), x?.id && (0, l.jsx)('input', { type: 'hidden', name: x.id, value: x.value }), (0, l.jsx)(r.hE, { children: (0, l.jsx)(r.zx, { type: 'submit', appearance: 'primary-action-button', children: b || (W ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: o }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: i }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
 },
]);
