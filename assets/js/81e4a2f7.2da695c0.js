'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34609],
 {
  18439(e, s, n) {
   n.d(s, { R: () => o, x: () => a });
   var r = n(30758);
   const t = {},
    i = r.createContext(t);
   function o(e) {
    const s = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(i.Provider, { value: s }, e.children));
   }
  },
  79099(e, s, n) {
   (n.r(s), n.d(s, { assets: () => l, contentTitle: () => a, default: () => m, frontMatter: () => o, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"baseline/Archief/2025-09","title":"Baseline september 2025","description":"De softwareversies waarmee we in september 2025 voor NL Design System testen voor Baseline support.","source":"@site/docs/baseline/Archief/2025-09.mdx","sourceDirName":"baseline/Archief","slug":"/baseline/2025-09","permalink":"/baseline/2025-09","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/baseline/Archief/2025-09.mdx","tags":[],"version":"current","sidebarPosition":-202509,"frontMatter":{"title":"Baseline september 2025","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Baseline september 2025","sidebar_position":-202509,"pagination_label":"Baseline september 2025","description":"De softwareversies waarmee we in september 2025 voor NL Design System testen voor Baseline support.","slug":"/baseline/2025-09","keywords":["Accessibility Support Baseline","Baseline","browser support","browserversie"]},"sidebar":"handboek","previous":{"title":"Baseline oktober 2025","permalink":"/baseline/2025-10"},"next":{"title":"Baseline augustus 2025","permalink":"/baseline/2025-08"}}');
   var t = n(86070),
    i = n(18439);
   const o = { title: 'Baseline september 2025', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline september 2025', sidebar_position: -202509, pagination_label: 'Baseline september 2025', description: 'De softwareversies waarmee we in september 2025 voor NL Design System testen voor Baseline support.', slug: '/baseline/2025-09', keywords: ['Accessibility Support Baseline', 'Baseline', 'browser support', 'browserversie'] },
    a = 'NL Design System Baseline: september 2025',
    l = {},
    d = [{ value: 'Software om mee te testen', id: 'software-om-mee-te-testen', level: 2 }];
   function c(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', (0, t.jsx)(s.header, { children: (0, t.jsx)(s.h1, { id: 'nl-design-system-baseline-september-2025', children: 'NL Design System Baseline: september 2025' }) }), '\n', (0, t.jsx)(s.p, { children: 'In de NL Design System Baseline staat de belangrijke software en combinaties van software die wij gebruiken om NL Design System mee te testen. Elke maand maken we een nieuw overzicht.' }), '\n', (0, t.jsxs)(s.p, { children: ['Oudere softwareversies willen we ook ondersteunen. Die zijn niet onderdeel van de standaard test-methode. Lees meer over onze aanpak in de (NL Design System Baseline)[', (0, t.jsx)(s.a, { href: 'ttp://nldesignsystem.nl/baseline/', children: 'http://nldesignsystem.nl/baseline/' }), '].'] }), '\n', (0, t.jsx)(s.h2, { id: 'software-om-mee-te-testen', children: 'Software om mee te testen' }), '\n', (0, t.jsxs)(s.p, { children: ['De volgende software en combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 successcriteria. Niet elke ', (0, t.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' werkt optimaal met elke browser. De genoemde combinaties moeten geen problemen opleveren.'] }), '\n', (0, t.jsx)(s.p, { children: 'Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies, die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.' }), '\n', (0, t.jsx)(s.p, { children: 'De laatste versies van software op 23 september 2025 zijn:' }), '\n', (0, t.jsxs)(s.ul, { children: ['\n', (0, t.jsxs)(s.li, { children: [(0, t.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2025/09/stable-channel-update-for-desktop_17.html', children: 'Chrome 140' }), ' of ', (0, t.jsx)(s.a, { href: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel#version-1400348554-september-5-2025', children: 'Edge 140' })] }), '\n', (0, t.jsxs)(s.li, { children: ['Chrome 140 of Edge 140 met de ', (0, t.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' ', (0, t.jsx)(s.a, { href: 'https://support.freedomscientific.com/Downloads/JAWS/JAWSWhatsNew?version=2025', children: 'JAWS 2025' }), ' op ', (0, t.jsx)(s.a, { href: 'https://www.microsoft.com/en-us/software-download/windows11', children: 'Windows 11' })] }), '\n', (0, t.jsxs)(s.li, { children: ['Chrome 140 of Edge 140 met de screenreader ', (0, t.jsx)(s.a, { href: 'https://www.nvaccess.org/post/nvda-2025-3/', children: 'NVDA 2025.3' }), ' op Windows 11'] }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2025/09/chrome-for-android-update_17.html', children: 'Chrome 140 op Android' }) }), '\n', (0, t.jsxs)(s.li, { children: ['Chrome 140 op Android met de screenreader ', (0, t.jsx)(s.a, { href: 'https://support.google.com/accessibility/android/answer/16561624?hl=en&ref_topic=10601875&sjid=9314725536998589916-EU', children: 'Talkback 16.1' })] }), '\n', (0, t.jsxs)(s.li, { children: ['Chrome 140 op Windows 11 of ', (0, t.jsx)(s.a, { href: 'https://developer.apple.com/documentation/macos-release-notes/macos-26-release-notes', children: 'macOS 26 Tahoe' })] }), '\n', (0, t.jsx)(s.li, { children: (0, t.jsx)(s.a, { href: 'https://www.firefox.com/en-US/firefox/143.0.1/releasenotes/', children: 'Firefox 143' }) }), '\n', (0, t.jsx)(s.li, { children: 'Firefox 143 met de screenreader NVDA 2025.3 op Windows 11' }), '\n', (0, t.jsxs)(s.li, { children: ['Safari ', (0, t.jsx)(s.a, { href: 'https://developer.apple.com/documentation/safari-release-notes/safari-26-release-notes', children: '26' }), ' op ', (0, t.jsx)(s.a, { href: 'https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26-release-notes', children: 'iOS 26' })] }), '\n', (0, t.jsx)(s.li, { children: 'Safari 26 op iOS 26 met de screenreader VoiceOver' }), '\n', (0, t.jsx)(s.li, { children: 'Safari 26 op macOS 26' }), '\n', (0, t.jsx)(s.li, { children: 'Safari 26 op macOS 26 met de screenreader VoiceOver' }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, i.R)(), ...e.components };
    return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
