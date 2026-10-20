'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33710],
 {
  1866(e, n, t) {
   t.d(n, { b: () => p, e: () => h });
   var r = t(30758),
    i = t(24456),
    o = t(12086),
    s = t(29181),
    a = t(66153),
    l = t(46847),
    d = t(14881),
    c = t(29857),
    g = t(6360),
    u = t(13526),
    m = t(86070);
   const h = ({ title: e, sc: n, children: t, tags: a }) => {
     const l = (0, r.useId)(),
      c = [...a];
     if (n) {
      c.push(n);
      const e = o.pI.get(n);
      e?.conformance && c.push(`Niveau ${e.conformance}`);
     }
     return (0, m.jsx)('div', {
      role: 'listitem',
      'data-tags': a.join(','),
      className: (0, u.A)(
       'ma-new-checklist__item',
       a.map((e) => `ma-new-checklist__item--${e}`),
      ),
      children: (0, m.jsx)(d.K, {
       label: (0, m.jsx)('span', { className: 'ma-new-checklist__title', id: l, children: e }),
       children: (0, m.jsxs)('div', {
        className: 'ma-new-checklist__content ma-flow',
        children: [
         t && (0, m.jsx)('div', { className: 'ma-flow', children: t }),
         (0, m.jsx)(s._Q, {
          className: 'ma-new-checklist__badge-list',
          children: c.map((e, n) => {
           let t = (0, m.jsx)(g.KE, { children: e }, n);
           if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(e)) {
            const r = o.pI.get(e);
            t = (0, m.jsx)(i.N, { href: `/wcag/${e}`, 'aria-label': `WCAG Succescriterium ${r.sc} ${r.nl.title}`, style: { lineHeight: 1 }, children: (0, m.jsx)(g.KE, { children: `WCAG ${e}` }) }, n);
           }
           return t;
          }),
         }),
        ],
       }),
      }),
     });
    },
    p = ({ children: e, headingLevel: n }) => {
     const t = r.useRef(null),
      [i, o] = (0, r.useState)([]),
      [g, u] = (0, r.useState)([]),
      [h, p] = (0, r.useState)([]),
      [f, j] = (0, r.useState)(0),
      [w, b] = (0, r.useState)(0),
      v = (e) => h.includes(e),
      x = (0, r.useId)();
     return (
      r.useEffect(() => {
       const e = t.current;
       if (!e) return;
       const n = new Set(),
        r = Array.from(e.querySelectorAll('[data-tags]'));
       (r.forEach((e) => {
        e.dataset.tags?.split(',')?.forEach((e) => e && n.add(e));
       }),
        o(r),
        u([...n]),
        j(r.length),
        p([...n]));
      }, []),
      r.useEffect(() => {
       const e = h,
        n = [],
        t = [];
       (i.forEach((r) => {
        (r.dataset.tags?.split(',') || []).some((n) => e.includes(n)) ? n.push(r) : t.push(r);
       }),
        n.forEach((e) => (e.hidden = !1)),
        t.forEach((e) => (e.hidden = !0)),
        b(n.length));
      }, [h]),
      (0, m.jsxs)('div', {
       children: [
        (0, m.jsxs)('div', {
         className: 'ma-filter-block',
         children: [
          (0, m.jsxs)(s.LB, {
           'aria-describedby': 'filter-results',
           'aria-labelledby': x,
           children: [
            (0, m.jsx)(c.DZ, { level: n, id: x, children: 'Filter acceptatiecriteria voor:' }),
            Array.from(g).map((e) =>
             (0, m.jsxs)(
              s.zB,
              {
               type: 'checkbox',
               children: [
                (0, m.jsx)(s.Sc, {
                 checked: v(e),
                 id: e,
                 onChange: () =>
                  ((e, n) => {
                   const t = ('boolean' == typeof n ? n : !v(e)) ? [...h, e] : h.filter((n) => n !== e);
                   p(t);
                  })(e),
                }),
                (0, m.jsx)(s.lR, { htmlFor: e, children: e }),
               ],
              },
              e,
             ),
            ),
           ],
          }),
          (0, m.jsx)('div', {
           children: (0, m.jsxs)(m.Fragment, {
            children: [
             (0, m.jsxs)(a.f, { role: 'status', children: [w, ' van de ', f, ' items zijn nu zichtbaar.'] }),
             w < f
              ? (0, m.jsx)(l.$, {
                 purpose: 'secondary',
                 onClick: () => {
                  p(g);
                 },
                 children: 'Toon alles',
                })
              : (0, m.jsx)(m.Fragment, {}),
            ],
           }),
          }),
         ],
        }),
        (0, m.jsx)(d.n, { className: 'ma-new-checklist', role: 'list', ref: t, children: e }),
       ],
      })
     );
    };
  },
  3387(e, n, t) {
   t.d(n, { s: () => l });
   var r = t(29181),
    i = t(13526),
    o = t(84471),
    s = t(86070);
   const a = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, o.fX)(n),
      d = a[e] ?? e;
     return (0, s.jsxs)(r.WK, { children: [(0, s.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('ma-component-illustration', `ma-component-illustration--${l}`), fill: 'none', children: [(0, s.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, s.jsx)('rect', { width: '960', height: '540' }), (0, s.jsx)('rect', { width: '960', height: '540' })] }), (0, s.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, s.jsx)('use', { href: `/svg/componenten_overzicht_${(0, o.fX)(d)}.svg#component-illustration` })] }), (0, s.jsx)(r.$P, { className: 'ma-component-illustration__caption', children: t })] });
    };
  },
  3446(e, n, t) {
   t.d(n, { r: () => g });
   var r = t(29181),
    i = t(74172),
    o = t(15089),
    s = t(28377),
    a = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(r.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  3678(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, r.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, r.jsx)(n.code, { children: ':root' }), ' niveau.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  6360(e, n, t) {
   t.d(n, { KE: () => u });
   var r = t(15540),
    i = t(69967),
    o = t(86070),
    s = t(30758),
    a = ['children'],
    l = ['dateTime'],
    d = ['value'];
   function c(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function g(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var u = (0, s.forwardRef)(function (e, n) {
    var t = e.children,
     r = (0, i.A)(e, a),
     s = (function () {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
      return n.filter(Boolean).join(' ');
     })('nl-data-badge', e.className);
    if (
     (function (e) {
      return 'dateTime' in e;
     })(r)
    ) {
     var c = r.dateTime,
      u = (0, i.A)(r, l);
     return (0, o.jsx)('time', g(g({}, u), {}, { dateTime: c, className: s, ref: n, children: t }));
    }
    if (
     (function (e) {
      return 'value' in e;
     })(r)
    ) {
     var m = r.value,
      h = (0, i.A)(r, d);
     return (0, o.jsx)('data', g(g({}, h), {}, { value: m, className: s, ref: n, children: t }));
    }
    return (0, o.jsx)('span', g(g({}, r), {}, { className: s, ref: n, children: t }));
   });
   u.displayName = 'DataBadge';
  },
  12086(e, n, t) {
   t.d(n, { NO: () => o, pI: () => s });
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
    o = [...r.map((e) => ({ ...e, url: e.url.replace(/WCAG21/i, 'WCAG22') })), { sc: '2.4.11', title: 'Focus Not Obscured (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', conformance: 'AA', nl: { title: 'Focus niet bedekt (minimum)' }, since: 'WCAG22' }, { sc: '2.4.12', title: 'Focus Not Obscured (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced', conformance: 'AAA', nl: { title: 'Focus niet bedekt (uitgebreid)' }, since: 'WCAG22' }, { sc: '2.4.13', title: 'Focus Appearance', url: 'https://www.w3.org/TR/WCAG22/#focus-appearance', conformance: 'AAA', nldesignsystem: !0, nl: { title: 'Focusweergave' }, since: 'WCAG22' }, { sc: '2.5.7', title: 'Dragging Movements', url: 'https://www.w3.org/TR/WCAG22/#dragging-movements', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Sleepbewegingen' }, since: 'WCAG22' }, { sc: '2.5.8', title: 'Target Size (minimum)', url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Grootte van het aanwijsgebied (minimum)' }, since: 'WCAG22' }, { sc: '3.2.6', title: 'Consistent Help', url: 'https://www.w3.org/TR/WCAG22/#consistent-help', conformance: 'A', nldesignsystem: !0, nl: { title: 'Consistente hulp' }, since: 'WCAG22' }, { sc: '3.3.7', title: 'Redundant Entry', url: 'https://www.w3.org/TR/WCAG22/#redundant-entry', conformance: 'A', nldesignsystem: !0, nl: { title: 'Overbodige invoer' }, since: 'WCAG22' }, { sc: '3.3.8', title: 'Accessible Authentication (Minimum)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum', conformance: 'AA', nldesignsystem: !0, nl: { title: 'Toegankelijke authenticatie (minimum)' }, since: 'WCAG22' }, { sc: '3.3.9', title: 'Accessible Authentication (Enhanced)', url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced', conformance: 'AAA', nl: { title: 'Toegankelijke authenticatie (uitgebreid)' }, since: 'WCAG22' }].map((e) => ({ ...e, fragment: new URL(e.url).hash.replace(/^#/, '') })).filter(({ sc: e }) => !i.find((n) => n.sc === e)),
    s = new Map(o.map((e) => [e.sc, e]));
  },
  13839(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Als je de NL Design System component gebruikt kun je er vanuit gaan dat onderstaande checks zijn gedaan. Maar door keuzes in de website of applicaties kan het natuurlijk zijn dat ze toch niet helemaal werken. Voor de zekerheid is het dus goed om ook op onderstaande punten te letten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => l });
   var r = t(13526),
    i = t(30758),
    o = t(30662),
    s = t(37168),
    a = t(86070);
   const l = (0, i.forwardRef)(({ as: e, className: n, children: t, ...i }, o) => {
     const s = e || 'div',
      l = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(s, { ref: o, className: l, ...i, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: i, headingLevel: l, headingApperance: d, ...c }) => {
     const g = (0, r.A)('utrecht-accordion__section', e),
      u = (0, r.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: g, ...c, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(o.rI, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [i && (0, a.jsx)(s.D, { level: l, appearance: d, children: i }), t] })] }) }), (0, a.jsx)('div', { className: u, children: c.children })] });
    };
  },
  15089(e, n, t) {
   t.d(n, { A: () => s });
   var r = t(48907),
    i = t(30758),
    o = ['size', 'color'];
   function s(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     s = e.color,
     a = void 0 === s ? 'currentColor' : s,
     l = (0, r.$i)(e, o);
    return i.createElement('svg', (0, r._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-github', width: t, height: t, viewBox: '0 0 24 24', stroke: a, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), i.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), i.createElement('path', { d: 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' }));
   }
  },
  19707(e, n, t) {
   t.d(n, { Z: () => r.Z });
   var r = t(93237);
  },
  24456(e, n, t) {
   t.d(n, { F: () => s, N: () => a });
   var r = t(13526),
    i = t(84471),
    o = t(86070);
   const s = ({ children: e, ...n }) => {
     const { to: t, href: r, ...s } = n;
     let a = t || r;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((s.target = '_blank'), (s.rel = 'noopener noreferrer')), (0, o.jsx)('a', { href: a, ...s, children: e }));
    },
    a = ({ className: e, boxContent: n, ...t }) => (0, o.jsx)(s, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', { 'utrecht-link--box-content': n }, e), ...t });
  },
  24908(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, komen niet voor in de normale toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief component, zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  26165(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => s, Wu: () => a, Zp: () => l });
   var r = t(46447),
    i = t(13526),
    o = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, o.jsx)('div', { className: (0, i.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, t), ...r, children: n }),
    a = (e) => (0, o.jsx)('div', { className: 'ma-card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: s = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, i.A)('ma-cardgroup__card', a && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, t), children: l });
     return e ? (0, o.jsx)(r.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'large', children: n, className: t }) => (0, o.jsx)('div', { className: (0, i.A)('ma-cardgroup', `ma-cardgroup--${e}`, t), children: n });
  },
  26877(e, n, t) {
   t.d(n, { VK: () => b, $9: () => x, mu: () => v, Fc: () => A, K_: () => k });
   var r = t(29181),
    i = t(29857),
    o = t(66153),
    s = t(13526),
    a = t(3446),
    l = t(26165),
    d = t(19707),
    c = t(86070);
   const g = ({ checked: e, unchecked: n }) => {
    const t = (e / (e + n)) * 250;
    return (0, c.jsxs)('svg', { viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg', className: 'ma-component-progress', 'aria-hidden': 'true', children: [(0, c.jsx)('circle', { className: 'ma-component-progress__background', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'none', strokeWidth: '20' }), (0, c.jsx)('circle', { className: 'ma-component-progress__progress', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'currentColor', strokeWidth: '20', strokeDasharray: t })] });
   };
   var u = t(87856),
    m = t(46276),
    h = t(58876),
    p = t(84471);
   const f = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Blockquote","slug":"blockquote"},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Pull Quote","slug":"pull-quote"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var j = t(14881),
    w = t(3387);
   const b = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      i = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(j.n, { children: i.map((t) => (0, c.jsx)(j.K, { className: (0, s.A)('ma-definition-of-done', t && `ma-definition-of-done--${(0, p.fX)(t.title)}`), heading: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(h._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, c.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(r) }, r)) }), (0, c.jsx)(r.fz, { children: (0, c.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) }, t.title)) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(l.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            s = t?.value,
            u = (0, p.Pv)(e),
            m = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => m.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return globalThis.isAstro
            ? (0, c.jsx)(
               d.Z,
               {
                heading: e.title.replace(/^Community/i, ''),
                headingLevel: n,
                description: (0, c.jsxs)('div', {
                 className: 'ma-flow',
                 children: [
                  (0, c.jsxs)(o.f, { children: [(0, c.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (0, c.jsxs)('div', {
                   children: [
                    (h.length > 0 || u.length > 0) && (0, c.jsx)(i.DZ, { level: Math.min(n + 1, 6), children: 'Snel aan de slag' }),
                    h.length > 0 &&
                     (0, c.jsx)(r.dk, {
                      links: h
                       .filter((e) => !!m.get(e.name))
                       .map((e) => {
                        const n = m.get(e.name);
                        return { children: n.desciption, icon: (0, c.jsx)(a.r, { brand: n.brand }), href: e.value };
                       }),
                     }),
                   ],
                  }),
                  u.length > 0 && u.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)('section', { children: [(0, c.jsxs)(i.DZ, { level: Math.min(n + 2, 6), children: [s, ' in ', e] }), (0, c.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(a.r, { brand: e.brand }), href: e.value })) })] }, e)),
                 ],
                }),
               },
               e.title,
              )
            : (0, c.jsx)(
               l.Zp,
               {
                className: 'ma-implementation-card',
                children: (0, c.jsxs)(l.Wu, {
                 children: [
                  (0, c.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
                  (0, c.jsxs)(r.fz, { children: [(0, c.jsx)(g, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (h.length > 0 || u.length > 0) && (0, c.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
                  h.length > 0 &&
                   (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsx)(r.dk, {
                     links: h
                      .filter((e) => !!m.get(e.name))
                      .map((e) => {
                       const n = m.get(e.name);
                       return { children: n.desciption, icon: (0, c.jsx)(a.r, { brand: n.brand }), href: e.value };
                      }),
                    }),
                   }),
                  u.length > 0 && (0, c.jsx)(c.Fragment, { children: u.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, c.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
                 ],
                }),
               },
               e.title,
              );
          }),
        })
      : (0, c.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(r.Xy, { children: [i ? (0, c.jsxs)(r.Er, { children: ['Vul de ', (0, c.jsx)(r.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(r.Er, { children: [(0, c.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    A = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m.p, { level: n, suffix: i && (0, c.jsx)(u.D, { state: i }), children: e.title }), (0, c.jsx)(r.fz, { lead: !0, children: t }), ['Help Wanted', 'Community'].includes(i) && (0, c.jsx)(w.s, { relayStep: i, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    k = ({ component: e }) => {
     const n = (e && f[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(r.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [e.slug ? (0, c.jsx)(r.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  28377(e, n, t) {
   t.d(n, { A: () => s });
   var r = t(48907),
    i = t(30758),
    o = ['size', 'color'];
   function s(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     s = e.color,
     a = void 0 === s ? 'currentColor' : s,
     l = (0, r.$i)(e, o);
    return i.createElement('svg', (0, r._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-npm', width: t, height: t, viewBox: '0 0 24 24', stroke: a, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), i.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), i.createElement('path', { d: 'M1 8h22v7h-12v2h-4v-2h-6z' }), i.createElement('path', { d: 'M7 8v7' }), i.createElement('path', { d: 'M14 8v7' }), i.createElement('path', { d: 'M17 11v4' }), i.createElement('path', { d: 'M4 11v4' }), i.createElement('path', { d: 'M11 11v1' }), i.createElement('path', { d: 'M20 11v4' }));
   }
  },
  29857(e, n, t) {
   t.d(n, { DZ: () => o, _B: () => s });
   var r = t(37168),
    i = t(86070);
   const o = (e) => (0, i.jsx)(r.D, { ...e }),
    s = (e) => (0, i.jsx)(r.D, { ...e, level: 3 });
  },
  30662(e, n, t) {
   t.d(n, { D4: () => F, GP: () => y, KC: () => P, Nd: () => k, Rt: () => R, Vj: () => T, Wk: () => z, bz: () => N, cB: () => L, e5: () => O, hY: () => W, jK: () => G, jP: () => S, ob: () => H, rI: () => C, t4: () => _, vP: () => D, vg: () => E });
   var r = t(92081),
    i = t(90578),
    o = t(96345),
    s = t(64249),
    a = t(4603),
    l = t(91525),
    d = t(23436),
    c = t(1375),
    g = t(4077),
    u = t(58315),
    m = t(73563),
    h = t(35193),
    p = t(82999),
    f = t(13088),
    j = t(43864),
    w = t(24214),
    b = t(79532),
    v = t(60529),
    x = t(86070);
   const A = { width: '1em', height: '1em' },
    k = () => (0, x.jsx)(r.A, { ...A }),
    y = () => (0, x.jsx)(i.A, { ...A }),
    C = () => (0, x.jsx)(o.A, { ...A }),
    T = () => (0, x.jsx)(s.A, { ...A }),
    N = () => (0, x.jsx)(a.A, { ...A }),
    R = () => (0, x.jsx)(l.A, { ...A }),
    L = () => (0, x.jsx)(d.A, { ...A }),
    D = () => (0, x.jsx)(c.A, { ...A }),
    G = () => (0, x.jsx)(g.A, { ...A }),
    S = () => (0, x.jsx)(u.A, { ...A }),
    _ = () => (0, x.jsx)(m.A, { ...A }),
    F = () => (0, x.jsx)(h.A, { ...A }),
    W = () => (0, x.jsx)(p.A, { ...A }),
    P = () => (0, x.jsx)(f.A, { ...A }),
    z = () => (0, x.jsx)(j.A, { ...A }),
    O = () => (0, x.jsx)(w.A, { ...A }),
    H = () => (0, x.jsx)(b.A, { ...A }),
    E = () => (0, x.jsx)(v.A, { ...A });
  },
  33201(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen zijn standaard niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  33648(e, n, t) {
   t.d(n, { A: () => s });
   var r = t(48907),
    i = t(30758),
    o = ['size', 'color'];
   function s(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     s = e.color,
     a = void 0 === s ? 'currentColor' : s,
     l = (0, r.$i)(e, o);
    return i.createElement('svg', (0, r._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-storybook', width: t, height: t, viewBox: '0 0 24 24', stroke: a, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), i.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), i.createElement('path', { d: 'M5 4l.5 16.5l13.5 .5v-18z' }), i.createElement('path', { d: 'M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 2.999 .762 3.3 1.985' }), i.createElement('path', { d: 'M16 3.5v1' }));
   }
  },
  37166(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  37674(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een component gebruik je in de context van een pagina, website of applicatie. Hoe toegankelijk en gebruiksvriendelijk een component is, hangt daarom voor een groot deel af van context. We hebben onderstaande criteria verdeeld op rol: de developer, de designer en de contentmaker. Vanuit iedere rol kun je je steentje bijdragen om een toegankelijke en gebruiksvriendelijke ervaring te bieden aan je gebruikers.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  37888(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut met de juiste taalcode.'] }), '\n', (0, r.jsx)(n.p, { children: 'Denk bijvoorbeeld aan buttons voor het veranderen van de taal van een pagina, bij meertalige websites. Of aan een citaat in het Engels, op een Nederlandstalige pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  45437(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de kleur van componenten die visueel betekenis hebben en hun directe omgeving.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een icoon dat betekenis heeft, zoals de 3 streepjes voor een menu of een pijltje naar rechts voor de volgende pagina.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icoon dat de status aangeeft van een bericht zoals een oranje driehoek voor een waarschuwing en een groen vinkje voor succes.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het gemeten kleurcontrast tussen het element en de achtergrond moet minstens 3:1 zijn. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46276(e, n, t) {
   t.d(n, { p: () => o });
   var r = t(13526),
    i = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...s }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  46847(e, n, t) {
   t.d(n, { $: () => r.$n });
   var r = t(50805);
  },
  48907(e, n, t) {
   function r() {
    return (
     (r = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
         }
         return e;
        }),
     r.apply(this, arguments)
    );
   }
   function i(e, n) {
    if (null == e) return {};
    var t,
     r,
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       i = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]));
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) ((t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])));
    }
    return i;
   }
   t.d(n, { $i: () => i, _P: () => r });
  },
  50805(e, n, t) {
   t.d(n, { $n: () => m });
   var r = t(15540),
    i = t(69967),
    o = t(86070),
    s = t(13526),
    a = t(30758),
    l = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    u = g(['primary', 'secondary', 'subtle']),
    m =
     (g(['positive', 'negative']),
     (0, a.forwardRef)(function (e, n) {
      var t = e.children,
       r = e.className,
       d = e.iconOnly,
       g = e.iconEnd,
       m = e.iconStart,
       h = e.purpose,
       p = e.hint,
       f = e.disabled,
       j = e.htmlDisabled,
       w = e.pressed,
       b = e.busy,
       v = e.type,
       x = void 0 === v ? 'button' : v,
       A = e.label,
       k = e.toggle,
       y = (0, i.A)(e, l),
       C = Boolean(m || g),
       T = (a.Children.toArray(t).some(a.isValidElement) && C) || d;
      return (0, o.jsxs)('button', c(c({ ref: n, type: x, className: (0, s.$)('nl-button', r, { 'nl-button--pressed': w, 'nl-button--busy': b, 'nl-button--disabled': f || j, 'nl-button--primary': 'primary' === h, 'nl-button--secondary': 'secondary' === h, 'nl-button--subtle': 'subtle' === h, 'nl-button--positive': u(h) && 'positive' === p, 'nl-button--negative': u(h) && 'negative' === p, 'nl-button--icon-only': d }), 'aria-pressed': k ? String(Boolean(w)) : void 0, 'aria-disabled': f || b ? 'true' : void 0, disabled: j }, y), {}, { children: [m && (0, o.jsx)('span', { className: 'nl-button__icon-start', children: m }), A && (0, o.jsx)('span', { className: 'nl-button__label', children: A }), T ? (0, o.jsx)('span', { className: d ? 'nl-button__label' : '', children: t }) : t, g && (0, o.jsx)('span', { className: 'nl-button__icon-end', children: g })] }));
     }));
   m.displayName = 'Button';
  },
  53971(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Als je de tekst vergroot tot 200%, via browserzoom of via de browserinstellingen voor tekstgrootte, blijft de tekst volledig zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg ervoor dat de component meegroeit met de tekst. Definieer hoogte en de breedte niet in ', (0, r.jsx)(n.code, { children: 'px' }), ', maar gebruik een relatieve waarde als ', (0, r.jsx)(n.code, { children: 'em' }), ' of ', (0, r.jsx)(n.code, { children: 'rem' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, r.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  54672(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden. Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf." }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat de component mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.' }), '\n', (0, r.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'overflow-wrap: break-word; hyphens: auto;' }), ' eventueel in combinatie met ', (0, r.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar. Doe dit bij voorkeur op ', (0, r.jsx)(n.code, { children: ':root' }), ' niveau.'] }), '\n', (0, r.jsx)(n.p, { children: 'Je moet de afstand kunnen vergroten naar deze waardes:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: "Afstand tussen alinea's naar ten minste 2 keer de lettergrootte." }), '\n', (0, r.jsx)(n.li, { children: 'Letterafstand (spati\xebren van letters) naar ten minste 0,12 keer de lettergrootte.' }), '\n', (0, r.jsx)(n.li, { children: 'Spati\xebren van woorden naar ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is te testen met een extensie zoals Stylus of User CSS, een ', (0, r.jsx)(n.a, { href: 'https://html5accessibility.com/tests/tsbookmarklet.html', children: 'bookmarklet' }), ' of door in de inspector van de browser de volgende code toe te voegen aan de ', (0, r.jsx)(n.code, { children: 'head' }), ' van de pagina:'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '<style>\nbody * {\n    line-height: 1.5 !important;\n    letter-spacing: 0.12em !important;\n    word-spacing: 0.16em !important;\n}\nbody p {\n    margin-bottom: 2em !important;\n}\n</style>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/regelafstand/', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  61629(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Componenten en elementen die niet interactief zijn, zijn niet bereikbaar en bedienbaar met het toetsenbord.' }), '\n', (0, r.jsx)(n.p, { children: 'Een uitzondering geldt voor situaties waarbij een interactief element zoals een Skip Link of een Link in een Side Navigation, de bezoeker direct naar de component of het element stuurt.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  61962(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Niet-interactieve componenten en elementen komen standaard niet voor in de toetsenbord-focusvolgorde van de pagina.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Toetsenbordtoegankelijkheid' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  63009(e, n, t) {
   t.d(n, { N: () => g });
   var r = t(15540),
    i = t(69967),
    o = t(86070),
    s = t(13526),
    a = t(30758),
    l = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     d = e.current,
     g = e.disabled,
     u = e.href,
     m = e.inlineBox,
     h = (0, i.A)(e, l);
    return (0, o.jsx)('a', c(c({ 'aria-current': d || void 0, 'aria-disabled': g, className: (0, s.$)('nl-link', (0, r.A)((0, r.A)((0, r.A)({}, 'nl-link--current', d), 'nl-link--disabled', g), 'nl-link--inline-box', m), a), href: g ? void 0 : u, role: g ? 'link' : void 0, ref: n, tabIndex: g ? 0 : void 0 }, h), {}, { children: t }));
   });
   g.displayName = 'Link';
  },
  66153(e, n, t) {
   t.d(n, { f: () => r.f });
   var r = t(56561);
  },
  74172(e, n, t) {
   t.d(n, { A: () => s });
   var r = t(48907),
    i = t(30758),
    o = ['size', 'color'];
   function s(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     s = e.color,
     a = void 0 === s ? 'currentColor' : s,
     l = (0, r.$i)(e, o);
    return i.createElement('svg', (0, r._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-figma', width: t, height: t, viewBox: '0 0 24 24', stroke: a, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), i.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), i.createElement('circle', { cx: '15', cy: '12', r: '3' }), i.createElement('rect', { x: '6', y: '3', width: '12', height: '6', rx: '3' }), i.createElement('path', { d: 'M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' }));
   }
  },
  78134(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function s(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Hier beschrijven we waar de component al aan voldoet en wat je zelf nog moet doen om de component toegankelijk \xe9n gebruiksvriendelijk in te zetten.' });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  83386(e, n, t) {
   t.d(n, { A: () => s });
   var r = t(48907),
    i = t(30758),
    o = ['size', 'color'];
   function s(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     s = e.color,
     a = void 0 === s ? 'currentColor' : s,
     l = (0, r.$i)(e, o);
    return i.createElement('svg', (0, r._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-external-link', width: t, height: t, viewBox: '0 0 24 24', stroke: a, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, l), i.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), i.createElement('path', { d: 'M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' }), i.createElement('line', { x1: '10', y1: '14', x2: '20', y2: '4' }), i.createElement('polyline', { points: '15 4 20 4 20 9' }));
   }
  },
  84471(e, n, t) {
   t.d(n, { bo: () => i, KF: () => u, mJ: () => p, VZ: () => k, cR: () => A, Pv: () => f, qZ: () => s, kD: () => v, QQ: () => C, B2: () => m, Pc: () => l, f4: () => a, GT: () => x, fX: () => o, eQ: () => b, B_: () => w, o_: () => j });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(c(n));
    },
    m = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(c(e.projects.flatMap((e) => h(e)))),
    f = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: o }) => {
        const s = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: i, value: o, description: a };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    j = (e) => e.join('.'),
    w = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const A = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    k = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    y = new Set(['ics', 'json', 'pdf']),
    C = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && y.has(t);
    };
  },
  85409(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Het parent HTML element van de Unordered en Ordered List mag alleen list-items bevatten:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n</ul>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Dit geldt ook voor geneste Unordered en Ordered Lists:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li>List-item voorbeeld</li>\n  <li>\n    List-item voorbeeld\n    <ul>\n      <li>Genest list-item voorbeeld</li>\n      <li>Genest list-item voorbeeld</li>\n    </ul>\n  </li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n</ul>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Toegankelijke opsommingen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  87856(e, n, t) {
   t.d(n, { D: () => a });
   var r = t(46447),
    i = t(13526),
    o = t(84471),
    s = t(86070);
   const a = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, i.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  93237(e, n, t) {
   t.d(n, { Z: () => u });
   var r = t(86070),
    i = t(63009);
   function o(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (t = o(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function s() {
    for (var e, n, t = 0, r = '', i = arguments.length; t < i; t++) (e = arguments[t]) && (n = o(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const a = ({ ref: e, children: n, className: t, inline: o, ...a }) => (0, r.jsx)(i.N, { ...a, className: s('rhc-link', { 'rhc-link--inline': o }, t), disabled: !1, ref: e, children: n });
   a.displayName = 'Link';
   var l = t(30758);
   function d(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (t = d(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function c() {
    for (var e, n, t = 0, r = '', i = arguments.length; t < i; t++) (e = arguments[t]) && (n = d(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const g = ({ level: e = 2, children: n, ...t }) => {
     const r = `h${e}`;
     return l.createElement(r, t, n);
    },
    u = (0, l.forwardRef)(({ heading: e, headingLevel: n = 2, subheading: t, description: i, metadata: o, image: s, href: l, target: d, linkLabel: u, title: m, className: h, children: p, ...f }, j) => (0, r.jsxs)('div', { className: c('rhc-card', 'rhc-card--default', h), ref: j, ...f, children: [s && (0, r.jsx)('div', { className: 'rhc-card__image', children: s }), (0, r.jsxs)('div', { className: 'rhc-card__content', children: [(0, r.jsx)(g, { className: 'rhc-card__heading', level: n, children: l ? (0, r.jsx)(a, { className: 'rhc-card__link', href: l, target: d, title: m, children: e }) : e }), t && (0, r.jsx)('p', { className: 'rhc-card__subheading', children: t }), i && (0, r.jsx)('p', { className: 'rhc-card__description', children: i }), o && (0, r.jsx)('p', { className: 'rhc-card__metadata', children: o }), p] }), u && (0, r.jsx)('div', { className: 'rhc-card__footer', children: (0, r.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, r.jsx)(a, { href: l, target: d, title: m, children: u }) }) })] }));
   u.displayName = 'Card';
  },
  95408(e, n, t) {
   (t.r(n), t.d(n, { assets: () => L, component: () => _, contentTitle: () => R, default: () => P, description: () => G, frontMatter: () => N, issueNumber: () => S, metadata: () => r, title: () => D, toc: () => F }));
   const r = JSON.parse('{"id":"componenten/unordered-list/index","title":"Unordered List","description":"Opsomming waar de volgorde van items in de lijst niet van belang is.","source":"@site/docs/componenten/unordered-list/index.mdx","sourceDirName":"componenten/unordered-list","slug":"/unordered-list","permalink":"/unordered-list","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/unordered-list/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Unordered List","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Unordered List","pagination_label":"Unordered List","description":"Opsomming waar de volgorde van items in de lijst niet van belang is.","issue_number":116,"slug":"/unordered-list","keywords":["bolletjes lijst","bullet list","bullet points","bulleted list","bullets","items","itemslijst","lijst","lijst met volgorde","lijstje","lijsten","list","list items","nested list","numbered list","ongeordend","ongeordende lijst","ongesorteerde lijst","opsomming","opsommingslijst","order","ordered list","punten","punt","sequence","ul","unordered","unordered list","vertical list"]},"sidebar":"componenten","previous":{"title":"Toggletip","permalink":"/toggletip"},"next":{"title":"Video","permalink":"/video"}}');
   var i = t(86070),
    o = t(18439),
    s = t(43306),
    a = t(13839),
    l = t(37674),
    d = t(78134),
    c = t(98926),
    g = t(85409);
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De Unordered List is herkenbaar voor hulpsoftware als ongeordende lijst omdat de component is opgemaakt met ', (0, i.jsx)(n.code, { children: 'ul' }), ' en ', (0, i.jsx)(n.code, { children: 'li' }), ' elementen.\nIn de browser Safari (', (0, i.jsx)(n.a, { href: '/baseline/2026-03/', children: 'NL Design System baseline maart 2026' }), ') verdwijnt de semantiek van de lijst zodra in CSS ', (0, i.jsx)(n.code, { children: 'list-style: none' }), ' wordt gebruikt. Daarom is de ARIA rol ', (0, i.jsx)(n.code, { children: 'list' }), ' toegevoegd.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<ul role="list">\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n  <li>List-item voorbeeld</li>\n</ul>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/opsommingen/', children: 'Toegankelijke opsommingen' }) }), '\n'] })] });
   }
   var m = t(3678),
    h = t(45437),
    p = t(54672),
    f = t(37166),
    j = t(53971),
    w = t(61629),
    b = t(33201),
    v = t(61962),
    x = t(24908),
    A = t(37888);
   const k = [
     { title: 'Decoratieve iconen die als markers van de Unordered List worden gebruikt worden genegeerd door hulpsoftware.', sc: '1.1.1', status: '', component: c.Ay, tags: ['developer'] },
     { title: 'De Unordered List bevat alleen list-items.', sc: '1.3.1', status: '', component: g.Ay, tags: ['developer'] },
     { title: 'De tekst in de Unordered List heeft een contrastratio van minimaal 4,5:1 met de achtergrondkleur.', sc: '1.4.3', status: '', component: f.Ay, tags: ['designer'] },
     { title: 'Als de bezoeker de Unordered List tot 400% vergroot, blijven de tekst en de markers zichtbaar en leesbaar.', sc: '1.4.10', status: '', component: m.Ay, tags: ['developer', 'designer'] },
     { title: 'De contrastverhouding van de kleur van de markers van de Unordered List met de achtergrondkleur is hoog genoeg.', sc: '1.4.11', status: '', component: h.Ay, tags: ['developer', 'designer'] },
     { title: 'De Unordered List is niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: w.Ay, tags: ['developer'] },
     { title: 'De Unordered List komt niet voor in de normale focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: x.Ay, tags: ['developer'] },
     { title: 'Als de tekst in de Unordered List in een andere is dan de taal van de pagina, is dat duidelijk aangegeven.', sc: '3.1.2', status: '', component: A.Ay, tags: ['developer'] },
    ],
    y = [
     {
      title: 'De Unordered List is herkenbaar als ongeordende lijst voor hulpsoftware.',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
      },
      tags: ['developer'],
     },
     { title: 'Als je de tekst van de Unordered List vergroot tot 200% blijft deze in zijn geheel zichtbaar.', sc: '1.4.4', status: '', component: j.Ay, tags: ['developer'] },
     { title: 'Tekst in de Unordered List blijft leesbaar wanneer de tekstafstand vergroot wordt. ', sc: '1.4.12', status: '', component: p.Ay, tags: ['developer'] },
     { title: 'De Unordered List is standaard niet bereikbaar en bedienbaar met het toetsenbord.', sc: '2.1.1', status: '', component: b.Ay, tags: ['developer'] },
     { title: 'De Unordered List komt standaard niet voor in de focusvolgorde van de pagina.', sc: '2.4.3', status: '', component: v.Ay, tags: ['developer'] },
    ];
   var C = t(26877),
    T = t(1866);
   const N = { title: 'Unordered List', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Unordered List', pagination_label: 'Unordered List', description: 'Opsomming waar de volgorde van items in de lijst niet van belang is.', issue_number: 116, slug: '/unordered-list', keywords: ['bolletjes lijst', 'bullet list', 'bullet points', 'bulleted list', 'bullets', 'items', 'itemslijst', 'lijst', 'lijst met volgorde', 'lijstje', 'lijsten', 'list', 'list items', 'nested list', 'numbered list', 'ongeordend', 'ongeordende lijst', 'ongesorteerde lijst', 'opsomming', 'opsommingslijst', 'order', 'ordered list', 'punten', 'punt', 'sequence', 'ul', 'unordered', 'unordered list', 'vertical list'] },
    R = void 0,
    L = {},
    D = 'Unordered List',
    G = 'Opsomming waar de volgorde van items in de lijst niet van belang is.',
    S = 116,
    _ = s.find((e) => e.number === S),
    F = [{ value: 'Checklist voor toegankelijkheid', id: 'checklist-voor-toegankelijkheid', level: 2 }, ...d.RM, { value: 'Acceptatiecriteria bij gebruik', id: 'acceptatiecriteria-bij-gebruik', level: 3 }, ...l.RM, { value: 'Acceptatiecriteria van de component', id: 'acceptatiecriteria-van-de-component', level: 3 }, ...a.RM, { value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }];
   function W(e) {
    const n = { h2: 'h2', h3: 'h3', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(C.Fc, { component: _, headingLevel: 1, description: G }), '\n', (0, i.jsx)(n.h2, { id: 'checklist-voor-toegankelijkheid', children: 'Checklist voor toegankelijkheid' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-bij-gebruik', children: 'Acceptatiecriteria bij gebruik' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(T.b, { headingLevel: '4', children: k.map(({ component: e, ...n }) => (0, i.jsx)(T.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h3, { id: 'acceptatiecriteria-van-de-component', children: 'Acceptatiecriteria van de component' }), '\n', (0, i.jsx)(a.Ay, {}), '\n', (0, i.jsx)(T.b, { headingLevel: '4', children: y.map(({ component: e, ...n }) => (0, i.jsx)(T.e, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(C.VK, { component: _, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(C.mu, { component: _, headingLevel: 3 }), '\n', (0, i.jsx)(C.K_, { component: _ }), '\n', (0, i.jsx)(C.$9, { component: _, headingLevel: 2 })] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(W, { ...e }) }) : W(e);
   }
  },
  98926(e, n, t) {
   t.d(n, { Ay: () => s });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Een icon is decoratief als er een beschrijvende tekst boven, naast of onder staat. Een icon is ook decoratief als het onderdeel is van een interactief component met een eigen toegankelijke naam, zoals een ', (0, r.jsx)(n.code, { children: 'button' }), ' of een ', (0, r.jsx)(n.code, { children: 'link' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het is daarom niet nodig dat gebruikers die hulpsoftware gebruiken, zoals een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', weten dat er een icon aanwezig is. Verberg decoratieve icons, bijvoorbeeld met ', (0, r.jsx)(n.code, { children: 'aria-hidden="true"' }), ' op de component.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Let op: VoiceOver in combinatie met Safari (in de ', (0, r.jsx)(n.a, { href: '/baseline/2025-07/', children: 'NL Design System Baseline van juli 2025' }), ") negeert Unicode-emoji's met ", (0, r.jsx)(n.code, { children: 'aria-hidden="true"' }), ' w\xe9l in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een ', (0, r.jsx)(n.a, { href: 'https://bugs.webkit.org/show_bug.cgi?id=161740', children: 'bug in WebKit' }), '. Gebruik daarom liever SVG icons.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen/', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
