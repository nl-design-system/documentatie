'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60036],
 {
  41534(e, n, i) {
   function a(e, n) {
    if (null == e) return {};
    var i,
     a,
     t = (function (e, n) {
      if (null == e) return {};
      var i = {};
      for (var a in e)
       if ({}.hasOwnProperty.call(e, a)) {
        if (-1 !== n.indexOf(a)) continue;
        i[a] = e[a];
       }
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (a = 0; a < r.length; a++) ((i = r[a]), -1 === n.indexOf(i) && {}.propertyIsEnumerable.call(e, i) && (t[i] = e[i]));
    }
    return t;
   }
   i.d(n, { A: () => a });
  },
  45186(e, n, i) {
   i.d(n, { c: () => t });
   var a = i(30758);
   function t() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  48171(e, n, i) {
   function a(e) {
    return (
     (a =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     a(e)
    );
   }
   function t(e) {
    var n = (function (e, n) {
     if ('object' != a(e) || !e) return e;
     var i = e[Symbol.toPrimitive];
     if (void 0 !== i) {
      var t = i.call(e, n || 'default');
      if ('object' != a(t)) return t;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == a(n) ? n : n + '';
   }
   function r(e, n, i) {
    return ((n = t(n)) in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i), e);
   }
   i.d(n, { A: () => r });
  },
  56785(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => d, default: () => p, frontMatter: () => o, metadata: () => a, toc: () => u }));
   const a = JSON.parse('{"id":"community/belangenorganisaties/aanmelden","title":"Aanmelden als belangenorganisatie","description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","source":"@site/docs/community/belangenorganisaties/aanmelden.mdx","sourceDirName":"community/belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden","permalink":"/community/belangenorganisaties/aanmelden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/belangenorganisaties/aanmelden.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanmelden als belangenorganisatie","title_sm":"Belangenorganisaties","hide_title":true,"hide_table_of_contents":false,"description":"Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!","sidebar_label":"Belangenorganisaties","slug":"/community/belangenorganisaties/aanmelden"},"sidebar":"community","previous":{"title":"Global design systems","permalink":"/community/global-design-system"},"next":{"title":"Slack","permalink":"/slack/"}}');
   var t = i(86070),
    r = i(18439),
    s = i(75812),
    l = i(59292);
   const o = { title: 'Aanmelden als belangenorganisatie', title_sm: 'Belangenorganisaties', hide_title: !0, hide_table_of_contents: !1, description: 'Meld je aan als je ons wil helpen als belangenorganisatie, en op de hoogte wil blijven!', sidebar_label: 'Belangenorganisaties', slug: '/community/belangenorganisaties/aanmelden' },
    d = 'Meld je aan als belangenorganisatie',
    c = {},
    u = [];
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'meld-je-aan-als-belangenorganisatie', children: 'Meld je aan als belangenorganisatie' }) }), '\n', (0, t.jsx)(l.f, { purpose: 'lead', children: (0, t.jsx)(n.p, { children: 'NL Design System deelt bouwblokken voor toegankelijke en gebruiksvriendelijke webapplicaties en websites. Voor het\nbest mogelijke resultaat willen we graag samenwerken met ervaringsdeskundigen en belangenorganisaties. Meld je aan als\nje ons wil helpen, en op de hoogte wil blijven!' }) }), '\n', (0, t.jsx)(s.W, { emailFieldId: 'b6Hs0DqOJk', firstNameFieldId: 'LRihfdNWMa', laPostaId: 'iyihtuzpiq', listId: 'okn9gtn1j3', orgId: 'ijDuY9iVT6', privacyPolicyId: 'oP9fdvDSEz', thanksPage: 'https://nldesignsystem.nl/community/belangenorganisaties/aanmelden-bedankt' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  59292(e, n, i) {
   i.d(n, { f: () => a.f });
   var a = i(71544);
  },
  71544(e, n, i) {
   i.d(n, { f: () => u });
   var a = i(48171),
    t = i(41534),
    r = i(86070),
    s = i(13526),
    l = i(30758),
    o = ['children', 'className', 'purpose'];
   function d(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     (n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, a));
    }
    return i;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, a.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var u = (0, l.forwardRef)(function (e, n) {
    var i = e.children,
     l = e.className,
     d = e.purpose,
     u = (0, t.A)(e, o);
    return (0, r.jsx)('p', c(c({ className: (0, s.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === d), l), ref: n }, u), {}, { children: 'lead' === d ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   u.displayName = 'Paragraph';
  },
  75812(e, n, i) {
   i.d(n, { W: () => d });
   var a = i(29181),
    t = i(56561),
    r = i(30758),
    s = i(27890),
    l = i(45186),
    o = i(86070);
   const d = ({ listId: e = '', laPostaId: n = '', thanksPage: i = '', emailFieldId: d = '', firstNameFieldId: c = '', orgId: u = '', interestsId: m = '', interestsLegend: p = 'Waar wil je NL Design System voor gebruiken?', interests: h = [], interestsRequired: g = !1, disallowedInterestValues: j = [], workAreasId: y = '', privacyPolicyId: b = '', language: f, submitText: x = '', talkTitleId: v = '', talkDescriptionId: k = '', roleId: w = '', roleLegend: S = 'Wat is jouw rol?', roles: O = [], roleRequired: N = !1 }) => {
    const {
      register: I,
      handleSubmit: P,
      formState: { errors: R },
     } = (0, s.mN)(),
     $ = (0, r.useRef)(null),
     _ = '2' === f?.value,
     B = (0, l.c)() ? window.location.search : '',
     D = new URLSearchParams(B),
     M = D.get('prefillEmail'),
     q = D.get('prefillName'),
     T =
      !!(m && h.length > 0) &&
      ((e, n) => {
       const i = [];
       let a = 1;
       for (let t = 0; t < e.length; t++) {
        for (; n.includes(a); ) a++;
        (i.push(a), a++);
       }
       return i;
      })(h, j);
    return (0, o.jsxs)('form', {
     className: 'ma-flow',
     method: 'post',
     action: 'https://nl-design-system.email-provider.eu/subscribe/post/index.php',
     noValidate: !0,
     acceptCharset: 'utf-8',
     ref: $,
     onSubmit: P(() => {
      $.current.submit();
     }),
     children: [(0, o.jsxs)(a.zB, { type: 'email', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(a.lR, { htmlFor: `id-${d}`, children: _ ? 'Email address ' : 'E-mailadres' }) }), R[d] && (0, o.jsx)(a.YB, { children: R[d].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: `id-${d}`, name: d, type: 'email', autoComplete: 'email', defaultValue: M, 'aria-required': 'true', ...I(`${d}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' }, pattern: { value: /\S+@\S+\.\S+/, message: _ ? 'This is not a valid email address.' : 'Dit is geen correct emailadres.' } }), invalid: !!R[d] }) })] }), (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(a.lR, { htmlFor: c, children: _ ? 'Name' : 'Naam' }) }), R[c] && (0, o.jsx)(a.YB, { children: R[c].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: c, name: c, type: 'text', defaultValue: q, autoComplete: 'given-name', 'aria-required': 'true', ...I(`${c}`, { required: { value: !0, message: _ ? 'This field is required, but it was left empty.' : 'Dit veld is verplicht, maar het is niet ingevuld.' } }), invalid: !!R[c] }) })] }), v && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(a.lR, { htmlFor: v, children: _ ? 'Title of your talk' : 'Titel van je presentatie' }), (0, o.jsx)(a.JM, { children: _ ? 'What would you name your talk?' : 'Hoe zou jij je presentatie noemen?' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: v, name: v, ...I(v, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a title.' : 'Je kunt alleen een voorstel insturen als je een titel toevoegd.' } }) }) })] }), k && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(a.lR, { htmlFor: k, children: _ ? 'Descibe your talk' : 'Beschrijf je presentatie' }), (0, o.jsx)(a.JM, { children: _ ? 'What is it about? Who would be your intended audience? Have you spoken about this topic before?' : 'Waar gaat het over? Voor wie is het interessant? Heb je al vaker over dit onderwerp gesproken?' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.TM, { id: k, name: k, rows: 12, ...I(k, { required: { value: !0, message: _ ? 'You can only submit a talk if you provide a description.' : 'Je kunt alleen een voorstel insturen als je een beschrijving toevoegd.' } }) }) })] }), u && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsx)(t.f, { children: (0, o.jsx)(a.lR, { htmlFor: u, children: _ ? 'Organisation (not required)' : 'Organisatie (niet verplicht)' }) }), R[u] && (0, o.jsx)(a.YB, { children: R[u].message }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.Rj, { id: u, name: u, type: 'text' }) })] }), m && (0, o.jsxs)(a.LB, { children: [(0, o.jsx)(t.f, { children: (0, o.jsxs)(a.u4, { children: [p, !g && ' (niet verplicht)'] }) }), (0, o.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), h.map((e, n) => (0, o.jsxs)(a.zB, { type: 'checkbox', children: [(0, o.jsx)(a.Sc, { name: `${m}[]`, value: T[n], id: `${m}-${T[n]}` }), (0, o.jsx)(a.lR, { type: 'checkbox', htmlFor: `${m}-${T[n]}`, children: e })] }, e))] }), w && (0, o.jsxs)(a.LB, { children: [(0, o.jsx)(t.f, { children: (0, o.jsxs)(a.u4, { children: [S, !N && ' (niet verplicht)'] }) }), (0, o.jsx)(a.JM, { children: 'Meerdere antwoorden mogelijk.' }), O.map((e, n) => (0, o.jsxs)(a.zB, { type: 'checkbox', children: [(0, o.jsx)(a.Sc, { name: `${w}[]`, id: `${w}-${n}` }), (0, o.jsx)(a.lR, { type: 'checkbox', htmlFor: `${w}-${n}`, children: e })] }, e))] }), y && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsxs)(t.f, { children: [(0, o.jsx)(a.lR, { htmlFor: y, children: 'Aan wat voor projecten werk je? (niet verplicht)' }), (0, o.jsx)(a.JM, { children: 'Denk aan mijn-omgevingen, formulieren en/of kaarten.' })] }), (0, o.jsx)(t.f, { children: (0, o.jsx)(a.TM, { id: y, name: y }) })] }), b && (0, o.jsxs)(a.zB, { type: 'text', children: [(0, o.jsx)(a.JM, { id: `${b}-description`, children: _ ? (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['The', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacy-policy/', children: 'privacy policy' }), ' ', 'of NL Design System applies to our activities.'] }) : (0, o.jsxs)('p', { className: 'nl-paragraph', children: ['Op onze activiteiten is de', ' ', (0, o.jsx)('a', { className: 'nl-link', href: '/privacyverklaring/', children: 'privacyverklaring van NL Design System' }), ' ', 'van toepassing.'] }) }), (0, o.jsxs)(a.zB, { type: 'checkbox', children: [(0, o.jsx)(a.Sc, { value: '1', id: `${b}-1`, 'aria-describedby': `${b}-description`, 'aria-required': 'true', ...I(`${b}[]`, { required: { value: !0, message: _ ? 'You can only register if you agree with the privacy policy.' : 'Je kunt je alleen aanmelden als je akkoord gaat met de privacyverklaring.' } }), invalid: !!R[`${b}[]`] }), (0, o.jsx)(a.lR, { type: 'checkbox', htmlFor: `${b}-1`, children: _ ? 'I agree to the use of my data in accordance with the privacy policy' : 'Ik ga akkoord met het gebruik van mijn gegevens volgens de privacyverklaring' })] }), R[b] && (0, o.jsx)(a.YB, { children: R[b].message })] }), f?.id && (0, o.jsx)('input', { type: 'hidden', name: f.id, value: f.value }), (0, o.jsx)(a.e2, { children: (0, o.jsx)(a.$n, { type: 'submit', appearance: 'primary-action-button', children: x || (_ ? 'Sign up' : 'Aanmelden') }) }), (0, o.jsx)('input', { type: 'hidden', name: 'next', value: i }), (0, o.jsx)('input', { type: 'hidden', name: 'a', value: n }), (0, o.jsx)('input', { type: 'hidden', name: 'l', value: e }), (0, o.jsx)('input', { name: 'osnD9cWRI3', autoComplete: 'on', id: 'id-osnD9cWRI3', type: 'hidden', value: 'NLDS website' }), (0, o.jsx)('input', { autoComplete: 'new-password', type: 'email', id: 'email', name: 'email', placeholder: 'Your e-mail here', className: 'sr-only ma-sr-only', 'aria-hidden': 'true', tabIndex: -1 })],
    });
   };
  },
 },
]);
