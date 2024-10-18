'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16386],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => s });
   var r = l(52676),
    i = l(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  79940: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => N, contentTitle: () => w, default: () => Z, frontMatter: () => y, metadata: () => C, toc: () => z });
   var r = l(52676),
    i = l(24785),
    t = l(57716);
   function s(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'vermeld-duidelijk-of-een-veld-wel-of-niet-verplicht-is', children: 'Vermeld duidelijk of een veld wel of niet verplicht is' }), '\n', (0, r.jsx)(n.p, { children: 'Laat gebruikers duidelijk weten welke informatie ingevuld moeten worden om een formulier te verzenden. Hiervoor heb je twee opties.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Door de ', (0, r.jsx)(n.strong, { children: 'niet-verplichte' }), ' velden te markeren.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Door de ', (0, r.jsx)(n.strong, { children: 'verplichte' }), ' velden te markeren.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Op basis van gebruikersonderzoek zouden wij de eerste optie aanbevelen.' }), '\n', (0, r.jsx)(n.p, { children: 'Plaats de uitleg over wel of niet verplichte velden altijd boven het formulier, zodat de gebruiker weet wat te verwachten bij het invullen.' }), '\n', (0, r.jsx)(n.p, { children: 'Maak de markering ook onderdeel van de labeltekst.' }), '\n', (0, r.jsxs)(n.p, { children: ['Screenreadergebruikers krijgen deze informatie daarnaast ook voorgelezen door ', (0, r.jsx)(n.code, { children: 'aria-required' }), ' of ', (0, r.jsx)(n.code, { children: 'required' }), ' in de code op te nemen bij de verplichte velden.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Door te helpen fouten te voorkomen voldoe van aan ', (0, r.jsx)(n.a, { href: '/wcag/3.3.2', children: 'WCAG-succescriterium 3.3.2 Labels of instructies' }), ' (niveau A).'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   var a = l(98480),
    d = l(91050);
   function c(e) {
    const n = { button: 'button', form: 'form', input: 'input', label: 'label', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(d.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe niet-verplichte velden worden aangegeven.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.' }), (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: 'kleur1', children: 'Wat is je lievelingskleur' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur1', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, r.jsx)(n.label, { for: 'dier1', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, r.jsx)(n.input, { type: 'text', id: 'dier1', name: 'lievelingsdier' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, r.jsx)(d.X, { appearance: 'dont', title: 'De gebruiker laten raden wat er al dan niet verplicht is.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: 'kleur2', children: 'Wat is je lievelingskleur' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur2', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, r.jsx)(n.label, { for: 'dier2', children: 'Wat is je lievelingsdier' }), (0, r.jsx)(n.input, { type: 'text', id: 'dier2', name: 'lievelingsdier' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'niet-verplichte-velden-markeren', children: 'Niet-verplichte velden markeren' }), '\n', (0, r.jsx)(n.p, { children: "Uitgaande van het gegeven dat je in formulieren enkel het broodnodige uitvraagt zullen de meeste velden verplicht zijn. Hierdoor vormen de niet-verplichte velden een uitzondering. Geef dit aan door bij de niet-verplichte velden de tekst '(niet verplicht)' in het label op te nemen." }), '\n', (0, r.jsx)(n.p, { children: "Gebruikersonderzoek over de toepassing van 'niet verplicht' versus 'verplicht':" }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://adamsilver.io/blog/how-to-highlight-required-and-optional-form-fields/', children: (0, r.jsx)('span', { lang: 'en', children: '4 common mistakes UI/UX designers make when trying to help users spot required form fields (and what user research shows is better)' }) }), ' van Adam Silver.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.lukew.com/ff/entry.asp?725', children: (0, r.jsx)('span', { lang: 'en', children: 'Blog post: Marking Required vs. Optional form fields' }) }), ' van Luke Wroblewski.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://ask.lukew.com/chat?id=f6862342-64d1-4de9-a28a-16f4fe614452', children: (0, r.jsx)('span', { lang: 'en', children: 'Chatbot answer: Required versus optional fields' }) }), ' van Luke Wroblewski.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ": Het woord 'optioneel' kan te moeilijk zijn voor mensen die laaggeletterd zijn. Gebruik dus 'niet verplicht'."] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function v(e) {
    const n = { button: 'button', form: 'form', input: 'input', label: 'label', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(d.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als een veld verplicht is, staat dit erbij.' }), (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: 'kleur3', children: 'Wat is je lievelingskleur (verplicht)' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, r.jsx)(n.label, { for: 'dier3', children: 'Wat is je lievelingsdier' }), (0, r.jsx)(n.input, { type: 'text', id: 'dier3', name: 'lievelingsdier' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, r.jsx)(d.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven en leg uit wat asterisk betekent.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als een veld verplicht is, staat er een * bij.' }), (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: 'kleur4', children: 'Wat is je lievelingskleur *' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur24', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, r.jsx)(n.label, { for: 'dier4', children: 'Wat is je lievelingsdier' }), (0, r.jsx)(n.input, { type: 'text', id: 'dier4', name: 'lievelingsdier' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, r.jsx)(d.X, { appearance: 'dont', title: 'Bij alle velden aangeven of het al dan niet verplicht is.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: 'kleur5', children: 'Wat is je lievelingskleur (verplicht)' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, r.jsx)(n.label, { for: 'dier5', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, r.jsx)(n.input, { type: 'text', id: 'dier5', name: 'lievelingsdier' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function j(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'verplichte-velden-markeren', children: 'Verplichte velden markeren' }), '\n', (0, r.jsx)(n.p, { children: "Zijn de meeste velden in een formulier 'niet verplicht'? Of is het technisch niet mogelijk om de niet-verplichte velden te markeren? Geef dit dan aan door bij de verplichte velden de tekst '(verplicht)' in het label op te nemen." }), '\n', (0, r.jsx)(n.p, { children: "Een populaire manier om verplichte velden aan te duiden is door in het label een asterisk '*' op te nemen. Dit heeft niet de voorkeur omdat dit een extra denkstap voor de gebruikers vergt, zoals blijkt uit bovenstaand gebruikersonderzoek." }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik je deze constructie toch omdat je CMS of plug-in alleen deze mogelijkheid biedt, leg dan boven het formulier uit wat de asterisk betekent. Een asterisk alleen bij het formulierveld is niet voldoende, niet iedereen bezit deze voorkennis.' }), '\n', (0, r.jsxs)(n.p, { children: ['Uit onderzoek van Elevenways blijkt dat de asterisk goed wordt voorgelezen door screenreaders: ', (0, r.jsx)(n.a, { href: 'https://elevenways.be/nl/artikels/hoe-screen-readers-speciale-tekens-lezen', children: 'Hoe screenreaders speciale tekens lezen: een update' }), '.'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
   function x(e) {
    const n = { button: 'button', form: 'form', input: 'input', label: 'label', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(d.X, { appearance: 'do', title: 'Gebruik aria-required om aan te geven of een veld verplicht is.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: 'kleur8', children: 'Wat is je lievelingskleur (verplicht)' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur8', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, r.jsx)(d.X, { appearance: 'do', title: 'Gebruik required om aan te geven of een veld verplicht is, in combinatie met novalidate.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.form, { novalidate: !0, children: [(0, r.jsx)(n.label, { for: 'kleur9', children: 'Wat is je lievelingskleur (verplicht)' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur9', name: 'lievelingskleur', required: !0, 'aria-invalid': 'false' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, r.jsx)(d.X, { appearance: 'dont', title: 'Geef helemaal niet aan of een veld verplicht is, en laat de gebruiker dit pas weten bij de foutmeldingen.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: 'kleur10', children: 'Wat is je lievelingskleur' }), (0, r.jsx)(n.p, { id: 'fout10', children: 'Invoerfout: Vul de naam van een kleur in.' }), (0, r.jsx)(n.input, { type: 'text', id: 'kleur10', 'aria-describedby': 'fout10', name: 'lievelingskleur' }), (0, r.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
   function k(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'screenreaderfeedback', children: 'Screenreaderfeedback' }), '\n', (0, r.jsxs)(n.p, { children: ['Vertel een gebruiker van hulptechnologie\xebn (als screenreaders) dat een veld verplicht is met het ARIA-attribuut ', (0, r.jsx)(n.code, { children: 'aria-required="true"' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Je kunt ook het HTML-attribuut ', (0, r.jsx)(n.code, { children: 'required' }), ' gebruiken in plaats van ', (0, r.jsx)(n.code, { children: 'aria-required' }), ', maar dit vereist ook het attribuut ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate', children: 'novalidate' }), ' in het ', (0, r.jsx)(n.code, { children: '<form>' }), ' element.\nNovalidate voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor aria-required="true" hoeft dit niet. Alhoewel het gebruik van required in plaats van aria-required niet fout is, geven we daarom de voorkeur aan aria-required.'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
   var _ = l(55400);
   const y = { title: 'Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Optioneel of verplicht', pagination_label: 'Optioneel of verplicht', description: 'Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', keywords: ['labels', 'formulier', 'design', 'code'] },
    w = void 0,
    C = { id: 'richtlijnen/formulieren/help/show-required/README', title: 'Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.', source: '@site/docs/richtlijnen/formulieren/help/1-show-required/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/1-show-required', slug: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/1-show-required/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Optioneel of verplicht', pagination_label: 'Optioneel of verplicht', description: 'Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Voorkom fouten in een formulier', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/' }, next: { title: 'Wachtwoord plakken', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/' } },
    N = {},
    z = [
     { value: 'Optie 1: &#39;niet-verplichte&#39; velden markeren', id: 'optie-1-niet-verplichte-velden-markeren', level: 2 },
     { value: 'Optie 2: &#39;verplichte&#39; velden markeren', id: 'optie-2-verplichte-velden-markeren', level: 2 },
    ];
   function q(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(o, {}), '\n', (0, r.jsx)(n.h2, { id: 'optie-1-niet-verplichte-velden-markeren', children: "Optie 1: 'niet-verplichte' velden markeren" }), '\n', (0, r.jsx)(t.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(p, {}) }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.h2, { id: 'optie-2-verplichte-velden-markeren', children: "Optie 2: 'verplichte' velden markeren" }), '\n', (0, r.jsx)(t.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(g, {}) }), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.U, { headinglevel: 2, children: (0, r.jsx)(f, {}) }), '\n', (0, r.jsx)(b, {}), '\n', (0, r.jsx)(_.ZP, {})] });
   }
   function Z(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(q, { ...e }) }) : q(e);
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => x });
   var r = l(46506),
    i = l(4814),
    t = l(25585),
    s = l(40282),
    o = l(40678),
    a = l(85722),
    d = l(6374),
    c = l(75271),
    u = l(60027);
   const h = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = l(41179),
    v = l(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(r.Tg, { className: h['nlds-canvas__example-surface'], children: (0, v.jsx)(r.BB, { className: (0, i.Z)('utrecht-document--surface', h['nlds-canvas__example-document']), children: (0, v.jsx)(r.nv, { className: h['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(r.Tg, { className: h['nlds-canvas__example-surface'], children: (0, v.jsx)(r.BB, { className: (0, i.Z)('utrecht-document--surface', h['nlds-canvas__example-document']), children: n }) });
   };
   j.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(r.Tg, { className: h['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: x = !1, displayCode: b = !0, children: k, container: f = 'document', language: _, designTokens: y } = e,
     w = 'function' == typeof k ? k() : k,
     C = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(C || w),
     [z, q] = (0, c.useState)(N),
     [Z, V] = (0, c.useState)(x);
    (0, c.useEffect)(() => {
     (async () => {
      (z = await d.ZP.format(N, { parser: _, plugins: [t.Z, s.ZP, o.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), q(z);
     })();
    }, [N]);
    const S = (0, c.useId)();
    let W = c.Fragment;
    return (
     'paragraph' === f ? (W = m) : 'document' === f ? (W = j) : 'surface' === f && (W = g),
     (0, v.jsxs)('div', {
      className: (0, i.Z)(h['nlds-canvas']),
      children: [
       w && (0, v.jsx)('div', { className: (0, i.Z)(h['nlds-canvas__example']), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, v.jsx)(W, { children: (0, v.jsx)(r.pu, { children: w }) }) }) }),
       b &&
        (0, v.jsx)('div', {
         className: (0, i.Z)(h['nlds-canvas__toolbar']),
         children: (0, v.jsx)(r.zx, {
          className: (0, i.Z)(h['nlds-canvas__button'], h['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           V(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': S,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, v.jsxs)('div', {
         className: (0, i.Z)(h['nlds-canvas__code-block'], !l && h['nlds-canvas__code-block--user-select-none']),
         id: S,
         hidden: !Z,
         children: [
          (0, v.jsx)(p.u, { syntax: _, textContent: z, trim: !0 }),
          l &&
           (0, v.jsx)('div', {
            className: (0, i.Z)(h['nlds-canvas__toolbar'], h['nlds-canvas__toolbar--copy']),
            children: (0, v.jsx)(r.zx, {
             className: (0, i.Z)(h['nlds-canvas__button'], h['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
             },
             children: 'Kopieer',
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, n, l) => {
   l.d(n, { u: () => o });
   var r = l(46506),
    i = l(70739);
   l(75271);
   const t = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var s = l(52676);
   function o(e) {
    let { lineNumber: n, syntax: l, textContent: o, trim: a } = e,
     d = o;
    return (
     a && (d = d.trim()),
     (0, s.jsx)(i.y$, {
      theme: t,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: i, getLineProps: t, getTokenProps: o } = e;
       return (0, s.jsx)(r.dn, { style: l, children: i.map((e, l) => (0, s.jsxs)('span', { ...t({ line: e }), children: [n && (0, s.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => d });
   var r = l(77355),
    i = l(67663),
    t = l(46506),
    s = l(4814);
   l(75271);
   const o = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c, figure: u } = e;
    const h = 'Doen',
     p = 'Niet doen',
     v = u ? 'figure' : 'div',
     m = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(v, { className: (0, s.Z)(o['nlds-guideline'], o[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: (0, s.Z)(o['nlds-guideline__description']), children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)(o['nlds-guideline__badge'], o[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(r.Z, { className: o['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: o['nlds-guideline__title'], children: p })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)(o['nlds-guideline__badge'], o[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(i.Z, { className: o['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: o['nlds-guideline__title'], children: h })] }), (0, a.jsx)(t.nv, { children: n })] }), d] }), (0, a.jsx)('div', { className: (0, s.Z)(o['nlds-guideline__example']), children: c })] });
   };
  },
  57716: (e, n, l) => {
   l.d(n, { U: () => c });
   var r = l(24785),
    i = l(46506),
    t = (l(75271), l(52676));
   const s = (e, n) => {
     const l = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === l.protocol) {
      const { pathname: l, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return l + r + i;
     }
     return l.toString();
    },
    o = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: l, ...r } = n;
      return (0, t.jsx)('img', { ...r, src: s(e, l), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = (e) => {
     let { children: n, omitH1: l = !1, headingLevel: i = 1, baseUrl: s = '' } = e;
     return (0, t.jsx)(r.Z, { components: { ...d(l, i), ...a(s) }, children: n });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => o, a: () => s });
   var r = l(75271);
   const i = {},
    t = r.createContext(i);
   function s(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
