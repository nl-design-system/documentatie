'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16386],
 {
  49824: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var l = r(52676),
    t = r(87118);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
  },
  52043: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => F, contentTitle: () => _, default: () => V, frontMatter: () => w, metadata: () => C, toc: () => N });
   var l = r(52676),
    t = r(87118),
    i = r(49824),
    o = r(57716);
   function s(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'vermeld-duidelijk-of-een-veld-wel-of-niet-verplicht-is', children: 'Vermeld duidelijk of een veld wel of niet verplicht is' }), '\n', (0, l.jsx)(n.p, { children: 'Laat gebruikers duidelijk weten welke informatie ingevuld moeten worden om een formulier te verzenden. Hiervoor heb je twee opties.' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['Door de ', (0, l.jsx)(n.strong, { children: 'niet-verplichte' }), ' velden te markeren.'] }), '\n', (0, l.jsxs)(n.li, { children: ['Door de ', (0, l.jsx)(n.strong, { children: 'verplichte' }), ' velden te markeren.'] }), '\n'] }), '\n', (0, l.jsx)(n.p, { children: 'Op basis van gebruikersonderzoek zouden wij de eerste optie aanbevelen.' }), '\n', (0, l.jsx)(n.p, { children: 'Plaats de uitleg over wel of niet verplichte velden altijd boven het formulier, zodat de gebruiker weet wat te verwachten bij het invullen.' }), '\n', (0, l.jsx)(n.p, { children: 'Maak de markering ook onderdeel van de labeltekst.' }), '\n', (0, l.jsxs)(n.p, { children: ['Screenreadergebruikers krijgen deze informatie daarnaast ook voorgelezen door ', (0, l.jsx)(n.code, { children: 'aria-required' }), ' of ', (0, l.jsx)(n.code, { children: 'required' }), ' in de code op te nemen bij de verplichte velden.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Door te helpen fouten te voorkomen voldoe van aan ', (0, l.jsx)(n.a, { href: '/wcag/3.3.2', children: 'WCAG-succescriterium 3.3.2 Labels of instructies' }), ' (niveau A).'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
   var d = r(43599),
    c = r(40761);
   function h(e) {
    const n = { button: 'button', form: 'form', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(c.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe niet-verplichte velden worden aangegeven.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.p, { children: 'Vul alles in. Als iets niet verplicht is, staat dat erbij.' }), (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { htmlFor: 'kleur1', children: 'Wat is je lievelingskleur' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur1', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, l.jsx)(n.label, { htmlFor: 'dier1', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, l.jsx)(n.input, { type: 'text', id: 'dier1', name: 'lievelingsdier' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, l.jsx)(c.X, { appearance: 'dont', title: 'De gebruiker laten raden wat er al dan niet verplicht is.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { htmlFor: 'kleur2', children: 'Wat is je lievelingskleur' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur2', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, l.jsx)(n.label, { htmlFor: 'dier2', children: 'Wat is je lievelingsdier' }), (0, l.jsx)(n.input, { type: 'text', id: 'dier2', name: 'lievelingsdier' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'niet-verplichte-velden-markeren', children: 'Niet-verplichte velden markeren' }), '\n', (0, l.jsx)(n.p, { children: "Uitgaande van het gegeven dat je in formulieren enkel het broodnodige uitvraagt zullen de meeste velden verplicht zijn. Hierdoor vormen de niet-verplichte velden een uitzondering. Geef dit aan door bij de niet-verplichte velden de tekst '(niet verplicht)' in het label op te nemen." }), '\n', (0, l.jsx)(n.p, { children: "Gebruikersonderzoek over de toepassing van 'niet verplicht' versus 'verplicht':" }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: 'https://adamsilver.io/blog/how-to-highlight-required-and-optional-form-fields/', children: (0, l.jsx)('span', { lang: 'en', children: '4 common mistakes UI/UX designers make when trying to help users spot required form fields (and what user research shows is better)' }) }), ' van Adam Silver.'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: 'https://www.lukew.com/ff/entry.asp?725', children: (0, l.jsx)('span', { lang: 'en', children: 'Blog post: Marking Required vs. Optional form fields' }) }), ' van Luke Wroblewski.'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: 'https://ask.lukew.com/chat?id=f6862342-64d1-4de9-a28a-16f4fe614452', children: (0, l.jsx)('span', { lang: 'en', children: 'Chatbot answer: Required versus optional fields' }) }), ' van Luke Wroblewski.'] }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: 'Let op' }), ": Het woord 'optioneel' kan te moeilijk zijn voor mensen die laaggeletterd zijn. Gebruik dus 'niet verplicht'."] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { button: 'button', form: 'form', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(c.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.p, { children: 'Als iets verplicht is, staat dit erbij.' }), (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { htmlFor: 'kleur3', children: 'Wat is je lievelingskleur (verplicht)' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, l.jsx)(n.label, { htmlFor: 'dier3', children: 'Wat is je lievelingsdier' }), (0, l.jsx)(n.input, { type: 'text', id: 'dier3', name: 'lievelingsdier' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, l.jsx)(c.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven en leg uit wat asterisk betekent.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.p, { children: 'Als iets verplicht is, staat er een * bij.' }), (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { htmlFor: 'kleur4', children: 'Wat is je lievelingskleur *' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur24', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, l.jsx)(n.label, { htmlFor: 'dier4', children: 'Wat is je lievelingsdier' }), (0, l.jsx)(n.input, { type: 'text', id: 'dier4', name: 'lievelingsdier' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, l.jsx)(c.X, { appearance: 'dont', title: 'Bij alle velden aangeven of het al dan niet verplicht is.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { htmlFor: 'kleur5', children: 'Wat is je lievelingskleur (verplicht)' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, l.jsx)(n.label, { htmlFor: 'dier5', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, l.jsx)(n.input, { type: 'text', id: 'dier5', name: 'lievelingsdier' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   function x(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'verplichte-velden-markeren', children: 'Verplichte velden markeren' }), '\n', (0, l.jsx)(n.p, { children: "Zijn de meeste velden in een formulier 'niet verplicht'? Of is het technisch niet mogelijk om de niet-verplichte velden te markeren? Geef dit dan aan door bij de verplichte velden de tekst '(verplicht)' in het label op te nemen." }), '\n', (0, l.jsx)(n.p, { children: "Een populaire manier om verplichte velden aan te duiden is door in het label een asterisk '*' op te nemen. Dit heeft niet de voorkeur omdat dit een extra denkstap voor de gebruikers vergt, zoals blijkt uit bovenstaand gebruikersonderzoek." }), '\n', (0, l.jsx)(n.p, { children: 'Gebruik je deze constructie toch omdat je CMS of plug-in alleen deze mogelijkheid biedt, leg dan boven het formulier uit wat de asterisk betekent. Een asterisk alleen bij het formulierveld is niet voldoende, niet iedereen bezit deze voorkennis.' }), '\n', (0, l.jsxs)(n.p, { children: ['Uit onderzoek van Elevenways blijkt dat de asterisk goed wordt voorgelezen door screenreaders: ', (0, l.jsx)(n.a, { href: 'https://elevenways.be/nl/artikels/hoe-screen-readers-speciale-tekens-lezen', children: 'Hoe screenreaders speciale tekens lezen: een update' }), '.'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x(e);
   }
   function b(e) {
    const n = { button: 'button', form: 'form', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(c.X, { appearance: 'do', title: 'Gebruik aria-required om aan te geven of een veld verplicht is.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { htmlFor: 'kleur8', children: 'Wat is je lievelingskleur (verplicht)' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur8', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, l.jsx)(c.X, { appearance: 'do', title: 'Gebruik required om aan te geven of een veld verplicht is, in combinatie met novalidate.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { noValidate: !0, children: [(0, l.jsx)(n.label, { htmlFor: 'kleur9', children: 'Wat is je lievelingskleur (verplicht)' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur9', name: 'lievelingskleur', required: !0, 'aria-invalid': 'false' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, l.jsx)(c.X, { appearance: 'dont', title: 'Geef helemaal niet aan of een veld verplicht is, en laat de gebruiker dit pas weten bij de foutmeldingen.', children: (0, l.jsx)(d.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { htmlFor: 'kleur10', children: 'Wat is je lievelingskleur' }), (0, l.jsx)(n.p, { id: 'fout10', children: 'Invoerfout: Vul de naam van een kleur in.' }), (0, l.jsx)(n.input, { type: 'text', id: 'kleur10', 'aria-describedby': 'fout10', name: 'lievelingskleur' }), (0, l.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(b, { ...e }) }) : b(e);
   }
   function f(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'screenreaderfeedback', children: 'Screenreaderfeedback' }), '\n', (0, l.jsxs)(n.p, { children: ['Vertel een gebruiker van hulptechnologie\xebn (als screenreaders) dat een veld verplicht is met het ARIA-attribuut ', (0, l.jsx)(n.code, { children: 'aria-required="true"' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Je kunt ook het HTML-attribuut ', (0, l.jsx)(n.code, { children: 'required' }), ' gebruiken in plaats van ', (0, l.jsx)(n.code, { children: 'aria-required' }), ', maar dit vereist ook het attribuut ', (0, l.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate', children: 'novalidate' }), ' in het ', (0, l.jsx)(n.code, { children: '<form>' }), ' element.\nNovalidate voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor aria-required="true" hoeft dit niet. Alhoewel het gebruik van required in plaats van aria-required niet fout is, geven we daarom de voorkeur aan aria-required.'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(f, { ...e }) }) : f(e);
   }
   const w = { title: 'Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Optioneel of verplicht', pagination_label: 'Optioneel of verplicht', description: 'Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', keywords: ['labels', 'formulier', 'design', 'code'] },
    _ = void 0,
    C = { id: 'richtlijnen/formulieren/help/show-required/README', title: 'Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.', source: '@site/docs/richtlijnen/formulieren/help/1-show-required/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/1-show-required', slug: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', permalink: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/1-show-required/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Optioneel of verplicht', pagination_label: 'Optioneel of verplicht', description: 'Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Voorkom fouten in een formulier', permalink: '/richtlijnen/formulieren/voorkom-fouten/' }, next: { title: 'Wachtwoord plakken', permalink: '/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/' } },
    F = {},
    N = [
     { value: 'Optie 1: &#39;niet-verplichte&#39; velden markeren', id: 'optie-1-niet-verplichte-velden-markeren', level: 2 },
     { value: 'Optie 2: &#39;verplichte&#39; velden markeren', id: 'optie-2-verplichte-velden-markeren', level: 2 },
    ];
   function z(e) {
    const n = { h2: 'h2', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(a, {}), '\n', (0, l.jsx)(n.h2, { id: 'optie-1-niet-verplichte-velden-markeren', children: "Optie 1: 'niet-verplichte' velden markeren" }), '\n', (0, l.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, l.jsx)(v, {}) }), '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(n.h2, { id: 'optie-2-verplichte-velden-markeren', children: "Optie 2: 'verplichte' velden markeren" }), '\n', (0, l.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, l.jsx)(g, {}) }), '\n', (0, l.jsx)(j, {}), '\n', (0, l.jsx)(o.U, { headinglevel: 2, children: (0, l.jsx)(y, {}) }), '\n', (0, l.jsx)(k, {}), '\n', (0, l.jsx)(i.ZP, {})] });
   }
   function V(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(z, { ...e }) }) : z(e);
   }
  },
  43599: (e, n, r) => {
   r.d(n, { X: () => x });
   var l = r(41179),
    t = r(31916),
    i = r(4814),
    o = r(25585),
    s = r(40282),
    a = r(40678),
    d = r(85722),
    c = r(6374),
    h = r(75271),
    u = r(60027),
    p = r(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   m.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   j.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: r = !0, defaultExpandedCode: x = !1, displayCode: g = !0, children: b, container: k = 'document', language: f, designTokens: y } = e;
    const w = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof n ? n() : (0, h.isValidElement)(n) ? n : void 0,
     C = 'string' == typeof n ? n : u.uS(_ || w),
     [F, N] = (0, h.useState)(C),
     [z, V] = (0, h.useState)(x);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(C, { parser: f, plugins: [o.Z, s.ZP, a.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [C]);
    const q = (0, h.useId)();
    let Z = h.Fragment;
    return (
     'paragraph' === k ? (Z = v) : 'document' === k ? (Z = m) : 'surface' === k && (Z = j),
     (0, p.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       w && (0, p.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, p.jsx)(Z, { children: (0, p.jsx)(t.pu, { children: w }) }) }) }),
       g &&
        (0, p.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(t.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           V(!z);
          },
          'aria-expanded': z,
          'aria-controls': q,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, p.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !r && 'nlds-canvas__code-block--user-select-none'),
         id: q,
         hidden: !z,
         children: [
          (0, p.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: F, trim: !0 }),
          r &&
           (0, p.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(t.zx, {
             className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(F).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, r) => {
   r.d(n, { u: () => d });
   var l = r(31916),
    t = r(70739),
    i = r(75271),
    o = r(40761);
   const s = {
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
   var a = r(52676);
   function d(e) {
    let { lineNumber: n, syntax: r, textContent: d, trim: c } = e,
     h = d;
    const { title: u, type: p } = (0, i.useContext)(o.n),
     v = (0, i.useId)();
    return (
     c && (h = h.trim()),
     (0, a.jsx)(t.y$, {
      theme: s,
      code: h,
      language: r || '',
      children: (e) => {
       let { style: r, tokens: t, getLineProps: i, getTokenProps: o } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(l.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': v, style: r, children: t.map((e, r) => (0, a.jsxs)('span', { ...i({ line: e }), children: [n && (0, a.jsx)('span', { children: r + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, r)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, r) => {
   r.d(n, { X: () => c, n: () => d });
   var l = r(77355),
    t = r(67663),
    i = r(31916),
    o = r(4814),
    s = r(75271),
    a = r(52676);
   const d = (0, s.createContext)({}),
    c = (e) => {
     let { title: n, appearance: r, description: s, children: c, figure: h } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      v = h ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, o.Z)('nlds-guideline', `nlds-guideline--${r}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${r}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${r}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(i.nv, { children: n })] }), s] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: n, type: u[r] }, children: c }) })] });
    };
  },
  57716: (e, n, r) => {
   r.d(n, { U: () => c });
   var l = r(87118),
    t = r(31916),
    i = r(52676);
   const o = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: l, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + l + t;
     }
     return r.toString();
    },
    s = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: r, ...l } = n;
      return (0, i.jsx)('img', { ...l, src: o(e, r), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return (e.h1 = () => null), e;
     }
     return s[n];
    },
    c = (e) => {
     let { children: n, omitH1: r = !1, headingLevel: t = 1, baseUrl: o = '', components: s = {} } = e;
     return (0, i.jsx)(l.Z, { components: { ...d(r, t), ...a(o), ...s }, children: n });
    };
  },
  87118: (e, n, r) => {
   r.d(n, { Z: () => s, a: () => o });
   var l = r(75271);
   const t = {},
    i = l.createContext(t);
   function o(e) {
    const n = l.useContext(i);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), l.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
