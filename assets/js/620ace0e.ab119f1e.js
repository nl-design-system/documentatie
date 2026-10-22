'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2791],
 {
  18439(e, n, r) {
   r.d(n, { R: () => o, x: () => a });
   var t = r(30758);
   const i = {},
    s = t.createContext(i);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, r) {
   r.d(n, { o: () => c });
   var t = r(18439),
    i = r(46447),
    s = r(86070);
   const o = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: t, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return r + t + i;
     }
     return r.toString();
    },
    a = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    l = (e) => ({ img: ({ src: n, ...r }) => (0, s.jsx)('img', { ...r, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: i = '', components: o = {} }) => (0, s.jsx)(t.x, { components: { ...d(n, r), ...l(i), ...o }, children: e });
  },
  25431(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => s });
   var t = r(86070),
    i = r(18439);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  29882(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  31502(e, n, r) {
   (r.r(n), r.d(n, { assets: () => j, contentTitle: () => m, default: () => w, frontMatter: () => g, metadata: () => t, toc: () => v }));
   const t = JSON.parse('{"id":"wcag/1.3.05","title":"WCAG-succescriterium 1.3.5 Identificeer het doel van de input","description":"Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.","source":"@site/docs/wcag/1.3.05.mdx","sourceDirName":"wcag","slug":"/wcag/1.3.5","permalink":"/wcag/1.3.5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.05.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.3.5 Identificeer het doel van de input","title_sm":"WCAG 1.3.5: Identificeer het doel van de input","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.3.5 Identificeer het doel van de input","pagination_label":"WCAG-succescriterium 1.3.5 Identificeer het doel van de input","description":"Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.","slug":"1.3.5","conformance_level":"Niveau AA","keywords":["WCAG","AA","waarneembaar","aanpasbaar","perceivable","adaptable","identify input purpose"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.3.4 Weergavestand","permalink":"/wcag/1.3.4"},"next":{"title":"WCAG-succescriterium 1.3.6 Identificeer het doel","permalink":"/wcag/1.3.6"}}');
   var i = r(86070),
    s = r(18439),
    o = r(24703),
    a = r(61473),
    l = r(93681),
    d = r(25431),
    c = r(88275),
    h = r(29882);
   function p(e) {
    const n = { code: 'code', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg dat de browser (en andere software, zoals een password manager) kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het invoeren makkelijker kan maken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Dit kan door gebruik te maken van het HTML-attribuut ', (0, i.jsx)(n.code, { children: 'autocomplete' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', title_sm: 'WCAG 1.3.5: Identificeer het doel van de input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.5 Identificeer het doel van de input', pagination_label: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', description: 'Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.', slug: '1.3.5', conformance_level: 'Niveau AA', keywords: ['WCAG', 'AA', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'identify input purpose'] },
    m = void 0,
    j = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijn', id: 'gerelateerde-nl-design-system-richtlijn', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function f(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(u, {}), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijn', children: 'Gerelateerde NL Design System-richtlijn' }), '\n', (0, i.jsxs)(n.p, { children: ['Formulieren: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/autocomplete/', children: 'Autocomplete in een formulier' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['WCAG bevat een volledige lijst van ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#input-purposes', children: 'waarden voor autocomplete' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Jules Ernst van 200 OK heeft van deze lijst een ', (0, i.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/', children: 'Nederlandse interpretatie van autocomplete' }), 'gemaakt.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'Axe DevTools' }), ' kan controleren op ongeldige waarden (typefouten) voor autocomplete.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Inspecteer daarna in de gegenereerde HTML-code van de webpagina de invoervelden, bijvoorbeeld met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Controleer of de invoervelden van formulieren een autocomplete-attribuut hebben met een juiste waarde.' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op:' }), ' dit geldt alleen voor invoervelden waarin persoonlijke gegevens worden uitgevraagd en niet voor bijvoorbeeld een formulier om op de website te zoeken.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#identify-input-purpose', children: (0, i.jsx)('span', { lang: 'en', children: '1.3.5 Identify Input Purpose' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#identify-input-purpose', children: '1.3.5 Identificeer het doel van de input' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.5 Identify Input Purpose' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.5 Identify Input Purpose' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(l.K, { children: (0, i.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: c.Ay }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: h.Ay })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
   }
  },
  46276(e, n, r) {
   r.d(n, { p: () => s });
   var t = r(13526),
    i = r(86070);
   const s = ({ children: e, className: n, level: r = 1, suffix: s, ...o }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  61473(e, n, r) {
   r.d(n, { E: () => o });
   var t = r(46447),
    i = r(46276),
    s = r(86070);
   const o = ({ children: e, conformanceLevel: n, ...r }) => (globalThis.isAstro ? null : (0, s.jsx)(i.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e }));
  },
  88275(e, n, r) {
   r.d(n, { Ay: () => o });
   var t = r(86070),
    i = r(18439);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88547(e, n, r) {
   r.d(n, { L: () => o });
   var t = r(86070);
   function i(e) {
    var n,
     r,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var s = e.length;
      for (n = 0; n < s; n++) e[n] && (r = i(e[n])) && (t && (t += ' '), (t += r));
     } else for (r in e) e[r] && (t && (t += ' '), (t += r));
    return t;
   }
   function s() {
    for (var e, n, r = 0, t = '', s = arguments.length; r < s; r++) (e = arguments[r]) && (n = i(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const o = (0, r(30758).forwardRef)(({ aside: e, children: n, className: r, purpose: i, ...o }, a) => {
    const l = { ...o, ref: a, className: s('utrecht-note', { [`utrecht-note--${i}`]: i }, r) };
    return e ? (0, t.jsx)('aside', { ...l, children: n }) : (0, t.jsx)('section', { role: 'note', ...l, children: n });
   });
   o.displayName = 'Note';
  },
  93681(e, n, r) {
   r.d(n, { K: () => s });
   var t = r(88547),
    i = r(29181);
   const s = globalThis.isAstro ? t.L : i.K7;
  },
 },
]);
