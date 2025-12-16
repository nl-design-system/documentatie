'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37118],
 {
  85248: (e, s, n) => {
   n.d(s, { R: () => i, x: () => a });
   var r = n(30758);
   const o = {},
    t = r.createContext(o);
   function i(e) {
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
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), r.createElement(t.Provider, { value: s }, e.children);
   }
  },
  90037: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => l, contentTitle: () => a, default: () => h, frontMatter: () => i, metadata: () => r, toc: () => d });
   const r = JSON.parse('{"id":"baseline/2025-10","title":"Baseline oktober 2025","description":"De softwareversies waarmee we in oktober 2025 voor NL Design System testen voor Baseline support.","source":"@site/docs/baseline/2025-10.mdx","sourceDirName":"baseline","slug":"/baseline/2025-10","permalink":"/baseline/2025-10","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/baseline/2025-10.mdx","tags":[],"version":"current","frontMatter":{"title":"Baseline oktober 2025","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Baseline oktober 2025","pagination_label":"Baseline oktober 2025","description":"De softwareversies waarmee we in oktober 2025 voor NL Design System testen voor Baseline support.","slug":"/baseline/2025-10","keywords":["Accessibility Support Baseline","Baseline","browser support","browserversie"]},"sidebar":"handboek","previous":{"title":"Baseline september 2025","permalink":"/baseline/2025-09"},"next":{"title":"Baseline november 2025","permalink":"/baseline/2025-11"}}');
   var o = n(86070),
    t = n(85248);
   const i = { title: 'Baseline oktober 2025', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Baseline oktober 2025', pagination_label: 'Baseline oktober 2025', description: 'De softwareversies waarmee we in oktober 2025 voor NL Design System testen voor Baseline support.', slug: '/baseline/2025-10', keywords: ['Accessibility Support Baseline', 'Baseline', 'browser support', 'browserversie'] },
    a = 'NL Design System Baseline: oktober 2025',
    l = {},
    d = [{ value: 'Software om mee te testen', id: 'software-om-mee-te-testen', level: 2 }];
   function c(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(s.header, { children: (0, o.jsx)(s.h1, { id: 'nl-design-system-baseline-oktober-2025', children: 'NL Design System Baseline: oktober 2025' }) }), '\n', (0, o.jsx)(s.p, { children: 'In de NL Design System Baseline staat de belangrijke software en combinaties van software die wij gebruiken om NL Design System mee te testen. Elke maand maken we een nieuw overzicht.' }), '\n', (0, o.jsxs)(s.p, { children: ['Oudere softwareversies willen we ook ondersteunen. Die zijn niet onderdeel van de standaard test-methode. Lees meer over onze aanpak in de ', (0, o.jsx)(s.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, o.jsx)(s.h2, { id: 'software-om-mee-te-testen', children: 'Software om mee te testen' }), '\n', (0, o.jsxs)(s.p, { children: ['De volgende software en combinaties van software moet je mee testen voor functionaliteit en WCAG 2.2 successcriteria. Niet elke ', (0, o.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' werkt optimaal met elke browser. De genoemde combinaties moeten geen problemen opleveren.'] }), '\n', (0, o.jsx)(s.p, { children: 'Als bepaalde functionaliteit niet blijkt te werken in oudere softwareversies, die minder oud zijn dan 30 maanden, overweeg dan wel om het probleem op te lossen en te testen in specifieke oudere softwareversies.' }), '\n', (0, o.jsx)(s.p, { children: 'De laatste versies van software op 21 oktober 2025 zijn:' }), '\n', (0, o.jsxs)(s.ul, { children: ['\n', (0, o.jsxs)(s.li, { children: [(0, o.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2025/10/stable-channel-update-for-desktop_14.html', children: 'Chrome 141' }), ' of ', (0, o.jsx)(s.a, { href: 'https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel#version-1410353785-october-17-2025', children: 'Edge 141' })] }), '\n', (0, o.jsxs)(s.li, { children: ['Chrome 141 of Edge 141 met de ', (0, o.jsx)(s.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' ', (0, o.jsx)(s.a, { href: 'https://support.freedomscientific.com/Downloads/JAWS/JAWSWhatsNew?version=2025', children: 'JAWS 2025' }), ' op ', (0, o.jsx)(s.a, { href: 'https://www.microsoft.com/en-us/software-download/windows11', children: 'Windows 11' })] }), '\n', (0, o.jsxs)(s.li, { children: ['Chrome 141 of Edge 141 met de screenreader ', (0, o.jsx)(s.a, { href: 'https://www.nvaccess.org/post/nvda-2025-3/', children: 'NVDA 2025.3' }), ' op Windows 11'] }), '\n', (0, o.jsx)(s.li, { children: (0, o.jsx)(s.a, { href: 'https://chromereleases.googleblog.com/2025/10/chrome-for-android-update_01943141190.html', children: 'Chrome 141 op Android' }) }), '\n', (0, o.jsxs)(s.li, { children: ['Chrome 141 op Android met de screenreader ', (0, o.jsx)(s.a, { href: 'https://support.google.com/accessibility/android/answer/16561624?hl=en&ref_topic=10601875&sjid=9314725536998589916-EU', children: 'Talkback 16.1' })] }), '\n', (0, o.jsxs)(s.li, { children: ['Chrome 140 op Windows 11 of ', (0, o.jsx)(s.a, { href: 'https://developer.apple.com/documentation/macos-release-notes/macos-26-release-notes', children: 'macOS 26 Tahoe' })] }), '\n', (0, o.jsx)(s.li, { children: (0, o.jsx)(s.a, { href: 'https://www.firefox.com/en-US/firefox/144.0/releasenotes/', children: 'Firefox 144' }) }), '\n', (0, o.jsx)(s.li, { children: 'Firefox 144 met de screenreader NVDA 2025.3 op Windows 11' }), '\n', (0, o.jsxs)(s.li, { children: ['Safari ', (0, o.jsx)(s.a, { href: 'https://developer.apple.com/documentation/safari-release-notes/safari-26-release-notes', children: '26' }), ' op ', (0, o.jsx)(s.a, { href: 'https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-26-release-notes', children: 'iOS 26' })] }), '\n', (0, o.jsx)(s.li, { children: 'Safari 26 op iOS 26 met de screenreader VoiceOver' }), '\n', (0, o.jsx)(s.li, { children: 'Safari 26 op macOS 26' }), '\n', (0, o.jsx)(s.li, { children: 'Safari 26 op macOS 26 met de screenreader VoiceOver' }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: s } = { ...(0, t.R)(), ...e.components };
    return s ? (0, o.jsx)(s, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
