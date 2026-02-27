'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [85905],
 {
  18439(e, s, n) {
   n.d(s, { R: () => o, x: () => a });
   var r = n(30758);
   const i = {},
    t = r.createContext(i);
   function o(e) {
    const s = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(t.Provider, { value: s }, e.children));
   }
  },
  56456(e, s, n) {
   (n.r(s), n.d(s, { assets: () => l, contentTitle: () => a, default: () => h, frontMatter: () => o, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"baseline/2026-02","title":"Baseline februari 2026","description":"De softwareversies waarmee we in februari 2026 voor NL Design System testen voor Baseline support.","source":"@site/docs/baseline/2026-02.mdx","sourceDirName":"baseline","slug":"/baseline/2026-02","permalink":"/baseline/2026-02","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/baseline/2026-02.mdx","tags":[],"version":"current","sidebarPosition":-202602,"frontMatter":{"title":"Baseline februari 2026","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Baseline februari 2026","sidebar_position":-202602,"pagination_label":"Baseline februari 2026","description":"De softwareversies waarmee we in februari 2026 voor NL Design System testen voor Baseline support.","slug":"/baseline/2026-02","keywords":["Accessibility Support Baseline","Baseline","browser support","browserversie"]},"sidebar":"handboek","previous":{"title":"Baseline","permalink":"/baseline/"},"next":{"title":"Baseline december 2025","permalink":"/baseline/2025-12"}}');
   var i = n(86070),
    t = n(18439);
   const o = { title: 'Baseline februari 2026', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline februari 2026', sidebar_position: -202602, pagination_label: 'Baseline februari 2026', description: 'De softwareversies waarmee we in februari 2026 voor NL Design System testen voor Baseline support.', slug: '/baseline/2026-02', keywords: ['Accessibility Support Baseline', 'Baseline', 'browser support', 'browserversie'] },
    a = 'NL Design System Baseline: februari 2026',
    l = {},
    d = [{ value: 'Software om mee te testen', id: 'software-om-mee-te-testen', level: 2 }];
   function c(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(s.header, { children: (0, i.jsx)(s.h1, { id: 'nl-design-system-baseline-februari-2026', children: 'NL Design System Baseline: februari 2026' }) }), '\n', (0, i.jsx)(s.p, { children: 'In de NL Design System Baseline staat de belangrijke software en combinaties van software die wij gebruiken om NL Design System mee te testen. Elke maand maken we een nieuw overzicht.' }), '\n', (0, i.jsxs)(s.p, { children: ['Oudere softwareversies willen we ook ondersteunen. Die zijn niet onderdeel van de standaard test-methode. Lees meer over onze aanpak in de ', (0, i.jsx)(s.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, i.jsx)(s.h2, { id: 'software-om-mee-te-testen', children: 'Software om mee te testen' }), '\n', (0, i.jsxs)(s.p, { children: ['De volgende software en combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 succescriteria. Niet elke ', (0, i.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' werkt optimaal met elke browser. De genoemde combinaties moeten geen problemen opleveren.'] }), '\n', (0, i.jsx)(s.p, { children: 'Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies, die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.' }), '\n', (0, i.jsx)(s.p, { children: 'De laatste versies van software op 27 februari zijn:' }), '\n', (0, i.jsxs)(s.ul, { children: ['\n', (0, i.jsxs)(s.li, { children: [(0, i.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_23.html', children: 'Chrome 145' }), ' of ', (0, i.jsx)(s.a, { href: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel#version-1450380058-february-14-2026-stable', children: 'Edge 145' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 145 of Edge 145 met de ', (0, i.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' ', (0, i.jsx)(s.a, { href: 'https://support.freedomscientific.com/Downloads/JAWS/JAWSWhatsNew', children: 'JAWS 2026' }), ' op ', (0, i.jsx)(s.a, { href: 'https://www.microsoft.com/en-us/software-download/windows11', children: 'Windows 11' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 145 of Edge 145 met de screenreader ', (0, i.jsx)(s.a, { href: 'https://www.nvaccess.org/post/nvda-2025-3-3/', children: 'NVDA 2025.3.3' }), ' op Windows 11'] }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2026/02/chrome-for-android-update_23.html', children: 'Chrome 145 op Android' }) }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 145 op Android met de screenreader ', (0, i.jsx)(s.a, { href: 'https://support.google.com/accessibility/android/answer/16800105?hl=en&ref_topic=10601875&sjid=16744481826491229310-EU#', children: 'Talkback 16.2' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 145 op Windows 11 of ', (0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/macos-release-notes/macos-26_3-release-notes', children: 'macOS 26.3 Tahoe' })] }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: 'https://www.firefox.com/en-US/firefox/148.0/releasenotes/', children: 'Firefox 148' }) }), '\n', (0, i.jsx)(s.li, { children: 'Firefox 148 met de screenreader NVDA 2025.3.3 op Windows 11' }), '\n', (0, i.jsxs)(s.li, { children: [(0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/safari-release-notes/safari-26_3-release-notes', children: 'Safari 26.3' }), ' op ', (0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26_3-release-notes', children: 'iOS 26.3' })] }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.3 op iOS 26.3 met de screenreader VoiceOver' }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.3 op macOS 26.3' }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.3 op macOS 26.3 met de screenreader VoiceOver' }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, t.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
