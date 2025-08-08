'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [15412],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var r = t(52676),
    l = t(40139);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  19338: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => b, contentTitle: () => h, default: () => v, frontMatter: () => u, metadata: () => p, toc: () => j });
   var r = t(52676),
    l = t(40139),
    i = t(66968),
    o = t(43599),
    a = t(40761);
   function d(e) {
    const n = { div: 'div', fieldset: 'fieldset', h2: 'h2', input: 'input', label: 'label', legend: 'legend', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(a.X, { appearance: 'do', title: 'Uitvragen geboortedatum met een tekstveld.', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'date0', children: 'Geboortedatum' }), (0, r.jsx)(n.p, { id: 'description-date0', children: 'Bijvoorbeeld 31 december 1970.' }), (0, r.jsx)(n.input, { id: 'date0', type: 'text', autoComplete: 'bday', 'aria-describedby': 'description-date0' })] }) }) }), '\n', (0, r.jsx)(a.X, { appearance: 'do', title: 'Uitvragen geboortedatum met een datumveld.', description: 'De meeste browsers voegen zelf een datumkiezer toe.', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'date1', children: 'Geboortedatum' }), (0, r.jsx)(n.p, { id: 'description-date1', children: 'Bijvoorbeeld 31/12/1970.' }), (0, r.jsx)(n.input, { id: 'date1', type: 'date', 'aria-describedby': 'description-date1', autoComplete: 'bday' })] }) }) }), '\n', (0, r.jsx)(a.X, { appearance: 'do', title: 'Uitvragen geboortedatum met een inputmode=numeric.', children: (0, r.jsx)(o.X, { language: 'html', designTokens: { '--utrecht-textbox-max-inline-size': '20ch' }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.fieldset, { children: [(0, r.jsx)(n.legend, { children: 'Geboortedatum' }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.label, { htmlFor: 'day2', children: 'Dag' }), (0, r.jsx)(n.div, { id: 'description-day2', children: 'Bijvoorbeeld 31.' }), (0, r.jsx)(n.input, { id: 'day2', type: 'text', inputMode: 'numeric', 'aria-describedby': 'description-day2', autoComplete: 'bday-day', maxLength: '2' })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.label, { htmlFor: 'month2', children: 'Maand' }), (0, r.jsx)(n.div, { id: 'description-month2', children: 'Bijvoorbeeld 12 voor december.' }), (0, r.jsx)(n.input, { id: 'month2', type: 'text', inputMode: 'numeric', 'aria-describedby': 'description-month2', autoComplete: 'bday-month', maxLength: '2' })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.label, { htmlFor: 'year2', children: 'Jaar' }), (0, r.jsx)(n.div, { id: 'description-year2', children: 'Bijvoorbeeld 1970.' }), (0, r.jsx)(n.input, { id: 'c2', type: 'text', inputMode: 'numeric', 'aria-describedby': 'description-year2', autoComplete: 'bday-year', maxLength: '4' })] })] }) }) }) }), '\n', (0, r.jsx)(a.X, { appearance: 'dont', title: 'Uitvragen geboortedatum met een nummerveld (type=number).', children: (0, r.jsx)(o.X, { language: 'html', designTokens: { '--utrecht-textbox-max-inline-size': '20ch' }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(n.fieldset, { children: [(0, r.jsx)(n.legend, { children: 'Geboortedatum' }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.label, { htmlFor: 'day3', children: 'Dag' }), (0, r.jsx)(n.div, { id: 'description-day3', children: 'Bijvoorbeeld 31.' }), (0, r.jsx)(n.input, { id: 'day3', type: 'number', 'aria-describedby': 'description-day3', autoComplete: 'bday-day', min: '1', max: '31' })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.label, { htmlFor: 'month3', children: 'Maand' }), (0, r.jsx)(n.div, { id: 'description-month3', children: 'Bijvoorbeeld 12 voor december.' }), (0, r.jsx)(n.input, { id: 'month3', type: 'number', 'aria-describedby': 'description-month3', autoComplete: 'bday-month', min: '1', max: '12' })] }), (0, r.jsxs)(n.div, { children: [(0, r.jsx)(n.label, { htmlFor: 'year3', children: 'Jaar' }), (0, r.jsx)(n.div, { id: 'description-year3', children: 'Bijvoorbeeld 1970.' }), (0, r.jsx)(n.input, { id: 'year3', type: 'number', 'aria-describedby': 'description-year3', autoComplete: 'bday-year' })] })] }) }) }) })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   function c(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'zorg-dat-iedereen-een-formulierelement-kan-bedienen-of-geef-een-alternatief', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), '\n', (0, r.jsxs)(n.p, { children: ['Sommige formulierelementen werken (nog) niet goed of zijn complex om te bedienen met toetsenbord, ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' of stembesturing.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Op ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/', children: 'HTML5 Accessibility' }), ' houdt Steve Faulkner de ondersteuning bij van HTML-elementen, in de verschillende browsers en voor de diverse hulpmiddelen.'] }), '\n', (0, r.jsx)(n.p, { children: 'De ontwikkeling van browsers gaat snel en het gebruik van HTML geeft niet altijd garantie voor toegankelijkheid. Test daarom altijd een formulier met toetsenbord, screenreader of stembesturing.' }), '\n', (0, r.jsx)(n.p, { children: 'Ervoor zorgen dat iedereen een formulierelement kan bedienen en begrijpen is nodig om te voldoen aan de volgende WCAG-succescriteria:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/1.3.2', children: '1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/2.1.1', children: '2.1.1 Toetsenbord' }), ' (niveau A).'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6 Koppen en labels' }), ' (niveau AA).'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/3.3.2', children: '3.3.2 Labels of Instructies' }), ' (niveau A).'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'multiselect', children: 'Multiselect' }), '\n', (0, r.jsxs)(n.p, { children: ['Het multiselect formulierelement ', (0, r.jsx)(n.code, { children: '<select multiple>' }), ' is ingewikkeld te bedienen met toetsenbord. In Safari werkt multiselect (nog) niet met een toetsenbord en daarom ook niet met de screenreader VoiceOver.'] }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik in plaats van multiselect bijvoorbeeld checkboxes om gebruikers meerdere keuzes te laten maken.' }), '\n', (0, r.jsx)(n.h2, { id: 'datum--en-tijdkiezers', children: 'Datum- en tijdkiezers' }), '\n', (0, r.jsx)(n.p, { children: 'Datum- en tijdkiezers zijn lastig goed toegankelijk te maken, zodat ze voor iedereen makkelijk te begrijpen en te bedienen zijn. Maar ze kunnen wel handig zijn voor ziende muisgebruikers.' }), '\n', (0, r.jsx)(n.p, { children: 'De beste optie is om naast de kiezer ook een alternatief toe te voegen, een formulierveld waar gebruikers de datum of tijd kunnen invullen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Veel browsers voegen zelf al een kiezer toe voor de ', (0, r.jsx)(n.code, { children: '<input type="date">' }), ' en ', (0, r.jsx)(n.code, { children: '<input type="time">' }), '-elementen, de gebruiker kan dan beide opties gebruiken. Het is alleen jammer dat deze kiezers (nog) niet te stijlen zijn met CSS. Daarnaast zien de kiezers er per browser verschillend uit en werken ze anders.'] }), '\n', (0, r.jsx)(n.h3, { id: 'input-typenumber-versus-inputmodenumeric', children: 'Input type="number" versus inputmode="numeric"' }), '\n', (0, r.jsxs)(n.p, { children: ['Een andere optie is het laten invoeren van alleen nummers met ', (0, r.jsx)(n.code, { children: '<input type="number">' }), '\nBijvoorbeeld:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="dag1">Geboortedag</label> <input id="dag1" type="number" autocomplete="bday-day" min="1" max="31" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['GOV.UK heeft hier onderzoek naar gedaan en vindt ', (0, r.jsx)(n.a, { href: 'https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/', children: 'type=number qua gebruikersvriendelijkheid te foutgevoelig' }), '.'] }), '\n', (0, r.jsxs)(n.blockquote, { children: ['\n', (0, r.jsxs)(n.p, { children: ['Met ', (0, r.jsx)(n.code, { children: '<input type="number">' }), ' bestaat het risico dat gebruikers per ongeluk een getal verhogen wanneer ze iets anders proberen te doen, bijvoorbeeld omhoog of omlaag scrollen op de pagina. En als de gebruiker iets probeert in te voeren dat geen getal is, is er geen expliciete feedback over wat verkeerd gaat.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Zij beveelt het gebruik van ', (0, r.jsx)(n.code, { children: 'inputmode="numeric"' }), ' aan, omdat dit het numerieke toetsenbord op mobile apparaten activeert.'] }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="dag2">Geboortedag</label> <input id="dag2" type="text" inputmode="numeric" autocomplete="bday-day" />\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'selects-voor-dag-maand-en-jaar', children: 'Selects voor dag, maand en jaar' }), '\n', (0, r.jsx)(n.p, { children: 'Een optie is het gebruik van 3 select-opties met de waardes van bijvoorbeeld dag, maand en jaar. Het nadeel hiervan is dat de select voor een geboortejaar een hele lange lijst kan worden. Het kan confronterend zijn als, scrollend door een lange lijst aan jaartallen, beseft dat je wel erg oud aan het worden bent...' }), '\n', (0, r.jsx)(n.h3, { id: 'tekstveld', children: 'Tekstveld' }), '\n', (0, r.jsx)(n.p, { children: 'Als de data niet verder automatisch verwerkt gaat worden is een tekstveld een makkelijke optie. Dan is de gebruiker vrij een eigen format te kiezen. Geef dan wel een hint in de description hoe dit het beste te doen.' }), '\n', (0, r.jsx)(n.h3, { id: 'de-keuze-hangt-af-van-de-context', children: 'De keuze hangt af van de context' }), '\n', (0, r.jsx)(n.p, { children: 'Welke optie je kiest, is afhankelijk van de context. Wat vraag je uit? En wat gaat er met de data gebeuren? Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Kent men de datum uit het hoofd (bijvoorbeeld geboortedatum)? Gebruik dan drie losse invulvelden.' }), '\n', (0, r.jsx)(n.li, { children: 'Kan men een datum prikken (bijvoorbeeld een afspraak)? Dan is een datumkiezer in combinatie met zelf invullen een goed plan. "Ik weet de datum niet maar woensdagen komen mij het best uit". Hou wel rekening met \'niet beschikbare\' dagen, gebruik in dat geval als alternatief bijvoorbeeld een select-optie met beperkte keuzes.' }), '\n', (0, r.jsx)(n.li, { children: 'Kan de gebruiker alleen kiezen uit een paar data (bijvoorbeeld vanaf vandaag tot een week vooruit), dan zijn radio buttons geschikt.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Lees hierover meer op ', (0, r.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/dates/', children: 'Ask users for Dates' }), ' van GOV.UK.'] }), '\n', (0, r.jsx)(n.p, { children: 'De regel is altijd: Je kunt een ontoegankelijke component aanbieden, mits je ook een goed toegankelijk alternatief aanbiedt.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   const u = { title: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief \xb7 Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Iedereen kan velden invullen', pagination_label: 'Iedereen kan velden invullen', description: 'Richtlijnen om een formulier door iedereen in te kunnen laten vullen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    p = { id: 'richtlijnen/formulieren/when-which/compat/README', title: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief \xb7 Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen', description: 'Richtlijnen om een formulier door iedereen in te kunnen laten vullen.', source: '@site/docs/richtlijnen/formulieren/when-which/1-compat/README.mdx', sourceDirName: 'richtlijnen/formulieren/when-which/1-compat', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', permalink: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/when-which/1-compat/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief \xb7 Wanneer gebruik je welk formulierelement? \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Iedereen kan velden invullen', pagination_label: 'Iedereen kan velden invullen', description: 'Richtlijnen om een formulier door iedereen in te kunnen laten vullen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Wanneer gebruik je welk formulierelement', permalink: '/richtlijnen/formulieren/wanneer-welk-form-element/' }, next: { title: 'Kies het meest gebruiksvriendelijke formulierelement', permalink: '/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid' } },
    b = {},
    j = [];
   function g(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(s, {}), '\n', (0, r.jsx)(i.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => g });
   var r = t(41179),
    l = t(16167),
    i = t(4814),
    o = t(64642),
    a = t(93872),
    d = t(86017),
    s = t(48231),
    c = t(75119),
    m = t(75271),
    u = t(60027),
    h = t(52676);
   const p = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   p.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   j.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: g = !1, displayCode: v = !0, children: x, container: k = 'document', language: y, designTokens: f } = e;
    const w = 'function' == typeof x ? x() : x,
     _ = 'function' == typeof n ? n() : (0, m.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(_ || w),
     [N, C] = (0, m.useState)(z),
     [Z, F] = (0, m.useState)(g);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(z, { parser: y, plugins: [o.Z, a.ZP, d.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [z]);
    const D = (0, m.useId)();
    let S = m.Fragment;
    return (
     'paragraph' === k ? (S = p) : 'document' === k ? (S = b) : 'surface' === k && (S = j),
     (0, h.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       w && (0, h.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(S, { children: (0, h.jsx)(l.pu, { children: w }) }) }) }),
       v &&
        (0, h.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(l.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': D,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, h.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: D,
         hidden: !Z,
         children: [
          (0, h.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
          t &&
           (0, h.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(l.zx, {
             className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, t) => {
   t.d(n, { u: () => s });
   var r = t(16167),
    l = t(60648),
    i = t(75271),
    o = t(40761);
   const a = {
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
   var d = t(52676);
   function s(e) {
    let { lineNumber: n, syntax: t, textContent: s, trim: c } = e,
     m = s;
    const { title: u, type: h } = (0, i.useContext)(o.n),
     p = (0, i.useId)();
    return (
     c && (m = m.trim()),
     (0, d.jsx)(l.y$, {
      theme: a,
      code: m,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: i, getTokenProps: o } = e;
       return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, d.jsx)(r.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: t, children: l.map((e, t) => (0, d.jsxs)('span', { ...i({ line: e }), children: [n && (0, d.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, d.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => c, n: () => s });
   var r = t(69244),
    l = t(20061),
    i = t(16167),
    o = t(4814),
    a = t(75271),
    d = t(52676);
   const s = (0, a.createContext)({}),
    c = (e) => {
     let { title: n, appearance: t, description: a, children: c, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      p = m ? 'figcaption' : 'div';
     return (0, d.jsxs)(h, { className: (0, o.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, d.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, d.jsx)(i.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, d.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, d.jsx)(i.nv, { children: n })] }), a] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(s.Provider, { value: { title: n, type: u[t] }, children: c }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => o });
   var r = t(75271);
   const l = {},
    i = r.createContext(l);
   function o(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
