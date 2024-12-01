'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5808],
 {
  5808: (e, t, r) => {
   r.r(t), r.d(t, { DocSearchModal: () => Fr });
   var n = r(75271);
   r(30967);
   function o(e, t) {
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
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? o(Object(r), !0).forEach(function (t) {
         a(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : o(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function a(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
   }
   function c() {
    return (
     (c =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
       }
       return e;
      }),
     c.apply(this, arguments)
    );
   }
   function l(e, t) {
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
   function u(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != r) {
       var n,
        o,
        i = [],
        a = !0,
        c = !1;
       try {
        for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
       } catch (e) {
        (c = !0), (o = e);
       } finally {
        try {
         a || null == r.return || r.return();
        } finally {
         if (c) throw o;
        }
       }
       return i;
      }
     })(e, t) ||
     f(e, t) ||
     (function () {
      throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function s(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return m(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     f(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function f(e, t) {
    if (e) {
     if ('string' == typeof e) return m(e, t);
     var r = Object.prototype.toString.call(e).slice(8, -1);
     return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(e, t) : void 0;
    }
   }
   function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function p() {
    return n.createElement('svg', { width: '15', height: '15', className: 'DocSearch-Control-Key-Icon' }, n.createElement('path', { d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953', strokeWidth: '1.2', stroke: 'currentColor', fill: 'none', strokeLinecap: 'square' }));
   }
   function v() {
    return n.createElement('svg', { width: '20', height: '20', className: 'DocSearch-Search-Icon', viewBox: '0 0 20 20', 'aria-hidden': 'true' }, n.createElement('path', { d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }));
   }
   var d = ['translations'];
   n.forwardRef(function (e, t) {
    var r = e.translations,
     o = void 0 === r ? {} : r,
     i = l(e, d),
     a = o.buttonText,
     s = void 0 === a ? 'Search' : a,
     f = o.buttonAriaLabel,
     m = void 0 === f ? 'Search' : f,
     y = u((0, n.useState)(null), 2),
     b = y[0],
     g = y[1];
    return (
     (0, n.useEffect)(function () {
      'undefined' != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? g('\u2318') : g('Ctrl'));
     }, []),
     n.createElement('button', c({ type: 'button', className: 'DocSearch DocSearch-Button', 'aria-label': m }, i, { ref: t }), n.createElement('span', { className: 'DocSearch-Button-Container' }, n.createElement(v, null), n.createElement('span', { className: 'DocSearch-Button-Placeholder' }, s)), n.createElement('span', { className: 'DocSearch-Button-Keys' }, null !== b && n.createElement(n.Fragment, null, n.createElement(h, { reactsToKey: 'Ctrl' === b ? 'Ctrl' : 'Meta' }, 'Ctrl' === b ? n.createElement(p, null) : b), n.createElement(h, { reactsToKey: 'k' }, 'K'))))
    );
   });
   function h(e) {
    var t = e.reactsToKey,
     r = e.children,
     o = u((0, n.useState)(!1), 2),
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
   function y(e, t) {
    var r = void 0;
    return function () {
     for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
     r && clearTimeout(r),
      (r = setTimeout(function () {
       return e.apply(void 0, o);
      }, t));
    };
   }
   function b(e) {
    return e.reduce(function (e, t) {
     return e.concat(t);
    }, []);
   }
   var g = 0;
   function S(e) {
    return 0 === e.collections.length
     ? 0
     : e.collections.reduce(function (e, t) {
        return e + t.items.length;
       }, 0);
   }
   function O(e) {
    return e !== Object(e);
   }
   function w(e, t) {
    if (e === t) return !0;
    if (O(e) || O(t) || 'function' == typeof e || 'function' == typeof t) return e === t;
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var r = 0, n = Object.keys(e); r < n.length; r++) {
     var o = n[r];
     if (!(o in t)) return !1;
     if (!w(e[o], t[o])) return !1;
    }
    return !0;
   }
   var j = function () {},
    E = [{ segment: 'autocomplete-core', version: '1.9.3' }];
   function I(e) {
    var t = e.item,
     r = e.items;
    return {
     index: t.__autocomplete_indexName,
     items: [t],
     positions: [
      1 +
       r.findIndex(function (e) {
        return e.objectID === t.objectID;
       }),
     ],
     queryID: t.__autocomplete_queryID,
     algoliaSource: ['autocomplete'],
    };
   }
   function P(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   var D = ['items'],
    A = ['items'];
   function k(e) {
    return (
     (k =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     k(e)
    );
   }
   function C(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return _(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (e) {
       if ('string' == typeof e) return _(e, t);
       var r = Object.prototype.toString.call(e).slice(8, -1);
       return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _(e, t) : void 0;
      }
     })(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function _(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function x(e, t) {
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
   function N(e, t) {
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
   function T(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? N(Object(r), !0).forEach(function (t) {
         R(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : N(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function R(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== k(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== k(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === k(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function q(e) {
    return e.map(function (e) {
     var t = e.items,
      r = x(e, D);
     return T(
      T({}, r),
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
   function L(e) {
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
           l = !0,
           u = !1;
          try {
           if (((i = (r = r.call(e)).next), 0 === t)) {
            if (Object(r) !== r) return;
            l = !1;
           } else for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
          } catch (e) {
           (u = !0), (o = e);
          } finally {
           try {
            if (!l && null != r.return && ((a = r.return()), Object(a) !== a)) return;
           } finally {
            if (u) throw o;
           }
          }
          return c;
         }
        })(e, t) ||
        (function (e, t) {
         if (e) {
          if ('string' == typeof e) return P(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(e, t) : void 0;
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
      e.apply(void 0, [t].concat(C(r), [{ headers: a }]));
     } else e.apply(void 0, [t].concat(C(r)));
    }
    return {
     init: function (t, r) {
      e('init', { appId: t, apiKey: r });
     },
     setUserToken: function (t) {
      e('setUserToken', t);
     },
     clickedObjectIDsAfterSearch: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('clickedObjectIDsAfterSearch', q(t), t[0].items);
     },
     clickedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('clickedObjectIDs', q(t), t[0].items);
     },
     clickedFilters: function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
      r.length > 0 && e.apply(void 0, ['clickedFilters'].concat(r));
     },
     convertedObjectIDsAfterSearch: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('convertedObjectIDsAfterSearch', q(t), t[0].items);
     },
     convertedObjectIDs: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.length > 0 && i('convertedObjectIDs', q(t), t[0].items);
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
          n = x(t, A);
         return [].concat(
          C(e),
          C(
           (function (e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, r = [], n = 0; n < e.objectIDs.length; n += t) r.push(T(T({}, e), {}, { objectIDs: e.objectIDs.slice(n, n + t) }));
            return r;
           })(
            T(
             T({}, n),
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
   function M(e) {
    var t = e.items.reduce(function (e, t) {
     var r;
     return (e[t.__autocomplete_indexName] = (null !== (r = e[t.__autocomplete_indexName]) && void 0 !== r ? r : []).concat(t)), e;
    }, {});
    return Object.keys(t).map(function (e) {
     return { index: e, items: t[e], algoliaSource: ['autocomplete'] };
    });
   }
   function H(e) {
    return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID;
   }
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
   function B(e) {
    return (
     (function (e) {
      if (Array.isArray(e)) return U(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (e) {
       if ('string' == typeof e) return U(e, t);
       var r = Object.prototype.toString.call(e).slice(8, -1);
       return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? U(e, t) : void 0;
      }
     })(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function U(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function V(e, t) {
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
   function K(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? V(Object(r), !0).forEach(function (t) {
         J(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : V(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function J(e, t, r) {
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
   var $ = 'https://cdn.jsdelivr.net/npm/search-insights@'.concat('2.6.0', '/dist/search-insights.min.js'),
    z = y(function (e) {
     var t = e.onItemsChange,
      r = e.items,
      n = e.insights,
      o = e.state;
     t({
      insights: n,
      insightsEvents: M({ items: r }).map(function (e) {
       return K({ eventName: 'Items Viewed' }, e);
      }),
      state: o,
     });
    }, 400);
   function W(e) {
    var t = (function (e) {
      return K(
       {
        onItemsChange: function (e) {
         var t = e.insights,
          r = e.insightsEvents;
         t.viewedObjectIDs.apply(
          t,
          B(
           r.map(function (e) {
            return K(K({}, e), {}, { algoliaSource: [].concat(B(e.algoliaSource || []), ['autocomplete-internal']) });
           }),
          ),
         );
        },
        onSelect: function (e) {
         var t = e.insights,
          r = e.insightsEvents;
         t.clickedObjectIDsAfterSearch.apply(
          t,
          B(
           r.map(function (e) {
            return K(K({}, e), {}, { algoliaSource: [].concat(B(e.algoliaSource || []), ['autocomplete-internal']) });
           }),
          ),
         );
        },
        onActive: j,
       },
       e,
      );
     })(e),
     r = t.insightsClient,
     n = t.onItemsChange,
     o = t.onSelect,
     i = t.onActive,
     a = r;
    r ||
     ('undefined' != typeof window &&
      (function (e) {
       var t = e.window,
        r = t.AlgoliaAnalyticsObject || 'aa';
       'string' == typeof r && (a = t[r]),
        a ||
         ((t.AlgoliaAnalyticsObject = r),
         t[r] ||
          (t[r] = function () {
           t[r].queue || (t[r].queue = []);
           for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
           t[r].queue.push(n);
          }),
         (t[r].version = '2.6.0'),
         (a = t[r]),
         (function (e) {
          var t = '[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete';
          try {
           var r = e.document.createElement('script');
           (r.async = !0),
            (r.src = $),
            (r.onerror = function () {
             console.error(t);
            }),
            document.body.appendChild(r);
          } catch (e) {
           console.error(t);
          }
         })(t));
      })({ window: window }));
    var c = L(a),
     l = { current: [] },
     u = y(function (e) {
      var t = e.state;
      if (t.isOpen) {
       var r = t.collections
        .reduce(function (e, t) {
         return [].concat(B(e), B(t.items));
        }, [])
        .filter(H);
       w(
        l.current.map(function (e) {
         return e.objectID;
        }),
        r.map(function (e) {
         return e.objectID;
        }),
       ) || ((l.current = r), r.length > 0 && z({ onItemsChange: n, items: r, insights: c, state: t }));
      }
     }, 0);
    return {
     name: 'aa.algoliaInsightsPlugin',
     subscribe: function (e) {
      var t = e.setContext,
       r = e.onSelect,
       n = e.onActive;
      a('addAlgoliaAgent', 'insights-plugin'),
       t({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: !0 }, insights: c } }),
       r(function (e) {
        var t = e.item,
         r = e.state,
         n = e.event;
        H(t) && o({ state: r, event: n, insights: c, item: t, insightsEvents: [K({ eventName: 'Item Selected' }, I({ item: t, items: l.current }))] });
       }),
       n(function (e) {
        var t = e.item,
         r = e.state,
         n = e.event;
        H(t) && i({ state: r, event: n, insights: c, item: t, insightsEvents: [K({ eventName: 'Item Active' }, I({ item: t, items: l.current }))] });
       });
     },
     onStateChange: function (e) {
      var t = e.state;
      u({ state: t });
     },
     __autocomplete_pluginOptions: e,
    };
   }
   function Q(e, t) {
    var r = t;
    return {
     then: function (t, n) {
      return Q(e.then(X(t, r, e), X(n, r, e)), r);
     },
     catch: function (t) {
      return Q(e.catch(X(t, r, e)), r);
     },
     finally: function (t) {
      return (
       t && r.onCancelList.push(t),
       Q(
        e.finally(
         X(
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
   function Z(e) {
    return Q(e, { isCanceled: !1, onCancelList: [] });
   }
   function X(e, t, r) {
    return e
     ? function (r) {
        return t.isCanceled ? r : e(r);
       }
     : r;
   }
   function Y(e, t, r, n) {
    if (!r) return null;
    if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= r ? (null === n ? null : 0) : o;
   }
   function G(e, t) {
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
   function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? G(Object(r), !0).forEach(function (t) {
         te(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : G(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function te(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== re(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== re(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === re(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function re(e) {
    return (
     (re =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     re(e)
    );
   }
   function ne(e) {
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
   var oe = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
   function ie(e) {
    return (
     (ie =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     ie(e)
    );
   }
   function ae(e, t) {
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
   function ce(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== ie(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== ie(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === ie(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function le(e) {
    return (
     (le =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     le(e)
    );
   }
   function ue(e, t) {
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
   function se(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? ue(Object(r), !0).forEach(function (t) {
         fe(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ue(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function fe(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== le(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== le(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === le(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function me(e) {
    return (
     (me =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     me(e)
    );
   }
   function pe(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
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
   function de(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? ve(Object(r), !0).forEach(function (t) {
         he(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ve(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function he(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== me(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== me(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === me(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function ye(e, t) {
    var r,
     n = 'undefined' != typeof window ? window : {},
     o = e.plugins || [];
    return de(
     de(
      {
       debug: !1,
       openOnFocus: !1,
       placeholder: '',
       autoFocus: !1,
       defaultActiveItemId: null,
       stallThreshold: 300,
       insights: !1,
       environment: n,
       shouldPanelOpen: function (e) {
        return S(e.state) > 0;
       },
       reshape: function (e) {
        return e.sources;
       },
      },
      e,
     ),
     {},
     {
      id: null !== (r = e.id) && void 0 !== r ? r : 'autocomplete-'.concat(g++),
      plugins: o,
      initialState: de({ activeItemId: null, query: '', completion: null, collections: [], isOpen: !1, status: 'idle', context: {} }, e.initialState),
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
             if (Array.isArray(e)) return pe(e);
            })(e) ||
            (function (e) {
             if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
            })(e) ||
            (function (e, t) {
             if (e) {
              if ('string' == typeof e) return pe(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pe(e, t) : void 0;
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
                onActive: j,
                onResolve: j,
               };
               Object.keys(t).forEach(function (e) {
                t[e].__default = !0;
               });
               var n = ee(ee({}, t), e);
               return Promise.resolve(n);
              }),
            );
           });
          })(e, r);
         }),
       )
        .then(function (e) {
         return b(e);
        })
        .then(function (e) {
         return e.map(function (e) {
          return de(
           de({}, e),
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
      navigator: de(
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
   function be(e) {
    return (
     (be =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     be(e)
    );
   }
   function ge(e, t) {
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
   function Se(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? ge(Object(r), !0).forEach(function (t) {
         Oe(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ge(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Oe(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== be(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== be(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === be(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
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
   function je(e, t) {
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
   function Ee(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? je(Object(r), !0).forEach(function (t) {
         Ie(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : je(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Ie(e, t, r) {
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
     (function (e) {
      if (Array.isArray(e)) return De(e);
     })(e) ||
     (function (e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
     })(e) ||
     (function (e, t) {
      if (e) {
       if ('string' == typeof e) return De(e, t);
       var r = Object.prototype.toString.call(e).slice(8, -1);
       return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? De(e, t) : void 0;
      }
     })(e) ||
     (function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
     })()
    );
   }
   function De(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
   }
   function Ae(e) {
    return Boolean(e.execute);
   }
   function ke(e) {
    var t = e
     .reduce(function (e, t) {
      if (!Ae(t)) return e.push(t), e;
      var r = t.searchClient,
       n = t.execute,
       o = t.requesterId,
       i = t.requests,
       a = e.find(function (e) {
        return Ae(t) && Ae(e) && e.searchClient === r && Boolean(o) && e.requesterId === o;
       });
      if (a) {
       var c;
       (c = a.items).push.apply(c, Pe(i));
      } else {
       var l = { execute: n, requesterId: o, items: i, searchClient: r };
       e.push(l);
      }
      return e;
     }, [])
     .map(function (e) {
      if (!Ae(e)) return Promise.resolve(e);
      var t = e,
       r = t.execute,
       n = t.items;
      return r({ searchClient: t.searchClient, requests: n });
     });
    return Promise.all(t).then(function (e) {
     return b(e);
    });
   }
   function Ce(e) {
    return (
     (Ce =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Ce(e)
    );
   }
   var _e = ['event', 'nextState', 'props', 'query', 'refresh', 'store'];
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
   function Ne(e) {
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
       if ('object' !== Ce(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Ce(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Ce(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   var Re,
    qe,
    Le,
    Me = null,
    He =
     ((Re = -1),
     (qe = -1),
     (Le = void 0),
     function (e) {
      var t = ++Re;
      return Promise.resolve(e).then(function (e) {
       return Le && t < qe ? Le : ((qe = t), (Le = e), e);
      });
     });
   function Fe(e) {
    var t = e.event,
     r = e.nextState,
     n = void 0 === r ? {} : r,
     o = e.props,
     i = e.query,
     a = e.refresh,
     c = e.store,
     l = (function (e, t) {
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
     })(e, _e);
    Me && o.environment.clearTimeout(Me);
    var u = l.setCollections,
     s = l.setIsOpen,
     f = l.setQuery,
     m = l.setActiveItemId,
     p = l.setStatus;
    if ((f(i), m(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
     var v,
      d = c.getState().collections.map(function (e) {
       return Ne(Ne({}, e), {}, { items: [] });
      });
     p('idle'), u(d), s(null !== (v = n.isOpen) && void 0 !== v ? v : o.shouldPanelOpen({ state: c.getState() }));
     var h = Z(
      He(d).then(function () {
       return Promise.resolve();
      }),
     );
     return c.pendingRequests.add(h);
    }
    p('loading'),
     (Me = o.environment.setTimeout(function () {
      p('stalled');
     }, o.stallThreshold));
    var y = Z(
     He(
      o.getSources(Ne({ query: i, refresh: a, state: c.getState() }, l)).then(function (e) {
       return Promise.all(
        e.map(function (e) {
         return Promise.resolve(e.getItems(Ne({ query: i, refresh: a, state: c.getState() }, l))).then(function (t) {
          return (function (e, t, r) {
           if (((o = e), Boolean(null == o ? void 0 : o.execute))) {
            var n =
             'algolia' === e.requesterId
              ? Object.assign.apply(
                 Object,
                 [{}].concat(
                  Pe(
                   Object.keys(r.context).map(function (e) {
                    var t;
                    return null === (t = r.context[e]) || void 0 === t ? void 0 : t.__algoliaSearchParameters;
                   }),
                  ),
                 ),
                )
              : {};
            return Ee(
             Ee({}, e),
             {},
             {
              requests: e.queries.map(function (r) {
               return { query: 'algolia' === e.requesterId ? Ee(Ee({}, r), {}, { params: Ee(Ee({}, n), r.params) }) : r, sourceId: t, transformResponse: e.transformResponse };
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
        .then(ke)
        .then(function (t) {
         return (function (e, t, r) {
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
         })(t, e, c);
        })
        .then(function (e) {
         return (function (e) {
          var t = e.props,
           r = e.state,
           n = e.collections.reduce(function (e, t) {
            return Se(
             Se({}, e),
             {},
             Oe(
              {},
              t.source.sourceId,
              Se(
               Se({}, t.source),
               {},
               {
                getItems: function () {
                 return b(t.items);
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
          return b(t.reshape({ sourcesBySourceId: o, sources: Object.values(o), state: r }))
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
      p('idle'), u(e);
      var f = o.shouldPanelOpen({ state: c.getState() });
      s(null !== (r = n.isOpen) && void 0 !== r ? r : (o.openOnFocus && !i && f) || f);
      var m = ne(c.getState());
      if (null !== c.getState().activeItemId && m) {
       var v = m.item,
        d = m.itemInputValue,
        h = m.itemUrl,
        y = m.source;
       y.onActive(Ne({ event: t, item: v, itemInputValue: d, itemUrl: h, refresh: a, source: y, state: c.getState() }, l));
      }
     })
     .finally(function () {
      p('idle'), Me && o.environment.clearTimeout(Me);
     });
    return c.pendingRequests.add(y);
   }
   function Be(e) {
    return (
     (Be =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     Be(e)
    );
   }
   var Ue = ['event', 'props', 'refresh', 'store'];
   function Ve(e, t) {
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
   function Ke(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? Ve(Object(r), !0).forEach(function (t) {
         Je(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ve(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function Je(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== Be(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== Be(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === Be(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function $e(e) {
    return (
     ($e =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     $e(e)
    );
   }
   var ze = ['props', 'refresh', 'store'],
    We = ['inputElement', 'formElement', 'panelElement'],
    Qe = ['inputElement'],
    Ze = ['inputElement', 'maxLength'],
    Xe = ['sourceIndex'],
    Ye = ['sourceIndex'],
    Ge = ['item', 'source', 'sourceIndex'];
   function et(e, t) {
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
   function tt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? et(Object(r), !0).forEach(function (t) {
         rt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : et(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function rt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== $e(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== $e(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === $e(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function nt(e, t) {
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
   function ot(e) {
    var t = e.props,
     r = e.refresh,
     n = e.store,
     o = nt(e, ze),
     i = function (e, t) {
      return void 0 !== t ? ''.concat(e, '-').concat(t) : e;
     };
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
      return tt(
       {
        onTouchStart: a,
        onMouseDown: a,
        onTouchMove: function (e) {
         !1 !== n.getState().isOpen && r === t.environment.document.activeElement && e.target !== r && r.blur();
        },
       },
       nt(e, We),
      );
     },
     getRootProps: function (e) {
      return tt({ role: 'combobox', 'aria-expanded': n.getState().isOpen, 'aria-haspopup': 'listbox', 'aria-owns': n.getState().isOpen ? ''.concat(t.id, '-list') : void 0, 'aria-labelledby': ''.concat(t.id, '-label') }, e);
     },
     getFormProps: function (e) {
      return (
       e.inputElement,
       tt(
        {
         action: '',
         noValidate: !0,
         role: 'search',
         onSubmit: function (i) {
          var a;
          i.preventDefault(), t.onSubmit(tt({ event: i, refresh: r, state: n.getState() }, o)), n.dispatch('submit', null), null === (a = e.inputElement) || void 0 === a || a.blur();
         },
         onReset: function (i) {
          var a;
          i.preventDefault(), t.onReset(tt({ event: i, refresh: r, state: n.getState() }, o)), n.dispatch('reset', null), null === (a = e.inputElement) || void 0 === a || a.focus();
         },
        },
        nt(e, Qe),
       )
      );
     },
     getLabelProps: function (e) {
      var r = e || {},
       n = r.sourceIndex,
       o = nt(r, Xe);
      return tt({ htmlFor: ''.concat(i(t.id, n), '-input'), id: ''.concat(i(t.id, n), '-label') }, o);
     },
     getInputProps: function (e) {
      var i;
      function a(e) {
       (t.openOnFocus || Boolean(n.getState().query)) && Fe(tt({ event: e, props: t, query: n.getState().completion || n.getState().query, refresh: r, store: n }, o)), n.dispatch('focus', null);
      }
      var c = e || {},
       l = (c.inputElement, c.maxLength),
       u = void 0 === l ? 512 : l,
       s = nt(c, Ze),
       f = ne(n.getState()),
       m = (function (e) {
        return Boolean(e && e.match(oe));
       })((null === (i = t.environment.navigator) || void 0 === i ? void 0 : i.userAgent) || ''),
       p = null != f && f.itemUrl && !m ? 'go' : 'search';
      return tt(
       {
        'aria-autocomplete': 'both',
        'aria-activedescendant': n.getState().isOpen && null !== n.getState().activeItemId ? ''.concat(t.id, '-item-').concat(n.getState().activeItemId) : void 0,
        'aria-controls': n.getState().isOpen ? ''.concat(t.id, '-list') : void 0,
        'aria-labelledby': ''.concat(t.id, '-label'),
        value: n.getState().completion || n.getState().query,
        id: ''.concat(t.id, '-input'),
        autoComplete: 'off',
        autoCorrect: 'off',
        autoCapitalize: 'off',
        enterKeyHint: p,
        spellCheck: 'false',
        autoFocus: t.autoFocus,
        placeholder: t.placeholder,
        maxLength: u,
        type: 'search',
        onChange: function (e) {
         Fe(tt({ event: e, props: t, query: e.currentTarget.value.slice(0, u), refresh: r, store: n }, o));
        },
        onKeyDown: function (e) {
         !(function (e) {
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
           })(e, Ue);
          if ('ArrowUp' === t.key || 'ArrowDown' === t.key) {
           var a = function () {
             var e = r.environment.document.getElementById(''.concat(r.id, '-item-').concat(o.getState().activeItemId));
             e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1));
            },
            c = function () {
             var e = ne(o.getState());
             if (null !== o.getState().activeItemId && e) {
              var r = e.item,
               a = e.itemInputValue,
               c = e.itemUrl,
               l = e.source;
              l.onActive(Ke({ event: t, item: r, itemInputValue: a, itemUrl: c, refresh: n, source: l, state: o.getState() }, i));
             }
            };
           t.preventDefault(),
            !1 === o.getState().isOpen && (r.openOnFocus || Boolean(o.getState().query))
             ? Fe(Ke({ event: t, props: r, query: o.getState().query, refresh: n, store: o }, i)).then(function () {
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
           var l = ne(o.getState()),
            u = l.item,
            s = l.itemInputValue,
            f = l.itemUrl,
            m = l.source;
           if (t.metaKey || t.ctrlKey) void 0 !== f && (m.onSelect(Ke({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), r.navigator.navigateNewTab({ itemUrl: f, item: u, state: o.getState() }));
           else if (t.shiftKey) void 0 !== f && (m.onSelect(Ke({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), r.navigator.navigateNewWindow({ itemUrl: f, item: u, state: o.getState() }));
           else if (t.altKey);
           else {
            if (void 0 !== f) return m.onSelect(Ke({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i)), void r.navigator.navigate({ itemUrl: f, item: u, state: o.getState() });
            Fe(Ke({ event: t, nextState: { isOpen: !1 }, props: r, query: s, refresh: n, store: o }, i)).then(function () {
             m.onSelect(Ke({ event: t, item: u, itemInputValue: s, itemUrl: f, refresh: n, source: m, state: o.getState() }, i));
            });
           }
          }
         })(tt({ event: e, props: t, refresh: r, store: n }, o));
        },
        onFocus: a,
        onBlur: j,
        onClick: function (r) {
         e.inputElement !== t.environment.document.activeElement || n.getState().isOpen || a(r);
        },
       },
       s,
      );
     },
     getPanelProps: function (e) {
      return tt(
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
       n = r.sourceIndex,
       o = nt(r, Ye);
      return tt({ role: 'listbox', 'aria-labelledby': ''.concat(i(t.id, n), '-label'), id: ''.concat(i(t.id, n), '-list') }, o);
     },
     getItemProps: function (e) {
      var a = e.item,
       c = e.source,
       l = e.sourceIndex,
       u = nt(e, Ge);
      return tt(
       {
        id: ''.concat(i(t.id, l), '-item-').concat(a.__autocomplete_id),
        role: 'option',
        'aria-selected': n.getState().activeItemId === a.__autocomplete_id,
        onMouseMove: function (e) {
         if (a.__autocomplete_id !== n.getState().activeItemId) {
          n.dispatch('mousemove', a.__autocomplete_id);
          var t = ne(n.getState());
          if (null !== n.getState().activeItemId && t) {
           var i = t.item,
            c = t.itemInputValue,
            l = t.itemUrl,
            u = t.source;
           u.onActive(tt({ event: e, item: i, itemInputValue: c, itemUrl: l, refresh: r, source: u, state: n.getState() }, o));
          }
         }
        },
        onMouseDown: function (e) {
         e.preventDefault();
        },
        onClick: function (e) {
         var i = c.getItemInputValue({ item: a, state: n.getState() }),
          l = c.getItemUrl({ item: a, state: n.getState() });
         (l ? Promise.resolve() : Fe(tt({ event: e, nextState: { isOpen: !1 }, props: t, query: i, refresh: r, store: n }, o))).then(function () {
          c.onSelect(tt({ event: e, item: a, itemInputValue: i, itemUrl: l, refresh: r, source: c, state: n.getState() }, o));
         });
        },
       },
       u,
      );
     },
    };
   }
   function it(e) {
    return (
     (it =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     it(e)
    );
   }
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
         lt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : at(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function lt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== it(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== it(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === it(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function ut(e) {
    var t,
     r,
     n,
     o,
     i = e.plugins,
     a = e.options,
     c = null === (t = ((null === (r = a.__autocomplete_metadata) || void 0 === r ? void 0 : r.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment,
     l = c ? lt({}, c, Object.keys((null === (n = a.__autocomplete_metadata) || void 0 === n ? void 0 : n.options) || {})) : {};
    return {
     plugins: i.map(function (e) {
      return { name: e.name, options: Object.keys(e.__autocomplete_pluginOptions || []) };
     }),
     options: ct({ 'autocomplete-core': Object.keys(a) }, l),
     ua: E.concat((null === (o = a.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || []),
    };
   }
   function st(e) {
    var t,
     r = e.state;
    return !1 === r.isOpen || null === r.activeItemId ? null : (null === (t = ne(r)) || void 0 === t ? void 0 : t.itemInputValue) || null;
   }
   function ft(e) {
    return (
     (ft =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     ft(e)
    );
   }
   function mt(e, t) {
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
   function pt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? mt(Object(r), !0).forEach(function (t) {
         vt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mt(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function vt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== ft(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== ft(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === ft(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   var dt = function (e, t) {
    switch (t.type) {
     case 'setActiveItemId':
     case 'mousemove':
      return pt(pt({}, e), {}, { activeItemId: t.payload });
     case 'setQuery':
      return pt(pt({}, e), {}, { query: t.payload, completion: null });
     case 'setCollections':
      return pt(pt({}, e), {}, { collections: t.payload });
     case 'setIsOpen':
      return pt(pt({}, e), {}, { isOpen: t.payload });
     case 'setStatus':
      return pt(pt({}, e), {}, { status: t.payload });
     case 'setContext':
      return pt(pt({}, e), {}, { context: pt(pt({}, e.context), t.payload) });
     case 'ArrowDown':
      var r = pt(pt({}, e), {}, { activeItemId: t.payload.hasOwnProperty('nextActiveItemId') ? t.payload.nextActiveItemId : Y(1, e.activeItemId, S(e), t.props.defaultActiveItemId) });
      return pt(pt({}, r), {}, { completion: st({ state: r }) });
     case 'ArrowUp':
      var n = pt(pt({}, e), {}, { activeItemId: Y(-1, e.activeItemId, S(e), t.props.defaultActiveItemId) });
      return pt(pt({}, n), {}, { completion: st({ state: n }) });
     case 'Escape':
      return e.isOpen ? pt(pt({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : pt(pt({}, e), {}, { activeItemId: null, query: '', status: 'idle', collections: [] });
     case 'submit':
      return pt(pt({}, e), {}, { activeItemId: null, isOpen: !1, status: 'idle' });
     case 'reset':
      return pt(pt({}, e), {}, { activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null, status: 'idle', query: '' });
     case 'focus':
      return pt(pt({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }) });
     case 'blur':
      return t.props.debug ? e : pt(pt({}, e), {}, { isOpen: !1, activeItemId: null });
     case 'mouseleave':
      return pt(pt({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
     default:
      return 'The reducer action '.concat(JSON.stringify(t.type), ' is not supported.'), e;
    }
   };
   function ht(e) {
    return (
     (ht =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     ht(e)
    );
   }
   function yt(e, t) {
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
   function bt(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? yt(Object(r), !0).forEach(function (t) {
         gt(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yt(Object(r)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
   }
   function gt(e, t, r) {
    return (
     (t = (function (e) {
      var t = (function (e, t) {
       if ('object' !== ht(e) || null === e) return e;
       var r = e[Symbol.toPrimitive];
       if (void 0 !== r) {
        var n = r.call(e, 'string');
        if ('object' !== ht(n)) return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
       }
       return String(e);
      })(e);
      return 'symbol' === ht(t) ? t : String(t);
     })(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
     e
    );
   }
   function St(e) {
    var t = [],
     r = ye(e, t),
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
           ? ae(Object(r), !0).forEach(function (t) {
              ce(e, t, r[t]);
             })
           : Object.getOwnPropertyDescriptors
             ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
             : ae(Object(r)).forEach(function (t) {
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
     })(dt, r, function (e) {
      var t = e.prevState,
       n = e.state;
      r.onStateChange(bt({ prevState: t, state: n, refresh: a, navigator: r.navigator }, o));
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
          return se(
           se({}, e),
           {},
           {
            items: b(e.items).map(function (e) {
             return se(se({}, e), {}, { __autocomplete_id: r++ });
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
     i = ot(bt({ props: r, refresh: a, store: n, navigator: r.navigator }, o));
    function a() {
     return Fe(bt({ event: new Event('input'), nextState: { isOpen: n.getState().isOpen }, props: r, navigator: r.navigator, query: n.getState().query, refresh: a, store: n }, o));
    }
    if (
     e.insights &&
     !r.plugins.some(function (e) {
      return 'aa.algoliaInsightsPlugin' === e.name;
     })
    ) {
     var c = 'boolean' == typeof e.insights ? {} : e.insights;
     r.plugins.push(W(c));
    }
    return (
     r.plugins.forEach(function (e) {
      var n;
      return null === (n = e.subscribe) || void 0 === n
       ? void 0
       : n.call(
          e,
          bt(
           bt({}, o),
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
     }),
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
     })({ metadata: ut({ plugins: r.plugins, options: e }), environment: r.environment }),
     bt(bt({ refresh: a, navigator: r.navigator }, i), o)
    );
   }
   function Ot(e) {
    var t = e.translations,
     r = (void 0 === t ? {} : t).searchByText,
     o = void 0 === r ? 'Search by' : r;
    return n.createElement('a', { href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(window.location.hostname, '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch'), target: '_blank', rel: 'noopener noreferrer' }, n.createElement('span', { className: 'DocSearch-Label' }, o), n.createElement('svg', { width: '77', height: '19', 'aria-label': 'Algolia', role: 'img', id: 'Layer_1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 2196.2 500' }, n.createElement('defs', null, n.createElement('style', null, '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}')), n.createElement('path', { className: 'cls-2', d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z' }), n.createElement('rect', { className: 'cls-1', x: '1845.88', y: '104.73', width: '62.58', height: '277.9', rx: '5.9', ry: '5.9' }), n.createElement('path', { className: 'cls-2', d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z' }), n.createElement('path', { className: 'cls-2', d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z' }), n.createElement('path', { className: 'cls-2', d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z' }), n.createElement('path', { className: 'cls-2', d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z' }), n.createElement('path', { className: 'cls-2', d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z' }), n.createElement('path', { className: 'cls-2', d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z' }), n.createElement('path', { className: 'cls-1', d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z' })));
   }
   function wt(e) {
    return n.createElement('svg', { width: '15', height: '15', 'aria-label': e.ariaLabel, role: 'img' }, n.createElement('g', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.2' }, e.children));
   }
   function jt(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = r.selectText,
     i = void 0 === o ? 'to select' : o,
     a = r.selectKeyAriaLabel,
     c = void 0 === a ? 'Enter key' : a,
     l = r.navigateText,
     u = void 0 === l ? 'to navigate' : l,
     s = r.navigateUpKeyAriaLabel,
     f = void 0 === s ? 'Arrow up' : s,
     m = r.navigateDownKeyAriaLabel,
     p = void 0 === m ? 'Arrow down' : m,
     v = r.closeText,
     d = void 0 === v ? 'to close' : v,
     h = r.closeKeyAriaLabel,
     y = void 0 === h ? 'Escape key' : h,
     b = r.searchByText,
     g = void 0 === b ? 'Search by' : b;
    return n.createElement(n.Fragment, null, n.createElement('div', { className: 'DocSearch-Logo' }, n.createElement(Ot, { translations: { searchByText: g } })), n.createElement('ul', { className: 'DocSearch-Commands' }, n.createElement('li', null, n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(wt, { ariaLabel: c }, n.createElement('path', { d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3' }))), n.createElement('span', { className: 'DocSearch-Label' }, i)), n.createElement('li', null, n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(wt, { ariaLabel: p }, n.createElement('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' }))), n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(wt, { ariaLabel: f }, n.createElement('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' }))), n.createElement('span', { className: 'DocSearch-Label' }, u)), n.createElement('li', null, n.createElement('kbd', { className: 'DocSearch-Commands-Key' }, n.createElement(wt, { ariaLabel: y }, n.createElement('path', { d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956' }))), n.createElement('span', { className: 'DocSearch-Label' }, d))));
   }
   function Et(e) {
    var t = e.hit,
     r = e.children;
    return n.createElement('a', { href: t.url }, r);
   }
   function It() {
    return n.createElement('svg', { viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5' }, n.createElement('g', { fill: 'none', fillRule: 'evenodd' }, n.createElement('g', { transform: 'translate(1 1)', strokeWidth: '2' }, n.createElement('circle', { strokeOpacity: '.3', cx: '18', cy: '18', r: '18' }), n.createElement('path', { d: 'M36 18c0-9.94-8.06-18-18-18' }, n.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', from: '0 18 18', to: '360 18 18', dur: '1s', repeatCount: 'indefinite' })))));
   }
   function Pt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('g', { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0' }), n.createElement('path', { d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13' })));
   }
   function Dt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }));
   }
   function At() {
    return n.createElement('svg', { className: 'DocSearch-Hit-Select-Icon', width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('g', { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }), n.createElement('path', { d: 'M8 17l-6-6 6-6' })));
   }
   var kt = function () {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }));
   };
   function Ct(e) {
    switch (e.type) {
     case 'lvl1':
      return n.createElement(kt, null);
     case 'content':
      return n.createElement(xt, null);
     default:
      return n.createElement(_t, null);
    }
   }
   function _t() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }));
   }
   function xt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }));
   }
   function Nt() {
    return n.createElement('svg', { width: '20', height: '20', viewBox: '0 0 20 20' }, n.createElement('path', { d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z', stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }));
   }
   function Tt() {
    return n.createElement('svg', { width: '40', height: '40', viewBox: '0 0 20 20', fill: 'none', fillRule: 'evenodd', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0' }));
   }
   function Rt() {
    return n.createElement('svg', { width: '40', height: '40', viewBox: '0 0 20 20', fill: 'none', fillRule: 'evenodd', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }, n.createElement('path', { d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2' }));
   }
   function qt(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = r.titleText,
     i = void 0 === o ? 'Unable to fetch results' : o,
     a = r.helpText,
     c = void 0 === a ? 'You might want to check your network connection.' : a;
    return n.createElement('div', { className: 'DocSearch-ErrorScreen' }, n.createElement('div', { className: 'DocSearch-Screen-Icon' }, n.createElement(Tt, null)), n.createElement('p', { className: 'DocSearch-Title' }, i), n.createElement('p', { className: 'DocSearch-Help' }, c));
   }
   var Lt = ['translations'];
   function Mt(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = l(e, Lt),
     i = r.noResultsText,
     a = void 0 === i ? 'No results for' : i,
     c = r.suggestedQueryText,
     u = void 0 === c ? 'Try searching for' : c,
     f = r.reportMissingResultsText,
     m = void 0 === f ? 'Believe this query should return results?' : f,
     p = r.reportMissingResultsLinkText,
     v = void 0 === p ? 'Let us know.' : p,
     d = o.state.context.searchSuggestions;
    return n.createElement(
     'div',
     { className: 'DocSearch-NoResults' },
     n.createElement('div', { className: 'DocSearch-Screen-Icon' }, n.createElement(Rt, null)),
     n.createElement('p', { className: 'DocSearch-Title' }, a, ' "', n.createElement('strong', null, o.state.query), '"'),
     d &&
      d.length > 0 &&
      n.createElement(
       'div',
       { className: 'DocSearch-NoResults-Prefill-List' },
       n.createElement('p', { className: 'DocSearch-Help' }, u, ':'),
       n.createElement(
        'ul',
        null,
        d.slice(0, 3).reduce(function (e, t) {
         return [].concat(s(e), [
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
     o.getMissingResultsUrl && n.createElement('p', { className: 'DocSearch-Help' }, ''.concat(m, ' '), n.createElement('a', { href: o.getMissingResultsUrl({ query: o.state.query }), target: '_blank', rel: 'noopener noreferrer' }, v)),
    );
   }
   var Ht = ['hit', 'attribute', 'tagName'];
   function Ft(e, t) {
    return t.split('.').reduce(function (e, t) {
     return null != e && e[t] ? e[t] : null;
    }, e);
   }
   function Bt(e) {
    var t = e.hit,
     r = e.attribute,
     o = e.tagName,
     a = void 0 === o ? 'span' : o,
     c = l(e, Ht);
    return (0, n.createElement)(a, i(i({}, c), {}, { dangerouslySetInnerHTML: { __html: Ft(t, '_snippetResult.'.concat(r, '.value')) || Ft(t, r) } }));
   }
   function Ut(e) {
    return e.collection && 0 !== e.collection.items.length
     ? n.createElement(
        'section',
        { className: 'DocSearch-Hits' },
        n.createElement('div', { className: 'DocSearch-Hit-source' }, e.title),
        n.createElement(
         'ul',
         e.getListProps(),
         e.collection.items.map(function (t, r) {
          return n.createElement(Vt, c({ key: [e.title, t.objectID].join(':'), item: t, index: r }, e));
         }),
        ),
       )
     : null;
   }
   function Vt(e) {
    var t = e.item,
     r = e.index,
     o = e.renderIcon,
     i = e.renderAction,
     a = e.getItemProps,
     l = e.onItemClick,
     s = e.collection,
     f = e.hitComponent,
     m = u(n.useState(!1), 2),
     p = m[0],
     v = m[1],
     d = u(n.useState(!1), 2),
     h = d[0],
     y = d[1],
     b = n.useRef(null),
     g = f;
    return n.createElement(
     'li',
     c(
      {
       className: ['DocSearch-Hit', t.__docsearch_parent && 'DocSearch-Hit--Child', p && 'DocSearch-Hit--deleting', h && 'DocSearch-Hit--favoriting'].filter(Boolean).join(' '),
       onTransitionEnd: function () {
        b.current && b.current();
       },
      },
      a({
       item: t,
       source: s.source,
       onClick: function (e) {
        l(t, e);
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
       t.hierarchy[t.type] && 'lvl1' === t.type && n.createElement('div', { className: 'DocSearch-Hit-content-wrapper' }, n.createElement(Bt, { className: 'DocSearch-Hit-title', hit: t, attribute: 'hierarchy.lvl1' }), t.content && n.createElement(Bt, { className: 'DocSearch-Hit-path', hit: t, attribute: 'content' })),
       t.hierarchy[t.type] && ('lvl2' === t.type || 'lvl3' === t.type || 'lvl4' === t.type || 'lvl5' === t.type || 'lvl6' === t.type) && n.createElement('div', { className: 'DocSearch-Hit-content-wrapper' }, n.createElement(Bt, { className: 'DocSearch-Hit-title', hit: t, attribute: 'hierarchy.'.concat(t.type) }), n.createElement(Bt, { className: 'DocSearch-Hit-path', hit: t, attribute: 'hierarchy.lvl1' })),
       'content' === t.type && n.createElement('div', { className: 'DocSearch-Hit-content-wrapper' }, n.createElement(Bt, { className: 'DocSearch-Hit-title', hit: t, attribute: 'content' }), n.createElement(Bt, { className: 'DocSearch-Hit-path', hit: t, attribute: 'hierarchy.lvl1' })),
       i({
        item: t,
        runDeleteTransition: function (e) {
         v(!0), (b.current = e);
        },
        runFavoriteTransition: function (e) {
         y(!0), (b.current = e);
        },
       }),
      ),
     ),
    );
   }
   function Kt(e, t, r) {
    return e.reduce(function (e, n) {
     var o = t(n);
     return e.hasOwnProperty(o) || (e[o] = []), e[o].length < (r || 5) && e[o].push(n), e;
    }, {});
   }
   function Jt(e) {
    return e;
   }
   function $t(e) {
    return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
   }
   function zt() {}
   var Wt = /(<mark>|<\/mark>)/g,
    Qt = RegExp(Wt.source);
   function Zt(e) {
    var t,
     r,
     n = e;
    if (!n.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
    var o = ((n.__docsearch_parent ? (null === (t = n.__docsearch_parent) || void 0 === t || null === (t = t._highlightResult) || void 0 === t || null === (t = t.hierarchy) || void 0 === t ? void 0 : t.lvl0) : null === (r = e._highlightResult) || void 0 === r || null === (r = r.hierarchy) || void 0 === r ? void 0 : r.lvl0) || {}).value;
    return o && Qt.test(o) ? o.replace(Wt, '') : o;
   }
   function Xt(e) {
    return n.createElement(
     'div',
     { className: 'DocSearch-Dropdown-Container' },
     e.state.collections.map(function (t) {
      if (0 === t.items.length) return null;
      var r = Zt(t.items[0]);
      return n.createElement(
       Ut,
       c({}, e, {
        key: t.source.sourceId,
        title: r,
        collection: t,
        renderIcon: function (e) {
         var r,
          o = e.item,
          i = e.index;
         return n.createElement(n.Fragment, null, o.__docsearch_parent && n.createElement('svg', { className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54' }, n.createElement('g', { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }, o.__docsearch_parent !== (null === (r = t.items[i + 1]) || void 0 === r ? void 0 : r.__docsearch_parent) ? n.createElement('path', { d: 'M8 6v21M20 27H8.3' }) : n.createElement('path', { d: 'M8 6v42M20 27H8.3' }))), n.createElement('div', { className: 'DocSearch-Hit-icon' }, n.createElement(Ct, { type: o.type })));
        },
        renderAction: function () {
         return n.createElement('div', { className: 'DocSearch-Hit-action' }, n.createElement(At, null));
        },
       }),
      );
     }),
     e.resultsFooterComponent && n.createElement('section', { className: 'DocSearch-HitsFooter' }, n.createElement(e.resultsFooterComponent, { state: e.state })),
    );
   }
   var Yt = ['translations'];
   function Gt(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = l(e, Yt),
     i = r.recentSearchesTitle,
     a = void 0 === i ? 'Recent' : i,
     u = r.noRecentSearchesText,
     s = void 0 === u ? 'No recent searches' : u,
     f = r.saveRecentSearchButtonTitle,
     m = void 0 === f ? 'Save this search' : f,
     p = r.removeRecentSearchButtonTitle,
     v = void 0 === p ? 'Remove this search from history' : p,
     d = r.favoriteSearchesTitle,
     h = void 0 === d ? 'Favorite' : d,
     y = r.removeFavoriteSearchButtonTitle,
     b = void 0 === y ? 'Remove this search from favorites' : y;
    return 'idle' === o.state.status && !1 === o.hasCollections
     ? o.disableUserPersonalization
       ? null
       : n.createElement('div', { className: 'DocSearch-StartScreen' }, n.createElement('p', { className: 'DocSearch-Help' }, s))
     : !1 === o.hasCollections
       ? null
       : n.createElement(
          'div',
          { className: 'DocSearch-Dropdown-Container' },
          n.createElement(
           Ut,
           c({}, o, {
            title: a,
            collection: o.state.collections[0],
            renderIcon: function () {
             return n.createElement('div', { className: 'DocSearch-Hit-icon' }, n.createElement(Pt, null));
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
                 title: m,
                 type: 'submit',
                 onClick: function (e) {
                  e.preventDefault(),
                   e.stopPropagation(),
                   r(function () {
                    o.favoriteSearches.add(t), o.recentSearches.remove(t), o.refresh();
                   });
                 },
                },
                n.createElement(Nt, null),
               ),
              ),
              n.createElement(
               'div',
               { className: 'DocSearch-Hit-action' },
               n.createElement(
                'button',
                {
                 className: 'DocSearch-Hit-action-button',
                 title: v,
                 type: 'submit',
                 onClick: function (e) {
                  e.preventDefault(),
                   e.stopPropagation(),
                   i(function () {
                    o.recentSearches.remove(t), o.refresh();
                   });
                 },
                },
                n.createElement(Dt, null),
               ),
              ),
             );
            },
           }),
          ),
          n.createElement(
           Ut,
           c({}, o, {
            title: h,
            collection: o.state.collections[1],
            renderIcon: function () {
             return n.createElement('div', { className: 'DocSearch-Hit-icon' }, n.createElement(Nt, null));
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
                title: b,
                type: 'submit',
                onClick: function (e) {
                 e.preventDefault(),
                  e.stopPropagation(),
                  r(function () {
                   o.favoriteSearches.remove(t), o.refresh();
                  });
                },
               },
               n.createElement(Dt, null),
              ),
             );
            },
           }),
          ),
         );
   }
   var er = ['translations'],
    tr = n.memo(
     function (e) {
      var t = e.translations,
       r = void 0 === t ? {} : t,
       o = l(e, er);
      if ('error' === o.state.status) return n.createElement(qt, { translations: null == r ? void 0 : r.errorScreen });
      var i = o.state.collections.some(function (e) {
       return e.items.length > 0;
      });
      return o.state.query ? (!1 === i ? n.createElement(Mt, c({}, o, { translations: null == r ? void 0 : r.noResultsScreen })) : n.createElement(Xt, o)) : n.createElement(Gt, c({}, o, { hasCollections: i, translations: null == r ? void 0 : r.startScreen }));
     },
     function (e, t) {
      return 'loading' === t.state.status || 'stalled' === t.state.status;
     },
    ),
    rr = ['translations'];
   function nr(e) {
    var t = e.translations,
     r = void 0 === t ? {} : t,
     o = l(e, rr),
     i = r.resetButtonTitle,
     a = void 0 === i ? 'Clear the query' : i,
     u = r.resetButtonAriaLabel,
     s = void 0 === u ? 'Clear the query' : u,
     f = r.cancelButtonText,
     m = void 0 === f ? 'Cancel' : f,
     p = r.cancelButtonAriaLabel,
     d = void 0 === p ? 'Cancel' : p,
     h = r.searchInputLabel,
     y = void 0 === h ? 'Search' : h,
     b = o.getFormProps({ inputElement: o.inputRef.current }).onReset;
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
        onReset: b,
       },
       n.createElement('label', c({ className: 'DocSearch-MagnifierLabel' }, o.getLabelProps()), n.createElement(v, null), n.createElement('span', { className: 'DocSearch-VisuallyHiddenForAccessibility' }, y)),
       n.createElement('div', { className: 'DocSearch-LoadingIndicator' }, n.createElement(It, null)),
       n.createElement('input', c({ className: 'DocSearch-Input', ref: o.inputRef }, o.getInputProps({ inputElement: o.inputRef.current, autoFocus: o.autoFocus, maxLength: 64 }))),
       n.createElement('button', { type: 'reset', title: a, className: 'DocSearch-Reset', 'aria-label': s, hidden: !o.state.query }, n.createElement(Dt, null)),
      ),
      n.createElement('button', { className: 'DocSearch-Cancel', type: 'reset', 'aria-label': d, onClick: o.onClose }, m),
     )
    );
   }
   var or = ['_highlightResult', '_snippetResult'];
   function ir(e) {
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
      var t = e,
       r = (t._highlightResult, t._snippetResult, l(t, or)),
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
   function ar(e) {
    const t = `algoliasearch-client-js-${e.key}`;
    let r;
    const n = () => (void 0 === r && (r = e.localStorage || window.localStorage), r),
     o = () => JSON.parse(n().getItem(t) || '{}'),
     i = (e) => {
      n().setItem(t, JSON.stringify(e));
     };
    return {
     get: (t, r, n = { miss: () => Promise.resolve() }) =>
      Promise.resolve()
       .then(() => {
        (() => {
         const t = e.timeToLive ? 1e3 * e.timeToLive : null,
          r = o(),
          n = Object.fromEntries(Object.entries(r).filter(([, e]) => void 0 !== e.timestamp));
         if ((i(n), !t)) return;
         const a = Object.fromEntries(
          Object.entries(n).filter(([, e]) => {
           const r = new Date().getTime();
           return !(e.timestamp + t < r);
          }),
         );
         i(a);
        })();
        const r = JSON.stringify(t);
        return o()[r];
       })
       .then((e) => Promise.all([e ? e.value : r(), void 0 !== e]))
       .then(([e, t]) => Promise.all([e, t || n.miss(e)]))
       .then(([e]) => e),
     set: (e, r) =>
      Promise.resolve().then(() => {
       const i = o();
       return (i[JSON.stringify(e)] = { timestamp: new Date().getTime(), value: r }), n().setItem(t, JSON.stringify(i)), r;
      }),
     delete: (e) =>
      Promise.resolve().then(() => {
       const r = o();
       delete r[JSON.stringify(e)], n().setItem(t, JSON.stringify(r));
      }),
     clear: () =>
      Promise.resolve().then(() => {
       n().removeItem(t);
      }),
    };
   }
   function cr(e) {
    const t = [...e.caches],
     r = t.shift();
    return void 0 === r
     ? {
        get: (e, t, r = { miss: () => Promise.resolve() }) =>
         t()
          .then((e) => Promise.all([e, r.miss(e)]))
          .then(([e]) => e),
        set: (e, t) => Promise.resolve(t),
        delete: (e) => Promise.resolve(),
        clear: () => Promise.resolve(),
       }
     : { get: (e, n, o = { miss: () => Promise.resolve() }) => r.get(e, n, o).catch(() => cr({ caches: t }).get(e, n, o)), set: (e, n) => r.set(e, n).catch(() => cr({ caches: t }).set(e, n)), delete: (e) => r.delete(e).catch(() => cr({ caches: t }).delete(e)), clear: () => r.clear().catch(() => cr({ caches: t }).clear()) };
   }
   function lr(e = { serializable: !0 }) {
    let t = {};
    return {
     get(r, n, o = { miss: () => Promise.resolve() }) {
      const i = JSON.stringify(r);
      if (i in t) return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
      const a = n(),
       c = (o && o.miss) || (() => Promise.resolve());
      return a.then((e) => c(e)).then(() => a);
     },
     set: (r, n) => ((t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n), Promise.resolve(n)),
     delete: (e) => (delete t[JSON.stringify(e)], Promise.resolve()),
     clear: () => ((t = {}), Promise.resolve()),
    };
   }
   function ur(e) {
    let t = e.length - 1;
    for (; t > 0; t--) {
     const r = Math.floor(Math.random() * (t + 1)),
      n = e[t];
     (e[t] = e[r]), (e[r] = n);
    }
    return e;
   }
   function sr(e, t) {
    return t
     ? (Object.keys(t).forEach((r) => {
        e[r] = t[r](e);
       }),
       e)
     : e;
   }
   function fr(e, ...t) {
    let r = 0;
    return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
   }
   const mr = { WithinQueryParameters: 0, WithinHeaders: 1 };
   function pr(e, t) {
    const r = e || {},
     n = r.data || {};
    return (
     Object.keys(r).forEach((e) => {
      -1 === ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(e) && (n[e] = r[e]);
     }),
     { data: Object.entries(n).length > 0 ? n : void 0, timeout: r.timeout || t, headers: r.headers || {}, queryParameters: r.queryParameters || {}, cacheable: r.cacheable }
    );
   }
   const vr = { Read: 1, Write: 2, Any: 3 },
    dr = 1,
    hr = 3;
   function yr(e, t = dr) {
    return { ...e, status: t, lastUpdate: Date.now() };
   }
   function br(e) {
    return 'string' == typeof e ? { protocol: 'https', url: e, accept: vr.Any } : { protocol: e.protocol || 'https', url: e.url, accept: e.accept || vr.Any };
   }
   const gr = 'GET',
    Sr = 'POST';
   function Or(e, t, r, n) {
    const o = [],
     i = (function (e, t) {
      if (e.method === gr || (void 0 === e.data && void 0 === t.data)) return;
      const r = Array.isArray(e.data) ? e.data : { ...e.data, ...t.data };
      return JSON.stringify(r);
     })(r, n),
     a = (function (e, t) {
      const r = { ...e.headers, ...t.headers },
       n = {};
      return (
       Object.keys(r).forEach((e) => {
        const t = r[e];
        n[e.toLowerCase()] = t;
       }),
       n
      );
     })(e, n),
     c = r.method,
     l = r.method !== gr ? {} : { ...r.data, ...n.data },
     u = { 'x-algolia-agent': e.userAgent.value, ...e.queryParameters, ...l, ...n.queryParameters };
    let s = 0;
    const f = (t, l) => {
     const m = t.pop();
     if (void 0 === m) throw { name: 'RetryError', message: 'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.', transporterStackTrace: Ir(o) };
     const p = { data: i, headers: a, method: c, url: jr(m, r.path, u), connectTimeout: l(s, e.timeouts.connect), responseTimeout: l(s, n.timeout) },
      v = (e) => {
       const r = { request: p, response: e, host: m, triesLeft: t.length };
       return o.push(r), r;
      },
      d = {
       onSuccess: (e) =>
        (function (e) {
         try {
          return JSON.parse(e.content);
         } catch (t) {
          throw (function (e, t) {
           return { name: 'DeserializationError', message: e, response: t };
          })(t.message, e);
         }
        })(e),
       onRetry(r) {
        const n = v(r);
        return r.isTimedOut && s++, Promise.all([e.logger.info('Retryable failure', Pr(n)), e.hostsCache.set(m, yr(m, r.isTimedOut ? hr : 2))]).then(() => f(t, l));
       },
       onFail(e) {
        throw (
         (v(e),
         (function ({ content: e, status: t }, r) {
          let n = e;
          try {
           n = JSON.parse(e).message;
          } catch (e) {}
          return (function (e, t, r) {
           return { name: 'ApiError', message: e, status: t, transporterStackTrace: r };
          })(n, t, r);
         })(e, Ir(o)))
        );
       },
      };
     return e.requester.send(p).then((e) =>
      ((e, t) =>
       ((e) => {
        const t = e.status;
        return e.isTimedOut || (({ isTimedOut: e, status: t }) => !e && 0 == ~~t)(e) || (2 != ~~(t / 100) && 4 != ~~(t / 100));
       })(e)
        ? t.onRetry(e)
        : (({ status: e }) => 2 == ~~(e / 100))(e)
          ? t.onSuccess(e)
          : t.onFail(e))(e, d),
     );
    };
    return (function (e, t) {
     return Promise.all(t.map((t) => e.get(t, () => Promise.resolve(yr(t))))).then((e) => {
      const r = e.filter((e) =>
        (function (e) {
         return e.status === dr || Date.now() - e.lastUpdate > 12e4;
        })(e),
       ),
       n = e.filter((e) =>
        (function (e) {
         return e.status === hr && Date.now() - e.lastUpdate <= 12e4;
        })(e),
       ),
       o = [...r, ...n];
      return { getTimeout: (e, t) => (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t, statelessHosts: o.length > 0 ? o.map((e) => br(e)) : t };
     });
    })(e.hostsCache, t).then((e) => f([...e.statelessHosts].reverse(), e.getTimeout));
   }
   function wr(e) {
    const t = {
     value: `Algolia for JavaScript (${e})`,
     add(e) {
      const r = `; ${e.segment}${void 0 !== e.version ? ` (${e.version})` : ''}`;
      return -1 === t.value.indexOf(r) && (t.value = `${t.value}${r}`), t;
     },
    };
    return t;
   }
   function jr(e, t, r) {
    const n = Er(r);
    let o = `${e.protocol}://${e.url}/${'/' === t.charAt(0) ? t.substr(1) : t}`;
    return n.length && (o += `?${n}`), o;
   }
   function Er(e) {
    return Object.keys(e)
     .map((t) => {
      return fr('%s=%s', t, ((r = e[t]), '[object Object]' === Object.prototype.toString.call(r) || '[object Array]' === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]));
      var r;
     })
     .join('&');
   }
   function Ir(e) {
    return e.map((e) => Pr(e));
   }
   function Pr(e) {
    const t = e.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {};
    return { ...e, request: { ...e.request, headers: { ...e.request.headers, ...t } } };
   }
   const Dr = (e) => {
     const t = e.appId,
      r = (function (e, t, r) {
       const n = { 'x-algolia-api-key': r, 'x-algolia-application-id': t };
       return { headers: () => (e === mr.WithinHeaders ? n : {}), queryParameters: () => (e === mr.WithinQueryParameters ? n : {}) };
      })(void 0 !== e.authMode ? e.authMode : mr.WithinHeaders, t, e.apiKey),
      n = (function (e) {
       const { hostsCache: t, logger: r, requester: n, requestsCache: o, responsesCache: i, timeouts: a, userAgent: c, hosts: l, queryParameters: u, headers: s } = e,
        f = {
         hostsCache: t,
         logger: r,
         requester: n,
         requestsCache: o,
         responsesCache: i,
         timeouts: a,
         userAgent: c,
         headers: s,
         queryParameters: u,
         hosts: l.map((e) => br(e)),
         read(e, t) {
          const r = pr(t, f.timeouts.read),
           n = () =>
            Or(
             f,
             f.hosts.filter((e) => 0 != (e.accept & vr.Read)),
             e,
             r,
            );
          if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return n();
          const o = { request: e, mappedRequestOptions: r, transporter: { queryParameters: f.queryParameters, headers: f.headers } };
          return f.responsesCache.get(
           o,
           () =>
            f.requestsCache.get(o, () =>
             f.requestsCache
              .set(o, n())
              .then(
               (e) => Promise.all([f.requestsCache.delete(o), e]),
               (e) => Promise.all([f.requestsCache.delete(o), Promise.reject(e)]),
              )
              .then(([e, t]) => t),
            ),
           { miss: (e) => f.responsesCache.set(o, e) },
          );
         },
         write: (e, t) =>
          Or(
           f,
           f.hosts.filter((e) => 0 != (e.accept & vr.Write)),
           e,
           pr(t, f.timeouts.write),
          ),
        };
       return f;
      })({
       hosts: [
        { url: `${t}-dsn.algolia.net`, accept: vr.Read },
        { url: `${t}.algolia.net`, accept: vr.Write },
       ].concat(ur([{ url: `${t}-1.algolianet.com` }, { url: `${t}-2.algolianet.com` }, { url: `${t}-3.algolianet.com` }])),
       ...e,
       headers: { ...r.headers(), 'content-type': 'application/x-www-form-urlencoded', ...e.headers },
       queryParameters: { ...r.queryParameters(), ...e.queryParameters },
      }),
      o = {
       transporter: n,
       appId: t,
       addAlgoliaAgent(e, t) {
        n.userAgent.add({ segment: e, version: t });
       },
       clearCache: () => Promise.all([n.requestsCache.clear(), n.responsesCache.clear()]).then(() => {}),
      };
     return sr(o, e.methods);
    },
    Ar = (e) => (t, r) => (t.method === gr ? e.transporter.read(t, r) : e.transporter.write(t, r)),
    kr =
     (e) =>
     (t, r = {}) =>
      sr({ transporter: e.transporter, appId: e.appId, indexName: t }, r.methods),
    Cr = (e) => (t, r) => {
     const n = t.map((e) => ({ ...e, params: Er(e.params || {}) }));
     return e.transporter.read({ method: Sr, path: '1/indexes/*/queries', data: { requests: n }, cacheable: !0 }, r);
    },
    _r = (e) => (t, r) =>
     Promise.all(
      t.map((t) => {
       const { facetName: n, facetQuery: o, ...i } = t.params;
       return kr(e)(t.indexName, { methods: { searchForFacetValues: Tr } }).searchForFacetValues(n, o, { ...r, ...i });
      }),
     ),
    xr = (e) => (t, r, n) => e.transporter.read({ method: Sr, path: fr('1/answers/%s/prediction', e.indexName), data: { query: t, queryLanguages: r }, cacheable: !0 }, n),
    Nr = (e) => (t, r) => e.transporter.read({ method: Sr, path: fr('1/indexes/%s/query', e.indexName), data: { query: t }, cacheable: !0 }, r),
    Tr = (e) => (t, r, n) => e.transporter.read({ method: Sr, path: fr('1/indexes/%s/facets/%s/query', e.indexName, t), data: { facetQuery: r }, cacheable: !0 }, n),
    Rr = 1,
    qr = 2,
    Lr = 3;
   function Mr(e, t, r) {
    const n = {
     appId: e,
     apiKey: t,
     timeouts: { connect: 1, read: 2, write: 30 },
     requester: {
      send: (e) =>
       new Promise((t) => {
        const r = new XMLHttpRequest();
        r.open(e.method, e.url, !0), Object.keys(e.headers).forEach((t) => r.setRequestHeader(t, e.headers[t]));
        const n = (e, n) =>
          setTimeout(() => {
           r.abort(), t({ status: 0, content: n, isTimedOut: !0 });
          }, 1e3 * e),
         o = n(e.connectTimeout, 'Connection timeout');
        let i;
        (r.onreadystatechange = () => {
         r.readyState > r.OPENED && void 0 === i && (clearTimeout(o), (i = n(e.responseTimeout, 'Socket timeout')));
        }),
         (r.onerror = () => {
          0 === r.status && (clearTimeout(o), clearTimeout(i), t({ content: r.responseText || 'Network request failed', status: r.status, isTimedOut: !1 }));
         }),
         (r.onload = () => {
          clearTimeout(o), clearTimeout(i), t({ content: r.responseText, status: r.status, isTimedOut: !1 });
         }),
         r.send(e.data);
       }),
     },
     logger: ((o = Lr), { debug: (e, t) => (Rr >= o && console.debug(e, t), Promise.resolve()), info: (e, t) => (qr >= o && console.info(e, t), Promise.resolve()), error: (e, t) => (console.error(e, t), Promise.resolve()) }),
     responsesCache: lr(),
     requestsCache: lr({ serializable: !1 }),
     hostsCache: cr({ caches: [ar({ key: `4.19.1-${e}` }), lr()] }),
     userAgent: wr('4.19.1').add({ segment: 'Browser', version: 'lite' }),
     authMode: mr.WithinQueryParameters,
    };
    var o;
    return Dr({ ...n, ...r, methods: { search: Cr, searchForFacetValues: _r, multipleQueries: Cr, multipleSearchForFacetValues: _r, customRequest: Ar, initIndex: (e) => (t) => kr(e)(t, { methods: { search: Nr, searchForFacetValues: Tr, findAnswers: xr } }) } });
   }
   Mr.version = '4.19.1';
   var Hr = ['footer', 'searchBox'];
   function Fr(e) {
    var t = e.appId,
     r = e.apiKey,
     o = e.indexName,
     a = e.placeholder,
     s = void 0 === a ? 'Search docs' : a,
     f = e.searchParameters,
     m = e.maxResultsPerGroup,
     p = e.onClose,
     v = void 0 === p ? zt : p,
     d = e.transformItems,
     h = void 0 === d ? Jt : d,
     y = e.hitComponent,
     b = void 0 === y ? Et : y,
     g = e.resultsFooterComponent,
     S =
      void 0 === g
       ? function () {
          return null;
         }
       : g,
     O = e.navigator,
     w = e.initialScrollY,
     j = void 0 === w ? 0 : w,
     E = e.transformSearchClient,
     I = void 0 === E ? Jt : E,
     P = e.disableUserPersonalization,
     D = void 0 !== P && P,
     A = e.initialQuery,
     k = void 0 === A ? '' : A,
     C = e.translations,
     _ = void 0 === C ? {} : C,
     x = e.getMissingResultsUrl,
     N = e.insights,
     T = void 0 !== N && N,
     R = _.footer,
     q = _.searchBox,
     L = l(_, Hr),
     M = u(n.useState({ query: '', collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: 'idle' }), 2),
     H = M[0],
     F = M[1],
     B = n.useRef(null),
     U = n.useRef(null),
     V = n.useRef(null),
     K = n.useRef(null),
     J = n.useRef(null),
     $ = n.useRef(10),
     z = n.useRef('undefined' != typeof window ? window.getSelection().toString().slice(0, 64) : '').current,
     W = n.useRef(k || z).current,
     Q = (function (e, t, r) {
      return n.useMemo(
       function () {
        var n = Mr(e, t);
        return n.addAlgoliaAgent('docsearch', '3.6.1'), !1 === /docsearch.js \(.*\)/.test(n.transporter.userAgent.value) && n.addAlgoliaAgent('docsearch-react', '3.6.1'), r(n);
       },
       [e, t, r],
      );
     })(t, r, I),
     Z = n.useRef(ir({ key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(o), limit: 10 })).current,
     X = n.useRef(ir({ key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(o), limit: 0 === Z.getAll().length ? 7 : 4 })).current,
     Y = n.useCallback(
      function (e) {
       if (!D) {
        var t = 'content' === e.type ? e.__docsearch_parent : e;
        t &&
         -1 ===
          Z.getAll().findIndex(function (e) {
           return e.objectID === t.objectID;
          }) &&
         X.add(t);
       }
      },
      [Z, X, D],
     ),
     G = n.useCallback(
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
       return St({
        id: 'docsearch',
        defaultActiveItemId: 0,
        placeholder: s,
        openOnFocus: !0,
        initialState: { query: W, context: { searchSuggestions: [] } },
        insights: T,
        navigator: O,
        onStateChange: function (e) {
         F(e.state);
        },
        getSources: function (e) {
         var n = e.query,
          a = e.state,
          c = e.setContext,
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
                Y(t), $t(r) || v();
               },
               getItemUrl: function (e) {
                return e.item.url;
               },
               getItems: function () {
                return X.getAll();
               },
              },
              {
               sourceId: 'favoriteSearches',
               onSelect: function (e) {
                var t = e.item,
                 r = e.event;
                Y(t), $t(r) || v();
               },
               getItemUrl: function (e) {
                return e.item.url;
               },
               getItems: function () {
                return Z.getAll();
               },
              },
             ];
         var u = Boolean(T);
         return Q.search([{ query: n, indexName: o, params: i({ attributesToRetrieve: ['hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'hierarchy.lvl4', 'hierarchy.lvl5', 'hierarchy.lvl6', 'content', 'type', 'url'], attributesToSnippet: ['hierarchy.lvl1:'.concat($.current), 'hierarchy.lvl2:'.concat($.current), 'hierarchy.lvl3:'.concat($.current), 'hierarchy.lvl4:'.concat($.current), 'hierarchy.lvl5:'.concat($.current), 'hierarchy.lvl6:'.concat($.current), 'content:'.concat($.current)], snippetEllipsisText: '\u2026', highlightPreTag: '<mark>', highlightPostTag: '</mark>', hitsPerPage: 20, clickAnalytics: u }, f) }])
          .catch(function (e) {
           throw ('RetryError' === e.name && l('error'), e);
          })
          .then(function (e) {
           var n = e.results[0],
            l = n.hits,
            s = n.nbHits,
            f = Kt(
             l,
             function (e) {
              return Zt(e);
             },
             m,
            );
           a.context.searchSuggestions.length < Object.keys(f).length && c({ searchSuggestions: Object.keys(f) }), c({ nbHits: s });
           var p = {};
           return (
            u && (p = { __autocomplete_indexName: o, __autocomplete_queryID: n.queryID, __autocomplete_algoliaCredentials: { appId: t, apiKey: r } }),
            Object.values(f).map(function (e, t) {
             return {
              sourceId: 'hits'.concat(t),
              onSelect: function (e) {
               var t = e.item,
                r = e.event;
               Y(t), $t(r) || v();
              },
              getItemUrl: function (e) {
               return e.item.url;
              },
              getItems: function () {
               return Object.values(
                Kt(
                 e,
                 function (e) {
                  return e.hierarchy.lvl1;
                 },
                 m,
                ),
               )
                .map(h)
                .map(function (e) {
                 return e.map(function (t) {
                  var r = null,
                   n = e.find(function (e) {
                    return 'lvl1' === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1;
                   });
                  return 'lvl1' !== t.type && n && (r = n), i(i({}, t), {}, { __docsearch_parent: r }, p);
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
      [o, f, m, Q, v, X, Z, Y, W, s, O, h, D, T, t, r],
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
     })({ getEnvironmentProps: te, panelElement: K.current, formElement: V.current, inputElement: J.current }),
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
     })({ container: B.current }),
     n.useEffect(function () {
      return (
       document.body.classList.add('DocSearch--active'),
       function () {
        var e, t;
        document.body.classList.remove('DocSearch--active'), null === (e = (t = window).scrollTo) || void 0 === e || e.call(t, 0, j);
       }
      );
     }, []),
     n.useEffect(function () {
      window.matchMedia('(max-width: 768px)').matches && ($.current = 5);
     }, []),
     n.useEffect(
      function () {
       K.current && (K.current.scrollTop = 0);
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
      c({ ref: B }, re({ 'aria-expanded': !0 }), {
       className: ['DocSearch', 'DocSearch-Container', 'stalled' === H.status && 'DocSearch-Container--Stalled', 'error' === H.status && 'DocSearch-Container--Errored'].filter(Boolean).join(' '),
       role: 'button',
       tabIndex: 0,
       onMouseDown: function (e) {
        e.target === e.currentTarget && v();
       },
      }),
      n.createElement(
       'div',
       { className: 'DocSearch-Modal', ref: U },
       n.createElement('header', { className: 'DocSearch-SearchBar', ref: V }, n.createElement(nr, c({}, ee, { state: H, autoFocus: 0 === W.length, inputRef: J, isFromSelection: Boolean(W) && W === z, translations: q, onClose: v }))),
       n.createElement(
        'div',
        { className: 'DocSearch-Dropdown', ref: K },
        n.createElement(
         tr,
         c({}, ee, {
          indexName: o,
          state: H,
          hitComponent: b,
          resultsFooterComponent: S,
          disableUserPersonalization: D,
          recentSearches: X,
          favoriteSearches: Z,
          inputRef: J,
          translations: L,
          getMissingResultsUrl: x,
          onItemClick: function (e, t) {
           G(e), Y(e), $t(t) || v();
          },
         }),
        ),
       ),
       n.createElement('footer', { className: 'DocSearch-Footer' }, n.createElement(jt, { translations: R })),
      ),
     )
    );
   }
  },
 },
]);
