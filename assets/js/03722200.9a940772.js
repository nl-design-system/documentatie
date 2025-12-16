'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [24171],
 {
  14889: (e, n, i) => {
   i.d(n, { AC: () => l, Fu: () => s, Wu: () => o, Zp: () => d });
   var t = i(68873),
    r = i(13526),
    a = i(86070);
   const s = ({ background: e, children: n, className: i, ...t }) => (0, a.jsx)('div', { className: (0, r.A)('card__illustration', e && `card__illustration--${e}`, i), ...t, children: n }),
    o = (e) => (0, a.jsx)('div', { className: 'card__content', ...e }),
    d = ({ href: e, appearance: n, className: i, component: s = 'div', background: o, children: d }) => {
     const l = (e) => ('article' === s ? (0, a.jsx)('article', { ...e }) : 'section' === s ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(l, { className: (0, r.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, i), children: d });
     return e ? (0, a.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'medium', children: n, className: i }) => (0, a.jsx)('div', { className: (0, r.A)('cardgroup', `cardgroup--${e}`, i), children: n });
  },
  44666: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => w, contentTitle: () => y, default: () => N, frontMatter: () => x, metadata: () => t, toc: () => D });
   const t = JSON.parse('{"id":"project/kernteam","title":"Kernteam \xb7 Project","description":"Contact met NL Design System Kernteam","source":"@site/docs/project/kernteam.mdx","sourceDirName":"project","slug":"/project/kernteam","permalink":"/project/kernteam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kernteam.mdx","tags":[],"version":"current","frontMatter":{"title":"Kernteam \xb7 Project","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Kernteam","pagination_label":"Kernteam","description":"Contact met NL Design System Kernteam","keywords":["kernteam","over ons","nl design system","contact"]},"sidebar":"project","previous":{"title":"Veelgestelde vragen","permalink":"/project/faq"},"next":{"title":"Op de hoogte blijven","permalink":"/project/blijf-op-de-hoogte"}}');
   var r = i(86070),
    a = i(85248),
    s = i(68873),
    o = i(13526);
   const d = { name: 'Astrid Brantjes', role: 'Projectmanager', slack: { mention: '@Astrid Brantjes', id: 'U06S00GPXC7' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Voor veel mensen is Astrid geen onbekende, want vanuit haar vorige baan bij de gemeente Utrecht hield ze zich al bezig met verschillende landelijke innovaties. Hierdoor heeft ze kennis van het ontwikkelen van open source systemen.' }), (0, r.jsx)(s.fz, { children: 'In haar vrije tijd vind je Astrid in haar atelier, op de squashbaan en bij mooi weer op de racefiets.' })] }) },
    l = { name: 'Jeffrey Lauwers', role: 'Designer', slack: { mention: '@Jeffrey Lauwers', id: 'U0412KZ9TV1' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Jeffrey vervult binnen NL Design System de designrol. Eerder realiseerde hij design systems voor het Ministerie van VWS, Nederlandse Spoorwegen, Nationale Nederlanden en Randstad.' }), (0, r.jsx)(s.fz, { children: 'Naast een passie voor Design Systems en Ajax heeft Jeffrey een passie voor toegankelijkheid.' })] }) },
    c = { name: 'Robbert Broersma', role: 'Design System lead & Developer Relations', slack: { mention: '@Robbert', id: 'U019X17U5HQ' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Robbert is design system lead van NL Design System. Met zijn ervaring bij andere design systems kent hij zowel de valkuilen van een team overstijgend design system als de waarde van het hergebruik van stabiele, toegankelijke componenten.' }), (0, r.jsx)(s.fz, { children: 'In de rol van developer relations werkt hij graag online samen met developers van verschillende organisaties om dit community gedragen design system neer te zetten. Zijn passie voor keukengerei is daarbij niet te missen! RVS met een haakje? Dan kun je het waarschijnlijk op zijn achtergrond vinden.' })] }) },
    m = { name: 'Rozerin Ayerdem', role: 'Designer', slack: { mention: '@Rozerin', id: 'D038ABXNAG3' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Als ontwerper is Rozerin bezig met het verzamelen, toevoegen en documenteren van interactiepatronen, componenten en richtlijnen. Ze werkte vanuit haar eerdere rol bij de gemeente Den Haag al samen met het kernteam van NL Design System.' }), (0, r.jsx)(s.fz, { children: 'Naast haar werk is Rozerin gepassioneerd door reizen, natuur, fotografie en architectuur.' })] }) },
    g = { name: 'Yolijn van der Kolk', role: 'Productmanager & Developer Relations', slack: { mention: '@Yolijn', id: 'U01B7T1F24S' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Als productmanager is Yolijn graag de schakel tussen de verschillende stakeholders en het kernteam van NL Design System. Ze combineert graag het uitwerken van een lange termijn visie met het opknippen van grote mijlpalen naar kleine, toetsbare onderdelen.' }), (0, r.jsx)(s.fz, { children: 'Bij eerdere projecten bleek al dat ze graag de schakel is tussen de makers van een component en de verscheidenheid aan organisaties die het white-label design system afnemen en aanpassen naar hun eigen Design Tokens. In de rol van Developer Relations ontdekt ze graag na een lekker kopje koffie wat de gemene deler is tussen componenten en stijlen bij verschillende applicaties.' })] }) },
    h = { name: 'Erik Kroes', role: 'Specialist webtoegankelijkheid', slack: { mention: '@Erik Kroes', id: 'U07A578KX8D' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Als (ervarings)deskundige ondersteunt Erik het NL Design System en al haar gebruikers op het gebied van digitale toegankelijkheid. Samen zorgen we ervoor de we de beste bouwblokken hebben, en die kunnen gebruiken om digitale ervaringen te bouwen voor iedereen.' }), (0, r.jsx)(s.fz, { children: 'Digitale toegankelijkheid en design systems zijn ware passies voor Erik, vooral binnen grote organisaties. Hij deelt zowel binnen NL Design System als via blogs, meetups en andere kanalen.' }), (0, r.jsx)(s.fz, { children: 'Nog belangrijker dan dat alles vind ik mijn gezin. Ik doe graag dingen samen! Als het kan in de tuin of in het bos. En als er dan nog tijd en energie over is? Een beetje Lego bouwen is altijd fijn!' })] }) },
    j = { name: 'Renate Roke', role: 'Specialist webtoegankelijkheid', slack: { mention: '@Renate Roke', id: 'U08BJAEAEUU' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Als Specialist Webtoegankelijkheid beschrijft Renate onder andere acceptatiecriteria voor componenten in het NL Design System en helpt ze de community op weg met tips over toegankelijkheid. Hiervoor gebruikt ze haar jarenlange kennis in toegankelijkheidsonderzoeken en haar passie om kennis over te dragen. Ze denkt vooral graag mee over wat er w\xe9l kan.' }), (0, r.jsx)(s.fz, { children: 'In haar vrije tijd is Renate graag buiten: aan het wandelen, aan het kamperen of op het terras. Daarnaast leest ze heel veel boeken en heeft ze veel creatieve hobbies.' })] }) },
    p = { name: 'Peter Goes', role: 'Front-end Developer', slack: { mention: '@Peter Goes', id: 'U08NPCEF41Z' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Peter is Front-end Developer bij NL Design System. In deze rol bouwt hij aan nldesignsystem.nl en gebruikersonderzoeken.nl met het NL Design System in de hand. Door zelf gebruik te maken van NL Design System zien we eerder waar er ruimte voor verbetering is.' }), (0, r.jsx)(s.fz, { children: 'In zijn vrije tijd kun je Peter rollend op skates, hangend aan een boulder muur of vogelend in de natuur vinden.' })] }) },
    k = { name: 'Roy Honders', role: 'Developer relations engineer', slack: { mention: '@Roy Honders', id: 'U07ELQC7295' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Als Developer Relations Engineer ondersteunt Roy het NL Design System bij het onboarden van nieuwe projecten en ontwikkelaars. De website van NL Design System staat boordevol informatie, voorbeelden en linkjes \u2013 Roy helpt om dit uit te breiden met veelgevraagde onderwerpen uit de community en om de vindbaarheid van de juiste informatie te verbeteren.' }), (0, r.jsx)(s.fz, { children: 'Met zijn achtergrond als front-end developer en passie voor design en toegankelijkheid weet Roy technische details helder uit te leggen aan uiteenlopende doelgroepen. Hij deelt graag zijn kennis, presenteert met enthousiasme en zet zich in om ontwikkelaars snel wegwijs te maken.' }), (0, r.jsx)(s.fz, { children: 'In zijn vrije tijd leest hij graag boeken en gaat hij er vaak op uit \u2013 altijd op zoek naar nieuwe inspiratie en een goed verhaal.' })] }) },
    v = { name: 'Sandra de Jong', role: 'Co\xf6rdinator Communicatie & Events', slack: { mention: '@Sandra de Jong', id: 'U093GT9PY6A' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Sandra is communicatieadviseur en eventmanager. Binnen NL Design System ondersteunt ze de communicatieaanpak en helpt ze inhoud en processen begrijpelijk te maken voor verschillende doelgroepen. Met haar ervaring in het organiseren van bijeenkomsten en (online) events zorgt ze dat samenwerking en kennisdeling soepel verlopen. Zo helpt zij het team om inhoud toegankelijk te maken \xe9n mensen met elkaar te verbinden.' }), (0, r.jsx)(s.fz, { children: 'In haar vrije tijd leest ze graag een goede thriller, gaat naar het theater en doet vrijwilligerswerk bij Stichting SIntvoorieder1. En mocht er nog tijd over zijn dan gaat ze graag op pad met haar camera om mooie plaatjes te schieten.' })] }) },
    u = { name: 'Richard van Heuven van Staereling', role: 'DevOps Engineer', slack: { mention: '@Richard', id: 'U094W1UDJ6A' }, Description: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s.fz, { children: 'Richard programmeert sinds jongs af aan voor het web en houdt zich naast code ook bezig met de automatisering erom heen. Hij heeft talloze design systems ontwikkeld voor de websites en apps van kleine en grote organisaties, en praat graag mee over hoe je de gebruikerservaring kan verbeteren.' }), (0, r.jsx)(s.fz, { children: 'Vanuit het kernteam beheert en onderhoudt Richard de technische infrastructuur van NL Design System. Hij adviseert de community op het gebied van security, betrouwbare build- en releasetrajecten, en het toepassen van best practices.' }), (0, r.jsx)(s.fz, { children: 'Dit alles het liefst na een goede kop koffie. En in zijn vrije tijd geeft Richard taekwondoles en pingelt hij op de piano.' })] }) };
   var b = i(14889);
   const f = [d, g, c, l, m, h, j, p, k, v, u],
    z = ({ headingLevel: e }) => (0, r.jsx)(b.AC, { appearance: 'large', children: f.map(({ name: n, role: i, Description: t, slack: a }) => (0, r.jsx)(b.Zp, { appearance: 'large', className: (0, o.A)('core-team__card'), component: 'section', children: (0, r.jsxs)(b.Wu, { className: (0, o.A)('core-team__content'), children: [(0, r.jsxs)(s.yI, { className: (0, o.A)('core-team__heading'), children: [(0, r.jsx)(s.DZ, { level: e, className: (0, o.A)('core-team__heading-title'), children: n }), (0, r.jsx)(s.fz, { className: (0, o.A)('core-team__heading-subtitle'), children: i })] }), (0, r.jsx)('div', { className: (0, o.A)('core-team__description'), children: (0, r.jsx)(t, {}) }), (0, r.jsxs)(s.fz, { children: ['Slack: ', (0, r.jsx)(s.N_, { href: `https://codefornl.slack.com/team/${a.id}`, children: a.mention })] })] }) }, n)) }),
    x = { title: 'Kernteam \xb7 Project', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Kernteam', pagination_label: 'Kernteam', description: 'Contact met NL Design System Kernteam', keywords: ['kernteam', 'over ons', 'nl design system', 'contact'] },
    y = 'Kernteam',
    w = {},
    D = [];
   function _(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'kernteam', children: 'Kernteam' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Naast de community is er een enthousiast kernteam dat zich dagelijks inzet voor NL Design System. Kennismaken met het kernteam? Neem contact op door een e-mail te sturen naar ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' })] }), '\n', (0, r.jsx)(z, { headingLevel: 2 })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(_, { ...e }) }) : _(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => o });
   var t = i(30758);
   const r = {},
    a = t.createContext(r);
   function s(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
