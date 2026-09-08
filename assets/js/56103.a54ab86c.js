'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56103],
 {
  41467(e) {
   e.exports = JSON.parse('{"nl":{"paragraph":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"lead":{"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}}}}');
  },
  50805(e, n, t) {
   t.d(n, { $n: () => c });
   var s = t(15540),
    i = t(69967),
    l = t(86070),
    r = t(13526),
    o = t(30758),
    a = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function m(e, n) {
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
      ? m(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : m(Object(t)).forEach(function (n) {
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
    g = y(['primary', 'secondary', 'subtle']),
    c =
     (y(['positive', 'negative']),
     (0, o.forwardRef)(function (e, n) {
      var t = e.children,
       s = e.className,
       m = e.iconOnly,
       y = e.iconEnd,
       c = e.iconStart,
       d = e.purpose,
       b = e.hint,
       u = e.disabled,
       f = e.htmlDisabled,
       h = e.pressed,
       x = e.busy,
       $ = e.type,
       O = void 0 === $ ? 'button' : $,
       j = e.label,
       v = e.toggle,
       _ = (0, i.A)(e, a),
       w = Boolean(c || y),
       k = (o.Children.toArray(t).some(o.isValidElement) && w) || m;
      return (0, l.jsxs)('button', p(p({ ref: n, type: O, className: (0, r.$)('nl-button', s, { 'nl-button--pressed': h, 'nl-button--busy': x, 'nl-button--disabled': u || f, 'nl-button--primary': 'primary' === d, 'nl-button--secondary': 'secondary' === d, 'nl-button--subtle': 'subtle' === d, 'nl-button--positive': g(d) && 'positive' === b, 'nl-button--negative': g(d) && 'negative' === b, 'nl-button--icon-only': m }), 'aria-pressed': v ? String(Boolean(h)) : void 0, 'aria-disabled': u || x ? 'true' : void 0, disabled: f }, _), {}, { children: [c && (0, l.jsx)('span', { className: 'nl-button__icon-start', children: c }), j && (0, l.jsx)('span', { className: 'nl-button__label', children: j }), k ? (0, l.jsx)('span', { className: m ? 'nl-button__label' : '', children: t }) : t, y && (0, l.jsx)('span', { className: 'nl-button__icon-end', children: y })] }));
     }));
   c.displayName = 'Button';
  },
  54401(e, n, t) {
   t(30758);
  },
 },
]);
