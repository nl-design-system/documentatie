'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26285],
 {
  3779(e, n, t) {
   t(30758);
  },
  50805(e, n, t) {
   t.d(n, { $n: () => m });
   var s = t(15540),
    r = t(69967),
    i = t(86070),
    l = t(13526),
    o = t(30758),
    a = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function c(e, n) {
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
   function p(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var y = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    d = y(['primary', 'secondary', 'subtle']),
    m =
     (y(['positive', 'negative']),
     (0, o.forwardRef)(function (e, n) {
      var t = e.children,
       s = e.className,
       c = e.iconOnly,
       y = e.iconEnd,
       m = e.iconStart,
       u = e.purpose,
       b = e.hint,
       g = e.disabled,
       f = e.htmlDisabled,
       h = e.pressed,
       O = e.busy,
       j = e.type,
       x = void 0 === j ? 'button' : j,
       v = e.label,
       $ = e.toggle,
       w = (0, r.A)(e, a),
       _ = Boolean(m || y),
       P = (o.Children.toArray(t).some(o.isValidElement) && _) || c;
      return (0, i.jsxs)('button', p(p({ ref: n, type: x, className: (0, l.$)('nl-button', s, { 'nl-button--pressed': h, 'nl-button--busy': O, 'nl-button--disabled': g || f, 'nl-button--primary': 'primary' === u, 'nl-button--secondary': 'secondary' === u, 'nl-button--subtle': 'subtle' === u, 'nl-button--positive': d(u) && 'positive' === b, 'nl-button--negative': d(u) && 'negative' === b, 'nl-button--icon-only': c }), 'aria-pressed': $ ? String(Boolean(h)) : void 0, 'aria-disabled': g || O ? 'true' : void 0, disabled: f }, w), {}, { children: [m && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: m }), v && (0, i.jsx)('span', { className: 'nl-button__label', children: v }), P ? (0, i.jsx)('span', { className: c ? 'nl-button__label' : '', children: t }) : t, y && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: y })] }));
     }));
   m.displayName = 'Button';
  },
  56561(e, n, t) {
   t.d(n, { f: () => y });
   var s = t(15540),
    r = t(69967),
    i = t(86070),
    l = t(13526),
    o = t(30758),
    a = ['children', 'className', 'purpose'];
   function c(e, n) {
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
   function p(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : c(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var y = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     c = e.purpose,
     y = (0, r.A)(e, a);
    return (0, i.jsx)('p', p(p({ className: (0, l.$)('nl-paragraph', (0, s.A)({}, 'nl-paragraph--lead', 'lead' === c), o), ref: n }, y), {}, { children: 'lead' === c ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   y.displayName = 'Paragraph';
  },
  89019(e) {
   e.exports = JSON.parse('{"nl":{"code-block":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length-percentage>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"padding-block":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-inline":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"}}}}');
  },
 },
]);
