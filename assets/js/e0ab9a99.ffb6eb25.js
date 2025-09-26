'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21139],
 {
  98397: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => a, default: () => h, frontMatter: () => s, metadata: () => d, toc: () => c });
   var i = t(52676),
    o = t(40139);
   const s = { title: 'GitHub Actions \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'GitHub Actions', pagination_label: 'GitHub Actions', description: 'Het werken met GitHub Actions binnen NL Design System', keywords: ['GitHub', 'GitHub Actions', 'CI', 'Continuous Integration', 'CD', 'Continuous Delivery'] },
    a = 'GitHub Actions versies updaten',
    d = { id: 'handboek/developer/github-actions', title: 'GitHub Actions \xb7 Developer \xb7 Handboek', description: 'Het werken met GitHub Actions binnen NL Design System', source: '@site/docs/handboek/developer/github-actions.md', sourceDirName: 'handboek/developer', slug: '/handboek/developer/github-actions', permalink: '/handboek/developer/github-actions', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/github-actions.md', tags: [], version: 'current', frontMatter: { title: 'GitHub Actions \xb7 Developer \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'GitHub Actions', pagination_label: 'GitHub Actions', description: 'Het werken met GitHub Actions binnen NL Design System', keywords: ['GitHub', 'GitHub Actions', 'CI', 'Continuous Integration', 'CD', 'Continuous Delivery'] }, sidebar: 'handboek', previous: { title: 'Design Token conventie', permalink: '/handboek/developer/design-token-conventie' }, next: { title: 'Voor organisaties', permalink: '/handboek/organisatie/overzicht' } },
    r = {},
    c = [
     { value: 'Met hulp van Dependabot updaten', id: 'met-hulp-van-dependabot-updaten', level: 2 },
     { value: 'Handmatig een versie pinnen', id: 'handmatig-een-versie-pinnen', level: 2 },
    ];
   function l(e) {
    const n = { a: 'a', admonition: 'admonition', code: 'code', h1: 'h1', h2: 'h2', li: 'li', ol: 'ol', p: 'p', pre: 'pre', strong: 'strong', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'github-actions-versies-updaten', children: 'GitHub Actions versies updaten' }), '\n', (0, i.jsx)(n.p, { children: 'De meeste GitHub Actions in voorbeelden, in bijvoorbeeld de GitHub docs, zien er ongeveer zo uit:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-yaml', children: '- name: checkout\n  uses: actions/checkout@v4\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Hier wordt de ', (0, i.jsx)(n.strong, { children: 'actions/checkout' }), ' GitHub Action gebruikt die getagged is met een ', (0, i.jsx)(n.code, { children: 'v4' }), ' tag. Dit is niet helemaal veilig en kan zorgen voor problemen die enorm veel tijd kosten om op te lossen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Commit hashes kunnen dat niet en daarom pinnen we GitHub Actions op de bijbehorende commit hash. Dat ziet er zo uit:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-yaml', children: '- name: checkout\n  uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Hier wordt weer de ', (0, i.jsx)(n.strong, { children: 'actions/checkout' }), ' GitHub Action gebruikt maar nu gepinned op een commit hash ', (0, i.jsx)(n.code, { children: '11bd71901bbe5b1630ceea73d27597364c9af683' }), '. De volledige tag ', (0, i.jsx)(n.code, { children: 'v4.2.2' }), ' staat in een YAML comment achter de hash.'] }), '\n', (0, i.jsx)(n.h2, { id: 'met-hulp-van-dependabot-updaten', children: 'Met hulp van Dependabot updaten' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://docs.github.com/en/code-security/dependabot', children: 'Dependabot' }), ' (maar ook ', (0, i.jsx)(n.a, { href: 'https://github.com/renovatebot/renovate', children: 'Renovate' }), ') zijn in staat om deze gepinde versies netjes te updaten. Er wordt per action een pull request geopend die je nadat deze gecontroleerd is kunt mergen. Zowel de commit hash als het versie nummer in de comment worden bijgewerkt.'] }), '\n', (0, i.jsx)(n.h2, { id: 'handmatig-een-versie-pinnen', children: 'Handmatig een versie pinnen' }), '\n', (0, i.jsx)(n.p, { children: 'Het kan ook voorkomen dat je handmatig een gepinde versie wilt bijwerken. Volg dan deze stappen:' }), '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Ga naar de pagina van de action op GitHub. Een action op GitHub kun je vinden door er simpelweg ', (0, i.jsx)(n.code, { children: 'https://github.com' }), ' voor te plakken. Zie bijvoorbeeld ', (0, i.jsx)(n.a, { href: 'https://github.com/actions/checkout', children: (0, i.jsx)(n.code, { children: 'actions/checkout' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Onder \u201cReleases\u201d \u2014op desktop in de zijbalk, op mobiel onderaan de pagina\u2014 klik je op de laatste (', (0, i.jsx)(n.code, { children: 'latest' }), ') versie.'] }), '\n', (0, i.jsx)(n.li, { children: 'Op de release pagina klik je op de short hash. Deze kun je vinden in de header naast de release datum, het aantal commits sinds deze release en de tag.' }), '\n', (0, i.jsx)(n.li, { children: 'Op de pagina met de commit kun je de commit hash kopi\xebren uit de url of door op de copy knop bij de commit hash te klikken.' }), '\n'] }), '\n', (0, i.jsx)(n.admonition, { title: 'Belangrijk', type: 'warning', children: (0, i.jsxs)(n.p, { children: ['Zorg ervoor dat je bij het updaten de hash ', (0, i.jsx)(n.strong, { children: 'en' }), ' het versie nummer in de comment update'] }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => a });
   var i = t(75271);
   const o = {},
    s = i.createContext(o);
   function a(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
