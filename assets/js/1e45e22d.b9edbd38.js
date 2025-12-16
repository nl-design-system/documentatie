'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [72139],
 {
  85248: (e, n, i) => {
   i.d(n, { R: () => r, x: () => a });
   var t = i(30758);
   const o = {},
    d = t.createContext(o);
   function r(e) {
    const n = t.useContext(d);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(d.Provider, { value: n }, e.children);
   }
  },
  86091: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => a, default: () => g, frontMatter: () => r, metadata: () => t, toc: () => s });
   const t = JSON.parse('{"id":"footer/coc","title":"Code of Conduct","description":"Wij streven ernaar om iedereen een vriendelijke, veilige en gastvrije omgeving te bieden.","source":"@site/docs/footer/coc.md","sourceDirName":"footer","slug":"/coc","permalink":"/coc","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/footer/coc.md","tags":[],"version":"current","frontMatter":{"title":"Code of Conduct","hide_title":true,"hide_table_of_contents":true,"pagination_label":"Code of Conduct","slug":"/coc","unlisted":true}}');
   var o = i(86070),
    d = i(85248);
   const r = { title: 'Code of Conduct', hide_title: !0, hide_table_of_contents: !0, pagination_label: 'Code of Conduct', slug: '/coc', unlisted: !0 },
    a = 'Code of Conduct',
    l = {},
    s = [
     { value: 'Gedragscode', id: 'gedragscode', level: 2 },
     { value: 'Veiligheid', id: 'veiligheid', level: 2 },
     { value: 'Gevolgen van overtredingen', id: 'gevolgen-van-overtredingen', level: 2 },
     { value: 'Meld ongewenst gedrag', id: 'meld-ongewenst-gedrag', level: 2 },
     { value: 'Melding maken', id: 'melding-maken', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, d.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'code-of-conduct', children: 'Code of Conduct' }) }), '\n', (0, o.jsx)(n.p, { children: 'Wij streven ernaar om iedereen een vriendelijke, veilige en gastvrije omgeving te bieden.\nDaarom verwachten we dat alle aanwezigen zich aan onze gedragscode houden.' }), '\n', (0, o.jsx)(n.h2, { id: 'gedragscode', children: 'Gedragscode' }), '\n', (0, o.jsx)(n.p, { children: 'Wij tolereren geen enkele vorm van lastigvallen en intimidatie in onze community en op\nonze evenementen. Hiermee bedoelen we aanstootgevende opmerkingen met betrekking\ntot geslacht, leeftijd, seksuele geaardheid, handicap, fysieke verschijning,\nlichaamsgrootte, ras, etniciteit, religie, intimidatie, stalken, fotograferen of opnemen\nzonder toestemming, aanhoudende verstoring van gesprekken, ongepast lichamelijk\ncontact en seksueel getinte aandacht die als ongewenst wordt ervaren.' }), '\n', (0, o.jsx)(n.h2, { id: 'veiligheid', children: 'Veiligheid' }), '\n', (0, o.jsx)(n.p, { children: 'Intimidatie, in welke vorm dan ook, is niet toegestaan.' }), '\n', (0, o.jsx)(n.p, { children: 'Voel je vrij om iedere vorm van intimidatie, ongewenst gedrag of andere kwesties die de\nveiligheid of het welzijn van deelnemers bedreigen, direct aan de organisatie te melden.' }), '\n', (0, o.jsx)(n.h2, { id: 'gevolgen-van-overtredingen', children: 'Gevolgen van overtredingen' }), '\n', (0, o.jsx)(n.p, { children: 'Overtreding van deze gedragscode kan leiden tot maatregelen. Deze maatregelen vari\xebren\nvan een waarschuwing tot verwijdering van het evenement (indien van toepassing zonder\nrestitutie van kosten).' }), '\n', (0, o.jsx)(n.h2, { id: 'meld-ongewenst-gedrag', children: 'Meld ongewenst gedrag' }), '\n', (0, o.jsx)(n.p, { children: 'Houd iemand zich niet aan de gedragscode? Neem dan contact op met Yolijn. Kan je ons niet direct vinden? Zoek dan een medewerker\nvan de locatie en vraag of ze direct contact met ons opnemen.' }), '\n', (0, o.jsx)(n.p, { children: 'We zullen elke melding serieus nemen en vertrouwelijk behandelen.' }), '\n', (0, o.jsx)(n.h2, { id: 'melding-maken', children: 'Melding maken' }), '\n', (0, o.jsx)(n.p, { children: 'Yolijn: 06-19991566' }), '\n', (0, o.jsxs)(n.p, { children: ['Niet urgent? Je kunt ook melding maken via ', (0, o.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' })] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, d.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
