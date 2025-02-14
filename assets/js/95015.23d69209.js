'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [95015],
 {
  95015: (e, t, r) => {
   r.r(t), r.d(t, { DocSearchModal: () => Wr });
   var n = r(75271);
   r(30967);
   function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function i(e, t, r, n, o, i, a) {
    try {
     var c = e[i](a),
      u = c.value;
    } catch (e) {
     return void r(e);
    }
    c.done ? t(u) : Promise.resolve(u).then(n, o);
   }
   function a(e) {
    return function () {
     var t = this,
      r = arguments;
     return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function c(e) {
       i(a, n, o, c, u, 'next', e);
      }
      function u(e) {
       i(a, n, o, c, u, 'throw', e);
      }
      c(void 0);
     });
    };
   }
   function c(e, t, r) {
    return (
     (t = m(t)),
     (function (e, t) {
      if (t && ('object' == typeof t || 'function' == typeof t)) return t;
      if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
      return (function (e) {
       if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
       return e;
      })(e);
     })(e, v() ? Reflect.construct(t, r || [], m(e).constructor) : t.apply(e, r))
    );
   }
   function u(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
   }
   function l(e, t, r) {
    return Object.defineProperty(e, 'prototype', { writable: !1 }), e;
   }
   function s(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' != typeof e || !e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' != typeof n) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' == typeof t ? t : t + '';
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function f() {
    return (
     (f = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
         }
         return e;
        }),
     f.apply(null, arguments)
    );
   }
   function m(e) {
    return (
     (m = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     m(e)
    );
   }
   function p(e, t) {
    if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, 'prototype', { writable: !1 }), t && b(e, t);
   }
   function v() {
    try {
     var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (v = function () {
     return !!e;
    })();
   }
   function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? h(Object(r), !0).forEach(function (t) {
         s(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : h(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function y(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r = {};
      for (var n in e)
       if ({}.hasOwnProperty.call(e, n)) {
        if (t.includes(n)) continue;
        r[n] = e[n];
       }
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.includes(r) || ({}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function g() {
    g = function () {
     return t;
    };
    var e,
     t = {},
     r = Object.prototype,
     n = r.hasOwnProperty,
     o =
      Object.defineProperty ||
      function (e, t, r) {
       e[t] = r.value;
      },
     i = 'function' == typeof Symbol ? Symbol : {},
     a = i.iterator || '@@iterator',
     c = i.asyncIterator || '@@asyncIterator',
     u = i.toStringTag || '@@toStringTag';
    function l(e, t, r) {
     return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t];
    }
    try {
     l({}, '');
    } catch (e) {
     l = function (e, t, r) {
      return (e[t] = r);
     };
    }
    function s(e, t, r, n) {
     var i = t && t.prototype instanceof y ? t : y,
      a = Object.create(i.prototype),
      c = new x(n || []);
     return o(a, '_invoke', { value: D(e, r, c) }), a;
    }
    function f(e, t, r) {
     try {
      return { type: 'normal', arg: e.call(t, r) };
     } catch (e) {
      return { type: 'throw', arg: e };
     }
    }
    t.wrap = s;
    var m = 'suspendedStart',
     p = 'suspendedYield',
     v = 'executing',
     h = 'completed',
     d = {};
    function y() {}
    function b() {}
    function S() {}
    var O = {};
    l(O, a, function () {
     return this;
    });
    var w = Object.getPrototypeOf,
     E = w && w(w(C([])));
    E && E !== r && n.call(E, a) && (O = E);
    var j = (S.prototype = y.prototype = Object.create(O));
    function P(e) {
     ['next', 'throw', 'return'].forEach(function (t) {
      l(e, t, function (e) {
       return this._invoke(t, e);
      });
     });
    }
    function I(e, t) {
     function r(o, i, a, c) {
      var u = f(e[o], e, i);
      if ('throw' !== u.type) {
       var l = u.arg,
        s = l.value;
       return s && 'object' == typeof s && n.call(s, '__await')
        ? t.resolve(s.__await).then(
           function (e) {
            r('next', e, a, c);
           },
           function (e) {
            r('throw', e, a, c);
           },
          )
        : t.resolve(s).then(
           function (e) {
            (l.value = e), a(l);
           },
           function (e) {
            return r('throw', e, a, c);
           },
          );
      }
      c(u.arg);
     }
     var i;
     o(this, '_invoke', {
      value: function (e, n) {
       function o() {
        return new t(function (t, o) {
         r(e, n, t, o);
        });
       }
       return (i = i ? i.then(o, o) : o());
      },
     });
    }
    function D(t, r, n) {
     var o = m;
     return function (i, a) {
      if (o === v) throw Error('Generator is already running');
      if (o === h) {
       if ('throw' === i) throw a;
       return { value: e, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
       var c = n.delegate;
       if (c) {
        var u = _(c, n);
        if (u) {
         if (u === d) continue;
         return u;
        }
       }
       if ('next' === n.method) n.sent = n._sent = n.arg;
       else if ('throw' === n.method) {
        if (o === m) throw ((o = h), n.arg);
        n.dispatchException(n.arg);
       } else 'return' === n.method && n.abrupt('return', n.arg);
       o = v;
       var l = f(t, r, n);
       if ('normal' === l.type) {
        if (((o = n.done ? h : p), l.arg === d)) continue;
        return { value: l.arg, done: n.done };
       }
       'throw' === l.type && ((o = h), (n.method = 'throw'), (n.arg = l.arg));
      }
     };
    }
    function _(t, r) {
     var n = r.method,
      o = t.iterator[n];
     if (o === e) return (r.delegate = null), ('throw' === n && t.iterator.return && ((r.method = 'return'), (r.arg = e), _(t, r), 'throw' === r.method)) || ('return' !== n && ((r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))), d;
     var i = f(o, t.iterator, r.arg);
     if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), d;
     var a = i.arg;
     return a ? (a.done ? ((r[t.resultName] = a.value), (r.next = t.nextLoc), 'return' !== r.method && ((r.method = 'next'), (r.arg = e)), (r.delegate = null), d) : a) : ((r.method = 'throw'), (r.arg = new TypeError('iterator result is not an object')), (r.delegate = null), d);
    }
    function A(e) {
     var t = { tryLoc: e[0] };
     1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function k(e) {
     var t = e.completion || {};
     (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function x(e) {
     (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(A, this), this.reset(!0);
    }
    function C(t) {
     if (t || '' === t) {
      var r = t[a];
      if (r) return r.call(t);
      if ('function' == typeof t.next) return t;
      if (!isNaN(t.length)) {
       var o = -1,
        i = function r() {
         for (; ++o < t.length; ) if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
         return (r.value = e), (r.done = !0), r;
        };
       return (i.next = i);
      }
     }
     throw new TypeError(typeof t + ' is not iterable');
    }
    return (
     (b.prototype = S),
     o(j, 'constructor', { value: S, configurable: !0 }),
     o(S, 'constructor', { value: b, configurable: !0 }),
     (b.displayName = l(S, u, 'GeneratorFunction')),
     (t.isGeneratorFunction = function (e) {
      var t = 'function' == typeof e && e.constructor;
      return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name));
     }),
     (t.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : ((e.__proto__ = S), l(e, u, 'GeneratorFunction')), (e.prototype = Object.create(j)), e;
     }),
     (t.awrap = function (e) {
      return { __await: e };
     }),
     P(I.prototype),
     l(I.prototype, c, function () {
      return this;
     }),
     (t.AsyncIterator = I),
     (t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new I(s(e, r, n, o), i);
      return t.isGeneratorFunction(r)
       ? a
       : a.next().then(function (e) {
          return e.done ? e.value : a.next();
         });
     }),
     P(j),
     l(j, u, 'Generator'),
     l(j, a, function () {
      return this;
     }),
     l(j, 'toString', function () {
      return '[object Generator]';
     }),
     (t.keys = function (e) {
      var t = Object(e),
       r = [];
      for (var n in t) r.push(n);
      return (
       r.reverse(),
       function e() {
        for (; r.length; ) {
         var n = r.pop();
         if (n in t) return (e.value = n), (e.done = !1), e;
        }
        return (e.done = !0), e;
       }
      );
     }),
     (t.values = C),
     (x.prototype = {
      constructor: x,
      reset: function (t) {
       if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = e), this.tryEntries.forEach(k), !t)) for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
      },
      stop: function () {
       this.done = !0;
       var e = this.tryEntries[0].completion;
       if ('throw' === e.type) throw e.arg;
       return this.rval;
      },
      dispatchException: function (t) {
       if (this.done) throw t;
       var r = this;
       function o(n, o) {
        return (c.type = 'throw'), (c.arg = t), (r.next = n), o && ((r.method = 'next'), (r.arg = e)), !!o;
       }
       for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var a = this.tryEntries[i],
         c = a.completion;
        if ('root' === a.tryLoc) return o('end');
        if (a.tryLoc <= this.prev) {
         var u = n.call(a, 'catchLoc'),
          l = n.call(a, 'finallyLoc');
         if (u && l) {
          if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
          if (this.prev < a.finallyLoc) return o(a.finallyLoc);
         } else if (u) {
          if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
         } else {
          if (!l) throw Error('try statement without catch or finally');
          if (this.prev < a.finallyLoc) return o(a.finallyLoc);
         }
        }
       }
      },
      abrupt: function (e, t) {
       for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
         var i = o;
         break;
        }
       }
       i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
       var a = i ? i.completion : {};
       return (a.type = e), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a);
      },
      complete: function (e, t) {
       if ('throw' === e.type) throw e.arg;
       return 'break' === e.type || 'continue' === e.type ? (this.next = e.arg) : 'return' === e.type ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === e.type && t && (this.next = t), d;
      },
      finish: function (e) {
       for (var t = this.tryEntries.length - 1; t >= 0; --t) {
        var r = this.tryEntries[t];
        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), d;
       }
      },
      catch: function (e) {
       for (var t = this.tryEntries.length - 1; t >= 0; --t) {
        var r = this.tryEntries[t];
        if (r.tryLoc === e) {
         var n = r.completion;
         if ('throw' === n.type) {
          var o = n.arg;
          k(r);
         }
         return o;
        }
       }
       throw Error('illegal catch attempt');
      },
      delegateYield: function (t, r, n) {
       return (this.delegate = { iterator: C(t), resultName: r, nextLoc: n }), 'next' === this.method && (this.arg = e), d;
      },
     }),
     t
    );
   }
   function b(e, t) {
    return (
     (b = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
         return (e.__proto__ = t), e;
        }),
     b(e, t)
    );
   }
   function S(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != r) {
       var n,
        o,
        i,
        a,
        c = [],
        u = !0,
        l = !1;
       try {
        if (((i = (r = r.call(e)).next), 0 === t)) {
         if (Object(r) !== r) return;
         u = !1;
        } else for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
       } catch (e) {
        (l = !0), (o = e);
       } finally {
        try {
         if (!u && null != r.return && ((a = r.return()), Object(a) !== a)) return;
        } finally {
         if (l) throw o;
        }
       }
       return c;
      }
     })(e, t) ||
     w(e, t) ||
     (function () {
      throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function O(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return o(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     w(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function w(e, t) {
    if (e) {
     if ('string' == typeof e) return o(e, t);
     var r = {}.toString.call(e).slice(8, -1);
     return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0;
    }
   }
   function E(e) {
    var t = 'function' == typeof Map ? new Map() : void 0;
    return (
     (E = function (e) {
      if (
       null === e ||
       !(function (e) {
        try {
         return -1 !== Function.toString.call(e).indexOf('[native code]');
        } catch (t) {
         return 'function' == typeof e;
        }
       })(e)
      )
       return e;
      if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
      if (void 0 !== t) {
       if (t.has(e)) return t.get(e);
       t.set(e, r);
      }
      function r() {
       return (function (e, t, r) {
        if (v()) return Reflect.construct.apply(null, arguments);
        var n = [null];
        n.push.apply(n, t);
        var o = new (e.bind.apply(e, n))();
        return r && b(o, r.prototype), o;
       })(e, arguments, m(this).constructor);
      }
      return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), b(r, e);
     }),
     E(e)
    );
   }
   function j() {
    return n.createElement('svg', { width: '15', height: '15', className: 'DocSearch-Control-Key-Icon' }, n.createElement('path', { d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953', strokeWidth: '1.2', stroke: 'currentColor', fill: 'none', strokeLinecap: 'square' }));
   }
   function P() {
    return n.createElement('svg', { width: '20', height: '20', className: 'DocSearch-Search-Icon', viewBox: '0 0 20 20', 'aria-hidden': 'true' }, n.createElement('path', { d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }));
   }
   var I = ['translations'],
    D = 'Ctrl';
   n.forwardRef(function (e, t) {
    var r = e.translations,
     o = void 0 === r ? {} : r,
     i = y(e, I),
     a = o.buttonText,
     c = void 0 === a ? 'Search' : a,
     u = o.buttonAriaLabel,
     l = void 0 === u ? 'Search' : u,
     s = S((0, n.useState)(null), 2),
     m = s[0],
     p = s[1];
    (0, n.useEffect)(function () {
     'undefined' != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? p('\u2318') : p(D));
    }, []);
    var v = S(m === D ? [D, 'Ctrl', n.createElement(j, null)] : ['Meta', 'Command', m], 3),
     h = v[0],
     d = v[1],
     g = v[2];
    return n.createElement('button', f({ type: 'button', className: 'DocSearch DocSearch-Button', 'aria-label': ''.concat(l, ' (').concat(d, '+K)') }, i, { ref: t }), n.createElement('span', { className: 'DocSearch-Button-Container' }, n.createElement(P, null), n.createElement('span', { className: 'DocSearch-Button-Placeholder' }, c)), n.createElement('span', { className: 'DocSearch-Button-Keys' }, null !== m && n.createElement(n.Fragment, null, n.createElement(_, { reactsToKey: h }, g), n.createElement(_, { reactsToKey: 'k' }, 'K'))));
   });
   function _(e) {
    var t = e.reactsToKey,
     r = e.children,
     o = S((0, n.useState)(!1), 2),
     i = o[0],
     a = o[1];
    return (
     (0, n.useEffect)(
      function () {
       if (t)
        return (
         window.addEventListener('keydown', e),
         window.addEventListener('keyup', r),
         function () {
          window.removeEventListener('keydown', e), window.removeEventListener('keyup', r);
         }
        );
       function e(e) {
        e.key === t && a(!0);
       }
       function r(e) {
        (e.key !== t && 'Meta' !== e.key) || a(!1);
       }
      },
      [t],
     ),
     n.createElement('kbd', { className: i ? 'DocSearch-Button-Key DocSearch-Button-Key--pressed' : 'DocSearch-Button-Key' }, r)
    );
   }
   function A(e, t) {
    var r = void 0;
    return function () {
     for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
     r && clearTimeout(r),
      (r = setTimeout(function () {
       return e.apply(void 0, o);
      }, t));
    };
   }
   function k(e) {
    return e.reduce(function (e, t) {
     return e.concat(t);
    }, []);
   }
   var x = 0;
   function C(e) {
    return 0 === e.collections.length
     ? 0
     : e.collections.reduce(function (e, t) {
        return e + t.items.length;
       }, 0);
   }
   function T(e) {
    return e !== Object(e);
   }
   function N(e, t) {
    if (e === t) return !0;
    if (T(e) || T(t) || 'function' == typeof e || 'function' == typeof t) return e === t;
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var r = 0, n = Object.keys(e); r < n.length; r++) {
     var o = n[r];
     if (!(o in t)) return !1;
     if (!N(e[o], t[o])) return !1;
    }
    return !0;
   }
   var L = function () {},
    R = [{ segment: 'autocomplete-core', version: '1.17.9' }];
   function q(e) {
    var t = e.item,
     r = e.items,
     n = void 0 === r ? [] : r;
    return {
     index: t.__autocomplete_indexName,
     items: [t],
     positions: [
      1 +
       n.findIndex(function (e) {
        return e.objectID === t.objectID;
       }),
     ],
     queryID: t.__autocomplete_queryID,
     algoliaSource: ['autocomplete'],
    };
   }
   function M(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   var H = ['items'],
    B = ['items'];
   function F(e) {
    return (
     (F =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     F(e)
    );
   }
   function U(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return K(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (e) {
       if ('string' == typeof e) return K(e, t);
       var r = Object.prototype.toString.call(e).slice(8, -1);
       return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? K(e, t) : void 0;
      }
     })(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function K(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function V(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function J(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function z(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? J(Object(r), !0).forEach(function (t) {
         Q(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : J(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Q(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== F(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== F(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === F(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function W(e) {
    return e.map(function (e) {
     var t = e.items,
      r = V(e, H);
     return z(
      z({}, r),
      {},
      {
       objectIDs:
        (null == t
         ? void 0
         : t.map(function (e) {
            return e.objectID;
           })) || r.objectIDs,
      },
     );
    });
   }
   function G(e) {
    var t,
     r,
     n,
     o =
      ((t = (function (e, t) {
       return (
        (function (e) {
         if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
         var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
         if (null != r) {
          var n,
           o,
           i,
           a,
           c = [],
           u = !0,
           l = !1;
          try {
           if (((i = (r = r.call(e)).next), 0 === t));
           else for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
          } catch (e) {
           (l = !0), (o = e);
          } finally {
           try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a)) return;
           } finally {
            if (l) throw o;
           }
          }
          return c;
         }
        })(e, t) ||
        (function (e, t) {
         if (e) {
          if ('string' == typeof e) return M(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? M(e, t) : void 0;
         }
        })(e, t) ||
        (function () {
         throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        })()
       );
      })((e.version || '').split('.').map(Number), 2)),
      (r = t[0]),
      (n = t[1]),
      r >= 3 || (2 === r && n >= 4) || (1 === r && n >= 10));
    function i(t, r, n) {
     if (o && void 0 !== n) {
      var i = n[0].__autocomplete_algoliaCredentials,
       a = { 'X-Algolia-Application-Id': i.appId, 'X-Algolia-API-Key': i.apiKey };
      e.apply(void 0, [t].concat(U(r), [{ headers: a }]));
     } else e.apply(void 0, [t].concat(U(r)));
    }
    return {
     init: function (t, r) {
      e('init', { appId: t, apiKey: r });
     },
     setAuthenticatedUserToken: function (t) {
      e('setAuthenticatedUserToken', t);
     },
     setUserToken: function (t) {
      e('setUserToken', t);
     },
     clickedObjectIDsAfterSearch: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('clickedObjectIDsAfterSearch', W(t), t[0].items);
     },
     clickedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('clickedObjectIDs', W(t), t[0].items);
     },
     clickedFilters: function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
      r.length > 0 && e.apply(void 0, ['clickedFilters'].concat(r));
     },
     convertedObjectIDsAfterSearch: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('convertedObjectIDsAfterSearch', W(t), t[0].items);
     },
     convertedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('convertedObjectIDs', W(t), t[0].items);
     },
     convertedFilters: function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
      r.length > 0 && e.apply(void 0, ['convertedFilters'].concat(r));
     },
     viewedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 &&
       t
        .reduce(function (e, t) {
         var r = t.items,
          n = V(t, B);
         return [].concat(
          U(e),
          U(
           (function (e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, r = [], n = 0; n < e.objectIDs.length; n += t) r.push(z(z({}, e), {}, { objectIDs: e.objectIDs.slice(n, n + t) }));
            return r;
           })(
            z(
             z({}, n),
             {},
             {
              objectIDs:
               (null == r
                ? void 0
                : r.map(function (e) {
                   return e.objectID;
                  })) || n.objectIDs,
             },
            ),
           ).map(function (e) {
            return { items: r, payload: e };
           }),
          ),
         );
        }, [])
        .forEach(function (e) {
         var t = e.items;
         return i('viewedObjectIDs', [e.payload], t);
        });
     },
     viewedFilters: function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
      r.length > 0 && e.apply(void 0, ['viewedFilters'].concat(r));
     },
    };
   }
   function Z(e) {
    var t = e.items.reduce(function (e, t) {
     var r;
     return (e[t.__autocomplete_indexName] = (null !== (r = e[t.__autocomplete_indexName]) && void 0 !== r ? r : []).concat(t)), e;
    }, {});
    return Object.keys(t).map(function (e) {
     return { index: e, items: t[e], algoliaSource: ['autocomplete'] };
    });
   }
   function $(e) {
    return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID;
   }
   function Y(e) {
    return (
     (Y =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Y(e)
    );
   }
   function X(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return ee(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (e) {
       if ('string' == typeof e) return ee(e, t);
       var r = Object.prototype.toString.call(e).slice(8, -1);
       return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ee(e, t) : void 0;
      }
     })(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function ee(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function te(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function re(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? te(Object(r), !0).forEach(function (t) {
         ne(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : te(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function ne(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Y(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Y(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Y(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   var oe = '2.15.0',
    ie = 'https://cdn.jsdelivr.net/npm/search-insights@'.concat(oe, '/dist/search-insights.min.js'),
    ae = A(function (e) {
     var t = e.onItemsChange,
      r = e.items,
      n = e.insights,
      o = e.state;
     t({
      insights: n,
      insightsEvents: Z({ items: r }).map(function (e) {
       return re({ eventName: 'Items Viewed' }, e);
      }),
      state: o,
     });
    }, 400);
   function ce(e) {
    var t = (function (e) {
      return re(
       {
        onItemsChange: function (e) {
         var t = e.insights,
          r = e.insightsEvents,
          n = e.state;
         t.viewedObjectIDs.apply(
          t,
          X(
           r.map(function (e) {
            return re(re({}, e), {}, { algoliaSource: ue(e.algoliaSource, n.context) });
           }),
          ),
         );
        },
        onSelect: function (e) {
         var t = e.insights,
          r = e.insightsEvents,
          n = e.state;
         t.clickedObjectIDsAfterSearch.apply(
          t,
          X(
           r.map(function (e) {
            return re(re({}, e), {}, { algoliaSource: ue(e.algoliaSource, n.context) });
           }),
          ),
         );
        },
        onActive: L,
        __autocomplete_clickAnalytics: !0,
       },
       e,
      );
     })(e),
     r = t.insightsClient,
     n = t.insightsInitParams,
     o = t.onItemsChange,
     i = t.onSelect,
     a = t.onActive,
     c = t.__autocomplete_clickAnalytics,
     u = r;
    if (
     (r ||
      ('undefined' != typeof window &&
       (function (e) {
        var t = e.window,
         r = t.AlgoliaAnalyticsObject || 'aa';
        'string' == typeof r && (u = t[r]),
         u ||
          ((t.AlgoliaAnalyticsObject = r),
          t[r] ||
           (t[r] = function () {
            t[r].queue || (t[r].queue = []);
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            t[r].queue.push(n);
           }),
          (t[r].version = oe),
          (u = t[r]),
          (function (e) {
           var t = '[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete';
           try {
            var r = e.document.createElement('script');
            (r.async = !0),
             (r.src = ie),
             (r.onerror = function () {
              console.error(t);
             }),
             document.body.appendChild(r);
           } catch (e) {
            console.error(t);
           }
          })(t));
       })({ window: window })),
     !u)
    )
     return {};
    n && u('init', re({ partial: !0 }, n));
    var l = G(u),
     s = { current: [] },
     f = A(function (e) {
      var t = e.state;
      if (t.isOpen) {
       var r = t.collections
        .reduce(function (e, t) {
         return [].concat(X(e), X(t.items));
        }, [])
        .filter($);
       N(
        s.current.map(function (e) {
         return e.objectID;
        }),
        r.map(function (e) {
         return e.objectID;
        }),
       ) || ((s.current = r), r.length > 0 && ae({ onItemsChange: o, items: r, insights: l, state: t }));
      }
     }, 0);
    return {
     name: 'aa.algoliaInsightsPlugin',
     subscribe: function (e) {
      var t = e.setContext,
       r = e.onSelect,
       n = e.onActive;
      function o(e) {
       t({ algoliaInsightsPlugin: { __algoliaSearchParameters: re(re({}, c ? { clickAnalytics: !0 } : {}), e ? { userToken: le(e) } : {}), insights: l } });
      }
      u('addAlgoliaAgent', 'insights-plugin'),
       o(),
       u('onUserTokenChange', function (e) {
        o(e);
       }),
       u('getUserToken', null, function (e, t) {
        o(t);
       }),
       r(function (e) {
        var t = e.item,
         r = e.state,
         n = e.event,
         o = e.source;
        $(t) && i({ state: r, event: n, insights: l, item: t, insightsEvents: [re({ eventName: 'Item Selected' }, q({ item: t, items: o.getItems().filter($) }))] });
       }),
       n(function (e) {
        var t = e.item,
         r = e.source,
         n = e.state,
         o = e.event;
        $(t) && a({ state: n, event: o, insights: l, item: t, insightsEvents: [re({ eventName: 'Item Active' }, q({ item: t, items: r.getItems().filter($) }))] });
       });
     },
     onStateChange: function (e) {
      var t = e.state;
      f({ state: t });
     },
     __autocomplete_pluginOptions: e,
    };
   }
   function ue() {
    var e,
     t = arguments.length > 1 ? arguments[1] : void 0;
    return [].concat(X(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ['autocomplete-internal'], X(null !== (e = t.algoliaInsightsPlugin) && void 0 !== e && e.__automaticInsights ? ['autocomplete-automatic'] : []));
   }
   function le(e) {
    return 'number' == typeof e ? e.toString() : e;
   }
   function se(e, t) {
    var r = t;
    return {
     then: function (t, n) {
      return se(e.then(me(t, r, e), me(n, r, e)), r);
     },
     catch: function (t) {
      return se(e.catch(me(t, r, e)), r);
     },
     finally: function (t) {
      return (
       t && r.onCancelList.push(t),
       se(
        e.finally(
         me(
          t &&
           function () {
            return (r.onCancelList = []), t();
           },
          r,
          e,
         ),
        ),
        r,
       )
      );
     },
     cancel: function () {
      r.isCanceled = !0;
      var e = r.onCancelList;
      (r.onCancelList = []),
       e.forEach(function (e) {
        e();
       });
     },
     isCanceled: function () {
      return !0 === r.isCanceled;
     },
    };
   }
   function fe(e) {
    return se(e, { isCanceled: !1, onCancelList: [] });
   }
   function me(e, t, r) {
    return e
     ? function (r) {
        return t.isCanceled ? r : e(r);
       }
     : r;
   }
   function pe(e, t, r, n) {
    if (!r) return null;
    if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= r ? (null === n ? null : 0) : o;
   }
   function ve(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function he(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? ve(Object(r), !0).forEach(function (t) {
         de(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ve(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function de(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== ye(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== ye(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === ye(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function ye(e) {
    return (
     (ye =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     ye(e)
    );
   }
   function ge(e) {
    var t = (function (e) {
     var t = e.collections
      .map(function (e) {
       return e.items.length;
      })
      .reduce(function (e, t, r) {
       var n = (e[r - 1] || 0) + t;
       return e.push(n), e;
      }, [])
      .reduce(function (t, r) {
       return r <= e.activeItemId ? t + 1 : t;
      }, 0);
     return e.collections[t];
    })(e);
    if (!t) return null;
    var r =
      t.items[
       (function (e) {
        for (var t = e.state, r = e.collection, n = !1, o = 0, i = 0; !1 === n; ) {
         var a = t.collections[o];
         if (a === r) {
          n = !0;
          break;
         }
         (i += a.items.length), o++;
        }
        return t.activeItemId - i;
       })({ state: e, collection: t })
      ],
     n = t.source;
    return { item: r, itemInputValue: n.getItemInputValue({ item: r, state: e }), itemUrl: n.getItemUrl({ item: r, state: e }), source: n };
   }
   function be(e, t, r) {
    return [e, null == r ? void 0 : r.sourceId, t].filter(Boolean).join('-').replace(/\s/g, '');
   }
   var Se = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
   function Oe(e) {
    return e.nativeEvent || e;
   }
   function we(e) {
    return (
     (we =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     we(e)
    );
   }
   function Ee(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function je(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== we(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== we(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === we(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Pe(e) {
    return (
     (Pe =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Pe(e)
    );
   }
   function Ie(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function De(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? Ie(Object(r), !0).forEach(function (t) {
         _e(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ie(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function _e(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Pe(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Pe(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Pe(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Ae(e) {
    return (
     (Ae =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Ae(e)
    );
   }
   function ke(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function xe(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Ce(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? xe(Object(r), !0).forEach(function (t) {
         Te(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xe(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Te(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Ae(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Ae(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Ae(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Ne(e, t) {
    var r,
     n = 'undefined' != typeof window ? window : {},
     o = e.plugins || [];
    return Ce(
     Ce(
      {
       debug: !1,
       openOnFocus: !1,
       enterKeyHint: void 0,
       ignoreCompositionEvents: !1,
       placeholder: '',
       autoFocus: !1,
       defaultActiveItemId: null,
       stallThreshold: 300,
       insights: void 0,
       environment: n,
       shouldPanelOpen: function (e) {
        return C(e.state) > 0;
       },
       reshape: function (e) {
        return e.sources;
       },
      },
      e,
     ),
     {},
     {
      id: null !== (r = e.id) && void 0 !== r ? r : 'autocomplete-'.concat(x++),
      plugins: o,
      initialState: Ce({ activeItemId: null, query: '', completion: null, collections: [], isOpen: !1, status: 'idle', context: {} }, e.initialState),
      onStateChange: function (t) {
       var r;
       null === (r = e.onStateChange) || void 0 === r || r.call(e, t),
        o.forEach(function (e) {
         var r;
         return null === (r = e.onStateChange) || void 0 === r ? void 0 : r.call(e, t);
        });
      },
      onSubmit: function (t) {
       var r;
       null === (r = e.onSubmit) || void 0 === r || r.call(e, t),
        o.forEach(function (e) {
         var r;
         return null === (r = e.onSubmit) || void 0 === r ? void 0 : r.call(e, t);
        });
      },
      onReset: function (t) {
       var r;
       null === (r = e.onReset) || void 0 === r || r.call(e, t),
        o.forEach(function (e) {
         var r;
         return null === (r = e.onReset) || void 0 === r ? void 0 : r.call(e, t);
        });
      },
      getSources: function (r) {
       return Promise.all(
        []
         .concat(
          (function (e) {
           return (
            (function (e) {
             if (Array.isArray(e)) return ke(e);
            })(e) ||
            (function (e) {
             if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
            })(e) ||
            (function (e, t) {
             if (e) {
              if ('string' == typeof e) return ke(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ke(e, t) : void 0;
             }
            })(e) ||
            (function () {
             throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
            })()
           );
          })(
           o.map(function (e) {
            return e.getSources;
           }),
          ),
          [e.getSources],
         )
         .filter(Boolean)
         .map(function (e) {
          return (function (e, t) {
           var r = [];
           return Promise.resolve(e(t)).then(function (e) {
            return Promise.all(
             e
              .filter(function (e) {
               return Boolean(e);
              })
              .map(function (e) {
               if ((e.sourceId, r.includes(e.sourceId))) throw new Error('[Autocomplete] The `sourceId` '.concat(JSON.stringify(e.sourceId), ' is not unique.'));
               r.push(e.sourceId);
               var t = {
                getItemInputValue: function (e) {
                 return e.state.query;
                },
                getItemUrl: function () {},
                onSelect: function (e) {
                 (0, e.setIsOpen)(!1);
                },
                onActive: L,
                onResolve: L,
               };
               Object.keys(t).forEach(function (e) {
                t[e].__default = !0;
               });
               var n = he(he({}, t), e);
               return Promise.resolve(n);
              }),
            );
           });
          })(e, r);
         }),
       )
        .then(function (e) {
         return k(e);
        })
        .then(function (e) {
         return e.map(function (e) {
          return Ce(
           Ce({}, e),
           {},
           {
            onSelect: function (r) {
             e.onSelect(r),
              t.forEach(function (e) {
               var t;
               return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, r);
              });
            },
            onActive: function (r) {
             e.onActive(r),
              t.forEach(function (e) {
               var t;
               return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, r);
              });
            },
            onResolve: function (r) {
             e.onResolve(r),
              t.forEach(function (e) {
               var t;
               return null === (t = e.onResolve) || void 0 === t ? void 0 : t.call(e, r);
              });
            },
           },
          );
         });
        });
      },
      navigator: Ce(
       {
        navigate: function (e) {
         var t = e.itemUrl;
         n.location.assign(t);
        },
        navigateNewTab: function (e) {
         var t = e.itemUrl,
          r = n.open(t, '_blank', 'noopener');
         null == r || r.focus();
        },
        navigateNewWindow: function (e) {
         var t = e.itemUrl;
         n.open(t, '_blank', 'noopener');
        },
       },
       e.navigator,
      ),
     },
    );
   }
   function Le(e) {
    return (
     (Le =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Le(e)
    );
   }
   function Re(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function qe(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? Re(Object(r), !0).forEach(function (t) {
         Me(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Re(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Me(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Le(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Le(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Le(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function He(e) {
    return (
     (He =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     He(e)
    );
   }
   function Be(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Fe(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? Be(Object(r), !0).forEach(function (t) {
         Ue(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Be(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Ue(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== He(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== He(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === He(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Ke(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return Ve(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (e) {
       if ('string' == typeof e) return Ve(e, t);
       var r = Object.prototype.toString.call(e).slice(8, -1);
       return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ve(e, t) : void 0;
      }
     })(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function Ve(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function Je(e) {
    return Boolean(e.execute);
   }
   function ze(e) {
    var t = e
     .reduce(function (e, t) {
      if (!Je(t)) return e.push(t), e;
      var r = t.searchClient,
       n = t.execute,
       o = t.requesterId,
       i = t.requests,
       a = e.find(function (e) {
        return Je(t) && Je(e) && e.searchClient === r && Boolean(o) && e.requesterId === o;
       });
      if (a) {
       var c;
       (c = a.items).push.apply(c, Ke(i));
      } else {
       var u = { execute: n, requesterId: o, items: i, searchClient: r };
       e.push(u);
      }
      return e;
     }, [])
     .map(function (e) {
      if (!Je(e)) return Promise.resolve(e);
      var t = e,
       r = t.execute,
       n = t.items;
      return r({ searchClient: t.searchClient, requests: n });
     });
    return Promise.all(t).then(function (e) {
     return k(e);
    });
   }
   function Qe(e) {
    return (
     (Qe =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Qe(e)
    );
   }
   var We = ['event', 'nextState', 'props', 'query', 'refresh', 'store'];
   function Ge(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Ze(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? Ge(Object(r), !0).forEach(function (t) {
         $e(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ge(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function $e(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Qe(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Qe(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Qe(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   var Ye,
    Xe,
    et,
    tt = null,
    rt =
     ((Ye = -1),
     (Xe = -1),
     (et = void 0),
     function (e) {
      var t = ++Ye;
      return Promise.resolve(e).then(function (e) {
       return et && t < Xe ? et : ((Xe = t), (et = e), e);
      });
     });
   function nt(e) {
    var t = e.event,
     r = e.nextState,
     n = void 0 === r ? {} : r,
     o = e.props,
     i = e.query,
     a = e.refresh,
     c = e.store,
     u = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = (function (e, t) {
        if (null == e) return {};
        var r,
         n,
         o = {},
         i = Object.keys(e);
        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
       })(e, t);
      if (Object.getOwnPropertySymbols) {
       var i = Object.getOwnPropertySymbols(e);
       for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
      }
      return o;
     })(e, We);
    tt && o.environment.clearTimeout(tt);
    var l = u.setCollections,
     s = u.setIsOpen,
     f = u.setQuery,
     m = u.setActiveItemId,
     p = u.setStatus,
     v = u.setContext;
    if ((f(i), m(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
     var h,
      d = c.getState().collections.map(function (e) {
       return Ze(Ze({}, e), {}, { items: [] });
      });
     p('idle'), l(d), s(null !== (h = n.isOpen) && void 0 !== h ? h : o.shouldPanelOpen({ state: c.getState() }));
     var y = fe(
      rt(d).then(function () {
       return Promise.resolve();
      }),
     );
     return c.pendingRequests.add(y);
    }
    p('loading'),
     (tt = o.environment.setTimeout(function () {
      p('stalled');
     }, o.stallThreshold));
    var g = fe(
     rt(
      o.getSources(Ze({ query: i, refresh: a, state: c.getState() }, u)).then(function (e) {
       return Promise.all(
        e.map(function (e) {
         return Promise.resolve(e.getItems(Ze({ query: i, refresh: a, state: c.getState() }, u))).then(function (t) {
          return (function (e, t, r) {
           if (((o = e), Boolean(null == o ? void 0 : o.execute))) {
            var n =
             'algolia' === e.requesterId
              ? Object.assign.apply(
                 Object,
                 [{}].concat(
                  Ke(
                   Object.keys(r.context).map(function (e) {
                    var t;
                    return null === (t = r.context[e]) || void 0 === t ? void 0 : t.__algoliaSearchParameters;
                   }),
                  ),
                 ),
                )
              : {};
            return Fe(
             Fe({}, e),
             {},
             {
              requests: e.queries.map(function (r) {
               return { query: 'algolia' === e.requesterId ? Fe(Fe({}, r), {}, { params: Fe(Fe({}, n), r.params) }) : r, sourceId: t, transformResponse: e.transformResponse };
              }),
             },
            );
           }
           var o;
           return { items: e, sourceId: t };
          })(t, e.sourceId, c.getState());
         });
        }),
       )
        .then(ze)
        .then(function (t) {
         var r,
          n = t.some(function (e) {
           return (function (e) {
            return !Array.isArray(e) && Boolean(null == e ? void 0 : e._automaticInsights);
           })(e.items);
          });
         return (
          n && v({ algoliaInsightsPlugin: Ze(Ze({}, (null === (r = c.getState().context) || void 0 === r ? void 0 : r.algoliaInsightsPlugin) || {}), {}, { __automaticInsights: n }) }),
          (function (e, t, r) {
           return t.map(function (t) {
            var n,
             o = e.filter(function (e) {
              return e.sourceId === t.sourceId;
             }),
             i = o.map(function (e) {
              return e.items;
             }),
             a = o[0].transformResponse,
             c = a
              ? a({
                 results: (n = i),
                 hits: n
                  .map(function (e) {
                   return e.hits;
                  })
                  .filter(Boolean),
                 facetHits: n
                  .map(function (e) {
                   var t;
                   return null === (t = e.facetHits) || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                       return { label: e.value, count: e.count, _highlightResult: { label: { value: e.highlighted } } };
                      });
                  })
                  .filter(Boolean),
                })
              : i;
            return t.onResolve({ source: t, results: i, items: c, state: r.getState() }), c.every(Boolean), 'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), '.\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems'), { source: t, items: c };
           });
          })(t, e, c)
         );
        })
        .then(function (e) {
         return (function (e) {
          var t = e.props,
           r = e.state,
           n = e.collections.reduce(function (e, t) {
            return qe(
             qe({}, e),
             {},
             Me(
              {},
              t.source.sourceId,
              qe(
               qe({}, t.source),
               {},
               {
                getItems: function () {
                 return k(t.items);
                },
               },
              ),
             ),
            );
           }, {}),
           o = t.plugins.reduce(
            function (e, t) {
             return t.reshape ? t.reshape(e) : e;
            },
            { sourcesBySourceId: n, state: r },
           ).sourcesBySourceId;
          return k(t.reshape({ sourcesBySourceId: o, sources: Object.values(o), state: r }))
           .filter(Boolean)
           .map(function (e) {
            return { source: e, items: e.getItems() };
           });
         })({ collections: e, props: o, state: c.getState() });
        });
      }),
     ),
    )
     .then(function (e) {
      var r;
      p('idle'), l(e);
      var f = o.shouldPanelOpen({ state: c.getState() });
      s(null !== (r = n.isOpen) && void 0 !== r ? r : (o.openOnFocus && !i && f) || f);
      var m = ge(c.getState());
      if (null !== c.getState().activeItemId && m) {
       var v = m.item,
        h = m.itemInputValue,
        d = m.itemUrl,
        y = m.source;
       y.onActive(Ze({ event: t, item: v, itemInputValue: h, itemUrl: d, refresh: a, source: y, state: c.getState() }, u));
      }
     })
     .finally(function () {
      p('idle'), tt && o.environment.clearTimeout(tt);
     });
    return c.pendingRequests.add(g);
   }
   function ot(e) {
    return (
     (ot =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     ot(e)
    );
   }
   var it = ['event', 'props', 'refresh', 'store'];
   function at(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function ct(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? at(Object(r), !0).forEach(function (t) {
         ut(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : at(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function ut(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== ot(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== ot(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === ot(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function lt(e) {
    return (
     (lt =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     lt(e)
    );
   }
   var st = ['props', 'refresh', 'store'],
    ft = ['inputElement', 'formElement', 'panelElement'],
    mt = ['inputElement'],
    pt = ['inputElement', 'maxLength'],
    vt = ['source'],
    ht = ['item', 'source'];
   function dt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function yt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? dt(Object(r), !0).forEach(function (t) {
         gt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dt(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function gt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== lt(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== lt(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === lt(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function bt(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   function St(e) {
    var t = e.props,
     r = e.refresh,
     n = e.store,
     o = bt(e, st);
    return {
     getEnvironmentProps: function (e) {
      var r = e.inputElement,
       o = e.formElement,
       i = e.panelElement;
      function a(e) {
       (!n.getState().isOpen && n.pendingRequests.isEmpty()) ||
        e.target === r ||
        (!1 ===
         [o, i].some(function (t) {
          return (r = t) === (n = e.target) || r.contains(n);
          var r, n;
         }) &&
         (n.dispatch('blur', null), t.debug || n.pendingRequests.cancelAll()));
      }
      return yt(
       {
        onTouchStart: a,
        onMouseDown: a,
        onTouchMove: function (e) {
         !1 !== n.getState().isOpen && r === t.environment.document.activeElement && e.target !== r && r.blur();
        },
       },
       bt(e, ft),
      );
     },
     getRootProps: function (e) {
      return yt(
       {
        role: 'combobox',
        'aria-expanded': n.getState().isOpen,
        'aria-haspopup': 'listbox',
        'aria-controls': n.getState().isOpen
         ? n
            .getState()
            .collections.map(function (e) {
             var r = e.source;
             return be(t.id, 'list', r);
            })
            .join(' ')
         : void 0,
        'aria-labelledby': be(t.id, 'label'),
       },
       e,
      );
     },
     getFormProps: function (e) {
      return (
       e.inputElement,
       yt(
        {
         action: '',
         noValidate: !0,
         role: 'search',
         onSubmit: function (i) {
          var a;
          i.preventDefault(), t.onSubmit(yt({ event: i, refresh: r, state: n.getState() }, o)), n.dispatch('submit', null), null === (a = e.inputElement) || void 0 === a || a.blur();
         },
         onReset: function (i) {
          var a;
          i.preventDefault(), t.onReset(yt({ event: i, refresh: r, state: n.getState() }, o)), n.dispatch('reset', null), null === (a = e.inputElement) || void 0 === a || a.focus();
         },
        },
        bt(e, mt),
       )
      );
     },
     getLabelProps: function (e) {
      return yt({ htmlFor: be(t.id, 'input'), id: be(t.id, 'label') }, e);
     },
     getInputProps: function (e) {
      var i;
      function a(e) {
       (t.openOnFocus || Boolean(n.getState().query)) && nt(yt({ event: e, props: t, query: n.getState().completion || n.getState().query, refresh: r, store: n }, o)), n.dispatch('focus', null);
      }
      var c = e || {};
      c.inputElement;
      var u = c.maxLength,
       l = void 0 === u ? 512 : u,
       s = bt(c, pt),
       f = ge(n.getState()),
       m = (function (e) {
        return Boolean(e && e.match(Se));
       })((null === (i = t.environment.navigator) || void 0 === i ? void 0 : i.userAgent) || ''),
       p = t.enterKeyHint || (null != f && f.itemUrl && !m ? 'go' : 'search');
      return yt(
       {
        'aria-autocomplete': 'both',
        'aria-activedescendant': n.getState().isOpen && null !== n.getState().activeItemId ? be(t.id, 'item-'.concat(n.getState().activeItemId), null == f ? void 0 : f.source) : void 0,
        'aria-controls': n.getState().isOpen
         ? n
            .getState()
            .collections.map(function (e) {
             var r = e.source;
             return be(t.id, 'list', r);
            })
            .join(' ')
         : void 0,
        'aria-labelledby': be(t.id, 'label'),
        value: n.getState().completion || n.getState().query,
        id: be(t.id, 'input'),
        autoComplete: 'off',
        autoCorrect: 'off',
        autoCapitalize: 'off',
        enterKeyHint: p,
        spellCheck: 'false',
        autoFocus: t.autoFocus,
        placeholder: t.placeholder,
        maxLength: l,
        type: 'search',
        onChange: function (e) {
         var i = e.currentTarget.value;
         t.ignoreCompositionEvents && Oe(e).isComposing ? o.setQuery(i) : nt(yt({ event: e, props: t, query: i.slice(0, l), refresh: r, store: n }, o));
        },
        onCompositionEnd: function (e) {
         nt(yt({ event: e, props: t, query: e.currentTarget.value.slice(0, l), refresh: r, store: n }, o));
        },
        onKeyDown: function (e) {
         Oe(e).isComposing ||
          (function (e) {
           var t = e.event,
            r = e.props,
            n = e.refresh,
            o = e.store,
            i = (function (e, t) {
             if (null == e) return {};
             var r,
              n,
              o = (function (e, t) {
               if (null == e) return {};
               var r,
                n,
                o = {},
                i = Object.keys(e);
               for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
               return o;
              })(e, t);
             if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
             }
             return o;
            })(e, it);
           if ('ArrowUp' === t.key || 'ArrowDown' === t.key) {
            var a = function () {
              var e = ge(o.getState()),
               t = r.environment.document.getElementById(be(r.id, 'item-'.concat(o.getState().activeItemId), null == e ? void 0 : e.source));
              t && (t.scrollIntoViewIfNeeded ? t.scrollIntoViewIfNeeded(!1) : t.scrollIntoView(!1));
             },
             c = function () {
              var e = ge(o.getState());
              if (null !== o.getState().activeItemId && e) {
               var r = e.item,
                a = e.itemInputValue,
                c = e.itemUrl,
                u = e.source;
               u.onActive(ct({ event: t, item: r, itemInputValue: a, itemUrl: c, refresh: n, source: u, state: o.getState() }, i));
              }
             };
            t.preventDefault(),
             !1 === o.getState().isOpen && (r.openOnFocus || Boolean(o.getState().query))
              ? nt(ct({ event: t, props: r, query: o.getState().query, refresh: n, store: o }, i)).then(function () {
                 o.dispatch(t.key, { nextActiveItemId: r.defaultActiveItemId }), c(), setTimeout(a, 0);
                })
              : (o.dispatch(t.key, {}), c(), a());
           } else if ('Escape' === t.key) t.preventDefault(), o.dispatch(t.key, null), o.pendingRequests.cancelAll();
           else if ('Tab' === t.key) o.dispatch('blur', null), o.pendingRequests.cancelAll();
           else if ('Enter' === t.key) {
            if (
             null === o.getState().activeItemId ||
             o.getState().collections.every(function (e) {
              return 0 === e.items.length;
             })
            )
             return void (r.debug || o.pendingRequests.cancelAll());
            t.preventDefault();
            var u = ge(o.getState()),
             l = u.item,
             s = u.itemInputValue,
             f = u.itemUrl,
             m = u.source;
            if (t.metaKey || t.ctrlKey) void 0 !== f && (m.onSelect(ct({ event: t, item: l, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), r.navigator.navigateNewTab({ itemUrl: f, item: l, state: o.getState() }));
            else if (t.shiftKey) void 0 !== f && (m.onSelect(ct({ event: t, item: l, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), r.navigator.navigateNewWindow({ itemUrl: f, item: l, state: o.getState() }));
            else if (t.altKey);
            else {
             if (void 0 !== f) return m.onSelect(ct({ event: t, item: l, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), void r.navigator.navigate({ itemUrl: f, item: l, state: o.getState() });
             nt(ct({ event: t, nextState: { isOpen: !1 }, props: r, query: s, refresh: n, store: o }, i)).then(function () {
              m.onSelect(ct({ event: t, item: l, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i));
             });
            }
           }
          })(yt({ event: e, props: t, refresh: r, store: n }, o));
        },
        onFocus: a,
        onBlur: L,
        onClick: function (r) {
         e.inputElement !== t.environment.document.activeElement || n.getState().isOpen || a(r);
        },
       },
       s,
      );
     },
     getPanelProps: function (e) {
      return yt(
       {
        onMouseDown: function (e) {
         e.preventDefault();
        },
        onMouseLeave: function () {
         n.dispatch('mouseleave', null);
        },
       },
       e,
      );
     },
     getListProps: function (e) {
      var r = e || {},
       n = r.source,
       o = bt(r, vt);
      return yt({ role: 'listbox', 'aria-labelledby': be(t.id, 'label'), id: be(t.id, 'list', n) }, o);
     },
     getItemProps: function (e) {
      var i = e.item,
       a = e.source,
       c = bt(e, ht);
      return yt(
       {
        id: be(t.id, 'item-'.concat(i.__autocomplete_id), a),
        role: 'option',
        'aria-selected': n.getState().activeItemId === i.__autocomplete_id,
        onMouseMove: function (e) {
         if (i.__autocomplete_id !== n.getState().activeItemId) {
          n.dispatch('mousemove', i.__autocomplete_id);
          var t = ge(n.getState());
          if (null !== n.getState().activeItemId && t) {
           var a = t.item,
            c = t.itemInputValue,
            u = t.itemUrl,
            l = t.source;
           l.onActive(yt({ event: e, item: a, itemInputValue: c, itemUrl: u, refresh: r, source: l, state: n.getState() }, o));
          }
         }
        },
        onMouseDown: function (e) {
         e.preventDefault();
        },
        onClick: function (e) {
         var c = a.getItemInputValue({ item: i, state: n.getState() }),
          u = a.getItemUrl({ item: i, state: n.getState() });
         (u ? Promise.resolve() : nt(yt({ event: e, nextState: { isOpen: !1 }, props: t, query: c, refresh: r, store: n }, o))).then(function () {
          a.onSelect(yt({ event: e, item: i, itemInputValue: c, itemUrl: u, refresh: r, source: a, state: n.getState() }, o));
         });
        },
       },
       c,
      );
     },
    };
   }
   function Ot(e) {
    return (
     (Ot =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Ot(e)
    );
   }
   function wt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Et(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? wt(Object(r), !0).forEach(function (t) {
         jt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wt(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function jt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Ot(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Ot(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Ot(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Pt(e) {
    var t,
     r,
     n,
     o,
     i = e.plugins,
     a = e.options,
     c = null === (t = ((null === (r = a.__autocomplete_metadata) || void 0 === r ? void 0 : r.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment,
     u = c ? jt({}, c, Object.keys((null === (n = a.__autocomplete_metadata) || void 0 === n ? void 0 : n.options) || {})) : {};
    return {
     plugins: i.map(function (e) {
      return { name: e.name, options: Object.keys(e.__autocomplete_pluginOptions || []) };
     }),
     options: Et({ 'autocomplete-core': Object.keys(a) }, u),
     ua: R.concat((null === (o = a.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || []),
    };
   }
   function It(e) {
    var t,
     r = e.state;
    return !1 === r.isOpen || null === r.activeItemId ? null : (null === (t = ge(r)) || void 0 === t ? void 0 : t.itemInputValue) || null;
   }
   function Dt(e) {
    return (
     (Dt =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Dt(e)
    );
   }
   function _t(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function At(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? _t(Object(r), !0).forEach(function (t) {
         kt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _t(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function kt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Dt(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Dt(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Dt(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   var xt = function (e, t) {
    switch (t.type) {
     case 'setActiveItemId':
     case 'mousemove':
      return At(At({}, e), {}, { activeItemId: t.payload });
     case 'setQuery':
      return At(At({}, e), {}, { query: t.payload, completion: null });
     case 'setCollections':
      return At(At({}, e), {}, { collections: t.payload });
     case 'setIsOpen':
      return At(At({}, e), {}, { isOpen: t.payload });
     case 'setStatus':
      return At(At({}, e), {}, { status: t.payload });
     case 'setContext':
      return At(At({}, e), {}, { context: At(At({}, e.context), t.payload) });
     case 'ArrowDown':
      var r = At(At({}, e), {}, { activeItemId: t.payload.hasOwnProperty('nextActiveItemId') ? t.payload.nextActiveItemId : pe(1, e.activeItemId, C(e), t.props.defaultActiveItemId) });
      return At(At({}, r), {}, { completion: It({ state: r }) });
     case 'ArrowUp':
      var n = At(At({}, e), {}, { activeItemId: pe(-1, e.activeItemId, C(e), t.props.defaultActiveItemId) });
      return At(At({}, n), {}, { completion: It({ state: n }) });
     case 'Escape':
      return e.isOpen ? At(At({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : At(At({}, e), {}, { activeItemId: null, query: '', status: 'idle', collections: [] });
     case 'submit':
      return At(At({}, e), {}, { activeItemId: null, isOpen: !1, status: 'idle' });
     case 'reset':
      return At(At({}, e), {}, { activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null, status: 'idle', completion: null, query: '' });
     case 'focus':
      return At(At({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }) });
     case 'blur':
      return t.props.debug ? e : At(At({}, e), {}, { isOpen: !1, activeItemId: null });
     case 'mouseleave':
      return At(At({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
     default:
      return 'The reducer action '.concat(JSON.stringify(t.type), ' is not supported.'), e;
    }
   };
   function Ct(e) {
    return (
     (Ct =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Ct(e)
    );
   }
   function Tt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function Nt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? Tt(Object(r), !0).forEach(function (t) {
         Lt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tt(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Lt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Ct(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Ct(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Ct(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function Rt(e) {
    var t = [],
     r = Ne(e, t),
     n = (function (e, t, r) {
      var n,
       o = t.initialState;
      return {
       getState: function () {
        return o;
       },
       dispatch: function (n, i) {
        var a = (function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
           ? Ee(Object(r), !0).forEach(function (t) {
              je(e, t, r[t]);
             })
           : Object.getOwnPropertyDescriptors
             ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
             : Ee(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
               });
         }
         return e;
        })({}, o);
        (o = e(o, { type: n, props: t, payload: i })), r({ state: o, prevState: a });
       },
       pendingRequests:
        ((n = []),
        {
         add: function (e) {
          return (
           n.push(e),
           e.finally(function () {
            n = n.filter(function (t) {
             return t !== e;
            });
           })
          );
         },
         cancelAll: function () {
          n.forEach(function (e) {
           return e.cancel();
          });
         },
         isEmpty: function () {
          return 0 === n.length;
         },
        }),
      };
     })(xt, r, function (e) {
      var t,
       n,
       i = e.prevState,
       l = e.state;
      if ((r.onStateChange(Nt({ prevState: i, state: l, refresh: a, navigator: r.navigator }, o)), !u() && null !== (t = l.context) && void 0 !== t && null !== (n = t.algoliaInsightsPlugin) && void 0 !== n && n.__automaticInsights && !1 !== r.insights)) {
       var s = ce({ __autocomplete_clickAnalytics: !1 });
       r.plugins.push(s), c([s]);
      }
     }),
     o = (function (e) {
      var t = e.store;
      return {
       setActiveItemId: function (e) {
        t.dispatch('setActiveItemId', e);
       },
       setQuery: function (e) {
        t.dispatch('setQuery', e);
       },
       setCollections: function (e) {
        var r = 0,
         n = e.map(function (e) {
          return De(
           De({}, e),
           {},
           {
            items: k(e.items).map(function (e) {
             return De(De({}, e), {}, { __autocomplete_id: r++ });
            }),
           },
          );
         });
        t.dispatch('setCollections', n);
       },
       setIsOpen: function (e) {
        t.dispatch('setIsOpen', e);
       },
       setStatus: function (e) {
        t.dispatch('setStatus', e);
       },
       setContext: function (e) {
        t.dispatch('setContext', e);
       },
      };
     })({ store: n }),
     i = St(Nt({ props: r, refresh: a, store: n, navigator: r.navigator }, o));
    function a() {
     return nt(Nt({ event: new Event('input'), nextState: { isOpen: n.getState().isOpen }, props: r, navigator: r.navigator, query: n.getState().query, refresh: a, store: n }, o));
    }
    function c(e) {
     e.forEach(function (e) {
      var n;
      return null === (n = e.subscribe) || void 0 === n
       ? void 0
       : n.call(
          e,
          Nt(
           Nt({}, o),
           {},
           {
            navigator: r.navigator,
            refresh: a,
            onSelect: function (e) {
             t.push({ onSelect: e });
            },
            onActive: function (e) {
             t.push({ onActive: e });
            },
            onResolve: function (e) {
             t.push({ onResolve: e });
            },
           },
          ),
         );
     });
    }
    function u() {
     return r.plugins.some(function (e) {
      return 'aa.algoliaInsightsPlugin' === e.name;
     });
    }
    if (r.insights && !u()) {
     var l = 'boolean' == typeof r.insights ? {} : r.insights;
     r.plugins.push(ce(l));
    }
    return (
     c(r.plugins),
     (function (e) {
      var t,
       r,
       n = e.metadata,
       o = e.environment;
      if (null === (t = o.navigator) || void 0 === t || null === (r = t.userAgent) || void 0 === r ? void 0 : r.includes('Algolia Crawler')) {
       var i = o.document.createElement('meta'),
        a = o.document.querySelector('head');
       (i.name = 'algolia:metadata'),
        setTimeout(function () {
         (i.content = JSON.stringify(n)), a.appendChild(i);
        }, 0);
      }
     })({ metadata: Pt({ plugins: r.plugins, options: e }), environment: r.environment }),
     Nt(Nt({ refresh: a, navigator: r.navigator }, i), o)
    );
   }
   function qt(e) {
    var t = e.translations,
     r = (void 0 === t ? {} : t).searchByText,
     o = void 0 === r ? 'Search by' : r;
    return n.createElement('a', { href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(window.location.hostname, '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch'), target: '_blank', rel: 'noopener noreferrer' }, n.createElement('span', { className: 'DocSearch-Label' }, o), n.createElement('svg', { width: '77', height: '19', 'aria-label': 'Algolia', role: 'img', id: 'Layer_1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 2196.2 500' }, n.createElement('defs', null, n.createElement('style', null, '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}')), n.createElement('path', { className: 'cls-2', d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z' }), n.createElement('rect', { className: 'cls-1', x: '1845.88', y: '104.73', width: '62.58', height: '277.9', rx: '5.9', ry: '5.9' }), n.createElement('path', { className: 'cls-2', d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z' }), n.createElement('path', { className: 'cls-2', d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z' }), n.createElement('path', { className: 'cls-2', d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z' }), n.createElement('path', { className: 'cls-2', d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z' }), n.createElement('path', { className: 'cls-2', d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z' }), n.createElement('path', { className: 'cls-2', d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z' }), n.createElement('path', { className: 'cls-1', d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z' })));
   }
   function Mt(e) {
    return n.createElement('svg', { width: '15', height: '15', 'aria-label': e.ariaLabel, role: 'img' }, n.createElement('g', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.2' }, e.children));
   }
   function Ht(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = r.selectText,
     i = void 0 === o ? 'to select' : o,
     a = r.selectKeyAriaLabel,
     c = void 0 === a ? 'Enter key' : a,
     u = r.navigateText,
     l = void 0 === u ? 'to navigate' : u,
     s = r.navigateUpKeyAriaLabel,
     f = void 0 === s ? 'Arrow up' : s,
     m = r.navigateDownKeyAriaLabel,
     p = void 0 === m ? 'Arrow down' : m,
     v = r.closeText,
     h = void 0 === v ? 'to close' : v,
     d = r.closeKeyAriaLabel,
     y = void 0 === d ? 'Escape key' : d,
     g = r.searchByText,
     b = void 0 === g ? 'Search by' : g;
    return n.createElement(n.Fragment, null, n.createElement('div', { className: 'DocSearch-Logo' }, n.createElement(qt, { translations: { searchByText: b } })), n.createElement('ul', { className: 'DocSearch-Commands' }, n.createElement('li', null, n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(Mt, { ariaLabel: c }, n.createElement('path', { d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3' }))), n.createElement('span', { className: 'DocSearch-Label' }, i)), n.createElement('li', null, n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(Mt, { ariaLabel: p }, n.createElement('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' }))), n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(Mt, { ariaLabel: f }, n.createElement('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' }))), n.createElement('span', { className: 'DocSearch-Label' }, l)), n.createElement('li', null, n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(Mt, { ariaLabel: y }, n.createElement('path', { d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956' }))), n.createElement('span', { className: 'DocSearch-Label' }, h))));
   }
   function Bt(e) {
    var t = e.hit,
     r = e.children;
    return n.createElement('a', { href: t.url }, r);
   }
   function Ft() {
    return n.createElement('svg', { viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5' }, n.createElement('g', { fill: 'none', fillRule: 'evenodd' }, n.createElement('g', { transform: 'translate(1 1)', strokeWidth: '2' }, n.createElement('circle', { strokeOpacity: '.3', cx: '18', cy: '18', r: '18' }), n.createElement('path', { d: 'M36 18c0-9.94-8.06-18-18-18' }, n.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', from: '0 18 18', to: '360 18 18', dur: '1s', repeatCount: 'indefinite' })))));
   }
   function Ut() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('g', { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0' }), n.createElement('path', { d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13' })));
   }
   function Kt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }));
   }
   function Vt() {
    return n.createElement('svg', { className: 'DocSearch-Hit-Select-Icon', width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('g', { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }), n.createElement('path', { d: 'M8 17l-6-6 6-6' })));
   }
   var Jt = function () {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }));
   };
   function zt(e) {
    switch (e.type) {
     case 'lvl1':
      return n.createElement(Jt, null);
     case 'content':
      return n.createElement(Wt, null);
     default:
      return n.createElement(Qt, null);
    }
   }
   function Qt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }));
   }
   function Wt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }));
   }
   function Gt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }));
   }
   function Zt() {
    return n.createElement('svg', { width: '40', height: '40', viewBox: '0 0 20 20', fill: 'none', fillRule: 'evenodd', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0' }));
   }
   function $t() {
    return n.createElement('svg', { width: '40', height: '40', viewBox: '0 0 20 20', fill: 'none', fillRule: 'evenodd', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2' }));
   }
   function Yt(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = r.titleText,
     i = void 0 === o ? 'Unable to fetch results' : o,
     a = r.helpText,
     c = void 0 === a ? 'You might want to check your network connection.' : a;
    return n.createElement('div', { className: 'DocSearch-ErrorScreen' }, n.createElement('div', { className: 'DocSearch-Screen-Icon' }, n.createElement(Zt, null)), n.createElement('p', { className: 'DocSearch-Title' }, i), n.createElement('p', { className: 'DocSearch-Help' }, c));
   }
   var Xt = ['translations'];
   function er(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = y(e, Xt),
     i = r.noResultsText,
     a = void 0 === i ? 'No results for' : i,
     c = r.suggestedQueryText,
     u = void 0 === c ? 'Try searching for' : c,
     l = r.reportMissingResultsText,
     s = void 0 === l ? 'Believe this query should return results?' : l,
     f = r.reportMissingResultsLinkText,
     m = void 0 === f ? 'Let us know.' : f,
     p = o.state.context.searchSuggestions;
    return n.createElement(
     'div',
     { className: 'DocSearch-NoResults' },
     n.createElement('div', { className: 'DocSearch-Screen-Icon' }, n.createElement($t, null)),
     n.createElement('p', { className: 'DocSearch-Title' }, a, ' "', n.createElement('strong', null, o.state.query), '"'),
     p &&
      p.length > 0 &&
      n.createElement(
       'div',
       { className: 'DocSearch-NoResults-Prefill-List' },
       n.createElement('p', { className: 'DocSearch-Help' }, u, ':'),
       n.createElement(
        'ul',
        null,
        p.slice(0, 3).reduce(function (e, t) {
         return [].concat(O(e), [
          n.createElement(
           'li',
           { key: t },
           n.createElement(
            'button',
            {
             className: 'DocSearch-Prefill',
             key: t,
             type: 'button',
             onClick: function () {
              o.setQuery(t.toLowerCase() + ' '), o.refresh(), o.inputRef.current.focus();
             },
            },
            t,
           ),
          ),
         ]);
        }, []),
       ),
      ),
     o.getMissingResultsUrl && n.createElement('p', { className: 'DocSearch-Help' }, ''.concat(s, ' '), n.createElement('a', { href: o.getMissingResultsUrl({ query: o.state.query }), target: '_blank', rel: 'noopener noreferrer' }, m)),
    );
   }
   var tr = ['hit', 'attribute', 'tagName'];
   function rr(e, t) {
    return t.split('.').reduce(function (e, t) {
     return null != e && e[t] ? e[t] : null;
    }, e);
   }
   function nr(e) {
    var t = e.hit,
     r = e.attribute,
     o = e.tagName,
     i = void 0 === o ? 'span' : o,
     a = y(e, tr);
    return (0, n.createElement)(i, d(d({}, a), {}, { dangerouslySetInnerHTML: { __html: rr(t, '_snippetResult.'.concat(r, '.value')) || rr(t, r) } }));
   }
   function or(e) {
    return e.collection && 0 !== e.collection.items.length
     ? n.createElement(
        'section',
        { className: 'DocSearch-Hits' },
        n.createElement('div', { className: 'DocSearch-Hit-source' }, e.title),
        n.createElement(
         'ul',
         e.getListProps(),
         e.collection.items.map(function (t, r) {
          return n.createElement(ir, f({ key: [e.title, t.objectID].join(':'), item: t, index: r }, e));
         }),
        ),
       )
     : null;
   }
   function ir(e) {
    var t = e.item,
     r = e.index,
     o = e.renderIcon,
     i = e.renderAction,
     a = e.getItemProps,
     c = e.onItemClick,
     u = e.collection,
     l = e.hitComponent,
     s = S(n.useState(!1), 2),
     m = s[0],
     p = s[1],
     v = S(n.useState(!1), 2),
     h = v[0],
     d = v[1],
     y = n.useRef(null),
     g = l;
    return n.createElement(
     'li',
     f(
      {
       className: ['DocSearch-Hit', t.__docsearch_parent && 'DocSearch-Hit--Child', m && 'DocSearch-Hit--deleting', h && 'DocSearch-Hit--favoriting'].filter(Boolean).join(' '),
       onTransitionEnd: function () {
        y.current && y.current();
       },
      },
      a({
       item: t,
       source: u.source,
       onClick: function (e) {
        c(t, e);
       },
      }),
     ),
     n.createElement(
      g,
      { hit: t },
      n.createElement(
       'div',
       { className: 'DocSearch-Hit-Container' },
       o({ item: t, index: r }),
       t.hierarchy[t.type] && 'lvl1' === t.type && n.createElement('div', { className: 'DocSearch-Hit-content-wrapper' }, n.createElement(nr, { className: 'DocSearch-Hit-title', hit: t, attribute: 'hierarchy.lvl1' }), t.content && n.createElement(nr, { className: 'DocSearch-Hit-path', hit: t, attribute: 'content' })),
       t.hierarchy[t.type] && ('lvl2' === t.type || 'lvl3' === t.type || 'lvl4' === t.type || 'lvl5' === t.type || 'lvl6' === t.type) && n.createElement('div', { className: 'DocSearch-Hit-content-wrapper' }, n.createElement(nr, { className: 'DocSearch-Hit-title', hit: t, attribute: 'hierarchy.'.concat(t.type) }), n.createElement(nr, { className: 'DocSearch-Hit-path', hit: t, attribute: 'hierarchy.lvl1' })),
       'content' === t.type && n.createElement('div', { className: 'DocSearch-Hit-content-wrapper' }, n.createElement(nr, { className: 'DocSearch-Hit-title', hit: t, attribute: 'content' }), n.createElement(nr, { className: 'DocSearch-Hit-path', hit: t, attribute: 'hierarchy.lvl1' })),
       i({
        item: t,
        runDeleteTransition: function (e) {
         p(!0), (y.current = e);
        },
        runFavoriteTransition: function (e) {
         d(!0), (y.current = e);
        },
       }),
      ),
     ),
    );
   }
   function ar(e, t, r) {
    return e.reduce(function (e, n) {
     var o = t(n);
     return e.hasOwnProperty(o) || (e[o] = []), e[o].length < (r || 5) && e[o].push(n), e;
    }, {});
   }
   function cr(e) {
    return e;
   }
   function ur(e) {
    return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
   }
   function lr() {}
   var sr = /(<mark>|<\/mark>)/g,
    fr = RegExp(sr.source);
   function mr(e) {
    var t,
     r,
     n = e;
    if (!n.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
    var o = n.__docsearch_parent ? (null === (t = n.__docsearch_parent) || void 0 === t || null === (t = t._highlightResult) || void 0 === t || null === (t = t.hierarchy) || void 0 === t ? void 0 : t.lvl0) : null === (r = e._highlightResult) || void 0 === r || null === (r = r.hierarchy) || void 0 === r ? void 0 : r.lvl0;
    return o ? (o.value && fr.test(o.value) ? o.value.replace(sr, '') : o.value) : e.hierarchy.lvl0;
   }
   function pr(e) {
    return n.createElement(
     'div',
     { className: 'DocSearch-Dropdown-Container' },
     e.state.collections.map(function (t) {
      if (0 === t.items.length) return null;
      var r = mr(t.items[0]);
      return n.createElement(
       or,
       f({}, e, {
        key: t.source.sourceId,
        title: r,
        collection: t,
        renderIcon: function (e) {
         var r,
          o = e.item,
          i = e.index;
         return n.createElement(n.Fragment, null, o.__docsearch_parent && n.createElement('svg', { className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54' }, n.createElement('g', { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }, o.__docsearch_parent !== (null === (r = t.items[i + 1]) || void 0 === r ? void 0 : r.__docsearch_parent) ? n.createElement('path', { d: 'M8 6v21M20 27H8.3' }) : n.createElement('path', { d: 'M8 6v42M20 27H8.3' }))), n.createElement('div', { className: 'DocSearch-Hit-icon' }, n.createElement(zt, { type: o.type })));
        },
        renderAction: function () {
         return n.createElement('div', { className: 'DocSearch-Hit-action' }, n.createElement(Vt, null));
        },
       }),
      );
     }),
     e.resultsFooterComponent && n.createElement('section', { className: 'DocSearch-HitsFooter' }, n.createElement(e.resultsFooterComponent, { state: e.state })),
    );
   }
   var vr = ['translations'];
   function hr(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = y(e, vr),
     i = r.recentSearchesTitle,
     a = void 0 === i ? 'Recent' : i,
     c = r.noRecentSearchesText,
     u = void 0 === c ? 'No recent searches' : c,
     l = r.saveRecentSearchButtonTitle,
     s = void 0 === l ? 'Save this search' : l,
     m = r.removeRecentSearchButtonTitle,
     p = void 0 === m ? 'Remove this search from history' : m,
     v = r.favoriteSearchesTitle,
     h = void 0 === v ? 'Favorite' : v,
     d = r.removeFavoriteSearchButtonTitle,
     g = void 0 === d ? 'Remove this search from favorites' : d;
    return 'idle' === o.state.status && !1 === o.hasCollections
     ? o.disableUserPersonalization
       ? null
       : n.createElement('div', { className: 'DocSearch-StartScreen' }, n.createElement('p', { className: 'DocSearch-Help' }, u))
     : !1 === o.hasCollections
       ? null
       : n.createElement(
          'div',
          { className: 'DocSearch-Dropdown-Container' },
          n.createElement(
           or,
           f({}, o, {
            title: a,
            collection: o.state.collections[0],
            renderIcon: function () {
             return n.createElement('div', { className: 'DocSearch-Hit-icon' }, n.createElement(Ut, null));
            },
            renderAction: function (e) {
             var t = e.item,
              r = e.runFavoriteTransition,
              i = e.runDeleteTransition;
             return n.createElement(
              n.Fragment,
              null,
              n.createElement(
               'div',
               { className: 'DocSearch-Hit-action' },
               n.createElement(
                'button',
                {
                 className: 'DocSearch-Hit-action-button',
                 title: s,
                 type: 'submit',
                 onClick: function (e) {
                  e.preventDefault(),
                   e.stopPropagation(),
                   r(function () {
                    o.favoriteSearches.add(t), o.recentSearches.remove(t), o.refresh();
                   });
                 },
                },
                n.createElement(Gt, null),
               ),
              ),
              n.createElement(
               'div',
               { className: 'DocSearch-Hit-action' },
               n.createElement(
                'button',
                {
                 className: 'DocSearch-Hit-action-button',
                 title: p,
                 type: 'submit',
                 onClick: function (e) {
                  e.preventDefault(),
                   e.stopPropagation(),
                   i(function () {
                    o.recentSearches.remove(t), o.refresh();
                   });
                 },
                },
                n.createElement(Kt, null),
               ),
              ),
             );
            },
           }),
          ),
          n.createElement(
           or,
           f({}, o, {
            title: h,
            collection: o.state.collections[1],
            renderIcon: function () {
             return n.createElement('div', { className: 'DocSearch-Hit-icon' }, n.createElement(Gt, null));
            },
            renderAction: function (e) {
             var t = e.item,
              r = e.runDeleteTransition;
             return n.createElement(
              'div',
              { className: 'DocSearch-Hit-action' },
              n.createElement(
               'button',
               {
                className: 'DocSearch-Hit-action-button',
                title: g,
                type: 'submit',
                onClick: function (e) {
                 e.preventDefault(),
                  e.stopPropagation(),
                  r(function () {
                   o.favoriteSearches.remove(t), o.refresh();
                  });
                },
               },
               n.createElement(Kt, null),
              ),
             );
            },
           }),
          ),
         );
   }
   var dr = ['translations'],
    yr = n.memo(
     function (e) {
      var t = e.translations,
       r = void 0 === t ? {} : t,
       o = y(e, dr);
      if ('error' === o.state.status) return n.createElement(Yt, { translations: null == r ? void 0 : r.errorScreen });
      var i = o.state.collections.some(function (e) {
       return e.items.length > 0;
      });
      return o.state.query ? (!1 === i ? n.createElement(er, f({}, o, { translations: null == r ? void 0 : r.noResultsScreen })) : n.createElement(pr, o)) : n.createElement(hr, f({}, o, { hasCollections: i, translations: null == r ? void 0 : r.startScreen }));
     },
     function (e, t) {
      return 'loading' === t.state.status || 'stalled' === t.state.status;
     },
    ),
    gr = ['translations'];
   function br(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = y(e, gr),
     i = r.resetButtonTitle,
     a = void 0 === i ? 'Clear the query' : i,
     c = r.resetButtonAriaLabel,
     u = void 0 === c ? 'Clear the query' : c,
     l = r.cancelButtonText,
     s = void 0 === l ? 'Cancel' : l,
     m = r.cancelButtonAriaLabel,
     p = void 0 === m ? 'Cancel' : m,
     v = r.searchInputLabel,
     h = void 0 === v ? 'Search' : v,
     d = o.getFormProps({ inputElement: o.inputRef.current }).onReset;
    return (
     n.useEffect(
      function () {
       o.autoFocus && o.inputRef.current && o.inputRef.current.focus();
      },
      [o.autoFocus, o.inputRef],
     ),
     n.useEffect(
      function () {
       o.isFromSelection && o.inputRef.current && o.inputRef.current.select();
      },
      [o.isFromSelection, o.inputRef],
     ),
     n.createElement(
      n.Fragment,
      null,
      n.createElement(
       'form',
       {
        className: 'DocSearch-Form',
        onSubmit: function (e) {
         e.preventDefault();
        },
        onReset: d,
       },
       n.createElement('label', f({ className: 'DocSearch-MagnifierLabel' }, o.getLabelProps()), n.createElement(P, null), n.createElement('span', { className: 'DocSearch-VisuallyHiddenForAccessibility' }, h)),
       n.createElement('div', { className: 'DocSearch-LoadingIndicator' }, n.createElement(Ft, null)),
       n.createElement('input', f({ className: 'DocSearch-Input', ref: o.inputRef }, o.getInputProps({ inputElement: o.inputRef.current, autoFocus: o.autoFocus, maxLength: 64 }))),
       n.createElement('button', { type: 'reset', title: a, className: 'DocSearch-Reset', 'aria-label': u, hidden: !o.state.query }, n.createElement(Kt, null)),
      ),
      n.createElement('button', { className: 'DocSearch-Cancel', type: 'reset', 'aria-label': p, onClick: o.onClose }, s),
     )
    );
   }
   var Sr = ['_highlightResult', '_snippetResult'];
   function Or(e) {
    var t = e.key,
     r = e.limit,
     n = void 0 === r ? 5 : r,
     o = (function (e) {
      return !1 ===
       (function () {
        var e = '__TEST_KEY__';
        try {
         return localStorage.setItem(e, ''), localStorage.removeItem(e), !0;
        } catch (e) {
         return !1;
        }
       })()
       ? {
          setItem: function () {},
          getItem: function () {
           return [];
          },
         }
       : {
          setItem: function (t) {
           return window.localStorage.setItem(e, JSON.stringify(t));
          },
          getItem: function () {
           var t = window.localStorage.getItem(e);
           return t ? JSON.parse(t) : [];
          },
         };
     })(t),
     i = o.getItem().slice(0, n);
    return {
     add: function (e) {
      var t = e;
      t._highlightResult, t._snippetResult;
      var r = y(t, Sr),
       a = i.findIndex(function (e) {
        return e.objectID === r.objectID;
       });
      a > -1 && i.splice(a, 1), i.unshift(r), (i = i.slice(0, n)), o.setItem(i);
     },
     remove: function (e) {
      (i = i.filter(function (t) {
       return t.objectID !== e.objectID;
      })),
       o.setItem(i);
     },
     getAll: function () {
      return i;
     },
    };
   }
   function wr(e) {
    var t,
     r = 'algolia-client-js-'.concat(e.key);
    function n() {
     return void 0 === t && (t = e.localStorage || window.localStorage), t;
    }
    function o() {
     return JSON.parse(n().getItem(r) || '{}');
    }
    function i(e) {
     n().setItem(r, JSON.stringify(e));
    }
    return {
     get: function (t, r) {
      var n =
       arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : {
           miss: function () {
            return Promise.resolve();
           },
          };
      return Promise.resolve()
       .then(function () {
        var r, n, a;
        return (
         (r = e.timeToLive ? 1e3 * e.timeToLive : null),
         (n = o()),
         i(
          (a = Object.fromEntries(
           Object.entries(n).filter(function (e) {
            return void 0 !== S(e, 2)[1].timestamp;
           }),
          )),
         ),
         r &&
          i(
           Object.fromEntries(
            Object.entries(a).filter(function (e) {
             var t = S(e, 2)[1],
              n = new Date().getTime();
             return !(t.timestamp + r < n);
            }),
           ),
          ),
         o()[JSON.stringify(t)]
        );
       })
       .then(function (e) {
        return Promise.all([e ? e.value : r(), void 0 !== e]);
       })
       .then(function (e) {
        var t = S(e, 2),
         r = t[0],
         o = t[1];
        return Promise.all([r, o || n.miss(r)]);
       })
       .then(function (e) {
        return S(e, 1)[0];
       });
     },
     set: function (e, t) {
      return Promise.resolve().then(function () {
       var i = o();
       return (i[JSON.stringify(e)] = { timestamp: new Date().getTime(), value: t }), n().setItem(r, JSON.stringify(i)), t;
      });
     },
     delete: function (e) {
      return Promise.resolve().then(function () {
       var t = o();
       delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t));
      });
     },
     clear: function () {
      return Promise.resolve().then(function () {
       n().removeItem(r);
      });
     },
    };
   }
   function Er(e) {
    var t = O(e.caches),
     r = t.shift();
    return void 0 === r
     ? {
        get: function (e, t) {
         var r =
          arguments.length > 2 && void 0 !== arguments[2]
           ? arguments[2]
           : {
              miss: function () {
               return Promise.resolve();
              },
             };
         return t()
          .then(function (e) {
           return Promise.all([e, r.miss(e)]);
          })
          .then(function (e) {
           return S(e, 1)[0];
          });
        },
        set: function (e, t) {
         return Promise.resolve(t);
        },
        delete: function (e) {
         return Promise.resolve();
        },
        clear: function () {
         return Promise.resolve();
        },
       }
     : {
        get: function (e, n) {
         var o =
          arguments.length > 2 && void 0 !== arguments[2]
           ? arguments[2]
           : {
              miss: function () {
               return Promise.resolve();
              },
             };
         return r.get(e, n, o).catch(function () {
          return Er({ caches: t }).get(e, n, o);
         });
        },
        set: function (e, n) {
         return r.set(e, n).catch(function () {
          return Er({ caches: t }).set(e, n);
         });
        },
        delete: function (e) {
         return r.delete(e).catch(function () {
          return Er({ caches: t }).delete(e);
         });
        },
        clear: function () {
         return r.clear().catch(function () {
          return Er({ caches: t }).clear();
         });
        },
       };
   }
   function jr() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: !0 },
     t = {};
    return {
     get: function (r, n) {
      var o =
        arguments.length > 2 && void 0 !== arguments[2]
         ? arguments[2]
         : {
            miss: function () {
             return Promise.resolve();
            },
           },
       i = JSON.stringify(r);
      if (i in t) return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
      var a = n();
      return a
       .then(function (e) {
        return o.miss(e);
       })
       .then(function () {
        return a;
       });
     },
     set: function (r, n) {
      return (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n), Promise.resolve(n);
     },
     delete: function (e) {
      return delete t[JSON.stringify(e)], Promise.resolve();
     },
     clear: function () {
      return (t = {}), Promise.resolve();
     },
    };
   }
   function Pr(e) {
    var t = e.algoliaAgents,
     r = e.client,
     n = e.version,
     o = (function (e) {
      var t = {
       value: 'Algolia for JavaScript ('.concat(e, ')'),
       add: function (e) {
        var r = '; '.concat(e.segment).concat(void 0 !== e.version ? ' ('.concat(e.version, ')') : '');
        return -1 === t.value.indexOf(r) && (t.value = ''.concat(t.value).concat(r)), t;
       },
      };
      return t;
     })(n).add({ segment: r, version: n });
    return (
     t.forEach(function (e) {
      return o.add(e);
     }),
     o
    );
   }
   var Ir = 12e4;
   function Dr(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'up',
     r = Date.now();
    return d(
     d({}, e),
     {},
     {
      status: t,
      lastUpdate: r,
      isUp: function () {
       return 'up' === t || Date.now() - r > Ir;
      },
      isTimedOut: function () {
       return 'timed out' === t && Date.now() - r <= Ir;
      },
     },
    );
   }
   var _r = (function () {
     function e(t, r) {
      var n;
      return u(this, e), s((n = c(this, e, [t])), 'name', 'AlgoliaError'), r && (n.name = r), n;
     }
     return p(e, E(Error)), l(e);
    })(),
    Ar = (function () {
     function e(t, r, n) {
      var o;
      return u(this, e), s((o = c(this, e, [t, n])), 'stackTrace', void 0), (o.stackTrace = r), o;
     }
     return p(e, _r), l(e);
    })(),
    kr = (function () {
     function e(t) {
      return u(this, e), c(this, e, ['Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.', t, 'RetryError']);
     }
     return p(e, Ar), l(e);
    })(),
    xr = (function () {
     function e(t, r, n) {
      var o,
       i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'ApiError';
      return u(this, e), s((o = c(this, e, [t, n, i])), 'status', void 0), (o.status = r), o;
     }
     return p(e, Ar), l(e);
    })(),
    Cr = (function () {
     function e(t, r) {
      var n;
      return u(this, e), s((n = c(this, e, [t, 'DeserializationError'])), 'response', void 0), (n.response = r), n;
     }
     return p(e, _r), l(e);
    })(),
    Tr = (function () {
     function e(t, r, n, o) {
      var i;
      return u(this, e), s((i = c(this, e, [t, r, o, 'DetailedApiError'])), 'error', void 0), (i.error = n), i;
     }
     return p(e, xr), l(e);
    })();
   function Nr(e, t, r) {
    var n,
     o =
      ((n = r),
      Object.keys(n)
       .filter(function (e) {
        return void 0 !== n[e];
       })
       .sort()
       .map(function (e) {
        return ''.concat(e, '=').concat(encodeURIComponent('[object Array]' === Object.prototype.toString.call(n[e]) ? n[e].join(',') : n[e]).replace(/\+/g, '%20'));
       })
       .join('&')),
     i = ''
      .concat(e.protocol, '://')
      .concat(e.url)
      .concat(e.port ? ':'.concat(e.port) : '', '/')
      .concat('/' === t.charAt(0) ? t.substring(1) : t);
    return o.length && (i += '?'.concat(o)), i;
   }
   function Lr(e, t) {
    if ('GET' !== e.method && (void 0 !== e.data || void 0 !== t.data)) {
     var r = Array.isArray(e.data) ? e.data : d(d({}, e.data), t.data);
     return JSON.stringify(r);
    }
   }
   function Rr(e, t, r) {
    var n = d(d(d({ Accept: 'application/json' }, e), t), r),
     o = {};
    return (
     Object.keys(n).forEach(function (e) {
      var t = n[e];
      o[e.toLowerCase()] = t;
     }),
     o
    );
   }
   function qr(e) {
    try {
     return JSON.parse(e.content);
    } catch (t) {
     throw new Cr(t.message, e);
    }
   }
   function Mr(e, t) {
    var r = e.content,
     n = e.status;
    try {
     var o = JSON.parse(r);
     return 'error' in o ? new Tr(o.message, n, o.error, t) : new xr(o.message, n, t);
    } catch (e) {}
    return new xr(r, n, t);
   }
   function Hr(e) {
    return e.map(function (e) {
     return Br(e);
    });
   }
   function Br(e) {
    var t = e.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {};
    return d(d({}, e), {}, { request: d(d({}, e.request), {}, { headers: d(d({}, e.request.headers), t) }) });
   }
   var Fr = ['appId', 'apiKey', 'authMode', 'algoliaAgents'],
    Ur = ['params'],
    Kr = '5.19.0';
   function Vr(e) {
    return [
     { url: ''.concat(e, '-dsn.algolia.net'), accept: 'read', protocol: 'https' },
     { url: ''.concat(e, '.algolia.net'), accept: 'write', protocol: 'https' },
    ].concat(
     (function (e) {
      for (var t = e, r = e.length - 1; r > 0; r--) {
       var n = Math.floor(Math.random() * (r + 1)),
        o = e[r];
       (t[r] = e[n]), (t[n] = o);
      }
      return t;
     })([
      { url: ''.concat(e, '-1.algolianet.com'), accept: 'readWrite', protocol: 'https' },
      { url: ''.concat(e, '-2.algolianet.com'), accept: 'readWrite', protocol: 'https' },
      { url: ''.concat(e, '-3.algolianet.com'), accept: 'readWrite', protocol: 'https' },
     ]),
    );
   }
   var Jr = '3.8.3';
   function zr(e, t, r) {
    return n.useMemo(
     function () {
      var n = (function (e, t, r) {
       if (!e || 'string' != typeof e) throw new Error('`appId` is missing.');
       if (!t || 'string' != typeof t) throw new Error('`apiKey` is missing.');
       return (function (e) {
        var t = e.appId,
         r = e.apiKey,
         n = e.authMode,
         o = e.algoliaAgents,
         i = y(e, Fr),
         c = (function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'WithinHeaders',
           n = { 'x-algolia-api-key': t, 'x-algolia-application-id': e };
          return {
           headers: function () {
            return 'WithinHeaders' === r ? n : {};
           },
           queryParameters: function () {
            return 'WithinQueryParameters' === r ? n : {};
           },
          };
         })(t, r, n),
         u = (function (e) {
          var t = e.hosts,
           r = e.hostsCache,
           n = e.baseHeaders,
           o = e.logger,
           i = e.baseQueryParameters,
           c = e.algoliaAgent,
           u = e.timeouts,
           l = e.requester,
           s = e.requestsCache,
           f = e.responsesCache;
          function m(e) {
           return p.apply(this, arguments);
          }
          function p() {
           return (p = a(
            g().mark(function e(t) {
             var n, o, i, a, c;
             return g().wrap(function (e) {
              for (;;)
               switch ((e.prev = e.next)) {
                case 0:
                 return (
                  (e.next = 2),
                  Promise.all(
                   t.map(function (e) {
                    return r.get(e, function () {
                     return Promise.resolve(Dr(e));
                    });
                   }),
                  )
                 );
                case 2:
                 return (
                  (n = e.sent),
                  (o = n.filter(function (e) {
                   return e.isUp();
                  })),
                  (i = n.filter(function (e) {
                   return e.isTimedOut();
                  })),
                  (a = [].concat(O(o), O(i))),
                  (c = a.length > 0 ? a : t),
                  e.abrupt('return', {
                   hosts: c,
                   getTimeout: function (e, t) {
                    return (0 === i.length && 0 === e ? 1 : i.length + 3 + e) * t;
                   },
                  })
                 );
                case 8:
                case 'end':
                 return e.stop();
               }
             }, e);
            }),
           )).apply(this, arguments);
          }
          function v(e, t) {
           return h.apply(this, arguments);
          }
          function h() {
           return (
            (h = a(
             g().mark(function e(s, f) {
              var p,
               v,
               h,
               y,
               b,
               S,
               w,
               E,
               j,
               P,
               I,
               D,
               _,
               A = arguments;
              return g().wrap(function (e) {
               for (;;)
                switch ((e.prev = e.next)) {
                 case 0:
                  if (((p = !(A.length > 2 && void 0 !== A[2]) || A[2]), (v = []), (h = Lr(s, f)), (y = Rr(n, s.headers, f.headers)), (b = 'GET' === s.method ? d(d({}, s.data), f.data) : {}), (S = d(d(d({}, i), s.queryParameters), b)), c.value && (S['x-algolia-agent'] = c.value), f && f.queryParameters)) for (w = 0, E = Object.keys(f.queryParameters); w < E.length; w++) (j = E[w]), f.queryParameters[j] && '[object Object]' !== Object.prototype.toString.call(f.queryParameters[j]) ? (S[j] = f.queryParameters[j].toString()) : (S[j] = f.queryParameters[j]);
                  return (
                   (P = 0),
                   (I = (function () {
                    var e = a(
                     g().mark(function e(t, n) {
                      var i, a, c, m, b, O;
                      return g().wrap(function (e) {
                       for (;;)
                        switch ((e.prev = e.next)) {
                         case 0:
                          if (void 0 !== (i = t.pop())) {
                           e.next = 3;
                           break;
                          }
                          throw new kr(Hr(v));
                         case 3:
                          return (
                           (a = d(d({}, u), f.timeouts)),
                           (c = { data: h, headers: y, method: s.method, url: Nr(i, s.path, S), connectTimeout: n(P, a.connect), responseTimeout: n(P, p ? a.read : a.write) }),
                           (m = function (e) {
                            var r = { request: c, response: e, host: i, triesLeft: t.length };
                            return v.push(r), r;
                           }),
                           (e.next = 8),
                           l.send(c)
                          );
                         case 8:
                          if (
                           ((w = (g = b = e.sent).isTimedOut),
                           (E = g.status),
                           !(
                            w ||
                            (function (e) {
                             return !e.isTimedOut && !~~e.status;
                            })({ isTimedOut: w, status: E }) ||
                            (2 != ~~(E / 100) && 4 != ~~(E / 100))
                           ))
                          ) {
                           e.next = 16;
                           break;
                          }
                          return (O = m(b)), b.isTimedOut && P++, o.info('Retryable failure', Br(O)), (e.next = 15), r.set(i, Dr(i, b.isTimedOut ? 'timed out' : 'down'));
                         case 15:
                          return e.abrupt('return', I(t, n));
                         case 16:
                          if (2 != ~~(b.status / 100)) {
                           e.next = 18;
                           break;
                          }
                          return e.abrupt('return', qr(b));
                         case 18:
                          throw (m(b), Mr(b, v));
                         case 20:
                         case 'end':
                          return e.stop();
                        }
                       var g, w, E;
                      }, e);
                     }),
                    );
                    return function (t, r) {
                     return e.apply(this, arguments);
                    };
                   })()),
                   (D = t.filter(function (e) {
                    return 'readWrite' === e.accept || (p ? 'read' === e.accept : 'write' === e.accept);
                   })),
                   (e.next = 13),
                   m(D)
                  );
                 case 13:
                  return (_ = e.sent), e.abrupt('return', I(O(_.hosts).reverse(), _.getTimeout));
                 case 15:
                 case 'end':
                  return e.stop();
                }
              }, e);
             }),
            )),
            h.apply(this, arguments)
           );
          }
          return {
           hostsCache: r,
           requester: l,
           timeouts: u,
           logger: o,
           algoliaAgent: c,
           baseHeaders: n,
           baseQueryParameters: i,
           hosts: t,
           request: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
             r = e.useReadTransporter || 'GET' === e.method;
            if (!r) return v(e, t, r);
            var o = function () {
             return v(e, t);
            };
            if (!0 !== (t.cacheable || e.cacheable)) return o();
            var a = { request: e, requestOptions: t, transporter: { queryParameters: i, headers: n } };
            return f.get(
             a,
             function () {
              return s.get(a, function () {
               return s
                .set(a, o())
                .then(
                 function (e) {
                  return Promise.all([s.delete(a), e]);
                 },
                 function (e) {
                  return Promise.all([s.delete(a), Promise.reject(e)]);
                 },
                )
                .then(function (e) {
                 var t = S(e, 2);
                 return t[0], t[1];
                });
              });
             },
             {
              miss: function (e) {
               return f.set(a, e);
              },
             },
            );
           },
           requestsCache: s,
           responsesCache: f,
          };
         })(d(d({ hosts: Vr(t) }, i), {}, { algoliaAgent: Pr({ algoliaAgents: o, client: 'Lite', version: Kr }), baseHeaders: d(d({ 'content-type': 'text/plain' }, c.headers()), i.baseHeaders), baseQueryParameters: d(d({}, c.queryParameters()), i.baseQueryParameters) }));
        return {
         transporter: u,
         appId: t,
         apiKey: r,
         clearCache: function () {
          return Promise.all([u.requestsCache.clear(), u.responsesCache.clear()]).then(function () {});
         },
         get _ua() {
          return u.algoliaAgent.value;
         },
         addAlgoliaAgent: function (e, t) {
          u.algoliaAgent.add({ segment: e, version: t });
         },
         setClientApiKey: function (e) {
          var t = e.apiKey;
          n && 'WithinHeaders' !== n ? (u.baseQueryParameters['x-algolia-api-key'] = t) : (u.baseHeaders['x-algolia-api-key'] = t);
         },
         searchForHits: function (e, t) {
          return this.search(e, t);
         },
         searchForFacets: function (e, t) {
          return this.search(e, t);
         },
         customPost: function (e, t) {
          var r = e.path,
           n = e.parameters,
           o = e.body;
          if (!r) throw new Error('Parameter `path` is required when calling `customPost`.');
          var i = { method: 'POST', path: '/{path}'.replace('{path}', r), queryParameters: n || {}, headers: {}, data: o || {} };
          return u.request(i, t);
         },
         getRecommendations: function (e, t) {
          if ((e && Array.isArray(e) && (e = { requests: e }), !e)) throw new Error('Parameter `getRecommendationsParams` is required when calling `getRecommendations`.');
          if (!e.requests) throw new Error('Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.');
          var r = { method: 'POST', path: '/1/indexes/*/recommendations', queryParameters: {}, headers: {}, data: e, useReadTransporter: !0, cacheable: !0 };
          return u.request(r, t);
         },
         search: function (e, t) {
          if (e && Array.isArray(e)) {
           var r = {
            requests: e.map(function (e) {
             var t = e.params,
              r = y(e, Ur);
             return 'facet' === r.type ? d(d(d({}, r), t), {}, { type: 'facet' }) : d(d(d({}, r), t), {}, { facet: void 0, maxFacetHits: void 0, facetQuery: void 0 });
            }),
           };
           e = r;
          }
          if (!e) throw new Error('Parameter `searchMethodParams` is required when calling `search`.');
          if (!e.requests) throw new Error('Parameter `searchMethodParams.requests` is required when calling `search`.');
          var n = { method: 'POST', path: '/1/indexes/*/queries', queryParameters: {}, headers: {}, data: e, useReadTransporter: !0, cacheable: !0 };
          return u.request(n, t);
         },
        };
       })(
        d(
         {
          appId: e,
          apiKey: t,
          timeouts: { connect: 1e3, read: 2e3, write: 3e4 },
          logger: {
           debug: function (e, t) {
            return Promise.resolve();
           },
           info: function (e, t) {
            return Promise.resolve();
           },
           error: function (e, t) {
            return Promise.resolve();
           },
          },
          requester: {
           send: function (e) {
            return new Promise(function (t) {
             var r = new XMLHttpRequest();
             r.open(e.method, e.url, !0),
              Object.keys(e.headers).forEach(function (t) {
               return r.setRequestHeader(t, e.headers[t]);
              });
             var n,
              o = function (e, n) {
               return setTimeout(function () {
                r.abort(), t({ status: 0, content: n, isTimedOut: !0 });
               }, e);
              },
              i = o(e.connectTimeout, 'Connection timeout');
             (r.onreadystatechange = function () {
              r.readyState > r.OPENED && void 0 === n && (clearTimeout(i), (n = o(e.responseTimeout, 'Socket timeout')));
             }),
              (r.onerror = function () {
               0 === r.status && (clearTimeout(i), clearTimeout(n), t({ content: r.responseText || 'Network request failed', status: r.status, isTimedOut: !1 }));
              }),
              (r.onload = function () {
               clearTimeout(i), clearTimeout(n), t({ content: r.responseText, status: r.status, isTimedOut: !1 });
              }),
              r.send(e.data);
            });
           },
          },
          algoliaAgents: [{ segment: 'Browser' }],
          authMode: 'WithinQueryParameters',
          responsesCache: jr(),
          requestsCache: jr({ serializable: !1 }),
          hostsCache: Er({ caches: [wr({ key: ''.concat(Kr, '-').concat(e) }), jr()] }),
         },
         void 0,
        ),
       );
      })(e, t);
      return n.addAlgoliaAgent('docsearch', Jr), !1 === /docsearch.js \(.*\)/.test(n.transporter.algoliaAgent.value) && n.addAlgoliaAgent('docsearch-react', Jr), r(n);
     },
     [e, t, r],
    );
   }
   var Qr = ['footer', 'searchBox'];
   function Wr(e) {
    var t = e.appId,
     r = e.apiKey,
     o = e.indexName,
     i = e.placeholder,
     a = void 0 === i ? 'Search docs' : i,
     c = e.searchParameters,
     u = e.maxResultsPerGroup,
     l = e.onClose,
     s = void 0 === l ? lr : l,
     m = e.transformItems,
     p = void 0 === m ? cr : m,
     v = e.hitComponent,
     h = void 0 === v ? Bt : v,
     g = e.resultsFooterComponent,
     b =
      void 0 === g
       ? function () {
          return null;
         }
       : g,
     O = e.navigator,
     w = e.initialScrollY,
     E = void 0 === w ? 0 : w,
     j = e.transformSearchClient,
     P = void 0 === j ? cr : j,
     I = e.disableUserPersonalization,
     D = void 0 !== I && I,
     _ = e.initialQuery,
     A = void 0 === _ ? '' : _,
     k = e.translations,
     x = void 0 === k ? {} : k,
     C = e.getMissingResultsUrl,
     T = e.insights,
     N = void 0 !== T && T,
     L = x.footer,
     R = x.searchBox,
     q = y(x, Qr),
     M = S(n.useState({ query: '', collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: 'idle' }), 2),
     H = M[0],
     B = M[1],
     F = n.useRef(null),
     U = n.useRef(null),
     K = n.useRef(null),
     V = n.useRef(null),
     J = n.useRef(null),
     z = n.useRef(10),
     Q = n.useRef('undefined' != typeof window ? window.getSelection().toString().slice(0, 64) : '').current,
     W = n.useRef(A || Q).current,
     G = zr(t, r, P),
     Z = n.useRef(Or({ key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(o), limit: 10 })).current,
     $ = n.useRef(Or({ key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(o), limit: 0 === Z.getAll().length ? 7 : 4 })).current,
     Y = n.useCallback(
      function (e) {
       if (!D) {
        var t = 'content' === e.type ? e.__docsearch_parent : e;
        t &&
         -1 ===
          Z.getAll().findIndex(function (e) {
           return e.objectID === t.objectID;
          }) &&
         $.add(t);
       }
      },
      [Z, $, D],
     ),
     X = n.useCallback(
      function (e) {
       if (H.context.algoliaInsightsPlugin && e.__autocomplete_id) {
        var t = e,
         r = { eventName: 'Item Selected', index: t.__autocomplete_indexName, items: [t], positions: [e.__autocomplete_id], queryID: t.__autocomplete_queryID };
        H.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(r);
       }
      },
      [H.context.algoliaInsightsPlugin],
     ),
     ee = n.useMemo(
      function () {
       return Rt({
        id: 'docsearch',
        defaultActiveItemId: 0,
        placeholder: a,
        openOnFocus: !0,
        initialState: { query: W, context: { searchSuggestions: [] } },
        insights: N,
        navigator: O,
        onStateChange: function (e) {
         B(e.state);
        },
        getSources: function (e) {
         var n = e.query,
          i = e.state,
          a = e.setContext,
          l = e.setStatus;
         if (!n)
          return D
           ? []
           : [
              {
               sourceId: 'recentSearches',
               onSelect: function (e) {
                var t = e.item,
                 r = e.event;
                Y(t), ur(r) || s();
               },
               getItemUrl: function (e) {
                return e.item.url;
               },
               getItems: function () {
                return $.getAll();
               },
              },
              {
               sourceId: 'favoriteSearches',
               onSelect: function (e) {
                var t = e.item,
                 r = e.event;
                Y(t), ur(r) || s();
               },
               getItemUrl: function (e) {
                return e.item.url;
               },
               getItems: function () {
                return Z.getAll();
               },
              },
             ];
         var f = Boolean(N);
         return G.search({ requests: [d({ query: n, indexName: o, attributesToRetrieve: ['hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'hierarchy.lvl4', 'hierarchy.lvl5', 'hierarchy.lvl6', 'content', 'type', 'url'], attributesToSnippet: ['hierarchy.lvl1:'.concat(z.current), 'hierarchy.lvl2:'.concat(z.current), 'hierarchy.lvl3:'.concat(z.current), 'hierarchy.lvl4:'.concat(z.current), 'hierarchy.lvl5:'.concat(z.current), 'hierarchy.lvl6:'.concat(z.current), 'content:'.concat(z.current)], snippetEllipsisText: '\u2026', highlightPreTag: '<mark>', highlightPostTag: '</mark>', hitsPerPage: 20, clickAnalytics: f }, c)] })
          .catch(function (e) {
           throw ('RetryError' === e.name && l('error'), e);
          })
          .then(function (e) {
           var n = e.results[0],
            c = n.hits,
            l = n.nbHits,
            m = ar(
             c,
             function (e) {
              return mr(e);
             },
             u,
            );
           i.context.searchSuggestions.length < Object.keys(m).length && a({ searchSuggestions: Object.keys(m) }), a({ nbHits: l });
           var v = {};
           return (
            f && (v = { __autocomplete_indexName: o, __autocomplete_queryID: n.queryID, __autocomplete_algoliaCredentials: { appId: t, apiKey: r } }),
            Object.values(m).map(function (e, t) {
             return {
              sourceId: 'hits'.concat(t),
              onSelect: function (e) {
               var t = e.item,
                r = e.event;
               Y(t), ur(r) || s();
              },
              getItemUrl: function (e) {
               return e.item.url;
              },
              getItems: function () {
               return Object.values(
                ar(
                 e,
                 function (e) {
                  return e.hierarchy.lvl1;
                 },
                 u,
                ),
               )
                .map(p)
                .map(function (e) {
                 return e.map(function (t) {
                  var r = null,
                   n = e.find(function (e) {
                    return 'lvl1' === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1;
                   });
                  return 'lvl1' !== t.type && n && (r = n), d(d({}, t), {}, { __docsearch_parent: r }, v);
                 });
                })
                .flat();
              },
             };
            })
           );
          });
        },
       });
      },
      [o, c, u, G, s, $, Z, Y, W, a, O, p, D, N, t, r],
     ),
     te = ee.getEnvironmentProps,
     re = ee.getRootProps,
     ne = ee.refresh;
    return (
     (function (e) {
      var t = e.getEnvironmentProps,
       r = e.panelElement,
       o = e.formElement,
       i = e.inputElement;
      n.useEffect(
       function () {
        if (r && o && i) {
         var e = t({ panelElement: r, formElement: o, inputElement: i }),
          n = e.onTouchStart,
          a = e.onTouchMove;
         return (
          window.addEventListener('touchstart', n),
          window.addEventListener('touchmove', a),
          function () {
           window.removeEventListener('touchstart', n), window.removeEventListener('touchmove', a);
          }
         );
        }
       },
       [t, r, o, i],
      );
     })({ getEnvironmentProps: te, panelElement: V.current, formElement: K.current, inputElement: J.current }),
     (function (e) {
      var t = e.container;
      n.useEffect(
       function () {
        if (t) {
         var e = t.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), input:not([disabled])'),
          r = e[0],
          n = e[e.length - 1];
         return (
          t.addEventListener('keydown', o),
          function () {
           t.removeEventListener('keydown', o);
          }
         );
        }
        function o(e) {
         'Tab' === e.key && (e.shiftKey ? document.activeElement === r && (e.preventDefault(), n.focus()) : document.activeElement === n && (e.preventDefault(), r.focus()));
        }
       },
       [t],
      );
     })({ container: F.current }),
     n.useEffect(function () {
      return (
       document.body.classList.add('DocSearch--active'),
       function () {
        var e, t;
        document.body.classList.remove('DocSearch--active'), null === (e = (t = window).scrollTo) || void 0 === e || e.call(t, 0, E);
       }
      );
     }, []),
     n.useLayoutEffect(function () {
      var e = window.innerWidth - document.body.clientWidth;
      return (
       (document.body.style.marginRight = ''.concat(e, 'px')),
       function () {
        document.body.style.marginRight = '0px';
       }
      );
     }, []),
     n.useEffect(function () {
      window.matchMedia('(max-width: 768px)').matches && (z.current = 5);
     }, []),
     n.useEffect(
      function () {
       V.current && (V.current.scrollTop = 0);
      },
      [H.query],
     ),
     n.useEffect(
      function () {
       W.length > 0 && (ne(), J.current && J.current.focus());
      },
      [W, ne],
     ),
     n.useEffect(function () {
      function e() {
       if (U.current) {
        var e = 0.01 * window.innerHeight;
        U.current.style.setProperty('--docsearch-vh', ''.concat(e, 'px'));
       }
      }
      return (
       e(),
       window.addEventListener('resize', e),
       function () {
        window.removeEventListener('resize', e);
       }
      );
     }, []),
     n.createElement(
      'div',
      f({ ref: F }, re({ 'aria-expanded': !0 }), {
       className: ['DocSearch', 'DocSearch-Container', 'stalled' === H.status && 'DocSearch-Container--Stalled', 'error' === H.status && 'DocSearch-Container--Errored'].filter(Boolean).join(' '),
       role: 'button',
       tabIndex: 0,
       onMouseDown: function (e) {
        e.target === e.currentTarget && s();
       },
      }),
      n.createElement(
       'div',
       { className: 'DocSearch-Modal', ref: U },
       n.createElement('header', { className: 'DocSearch-SearchBar', ref: K }, n.createElement(br, f({}, ee, { state: H, autoFocus: 0 === W.length, inputRef: J, isFromSelection: Boolean(W) && W === Q, translations: R, onClose: s }))),
       n.createElement(
        'div',
        { className: 'DocSearch-Dropdown', ref: V },
        n.createElement(
         yr,
         f({}, ee, {
          indexName: o,
          state: H,
          hitComponent: h,
          resultsFooterComponent: b,
          disableUserPersonalization: D,
          recentSearches: $,
          favoriteSearches: Z,
          inputRef: J,
          translations: q,
          getMissingResultsUrl: C,
          onItemClick: function (e, t) {
           X(e), Y(e), ur(t) || s();
          },
         }),
        ),
       ),
       n.createElement('footer', { className: 'DocSearch-Footer' }, n.createElement(Ht, { translations: L })),
      ),
     )
    );
   }
  },
 },
]);
