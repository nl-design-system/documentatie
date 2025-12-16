'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60338],
 {
  85248: (e, n, s) => {
   s.d(n, { R: () => i, x: () => a });
   var r = s(30758);
   const o = {},
    t = r.createContext(o);
   function i(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
  86657: (e, n, s) => {
   s.r(n), s.d(n, { assets: () => l, contentTitle: () => a, default: () => m, frontMatter: () => i, metadata: () => r, toc: () => d });
   const r = JSON.parse('{"id":"baseline/2025-11","title":"Baseline november 2025","description":"De softwareversies waarmee we in november 2025 voor NL Design System testen voor Baseline support.","source":"@site/docs/baseline/2025-11.mdx","sourceDirName":"baseline","slug":"/baseline/2025-11","permalink":"/baseline/2025-11","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/baseline/2025-11.mdx","tags":[],"version":"current","frontMatter":{"title":"Baseline november 2025","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Baseline november 2025","pagination_label":"Baseline november 2025","description":"De softwareversies waarmee we in november 2025 voor NL Design System testen voor Baseline support.","slug":"/baseline/2025-11","keywords":["Accessibility Support Baseline","Baseline","browser support","browserversie"]},"sidebar":"handboek","previous":{"title":"Baseline oktober 2025","permalink":"/baseline/2025-10"},"next":{"title":"Woordenlijst","permalink":"/woordenlijst"}}');
   var o = s(86070),
    t = s(85248);
   const i = { title: 'Baseline november 2025', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline november 2025', pagination_label: 'Baseline november 2025', description: 'De softwareversies waarmee we in november 2025 voor NL Design System testen voor Baseline support.', slug: '/baseline/2025-11', keywords: ['Accessibility Support Baseline', 'Baseline', 'browser support', 'browserversie'] },
    a = 'NL Design System Baseline: november 2025',
    l = {},
    d = [{ value: 'Software om mee te testen', id: 'software-om-mee-te-testen', level: 2 }];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'nl-design-system-baseline-november-2025', children: 'NL Design System Baseline: november 2025' }) }), '\n', (0, o.jsx)(n.p, { children: 'In de NL Design System Baseline staat de belangrijke software en combinaties van software die wij gebruiken om NL Design System mee te testen. Elke maand maken we een nieuw overzicht.' }), '\n', (0, o.jsxs)(n.p, { children: ['Oudere softwareversies willen we ook ondersteunen. Die zijn niet onderdeel van de standaard test-methode. Lees meer over onze aanpak in de ', (0, o.jsx)(n.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'software-om-mee-te-testen', children: 'Software om mee te testen' }), '\n', (0, o.jsxs)(n.p, { children: ['De volgende software en combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 successcriteria. Niet elke ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' werkt optimaal met elke browser. De genoemde combinaties moeten geen problemen opleveren.'] }), '\n', (0, o.jsx)(n.p, { children: 'Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies, die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.' }), '\n', (0, o.jsx)(n.p, { children: 'De laatste versies van software op 21 november 2025 zijn:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://chromereleases.googleblog.com/2025/11/early-stable-update-for-desktop.html', children: 'Chrome 143' }), ' of ', (0, o.jsx)(n.a, { href: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel#version-1420359594-november-20-2025', children: 'Edge 142' })] }), '\n', (0, o.jsxs)(n.li, { children: ['Chrome 143 of Edge 142 met de ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' ', (0, o.jsx)(n.a, { href: 'https://support.freedomscientific.com/Downloads/JAWS/JAWSWhatsNew', children: 'JAWS 2026' }), ' op ', (0, o.jsx)(n.a, { href: 'https://www.microsoft.com/en-us/software-download/windows11', children: 'Windows 11' })] }), '\n', (0, o.jsxs)(n.li, { children: ['Chrome 143 of Edge 142 met de screenreader ', (0, o.jsx)(n.a, { href: 'https://www.nvaccess.org/post/nvda-2025-3/', children: 'NVDA 2025.3' }), ' op Windows 11'] }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://chromereleases.googleblog.com/2025/11/chrome-for-android-update_20.html', children: 'Chrome 143 op Android' }) }), '\n', (0, o.jsxs)(n.li, { children: ['Chrome 143 op Android met de screenreader ', (0, o.jsx)(n.a, { href: 'https://support.google.com/accessibility/android/answer/16561624?hl=en&ref_topic=10601875&sjid=9314725536998589916-EU', children: 'Talkback 16.1' })] }), '\n', (0, o.jsxs)(n.li, { children: ['Chrome 143 op Windows 11 of ', (0, o.jsx)(n.a, { href: 'https://developer.apple.com/documentation/macos-release-notes/macos-26_1-release-notes', children: 'macOS 26.1 Tahoe' })] }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: 'https://www.firefox.com/en-US/firefox/145.0/releasenotes/', children: 'Firefox 145' }) }), '\n', (0, o.jsx)(n.li, { children: 'Firefox 144 met de screenreader NVDA 2025.3 op Windows 11' }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: 'https://developer.apple.com/documentation/safari-release-notes/safari-26_1-release-notes', children: 'Safari 26.1' }), ' op ', (0, o.jsx)(n.a, { href: 'https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26_1-release-notes', children: 'iOS 26.1' })] }), '\n', (0, o.jsx)(n.li, { children: 'Safari 26.1 op iOS 26.1 met de screenreader VoiceOver' }), '\n', (0, o.jsx)(n.li, { children: 'Safari 26.1 op macOS 26.1' }), '\n', (0, o.jsx)(n.li, { children: 'Safari 26.1 op macOS 26.1 met de screenreader VoiceOver' }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
