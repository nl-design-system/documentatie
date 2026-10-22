'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [52107],
 {
  7047(e, n, r) {
   r.d(n, { Ay: () => s });
   var i = r(86070),
    t = r(18439);
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => a });
   var i = r(30758);
   const t = {},
    o = i.createContext(t);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, r) {
   r.d(n, { o: () => c });
   var i = r(18439),
    t = r(46447),
    o = r(86070);
   const s = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    a = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    l = (e) => ({ img: ({ src: n, ...r }) => (0, o.jsx)('img', { ...r, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: t = '', components: s = {} }) => (0, o.jsx)(i.x, { components: { ...d(n, r), ...l(t), ...s }, children: e });
  },
  25431(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => o });
   var i = r(86070),
    t = r(18439);
   const o = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  29882(e, n, r) {
   r.d(n, { Ay: () => s });
   var i = r(86070),
    t = r(18439);
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46276(e, n, r) {
   r.d(n, { p: () => o });
   var i = r(13526),
    t = r(86070);
   const o = ({ children: e, className: n, level: r = 1, suffix: o, ...s }) => (0, t.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  61473(e, n, r) {
   r.d(n, { E: () => s });
   var i = r(46447),
    t = r(46276),
    o = r(86070);
   const s = ({ children: e, conformanceLevel: n, ...r }) => (globalThis.isAstro ? null : (0, o.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, o.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e }));
  },
  88275(e, n, r) {
   r.d(n, { Ay: () => s });
   var i = r(86070),
    t = r(18439);
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88547(e, n, r) {
   r.d(n, { L: () => s });
   var i = r(86070);
   function t(e) {
    var n,
     r,
     i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var o = e.length;
      for (n = 0; n < o; n++) e[n] && (r = t(e[n])) && (i && (i += ' '), (i += r));
     } else for (r in e) e[r] && (i && (i += ' '), (i += r));
    return i;
   }
   function o() {
    for (var e, n, r = 0, i = '', o = arguments.length; r < o; r++) (e = arguments[r]) && (n = t(e)) && (i && (i += ' '), (i += n));
    return i;
   }
   const s = (0, r(30758).forwardRef)(({ aside: e, children: n, className: r, purpose: t, ...s }, a) => {
    const l = { ...s, ref: a, className: o('utrecht-note', { [`utrecht-note--${t}`]: t }, r) };
    return e ? (0, i.jsx)('aside', { ...l, children: n }) : (0, i.jsx)('section', { role: 'note', ...l, children: n });
   });
   s.displayName = 'Note';
  },
  93681(e, n, r) {
   r.d(n, { K: () => o });
   var i = r(88547),
    t = r(29181);
   const o = globalThis.isAstro ? i.L : t.K7;
  },
  94268(e, n, r) {
   (r.r(n), r.d(n, { assets: () => v, contentTitle: () => j, default: () => x, frontMatter: () => m, metadata: () => i, toc: () => w }));
   const i = JSON.parse('{"id":"wcag/1.4.07","title":"WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid","description":"Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.","source":"@site/docs/wcag/1.4.07.mdx","sourceDirName":"wcag","slug":"/wcag/1.4.7","permalink":"/wcag/1.4.7","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.07.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid","title_sm":"WCAG 1.4.7: Weinig of geen achtergrondgeluid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.4.7 Weinig of geen achtergrondgeluid","pagination_label":"WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid","description":"Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.","slug":"1.4.7","conformance_level":"Niveau AAA","keywords":["WCAG","AAA","waarneembaar","onderscheidbaar","perceivable","distinguishable","low or no background audio"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.6 Contrast (versterkt)","permalink":"/wcag/1.4.6"},"next":{"title":"WCAG-succescriterium 1.4.8 Visuele presentatie","permalink":"/wcag/1.4.8"}}');
   var t = r(86070),
    o = r(18439),
    s = r(24703),
    a = r(61473),
    l = r(93681),
    d = r(25431),
    c = r(88275),
    h = r(7047),
    g = r(29882);
   function u(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.\nSlechthorende luisteraars kunnen last hebben gesproken tekst te onderscheiden van te harde achtergrondgeluiden of muziek.' }), '\n', (0, t.jsx)(n.p, { children: 'Oplossingen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Voeg geen achtergrondgeluiden of muziek toe.' }), '\n', (0, t.jsx)(n.li, { children: 'Zorg bij de opname dat er weinig achtergrondgeluid te horen is, neem bijvoorbeeld een interview niet af in een drukke fabriekshal.' }), '\n', (0, t.jsx)(n.li, { children: 'Zorg ervoor dat de luisteraar achtergrondgeluiden kan uitzetten.' }), '\n', (0, t.jsx)(n.li, { children: 'Zorg ervoor dat de achtergrondgeluiden ten minste 20 decibel zachter zijn dan de uitgesproken tekst.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: "Er is natuurlijk een uitzondering voor (rap)muziek waarin gesproken wordt door de muziek heen. En ook voor audio-CAPTCHA's waar het geluid expres lastig te verstaan gemaakt wordt. En als het geluid incidenteel is en niet langer dan een of twee seconden duurt." })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const m = { title: 'WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid', title_sm: 'WCAG 1.4.7: Weinig of geen achtergrondgeluid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.7 Weinig of geen achtergrondgeluid', pagination_label: 'WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid', description: 'Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.', slug: '1.4.7', conformance_level: 'Niveau AAA', keywords: ['WCAG', 'AAA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'low or no background audio'] },
    j = void 0,
    v = {},
    w = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Opgelet', id: 'opgelet', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function f(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid' }), '\n', (0, t.jsx)(l.K, { children: (0, t.jsx)(s.o, { omitH1: !0, headingLevel: 3, content: h.Ay }) }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, t.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#low-or-no-background-audio', children: (0, t.jsx)('span', { lang: 'en', children: '1.4.7 Low or No Background Audio' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#low-or-no-background-audio', children: '1.4.7 Weinig of geen achtergrondgeluid' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#low-or-no-background-audio', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.7 Low or No Background Audio' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.7 Low or No Background Audio' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(l.K, { children: (0, t.jsx)(s.o, { omitH1: !0, headingLevel: 3, content: c.Ay }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.o, { omitH1: !0, headingLevel: 3, content: g.Ay })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
  },
 },
]);
