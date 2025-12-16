'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91466],
 {
  51629: (e, i, n) => {
   n.d(i, { W: () => o });
   var t = n(25557),
    r = n(14537),
    a = n(30758),
    s = n(65198),
    l = n(86070);
   const o = ({ listId: e = '', laPostaId: i = '', thanksPage: n = '', emailFieldId: o = '', firstNameFieldId: d = '', orgId: h = '', interestsId: c = '', interestsLegend: j = 'Waar wil je NL Design System voor gebruiken?', interests: p = [], disallowedInterestValues: u = [], workAreasId: m = '', privacyPolicyId: v = '', language: g, submitText: x = '', talkTitleId: b = '', talkDescriptionId: f = '' }) => {
    const {
      register: k,
      handleSubmit: y,
      formState: { errors: w },
     } = (0, s.mN)(),
     z = (0, a.useRef)(null),
     _ = '2' === g?.value,
     { search: I } = (0, t.zy)(),
     D = new URLSearchParams(I),
     R = D.get('prefillEmail'),
     N = D.get('prefillName'),
     S =
      !!(c && p.length > 0) &&
      ((e, i) => {
       const n = [];
       let t = 1;
       for (let r = 0; r < e.length; r++) {
        for (; i.includes(t); ) t++;
        n.push(t), t++;
       }
       return n;
      })(p, u);
    return (0, l.jsxs)('form', {
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: z,
     onSubmit: y(() => {
      z.current.submit();
     }),
     children: [(0, l.jsxs)(r.zB, { type: 'email', children: [(0, l.jsx)(r.fz, { children: (0, l.jsx)(r.lR, { htmlFor: `id-${o}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), w[o] && (0, l.jsx)(r.YB, { children: w[o].message }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: `id-${o}`, name: o, type: 'email', autoComplete: 'email', defaultValue: R, 'aria-required': 'true', ...k(`${o}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!w[o] }) })] }), (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsx)(r.fz, { children: (0, l.jsx)(r.lR, { htmlFor: d, children: _ ? 'Name' : 'Naam' }) }), w[d] && (0, l.jsx)(r.YB, { children: w[d].message }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: d, name: d, type: 'text', defaultValue: N, autoComplete: 'given-name', 'aria-required': 'true', ...k(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!w[d] }) })] }), b && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsxs)(r.fz, { children: [(0, l.jsx)(r.lR, { htmlFor: b, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, l.jsx)(r.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: b, name: b, ...k(b, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), f && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsxs)(r.fz, { children: [(0, l.jsx)(r.lR, { htmlFor: f, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, l.jsx)(r.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.TM, { id: f, name: f, rows: 12, ...k(f, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), h && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsx)(r.fz, { children: (0, l.jsx)(r.lR, { htmlFor: h, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), w[h] && (0, l.jsx)(r.YB, { children: w[h].message }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.Rj, { id: h, name: h, type: 'text' }) })] }), c && (0, l.jsxs)(r.LB, { children: [(0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.u4, { children: [j, ' (niet verplicht)'] }) }), (0, l.jsx)(r.JM, { children: 'Meerdere antwoorden mogelijk.' }), p.map((e, i) => (0, l.jsxs)(r.zB, { type: 'checkbox', children: [(0, l.jsx)(r.Sc, { name: `${c}[]`, value: S[i], id: `${c}-${S[i]}` }), (0, l.jsx)(r.lR, { htmlFor: `${c}-${S[i]}`, children: e })] }, e))] }), m && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsxs)(r.fz, { children: [(0, l.jsx)(r.lR, { htmlFor: m, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, l.jsx)(r.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, l.jsx)(r.fz, { children: (0, l.jsx)(r.TM, { id: m, name: m }) })] }), v && (0, l.jsxs)(r.zB, { type: 'text', children: [(0, l.jsx)(r.JM, { id: `${v}-description`, children: _ ? (0, l.jsxs)('p', { children: ['The ', (0, l.jsx)('a', { href: '/privacy-policy', children: 'privacy policy' }), ' of NL Design System applies to our activities.'] }) : (0, l.jsxs)('p', { children: ['Op onze activiteiten is de ', (0, l.jsx)('a', { href: '/privacyverklaring', children: 'privacyverklaring van NL Design System' }), ' van toepassing.'] }) }), (0, l.jsxs)(r.zB, { type: 'checkbox', children: [(0, l.jsx)(r.Sc, { value: '1', id: `${v}-1`, 'aria-describedby': `${v}-description`, 'aria-required': 'true', ...k(`${v}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!w[`${v}[]`] }), (0, l.jsx)(r.lR, { htmlFor: `${v}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), w[v] && (0, l.jsx)(r.YB, { children: w[v].message })] }), g?.id && (0, l.jsx)('input', { type: 'hidden', name: g.id, value: g.value }), (0, l.jsx)(r.e2, { children: (0, l.jsx)(r.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, l.jsx)('input', { type: 'hidden', name: 'next', value: n }), (0, l.jsx)('input', { type: 'hidden', name: 'a', value: i }), (0, l.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, l.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, l.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only', 'aria-hidden': 'true' })],
    });
   };
  },
  95056: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => d, contentTitle: () => o, default: () => j, frontMatter: () => l, metadata: () => t, toc: () => h });
   const t = JSON.parse('{"id":"project/blijf-op-de-hoogte","title":"Op de hoogte blijven \xb7 Project","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","source":"@site/docs/project/blijf-op-de-hoogte.mdx","sourceDirName":"project","slug":"/project/blijf-op-de-hoogte","permalink":"/project/blijf-op-de-hoogte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/blijf-op-de-hoogte.mdx","tags":[],"version":"current","frontMatter":{"title":"Op de hoogte blijven \xb7 Project","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Op de hoogte blijven","pagination_label":"Op de hoogte blijven","description":"De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.","keywords":["heartbeat","blog","slack"]},"sidebar":"project","previous":{"title":"Kernteam","permalink":"/project/kernteam"},"next":{"title":"Links","permalink":"/project/links"}}');
   var r = n(86070),
    a = n(85248),
    s = n(51629);
   const l = { title: 'Op de hoogte blijven \xb7 Project', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Op de hoogte blijven', pagination_label: 'Op de hoogte blijven', description: 'De verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.', keywords: ['heartbeat', 'blog', 'slack'] },
    o = 'Op de hoogte blijven',
    d = {},
    h = [{ value: 'Nieuwsbrief', id: 'nieuwsbrief', level: 2 }];
   function c(e) {
    const i = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(i.header, { children: (0, r.jsx)(i.h1, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }) }), '\n', (0, r.jsx)(i.p, { children: "Er zijn verschillende manieren om op de hoogte te blijven van wat er in het kernteam of in de community gebeurt.\nDe activiteiten en voortgang van het kernteam zijn voor iedereen te volgen door (vrijblijvend) deel te nemen aan onze 2-wekelijkse Heartbeat-sessies. Tijdens deze laagdrempelige online bijeenkomsten delen we de laatste ontwikkelingen door middel van demo's en voorbeelden." }), '\n', (0, r.jsxs)(i.ul, { children: ['\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '/events/heartbeat/aanmelden/', children: 'Neem deel aan onze Heartbeat-sessies' }), ' of ', (0, r.jsx)(i.a, { href: '/events/heartbeat/', children: 'kijk opgenomen sessies terug' }), '.'] }), '\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '#nieuwsbrief', children: 'Meld je aan voor onze nieuwsbrief' }), ' (hieronder).'] }), '\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: '/blog/', children: 'Lees ons blog voor uitgebreidere interviews en artikelen' }), '.'] }), '\n', (0, r.jsxs)(i.li, { children: [(0, r.jsx)(i.a, { href: 'https://praatmee.codefor.nl', children: 'Word lid van het #nl-design-system Slack kanaal' }), ' op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n'] }), '\n', (0, r.jsx)(i.h2, { id: 'nieuwsbrief', children: 'Nieuwsbrief' }), '\n', (0, r.jsx)(i.p, { children: 'We kunnen je ook per e-mail op de hoogte houden. We zullen je maximaal \xe9\xe9n keer per maand een update sturen, en je kunt je altijd weer uitschrijven.' }), '\n', (0, r.jsx)(s.W, { listId: 'ceamfdjtu3', emailFieldId: '2x8bD6GMu5', firstNameFieldId: '40GfQGdmHU', thanksPage: 'https://nldesignsystem.nl/project/blijf-op-de-hoogte/nieuwsbrief/bedankt', laPostaId: 'iyihtuzpiq' })] });
   }
   function j(e = {}) {
    const { wrapper: i } = { ...(0, a.R)(), ...e.components };
    return i ? (0, r.jsx)(i, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
