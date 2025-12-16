/*! For license information please see 2e11687d.766d9348.js.LICENSE.txt */
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71537],
 {
  918: (e, t, n) => {
   'use strict';
   n.d(t, { b: () => u });
   var r = n(92420),
    i = n(28020),
    s = n(14537),
    o = n(96079),
    a = n(13526),
    c = n(30758),
    l = n(68873),
    d = n(86070);
   const h = ({ title: e, sc: t, component: n, tags: l }) => {
     const h = (0, c.useId)(),
      u = [...l];
     if (t) {
      u.push(t);
      const e = i.pI.get(t);
      e?.conformance && u.push(`Niveau ${e.conformance}`);
     }
     return (0, d.jsx)('li', {
      className: (0, a.A)(
       'new-checklist__item',
       l.map((e) => `new-checklist__item--${e}`),
      ),
      children: (0, d.jsxs)('details', {
       children: [
        (0, d.jsx)('summary', { children: (0, d.jsx)('span', { className: 'new-checklist__title', id: h, children: e }) }),
        (0, d.jsxs)('div', {
         className: 'new-checklist__content',
         children: [
          (0, d.jsx)('div', { children: n }),
          (0, d.jsx)(s._Q, {
           className: 'new-checklist__badge-list',
           children: u.map((e, t) => {
            let n = (0, d.jsx)(o.K, { children: e }, t);
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
             const s = i.pI.get(e);
             n = (0, d.jsx)(r.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${s.sc} ${s.nl.title}`, style: { lineHeight: 1 }, children: (0, d.jsx)(o.K, { children: `WCAG ${e}` }) }, t);
            }
            return n;
           }),
          }),
         ],
        }),
       ],
      }),
     });
    },
    u = ({ items: e, headingLevel: t }) => {
     const n = e.reduce(
       (e, t) => (
        t.tags.forEach((t) => {
         e.add(t);
        }),
        e
       ),
       new Set(),
      ),
      [r, i] = (0, c.useState)(Array.from(n.values())),
      o = (e) => r.includes(e),
      a = (0, c.useId)(),
      u = r.length >= 1 ? e.filter(({ tags: e }) => e.some((e) => r.includes(e))) : e,
      g = e.length - u.length;
     return (0, d.jsxs)('div', {
      children: [
       (0, d.jsxs)('div', {
        className: 'ma-filter-block',
        children: [
         (0, d.jsxs)(l.LB, {
          'aria-describedby': 'filter-results',
          'aria-labelledby': a,
          children: [
           (0, d.jsx)(l.DZ, { level: t, id: a, children: 'Filter acceptatiecriteria voor:' }),
           Array.from(n.values()).map((e) =>
            (0, d.jsxs)(
             l.zB,
             {
              type: 'checkbox',
              children: [
               (0, d.jsx)(l.Sc, {
                defaultChecked: o(e),
                checked: o(e),
                id: e,
                onChange: () =>
                 ((e, t) => {
                  const n = ('boolean' == typeof t ? t : !o(e)) ? [...r, e] : r.filter((t) => t !== e);
                  i(n);
                 })(e),
               }),
               (0, d.jsx)(l.lR, { htmlFor: e, children: e }),
              ],
             },
             e,
            ),
           ),
          ],
         }),
         (0, d.jsx)('div', {
          children: (0, d.jsxs)(d.Fragment, {
           children: [
            (0, d.jsxs)('p', { role: 'status', children: [e.length - g, ' van de ', e.length, ' items zijn nu zichtbaar.'] }),
            g >= 1
             ? (0, d.jsx)(s.$n, {
                appearance: 'secondary-action-button',
                onClick: () => {
                 i(Array.from(n.values()));
                },
                children: 'Toon alles',
               })
             : (0, d.jsx)(d.Fragment, {}),
           ],
          }),
         }),
        ],
       }),
       (0, d.jsx)('ul', { className: 'new-checklist', role: 'list', children: u.map((e, t) => (0, d.jsx)(h, { ...e }, t)) }),
      ],
     });
    };
  },
  1941: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'file-unknown', 'IconFileUnknown', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M12 17v.01', key: 'svg-2' }],
    ['path', { d: 'M12 14a1.5 1.5 0 1 0 -1.14 -2.474', key: 'svg-3' }],
   ]);
  },
  14889: (e, t, n) => {
   'use strict';
   n.d(t, { AC: () => l, Fu: () => o, Wu: () => a, Zp: () => c });
   var r = n(68873),
    i = n(13526),
    s = n(86070);
   const o = ({ background: e, children: t, className: n, ...r }) => (0, s.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, n), ...r, children: t }),
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    c = ({ href: e, appearance: t, className: n, component: o = 'div', background: a, children: c }) => {
     const l = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      d = (0, s.jsx)(l, { className: (0, i.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: c });
     return e ? (0, s.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = ({ appearance: e = 'medium', children: t, className: n }) => (0, s.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
  17045: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => a, RM: () => s });
   var r = n(86070),
    i = n(85248);
   const s = [];
   function o(e) {
    const t = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  19776: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => a, RM: () => s });
   var r = n(86070),
    i = n(85248);
   const s = [];
   function o(e) {
    const t = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  24838: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => o });
   var r = n(86070),
    i = n(85248);
   function s(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(t.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(t.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(t.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  28020: (e, t, n) => {
   'use strict';
   n.d(t, { pI: () => o });
   const r = [
     { sc: '1.1.1', title: 'Non-text Content', url: 'https://www.w3.org/TR/WCAG21/#non-text-content', conformance: 'A', nldesignsystem: !0, nl: { title: 'Niet-tekstuele content' } },
     { sc: '1.2.1', title: 'Audio-only and Video-only (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' } },
     { sc: '1.2.2', title: 'Captions (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (vooraf opgenomen)' } },
     { sc: '1.2.3', title: 'Audio Description or Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded', conformance: 'A', nldesignsystem: !0, nl: { title: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.4', title: 'Captions (Live)', url: 'https://www.w3.org/TR/WCAG21/#captions-live', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Ondertitels voor doven en slechthorenden (live)' } },
     { sc: '1.2.5', title: 'Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.6', title: 'Sign Language (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded', conformance: 'AAA', nl: { title: 'Gebarentaal (vooraf opgenomen)' } },
     { sc: '1.2.7', title: 'Extended Audio Description (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded', conformance: 'AAA', nl: { title: 'Verlengde audiodescriptie (vooraf opgenomen)' } },
     { sc: '1.2.8', title: 'Media Alternative (Prerecorded)', url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded', conformance: 'AAA', nl: { title: 'Media-alternatief (vooraf opgenomen)' } },
     { sc: '1.2.9', title: 'Audio-only (Live)', url: 'https://www.w3.org/TR/WCAG21/#audio-only-live', conformance: 'AAA', nl: { title: 'Louter-geluid (live)' } },
     { sc: '1.3.1', title: 'Info and Relationships', url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', conformance: 'A', nldesignsystem: !0, nl: { title: 'Info en relaties' } },
     { sc: '1.3.2', title: 'Meaningful Sequence', url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence', conformance: 'A', nldesignsystem: !0, nl: { title: 'Betekenisvolle volgorde' } },
     { sc: '1.3.3', title: 'Sensory Characteristics', url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics', conformance: 'A', nldesignsystem: !0, nl: { title: 'Zintuiglijke eigenschappen' } },
     { sc: '1.3.4', title: 'Orientation', url: 'https://www.w3.org/TR/WCAG21/#orientation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Weergavestand' } },
     { sc: '1.3.5', title: 'Identify Input Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Identificeer het doel van de input' } },
     { sc: '1.3.6', title: 'Identify Purpose', url: 'https://www.w3.org/TR/WCAG21/#identify-purpose', conformance: 'AAA', nl: { title: 'Identificeer het doel' } },
     { sc: '1.4.1', title: 'Use of Color', url: 'https://www.w3.org/TR/WCAG21/#use-of-color', conformance: 'A', nldesignsystem: !0, nl: { title: 'Gebruik van kleur' } },
     { sc: '1.4.2', title: 'Audio Control', url: 'https://www.w3.org/TR/WCAG21/#audio-control', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geluidsbediening' } },
     { sc: '1.4.3', title: 'Contrast (Minimum)', url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast (minimum)' } },
     { sc: '1.4.4', title: 'Resize text', url: 'https://www.w3.org/TR/WCAG21/#resize-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Herschalen van tekst' } },
     { sc: '1.4.5', title: 'Images of Text', url: 'https://www.w3.org/TR/WCAG21/#images-of-text', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Afbeeldingen van tekst' } },
     { sc: '1.4.6', title: 'Contrast (Enhanced)', url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced', conformance: 'AAA', nl: { title: 'Contrast (versterkt)' } },
     { sc: '1.4.7', title: 'Low or No Background Audio', url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio', conformance: 'AAA', nl: { title: 'Weinig of geen achtergrondgeluid' } },
     { sc: '1.4.8', title: 'Visual Presentation', url: 'https://www.w3.org/TR/WCAG21/#visual-presentation', conformance: 'AAA', nl: { title: 'Visuele weergave' } },
     { sc: '1.4.9', title: 'Images of Text (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception', conformance: 'AAA', nl: { title: 'Afbeeldingen van tekst (geen uitzondering)' } },
     { sc: '1.4.10', title: 'Reflow', url: 'https://www.w3.org/TR/WCAG21/#reflow', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Reflow' } },
     { sc: '1.4.11', title: 'Non-text Contrast', url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Contrast van niet-tekstuele content' } },
     { sc: '1.4.12', title: 'Text Spacing', url: 'https://www.w3.org/TR/WCAG21/#text-spacing', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Tekstafstand' } },
     { sc: '1.4.13', title: 'Content on Hover or Focus', url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Content bij hover of focus' } },
     { sc: '2.1.1', title: 'Keyboard', url: 'https://www.w3.org/TR/WCAG21/#keyboard', conformance: 'A', nldesignsystem: !0, nl: { title: 'Toetsenbord' } },
     { sc: '2.1.2', title: 'No Keyboard Trap', url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap', conformance: 'A', nldesignsystem: !0, nl: { title: 'Geen toetsenbordval' } },
     { sc: '2.1.3', title: 'Keyboard (No Exception)', url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception', conformance: 'AAA', nl: { title: 'Toetsenbord (geen uitzondering)' } },
     { sc: '2.1.4', title: 'Character Key Shortcuts', url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts', conformance: 'A', nldesignsystem: !0, nl: { title: 'Enkel teken sneltoetsen' } },
     { sc: '2.2.1', title: 'Timing Adjustable', url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable', conformance: 'A', nldesignsystem: !0, nl: { title: 'Timing aanpasbaar' } },
     { sc: '2.2.2', title: 'Pause, Stop, Hide', url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide', conformance: 'A', nldesignsystem: !0, nl: { title: 'Pauzeren, stoppen, verbergen' } },
     { sc: '2.2.3', title: 'No Timing', url: 'https://www.w3.org/TR/WCAG21/#no-timing', conformance: 'AAA', nl: { title: 'Geen timing' } },
     { sc: '2.2.4', title: 'Interruptions', url: 'https://www.w3.org/TR/WCAG21/#interruptions', conformance: 'AAA', nl: { title: 'Onderbrekingen' } },
     { sc: '2.2.5', title: 'Re-authenticating', url: 'https://www.w3.org/TR/WCAG21/#re-authenticating', conformance: 'AAA', nl: { title: 'Herauthentisering' } },
     { sc: '2.2.6', title: 'Timeouts', url: 'https://www.w3.org/TR/WCAG21/#timeouts', conformance: 'AAA', nl: { title: 'Time-outs' } },
     { sc: '2.3.1', title: 'Three Flashes or Below Threshold', url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold', conformance: 'A', nldesignsystem: !0, nl: { title: 'Drie flitsen of beneden drempelwaarde' } },
     { sc: '2.3.2', title: 'Three Flashes', url: 'https://www.w3.org/TR/WCAG21/#three-flashes', conformance: 'AAA', nl: { title: 'Drie flitsen' } },
     { sc: '2.3.3', title: 'Animation from Interactions', url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions', conformance: 'AAA', nl: { title: 'Animatie uit interacties' } },
     { sc: '2.4.1', title: 'Bypass Blocks', url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks', conformance: 'A', nldesignsystem: !0, nl: { title: 'Blokken omzeilen' } },
     { sc: '2.4.2', title: 'Page Titled', url: 'https://www.w3.org/TR/WCAG21/#page-titled', conformance: 'A', nldesignsystem: !0, nl: { title: 'Paginatitel' } },
     { sc: '2.4.3', title: 'Focus Order', url: 'https://www.w3.org/TR/WCAG21/#focus-order', conformance: 'A', nldesignsystem: !0, nl: { title: 'Focus volgorde' } },
     { sc: '2.4.4', title: 'Link Purpose (In Context)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context', conformance: 'A', nldesignsystem: !0, nl: { title: 'Linkdoel (in context)' } },
     { sc: '2.4.5', title: 'Multiple Ways', url: 'https://www.w3.org/TR/WCAG21/#multiple-ways', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Meerdere manieren' } },
     { sc: '2.4.6', title: 'Headings and Labels', url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Koppen en labels' } },
     { sc: '2.4.7', title: 'Focus Visible', url: 'https://www.w3.org/TR/WCAG21/#focus-visible', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Focus zichtbaar' } },
     { sc: '2.4.8', title: 'Location', url: 'https://www.w3.org/TR/WCAG21/#location', conformance: 'AAA', nl: { title: 'Locatie' } },
     { sc: '2.4.9', title: 'Link Purpose (Link Only)', url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only', conformance: 'AAA', nl: { title: 'Linkdoel (alleen link)' } },
     { sc: '2.4.10', title: 'Section Headings', url: 'https://www.w3.org/TR/WCAG21/#section-headings', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Paragraafkoppen' } },
     { sc: '2.5.1', title: 'Pointer Gestures', url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzergebaren' } },
     { sc: '2.5.2', title: 'Pointer Cancellation', url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Aanwijzerannulering' } },
     { sc: '2.5.3', title: 'Label in Name', url: 'https://www.w3.org/TR/WCAG21/#label-in-name', conformance: 'A', nldesignsystem: !0, nl: { title: 'Label in naam' } },
     { sc: '2.5.4', title: 'Motion Actuation', url: 'https://www.w3.org/TR/WCAG21/#motion-actuation', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bewegingsactivering' } },
     { sc: '2.5.5', title: 'Target Size', url: 'https://www.w3.org/TR/WCAG21/#target-size', conformance: 'AAA', nl: { title: 'Grootte van het aanwijsgebied (uitgebreid)' } },
     { sc: '2.5.6', title: 'Concurrent Input Mechanisms', url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms', conformance: 'AAA', nl: { title: 'Input gelijktijdige invoermechanismen' } },
     { sc: '3.1.1', title: 'Language of Page', url: 'https://www.w3.org/TR/WCAG21/#language-of-page', conformance: 'A', nldesignsystem: !0, nl: { title: 'Taal van de pagina' } },
     { sc: '3.1.2', title: 'Language of Parts', url: 'https://www.w3.org/TR/WCAG21/#language-of-parts', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Taal van onderdelen' } },
     { sc: '3.1.3', title: 'Unusual Words', url: 'https://www.w3.org/TR/WCAG21/#unusual-words', conformance: 'AAA', nl: { title: 'Ongebruikelijke woorden' } },
     { sc: '3.1.4', title: 'Abbreviations', url: 'https://www.w3.org/TR/WCAG21/#abbreviations', conformance: 'AAA', nl: { title: 'Afkortingen' } },
     { sc: '3.1.5', title: 'Reading Level', url: 'https://www.w3.org/TR/WCAG21/#reading-level', conformance: 'AAA', nl: { title: 'Leesniveau' } },
     { sc: '3.1.6', title: 'Pronunciation', url: 'https://www.w3.org/TR/WCAG21/#pronunciation', conformance: 'AAA', nl: { title: 'Uitspraak' } },
     { sc: '3.2.1', title: 'On Focus', url: 'https://www.w3.org/TR/WCAG21/#on-focus', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij focus' } },
     { sc: '3.2.2', title: 'On Input', url: 'https://www.w3.org/TR/WCAG21/#on-input', conformance: 'A', nldesignsystem: !0, nl: { title: 'Bij input' } },
     { sc: '3.2.3', title: 'Consistent Navigation', url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente navigatie' } },
     { sc: '3.2.4', title: 'Consistent Identification', url: 'https://www.w3.org/TR/WCAG21/#consistent-identification', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Consistente identificatie' } },
     { sc: '3.2.5', title: 'Change on Request', url: 'https://www.w3.org/TR/WCAG21/#change-on-request', conformance: 'AAA', nl: { title: 'Verandering op verzoek' } },
     { sc: '3.3.1', title: 'Error Identification', url: 'https://www.w3.org/TR/WCAG21/#error-identification', conformance: 'A', nldesignsystem: !0, nl: { title: 'Foutidentificatie' } },
     { sc: '3.3.2', title: 'Labels or Instructions', url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions', conformance: 'A', nldesignsystem: !0, nl: { title: 'Labels of instructies' } },
     { sc: '3.3.3', title: 'Error Suggestion', url: 'https://www.w3.org/TR/WCAG21/#error-suggestion', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutsuggestie' } },
     { sc: '3.3.4', title: 'Error Prevention (Legal, Financial, Data)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Foutpreventie (wettelijk, financieel, gegevens)' } },
     { sc: '3.3.5', title: 'Help', url: 'https://www.w3.org/TR/WCAG21/#help', conformance: 'AAA', nl: { title: 'Hulp' } },
     { sc: '3.3.6', title: 'Error Prevention (All)', url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all', conformance: 'AAA', nl: { title: 'Foutpreventie (alle)' } },
     { sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' } },
     { sc: '4.1.2', title: 'Name, Role, Value', url: 'https://www.w3.org/TR/WCAG21/#name-role-value', conformance: 'A', nldesignsystem: !0, nl: { title: 'Naam, rol, waarde' } },
     { sc: '4.1.3', title: 'Status Messages', url: 'https://www.w3.org/TR/WCAG21/#status-messages', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Statusberichten' } },
    ].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })),
    i = (new Map(r.map((e) => [e.sc, e])), [{ sc: '4.1.1', title: 'Parsing', url: 'https://www.w3.org/TR/WCAG21/#parsing', conformance: 'A', nldesignsystem: !0, nl: { title: 'Parsen' }, since: 'WCAG22' }]),
    s = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !i.find((t) => t.sc === e)),
    o = new Map(s.map((e) => [e.sc, e]));
  },
  30696: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'palette', 'IconPalette', [
    ['path', { d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', key: 'svg-0' }],
    ['path', { d: 'M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }],
    ['path', { d: 'M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }],
    ['path', { d: 'M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }],
   ]);
  },
  34257: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => o });
   var r = n(86070),
    i = n(85248);
   function s(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(t.p, { children: ['Zorg ervoor dat het component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(t.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(t.code, { children: 'em' }), ' of ', (0, r.jsx)(t.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(t.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(t.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(t.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(t.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(t.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  36444: (e, t, n) => {
   'use strict';
   n.d(t, { D: () => a });
   var r = n(68873),
    i = n(13526),
    s = n(75916),
    o = n(86070);
   const a = ({ state: e }) => {
    const t = (0, s.fX)(e);
    return (0, o.jsx)(r.KE, { className: (0, i.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  38985: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'text-size', 'IconTextSize', [
    ['path', { d: 'M3 7v-2h13v2', key: 'svg-0' }],
    ['path', { d: 'M10 5v14', key: 'svg-1' }],
    ['path', { d: 'M12 19h-4', key: 'svg-2' }],
    ['path', { d: 'M15 13v-1h6v1', key: 'svg-3' }],
    ['path', { d: 'M18 12v7', key: 'svg-4' }],
    ['path', { d: 'M17 19h2', key: 'svg-5' }],
   ]);
  },
  40808: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => a, RM: () => s });
   var r = n(86070),
    i = n(85248);
   const s = [];
   function o(e) {
    const t = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(t.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  42759: (e, t, n) => {
   'use strict';
   n.d(t, { e: () => a });
   var r = n(46563),
    i = n(30758),
    s = n(75916),
    o = n(86070);
   const a = ({ component: e }) => {
    const { title: t } = e,
     a = (0, s.fX)(t),
     c = i.lazy(() => n(82839)(`./${a}-docs/docs/aliases.md`).catch(() => ({ default: () => null })));
    return (0, o.jsx)(i.Suspense, { fallback: null, children: (0, o.jsx)(r.o, { omitH1: !0, headingLevel: 1, children: (0, o.jsx)(c, {}) }) });
   };
  },
  43825: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'underline', 'IconUnderline', [
    ['path', { d: 'M7 5v5a5 5 0 0 0 10 0v-5', key: 'svg-0' }],
    ['path', { d: 'M5 19h14', key: 'svg-1' }],
   ]);
  },
  44132: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'line-height', 'IconLineHeight', [
    ['path', { d: 'M3 8l3 -3l3 3', key: 'svg-0' }],
    ['path', { d: 'M3 16l3 3l3 -3', key: 'svg-1' }],
    ['path', { d: 'M6 5l0 14', key: 'svg-2' }],
    ['path', { d: 'M13 6l7 0', key: 'svg-3' }],
    ['path', { d: 'M13 12l7 0', key: 'svg-4' }],
    ['path', { d: 'M13 18l7 0', key: 'svg-5' }],
   ]);
  },
  46490: (e, t, n) => {
   'use strict';
   n.r(t), n.d(t, { assets: () => $, component: () => U, contentTitle: () => E, default: () => Z, description: () => I, frontMatter: () => P, issueNumber: () => V, metadata: () => r, title: () => H, toc: () => q });
   const r = JSON.parse('{"id":"componenten/data-badge/index","title":"Data Badge","description":"Label met extra informatie, zoals een categorie of een eigenschap.","source":"@site/docs/componenten/data-badge/index.mdx","sourceDirName":"componenten/data-badge","slug":"/data-badge","permalink":"/data-badge","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/data-badge/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Data Badge","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Data Badge","pagination_label":"Data Badge","description":"Label met extra informatie, zoals een categorie of een eigenschap.","slug":"/data-badge","keywords":["annotatie","annotation","badge","categorie","category","categorie aanduiding","categoriseren","categorize","characteristic","chip","data","data badge","data tag","eigenschap","etiket","etiquette","filteren op","filter tag","index","index term","info","info tag","informatiebadge","label","metadata","pill","property","stamp","status","status badge","sticker","tag","tagging","tagged","term","time"]},"sidebar":"componenten","previous":{"title":"Color Sample","permalink":"/color-sample"},"next":{"title":"Data Summary","permalink":"/data-summary"}}');
   var i,
    s,
    o,
    a,
    c,
    l,
    d,
    h = n(86070),
    u = n(85248),
    g = n(48976),
    m = n(30758);
   function p() {
    return (
     (p = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
         }
         return e;
        }),
     p.apply(null, arguments)
    );
   }
   const j = ({ title: e, titleId: t, ...n }) => m.createElement('svg', p({ xmlns: 'http://www.w3.org/2000/svg', width: 960, height: 540, fill: 'none', 'aria-label': "Een Data Badge met de vetgedrukte tekst 'label' en een achtergrondkleur. De hele Data Badge is aangeduid met het cijfer 1.", viewBox: '0 0 960 540', role: 'img', 'aria-labelledby': t }, n), e ? m.createElement('title', { id: t }, e) : null, i || (i = m.createElement('path', { fill: '#fff', d: 'M.5.5h959v539H.5z' })), s || (s = m.createElement('path', { stroke: '#CCC', d: 'M.5.5h959v539H.5z' })), o || (o = m.createElement('rect', { width: 48, height: 24, x: 456, y: 258, fill: '#F5F2FF', rx: 4 })), a || (a = m.createElement('path', { fill: '#0A2750', d: 'M463.664 263.912v9.008h4.32l-.272 2.08h-6.672v-11.088zm12.127 8.624q0 .48.128.704a.87.87 0 0 0 .448.336l-.528 1.648q-.784-.064-1.28-.336-.497-.288-.768-.896-.832 1.28-2.56 1.28-1.264 0-2.016-.736t-.752-1.92q0-1.392 1.024-2.128t2.96-.736h.864v-.368q0-.752-.32-1.024-.32-.288-1.12-.288-.416 0-1.008.128-.592.112-1.216.32l-.576-1.664a10 10 0 0 1 1.632-.464 8.5 8.5 0 0 1 1.568-.16q1.824 0 2.672.752t.848 2.256zm-3.824.928q.864 0 1.344-.816v-1.504h-.624q-.864 0-1.296.304-.416.304-.416.944 0 .512.256.8.272.272.736.272m10.654-7.232q1.52 0 2.336 1.2.816 1.184.816 3.328 0 1.312-.416 2.336-.4 1.024-1.168 1.6-.753.576-1.792.576-.688 0-1.264-.288a2.9 2.9 0 0 1-.96-.8l-.128.816h-2.24v-11.872l2.528-.272v4.512q.384-.528.976-.832a2.9 2.9 0 0 1 1.312-.304m-.96 7.2q1.488 0 1.488-2.672 0-1.52-.352-2.096a1.13 1.13 0 0 0-1.024-.576q-.849 0-1.44.992v3.536q.24.384.576.608.351.208.752.208m13.098-2.848q0 .528-.048.912h-5.264q.129 1.072.608 1.504.48.432 1.328.432.512 0 .992-.176a5.5 5.5 0 0 0 1.04-.576l1.04 1.408q-1.488 1.184-3.312 1.184-2.064 0-3.168-1.216t-1.104-3.264q0-1.296.464-2.32a3.73 3.73 0 0 1 1.36-1.632q.897-.608 2.144-.608 1.84 0 2.88 1.152t1.04 3.2m-2.48-.72q-.032-1.952-1.376-1.952-.655 0-1.024.48-.351.48-.432 1.584h2.832zm6.157 5.408q-1.104 0-1.728-.624-.608-.64-.608-1.808v-9.712l2.528-.272v9.888q0 .528.432.528.224 0 .416-.08l.496 1.792a3.9 3.9 0 0 1-1.536.288' })), c || (c = m.createElement('rect', { width: 32, height: 32, x: 376, y: 254, fill: '#DE00A4', rx: 16 })), l || (l = m.createElement('path', { fill: '#fff', d: 'M394.502 264.368V276.5H392v-9.612l-2.664 1.638-1.116-1.728 4.032-2.43z' })), d || (d = m.createElement('path', { stroke: '#DE00A4', strokeLinecap: 'square', strokeLinejoin: 'bevel', strokeWidth: 2, d: 'M408 270h48' })));
   var y = n(17045),
    f = n(19776),
    v = n(40808);
   function w(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(t.p, { children: 'Als de Data Badge een icoon bevat, of een icoon bevat dat extra informatie geeft naast de tekst, dan heeft dit icoon een goed tekstalternatief, zodat de informatie ook beschikbaar is voor mensen die de de afbeelding niet kunnen zien.' }), '\n', (0, h.jsxs)(t.p, { children: ['Het beste is om altijd visueel een tekst te tonen naast of onder een icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor het icoon is niet nodig als er tekst in beeld is die hetzelfde betekent. Een ', (0, h.jsx)(t.code, { children: 'img' }), ' kan dan een leeg ', (0, h.jsx)(t.code, { children: 'alt' }), '-attribuut krijgen (', (0, h.jsx)(t.code, { children: 'alt=""' }), ').'] }), '\n', (0, h.jsx)(t.p, { children: 'Is het toch gewenst om alleen een icoon of een extra informatief icoon te tonen, hou dan rekening met het volgende.' }), '\n', (0, h.jsxs)(t.p, { children: ['Een ', (0, h.jsx)(t.code, { children: 'img' }), ' met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen.'] }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '<span><img src="klok.svg" alt="tijd" />12.45</span>\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(t.ul, { children: ['\n', (0, h.jsx)(t.li, { children: (0, h.jsx)(t.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/', children: 'Gebruik SVG voor iconen en geen font' }) }), '\n', (0, h.jsx)(t.li, { children: (0, h.jsx)(t.a, { href: '/richtlijnen/stijl/iconen/gebruik-svg/#toepassen-van-een-svg-in-code', children: 'Toepassen van een SVG in code' }) }), '\n', (0, h.jsx)(t.li, { children: (0, h.jsx)(t.a, { href: '/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen/', children: 'Informatieve afbeeldingen' }) }), '\n'] })] });
   }
   function b(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(w, { ...e }) }) : w(e);
   }
   function k(e) {
    const t = { a: 'a', code: 'code', p: 'p', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)(t.p, { children: ['Gebruik zoveel mogelijk semantische HTML, bijvoorbeeld het ', (0, h.jsxs)(t.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time', children: [(0, h.jsx)(t.code, { children: 'time' }), '-element'] }), ' als het om een datum of een tijd gaat.'] }), '\n', (0, h.jsxs)(t.p, { children: ['De toevoeging van de Data Badge mag niet verwarrend zijn voor gebruikers van ', (0, h.jsx)(t.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. De Data Badge geeft informatie die onmiddelijk duidelijk is voor ziende gebruikers. Dit voordeel hebben screenreadergebruikers niet.'] })] });
   }
   function x(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(k, { ...e }) }) : k(e);
   }
   function A(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(t.p, { children: 'Gebruik niet alleen kleur om de betekenis van de Data Badge duidelijk te maken. Rood staat bijvoorbeeld voor gevaar, groen bijvoorbeeld voor het feit dat iets is gelukt. Veel mensen kunnen kleur niet of niet goed waarnemen. Zorg daarom dat er een tweede manier is om de betekenis te herkennen.' }), '\n', (0, h.jsx)(t.p, { children: "Het gebruik van duidelijke teksten is hierbij een goede oplossing. Bijvoorbeeld een rode Data Badge met de tekst 'fout', en een groene Data Badge met de tekst 'gelukt'." }), '\n', (0, h.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, h.jsxs)(t.ul, { children: ['\n', (0, h.jsx)(t.li, { children: (0, h.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/doel/', children: 'Gebruik kleur met een doel' }) }), '\n', (0, h.jsx)(t.li, { children: (0, h.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function T(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(A, { ...e }) }) : A(e);
   }
   var C = n(83329),
    R = n(83672),
    G = n(34257),
    z = n(66706),
    D = n(24838),
    N = n(42759),
    W = n(62254),
    M = n(918),
    S = n(50341),
    _ = n(73361),
    L = n(46563);
   function O(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(t.header, { children: (0, h.jsx)(t.h1, { id: 'gebruik-data-badge', children: 'Gebruik Data Badge' }) }), '\n', (0, h.jsx)(t.h2, { id: 'css', children: 'CSS' }), '\n', (0, h.jsx)(t.p, { children: 'De CSS van deze component is gepubliceerd in een npm package:' }), '\n', (0, h.jsxs)(t.p, { children: [(0, h.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-css', children: [(0, h.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fdata-badge-css.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/data-badge-css'] }), '\nversie 1.'] }), '\n', (0, h.jsxs)(t.p, { children: ['Gebruik de ', (0, h.jsx)(t.code, { children: 'nl-data-badge' }), ' class name op een ', (0, h.jsx)(t.code, { children: 'span' }), ' element:'] }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '<span class="nl-data-badge">42</span>\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Je kunt de CSS zo in je project installeren:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/data-badge-css\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Als je een CDN gebruikt, dan kun je de CSS zo importeren:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/data-badge-css@1/dist/data-badge.css"\n/>\n' }) }), '\n', (0, h.jsxs)(t.p, { children: ['Gebruik je geen CDN, dan kun je de CSS uit ', (0, h.jsx)(t.code, { children: 'node_modules/' }), ' importeren:'] }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-html', children: '<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/data-badge-css/dist/data-badge.css" />\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Als je CSS imports gebruikt vanuit JavaScript:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-js', children: 'import "@nl-design-system-candidate/data-badge-css/data-badge.css";\n' }) }), '\n', (0, h.jsx)(t.h2, { id: 'react', children: 'React' }), '\n', (0, h.jsx)(t.p, { children: 'De React component is gepubliceerd in een npm package:' }), '\n', (0, h.jsxs)(t.p, { children: [(0, h.jsxs)(t.a, { href: 'https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-react', children: [(0, h.jsx)('img', { src: 'https://badge.fury.io/js/@nl-design-system-candidate%2Fdata-badge-react.svg', alt: '', style: { verticalAlign: 'middle' } }), ' @nl-design-system-candidate/data-badge-react'] }), '\nversie 1.'] }), '\n', (0, h.jsx)(t.p, { children: 'Je kunt de npm package zo installeren:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-sh', children: 'npm install --save-dev @nl-design-system-candidate/data-badge-react\n' }) }), '\n', (0, h.jsx)(t.p, { children: 'Je kunt de React component zo gebruiken:' }), '\n', (0, h.jsx)(t.pre, { children: (0, h.jsx)(t.code, { className: 'language-jsx', children: 'import { DataBadge } from "@nl-design-system-candidate/data-badge-react";\n\nexport const MyPage = () => {\n  return (\n    <html>\n      <body>\n        <DataBadge>42</DataBadge>\n      </body>\n    </html>\n  );\n};\n' }) }), '\n', (0, h.jsx)(t.h2, { id: 'figma', children: 'Figma' }), '\n', (0, h.jsxs)(t.p, { children: ['De Figma component staat in ', (0, h.jsx)(t.a, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=13781-18012', children: 'NL Design System Voorbeeld Bibliotheek \u2014 Data Badge' }), '.'] })] });
   }
   function F(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(O, { ...e }) }) : O(e);
   }
   const B = JSON.parse('{"nl":{"data-badge":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"border-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length-percentage>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"border-width":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"min-block-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"min-inline-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-block":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-inline":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"}}}}'),
    P = { title: 'Data Badge', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Data Badge', pagination_label: 'Data Badge', description: 'Label met extra informatie, zoals een categorie of een eigenschap.', slug: '/data-badge', keywords: ['annotatie', 'annotation', 'badge', 'categorie', 'category', 'categorie aanduiding', 'categoriseren', 'categorize', 'characteristic', 'chip', 'data', 'data badge', 'data tag', 'eigenschap', 'etiket', 'etiquette', 'filteren op', 'filter tag', 'index', 'index term', 'info', 'info tag', 'informatiebadge', 'label', 'metadata', 'pill', 'property', 'stamp', 'status', 'status badge', 'sticker', 'tag', 'tagging', 'tagged', 'term', 'time'] },
    E = void 0,
    $ = {},
    H = 'Data Badge',
    I = 'Label met extra informatie, zoals een categorie of een eigenschap.',
    V = 94,
    U = g.find((e) => e.number === V),
    q = [{ value: 'Anatomie', id: 'anatomie', level: 2 }, { value: 'Candidate component gebruiken', id: 'candidate-component-gebruiken', level: 2 }, { value: 'Design tokens', id: 'design-tokens', level: 3 }, { value: 'CSS', id: 'css', level: 2 }, { value: 'React', id: 'react', level: 2 }, { value: 'Figma', id: 'figma', level: 2 }, { value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...v.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...f.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...y.RM, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 }];
   function X(e) {
    const t = { h2: 'h2', h3: 'h3', ...(0, u.R)(), ...e.components };
    return (0, h.jsxs)(h.Fragment, {
     children: [
      '\n',
      '\n',
      '\n',
      '\n',
      '\n',
      (0, h.jsx)(S.Fc, { component: U, headingLevel: 1, description: I }),
      '\n',
      (0, h.jsx)(N.e, { component: U }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'anatomie', children: 'Anatomie' }),
      '\n',
      (0, h.jsx)(W.H, { component: U, illustration: j }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'candidate-component-gebruiken', children: 'Candidate component gebruiken' }),
      '\n',
      (0, h.jsx)(t.h3, { id: 'design-tokens', children: 'Design tokens' }),
      '\n',
      (0, h.jsx)(_.B, { tokens: B }),
      '\n',
      (0, h.jsx)(L.o, { omitH1: !0, headingLevel: 3, children: (0, h.jsx)(F, {}) }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }),
      '\n',
      (0, h.jsx)(v.Ay, {}),
      '\n',
      (0, h.jsx)(t.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }),
      '\n',
      (0, h.jsx)(f.Ay, {}),
      '\n',
      (0, h.jsx)(M.b, {
       headingLevel: '4',
       items: [
        { title: 'Als er in de Data Badge een informatief icoon staat, is er een goed tekstalternatief.', sc: '1.1.1', status: '', component: (0, h.jsx)(b, {}), tags: ['developer', 'contentmaker'] },
        { title: 'Gebruik zoveel mogelijk semantische HTML voor de Data Badge.', sc: '1.3.1', status: '', component: (0, h.jsx)(x, {}), tags: ['developer'] },
        { title: 'Gebruik niet alleen kleur om de betekenis van de Data Badge duidelijk te maken.', sc: '1.4.1', status: '', component: (0, h.jsx)(T, {}), tags: ['designer'] },
        { title: 'De tekst van de Data Badge heeft voldoende contrast tegen de achtergrond.', sc: '1.4.3', status: '', component: (0, h.jsx)(R.Ay, {}), tags: ['designer'] },
        { title: 'Gebruik geen afbeeldingen van tekst voor de Data Badge.', sc: '1.4.5', status: '', component: (0, h.jsx)(z.Ay, {}), tags: ['designer', 'contentmaker'] },
        { title: 'Als een tekst in de Data Badge in een andere taal is dan de taal van de pagina, dan heeft de Data Badge een lang-attribuut met de juiste taalcode.', sc: '3.1.2', status: '', component: (0, h.jsx)(D.Ay, {}), tags: ['contentmaker', 'developer'] },
       ],
      }),
      '\n',
      (0, h.jsx)(t.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }),
      '\n',
      (0, h.jsx)(y.Ay, {}),
      '\n',
      (0, h.jsx)(M.b, {
       headingLevel: '4',
       items: [
        { title: 'Als je de tekst van de Data Badge vergroot tot 200% blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: (0, h.jsx)(G.Ay, {}), tags: ['developer'] },
        { title: 'Als je de tekstafstand van de Data Badge vergroot blijft de tekst in zijn geheel zichtbaar.', sc: '1.4.12', status: '', component: (0, h.jsx)(C.Ay, {}), tags: ['developer'] },
       ],
      }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'community-implementaties', children: 'Community implementaties' }),
      '\n',
      (0, h.jsx)(S.mu, { component: U, headingLevel: 3 }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'definition-of-done', children: 'Definition of Done' }),
      '\n',
      (0, h.jsx)(S.VK, { component: U, headingLevel: 3 }),
      '\n',
      (0, h.jsx)(t.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }),
      '\n',
      (0, h.jsx)(S.$9, { component: U, headingLevel: 3 }),
     ],
    });
   }
   function Z(e = {}) {
    const { wrapper: t } = { ...(0, u.R)(), ...e.components };
    return t ? (0, h.jsx)(t, { ...e, children: (0, h.jsx)(X, { ...e }) }) : X(e);
   }
  },
  46563: (e, t, n) => {
   'use strict';
   n.d(t, { o: () => d });
   var r = n(85248),
    i = n(68873),
    s = n(86070);
   const o = (e, t) => {
     const n = new URL(t, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === n.protocol) {
      const { pathname: n, search: r, hash: i } = new URL(t, new URL(e, 'http://example.com/'));
      return n + r + i;
     }
     return n.toString();
    },
    a = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    c = (e) => ({ img: ({ src: t, ...n }) => (0, s.jsx)('img', { ...n, src: o(e, t), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, t) => {
     if (e) {
      const e = { ...a[t - 1] };
      return (e.h1 = () => null), e;
     }
     return a[t];
    },
    d = ({ children: e, omitH1: t = !1, headingLevel: n = 1, baseUrl: i = '', components: o = {} }) => (0, s.jsx)(r.x, { components: { ...l(t, n), ...c(i), ...o }, children: e });
  },
  50341: (e, t, n) => {
   'use strict';
   n.d(t, { VK: () => x, $9: () => T, mu: () => A, Fc: () => C });
   var r = n(14537),
    i = n(13526),
    s = n(74172),
    o = n(15089),
    a = n(28377),
    c = n(33648),
    l = n(83386),
    d = n(86070);
   const h = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(a.A, {}), storybook: (0, d.jsx)(c.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(r.In, { children: h[e] || (0, d.jsx)(l.A, {}) });
   var g = n(14889),
    m = n(98274);
   const p = ({ checked: e, unchecked: t }) =>
    (0, d.jsx)(m.A, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const r = n(83294).V6;
      return (0, d.jsx)(r, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: t, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var j = n(36444),
    y = n(98584),
    f = n(68873),
    v = n(51797);
   const w = ({ children: e }) => (0, d.jsx)('ul', { className: 'task-list', children: e }),
    b = ({ checked: e, children: t, title: n, description: r, headingLevel: s = 3 }) => (0, d.jsxs)('li', { className: (0, i.A)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.A)('task-list-item__marker', e && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: e ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), e && (0, d.jsx)(v.UJe, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(f.DZ, { appearance: 'utrecht-heading-3', level: s, children: n }), r, t] })] });
   var k = n(75916);
   const x = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => k.f4.includes(e.id)),
      s = n && k.f4.map((e) => n.find((t) => t.id === e)).filter(Boolean);
     return e && (0, d.jsx)(r.If, { sections: s.map((n) => ({ className: (0, i.A)('definition-of-done', n && `definition-of-done--${(0, k.fX)(n.title)}`), headingLevel: t, expanded: !1, label: n ? `${n.title} - ${n.progress.value} van ${n.progress.max}` : '', body: n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(w, { children: n.tasks.map(({ checked: e, name: n, id: r }) => (0, d.jsx)(b, { headingLevel: t + 1, checked: e, title: n, description: (0, k.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${n.url}?filterQuery=${e.title}`, children: [n.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    A = ({ component: e, headingLevel: t }) => {
     const n = e && e.projects.filter((e) => !k.f4.includes(e.id));
     return e && n.length
      ? (0, d.jsx)(g.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: n
          .sort((e, t) => {
           const n = e.progress.max - e.progress.value,
            r = t.progress.max - t.progress.value;
           return n === r ? e.title.localeCompare(t.title) : n - r;
          })
          .map((e) => {
           const n = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = n?.value,
            s = (0, k.Pv)(e),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            a = e.tasks.filter(({ name: e, value: t }) => o.has(e) && URL.canParse(t) && 'https:' === new URL(t).protocol);
           return (0, d.jsx)(
            g.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(g.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (a.length > 0 || s.length > 0) && (0, d.jsx)(r.DZ, { level: t + 1, children: 'Snel aan de slag' }),
               a.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: a
                   .filter((e) => !!o.get(e.name))
                   .map((e) => {
                    const t = o.get(e.name);
                    return { children: t.desciption, icon: (0, d.jsx)(u, { brand: t.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, d.jsx)(d.Fragment, { children: s.map(({ frameworkName: e, tasks: n }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: t + 2, children: [i, ' in ', e] }), (0, d.jsx)(r.dk, { links: n.map((e) => ({ children: e.description, icon: (0, d.jsx)(u, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    T = ({ component: e }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      n = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [n ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: n, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    C = ({ component: e, headingLevel: t, description: n }) => {
     const i = e && k.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(y.p, { level: t, suffix: i && (0, d.jsx)(j.D, { state: i }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: n })] });
    };
  },
  51450: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'file-typography', 'IconFileTypography', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', key: 'svg-1' }],
    ['path', { d: 'M11 18h2', key: 'svg-2' }],
    ['path', { d: 'M12 18v-7', key: 'svg-3' }],
    ['path', { d: 'M9 12v-1h6v1', key: 'svg-4' }],
   ]);
  },
  51580: (e, t, n) => {
   var r = { './code-block-docs/docs/anatomy/anatomy.md': [46793, 46793], './code-docs/docs/anatomy/anatomy.md': [67733, 67733], './color-sample-docs/docs/anatomy/anatomy.md': [72723, 72723], './data-badge-docs/docs/anatomy/anatomy.md': [24343, 24343], './heading-1-docs/docs/anatomy/anatomy.md': [28456, 28456], './heading-2-docs/docs/anatomy/anatomy.md': [1572, 1572], './heading-3-docs/docs/anatomy/anatomy.md': [39512, 39512], './heading-4-docs/docs/anatomy/anatomy.md': [89948, 89948], './heading-5-docs/docs/anatomy/anatomy.md': [69896, 69896], './heading-6-docs/docs/anatomy/anatomy.md': [74572, 74572], './heading-docs/docs/anatomy/anatomy.md': [1259, 1259], './link-docs/docs/anatomy/anatomy.md': [5779, 5779], './mark-docs/docs/anatomy/anatomy.md': [96029, 96029], './number-badge-docs/docs/anatomy/anatomy.md': [86601, 86601], './paragraph-docs/docs/anatomy/anatomy.md': [13321, 13321], './skip-link-docs/docs/anatomy/anatomy.md': [68019, 68019] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 51580), (e.exports = i);
  },
  57837: (e, t, n) => {
   'use strict';
   n.d(t, { C: () => h });
   var r = n(19371),
    i = n(47301),
    s = n(86070),
    o = n(13526),
    a = n(30758),
    c = ['children', 'className'];
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         (0, r.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : l(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var h = (0, a.forwardRef)(function (e, t) {
    var n = e.children,
     r = e.className,
     a = (0, i.A)(e, c);
    return (0, s.jsx)('code', d(d({ dir: 'ltr', translate: 'no', className: (0, o.$)('nl-code', r) }, a), {}, { ref: t, children: n }));
   });
   h.displayName = 'Code';
   !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if ('undefined' != typeof document) {
     var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
     (i.type = 'text/css'), 'top' === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
   })('.nl-code{background-color:var(--nl-code-background-color);color:var(--nl-code-color);font-family:var(--nl-code-font-family, monospace),monospace;font-size:var(--nl-code-font-size, inherit);hyphens:none;white-space:pre-wrap}\n');
  },
  62254: (e, t, n) => {
   'use strict';
   n.d(t, { H: () => d });
   var r = n(46563),
    i = n(13526),
    s = n(30758),
    o = n(75916),
    a = n(86070);
   const c = ({ children: e }) => (0, a.jsx)('ol', { className: 'nlds-anatomy-list', children: e }),
    l = ({ children: e }) => (0, a.jsx)('li', { className: 'nlds-anatomy-list__item', children: e }),
    d = ({ component: e, illustration: t }) => {
     const { title: d } = e,
      h = (0, o.fX)(d),
      u = s.lazy(() => n(51580)(`./${h}-docs/docs/anatomy/anatomy.md`).catch(() => ({ default: () => null })));
     return (0, a.jsx)(s.Suspense, { fallback: null, children: (0, a.jsxs)('figure', { className: (0, i.A)('component-anatomy'), children: [t && (0, a.jsx)(t, { height: null, className: (0, i.A)('component-anatomy__illustration') }), t && u && (0, a.jsx)('figcaption', { children: (0, a.jsx)(r.o, { omitH1: !0, headingLevel: 1, components: { ol: ({ children: e }) => (0, a.jsx)(c, { children: e }), li: ({ children: e }) => (0, a.jsx)(l, { children: e }) }, children: (0, a.jsx)(u, {}) }) })] }) });
    };
  },
  64730: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'bold', 'IconBold', [
    ['path', { d: 'M7 5h6a3.5 3.5 0 0 1 0 7h-6z', key: 'svg-0' }],
    ['path', { d: 'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', key: 'svg-1' }],
   ]);
  },
  64840: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'copy', 'IconCopy', [
    ['path', { d: 'M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z', key: 'svg-0' }],
    ['path', { d: 'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1', key: 'svg-1' }],
   ]);
  },
  66706: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => o });
   var r = n(86070),
    i = n(85248);
   function s(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'Het label bestaat uit gewone tekst, niet uit een afbeelding van tekst. Tenzij het om een logo gaat, zoals een DigiD-logo.' }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/buttons/afbeelding-als-button/', children: 'Afbeeldingen als buttons' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/afbeeldingen/tekst-in-afbeelding/', children: 'Tekst in een afbeelding' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  73361: (e, t, n) => {
   'use strict';
   n.d(t, { B: () => C });
   var r = n(57837),
    i = n(96079),
    s = n(75916),
    o = n(68873),
    a = n(58713),
    c = n(87347),
    l = n(92406),
    d = n(63313),
    h = n(64840),
    u = n(14537),
    g = n(86070);
   function m({ children: e, content: t, language: n }) {
    return 'clipboard' in navigator
     ? (0, g.jsxs)(o.$n, {
        type: 'button',
        appearance: 'secondary-action-button',
        onClick: async function () {
         try {
          const e = await d.Ay.format(t, { parser: n, plugins: [a.A, c.Ay, l.Ay] });
          await navigator.clipboard.writeText(e);
         } catch (e) {
          console.error(e);
         }
        },
        children: [e, (0, g.jsx)(u.In, { children: (0, g.jsx)(h.A, {}) })],
       })
     : null;
   }
   var p = n(30696),
    j = n(73769),
    y = n(51450),
    f = n(38985),
    v = n(64730),
    w = n(44132),
    b = n(1941),
    k = n(43825),
    x = n(30758);
   const A = { color: p.A, dimension: j.A, fontFamilies: y.A, fontSizes: f.A, fontWeights: v.A, lineHeights: w.A, other: b.A, textDecoration: k.A },
    T = ({ type: e }) => (0, g.jsx)(u.In, { children: (0, x.createElement)(A[e]) });
   function C({ tokens: e }) {
    const t = (0, s.kD)(e),
     n = (0, s.GT)(t),
     a = n.map((e) => (0, s.B_)(e) + ': ;').join('\n'),
     c = JSON.stringify((0, s.Rc)(n));
    return (0, g.jsxs)(g.Fragment, {
     children: [
      (0, g.jsxs)(o.XI, {
       children: [
        (0, g.jsx)(o.A0, { children: (0, g.jsxs)(o.Hj, { children: [(0, g.jsx)(o.M_, { children: 'name' }), (0, g.jsx)(o.M_, { children: 'type' })] }) }),
        (0, g.jsx)(o.BF, {
         children: n.map((t) => {
          const n = (0, s.o_)(t),
           a = (0, s.eQ)(e, t).$type;
          return (0, g.jsxs)(o.Hj, { children: [(0, g.jsx)(o.nA, { children: (0, g.jsx)(r.C, { children: (0, g.jsx)(o.kf, { children: n }) }) }), (0, g.jsx)(o.nA, { children: (0, g.jsxs)(i.K, { children: [(0, g.jsx)(T, { type: a }), ' ', a] }) })] }, n);
         }),
        }),
       ],
      }),
      (0, g.jsxs)(o.e2, { children: [(0, g.jsx)(m, { content: c, language: 'json', children: 'Kopieer als JSON' }), (0, g.jsx)(m, { content: a, language: 'css', children: 'Kopieer als CSS' })] }),
     ],
    });
   }
  },
  73769: (e, t, n) => {
   'use strict';
   n.d(t, { A: () => r });
   var r = (0, n(99773).A)('outline', 'ruler', 'IconRuler', [
    ['path', { d: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', key: 'svg-0' }],
    ['path', { d: 'M4 8l2 0', key: 'svg-1' }],
    ['path', { d: 'M4 12l3 0', key: 'svg-2' }],
    ['path', { d: 'M4 16l2 0', key: 'svg-3' }],
    ['path', { d: 'M8 4l0 2', key: 'svg-4' }],
    ['path', { d: 'M12 4l0 3', key: 'svg-5' }],
    ['path', { d: 'M16 4l0 2', key: 'svg-6' }],
   ]);
  },
  74111: (e, t, n) => {
   var r = { './utrecht-alert_46.entry.js': [21118, 21118], './utrecht-backdrop.entry.js': [59925, 82306], './utrecht-body.entry.js': [48603, 70984], './utrecht-breadcrumb-nav.entry.js': [35894, 13513], './utrecht-checkbox.entry.js': [32406, 10025], './utrecht-column-layout.entry.js': [28996, 6615], './utrecht-contact-card-template.entry.js': [8469, 30850], './utrecht-custom-checkbox.entry.js': [74796, 52415], './utrecht-data-list-actions.entry.js': [50286, 27905], './utrecht-data-list-item.entry.js': [29722, 7341], './utrecht-data-list-key.entry.js': [22346, 99965], './utrecht-data-list-value.entry.js': [50348, 27967], './utrecht-data-list.entry.js': [26112, 3731], './utrecht-digid-button.entry.js': [3603, 25984], './utrecht-digid-logo.entry.js': [6128, 83747], './utrecht-eherkenning-logo.entry.js': [665, 23046], './utrecht-eidas-logo.entry.js': [31245, 53626], './utrecht-form-field-error-message.entry.js': [50061, 72442], './utrecht-form-toggle.entry.js': [20334, 97953], './utrecht-html-content.entry.js': [96334, 96334], './utrecht-icon-afspraak-maken.entry.js': [77059, 99440], './utrecht-icon-afval-container.entry.js': [40503, 62884], './utrecht-icon-afval-containerpas.entry.js': [82447, 4828], './utrecht-icon-afval-kalender.entry.js': [35440, 13059], './utrecht-icon-afval-pmd.entry.js': [9417, 31798], './utrecht-icon-afval-scheiden.entry.js': [85137, 7518], './utrecht-icon-afval.entry.js': [36373, 58754], './utrecht-icon-afvalkalender.entry.js': [51039, 73420], './utrecht-icon-alleen.entry.js': [51706, 29325], './utrecht-icon-arrow.entry.js': [96722, 19103], './utrecht-icon-auto.entry.js': [23336, 955], './utrecht-icon-begroting.entry.js': [61910, 39529], './utrecht-icon-bestemmingsplan.entry.js': [95466, 73085], './utrecht-icon-betaaldatum.entry.js': [34725, 57106], './utrecht-icon-bewijsstukken.entry.js': [86706, 64325], './utrecht-icon-bijstand.entry.js': [79608, 57227], './utrecht-icon-blad.entry.js': [23396, 1015], './utrecht-icon-bluesky.entry.js': [41230, 18849], './utrecht-icon-bouwproject.entry.js': [71527, 93908], './utrecht-icon-brandgevaar.entry.js': [78336, 55955], './utrecht-icon-brief-betalen.entry.js': [45975, 68356], './utrecht-icon-checkmark.entry.js': [41542, 19161], './utrecht-icon-chevron-down.entry.js': [19997, 42378], './utrecht-icon-chevron-left.entry.js': [3508, 81127], './utrecht-icon-chevron-right.entry.js': [32507, 54888], './utrecht-icon-chevron-up.entry.js': [41032, 18651], './utrecht-icon-close.entry.js': [67295, 89676], './utrecht-icon-college-b-w.entry.js': [49777, 72158], './utrecht-icon-container-bio.entry.js': [71539, 93920], './utrecht-icon-container-glas.entry.js': [29302, 6921], './utrecht-icon-container-groenafval.entry.js': [93948, 71567], './utrecht-icon-container-met-zak.entry.js': [1624, 79243], './utrecht-icon-container-papier.entry.js': [47694, 25313], './utrecht-icon-container-pmd.entry.js': [73840, 51459], './utrecht-icon-container-restafval.entry.js': [44453, 66834], './utrecht-icon-container-textiel.entry.js': [69930, 47549], './utrecht-icon-container.entry.js': [48100, 25719], './utrecht-icon-cross.entry.js': [50587, 72968], './utrecht-icon-dakloos.entry.js': [57056, 34675], './utrecht-icon-dementie.entry.js': [4326, 81945], './utrecht-icon-documenten.entry.js': [85193, 7574], './utrecht-icon-duurzaam.entry.js': [45600, 23219], './utrecht-icon-eenzaamheid.entry.js': [60650, 38269], './utrecht-icon-eikenprocessie.entry.js': [88400, 66019], './utrecht-icon-elektrisch-rijden.entry.js': [2720, 80339], './utrecht-icon-energie-vergoeding.entry.js': [26791, 49172], './utrecht-icon-energietransitie.entry.js': [34383, 56764], './utrecht-icon-error.entry.js': [57205, 79586], './utrecht-icon-evenementen.entry.js': [52447, 74828], './utrecht-icon-facebook.entry.js': [76311, 98692], './utrecht-icon-fiets.entry.js': [11770, 89389], './utrecht-icon-filter.entry.js': [17757, 40138], './utrecht-icon-geboorte.entry.js': [34206, 11825], './utrecht-icon-gebruiker-centraal.entry.js': [67230, 44849], './utrecht-icon-gebruiker-ingelogd.entry.js': [48305, 70686], './utrecht-icon-gegevenswoordenboek.entry.js': [73424, 51043], './utrecht-icon-geluid.entry.js': [11789, 34170], './utrecht-icon-gemeente-locatie.entry.js': [97085, 19466], './utrecht-icon-gemeenteraad.entry.js': [64741, 87122], './utrecht-icon-gereedschap.entry.js': [95044, 72663], './utrecht-icon-gezicht.entry.js': [29497, 51878], './utrecht-icon-gezin.entry.js': [26654, 4273], './utrecht-icon-glas-afval.entry.js': [60819, 83200], './utrecht-icon-glijbaan.entry.js': [18637, 41018], './utrecht-icon-grafiek.entry.js': [26546, 4165], './utrecht-icon-grofvuil-ophalen.entry.js': [58649, 81030], './utrecht-icon-grofvuil.entry.js': [35927, 58308], './utrecht-icon-hamburger-menu.entry.js': [12466, 90085], './utrecht-icon-herdenking.entry.js': [48810, 26429], './utrecht-icon-hondenbelasting.entry.js': [82480, 60099], './utrecht-icon-horeca.entry.js': [74919, 97300], './utrecht-icon-horecavergunning.entry.js': [61636, 39255], './utrecht-icon-huis-en-omgeving.entry.js': [41809, 64190], './utrecht-icon-huis.entry.js': [3444, 81063], './utrecht-icon-huishoudelijk-geweld.entry.js': [57590, 35209], './utrecht-icon-hulp-huishouden.entry.js': [43517, 65898], './utrecht-icon-hulp-vervoer.entry.js': [86248, 63867], './utrecht-icon-hulp-zorg.entry.js': [68565, 90946], './utrecht-icon-hulpmiddelen-gezin.entry.js': [57304, 34923], './utrecht-icon-hulpverlening.entry.js': [72714, 50333], './utrecht-icon-idee.entry.js': [91204, 68823], './utrecht-icon-informatie.entry.js': [96677, 19058], './utrecht-icon-information.entry.js': [43781, 66162], './utrecht-icon-innovatie.entry.js': [47394, 25013], './utrecht-icon-inspraak-inwoners.entry.js': [560, 78179], './utrecht-icon-instagram.entry.js': [20179, 42560], './utrecht-icon-kalender.entry.js': [31401, 53782], './utrecht-icon-kennis.entry.js': [63475, 85856], './utrecht-icon-kerstbomen.entry.js': [10601, 32982], './utrecht-icon-klachten.entry.js': [44359, 66740], './utrecht-icon-kroon.entry.js': [85264, 62883], './utrecht-icon-laadpaal.entry.js': [28283, 50664], './utrecht-icon-language.entry.js': [47513, 69894], './utrecht-icon-lantaarnpaal-oud.entry.js': [48383, 70764], './utrecht-icon-lantaarnpaal.entry.js': [12270, 89889], './utrecht-icon-leren.entry.js': [26235, 81473], './utrecht-icon-let-op.entry.js': [34432, 12051], './utrecht-icon-linkedin.entry.js': [62321, 84702], './utrecht-icon-list-check.entry.js': [14150, 91769], './utrecht-icon-list-number.entry.js': [66693, 89074], './utrecht-icon-list.entry.js': [8815, 31196], './utrecht-icon-loupe.entry.js': [48760, 26379], './utrecht-icon-markt.entry.js': [7224, 84843], './utrecht-icon-mastodon.entry.js': [18956, 96575], './utrecht-icon-melding-boom.entry.js': [49769, 72150], './utrecht-icon-melding-klacht.entry.js': [94525, 16906], './utrecht-icon-melding-openbareruimte.entry.js': [51554, 29173], './utrecht-icon-melding-verlichting.entry.js': [31913, 54294], './utrecht-icon-melding.entry.js': [95625, 18006], './utrecht-icon-menselijk.entry.js': [74647, 97028], './utrecht-icon-menu-dot-open.entry.js': [30823, 53204], './utrecht-icon-menu-dot.entry.js': [65842, 43461], './utrecht-icon-meterkast.entry.js': [74341, 96722], './utrecht-icon-milieu-ontheffing.entry.js': [30533, 52914], './utrecht-icon-milieu-zone.entry.js': [22919, 45300], './utrecht-icon-minus-vertical.entry.js': [11346, 88965], './utrecht-icon-minus.entry.js': [59951, 82332], './utrecht-icon-mobiliteit.entry.js': [22519, 44900], './utrecht-icon-natuur.entry.js': [77430, 55049], './utrecht-icon-nieuw-huis.entry.js': [50659, 5897], './utrecht-icon-nieuwsbrief.entry.js': [20472, 98091], './utrecht-icon-nummerbord.entry.js': [95490, 73109], './utrecht-icon-om-het-huis.entry.js': [77323, 99704], './utrecht-icon-omgeving.entry.js': [68789, 91170], './utrecht-icon-omgevingsvisie.entry.js': [43154, 20773], './utrecht-icon-omgevingswet.entry.js': [94058, 71677], './utrecht-icon-onderhoud.entry.js': [35703, 58084], './utrecht-icon-ondernemen.entry.js': [58848, 36467], './utrecht-icon-openingstijden.entry.js': [2560, 80179], './utrecht-icon-over-de-stad.entry.js': [65860, 43479], './utrecht-icon-overlijden.entry.js': [19583, 41964], './utrecht-icon-panden.entry.js': [40233, 62614], './utrecht-icon-park.entry.js': [41699, 64080], './utrecht-icon-parkeerkaart.entry.js': [50138, 27757], './utrecht-icon-parkeervergunning.entry.js': [48220, 25839], './utrecht-icon-parken.entry.js': [10284, 87903], './utrecht-icon-parkeren-bedrijven.entry.js': [63427, 85808], './utrecht-icon-parkeren-betaalautomaat.entry.js': [79079, 1460], './utrecht-icon-parkeren-betalen.entry.js': [45967, 68348], './utrecht-icon-parkeren.entry.js': [55019, 77400], './utrecht-icon-participatie-campagne.entry.js': [20493, 42874], './utrecht-icon-participatie-like.entry.js': [81042, 58661], './utrecht-icon-participatie-pitch.entry.js': [96203, 18584], './utrecht-icon-paspoort.entry.js': [70771, 93152], './utrecht-icon-presentatie.entry.js': [66819, 89200], './utrecht-icon-prijskaartje.entry.js': [50869, 73250], './utrecht-icon-read-aloud.entry.js': [29333, 51714], './utrecht-icon-rijbewijs.entry.js': [16388, 94007], './utrecht-icon-rioolheffing.entry.js': [67517, 89898], './utrecht-icon-rolstoel.entry.js': [69169, 91550], './utrecht-icon-schild-gemeente-utrecht.entry.js': [76081, 98462], './utrecht-icon-search.entry.js': [57891, 80272], './utrecht-icon-shoppen.entry.js': [82732, 60351], './utrecht-icon-sinterklaas.entry.js': [17030, 94649], './utrecht-icon-slechtziende-hoordende.entry.js': [69228, 46847], './utrecht-icon-sport-en-cultuur.entry.js': [98796, 76415], './utrecht-icon-sport-voetbal.entry.js': [31085, 53466], './utrecht-icon-sport.entry.js': [95485, 17866], './utrecht-icon-stookverbod.entry.js': [47079, 69460], './utrecht-icon-strand.entry.js': [39735, 62116], './utrecht-icon-strooien.entry.js': [92040, 69659], './utrecht-icon-subsidie-gezin.entry.js': [10719, 33100], './utrecht-icon-subsidie.entry.js': [39519, 61900], './utrecht-icon-t-shirt.entry.js': [32838, 10457], './utrecht-icon-threads.entry.js': [36194, 13813], './utrecht-icon-thuiswerken.entry.js': [99276, 76895], './utrecht-icon-toeslag.entry.js': [89064, 66683], './utrecht-icon-trein.entry.js': [43189, 65570], './utrecht-icon-trouwen.entry.js': [31467, 53848], './utrecht-icon-twitter.entry.js': [75360, 52979], './utrecht-icon-user.entry.js': [5632, 83251], './utrecht-icon-uw-wijk.entry.js': [2831, 25212], './utrecht-icon-vaccinatie.entry.js': [10772, 88391], './utrecht-icon-veilige-wijk.entry.js': [13306, 90925], './utrecht-icon-vergaderen.entry.js': [89164, 66783], './utrecht-icon-vergaderendigitaal.entry.js': [31109, 53490], './utrecht-icon-vergoeding.entry.js': [91097, 13478], './utrecht-icon-verhuizen.entry.js': [39473, 61854], './utrecht-icon-verkeerslicht.entry.js': [16718, 94337], './utrecht-icon-verkiezingen.entry.js': [28486, 6105], './utrecht-icon-verslaving.entry.js': [41840, 19459], './utrecht-icon-vervoersvoorziening.entry.js': [63517, 85898], './utrecht-icon-virus.entry.js': [69826, 47445], './utrecht-icon-vluchtelingen.entry.js': [77329, 99710], './utrecht-icon-voorzieningen-vervoer.entry.js': [44904, 22523], './utrecht-icon-vrijwilligerswerk.entry.js': [4045, 26426], './utrecht-icon-vuilnisbak.entry.js': [95691, 18072], './utrecht-icon-vuilniszak.entry.js': [48083, 70464], './utrecht-icon-vuurwerk.entry.js': [22418, 37], './utrecht-icon-wandelstok.entry.js': [84985, 7366], './utrecht-icon-warm.entry.js': [96434, 74053], './utrecht-icon-warning.entry.js': [39295, 61676], './utrecht-icon-werken.entry.js': [53643, 76024], './utrecht-icon-werkzaamheden.entry.js': [63301, 85682], './utrecht-icon-whatsapp.entry.js': [99673, 22054], './utrecht-icon-wonen-kosten.entry.js': [81423, 3804], './utrecht-icon-woning-zoeken.entry.js': [29431, 29431], './utrecht-icon-x.entry.js': [11711, 34092], './utrecht-icon-youtube.entry.js': [76330, 53949], './utrecht-icon-zelfstandig-wonen.entry.js': [52124, 29743], './utrecht-icon-zoom-minus.entry.js': [82693, 5074], './utrecht-icon-zoom-plus.entry.js': [59514, 59514], './utrecht-icon-zoomin.entry.js': [36851, 59232], './utrecht-icon-zoomout.entry.js': [63310, 40929], './utrecht-icon-zorg-huis.entry.js': [72095, 94476], './utrecht-icon-zweefpaal.entry.js': [83280, 60899], './utrecht-icon-zwemmen.entry.js': [53056, 30675], './utrecht-logo-button.entry.js': [23945, 46326], './utrecht-map-marker.entry.js': [65576, 43195], './utrecht-multiline-data.entry.js': [50201, 72582], './utrecht-nav-bar.entry.js': [70626, 48245], './utrecht-number-badge.entry.js': [44892, 22511], './utrecht-page-body.entry.js': [78181, 562], './utrecht-page-footer.entry.js': [7030, 84649], './utrecht-page-layout.entry.js': [57887, 80268], './utrecht-pagination.entry.js': [97911, 20292], './utrecht-preserve-data.entry.js': [31540, 9159], './utrecht-progress-list-item.entry.js': [57493, 2255], './utrecht-progress-list.entry.js': [30781, 53162], './utrecht-progress-sublist-item.entry.js': [70847, 93228], './utrecht-root.entry.js': [53667, 76048], './utrecht-sidenav.entry.js': [611, 22992], './utrecht-surface.entry.js': [61336, 38955], './utrecht-table-body.entry.js': [61912, 39531], './utrecht-table-caption.entry.js': [8296, 85915], './utrecht-table-cell.entry.js': [20760, 98379], './utrecht-table-container.entry.js': [63033, 85414], './utrecht-table-footer.entry.js': [59667, 82048], './utrecht-table-header-cell.entry.js': [2238, 79857], './utrecht-table-header.entry.js': [18705, 41086], './utrecht-table-row.entry.js': [17598, 95217], './utrecht-table.entry.js': [4667, 27048], './utrecht-textarea.entry.js': [7069, 29450], './utrecht-textbox.entry.js': [52563, 74944], './utrecht-top-task-link.entry.js': [61965, 84346], './utrecht-top-task-nav.entry.js': [29199, 29199] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 74111), (e.exports = i);
  },
  75916: (e, t, n) => {
   'use strict';
   n.d(t, { B2: () => h, B_: () => j, GT: () => v, KF: () => d, Pc: () => a, Pv: () => m, Rc: () => w, bo: () => r, eQ: () => y, f4: () => o, fX: () => i, kD: () => f, mJ: () => g, o_: () => p, qZ: () => s });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function c(e) {
    return Array.from(new Set(e));
   }
   const l = (e) => {
     const t = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
     return [...e].sort((e, n) => t.indexOf(e) - t.indexOf(n));
    },
    d = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return l(c(t));
    },
    h = (e, t) => g(e).includes(t),
    u = (e) => {
     const t = / URL \(([^)]+)\)/;
     return l(c(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    g = (e) => l(c(e.projects.flatMap((e) => u(e)))),
    m = (e) => {
     const t = u(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: r, id: i, value: s }) => {
        const o = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === o ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${o}`;
        return { brand: o.toLowerCase(), name: r, id: i, value: s, description: a };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    p = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    y = (e, t) => t.reduce((e, t) => e?.[t], e);
   function f(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? f(e[n], [...t, n]) : []));
   }
   function v(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, p(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function w(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) e[t] || (e[t] = {}), (e = e[t]);
    }
    return t;
   }
  },
  82839: (e, t, n) => {
   var r = { './code-block-docs/docs/aliases.md': [23918, 23918], './code-docs/docs/aliases.md': [33874, 33874], './color-sample-docs/docs/aliases.md': [44052, 44052], './data-badge-docs/docs/aliases.md': [58448, 58448], './heading-1-docs/docs/aliases.md': [57471, 57471], './heading-2-docs/docs/aliases.md': [63923, 63923], './heading-3-docs/docs/aliases.md': [7855, 7855], './heading-4-docs/docs/aliases.md': [88584, 66203], './heading-docs/docs/aliases.md': [57308, 57308], './link-docs/docs/aliases.md': [98100, 98100], './mark-docs/docs/aliases.md': [22314, 22314], './number-badge-docs/docs/aliases.md': [78990, 78990], './paragraph-docs/docs/aliases.md': [52910, 52910], './skip-link-docs/docs/aliases.md': [6196, 6196] };
   function i(e) {
    if (!n.o(r, e))
     return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = 'MODULE_NOT_FOUND'), t);
     });
    var t = r[e],
     i = t[0];
    return n.e(t[1]).then(() => n(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 82839), (e.exports = i);
  },
  83329: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => o });
   var r = n(86070),
    i = n(85248);
   function s(e) {
    const t = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(t.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(t.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(t.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, r.jsx)(t.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, r.jsx)(t.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur niet alleen op de specifieke styling van het element of component, maar op globaal (', (0, r.jsx)(t.code, { children: ':root' }), ') niveau.'] }), '\n', (0, r.jsx)(t.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(t.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(t.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(t.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(t.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(t.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(t.pre, { children: (0, r.jsx)(t.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83672: (e, t, n) => {
   'use strict';
   n.d(t, { Ay: () => o });
   var r = n(86070),
    i = n(85248);
   function s(e) {
    const t = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(t.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(t.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(t.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(t.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(t.ul, { children: ['\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(t.li, { children: (0, r.jsx)(t.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: t } = { ...(0, i.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  92420: (e, t, n) => {
   'use strict';
   n.d(t, { N: () => o });
   var r = n(71170),
    i = n(13526),
    s = n(86070);
   const o = ({ className: e, ...t }) => (0, s.jsx)(r.A, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  96079: (e, t, n) => {
   'use strict';
   n.d(t, { K: () => g });
   var r = n(19371),
    i = n(47301),
    s = n(86070),
    o = n(13526),
    a = n(30758),
    c = ['children'],
    l = ['dateTime'],
    d = ['value'];
   function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function u(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? h(Object(n), !0).forEach(function (t) {
         (0, r.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : h(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var g = (0, a.forwardRef)(function (e, t) {
    var n = e.children,
     r = (0, i.A)(e, c),
     a = (0, o.$)('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(r)
    ) {
     var h = r.dateTime,
      g = (0, i.A)(r, l);
     return (0, s.jsx)('time', u(u({}, g), {}, { dateTime: h, className: a, ref: t, children: n }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(r)
    ) {
     var m = r.value,
      p = (0, i.A)(r, d);
     return (0, s.jsx)('data', u(u({}, p), {}, { value: m, className: a, ref: t, children: n }));
    }
    return (0, s.jsx)('span', u(u({}, r), {}, { className: a, ref: t, children: n }));
   });
   g.displayName = 'DataBadge';
   !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if ('undefined' != typeof document) {
     var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
     (i.type = 'text/css'), 'top' === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
   })('.nl-data-badge{background-color:var(--nl-data-badge-background-color);border-color:var(--nl-data-badge-border-color, currentColor);border-radius:var(--nl-data-badge-border-radius, 0);border-style:solid;border-width:var(--nl-data-badge-border-width, 1px);box-sizing:border-box;color:var(--nl-data-badge-color);display:inline-block;font-family:var(--nl-data-badge-font-family);font-size:var(--nl-data-badge-font-size);font-weight:var(--nl-data-badge-font-weight);line-height:var(--nl-data-badge-line-height);max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--nl-data-badge-min-block-size);min-inline-size:var(--nl-data-badge-min-inline-size);padding-block:var(--nl-data-badge-padding-block);padding-inline:var(--nl-data-badge-padding-inline);text-decoration:none}@media screen and (forced-colors: active){.nl-data-badge{border-color:currentColor;border-width:min(var(--nl-data-badge-border-width, 1px),1px)}}\n');
  },
  98584: (e, t, n) => {
   'use strict';
   n.d(t, { p: () => s });
   var r = n(13526),
    i = n(86070);
   const s = ({ children: e, className: t, level: n = 1, suffix: s, ...o }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${n}`, t), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
