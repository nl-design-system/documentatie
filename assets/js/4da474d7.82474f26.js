'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [17818],
 {
  18439(e, s, n) {
   n.d(s, { R: () => t, x: () => a });
   var r = n(30758);
   const i = {},
    o = r.createContext(i);
   function t(e) {
    const s = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : t(e.components)), r.createElement(o.Provider, { value: s }, e.children));
   }
  },
  19287(e, s, n) {
   (n.r(s), n.d(s, { assets: () => l, contentTitle: () => a, default: () => m, frontMatter: () => t, metadata: () => r, toc: () => d }));
   const r = JSON.parse('{"id":"baseline/Archief/2025-11","title":"Baseline november 2025","description":"De softwareversies waarmee we in november 2025 voor NL Design System testen voor Baseline support.","source":"@site/docs/baseline/Archief/2025-11.mdx","sourceDirName":"baseline/Archief","slug":"/baseline/2025-11","permalink":"/baseline/2025-11","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/baseline/Archief/2025-11.mdx","tags":[],"version":"current","sidebarPosition":-202511,"frontMatter":{"title":"Baseline november 2025","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Baseline november 2025","sidebar_position":-202511,"pagination_label":"Baseline november 2025","description":"De softwareversies waarmee we in november 2025 voor NL Design System testen voor Baseline support.","slug":"/baseline/2025-11","keywords":["Accessibility Support Baseline","Baseline","browser support","browserversie"]},"sidebar":"handboek","previous":{"title":"Baseline december 2025","permalink":"/baseline/2025-12"},"next":{"title":"Baseline oktober 2025","permalink":"/baseline/2025-10"}}');
   var i = n(86070),
    o = n(18439);
   const t = { title: 'Baseline november 2025', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline november 2025', sidebar_position: -202511, pagination_label: 'Baseline november 2025', description: 'De softwareversies waarmee we in november 2025 voor NL Design System testen voor Baseline support.', slug: '/baseline/2025-11', keywords: ['Accessibility Support Baseline', 'Baseline', 'browser support', 'browserversie'] },
    a = 'NL Design System Baseline: november 2025',
    l = {},
    d = [{ value: 'Software om mee te testen', id: 'software-om-mee-te-testen', level: 2 }];
   function c(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(s.header, { children: (0, i.jsx)(s.h1, { id: 'nl-design-system-baseline-november-2025', children: 'NL Design System Baseline: november 2025' }) }), '\n', (0, i.jsx)(s.p, { children: 'In de NL Design System Baseline staat de belangrijke software en combinaties van software die wij gebruiken om NL Design System mee te testen. Elke maand maken we een nieuw overzicht.' }), '\n', (0, i.jsxs)(s.p, { children: ['Oudere softwareversies willen we ook ondersteunen. Die zijn niet onderdeel van de standaard test-methode. Lees meer over onze aanpak in de ', (0, i.jsx)(s.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, i.jsx)(s.h2, { id: 'software-om-mee-te-testen', children: 'Software om mee te testen' }), '\n', (0, i.jsxs)(s.p, { children: ['De volgende software en combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 successcriteria. Niet elke ', (0, i.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' werkt optimaal met elke browser. De genoemde combinaties moeten geen problemen opleveren.'] }), '\n', (0, i.jsx)(s.p, { children: 'Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies, die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.' }), '\n', (0, i.jsx)(s.p, { children: 'De laatste versies van software op 21 november 2025 zijn:' }), '\n', (0, i.jsxs)(s.ul, { children: ['\n', (0, i.jsxs)(s.li, { children: [(0, i.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2025/11/early-stable-update-for-desktop.html', children: 'Chrome 143' }), ' of ', (0, i.jsx)(s.a, { href: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel#version-1420359594-november-20-2025', children: 'Edge 142' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 143 of Edge 142 met de ', (0, i.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' ', (0, i.jsx)(s.a, { href: 'https://support.freedomscientific.com/Downloads/JAWS/JAWSWhatsNew', children: 'JAWS 2026' }), ' op ', (0, i.jsx)(s.a, { href: 'https://www.microsoft.com/en-us/software-download/windows11', children: 'Windows 11' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 143 of Edge 142 met de screenreader ', (0, i.jsx)(s.a, { href: 'https://www.nvaccess.org/post/nvda-2025-3/', children: 'NVDA 2025.3' }), ' op Windows 11'] }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2025/11/chrome-for-android-update_20.html', children: 'Chrome 143 op Android' }) }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 143 op Android met de screenreader ', (0, i.jsx)(s.a, { href: 'https://support.google.com/accessibility/android/answer/16561624?hl=en&ref_topic=10601875&sjid=9314725536998589916-EU', children: 'Talkback 16.1' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 143 op Windows 11 of ', (0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/macos-release-notes/macos-26_1-release-notes', children: 'macOS 26.1 Tahoe' })] }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: 'https://www.firefox.com/en-US/firefox/145.0/releasenotes/', children: 'Firefox 145' }) }), '\n', (0, i.jsx)(s.li, { children: 'Firefox 144 met de screenreader NVDA 2025.3 op Windows 11' }), '\n', (0, i.jsxs)(s.li, { children: [(0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/safari-release-notes/safari-26_1-release-notes', children: 'Safari 26.1' }), ' op ', (0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26_1-release-notes', children: 'iOS 26.1' })] }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.1 op iOS 26.1 met de screenreader VoiceOver' }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.1 op macOS 26.1' }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.1 op macOS 26.1 met de screenreader VoiceOver' }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: s } = { ...(0, o.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
