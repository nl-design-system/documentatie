'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70591],
 {
  33162: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => s, contentTitle: () => a, default: () => g, frontMatter: () => d, metadata: () => r, toc: () => l });
   var t = i(52676),
    o = i(40139);
   const d = { title: 'Code of Conduct', hide_title: !0, hide_table_of_contents: !0, pagination_label: 'Code of Conduct', slug: '/coc', unlisted: !0 },
    a = 'Code of Conduct',
    r = { id: 'footer/coc', title: 'Code of Conduct', description: 'Wij streven ernaar om iedereen een vriendelijke, veilige en gastvrije omgeving te bieden.', source: '@site/docs/footer/coc.md', sourceDirName: 'footer', slug: '/coc', permalink: '/coc', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/footer/coc.md', tags: [], version: 'current', frontMatter: { title: 'Code of Conduct', hide_title: !0, hide_table_of_contents: !0, pagination_label: 'Code of Conduct', slug: '/coc', unlisted: !0 } },
    s = {},
    l = [
     { value: 'Gedragscode', id: 'gedragscode', level: 2 },
     { value: 'Veiligheid', id: 'veiligheid', level: 2 },
     { value: 'Gevolgen van overtredingen', id: 'gevolgen-van-overtredingen', level: 2 },
     { value: 'Meld ongewenst gedrag', id: 'meld-ongewenst-gedrag', level: 2 },
     { value: 'Melding maken', id: 'melding-maken', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, t.jsx)(n.p, { children: 'Wij streven ernaar om iedereen een vriendelijke, veilige en gastvrije omgeving te bieden.\nDaarom verwachten we dat alle aanwezigen zich aan onze gedragscode houden.' }), '\n', (0, t.jsx)(n.h2, { id: 'gedragscode', children: 'Gedragscode' }), '\n', (0, t.jsx)(n.p, { children: 'Wij tolereren geen enkele vorm van lastigvallen en intimidatie in onze community en op\nonze evenementen. Hiermee bedoelen we aanstootgevende opmerkingen met betrekking\ntot geslacht, leeftijd, seksuele geaardheid, handicap, fysieke verschijning,\nlichaamsgrootte, ras, etniciteit, religie, intimidatie, stalken, fotograferen of opnemen\nzonder toestemming, aanhoudende verstoring van gesprekken, ongepast lichamelijk\ncontact en seksueel getinte aandacht die als ongewenst wordt ervaren.' }), '\n', (0, t.jsx)(n.h2, { id: 'veiligheid', children: 'Veiligheid' }), '\n', (0, t.jsx)(n.p, { children: 'Intimidatie, in welke vorm dan ook, is niet toegestaan.' }), '\n', (0, t.jsx)(n.p, { children: 'Voel je vrij om iedere vorm van intimidatie, ongewenst gedrag of andere kwesties die de\nveiligheid of het welzijn van deelnemers bedreigen, direct aan de organisatie te melden.' }), '\n', (0, t.jsx)(n.h2, { id: 'gevolgen-van-overtredingen', children: 'Gevolgen van overtredingen' }), '\n', (0, t.jsx)(n.p, { children: 'Overtreding van deze gedragscode kan leiden tot maatregelen. Deze maatregelen vari\xebren\nvan een waarschuwing tot verwijdering van het evenement (indien van toepassing zonder\nrestitutie van kosten).' }), '\n', (0, t.jsx)(n.h2, { id: 'meld-ongewenst-gedrag', children: 'Meld ongewenst gedrag' }), '\n', (0, t.jsx)(n.p, { children: 'Houd iemand zich niet aan de gedragscode? Neem dan contact op met \xe9\xe9n van onze\norganisatoren, Hidde of Yolijn. Kan je ons niet direct vinden? Zoek dan een medewerker\nvan de locatie en vraag of ze direct contact met ons opnemen.' }), '\n', (0, t.jsx)(n.p, { children: 'We zullen elke melding serieus nemen en vertrouwelijk behandelen.' }), '\n', (0, t.jsx)(n.h2, { id: 'melding-maken', children: 'Melding maken' }), '\n', (0, t.jsx)(n.p, { children: 'Yolijn: 06-19991566' }), '\n', (0, t.jsx)(n.p, { children: 'Hidde: 06-41226294' }), '\n', (0, t.jsxs)(n.p, { children: ['Niet urgent? Je kunt ook melding maken via ', (0, t.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' })] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => r, a: () => a });
   var t = i(75271);
   const o = {},
    d = t.createContext(o);
   function a(e) {
    const n = t.useContext(d);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), t.createElement(d.Provider, { value: n }, e.children);
   }
  },
 },
]);
