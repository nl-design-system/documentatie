'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50618],
 {
  18439(e, s, n) {
   n.d(s, { R: () => o, x: () => a });
   var t = n(30758);
   const i = {},
    r = t.createContext(i);
   function o(e) {
    const s = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: s }, e.children));
   }
  },
  70603(e, s, n) {
   (n.r(s), n.d(s, { assets: () => l, contentTitle: () => a, default: () => u, frontMatter: () => o, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"baseline/2026-08","title":"Baseline augustus 2026","description":"De softwareversies waarmee we in augustus 2026 voor NL Design System testen voor Baseline support.","source":"@site/docs/baseline/2026-08.mdx","sourceDirName":"baseline","slug":"/baseline/2026-08","permalink":"/baseline/2026-08","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/baseline/2026-08.mdx","tags":[],"version":"current","sidebarPosition":-202608,"frontMatter":{"title":"Baseline augustus 2026","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Baseline augustus 2026","sidebar_position":-202608,"navigation_order":-202608,"pagination_label":"Baseline augustus 2026","description":"De softwareversies waarmee we in augustus 2026 voor NL Design System testen voor Baseline support.","slug":"/baseline/2026-08","keywords":["Accessibility Support Baseline","Baseline","browser support","browserversie"]},"sidebar":"handboek","previous":{"title":"Baseline","permalink":"/baseline/"},"next":{"title":"Baseline juli 2026","permalink":"/baseline/2026-07"}}');
   var i = n(86070),
    r = n(18439);
   const o = { title: 'Baseline augustus 2026', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline augustus 2026', sidebar_position: -202608, navigation_order: -202608, pagination_label: 'Baseline augustus 2026', description: 'De softwareversies waarmee we in augustus 2026 voor NL Design System testen voor Baseline support.', slug: '/baseline/2026-08', keywords: ['Accessibility Support Baseline', 'Baseline', 'browser support', 'browserversie'] },
    a = 'NL Design System Baseline: augustus 2026',
    l = {},
    d = [{ value: 'Software om mee te testen', id: 'software-om-mee-te-testen', level: 2 }];
   function c(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(s.header, { children: (0, i.jsx)(s.h1, { id: 'nl-design-system-baseline-augustus-2026', children: 'NL Design System Baseline: augustus 2026' }) }), '\n', (0, i.jsx)(s.p, { children: 'In de NL Design System Baseline staat de belangrijke software en combinaties van software die wij gebruiken om NL Design System mee te testen. Elke maand maken we een nieuw overzicht.' }), '\n', (0, i.jsxs)(s.p, { children: ['Oudere softwareversies willen we ook ondersteunen. Die zijn niet onderdeel van de standaard test-methode. Lees meer over onze aanpak in de ', (0, i.jsx)(s.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, i.jsx)(s.h2, { id: 'software-om-mee-te-testen', children: 'Software om mee te testen' }), '\n', (0, i.jsxs)(s.p, { children: ['De volgende software en combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 succescriteria. Niet elke ', (0, i.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' werkt optimaal met elke browser. De genoemde combinaties moeten geen problemen opleveren.'] }), '\n', (0, i.jsx)(s.p, { children: 'Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies, die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.' }), '\n', (0, i.jsx)(s.p, { children: 'De laatste versies van software op 11 augustus zijn:' }), '\n', (0, i.jsxs)(s.ul, { children: ['\n', (0, i.jsxs)(s.li, { children: [(0, i.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2026/08/stable-channel-update-for-desktop_01193673229.html', children: 'Chrome 151' }), ' of ', (0, i.jsx)(s.a, { href: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel#version-1510412978-august-10-2026-stable', children: 'Edge 151' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 151 of Edge 151 met de screenreader ', (0, i.jsx)(s.a, { href: 'https://support.freedomscientific.com/Downloads/JAWS/JAWSWhatsNew', children: 'JAWS 2026.2606.132' }), ' op ', (0, i.jsx)(s.a, { href: 'https://www.microsoft.com/en-us/software-download/windows11', children: 'Windows 11' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 151 of Edge 151 met de screenreader ', (0, i.jsx)(s.a, { href: 'https://www.nvaccess.org/post/nvda-2026-1-1/', children: 'NVDA 2026.1.1' }), ' op Windows 11'] }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2026/08/chrome-for-android-update_02088977225.html', children: 'Chrome 151 op Android' }) }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 151 op Android met de screenreader ', (0, i.jsx)(s.a, { href: 'https://support.google.com/accessibility/android/answer/17069786?hl=en&ref_topic=10601875&sjid=13227526755757837604-EU', children: 'TalkBack 17' })] }), '\n', (0, i.jsxs)(s.li, { children: ['Chrome 151 op Windows 11 of ', (0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/macos-release-notes/macos-26_6-release-notes', children: 'macOS 26.6 Tahoe' })] }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: 'https://www.firefox.com/en-US/firefox/153.0/releasenotes/', children: 'Firefox 153' }) }), '\n', (0, i.jsx)(s.li, { children: 'Firefox 153 met de screenreader NVDA 2026.1.1 op Windows 11' }), '\n', (0, i.jsxs)(s.li, { children: [(0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/safari-release-notes/safari-26_6-release-notes', children: 'Safari 26.6' }), ' op ', (0, i.jsx)(s.a, { href: 'https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26_6-release-notes', children: 'iOS 26.6' })] }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.6 op iOS 26.6 met de screenreader VoiceOver' }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.6 op macOS 26.6' }), '\n', (0, i.jsx)(s.li, { children: 'Safari 26.6 op macOS 26.6 met de screenreader VoiceOver' }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
