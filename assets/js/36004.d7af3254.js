'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [36004],
 {
  41467(e) {
   e.exports = JSON.parse('{"nl":{"paragraph":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"lead":{"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}}}}');
  },
  50805(e, n, t) {
   t.d(n, { $n: () => g });
   var s = t(15540),
    i = t(69967),
    r = t(86070),
    l = t(13526),
    a = t(30758),
    o = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function p(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     (n &&
      (s = s.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, s));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? p(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : p(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var m = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    y = m(['primary', 'secondary', 'subtle']),
    g =
     (m(['positive', 'negative']),
     (0, a.forwardRef)(function (e, n) {
      var t = e.children,
       s = e.className,
       p = e.iconOnly,
       m = e.iconEnd,
       g = e.iconStart,
       d = e.purpose,
       b = e.hint,
       u = e.disabled,
       f = e.htmlDisabled,
       h = e.pressed,
       O = e.busy,
       x = e.type,
       j = void 0 === x ? 'button' : x,
       $ = e.label,
       v = e.toggle,
       w = (0, i.A)(e, o),
       _ = Boolean(g || m),
       P = (a.Children.toArray(t).some(a.isValidElement) && _) || p;
      return (0, r.jsxs)('button', c(c({ ref: n, type: j, className: (0, l.$)('nl-button', s, { 'nl-button--pressed': h, 'nl-button--busy': O, 'nl-button--disabled': u || f, 'nl-button--primary': 'primary' === d, 'nl-button--secondary': 'secondary' === d, 'nl-button--subtle': 'subtle' === d, 'nl-button--positive': y(d) && 'positive' === b, 'nl-button--negative': y(d) && 'negative' === b, 'nl-button--icon-only': p }), 'aria-pressed': v ? String(Boolean(h)) : void 0, 'aria-disabled': u || O ? 'true' : void 0, disabled: f }, w), {}, { children: [g && (0, r.jsx)('span', { className: 'nl-button__icon-start', children: g }), $ && (0, r.jsx)('span', { className: 'nl-button__label', children: $ }), P ? (0, r.jsx)('span', { className: p ? 'nl-button__label' : '', children: t }) : t, m && (0, r.jsx)('span', { className: 'nl-button__icon-end', children: m })] }));
     }));
   g.displayName = 'Button';
  },
  54401(e, n, t) {
   t(30758);
  },
  56561(e, n, t) {
   t.d(n, { f: () => m });
   var s = t(15540),
    i = t(69967),
    r = t(86070),
    l = t(13526),
    a = t(30758),
    o = ['children', 'className', 'purpose'];
   function p(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     (n &&
      (s = s.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, s));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? p(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : p(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var m = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     p = e.purpose,
     m = (0, i.A)(e, o);
    return (0, r.jsx)('p', c(c({ className: (0, l.$)('nl-paragraph', (0, s.A)({}, 'nl-paragraph--lead', 'lead' === p), a), ref: n }, m), {}, { children: 'lead' === p ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   m.displayName = 'Paragraph';
  },
 },
]);
