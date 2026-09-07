'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [66626],
 {
  50805(e, n, s) {
   s.d(n, { $n: () => c });
   var t = s(15540),
    i = s(69967),
    l = s(86070),
    o = s(13526),
    r = s(30758),
    m = ['children', 'className', 'iconOnly', 'iconEnd', 'iconStart', 'purpose', 'hint', 'disabled', 'htmlDisabled', 'pressed', 'busy', 'type', 'label', 'toggle'];
   function a(e, n) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      s.push.apply(s, t));
    }
    return s;
   }
   function y(e) {
    for (var n = 1; n < arguments.length; n++) {
     var s = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(s), !0).forEach(function (n) {
         (0, t.A)(e, n, s[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : a(Object(s)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(s, n));
          });
    }
    return e;
   }
   var p = function (e) {
     return function (n) {
      return e.includes(n);
     };
    },
    g = p(['primary', 'secondary', 'subtle']),
    c =
     (p(['positive', 'negative']),
     (0, r.forwardRef)(function (e, n) {
      var s = e.children,
       t = e.className,
       a = e.iconOnly,
       p = e.iconEnd,
       c = e.iconStart,
       d = e.purpose,
       f = e.hint,
       u = e.disabled,
       b = e.htmlDisabled,
       x = e.pressed,
       h = e.busy,
       $ = e.type,
       O = void 0 === $ ? 'button' : $,
       j = e.label,
       v = e.toggle,
       w = (0, i.A)(e, m),
       k = Boolean(c || p),
       _ = (r.Children.toArray(s).some(r.isValidElement) && k) || a;
      return (0, l.jsxs)('button', y(y({ ref: n, type: O, className: (0, o.$)('nl-button', t, { 'nl-button--pressed': x, 'nl-button--busy': h, 'nl-button--disabled': u || b, 'nl-button--primary': 'primary' === d, 'nl-button--secondary': 'secondary' === d, 'nl-button--subtle': 'subtle' === d, 'nl-button--positive': g(d) && 'positive' === f, 'nl-button--negative': g(d) && 'negative' === f, 'nl-button--icon-only': a }), 'aria-pressed': v ? String(Boolean(x)) : void 0, 'aria-disabled': u || h ? 'true' : void 0, disabled: b }, w), {}, { children: [c && (0, l.jsx)('span', { className: 'nl-button__icon-start', children: c }), j && (0, l.jsx)('span', { className: 'nl-button__label', children: j }), _ ? (0, l.jsx)('span', { className: a ? 'nl-button__label' : '', children: s }) : s, p && (0, l.jsx)('span', { className: 'nl-button__icon-end', children: p })] }));
     }));
   c.displayName = 'Button';
  },
  56561(e, n, s) {
   s.d(n, { f: () => p });
   var t = s(15540),
    i = s(69967),
    l = s(86070),
    o = s(13526),
    r = s(30758),
    m = ['children', 'className', 'purpose'];
   function a(e, n) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      s.push.apply(s, t));
    }
    return s;
   }
   function y(e) {
    for (var n = 1; n < arguments.length; n++) {
     var s = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(s), !0).forEach(function (n) {
         (0, t.A)(e, n, s[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : a(Object(s)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(s, n));
          });
    }
    return e;
   }
   var p = (0, r.forwardRef)(function (e, n) {
    var s = e.children,
     r = e.className,
     a = e.purpose,
     p = (0, i.A)(e, m);
    return (0, l.jsx)('p', y(y({ className: (0, o.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === a), r), ref: n }, p), {}, { children: 'lead' === a ? (0, l.jsx)('b', { className: 'nl-paragraph__lead', children: s }) : s }));
   });
   p.displayName = 'Paragraph';
  },
  60529(e, n, s) {
   s(30758);
  },
  83766(e) {
   e.exports = JSON.parse('{"nl":{"heading":{"level-1":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"level-2":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"level-3":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"level-4":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"level-5":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}},"level-6":{"color":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<color>","nl.nldesignsystem.figma-implementation":true},"$type":"color"},"font-family":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<family-name>","<generic-name>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontFamilies"},"font-size":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<percentage>"],"nl.nldesignsystem.figma-implementation":true},"$type":"fontSizes"},"font-weight":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<number>","nl.nldesignsystem.figma-implementation":true},"$type":"fontWeights"},"line-height":{"$extensions":{"nl.nldesignsystem.css-property-syntax":["<length>","<number>"],"nl.nldesignsystem.figma-implementation":true},"$type":"lineHeights"},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css-property-syntax":"<length>","nl.nldesignsystem.figma-implementation":false},"$type":"dimension"}}}}}');
  },
 },
]);
