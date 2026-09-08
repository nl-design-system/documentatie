'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [49076],
 {
  18439(e, n, r) {
   r.d(n, { R: () => t, x: () => a });
   var i = r(30758);
   const s = {},
    o = i.createContext(s);
   function t(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, r) {
   function i(e, n) {
    if (null == e) return {};
    var r,
     i,
     s = (function (e, n) {
      if (null == e) return {};
      var r = {};
      for (var i in e)
       if ({}.hasOwnProperty.call(e, i)) {
        if (-1 !== n.indexOf(i)) continue;
        r[i] = e[i];
       }
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (i = 0; i < o.length; i++) ((r = o[i]), -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
    }
    return s;
   }
   r.d(n, { A: () => i });
  },
  48171(e, n, r) {
   function i(e) {
    return (
     (i =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     i(e)
    );
   }
   function s(e) {
    var n = (function (e, n) {
     if ('object' != i(e) || !e) return e;
     var r = e[Symbol.toPrimitive];
     if (void 0 !== r) {
      var s = r.call(e, n || 'default');
      if ('object' != i(s)) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == i(n) ? n : n + '';
   }
   function o(e, n, r) {
    return ((n = s(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e);
   }
   r.d(n, { A: () => o });
  },
  59292(e, n, r) {
   r.d(n, { f: () => i.f });
   var i = r(71544);
  },
  69048(e, n, r) {
   (r.r(n), r.d(n, { assets: () => c, contentTitle: () => d, default: () => u, frontMatter: () => l, metadata: () => i, toc: () => h }));
   const i = JSON.parse('{"id":"baseline/index","title":"Baseline","description":"In de NL Design System Baseline wordt beschreven welke besturingssystemen, browsers en hulpapparatuur worden ondersteund.","source":"@site/docs/baseline/index.mdx","sourceDirName":"baseline","slug":"/baseline/","permalink":"/baseline/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/baseline/index.mdx","tags":[],"version":"current","sidebarPosition":-999999,"frontMatter":{"title":"Baseline","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Baseline","sidebar_position":-999999,"navigation_order":-999999,"pagination_label":"Baseline","description":"In de NL Design System Baseline wordt beschreven welke besturingssystemen, browsers en hulpapparatuur worden ondersteund.","keywords":["Accessibility Support Baseline","Baseline","browser support","browserversie","Can I Use","WCAG"]},"sidebar":"handboek","previous":{"title":"Beheren van een repository","permalink":"/handboek/organisatie/beheren-van-een-community-repository"},"next":{"title":"Baseline","permalink":"/baseline/"}}');
   var s = r(86070),
    o = r(18439),
    t = r(95857),
    a = r(59292);
   const l = { title: 'Baseline', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline', sidebar_position: -999999, navigation_order: -999999, pagination_label: 'Baseline', description: 'In de NL Design System Baseline wordt beschreven welke besturingssystemen, browsers en hulpapparatuur worden ondersteund.', keywords: ['Accessibility Support Baseline', 'Baseline', 'browser support', 'browserversie', 'Can I Use', 'WCAG'] },
    d = 'NL Design System Baseline',
    c = {},
    h = [
     { value: 'Technologie met brede ondersteuning', id: 'technologie-met-brede-ondersteuning', level: 2 },
     { value: 'Software om mee te testen', id: 'software-om-mee-te-testen', level: 2 },
     { value: 'Testen voor toegankelijkheid', id: 'testen-voor-toegankelijkheid', level: 2 },
     { value: '100% toegankelijk', id: '100-toegankelijk', level: 2 },
     { value: 'Instellingen voor persoonlijke voorkeuren', id: 'instellingen-voor-persoonlijke-voorkeuren', level: 2 },
     { value: 'Forced colors mode', id: 'forced-colors-mode', level: 3 },
     { value: 'Momentopname', id: 'momentopname', level: 2 },
     { value: 'Voor wie is de Baseline bedoeld?', id: 'voor-wie-is-de-baseline-bedoeld', level: 2 },
     { value: 'Hall of Fame', id: 'hall-of-fame', level: 2 },
     { value: 'Community', id: 'community', level: 3 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'nl-design-system-baseline', children: 'NL Design System Baseline' }) }), '\n', (0, s.jsx)(a.f, { purpose: 'lead', children: (0, s.jsx)(n.p, { children: 'Wij maken technologie voor gebruikers, daarom bepalen we hier welke browsers en hulpmiddelen zoveel gebruikt worden\ndat je moet zorgen dat het er goed mee werkt.' }) }), '\n', (0, s.jsx)(n.p, { children: "Met deze Baseline stellen we vast welke technologie\xebn NL Design System ondersteunt. Het kernteam gebruikt de Baseline om mee te testen tijdens het ontwikkelen van de Candidate en Hall of Fame componenten en webpagina's." }), '\n', (0, s.jsx)(n.p, { children: 'We raden gebruik van de Baseline voor ontwikkelingen met NL Design System aan, maar het kernteam stelt deze niet verplicht voor Community bijdragen. Organisaties kunnen kiezen deze Baseline bij opdrachten of aanbestedingen wel verplicht te maken.' }), '\n', (0, s.jsx)(n.p, { children: 'Als je een developer of tester bent, dan kun je de NL Design System Baseline gebruiken om vooraf te beslissen welke technologie je gebruikt, en achteraf gebruiken om een testplan mee uit te voeren.' }), '\n', (0, s.jsx)(n.h2, { id: 'technologie-met-brede-ondersteuning', children: 'Technologie met brede ondersteuning' }), '\n', (0, s.jsxs)(n.p, { children: ['De populaire website ', (0, s.jsx)(n.a, { href: 'https://www.caniuse.com/', children: 'Can I Use' }), ' biedt een gebruiksvriendelijk overzicht of de browserondersteuning voldoende is. Als een feature de Data Badge heeft met "', (0, s.jsx)('span', { lang: 'en', children: 'Widely available across major browsers' }), '", dan kun mag je de feature gebruiken.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Features met de Data Badge "', (0, s.jsx)('span', { lang: 'en', children: 'Newly available across major browsers' }), '" moet je alleen gebruiken als je ook een goed werkend alternatief biedt met Baseline ondersteuning.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We gebruiken Can I Use omdat ze een goed systeem hebben. Op basis van ', (0, s.jsx)(n.a, { href: 'https://rumarchive.com/insights/#ua-marketshare', children: 'statistieken in de RUM Archive' }), ' wordt bepaald welke browserversies wereldwijd veel gebruikt worden. Per technologie is bekend in welke browserversie de ondersteuning begint. Met de gecombineerde informatie kun je weten of browserondersteuning voldoende in browsersversies die tussen 30 maanden geleden en nu zijn gepubliceerd. Dit is wat Can I Use doet.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Bijvoorbeeld: ', (0, s.jsx)(n.a, { href: 'https://caniuse.com/css-grid', children: 'CSS Grid Layout' }), ' wordt goed ondersteund en daarom gebruiken we ', (0, s.jsx)(n.code, { children: 'display: grid' }), '. Maar ', (0, s.jsx)(n.a, { href: 'https://caniuse.com/css-subgrid', children: 'CSS Subgrid' }), ' is eind 2024 nog gemarkeerd als "', (0, s.jsx)('span', { lang: 'en', children: 'Newly available across major browsers' }), '" en daarom gebruiken we CSS Subgrid nog niet.'] }), '\n', (0, s.jsx)(n.h2, { id: 'software-om-mee-te-testen', children: 'Software om mee te testen' }), '\n', (0, s.jsxs)(n.p, { children: ['De volgende combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 succescriteria. Gebruik de laatste versie van alle software. Niet elke ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' werkt optimaal met elke browser. Het gebruik van een combinatie die niet genoemd wordt kan problemen opleveren'] }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Chrome met de ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' ', (0, s.jsx)(n.a, { href: 'https://www.freedomscientific.com/products/software/jaws/', children: 'JAWS' }), ' op Windows'] }), '\n', (0, s.jsxs)(n.li, { children: ['Chrome met de screenreader ', (0, s.jsx)(n.a, { href: 'https://www.nvaccess.org', children: 'NVDA' }), ' op Windows'] }), '\n', (0, s.jsx)(n.li, { children: 'Chrome op Android' }), '\n', (0, s.jsxs)(n.li, { children: ['Chrome op Android met de screenreader ', (0, s.jsx)(n.a, { href: 'https://support.google.com/accessibility/android/answer/6007100?hl%3Den', children: 'Talkback' })] }), '\n', (0, s.jsx)(n.li, { children: 'Chrome op Windows of macOS' }), '\n', (0, s.jsx)(n.li, { children: 'Firefox' }), '\n', (0, s.jsx)(n.li, { children: 'Firefox met de screenreader NVDA op Windows' }), '\n', (0, s.jsx)(n.li, { children: 'Safari op iOS' }), '\n', (0, s.jsxs)(n.li, { children: ['Safari op iOS met de screenreader ', (0, s.jsx)(n.a, { href: 'https://support.apple.com/en-gb/guide/iphone/iph3e2e415f/ios', children: 'VoiceOver' })] }), '\n', (0, s.jsx)(n.li, { children: 'Safari op macOS' }), '\n', (0, s.jsxs)(n.li, { children: ['Safari op macOS met de screenreader ', (0, s.jsx)(n.a, { href: 'https://support.apple.com/en-gb/guide/voiceover/welcome/mac', children: 'VoiceOver' })] }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.' }), '\n', (0, s.jsx)(n.h2, { id: 'testen-voor-toegankelijkheid', children: 'Testen voor toegankelijkheid' }), '\n', (0, s.jsxs)(n.p, { children: ['Om vast te kunnen stellen of iets toegankelijk is en voldoet volgens WCAG, mag je zelf kiezen welke technologie je ondersteunt: de ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG-EM/#step1c', children: 'Accessibility Support Baseline' }), '. Voor NL Design System is dat vastgelegd op deze pagina.'] }), '\n', (0, s.jsx)(n.p, { children: 'Het toegankelijkheidsdoel van NL Design System is WCAG 2.2 Niveau AA. Daarmee voldoen we aan de wettelijke eis voor WCAG 2.1, plus enkele nieuwe succescriteria.' }), '\n', (0, s.jsxs)(n.p, { children: ['Als je een ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG-EM/', children: 'WCAG-EM toegankelijkheidsonderzoek doet' }), ', test dan met elke combinatie van software in de lijst.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt de NL Design System Baseline noemen bij je onderzoeksrapport onder "basisniveau van toegankelijkheidsondersteuning". Je kunt verwijzen naar de Baseline momentopname onder ', (0, s.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/toegankelijkheidsverklaring/controle', children: '"bij het onderzoek gebruikte browsers en softwareprogramma\'s"' }), '.'] }), '\n', (0, s.jsx)(n.h2, { id: '100-toegankelijk', children: '100% toegankelijk' }), '\n', (0, s.jsx)(n.p, { children: 'Het uitgangspunt van NL Design System is toegankelijk en gebruiksvriendelijk ontwerpen en ontwikkelen. De standaardversie van een website moet helemaal toegankelijk zijn.\nToegankelijke alternatieven voor niet-toegankelijke kleuren, teksten en techniek zijn daarom geen onderdeel van de NL Design System baseline.' }), '\n', (0, s.jsx)(n.p, { children: 'Functies zoals een hoogcontrastknop of toegankelijkheidswidget zijn alleen toegestaan wanneer de standaardversie toegankelijk is en je op een toegankelijke manier terug kan naar de standaardversie.' }), '\n', (0, s.jsx)(n.h2, { id: 'instellingen-voor-persoonlijke-voorkeuren', children: 'Instellingen voor persoonlijke voorkeuren' }), '\n', (0, s.jsx)(n.p, { children: 'Besturingssystemen en browsers bieden verschillende opties om persoonlijke voorkeuren voor toegankelijkheid in te stellen.' }), '\n', (0, s.jsx)(n.p, { children: 'Test of je website de volgende instellingen ondersteunt:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.code, { children: 'forced-colors: active' }), ', oftewel: forced colors mode'] }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.code, { children: 'prefers-reduced-motion: reduce' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.code, { children: 'prefers-reduced-transparency: reduce' }) }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Daarnaast zijn er nog een aantal instellingen die optioneel kunnen worden ondersteund:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.code, { children: 'prefers-color-scheme: dark' }), ', oftewel: dark mode'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.code, { children: 'prefers-contrast: more' }), ', oftewel: high contrast mode'] }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'forced-colors-mode', children: 'Forced colors mode' }), '\n', (0, s.jsxs)(n.p, { children: ['Forced Colors Mode is een toegankelijkheidsfunctie in besturingssystemen zoals Windows. Gebruikers kiezen hiermee een beperkte set aan kleuren om teksten en onderdelen op een pagina beter zichtbaar te maken.\nDe CSS media-feature ', (0, s.jsx)(n.code, { children: 'forced-colors' }), ' detecteert of deze functie actief is en overschrijft de kleuren van de website.'] }), '\n', (0, s.jsx)(n.p, { children: 'De website moet goed werken wanneer forced colors mode actief is. Dat betekent:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'De visuele hi\xebrarchie moet duidelijk blijven, eventueel door gebruik van extra borders.' }), '\n', (0, s.jsx)(n.li, { children: 'Buttons en links zijn herkenbaar aan de kleur, door het gebruik van CSS system colors.' }), '\n', (0, s.jsx)(n.li, { children: 'Disabled buttons, links, formulierelementen en placeholders zijn herkenbaar aan de kleur, door gebruik van CSS system colors.' }), '\n', (0, s.jsx)(n.li, { children: 'SVG-afbeeldingen zoals iconen zijn goed zichtbaar, door gebruik van CSS system colors.' }), '\n', (0, s.jsxs)(n.li, { children: ['Alle tekst is goed leesbaar doordat een CSS system color als achtergrondkleur is ingesteld. Let hierbij in het bijzonder op componenten die overlappen met andere onderdelen op de pagina, zoals:', '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Select Combobox' }), '\n', (0, s.jsx)(n.li, { children: 'Dialog, Alert Dialog en Modal Dialog' }), '\n', (0, s.jsx)(n.li, { children: 'Drawer' }), '\n', (0, s.jsx)(n.li, { children: 'Skip Link' }), '\n', (0, s.jsx)(n.li, { children: 'Toggletip' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'momentopname', children: 'Momentopname' }), '\n', (0, s.jsx)(n.p, { children: 'Technologie verandert elke maand, dus de precieze betekenis van de Baseline verandert. Op de NL Design System website publiceren we periodiek een momentopname van welke softwareversies op dat moment worden bedoeld met de Baseline.' }), '\n', (0, s.jsx)(n.p, { children: 'Maak duidelijke afspraken welke versie van de Baseline je kiest als doel. Er zijn heel veel opties denkbaar, bijvoorbeeld:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Spreek voor een toegankelijkheidsonderzoek af dat de meest recente versies van alle software wordt gebruikt.' }), '\n', (0, s.jsx)(n.li, { children: 'Spreek bij het aanbesteden van software af dat de meest recente Baseline momentopname geldt die beschikbaar is bij de start van de werkzaamheden.' }), '\n'] }), '\n', (0, s.jsxs)(t.K, { appearance: 'info', children: [(0, s.jsx)(n.h2, { id: 'voor-wie-is-de-baseline-bedoeld', children: 'Voor wie is de Baseline bedoeld?' }), (0, s.jsx)(n.p, { children: 'De Baseline is in eerste instantie bedoeld voor ontwikkelingen waarin het kernteam een rol speelt:' }), (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Candidate componenten' }), '\n', (0, s.jsx)(n.li, { children: "Voorbeeld-webpagina's" }), '\n', (0, s.jsx)(n.li, { children: "Toegankelijkheidsonderzoeken naar de NL Design System website en voorbeeld-webpagina's" }), '\n'] }), (0, s.jsx)(n.h2, { id: 'hall-of-fame', children: 'Hall of Fame' }), (0, s.jsx)(n.p, { children: 'Voor Hall of Fame componenten vragen we nog feedback aan stakeholders zoals belangenorganisaties, testers en ontwikkelaars in de Community. Welke software en welke softwareversies zijn belangrijk om op te nemen in de Baseline?' }), (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.a, { href: '/colofon/', children: 'Deel je inzichten met het kernteam' }), ', dat waarderen wij enorm!'] }), (0, s.jsx)(n.h3, { id: 'community', children: 'Community' }), (0, s.jsxs)(n.p, { children: ['De baseline is ', (0, s.jsx)(n.strong, { children: 'niet verplicht' }), ' voor Community componenten en als je met NL Design System werkt.'] }), (0, s.jsx)(n.p, { children: 'Organisaties kunnen natuurlijk wel vrijwillig de NL Design System Baseline vereisen bij het aanbesteden van nieuwe ontwikkelingen en bij toegankelijkheidsonderzoeken, als ze een op zoek zijn naar een goede Accessibility Support Baseline.' })] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
  },
  71544(e, n, r) {
   r.d(n, { f: () => h });
   var i = r(48171),
    s = r(41534),
    o = r(86070),
    t = r(13526),
    a = r(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, i));
    }
    return r;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var r = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(r), !0).forEach(function (n) {
         (0, i.A)(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : d(Object(r)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
   }
   var h = (0, a.forwardRef)(function (e, n) {
    var r = e.children,
     a = e.className,
     d = e.purpose,
     h = (0, s.A)(e, l);
    return (0, o.jsx)('p', c(c({ className: (0, t.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === d), a), ref: n }, h), {}, { children: 'lead' === d ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   h.displayName = 'Paragraph';
  },
  95857(e, n, r) {
   r.d(n, { K: () => l });
   var i = r(86070);
   function s(e) {
    var n,
     r,
     i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var o = e.length;
      for (n = 0; n < o; n++) e[n] && (r = s(e[n])) && (i && (i += ' '), (i += r));
     } else for (r in e) e[r] && (i && (i += ' '), (i += r));
    return i;
   }
   function o() {
    for (var e, n, r = 0, i = '', o = arguments.length; r < o; r++) (e = arguments[r]) && (n = s(e)) && (i && (i += ' '), (i += n));
    return i;
   }
   const t = (0, r(30758).forwardRef)(({ aside: e, children: n, className: r, purpose: s, ...t }, a) => {
    const l = { ...t, ref: a, className: o('utrecht-note', { [`utrecht-note--${s}`]: s }, r) };
    return e ? (0, i.jsx)('aside', { ...l, children: n }) : (0, i.jsx)('section', { role: 'note', ...l, children: n });
   });
   t.displayName = 'Note';
   var a = r(29181);
   const l = globalThis.isAstro ? t : a.K7;
  },
 },
]);
