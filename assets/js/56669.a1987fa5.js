'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56669],
 {
  3779(e, n, t) {
   t(30758);
  },
  50805(e, n, t) {
   t.d(n, { $n: () => m });
   var s = t(15540),
    i = t(69967),
    l = t(86070),
    r = t(13526),
    o = t(30758),
    a = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
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
       p = e.iconOnly,
       y = e.iconEnd,
       m = e.iconStart,
       u = e.purpose,
       b = e.hint,
       g = e.disabled,
       f = e.htmlDisabled,
       h = e.pressed,
       x = e.busy,
       O = e.type,
       $ = void 0 === O ? 'button' : O,
       j = e.label,
       v = e.toggle,
       _ = (0, i.A)(e, a),
       w = Boolean(m || y),
       N = (o.Children.toArray(t).some(o.isValidElement) && w) || p;
      return (0, l.jsxs)('button', c(c({ ref: n, type: $, className: (0, r.$)('nl-button', s, { 'nl-button--pressed': h, 'nl-button--busy': x, 'nl-button--disabled': g || f, 'nl-button--primary': 'primary' === u, 'nl-button--secondary': 'secondary' === u, 'nl-button--subtle': 'subtle' === u, 'nl-button--positive': d(u) && 'positive' === b, 'nl-button--negative': d(u) && 'negative' === b, 'nl-button--icon-only': p }), 'aria-pressed': v ? String(Boolean(h)) : void 0, 'aria-disabled': g || x ? 'true' : void 0, disabled: f }, _), {}, { children: [m && (0, l.jsx)('span', { className: 'nl-button__icon-start', children: m }), j && (0, l.jsx)('span', { className: 'nl-button__label', children: j }), N ? (0, l.jsx)('span', { className: p ? 'nl-button__label' : '', children: t }) : t, y && (0, l.jsx)('span', { className: 'nl-button__icon-end', children: y })] }));
     }));
   m.displayName = 'Button';
  },
  89019(e) {
   e.exports = JSON.parse('{"nl":{"code-block":{"background-color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"border-radius":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length-percentage>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"padding-block":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"},"padding-inline":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":true},"$type":"dimension"}}}}');
  },
 },
]);
