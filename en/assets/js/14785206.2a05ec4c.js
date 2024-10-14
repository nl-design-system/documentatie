'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [15412],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => o });
   var t = l(52676),
    i = l(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  38472: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => b, contentTitle: () => p, default: () => v, frontMatter: () => m, metadata: () => h, toc: () => g });
   var t = l(52676),
    i = l(24785),
    r = l(98480),
    o = l(91050);
   function a(e) {
    const n = { div: 'div', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(o.X, { appearance: 'do', title: 'Uitvragen geboortedatum met een tekstveld.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'date0', children: 'Geboortedatum' }), (0, t.jsx)(n.p, { id: 'description-date0', children: 'Bijvoorbeeld 31 december 1970.' }), (0, t.jsx)(n.input, { id: 'date0', type: 'text', autocomplete: 'bday', 'aria-describedby': 'description-date0' })] }) }) }), '\n', (0, t.jsx)(o.X, { appearance: 'do', title: 'Uitvragen geboortedatum met een datumveld.', description: 'De meeste browsers voegen zelf een datumkiezer toe.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'date1', children: 'Geboortedatum' }), (0, t.jsx)(n.p, { id: 'description-date1', children: 'Bijvoorbeeld 31/12/1970.' }), (0, t.jsx)(n.input, { id: 'date1', type: 'date', 'aria-describedby': 'description-date1', autocomplete: 'bday' })] }) }) }), '\n', (0, t.jsx)(o.X, { appearance: 'do', title: 'Uitvragen geboortedatum met een inputmode=numeric.', children: (0, t.jsx)(r.X, { language: 'html', designTokens: { '--utrecht-textbox-max-inline-size': '20ch' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)(n.fieldset, { children: [(0, t.jsx)(n.legend, { children: 'Geboortedatum' }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.label, { for: 'day2', children: 'Dag' }), (0, t.jsx)(n.div, { id: 'description-day2', children: 'Bijvoorbeeld 31.' }), (0, t.jsx)(n.input, { id: 'day2', type: 'text', inputmode: 'numeric', 'aria-describedby': 'description-day2', autocomplete: 'bday-day', maxlength: '2' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.label, { for: 'month2', children: 'Maand' }), (0, t.jsx)(n.div, { id: 'description-month2', children: 'Bijvoorbeeld 12 voor december.' }), (0, t.jsx)(n.input, { id: 'month2', type: 'text', inputmode: 'numeric', 'aria-describedby': 'description-month2', autocomplete: 'bday-month', maxlength: '2' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.label, { for: 'year2', children: 'Jaar' }), (0, t.jsx)(n.div, { id: 'description-year2', children: 'Bijvoorbeeld 1970.' }), (0, t.jsx)(n.input, { id: 'c2', type: 'text', inputmode: 'numeric', 'aria-describedby': 'description-year2', autocomplete: 'bday-year', maxlength: '4' })] })] }) }) }) }), '\n', (0, t.jsx)(o.X, { appearance: 'dont', title: 'Uitvragen geboortedatum met een nummerveld (type=number).', children: (0, t.jsx)(r.X, { language: 'html', designTokens: { '--utrecht-textbox-max-inline-size': '20ch' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)(n.fieldset, { children: [(0, t.jsx)(n.legend, { children: 'Geboortedatum' }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.label, { for: 'day3', children: 'Dag' }), (0, t.jsx)(n.div, { id: 'description-day3', children: 'Bijvoorbeeld 31.' }), (0, t.jsx)(n.input, { id: 'day3', type: 'number', 'aria-describedby': 'description-day3', autocomplete: 'bday-day', min: '1', max: '31' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.label, { for: 'month3', children: 'Maand' }), (0, t.jsx)(n.div, { id: 'description-month3', children: 'Bijvoorbeeld 12 voor december.' }), (0, t.jsx)(n.input, { id: 'month3', type: 'number', 'aria-describedby': 'description-month3', autocomplete: 'bday-month', min: '1', max: '12' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.label, { for: 'year3', children: 'Jaar' }), (0, t.jsx)(n.div, { id: 'description-year3', children: 'Bijvoorbeeld 1970.' }), (0, t.jsx)(n.input, { id: 'year3', type: 'number', 'aria-describedby': 'description-year3', autocomplete: 'bday-year' })] })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function s(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'zorg-dat-iedereen-een-formulierelement-kan-bedienen-of-geef-een-alternatief', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), '\n', (0, t.jsx)(n.p, { children: 'Sommige formulierelementen werken (nog) niet goed of zijn complex om te bedienen met toetsenbord, screenreader of stembesturing.' }), '\n', (0, t.jsxs)(n.p, { children: ['Op ', (0, t.jsx)(n.a, { href: 'https://html5accessibility.com/', children: 'HTML5 Accessibility' }), ' houdt Steve Faulkner de ondersteuning bij van HTML-elementen, in de verschillende browsers en voor de diverse hulpmiddelen.'] }), '\n', (0, t.jsx)(n.p, { children: 'De ontwikkeling van browsers gaat snel en het gebruik van HTML geeft niet altijd garantie voor toegankelijkheid. Test daarom altijd een formulier met toetsenbord, screenreader of stembesturing.' }), '\n', (0, t.jsx)(n.p, { children: 'Ervoor zorgen dat iedereen een formulierelement kan bedienen en begrijpen is nodig om te voldoen aan de volgende WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/1.3.2', children: '1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.1.1', children: '2.1.1 Toetsenbord' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6 Koppen en labels' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/3.3.2', children: '3.3.2 Labels of Instructies' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'multiselect', children: 'Multiselect' }), '\n', (0, t.jsxs)(n.p, { children: ['Het multiselect formulierelement ', (0, t.jsx)(n.code, { children: '<select multiple>' }), ' is ingewikkeld te bedienen met toetsenbord. In Safari werkt multiselect (nog) niet met een toetsenbord en daarom ook niet met de screenreader VoiceOver.'] }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik in plaats van multiselect bijvoorbeeld checkboxes om gebruikers meerdere keuzes te laten maken.' }), '\n', (0, t.jsx)(n.h2, { id: 'datum--en-tijdkiezers', children: 'Datum- en tijdkiezers' }), '\n', (0, t.jsx)(n.p, { children: 'Datum- en tijdkiezers zijn lastig goed toegankelijk te maken, zodat ze voor iedereen makkelijk te begrijpen en te bedienen zijn. Maar ze kunnen wel handig zijn voor ziende muisgebruikers.' }), '\n', (0, t.jsx)(n.p, { children: 'De beste optie is om naast de kiezer ook een alternatief toe te voegen, een formulierveld waar gebruikers de datum of tijd kunnen invullen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Veel browsers voegen zelf al een kiezer toe voor de ', (0, t.jsx)(n.code, { children: '<input type="date">' }), ' en ', (0, t.jsx)(n.code, { children: '<input type="time">' }), '-elementen, de gebruiker kan dan beide opties gebruiken. Het is alleen jammer dat deze kiezers (nog) niet te stijlen zijn met CSS. Daarnaast zien de kiezers er per browser verschillend uit en werken ze anders.'] }), '\n', (0, t.jsx)(n.h3, { id: 'input-typenumber-versus-inputmodenumeric', children: 'Input type="number" versus inputmode="numeric"' }), '\n', (0, t.jsxs)(n.p, { children: ['Een andere optie is het laten invoeren van alleen nummers met ', (0, t.jsx)(n.code, { children: '<input type="number">' }), '\nBijvoorbeeld:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<label for="dag1">Geboortedag</label> <input id="dag1" type="number" autocomplete="bday-day" min="1" max="31" />\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['GOV.UK heeft hier onderzoek naar gedaan en vindt ', (0, t.jsx)(n.a, { href: 'https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/', children: 'type=number qua gebruikersvriendelijkheid te foutgevoelig' }), '.'] }), '\n', (0, t.jsxs)(n.blockquote, { children: ['\n', (0, t.jsxs)(n.p, { children: ['Met ', (0, t.jsx)(n.code, { children: '<input type="number">' }), ' bestaat het risico dat gebruikers per ongeluk een getal verhogen wanneer ze iets anders proberen te doen, bijvoorbeeld omhoog of omlaag scrollen op de pagina. En als de gebruiker iets probeert in te voeren dat geen getal is, is er geen expliciete feedback over wat verkeerd gaat.'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Zij beveelt het gebruik van ', (0, t.jsx)(n.code, { children: 'inputmode="numeric"' }), ' aan, omdat dit het numerieke toetsenbord op mobile apparaten activeert.'] }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<label for="dag2">Geboortedag</label> <input id="dag2" type="text" inputmode="numeric" autocomplete="bday-day" />\n' }) }), '\n', (0, t.jsx)(n.h3, { id: 'selects-voor-dag-maand-en-jaar', children: 'Selects voor dag, maand en jaar' }), '\n', (0, t.jsx)(n.p, { children: 'Een optie is het gebruik van 3 select-opties met de waardes van bijvoorbeeld dag, maand en jaar. Het nadeel hiervan is dat de select voor een geboortejaar een hele lange lijst kan worden. Het kan confronterend zijn als, scrollend door een lange lijst aan jaartallen, beseft dat je wel erg oud aan het worden bent...' }), '\n', (0, t.jsx)(n.h3, { id: 'tekstveld', children: 'Tekstveld' }), '\n', (0, t.jsx)(n.p, { children: 'Als de data niet verder automatisch verwerkt gaat worden is een tekstveld een makkelijke optie. Dan is de gebruiker vrij een eigen format te kiezen. Geef dan wel een hint in de description hoe dit het beste te doen.' }), '\n', (0, t.jsx)(n.h3, { id: 'de-keuze-hangt-af-van-de-context', children: 'De keuze hangt af van de context' }), '\n', (0, t.jsx)(n.p, { children: 'Welke optie je kiest, is afhankelijk van de context. Wat vraag je uit? En wat gaat er met de data gebeuren? Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Kent men de datum uit het hoofd (bijvoorbeeld geboortedatum)? Gebruik dan drie losse invulvelden.' }), '\n', (0, t.jsx)(n.li, { children: 'Kan men een datum prikken (bijvoorbeeld een afspraak)? Dan is een datumkiezer in combinatie met zelf invullen een goed plan. "Ik weet de datum niet maar woensdagen komen mij het best uit". Hou wel rekening met \'niet beschikbare\' dagen, gebruik in dat geval als alternatief bijvoorbeeld een select-optie met beperkte keuzes.' }), '\n', (0, t.jsx)(n.li, { children: 'Kan de gebruiker alleen kiezen uit een paar data (bijvoorbeeld vanaf vandaag tot een week vooruit), dan zijn radio buttons geschikt.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Lees hierover meer op ', (0, t.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/dates/', children: 'Ask users for Dates' }), ' van GOV.UK.'] }), '\n', (0, t.jsx)(n.p, { children: 'De regel is altijd: Je kunt een ontoegankelijke component aanbieden, mits je ook een goed toegankelijk alternatief aanbiedt.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
   var u = l(55400);
   const m = { title: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief | Wanneer gebruik je welk formulierelement? | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Iedereen kan velden invullen', pagination_label: 'Iedereen kan velden invullen', description: 'Richtlijnen om een formulier door iedereen in te kunnen laten vullen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/when-which/compat/README', title: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief | Wanneer gebruik je welk formulierelement? | Richtlijnen', description: 'Richtlijnen om een formulier door iedereen in te kunnen laten vullen.', source: '@site/docs/richtlijnen/formulieren/when-which/1-compat/README.mdx', sourceDirName: 'richtlijnen/formulieren/when-which/1-compat', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', permalink: '/en/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/when-which/1-compat/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief | Wanneer gebruik je welk formulierelement? | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Iedereen kan velden invullen', pagination_label: 'Iedereen kan velden invullen', description: 'Richtlijnen om een formulier door iedereen in te kunnen laten vullen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Wanneer gebruik je welk formulierelement', permalink: '/en/richtlijnen/formulieren/wanneer-welk-form-element/' }, next: { title: 'Kies het meest gebruiksvriendelijke formulierelement', permalink: '/en/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid' } },
    b = {},
    g = [];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(u.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => v });
   var t = l(46506),
    i = l(4814),
    r = l(25585),
    o = l(40282),
    a = l(40678),
    d = l(85722),
    s = l(6374),
    c = l(75271),
    u = l(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = l(41179),
    h = l(52676);
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, h.jsx)(t.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   b.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   j.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: x = !0, children: k, container: y = 'document', language: f, designTokens: _ } = e,
     w = 'function' == typeof k ? k() : k,
     z = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(z || w),
     [Z, D] = (0, c.useState)(N),
     [S, C] = (0, c.useState)(v);
    (0, c.useEffect)(() => {
     (async () => {
      (Z = await s.ZP.format(N, { parser: f, plugins: [r.Z, o.ZP, a.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), D(Z);
     })();
    }, [N]);
    const B = (0, c.useId)();
    let A = c.Fragment;
    return (
     'paragraph' === y ? (A = b) : 'document' === y ? (A = g) : 'surface' === y && (A = j),
     (0, h.jsxs)('div', {
      className: (0, i.Z)(m['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, i.Z)(m['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: _, children: (0, h.jsx)(A, { children: (0, h.jsx)(t.pu, { children: w }) }) }) }),
       x &&
        (0, h.jsx)('div', {
         className: (0, i.Z)(m['nlds-canvas__toolbar']),
         children: (0, h.jsx)(t.zx, {
          className: (0, i.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           C(!S);
          },
          'aria-expanded': S,
          'aria-controls': B,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       x &&
        (0, h.jsxs)('div', {
         className: (0, i.Z)(m['nlds-canvas__code-block'], !l && m['nlds-canvas__code-block--user-select-none']),
         id: B,
         hidden: !S,
         children: [
          (0, h.jsx)(p.u, { syntax: f, textContent: Z, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, i.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(t.zx, {
             className: (0, i.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => a });
   var t = l(46506),
    i = l(70739);
   l(75271);
   const r = {
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
   var o = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: d } = e,
     s = a;
    return (
     d && (s = s.trim()),
     (0, o.jsx)(i.y$, {
      theme: r,
      code: s,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: i, getLineProps: r, getTokenProps: a } = e;
       return (0, o.jsx)(t.dn, { style: l, children: i.map((e, l) => (0, o.jsxs)('span', { ...r({ line: e }), children: [n && (0, o.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, o.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => s });
   var t = l(77355),
    i = l(67663),
    r = l(46506),
    o = l(4814);
   l(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var d = l(52676);
   const s = (e) => {
    let { title: n, appearance: l, description: s, children: c, figure: u } = e;
    const m = 'Doen',
     p = 'Niet doen',
     h = u ? 'figure' : 'div',
     b = u ? 'figcaption' : 'div';
    return (0, d.jsxs)(h, { className: (0, o.Z)(a['nlds-guideline'], a[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(b, { className: (0, o.Z)(a['nlds-guideline__description']), children: ['dont' === l ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { className: (0, o.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(t.Z, { className: a['nlds-guideline__icon'] }), (0, d.jsx)('span', { className: a['nlds-guideline__title'], children: p })] }), (0, d.jsx)(r.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { className: (0, o.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(i.Z, { className: a['nlds-guideline__icon'] }), (0, d.jsx)('span', { className: a['nlds-guideline__title'], children: m })] }), (0, d.jsx)(r.nv, { children: n })] }), s] }), (0, d.jsx)('div', { className: (0, o.Z)(a['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => o });
   var t = l(75271);
   const i = {},
    r = t.createContext(i);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
